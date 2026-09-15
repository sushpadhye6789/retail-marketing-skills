# AI Marketing Specialist Operating Manual

## Business & Market Context
- **Market Segment:** Retail & E-commerce Marketing Frameworks
- **Primary Audience:** Retail strategists, trade marketers, channel partners, and brand managers
- **Tone & Style:** Authoritative, clear, metric-driven, actionable (eliminate vague buzzwords like "game-changer" or "synergy")

## Execution Protocol
1. **Plan First:** Always explain the underlying strategy before producing full-length collateral or campaigns.
2. **Data Integrity:** Verify currency, tax standards (e.g., GST inclusion/exclusion), and profit margin formulas prior to finalizing briefs.
3. **Validation:** Cross-reference all generated campaign output against the review checklist in `docs/REVIEW.md` before flagging a task complete.

## Strategy-First Governance

Every skill in this repo is expected to check `.agents/marketing-strategy.md` before generating output — nearly all do, in the "Check for product marketing context first" block near the top of their `SKILL.md` (`marketing-strategy` itself, which creates the doc, is the one exception). This section states the rule at the repo level so it applies even to a skill that doesn't (yet) restate it, and so it's a single place to update rather than 80+. `validate-skills.sh` enforces this in CI (`.github/workflows/validate-skill.yml`'s `repo-conventions` job) as a warning, not a hard fail — a new skill that's a deliberate exception should say so in its scope note rather than being silently blocked.

- **If `.agents/marketing-strategy.md` doesn't exist:** say so plainly and offer to run `marketing-strategy` first, rather than silently proceeding on generic assumptions. A recommendation built on an assumed audience or brand tier is worse than no recommendation.
- **If two skills' outputs conflict** (SEO recommends one thing, paid another; a promo depth that contradicts a brand-tier guardrail): don't escalate to a human to referee by default. Cite `marketing-strategy.md` Section 12 (Strategic Priorities, including what's explicitly deprioritized this cycle) — the higher-ranked priority wins. See `CONFLICT.md` for the full protocol and worked examples.
- **If the strategy doc's Section 5 (Competitive Landscape), 6 (Differentiation), or 14 (Brand Tier) changes materially:** everything already built against the old version — live campaigns, content, sales/dealer collateral — still reflects the old positioning until deliberately updated. Say so, and point at `repositioning` for the prioritized cascade audit, rather than letting the change go unnoticed downstream.

## Two-Tier Actions, Fail-Closed Defaults & Execution Receipts

`marketing-loops/references/loop-guardrails.md` defines the two-tier action model in detail — Tier 1 (autonomous-safe: read, analyze, draft, stage) versus Tier 2 (gated by default: spend, shift budget, send, publish, delete, change live settings). It's written for scheduled loops, but the classification is about the **action**, not about whether a loop or a one-off request triggered it — a single manually-requested "publish this ad" carries the same Tier 2 gate a scheduled loop's publish step would. Read that file for the full guardrails (spend caps, send/publish guardrails, compliance, the always-escalate list); this section states that the model applies repo-wide, not only inside `marketing-loops`.

**Fail closed, don't guess, when a required input for a Tier 2 action is missing.** A skill about to recommend spending, publishing, or a real discount should refuse and name the specific missing input, rather than proceeding on an assumed value:
- A discount depth beyond a brand's normal range needs an explicit margin floor or override — assuming one to keep the conversation moving risks recommending a money-losing promotion. See `discount-and-clearance` for the applied example.
- A recommendation involving specific SKUs needs their actual stock status if it's knowable — don't recommend promoting inventory that may already be sold out.
- A claim requiring a legal disclaimer (a guarantee, a comparative claim, a regulated-category statement) needs the disclaimer or an explicit sign-off it's been reviewed — see `compliance`.

**Execution receipts.** After a skill takes or recommends a real Tier 2 action (not routine drafting or analysis), append a one-line receipt to `.agents/execution-log.md` (gitignored — this is install-local state, like the other `.agents/` files): `date | skill=NAME version=X.Y.Z | strategy-version=X.Y.Z | action=SHORT-DESCRIPTION | tier=1|2`. This is what answers "what did the team actually do this week" without anyone having to remember and report it separately, and it's what a future skill-performance or roll-up tool would read — building that tool isn't warranted yet with no real log to process, but the convention is the cheap part worth having in place before it is.

## Skill Freshness

Some skill content decays faster than others — a platform's named features, an algorithm's current behavior, a converging protocol landscape (`agent-readiness`'s AP2/ACP/UCP) are true today and possibly wrong in six months, unlike a durable framework (`storytelling`'s narrative structures, `brand-management`'s architecture decisions) that doesn't have an expiry date.

**The convention:** a skill whose content is genuinely time-sensitive declares it in frontmatter:

```yaml
metadata:
  version: X.Y.Z
  volatility: dated
  last_verified: YYYY-MM-DD
```

Omit `volatility` entirely for evergreen content — that's the default and the common case; most skills in this repo are durable frameworks, not platform documentation. Only add `volatility: dated` where there's a real, stated reason (a named platform, a live algorithm, a converging standard) — don't tag a skill "dated" by default just to be safe, or every skill ends up tagged and the flag stops meaning anything.

**Enforcement: `.github/workflows/skill-staleness-check.yml`**, on the same scheduling pattern `weekly-seo-audit.yml` already proved works in this repo, runs monthly and opens (or updates) a single "Skill freshness review" GitHub issue listing every `dated` skill past a 90-day review window, plus any `dated` skill missing a `last_verified` date entirely. It closes the issue automatically once nothing's overdue.

**This workflow never writes to a skill file, on purpose.** It only opens an issue. Building an auto-refresh path that researches and commits an update to a skill directly would be an unreviewed write into 86 files that every skill and every user depends on — one bad research pass (a hallucinated stat, a misread platform change) silently corrupts a skill nobody's likely to spot-check before using it. Flag it; a human reviews and refreshes the content in a normal PR, same as any other change. This is what the mkt1 "Multiplayer AI" article calls "maintenance capabilities" and treats as the maturity marker most teams never build — the flagging half is cheap and worth having; the auto-write half is exactly the wrong kind of automation for content this load-bearing.

**Currently tagged `dated`** (14 skills, from a full sweep of all 86 for named platforms/algorithms/models — not just the obvious cases): `ads`, `agent-readiness`, `ai-seo`, `analytics` (its GA4 Implementation section names specific setup steps that shift with the platform), `aso`, `directory-submissions` (cites specific, decaying stats — AI-citation rates, a "2026 PH algorithm" note), `image` (version-pins specific AI models — Ideogram 3.0, Midjourney v7 — and notes DALL-E 3's deprecation; the single clearest case of inherently dated content in the repo), `marketing-council`, `product-feed`, `retail-media`, `schema`, `seo-audit`, `specialist-lenses`, `website-ux`. None carry a `last_verified` date yet, so the first scheduled run will correctly flag all fourteen for an initial review rather than claiming a verification that hasn't actually happened.

**Deliberately left untagged despite a platform/algorithm mention**: `social` and `attribution` (their algorithm references are evergreen advice about *reasoning under* volatility, not content that itself depends on a specific current platform state); `pricing` and `content-strategy` (a single evergreen-principle sub-section each, not core dependency); `ad-creative` (one example folder mentions "App Store," not core). Add the tag to any other skill when you notice its content is genuinely platform- or algorithm-dependent — don't tag preemptively just because a platform name appears once.

## Drift Checks (Scheduled Re-Runs, Not Auto-Execution)

Some things this repo relies on can go stale silently between sessions: a dealer's advertised pricing drifting off MAP, a strategy-doc changelog entry under-describing how material a Section 5/6/14 change actually was, POS materials that were produced but never verified as placed. The fix isn't a new skill — it's re-running an *existing* skill on a schedule against current `.agents/` state and reporting what it finds. This follows the same pattern `skill-staleness-check.yml` already proved out for skill content itself.

**The convention**: a lightweight periodic job — a GitHub Actions workflow on a cron, or (for a live Claude Code session) a Routine — that:
1. Re-reads `.agents/marketing-strategy.md` (and any other relevant `.agents/*.md` state) as it currently stands.
2. Re-runs one named skill's check/audit logic against it.
3. Reports findings back (a GitHub issue, same as `skill-staleness-check.yml`; or a message into the session that requested it).
4. **Never auto-edits or auto-executes anything** — same posture as `skill-staleness-check.yml` and the Tier 2 gate above. A drift check that found something is a Tier 1 action (read, analyze, report); acting on the finding is a separate, gated step.

**Worth setting up this way, in priority order**:
- **`compliance` re-run whenever `marketing-strategy.md`'s proof-points/claims section changes** — a new claim slipping in unreviewed is the real risk, not a stale one sitting unnoticed.
- **`pos-marketing`'s compliance/execution audit** — "materials produced but never verified as placed" is a real, named gap with no other check covering it.
- **`repositioning`'s severity check on every `marketing-strategy` changelog entry** — so a materially significant change doesn't get silently logged as minor. Note this depends on the changelog description being written honestly; nothing currently verifies that a changelog entry's stated severity matches what actually changed in Sections 5/6/14 (a diff-based check would be a stronger version of this than trusting prose self-reporting, but isn't built).

A given install should name which skills/checks it's actually running this way (and where findings land) rather than assuming the pattern applies universally — this section documents the pattern once so each user doesn't reinvent it, not a specific schedule everyone must run.

## Public Repo Content Policy

**This repo has no paid tier.** Everything that used to live in a separate private companion repo — worked evaluation examples (`evaluations/completed/` — illustrative and AI-generated, not real business results; see that folder's own `README.md`), the framework's implementation code (`src/`), automation scripts, and industry template packages — is merged in and public (see `README.md`'s "Everything Is Public" section for the full list).

The only content that should never land here is real secrets or keys — see `.github/private-content-patterns.txt` and its CI gate (`.github/workflows/no-private-content.yml`). That CI check is a safety net, not the first line of defense: don't commit a `.env`, credential, or private key on the assumption CI will catch it — decide before committing.

## SaaS-to-Retail Content Rule

This repo was substantially converted from a SaaS/B2B marketing skill set. When touching a skill that still carries SaaS framing (an example, a comparison table, a business-type row, a whole reference file), don't purge or port on reflex. Before changing anything, check all three:

1. **Relevant to retail** — the replacement content has to be something a retail B2C or B2B/wholesale business actually does (see `marketing-strategy` Section 15/16 for the B2C/B2B split and the Business-vs-Commercial segmentation). If there's no honest retail equivalent, say so and leave a clear scope note instead of forcing a strained analogy.
2. **Improves the skill** — the change should make the guidance more usable or more accurate for a real retail scenario, not just swap a word. A mechanical find-and-replace that leaves the underlying advice unchanged for the worse isn't the goal.
3. **Interlinked, not orphaned** — new or changed content should cross-reference (and be cross-referenced by) the skills it actually touches, the same way the rest of this repo is wired together. A rewritten section that doesn't connect to anything else is a sign it wasn't thought through.

If a mention doesn't clear all three — a deliberately dual-scoped skill serving both retail and another business type, a factual tool/schema reference, an incidental one-off example with no real weight — leave it. Don't edit SaaS references out for the sake of a clean grep result.
