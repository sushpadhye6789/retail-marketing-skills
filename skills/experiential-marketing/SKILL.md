---
name: experiential-marketing
description: "When the user wants to plan an in-person event, activation, or demo — in-store demos, trade show booths, roadshows, pop-up shops, or community workshops. Also use when the user mentions 'experiential marketing,' 'in-store demo,' 'trade show booth,' 'roadshow,' 'pop-up shop,' 'brand activation,' 'live event,' 'product demo event,' or 'mobile activation.' This covers physical, in-person marketing events — distinct from community-marketing, which covers online communities (Discord/Slack/forums), and from tentpole-campaign, which covers a major calendar-moment brand campaign that may or may not include a physical event component. For the sales collateral used at an event, see sales-enablement. For the retail-buyer relationship a trade show sell-in serves, see trade-marketing."
metadata:
  version: 1.1.0
---

# Experiential Marketing

You help users plan physical, in-person marketing events and activations — in-store product demos, trade show booths, roadshows, pop-up shops, and community workshops — where the core value is a live, hands-on experience with the product or brand, not a broadcast message.

**Scope note**: `community-marketing` builds and sustains *online* communities (Discord, Slack, forums). This skill covers the physical, in-person counterpart. `tentpole-campaign` plans a major brand moment across channels, which may include an experiential component as one piece of a larger campaign — when it does, this skill owns the event's own execution while `tentpole-campaign` owns the cross-channel coordination around it.

## Before Starting

**Check for existing strategy context first:**
Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions.

Gather this context (ask if not provided):

### 1. Event Type & Purpose
- In-store demo, trade show, roadshow/mobile activation, pop-up, or workshop?
- Primary goal: direct sales/conversion at the event, lead capture, brand awareness/experience, or trade relationship-building (a buyer-facing trade show — see `trade-marketing`)?

### 2. Audience & Venue
- Consumer-facing (in a store, a public space) or trade-facing (an industry trade show, a buyer meeting)?
- Owned venue, a dealer/retailer's space (see `marketing-strategy` Section 15 — dealer coordination), or a rented/public venue?

### 3. Resources & Product Fit
- Is the product genuinely demo-able hands-on, or is the event more about brand experience than product demonstration?
- Staffing: brand team, a hired demo/promo staff agency, or dealer staff running it locally?

### 4. Distribution Model
- If dealer-based, is this event co-funded (see `supplier-funded-marketing`) and does it need brand-standard guardrails for dealer-run execution?

---

## Which Events to Invest In (Portfolio Strategy)

Before planning any single event's execution, answer the question that sits above all the format sections below: **is this event worth being at, relative to everything else competing for the same budget and staff time?** Events are the most expensive, hardest-to-measure channel available — the leverage is in selection, not execution. A small number of events usually drive most of the results; a flagship conference or festival often underperforms a niche regional show or a recurring local activation once cost-per-qualified-conversation is worked out honestly.

See `references/event-portfolio-and-sponsorship.md` for the full portfolio framework — when in-person is worth it at all (vs. spending on digital first), the 80/20 of event selection, why bigger events often deliver worse returns, and how to budget the full cost (not just the sticker price) of a booth or sponsorship.

---

## In-Store Demos

The highest-conversion experiential format when the product genuinely benefits from hands-on demonstration:

- **Book demo days around genuine foot-traffic peaks** at the host location, not arbitrary dates — coordinate with the dealer/retailer on their own high-traffic periods.
- **The demonstrator matters more than the setup** — a knowledgeable, engaging demonstrator with a modest setup consistently outperforms an elaborate setup with a weak demonstrator. Invest in training/briefing before investing in production value.
- **Have a clear conversion path from the demo moment** — a demo that impresses but has no easy next step (a purchase on the spot, a scannable offer, a clear follow-up) leaves value on the table.
- **Track attribution deliberately** — a unique offer code or a simple sign-in sheet/QR capture tied to the specific demo date and location lets the event be measured, not just felt to have "gone well." See Measurement below.

---

## Trade Show Presence

- **Pre-book meetings with target buyers before the show** — see `trade-marketing`'s Trade Show Sell-In section for the buyer-conversation content; this skill owns the booth/demo execution that supports those conversations.
- **Design the booth for its actual job** — a consumer-style attention-grabbing booth and a buyer-focused meeting space serve different purposes; know which one the show calls for before designing it.
- **Staff for quality of conversation, not just booth coverage** — a trade show is a high-density, high-cost-per-hour environment; understaffing loses opportunities, but staffing with people unable to speak credibly to a buyer's actual questions is just as costly.
- **Fast follow-up wins deals** — see `trade-marketing`'s Common Mistakes; the show is the start of the relationship, not the close.

**If the booth/sponsorship slot itself is still an open decision** — should we pay for this, how much, and is a booth even the right format — that's a separate evaluation from the execution guidance above. See `references/event-portfolio-and-sponsorship.md`'s "Sponsoring or Exhibiting at Someone Else's Event" section: the cost-per-qualified-conversation math to run before committing, what to negotiate for beyond price (a speaking slot, side-event rights, a real attendee list), and why a curated side-event often outperforms the booth itself. The same reference's "Speaking at Industry Events" section covers trading expertise for stage time as an alternative or complement to sponsoring — relevant when a founder or category lead can credibly pitch the audience's takeaway rather than the company.

---

## Roadshows & Mobile Activations

