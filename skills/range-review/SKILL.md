---
name: range-review
description: "When the user wants to periodically review the product range/assortment and decide what to keep, grow, fix, cut, or add. Also use when the user mentions 'range review,' 'assortment planning,' 'assortment review,' 'SKU rationalization,' 'range rationalization,' 'category review,' 'which SKUs to cut,' 'range gaps,' or 'assortment optimization.' This is a periodic, cross-SKU exercise — for what happens to an individual SKU once a decision is made (phase it out, replace it, transition it), see product-lifecycle, which this skill hands off to. For the inventory disposition of a cut SKU, see overstock."
metadata:
  version: 1.0.1
---

# Range Review

You help users periodically review their full product range/assortment and decide, SKU by SKU or category by category, what to keep as-is, grow, fix, cut, or add. This is a cross-SKU strategic exercise — it decides *what belongs in the range*; `product-lifecycle` handles executing an individual decision once made.

## Before Starting

**Check for product marketing context first:**
Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions.

**Check three fields specifically:**
- **Section 12 (Strategic Priorities)** — range decisions should trace back to a stated priority (e.g., simplifying operations, moving upmarket, filling a competitive gap), not happen in isolation.
- **Section 14 (Brand Tier)** — see `marketing-strategy/references/brand-tier-guide.md`; range breadth-vs-depth strategy differs by tier (see "Range Architecture" below).
- **Section 15 (Distribution Model)** — if dealers are involved, see `marketing-strategy/references/distribution-model-guide.md`; some dealer agreements contractually require carrying a minimum range or specific SKUs, which constrains what can actually be cut.

Gather this context (ask if not provided):

### 1. Scope
- Full range, one category, or a specific set of SKUs under review?
- What triggered this — a scheduled/recurring review, or an event (declining category performance, a new competitor, a supplier change, a need to simplify operations)?

### 2. Data Available
- Sales and margin data by SKU (see `price-elasticity`/`pricing` for margin context)?
- Any customer feedback signal — reviews, support tickets, "why don't you carry X" requests (see `customer-research`)?
- Competitive range comparison already done, or needed (see `competitor-profiling`/`competitors`)?

### 3. Constraints
- Any contractual range commitments to dealers?
- Timeline and how disruptive a change can be (mid-season vs a natural category reset point)?

---

## The Review Framework

For each SKU or category under review, assess across these dimensions before deciding:

- **Sales performance** — revenue and trend, not just a point-in-time snapshot; a declining trend on an otherwise healthy SKU is a different signal than consistently low performance.
- **Margin contribution** — raw revenue can mislead; a high-revenue, low-margin SKU may contribute less than it appears to. See `price-elasticity` for the margin-vs-volume tradeoffs behind any related pricing question.
- **Range role** — not every SKU needs to be a top performer to earn its place:
  - **Hero / traffic-driver** — brings customers into the category or the brand, even at thin margin, because it leads to higher-margin attach or repeat purchase
  - **Margin-driver** — the actual profit engine, doesn't need to be the highest-volume item
  - **Range-completeness** — exists to avoid a customer bouncing to a competitor for a variant/size/price point you'd otherwise be missing, even if it doesn't sell much on its own
  - **Declining / no clear role** — the actual cut candidates; low performance *and* no strategic role to justify keeping it
- **Cannibalization / internal overlap** — does this SKU mostly take share from another SKU you also own, rather than adding incremental revenue? See `price-elasticity`'s cross-price elasticity section for how to check this rather than assume it.
- **Competitive gap** — what do competitors carry that this range doesn't, and is that a real gap or a deliberate positioning choice? See `competitor-profiling`/`competitors`.
- **Customer feedback signal** — recurring requests for a variant/size/format you don't carry, or recurring complaints about one you do — see `customer-research`'s support-ticket and review-mining methods.

---

## Decision Outcomes

- **Keep as-is** — performing to its role, no action needed.
- **Grow** — underinvested relative to its potential; increase marketing/merchandising attention.
- **Fix** — has a role worth keeping but isn't performing; consider a `product-lifecycle` Transition (reformulation, repackaging, reprice) before cutting.
- **Cut** — no performance and no strategic role. Hand off to `product-lifecycle` (Phase-Out, or Replacement if something will fill the gap) and `overstock` for the resulting inventory.
- **Add** — a real gap exists (competitive or customer-feedback-driven) worth filling. Hand off to `launch` for the go-to-market once the product itself is ready.

