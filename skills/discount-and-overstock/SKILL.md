---
name: discount-and-overstock
description: "When the user wants to clear overstock, aging, or discontinued inventory, or decide how deep and how often to discount. Also use when the user mentions 'overstock,' 'clearance,' 'liquidation,' 'markdown,' 'excess inventory,' 'dead stock,' 'aging inventory,' 'how do I clear inventory,' 'flash sale,' 'outlet strategy,' or 'end of line.' This is inventory-driven marketing — the trigger is a business constraint (too much stock), not a funnel stage or a calendar event. For sizing the actual discount depth with real elasticity data, see price-elasticity. For the offer mechanics (bundling, scarcity, guarantees) used in a clearance push, see offers. For ongoing pricing/tier structure, see pricing."
metadata:
  version: 1.0.0
---

# Discount & Overstock

You help users clear overstock, aging, or discontinued inventory profitably — without training customers to wait for the next sale, and without damaging brand positioning in the process. This is inventory-driven marketing: the trigger is a supply-side constraint, not a funnel stage or calendar event.

## Before Starting

**Check for product marketing context first:**
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions.

**Check Section 14 (Brand Tier & Price Positioning) specifically, before recommending anything.** Of every tactic in this repo, discount depth and channel is the most tier-sensitive — see `marketing-strategy/references/brand-tier-guide.md`'s discounting row. A tactic that's routine for a budget brand can meaningfully damage a premium or luxury brand's positioning. If the tier isn't captured yet, ask directly rather than assuming.

Gather this context (ask if not provided):

### 1. The Inventory Problem
- What's overstocked, and why? (see "Diagnosing the cause" below — the cause changes the right tactic)
- How much inventory, and what's the carrying cost / deadline pressure (lease expiry, perishability, seasonal obsolescence, warehouse space)?
- Margin on the product, and floor price (cost + minimum acceptable margin, or true floor if this is a write-off-avoidance situation)?

### 2. Brand Constraints
- Brand tier (see above) — how much can this be public vs. needs to be discreet?
- Any MAP (minimum advertised price) agreements or retail partner constraints limiting how this can be discounted?
- Has this SKU/category been discounted before, and how did customers respond (did it depress future full-price sales)?

### 3. Timeline
- Hard deadline (lease, expiry, season) or flexible?
- One-time event or does this recur (which points to a root-cause problem, not just a marketing problem — see Common Mistakes)?

---

## Diagnosing the Cause

Different causes call for different tactics — don't default to "run a sale" without identifying which of these it is:

| Cause | What it implies |
|---|---|
| **One-time over-order** | A single clearance event usually resolves it; no need to establish an ongoing discount pattern |
| **Seasonal slow mover** | May just need to wait for next season, or a modest, expected seasonal markdown (customers already anticipate end-of-season sales in most categories) |
| **Discontinued / end-of-line** | Legitimate, honest urgency ("this specific item is gone for good") — the one case where "last chance" messaging is true, not manufactured |
| **Chronically slow SKU** | The real problem is likely buying/forecasting, not marketing — clearing it this time doesn't fix the next over-order. Flag this back to the user; recurring overstock is an ops problem wearing a marketing costume |
| **Damaged / returned / near-expiry** | Often needs a distinct channel (outlet, "open box," secondary marketplace) rather than blending into the main clearance flow, both for honesty and to avoid discounting perfectly good full-price inventory in the same push |

---

## Markdown Cadence & Depth

**Depth should come from `price-elasticity`, not a guess.** The margin-vs-elasticity logic there tells you whether a given discount grows or shrinks profit — this skill assumes that input and focuses on *how* to structure and message the markdown, not the number itself.

A common structural pattern (illustrative, not a rule — adapt the specific percentages and timing to your own margin and urgency): a step-down cadence over a defined window, e.g. a first markdown, a deeper one after a set period if sell-through targets aren't hit, and a final clearance depth as the deadline approaches. The structure — start shallower, deepen only if needed, reserve the deepest cut for genuinely final clearance — matters more than the specific percentages, because it avoids giving away margin on units that would have sold at a shallower discount anyway.

**Set a floor before starting**, and decide in advance what happens to anything left at the deadline (write off, donate, liquidation partner) — deciding under deadline pressure tends to produce worse decisions than deciding up front.

---

## Channel Selection by Tier

This is where brand tier matters most. From `marketing-strategy/references/brand-tier-guide.md`:

| Tier | Recommended liquidation channel |
|---|---|
| **Budget** | Public sale, site-wide banner, email/SMS blast — discounting is expected and part of the model |
| **Mid-market** | Public but framed as an event (a named sale, seasonal timing) rather than a constant state |
| **Premium** | Loyalty-tier early access or a private sale page before (or instead of) a public one; keep frequency low |
| **Luxury** | Avoid public discounting entirely where possible. Use private outlet channels, off-price/liquidation wholesale partners, employee sales, or donation for a tax write-off. The cost of the lost inventory value is often smaller than the cost of a public discount training the core customer base to wait, or a discounted item surfacing on a public marketplace and undercutting full-price positioning |

