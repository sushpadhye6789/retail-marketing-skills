# AI Marketing Specialist Operating Manual

## Business & Market Context
- **Market Segment:** Retail & E-commerce Marketing Frameworks
- **Primary Audience:** Retail strategists, trade marketers, channel partners, and brand managers
- **Tone & Style:** Authoritative, clear, metric-driven, actionable (eliminate vague buzzwords like "game-changer" or "synergy")

## Execution Protocol
1. **Plan First:** Always explain the underlying strategy before producing full-length collateral or campaigns.
2. **Data Integrity:** Verify currency, tax standards (e.g., GST inclusion/exclusion), and profit margin formulas prior to finalizing briefs.
3. **Validation:** Cross-reference all generated campaign output against the review checklist in `sushpadhye6789/retail-marketing-skills-private` (`REVIEW.md`) before flagging a task complete.

## Public Repo Content Policy

**This repo (`retail-marketing-skills`) is public.** A separate private repo, `sushpadhye6789/retail-marketing-skills-private`, holds paid-tier and personal-operational content: complete evaluation results with real metrics, the framework's implementation code (`src/`), automation scripts, industry template packages, the monetization plan, and Sush's own dealer/trade marketing operational docs.

Before adding or editing anything at the root of this repo, in `evaluations/`, `src/`, `scripts/`, or `routines/`, check it against `.github/private-content-patterns.txt`. If it's new work that belongs in the private tier — has real dollar figures, real campaign/customer names, completed results with numbers, or is personal operational content rather than a generic public skill/template — build it in `retail-marketing-skills-private` instead of here. A CI check (`.github/workflows/no-private-content.yml`) will fail the build if a matching file lands on `main` anyway, but don't rely on it as the first line of defense — decide before committing, not after CI catches it.

When in doubt, ask rather than assuming public is the safe default — the reverse (removing something already pushed to a public repo) is a much bigger operation than not adding it in the first place.

## SaaS-to-Retail Content Rule

This repo was substantially converted from a SaaS/B2B marketing skill set. When touching a skill that still carries SaaS framing (an example, a comparison table, a business-type row, a whole reference file), don't purge or port on reflex. Before changing anything, check all three:

1. **Relevant to retail** — the replacement content has to be something a retail B2C or B2B/wholesale business actually does (see `marketing-strategy` Section 15/16 for the B2C/B2B split and the Business-vs-Commercial segmentation). If there's no honest retail equivalent, say so and leave a clear scope note instead of forcing a strained analogy.
2. **Improves the skill** — the change should make the guidance more usable or more accurate for a real retail scenario, not just swap a word. A mechanical find-and-replace that leaves the underlying advice unchanged for the worse isn't the goal.
3. **Interlinked, not orphaned** — new or changed content should cross-reference (and be cross-referenced by) the skills it actually touches, the same way the rest of this repo is wired together. A rewritten section that doesn't connect to anything else is a sign it wasn't thought through.

If a mention doesn't clear all three — a deliberately dual-scoped skill serving both retail and another business type, a factual tool/schema reference, an incidental one-off example with no real weight — leave it. Don't edit SaaS references out for the sake of a clean grep result.