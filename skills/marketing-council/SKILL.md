---
name: marketing-council
description: "When the user wants multiple expert perspectives on a marketing question — either a simulated board of legendary marketers (Seth Godin, Ogilvy, Schwartz, Dunford, Hormozi, and more) applying documented frameworks, or a domain-agnostic Decision Council (Contrarian, First Principles Thinker, Expansionist, Outsider, Executor) that stress-tests the idea. Also use when the user mentions 'marketing council,' 'advisory board,' 'boardroom,' 'audit this,' 'tear this apart,' 'grade this ad,' 'what would Seth Godin say,' 'channel Hormozi,' 'debate this,' 'decision council,' 'contrarian take,' 'stress-test this,' or 'first-principles this.' The marketer bench surfaces documented disagreement; Decision Council catches fatal flaws, wrong framing, undersold upside, curse-of-knowledge blind spots, and feasibility gaps. For executing the winning direction, hand off to positioning, offers, copywriting, ads, or the relevant skill."
metadata:
  version: 1.2.2
---

# Marketing Council

You convene one of two councils, depending on what the question needs:

- **The marketer bench** — legendary marketers whose documented frameworks, published positions, and known heuristics you apply to the user's specific problem. The value isn't any single take — it's the *disagreement*. The bench is built from thinkers whose lenses conflict in useful ways, so the user sees the real trade-offs before choosing a direction. **This is persona simulation, not the real people.** Every take must be grounded in what the advisor actually wrote or said (see Grounding Rules). Label the output as simulation.
- **The Decision Council** — five generic, domain-agnostic thinking roles (Contrarian, First Principles Thinker, Expansionist, Outsider, Executor) that stress-test the *idea itself*, independent of any marketing framework. Not persona simulation — no real people are represented, so the Grounding Rules don't apply to it (see its own Decision Council Rules instead).

They answer different questions and can be run standalone or stacked — see Session Modes below for when each fits, and "Decision Council vs. the marketer bench" for how they combine.

## Before Starting

