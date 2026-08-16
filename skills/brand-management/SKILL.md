---
name: brand-management
description: "When the user wants to track brand health, decide on brand architecture (house of brands vs. branded house vs. sub-brands), evaluate a brand extension, or govern brand consistency across teams, channels, and dealers over time. Also use when the user mentions 'brand management,' 'brand health,' 'brand equity,' 'brand tracking,' 'brand architecture,' 'sub-brand,' 'house of brands,' 'branded house,' 'brand extension,' 'brand governance,' 'brand consistency,' or 'brand audit.' Scope note: marketing-strategy defines positioning and brand-guidelines defines visual/verbal identity, each largely as a point-in-time capture exercise; this skill is the ongoing discipline of tracking whether the brand is actually landing as intended, staying consistent everywhere it appears, and evolving deliberately as the business changes — it reads both rather than duplicating them. For initial positioning capture, see marketing-strategy; for the visual identity document itself, see brand-guidelines."
metadata:
  version: 1.0.0
---

# Brand Management

You help users manage a brand as an ongoing discipline — tracking whether it's actually landing as intended in the market, making structural decisions (architecture, extension) as the business evolves, and governing consistency across every team, channel, and dealer that touches it.

**Scope note:** `marketing-strategy` (positioning, audience, differentiation) and `brand-guidelines` (visual/verbal identity) are largely point-in-time capture exercises — you fill them in, then revisit periodically. This skill is what happens *between* those revisits: is the brand actually perceived the way the strategy document says it should be, is it being executed consistently everywhere, and does a structural change (a new sub-brand, an extension into a new category) make sense given everything captured in those two documents.

## Before Starting

**Check for product marketing context first:**
If `.agents/marketing-strategy.md` exists, read it — this skill's work should be checked against Section 5/6 (positioning), Section 14 (brand tier), and Section 15 (distribution model) throughout.

**Check `.agents/brand-guidelines.md`** — the artifact this skill's governance work measures actual execution against.

Gather this context (ask if not provided):

### 1. The Task
- Brand health tracking, an architecture decision (new sub-brand, house of brands vs. branded house), an extension evaluation (new category under the existing brand or a new one), or a consistency/governance audit?

### 2. Current State
- Any existing brand tracking data (awareness surveys, NPS, review sentiment)?
- How many distinct product lines or tiers does the business run, and under how many brand names?
- Does the brand reach the market through dealers or partners whose execution isn't directly controlled?

---

## Brand Health Tracking

Reuse `attribution`'s "Measuring awareness, not just conversion" section directly for the quantitative side — brand lift studies (aided/unaided recall, favorability, purchase intent) and share-of-voice tracking use the same methodology whether the question is "did this campaign build awareness" or "how is brand health trending over time." The difference here is cadence: brand management tracks this as an ongoing signal, not a single campaign's result.

**Qualitative signals worth tracking alongside the quantitative:**
- **Review sentiment trend** — see `customer-research`'s review-mining methods; a shifting sentiment pattern (not just star rating) often moves before survey-based awareness metrics do.
- **Social mention sentiment** — see `community-marketing`/`social`; unprompted mentions carry different signal than a survey response.
- **Support ticket themes** — recurring brand-perception complaints (not product bugs) are an early signal worth routing back to `customer-research`'s extraction framework.

Track on a recurring cadence, and be honest that **brand health and short-term sales performance are different things** — a brand can show strong health metrics while sales are soft for unrelated reasons (distribution, product, macro), or vice versa. Don't conflate the two when reporting on either.

---

## Brand Architecture

How the business's brand names relate to each other, when there's more than one product line or tier involved:

