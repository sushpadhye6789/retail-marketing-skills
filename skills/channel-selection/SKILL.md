---
name: channel-selection
description: "When the user wants to decide which marketing channels to be in — not how much to spend on each (see budget-allocation) or how to run a specific channel (see ads, social, emails, etc.), but whether a channel belongs in the mix at all. Also use when the user mentions 'channel selection,' 'channel strategy,' 'channel mix,' 'which channels should we use,' 'where should we market,' or 'should we try [channel].' For picking a specific ad platform within paid media once paid is already the chosen channel, see ads' narrower Platform Selection Guide. For evaluating a new channel test before committing real budget, this skill's graduation-criteria framework applies before ads/social/etc.'s own execution playbooks do."
metadata:
  version: 1.0.0
---

# Channel Selection

You help users decide which marketing channels belong in the mix — the decision that sits *above* budget allocation (how much to each selected channel, see `budget-allocation`) and *above* channel execution (how to actually run a chosen channel well, see `ads`, `social`, `emails`, `public-relations`, etc.). This skill answers "should we be here at all," not "how much" or "how."

## Before Starting

**Check for product marketing context first:**
If `.agents/marketing-strategy.md` exists, read it. Four fields drive most channel-selection decisions directly:
- **Section 2 (Target Audience)** and **Section 9 (Customer Language)** — where the audience actually spends time and how they talk matters more than where the business *wants* to be present.
- **Section 12 (Strategic Priorities)** and the binding constraint — a channel decision should serve the stated priority, not exist because it's trendy.
- **Section 14 (Brand Tier)** — see `marketing-strategy/references/brand-tier-guide.md`'s Creative Aesthetic row; some tiers (particularly luxury) deliberately limit presence in certain channels as a positioning choice, not an oversight.
- **Section 15 (Distribution Model)** — see `marketing-strategy/references/distribution-model-guide.md`; a dealer network can make some channels (aggressive paid Shopping/PMax, for instance) create channel conflict rather than incremental reach.

Gather this context (ask if not provided):

### 1. The Decision
- Evaluating the current channel mix, considering a specific new channel, or building a channel strategy from scratch?
- What prompted this — a strategic priority, a competitor's move, underperformance in the current mix, or a new channel becoming available?

### 2. Constraints
- Team capacity and in-house skill/expertise across candidate channels?
- Budget available to test a new channel without starving proven ones?
- Any brand-tier or distribution-model channels that are effectively off the table?

---

## Selection Criteria

Weigh a candidate channel against all of these, not just the most obvious one:

- **Audience fit** — does the target audience actually spend meaningful time here? Reuse `customer-research`'s "Where to Look" source logic: the same discipline used to find where to *research* an audience applies to deciding where to *market* to them.
- **Product fit** — a highly visual or demonstrable product suits video/social-native channels; a considered, research-driven purchase suits search/content-native channels where the audience is actively looking. Match the channel's native behavior to how the product is actually bought, not just where attention happens to be.
- **Brand tier fit** — see `marketing-strategy/references/brand-tier-guide.md`'s Creative Aesthetic row. A channel that works well isn't automatically the right one if its native aesthetic conflicts with the brand's positioning (a luxury brand's deliberately limited direct-response paid social presence is a channel-selection decision, not a missed opportunity).
- **Distribution-model fit** — see `distribution-model-guide.md`; check whether a candidate channel would compete with or reinforce dealer relationships before entering it.
- **Competitive presence** — where are competitors concentrated, and where are they absent? Absence can mean an untapped gap or a channel that genuinely doesn't work for the category — verify which before treating a gap as an opportunity. See `competitor-profiling`.
- **Resource fit** — does the team have (or can it credibly build) the skill to execute this channel well? Entering a channel without the capability to do it competently is often worse than not entering it at all — a mediocre presence can undercut the brand more than absence does.

---

## New Channel Evaluation Framework

