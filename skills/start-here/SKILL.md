---
name: start-here
description: "When the user states a commercial outcome or business goal rather than naming a specific marketing skill or tactic — 'I want to lift sell-through on slow-moving inventory,' 'how do I reduce CAC,' 'grow repeat purchase rate,' 'clear our overstock,' 'improve promotional yield,' 'fix the website's conversion problem' — and doesn't already know which of this repo's 80+ skills applies. Also use when the user says 'where do I start,' 'which skill do I need,' 'I don't know what to use for this,' or names a metric they want to move (GMROI, sell-through, CAC, LTV, promotional yield, trade spend ROI, AOV, repeat purchase rate, Marketing ROMI) without naming a tactic. Not for a user who already knows which skill they want — route them there directly instead of through this skill. Not a replacement for any individual skill's own judgment; this only sequences which skills to run and in what order."
metadata:
  version: 1.0.0
---

# Start Here

Nobody arrives at a marketing problem already knowing which of this repo's 80+ skills applies — they arrive with an outcome: sell-through is soft, CAC is climbing, dealers aren't reordering. This skill's only job is turning that outcome into a skill chain, an owner, a gate, and the metric that proves it worked, so the person doesn't have to already know the catalog to use it.

**Check for product marketing context first:**
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions — the routes below assume it exists, since every skill in every chain reads it too. If it doesn't exist yet, say so and offer to run `marketing-strategy` first; don't route to a chain that's about to fail its own first step.

## How to Route

1. **Match the stated outcome against `ROUTES.yaml`** (in the repo root) — its `triggers` field lists phrases that map to each route; match on meaning, not exact wording. If more than one route plausibly fits, ask which outcome matters more this cycle rather than guessing — `marketing-strategy.md` Section 12 (Strategic Priorities) usually settles it if the user doesn't have a strong preference.
2. **Return the whole route, not just the first skill**: the chain in order, the owner role, the gate tier, and the metric it's measured on. State the chain as a sequence, not a menu — most routes assume the earlier skills' output feeds the later ones.
3. **Name the gate up front.** If the route's gate is Tier 2, say so before work starts, not after a draft exists — see `AGENTS.md`'s Tier 1/Tier 2 convention. This is what lets someone self-serve without accidentally publishing or spending past what they're allowed to approve alone.
4. **If nothing in `ROUTES.yaml` fits:** say so plainly rather than forcing a weak match. Suggest the single closest existing skill by name (use each skill's own `description` trigger phrases to judge fit), and note that if this exact outcome comes up again in a future session, it's a candidate for a new route — see "Adding a Route" below.

## When Two Candidate Routes Both Fit

This is what `CONFLICT.md` is for. State both candidates plainly and apply its resolution order: cite `marketing-strategy.md` Section 12's ranked priorities first, Section 14 (Brand Tier) or the distribution-model context second, and only ask the user directly if neither settles it.

## Adding a Route

`ROUTES.yaml` is deliberately a small, trustworthy set — not a second skill catalog. Per the enhancement plan's 3-Job Promotion Rule, a route only belongs there once its skill chain has actually been run end-to-end and produced a usable result at least a couple of times, not the first time an outcome comes up. If a user's outcome doesn't match anything and keeps not matching, that's the signal to eventually add it — flag it, don't add it on the spot from a single request.

## Related Skills

- **marketing-strategy**: The foundation every route assumes exists. If it doesn't, run this first.
- **CONFLICT.md**: The resolution protocol this skill defers to when two routes both plausibly fit.
- **marketing-plan**: For a dated, full execution plan across multiple priorities at once, rather than a single outcome's chain — use that when the ask is "build our 90-day plan," not "fix this one thing."
- **marketing-council** / **specialist-lenses**: For pressure-testing a chosen route or a route's output before committing, not for choosing the route itself.