---

## Range Architecture

- **Breadth vs. depth by brand tier** — from `marketing-strategy/references/brand-tier-guide.md`'s underlying logic: budget/mid-market ranges often lean broad and shallow (many price points and variants to capture as much of the market as possible); premium/luxury ranges typically lean narrower and more curated (fewer, more deliberate SKUs — an overly broad premium range can dilute the brand's positioning as much as aggressive discounting does).
- **Good-Better-Best structure within a category** — see `pricing`'s Good-Better-Best framework; a range review is a natural point to check whether this structure is actually intact (clear differentiation between tiers) or has drifted (tiers too close in price/value to give the customer a real choice).
- **Dealer range requirements** — if a dealer agreement requires carrying a minimum set, factor that into what's actually cuttable versus what has to stay regardless of its own performance, and flag the tension explicitly if a contractually-required SKU is a genuine underperformer with no strategic role.

### When the Catalog Is Too Small for a Cross-SKU Review

A single-product business, or a catalog of only a handful of SKUs, doesn't have enough range to make the comparative dimensions above (relative sales performance, range role, breadth-vs-depth architecture) meaningful — there's nothing to compare against, and "cut the weakest performer" isn't a coherent question with one or two products. In that case:
- Redirect the same underlying questions inward, to variant/configuration level (sizes, colors, bundles) rather than SKU-to-SKU, if any variation exists at all.
- Treat "should we add a second product" as the actual range question — this is really a `launch`/`marketing-strategy` Section 12 strategic-priority decision, not a range-review exercise, since there's no existing range to rationalize against.
- Don't force a periodic range-review cadence (see Cadence & Governance) onto a business too small to have meaningfully changing data between reviews — a narrow catalog needs this exercise far less often.

---

## Cadence & Governance

Run a full review on a recurring cadence that matches the category's natural cycle (seasonal, annual) rather than reactively only when something's visibly wrong — by the time underperformance is obvious without a systematic review, the cost of carrying the wrong range has usually already compounded. Lighter, more frequent monitoring (a standing dashboard of the Review Framework's data points) between full reviews catches drift early.

This skill covers the marketing-relevant inputs and outputs of a range review (performance, positioning, customer signal, competitive gaps); the actual decision is typically cross-functional (with buying/merchandising, finance, and operations), not marketing's call alone.

---

## Common Mistakes

- **Cutting a low-revenue SKU without checking its range role** — a thin-margin traffic-driver or a range-completeness SKU can be doing real work that a pure revenue/margin ranking misses.
- **Keeping a SKU alive from sunk-cost attachment** despite poor performance and no strategic role — the range role check exists specifically to separate "this earns its place" from "we just haven't gotten around to cutting it."
- **Adding new SKUs without a plan to cut anything** — range bloat compounds inventory complexity and dilutes marketing attention across too many items; every "add" decision should prompt the question of what, if anything, it should replace.
- **Cutting without coordinating with `overstock`** — a cut decision made without a disposition plan for existing inventory just creates the next overstock problem.
- **Ignoring dealer contractual range requirements** when identifying cut candidates.
- **Treating this as a one-time exercise** rather than a recurring discipline — see Cadence & Governance.

---

## Task-Specific Questions

1. What's the scope — full range, one category, specific SKUs?
2. What triggered this review?
3. What sales, margin, and customer-feedback data is available?
4. Any contractual dealer range requirements to factor in?
5. Is this a recurring review or the first one being run?

---

## Related Skills

- **product-lifecycle**: For executing a Fix (transition), Cut (phase-out/replacement), or Add (hands to launch) decision once made
- **overstock**: For disposing of inventory from a cut SKU
- **price-elasticity** / **pricing**: For margin data and the Good-Better-Best structure this reviews against
- **competitor-profiling** / **competitors**: For competitive range-gap analysis
- **customer-research**: For the customer-feedback signal feeding the review
- **marketing-strategy**: For strategic priorities, brand tier, and distribution-model constraints
- **product-feed**: For the underlying SKU/performance data source
- **launch**: For go-to-market once an "Add" decision results in a real new product
- **trade-marketing**: For the mirror-image exercise from the seller's side — earning a place in a *retailer's* range, rather than reviewing your own
- **visual-merchandising**: For which reviewed SKUs earn priority physical placement