For premium/luxury liquidation specifically, off-price wholesale and liquidation-marketplace partners (the category includes services like B-Stock and Liquidation.com, among others — evaluate current options rather than treating any single name as an endorsement) let inventory move without the brand's own channels ever showing a discount.

---

## Tactics

- **Bundling** — pair a slow-moving SKU with a fast-moving one at a bundle price that moves the slow item without a naked discount on it. See `offers/references/offer-formats.md` and `bonus-stacking.md` for bundle-logic guidance; the same "solve a real use-case pairing" rule applies — an arbitrary bundle reads as inventory-dumping even to a casual shopper.
- **Time-boxed flash sales** — real, disclosed time limits work well for budget/mid-market and are honest when the inventory genuinely needs to move by a real date. See `offers/references/scarcity-urgency.md` — this is one of the few cases where aggressive urgency framing is *earned*, not manufactured, because the deadline (a lease, a season, a discontinued line) is real.
- **Dedicated outlet/clearance section** — keeps clearance-shopping customers separate from full-price browsing, protecting the perceived value of the main catalog; also lets clearance pricing/messaging be more aggressive than the main site without spilling over.
- **Employee/insider sales** — a private, low-visibility channel that works at any tier, particularly useful for premium/luxury where a public price cut is the highest-risk option.
- **Write-off or donation** — a legitimate option when even discreet liquidation risks brand damage (counterfeiting concerns for very high-end goods, or genuinely damaged stock) or when the tax/accounting treatment makes it the better financial outcome than the time and channel cost of liquidating.

---

## Avoiding the "Everything's Always On Sale" Trap

Discount frequency itself teaches customer behavior — if a discount shows up often enough, price-sensitive customers learn to wait for it, which shifts the *effective* full price down permanently and (per `price-elasticity`) can make future full-price sales harder to elasticity-justify. This risk scales with tier: a budget brand's customers already expect frequent discounting as the model, so there's less to protect; a mid-market or premium brand training its base to wait for sales is giving up margin it didn't need to.

If clearance events are becoming frequent enough that this is a live risk, that's itself a signal pointing back to the "chronically slow SKU" row in Diagnosing the Cause — the marketing fix (better clearance execution) is treating a symptom of a buying/forecasting problem.

---

## Messaging by Cause

Match urgency language to the real reason, from the Diagnosing table above:

- **Discontinued/end-of-line**: "Gone once it's gone" is true here — use it directly.
- **One-time over-order**: neutral, practical framing ("we ordered too much — here's the deal") can work well and reads as honest rather than salesy, especially for mid-market/premium audiences who are wary of manufactured urgency.
- **Seasonal**: expected and low-risk to message plainly — customers already anticipate end-of-season sales in most categories.
- **Never claim "last chance" for something that will restock** — this is the exact fake-scarcity pattern `offers/references/scarcity-urgency.md` warns against, and it's especially costly here because clearance customers who feel misled are unlikely to buy at full price later.

---

## Measurement

- **Sell-through rate** against the deadline, tracked against the markdown cadence's checkpoints
- **Margin recovered vs. written off** — the actual dollar comparison between "sold at markdown" and "would have been written off entirely"
- **Full-price sales impact** — did clearance activity cannibalize full-price sales of the same or adjacent SKUs during the window (see `price-elasticity`'s cross-price elasticity section)
- **Repeat behavior post-clearance** — did clearance buyers become full-price repeat customers, or one-time discount shoppers? This is the leading indicator of whether frequent clearance is training the wrong behavior

---

## Common Mistakes

- **Running a sale before diagnosing the cause** — a chronically slow SKU needs a buying-process fix, not another markdown event; treating the symptom repeatedly compounds the margin cost.
- **Guessing the discount depth instead of sizing it from elasticity and margin** — see `price-elasticity`.
- **Discounting publicly at a tier where it damages the brand more than the inventory is worth** — see Channel Selection by Tier.
- **Fake urgency on inventory that will restock** — destroys trust in future genuine urgency messaging, at any tier.
- **Letting clearance frequency creep until it's effectively a lower everyday price** — see "Avoiding the Trap" above.
- **Ignoring cannibalization of full-price siblings** — a discount on one SKU can just be moving demand from a full-price adjacent product, not creating new demand.

---

## Task-Specific Questions

1. What's overstocked, how much, and why (see Diagnosing the Cause)?
2. What's the brand tier, and what channel does that point to?
3. What's the margin and floor price?
4. Is there a hard deadline, or flexibility?
5. Has this category been discounted before, and how did full-price sales respond afterward?
6. One-time event, or is this a recurring problem worth flagging as a buying/forecasting issue?

---

## Related Skills

- **price-elasticity**: For sizing the actual markdown depth against margin, rather than guessing
- **offers**: For bundle mechanics and scarcity/urgency framing used in a clearance push
- **pricing**: For the ongoing price/tier structure this is an exception to, not a replacement for
- **marketing-strategy**: For the brand tier field that drives channel selection here
- **emails** / **sms** / **popups**: For the execution channels that announce a clearance event
- **marketing-psychology**: For the anchoring and sale-fatigue effects behind "Avoiding the Trap" above
- **analytics**: For tracking sell-through and full-price cannibalization
