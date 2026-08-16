---
name: visual-merchandising
description: "When the user wants to plan how products are physically displayed and arranged in a retail environment — window displays, store layout, product placement, planograms, or fixture design. Also use when the user mentions 'visual merchandising,' 'VM,' 'window display,' 'store layout,' 'planogram,' 'store zoning,' 'product placement,' 'end cap,' 'fixture design,' 'shelf layout,' or 'store reset.' This is the spatial/placement discipline — distinct from pos-marketing, which covers the printed or digital signage and collateral placed within that layout, not the layout itself. For securing the shelf space or placement being merchandised, see trade-marketing."
metadata:
  version: 1.0.0
---

# Visual Merchandising

You help users plan how products are physically arranged and displayed in a retail environment — window displays, store layout and zoning, planograms, and fixture design — to maximize both the shopper's experience and the commercial performance of the space. This is a spatial and placement discipline, distinct from `pos-marketing`'s signage and printed/digital collateral, which lives *within* the layout this skill designs.

**Scope note**: `pos-marketing` answers "what does the shelf-talker say and look like"; this skill answers "where does the product sit, and why there." The two work together — a strong planogram with weak signage underperforms, and vice versa — but they're different decisions made by different logic.

## Before Starting

**Check for product marketing context first:**
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions.

Gather this context (ask if not provided):

### 1. Environment
- Owned store, dealer-operated location, or a listing inside a third-party retailer (where placement may be negotiated, not fully controlled — see `trade-marketing`)?
- Format: full store, a specific fixture/end cap, a window, or a category section within a larger store?

### 2. Brand Tier
- Section 14 of `.agents/marketing-strategy.md`: visual merchandising is one of the most visible brand-tier signals in physical retail — see `marketing-strategy/references/brand-tier-guide.md`. A cluttered, sale-sign-heavy layout communicates budget/value; a spare, curated layout communicates premium — the merchandising approach should match the intended tier, not just what's easiest to execute.

### 3. Goals
- Driving basket size/cross-sell, moving a specific priority product (a new launch, an overstock item — see `product-lifecycle`/`overstock`), or a general reset/refresh?

### 4. Constraints
- Fixture inventory and budget for new displays.
- If dealer-executed: what guidance/kit can realistically be provided and enforced, versus what depends on local execution quality.

---

## Store Zoning & Traffic Flow

- **The decompression zone** (just inside the entrance) is where shoppers are still adjusting, not yet in a purchasing mindset — high-pressure or high-value placements here tend to underperform; use it for a strong first impression instead (a hero display, not the discount bin).
- **Natural traffic flow** (which direction most shoppers move, shaped by entrance position and store layout) determines which zones get the most exposure — the highest-traffic path deserves the priority products, not necessarily the geometric center of the store.
- **Power zones**: eye level, end caps, and areas near the checkout are the highest-visibility, highest-impulse real estate in any physical retail environment — reserve these for genuine priorities (new launches, best margin, hero products), not by default or habit.
- **Category adjacency**: placing complementary categories near each other (not just alphabetically or by internal logic) prompts cross-sell the way `pricing`'s bundle logic does digitally — a shopper who came for one thing sees a natural next item.

---

## Planogram Principles

- **Eye level sells** — the vertical band roughly at natural eye height consistently outperforms shelf-bottom or high-shelf placement for the identical product; this is the physical-retail equivalent of above-the-fold placement online.
- **Left-to-right, low-to-high reading pattern** in most markets — shoppers tend to scan a shelf the way they read text; placing an entry-level option first (left/low) and premium options later (right/high) can guide a natural upsell path.
- **Block by brand or by use case, not arbitrarily** — a coherent blocking logic (all of one brand together, or all products solving one problem together) helps a shopper navigate; inconsistent blocking creates friction that suppresses sales regardless of how good any individual product is.
- **Facing count should reflect actual sell-through, not just available inventory** — over-facing a slow mover wastes the shelf's highest-value asset (space); under-facing a fast mover creates artificial stockout-feeling gaps that suppress sales of a product that's actually performing.
- **Leave room for the display to breathe** — an overcrowded shelf reads as cluttered and cheap regardless of brand tier; how much white space is appropriate itself scales with brand tier (premium/luxury needs more).

---

## Window & Hero Displays

- **One clear message per window**, not an inventory dump — a window trying to communicate everything communicates nothing; this is the same "one idea, minimal text" discipline `digital-out-of-home` applies to a billboard, adapted to a static physical display with more dwell time to work with.
- **Change on a deliberate cadence**, tied to season, a `tentpole-campaign` moment, or a new launch — a window that never changes reads as neglected even if the underlying products are current.
- **Coordinate hero display timing with the campaign it supports** — see `tentpole-campaign`'s Planning Cadence for production lead time on any custom fixtures or large-format visuals, and `brand-guidelines` for visual consistency with the campaign's other creative.

---

## Reset Cadence & Governance

- **Set a deliberate reset cadence** (seasonal, or tied to major category/tentpole moments) rather than resetting reactively or never — a layout that never changes trains regular shoppers to stop noticing it; a layout that changes chaotically undermines the wayfinding logic shoppers rely on.
- **For a multi-location or dealer-executed footprint**, provide a clear planogram/reset kit (diagrams, fixture specs, a checklist) rather than a verbal description — see `pos-marketing`'s dealer-compliance discipline and `brand-management`'s governance role for enforcing consistency across locations that don't execute in-house.
- **Audit against the plan, not just against intent** — a planogram that looks right on paper needs a periodic in-store (or photo-based, for a distributed footprint) check against what's actually on the shelf.

---

## Common Mistakes

- **Reserving power zones (eye level, end caps) for whatever's easiest to place** rather than deliberately for the actual priority products.
- **Overcrowding the layout** in a way that contradicts the brand's actual tier — see Brand Tier above.
- **A window or hero display trying to say everything at once**, landing as noise.
- **Facing count that reflects available stock rather than actual sell-through**, wasting the shelf's most valuable asset on slow movers.
- **No reset cadence**, letting a layout go stale or changing it without any real logic.
- **No planogram kit for dealer/multi-location execution**, leaving placement quality to inconsistent local interpretation.

---

## Task-Specific Questions

1. What environment and format — full store, a specific fixture, a window, owned or dealer-operated?
2. What's the brand tier, and does the current (or proposed) layout density match it?
3. What's the commercial goal — basket size, a priority product push, or a general refresh?
4. What's the reset cadence, and is it tied to a campaign or category moment?
5. If dealer/multi-location: what kit or guidance can realistically be provided and audited?

---

## Related Skills

- **pos-marketing**: For the signage and printed/digital collateral placed within the layout this skill designs
- **trade-marketing**: For securing the shelf space or placement being merchandised in a third-party retailer
- **marketing-strategy**: For brand-tier and distribution-model context shaping merchandising density and control
- **brand-guidelines**: For visual identity consistency across displays
- **tentpole-campaign**: For coordinating window/hero display timing with a major campaign moment
- **product-lifecycle** / **overstock**: For merchandising a launch, transition, or clearance priority
- **digital-out-of-home**: For the analogous single-message, short-dwell-time creative discipline applied to a static display
- **brand-management**: For governance/consistency enforcement across dealer-executed merchandising
- **range-review**: For which products earn merchandising priority in the first place
