---
name: marketing-strategy
description: "When the user wants to create or update their foundational marketing strategy and positioning context, or needs help thinking through marketing strategy at the level of 'who are we, who do we sell to, why do we win, and where do we focus.' Also use when the user mentions 'marketing strategy,' 'product marketing,' 'product context,' 'marketing context,' 'set up context,' 'positioning,' 'who is my target audience,' 'describe my product,' 'ICP,' 'ideal customer profile,' 'strategic priorities,' 'what should we focus on,' 'brand tier,' 'are we a premium/luxury brand,' 'do we sell wholesale,' or wants to avoid repeating foundational information across marketing tasks. Use this at the start of any new project before using other marketing skills — it creates `.agents/marketing-strategy.md` that all other skills reference for product, audience, positioning, strategic-priority, and B2B/wholesale-channel context. For the tactical 90-day/12-month execution plan built from this strategy, see marketing-plan."
metadata:
  version: 1.6.1
---

# Marketing Strategy

You help users create and maintain a marketing strategy and positioning context document. This captures foundational positioning, audience, and strategic-priority information that other marketing skills reference, so users don't repeat themselves — and it's the strategic input `marketing-plan` builds its tactical roadmap from.

The document is stored at `.agents/marketing-strategy.md`.

**Scope note:** this skill answers *who are we, who do we sell to, why do we win, and where should we focus* — the durable strategic layer. It does not produce a dated, channel-by-channel execution roadmap; for that (a 90-day/12-month plan with budget, team, and AARRR staging), see `marketing-plan`, which reads this document as its starting input.

## Workflow

### Step 1: Check for Existing Context

First, check if `.agents/marketing-strategy.md` already exists. Also check the legacy filenames — `.agents/product-marketing.md`, `.claude/product-marketing.md`, and `product-marketing-context.md` (in either `.agents/` or `.claude/`), from before this skill was renamed and merged with strategy — if found anywhere other than `.agents/marketing-strategy.md`, offer to migrate it to the canonical location (same content, new filename; no data is lost).

**If it exists:**
- Read it and summarize what's captured — note its current **Document version** and the last few **Changelog** entries so the user sees where the doc stands and what's changed recently
- Ask which sections they want to update
- Only gather info for those sections
- On any substantive save, bump the version and add a changelog entry (see Step 4). This doc is the shared context every other marketing skill reads, so a dated paper trail of *what changed and why* is worth keeping.

**If it doesn't exist, offer two options:**

1. **Auto-draft from codebase** (recommended): You'll study the repo—README, landing pages, marketing copy, package.json, etc.—and draft a V1 of the document. The user then reviews, corrects, and fills gaps. This is faster than starting from scratch.

2. **Start from scratch**: Walk through each section conversationally, gathering info one section at a time.

Most users prefer option 1. After presenting the draft, ask: "What needs correcting? What's missing?"

### Step 2: Gather Information

**If auto-drafting:**
1. Read the codebase: README, landing pages, marketing copy, about pages, meta descriptions, package.json, any existing docs
2. Draft all sections based on what you find
3. Present the draft and ask what needs correcting or is missing
4. Iterate until the user is satisfied

**If starting from scratch:**
Walk through each section below conversationally, one at a time. Don't dump all questions at once.

For each section:
1. Briefly explain what you're capturing
2. Ask relevant questions
3. Confirm accuracy
4. Move to the next

Push for verbatim customer language — exact phrases are more valuable than polished descriptions because they reflect how customers actually think and speak, which makes copy more resonant.

---

## Sections to Capture

### 1. Product Overview
- One-line description
- What it does (2-3 sentences)
- Product category (what "shelf" you sit on—how customers search for you)
- Product type (ecommerce/DTC, marketplace, brick-and-mortar retail, service, etc.)
- Business model and pricing

### 2. Target Audience
- For B2B: target company type (industry, size, stage), target decision-makers (roles, departments)
- For B2C/ecommerce: target customer demographics and psychographics (life stage, values, purchase occasion), who typically makes the purchase decision (self, gift-giver, household)
- Primary use case (the main problem you solve)
- Jobs to be done (2-3 things customers "hire" you for)
- Specific use cases or scenarios

### 3. Personas (B2B and B2C)

#### B2B Personas (if applicable):
If multiple stakeholders are involved in buying, capture for each:
- User, Champion, Decision Maker, Financial Buyer, Technical Influencer
- What each cares about, their challenge, and the value you promise them

#### B2C Personas (for end consumers):
If selling directly to consumers or through retail channels, capture:
- **Primary Consumer Persona**: Main end-user demographic/psychographic profile
- **Secondary Personas**: Important segments (gift buyers, luxury seekers, value shoppers, etc.)
- For each: demographics, psychographics, purchase motivations, pain points, preferred channels, brand relationships

