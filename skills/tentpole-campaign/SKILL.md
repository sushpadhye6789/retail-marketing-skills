---
name: tentpole-campaign
description: "When the user wants to plan a major brand campaign tied to a calendar moment, cultural moment, or brand-owned milestone — a holiday campaign, an anniversary campaign, a flagship seasonal push. Also use when the user mentions 'tentpole campaign,' 'brand campaign,' 'seasonal campaign,' 'holiday campaign,' 'flagship campaign,' 'anniversary campaign,' or 'brand moment.' This is different from a promo/discount campaign — a tentpole leads with brand story and awareness, even when it wraps around a commercial moment like Black Friday; for the discount mechanics of a promotional sale event, see discount-and-clearance and offers. For a new-product go-to-market moment, see launch. For where this sits in the broader dated marketing calendar, see marketing-plan."
metadata:
  version: 1.0.0
---

# Tentpole Campaign

You help users plan a major brand campaign tied to a calendar moment, cultural moment, or brand-owned milestone — the kind of campaign that gets the year's biggest creative investment and cross-channel coordination, and is judged on brand impact first, not just immediate ROAS.

**Scope note — tentpole vs. promo:** the same calendar date (Black Friday, a holiday) can be executed as a promo campaign (discount-led, performance-first — see `discount-and-clearance` and `offers`) or as a tentpole campaign (story-led, brand-first, with commercial results as a secondary but real objective) — many brands run both at once around the same date. This skill is for the brand-led version. If the request is really "how deep should our Black Friday discount be," route to `discount-and-clearance` instead.

## Before Starting

**Check for product marketing context first:**
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions.

**Check three fields specifically before planning anything:**
- **Section 12 (Strategic Priorities)** — a tentpole campaign should trace back to one of the 2-4 priorities, not exist just because "it's the holiday season." If it doesn't connect to a stated priority, say so before investing the production budget.
- **Section 14 (Brand Tier)** — see `marketing-strategy/references/brand-tier-guide.md`'s Creative Aesthetic row; this is the single highest-stakes application of that guidance, since a tentpole is usually the year's biggest creative production investment.
- **Section 15 (Distribution Model)** — if dealers are involved, see `marketing-strategy/references/distribution-model-guide.md`; a tentpole often needs embargo dates and shared/co-branded assets coordinated with the dealer network well in advance.

Gather this context (ask if not provided):

### 1. The Moment
- What's the occasion — a calendar/cultural moment (holiday, seasonal), a brand-owned milestone (anniversary, rebrand), or a category moment (an industry conversation the brand can credibly own an angle on)?
- Is the date fixed (a holiday) or does the brand control the timing (an anniversary)?

### 2. Objective
- Primary: awareness/brand-building, or does it also carry a real commercial target (a sales lift during and after the window)?
- What does success look like if this is measured as brand impact, not just ROAS — see Measurement below.

### 3. Scale & Resources
- Production budget and lead time available (tentpole creative typically needs much longer lead time than a standard campaign — see Planning Cadence)
- Which channels need to carry this (paid, organic social, PR, email/SMS, in-store if applicable)?
- Media budget, and whether any of it is co-funded (see `supplier-funded-marketing` if the brand receives or provides dealer marketing funds)

---

## What Makes a Campaign a Tentpole

Not every seasonal push qualifies — a tentpole campaign typically has most of these:

- **A real creative concept**, not just a themed banner — a story or idea the campaign is built around, distinct from "everything's on sale for the holidays"
- **Cross-channel coordination** around one message and date, not a single-platform push
- **The largest production investment** of the planning period — hero creative (often video) with platform-specific cutdowns, not a single asset reused everywhere
- **A fixed or brand-controlled date** that anchors planning backward from — see Planning Cadence
- **Brand impact as the leading objective**, with commercial results as a real but secondary measure — this is the key difference from a promo campaign, where the discount and immediate conversion *is* the objective

---

## Types of Tentpole Moments

- **Calendar/cultural** — major holidays and seasons (Christmas, Lunar New Year, Mother's/Father's Day, Back-to-School) and broadly-recognized shopping moments (Black Friday) executed as a brand story rather than a discount announcement.
- **Brand-owned milestones** — an anniversary, a rebrand moment, a major sustainability or values statement, a flagship product line's brand-level (not launch-tactical) campaign.
- **Category moments** — a cultural or industry conversation the brand has a credible, non-opportunistic angle to own.

---

## Planning Cadence

Tentpole campaigns need to be planned much further in advance than a standard or promo campaign, because of production lead time (hero video, photography, cross-platform asset production) and media pre-buys (premium placements often sell out or lock in rates months ahead). Work backward from the fixed date:

- **Concept and creative brief**: earliest — often months ahead of the moment for a major campaign
- **Production**: needs enough runway for hero asset production plus cutdowns for each channel, not just the primary format
- **Dealer/partner coordination**, if applicable: embargo dates and shared assets need to reach dealers with enough lead time for them to plan their own local execution — see `marketing-strategy/references/distribution-model-guide.md`
- **Channel-specific launch**: staggered if the campaign has a teaser phase before the main moment, coordinated if it's a single-date drop

