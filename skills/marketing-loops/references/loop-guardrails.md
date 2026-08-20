# Loop Guardrails & Compliance

Loops act on a schedule, often on customer data, sometimes with money or a public voice. This reference consolidates the safety rules that keep autonomous loops from doing harm. Apply it to every loop that sends, spends, publishes, or touches personal data.

## The two-tier action model

Classify every action a loop can take:

**Tier 1 — Autonomous-safe** (a loop may do these unattended):
read data, analyze, diff, score, **draft**, and **stage** work for review.

**Tier 2 — Gated** (require a human checkpoint by default):
**spend** money, **shift budget**, **send** messages, **publish** anything public, **delete/suppress** records, **change** live account settings.

A Tier-2 action may run without a per-action human check only if the user has **explicitly authorized** it *and* it's bounded by caps + an allowlist (below). Absent that, the loop stages a draft and a human approves.

## Goodhart's Law guardrail

Any loop that repeatedly optimizes toward a metric will eventually find the cheapest way to move that metric, not the outcome it stands for. That's a guardrail issue, not just a design nicety: a loop that's "working" (metric moving) while quietly doing harm (revenue down, list quality down, brand damaged) is exactly the failure mode guardrails exist to catch — and it's easy to miss because nothing looks broken.

- **Pair every optimized metric with a harm-check metric.** Ad loops: ROAS/revenue alongside CTR/CPA. Content loops: engaged time or conversions alongside word count/publish cadence. Backlink loops: referring-domain quality alongside link count. Review-harvest loops: authenticity/regulator compliance (ACCC in Australia, Commerce Commission in NZ, FTC in the US) alongside review count.
- **Treat a metric moving suspiciously fast as a signal to check for gaming, not a win to report.** A sudden favorable swing is more often a shortcut than a breakthrough.
- **Escalate instead of self-correcting** when the optimized metric and its harm-check metric diverge (metric up, outcome flat or down) — this belongs on the always-escalate list below, not something the loop tries to fix on its own.

## Spend guardrails (ad-fatigue, paid-search, retargeting, expansion)

- **Hard caps**: a daily/weekly spend ceiling the loop can never exceed; halt and alert if approached.
- **Per-run change limit**: cap how much budget can move in one run (e.g., ≤20%), so a bad read can't reallocate everything.
- **Allowlist**: only specified accounts/campaigns are eligible for autonomous changes; everything else is staged.
- **Directional guardrails**: judge paid changes on revenue/ROAS, not just CTR/CPA — never optimize a proxy metric into a revenue loss (the Goodhart's Law guardrail above, applied to spend).

## Publish & send guardrails (email, social, PR, community, reviews)

- **Default to a staging queue** + human approval for anything public or outbound. Auto-*drafting* is fine; auto-*publishing* is not, unless explicitly authorized.
- **Volume caps**: per-run and per-recipient limits so a loop can't blast a list or over-post a channel.
- **Suppression first**: always check suppression/unsubscribe/do-not-contact lists before sending.
- **No auto-posting where detection/ToS bites**: owned social, press pitches, and community replies are staged for a human (bot detection + brand risk).

## Compliance

Match each rule to the loops it governs:

- **Spam Act 2003 (AU) / Unsolicited Electronic Messages Act 2007 (NZ), alongside CAN-SPAM (US) / CASL (Canada) (email/SMS loops — lifecycle, re-engagement, churn, trial, dunning, referral)**: honor unsubscribes immediately and permanently; include a working unsubscribe + accurate sender identification; don't email/text without consent or a lawful basis — Australia and NZ both default to requiring opt-in consent, stricter than the US's opt-out model; scrub against suppression every send.
- **Privacy Act 1988 (AU) / Privacy Act 2020 (NZ), alongside GDPR / CCPA elsewhere (any loop touching personal data)**: process on a lawful basis; get consent where the applicable regime requires it; honor deletion and opt-out requests; minimize data pulled and retained; don't repurpose data beyond its collected purpose.
- **ACCC / Ad Standards (AU), ASA (NZ), alongside the FTC (US) and equivalents elsewhere (review-and-UGC-harvest, referral, social)**: disclose material connections and incentives (#ad, "I was compensated"); only use testimonials with permission; no fabricated or cherry-picked-to-mislead claims.
- **Platform ToS (social-listening, community-engagement, review-site-management, scraping-based loops)**: respect rate limits and automation rules; follow review-platform response policies; don't scrape or auto-act where prohibited.

When a loop can't confirm consent, permission, or ToS-compatibility, its stop condition is **don't act** — stage for a human instead.

## PII handling

- Don't log raw PII in loop **state** or **run logs** — use internal IDs or hashes.
- Pull the minimum personal data needed to make the decision; don't hoard it in state.
- Keep exports and drafts out of shared/synced locations unless intended.

## Always-escalate list

These never run fully autonomously — route to a human regardless of authorization:

- Negative or crisis brand mentions; responses to complaints or legal/medical/financial-sensitive issues.
- Newsjacking angles (see the veto list in the catalog) — human approval before any pitch/post.
- High-value or strategic accounts (enterprise, at-risk logos).
- Anomalies in **revenue** or **ad spend** — flag immediately, don't self-correct.
- Anything that would delete data or contact a large audience at once.

## Kill switch

Every scheduled loop needs a manual off switch, and you should know how to stop **all** loops fast (disable the schedule / cron, or a global flag the loop bodies check). Document it where the loops are scheduled. A loop you can't stop quickly is a liability.

## Pre-launch guardrail checklist

Before scheduling any loop that sends, spends, publishes, or touches personal data:

- [ ] Every optimized metric has a paired harm-check metric, and divergence between them escalates instead of self-correcting.
- [ ] Every action is classified Tier 1 (auto) or Tier 2 (gated).
- [ ] Tier-2 actions are staged for approval — or bounded by explicit authorization + caps + allowlist.
- [ ] Spend loops have a hard cap and a per-run change limit.
- [ ] Send loops check suppression/unsubscribe and have volume caps.
- [ ] Applicable compliance rules (Spam Act/Privacy Act in AU, Unsolicited Electronic Messages Act/Privacy Act in NZ, and CAN-SPAM/GDPR/FTC/ToS elsewhere) are satisfied, with "don't act" as the fallback.
- [ ] No raw PII in state or logs.
- [ ] The always-escalate cases route to a human.
- [ ] There's a documented kill switch.
