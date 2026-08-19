---
name: brand-guidelines
description: "When the user wants to create, update, or apply visual brand identity guidelines — logo usage, color palette, typography, imagery style — so every asset (ads, social, email, packaging, site) stays consistent without a designer reviewing each one. Also use when the user mentions 'brand guidelines,' 'brand identity,' 'brand book,' 'style guide,' 'brand colors,' 'typography,' 'logo usage,' 'visual identity,' or 'brand kit.' Covers visual identity specifically — for verbal brand voice (tone, personality, words to use/avoid), see marketing-strategy Section 10, which this skill reads rather than duplicating. This document is meant to be read by other skills (ad-creative, image, social, copywriting, popups) before they generate visual or written output."
metadata:
  version: 1.0.1
---

# Brand Guidelines

You help users create and maintain a visual brand identity document — logo usage, color palette, typography, and imagery style — that other skills read before generating ads, images, social content, or any other visual output, so everything stays consistent without a human reviewing every asset.

The document is stored at `.agents/brand-guidelines.md`.

**Scope note:** this skill covers visual identity. Verbal brand voice (tone, communication style, personality) already lives in `marketing-strategy` Section 10 — read that rather than re-capturing it here. If it doesn't exist yet, point the user to `marketing-strategy` first, or capture a minimal tone note here and flag that the full version belongs there.

## Before Starting

**Check for existing context first:**
If `.agents/marketing-strategy.md` exists, read it — especially **Section 14 (Brand Tier & Price Positioning)** if present. The tier should be reflected in the visual identity, and a real mismatch (a brand claiming "premium" positioning with budget-tier stock photography, for instance) is worth surfacing directly to the user as a finding, not silently accommodating. Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).

Then check if `.agents/brand-guidelines.md` already exists.

**If it exists:**
- Read it and summarize what's captured, note its version and recent changelog entries
- Ask which sections need updating
- Bump version and add a changelog entry on any substantive change (same discipline as `marketing-strategy`)

**If it doesn't exist, offer two options:**

1. **Auto-draft from existing assets** (recommended if any exist): study the site, social profiles, packaging photos, or any existing brand assets the user can point to, and draft a V1 by reverse-engineering what's already in use. Flag inconsistencies you find (e.g., three different shades used as "the brand blue" across different pages) rather than picking one silently.
2. **Start from scratch**: walk through each section conversationally — appropriate for a genuinely new brand with no existing assets to draw from.

---

## Sections to Capture

### 1. Logo
- Primary logo, and any secondary/icon-only variants
- Clear space requirement (minimum padding around the logo)
- Minimum size (below which it becomes illegible, especially for the icon-only variant)
- Acceptable backgrounds (light/dark/photo — and which logo variant goes with each)
- Explicit don'ts: don't stretch, recolor outside the approved palette, rotate, add effects (drop shadows, outlines) unless specified

### 2. Color Palette
- Primary color(s) with hex/RGB values
- Secondary/accent colors with hex/RGB values
- Usage hierarchy — which color dominates, which are for accents/CTAs only, not an even split
- Any tier-alignment note: does the palette read as the claimed brand tier (see Before Starting)? Bright, saturated, high-contrast palettes read budget/mass-market; muted, restrained palettes with more negative space read premium/luxury — not a hard rule, but worth naming if there's a mismatch

### 3. Typography
- Primary typeface (headlines) and secondary typeface (body), including web-safe fallbacks
- Type hierarchy — sizes/weights for headline, subhead, body, caption
- Any explicit pairing rules (what the primary and secondary faces should never be substituted with)

