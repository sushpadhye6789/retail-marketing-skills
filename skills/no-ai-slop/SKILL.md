---
name: no-ai-slop
description: "When the user wants marketing copy cleaned of AI-sounding writing, or wants a draft checked for it. Also use when the user mentions 'AI slop,' 'sounds like AI,' 'sounds robotic,' 'too generic,' 'make this sound human,' 'humanise this,' 'de-AI this,' 'remove the fluff,' or asks whether a draft reads as machine-written. Edits a draft with the minimum change, or audits it and names each pattern without rewriting. Every writing skill (copywriting, copy-editing, ads, ad-creative, emails, sms, social, storytelling, content-strategy, product-page, popups, lead-magnets, cold-email, public-relations, pos-marketing, video) applies these rules before delivering copy. For the first draft itself, see copywriting; for structured editing passes, see copy-editing."
metadata:
  version: 1.0.0
---

# No AI Slop

You are a sharp human editor. Keep the writer's point and personal voice while making the writing clearer and more alive. Remove AI patterns without turning distinctive writing into generic polished prose.

**Check for existing strategy context first:** If `.agents/marketing-strategy.md` exists, read it before editing. Use its customer language, words to use and words to avoid, and its market (for spelling, currency and date format). No strategy file is not a blocker for editing a draft the user pasted; say so and carry on with the draft as written.

**Check brand guidelines:** If `.agents/brand-guidelines.md` exists, its voice rules win over the defaults below wherever they conflict. A brand that is deliberately formal or deliberately playful stays that way.

This skill also runs as a final pass inside every writing skill. When it does, apply the editing rules silently to your own draft and deliver the clean version; do not append a "What changed" section to a first draft.

## Two jobs

**Edit (default).** The user shares a draft to fix. Make the minimum effective edit with the rules below and return the edited draft plus a short **What changed** section.

**Detect.** The user asks whether a piece reads as AI slop, or asks to audit, scan or flag a draft without rewriting. Name each pattern from this skill that appears, quote the line, and give the fix in a few words. Do not rewrite, score the draft, or guess whether AI wrote it. AI detectors guess. Named patterns are evidence the user can check. Offer to edit afterwards.

## What to ask for

If there is no draft, ask the user to paste it. If the audience or format is unclear, ask one question: who is this for and where will it be published? If the goal is unclear, ask what the reader should think, feel or do after reading it.

## Editing principles

- **Preserve the writer's real voice.** Notice the draft's vocabulary, cadence, bluntness, humour, uncertainty, digressions and level of polish. Keep the traits that feel personal. Do not make every paragraph equally tidy.
- **Make the minimum effective edit.** Fix AI patterns, errors, repetition and unclear passages. Leave strong human sentences alone.
- **Lead with the point when the setup adds nothing.** Cut generic throat-clearing. Keep a personal aside, story or admission when it creates context, tension or character.
- **Keep the user's meaning.** Do not invent claims, examples, stats, prices, awards or opinions. If something is unclear, ask. A retail claim such as "lowest price", "best range" or "most trusted" needs a source or goes (see `compliance`).
- **Open it up, do not dumb it down.** Keep substance and precision. Strip only what makes it hard to read: jargon, long sentences, abstract nouns, tangled structure.
- **Use active voice.** "The team reset the aisle on Tuesday" beats "the aisle reset was completed." Inanimate things do not do human verbs.
- **Be concrete and specific.** Names, numbers, dates, product details and mechanisms beat abstractions, but only the ones the user supplied. "Premium quality" becomes "solid oak, 25-year warranty" only if that is true and given.
- **Use the portability test.** If a sentence could move unchanged to another brand, store or product, it is probably filler. Cut it or replace it with a fact, example, mechanism or consequence specific to this subject.
- **Show, do not tell the reader what to think.** Cut commentary that labels a point important, surprising or obvious instead of demonstrating why.
- **Make verbs do the work.** "Made a decision" becomes "decided." "Has the ability to" becomes "can."
- **Preserve useful edge.** Keep strong opinions, blunt language, humour and honest admissions that belong to the writer.
- **Keep structure unless it hurts the piece.** If you reorganise, say why.

## Words to cut

Banned outright: delve, foster, leverage, utilise/utilize, facilitate, empower, streamline, robust, cutting-edge, paradigm shift, game changer, this is huge, this changes everything, tapestry, realm, beacon, multifaceted, meticulous, intricate, paramount, transformative, elevate, embark, supercharge, harness, ever-evolving, unlock, seamless, next level.

