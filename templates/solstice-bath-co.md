# Industry-Specific Template Package: Flagship Store Opening + Packaging Relaunch

**Fictional company throughout: Solstice Bath Co.**, a DTC bath/body/skincare brand opening its first flagship physical store, timed to launch alongside a full packaging redesign of its core product line. This is the realistic case `new-store-launch`'s own SKILL.md calls out explicitly ("a flagship store launch built around a new collection uses both" `launch` and `new-store-launch`) — and it's the scenario where `launch-project-management` actually earns its keep, because the two initiatives share a hard, easy-to-miss dependency.

Three skills with zero private-tier depth until now: `packaging-design`, `new-store-launch`, `launch-project-management`.

## Why This Combination Is Realistic (and Why It's Hard)

A flagship opening is a fixed date driven by lease signing and build-out. A packaging redesign is driven by manufacturing lead time — glass, custom tooling, and label printing routinely run longer than a store build-out does. Run them as two separate plans and the most common failure mode is exactly what happens below if nobody catches it: **the packaging becomes the critical path, not the construction.** A retailer planning "backward from the opening date" for the store alone, per `new-store-launch`'s own timeline logic, will miss this if packaging isn't sequenced against the *same* calendar.

## Package Contents

### 1. Marketing Strategy Foundation

```markdown
### 3.1 Primary Target Audience
Local flagship-market shoppers (a genuine "shop local, discover in person" audience) plus the existing DTC customer base who'll now have a physical location to visit — two audiences with different reasons to show up on opening day.

### 3.2 Persona 1: The Neighborhood Discoverer
- Behavioral: Lives/works near the new location, hasn't heard of the brand online; walk-in discovery matters more than any digital channel for this persona specifically
- What gets them in the door: a genuinely photogenic space and an opening-week reason to visit (not just "we opened")

### 3.3 Persona 2: The Existing DTC Customer, Local
- Behavioral: Already a customer online, excited to finally see/touch/smell the product line and meet the brand in person
- What gets them in the door: advance notice via email/SMS before the general public, first access to any store-exclusive packaging/gift sets
```

### 2. Packaging Design — Worked Redesign

Per the `packaging-design` skill's two-context split:

**Retail-shelf context (new flagship store):**
- Core line moving from plastic pump bottles to glass jars with a refill program — a real visual-merchandising upgrade for a physical retail shelf, and a genuine sustainability story (see `visual-merchandising` for shelf placement of the new format)
- New label system designed to read at both close range (ingredient/scent story) and shelf-scan distance (color-coded by scent family, legible from a few feet away — a retail-shelf-specific requirement that doesn't matter for an ecommerce product photo)

**Ecommerce-shipping context (existing DTC channel):**
- Separate mailer-box redesign — doesn't need to solve the shelf-legibility problem, needs to solve the unboxing-moment and breakage-in-transit problem instead (glass jars need real cushioning; the retail-shelf packaging and the shipping packaging are two different design problems even though the product inside is identical)

**Cost/MOQ reality — the number that drives the whole project timeline:**

| Component | Lead time | Note |
|---|---|---|
| Custom glass jar tooling + first production run | 10-14 weeks | The long pole — glass manufacturing MOQ and tooling lead time, not something that compresses under pressure |
| Custom label printing | 4-6 weeks | Can run partially parallel to glass production once artwork is final |
| Mailer box (ecommerce) | 3-4 weeks | Shorter lead time, lower risk |

**Packaging as a marketing channel:** the new jar includes a QR code linking to the refill program signup — turning the package itself into the acquisition surface for a subscribe-and-save-style refill relationship, not just a container (see `packaging-design`'s "packaging as marketing channel" section).

### 3. New Store Launch — Worked Timeline

Per `new-store-launch`'s phase structure, backward-planned from a confirmed opening date:

**8-12 weeks out (Foundation):** GBP claim/verification, location page build, local press list building, opening promotion mechanic decided — **and, critically, this is also when the packaging order has to be placed**, since 10-14 weeks of glass lead time means it can't wait for the Foundation phase to finish.

**4-6 weeks out (Building):** Local target list, opening event planning, in-store day-one materials — **contingent on packaging having shipped**, since the opening display and any launch-week gift sets are built around the new jars, not the old bottles.

**Opening week:** Soft open, event execution, GBP activation, local press push, opening promotion.

### 4. Launch Project Management — The Cross-Functional Workback Schedule

This is where the dependency above actually gets managed instead of discovered too late.

**The critical-path finding:** if the store's target opening date is set 12 weeks out and packaging takes up to 14 weeks including tooling, **packaging is the actual long pole, not construction** — the packaging order needs to go in at or before Week 0, potentially before the lease is even fully signed if the location is far enough along to commit. A plan that starts the packaging order at "Week 4, once the store planning is underway" has already lost 4 weeks it can't get back, and the opening date either slips or the store opens with old packaging on the shelf — undermining the entire relaunch story on day one.

**RACI (abbreviated):**

| Workstream | Responsible | Accountable | Consulted | Informed |
|---|---|---|---|---|
| Packaging order + production | Ops/supply chain lead | Founder | Design, Marketing | Store build-out lead |
| Store build-out | Store build-out lead | Founder | Landlord/GC | Marketing |
| Opening event + press | Marketing lead | Founder | PR contact | Full team |
| Refill program / QR flow | Ops + Digital | Founder | Design | Marketing |

**Dependency map (the two workstreams' actual intersection points):**
1. Packaging artwork must be final **before** label printing starts (Week 0) — a design change after this point costs the full 4-6 week label lead time again.
2. Store opening display design can't be finalized **until** final packaging photography exists (~Week 10, once first production units are in hand) — this is a hard downstream dependency the store team can't work around by "starting early."
3. The refill-program QR flow needs to be live and tested **before** opening week, since it's printed permanently on the jar — not something that can be patched post-launch the way a website copy fix could be.

**Approval gates:** packaging artwork sign-off (Tier 2 — human approval required, irreversible once tooling starts) vs. in-store signage copy (Tier 1 — can proceed without a gate, easily revised) — see `launch-project-management`'s Tier 1/2 gating logic for the general principle this applies.

**Status/escalation cadence:** weekly cross-functional sync once packaging production begins (Week 0-10), shifting to twice-weekly in the final 4 weeks before opening once both workstreams are converging on the same date.

## What This Demonstrates — Reusing This for Another Retail Client

1. **Always find the actual long pole before building the workback schedule.** The instinct is to plan backward from the launch date using the most *visible* workstream (the store build-out) — the real constraint is often a less visible one (manufacturing lead time) that needs to start earlier than intuition suggests.
2. **Packaging-design and physical-retail-launch dependencies run in both directions**: packaging needs final photography from the physical space in some cases, and the physical space needs final packaging before its own display/signage can be finalized. Map both directions, not just the obvious one.
3. **Tier the approval gates by reversibility, not by perceived importance** — a copy tweak feels lower-stakes than packaging artwork, and it is, because it's cheap to reverse; that's the actual criterion, not how "big" the decision feels.

## Related

- Public skills this demonstrates: `packaging-design`, `new-store-launch`, `launch-project-management`
- `visual-merchandising` — shelf placement and display design for the new retail-shelf packaging format
- `loyalty` — the refill-program relationship the QR code on the new packaging feeds into
- `public-relations` / `experiential-marketing` — the opening-event and local-press execution `new-store-launch` sequences against
