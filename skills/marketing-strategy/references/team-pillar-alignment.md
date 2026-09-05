# Team Pillar Alignment — Mapping Real Teams to This Skill Catalog

A retail marketing org usually isn't one person running every skill in this repo — it's several team members, each owning a domain (loyalty/CRM, ecommerce, digital acquisition, campaigns, data, merchandising, creative), each with their own priorities and their own read on what matters this quarter. This doc is the missing layer between the single `.agents/marketing-strategy.md` foundation every skill reads and the reality of a multi-person team: it maps skills to pillars, and gives each pillar a way to prove its priorities actually ladder up to the shared strategy instead of just happening to agree with it.

**This is a mapping, not a wiring.** No skill's "Before Starting" section currently checks a pillar file — that's a deliberate choice, not an oversight. Wire that in once your actual pillar structure has settled from real use; restructuring pillars is cheap if this file is the only thing that changes, expensive if 30 skills already point at pillar names that are about to change.

## How to use this file

1. **Customize the pillar list below** to match your org — add, remove, split, or merge pillars. Retail orgs vary enough (a single-location boutique vs. a multi-banner chain) that there's no universal seven-pillar structure that fits everyone; the one below is a reasonable default, not a standard.
2. **Each pillar owner keeps a short context file** — recommended path `.agents/pillars/<pillar-name>-strategy.md` — with the pillar's current priorities and a required "Ladders up to" section naming which specific `marketing-strategy.md` priorities (Section 12) or goals (Section 13) it's serving. This is the mechanism that actually prevents drift — a pillar strategy that can't name what it ladders up to is a sign it was written in isolation.
3. **When a skill session starts for a domain with its own pillar file**, read that pillar file alongside `.agents/marketing-strategy.md` (this isn't automated yet — see the note above). If the two conflict, flag it explicitly rather than silently picking one; that conflict is exactly the signal a cross-team sync (see below) needs to resolve.

## The Seven Pillars (default — customize freely)

### 1. Loyalty & Lifecycle Automation
**Owns:** `loyalty`, `emails`, `sms`, `retention-and-winback`, `churn-prevention`, `marketing-loops`, `popups`
**Typically ladders up to:** repeat-purchase rate, retention/repeat-customer goals, CRM-driven revenue share

### 2. Ecommerce / Site
**Owns:** `site-architecture`, `cro`, `product-feed`, `schema`, `post-purchase-experience`, `paywalls`, `signup`, `onboarding`
**Typically ladders up to:** conversion rate, site-driven revenue, technical foundation for every other pillar's traffic
**Note on `product-feed`:** owned here specifically because ecommerce controls how the feed is created and displayed (structure, custom labels, campaign-facing data) — not merchandising, which owns *what's displayed and which products are chosen* (see Pillar 6). Two different decisions about the same catalog.

### 3. Digital Marketing (Paid, SEO, Organic/Paid Social, Influencer)
**Owns:** `ads`, `ai-seo`, `programmatic-seo`, `seo-audit`, `social`, `influencer-marketing`, `aso`, `retail-media`, `programmatic`, `digital-out-of-home`, `cold-email`
**Typically ladders up to:** new-customer acquisition volume and CAC/payback targets, brand awareness reach

### 4. Campaigns & Promotions
**Owns:** `tentpole-campaign`, `launch`, `new-store-launch`, `launch-project-management`, `discount-and-clearance`, `offers`, `experiential-marketing`, `directory-submissions`, `public-relations`, `co-marketing`, `referrals`, `local-marketing`
**Typically ladders up to:** calendar-moment revenue lift, launch success metrics, earned-media/backlink goals

### 5. Data & Measurement
**Owns:** `analytics`, `attribution`, `customer-research`, `competitor-profiling`, `competitors`, `budget-allocation`, `budget-pacing-tracker`, `marketing-brief-template`
**Shared with Product/Merchandising:** `commercial-ops` (GMROI, sell-through, markdown %) — Data owns the measurement discipline, Merchandising is the primary consumer of the numbers
**Typically ladders up to:** measurement integrity across every other pillar's reported results — this pillar is partly a service function to the other six

### 6. Product & Merchandising
**Owns:** `pricing`, `price-elasticity`, `range-review`, `visual-merchandising`, `packaging-design`, `overstock`, `pos-marketing`, `supplier-funded-marketing`, `trade-and-dealer-enablement`, `trade-marketing`, `product-lifecycle`
**Typically ladders up to:** margin targets, assortment/sell-through performance, in-store/online display standards
**Note:** owns *what's chosen and how it's displayed* — not `product-feed` (Pillar 2) and not new product development, which isn't covered by any skill in this repo yet (see the gap note below).

### 7. Creative & Brand
**Owns:** `ad-creative`, `copywriting`, `copy-editing`, `image`, `video`, `brand-management`, `brand-guidelines`, `storytelling`, `content-strategy`
**Typically ladders up to:** brand consistency, creative production velocity, content-driven organic reach

## Cross-Cutting Skills (not owned by one pillar)

These serve every pillar rather than belonging to one:
- **`marketing-strategy`** — the foundation every pillar file must ladder up to
- **`marketing-plan`** — the cross-pillar tactical roadmap; if built per-pillar, each pillar's 90-day moves should trace back to this plan's AARRR sections
- **`marketing-council`** / **`compound-marketing`** — the review and learnings-compounding layer described below
- **`community-marketing`** — can sit under Digital Marketing or Campaigns depending on whether your org treats community as an acquisition channel or a brand/loyalty function; genuinely ambiguous, pick deliberately rather than defaulting

## A Skill Not Listed Above

This mapping doesn't cover all ~89 skills — it covers enough to establish the pattern. For anything not listed: ask which pillar's quarterly goals this skill's output would actually move, not which pillar feels topically closest. If it plausibly serves two pillars' goals equally, mark it shared rather than forcing a single owner.

## Known Gap: New Product Development

No skill in this repo currently covers new product development (ideation, R&D, sourcing, design-to-manufacture) — `product-lifecycle` explicitly starts *after* a product exists and is changing (transition/phase-out/replacement), and `launch` assumes a product is already built and ready to go to market. If your org's Product/Merchandising pillar owns NPD, that work currently has no skill to reference — flag it as an open decision in your pillar file rather than forcing `product-lifecycle` or `launch` to cover ground they don't.

## Cross-Team Alignment Cadence

Use the skills that already exist for this rather than inventing a new process:
- **`marketing-loops`** for the recurring sync cadence (a scheduled pillar-alignment check-in, not an ad hoc meeting)
- **`marketing-council`**'s Decision Council mode when two pillars are genuinely competing for the same budget or attention and need a real stress-test, not a Slack thread that quietly favors whoever's loudest
- **`compound-marketing`** for feeding one pillar's learnings into `.agents/marketing-learnings.md` so the other six don't rediscover the same lesson independently

## Related Skills

- **marketing-strategy**: The foundation this whole mapping ladders up to
- **marketing-plan** / **references/ops-stack-mapping.md**: A complementary mapping on a different axis — that file maps skills to AARRR funnel stages; this file maps the same skills to human team ownership. Use both together: funnel stage answers "what does this skill do for the business," pillar ownership answers "whose job is it."
- **marketing-council**: For stress-testing cross-pillar conflicts
- **compound-marketing**: For the learnings-compounding mechanism across pillars
- **marketing-loops**: For the recurring sync cadence
