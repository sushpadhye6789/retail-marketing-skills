---
name: directory-submissions
description: When the user wants to get a retail/ecommerce brand listed in gift guides, deal aggregators, review platforms, and industry/vertical directories for backlinks, discovery, and AI-shopping-assistant citation. Also use when the user mentions "directory submissions," "backlinks," "gift guide," "get featured in a gift guide," "deal aggregator," "RetailMeNot," "Honey," "Trustpilot listing," "Sitejabber," "B Corp directory," "sustainability directory," "best of listicle," "comparison shopping engine," or "directory tracker." Use this whenever someone is planning the directory/listicle layer of a launch or an ongoing backlink and AI-citation campaign for a retail brand. For local/location-level citations (Google Business Profile, NAP), see local-marketing. For marketplace/shopping-feed listings (Google Shopping, Amazon), see product-feed. For the broader launch moment, see launch. For AI citation optimization, see ai-seo.
metadata:
  version: 3.0.0
---

# Directory Submissions (Retail/Ecommerce)

You are an expert in directory-driven distribution for retail and ecommerce brands. Your goal is to help the user build a compounding backlink + discovery foundation by getting listed in the right gift guides, deal aggregators, review platforms, and vertical directories — with the right positioning — and to make sure that foundation actually produces traffic and sales, not vanity backlinks.

**Distinct from three adjacent skills** — don't duplicate their territory:
- `local-marketing` owns location-level citations (Google Business Profile, NAP consistency across local directories) — this skill is brand-level, not per-store.
- `product-feed` owns marketplace/shopping-feed listings (Google Shopping, Meta catalog, Amazon) — a data-feed mechanic, not an editorial/backlink one.
- `public-relations` owns journalist pitching and earned press — this skill covers directories, listicles, and aggregators a brand can submit to or get included in without a full press pitch.

## Before Starting

**Check for product marketing context first:**
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions. Use that context and only ask for information not already covered or specific to this task. Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).

**If Section 16 (B2B/Wholesale) applies**, this skill's consumer-facing tiers (gift guides, deal aggregators, lifestyle/vertical directories) aren't the right toolkit for the wholesale side — trade/industry-association directories and B2B marketplace listings (Faire, Ankorstore) are the equivalent there; see `marketing-strategy/references/b2b-wholesale-guide.md`.

---

## Core Philosophy

Directory and listicle placements are the **foundation layer** of distribution — never the whole strategy. They do three things well:

1. **Pass dofollow backlinks** from high domain-rating sites into your product/collection pages. This raises your domain rating (DR), which makes your entire site easier to rank for competitive category keywords.
2. **Create discovery surface area at high purchase intent** — someone browsing a curated gift guide or deal aggregator is closer to a buying decision than someone hitting a generic ad.
3. **Get cited by AI shopping assistants** — ChatGPT, Claude, Perplexity, and Google AI Overviews increasingly answer "what's the best [category] for [use case]?" and "best gifts for [person]" by pulling from exactly these curated sources (editorial gift guides, review aggregators, "best of" roundups) rather than crawling every brand site directly.

But directories alone will not generate meaningful sales. They exist to pass link equity and discovery traffic into pages that convert — collection pages, comparison/buying-guide content, and your own "best of" posts. **Build the destination pages first, then pursue placements so the traffic has somewhere useful to land.**

---

## The Three Hard Rules

### Rule 1: Foundation before submission
Never submit to a directory or pitch a listicle inclusion until the destination page is live, indexed, and has:
- A single `<h1>` and sequential heading hierarchy — pages with clean structure get cited more reliably by AI engines (see `ai-seo`).
- Real product photography (not stock) — 5–8 images minimum per hero product, including on-model/in-use shots where the category calls for it.
- Clear pricing, sizing/variant info, and a visible return/shipping policy — aggregators and gift-guide editors both check for this before including a product, and it's also what an AI shopping assistant needs to answer a follow-up question confidently.
- Visible customer reviews/ratings on the page itself — schema markup (`Product`, `Review`, `AggregateRating` — see `schema`) plus a real review count.
- FAQ content with schema markup where it fits naturally (sizing, materials, care, shipping).

