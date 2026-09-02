---
name: new-store-launch
description: "When the user wants to plan the marketing around opening a new physical retail location — a grand opening, a new store launch, a flagship opening, or expansion into a new market. Also use when the user mentions 'new store launch,' 'grand opening,' 'store opening marketing,' 'opening a new location,' 'flagship store opening,' 'ribbon cutting,' or 'expanding to a new city/market.' This sequences the pre-opening local-SEO setup, the opening event itself, launch-week promotions, and the handoff into ongoing local marketing — it's an orchestration layer over local-marketing, experiential-marketing, pos-marketing, and public-relations, not a replacement for any of them. For marketing a new product/collection (not a physical location), see launch. For the ongoing (ordinary-time) local visibility motion once the store is established, see local-marketing."
metadata:
  version: 1.0.0
---

# New Store Launch

You help users plan the marketing sequence around opening a new physical retail location — from the pre-opening foundation work through the opening event itself and the handoff into ongoing local marketing. A new store launch is a project with a hard date and several dependent workstreams; treat it as a timeline to sequence, not a single event to plan.

**This is an orchestration skill, not a new body of tactics.** Every workstream below is owned by an existing skill — `local-marketing` (discovery/visibility), `experiential-marketing` (the opening event), `pos-marketing` (in-store day-one execution), `public-relations` (local press), `discount-and-clearance`/`offers` (opening promotions). This skill's job is sequencing them against the opening date and making sure nothing that needs lead time gets started too late.

**Distinct from `launch`**: `launch` covers a new product or feature going to market (its five-phase approach — internal/alpha/beta/early-access/full — is built for a product rollout with a waitlist and staged access, not a physical location). A store opening doesn't have a beta phase; it has a fixed date, a permit/build-out timeline, and a physical event. Use this skill for a location opening, `launch` for a product/collection moment (the two can coincide — a flagship store launch built around a new collection uses both).

## Before Starting

**Check for product marketing context first:**
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions. Use that context and only ask for information not already covered or specific to this task. Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).

Gather this context (ask if not provided):

### 1. The Opening
- Confirmed opening date, or a target window still subject to build-out/permitting risk? (Marketing timelines below assume a confirmed date — a soft target changes what can be committed early.)
- First location in this market, or an additional location for an established local brand? (Changes how much of the "discovery" work is starting from zero vs. building on existing local awareness.)
- Flagship/statement location or a standard-format store? (Changes the scale of the opening event and press effort — see Brand Tier context in `marketing-strategy`.)

### 2. What's Different About This Location
- Anything genuinely newsworthy beyond "we opened a store" — a first-of-its-kind format, a notable building/address, a local hire/community angle, a collection launching alongside it? Press and gift-guide-style coverage need a real angle, not just an announcement (see `public-relations`).

### 3. Resources
- Local marketing budget for the opening specifically, separate from ongoing local-marketing spend?
- Any co-op/landlord marketing funds tied to the lease (common in mall/shopping-center leases)? See `supplier-funded-marketing` if a dealer/franchise model is involved.
- Local team in place, or opening staffed from elsewhere?

---

## The Timeline

Work backward from the opening date. Each phase below names what has to be *started* by that point — not what happens on that day.

### 8–12 weeks out: Foundation

