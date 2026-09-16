---
name: inventory-management
description: "When the user wants to check or align marketing activity against actual stock levels before it runs — a pre-campaign stock check, low-stock or out-of-stock handling, safety-stock-aware promo timing, or a stock-to-sales/aging read that isn't a full range review. Also use when the user mentions 'stock check,' 'inventory visibility,' 'is this in stock,' 'don't promote what's out of stock,' 'stock-to-sales ratio,' 'safety stock,' 'low stock messaging,' 'sold out,' 'backorder,' or 'waitlist for out-of-stock item.' This is marketing's read of inventory data, not warehouse/supply-chain inventory optimization — that operational function isn't covered by this repo (see the boundary note below). For periodic cross-SKU keep/cut/grow decisions, see range-review. For disposing of excess/dead stock, see overstock. For a single SKU's phase-out or replacement, see product-lifecycle. For a geopolitical/logistics-driven shortage, see marketing-strategy/references/disruption-response-guide.md."
metadata:
  version: 1.0.0
---

# Inventory Management (Marketing's View)

You help users check and act on actual stock levels *before* marketing activity runs, so a campaign never drives demand toward something that can't be fulfilled. This is the fail-closed input `AGENTS.md` already names ("a recommendation involving specific SKUs needs their actual stock status if it's knowable — don't recommend promoting inventory that may already be sold out") — this skill is where that check actually happens, rather than being restated inline in every skill that touches a specific SKU.

**Not covered here: warehouse operations, demand forecasting/replenishment planning, or inventory optimization as an operations discipline.** Those are real functions this repo doesn't own, the same way NPD isn't covered by `product-lifecycle` and supply-chain fixes aren't covered by `disruption-response-guide.md`. This skill assumes stock-level data exists somewhere (an inventory system, a feed, a spreadsheet) and is about *using* it correctly in a marketing decision, not building or running the system that produces it.

## Before Starting

**Check for existing strategy context first:**
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions. Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).

**Check Section 15 (Distribution Model)** if dealers are involved — see `marketing-strategy/references/distribution-model-guide.md`'s Dealer Range Tiers section. Stock visibility is often split by channel (direct vs. dealer, core-range vs. extended-range dealer) and a check against the wrong channel's stock number gives a false answer.

Gather this context (ask if not provided):

### 1. What triggered this check
- Planning a new campaign/promotion on a specific SKU (pre-campaign check)?
- An existing campaign is still live and stock has since dropped (mid-campaign check)?
- A SKU just went out of stock and marketing needs to react (reactive check)?

### 2. Data availability
- Is real-time or near-real-time stock data actually accessible, or is this a manual/periodic check?
- Is stock visibility split by channel (direct warehouse vs. dealer-held stock)? See Related Skills for the dealer-range-tier implication.

---

## Pre-Campaign Stock Check

**Do this before launching any paid campaign, promotion, or feed-driven push on a specific SKU — not after.**

1. **Current stock level vs. expected campaign-driven demand.** Estimate the demand lift the campaign is likely to generate (from a comparable past campaign if one exists) and check it against current stock — a campaign that could plausibly sell through remaining stock in the first few days needs either more stock secured first or a capped/throttled campaign structure, not a full-volume launch into a shortage.
2. **Lead time to replenish.** If stock runs out mid-campaign, how long until more is available? A short lead time (days) is a manageable risk; a long one (weeks/months) means the campaign should be sized to the stock on hand, not the addressable audience.
3. **Safety stock threshold.** If the business has a defined safety-stock level (the minimum to always keep on hand), don't plan a campaign that would drive sales below it without an explicit decision to accept that risk.
4. **Fail closed if the data isn't available.** If stock status genuinely isn't knowable at the time of planning, say so plainly and name it as the blocker — per `AGENTS.md`'s fail-closed rule, don't assume adequate stock to keep the plan moving.

---

## Low-Stock Messaging

A real, low stock count is a legitimate urgency signal — a fabricated one is a compliance risk. See `offers/references/scarcity-urgency.md` for the distinction between earned and fake scarcity, and `compliance` for the dark-pattern risk of an "only X left" claim that isn't accurate at the moment it's shown:

