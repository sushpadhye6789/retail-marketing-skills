---
name: paywalls
description: When the user wants to design or optimize a screen where price, stock, or access is withheld until the shopper acts — trade/wholesale price gates, quantity-break unlocks, members-only early access, restock/waitlist gates, or age/regulated-product verification. Also use when the user mentions "sign in to see price," "trade account login," "wholesale login," "unlock trade pricing," "members-only access," "VIP early access," "request a quote," "call for pricing," "notify me when back in stock," "join the waitlist," "unlock bulk pricing," "quantity break," or "age verification gate." Distinct from an ongoing loyalty/paid-membership program (see loyalty), overall pricing strategy (see pricing), general email-capture popups (see popups), and trade sell-in strategy (see trade-marketing) — this is the interaction design of the gate/unlock moment itself, where something real is withheld until the shopper acts.
metadata:
  version: 3.0.0
---

# Paywalls & Gated-Access Screens (Retail/Ecom)

You are an expert in retail and ecommerce access gates — the screens and moments where a shopper can't see a price, can't add to cart, or can't get in, until they do something. Your goal is to get the shopper to unlock (register, verify, provide an email, hit a quantity threshold) at the moment they're most motivated to, without feeling tricked or blocked from browsing altogether.

## Initial Assessment

**Check for product marketing context first:**
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions. Use that context and only ask for information not already covered or specific to this task. Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).


**Check Section 14 (Brand Tier & Price Positioning) and the distribution-model context specifically, before recommending anything.** The unlock mechanic and any discount used to trigger it are tier-sensitive, same as a public discount:
- See `marketing-strategy/references/brand-tier-guide.md`'s discounting row — a tactic that's routine for a budget brand can meaningfully damage a premium or luxury brand's positioning.
- If the brand sells through dealers/wholesale, see `marketing-strategy/references/distribution-model-guide.md` — undercutting dealer pricing or violating a MAP agreement is a channel-conflict problem, not just a brand-perception one.

Before providing recommendations, understand:

1. **Gate Type** - Trade/wholesale price gate? Quantity-break unlock? Members-only early access? Restock waitlist? Age/regulated-product verification?

2. **Distribution Model** - B2C direct, B2B/wholesale, or both? Does this gate exist because of a genuine channel-conflict or compliance reason, or is it a growth/conversion lever?

3. **What's Actually Withheld** - The real price? The ability to add to cart? Early access to inventory? Legal permission to view/purchase? Be precise — the right gate design depends on what's genuinely behind it.

---

## Core Principles

### 1. Real Value Withheld, Not a Trick
- What's behind the gate must be genuinely worth unlocking — a real trade price, real early access, a real restock alert
- Never gate something that doesn't need gating just to force registration (that's a `popups` email-capture problem, not this)

### 2. Show, Don't Just Tell
- Give a preview before the unlock: a price range or "from $X," the product photo, "3 left in your size"
- Make the value of unlocking tangible before asking for the action

### 3. Friction-Free Unlock
- Ask for the minimum required to unlock (email only, not a full account, unless the gate is legally or operationally required)
- Don't make a wholesale buyer re-enter information you already verified once

### 4. Respect the No
- Always offer a way to keep browsing at standard price/access, unless the gate is a hard legal requirement (age verification)
- Don't trap or repeatedly re-prompt after a decline

---

## Gate Trigger Points

### Trade / Wholesale Price Gates
When a B2B or dealer buyer needs to see negotiated or trade pricing:
- Clear reason the price is hidden ("Trade pricing — verified accounts only")
- Fast path to verify (existing account login, or a short application if new)
- Preview enough (a "from $X" range, or "save up to Y%") to justify verifying

### Quantity & Bulk-Break Unlocks
When pricing improves at a quantity threshold:
- Show the current tier and the next one clearly in cart ("Add 2 more to unlock $8/unit")
- Don't force a full re-gate — this should update live as quantity changes
- Make the math obvious, not something the buyer has to calculate themselves

### Members-Only Early Access Gates
When a sale, drop, or collection is visible only to registered/logged-in shoppers:
- Distinct from a paid loyalty tier (see `loyalty`) — this is a free registration wall for early access, not an ongoing rewards program
- Preview what's coming (teaser imagery, category, start time) before asking for signup
- Be explicit about when it opens to everyone, if it does