### 4. Problems & Pain Points
- Core challenge customers face before finding you
- Why current solutions fall short
- What it costs them (time, money, opportunities)
- Emotional tension (stress, fear, doubt)

### 5. Competitive Landscape
- **Direct competitors**: Same solution, same problem (e.g., Calendly vs SavvyCal)
- **Secondary competitors**: Different solution, same problem (e.g., Calendly vs Superhuman scheduling)
- **Indirect competitors**: Conflicting approach (e.g., Calendly vs personal assistant)
- How each falls short for customers

*For a rigorous version of this section instead of free-text bullets — true competitive alternatives (including "doing nothing"), mapped step by step — see [references/positioning-methodology.md](references/positioning-methodology.md).*

### 6. Differentiation
- Key differentiators (capabilities alternatives lack)
- How you solve it differently
- Why that's better (benefits)
- Why customers choose you over alternatives

*Same reference as above covers this section too — it walks attributes through to value and target-market fit, not just a features list.*

### 7. Objections & Anti-Personas
- Top 3 objections heard in sales and how to address them
- Who is NOT a good fit (anti-persona)

### 8. Switching Dynamics
The JTBD Four Forces:
- **Push**: What frustrations drive them away from current solution
- **Pull**: What attracts them to you
- **Habit**: What keeps them stuck with current approach
- **Anxiety**: What worries them about switching

### 9. Customer Language
- How customers describe the problem (verbatim)
- How they describe your solution (verbatim)
- Words/phrases to use
- Words/phrases to avoid
- Glossary of product-specific terms

### 10. Brand Voice
- Tone (professional, casual, playful, etc.)
- Communication style (direct, conversational, technical)
- Brand personality (3-5 adjectives)

### 11. Proof Points
- Key metrics or results to cite
- Notable customers/logos
- Testimonial snippets
- Main value themes and supporting evidence

### 12. Strategic Priorities
- The 2-4 things that matter most right now (not everything — a real strategy says no to something)
- What's explicitly out of scope or deprioritized this cycle, and why
- The constraint that's actually binding (budget, team size, product readiness, channel access) — strategy is mostly about picking what to do given a binding constraint, not a wish list
- How this connects to the business goal in Section 13 — each priority should trace back to it

*If the draft priorities list is longer than 4 items or has nothing marked as cut, it's a wish list, not a strategy — run [references/prioritization.md](references/prioritization.md) before writing this section.*

### 13. Goals
- Primary business goal
- Key conversion action (what you want people to do)
- Current metrics (if known)

### 14. Brand Tier & Price Positioning
- **Tier**: Budget / Mid-market / Premium / Luxury — pick one, or name a split if different product lines sit at different tiers (this is common in ecommerce; be explicit about which line is which)
- **What actually puts you there**: price position relative to the 2-3 direct competitors from Section 5 (meaningfully above / at / below the category), not a self-assessment — "premium" only counts if the price and distribution back it up
- **Distribution/channel signal**: mass retail and marketplace-heavy (budget/mid-market lean) vs. specialty/DTC-only/invite-only (premium/luxury lean) — this is often a more honest tier signal than price alone
- **What this rules in or out**: this field changes default guidance in several other skills — discount depth and frequency, scarcity/urgency style, guarantee aggressiveness, creative aesthetic. See [references/brand-tier-guide.md](references/brand-tier-guide.md) for the tactic-by-tactic breakdown other skills check against this field.

This section exists so downstream skills (`offers`, `discount-and-clearance`, `overstock`, `ads`, `brand-guidelines`) can apply the *right* version of a tactic instead of a generic one — an aggressive countdown-timer discount push that's normal for a budget brand actively damages a luxury brand, and an overly precious no-discounting stance starves a budget brand that needs volume. Capture this honestly; it's meant to change behavior elsewhere, not just describe self-image.

### 15. Distribution Model
- **Model**: Ecom-only (sell only through your own online store/app, no other channel) / Own stores (the above, plus your own physical retail locations — still fully vertically integrated) / Dealers (sell through third-party retailers, dealers, or distributors who resell to the end customer) — pick one, or name a split if the business runs more than one (e.g., DTC ecom plus a dealer network is common)
- **If dealers are involved**: are there MAP (minimum advertised price) agreements or other pricing/promotion constraints in the dealer contracts?
- **Channel overlap**: does the ecom store (or paid search/shopping presence) compete directly with dealer listings for the same product, or are they kept separate (exclusive SKUs, different regions)?
- **What this rules in or out**: this field changes default guidance in several skills — whether a public discount is even available as an option (`discount-and-clearance`, `overstock`), whether the paid feed needs to avoid cannibalizing dealer search/shopping presence (`ads`, `product-feed`), and whether a campaign needs dealer coordination (`tentpole-campaign`, `supplier-funded-marketing` if applicable). See [references/distribution-model-guide.md](references/distribution-model-guide.md).

