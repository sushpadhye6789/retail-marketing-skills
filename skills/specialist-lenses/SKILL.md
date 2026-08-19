---
name: specialist-lenses
description: "When the user wants a specific, narrow-domain specialist's public perspective applied to a retail marketing problem — a CRO read from a conversion specialist, an AI-search read from an SEO researcher, a loyalty-program audit from a loyalty strategist. Also use when the user names a marketing specialist by name and asks how they'd approach something, or mentions 'specialist lens,' 'what would [name] say,' or wants a domain expert's public framework applied to their situation. Distinct from marketing-council: that skill runs a boardroom debate among broadly-known 'legendary marketer' personas across general marketing questions; this skill applies one living, actively-publishing specialist's narrow-domain framework to a specific tactical problem. For proven growth-loop mechanics from named brands (not individual specialists), see growth-playbooks."
metadata:
  version: 1.0.0
---

# Specialist Lenses

A small, growing library of narrow-domain marketing specialists — each entry built from what they've genuinely published for free (talks, blog posts, podcasts, free newsletter issues), never their paywalled content. Where `marketing-council` runs a simulated boardroom of broadly-known "legendary marketer" personas, this skill goes narrower and more tactical: one specialist, one domain, applied directly to the problem in front of you.

## Grounding Rules (non-negotiable — stricter than `marketing-council`'s)

Every specialist here is a living person actively selling their expertise (a paid newsletter, a consultancy, a course). That raises the bar above `marketing-council`'s historical-figure entries:

- **Public content only.** Every framework described must be sourced from something the specialist published for free — a public talk, a free blog post, an interview, a free newsletter issue. Never their paywalled material, even paraphrased.
- **Cite the source.** Each specialist file ends with a Sources list. If you can't point to where a claim came from, don't include the claim.
- **Flag confidence honestly.** Where research is thin or a framework name isn't independently confirmed as the specialist's own official terminology, say so explicitly in the file (see `adam-posner.md` for the pattern) rather than presenting it with false authority.
- **No fabricated quotes or opinions about the user's business.** Apply the specialist's *framework* to the situation; never state or imply the real person has reviewed or has an opinion about the user's specific company.
- **Time-sensitive fields decay fast.** A specific number or stat (a study's percentage, a current framework name) is a snapshot from when it was researched — say so, and point to the live source for anything the user might repeat externally.
- **Never treat this as a substitute for the actual subscription.** If the user's question needs depth beyond what's here, say so plainly and point them to the specialist's paid work rather than guessing past what's grounded.

## How to Use This Skill

1. **Match the problem to a specialist's domain**, not the other way around — reach for `talia-wolf.md` because the problem is "why isn't this page converting," not because Talia Wolf is memorable.
2. **Read the specialist's reference file** in `references/specialists/` before applying anything — each has a Lens, the grounded public framework, a retail-specific application (the actual value-add — none of these specialists wrote for retail specifically), and explicit best-for/blind-spot boundaries.
3. **Apply the framework to the user's situation**, not a generic version of it — same discipline as `growth-playbooks`' retail translation, adapted per specialist here instead of per brand mechanic.
4. **Route the actual work through `compound-marketing`** — a specialist's lens is Brief-stage input, same as `marketing-ideas` or `growth-playbooks`; it doesn't replace drafting, executing, analysing, or compounding the result.
5. **If no specialist here fits**, say so — don't force-fit the nearest one. This is a small, growing library (currently 4 entries), not exhaustive coverage of every domain.

## Current Roster

| Specialist | Domain | File |
|---|---|---|
| Talia Wolf | CRO — emotional targeting | [talia-wolf.md](references/specialists/talia-wolf.md) |
| Kevin Indig | SEO / AI search visibility (GEO) | [kevin-indig.md](references/specialists/kevin-indig.md) |
| Adam Posner | Loyalty program strategy | [adam-posner.md](references/specialists/adam-posner.md) |
| Elizabeth Marsten | Retail media portfolio strategy | [elizabeth-marsten.md](references/specialists/elizabeth-marsten.md) |

This is a deliberately small pilot batch spanning four different domains (CRO, SEO/AI, loyalty, retail media) — proving the pattern before scaling to a larger roster. The fuller candidate list (Mark Ritson, Jonah Berger, Ann Handley, and ~35 others across brand strategy, B2B content, performance marketing, martech, social, and ecommerce) is tracked privately, not in this public repo — see `compound-marketing`'s Expert Notes File for where that roster and its sequencing decisions live.

## Adding a New Specialist

1. Confirm there's enough genuinely public content to ground a real entry — if it's all paywalled, this isn't the right specialist to add yet (or add them to Path C's pointer-only pattern instead of a full dossier).
2. Research their public output (talks, free posts, interviews) rather than relying on general familiarity — same discipline used to build the current four.
3. Write `references/specialists/<name>.md` following the existing files' structure: Lens, Public framework (cited), Retail application, Best for / blind spots, Go deeper, Sources.
4. Add a row to the Current Roster table above.
5. Bump this skill's version (minor — new capability) and add a `VERSIONS.md` entry.

## Related Skills

- **marketing-council**: The broader, general-marketing-debate counterpart — reach for that for a multi-perspective boardroom review; reach for this skill for one specialist's narrow-domain framework applied directly.
- **growth-playbooks**: Proven growth-loop mechanics grounded in named *brands*, not individual specialists — the sibling pattern one level up (companies, not people).
- **compound-marketing**: Where a specialist's lens actually gets applied as real work — Brief-stage input, same as `marketing-ideas` and `growth-playbooks`.
- **cro** / **ai-seo** / **loyalty** / **retail-media**: The channel skills each current specialist's domain extends directly — read the specialist file alongside the channel skill, not instead of it.