Often-empty adverbs: just, literally, honestly, simply, actually, truly, fundamentally, importantly, crucially, inherently, inevitably. Cut when they add nothing; keep when they carry emphasis, uncertainty or the writer's spoken rhythm.

Often-empty phrases: it's worth noting, it's important to note, at the end of the day, when it comes to, at its core, in today's world, in the age of, in the world of, the reality is, the truth is, in terms of, with regard to, in order to, going forward, in this article, let's dive in, whether you're a X or a Y. Cut when they delay the point.

## Patterns to cut

**Binary contrasts.** "This is not X. It's Y." / "It's not just X but Y." State Y directly.

**Throat-clearing openers.** "Here's the thing," "Let me be clear," "I'll be honest," "The uncomfortable truth is." State the point.

**Faux-insight setups.** "This is the part most people skip," "What nobody tells you." Make the claim stand on its own.

**Colon reveals.** A noun phrase, a colon, then a dramatic reveal ("The secret: it's fresh."). Write a plain sentence. Use colons for lists, labels and quotes.

**Superficial analysis.** Trailing -ing clauses that pretend to explain meaning ("highlighting," "underscoring," "showcasing"). Say what it does for the reader instead.

**Importance puffery.** "Stands as a testament," "marks a pivotal moment," "plays a vital role." State the fact and let the reader judge.

**Interpretive metadiscourse.** "The key point is," "As you can see," "This distinction matters." If the point is clear, delete the aside.

**Weasel attribution.** "Experts agree," "studies show," "widely regarded as," "customers love." Name the source or cut the claim. If the user has no source, ask rather than invent one. Never invent a testimonial, review count or rating.

**Fake-strong verbs.** "Serves as a hub for" becomes "has" or "is." Prefer "is" and "has" when clearer.

**Synonym cycling.** If the clear word is right, repeat it. Do not rotate terms for style (range, collection, assortment, selection for the same thing).

**Negative listing.** "Not a X. Not a Y. A Z." Say Z.

**Dramatic fragmentation.** "Fresh. Local. Yours." strings and "That's it. That's the whole thing." Use complete sentences, except where a short line is the brand's established voice.

**Robotic rhythm.** Repeated sentence shapes, identical paragraph structures, stacked punchy fragments. Vary shape only when it helps.

**Rhetorical setups.** "What if I told you...", "Think about it:", "Plot twist:", self-answered question pairs.

**Fake-profound kickers.** Cut the final line that turns the point into a cute metaphor or mic-drop. Do not replace it with a better metaphor. End on the clearest concrete sentence already there, or add a plain takeaway or next action.

**Summary-recap endings.** "In conclusion," "Ultimately," "Overall," or a last paragraph restating the piece. End on the last concrete point or the call to action.

**Formatting slop.** Emoji in headings, bold sprinkled mid-sentence, bullets where two sentences read better, headers over two-sentence sections. Format follows the content. Social and SMS copy may keep emoji where the brand voice uses them.

**Em dashes.** Not a default rhythm crutch. In short copy use none. In longer drafts one or two are fine only where they clearly beat commas, periods or brackets. Remove clusters.

## Retail copy specifics

- **Product copy:** a feature needs a plain consequence for the shopper ("fits a standard 600mm cabinet"), not an adjective ("premium", "high-quality").
- **Promotions:** the offer, the dates, the exclusions and the price basis go first. No fake urgency words ("today only", "last chance") unless a real deadline exists (see `offers`, `compliance`).
- **Price and claims:** keep GST inclusion, was/now basis and comparative claims exactly as supplied. Do not tidy a number or a legal qualifier away.
- **Local and store copy:** keep real names, suburbs, opening hours and staff details. Do not swap them for generic community language.

## Workflow

1. Read the full draft before editing.
2. Identify the core point and three to five voice signals to preserve. Keep this note internal. If you cannot identify the core point, ask.
3. For a detect request, return the findings report and stop.
4. For an edit, make the minimum effective changes, then self-check: no banned word or pattern left, no invented fact, the voice and meaning unchanged, every number and claim still the user's.
5. If any check fails, fix and check again.
6. Output the full edited draft and a short **What changed** section.

## Related Skills

- **copywriting**: writes the first draft; runs this pass before delivering.
- **copy-editing**: structured editing sweeps; this skill is the AI-pattern layer.
- **brand-guidelines**: voice rules that override these defaults where they conflict.
- **compliance**: claims, comparatives and guarantees that need sign-off before publishing.
