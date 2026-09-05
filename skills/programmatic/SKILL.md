---
name: programmatic
description: "When the user wants to plan or optimize programmatic media buying — automated, auction-based ad buying across display, video, CTV/OTT, or audio inventory through a demand-side platform (DSP). Also use when the user mentions 'programmatic,' 'DSP,' 'demand-side platform,' 'real-time bidding,' 'RTB,' 'The Trade Desk,' 'DV360,' 'private marketplace,' 'PMP,' 'programmatic guaranteed,' 'CTV advertising,' 'connected TV ads,' 'header bidding,' 'ad exchange,' or 'open exchange buying.' This is distinct from ads, which covers buying directly on walled-garden platforms (Google, Meta, LinkedIn) through their own ad managers — programmatic means buying inventory across the open web/app/CTV ecosystem through a DSP, often from publishers you don't have a direct relationship with. For the physical-world, place-based counterpart, see digital-out-of-home. For the retailer-owned-inventory counterpart, see retail-media."
metadata:
  version: 1.0.2
---

# Programmatic Media Buying

You help users plan, execute, and optimize programmatic advertising — automated, auction-based buying of display, video, CTV/OTT, and audio inventory across the open web and app ecosystem through a demand-side platform (DSP), rather than buying directly from a single publisher or walled-garden ad manager.

**Scope note**: `ads` covers Google, Meta, LinkedIn, TikTok, and similar platforms where you buy inventory that platform itself owns, through that platform's own interface. Programmatic is different: a DSP (The Trade Desk, DV360, Amazon DSP, Yahoo DSP, StackAdapt, and others) lets you bid on inventory across thousands of publishers, apps, and CTV apps in a single interface, using audience data and real-time auctions rather than platform-native targeting. The two overlap in places (DV360 is Google's DSP, distinct from Google Ads; Amazon DSP is distinct from Amazon's retail media Sponsored Products) — when in doubt, ask whether the user is buying *from* a specific platform's own inventory (→ `ads` or `retail-media`) or buying *across* an ecosystem of publishers via an auction (→ this skill).

## Before Starting

**Check for existing strategy context first:**
Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions. Use that context and only ask for information not already covered.

Gather this context (ask if not provided):

### 1. Objective & Funnel Stage
- Awareness/reach (upper-funnel video, CTV, display), retargeting (lower-funnel), or both?
- Is this replacing, or adding to, existing `ads` spend on walled gardens?

### 2. Data & Targeting Assets
- First-party audience data available to activate (site visitors, past purchasers, CRM/loyalty list)? See `analytics` for the underlying tracking this depends on.
- Any existing DSP relationship, or starting from scratch?

### 3. Distribution Model
- Section 15 of `.agents/marketing-strategy.md` matters here: if the business sells through dealers, geofencing or audience targeting around dealer locations is a common programmatic use case — see `marketing-strategy/references/distribution-model-guide.md`.

### 4. Budget & Scale
- Programmatic generally has higher minimum viable spend than a single-platform campaign, because auction dynamics and data activation both need volume to work efficiently — is the budget large enough to make this worthwhile relative to `ads`?

---

## Format Types

- **Display** — standard banner formats across the open web; the lowest-cost, highest-fraud-risk format, best used for retargeting and reach at scale rather than as a primary conversion driver.
- **Video (in-stream/out-stream)** — pre-roll, mid-roll, or out-stream video on publisher sites and apps; a step toward CTV in production value and cost.
- **CTV/OTT (Connected TV)** — video ads on streaming services and connected-TV apps (Hulu, Roku, Amazon Fire TV, ad-supported tiers of major streamers). The fastest-growing programmatic category, combining TV-like brand impact with digital-style targeting and measurement — often the natural home for `tentpole-campaign` video creative once linear TV reach isn't in scope.
- **Audio** — programmatic buying on streaming audio and podcast inventory; useful for reach at low production cost, weaker for anything requiring a visual CTA.
- **Native** — ad units styled to match the publisher's own content feed; higher engagement than display, but review carefully against `brand-guidelines` since native ads inherit some of the publisher's visual context.

Digital-out-of-home is buyable programmatically through many of the same DSPs — see `digital-out-of-home` for the place-based execution details; this skill covers the buying mechanics that apply once pDOOH is one of the formats in the plan.

---

## Buying Models