- **Route planning should follow the audience, not convenience** — prioritize locations by actual audience density/opportunity (see `local-marketing`'s prioritization logic, applied to a physical route instead of a location list) rather than an easy geographic loop.
- **Local promotion ahead of arrival** — a roadshow stop with no local awareness beforehand relies entirely on walk-up traffic; coordinate with `local-marketing`, `social`, and dealer partners in that market to build anticipation before the activation arrives.
- **Budget realistically for logistics** — transport, setup/teardown time, and staff travel are often underestimated relative to the on-site activation budget itself; a roadshow's real cost-per-touchpoint is usually higher than a fixed in-store demo's.

---

## Pop-Up Shops

- **Have a clear reason for the format**, not just "pop-ups are trendy" — a limited-time physical presence works best for a genuine scarcity/exclusivity story, testing a new market before committing to permanent presence, or a `tentpole-campaign`-scale brand moment that warrants a dedicated space.
- **Plan the post-pop-up path deliberately** — where does the audience captured (email/SMS signups, social follows) go afterward? A pop-up that captures a great audience with no follow-up sequence wastes most of its value; see `emails`/`sms` for the sequence.
- **Location and lease terms** need enough lead time — a good pop-up location is competitive and time-sensitive to secure, closer to `tentpole-campaign`'s premium-placement lead-time logic than a same-week decision.

---

## Community Workshops & In-Person Events

- **Genuine value first, promotion second** — a workshop that's thinly-veiled sales pitch loses the trust dividend that makes in-person community events work in the first place; teach or demonstrate something genuinely useful, let product interest follow naturally.
- **Small and well-run beats large and thin** — a workshop format depends on real interaction; capping attendance to what can genuinely be served well usually outperforms maximizing headcount.
- **Coordinate with `community-marketing`** if there's an existing online community — an in-person event is one of the strongest tools for converting online community engagement into deeper loyalty, and vice versa.

---

## Measurement

Experiential events are notoriously under-measured relative to their cost — apply real discipline, not just a post-event "it felt successful":

- **Set the metric before the event**, matched to its actual purpose: units sold on the day (demos), leads captured with quality scoring (trade shows), or awareness/sentiment (a brand pop-up or workshop) — see `attribution`'s "Measuring awareness, not just conversion" section for the latter.
- **Use a trackable mechanism**: a unique event-specific offer code, a dedicated landing page/QR, or a simple attendee capture — without one, results get estimated rather than measured.
- **Apply the incrementality checkpoint before crediting the event with sales that followed it** — some of the sales attributed to an event's date range would have happened anyway (regular foot traffic, existing demand). See `attribution/references/incrementality-checkpoint.md`: a before/after comparison against a typical period is a reasonable gut-check for most single events; a matched-location comparison (running the same period without an event at a comparable location) is worth it before committing to a recurring, budget-anchoring event series.

---

## Common Mistakes

- **No trackable mechanism**, leaving the event's actual impact unmeasured and unmeasurable after the fact.
- **Investing in setup/production over staffing/training quality** — the demonstrator or booth staff's competence matters more than the physical setup in most formats here.
- **No conversion path from the moment of engagement** — an impressed attendee with no clear next step.
- **Underestimating roadshow logistics cost** relative to the on-site activation budget.
- **Pop-ups or events with no plan for the captured audience afterward.**
- **Workshops that are a thinly-disguised pitch**, undermining the trust the format depends on.
- **Crediting an event with sales lift without any before/after or control comparison.**

---

## Task-Specific Questions

1. What type of event, and what's the primary goal — conversion, leads, awareness, or trade relationships?
2. If this is a sponsorship/exhibit slot at someone else's event: has the cost-per-qualified-conversation math actually been run, or is the decision being made on the event's reputation alone?
3. Is the venue owned, a dealer/retailer's space, or a rented/public venue?
4. Who's staffing it, and how well-briefed/trained are they on the product and the goal?
5. What's the trackable mechanism for measuring this event's actual impact?
6. If dealer-executed or co-funded: what guardrails and support does the dealer need?

---

## Related Skills

- **trade-marketing**: For the buyer-conversation content and follow-up a trade show booth supports
- **community-marketing**: For the online-community counterpart to an in-person workshop or activation
- **tentpole-campaign**: For coordinating a physical event as part of a larger cross-channel brand moment
- **local-marketing**: For pre-arrival local promotion of a roadshow stop or in-store demo, and the geo-targeted promotion that makes a B2C sponsorship or side-event worth attending
- **sales-enablement**: For sales collateral used at trade shows and demos
- **supplier-funded-marketing**: For co-funded dealer-hosted demo events
- **pos-marketing** / **visual-merchandising**: For the physical setup and placement of an in-store demo or pop-up
- **packaging-design**: For booth/display structural design when product samples or packaging factor into a trade show or sponsorship presence
- **emails** / **sms**: For the follow-up sequence to audiences captured at an event
- **attribution**: For applying incrementality discipline before crediting event-driven sales lift, and for the self-reported-attribution discipline around sponsorship results
- **revops**: For routing and scoring leads/contacts captured at a sponsored event or trade show
- **public-relations**: For press/media angles around a speaking slot or major sponsorship
- **content-strategy** / **video** / **ai-seo**: For turning event or speaking content into a durable, citable asset
- **marketing-strategy**: For distribution-model context determining venue and dealer coordination, and the Business/Commercial segmentation that shapes whether in-person B2B presence is worth the cost
