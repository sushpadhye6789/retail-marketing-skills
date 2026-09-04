#!/usr/bin/env node
/**
 * Statistical significance calculator for A/B test analysis.
 * Zero dependencies — pure Node.js, same convention as tools/clis/.
 *
 * Two modes:
 *   proportions — the common case: conversion rate, click rate, any binary
 *     outcome. Runs a two-proportion z-test.
 *   means — a continuous metric (AOV, session duration, items per order).
 *     Runs BOTH a bootstrap confidence interval and a Mann-Whitney U test,
 *     and reports both, because retail metrics like AOV are frequently
 *     right-skewed (a few large orders pull the mean) — the t-test's
 *     normality assumption breaks down exactly where it matters most. If
 *     the two methods disagree, that disagreement is itself the signal:
 *     trust the Mann-Whitney read over a bootstrap mean CI when the data
 *     is visibly skewed (see README below for why).
 *
 * Usage:
 *   node significance.js proportions --control-conversions 120 --control-visitors 4000 \
 *     --variant-conversions 145 --variant-visitors 4020
 *
 *   node significance.js means --control 42,38,55,... --variant 48,51,40,...
 *     (comma-separated raw values, no spaces, or --control-file path.csv
 *     with one number per line)
 *
 * Output: JSON to stdout — pipe through `| jq` or read directly.
 */

const args = process.argv.slice(2);
const mode = args[0];

function getFlag(name, fallback) {
  const i = args.indexOf(`--${name}`);
  if (i === -1 || i === args.length - 1) return fallback;
  return args[i + 1];
}

function num(name) {
  const v = getFlag(name);
  if (v === undefined) {
    console.error(JSON.stringify({ error: `--${name} is required` }));
    process.exit(1);
  }
  return Number(v);
}

function readSeries(flagPrefix) {
  const fileFlag = getFlag(`${flagPrefix}-file`);
  if (fileFlag) {
    const fs = require("fs");
    return fs
      .readFileSync(fileFlag, "utf8")
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean)
      .map(Number);
  }
  const inline = getFlag(flagPrefix);
  if (!inline) {
    console.error(JSON.stringify({ error: `--${flagPrefix} or --${flagPrefix}-file is required` }));
    process.exit(1);
  }
  return inline.split(",").map(Number);
}

// --- Standard normal CDF (Abramowitz & Stegun 7.1.26 approximation) ---
function normalCdf(z) {
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989423 * Math.exp((-z * z) / 2);
  let p =
    d *
    t *
    (0.3193815 +
      t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  if (z > 0) p = 1 - p;
  return p;
}

function twoProportionZTest({ c1, n1, c2, n2 }) {
  const p1 = c1 / n1;
  const p2 = c2 / n2;
  const pPooled = (c1 + c2) / (n1 + n2);
  const se = Math.sqrt(pPooled * (1 - pPooled) * (1 / n1 + 1 / n2));
  const z = (p2 - p1) / se;
  const pValue = Math.min(1, 2 * (1 - normalCdf(Math.abs(z))));

  // 95% CI on the absolute difference (unpooled SE, standard for a CI)
  const seDiff = Math.sqrt((p1 * (1 - p1)) / n1 + (p2 * (1 - p2)) / n2);
  const diff = p2 - p1;
  const ciLow = diff - 1.96 * seDiff;
  const ciHigh = diff + 1.96 * seDiff;

  return {
    control_rate: p1,
    variant_rate: p2,
    relative_lift: p1 === 0 ? null : (p2 - p1) / p1,
    absolute_diff: diff,
    z_score: z,
    p_value: pValue,
    significant_at_95: pValue < 0.05,
    diff_95_ci: [ciLow, ciHigh],
  };
}

// --- Bootstrap CI on the difference of means ---
function bootstrapDiffCI(control, variant, iterations = 10000) {
  const mean = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
  const sample = (arr) => {
    const out = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
      out[i] = arr[Math.floor(Math.random() * arr.length)];
    }
    return out;
  };
  const diffs = new Array(iterations);
  for (let i = 0; i < iterations; i++) {
    diffs[i] = mean(sample(variant)) - mean(sample(control));
  }
  diffs.sort((a, b) => a - b);
  const lo = diffs[Math.floor(iterations * 0.025)];
  const hi = diffs[Math.floor(iterations * 0.975)];
  return {
    control_mean: mean(control),
    variant_mean: mean(variant),
    diff_mean: mean(variant) - mean(control),
    diff_95_ci: [lo, hi],
    significant_at_95: lo > 0 || hi < 0,
    iterations,
  };
}

// --- Mann-Whitney U test (rank-based, no normality assumption) ---
function mannWhitneyU(control, variant) {
  const n1 = control.length;
  const n2 = variant.length;
  const combined = [
    ...control.map((v) => ({ v, group: "c" })),
    ...variant.map((v) => ({ v, group: "v" })),
  ].sort((a, b) => a.v - b.v);

  // Assign ranks, averaging ties
  const ranks = new Array(combined.length);
  let i = 0;
  while (i < combined.length) {
    let j = i;
    while (j + 1 < combined.length && combined[j + 1].v === combined[i].v) j++;
    const avgRank = (i + 1 + j + 1) / 2;
    for (let k = i; k <= j; k++) ranks[k] = avgRank;
    i = j + 1;
  }

  let rankSumControl = 0;
  combined.forEach((item, idx) => {
    if (item.group === "c") rankSumControl += ranks[idx];
  });

  const uControl = rankSumControl - (n1 * (n1 + 1)) / 2;
  const uVariant = n1 * n2 - uControl;
  const u = Math.min(uControl, uVariant);

  const meanU = (n1 * n2) / 2;
  const sdU = Math.sqrt((n1 * n2 * (n1 + n2 + 1)) / 12);
  const z = (u - meanU) / sdU;
  const pValue = Math.min(1, 2 * (1 - normalCdf(Math.abs(z))));

  return {
    u_statistic: u,
    z_score: z,
    p_value: pValue,
    significant_at_95: pValue < 0.05,
  };
}

if (mode === "proportions") {
  const result = twoProportionZTest({
    c1: num("control-conversions"),
    n1: num("control-visitors"),
    c2: num("variant-conversions"),
    n2: num("variant-visitors"),
  });
  console.log(JSON.stringify({ mode: "proportions", ...result }, null, 2));
} else if (mode === "means") {
  const control = readSeries("control");
  const variant = readSeries("variant");
  if (control.length < 2 || variant.length < 2) {
    console.error(JSON.stringify({ error: "Need at least 2 data points per group" }));
    process.exit(1);
  }
  const bootstrap = bootstrapDiffCI(control, variant);
  const mw = mannWhitneyU(control, variant);
  const agree = bootstrap.significant_at_95 === mw.significant_at_95;
  console.log(
    JSON.stringify(
      {
        mode: "means",
        sample_sizes: { control: control.length, variant: variant.length },
        bootstrap,
        mann_whitney: mw,
        methods_agree: agree,
        note: agree
          ? "Both methods agree — trust the read."
          : "Methods disagree, likely a skewed distribution (a few large values pulling the mean). Trust Mann-Whitney's rank-based read over the bootstrap mean CI, and report the mean difference alongside it for context, not as the headline number.",
      },
      null,
      2
    )
  );
} else {
  console.error(
    JSON.stringify({
      error: "First argument must be 'proportions' or 'means'",
      usage: [
        "node significance.js proportions --control-conversions N --control-visitors N --variant-conversions N --variant-visitors N",
        "node significance.js means --control 1,2,3 --variant 4,5,6",
      ],
    })
  );
  process.exit(1);
}
