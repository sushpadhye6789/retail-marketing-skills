---
name: repositioning
description: "When a material positioning change has just been made in marketing-strategy and the user needs to know everything else that now needs to be revisited as a result. Also use when the user mentions 'repositioning,' 'we changed our positioning,' 'positioning change,' 'rebrand rollout,' 'update everything for our new positioning,' or 'positioning cascade.' This skill does not do the positioning work itself — that happens in marketing-strategy, using references/positioning-methodology.md. This skill activates after that change is captured and produces a prioritized audit of every customer-facing and internal surface that was built on the old positioning and now needs updating, sequenced by exposure risk."
metadata:
  version: 1.0.2
---

# Repositioning

You help users cascade a positioning change through everything downstream of it. A positioning change that only lives in the `marketing-strategy` document hasn't actually repositioned anything — every ad, page, email, sales deck, and dealer-facing asset built on the old positioning keeps saying the old thing until someone deliberately finds and updates it. This skill's job is producing that audit, prioritized by how exposed each surface is to customers right now.

**This skill assumes the positioning work is already done.** If the user wants to actually *develop* new positioning, send them to `marketing-strategy` and its `references/positioning-methodology.md` first — this skill picks up after that's captured in a changelog entry, not before.

## Before Starting

**Check for product marketing context first:**
Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).
`.agents/marketing-strategy.md` should exist with a recent changelog entry describing the change — read the entry and, ideally, diff it against the previous version of Sections 5/6 (Competitive Landscape, Differentiation) and Section 14 (Brand Tier, if that changed too). If there's no marketing-strategy document, or no changelog entry describing a real positioning shift, stop and redirect there first — this skill has nothing to cascade without a captured "before" and "after."

Gather this context (ask if not provided):

### 1. What Actually Changed
- Read the changelog entry's description of the change directly — don't re-derive it from scratch.
- Did the target audience change, the competitive frame change, the core value proposition change, or some combination?
- Did brand tier (Section 14) or distribution model (Section 15) change alongside the positioning, or just the positioning itself?

