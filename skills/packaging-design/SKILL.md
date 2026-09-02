---
name: packaging-design
description: "When the user wants to design or evaluate product packaging — structural design, materials, sustainability, on-pack branding, or shelf/shipping packaging tradeoffs. Also use when the user mentions 'packaging design,' 'product packaging,' 'box design,' 'shipping box,' 'retail packaging,' 'sustainable packaging,' 'packaging materials,' 'on-pack branding,' 'shelf standout,' 'packaging insert,' or 'how should we package this.' This is the design/production discipline for the package itself — distinct from post-purchase-experience, which owns the unboxing moment as a customer-journey touchpoint once the package arrives, and from visual-merchandising, which owns where the product sits in-store, not the container it's in."
metadata:
  version: 1.0.0
---

# Packaging Design

You help users design and evaluate product packaging — the physical container a product ships in or sits on-shelf in — balancing structural protection, cost, sustainability, brand expression, and (for retail-shelf packaging specifically) the job of winning the purchase decision in a few seconds of shelf or thumbnail attention.

**Scope notes — packaging design touches several adjacent skills; here's the boundary:**
- `post-purchase-experience` owns the **unboxing moment as a customer-journey touchpoint** — the sequence, the reveal, tracking social shares of the unboxing. This skill owns the **package itself** — the structural, material, cost, and brand decisions that make that moment possible. Design the package here; design the journey around opening it there.
- `visual-merchandising` owns **where** a product sits in-store (planogram, fixture, zoning). This skill owns the package's own **shelf-standout design** — what makes it win the split-second glance in a competitive aisle, independent of its shelf position.
- `trade-marketing` owns **negotiating** the shelf placement itself. This skill's shelf-packaging guidance feeds that negotiation (a package that visibly outperforms its category on-shelf is part of the sell-in case) but doesn't run the negotiation.
- `pos-marketing` owns printed/digital signage and collateral placed *around* the product in-store — not the product's own packaging.
- `compliance` owns the actual regulatory requirements (labeling, recycling claims, safety warnings) this skill must design against — always check jurisdiction-specific rules before finalizing label copy, not just this skill's general guidance.

## Before Starting

**Check for product marketing context first:**
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions. Use that context and only ask for information not already covered or specific to this task. Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).

Gather this context (ask if not provided):

### 1. Which Packaging Context
- **Retail-shelf packaging** — sold in-store, competing for attention in an aisle, often needs security/anti-theft features (see Two Contexts below)?
- **Ecommerce shipping packaging** — arrives via a carrier, needs to protect in transit and create a deliberate unboxing reveal, has dimensional-weight cost implications?
- **Both** — many products need a shelf-ready package that also survives shipping (common for a brand selling direct and through retail simultaneously — see `marketing-strategy` Section 15).

### 2. Constraints
- Target unit cost for packaging, and how it compares to the product's own COGS (packaging cost as a % of landed cost is often invisible until totaled).
- Supplier relationship already in place, or sourcing from scratch? MOQs matter — a small brand's ideal packaging is often gated by minimum order quantities, not design preference.
- Any sustainability commitments already made publicly (recyclability claims, materials pledges) that the design must actually satisfy, not just gesture at.

### 3. Brand & Category
- What does the category's packaging convention look like, and is the goal to fit in (reduce purchase friction via familiarity) or stand out (differentiate at the cost of some instant category recognition)?
- Brand tier — see `marketing-strategy/references/brand-tier-guide.md`; a premium/luxury brand's packaging economics and expectations differ meaningfully from a value/budget brand's.

---

## Two Packaging Contexts

Retail-shelf and ecommerce-shipping packaging solve different problems and are frequently designed as if they were the same problem, which produces a package that does neither well.

### Retail-Shelf Packaging
The package **is** the ad — it has to win a purchase decision in the few seconds a shopper's eye passes over a crowded shelf.

- **Shelf standout at a glance**: color, silhouette, and typography need to read from a few feet away, not just up close — test at actual shelf distance, not just on a screen.
- **Category cues vs. differentiation**: enough visual convention that a shopper instantly recognizes the category (a shopper scanning for "the pasta sauce" needs to find pasta sauce shapes/colors fast), balanced against enough difference to stand out from direct competitors on the same shelf.
- **Anti-theft/security features**: high-value or easily-concealed items often need packaging that supports security tags, larger-than-product sizing, or tamper-evidence — a real constraint trade-marketing sell-in conversations and loss-prevention both care about.
- **Information hierarchy under space constraints**: mandatory label copy (see Compliance below) competes with brand and benefit messaging for limited surface area — decide the hierarchy deliberately rather than cramming everything in at equal weight.

### Ecommerce Shipping Packaging
The package has to survive a carrier network and then create a deliberate reveal — see `post-purchase-experience` for the full unboxing-journey design once this package exists.

- **Right-sizing against dimensional weight**: an oversized box increases shipping cost via carrier DIM-weight pricing regardless of the product's actual weight — a real, ongoing cost the design should account for, not just a first-purchase decision.
- **Protection without excess**: enough structural protection for the actual transit risk (fragile vs. durable goods have very different real requirements) without defaulting to maximal padding that adds cost and generates avoidable waste.
- **The reveal sequence**: what the customer sees first when they open it, and in what order — this is the boundary where packaging design hands off to `post-purchase-experience`'s unboxing-journey work.
- **Plain-outer / branded-inner option**: for higher-value or discretion-sensitive categories, a plain shipping outer with a branded reveal inside can serve both a security need and a "surprise" unboxing beat simultaneously.

---

## Structural Design & Materials