Before committing real budget to an unproven channel, define the test the same disciplined way `ads`' decision-system files define a testing-to-scaling graduation:

1. **State the hypothesis** — why this channel, for this audience, with this expected outcome — before spending anything.
2. **Define graduation criteria up front** — the specific, numeric bar (a target CPA, a minimum volume, a timeframe) that decides "this works, scale it" vs. "this doesn't, stop." Deciding this after seeing results invites motivated reasoning.
3. **Time-box and budget-cap the test** — enough to reach a real read (not so little that noise dominates the result — see `attribution`'s confidence-interval discipline for reading a test honestly), not so much that a bad bet drains the budget of proven channels.
4. **Graduate or exit on the criteria, not on sentiment** — a channel that's "almost working" past its defined test window and budget is usually a sunk-cost trap, not a near-miss.

---

## Portfolio Thinking

Don't concentrate the entire mix in whichever channel currently looks most efficient — two reasons this backfires:

- **Diminishing returns** — every channel has a ceiling where incremental spend stops being efficient (the same demand-curve logic `price-elasticity` applies to pricing applies to media spend: the first dollar in a channel is more efficient than the millionth). Pouring more budget into "the best channel" past that ceiling wastes it relative to a channel with more headroom.
- **Concentration risk** — a business dependent on a single channel is exposed to that platform's algorithm changes, policy shifts, or cost inflation with no fallback. A healthy channel portfolio typically has a **core** (proven, majority of attention), a **growth layer** (working, being scaled), and a **test layer** (small, unproven, funding the next core channel) — mirroring the Testing/Scaling split `ads` uses within a single platform, applied at the whole-portfolio level.

---

## When to Exit a Channel

Signals worth acting on, not just monitoring:

- **Near-zero incremental lift despite platform-reported efficiency** — see `attribution`'s incrementality section; a channel can look efficient on platform-reported metrics while contributing little that wouldn't have happened anyway.
- **Rising CAC past the breakeven ceiling** (see `price-elasticity`/`ads`' break-even math) with no credible recovery path.
- **Disproportionate operational cost** relative to output — a channel that consumes far more team attention than its results justify.
- **A brand-tier or distribution-model misfit discovered after entering** — sometimes only clear in hindsight; exiting deliberately beats limping along in a channel that was never the right fit.

---

## Common Mistakes

- **Entering a channel because a competitor is there**, without checking audience/product/tier fit independently.
- **Spreading budget too thin across too many channels** — none reach the volume needed to prove out or graduate, and the portfolio never develops a real core.
- **No defined graduation criteria before testing a new channel** — makes it impossible to know when to commit or quit, and invites motivated reasoning once money's already been spent.
- **Ignoring brand-tier or distribution-model constraints** when a channel looks efficient on paper.
- **Single-channel over-dependence** — see Portfolio Thinking.

---

## Task-Specific Questions

1. Evaluating the current mix, considering a specific new channel, or building a strategy from scratch?
2. What's the audience's actual channel presence, per `customer-research`?
3. Any brand-tier or distribution-model channels effectively off the table?
4. If testing a new channel: what's the hypothesis, and what are the graduation criteria?
5. What does the current portfolio's core/growth/test split look like?

---

## Related Skills

- **budget-allocation**: For how much to spend on each channel once selected — this skill decides the "which," that one decides the "how much"
- **marketing-strategy**: For the audience, tier, distribution-model, and priority context driving channel fit
- **customer-research**: For where the audience actually spends time
- **competitor-profiling**: For competitive channel-presence gaps
- **attribution**: For measuring whether a channel selection is actually paying off, incrementally
- **price-elasticity**: For the diminishing-returns/ceiling logic behind Portfolio Thinking
- **ads**: For platform selection within paid media, and the testing/scaling pattern this skill's graduation-criteria framework generalizes
- **social** / **emails** / **sms** / **public-relations** / **influencer-marketing** / **referrals**: For execution once a channel is selected
