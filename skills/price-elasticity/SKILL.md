---
name: price-elasticity
description: "When the user wants to understand or estimate how demand responds to a price change, decide how much they can raise prices, size a discount, or reason about willingness-to-pay data as an economic effect rather than just a survey result. Also use when the user mentions 'price elasticity,' 'elastic demand,' 'inelastic demand,' 'price sensitivity,' 'demand curve,' 'how much can I raise prices,' 'will a price increase hurt sales,' 'how deep should this discount be,' 'cross-price elasticity,' or 'price test.' For willingness-to-pay research methods (Van Westendorp, MaxDiff) and tier structure, see pricing — this skill covers the causal, measured relationship between price and quantity, not stated preference. For sizing a specific markdown, see discount-and-clearance; for an inventory liquidation/disposition decision, see overstock. Both use this skill's method."
metadata:
  version: 1.0.1
---

# Price Elasticity

You help users understand and estimate how demand for their product responds to price changes, and use that to make pricing, discounting, and promotion decisions with actual evidence instead of guesswork.

**This skill does not assert elasticity numbers for any category or product.** Elasticity varies enormously by product, brand, substitutability, and market conditions — a number stated here would be fabricated, not measured. Every number in a real analysis has to come from the user's own sales data, a real test, or a cited external source they bring. This skill's job is the method: how to measure it, how to interpret it, and how to use it in a decision.

## Before Starting

**Check for product marketing context first:**
Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions. Pay attention to Section 14 (Brand Tier & Price Positioning) if present — see "Tier and elasticity" below, tier changes what a "normal" elasticity pattern looks like and what to do about it.

Gather this context (ask if not provided):

### 1. What decision this is for
- Considering a price increase, a discount/promo, a bundle price, or just trying to understand the category?
- What's the margin on the product (needed to translate elasticity into a profit decision, not just a revenue one)?

### 2. What data already exists
- Any history of price changes with sales data around them?
- Any completed A/B or geo price tests?
- Any Van Westendorp/MaxDiff research already done (see `pricing`)?

### 3. Constraints
- Any price floor (cost + minimum margin) or ceiling (competitive positioning, MAP agreements)?
- Timeline — is this a one-time decision or an ongoing pricing/promo cadence?

---

## The core concept

Price elasticity of demand measures how much quantity demanded changes in response to a price change:

```
Elasticity = % change in quantity demanded ÷ % change in price
```

By convention the result is usually reported as a positive number (the underlying relationship is negative — price up, quantity down — economists just drop the sign).

| Elasticity | Meaning | What a price cut does to revenue |
|---|---|---|
| **> 1 (elastic)** | Quantity changes more than price | A price cut *increases* total revenue (volume gain outweighs the per-unit loss) |
| **= 1 (unit elastic)** | Quantity changes proportionally to price | Revenue stays roughly flat either direction |
| **< 1 (inelastic)** | Quantity changes less than price | A price cut *decreases* total revenue (volume gain doesn't make up for the per-unit loss); a price increase grows revenue |

This is the single most useful thing elasticity tells you: **whether a price cut helps or hurts revenue at all**, before you even get to whether it helps profit (which also depends on margin — see "Using elasticity to size a decision" below).

---

## What structurally drives elasticity

These are general economic patterns, not numbers to plug in — use them to sanity-check a measured result or form a starting hypothesis before you have data, never as a substitute for measuring:

- **Number of close substitutes**: more substitutes the customer could switch to → more elastic. A commodity-like product in a crowded category is almost always more elastic than a differentiated one.
- **Share of budget**: the bigger a purchase relative to what the customer typically spends in the category, the more elastic — small, habitual purchases are often surprisingly inelastic.
- **Necessity vs. discretionary**: necessities tend inelastic (people buy them regardless of price, within a range); discretionary/luxury purchases can be elastic in the normal range but sometimes show the opposite pattern near the top of a category — a price cut on a status good can reduce perceived value and demand along with it (a Veblen-like effect). This is why brand tier matters — see below.
- **Habit and switching cost**: subscriptions and habitual repeat-purchase products tend more inelastic than one-time discretionary purchases, because switching has friction beyond price.
- **Time horizon**: elasticity is usually higher in the long run than the short run — customers need time to find and switch to substitutes, so a short price-test window can understate true elasticity.

## Tier and elasticity

If `.agents/marketing-strategy.md` Section 14 names a tier, factor it in before assuming a "normal" elastic-demand-curve pattern:

- **Budget/mid-market**: usually behaves like the textbook curve — price down, quantity up, roughly the direction and magnitude you'd expect from the structural drivers above.
- **Premium/luxury**: can show flatter or even inverted patterns near the top of the range — a public discount can reduce perceived value enough to *depress* demand from the segment that buys specifically because of the price signal, even while it attracts some new, more price-sensitive buyers. If the brand is premium/luxury, don't assume a clean price cut → volume increase relationship without testing for this; see `marketing-strategy/references/brand-tier-guide.md` on discounting risk at those tiers, and consider testing a price *increase* or a value-add instead of a cut when trying to move volume.

---

## Estimation methods

### 1. Historical/observational analysis

If the business has any history of price changes, this is the fastest starting point — but it's the weakest method causally, because other things usually moved at the same time as the price (seasonality, a concurrent promotion, a competitor's move, ad spend changes).