- **Claim and prep the Google Business Profile (and equivalents) before it can go live**, so it's verified and ready to switch on, not started from scratch on opening week — see `local-marketing`'s Google Business Profile section. Verification alone can take days to weeks.
- **Build the location page on the website** — address, hours, directions, and genuinely local content, not a duplicate template with the address swapped (see `local-marketing`'s Local SEO Beyond the Profile and `site-architecture`).
- **Start local press/media list building** — local outlets, community publications, and relevant local influencers, with enough lead time for them to plan coverage (see `public-relations`'s media-list discipline). If there's a genuine local angle (Section 2 above), this is where it gets pitched.
- **Decide the opening promotion mechanic** early enough to plan inventory/staffing around it — a discount, a gift-with-first-purchase, a loyalty-signup incentive (see `discount-and-clearance` and `offers`).

### 4–6 weeks out: Building the list and the event

- **Build a local target list** — who in the immediate area should know about this specifically (existing customers from other channels who live nearby, local press, local influencers/community figures, landlord/center marketing contacts). This feeds directly into `experiential-marketing`'s guest list for the opening event below.
- **Plan the opening event itself** with `experiential-marketing` — this is a real event with a guest list, not just "the doors are open." Decide scale: a low-key soft open, a ticketed VIP preview, a public ribbon-cutting, or a multi-day opening week.
- **Prep in-store day-one materials** with `pos-marketing` — signage, staff talking points, and (per `local-marketing`) omnichannel fulfillment signage if pickup/curbside applies from day one.
- **Set geo-targeted paid awareness live** in the run-up, not just on opening day — radius-targeted social/search around the new address (see `local-marketing`'s Geo-Targeted Paid section and `ads`).

### Opening week

- **Soft open before the public grand opening, if the format supports it** — a quiet few days to catch operational issues (POS, staffing, fulfillment) before the marketing-driven traffic spike arrives. Don't let the marketing push outrun the store's actual readiness.
- **Run the opening event** — execute the `experiential-marketing` plan, capture content (photos, video, UGC-worthy moments) for post-opening amplification (see `content-strategy`'s atomization checklist).
- **Activate the GBP profile and location page live**, with opening-week posts/offers (see `local-marketing`).
- **Local press push** — if coverage was secured, confirm publish timing; if not secured in advance, opening day itself is still a legitimate local-news hook for last-minute local outlets.
- **Run the opening promotion** decided in the foundation phase.

### Post-opening: the handoff

- **Hand off to `local-marketing`'s ongoing motion** — this skill's job ends once the location is open and stable; reviews, ongoing local SEO, and geo-targeted paid become `local-marketing`'s standing responsibility, not a one-time launch task.
- **Start the review-generation habit immediately** (see `local-marketing`'s Reviews section) — the first weeks of reviews set the profile's early trajectory.
- **Debrief what worked** — which local channels actually drove opening-week traffic (foot traffic source, GBP views, event attendance, press mentions) — and feed it into `.agents/marketing-learnings.md` (see `compound-marketing`) so the next location's launch starts from real data, not from scratch.

---

## Multi-Location Rollouts

If this is one opening in a planned series (a regional or national rollout), don't replan from zero each time:

- **Build a repeatable opening playbook** after the first 2–3 locations — a template timeline, a standard opening-event format, a standard promotion mechanic — while still allowing genuine local texture per market (see `local-marketing`'s Multi-Location Coordination section for the same principle applied to ongoing local presence).
- **Sequence launches to avoid press/attention cannibalization** — opening three locations in the same media market in the same month dilutes coverage for all three; space them or bundle them into one regional campaign deliberately, not by accident.
- **Centralize what should be centralized** (brand assets, national press strategy, the opening-promotion mechanic) and localize what should be localized (the press list, the event guest list, local partnerships) — the same corporate-template-plus-local-flexibility balance `local-marketing` applies to ongoing presence.

---

## Common Mistakes

- **Starting Google Business Profile verification during opening week.** Verification lead time alone can blow the timeline — start in the foundation phase.
- **Treating the opening event as the whole plan.** The event is one week of an 8-12 week sequence; foundation work done too late (or skipped) means the event has nowhere for its attention to land (no live GBP, no location page, no way to be found afterward).
- **No soft-open buffer**, so the marketing-driven traffic spike hits a store still working out operational issues.
- **Planning the promotion mechanic too late to align inventory/staffing** — a discount or gift-with-purchase that outstrips what's actually stocked or staffed for creates a bad first impression, not a good one.
- **Opening multiple locations in the same market/month without deliberate sequencing**, cannibalizing press and attention across the brand's own openings.
- **No handoff plan** — the marketing effort drops to zero the week after opening instead of transitioning into `local-marketing`'s standing motion, and the location's local visibility stalls right when it should be compounding.

---

## Task-Specific Questions

1. What's the confirmed (or target) opening date, and how much lead time does that give the foundation phase?
2. Is this the brand's first location, or an additional one in an established or new market?
3. Is there a genuine local/press angle beyond "we opened a store"?
4. What's the opening promotion mechanic, and does inventory/staffing support it?
5. Is this a single opening or part of a planned multi-location rollout?
6. What co-op/landlord marketing funds, if any, are tied to the lease?

---

## Related Skills

- **local-marketing**: Owns the Google Business Profile, local SEO, and geo-targeted paid mechanics this skill sequences against the opening date, and owns the ongoing motion after handoff
- **experiential-marketing**: Owns the opening event itself — format, guest list, execution
- **pos-marketing**: Owns in-store day-one signage and staff readiness
- **public-relations**: Owns local press/media list building and pitching
- **launch**: For a product/collection launch moment — distinct from a physical-location opening, though the two can coincide
- **discount-and-clearance** / **offers**: For the opening promotion mechanic
- **content-strategy**: For turning opening-event content into ongoing distributed content
- **site-architecture**: For the location page's fit into the broader site
- **supplier-funded-marketing**: For co-op/landlord marketing funds tied to the lease, if applicable
- **compound-marketing**: For feeding opening-week learnings into `.agents/marketing-learnings.md` ahead of the next location
- **marketing-strategy**: For brand-tier context that scales the opening event and press effort appropriately
