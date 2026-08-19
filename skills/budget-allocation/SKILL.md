---
name: budget-allocation
description: "When the user wants to size a total marketing budget or decide how to split it across channels/campaigns, including reallocating an existing budget based on performance. Also use when the user mentions 'budget allocation,' 'marketing budget,' 'how much should I spend,' 'budget split,' 'reallocate budget,' 'channel budget,' or 'marketing spend by channel.' For which channels are even eligible for budget in the first place, see channel-selection, which this skill assumes has already happened. For the SaaS-specific ARR-based budget-sizing formulas in a full 12-month plan, see marketing-plan, which this skill complements with ecommerce-appropriate sizing methods and the ongoing (not just annual) reallocation discipline."
metadata:
  version: 1.0.2
---

# Budget Allocation

You help users size a total marketing budget and allocate it across channels and campaigns — and, just as importantly, reallocate it on an ongoing basis as real performance data comes in, rather than treating a budget split as a decision made once a year and left alone.

**Scope note**: `marketing-plan` already covers SaaS-specific budget-sizing formulas (Revenue-Based %ARR, Goal-Based ARR reverse-engineering) as part of a full 12-month plan. This skill adds ecommerce-appropriate sizing methods those formulas don't cover, and — for any business type — the ongoing cross-channel allocation and reallocation discipline that a once-a-year plan doesn't handle on its own. This skill assumes `channel-selection` has already decided which channels are in the mix; it decides how much goes to each.

## Before Starting

**Check for product marketing context first:**
Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).
If `.agents/marketing-strategy.md` exists, read it. Three fields matter directly:
- **Section 12 (Strategic Priorities) and binding constraint** — the constraint (budget, team capacity, product readiness) shapes the allocation logic below just as much as it shapes strategic priorities themselves.
- **Section 14 (Brand Tier)** — see `marketing-strategy/references/brand-tier-guide.md`; tier affects channel appetite (a luxury brand's typically lighter direct-response paid-social allocation is a deliberate budget decision, not an oversight).
- **Section 15 (Distribution Model)** — if the business receives or provides co-op/MDF funds, see `supplier-funded-marketing`; those funds change the *net* budget actually needed from the core marketing budget.

Gather this context (ask if not provided):

### 1. What's Being Sized
- A total budget from scratch, or reallocating an existing one?
- Time horizon — annual plan, quarterly, or an ongoing rolling reallocation?

### 2. Data Available
- Any MMM or incrementality data from `attribution`? This should be the primary input for allocation, not platform-reported ROAS alone.
- Current channel mix and spend, if reallocating.
- Margin/breakeven data from `price-elasticity` to set a spend ceiling per channel.

### 3. Constraints
- The binding constraint from `marketing-strategy` Section 12.
- Any co-funded budget (supplier MDF) already committed or available.

---

## Sizing the Total Budget

For SaaS with ARR to anchor against, use `marketing-plan`'s Revenue-Based or Goal-Based formulas directly — no need to duplicate them here.

**For ecommerce/DTC**, where ARR-based formulas don't apply, size against one of these instead:

- **% of revenue** — the most common ecommerce anchor. Don't assume a universal "typical" percentage; model it against your own margin and growth stage the same way `price-elasticity` insists on measuring rather than assuming. A thin-margin category supports a lower % than a high-margin one at the same growth ambition.
- **Blended CAC ceiling** — reverse-engineer from the breakeven math `ads` and `price-elasticity` already use (breakeven CPA = AOV × margin, or full LTV-based breakeven if acquiring above first-order breakeven deliberately) — the budget is whatever spend keeps blended CAC under that ceiling at the volume you're targeting.
- **Growth/inventory-driven** — for a business scaling a specific range or clearing a specific inventory position (see `range-review` and `overstock`), size budget against what actually needs to move, not a fixed % of revenue that ignores the current inventory picture.

**Always add an experimental layer** on top of the core budget — `marketing-plan`'s 10-20% figure for SaaS is a reasonable starting anchor to adapt, not a universal rule; the underlying principle (some budget has to fund the next channel before the current one plateaus, per `channel-selection`'s Portfolio Thinking) applies regardless of business type.

---

## Allocating Across Channels

**Use incrementality data as the primary input, not platform-reported ROAS.** Platform-reported numbers are structurally inflated (see `attribution`'s blind spots — direct traffic, branded search, and self-attribution all flatter certain channels) — allocating budget by comparing platform dashboards against each other systematically over-funds whichever channel is best at claiming credit, not whichever channel actually drives the most incremental revenue. Where MMM or incrementality testing exists, anchor the split on that; where it doesn't yet, treat platform-reported comparisons as a starting hypothesis to validate, not a final allocation.

**Structure**, mirroring `channel-selection`'s Portfolio Thinking at the budget level:
- **Core (proven channels)**: the majority of budget, sized against their demonstrated incremental return.
- **Growth (working, scaling)**: channels that have graduated a `channel-selection` test and are being scaled — apply the same discipline `ads`' decision-system files use for scaling within one platform (gradual increases, not sudden jumps, to avoid resetting platform learning where that applies).
- **Test (unproven)**: the experimental layer from Sizing the Total Budget, funding `channel-selection`'s next candidate.

**Respect diminishing returns.** Every channel has a spend ceiling past which incremental return drops — the same demand-curve logic `price-elasticity` applies to pricing applies here to media spend. Once a channel's incremental CPA is trending toward its breakeven ceiling, more budget there is less efficient than the same dollars in an under-invested channel with more headroom, even if the saturated channel's blended (not incremental) numbers still look attractive.

---

## Reallocation Cadence

Budget allocation isn't a once-a-year decision — build in a recurring review:

- **Cadence**: monthly or quarterly for most businesses; more frequent around a `tentpole-campaign` or major promotional event that temporarily reshapes the mix.
- **Triggers to reallocate outside the normal cadence**: a channel's incremental CPA crossing above its breakeven ceiling, a test channel graduating (per `channel-selection`'s criteria) and needing real budget, a co-op/MDF fund deadline approaching unused (see `supplier-funded-marketing`).
- **Don't over-react to short-term noise.** Reuse `attribution`'s discipline for reading a test honestly — a single bad week in an otherwise-proven channel is often noise, not a signal to reallocate; check the confidence interval and trend before moving real budget on a small sample.

