---
name: trade-marketing
description: "When the user wants to get a retail buyer, distributor, or dealer to list, stock, or feature a product — sell-in materials, buyer presentations, category management conversations, or trade show sell-in. Also use when the user mentions 'trade marketing,' 'sell-in,' 'sell-in deck,' 'buyer presentation,' 'category management,' 'category captain,' 'line review,' 'range review with a retailer,' 'planogram negotiation,' or 'getting listed.' This is the retailer-facing counterpart to consumer marketing — it targets the buyer/category manager who decides what goes on shelf, not the end shopper. For the co-op funding compliance side once a listing already exists, see supplier-funded-marketing. For paid advertising inside a retailer's own platform, see retail-media. For general B2B sales collateral mechanics, see sales-enablement, which this skill's deck-building borrows from."
metadata:
  version: 1.0.4
---

# Trade Marketing

You help users get a product listed, stocked, or featured by a retail buyer, distributor, or dealer — the marketing that targets the *retailer's decision-maker*, not the end consumer. Getting a great product in front of shoppers is worthless if it never earns shelf space in the first place; trade marketing is the discipline of earning that shelf space and then defending it.

**Scope note**: `supplier-funded-marketing` and `retail-media` both assume the product is already listed and focus on funding/advertising once it's there. This skill covers what happens *before* that — the sell-in itself, and the ongoing category-management relationship that determines whether the listing survives the next range review.

## Before Starting

**Check for existing strategy context first:**
Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions.

**Section 15 (Distribution Model) matters directly**: if the business already sells through dealers, this skill applies to expanding within that network (new dealers, new categories with existing dealers) or to a different retail channel entirely (a national retailer, a buying group). See `marketing-strategy/references/distribution-model-guide.md`.

Gather this context (ask if not provided):

### 1. The Target
- Which retailer, distributor, or buying group — and do you know who the actual decision-maker (buyer, category manager) is?
- **Independent/small retailer or a large chain/commercial account?** The two pitches differ: an independent store owner often decides fast on relationship and margin alone, while a national chain's category manager runs a formal review process, wants comparable-category data and category-level (not just SKU-level) impact, and answers to a buying committee. Don't reuse a one-page independent-retailer pitch for a chain's category review, or over-build a formal category business case for a single-location buyer who just wants to know the margin and MOQ. See `marketing-strategy`'s Section 16 Business/Commercial framing (`references/b2b-wholesale-guide.md`) if this sits alongside a broader wholesale motion.
- New listing (cold sell-in) or defending/growing an existing one (a line review or category reset)?

### 2. The Case
- What's the product's actual performance data if it's sold elsewhere (sell-through rate, margin, competitive comparison)? Buyers decide on numbers, not brand enthusiasm.
- What's the competitive set already on that retailer's shelf, and what does this product displace or complement? See `competitor-profiling`.

### 3. Resources
- Existing sell-in materials, or building from scratch?
- Trade show or in-person meeting planned, or a remote/written pitch?

---

## The Sell-In Case

A buyer's job is to maximize the return on a finite amount of shelf space (physical or digital) — every pitch needs to answer their actual question, not the brand's own story:

- **Lead with the retailer's economics, not the brand's**: sell-through velocity, margin (both the initial margin and the total category margin contribution), and turn rate matter more to a buyer than brand story or product features. Have real numbers — from your own sales elsewhere, comparable-category benchmarks, or a pilot — not aspirational projections.
- **Show what it does *for the category*, not just for itself** — does it fill a genuine gap in the retailer's current range (a price point, a use case, a customer segment) they're not currently serving? A "me-too" pitch competing head-on with an already-strong incumbent SKU is the hardest sell; a gap-filling pitch is the easiest.
- **Address cannibalization directly, don't wait to be asked** — if the new listing will pull volume from an existing SKU (yours or a competitor's) on the same shelf, name it and show the net category impact is still positive. A buyer who discovers unaddressed cannibalization after listing loses trust fast.
- **Bring proof, not just projections**: sell-in data from comparable retailers, consumer research (`customer-research`), or a limited pilot/trial period proposal all de-risk the buyer's decision more than a confident pitch alone.
- **For the deck/document mechanics** (structure, scannability, tailoring to the audience), reuse `sales-enablement`'s discipline directly — a buyer presentation is a specific application of the same "situation-specific, not generic" principle.