If a tentpole request comes in with too little lead time for real production, say so directly rather than compressing scope silently — a rushed tentpole with promo-campaign production values undermines the brand-building objective it exists for.

---

## Cross-Channel Orchestration

- **Hero creative + cutdowns**: one core concept/asset, adapted (not just resized) for each channel's native format — see `ad-creative` and `image` for execution, `brand-guidelines` for visual consistency across all of them
- **Paid + organic + PR + email/SMS alignment**: the same message and creative concept should be recognizable across `ads`, `social`, `public-relations`, `emails`, and `sms` during the window — a tentpole where each channel is telling a different story dilutes the brand impact it's meant to build
- **Timing**: decide whether the campaign has a teaser/build phase before the main date or launches as a single moment, and make sure every channel's timeline matches that decision
- **Reach, frequency, and flighting**: for the actual mechanics of sizing the reach/frequency goal, weighting channels by role, and sequencing spend across the flight, see `media-plan` — this section covers message and timing alignment, that skill covers the media math underneath it

---

## Measurement

**Leading indicators** (during the campaign): reach, awareness/brand lift (see `attribution`'s "Measuring awareness, not just conversion" section — brand lift studies and share-of-voice tracking apply directly here), engagement, press/earned coverage if PR is involved.

**Lagging indicators** (the commercial halo): sales during the window, and — importantly — sales in the weeks *after* the window, since a real brand-building tentpole often shows its commercial effect as a lift that persists past the campaign dates, not just a spike during it. Don't judge a tentpole purely on in-window ROAS; that's the wrong yardstick for a campaign whose primary objective is brand impact.

**Tier consideration**: budget/mid-market brands' tentpoles often blend brand story with real promotional mechanics and are reasonably judged on a mix of both; premium/luxury brands' tentpoles usually carry little to no direct discounting and should be judged almost entirely on brand-impact metrics, not sales lift.

---

## When the Moment Turns

A tentpole is planned months out, which means the world can change between the creative brief and the launch date — a tragedy, an unrelated crisis, or a shift in the cultural mood can make previously-fine creative or timing land badly:

- **Have a go/no-go checkpoint close to launch**, not just at the creative-brief stage — a final read of whether the concept, tone, or timing still fits the moment, especially for anything tied to a real-world event (a holiday near an unfolding crisis, a "celebration" tone during a period of hardship for the target market).
- **Know the difference between pausing and pulling.** A short pause (holding a scheduled post or paid flight for a few days) is low-cost and reversible; fully pulling a tentpole after months of production investment is a real cost — reserve it for when the concept or tone is genuinely incompatible with the moment, not for milder discomfort that a short pause resolves.
- **If paid media is already live when the decision is made**, pausing it is usually straightforward; owned content (site, email) and any dealer/partner-distributed assets (see `marketing-strategy/references/distribution-model-guide.md`) take longer to unwind — build in the operational lead time to actually execute a pull, not just the decision to do it.
- **If the disruption becomes a live PR situation** rather than just a timing judgment call, this becomes a `public-relations` Crisis & Reactive PR matter running alongside the pause/pull decision, coordinated through one spokesperson.

---

## Common Mistakes

- **Treating a tentpole as just a bigger promo** — loses the brand-building value the extra investment was meant to buy; if the plan is really "big discount, more media spend," that's a scaled-up promo campaign, not a tentpole — call it that and route to `discount-and-clearance`.
- **No real owned story or concept** — generic seasonal messaging dressed up with a bigger budget isn't a tentpole concept.
- **Starting production too late** for the scale of the moment — see Planning Cadence.
- **Channels not aligned around one message** — each platform running its own interpretation of "the holiday campaign" dilutes the cross-channel coordination that defines a tentpole.
- **Judging success only on in-window ROAS** — misses the brand-lift and post-window halo effect that's often the actual point.
- **No connection to a stated strategic priority** — see Before Starting; a tentpole is a major investment and deserves the same scrutiny as any other Section 12 priority.

---

## Task-Specific Questions

1. What's the moment, and is the date fixed or brand-controlled?
2. What strategic priority does this connect to?
3. Brand-impact primary, with or without a real commercial target?
4. What's the production budget and lead time — enough for the scale of what's being proposed?
5. Which channels need to carry this, and is there a teaser phase or single-date drop?
6. Any dealer coordination or co-funded media (see `supplier-funded-marketing`) needed?

---

## Related Skills

- **marketing-strategy**: For the strategic priority, brand tier, and distribution-model context this campaign should trace back to
- **marketing-plan**: For where this sits in the broader dated marketing calendar
- **discount-and-clearance** / **offers**: For the promotional/discount mechanics if a commercial layer is part of the campaign
- **launch**: For a new-product go-to-market moment, if this campaign is tied to one
- **attribution**: For brand-lift and awareness measurement
- **ad-creative** / **image** / **brand-guidelines**: For cross-channel creative production and consistency
- **social** / **public-relations** / **emails** / **sms**: For channel-specific execution
- **programmatic** / **digital-out-of-home**: For CTV, video, and premium place-based media bought as part of the campaign's reach plan
- **media-plan**: For the reach/frequency goal, flighting pattern, and channel weighting/sequencing that turns the channel list into an actual media buy
- **supplier-funded-marketing**: For co-funded media or dealer-coordination funding, if applicable
