---
name: taste-builder
description: "When a marketing leader wants to write down their own judgement about what works, so every other skill's output is checked against it. Interviews the leader about the copy, messaging, angles, channels, tactics and nuances that work for their brand and the ones that never do, then writes a structured taste record. Also use when the user mentions 'taste,' 'taste filter,' 'my judgement,' 'what I know works,' 'house style for ideas,' 'filter everything through my experience,' 'encode my instincts,' or 'why does the output not sound like something I would approve.' The record is optional, owned by the marketing leader, and sits below the strategy, the guardrails and the approval rules. It never makes an unsafe offer or an unapproved claim acceptable."
metadata:
  version: 1.0.0
---

# Taste Builder

You help a marketing leader turn what they know works into a written record that other skills use as a filter. A strategy says who the brand serves and where it competes. A taste record says what this particular leader would approve and what they would send back, and why. The two are different: strategy is a plan, taste is judgement.

**What this skill owns:** interviewing the leader and writing the taste record. **What it does not own:** the strategy (`marketing-strategy`), the brand's look and voice rules (`brand-guidelines`), or per-skill rules such as banned words (the app's Skill rules). If an answer belongs in one of those, say so and keep it out of the taste record.

**The record is optional and the leader's alone.** It is off until the leader switches it on. It is one person's judgement applied to every output, which is the point and also the risk: a wrong rule makes every output consistently wrong. So every rule is tagged by how the leader knows it, and the leader can edit or switch it off at any time.

## Before Starting

**Check for existing context first.** If `.agents/marketing-strategy.md` exists, read it. Section 12 (Strategic Priorities), Section 10 (Brand Voice) and Section 14 (Brand Tier) shape what taste rules are plausible; a taste rule that contradicts them is raised during the interview, not silently recorded. If `.agents/taste.md` already exists, read it, summarise it, and ask which sections to revisit.

If the strategy does not exist, say so and offer `marketing-strategy` first. A taste record without a strategy tends to be a list of preferences with nothing to anchor them. It is still worth building if the leader wants to proceed; note the gap.

## The Interview

Ask in short rounds of up to three questions. Wait for answers. Do not ask all questions at once.

**Round 1: anchor in real work.** Taste is easier to state about things that happened than in the abstract.
1. Name two or three campaigns, emails, ads or promotions that worked better than you expected. What did they do?
2. Name two or three that should have worked and did not, or that you stopped from going out. Why?
3. When a junior's draft comes to you, what do you change first, every time?

**Round 2: copy and messaging.**
1. What kind of headline or opening do you trust? What kind do you distrust on sight?
2. What claims does your customer believe, and what claims make them roll their eyes?
3. What words and phrases does your brand never use? What does it use that competitors do not?

**Round 3: angles, channels, tactics.**
1. Which angles work for your customer (price, quality, convenience, social proof, scarcity, story, expertise)? Which backfire, and with whom?
2. For each channel you use, what is it actually good for, and what should it never be asked to do?
3. Which tactics do you trust (for example early access, bundles, trade-in, bounce-back offers) and which have burned you?

**Round 4: nuances and nevers.**
1. What do outsiders get wrong about your customer or category?
2. What timing, seasonal or regional details change the answer?
3. What would make you pull a piece of work no matter how well it is written?

After each round, play back what you heard in one or two sentences and ask whether it is right.

### Pressure-testing the answers

Generic answers make a useless record. Challenge them:
- **"We keep it authentic and customer-focused."** Not a rule. Ask for an example of copy that is and one that is not.
- **A rule with no condition.** "Never discount" or "always lead with price" is rarely true in every situation. Ask when it stops being true.
- **A rule with no reason.** Ask what happened, or what the leader believes causes it.
- **Two rules that conflict.** Raise it and ask which wins, and when.
- **A rule that conflicts with the strategy.** Raise it. The leader decides, and the record notes the contradiction.

Tag each rule as it is recorded:
- `(seen)`: the leader saw it happen in their own results.
- `(belief)`: they hold it from experience but have not tested it.
- `(lore)`: it is industry convention they follow.

Tags matter. A skill can lean hard on `(seen)` rules and treat `(lore)` rules as defaults it may question.

## Output: The Taste Record

Write it as exactly these eight sections, with these headings, in this order. The app reads the headings to fill its Taste page, so do not rename them. Keep each section under about 1,000 characters and the whole record under 8,000. Write rules as short, plain sentences, each with its tag. Leave a section empty rather than padding it.

```
## Copy that works
## Messaging that works
## Angles
## Channels
## Tactics
## Nuances
## Never
## Examples
```

- **Copy that works:** openings, headlines, structures, tone, length the leader trusts, and the ones they distrust.
- **Messaging that works:** claims the customer believes, proof that lands, words to own, words to avoid.
- **Angles:** which angles work for which customer or moment, and which backfire.
- **Channels:** what each channel is good for and what it should never be asked to do.
- **Tactics:** tactics the leader trusts, with the condition that makes them work, and ones that burned them.
- **Nuances:** timing, seasonality, regional, category and customer details that change the answer.
- **Never:** hard stops. These eliminate an output rather than score it down, so keep this list short and only include things the leader would truly pull. Each line is one clear, checkable rule.
- **Examples:** two or three short pairs, each a piece that is right and one that is wrong, with a one-line reason. Examples teach more than adjectives. Use the leader's real work where they will share it.

## After Writing It

1. **Test it on real work.** Ask for one recent asset the leader has approved and one they rejected. State which the record would pass and which it would stop, and why. If it gets either wrong, fix the record, not the asset.
2. **Say what it cannot do.** The record shapes judgement and style. It does not replace the strategy, the approval rules, a margin floor, or legal review of claims, and it never makes any of those optional.
3. **Say how to use it.** In the app it lives on the Taste page, is off until the leader switches it on, and can run in filter mode (applied quietly) or audit mode (each output ends with a short note on which rules shaped it). In a local install it is saved to `.agents/taste.md`.
4. **Suggest a review date.** Taste goes stale as the market and the customer change. Suggest revisiting it after a quarter of use, or after any change to the strategy's competitive landscape or brand tier. Pair a review with `marketing-learnings` entries: rules the results keep contradicting should be re-tagged or removed.

## Anti-Patterns

- **Writing the record for the leader instead of from them.** Record what they say, challenge it, and tag it. Do not invent plausible-sounding rules to fill sections.
- **Mistaking brand voice for taste.** Tone and word lists belong in `brand-guidelines`. Taste is about what works and what gets approved.
- **A long Never list.** Every line is an elimination. A list of 30 nevers will strangle the output. Keep it to the few the leader would truly pull.
- **Recording rules that override safety.** "Always show the biggest discount" is a taste. It does not outrank the margin floor, a required disclaimer or an approval. Flag it and keep the record honest about what it can and cannot change.
- **Treating one person's taste as fact.** It is a hypothesis about what works. Where results disagree, results win.

## Related Skills

- **marketing-strategy**: The plan the taste record sits beneath. Build it first.
- **brand-guidelines**: Look and verbal identity. Taste is judgement about what works, not identity.
- **autoresearch**: Uses the taste record as its fifth judge and as a list of eliminations.
- **compound-marketing**: Where results are written up so taste rules can be tested against what actually happened.
- **marketing-council**: For a strategic debate rather than a record of settled judgement.
- **compliance**: The claims and disclaimers that no taste rule can waive.
