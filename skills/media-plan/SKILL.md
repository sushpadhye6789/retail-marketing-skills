---
name: media-plan
description: "When the user wants to build a media plan — sequencing and weighting paid media across channels, over time, to hit a reach and frequency goal. Also use when the user mentions 'media plan,' 'media planning,' 'reach and frequency,' 'flighting,' 'GRPs,' 'TRPs,' 'media calendar,' 'channel weighting,' 'media mix,' or 'how should we phase this campaign across channels.' This sits below channel-selection (which channels are eligible at all) and budget-allocation (how much total budget and its high-level split) and above individual channel execution (ads, social, programmatic, etc.) — it answers how much reach/frequency you need, which channels carry which role, and how the buy is sequenced over the flight. Commonly used for a tentpole-campaign or launch, but applies to any large, time-bound, multi-channel push."
metadata:
  version: 1.0.1
---

# Media Plan

You help users build a media plan — the document that translates a chosen set of channels and a budget into a concrete reach/frequency goal, a channel weighting, and a week-by-week (or day-by-day) flighting schedule. This is the layer between strategy and execution: `channel-selection` decided which channels are in the mix, `budget-allocation` decided the total and rough split, and this skill decides how that budget is actually sequenced and weighted to hit an audience-exposure goal — then each channel's own skill (`ads`, `programmatic`, `digital-out-of-home`, `social`, `public-relations`, `emails`/`sms`) handles execution within the plan.

**When this applies**: any large, time-bound, multi-channel push — most often a `tentpole-campaign` or a major `launch` — where hitting a specific reach/frequency goal across several channels in a coordinated window matters more than any one channel's standalone performance. A single always-on channel doesn't need a media plan in this sense; it needs `budget-allocation`'s ongoing reallocation discipline instead.

## Before Starting

**Check for product marketing context first:**
Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions.

Gather this context (ask if not provided):

### 1. What This Plan Is For
- Is this a `tentpole-campaign`, a `launch`, or another coordinated push? What's the fixed date or window?
- Primary objective: awareness/reach, or reach building toward a conversion moment?

### 2. Audience & Geography
- Target audience size (or best estimate) and geography — national, regional, or hyper-local (e.g., markets with dense dealer presence, per `marketing-strategy/references/distribution-model-guide.md`)?

### 3. Channels & Budget Already Decided
- Which channels came out of `channel-selection` as eligible for this plan?
- What's the total budget from `budget-allocation`, and is it fixed or does this plan need to make the case for more?

### 4. Brand Tier
- Section 14 of `.agents/marketing-strategy.md`: premium/luxury tiers often weight toward fewer, higher-impact channels (CTV, premium `digital-out-of-home`) over broad-reach/low-cost ones; budget/mid-tier plans often weight toward frequency and promotional reach. See `marketing-strategy/references/brand-tier-guide.md`.

---

## Reach & Frequency Basics

- **Reach**: the percentage (or absolute number) of the target audience exposed to the campaign at least once during the flight.
- **Frequency**: the average number of times a person in that reached audience was exposed.
- **Effective frequency**: the minimum number of exposures generally needed before a message actually registers and moves behavior — commonly cited in the 3+ range for a new message, lower for reinforcing an existing one, but this varies enormously by message complexity, existing brand awareness, and category; don't import someone else's benchmark uncritically, and where you have historical brand-lift data of your own (see Measurement below), use that instead.
- **Impressions / GRPs (Gross Rating Points) / TRPs (Target Rating Points)**: impressions is the raw exposure count; GRPs/TRPs are reach × frequency expressed as a single planning number (100 GRPs could mean 100% reach at 1x frequency, or 50% reach at 2x, or many other combinations) — useful for comparing plans at a glance, but always unpack into actual reach and frequency before finalizing a plan, since the same GRP total can represent very different audience experiences.

**The core tradeoff**: for a fixed budget, more reach means less frequency per person and vice versa. Decide deliberately which side of that tradeoff the objective calls for — a new-to-market message usually needs more frequency concentrated on a smaller audience before it needs broad reach; an already-understood message for an established brand can often afford to trade frequency for reach.

---

## Flighting Patterns

How spend is distributed over time, not just across channels:

| Pattern | Description | Best for |
|---|---|---|
| **Continuous** | Steady spend throughout the flight, no gaps | Always-on channels, or a short flight where the whole window matters equally |
| **Flighting / Pulsing** | Alternating periods of spend and reduced/no spend, riding on the residual awareness from the prior pulse | Budget-constrained plans needing to cover more calendar time than continuous spend would allow, and campaigns with natural peaks (pre-holiday build, event weeks) |
| **Burst** | A short, high-intensity concentration of spend, then stop | A single fixed moment (a launch day, an event) where concentrated frequency in a narrow window matters more than sustained presence |

