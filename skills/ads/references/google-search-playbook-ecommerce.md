# Google Search Playbook (Ecommerce / DTC)

Intent-first operating rules for Google Ads on a retail/ecommerce account: where to spend first, how to structure the account, when to loosen match types, and how to keep smart bidding pointed at actual order revenue. Structurally adapted from the sibling B2B playbook in this skill ([google-search-playbook.md](google-search-playbook.md)) — the biggest difference is Shopping/PMax: for retail it's core infrastructure from day one, not something you earn into after Search proves itself. For RSA generation mechanics, see [rsa-output-spec.md](rsa-output-spec.md).

## Contents

- The intent ladder
- Brand bidding (and the pause test)
- Capture before you create
- Shopping and PMax (core infra, not a last resort)
- Account structure
- Keywords and match types
- Negative keywords
- The weekly search-terms ritual
- Bidding by conversion volume
- Product feed and revenue data
- Quality Score and landing pages
- Benchmarks and the weekly scorecard

## The intent ladder

Spend opens rung by rung — each tier unlocks only after the one below proves it converts to *revenue*:

1. **Brand** — "they want you" (brand name, brand + product/discount). Cheapest clicks, highest conversion. Always on.
2. **High-intent non-brand + Shopping** — ready to buy (category and product-specific queries). The profit center; most budget lives here. Unlike the B2B ladder, **Shopping campaigns run alongside Search from day one** at this tier — see below.
3. **Competitor** — comparison-shopping and "vs"/alternative-brand queries. Higher CPC, lower CVR; run selectively with dedicated comparison content.
4. **Discovery-intent** — has the need, isn't shopping by brand yet ("best gift for X," "how to choose Y"). Longer payback; only after tiers 1–2 work.
5. **Demand-gen/awareness** — broad Display, YouTube, PMax discovery placements. Last, with spare budget only.

**Don't skip rungs.** Broad spend before high-intent proof is how accounts burn budget on browse-stage traffic that never converts to a purchase.

## Brand bidding (and the pause test)

Bid on brand by default — if you don't, competitors and marketplaces (Amazon, resellers) will, and you pay in lost orders rather than clicks. The exception: if you're the only bidder and organic owns the whole SERP, test pausing brand and watch **total brand conversions (paid + organic)**, not just paid. If total holds, you were cannibalizing yourself; if it drops, turn it back on. Cap brand budget — it rarely needs much, and shared budgets let brand eat everything (see below).

## Capture before you create

Search **harvests existing demand**; it cannot create demand. If a product category has near-zero search volume (a genuinely novel product), say so and put the budget upstream (Meta/TikTok/influencer) instead of forcing keywords nobody types. Demand creation happens on social; Search and Shopping are where you catch it landing.

## Shopping and PMax (core infra, not a last resort)

This is the biggest structural difference from the B2B playbook. B2B treats PMax as something to earn into after cheaper, clearer wins are maxed — for a retail merchant feed, **Shopping/PMax is core Search infrastructure and should run from day one**, alongside brand and high-intent Search, with tight guardrails rather than a waiting period.

- **Feed quality is your equivalent of keyword quality** — accurate titles, images, GTINs/MPNs, categories, and pricing drive Shopping impression eligibility and CTR the same way match type and Quality Score drive text-ad performance. A weak feed is the most common reason Shopping underperforms, not the bidding strategy.
- **Guardrails, carried over because they're genuinely platform-mechanical, not vertical-specific:** set account-level brand exclusions on non-brand PMax (or it cannibalizes brand Search and claims the credit); feed first-party audience signals; add negative keywords from day one (PMax supports search-theme negatives at the campaign level); use Google auto-generated video only as a placeholder — supply your own or it drags performance.
- **PMax is a black box across all inventory** (Search, Shopping, Display, YouTube, Discover) — check the channel/placement report regularly so you know which of those is actually driving orders. PMax will silently overweight whichever placement is cheapest to deliver, which isn't always the one converting best.

**For asset group structure, listing group segmentation, audience signals, campaign-split decisions, and reading PMax's reporting in depth**: see [pmax-playbook-ecommerce.md](pmax-playbook-ecommerce.md). This section covers the strategic framing only.

## Account structure

Minimum viable split — each with an **independent budget**:

- **Brand** (own budget — never shared)
- **Non-brand high-intent Search** (one campaign, themed ad groups by product category)
- **Shopping/PMax** (own budget, feed-driven — see above)
- **Competitor** (own budget and messaging — its CPC/CVR economics are different)
- **Remarketing** (separate from Search)

Why independent budgets: in a shared budget the cheapest, highest-converting campaign (always brand) starves the ones you actually need data from. The account looks profitable on paper and is blind everywhere that matters.

- **Themed ad groups, not SKAGs:** 5–15 closely related keywords sharing one intent, answerable by one landing page. If two keywords need different product pages or value props, split the group. 2–3 RSAs per ad group.
- **Consolidation rule:** a campaign that can't reach ~15–30 conversions/month can't feed smart bidding — merge it. Fewer, better-fed campaigns beat elaborate structures at low volume (a Google Ads platform learning-threshold, not vertical-specific).
- **Default settings to flip on every new Search campaign:** turn OFF Search Partners and Display Network until proven; set location targeting to **"Presence"** (people physically in the target geo — the default "presence or interest" serves people merely interested in it); remember language targeting keys off the user's Google interface language, not the query language.
- **Don't compete with yourself:** the same keyword at the same match type in multiple ad groups splits your data and bids against your own account. Use negatives to route each query to exactly one home.

## Keywords and match types