- **Match structural investment to actual risk**, not to what looks impressive in a design review — a durable, low-fragility product doesn't need the same protective structure as a fragile one, and over-engineering it wastes cost and material for no real protection gain.
- **Ease of opening matters more than it gets credited for** — packaging that's genuinely difficult to open (excess tape, awkward seals) creates a bad first experience regardless of how good the box looks, and shows up in reviews and unboxing-video sentiment.
- **Materials selection is a real tradeoff, not a values statement**: cost, protection performance, and sustainability profile all move together — a fully compostable material that fails to protect the product in transit isn't a win, it's a returns and reputation problem.

---

## Sustainability & Compliance

- **Only claim what's actually true and current.** A "recyclable" or "compostable" claim needs to hold up to the specific jurisdiction's recycling infrastructure (a material technically recyclable in theory but not accepted by most local programs is a misleading claim in practice) — see `compliance` before finalizing any sustainability claim on-pack, the same discipline `directory-submissions`' Tier 4 sustainability-directory guidance applies to third-party credentials.
- **Mandatory label information is jurisdiction- and category-specific** (ingredients, care instructions, country of origin, safety warnings, recycling symbols) — this skill sets up the design hierarchy for that information; `compliance` owns confirming what's actually legally required for the specific product category and market.
- **Packaging reduction is a genuine sustainability lever with a genuine cost benefit** (less material, lower shipping weight/DIM cost) — when sustainability and cost pressure point the same direction, that's usually the easiest sustainability win to actually ship, versus one that trades cost for a marginal environmental gain.

---

## Packaging as a Marketing Channel

Packaging is one of the only marketing surfaces that reaches 100% of buyers, not just the ones an ad happened to reach — treat it as a real channel, not just a container:

- **On-pack branding as a shelf-and-photo asset**: the package needs to read well both at physical shelf distance and as a small thumbnail image on a product listing page — design for both, since ecommerce increasingly means the package is "seen" as a photo before it's seen in person.
- **Branded inserts and referral codes**: a card inside the package driving to a referral program, a loyalty signup, or a UGC hashtag turns every delivered order into a marketing touchpoint — see `referrals`' Retail Viral Mechanisms section for the fuller mechanic (visible branding, gifting exposure loops, unboxing UGC).
- **QR codes and unique URLs**: link to care instructions, a registration flow, or a personalized thank-you — see `post-purchase-experience` for what that destination experience should do once someone scans it.
- **Collectible/limited packaging**: seasonal or limited-run packaging variants can create a reason to repurchase or a share-worthy moment on their own, independent of the product inside — see `marketing-ideas` for the broader pattern of turning packaging into a collectible.

---

## Cost & Supplier Considerations

- **Total landed packaging cost, not just unit material cost** — freight for the packaging itself, tooling/setup costs for custom shapes, and MOQ-driven inventory carrying cost all belong in the real comparison between packaging options.
- **MOQs gate what's actually available to a smaller brand** — a design that requires a 50,000-unit minimum order isn't a real option below a certain volume; scope the design brief to what the business's actual order volume can support, or budget for the cash tied up in a larger MOQ deliberately.
- **Prototype before committing to a full production run** — a sample run that surfaces a structural, opening, or fit problem before a 10,000-unit order is a rounding error; the same problem discovered after full production is a real loss.

---

## Common Mistakes

- **Designing shelf packaging and shipping packaging as if they're the same problem** — a package optimized for shelf standout often makes a poor shipping container, and vice versa.
- **Claiming a sustainability credential that doesn't hold up locally** — a real compliance and trust risk, not just an aesthetic choice; see `compliance`.
- **Over-engineering structural protection** for a durable product, adding cost and material waste for no real protection benefit.
- **Cramming all label copy at equal visual weight**, so mandatory information and brand messaging fight each other instead of being deliberately hierarchized.
- **Committing to a large-MOQ custom design before volume actually supports it**, tying up cash in packaging inventory instead of product inventory.
- **Treating packaging as a one-time decision** rather than revisiting it as cost, sustainability standards, and category conventions shift — see `compound-marketing` for feeding packaging learnings (damage-in-transit rates, unboxing sentiment, recycling-claim pushback) back into the next redesign.

---

## Task-Specific Questions

1. Is this retail-shelf packaging, ecommerce shipping packaging, or both?
2. What's the target packaging cost, and how does it compare to the product's own COGS?
3. Is there an existing sustainability commitment the design needs to satisfy?
4. What's the realistic order volume, and does it clear the MOQ for the packaging options under consideration?
5. What does the category's packaging convention look like — is the goal to fit in or stand out?
6. Does the brand sell through both retail and ecommerce (see `marketing-strategy` Section 15), requiring the package to work in both contexts?

---

## Related Skills

- **post-purchase-experience**: Owns the unboxing moment as a customer-journey touchpoint, once this skill's package exists
- **visual-merchandising**: Owns where the product sits in-store — the spatial discipline this skill's shelf-standout design feeds into
- **trade-marketing**: Owns negotiating the actual shelf placement; a package that wins the shelf-standout test strengthens that sell-in case
- **pos-marketing**: Owns signage and collateral placed around the product in-store, distinct from the product's own packaging
- **compliance**: Owns the actual regulatory labeling and sustainability-claim requirements this skill must design against
- **referrals**: For turning a packaging insert into a referral/affiliate touchpoint
- **content-strategy**: For turning unboxing content into distributed marketing assets
- **marketing-strategy**: For brand-tier context and the Section 15 distribution model (retail vs. ecommerce vs. both) that determines which packaging context applies
- **marketing-ideas**: For the broader pattern of packaging as a collectible or shareable moment
