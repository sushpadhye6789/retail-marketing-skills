---
name: discount-and-clearance
description: "When the user wants to plan, structure, or message a discount or clearance event — sizing the depth, cadence, and messaging, regardless of what triggered it. Also use when the user mentions 'discount,' 'clearance,' 'markdown,' 'sale event,' 'flash sale,' 'how deep should this discount be,' 'clearance section,' or 'end-of-season sale.' If the trigger is specifically excess/aging/dead inventory, start with overstock instead — it handles the inventory diagnosis and disposition-channel decision, then hands off here for the discount mechanics. For sizing the actual discount depth against margin, see price-elasticity. For the offer mechanics (bundling, scarcity, guarantees), see offers. For the brand-tier and distribution-model context that shapes how public a discount can be, see marketing-strategy."
metadata:
  version: 1.0.1
---

# Discount & Clearance

You help users plan and execute a discount or clearance event — sizing the depth and cadence, structuring the messaging, and avoiding the trap of training customers to wait for the next sale. This skill covers the discount/marketing mechanic itself, for any trigger: overstock, planned seasonal clearance, a calendar promotional event, a dealer-required sale, or a loyalty-tier perk.

**If the trigger is excess, aging, or dead inventory specifically**, start with the `overstock` skill instead — it handles diagnosing why the inventory is stuck and choosing a disposition channel (public sale vs. discreet liquidation), and hands off here once "run a public discount" is the chosen path. Using this skill alone for an overstock situation skips the diagnosis that determines whether a public discount is even the right move.

## Before Starting

**Check for product marketing context first:**
Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions.

**Check Section 14 (Brand Tier & Price Positioning) and the distribution-model context specifically, before recommending anything.** Discount depth and channel is one of the most tier- and channel-sensitive tactics in this repo:
- See `marketing-strategy/references/brand-tier-guide.md`'s discounting row — a tactic that's routine for a budget brand can meaningfully damage a premium or luxury brand's positioning.
- If the brand sells through dealers/wholesale, see `marketing-strategy/references/distribution-model-guide.md` — a public discount that undercuts dealer pricing or violates a MAP agreement is a channel-conflict problem, not just a brand-perception one.

Gather this context (ask if not provided):

### 1. What's Triggering This
- Overstock/excess inventory? → route to `overstock` first.
- Planned seasonal clearance, a calendar promotional event, a dealer-required event, or a loyalty perk? → continue here.
- Margin on the product, and floor price?

### 2. Brand & Channel Constraints
- Brand tier — how public can this be?
- Distribution model — any MAP agreements or dealer coordination required?
- Has this category been discounted before, and how did full-price sales respond afterward?

### 3. Timeline
- Fixed dates (a calendar event) or flexible?
- One-time or a recurring cadence (seasonal, always-on)?

---

## Markdown Cadence & Depth

**Depth should come from `price-elasticity`, not a guess.** The margin-vs-elasticity logic there tells you whether a given discount grows or shrinks profit — this skill assumes that input and focuses on *how* to structure and message the markdown, not the number itself.

A common structural pattern (illustrative, not a rule — adapt the specific percentages and timing to your own margin and urgency): a step-down cadence over a defined window — a first markdown, a deeper one after a set period if sell-through targets aren't hit, and a final clearance depth as the deadline approaches. The structure — start shallower, deepen only if needed, reserve the deepest cut for genuinely final clearance — matters more than the specific percentages, because it avoids giving away margin on units that would have sold at a shallower discount anyway.

**Set a floor before starting.** For a fixed-date event this is straightforward; for a rolling clearance, decide in advance what happens to anything unsold at the deadline (hand off to `overstock` for the disposition decision) rather than deciding under deadline pressure.

---

## Tactics

- **Bundling** — pair a slower-moving SKU with a faster-moving one at a bundle price, rather than a naked discount. See `offers/references/offer-formats.md` and `bonus-stacking.md` for bundle-logic guidance — the bundle needs to solve a real use-case pairing, or it reads as inventory-dumping even to a casual shopper.
- **Time-boxed flash sales** — real, disclosed time limits work well for budget/mid-market and are honest when there's a genuine reason the window is real (a calendar event, discontinued stock). See `offers/references/scarcity-urgency.md` — a real deadline is one of the few cases where aggressive urgency framing is earned, not manufactured.
- **Dedicated outlet/clearance section** — keeps clearance-shopping customers separate from full-price browsing, protecting the perceived value of the main catalog, and lets clearance pricing/messaging be more aggressive than the main site without spilling over.
- **Loyalty-tier early access** — gives a discount event a non-public first phase, useful across tiers (see `loyalty`) and particularly for premium brands wanting to limit public visibility.

