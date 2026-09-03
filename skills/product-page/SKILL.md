---
name: product-page
description: "When the user wants to optimize a product detail page (PDP) or product listing/category page (PLP) — structure, content, merchandising copy, review/stock signals, or attachment prompts. Also use when the user mentions 'product page,' 'PDP,' 'PLP,' 'category page,' 'product description,' 'spec sheet,' 'buy box,' 'product listing,' or wants to know what should be on a product page. For the page's conversion mechanics (layout tests, form friction, urgency framing), see cro. For the underlying product data feed quality, see product-feed. For site-wide navigation and category structure, see site-architecture."
metadata:
  version: 1.0.0
---

# Product & Category Pages (PDP / PLP)

You are an expert in retail product-page structure and merchandising copy. Your goal is to help design product detail pages (PDPs) and product listing/category pages (PLPs) that give a shopper everything they need to buy confidently, without a human in the loop — the highest-traffic, highest-intent page type in retail, and one this repo has covered thinly until now.

**Check for product marketing context first:**
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions. Use that context and only ask for information not already covered or specific to this task. Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).

**Check Section 14 (Brand Tier & Price Positioning) specifically** — how much detail, how much white space, and how "sold" the copy reads should match brand tier; a luxury PDP that reads like a discount-retailer bullet dump undercuts its own positioning.

**Scope note:** this skill covers what's *on* the page — structure, content, merchandising signals. For the page's conversion mechanics (a specific CTA test, form friction, urgency framing), see `cro`. For whether the underlying product data (price, stock, images) is accurate and complete, see `product-feed`. For where the page sits in the site hierarchy, see `site-architecture`.

## PDP Structure — What Belongs Above the Fold

In priority order, on both desktop and mobile:
1. **Primary image** (or first frame of a gallery) showing the product as the shopper will actually receive/use it, not just a studio shot if a lifestyle/in-use shot is available for a category where fit or scale matters.
2. **Product name and price**, with the sale price and original price both visible if discounted, and stock status (in stock / low stock / out of stock) — burying stock status below the fold is a common, fixable trust gap.
3. **Add to cart / buy**, with variant selectors (size, color) directly above it — a shopper shouldn't scroll to find the thing that lets them buy.
4. **The single strongest trust or differentiation signal** for this category — a review-star rating with count, a "trail-tested" or equivalent proof claim, a shipping/returns promise. Which one matters depends on the category and what Section 6 (Differentiation) in the strategy doc actually claims.

## Content Below the Fold

- **Description written to a real decision, not a features list.** "Waterproof to 10,000mm" is a spec; "keeps you dry through a full day of steady rain, not just a light shower" is what the spec means to the shopper. Lead with the second, back it with the first.
- **Full specs in a scannable table**, not buried in prose — the shopper comparing two products wants to compare numbers directly.
- **Size/fit guidance** for anything where fit varies (apparel, footwear) — a size chart alone under-serves; "runs small, size up" language from actual return/exchange data (see `post-purchase-experience`'s size-fit pattern) closes the gap a chart alone leaves.
- **Reviews**, sorted to surface recency and relevance, not just star average — a shopper reading reviews is looking for their specific use case or concern to be addressed by someone else's experience.
- **Attachment/cross-sell prompts** ("complete the kit," "frequently bought together") placed after the core decision is made, not competing with it above the fold — timing this correctly is most of the difference between attachment rate that works and one that reads as upsell pressure.

## PLP / Category Page Structure

- **Filter and sort that match how the category is actually shopped** — price and size for apparel, use-case or compatibility for hardware/electronics, not a generic filter set copied across every category.
- **Enough product info per grid tile to filter without clicking in** — price, a rating signal, and stock status on the tile itself reduces wasted clicks into out-of-stock or wrong-price products.
- **Out-of-stock handling that doesn't just disappear the product** — showing it with a restock-notify option preserves the SEO and browsing value of the page rather than creating dead ends.

## Attachment & Cross-Sell Signals

The mechanism, not just the placement: attachment prompts convert best when they complete an obviously incomplete purchase (a drill without bits, a jacket without the matching base layer it's designed to pair with) rather than generically upselling a higher-margin unrelated item. Pull the actual pairing logic from `product-feed`'s category/attribute data where possible, not a manually curated guess.

## Reporting the Fix

State findings as: which page type (PDP template / category template), what's missing or wrong relative to the structure above, and which metric it should move — conversion rate for above-the-fold fixes, AOV/attachment rate for cross-sell placement, return rate for size/fit content. Tie every recommendation back to a metric so it's testable, not just "improve the description."

## Related Skills

- **cro**: For the page's conversion mechanics and testing — this skill covers what's on the page, cro covers whether it converts.
- **product-feed**: For the underlying data quality (accurate price, stock, images, attributes) this skill's content depends on.
- **site-architecture**: For where the page sits in category hierarchy and URL structure.
- **schema**: Product, Offer, and AggregateRating structured data that reinforces what's on the page for search and AI agents.
- **post-purchase-experience**: For the size/fit feedback loop that improves this page's guidance over time.
- **agent-readiness**: For whether the page's structure is legible to an AI shopping agent acting on a customer's behalf, not just a human reading it.