---

## Category Management & Line Reviews

Getting listed is the start, not the finish — most retail relationships include a recurring review of what stays, grows, or gets cut:

- **Understand the retailer's own review cadence** (annual line review, seasonal reset, ongoing) and prepare for it proactively rather than reactively — see `range-review`'s cadence discipline, applied here from the seller's side of someone else's range decision.
- **A "category captain" relationship** (where a retailer leans on a leading supplier for category-level insight and recommendations, not just their own listing) is a position of real influence — earned through consistently useful, retailer-first (not just self-serving) input, not requested outright.
- **Track your own shelf performance data at that retailer continuously**, not just before a review — walking into a line review with your own current sell-through and margin numbers, ahead of the buyer pulling their own report, is a credibility signal in itself.
- **Defend a listing under threat with the same rigor as winning a new one** — the sell-in case (category economics, gap-filling role, cannibalization honesty) applies just as much to keeping a listing as to winning one.

---

## Trade Show Sell-In

Trade shows are one of the highest-density sell-in environments — many buyers, limited time, high cost of a wasted meeting:

- **Pre-book meetings with target buyers** rather than relying on booth traffic — the sell-in conversations that actually move a listing decision are rarely the ones that happen from someone walking past.
- **Booth/demo strategy should support the sell-in conversation**, not just generate consumer-style booth traffic — see `experiential-marketing` for the booth/demo execution mechanics; this skill owns the buyer-conversation content and follow-up.
- **Follow up within days, not weeks** — a buyer meets dozens of suppliers at a show; a pitch that isn't followed up promptly with the promised materials loses to whichever competitor followed up first.

---

## Planogram & Placement Negotiation

Where on the shelf a product sits materially affects its sell-through, independent of the product itself — eye-level and end-cap placement can outperform a shelf-bottom placement by a significant margin for the identical product:

- **Come to a placement conversation with the same performance data used in the sell-in case** — placement requests backed by sell-through data land differently than placement requests backed only by margin-per-unit-of-shelf-space math the retailer already knows.
- **Hand off the actual in-store execution** (display design, signage, fixture) to `visual-merchandising` and `pos-marketing` once placement is secured — this skill owns winning the negotiation, not building the display.

---

## Common Mistakes

- **Leading with brand story instead of retailer economics** — buyers care about their own margin and turn, not the brand's narrative, until the numbers earn the right to tell it.
- **No answer for cannibalization** when it's an obvious question a buyer will ask anyway.
- **Treating the sell-in as a one-time event** instead of an ongoing category-management relationship that needs continuous performance tracking.
- **Showing up to a line review without your own current performance data**, ceding the numbers narrative entirely to the buyer's own report.
- **Under-preparing for trade shows** — no pre-booked buyer meetings, no fast follow-up.
- **Requesting premium placement without performance data to justify it.**

---

## Task-Specific Questions

1. Which retailer/buyer, and is this a new listing or defending/growing an existing one?
2. What's the actual sell-through, margin, and competitive-set data available to build the case?
3. What gap does this fill in the retailer's current category, and what does it cannibalize?
4. Is there a trade show or in-person meeting to prepare for?
5. What's the retailer's line-review cadence, and when's the next one?

---

## Related Skills

- **packaging-design**: For shelf-standout packaging design that strengthens the sell-in case itself
- **supplier-funded-marketing**: For co-op/MDF funding compliance once a listing exists
- **retail-media**: For paid advertising inside the retailer's own platform, once listed
- **range-review**: For the seller's own cross-SKU range logic, the mirror discipline to a retailer's line review
- **sales-enablement**: For the deck/collateral-building mechanics this skill's sell-in materials borrow from
- **competitor-profiling**: For the competitive-set research feeding the sell-in case
- **visual-merchandising** / **pos-marketing**: For in-store execution once placement is secured
- **experiential-marketing**: For trade show booth/demo execution
- **pricing** / **price-elasticity**: For wholesale/trade pricing and margin structure supporting the sell-in case
- **customer-research**: For consumer proof points strengthening the sell-in case
- **marketing-strategy**: For the distribution-model context this skill operates within