---

## Avoiding the "Everything's Always On Sale" Trap

Discount frequency itself teaches customer behavior — if a discount shows up often enough, price-sensitive customers learn to wait for it, which shifts the *effective* full price down permanently and (per `price-elasticity`) can make future full-price sales harder to elasticity-justify. This risk scales with tier: a budget brand's customers already expect frequent discounting as the model, so there's less to protect; a mid-market or premium brand training its base to wait for sales is giving up margin it didn't need to.

If discount events are becoming frequent enough that this is a live risk, and the recurring trigger is inventory, that's a signal worth surfacing back through `overstock` — a marketing fix for a recurring buying/forecasting problem just treats the symptom.

---

## Messaging by Cause

Match urgency language to the real reason:

- **Discontinued/end-of-line inventory**: "Gone once it's gone" is true here — use it directly.
- **Planned seasonal clearance**: expected and low-risk to message plainly — customers already anticipate end-of-season sales in most categories.
- **Calendar promotional event**: frame around the event/occasion, not manufactured product-specific urgency.
- **Never claim "last chance" for something that will restock** — this is the exact fake-scarcity pattern `offers/references/scarcity-urgency.md` warns against, and customers who feel misled by clearance messaging are unlikely to buy at full price later.

---

## Measurement

- **Sell-through rate** against the deadline, tracked against the markdown cadence's checkpoints
- **Full-price sales impact** — did the discount event cannibalize full-price sales of the same or adjacent SKUs during the window (see `price-elasticity`'s cross-price elasticity section)
- **Repeat behavior post-event** — did discount-event buyers become full-price repeat customers, or one-time discount shoppers? This is the leading indicator of whether frequent discounting is training the wrong behavior
- **Dealer channel impact**, if applicable — did the event affect dealer sell-through or trigger any MAP complaints (see `marketing-strategy/references/distribution-model-guide.md`)

---

## Common Mistakes

- **Running a discount without checking whether the real trigger is inventory** — see the routing note at the top; skipping the `overstock` diagnosis means missing whether a public discount is even the right disposition.
- **Guessing the discount depth instead of sizing it from elasticity and margin** — see `price-elasticity`.
- **Discounting publicly at a tier or through a channel where it does more damage than the margin recovered is worth** — see Before Starting.
- **Fake urgency on inventory that will restock** — destroys trust in future genuine urgency messaging, at any tier.
- **Letting discount frequency creep until it's effectively a lower everyday price** — see "Avoiding the Trap" above.
- **Ignoring cannibalization of full-price siblings** — a discount on one SKU can just be moving demand from a full-price adjacent product, not creating new demand.

---

## Task-Specific Questions

1. What's triggering this discount — and if it's inventory, has `overstock` already run the diagnosis?
2. What's the brand tier and distribution model, and what do they imply about how public this can be?
3. What's the margin and floor price?
4. Fixed dates or flexible timing?
5. Has this category been discounted before, and how did full-price sales respond afterward?

---

## Related Skills

- **overstock**: For diagnosing an inventory-driven trigger and choosing a disposition channel before this skill's execution mechanics apply
- **price-elasticity**: For sizing the actual discount depth against margin, rather than guessing
- **offers**: For bundle mechanics and scarcity/urgency framing used in a discount push
- **pricing**: For the ongoing price/tier structure a discount event is an exception to, not a replacement for
- **marketing-strategy**: For the brand tier and distribution model context that drives how public this can be
- **loyalty**: For loyalty-tier early access as a discount-event structure
- **emails** / **sms** / **popups**: For the execution channels that announce a discount event
- **marketing-psychology**: For the anchoring and sale-fatigue effects behind "Avoiding the Trap" above
- **analytics**: For tracking sell-through and full-price cannibalization