**Check for product marketing context first:**
Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md`), read it before asking questions.

Then clarify (ask only for what's missing):
1. **The question** — What decision or work product is the council reviewing? (a strategy, a landing page, a pricing change, a launch plan, a rebrand, an ad account)
2. **The stakes** — What happens if this goes well or badly? What's already been tried?
3. **Session mode** — quick take, council session, boardroom, full council, or decision council (see below). Default: council session.

## Session Modes

| Mode | Seats | When |
|------|-------|------|
| **Quick take** | 1 advisor | "What would Ogilvy say about this headline?" — a single named advisor |
| **Council session** (default) | 3–5 advisors | A real decision that benefits from conflicting *marketing* lenses |
| **Boardroom** | 6 fixed advisors | A fixed panel for auditing a finished asset (ad, landing page, campaign, screenshot). Triggers on "run the boardroom," "boardroom this," "audit this," "tear this apart," "rip this apart," "roast this," "critique this," "grade this ad," or any asset review with no advisor named. Skips the seating-logic table below entirely — always seat Ogilvy, Godin, Vaynerchuk, Sutherland, Schwartz, and Sharp, in that order, regardless of question type; their lenses already collide without needing the dissenter logic. Produces the Action Matrix artifact (see below) instead of the plain-text next-steps list. |
| **Full council** | All 12 | Major strategic decisions — expect a long output; offer this only when stakes justify it |
| **Decision Council** | 5 fixed roles | A domain-agnostic stress-test of the idea or decision itself, independent of marketing expertise. Triggers on "decision council," "contrarian take," "stress-test this," "first-principles this," "poke holes in this," "what's the fatal flaw here," or an explicit request to run the Contrarian/First Principles/Expansionist/Outsider/Executor roles. Does **not** trigger on generic marketing questions or asset audits — those default to Council session or Boardroom (see disambiguation below). |

**Boardroom vs. a Council session reviewing copy:** both can touch a finished asset, and that overlap is real. Default to Boardroom when the ask is a full-asset audit with no advisor named ("audit this," "tear this apart," a pasted screenshot with no further instruction). Default to Council session's Copy / creative review seating (see below) when the user names specific advisors, asks a narrower question about the copy or messaging alone, or the request reads as a strategic question rather than a critique of a finished piece.

**Decision Council vs. the marketer bench:** these overlap in *when they could apply* (both can touch a strategic decision or a finished asset) but never in *what they produce* — the marketer bench answers "what would documented marketing expertise say, and where do real experts' philosophies genuinely conflict"; Decision Council answers "does this survive fatal-flaw hunting, wrong-question framing, undersold upside, fresh-eyes confusion, and a feasibility check, independent of any marketing framework." Because of that overlap window, Decision Council only triggers on its own explicit phrases above — never as a silent alternative to Council session or Boardroom on an ordinary marketing question, and never both at once unless asked. It's most valuable **stacked**, not standalone:
- **Before** a Council session or Boardroom — to sanity-check the question itself before spending the marketer panel's time on it ("First Principles: is repositioning even the right move here, or is the real problem retention?").
- **After** a Council session, Boardroom, or Full council — to stress-test the marketers' consensus, especially the Outsider seat, which catches the curse-of-knowledge blind spot a bench of deep marketing experts shares by construction (none of the 12 marketer personas ever has zero context; the Outsider always does).

## The Bench

Twelve advisors, chosen so their lenses collide. Full dossiers live in `references/advisors/` — load only the seated advisors' files.

| Advisor | Lens | File |
|---------|------|------|
| **Seth Godin** | Remarkability, permission, smallest viable audience | [seth-godin.md](references/advisors/seth-godin.md) |
| **David Ogilvy** | Research-driven brand advertising with direct-response discipline | [david-ogilvy.md](references/advisors/david-ogilvy.md) |
| **Eugene Schwartz** | Channel existing mass desire; awareness & sophistication stages | [eugene-schwartz.md](references/advisors/eugene-schwartz.md) |
| **Claude Hopkins** | Scientific advertising — test everything, reason-why copy | [claude-hopkins.md](references/advisors/claude-hopkins.md) |
| **Gary Halbert** | The starving crowd — market and list before product and copy | [gary-halbert.md](references/advisors/gary-halbert.md) |
| **Russell Brunson** | Funnels, value ladders, hook-story-offer | [russell-brunson.md](references/advisors/russell-brunson.md) |
| **Alex Hormozi** | Offer construction and the value equation; volume and leverage | [alex-hormozi.md](references/advisors/alex-hormozi.md) |
| **April Dunford** | Positioning against real competitive alternatives | [april-dunford.md](references/advisors/april-dunford.md) |
| **Rory Sutherland** | Behavioral science and psycho-logic; the opposite of a good idea can also be a good idea | [rory-sutherland.md](references/advisors/rory-sutherland.md) |
| **Byron Sharp** | Evidence-based brand science — mental & physical availability, reach over loyalty | [byron-sharp.md](references/advisors/byron-sharp.md) |
| **Ann Handley** | Content and writing craft; slower, braver marketing | [ann-handley.md](references/advisors/ann-handley.md) |
| **Gary Vaynerchuk** | Attention arbitrage — be native to underpriced channels at volume | [gary-vaynerchuk.md](references/advisors/gary-vaynerchuk.md) |

## Seating the Council

For a council session, seat 3–5 advisors:

1. **2–3 whose lens directly fits the question type** (table below).
2. **Always seat at least one designated dissenter** — an advisor whose documented position conflicts with where the question is leaning. A council that agrees is a mirror, not a board.
3. Honor explicit requests ("I want Hormozi and Godin on this").

| Question type | Strong fits | Natural dissenters |
|---------------|-------------|-------------------|
| Positioning / messaging | Dunford, Godin, Schwartz | Sharp (differentiation skeptic) |
| Offer / pricing | Hormozi, Halbert, Brunson | Sutherland (price ≠ value logic), Godin (race-to-the-bottom warning) |
| Brand building / awareness | Sharp, Ogilvy, Sutherland | Hopkins, Halbert (show me the sales) |
| Copy / creative review | Ogilvy, Schwartz, Halbert, Handley | Sutherland (test the illogical) |
| Funnels / conversion path | Brunson, Hormozi, Hopkins | Godin (permission over pressure), Handley (you're churning trust) |
| Content strategy | Handley, Godin, Vaynerchuk | Sharp (reach beats depth), Hopkins (where's the response?) |
| Paid ads / media | Hopkins, Sharp, Vaynerchuk | Godin (interruption is a tax) |
| Growth / scaling | Hormozi, Vaynerchuk, Sharp | Handley (quality erosion), Dunford (scaling a fuzzy position) |
| Audience / channel choice | Vaynerchuk, Sharp, Halbert | Godin (smallest viable audience vs. mass reach) |
| Launch strategy | Brunson, Godin, Halbert | Sharp (launches fade; availability compounds) |

## The Decision Council

Five fixed roles, always seated together (unlike the marketer bench, there's no partial seating — the five are chosen so each covers a distinct failure mode of the other four, and dropping one leaves a gap none of the others fill):

| Role | Job | Failure mode it exists to catch |
|------|-----|----------------------------------|
| **The Contrarian** | Actively looks for what's wrong, what's missing, what will fail. Assumes the idea has a fatal flaw and tries to find it. If everything looks solid, digs deeper. Not a pessimist — the friend who saves you from a bad deal by asking the question you're avoiding. | A decision that looks good because no one stress-tested it |
| **The First Principles Thinker** | Ignores the surface-level question and asks "what are we actually trying to solve here?" Strips away assumptions and rebuilds the problem from the ground up. Sometimes the most valuable output is "you're asking the wrong question entirely." | Solving a well-articulated version of the wrong problem |
| **The Expansionist** | Looks for upside everyone else is missing. What could be bigger? What adjacent opportunity is hiding? What's being undervalued? Doesn't weigh risk — that's the Contrarian's job. Cares about what happens if this works *better* than expected. | An idea sized too small because no one asked what winning big looks like |
| **The Outsider** | Has zero context about the business, the field, or its history. Responds purely to what's in front of them. Never given the other four takes before forming their own — contamination defeats the point. | The curse of knowledge: things obvious to an expert but confusing (or alarming) to anyone else |
| **The Executor** | Only cares whether this can actually be done and what the fastest path is. Ignores theory and big-picture strategy. Looks at every idea through "OK, but what do you do Monday morning?" If it sounds brilliant but has no clear first step, says so. | A direction that's directionally right but never ships |

### Decision Council Protocol

1. **Generate the Outsider's take first, in isolation** — before the other four roles see the question discussed, or the Outsider inherits context they're specifically meant not to have. (The other four can be generated in any order, each seeing only the question, not each other's takes, to keep every role's critique independent rather than reactive.)
2. **Each role's take** — 1-3 paragraphs, staying strictly inside that role's lens (an Executor take that starts weighing strategic tradeoffs has drifted into someone else's seat — cut it back).
3. **Where the roles disagree** — the Expansionist and Contrarian will often point in opposite directions on the same fact (is the small addressable market a risk or is it exactly the "smallest viable" advantage); name that tension explicitly rather than smoothing it over.
4. **Chair's synthesis** — same format as the marketer bench: a recommendation fitted to the user's actual situation, which role's warning to keep as a tripwire, and concrete next steps.

### Decision Council Rules

- **No real people are represented.** These are functional roles, not personas — nothing here needs sourcing, quoting, or the marketer bench's Grounding Rules. The discipline is different: stay strictly inside the role's lens (see Anti-Patterns) rather than avoiding misattribution.
- **The Outsider's isolation is load-bearing, not a formality.** If the Outsider's take reads like it absorbed the other four roles' framing, it has failed at the one thing it exists to do.
- **Don't let five takes converge into one generic "here are some things to consider."** Each role should sometimes actively contradict another — an Expansionist and a Contrarian agreeing on everything means one of them isn't doing their job.

## Session Protocol

1. **Load the seated advisors' dossiers** from `references/advisors/`.
2. **Optional live research pass** — see below. Offer it when the question is specific enough that documented positions may not cover it, or the user wants citations.
3. **Each advisor's take** — 2–4 paragraphs per advisor:
   - Open with the advisor applying their *signature questions* to the user's case
   - Apply their frameworks to the specifics (their dossier lists them) — not generic advice with a name attached
   - State their recommendation with the conviction they'd actually have
   - Written in their voice per the dossier's voice notes, without fabricated quotes
4. **In Boardroom mode, add a cross-examination round** after the individual takes: a real back-and-forth between seated advisors where their frameworks genuinely conflict on this specific asset (minimum 8 exchanges). Let the friction be real, not scripted — don't force a clash that this particular asset doesn't actually produce. The board should converge on 3 core strategic bets before moving to synthesis.
5. **The disagreement map** — the most valuable section. Identify 2-4 genuine conflicts between the takes, name the underlying trade-off each conflict represents (e.g., "Sharp vs. Godin here is really reach vs. resonance — which constraint binds *this* business?"), and say what evidence would settle each.
6. **Synthesis** — a chair's summary: the recommendation that best fits *this* user's stage, category, and constraints; which advisor's warning to keep as a tripwire; and concrete next steps with skill handoffs (see Related Skills). In Boardroom mode, replace the plain-text next-steps list with the Action Matrix artifact (see below).

## Live Research Pass

When the topic is specific (a niche, a channel shift, a current platform change) or the user wants sources, go beyond the dossiers:

- **If a deep-research skill is installed** (e.g., `deep-research`): use it to find what the seated advisors have actually said or written about this topic class — books, essays, interviews, podcasts — plus current state of the debate.
- **If a video-analysis skill is installed** (e.g., `watch-video`): pull takes from specific talks/interviews the research surfaces.
- **If a recency skill is installed** (e.g., `last30days`): check for recent takes when the topic is fast-moving.
- **Otherwise**: use built-in web search for `[advisor name] + [topic]` per seated advisor, preferring primary sources (their own books, blogs, newsletters, talks) over roundup articles.

Fold findings into the takes with citations ("In a 2023 interview on X, Dunford argued…"). If research contradicts a dossier, trust the research and note the correction.

## Grounding Rules (non-negotiable)

- **Label the session as simulation** once, at the top: a line like *"Simulated council — each take is built from the advisor's published frameworks and positions, not their actual review."*
- **No fabricated quotes.** Direct quotation only for lines verifiable in the dossier or research pass, with the source named. Otherwise paraphrase: "Hopkins's position in *Scientific Advertising* is…"
- **No invented endorsements or condemnations.** An advisor can be simulated *applying their framework* to the user's product; never state or imply the real person has an opinion about the user's specific company.
- **Living advisors get extra care.** Godin, Brunson, Hormozi, Dunford, Sutherland, Sharp, Handley, and Vaynerchuk are alive and active — their positions evolve; prefer the research pass for anything time-sensitive, and never simulate them commenting on named competitors or controversies.
- **Disagree in substance, not caricature.** Each advisor's take must be the strongest version of their view applied to this case — no strawmen for the synthesis to knock down.
- **If the dossier and the user's question don't overlap** (e.g., asking Hopkins about TikTok), say so in the take and reason by explicit analogy: "Hopkins never saw social feeds, but his sampling principle maps like this…"

## Output Format

```
> Simulated council — each take is built from the advisor's published
> frameworks and positions, not their actual review.

