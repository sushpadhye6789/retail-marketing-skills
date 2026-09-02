---
name: local-marketing
description: "When the user wants to market a physical store location, dealer, or multi-location business to people searching or browsing nearby. Also use when the user mentions 'local marketing,' 'Google Business Profile,' 'GBP,' 'Google My Business,' 'near me,' 'local SEO,' 'store locator,' 'local search,' 'geo-targeted campaign,' 'hyperlocal,' 'multi-location marketing,' or 'store visibility.' This covers driving discovery of and visits to a specific physical location — distinct from seo-audit/ai-seo, which cover general organic search strategy, and from pos-marketing, which covers materials inside the store once someone has already arrived. For paid advertising inside a retailer's own platform, see retail-media."
metadata:
  version: 1.1.1
---

# Local Marketing

You help users market a physical store, dealer location, or multi-location business to people searching or browsing nearby — getting found in local/map search, ranking for "near me" queries, and converting that visibility into store visits. This is distinct from general SEO (`seo-audit`, `ai-seo`), which optimizes for topical/organic ranking regardless of location, and from `pos-marketing`, which takes over once someone has physically arrived.

## Before Starting

**Check for product marketing context first:**
Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions.

**Section 15 (Distribution Model) is the field that determines almost everything else here** — see `marketing-strategy/references/distribution-model-guide.md`:
- **Own stores**: the business controls its own local marketing directly — one Google Business Profile (or one per location) fully in the business's own hands.
- **Dealers**: local marketing is often executed *by* the dealer, with the brand providing templates, co-op funding (see `supplier-funded-marketing`), and brand-standard guardrails — the brand rarely controls each dealer's local presence directly.
- **Ecom-only**: this skill mostly doesn't apply — flag that and redirect to `seo-audit`/`ads` unless there's a specific local component (a warehouse showroom, a pop-up — see `experiential-marketing`).

Gather this context (ask if not provided):

### 1. Location Count & Structure
- One location, a handful, or many (tens/hundreds)? Single-location tactics don't scale the same way to a large multi-location footprint — see Multi-Location Coordination below.
- Owned locations, dealer/franchise locations, or a mix?

### 2. Current State
- Is there a Google Business Profile (and equivalents — Bing Places, Apple Maps) already claimed and verified for each location?
- Any existing local SEO work (location pages, local citations)?

### 3. Goals
- Discovery (show up in local/map search at all), conversion (drive the visit or the call), or reputation (review volume/rating)?

---

## Google Business Profile (and Equivalents)

The single highest-leverage local marketing asset, for one location or a thousand:

- **Claim and verify every location** — an unclaimed or unverified profile is either invisible or, worse, editable by anyone, including competitors' incorrect edits.
- **NAP consistency (Name, Address, Phone)** — the same exact formatting everywhere the business is listed (the profile itself, the website, local directories, citations). Inconsistent NAP is one of the most common reasons a location under-ranks in local search, even with otherwise strong signals.
- **Categories, attributes, hours, and photos** — fill out completely and keep current; an out-of-date "closed" status or wrong hours actively drives away the exact high-intent visitor this channel is built to capture. If the location offers pickup, curbside, or delivery, set those attributes explicitly — a shopper searching with pickup intent filters on exactly this, and an unset attribute makes an eligible location invisible to that search. See `pos-marketing`'s Omnichannel Fulfillment Signage section for the in-store execution once the shopper arrives to collect.
- **Posts and updates** — treat the profile as a live channel, not a set-and-forget listing; regular posts (offers, events, new arrivals) keep the profile active, which platforms reward with visibility.
- **Q&A and messaging** — monitor and respond; an unanswered question sitting on a public profile is a visible signal of neglect to every future searcher who sees it.

---

## Reviews as a Local Ranking and Trust Signal

Review volume, recency, and rating are a direct local-search ranking factor, not just a trust signal for the reader:

- **Build a review-request habit into the natural post-purchase/post-visit moment** — asking systematically (not just hoping) is the difference between a handful of old reviews and a living, current signal.
- **Respond to every review, positive and negative** — a thoughtful response to a negative review often matters more to a prospective customer than the negative review itself; silence reads as not caring.
- **Never buy, incentivize-for-positive-only, or fabricate reviews** — beyond being dishonest, this is a platform policy violation that risks the whole profile, and a `compliance` risk depending on jurisdiction.
- See `customer-research` for mining review content as a source of product/service feedback, not just a local-ranking input.

---

## Local SEO Beyond the Profile