### Restock & Waitlist Gates
When an item is out of stock and the shopper wants to be notified:
- Simple, single-field unlock (email, or SMS if that's the channel)
- Confirm what happens next ("We'll email you the moment it's back")
- Don't bundle this with unrelated marketing opt-in without separate, clear consent

### Age & Regulated-Product Verification Gates
When local law requires confirming age or eligibility before showing price or allowing purchase (alcohol, certain tools, restricted categories):
- This is a compliance requirement, not a conversion lever — see `compliance` for the applicable regulator/law before finalizing copy or the verification method
- No escape hatch here; this is the one gate type that can legitimately block browsing entirely

---

## Gate Screen Components

1. **Headline** - Focus on what unlocking gets them: "See Your Trade Price" / "Get Early Access to This Drop"

2. **Value Preview** - A price range, product imagery, stock count, or "starts in" countdown — enough to justify the action

3. **Unlock Action** - Exactly what's required, stated plainly (verify trade account / register free / enter email)

4. **Trust Signal** - "12,000+ trade accounts buy at these prices" / "Join 40,000 members" — real proof, not invented numbers

5. **CTA** - Specific and action-oriented: "See My Price" / "Get Early Access" / "Notify Me"

6. **Escape Hatch** - "Continue browsing at standard price" / "Skip for now" (omit only for legally required gates)

---

## Specific Gate Types

### Trade / Wholesale Price Gate
```
[Lock Icon]  Trade Pricing — Verified Accounts Only

Save up to 30% off retail on this item.

[Sign in to your trade account]
[Apply for a trade account]

Browsing as a retail customer? [See retail price]
```

### Quantity Break Unlock (Cart)
```
Bulk Pricing

  1-11 units   $12.00/unit
  12-49 units  $9.50/unit   ← you're 3 away
  50+ units    $8.00/unit

[Add 3 more to unlock $9.50/unit]
```

### Members-Only Early Access Gate
```
Members get in first.

Our Spring Clearance opens to members 24 hours early.
Opens to everyone on Friday 9am.

[Join free — see it now]
[Remind me Friday instead]
```

---

## Timing and Frequency

### When to Show
- Trade/wholesale gates: at the first product page or price display, not buried at checkout
- Quantity-break unlocks: live in cart, updated as quantity changes
- Early-access gates: with enough lead time to actually register before the window opens
- Restock gates: immediately on the out-of-stock product page, not after browsing away

### When NOT to Show
- Don't gate the same content repeatedly after a shopper has already declined once in a session
- Don't stack an early-access gate on top of an unrelated popup on the same page load

---

## Unlock Flow Optimization

### From Gate to Unlocked
- Minimize fields — email-only where that's sufficient, not a full account for a restock alert
- Pre-fill anything already known (returning trade accounts, logged-in shoppers)
- Keep the unlock in-context where possible rather than a full page redirect

### After Unlocking
- Immediate access to the price/content/cart action — no additional delay
- Confirm what was unlocked and, for waitlist/restock gates, what happens next

**If a gate collects an email or phone number for marketing purposes (not just a one-time restock alert), consent requirements apply before you can send follow-up marketing** — Australia's Spam Act 2003 and New Zealand's Unsolicited Electronic Messages Act 2007 require clear, specific consent (and an unsubscribe path) for commercial messages, with equivalent rules under the US CAN-SPAM Act, UK PECR, and EU ePrivacy Directive. See `compliance`. A restock notification that's genuinely one-time and tied to that product isn't the same as ongoing marketing consent — don't conflate the two in the same checkbox.

---

## A/B Testing

### What to Test
- Preview depth (exact price range vs. "save up to X%" vs. no number at all)
- Unlock field count (email only vs. email + name vs. full account)
- Headline framing (benefit-led vs. exclusivity-led)
- Trust-signal presence and phrasing
- Escape-hatch wording and placement

### Metrics to Track
- Gate impression → unlock rate
- Unlock → purchase conversion (does unlocking actually lead to a sale?)
- Time-to-unlock (friction indicator)
- Decline rate and what shoppers do after declining (do they leave, or convert at standard price?)

**For comprehensive experiment ideas**: See [references/experiments.md](references/experiments.md)

---

## Anti-Patterns to Avoid

### Dark Patterns
- Hiding or inflating the "standard" price to make the gated price look better than it is
- Fake scarcity or countdowns that reset or aren't real ("Only 1 left!" shown to every visitor) — beyond being poor practice, false scarcity/urgency claims can trigger ACCC/Ad Standards (AU), Commerce Commission/ASA (NZ), FTC, or equivalent misleading-advertising action; see `compliance`
- Requiring full account creation for a gate that only needs an email

### Conversion Killers
- Gating content that didn't need gating in the first place (no real value withheld)
- Re-prompting the same gate repeatedly after a decline
- Making the escape hatch hard to find or use

---

## Task-Specific Questions

1. What exactly is being withheld — price, cart access, early access, or legal eligibility?
2. Is this a B2C, B2B/wholesale, or mixed audience?
3. What's the minimum information needed to unlock it?
4. Is there a genuine trust signal (real numbers) available to use?
5. Does this gate also need to satisfy a compliance requirement (age verification, marketing consent)?
6. What's the current unlock rate, if this gate already exists?

---

## Related Skills

- **loyalty**: For the ongoing design of a paid membership or rewards program — not a one-time registration/verification gate
- **pricing**: For overall pricing strategy and structure — this skill is about the screen that reveals a price, not what the price should be
- **popups**: For general email-capture overlays and announcements not tied to withholding real value
- **trade-marketing**: For the sell-in strategy and dealer relationship behind a trade-pricing gate
- **compliance**: For age-verification requirements and marketing-consent rules on any gate that collects contact information
- **cro**: For general page and cart conversion optimization beyond the gate moment itself
