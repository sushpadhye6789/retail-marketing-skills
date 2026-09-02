---
name: public-relations
description: "When the user wants help with public relations, earned media, press coverage, journalist outreach, or media strategy (not pull requests). Also use when the user mentions 'PR,' 'public relations,' 'press,' 'press release,' 'press coverage,' 'media outreach,' 'pitch a journalist,' 'get featured,' 'media list,' 'media kit,' 'press kit,' 'newsjacking,' 'news hijack,' 'HARO,' 'Qwoted,' 'Featured,' 'Help A Reporter,' 'reporter request,' 'tech press,' 'TechCrunch,' 'earned media,' 'thought leadership placement,' 'op-ed,' 'guest article,' 'press contacts,' or 'how do I get press.' Use this for earned media work — finding journalists, pitching stories, newsjacking, and responding to press requests. For gift-guide, deal-aggregator, and directory submissions, see directory-submissions. For product launches, see launch. For social-media engagement, see social. For cold-email outreach to prospects, see cold-email."
metadata:
  version: 1.0.4
---

# Public Relations & Earned Media

You are an expert in earned media for retail and consumer brands. Your goal is to help the user get covered by journalists, podcasts, and newsletters — efficiently, with respect for the people on the other end of the pitch.

## Before Starting

**Check for product marketing context first:**
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions. Use that context and only ask for information not already covered or specific to this task. Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).

---

## Core Philosophy

PR is not a substitute for distribution. It's a multiplier for it.

- **Earned media doesn't drive direct conversions.** A TechCrunch hit will not give you 1,000 paying customers. It will give you backlinks, brand legitimacy, AI-citation surface area, and ammo for sales conversations.
- **Pitch journalists like you'd pitch a customer:** specific, useful, fast, and never about you.
- **The story is not your product. The story is the trend, the data, the conflict, or the human.** Your product is the evidence.
- **Speed beats polish on reactive PR.** A B+ pitch in the first hour of a story beats an A+ pitch on day three.

### When PR is worth it

- You have **a real story** — proprietary data, a strong opinion, a milestone, a customer with a sharp before/after, or a fresh angle on a trending topic
- You have **founder/exec time** — journalists want quotes from people with skin in the game, not from a PR rep
- You have **a destination** — a press page, blog post, or product launch that converts attention into something useful

### When to skip PR (for now)

- Pre-launch with no story beyond "we exist"
- No one on the team can sustain pitching for 4–6 weeks (PR is a momentum game)
- You don't have a clear ideal customer profile (refer to Section 2: Target Audience and Section 3: Personas of your marketing strategy) — journalists ask "who reads my piece because of this?" and if you can't answer, neither can they

---

## The PR Mix

Four modes. Most teams over-index on one. Run at least three.

| Mode | What it is | Effort | Speed to coverage |
|------|------------|--------|-------------------|
| **Reactive (newsjacking)** | Inject your POV into trending news | Low–medium | Hours to days |
| **Proactive (pitching)** | Build a media list, pitch original stories | High | 2–8 weeks |
| **Inbound (press requests)** | Respond to journalist queries on HARO/Qwoted/Featured | Low | Days to weeks |
| **Owned (press page + media kit)** | Make it easy for journalists to find you | One-time setup | N/A |

**For the reactive newsjacking workflow** — see [references/newsjacking.md](references/newsjacking.md)

**For proactive journalist pitching** — see [references/journalist-pitching.md](references/journalist-pitching.md)

**For inbound press-request platforms (HARO, Qwoted, etc.)** — see [references/press-platforms.md](references/press-platforms.md)

**For where to pitch (media outlets, podcasts, newsletters)** — see [references/media-outlets.md](references/media-outlets.md). For gift guides, deal aggregators, review platforms, and vertical/certification directories, use the separate `directory-submissions` skill — different intent, different list.

---

## Owned: Press Page + Media Kit

Set this up once. It's the cheapest PR investment with the highest ROI on every future story.

**Press page (`/press` or `/newsroom`) should include:**
- One-paragraph company description (copy/paste ready)
- Founder bios with headshots (high-res, downloadable)
- Logo pack (SVG + PNG, light + dark, with usage guidelines)
- Product screenshots (high-res)
- Recent coverage list (social proof for the next journalist)
- Founding date, employee count, funding (if disclosed)
- Press contact email (not a form — journalists hate forms)
- Recent press releases / announcements

**One sentence at the top:** "For interview requests or assets, email press@yourcompany.com — we respond within 24 hours."

Then *actually* respond within 24 hours.

---

## Quick Reference: Pitch Quality Bar

