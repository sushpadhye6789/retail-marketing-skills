# Performance Max Playbook (Ecommerce)

Operational depth for running PMax on a retail/ecommerce account — asset group structure, audience signals, campaign segmentation, and diagnosing what's actually driving orders inside the black box. Assumes you've already read the "Shopping and PMax" section in [google-search-playbook-ecommerce.md](google-search-playbook-ecommerce.md) for the strategic framing (core infra, not a last resort) — this file is the operating layer underneath that.

## Contents

- Campaign segmentation: split or consolidate
- Asset groups and listing groups
- Audience signals — a hint, not a targeting lock
- Bidding and eligibility
- Brand exclusions and negative keywords, in practice
- New customer acquisition goal
- Reading the black box: Insights tab and channel reports
- Common mistakes

## Campaign segmentation: split or consolidate

Google's own guidance generally favors fewer, larger PMax campaigns — more conversion data pooled into one campaign gives the algorithm more to learn from. That's real, but it trades away control. The practitioner tension:

- **Consolidate** (one or few PMax campaigns) when: catalog is small-to-medium, margin is roughly uniform across the catalog, or conversion volume is too low to split without starving each campaign of learning data (see the bidding-by-volume table in the sibling Search file — the same ~30-conversions/month learning threshold applies here).
- **Segment** (multiple PMax campaigns) when: margin varies meaningfully by product line (you want different tROAS targets for a high-margin vs. low-margin category), brand vs. non-brand needs separate budget protection, or a specific category needs its own budget floor that a pooled campaign won't guarantee it.

Segment by **listing group / product feed filters** within campaigns (see below) before reaching for entirely separate campaigns — that gets some of the control benefit without fully losing the pooled-data benefit. Only split into separate campaigns when the tROAS or budget needs are genuinely different, not just for organizational tidiness.

## Asset groups and listing groups

**Listing groups** (feed filters within a PMax campaign, the descendant of old Shopping campaign product groups) are how you segment *which products* an asset group or campaign serves. Use custom labels from the product feed (see the `product-feed` skill) to build these — margin tier, category, bestseller status, or a clearance flag are all legitimate filter dimensions.

**Asset groups** are the creative + audience-signal container within a campaign. Structure them around a coherent theme — one asset group per product category or per audience intent, not one giant asset group covering the whole catalog. A single asset group spanning unrelated products dilutes the signal Google's algorithm uses to match creative to the right shopper; a themed asset group (e.g., "running shoes" vs. "hiking boots" as separate asset groups within one apparel PMax campaign) gives the algorithm a coherent creative-to-product-to-audience story to work from.

Each asset group needs enough creative variety (multiple headlines, descriptions, images, and ideally your own video, not the auto-generated placeholder — see the sibling Meta playbook's "Andromeda" section for the same volume-over-polish logic, which applies here too) to actually serve across PMax's full inventory (Search, Shopping, Display, YouTube, Discover, Gmail, Maps).

## Audience signals — a hint, not a targeting lock

Unlike a standard Shopping or Display campaign, audience signals in PMax (customer match lists, first-party segments, in-market/affinity audiences) are **advisory** — they tell the algorithm where to start looking, not a hard boundary it stays within. PMax can and will serve outside the signal if it finds conversions there. Feed the best first-party data you have (past purchasers, cart abandoners, high-LTV customer lists), but don't expect it to behave like a locked targeting list — if you need a hard audience boundary, that's a signal PMax may not be the right tool for that specific goal.

## Bidding and eligibility

Same underlying smart-bidding mechanics as the rest of the account: PMax needs enough conversion volume to exit the learning phase and hit tCPA/tROAS targets reliably — the ~30-conversions/month-per-campaign rule of thumb from the sibling Search file applies. A newly segmented PMax campaign with too little volume will underperform not because of bad segmentation logic, but because it starved itself of learning data — weigh that against the control benefit before splitting.

## Brand exclusions and negative keywords, in practice

- **Brand exclusion list**: a dedicated feature (not just a negative keyword) that stops non-brand PMax from serving on your own brand terms. Set this on every non-brand PMax campaign — without it, PMax will happily bid on your own brand searches and claim credit for traffic that would have converted via cheaper brand Search anyway. This is the single most common PMax self-cannibalization mistake.
- **Account-level negative keywords / search-theme negatives**: PMax doesn't support the same granular negative-keyword control as standard Search campaigns, but does support campaign-level negatives via search themes and account-level negative keyword lists (for a defined set of sensitive categories). Use what's available; it's coarser than Search's negatives, so expect to monitor the placement/search-term reporting (below) more actively than you would a standard Search campaign.

## New customer acquisition goal

PMax supports optimizing specifically for new customers (bidding differently for a shopper the algorithm identifies as new vs. returning, using your customer list as the source of truth for "existing"). For an ecommerce account where repeat-purchase economics matter (see `loyalty` and `price-elasticity`), this is worth using deliberately rather than leaving on default — it lets you separate "efficient at any customer" campaigns from "worth paying a premium for genuinely new customers" campaigns, which a pooled tROAS target can't distinguish on its own.

## Reading the black box: Insights tab and channel reports

PMax pools performance by default, which is the most common practitioner complaint — you get a blended result across Search, Shopping, Display, YouTube, and Discover without an obvious per-channel breakdown in the main campaign view. To diagnose what's actually driving orders:

- **Channel/placement reporting**: check the reporting Google does expose at the campaign level for a directional read on which inventory type is contributing — treat it as directional, not exact, since PMax's internal allocation isn't fully transparent.
- **Insights tab**: search-term insights, audience insights, and auction insights within PMax give partial visibility into what's converting and against which signals — review this regularly rather than only checking top-line ROAS.
- **Asset-level reporting**: each asset group reports which individual creative assets are rated "best"/"good"/"low" — refresh or replace consistently low-rated assets the same way you'd refresh a fatigued Meta ad (see the sibling Meta playbook's fatigue-detection logic; the underlying "creative needs refreshing" principle transfers even though PMax doesn't expose frequency the way Meta does).

If a specific channel (e.g., Display) is clearly underperforming within a PMax campaign and you can't tune it independently, that's a signal to consider a channel-specific campaign type outside PMax instead of fighting the black box.

## Common Mistakes

- **Blaming bidding for a feed problem** — see `product-feed`; a weak feed caps PMax performance regardless of tROAS target, and this is the most common root cause of "PMax just doesn't work for us."
- **No brand exclusions** — the single most common self-cannibalization mistake, covered above.
- **One giant asset group covering the whole catalog** — dilutes the creative-to-product-to-audience signal; segment by listing group and theme instead.
- **Leaving Google's auto-generated video/images as the only creative** — same volume-and-quality logic as Meta creative; auto-generated assets are a placeholder, not a finished asset.
- **Splitting into many small campaigns without enough volume to support each one** — see Bidding and eligibility; segmentation for control isn't free, it costs learning-phase efficiency.
- **Never checking the Insights tab or asset-level ratings**, and only watching top-line ROAS — misses the diagnostic signal PMax actually does expose.

---

*No benchmark numbers (typical PMax ROAS, CPA ranges, or channel-mix splits) are asserted here — they vary too widely by category and account to state generically. Build your own scorecard from account data, same discipline as the sibling Meta and Search files.*