### 4. Imagery Style
- Photography style: lifestyle vs. product-on-white vs. studio vs. UGC-style — and how that maps to the brand tier (see `marketing-strategy/references/brand-tier-guide.md`'s Creative Aesthetic row — this is the same tier logic `ads` uses for paid creative, applied to owned imagery)
- Color treatment/filter consistency, if any
- Illustration style, if used, and when illustration vs. photography is appropriate
- What to avoid: generic stock-photo tells, competitor visual conventions to stay distinct from

### 5. Tone by Channel (light cross-reference, not a re-capture)
- Pull the core voice from `marketing-strategy` Section 10
- Note any deliberate flex by channel (e.g., slightly more playful on social, more restrained in paid ads) while staying recognizably the same brand — this is a delta from the core voice, not a replacement for it

### 6. Do's and Don'ts
A short, concrete misuse list drawn from real mistakes seen (or anticipated) — "don't place the logo on a busy photo background without a solid-color safe area," "don't use the accent color as a dominant color," "don't crop the logo icon." Concrete examples beat abstract rules for this section specifically, since the goal is catching mistakes before they ship, not philosophy.

---

## Step: Create the Document

```markdown
# Brand Guidelines

**Document version:** v1
**Last updated:** [date]

## Logo
**Primary:** [description/file reference]
**Variants:** [secondary, icon-only]
**Clear space:** 
**Minimum size:** 
**Backgrounds:** 
**Don'ts:**
-

## Color Palette
**Primary:** [name] — #[hex]
**Secondary:** [name] — #[hex]
**Accent:** [name] — #[hex]
**Usage hierarchy:**

## Typography
**Headline typeface:** 
**Body typeface:** 
**Fallbacks:** 
**Hierarchy:**
| Element | Typeface | Size/Weight |
|---|---|---|
| | | |

## Imagery Style
**Photography style:** 
**Color treatment:** 
**Illustration style:** 
**Avoid:**
-

## Tone by Channel
**Core voice:** (from marketing-strategy Section 10)
**Channel flex:**
-

## Do's and Don'ts
- 

## Changelog
*Newest first. One line per revision: what changed and why.*
- v1 ([date]) — Initial guidelines.
```

Save to `.agents/brand-guidelines.md`. Same versioning discipline as `marketing-strategy`: bump the version and add a changelog entry on any substantive change; skip it for pure typo fixes.

---

## How Other Skills Should Use This

This document doesn't do creative work itself — it's read by the skills that do:

- **ad-creative** / **image**: check color palette, typography, and imagery style before generating visual ad assets
- **social**: check tone-by-channel and imagery style for post content
- **copywriting** / **emails** / **popups**: check tone-by-channel for on-brand written output
- **ads**: cross-reference the imagery-style and tier-alignment notes against the creative-aesthetic guidance in its Meta creative sections

If a skill's default output would visibly conflict with something captured here (e.g., a generated ad using a color outside the palette), that's worth flagging to the user rather than silently picking a "close enough" alternative.

---

## Common Mistakes

- **Guidelines too vague to be actionable** — "modern and clean" tells no one what to actually do. Every section should produce something checkable (a hex code, a minimum size, a concrete do/don't), not an adjective.
- **No accessibility consideration** — color combinations that fail contrast requirements make it into guidelines that never get checked against them. Flag this if the palette has low-contrast primary/background pairings.
- **No small-size or single-color logo guidance** — favicons, app icons, and print all need a version that works at a size or in a context the primary logo wasn't designed for.
- **Guidelines that don't match the claimed brand tier** — see Before Starting. This is worth surfacing directly rather than smoothing over.
- **Treating this as a one-time document** — like `marketing-strategy`, this should get revisited as the brand evolves, not written once and forgotten while every other skill keeps reading a stale version.

---

## Task-Specific Questions

1. Does a brand guidelines document already exist anywhere (even informally — a Figma file, a deck, a style tile)?
2. What existing assets can be audited to draft from (site, social, packaging)?
3. What's the brand tier (check `marketing-strategy`), and does the current visual identity actually match it?
4. Any hard constraints already set (an existing logo that can't change, legacy brand colors)?

---

## Related Skills

- **marketing-strategy**: For verbal brand voice (Section 10) and brand tier (Section 14) — both read by this skill rather than duplicated
- **ad-creative** / **image**: For generating on-brand visual ad assets using this document
- **social**: For on-brand social content
- **copywriting** / **emails** / **popups**: For on-brand written output using the tone-by-channel section
- **ads**: For creative-aesthetic alignment with campaign strategy
- **supplier-funded-marketing**: This document is the compliance reference handed to dealers when providing co-op funds; a supplier's equivalent document is the reference when receiving funds from them
