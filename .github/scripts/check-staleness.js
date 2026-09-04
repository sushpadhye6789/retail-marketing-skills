#!/usr/bin/env node
/**
 * Find skills tagged volatility: dated whose last_verified date is past the
 * review window, and print a Markdown list for the staleness-check workflow
 * to post as a GitHub issue.
 *
 * This script only reads and reports — it never writes to a skill file.
 * See AGENTS.md's "Skill Freshness" section for why: an unreviewed
 * auto-refresh write path into 86 skill files means one bad research pass
 * silently corrupts content every other skill and every user depends on.
 * Flag for a human to review and refresh; never auto-commit the fix.
 */

const fs = require("fs");
const path = require("path");

const SKILLS_DIR = "skills";
const REVIEW_WINDOW_DAYS = Number(process.env.REVIEW_WINDOW_DAYS || 90);

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const frontmatter = {};
  for (const line of match[1].split("\n")) {
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) continue;
    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (value) frontmatter[key] = value;
  }
  return frontmatter;
}

function daysSince(dateStr) {
  const then = new Date(dateStr + "T00:00:00Z");
  if (isNaN(then.getTime())) return null;
  const now = new Date();
  return Math.floor((now - then) / (1000 * 60 * 60 * 24));
}

const skillDirs = fs
  .readdirSync(SKILLS_DIR, { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => e.name)
  .sort();

const stale = [];
const missingDate = [];

for (const name of skillDirs) {
  const skillFile = path.join(SKILLS_DIR, name, "SKILL.md");
  if (!fs.existsSync(skillFile)) continue;
  const fm = parseFrontmatter(fs.readFileSync(skillFile, "utf8"));
  if (fm.volatility !== "dated") continue;

  if (!fm.last_verified) {
    missingDate.push(name);
    continue;
  }
  const age = daysSince(fm.last_verified);
  if (age === null) {
    missingDate.push(name);
  } else if (age > REVIEW_WINDOW_DAYS) {
    stale.push({ name, last_verified: fm.last_verified, age });
  }
}

if (stale.length === 0 && missingDate.length === 0) {
  console.log("NONE");
  process.exit(0);
}

stale.sort((a, b) => b.age - a.age);

let body = `Skills tagged \`volatility: dated\` that are past the ${REVIEW_WINDOW_DAYS}-day review window, or missing a \`last_verified\` date entirely. This is a **flag for human review, not an auto-fix** — see \`AGENTS.md\`'s Skill Freshness section for why nothing here gets auto-committed.\n\n`;

if (stale.length > 0) {
  body += `## Past review window (${REVIEW_WINDOW_DAYS}+ days since last_verified)\n\n`;
  body += `| Skill | Last verified | Days ago |\n|---|---|---|\n`;
  for (const s of stale) {
    body += `| \`${s.name}\` | ${s.last_verified} | ${s.age} |\n`;
  }
  body += "\n";
}

if (missingDate.length > 0) {
  body += `## Tagged \`dated\` but missing or malformed \`last_verified\`\n\n`;
  for (const name of missingDate) {
    body += `- \`${name}\`\n`;
  }
  body += "\n";
}

body += `**To close a line item:** review the skill's time-sensitive content, update it if stale, and bump \`last_verified\` to today's date in a normal PR — same review process as any other skill change. This issue will stop listing a skill once its \`last_verified\` date is current.`;

console.log(body);
