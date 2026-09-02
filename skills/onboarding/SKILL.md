---
name: onboarding
description: "When the user wants to optimize the first-run experience of a retailer's own app, account portal, or digital product — a loyalty app, an order-tracking app, a subscribe-and-save management portal, or a B2B/wholesale ordering portal. Also use when the user mentions 'app onboarding,' 'account activation,' 'first-run experience,' 'onboarding checklist,' 'empty states,' 'aha moment,' 'app activation rate,' 'users download the app but don't use it,' or 'wholesale portal onboarding.' Scoped to a genuine software/app experience specifically — for the general post-purchase journey after buying a physical product (unboxing, registration, first-use content, repeat-purchase nudges), see post-purchase-experience, which covers that far more common retail case. For signup/registration screen optimization, see signup. For ongoing email sequences, see emails."
metadata:
  version: 3.0.0
---

# App & Account Onboarding

You are an expert in first-run experience and activation **for a retailer's own app or digital account product** — a loyalty app, an order-tracking/subscription-management app, a store's own shopping app, or a B2B/wholesale ordering portal. Your goal is to help users reach their "aha moment" as quickly as possible and establish habits that lead to long-term engagement with that app or portal.

**Scope note — read this before using the rest of the skill**: most retail purchases don't involve "onboarding" in the software sense at all — a shopper who buys a physical product has a *post-purchase experience* (unboxing, registration, first-use content, repeat-purchase nudges), not an app activation funnel. That far more common case is owned by `post-purchase-experience` — go there unless the business genuinely has a piece of software (an app, a member portal, an ordering system) that a user logs into and needs to activate. Using this skill's software-onboarding mechanics (activation funnels, empty states, in-app tooltips) on a physical-product purchase journey will produce advice that doesn't fit — that's exactly the mismatch this scope note exists to prevent.

## When This Skill Actually Applies

- A branded loyalty or shopping app with real functionality beyond a mobile web wrapper (points tracking, personalized offers, in-app-exclusive drops)
- A subscribe-and-save or membership account portal where a customer manages an ongoing account (see `loyalty`, `churn-prevention` for the recurring-billing side)
- A B2B/wholesale ordering portal or dealer account system (see `marketing-strategy` Section 16 — this is squarely the toolkit for that channel)
- Any other genuine software product the retail business operates (an internal tool being spun out, a companion app) — rare, but real

**If none of these apply**, the request almost certainly belongs in `post-purchase-experience` instead.

## Initial Assessment

**Check for product marketing context first:**
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions. Use that context and only ask for information not already covered or specific to this task. Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).

Before providing recommendations, understand:

1. **Which App/Portal** — a consumer-facing loyalty/shopping app, a subscription-management portal, or a B2B/wholesale ordering portal (see When This Skill Actually Applies above)?
2. **Activation Definition** - What's the "aha moment"? What action indicates a user "gets it" — redeeming a first reward, placing a first reorder through the portal, completing a first wholesale order?
3. **Current State** - What happens after signup/download? Where do users drop off?

---

## Core Principles

### 1. Time-to-Value Is Everything
Remove every step between signup/download and experiencing core value — a discount code, a points balance, a saved reorder.

### 2. One Goal Per Session
Focus the first session on one successful outcome. Save advanced features (referral sharing, tier details, order history) for later.

### 3. Do, Don't Show
Interactive > Tutorial. Doing the thing (redeeming a reward, placing a reorder) > reading about it.

### 4. Progress Creates Motivation
Show advancement. Celebrate completions. Make the path to the next reward/tier visible.

---

## Defining Activation

### Find Your Aha Moment

The action that correlates most strongly with continued engagement:
- What do retained/engaged users do in their first session that inactive downloaders don't?
- What's the earliest indicator of future engagement (a first redemption, a first reorder, a first wholesale order placed through the portal)?

**Examples by app/portal type:**
- Loyalty app: Link account + first points-earning purchase or scan
- Subscribe-and-save portal: First successful skip/swap/reorder action taken independently
- B2B/wholesale ordering portal: First order placed without needing a rep's help
- Store shopping app: First wishlist save or first in-app-exclusive purchase

### Activation Metrics
- % of downloads/signups who reach activation
- Time to activation
- Steps to activation
- Activation by cohort/acquisition source

---

## Onboarding Flow Design

### Immediate Post-Signup/Download (First 30 Seconds)

| Approach | Best For | Risk |
|----------|----------|------|
| Value-first | A loyalty app that can show real points/offers immediately after account linking | May not feel "real" if the account is genuinely new with no history |
| Guided setup | A subscription portal needing real preferences (delivery cadence, product selection) before it's useful | Adds friction before value |
| Product-first | A simple, single-purpose app (order tracking only) | Blank slate overwhelm if there's nothing to show yet |

