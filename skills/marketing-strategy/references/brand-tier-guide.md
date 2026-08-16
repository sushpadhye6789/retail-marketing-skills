# Brand Tier Guide

How to classify a brand into Budget / Mid-market / Premium / Luxury, and how that classification should change the *default* tactics recommended by other skills in this repo. This isn't a value judgment — no tier is "better" — it's a compatibility check: a tactic that's normal and effective at one tier actively damages trust at another.

## Defining the four tiers

Use price position and distribution together — either alone is misleading.

| Tier | Price position vs. category | Typical distribution | Typical discounting norm |
|---|---|---|---|
| **Budget** | At or below the category median | Mass retail, marketplaces (Amazon, big-box), aggressive comparison shopping | Frequent, deep, expected by the customer — "always on sale" is often the actual model |
| **Mid-market** | Around the category median, competing on a specific value prop rather than price alone | DTC + broad retail mix, some marketplace presence | Regular promotional cadence (seasonal, email-list-driven), moderate depth |
| **Premium** | Meaningfully above the category median | DTC-led, curated retail partners, limited marketplace presence | Selective — sales exist but are infrequent and framed as events, not a constant state |
| **Luxury** | Top of category, price is part of the signal, not just a cost | DTC and invite-only/specialty retail almost exclusively; deliberately not on mass marketplaces | Rare to none — discounting can damage the brand more than the lost sale costs; liquidation happens through discreet channels, not public sales |

**A brand can span tiers across product lines** — capture that explicitly in marketing-strategy Section 14 rather than forcing one label on the whole business. When it does, downstream skills should ask which line is in scope before applying tier-specific guidance.

**This isn't fixed** — a brand can deliberately move tiers (premiumization, or a value-tier line extension). Treat Section 14 as a snapshot to revisit, not a permanent identity, same as everything else in the marketing strategy document.

---

## Tactic-by-tactic guidance

### Scarcity & urgency (see `offers/references/scarcity-urgency.md`)

| Tier | Guidance |
|---|---|
| Budget | Countdown timers, "X left in stock," and flash-sale framing are normal and expected — customers read them as genre convention, not manipulation, as long as they're real |
| Mid-market | Real inventory-based and seasonal scarcity work well; avoid manufactured urgency (fake countdowns) — the brand has more reputation at stake than budget tier |
| Premium | Scarcity should be substance-driven (limited-run, real batch sizes) and low-frequency — treat it as an occasional event, not a standing tactic |
| Luxury | Scarcity is often implicit (waitlists, by-invitation) rather than announced with urgency copy — loud urgency language reads as budget-tier and undermines the position. If used at all, it's about genuine exclusivity (a real waitlist), never a countdown clock |

### Discount depth & frequency (see the `discount-and-clearance` and `overstock` skills)

| Tier | Guidance |
|---|---|
| Budget | Deep, frequent discounting is core to the model, not a risk to it — optimize for volume and clearance velocity |
| Mid-market | Moderate depth, seasonal cadence (a few planned events per year) — constant discounting trains customers to wait, which erodes margin without the budget-tier volume to compensate |
| Premium | Rare, and usually framed as access (loyalty-tier early access to a sale) rather than a public price cut — protect the "this is worth full price" perception |
| Luxury | Public discounting is the highest-risk tactic on this whole list — it can permanently reclassify the brand downward in the customer's mind. Liquidate through private outlet channels, off-price partners, or destroy/donate excess inventory before running a public sale |

### Guarantee framing (see `offers/references/guarantee-design.md`)

| Tier | Guidance |
|---|---|
| Budget | Generous, unconditional, loudly stated — removing risk is a primary conversion lever at this price point |
| Mid-market | Clear and stated, but doesn't need to be the headline — customers expect a reasonable return policy as table stakes |
| Premium | Confident, understated — a guarantee that's "obviously" there because the product is good, not aggressively marketed as risk reversal |
| Luxury | Often minimal explicit guarantee language — the brand's reputation and white-glove service *is* the implicit guarantee; heavy guarantee marketing can read as insecurity about the product |

### Creative aesthetic (see `ads/SKILL.md`'s Meta creative sections, and the `brand-guidelines` skill)

| Tier | Guidance |
|---|---|
| Budget | Native, UGC-style, "doesn't look like an ad" performs well — matches the platform-native aesthetic that budget-tier customers already trust |
| Mid-market | A mix — native-feeling creative for prospecting, more polished creative for retargeting and the site itself |
| Premium | Polished, editorial — the production quality itself is a signal of the price point; raw UGC can undercut the position unless it's clearly curated |
| Luxury | High production value close to universal; deliberately scarce paid social presence is common — some luxury brands run little to no direct-response paid social at all, relying on brand/editorial placements instead |

### Bundling & loyalty (see `offers/references/offer-formats.md` and the `loyalty` skill)

| Tier | Guidance |
|---|---|
| Budget | Bundle aggressively for AOV; loyalty points with clear, frequent redemption |
| Mid-market | Bundles should solve a real use-case pairing, not just clear inventory; loyalty tiers with visible status |
| Premium | Bundles are curated (a "collection," not a discount stack); loyalty leans on access and experience over points |
| Luxury | Bundling is rare and framed as curation/gifting, never as a discount mechanic; "loyalty" is often relationship-based (a personal stylist, private events) rather than a points program |

---

## How other skills should use this field

If `.agents/marketing-strategy.md` exists and Section 14 specifies a tier other than the tactic's own default assumption, check the row above (or the equivalent section in the referring skill) before applying that tactic's default guidance. If Section 14 is missing or the document doesn't exist yet, ask the user directly rather than assuming a tier — the tactics above diverge enough that guessing wrong is worse than asking.

This file doesn't need to be read end-to-end for every task — only the row relevant to the tactic in question.
