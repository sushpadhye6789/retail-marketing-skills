# Advantage+ Shopping Campaigns (Ecommerce)

Operational depth for Meta's Advantage+ Shopping Campaigns (ASC) — the catalog-driven, largely automated campaign type that's become Meta's default recommendation for most retail advertisers, and is Meta's rough equivalent to Google's PMax (see [pmax-playbook-ecommerce.md](pmax-playbook-ecommerce.md) for the Google side). This file covers ASC specifically; for the general manual-to-Advantage+ transition criteria (learning-phase exit bar, Campaign Score), see the "Advantage+ transition" section in [meta-decision-system-ecommerce.md](meta-decision-system-ecommerce.md) — that section applies to Advantage+ automation broadly, this file is about the dedicated ecommerce catalog campaign type.

## Contents

- What ASC actually is
- Catalog setup
- Campaign structure: one ASC or several
- Creative in ASC
- Audience: automated by design
- New customer emphasis
- When NOT to use ASC
- Common mistakes

## What ASC actually is

ASC combines what used to be separate prospecting and retargeting campaigns into a single catalog-driven campaign, with Meta's algorithm handling audience, placement, and (partially) creative optimization automatically. It's built specifically for catalog advertisers — the product feed (see the `product-feed` skill) is the core input, the same way it is for PMax.

The tradeoff versus manual campaign structure: less granular control over audience and budget allocation between prospecting and retargeting, in exchange for the algorithm's ability to find efficient combinations across the whole funnel that a manually-split structure can't see. This is a real tradeoff, not a strict upgrade — see "When NOT to use ASC" below.

## Catalog setup

ASC's performance ceiling is set by catalog quality the same way PMax's is set by Merchant Center feed quality — see `product-feed` for the full discipline (titles, images, identifiers, pricing/availability sync). Meta-specific catalog considerations:

- **Product sets** are Meta's equivalent of Google's listing groups — filtered subsets of the catalog (by category, custom label, price range) used to scope what a given ASC serves.
- **Catalog custom labels** set up in the feed (see `product-feed`'s Feed Rules section) are what let you segment ASC campaigns or product sets by margin tier, bestseller status, or clearance flag, the same way they drive PMax listing groups.

## Campaign structure: one ASC or several

Same underlying tension as PMax's campaign segmentation question:

- **One ASC covering the full catalog** maximizes the data the algorithm learns from, and is the simpler default for a small-to-medium catalog with roughly uniform margin.
- **Multiple ASCs, segmented by product set** make sense when margin varies meaningfully by category (different target CPA/ROAS by segment), or when a specific category needs a protected budget floor that a pooled campaign won't guarantee.

Same caution as PMax: splitting without enough conversion volume per campaign starves each one of learning data. Check against the same ~50-conversions/week learning-phase bar referenced in the sibling Advantage+ transition section before segmenting a low-volume catalog into multiple ASCs.

## Creative in ASC

ASC pulls creative from the catalog automatically (product images, price, availability) but also supports supplementary/Advantage+ creative enhancements (overlays, alternate images, text variations) layered on top of the catalog-driven base. Treat the supplementary creative slots with the same volume-and-freshness discipline as the sibling Meta playbook's Andromeda-era guidance — a catalog ad running on autopilot with zero supplementary creative investment leaves performance on the table the same way a Search campaign running only auto-generated RSAs does.

## Audience: automated by design

ASC audience targeting is more automated than even standard Advantage+ campaigns — it's built to find both new and returning customers across the funnel without the granular manual audience controls a standard prospecting or retargeting campaign would have. Feed first-party signals (customer lists, pixel/CAPI data) as inputs, same "signal not lock" caveat as PMax's audience signals — but go in expecting less manual override capability than a standard Meta campaign, not more.

## New customer emphasis

ASC supports a new-customer-focused configuration, letting you bid differently (and exclude or de-weight existing customers) to prioritize incremental customer acquisition over efficiency against your whole existing base. For an ecommerce account where repeat-purchase economics matter (see `loyalty`), use this deliberately when the goal is genuinely growing the customer file, not just holding blended ROAS — a pooled ASC without this setting will happily spend efficiently against people who were going to buy again anyway.

## When NOT to Use ASC

- **You need genuine audience-level control** — a brand deliberately testing distinct creative/offers against different named audiences will fight ASC's automation rather than benefit from it.
- **You want separate, protected budgets for prospecting vs. retargeting** — ASC's whole premise is pooling those; if protecting retargeting budget from being outcompeted by prospecting (or vice versa) matters more than the pooled-efficiency benefit, a manual split campaign structure keeps that control.
- **Catalog or conversion volume is too low to feed the automation** — see Campaign structure above; ASC needs enough data to actually learn, same as any smart-bidding campaign.

## Common Mistakes

- **Blaming ASC performance on the campaign type when the catalog feed is weak** — see `product-feed`; this is the most common root cause, same as PMax.
- **Zero supplementary creative investment**, relying entirely on raw catalog images — leaves a real lever unused.
- **Expecting granular audience control** ASC isn't built to provide, then fighting the automation instead of using it or opting out of ASC for that specific need.
- **Splitting into multiple ASCs by product set without enough volume to support each** — same learning-phase cost as over-segmenting PMax.
- **Not using the new-customer-acquisition configuration** when the actual business goal is growing the customer file, then being confused why blended ROAS looks fine while new-customer growth stalls.

---

*No benchmark numbers (typical ASC ROAS, CPA ranges, or new-vs-existing customer split targets) are asserted here — they vary too widely by category and account to state generically. Build your own scorecard from account data, same discipline as the sibling PMax, Meta, and Search files.*
