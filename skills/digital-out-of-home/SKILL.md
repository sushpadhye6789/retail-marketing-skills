---
name: digital-out-of-home
description: "When the user wants to plan out-of-home (OOH) or digital out-of-home (DOOH) advertising — billboards, transit ads, place-based screens, or programmatically-bought digital signage reaching people in the physical world. Also use when the user mentions 'out of home,' 'OOH,' 'DOOH,' 'billboard,' 'transit advertising,' 'digital billboard,' 'street furniture,' 'place-based media,' 'programmatic DOOH,' 'pDOOH,' or 'airport/mall/gym advertising.' This covers both traditional static OOH and programmatically-bought digital OOH. For the buying mechanics that apply once DOOH is bought through a DSP, see programmatic. For the point-of-purchase counterpart inside a store, see pos-marketing."
metadata:
  version: 1.0.2
---

# Digital Out-of-Home (DOOH) & Out-of-Home (OOH)

You help users plan out-of-home advertising — billboards, transit, and place-based screens that reach people in the physical world, outside the home and outside any single retailer's environment. This spans traditional static OOH (posted rates, printed vinyl) and digital OOH (screens bought either directly or programmatically), which behave very differently in planning, creative, and measurement.

**Scope note**: this is distinct from `pos-marketing`, which covers in-store point-of-purchase materials inside a specific retailer a shopper is already standing in. DOOH reaches people in transit, in public/shared spaces, or in a location (gym, office lobby, airport) before or outside any specific purchase moment — it's a reach/awareness channel first, a conversion channel second.

## Before Starting

**Check for product marketing context first:**
Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions.

Gather this context (ask if not provided):

### 1. Objective
- Pure brand/awareness reach, or a location-specific push (e.g., a billboard near a flagship store or dense dealer cluster)?
- Is this tied to a `tentpole-campaign` moment, or an always-on presence?

### 2. Brand Tier
- Section 14 of `.agents/marketing-strategy.md` matters directly here: DOOH (especially premium placements — highway billboards, airport takeovers, transit domination) is one of the clearest brand-tier signals in the entire channel mix. A budget-tier brand buying premium DOOH sends a positioning signal the rest of the marketing may not support; see `marketing-strategy/references/brand-tier-guide.md`.

### 3. Distribution Model
- If the business sells through dealers, geographic placement decisions (which markets, which specific locations) should be coordinated with dealer density and any dealer co-op funding — see `marketing-strategy/references/distribution-model-guide.md` and `supplier-funded-marketing`.

### 4. Geography & Scale
- National/broad-market reach, or hyper-local placements tied to specific store/dealer locations?
- Budget — traditional OOH has high minimum spend and long lead times (printed vinyl production, posting schedules) that DOOH's programmatic buying can avoid.

---

## Format Types