### 2. Scope of the Business
- Which product lines/brands does this repositioning affect — all of them, or one specific line (relevant if `brand-management`'s architecture notes the business spans multiple tiers/brands)?
- Does the business sell through dealers? See `marketing-strategy/references/distribution-model-guide.md` — dealer notice and coordination timing matters for anything customer-facing that dealers also touch.

---

## Step 1: Assess Severity

Not every positioning edit needs the full cascade below — classify the change first:

| Severity | What changed | Cascade needed |
|---|---|---|
| **Minor refinement** | Sharper wording of the same core idea; no change to audience, category, or competitive frame | Low — new work should use the new language; don't force a retroactive audit of everything |
| **Moderate shift** | The differentiation story or competitive frame changed meaningfully, same core audience and category | Moderate — prioritize live campaigns and owned content with real search/traffic value |
| **Major repositioning** | Different target audience, different market category, or a fundamentally different core value proposition | Full cascade below, treated with close to the same urgency as a relaunch |

State the severity explicitly before proceeding — it determines how far down the list in Step 2 to actually go.

---

## Step 2: The Cascade Audit

Work through these in order — the ordering *is* the prioritization, by customer-facing exposure and contradiction risk.

### Highest priority: live and active
- **Active ad campaigns** — current copy and creative in `ads`/`ad-creative` actively running in front of customers right now.
- **In-flight tentpole or promotional campaigns** — check `tentpole-campaign` and `discount-and-clearance` for anything currently live.
- **Active email/SMS sequences** — `emails`/`sms` automations that keep sending old-positioning language on autopilot until paused and updated.
- **Homepage and primary landing pages** — `copywriting`'s highest-traffic surfaces.

### Owned content with long shelf life
- **SEO content and comparison pages** — `seo-audit`/`content-strategy`/`programmatic-seo`/`competitors`; a comparison or alternative page built on the old competitive frame keeps ranking and contradicting the new positioning for months if not caught here.
- **Pricing page framing** — `pricing`, if the value story on the pricing page assumed the old positioning.
- **The offer story** — `offers`, if bonuses/guarantees/naming were built around the old differentiation angle.
- **Brand visual identity** — `brand-guidelines`, only if tier or architecture changed alongside positioning (a pure positioning-language change doesn't necessarily require a visual refresh; check before assuming it does).

### Sales and partner-facing
- **Sales enablement materials** — `sales-enablement` battle cards and decks built on the old competitive story.
- **Dealer-facing materials and co-branded assets** — `supplier-funded-marketing` and `distribution-model-guide.md`; dealers need advance notice before customer-facing repositioning affects shared materials, not after.
- **POS materials** — `pos-marketing`, if physical retail presence exists and signage reflects old messaging.

### Earned and third-party
- **PR narrative and boilerplate** — `public-relations`; existing press materials and pitch angles built on the old story.
- **Influencer/affiliate briefing materials** — `influencer-marketing`/`referrals`; partners talking about the product need updated talking points, not just internal teams.

### Internal/strategic documents worth re-checking
- **`range-review`**'s category framing, if the competitive frame changed.
- **`channel-selection`**'s audience-fit assumptions, if the target audience changed.
- **`budget-allocation`**'s priorities, if strategic priorities shifted alongside positioning.
- **`brand-management`**, for a major repositioning — architecture and extension decisions are exactly the kind of thing worth revisiting together with a major reposition, not separately.

---

## Step 3: Sequence, Don't Boil the Ocean

Don't attempt every item in Step 2 simultaneously. Sequence by the severity assessment and the priority ordering above:

1. **Live/active surfaces first** — these are actively contradicting the new positioning in front of real customers today.
2. **Owned long-shelf-life content next** — high value, no urgency clock, but compounds the longer it's left.
3. **Partner-facing materials in parallel with partner notice** — give dealers/partners lead time before their materials change out from under them.
4. **Earned/third-party last** — you don't fully control their timing anyway; provide updated materials and move on.

---

## Communicating the Change

For anything touching dealers or partners (see `marketing-strategy/references/distribution-model-guide.md`), give advance notice before the repositioning goes live in shared or co-branded materials — especially for a major-severity change. A dealer caught off guard by a repositioning that affects their own local marketing is a relationship cost on top of the marketing cost.

---

## Common Mistakes

- **Treating the `marketing-strategy` document update as the finished job** — the single most common failure. The document changing doesn't cascade automatically to anything already published.
- **Trying to update everything at once** instead of sequencing by exposure risk — see Step 3.
- **Forgetting long-tail owned content** — old blog posts, comparison pages, and pricing-page framing that keep getting traffic and quietly contradicting the new position for months.
- **Not notifying dealers/partners before a major repositioning** affects shared or co-branded materials.
- **Running a major repositioning without reassessing brand architecture** — see `brand-management`; a major reposition is exactly the moment to check whether the brand architecture still makes sense, not a separate exercise to do later.
- **Running the full cascade for a minor refinement** — see Step 1; matching effort to actual severity avoids both under- and over-reacting.

---

## Task-Specific Questions

1. What does the changelog entry in `marketing-strategy` actually say changed?
2. Severity — minor refinement, moderate shift, or major repositioning?
3. Does this affect one product line/brand or the whole business?
4. Does the business sell through dealers who need advance notice?
5. What's live right now that's most urgently contradicting the new positioning?

---

## Related Skills

This skill is an orchestrator — it routes to nearly every other skill in this repo depending on what the Cascade Audit surfaces. The most consistently relevant:

- **marketing-strategy**: Where the change originates, and the changelog entry this skill reads
- **brand-management**: For architecture/governance implications of a major reposition
- **ads** / **ad-creative** / **tentpole-campaign** / **emails** / **sms**: Live/active surfaces, highest priority
- **seo-audit** / **content-strategy** / **competitors** / **pricing** / **offers**: Owned long-shelf-life content
- **sales-enablement** / **supplier-funded-marketing** / **pos-marketing**: Partner and sales-facing materials
- **public-relations** / **influencer-marketing** / **referrals**: Earned and third-party surfaces
