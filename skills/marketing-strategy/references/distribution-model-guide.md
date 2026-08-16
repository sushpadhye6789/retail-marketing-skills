# Distribution Model Guide

How to classify a brand's distribution model, and how that classification should change the *default* guidance other skills give. This is a separate axis from brand tier (`brand-tier-guide.md`) — a brand can be any tier at any distribution model, but the two combine to change what's even *possible*, not just what's advisable.

## Defining the three models

| Model | What it means | What it doesn't include |
|---|---|---|
| **Ecom-only** | Sell only through your own online store/app. No physical retail, no third-party resellers. | Marketplace presence (Amazon, etc.) is a judgment call — treat as ecom-only if it's still fully your own pricing/control, note it separately if a marketplace's own dynamics (its search algorithm, its review system) start acting like a semi-independent channel |
| **Own stores** | The above, plus your own physical retail locations. Still fully vertically integrated — every point of sale is controlled by the brand. | Franchised or licensed stores that aren't wholly owned belong in the Dealers row instead — the test is who sets the price and controls the customer relationship at that location |
| **Dealers** | Sell through third-party retailers, dealers, or distributors who buy (or consign) inventory and resell it to the end customer. | A single big affiliate or influencer partnership isn't a dealer relationship — this is specifically about a channel where a third party controls pricing/promotion decisions within whatever constraints your agreement sets |

**A business can run more than one model** — e.g., a DTC ecom store that also sells through a dealer network for certain product lines or regions. Capture the split explicitly in marketing-strategy Section 15 rather than forcing one label.

**A note on franchises**: a franchised location belongs in the Dealers row (per the table above — the franchisee, not the brand, controls the point of sale), but franchise agreements typically add two wrinkles a generic dealer relationship doesn't have: a **mandatory contribution to a national ad fund** (a fixed percentage of franchisee revenue, not an opt-in co-op arrangement — see `supplier-funded-marketing`'s Providing Funds section for how this compares to a standard MDF structure), and **materially stricter brand-standard enforcement**, since a franchisee's entire business identity is the franchised brand rather than one brand among several a dealer carries. Treat the Dealers guidance throughout this file as the baseline, with enforcement and fund-structure expectations tightened accordingly.

---

## What changes by model

### Discounting and clearance (see `discount-and-clearance` and `overstock`)

| Model | What changes |
|---|---|
| Ecom-only / Own stores | Full control — no external approval needed, no MAP conflict possible (you set the price everywhere it's sold) |
| Dealers | **Check MAP (minimum advertised price) agreements before recommending any public discount.** A discount that undercuts the MAP floor your dealers agreed to sell at damages the dealer relationship and can violate the contract. Liquidating overstock is also constrained — dumping inventory into the same market a dealer actively sells in (even through a discreet off-price channel) can create real channel conflict. Coordinate timing and depth with dealers, or route clearance through a channel dealers don't compete in |

### Paid search and shopping feed (see `ads` and `product-feed`)

| Model | What changes |
|---|---|
| Ecom-only / Own stores | Standard guardrails apply — brand-term protection is about your own brand vs. competitors, not internal channel conflict |
| Dealers | **Your own paid Shopping/PMax presence can compete directly with dealer listings for the same product** — the same self-cannibalization risk `ads` warns about for brand-term bidding, but between your DTC channel and your own dealer network instead of just within your own account. Some brands deliberately limit or exclude their own paid presence on products a dealer actively sells, or coordinate bid strategy so DTC and dealer listings aren't bidding against each other for the same query. This is a strategic decision to make explicitly, not a default to assume either way |

### Campaign coordination (see `tentpole-campaign` and `supplier-funded-marketing`)

| Model | What changes |
|---|---|
| Ecom-only / Own stores | Full creative and timing control |
| Dealers | Major campaigns (tentpole/brand campaigns, seasonal pushes) often need dealer coordination — shared creative assets, embargo dates so dealers aren't caught off guard by a promotion that affects their own marketing, and co-op/MDF fund timing if the brand funds dealer marketing (see `supplier-funded-marketing`) |

### Retail media and point-of-sale (see `retail-media` and `pos-marketing`)

| Model | What changes |
|---|---|
| Ecom-only | Retail media is only relevant if also listing on a marketplace; point-of-sale marketing doesn't apply without physical retail presence |
| Own stores | Full control over both — point-of-sale execution is direct, and any retail media presence (e.g., marketplace listings alongside owned stores) is self-managed |
| Dealers | Retail media is frequently the *only* lever available to influence the purchase decision at a dealer's specific point of sale — your own DTC channels can't follow the shopper there. Point-of-sale materials need the same coordination as campaign assets above — shared kits, compliance monitoring, and often co-op/MDF funding (see `supplier-funded-marketing`) |

### Attribution and measurement (see `attribution`)

| Model | What changes |
|---|---|
| Ecom-only / Own stores | Standard attribution — every sale is directly trackable through your own systems |
| Dealers | A sale that happens through a dealer is frequently **not trackable back to your own marketing** the way a DTC sale is — a customer who saw your ad, then bought from a local dealer, shows up nowhere in your pixel data. This is a real, structural blind spot (similar in kind to `attribution`'s "dark social" blind spot) rather than a measurement failure to fix — name it explicitly rather than assuming DTC-style attribution coverage. Where possible, use dealer-reported sell-through data or co-op program reporting (see `supplier-funded-marketing`) to close part of the gap |

---

## How other skills should use this field

If `.agents/marketing-strategy.md` Section 15 names a distribution model other than pure ecom-only, check the relevant row above before recommending a tactic that assumes full channel control — discounting, paid feed strategy, campaign timing, and attribution coverage all have a materially different default when dealers are in the mix. If Section 15 is missing or the document doesn't exist yet, ask directly rather than assuming ecom-only, especially before recommending anything involving public discounting or paid Shopping/PMax strategy.

This file doesn't need to be read end-to-end for every task — only the row relevant to the tactic in question.