- **Traditional static OOH** — printed billboards, bus shelters, transit wraps, posted at fixed rates for a fixed flight, booked directly with an OOH vendor or through a specialist buying agency. Longest lead time, least flexible, but often the cheapest reach available at true mass scale.
- **Digital billboards** — digital screens on traditional billboard structures, sold either directly (like static OOH) or programmatically; allow creative rotation and dayparting a static board can't.
- **Place-based digital screens** — screens in a specific environment where the audience is captive or semi-captive: airports, gyms, office lobbies, elevators, gas station pumps, retail-adjacent locations outside the store itself. Targeting here is about the *environment* (who's likely to be in a gym vs. an airport) rather than individual identity.
- **Transit** — bus/rail exteriors and interiors, station domination; strong for dense urban reach and repeat-exposure commuter audiences.
- **Programmatic DOOH (pDOOH)** — digital screens bought through a DSP alongside other programmatic formats, enabling real-time creative swaps (weather-triggered, time-of-day, inventory-triggered) and audience-informed placement selection using mobility data. See `programmatic` for the buying-mechanics side of this.

---

## Creative for DOOH

DOOH creative operates under constraints no other channel shares:

- **Extremely short dwell time** — a driver sees a billboard for 2-3 seconds; a transit rider looking up from their phone even less. The message must land in one glance: one idea, minimal text (often a 5-7 word maximum guideline), a large legible headline, high contrast.
- **No direct-response mechanism on-unit** — a billboard can't carry a working link. Any CTA has to be something the viewer can act on from memory (a short, brandable URL, a QR code on formats where the viewer can safely stop and scan, or simply brand/product recall for later search or in-store recognition).
- **Distance and viewing angle** vary by format — copy sized to read from a highway differs completely from copy sized to read from three feet away on a transit shelter; check the format's actual viewing distance before finalizing type size.
- **Dynamic/contextual creative** (digital and programmatic formats only) can react to real-world triggers — weather, time of day, live inventory, local sports scores — which raises relevance but adds production complexity; only worth it when the trigger genuinely changes the message, not as a gimmick.
- Route hero creative through `ad-creative`/`image` for production and `brand-guidelines` for visual consistency, but treat DOOH as its own crop/simplify pass, not a resized version of a digital ad — see `tentpole-campaign`'s "hero creative + cutdowns" principle.

---

## Buying Models

- **Direct/traditional** — booked with an OOH vendor or specialist agency at posted or negotiated rates, for a fixed flight (typically 2-4 week increments). Best for guaranteed premium locations and traditional static formats.
- **Programmatic (pDOOH)** — bought through a DSP (many overlap with the DSPs covered in `programmatic`) at auction or fixed rate, with more flexibility on flight length, dayparting, and creative rotation. Best when the plan needs agility, audience-data-informed placement, or is running alongside other programmatic formats in one buy.

Traditional OOH generally requires longer lead time for both booking and creative production (printed vinyl) — factor this into `tentpole-campaign`'s planning cadence the same way premium media pre-buys are factored in there.

---

## Measurement

DOOH measurement is inherently probabilistic, not a guaranteed-view metric like digital — plan for that from the start:

- **Impressions/reach estimates** come from third-party audience measurement (traffic counts, mobility/location data panels) rather than a served-ad log — treat the number as a modeled estimate, not a hard count, and get clear on which measurement provider and methodology a vendor is using before comparing quotes across vendors.
- **Mobile geofencing / foot traffic attribution** — where available, matching mobile location data from people who passed a DOOH placement against later store visits or online conversions is the closest DOOH gets to a performance metric. This is a correlation, not proof the placement caused the visit — see `attribution/references/incrementality-checkpoint.md`; a comparison against a matched control area without the placement is the proportionate check before crediting DOOH with driving foot traffic, especially before committing to a recurring placement based on it.
- **Brand lift / awareness studies** are the more honest primary metric for most DOOH buys, since the channel's core job is reach and brand impression, not last-touch conversion — see `attribution`'s "Measuring awareness, not just conversion" section.
- **QR/URL scan-through**, where the format allows a safe scan, is a clean directional signal but will always undercount true impact, since most viewers act on brand recall later rather than scanning in the moment (often at a driver-safe location, if at all).

---

## Common Mistakes

- **Buying premium DOOH placements that contradict the brand's actual tier** — see Brand Tier above; a highway billboard sends a positioning signal the rest of the marketing needs to support.
- **Treating a modeled impression estimate as a guaranteed-view count** the way a digital placement's served-impression number would be.
- **Sizing type and message for a screen instead of for the real viewing distance and dwell time** — the single most common DOOH creative failure.
- **No production lead-time buffer** for traditional/printed formats, resulting in a rushed booking or a missed premium slot.
- **Crediting foot traffic or sales lift to a DOOH placement without a control comparison** — see Measurement.
- **Ignoring dealer/distribution coordination** on geographic placement when the business sells through dealers — a market-level DOOH buy should reflect where dealer density and co-op funding actually are.

---

## Task-Specific Questions

1. Is this pure brand/awareness reach, or tied to specific locations (store, dealer cluster, event)?
2. What does the brand tier suggest about which placements (and price points) are appropriate?
3. Traditional/direct booking or programmatic (pDOOH) — how much flexibility and audience-data targeting does the plan need?
4. What's the real viewing distance and dwell time for the formats under consideration, and does the creative account for it?
5. How will impact be measured — brand lift, geofenced foot traffic, or reach/frequency alone?

---

## Related Skills

- **programmatic**: For the DSP-based buying mechanics that apply to programmatic DOOH specifically
- **pos-marketing**: For the in-store, point-of-purchase counterpart once the shopper is inside a specific retailer
- **tentpole-campaign**: For coordinating DOOH placements with a major brand moment's planning cadence and hero creative
- **ad-creative** / **image**: For DOOH creative production
- **brand-guidelines**: For visual consistency across placements
- **attribution**: For applying incrementality discipline to foot-traffic and geofencing claims
- **marketing-strategy**: For brand-tier and distribution-model context that shapes placement selection
- **supplier-funded-marketing**: For co-op-funded DOOH near dealer locations