## The question before the council
[1-2 sentence restatement + what's at stake]

## Seated: [Advisor A], [Advisor B], [Advisor C] ([mode])
[One line on why this bench, including who was seated as the dissenter —
in Boardroom mode, note that all six are fixed by default]

---

### [Advisor A] — [their lens, 3-5 words]
[2-4 paragraph take]
**Bottom line:** [one sentence]

### [Advisor B] — …
…

[Boardroom mode only: cross-examination round here, minimum 8 exchanges]

---

## Where the council disagrees
1. **[Conflict]** — [A] says X because [framework]; [B] says Y because
   [framework]. The real trade-off: [underlying tension]. What would
   settle it: [evidence/test].
2. …

## Chair's synthesis
[Recommendation fitted to this user's stage and constraints]
- **Do:** [2-4 concrete next steps]
- **Tripwire:** [which advisor's warning to monitor, and the signal]
- **Execute with:** [skill handoffs]
```

**Decision Council mode** uses the same overall shape, with two differences: no simulation-disclaimer line (these aren't real people), and the seated line reads `## Seated: Contrarian, First Principles Thinker, Expansionist, Outsider, Executor (Decision Council)` with a note confirming the Outsider's take was generated in isolation, not that anyone was chosen as a dissenter.

## Action Matrix (Boardroom mode only)

Instead of a plain-text next-steps list, produce a standalone, single-file HTML artifact:

- Dark-mode UI.
- Each action item tagged by Effort (Low/Med/High) and Impact (Critical/High), with working filter controls.
- An owner badge naming which seated advisor proposed the item.
- Click-to-check task boxes.
- No external calls, no localStorage, transparent background — keep it self-contained per the `frontend-design` skill's constraints. Consult `frontend-design` before building it so the styling reads as intentional rather than templated.

## Adding a Custom Advisor

Users can extend the bench ("add my own advisor"). Create a dossier following the structure in [references/advisor-template.md](references/advisor-template.md) — the same fields as the built-in advisors (lens, frameworks, documented positions with sources, signature questions, best-for/blind spots, voice notes, key works). For non-famous advisors (the user's old boss, an internal exec), have the user supply the positions; do not invent them. Save to `.agents/advisors/<name>.md` in the user's project so it persists and never collides with repo updates.

## Anti-Patterns

- **The agreeing council** — five takes that all bless the user's existing plan. Re-seat with a real dissenter.
- **Staged cross-examination** — a Boardroom cross-examination round that's obviously scripted rather than following where the seated advisors' frameworks actually clash on this asset defeats the point; force real friction, not theatre.
- **Name-flavored generic advice** — a take that would survive with the name swapped isn't a take; anchor each one in that advisor's specific frameworks and documented positions.
- **Quote soup** — stitching famous one-liners together instead of applying the method behind them.
- **Council for execution work** — the council decides direction; it doesn't write the landing page. Hand off to the execution skill once direction is set.
- **Twelve advisors on a headline** — match the bench size to the stakes.
- **Decision Council as the default** — running it on every ordinary marketing question instead of Council session/Boardroom defeats its purpose as a targeted stress-test; only fire it on its own explicit triggers (see Session Modes).
- **A contaminated Outsider** — generating the Outsider's take after (or informed by) the other four roles' discussion produces a sixth generic opinion, not fresh eyes. Generate it first, in isolation, every time.
- **Roles bleeding into each other** — an Executor debating strategy, or a Contrarian pitching upside, has left their lane; each role should read as a genuinely different kind of critique, not five voices making the same point.

## Related Skills

- **compound-marketing**: Boardroom mode is a natural pre-Execute gate in that skill's loop — a multi-advisor review of the finished Draft before it ships.
- **marketing-strategy**: When Dunford's take wins — execute the positioning work (see its `references/positioning-methodology.md`)
- **offers** / **pricing**: When Hormozi/Halbert direction wins — build the offer
- **copywriting** / **copy-editing**: When the council reviewed copy — execute revisions
- **ads** / **ad-creative**: When the debate was media or creative strategy
- **content-strategy** / **social**: When Handley/Vaynerchuk direction wins
- **brand-strategy** / **marketing-psychology**: For Sharp's availability work and Sutherland's behavioral mechanics
- **ab-testing**: When the disagreement map says "test it" — Hopkins would insist
- **deep-research**: For the live research pass, when installed
- **frontend-design**: For the Action Matrix artifact in Boardroom mode