### 16. B2B / Wholesale Channel
- **Does this apply?**: does the business also sell to other businesses — wholesale/bulk orders, trade or trade-account pricing, corporate/institutional buyers — alongside its consumer-facing model? This is a yes/no flag, not a replacement for Section 15: a business can be ecom-only *and* run a wholesale arm, or sell through dealers *and* also take direct wholesale accounts. Most retail/ecommerce businesses answer no here and can skip this section entirely.
- **If yes, name which segment(s) apply** — the two have different sales motions, content needs, and decision processes, and conflating them produces generic B2B advice that fits neither well:
  - **Business (small/medium)**: independent retailers, small trade/tradesperson accounts, single-location boutiques, small institutional buyers. Typically self-serve or lightly rep-assisted, lower order minimums, shorter decision cycles, price/catalog-driven.
  - **Commercial (large)**: national/regional chains, large distributors, corporate or government procurement, category-managed accounts. Typically RFP/tender-driven or named-account sales-led, higher order volumes and longer contract cycles, requires formal proposals, compliance documentation, and often a buying committee rather than a single decision-maker.
  - A business can run both segments at once (e.g., an SMB-focused wholesale catalog alongside a handful of large national accounts) — if so, note both and roughly what share of B2B revenue each represents, since it changes which toolkit below to lean on for a given task.
- **What this rules in or out**: a genuine subset of this repo's skills is written for exactly this channel — outbound sales to business buyers, sales collateral, and a CRM-style pipeline don't apply to a consumer storefront, but they're exactly right for a wholesale/trade-account motion. See [references/b2b-wholesale-guide.md](references/b2b-wholesale-guide.md) for which skills (and which specific reference tracks inside dual-scoped skills like `ads` and `attribution`) are this channel's toolkit, broken out by Business vs. Commercial segment, so they don't read as unconverted leftovers from a different kind of business.

---

## Reference Library

| Reference | When to read |
|-----------|--------------|
| [positioning-methodology.md](references/positioning-methodology.md) | Filling in Sections 5-6 with rigor instead of free-text bullets — true competitive alternatives, attribute-to-value mapping, target market fit, category choice |
| [prioritization.md](references/prioritization.md) | Filling in Section 12 when the draft priorities list is a wish list rather than a real set of choices — naming the binding constraint, scoring candidates, cutting the rest |
| [brand-tier-guide.md](references/brand-tier-guide.md) | Filling in Section 14, and for any other skill checking how its default tactics should shift by tier |
| [distribution-model-guide.md](references/distribution-model-guide.md) | Filling in Section 15, and for any skill checking channel-conflict, MAP, or dealer-coordination constraints before recommending a tactic |
| [b2b-wholesale-guide.md](references/b2b-wholesale-guide.md) | Filling in Section 16, and for identifying which skills/reference tracks in this repo serve a wholesale/B2B-selling channel specifically |
| [examples.md](references/examples.md) | Weak-vs-strong worked examples for Sections 5, 6, and 12, for both an ecommerce/DTC and a B2B/wholesale business |

---

## Step 3: Create the Document

After gathering information, create `.agents/marketing-strategy.md` with this structure:

```markdown
# Marketing Strategy

**Document version:** v1
**Last updated:** [date]

## Product Overview
**One-liner:**
**What it does:**
**Product category:**
**Product type:**
**Business model:**

## Target Audience
**Target companies:**
**Decision-makers:**
**Primary use case:**
**Jobs to be done:**
-
**Use cases:**
-

## Personas
| Persona | Cares about | Challenge | Value we promise |
|---------|-------------|-----------|------------------|
| | | | |

## Problems & Pain Points
**Core problem:**
**Why alternatives fall short:**
-
**What it costs them:**
**Emotional tension:**

## Competitive Landscape
**Direct:** [Competitor] — falls short because...
**Secondary:** [Approach] — falls short because...
**Indirect:** [Alternative] — falls short because...

## Differentiation
**Key differentiators:**
-
**How we do it differently:**
**Why that's better:**
**Why customers choose us:**

## Objections
| Objection | Response |
|-----------|----------|
| | |

**Anti-persona:**

## Switching Dynamics
**Push:**
**Pull:**
**Habit:**
**Anxiety:**

## Customer Language
**How they describe the problem:**
- "[verbatim]"
**How they describe us:**
- "[verbatim]"
**Words to use:**
**Words to avoid:**
**Glossary:**
| Term | Meaning |
|------|---------|
| | |

## Brand Voice
**Tone:**
**Style:**
**Personality:**

## Proof Points
**Metrics:**
**Customers:**
**Testimonials:**
> "[quote]" — [who]
**Value themes:**
| Theme | Proof |
|-------|-------|
| | |

## Strategic Priorities
**This cycle's priorities:**
1.
2.
**Explicitly deprioritized (and why):**
-
**Binding constraint:**

## Goals
**Business goal:**
**Conversion action:**
**Current metrics:**

## Brand Tier & Price Positioning
**Tier:**
**Price position vs. direct competitors:**
**Distribution/channel signal:**

## Distribution Model
**Model:**
**MAP/dealer constraints:**
**Channel overlap:**

## B2B / Wholesale Channel
**Applies?:**
**What's sold / to whom:**
**How central to the business:**

## Changelog
*Newest first. One line per revision: what changed and why.*
- v1 ([date]) — Initial context.
```