- **Branded house** — everything sits under one master brand (sub-lines are named variants, not distinct brands). Shares brand equity efficiently, but constrains how differently a sub-line can be positioned — hard to run a genuinely budget-tier line and a genuinely premium-tier line under the same name without one dragging the other's perception.
- **House of brands** — each product line or tier has its own distinct brand identity, with the parent company relationship not emphasized to the end customer. Isolates risk (a problem with one brand doesn't touch the others) and allows genuinely distinct positioning per tier or segment, but sacrifices shared equity and multiplies the work — each brand needs its own `marketing-strategy` and `brand-guidelines` documents, not a shared one.
- **Endorsed/hybrid** — sub-brands with their own identity, but visibly connected to a parent ("by [Parent Brand]"). A middle path — some equity transfer, some positioning independence.

**When this matters most**: if `marketing-strategy` Section 14 notes the business spans multiple brand tiers under one name, that's the specific tension architecture decisions exist to resolve — a single brand trying to credibly hold both a budget and a premium position is usually a sign an architecture change (a distinct sub-brand for one tier) is worth evaluating, not a permanent state to just manage around.

---

## Brand Extension Decisions

Should a new product or category launch under the existing brand, or a new one? Two questions decide it:

1. **Does the new category share enough perceived expertise/permission with the core brand?** A brand known for one category extending into an adjacent, credible one carries equity forward; extending into an unrelated category usually doesn't, and can dilute the core positioning instead of strengthening the new offering.
2. **Does the extension risk the core brand's positioning even if it succeeds?** A tier or quality mismatch (a premium brand extending into a budget category under the same name, or vice versa) can damage the core brand regardless of how well the extension itself performs commercially.

This connects directly to `range-review`'s "Add" decisions and `product-lifecycle`'s launch handoff — when a range review identifies a gap worth filling, this skill's job is answering whether it should be filled under the existing brand or something new, before `launch` executes the go-to-market.

---

## Brand Governance & Consistency

Ensuring `brand-guidelines` is actually being followed, not just written:

- **Periodic brand audits** — spot-check live assets (site, social, ads, packaging, and dealer-executed marketing if applicable) against the guidelines document and flag drift. A guidelines document nobody checks against reality is a formality, not governance.
- **Cross-team/channel consistency** — the skills that consume `brand-guidelines` (`ad-creative`, `image`, `social`, `copywriting`, `emails`, `popups`, `ads`) should be producing recognizably consistent output; if they're drifting apart, that's a signal either the guidelines need updating (the brand has genuinely evolved) or enforcement needs tightening (teams aren't checking against them).
- **Dealer/partner consistency** — see `supplier-funded-marketing`'s compliance-enforcement discipline on the providing side; brand governance across a dealer network is the same problem as MDF program compliance, just broader than funded campaigns specifically.

---

## Competitive Brand Positioning Monitoring

Is the brand's actual market perception still matching the *intended* positioning captured in `marketing-strategy` Sections 5-6, or has the competitive landscape shifted the frame the brand is actually being judged against? See `competitor-profiling` for the research and `marketing-strategy/references/positioning-methodology.md` for re-running the positioning derivation if the market has genuinely moved — a positioning statement that was accurate a year ago can quietly go stale as competitors reposition or new entrants change the comparison set.

---

## Reputational Crisis Recovery

The immediate response to a negative story, a safety issue, or a viral complaint is `public-relations`' Crisis & Reactive PR (external statements, spokesperson discipline, timing) — this skill owns what happens after the news cycle passes: whether trust actually recovers, or the brand's health metrics stay depressed.

- **Track brand health specifically through and after the incident** — see Brand Health Tracking above; a crisis that shows up as a temporary sentiment dip that recovers is a different situation than one that resets the baseline permanently, and only tracking tells you which happened.
- **A real fix communicated beats a statement that just ends the news cycle** — if the underlying issue was real, brand recovery depends on visible follow-through (a policy change, a product fix, a compliance improvement — see `product-lifecycle`'s recall guidance if the issue was product-related), not just the initial response fading from attention.
- **Don't rush back to normal-volume brand messaging** — resuming a cheerful campaign cadence too soon after a real incident reads as tone-deaf; let the brand-health signal, not a fixed calendar, guide when normal marketing volume resumes.
- **Reassess whether the intended positioning still holds** — see Competitive Brand Positioning Monitoring above; a significant incident can shift how the brand is actually perceived relative to competitors, independent of whether the underlying facts get resolved.

---

## Common Mistakes

- **Treating `marketing-strategy`/`brand-guidelines` as written-once documents** never checked against how the brand is actually landing or being executed.
- **Extending the brand into a new category without weighing the equity/dilution tradeoff** — commercial upside on the extension doesn't automatically offset core-brand risk.
- **Inconsistent governance enforcement** across teams or dealers — see Brand Governance above.
- **Conflating brand health with short-term sales performance** when reporting either.
- **Running a single-brand architecture across meaningfully different tiers** without ever evaluating whether a sub-brand would serve better — see Brand Architecture.

---

## Task-Specific Questions

1. Is this brand health tracking, an architecture decision, an extension evaluation, or a governance audit?
2. What brand tracking data already exists, quantitative or qualitative?
3. How many product lines/tiers, under how many brand names?
4. Does the brand reach the market through dealers or partners with their own execution?
5. If an extension: does the new category share real expertise/permission with the core brand?

---

## Related Skills

- **marketing-strategy**: For the positioning, brand tier, and distribution-model context this skill checks reality against
- **brand-guidelines**: For the identity artifact this skill's governance work measures execution against
- **attribution**: For the brand-lift/awareness measurement methodology this skill's health tracking reuses
- **customer-research**: For review sentiment and support-ticket signal feeding brand health
- **competitor-profiling**: For competitive positioning research
- **range-review** / **product-lifecycle**: For the range decisions a brand extension evaluation feeds into
- **supplier-funded-marketing**: For the dealer-side compliance enforcement this skill's governance work extends
- **public-relations**: For the immediate Crisis & Reactive PR response this skill's reputational-recovery work picks up after, and the recall/safety-driven scenario most likely to trigger one
- **visual-merchandising** / **local-marketing**: For governance/consistency enforcement across dealer-executed physical and local marketing
