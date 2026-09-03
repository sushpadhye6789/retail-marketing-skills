---
name: product-feed
description: "When the user wants to build, audit, or optimize a product data feed for shopping ads or catalog-driven marketing. Also use when the user mentions 'product feed,' 'Merchant Center,' 'Google Shopping feed,' 'Meta catalog,' 'catalog feed,' 'feed disapprovals,' 'feed optimization,' 'feed rules,' 'supplemental feed,' 'GTIN,' 'feed errors,' or 'my products aren't showing in Shopping.' Covers the product data layer that Shopping/PMax, Meta/Instagram catalog ads, and (via schema) some organic search surfaces all consume. For running the campaigns that use the feed, see ads. For the structured-data/schema markup version of the same product attributes, see schema."
metadata:
  version: 1.1.0
---

# Product Feed

You help users build, audit, and optimize the product data feed that powers Shopping ads, catalog-based social ads, and (indirectly, via schema markup) organic product listings. The feed is infrastructure — most ecommerce marketers only think about it when something's broken, but feed quality silently caps the performance of every campaign that depends on it.

## Before Starting

**Check for product marketing context first:**
Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions.


**Check brand guidelines before producing any asset:** If `.agents/brand-guidelines.md` exists (or run the `brand-guidelines` skill if it doesn't), apply its voice, tone, visual rules, and terminology before drafting — this keeps copy, creative, and campaigns consistent across every channel this repo touches (see `brand-guidelines`). No file there isn't a blocker; it just means brand rules default to `.agents/marketing-strategy.md` Section 14 (Brand Tier) if present.

**If Section 15 (Distribution Model) names a dealer network**, see `marketing-strategy/references/distribution-model-guide.md` before recommending an aggressive feed/Shopping presence — your own paid listings can compete directly with dealer listings for the same product, which is a strategic decision to make explicitly, not a default.

Gather this context (ask if not provided):

### 1. Feed Status
- Existing feed, or building one from scratch?
- Which platforms does it need to serve — Google Merchant Center, Meta/Instagram catalog, Pinterest, TikTok Shop, other?
- What's the source — a native ecommerce platform export (Shopify, etc.), a PIM, a hand-maintained spreadsheet, or a custom pipeline?

### 2. Catalog Size & Complexity
- Roughly how many SKUs/variants?
- Do products have meaningful variants (size, color) that need `item_group_id`-style grouping?
- Any current disapprovals or known feed errors?

### 3. Update Cadence
- How often does price/availability actually change (sales, stockouts)?
- How is the feed currently refreshed — real-time, scheduled, manual?

---

## Core Philosophy

**The feed is the product, as far as the algorithm is concerned.** A great product with a thin, inaccurate, or stale feed underperforms a mediocre product with a rich, accurate one — the ad platform can only match, rank, and price against what's in the data, not what's actually true in your warehouse. Most "why isn't Shopping working" problems are feed problems, not bidding or creative problems, and they're diagnosed differently: check the feed before touching the campaign.

This skill covers the data layer. For campaign strategy that consumes this feed (Shopping, PMax), see `ads` — specifically `ads/references/google-search-playbook-ecommerce.md`'s "Shopping and PMax" section and, if it exists, a dedicated PMax reference. This skill is upstream of that work.

---

## Feed Anatomy

Exact attribute names and requirements vary by platform and change over time — verify against the current Google Merchant Center / Meta Commerce Manager specs before finalizing a feed, rather than treating the list below as a fixed spec. Structurally, though, every major shopping feed needs the same categories of data:

| Category | What it covers | Why it matters |
|---|---|---|
| **Identity** | ID, title, description, brand, GTIN/MPN | How the platform matches your product to a search query and, for GTIN, to its own product catalog for richer listings |
| **Categorization** | Product category (platform taxonomy), product type (your own), custom labels | Drives ad placement eligibility and campaign/audience segmentation (see Feed Rules below) |
| **Availability & price** | Price, sale price, availability, inventory count | Directly shown to shoppers — a mismatch with the landing page is both a policy violation risk and a trust problem |
| **Media** | Image link, additional images, video | The single highest-leverage creative element in a Shopping listing — this *is* the ad creative for Shopping formats |
| **Variants** | Item group ID, color, size, material | Groups variants under one parent listing instead of flooding results with near-duplicate items |
| **Shipping & tax** | Shipping cost/time, tax settings | Affects the total-cost comparison shoppers see against competitors |

---

## Feed Quality

### Titles

The single highest-leverage field for Shopping search matching. Front-load the attributes shoppers actually search on: **brand + product type + key differentiating attribute** (size, color, material, use case), not a marketing tagline. "Acme Wireless Earbuds — Bluetooth 5.3, 30hr Battery, Black" outperforms "The Best Earbuds You'll Ever Own" for search matching, even though the second reads better as ad copy — Shopping titles are matched against search queries, not judged on persuasive copy the way ad headlines are. Avoid ALL-CAPS and keyword-stuffing; platforms penalize both, and the title still needs to read as a real product name.

### Images

Follow the platform's current image policy (background requirements, no promotional overlay text/badges/watermarks for the primary image on most platforms — verify current rules) closely; image policy violations are one of the most common disapproval categories. Beyond compliance, image quality is genuinely a conversion lever in Shopping formats — treat the primary feed image with the same care as a hero product photo, not an afterthought pulled from whatever's on the product page.

### Identifiers (GTIN/MPN/Brand)

Provide real identifiers wherever the product has them (most branded, mass-produced goods do). Missing identifiers on products that should have them is a common cause of limited distribution or disapproval — identifier exemptions exist for genuinely unique/custom/handmade goods, but claiming an exemption you don't qualify for risks the whole feed's standing, not just that item.

### Category mapping

Map to the most specific accurate platform category available, not a generic parent category — this affects both search eligibility and how the algorithm's audience-matching interprets the product. A too-broad category dilutes matching quality the same way an overly broad ad group dilutes Search relevance in `ads`.

### Price & availability sync

Sync frequency should match how often price/availability actually changes for the business, not an arbitrary schedule. A feed that shows in-stock/at-price for a product that's actually sold out or repriced is both a bad shopper experience and a policy risk (price/availability mismatches between feed and landing page are actively enforced). If sales or stockouts happen frequently, push toward more frequent (ideally near-real-time) feed sync rather than a nightly batch.

---

## Feed Rules & Supplemental Feeds

Most platforms let you transform or enrich feed data without touching the source system — use this instead of hand-editing the primary feed, so the enrichment survives the next sync from the source of truth.

**Common uses:**
- **Custom labels for segmentation** — margin tier, bestseller status, seasonal relevance, clearance/overstock flag. These labels are what let `ads` campaign structure (and bidding rules in a PMax or Shopping campaign) treat different parts of the catalog differently — e.g., bidding more aggressively on high-margin or bestselling items, or routing overstock items into a dedicated campaign. If setting margin-tier labels, this is a natural point to apply the brand tier and pricing context from `marketing-strategy` and `price-elasticity` — a premium-tier margin label should mean something different than a budget-tier one.
- **Title/description enrichment** — appending searchable attributes the source system doesn't capture well.
- **Category correction** — fixing systematic mis-mapping from the source export without waiting on an engineering fix upstream.

A supplemental feed (a separate small feed that overlays specific fields onto the primary feed by matching ID) is useful when the enrichment data lives in a different system than the main product export — e.g., a spreadsheet of custom labels maintained by marketing, layered onto an engineering-owned primary feed.

---

## Troubleshooting Disapprovals

Work in this order:

1. **Check account-level vs. item-level** — an account-level suspension (policy violation, misrepresentation) blocks everything and needs to be resolved before any item-level fixes matter. Item-level disapprovals only affect that SKU.
2. **Read the actual disapproval reason** in the platform's diagnostics, not just "disapproved" — the categories (missing required attribute, image policy, price mismatch, restricted category, misrepresentation) each have a different fix.
3. **Fix the root cause in the source system where possible**, not just the feed — if the primary feed pulls from the ecommerce platform, a feed-only patch gets overwritten on the next sync.
4. **Re-submit and monitor** — most platforms re-crawl on a schedule after a fix; don't assume an instant fix means instant reapproval.

The most common root causes, roughly in order of frequency: missing/incorrect required attributes, image policy violations, price or availability mismatch between feed and landing page, and incomplete or inaccurate categorization.

---

## Overlap with Organic (Schema)

The same product attributes (price, availability, GTIN, images, reviews) that populate the paid feed also drive structured data (`Product` schema) for organic rich results. See `schema` for the markup implementation — but treat the underlying data as one source of truth feeding both, not two separate efforts to maintain. A price or availability change should propagate to both the ad feed and the on-page schema without manual double-entry; if it currently requires that, flag it as a process fix, not just a content fix.

---

## Measurement

Feed health metrics to track (no universal benchmark numbers here — track your own trend and investigate any sharp change):

- **Active vs. disapproved item rate** — the % of the catalog actually eligible to serve
- **Impression share by category** — flags categories where the feed, not the bid, is capping visibility
- **"Low performance" or "not shown" flags** the platform itself surfaces at the item level
- **Feed freshness lag** — time between a real-world price/availability change and it reflecting in the feed

---

## Launch/Audit Checklist

- [ ] All required attributes present for every active SKU
- [ ] Titles follow brand + product type + key attribute structure, no keyword stuffing
- [ ] Images meet current platform policy (background, no overlay text/badges on primary image)
- [ ] GTIN/MPN/brand present wherever a real identifier exists
- [ ] Category mapping reviewed for specificity, not just presence
- [ ] Price/availability sync frequency matches how often those actually change
- [ ] Variant grouping (item_group_id) correctly implemented, no duplicate near-identical listings
- [ ] Custom labels set up for any segmentation `ads` campaign structure depends on
- [ ] Disapproval dashboard checked and clear (or every disapproval has a known cause and fix in progress)

---

## Task-Specific Questions

1. Which platforms does the feed need to serve?
2. What's the source system, and how often does it actually change (price, stock, new products)?
3. Any current disapprovals or known errors to start from?
4. Does the catalog need margin-tier, bestseller, or clearance segmentation for campaign structure?
5. Is organic schema markup pulling from the same source data, or maintained separately?

---

## Tool Integrations

For implementation, see the [tools registry](../../tools/REGISTRY.md). Key feed platforms:

| Tool | Best For | MCP | Guide |
|------|----------|:---:|-------|
| **Google Merchant Center** | Shopping/PMax feed data — products, disapprovals, custom labels | - | [google-merchant-center.md](../../tools/integrations/google-merchant-center.md) |
| **Meta Commerce Manager** | Catalog for Meta/Instagram shopping ads | - | See `tools/REGISTRY.md` for current guide status |

---

## Related Skills

- **ads**: For the Shopping/PMax campaigns that consume this feed — see its ecommerce reference files for how feed-driven campaign structure and custom-label bidding work
- **schema**: For the structured-data markup that shares much of the same underlying product data
- **programmatic-seo**: For product page URL structure and data architecture that the feed and schema both draw from
- **price-elasticity** / **overstock**: For deciding what margin-tier or clearance custom labels should actually mean before setting them in the feed
- **marketing-strategy**: For the brand tier context that should inform margin-tier segmentation
- **analytics**: For conversion tracking on feed-driven traffic
- **cro**: For the on-site product page experience this feed's data quality underpins once a shopper actually lands there
