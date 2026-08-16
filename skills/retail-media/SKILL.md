---
name: retail-media
description: "When the user wants to plan or optimize advertising on a retailer's own platform — sponsored product listings, on-site display, or off-site extensions run through a retail media network. Also use when the user mentions 'retail media,' 'Amazon Ads,' 'Sponsored Products,' 'Sponsored Brands,' 'Walmart Connect,' 'Instacart Ads,' 'Target Roundel,' 'Kroger Precision Marketing,' 'retail media network,' 'RMN,' 'on-site retail advertising,' 'share of search,' or 'retail data clean room.' This is distinct from ads, which covers the open web and social platforms — retail media specifically means advertising inside a retailer's own site/app/in-store environment, reaching shoppers who are already in that retailer's shopping context. For the physical in-store counterpart, see pos-marketing. For the product data both retail media and your own feed depend on, see product-feed."
metadata:
  version: 1.0.0
---

# Retail Media

You help users plan and optimize advertising that runs inside a retailer's own platform — their site, app, or in-store digital environment — reaching shoppers at or near the point of purchase, not on the open web.

**Scope note**: `ads` covers Google, Meta, LinkedIn, TikTok, and similar open-web/social platforms, where you reach people before or outside a specific shopping context. Retail media is different in kind, not just another platform: it's advertising *inside* a specific retailer's environment, to shoppers who are already there with purchase intent. The two are complementary, not interchangeable — a strong retail media strategy doesn't replace open-web paid media, and vice versa.

## Before Starting

**Check for product marketing context first:**
If `.agents/marketing-strategy.md` exists, read it. **Section 15 (Distribution Model) is the single most important field for this skill** — see `marketing-strategy/references/distribution-model-guide.md`:
- If the business sells through dealers/retailers, retail media is often the *only* way to influence the purchase decision at that specific point of sale — your own DTC ads can't follow a shopper into a competitor's marketplace or a retailer's app.
- If ecom-only, retail media is only relevant to the extent the business also lists on a marketplace (which then functions as a retail channel) — check `channel-selection` for whether that's even in the mix.

Gather this context (ask if not provided):

### 1. Which Retail Media Networks
- Which retailer platforms is the business already selling through, or considering advertising on?
- Is this self-managed, or run through the retailer/distributor relationship?

### 2. Funding
- Is any of this spend co-funded through a supplier MDF/co-op arrangement? See `supplier-funded-marketing` — retail media is one of the most common categories co-op funds are used for.

### 3. Product Data
- Is the product listing data on that retailer's platform accurate and complete? See `product-feed` — the same discipline applies, even where the retailer's feed format differs from Google/Meta's.

---

## The Retail Media Landscape

Structurally, most retail media networks offer some mix of:

- **Sponsored product listings** — placement within the retailer's own search results and category pages, the highest-intent placement type since the shopper is actively searching or browsing that category.
- **Sponsored brand/display** — banner-style or brand-takeover placements within the retailer's site, closer to demand generation than the search-intent placements above.
- **Off-site extensions** — a growing category where the retail media network uses its own shopper data to reach the same audience on the open web or social platforms, which blurs the line with `ads` — treat this as part of the retail media budget/strategy (it's targeted using the retailer's first-party purchase data) even though it technically runs outside the retailer's own site.
- **In-store/digital-in-store media** — screens, audio, and other in-store placements some networks now offer. See `pos-marketing` for the physical/non-programmatic counterpart.

Major retail media networks include Amazon Ads, Walmart Connect, Instacart Ads, Target Roundel, and Kroger Precision Marketing in the US, and grocery/retail-specific networks in other markets (for example, major Australian grocery retailers run their own retail media offerings) — evaluate current platform capabilities directly rather than treating any of these as fixed; retail media is a fast-moving category and specifics change often.

---

## Funding Through Co-Op / MDF

Retail media spend is frequently funded, in whole or part, through supplier-funded marketing arrangements — a supplier provides MDF specifically earmarked for advertising on a retailer's platform, sometimes because the retailer requires or strongly incentivizes it. See `supplier-funded-marketing`'s receiving-side guidance directly: pre-approval requirements, brand compliance, and claims processes apply to retail media spend the same way they apply to any other co-funded campaign. Check whether retail media spend is eligible before assuming it comes entirely out of the core marketing budget.

---

## Measurement

Retail media's closed-loop nature (the ad and the purchase happen on the same platform) makes its reporting generally more trustworthy than open-web platform-reported attribution — but "more trustworthy" isn't "automatically incremental." Apply the same discipline `attribution` uses elsewhere:

- **On-platform attributed sales** are a reasonable starting signal, since there's no cross-device/cross-platform stitching gap the way there is for open-web ads.
- **Halo/incremental measurement**, where the retailer offers it, tells you whether the sponsored placement actually drove sales beyond what would have happened anyway (a shopper who was going to buy the product regardless still "converts" on a sponsored listing). Where available, use it the same way `attribution`'s incrementality section uses a holdout — don't take on-platform attributed sales as automatically causal.
- **Share of search / share of shelf** — how much of the search results or category page real estate the brand owns on a given retailer's platform, relative to competitors, is a retail-media-specific KPI worth tracking on its own, not just sales. See `range-review` and `competitor-profiling` for the broader competitive-presence context this connects to.

---

## Common Mistakes

- **Managing retail media budget in isolation** from the rest of the media mix, instead of coordinating through `channel-selection` and `budget-allocation` — a shopper reached through open-web `ads` and then converted via a retail media sponsored listing is one journey, not two unrelated budgets.
- **Weak product listing data on the retailer's platform** capping performance — same root cause `product-feed` flags for Shopping/PMax, just on a different platform.
- **Not checking for available co-op funding** before assuming retail media spend has to come entirely from the core budget — see Funding above.
- **Only measuring on-platform attributed sales** and never checking for halo/incremental lift where the retailer offers it.
- **Ignoring retail media entirely for a dealer-heavy distribution model** where it may be the only real lever available at that point of sale — see Before Starting.

---

## Task-Specific Questions

1. Which retail media networks are relevant, given the distribution model?
2. Is any of this spend eligible for supplier co-op funding?
3. Is the product listing data on that platform accurate and complete?
4. What's the current share of search/shelf on that platform relative to competitors?
5. How does this fit into the broader channel mix and budget (see `channel-selection`/`budget-allocation`)?

---

## Related Skills

- **marketing-strategy**: For the distribution-model context that determines how central retail media is to the strategy
- **product-feed**: For the underlying product listing data retail media depends on
- **supplier-funded-marketing**: For co-op/MDF funding of retail media spend
- **pos-marketing**: For the physical/in-store counterpart to digital retail media
- **attribution**: For applying incrementality discipline to on-platform reported sales
- **channel-selection** / **budget-allocation**: For fitting retail media into the broader channel mix and budget
- **range-review** / **competitor-profiling**: For share-of-search/shelf competitive context
- **ads**: For the open-web/social counterpart this skill is distinct from
- **programmatic**: For open-ecosystem DSP buying, distinct from a retailer's own closed advertising platform (some retail media networks, like Amazon DSP, offer both)
- **trade-marketing**: For earning the listing itself, the prerequisite this skill's advertising assumes has already happened
- **local-marketing**: For the general/map-search counterpart to advertising inside a specific retailer's platform