Most `tentpole-campaign` plans combine a teaser burst, a flighted or continuous build phase, and a burst around the moment itself — decide this shape before assigning channel weights, since it changes how much of the budget each phase needs.

---

## Channel Weighting & Sequencing

- **Assign a role to each channel**, not just a budget share: which channel(s) carry primary reach (often CTV/`programmatic` video, `digital-out-of-home`, or broad social), which carry frequency/reinforcement (retargeting via `programmatic` or `ads`), and which carry the conversion moment (`ads` search/shopping, `emails`/`sms`, on-site).
- **Sequence upper-funnel before lower-funnel** where the audience genuinely needs introducing to the message — running retargeting before anyone has been reached with the primary message wastes spend on an audience that hasn't seen anything to retarget against yet. Where the audience already knows the brand, this sequencing matters less and channels can run concurrently.
- **Coordinate booking lead times** — traditional/premium placements (programmatic guaranteed CTV, premium `digital-out-of-home`, `public-relations` embargo timing) often need to be locked in earlier than flexible programmatic or social, which can be adjusted mid-flight. Build the plan backward from the earliest lead-time channel, the same way `tentpole-campaign`'s Planning Cadence works backward from production lead time.
- **Leave a flexible-budget reserve** in fast-adjustable channels (open-exchange `programmatic`, paid social) so the plan can respond to early performance signals without needing to unwind a locked-in premium buy.

---

## Building the Plan

1. **Confirm objective and flight dates** from the campaign this plan serves (`tentpole-campaign`/`launch`).
2. **Size the audience and set a reach/frequency goal** appropriate to the objective (see Reach & Frequency Basics).
3. **Assign channel roles** (reach, frequency, conversion) from the channels `channel-selection` cleared for this push.
4. **Choose the flighting pattern** for the overall flight and, if it has distinct phases (teaser/build/moment), for each phase.
5. **Allocate budget by channel and phase**, working backward from the longest-lead-time commitment.
6. **Build the calendar** — a week-by-week (or day-by-day for a short burst) view of what's running where, so cross-channel message consistency (`tentpole-campaign`'s Cross-Channel Orchestration) is visible in one place.
7. **Set the measurement plan** before launch, not after (see Measurement).

---

## Measurement

- **Reach/frequency delivery vs. plan**: most channels report delivered impressions; reconcile against the planned reach/frequency goal mid-flight, not just at the end, so there's still time to adjust weighting.
- **Brand lift**, where available, is the most direct read on whether the reach/frequency goal actually translated into awareness or consideration movement — see `attribution`'s "Measuring awareness, not just conversion" section.
- **Don't credit the plan's overall lift to any single channel by last-touch alone** — a coordinated multi-channel plan is specifically designed to work as a system (reach channels creating the awareness that conversion channels later capture), and last-touch attribution will systematically overcredit whichever channel runs closest to the conversion moment. See `attribution/references/incrementality-checkpoint.md` — a holdout-geo or matched-market comparison of the whole plan against a market where it didn't run is the proportionate check for a plan large enough to anchor a recurring commitment.

---

## Common Mistakes

- **Setting a GRP/impressions target without unpacking it into actual reach and frequency** — the same GRP number can mean very different audience experiences (see Reach & Frequency Basics).
- **Running all channels concurrently regardless of funnel role** when the audience needs introducing to the message first — see Channel Weighting & Sequencing.
- **Not working backward from the longest lead-time placement**, resulting in a rushed or missed premium booking.
- **No flexible-budget reserve**, leaving nothing to reallocate when early performance data comes in mid-flight.
- **Judging the plan by last-touch attribution on the conversion channel alone**, which structurally undercredits the reach channels that made the conversion possible.

---

## Task-Specific Questions

1. What campaign is this plan for, and what's the fixed flight window?
2. What's the target audience size and geography, and what reach/frequency goal fits the objective?
3. Which channels came out of `channel-selection`, and what role does each play (reach, frequency, conversion)?
4. What flighting pattern (continuous, pulsing, burst) fits the budget and the campaign's shape?
5. What's the longest lead-time commitment, and does the plan give it enough runway?

---

## Related Skills

- **tentpole-campaign**: The most common use case for a media plan — a major brand moment needing coordinated reach across channels
- **launch**: The other common use case — a go-to-market moment with its own reach/sequencing needs
- **channel-selection**: For deciding which channels are eligible before this skill weights and sequences them
- **budget-allocation**: For the total budget and high-level split this skill works within
- **programmatic** / **digital-out-of-home** / **ads** / **retail-media**: For execution within the plan once channel roles and weighting are set
- **attribution**: For applying incrementality discipline to plan-level (not just single-channel) measurement
- **marketing-strategy**: For brand-tier and distribution-model context shaping channel weighting
- **marketing-plan**: For where this campaign-level plan sits in the broader annual/dated marketing calendar