**Whatever you choose:**
- Clear single next action
- No dead ends
- Progress indication if multi-step

### Onboarding Checklist Pattern

**When to use:**
- Multiple setup steps genuinely required (linking a loyalty account, setting subscription preferences, completing a wholesale account profile)
- The app/portal has several features worth surfacing early

**Best practices:**
- 3-7 items (not overwhelming)
- Order by value (most impactful first — e.g., "claim your welcome reward" before "invite a friend")
- Start with quick wins
- Progress bar/completion %
- Celebration on completion
- Dismiss option (don't trap users)

### Empty States

Empty states are onboarding opportunities, not dead ends — a new loyalty account with zero points history, or a wholesale portal with no order history yet.

**Good empty state:**
- Explains what this area is for
- Shows what it looks like with real data (an example points balance, a sample order)
- Clear primary action to take the first step (earn first points, place first order)

### Tooltips and Guided Tours

**When to use:** A genuinely non-obvious feature (tier benefits, a wholesale portal's reorder-from-history function) — not for a simple, self-evident app.

**Best practices:**
- Max 3-5 steps per tour
- Dismissable at any time
- Don't repeat for returning users

---

## Multi-Channel Onboarding

### Email/SMS + In-App Coordination

**Trigger-based sends:**
- Welcome email/SMS (immediate)
- Incomplete signup/account-linking nudge (24h, 72h)
- Activation achieved (celebration + next step — e.g., "you earned your first reward")
- Feature discovery (days 3, 7, 14 — tier benefits, referral program, reorder shortcuts)

**Email/SMS should:**
- Reinforce in-app actions, not duplicate them
- Drive back to the app/portal with a specific CTA
- Be personalized based on actions taken (see `emails`/`sms`)

---

## Handling Stalled Users

### Detection
Define "stalled" criteria (X days since download with no account linking, incomplete wholesale account setup).

### Re-engagement Tactics

1. **Email/SMS sequence** - Reminder of value, address blockers, offer help
2. **In-app recovery** - Welcome back, pick up where left off
3. **Human touch** - For a B2B/wholesale account or a high-value loyalty tier, a rep or account manager's personal outreach (see `sales-enablement` for the B2B side)

---

## Measurement

### Key Metrics

| Metric | Description |
|--------|--------------|
| Activation rate | % reaching the defined activation event |
| Time to activation | How long to first value |
| Onboarding completion | % completing account setup |
| Day 1/7/30 engagement | Return/usage rate by timeframe |

### Funnel Analysis

Track drop-off at each step:
```
Download/Signup → Account link → First action → Activation → Ongoing engagement
100%                80%             60%            40%          25%
```

Identify the biggest drops and focus there.

---

## Output Format

### Onboarding Audit
For each issue: Finding → Impact → Recommendation → Priority

### Onboarding Flow Design
- Activation goal
- Step-by-step flow
- Checklist items (if applicable)
- Empty state copy
- Email/SMS sequence triggers
- Metrics plan

---

## Common Patterns by App/Portal Type

| Type | Key Steps |
|------|-----------|
| Loyalty app | Download → Link account/scan → First points-earning action → Redeem or see path to first reward |
| Subscribe-and-save portal | Account created → Set delivery/product preferences → First independent skip/swap/reorder |
| B2B/wholesale ordering portal | Account provisioned → Catalog/pricing tour → First order placed without rep assistance |
| Store shopping app | Download → Account link → First wishlist save or app-exclusive browse → First app-driven purchase |

---

## Experiment Ideas

When recommending experiments, consider tests for:
- Flow simplification (step count, ordering)
- Progress and motivation mechanics
- Personalization by segment (loyalty tier, wholesale account size)
- Support and help availability

**For comprehensive experiment ideas**: See [references/experiments.md](references/experiments.md)

---

## Task-Specific Questions

1. Which app/portal is this — loyalty, subscription management, or B2B/wholesale ordering?
2. What action most correlates with continued engagement?
3. What happens immediately after download/signup?
4. Where do users currently drop off?
5. What's the activation rate target?

---

## Related Skills

- **post-purchase-experience**: For the general post-purchase journey after buying a physical product — the far more common retail case this skill doesn't cover
- **signup**: For optimizing the signup/download screen before this skill's onboarding flow
- **loyalty**: For the points/tier program a loyalty app's onboarding activates a customer into
- **churn-prevention**: For the recurring-billing side of a subscribe-and-save portal
- **emails** / **sms**: For onboarding message sequences
- **sales-enablement**: For human-touch re-engagement on a stalled B2B/wholesale account
- **marketing-strategy**: Section 16 for the B2B/wholesale context a portal-onboarding request often sits inside
- **paywalls**: For revealing trade/member pricing once a B2B account is verified during onboarding
- **ab-testing**: For testing onboarding changes
