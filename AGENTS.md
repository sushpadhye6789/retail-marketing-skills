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

## Public Repo Content Policy

**This repo has no paid tier.** Everything that used to live in a separate private companion repo — completed evaluations with real metrics, the framework's implementation code (`src/`), automation scripts, and industry template packages — is merged in and public (see `README.md`'s "Everything Is Public" section for the full list).

The only content that should never land here is real secrets or keys — see `.github/private-content-patterns.txt` and its CI gate (`.github/workflows/no-private-content.yml`). That CI check is a safety net, not the first line of defense: don't commit a `.env`, credential, or private key on the assumption CI will catch it — decide before committing.