Source keywords from how **customers describe what they want to buy** — your own search-terms report, product reviews, customer-service chat logs, competitor listings — not your internal SKU or product naming. A keyword with 50 searches/month and clear purchase intent beats one with 5,000 and mixed intent. Tag every keyword by intent tier.

**Match-type progression — in this order:**

1. Start high-intent terms on **Phrase + Exact** (Exact still matches close variants; Phrase is the workhorse while volume is low), manual CPC or Max Conversions.
2. Mine the search-terms report weekly (ritual below).
3. Introduce **Broad only after**: 30+ conversions/month in the campaign, AND smart bidding live, AND a tight negative list. Broad without all three is a donation to Google.

## Negative keywords

Starter lists to apply at build time:

- **Universal junk:** free, cheap, jobs, salary, hiring, career, intern, DIY (if not applicable), tutorial, reddit, wiki, login (except in brand campaigns)
- **Research intent:** "what is," "how to make," "reviews" (unless you want review-stage traffic), "vs" (unless running dedicated comparison campaigns)
- **Category collisions:** terms your product shares with an unrelated category (selling running shoes? negative "running a business")
- **Your brand as a negative in non-brand campaigns** — routes brand traffic to the brand campaign where it belongs

**Match-type mechanics gotcha:** negative broad requires ALL its words present (any order) — negative broad "free shipping" does **not** block "free" alone. Negative phrase blocks in-order phrases; negative exact blocks only that exact query. Most accidental over-blocking and under-blocking traces to this.

**Don't over-negative:** every negative narrows reach, and it compounds fast at low search volumes. Negative the clearly wrong, not the merely uncertain — an ambiguous term deserves more data before it's cut.

## The weekly search-terms ritual

Once a week per campaign, three passes:

1. **Waste:** terms with spend (3+ clicks) and zero conversions → negative the irrelevant ones.
2. **Winners:** converting search terms that aren't keywords yet → add as Exact/Phrase in the right ad group.
3. **Drift:** broad/phrase matches pulling adjacent-but-wrong products or categories → tighten the match type or negative the drift.

## Bidding by conversion volume

| Conversions/month (campaign) | Strategy |
|---|---|
| 0–15 | Manual CPC or Maximize Conversions (no target) |
| 15–30 | Maximize Conversions |
| 30+ stable | Target CPA — set at or slightly above your trailing 30-day actual |
| Real order-value data flowing back | Target ROAS |

Rules of thumb: smart bidding needs ~30 conversions in 30 days per campaign to learn. Set tCPA/tROAS near actuals — an aggressively tight target chokes delivery (Google just stops bidding). Move targets in **±10–15% steps and wait 1–2 weeks**; every change restarts learning, so don't panic-edit inside the learning window. Ecommerce typically reaches the Target ROAS tier faster than a B2B account, since order value flows automatically from the cart/checkout event rather than needing a CRM import. Budget mechanics: campaigns can spend up to **2× daily budget** in a day (Google balances monthly — single-day overspend is normal); a budget-capped campaign that's converting often *lowers* its CPA when you raise the budget, because constrained smart bidding underperforms.

## Product feed and revenue data

Ecommerce's revenue-data problem is the inverse of the B2B file's: order value usually *is* already flowing back automatically via native ecommerce tracking (Enhanced Conversions, GA4 ecommerce events, the platform's checkout integration) — the failure mode is misconfigured tracking, not a missing CRM handoff. Check:

- **Conversion value = order value, applied consistently** — pick one convention (net of tax/shipping, or gross) and apply it everywhere, so ROAS is comparable across campaigns.
- **Refunds and cancellations flow back as negative adjustments** — otherwise ROAS stays inflated on orders that later reversed.
- **Reconcile platform-reported revenue against actual store/OMS revenue monthly** — same "the source-of-truth system wins" principle as the B2B file's CRM reconciliation, just your order management system instead of a CRM.

## Quality Score and landing pages

QS (1–10, per keyword) = expected CTR + ad relevance + landing page experience. Low QS means paying more for the same position — **fix the weak component before raising the bid.** Landing page rules that move it: message match (page headline echoes the ad's promise and the query — send to the specific product/category page, not the homepage); one job and one CTA per page; speed; proof above the fold (reviews, ratings, stock/shipping info). **Checkout friction is your intent gate**, the ecommerce equivalent of the B2B file's form-length rule: fewer required fields and steps before purchase (guest checkout, autofill, saved payment) generally lifts conversion rate the way a shorter form buys volume at the cost of some qualification — match checkout length to how much friction the traffic can tolerate.

## Benchmarks and the weekly scorecard

No built-in benchmark ranges here, deliberately — ecommerce CTR, CVR, CPC, and CPA vary enormously by AOV, category, and competitive intensity, and asserting a generic range would be worse than no range at all. Build your own scorecard from your trailing 30-day account data, in the same shape as the B2B file's table, once you have volume.

Weekly scorecard — eight numbers to track once you have your own baseline: spend · orders · CPA · ROAS · AOV · Shopping vs. Search revenue split · Search impression share · top wasted search terms. Diagnostic that transfers directly: **Search Lost IS (budget)** vs **Lost IS (rank)** tells you whether you're capped by money or by Ad Rank — different problems, different fixes.

---

*Structure adapted from the sibling B2B playbook in this skill. Deliberately ships without the B2B file's benchmark ranges — those were practitioner-sourced for B2B SaaS accounts and would need real ecommerce-specific research to state responsibly here rather than be invented. Fill them in from your own account data, or source them before relying on them. The Shopping/PMax-as-core-infra reframing, unlike the benchmark ranges, is a structural correction grounded in how Google's own product categorization works for retail queries — not a number that needed sourcing.*