---

## Step 4: Confirm, Version, and Save

- Show the completed document
- Ask if anything needs adjustment
- **Set the version and changelog** — this is the paper trail for a doc every other skill reads:
  - **New document:** set `Document version: v1` and a single Changelog entry — `- v1 ([today]) — Initial context.`
  - **Updating an existing document:** increment the version (v2 → v3 …), update `Last updated` to today, and **prepend a new Changelog entry** at the top of the list (newest first) summarizing *what changed and why* in one line. Never rewrite or reorder past entries.
  - A good entry names the sections touched and the reason, not "updated the doc." Examples:
    - `- v3 (2026-07-16) — Repositioned from "email tool" to "deliverability platform"; added RevOps to the ICP.`
    - `- v2 (2026-06-02) — Rewrote value prop and objections after 5 customer interviews; added competitor Acme; clarified ICP definition aligns with Section 2 Target Audience and Section 3 Personas`
  - Use today's date in ISO form (YYYY-MM-DD) for the entry and `Last updated`.
  - **Pure typo-only fix:** don't bump the version or add a changelog entry — just save the correction. Every other change bumps the version and gets an entry. When the change is a real repositioning or priority shift, say so plainly — downstream skills will now generate against the new context.
- Save to `.agents/marketing-strategy.md`
- **If Sections 5, 6, or 14 changed materially** (not just wording — the competitive frame, differentiation story, target audience, or brand tier actually shifted), the update doesn't stop here: everything already built on the old positioning — live campaigns, owned content, sales materials, dealer-facing assets — still says the old thing until it's deliberately updated. Tell the user this plainly and recommend running `/repositioning` next to get the prioritized cascade audit, rather than letting the document change sit unnoticed by everything downstream of it.
- Tell them: "Other marketing skills will now use this context automatically. The Changelog at the bottom tracks every revision — check it to see how your positioning and priorities have evolved. Run `/marketing-strategy` anytime to update it. For a dated 90-day execution plan built from this strategy, run `/marketing-plan` next."

---

## Tips

- **Be specific**: Ask "What's the #1 frustration that brings them to you?" not "What problem do they solve?"
- **Capture exact words**: Customer language beats polished descriptions
- **Ask for examples**: "Can you give me an example?" unlocks better answers
- **Validate as you go**: Summarize each section and confirm before moving on
- **Skip what doesn't apply**: Not every product needs all sections (e.g., Personas for B2C)
- **Strategy means choosing**: if Strategic Priorities lists more than 4 items or nothing was cut, push back — that's a wish list, not a strategy

## Related Skills

- **compound-marketing**: Every Brief in that skill's loop starts by reading this document — it's the foundational grounding every campaign, page, or ad is briefed against.
- **repositioning**: For the prioritized cascade audit of everything downstream that needs updating after a material change to Sections 5, 6, or 14 — run this after saving a real positioning change, not just when it happens to come up
- **moat-builder**: For testing whether Section 6's differentiators are actually durable, structural advantages worth prioritizing in Section 12, not just positioning material
- **marketing-plan**: For the dated, channel-by-channel 90-day/12-month execution plan built from this document's positioning and priorities
- **customer-research**: For the raw customer interviews and language-mining that feeds Sections 4 and 9
- **pricing** / **offers**: For monetization decisions that should trace back to Section 13's priorities
- **discount-and-clearance** / **overstock** / **brand-guidelines** / **loyalty** / **ads**: For skills that check Section 14's brand tier before applying tactics that diverge by tier (see [references/brand-tier-guide.md](references/brand-tier-guide.md))
- **discount-and-clearance** / **overstock** / **ads** / **product-feed** / **retail-media** / **pos-marketing**: For skills that check Section 15's distribution model before recommending a tactic that could conflict with dealer channels (see [references/distribution-model-guide.md](references/distribution-model-guide.md))
- **cold-email** / **sales-enablement** / **revops** / **prospecting**: The B2B/wholesale toolkit Section 16 flags — relevant only if that channel applies, not part of the default consumer-facing workflow (see [references/b2b-wholesale-guide.md](references/b2b-wholesale-guide.md))