- Pull every historical price change with the surrounding 4-8 weeks of unit sales, controlling as best you can for season and concurrent campaigns.
- If there have been several independent price changes at different points, a simple regression of log(quantity) on log(price) gives an elasticity estimate directly (the coefficient on log-price is the elasticity).
- Weakest evidence, but free and immediate — use it to form a hypothesis to test, not as the final answer for a consequential decision.

### 2. Controlled price testing

The strongest method. Structurally the same experimental design as the `attribution` skill's incrementality testing — the difference is the treatment is a price change instead of a channel on/off.

- **Geo-based price test**: run a different price in comparable regions/markets, hold everything else constant, compare the quantity response. Reuse `attribution/references/measurement-paradigms.md`'s geo-holdout design guidance directly — same statistical logic.
- **Randomized within-platform test**: some platforms and tools support price experiments to randomized customer segments (audience-split, not geo). Use where available for cleaner attribution of the effect.
- **Before/after with a real holdout**: if a true experiment isn't possible, at minimum hold a comparable segment or region at the old price as a control, rather than just comparing before vs. after (which conflates the price change with everything else that changed over time).

### 3. Stated preference (Van Westendorp, MaxDiff)

Covered in depth in `pricing/references/research-methods.md` — don't duplicate that method here, but know how it differs from elasticity: stated-preference research asks customers what they'd pay; elasticity measures what they actually do when price changes. The two often disagree, usually because stated willingness-to-pay overstates price sensitivity people don't actually act on, or misses real-world friction/habit effects. Use stated preference to form a hypothesis or set a starting range; use real elasticity data (or a controlled test) to confirm before making a consequential pricing move.

### 4. Cross-price elasticity

How a *different* product's price affects this product's demand — relevant for bundle pricing, complementary and substitute SKUs within the same catalog.

- **Substitutes** (two products the customer would swap between): a price cut on one typically reduces demand for the other — relevant when discounting one SKU inside a catalog that has a close substitute, since some of the "lift" is actually cannibalization, not new demand. Same logic `ads/references/google-search-playbook-ecommerce.md`'s brand-cannibalization pause test uses, applied to price instead of ad spend.
- **Complements** (products bought together): a price cut on one can increase demand for the other (a razor-and-blades or a serum-and-moisturizer pairing) — this is the economic logic behind loss-leader bundle pricing, and worth testing explicitly rather than assuming.

### When there isn't enough data for any of the above

A low-volume SKU, a brand-new product with no sales history, or a small business with too few total transactions to detect a statistically meaningful response — all four methods above need volume to work, and none of them produce a trustworthy number below some threshold. Don't force a precise elasticity estimate out of data that can't support one; instead:

- **Borrow from a comparable SKU or category** with enough volume to have a real estimate, and treat the borrowed number as a rough prior, not a precise figure specific to this product.
- **Widen the price-test increments** — a small price change is the hardest to detect with thin data; a larger, more deliberate test move (still within a defensible range) produces a clearer signal even from a smaller sample, at the cost of more risk if the move is wrong.
- **Extend the test window** rather than the sample size, if volume genuinely can't be increased — more weeks of data on a slow-moving SKU partially substitutes for more transactions, though seasonality risk grows with a longer window.
- **Fall back to stated preference or competitive/market pricing signals** (see method 3, and `pricing`'s competitive-price-monitoring reference) as the primary input, and say plainly that the resulting price is a judgment call informed by proxy data, not a measured elasticity — that's more honest than presenting a number precision the data can't support.

---

## Using elasticity to size a decision

Elasticity alone answers "does a price cut grow revenue." Turning that into a profit decision requires margin too.

The general logic (illustrative, not a formula to blindly apply — always check against your own numbers):

- A price cut grows **profit** only if the volume increase's *contribution margin* (extra units × margin per unit) exceeds the margin given up on units you would have sold anyway at the old price.
- The higher your margin, the more a price cut can "afford" in elasticity terms — a high-margin product can profit from a price cut at a lower elasticity than a thin-margin product can.
- The reverse holds for price increases: the question isn't just "will I lose some customers" but "does the margin gained on the customers who stay outweigh the margin lost from the ones who leave."

**Worked example (illustrative numbers, not a benchmark):** a product at $50 with 60% gross margin ($30 contribution per unit) selling 1,000 units/month. A 10% price cut to $45 needs enough volume increase to grow *total* contribution, not just revenue — at $45 the margin per unit drops to $25, so you'd need roughly a 20%+ volume increase just to hold contribution flat, and more than that to grow it. That volume response is exactly what elasticity tells you — if your measured or estimated elasticity implies less than a ~20% volume lift from a 10% price cut, this specific cut destroys profit even though it might grow revenue.

For discount-specific sizing (markdown depth), see the `discount-and-clearance` skill. For the inventory diagnosis and disposition-channel decision on aging/excess stock, see `overstock` — both apply this same logic with liquidation urgency as an added factor.

---

## Common mistakes

- **Treating a single before/after price change as elasticity** — without controlling for season, promotions, or competitor moves, you're measuring the combined effect of everything that changed, not price alone.
- **Assuming elasticity is constant across the price range** — it usually isn't; demand curves are rarely straight lines. An elasticity measured from a 5% test doesn't necessarily hold for a 30% price move.
- **Ignoring cross-price effects within your own catalog** — a discount that looks like it "worked" because that SKU sold more can be partly or entirely cannibalizing a full-price sibling product.
- **Applying a textbook elasticity assumption to a premium/luxury brand without testing** — see "Tier and elasticity" above; the standard demand-curve intuition can fail exactly where the stakes (brand equity) are highest.
- **Confusing stated willingness-to-pay with revealed elasticity** — see Method 3. Survey answers are a hypothesis, not a measurement.
- **Ignoring competitor reaction** — an isolated price cut that gets matched by a competitor produces a different, usually worse, real-world result than the elasticity estimate alone predicts, because the competitor's move is a confound your test likely didn't capture.

---

## Task-Specific Questions

1. What decision is this for — a one-time price change, an ongoing promo cadence, or general understanding?
2. What's the margin on the product?
3. Any history of price changes or existing research (Van Westendorp/MaxDiff) to start from?
4. Can you run a controlled test (geo or audience split), or are we working from historical data only?
5. Any price floor or ceiling constraints (cost, MAP agreements, competitive positioning)?
6. What tier is the brand (see `marketing-strategy` Section 14), and does the standard demand-curve assumption need a second look because of it?

---

## Related Skills

- **pricing**: For willingness-to-pay research (Van Westendorp, MaxDiff), tier structure, and the pricing page itself
- **discount-and-clearance**: For applying this skill's method to size a specific markdown
- **overstock**: For the inventory diagnosis and disposition decision this skill's method feeds into
- **attribution**: For the geo-holdout/controlled-test methodology this skill reuses for price testing
- **ab-testing**: For general experiment design and statistical significance when running a price test
- **marketing-strategy**: For the brand tier field that changes whether the standard elastic-demand assumption applies
- **ads**: For the brand cross-cannibalization pause-test pattern this skill's cross-price elasticity section reuses