- **A dedicated page per location** on the business's own site (address, hours, directions, location-specific content — not just a duplicate template with the address swapped) — see `site-architecture` for how these fit into the broader site, and `schema` for LocalBusiness structured data that helps search engines and AI answer engines understand each location.
- **Local citations** — consistent NAP listed across relevant local directories and industry-specific listing sites.
- **Local link building and local content** — coverage from local press or community sites, sponsorship of a local event (see `experiential-marketing`), or content genuinely relevant to that market, all reinforce local relevance signals beyond citations alone.
- **"Near me" and local-intent keyword coverage** — see `seo-audit`/`ai-seo` for the broader keyword and AI-citation methodology; apply it specifically to location-modified queries ("[category] near me," "[category] in [city]").

---

## Geo-Targeted Paid & Local Awareness

- **Radius/geo-targeted paid campaigns** (search, social, or `programmatic`) around each location — see `ads` and `programmatic` for the platform mechanics; this skill's contribution is which locations and radii to target and with what local-specific offer or message.
- **`digital-out-of-home`** near a specific location is one of the more direct local-awareness levers available, when the budget and location density support it.
- **Local social presence** — a location-specific social account only makes sense past a certain scale; below that, a local content pillar within the main brand account (see `social`) usually serves better.

---

## Multi-Location Coordination

- **Corporate template + local flexibility** — provide a consistent baseline (brand voice, required NAP format, approved photo/content standards) while giving each location room for genuinely local content (local events, local team, local relevance) — a rigid one-size-fits-all local presence performs worse than one with real local texture.
- **Prioritize by opportunity, not evenly** — a large multi-location footprint rarely has the resource to hand-optimize every location's local SEO/GBP equally; triage by revenue potential, current visibility gap, and competitive local density.
- **Dealer-executed local marketing** needs the same brand-compliance discipline `supplier-funded-marketing` and `brand-management` apply elsewhere — provide the template and guardrails, audit periodically, don't assume every dealer executes correctly unsupervised.
- **Franchise locations warrant tighter enforcement than a typical dealer** — see `marketing-strategy/references/distribution-model-guide.md`'s franchise note; because a franchisee's entire business is the brand, local flexibility should generally be narrower (less "local texture" latitude, stricter template adherence) than for a dealer carrying multiple brands.

---

## Common Mistakes

- **Duplicate or near-duplicate location pages** with no real local content, which can suppress rather than help local search performance.
- **Inconsistent NAP** across the profile, the website, and directories.
- **An unclaimed, unverified, or outdated Google Business Profile** — the highest-leverage local asset, left unmanaged.
- **No systematic review-generation habit**, relying on reviews to accumulate organically (they mostly don't, at a meaningful pace).
- **Treating every location identically** in a multi-location footprint, instead of prioritizing by opportunity (see Multi-Location Coordination).
- **No local-specific offer or message** in geo-targeted paid campaigns — running the same generic ad with only the radius changed misses the point of local targeting.

---

## Task-Specific Questions

1. How many locations, and are they owned, dealer-operated, or a mix?
2. Is there a claimed, verified, up-to-date Google Business Profile for each location?
3. Is there a systematic review-request process in place?
4. Does the site have a genuine (not templated-duplicate) page per location?
5. What's the priority: discovery, visit conversion, or reputation/rating?

---

## Tool Integrations

For implementation, see the [tools registry](../../tools/REGISTRY.md). Key local presence tools:

| Tool | Best For | MCP | Guide |
|------|----------|:---:|-------|
| **Google Business Profile** | The single highest-leverage local asset — listing data, posts, reviews | - | [google-business-profile.md](../../tools/integrations/google-business-profile.md) |
| **Yext / Uberall** | Multi-location listing/NAP sync across directories at scale | - | See `tools/REGISTRY.md` for current guide status |

---

## Related Skills

- **new-store-launch**: For the pre-opening sequencing and event this skill's ongoing motion hands off from — use that skill for a location's opening, this one once it's established
- **marketing-strategy**: For the distribution-model context that determines who controls local marketing execution
- **seo-audit** / **ai-seo**: For the general organic search methodology this skill applies to location-modified queries
- **site-architecture**: For how location pages fit into the broader site structure
- **schema**: For LocalBusiness structured data
- **pos-marketing**: For the in-store experience once a local search converts into a visit
- **retail-media**: For paid advertising inside a retailer's own platform, distinct from geo-targeted open-web/social ads
- **digital-out-of-home** / **ads** / **programmatic**: For geo-targeted paid awareness around a location
- **experiential-marketing**: For local events and activations that reinforce local presence
- **supplier-funded-marketing**: For co-op-funded dealer local marketing
- **brand-management**: For brand-consistency governance across dealer-executed local marketing
- **customer-research**: For mining review content beyond its local-ranking value
- **compliance**: For review-solicitation rules and local-marketing claims
