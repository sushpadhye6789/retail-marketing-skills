# AI SEO by Content Type

Tactical guidance for optimizing specific content types for AI search citation. These tactics work for non-Google AI engines (ChatGPT, Claude, Perplexity, Copilot) and don't hurt Google AI Overviews / AI Mode.

For the cross-cutting strategy, see [SKILL.md](../SKILL.md).

---

## Ecommerce Product Pages

**Goal:** Get cited in "Best [category] for [use case]" and "what should I buy for X" queries — the retail equivalent of a software category query. (Citation is the realistic goal here; being *recommended* in the answer depends on offsite consensus, including gift guides and review platforms — see [citations-vs-recommendations.md](citations-vs-recommendations.md) and `directory-submissions`.)

**Optimize:**
- Clear product description in the first paragraph (what it is, who it's for, key materials/specs)
- Comparison tables (this product vs. the category, not just named competitors)
- Specific, factual claims ("machine washable, true to size" not "premium quality")
- Review count and rating with real numbers, visible on the page (see `schema`'s Review/AggregateRating markup)
- Pricing and availability transparency (AI cites pages with visible, unambiguous pricing) — never gate price behind "add to cart" or a login
- FAQ section addressing common buyer questions (sizing, care, shipping, returns)

---

## Blog Content

**Goal:** Get cited as an authoritative source on topics in your space.

**Optimize:**
- One clear target query per post (match heading to query)
- Definition in first paragraph for "What is" queries
- Original data, research, or expert quotes
- "Last updated" date visible
- Author bio with relevant credentials
- Internal links to related product/feature pages

---

## Comparison / Alternative Pages

**Goal:** Get cited in "[X] vs [Y]" and "Best [X] alternatives" queries.

**Optimize:**
- Structured comparison tables (not just prose)
- Fair and balanced (AI penalizes obviously biased comparisons)
- Specific criteria with ratings or scores
- Updated pricing and feature data
- Cite the `competitors` skill for building these pages

---

## Documentation / Help Content

**Goal:** Get cited in "How to [X] with [your product]" queries.

**Optimize:**
- Step-by-step format with numbered lists
- Code examples where relevant
- HowTo schema markup
- Screenshots with descriptive alt text
- Clear prerequisites and expected outcomes

---

## Local Business / Ecom (Google emphasis)

Google's AI features pull from product feeds and business profiles for local + ecom queries. Optimize:

- **Merchant Center feeds** kept current with accurate inventory, pricing, attributes
- **Google Business Profile** complete with hours, services, photos, posts, Q&A answered
- **Reviews** — recent + sufficient volume; respond to reviews to signal active management
- **Service area schema** for local services
- **Business Agent** (where available) for conversational customer engagement