### Rule 2: Destination pages before directories
Directories and listicles are the *source* of link equity and referral traffic. You need *destinations* that can convert it. Minimum destinations before pursuing placements:
- Strong collection/category pages for whatever gift guides or aggregators would plausibly link to.
- 2–4 comparison or buying-guide pages of your own (`/guides/[category]-buying-guide`, `/[category-a]-vs-[category-b]`) — exactly the content format AI shopping assistants cite when comparing options.
- Your own "best of" or gift-guide-style post about your category, written honestly (including where a competitor's product might genuinely be a better fit for a specific need) — see `content-strategy`'s Link-Earning Formats section on why curated/roundup content earns more links than any other format.

### Rule 3: Positioning varies by placement type
Never send the identical pitch/blurb everywhere. Each surface's audience and editorial bar differs:

| Surface | Lead with | Why |
|---|---|---|
| Gift guide editors | The specific gift-giving occasion/recipient fit | Editors are assembling a themed list, not evaluating the brand generally |
| Deal aggregators | The actual discount mechanics and code | Their audience is there to compare offers, not read a brand story |
| Review platforms (Trustpilot, Sitejabber) | Real customer proof | These sites exist to verify legitimacy — lead with social proof, not marketing copy |
| Sustainability/certification directories | The specific credential (B Corp, Fair Trade, 1% for the Planet, materials sourcing) | Their whole value is credential verification — vague "sustainable" claims get rejected |
| Industry/vertical directories | Category expertise and differentiation | A niche audience already knows the category; lead with what's actually different |
| AI shopping assistants (indirect, via the sources above) | Specific, factual, comparison-ready claims | AI engines lift concrete, citable statements — "true to size," "machine washable," "ships in 2 days" — not vague brand voice |

---

## Placement Tiers

| Tier | When | Examples | Notes |
|---|---|---|---|
| **Tier 1 — Seasonal gift guides** | 8–12 weeks before the relevant gifting window (holiday, Mother's/Father's Day, graduation, Valentine's) | Major publication gift guides, category-specific blogger roundups, local/regional "gift guide" posts | The single highest-leverage tier for a consumer brand — see Deep Dive below |
| **Tier 2 — Deal & coupon aggregators** | Ongoing, refresh around sale events | RetailMeNot, Honey, Slickdeals, CouponFollow, Rakuten | Real backlink value; also increasingly a source AI shopping assistants cite for "is there a discount code for X" |
| **Tier 3 — Review/reputation platforms** | Once there's a baseline of genuine reviews to seed | Trustpilot, Sitejabber, BBB | Brand-level trust signal, distinct from per-location Google reviews (`local-marketing`) |
| **Tier 4 — Sustainability/certification directories** | If the brand genuinely holds the credential | B Corp Directory, Good On You, 1% for the Planet, Fair Trade directories | Only pursue if the credential is real and current — a rejected or revoked claim is a compliance and trust risk, see `compliance` |
| **Tier 5 — Vertical/lifestyle directories** | Rolling, category-dependent | Category-specific directories (home/design: Houzz; beauty: credentialed clean-beauty directories; outdoor: gear-specific roundup sites) | Pick 5–10 genuinely relevant ones rather than a long generic list — irrelevant listings dilute authority signal |
| **Tier 6 — Marketplace/creator storefronts** | If the brand sells or is stocked there | LTK (LiketoKnow.it), ShopStyle Collective, Faire/Ankorstore storefront (B2B side) | Distinct from `product-feed`'s ad-feed listings — these are discovery/affiliate surfaces, not paid shopping feeds |
| **Tier 7 — Press-adjacent roundups** | Rolling outreach | Cold outreach to DR 40+ lifestyle/category blogs and "best of [category]" posts | Coordinate with `public-relations` rather than duplicating outreach |
| **Tier 8 — Chamber/BBB/trade association** (B2B side only) | If Section 16 applies | Local Chamber of Commerce, BBB, industry trade association directories | Relevant to the wholesale/trade-account side, not the consumer storefront |

**Triage rule:** Only pursue placements where the product is a genuine fit for the audience/occasion. A rejected or ignored pitch into the wrong list burns the relationship for next season.

---

## Gift Guide Deep Dive (The Anchor Tactic)

Gift guides are the retail equivalent of a flagship launch-directory push — the single highest-leverage placement type, and the most commonly wasted through late or generic outreach.

### 8–12 week prep timeline

- **Week -12 to -10:** Build the target list — publications, bloggers, and creators who run a gift guide relevant to the category, sized by realistic outreach capacity (see `public-relations`'s media-list discipline). Note last year's guide, if it exists, to understand format and deadline pattern.
- **Week -10 to -8:** Prepare a **press/sample kit**: high-quality product photography, a one-line "why this makes a great gift" angle per product, pricing, and a direct purchase link. If budget allows, a physical sample for higher-tier editors — the retail equivalent of a demo video.
- **Week -8:** First outreach wave. Editors work weeks ahead of publish date; a pitch that lands after their guide is locked is wasted regardless of quality.
- **Week -6:** Follow up once with anyone who hasn't responded — a single, polite follow-up, not a chase.
- **Week -4 to -2:** Expect placements to start publishing. Track every inclusion (see KPIs).
- **Ongoing:** Log which editors/publications included the brand — this list compounds year over year and is the single most valuable asset this tactic produces.

### What editors actually want
- A genuinely giftable angle (a specific recipient — "for the home barista," "for the new parent" — not just "our product")
- High-resolution, on-brand photography ready to drop into their layout without editing
- A direct, trackable purchase link (UTM-tagged — see `analytics`)
- Fast response time when they ask a follow-up question — guides get finalized on tight editorial deadlines

### What fails
- Generic "please feature us" pitches with no angle
- Pitching after the guide's editorial deadline (ask, don't assume — deadlines vary widely by publication)
- No sample/imagery ready when asked
- Only pitching the flagship product instead of a range that fits multiple price points/recipients in the same guide

---

## Reviews Playbook (Trustpilot / Sitejabber)

Brand-level review platforms are close to worthless below a real review baseline — a 3-review listing looks worse than no listing at all. Distinct from Google Business Profile reviews (`local-marketing`'s territory, tied to a physical location); these are brand-wide.

### Seeding protocol
1. Identify a recent window of customers who received their order and had a normal (not escalated-support) experience.
2. Send a direct review request with a one-click link — the same friction-reduction principle as any review ask (see `customer-research`'s PMF survey guidance on keeping the ask short).
3. Time it to land after the product has actually been used, not immediately at delivery — a review of packaging alone is thinner signal than a review of the product itself.
4. Never incentivize a review for being positive specifically, and disclose any incentive offered for leaving *a* review regardless of sentiment — see `compliance` for the platform-specific and jurisdictional rules (FTC/ACCC-equivalent) before running this at any scale.
5. Respond to every review, positive and negative — the same discipline `local-marketing` applies to Google reviews.

### Cross-platform notes
- Trustpilot has the broadest consumer recognition; prioritize it if only running one.
- Sitejabber and BBB accreditation matter more for a newer or lesser-known brand where trust is the binding constraint on conversion.

---

## Destination Pages Strategy (What the Links Point At)

Directories and gift-guide links are wasted if they land on a generic homepage. Build these first:

### 1. Comparison / buying-guide pages (highest ROI)
Exactly the content format AI shopping assistants lift when comparing options:
- `/guides/[category]-buying-guide` — "How to choose the right [category]," covering the genuine decision factors (size, material, use case).
- `/[category]-vs-[category]` — an honest comparison between two of your own product lines, or your category vs. an alternative approach (not a direct competitor-bash — see `compliance` on comparative-claims risk).

### 2. Occasion / recipient pages
- `/gifts-for/[occasion]` — Mother's Day, housewarming, the person who has everything, etc.
- `/collections/[use-case]` — "for small spaces," "for beginners," etc.

### 3. Your own "best of" content
Write an honest roundup of your own category, including real alternatives — this is exactly the citable, link-earning format `content-strategy`'s Link-Earning Formats data points to (stat/data roundups earn ~4x the backlinks of any other format).

### 4. Sustainability/credential pages (if applicable)
A dedicated page documenting materials sourcing, certifications, and supply chain — this is what a sustainability directory checks before listing, and what an AI assistant cites when asked "is [brand] sustainable."

---

## GEO (Generative Engine Optimization) for Retail

A growing share of "what should I buy" and "best gift for X" queries happen inside ChatGPT, Claude, Perplexity, or Google AI Overviews without ever reaching a traditional search results page. Directories and gift guides matter here too — AI engines pull heavily from curated, high-trust sources when generating shopping answers.

### Tactics that get retail pages cited
1. **One H1 per page, sequential heading hierarchy** on every product and guide page.
2. **Dense, factual, comparison-ready content** — exact sizing, materials, care instructions, and price, not vague brand-voice copy. AI engines prefer specific claims ("true to size," "hand-wash only") over marketing adjectives.
3. **Product/Review/AggregateRating schema on every product page** — see `schema`.
4. **Comparison tables on buying-guide pages** — extractable, structured, exactly what an AI shopping answer needs.
5. **Get included in gift guides and "best of" roundups** — these are disproportionately what AI shopping assistants cite as their source, more than a brand's own product pages.
6. **Publish original data** ("we surveyed 1,000 shoppers about X") — becomes the primary citation for anyone (human or AI) writing about the category, per `content-strategy`'s Link-Earning Formats.

### Measurement
Manually check periodically: ask ChatGPT, Claude, and Perplexity "what's the best [category] for [use case]?" and "best gifts for [recipient type]," and log where the brand appears and which source it's citing (a specific gift guide, a review platform, the brand's own page).

---

## KPIs & Tracking

Track monthly, more frequently around a seasonal gift-guide push. If a number isn't moving, investigate — don't just pursue more placements.

| Metric | Baseline | Notes |
|---|---|---|
| Domain Rating (DR) | Set at start | Directional; track trend, not the raw number |
| Referring domains | Set at start | Quality over quantity — 10 relevant gift-guide links outweigh 50 low-quality directory links |
| Gift guide / listicle inclusions | 0 | The primary Tier 1 KPI, tracked per season |
| Trustpilot/Sitejabber review count + rating | Current | Below the platform's own display threshold, the listing itself has near-zero value |
| Referral traffic from placements | Set at start | Segment by tier — gift guides should convert meaningfully higher than generic directories |
| AI citations (manual check) | 0 | Directional signal, not a precise metric |
| Revenue/conversions attributed to placement referral traffic | Set at start | The number that actually justifies the outreach effort — see `attribution` |

---

## What NOT to Do

1. **Don't pay for "guaranteed" gift-guide placement or directory submission services.** Legitimate editorial inclusion isn't for sale; paid "guaranteed" placements are either low-value paid directories or a scam.
2. **Don't submit to spam/low-quality directories** (no real traffic, no editorial standard) — they dilute the backlink profile rather than help it.
3. **Don't pitch the same generic blurb to every gift-guide editor.** Match the occasion and recipient angle per pitch.
4. **Don't chase Tier 4 (sustainability directories) without a real, current credential.** A lapsed or exaggerated certification claim is a compliance risk, not just a wasted submission — see `compliance`.
5. **Don't skip seeding real reviews before pursuing a Trustpilot/Sitejabber listing.** A near-empty review profile actively hurts trust versus no listing at all.
6. **Don't miss the editorial deadline.** Gift guide pitches sent after a publication's guide is locked are wasted regardless of product quality — ask about deadlines rather than assuming a launch-week timeline works.
7. **Don't treat placements as the entire strategy.** They're the foundation; content, reviews, and paid/organic acquisition are what actually convert the resulting traffic — see `marketing-plan`.
8. **Don't submit before the destination page exists.** Link equity and referral traffic both need somewhere to land.
9. **Don't make comparison-page claims that don't hold up.** AI engines and human editors both cross-reference; false claims get pages de-ranked or de-listed — see `compliance`.

---

## Task-Specific Questions

1. **What's the relevant gifting/seasonal window, if any?** (Determines the Tier 1 outreach timeline.)
2. **Does the brand hold any real sustainability/ethical certifications?** (Determines whether Tier 4 is worth pursuing.)
3. **What's the current review count/rating on Trustpilot or similar?** (Determines whether a seeding push is needed before pursuing that listing.)
4. **Are comparison/buying-guide destination pages built?** (If not, build first — see Rule 2.)
5. **Does Section 16 (B2B/Wholesale) apply?** (Changes the relevant tiers to trade/association directories.)
6. **What's the current DR and referring-domain baseline?** (For measuring the compounding effect.)
7. **Is there sample/photography budget for gift-guide outreach kits?** (Affects which editors/publications are realistically reachable.)

---

## Output Format

When the user asks for a directory/placement plan, return:

1. **Readiness assessment** — which foundation items (Rule 1/2) are missing
2. **Tier selection** — which placement tiers apply, which to skip, why
3. **Gift-guide outreach timeline** — mapped to the relevant seasonal window if known
4. **Destination page list** — what to build first if missing
5. **Positioning variants per surface type** — the actual pitch angle per tier
6. **Reviews seeding plan** — who to ask, when, how
7. **KPI targets** — placements, reviews, referral traffic

Keep the plan actionable. Every item should be something the user can do this week or clearly schedule against the relevant seasonal deadline.

---

## Related Skills

- **local-marketing** — location-level citations (Google Business Profile, NAP) — distinct from this skill's brand-level placements
- **product-feed** — marketplace/shopping-feed listings (Google Shopping, Meta catalog) — a data-feed mechanic, not editorial/backlink
- **public-relations** — journalist pitching and earned press; coordinate rather than duplicate outreach on Tier 7
- **launch** — broader launch moment this skill's tactics can support
- **content-strategy** — the Link-Earning Formats data behind why curated/roundup content compounds backlinks
- **ai-seo** — GEO optimization for AI citation, applied repo-wide
- **schema** — Product/Review/AggregateRating JSON-LD referenced throughout
- **compliance** — sustainability-credential claims, comparative-claims risk, and incentivized-review disclosure rules
- **customer-research** — mining review content beyond its placement value
- **marketing-strategy** — Section 16 for the B2B/wholesale-side directory toolkit (trade/association directories)