- Only show a low-stock count if the number is real and reasonably current — a stale count that's since sold out (or since been restocked) undermines trust either direction.
- Don't manufacture urgency by artificially constraining the *displayed* stock number below the real one.
- A genuinely low stock count on a popular SKU is a real reason to prioritize it in a campaign, not just a messaging device — check whether the campaign should shift budget toward it before it sells out, not just add urgency copy to the existing plan.

---

## Out-of-Stock Handling

Once a SKU is actually out of stock, marketing's job shifts from driving demand to managing the gap honestly:

- **Pause or redirect live demand generation** — see `ads`/`retail-media` for pausing paid placements, and `product-feed` for pulling or flagging the SKU in the shopping feed so it doesn't keep surfacing to shoppers who can't buy it.
- **Waitlist capture** where restock is expected — collect interest rather than losing the visit entirely, and be honest about the expected restock timeline (or its absence) rather than implying a date that isn't confirmed.
- **Backorder, if genuinely fulfillable** — state the real expected ship date; see `marketing-strategy/references/disruption-response-guide.md` for the fuller honest-communication discipline if the stockout is part of a larger supply disruption rather than a one-off.
- **Honest substitution** — see `cro`/`product-feed` for surfacing an in-stock alternative, and `range-review` for whether it's actually close enough to recommend rather than just the next SKU in the same category.

---

## Multi-Channel Stock Visibility

For a business selling through both a direct channel and a dealer network, "is this in stock" doesn't have one answer:

- **Direct/warehouse stock** is usually the most visible and real-time.
- **Dealer-held stock** is often much harder to see centrally, and split further by dealer range tier — see `marketing-strategy/references/distribution-model-guide.md`'s Dealer Range Tiers section: a core-range dealer's "out of stock" on an extended-range-only SKU may just mean they never carried it, not that supply ran out.
- **The post-transaction dealer-selection commission mechanic** (same guide) is one place this matters directly — don't let a customer select a dealer for a product that dealer's tier doesn't actually stock.
- If dealer-side stock visibility doesn't exist at all, say so as a named gap rather than assuming direct-channel stock data represents the whole business.

---

## Stock-to-Sales and Related Metrics

For the actual formulas and category benchmarks (stock-to-sales ratio, inventory turns, aging analysis), see `commercial-ops/references/retail-revops.md` — this skill doesn't duplicate that math, it's the layer that decides what marketing does in response to what those numbers say. A rising stock-to-sales ratio on a specific SKU is an early signal worth feeding to `range-review` or `overstock` before it becomes a full aging-inventory problem; a falling one on a fast-moving SKU is the signal this skill's Pre-Campaign Stock Check exists to catch before a campaign outruns supply.

---

## Common Mistakes

- **Launching a campaign sized to audience reach instead of available stock** — the single most common cause of an avoidable, self-inflicted stockout.
- **Treating a stockout as purely an operations problem** once it happens, and leaving live ads/feed listings running — the marketing side of the response (pause, message, redirect) is this skill's job even though the cause usually isn't.
- **Assuming direct-channel stock data represents dealer-network stock too**, when the two are frequently tracked in entirely separate systems.
- **Fabricating or exaggerating a low-stock count** for urgency — see Low-Stock Messaging above.

## Task-Specific Questions

1. Is this a pre-campaign check, a mid-campaign check, or a reactive out-of-stock response?
2. Does the business sell through dealers, and if so, is dealer-side stock visible at all?
3. What's the lead time to replenish this specific SKU if it sells out?
4. Is there a defined safety-stock threshold for this SKU, or does the business not track one?

## Related Skills

- **overstock**: For the inverse problem — excess/aging stock and its disposition
- **range-review**: For a periodic, cross-SKU keep/cut/grow decision informed by stock-to-sales trends
- **product-lifecycle**: For a single SKU's phase-out or replacement, including remaining-inventory sell-through timing
- **marketing-strategy/references/disruption-response-guide.md**: For a stockout that's part of a larger geopolitical/logistics-driven supply disruption
- **marketing-strategy/references/distribution-model-guide.md**: For dealer range tiers and channel-split stock visibility
- **ads** / **retail-media** / **product-feed**: For pausing or redirecting live demand generation once a SKU is out of stock
- **offers** / **compliance**: For the honest-vs-fabricated scarcity distinction in low-stock messaging
- **commercial-ops**: For the underlying stock-to-sales ratio, inventory turns, and aging-analysis formulas and benchmarks
- **cro**: For surfacing an honest in-stock substitute on a sold-out product page