Before sending any pitch, the answer to all of these should be yes:

- [ ] Does this journalist cover this beat? (Check their last 5 articles.)
- [ ] Is there a clear news hook — something that just happened or is about to?
- [ ] Could this journalist write a complete story from this email alone? (Data, quotes, customer name, contact.)
- [ ] Is the subject line specific enough to predict the article's headline?
- [ ] Is the pitch under 150 words?
- [ ] Did you avoid the words "revolutionary," "game-changing," "disruptive," and "synergy"?
- [ ] Is the ask clear? (Interview? Embargo? Exclusive? Quote?)

If any answer is no, don't send.

---

## Measurement

What to track:

| Metric | Why |
|--------|-----|
| **Coverage count** (placements / month) | Activity baseline |
| **Domain rating of placements** | Backlink value |
| **Referral traffic from coverage** | Did anyone actually click? |
| **Brand search lift** | Did people search you after reading? |
| **AI citation rate** (ChatGPT, Perplexity quote your brand?) | The new measurement that matters |
| **Sales conversations citing the article** | The only one that matters for revenue |

What not to obsess over: AVE (advertising value equivalency) — it's a vanity metric PR firms invented.

**A sales bump that follows coverage isn't automatically caused by it.** Seasonality, a concurrent paid push, or an unrelated launch can produce the same bump — brand search lift right after a placement is the best available signal that people actually reacted to *this* coverage, but even that's a proxy, not proof. See `attribution/references/incrementality-checkpoint.md` before crediting a major revenue swing to a PR hit, or before sizing next quarter's PR budget off of it.

---

## Crisis & Reactive PR

Everything above assumes proactive, planned outreach. A negative story, a journalist inquiry about a problem, or a viral complaint needs a different mode — reactive, fast, and governed by different rules than a pitch:

- **Triage before responding**: is this a real story with legs (a journalist is actively working it, or it's already spreading), or a single complaint that risks becoming one? Don't activate a full crisis response for something that would resolve itself with a normal customer-service reply — see `customer-research`/support channels for the latter.
- **Get the facts internally before saying anything externally** — a hasty statement that has to be walked back later does more damage than a short delay to confirm what actually happened.
- **A holding statement beats silence**: "We're aware of this and looking into it, we'll share more shortly" buys time to get facts straight without leaving a journalist's inquiry unanswered, which itself becomes part of the story.
- **One spokesperson, one message** — conflicting statements from different people (or different channels) is one of the fastest ways a manageable story becomes a bigger one. Route every external response through a single person or approved statement.
- **Know when not to respond**: engaging with a low-reach complaint or bad-faith attack can amplify it far beyond its natural reach. Responding is not free — weigh the story's actual trajectory against the risk of giving it more oxygen.
- **After the immediate response**: a real issue needs a real fix communicated, not just a statement that ends the news cycle — see `compliance` if the issue touches a regulatory or legal obligation, and `brand-management` for rebuilding trust once the immediate story has passed.

This repo doesn't script specific crisis statements — the right words depend entirely on what actually happened and (for anything with legal exposure) should be reviewed by counsel before going out, not generated from a template.

---

## Common Workflows

### "Help me newsjack [trending story]"
Go to [newsjacking.md](references/newsjacking.md), run the scoring rubric, draft 2–3 angles, pick the best, draft the pitch.

### "Find journalists who cover [beat]"
Go to [journalist-pitching.md](references/journalist-pitching.md), use the discovery checklist + dev-browser to research recent articles, build a scored list.

### "What's worth pitching this week?"
Combine: recent product milestones + active news cycles + any data you've collected. Score each potential story by the quality bar above.

### "Respond to this HARO query"
Go to [press-platforms.md](references/press-platforms.md), use the response template, keep it under 200 words.

### "Build my press page"
Use the checklist above. Most companies do this in an afternoon and forget about it for a year — that's fine.

---

## Related Skills

- **brand-management**: For reputational recovery and brand-health tracking after the immediate crisis response
- **compliance**: For anything a crisis touches with regulatory or legal exposure
- **product-lifecycle**: For the recall/safety-driven emergency phase-out scenario that often runs alongside a crisis response
- **tentpole-campaign**: For the go/no-go decision on a planned campaign when a real-world event disrupts its timing or tone
- **customer-research**: For distinguishing a single resolvable complaint from a real reputational story
- **attribution**: For applying incrementality discipline before crediting a sales swing to a PR placement
- **content-strategy**: For AI-citation and earned-mention overlap with organic content strategy
- **launch**: For press strategy tied to a specific go-to-market moment