### Emergency Mid-Flight Cuts

A sudden, large budget cut forced by external pressure (a cash-flow crunch, a corporate directive) is a different exercise than the normal reallocation cadence above — the goal shifts from optimizing the mix to minimizing damage under a hard constraint, fast:

- **Protect committed, hard-to-reverse spend first** — a `media-plan` premium placement already booked (programmatic guaranteed CTV, a `digital-out-of-home` contract, a `tentpole-campaign` production already underway) often carries cancellation penalties or sunk production cost; cutting flexible channels (open-exchange `programmatic`, paid social, always-on retargeting) first is usually less destructive than breaking a locked-in commitment.
- **Cut by graduation status, not evenly across the board** — an even percentage cut across every channel protects underperformers at the expense of proven ones; cut test/early-stage spend (per `channel-selection`) before cutting a channel that's already graduated and proven its incremental return.
- **Preserve retention/owned-channel spend disproportionately** if forced to choose — `emails`/`sms` to an existing list and `loyalty` program costs are typically the cheapest revenue the business has; cutting acquisition spend first, before touching the channels that keep existing revenue flowing, is usually the less damaging order.
- **Communicate the cut's expected impact honestly** (which channels lose reach, what pipeline/revenue impact to expect) rather than presenting a cut as costless — a budget cut has consequences, and surfacing them clearly protects against the same cut being repeated without understanding what it actually gave up.

---

## Budget by Brand Tier and Distribution Model

- **Tier**: see `marketing-strategy/references/brand-tier-guide.md`'s Creative Aesthetic row directly — it's already describing a budget-allocation pattern (premium/luxury brands typically allocating less to direct-response paid social, more to brand/editorial/PR placements), just stated in creative terms. Apply the same logic when building the channel budget split.
- **Distribution model**: co-op/MDF funds received from suppliers reduce the net budget the core marketing budget needs to cover for co-funded activity (see `supplier-funded-marketing`'s receiving-side section). Funds provided to a dealer network are themselves a budget line item, not a separate pool to ignore when sizing the total.

---

## Common Mistakes

- **Allocating by "last year's split"** without checking whether incrementality data actually still supports it.
- **Over-indexing on platform-reported ROAS** instead of blended or incremental CPA — see "Allocating Across Channels."
- **No experimental budget layer**, starving the next channel `channel-selection` should be testing.
- **Reacting to short-term noise** and reallocating real budget off a small, unconfirmed sample.
- **Ignoring diminishing returns** and continuing to pour budget into the currently-best-looking channel past its efficient ceiling.
- **Sizing the total budget with a SaaS ARR formula for an ecommerce business**, or vice versa — match the sizing method to the actual business model.

---

## Task-Specific Questions

1. Sizing a total budget from scratch, or reallocating an existing one?
2. Is there MMM or incrementality data to anchor the allocation on, or only platform-reported numbers so far?
3. What's the binding constraint from `marketing-strategy` Section 12?
4. Any co-funded (supplier MDF) budget already committed?
5. What does the current core/growth/test channel split look like?

---

## Related Skills

- **channel-selection**: For which channels are even eligible for budget — this skill assumes that decision is already made
- **budget-pacing-tracker**: For tracking whether actual spend within a period is tracking to this skill's allocated plan, and catching over/underspend early
- **moat-builder**: For biasing allocation toward the specific activities that widen an identified competitive moat, not just toward the best near-term ROAS
- **attribution**: For the MMM/incrementality data this skill's allocation should be anchored on, not platform-reported ROAS
- **marketing-plan**: For SaaS-specific ARR-based total-budget formulas, and the 12-month plan this budget sits inside
- **price-elasticity**: For the breakeven/diminishing-returns math behind both the CAC ceiling and the channel-saturation logic
- **ads**: For within-platform budget allocation and scaling discipline this skill generalizes across the whole portfolio
- **supplier-funded-marketing**: For co-funded budget that changes the net total needed
- **range-review** / **overstock**: For inventory-driven budget sizing
- **marketing-strategy**: For the strategic priority, binding constraint, and brand-tier context driving allocation
- **media-plan**: For sequencing a campaign-level budget across channels and time to hit a reach/frequency goal, once this skill's channel split is set