- **Open exchange (RTB)** — real-time bidding against any seller connected to the exchange; cheapest CPMs, least control over exact placement, highest exposure to low-quality or fraudulent inventory.
- **Private marketplace (PMP)** — an invite-only auction with a curated set of publishers, agreed floor price, and better inventory quality/brand safety than open exchange, still bought at auction.
- **Programmatic guaranteed** — a fixed price and guaranteed inventory reserved in advance with a specific publisher, bought through programmatic infrastructure rather than a manual insertion order; used for premium placements (a specific streaming app's homepage takeover, for example) tied to a `tentpole-campaign` moment.

Start with PMP or programmatic guaranteed for anything brand-sensitive or tied to a major campaign moment; reserve open exchange for retargeting and reach plays where placement quality matters less than volume and cost efficiency.

---

## Data Activation & Targeting

- **First-party data activation** — uploading a CRM, loyalty, or site-visitor list to the DSP to build lookalike or retargeting audiences is programmatic's core advantage over open-web display bought any other way. The quality of this targeting is only as good as the underlying data — see `analytics` for tracking hygiene and `loyalty`/`referrals` for the owned-audience assets worth activating.
- **Contextual targeting** — targeting by page/content context rather than user-level data; increasingly important as third-party cookie deprecation and privacy regulation erode identity-based targeting across the open web. Don't treat this as a fallback only — for some categories it performs as well as audience targeting without the privacy tradeoffs.
- **Brand safety & suitability controls** — every DSP offers inventory-quality filters (viewability thresholds, fraud/IVT (invalid traffic) exclusion lists, content category blocks); set these deliberately rather than accepting platform defaults, especially on open exchange buys.

---

## Measurement

Programmatic reporting is platform-self-attributed by default — apply the same discipline `attribution` applies everywhere else:

- **Viewability and IVT (invalid traffic) rate** are inventory-quality metrics, not performance metrics — a high-viewability, low-IVT campaign still needs to prove it drove outcomes, not just that it was seen by real people.
- **View-through conversion** (crediting a sale to someone who saw but didn't click an ad) is the programmatic metric most prone to overstating impact — a person exposed to thousands of impressions across the open web was already a likely candidate for retargeting to "convert" regardless of any single impression's actual influence. Before scaling spend on the strength of view-through numbers, see `attribution/references/incrementality-checkpoint.md` — a PSA/ghost-ad test or a holdout geo is the proportionate check once programmatic becomes a real budget line, not a one-time gut-check.
- **Brand lift studies**, where the DSP or a third-party partner offers them, are the more credible read for upper-funnel/CTV buys judged on awareness rather than direct response — see `attribution`'s "Measuring awareness, not just conversion" guidance.

---

## Common Mistakes

- **Running programmatic at a budget too small to reach efficient auction scale** — the data and auction advantages that make programmatic worthwhile need volume; a tiny budget spread across open exchange often underperforms simply buying directly on a single platform via `ads`.
- **Defaulting to open exchange for brand-sensitive campaigns** — PMP or programmatic guaranteed exists precisely to avoid the inventory-quality risk of the open exchange for anything tied to brand reputation.
- **Trusting view-through conversion as if it were causal** — see Measurement above.
- **Neglecting brand safety/suitability settings** — accepting DSP defaults instead of actively configuring viewability, IVT, and content-category filters.
- **Treating programmatic and walled-garden (`ads`) budgets as separate silos** instead of coordinating reach and frequency across both — a shopper retargeted on both channels simultaneously is one audience, not two.

---

## Task-Specific Questions

1. What's the objective — awareness/reach, retargeting, or both — and does the budget support efficient programmatic scale?
2. What first-party data is available to activate for targeting?
3. Open exchange, PMP, or programmatic guaranteed — how brand-sensitive is this buy?
4. Which formats (display, video, CTV, audio, DOOH) fit the objective and creative available?
5. How does this coordinate with existing `ads` spend and the broader channel mix (`channel-selection`/`budget-allocation`)?

---

## Related Skills

- **ads**: For buying directly on walled-garden platforms (Google, Meta, LinkedIn, TikTok), distinct from open-ecosystem DSP buying
- **digital-out-of-home**: For the place-based/physical-world execution of programmatic DOOH buys
- **retail-media**: For advertising inside a retailer's own platform, a different closed ecosystem from the open programmatic market
- **tentpole-campaign**: For CTV/video placements tied to a major brand moment, often bought as programmatic guaranteed
- **attribution**: For applying incrementality discipline to view-through and platform-reported programmatic metrics
- **analytics**: For the first-party data hygiene programmatic targeting depends on
- **channel-selection** / **budget-allocation**: For deciding whether programmatic belongs in the mix and how much budget it warrants
- **marketing-strategy**: For the distribution-model context (dealer geofencing) that shapes programmatic targeting strategy
