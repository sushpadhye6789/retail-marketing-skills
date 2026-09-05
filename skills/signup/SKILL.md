---
name: signup
description: When the user wants to optimize signup, registration, or account-creation flows — checkout account creation, loyalty program signup, subscribe-and-save signup, or a B2B/wholesale account application. Also use when the user mentions "signup conversions," "registration friction," "signup form optimization," "guest checkout," "reduce signup dropoff," "account creation flow," "people aren't signing up," "signup abandonment," "nobody completes registration," "too many steps to sign up," or "simplify our signup." Use this whenever the user has a signup or registration flow that isn't performing. For what happens after signup on a genuine app/portal, see onboarding; for the physical-product post-purchase journey, see post-purchase-experience. For lead capture forms (not account creation), see cro.
metadata:
  version: 3.0.0
---

# Signup Flow CRO

You are an expert in optimizing signup and registration flows. Your goal is to reduce friction, increase completion rates, and set users up for successful activation.

## Initial Assessment

**Check for existing strategy context first:**
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions. Use that context and only ask for information not already covered or specific to this task. Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).

Before providing recommendations, understand:

1. **Flow Type**
   - Checkout account creation (vs. guest checkout)
   - Loyalty/rewards program signup
   - Subscribe-and-save account creation
   - B2B/wholesale account application
   - Waitlist/early access signup (a launch or restock)

2. **Current State**
   - How many steps/screens?
   - What fields are required?
   - What's the current completion rate?
   - Where do users drop off?

3. **Business Constraints**
   - What data is genuinely needed at signup?
   - Are there compliance requirements?
   - What happens immediately after signup?

---

## Core Principles

### 1. Minimize Required Fields
Every field reduces conversion. For each field, ask:
- Do we absolutely need this before they can use the product?
- Can we collect this later through progressive profiling?
- Can we infer this from other data?

**Typical field priority:**
- Essential: Email (or phone), Password
- Often needed: Name
- Usually deferrable: Company, Role, Team size, Phone, Address

### 2. Show Value Before Asking for Commitment
- What can you show/give before requiring signup?
- Can they experience the product before creating an account?
- Reverse the order: value first, signup second

### 3. Reduce Perceived Effort
- Show progress if multi-step
- Group related fields
- Use smart defaults
- Pre-fill when possible

### 4. Remove Uncertainty
- Clear expectations ("Takes 30 seconds")
- Show what happens after signup
- No surprises (hidden requirements, unexpected steps)

---

## Field-by-Field Optimization

### Email Field
- Single field (no email confirmation field)
- Inline validation for format
- Check for common typos (gmial.com → gmail.com)
- Clear error messages

### Password Field
- Show password toggle (eye icon)
- Show requirements upfront, not after failure
- Consider passphrase hints for strength
- Update requirement indicators in real-time

**Better password UX:**
- Allow paste (don't disable)
- Show strength meter instead of rigid rules
- Consider passwordless options

### Name Field
- Single "Full name" field vs. First/Last split (test this)
- Only require if immediately used (personalization)
- Consider making optional

### Social Auth Options
- Place prominently (often higher conversion than email)
- Show most relevant options for your audience
  - B2C: Google, Apple, Facebook
  - B2B: Google, Microsoft, SSO
- Clear visual separation from email signup
- Consider "Sign up with Google" as primary

### Phone Number
- Defer unless essential (SMS verification, calling leads)
- If required, explain why
- Use proper input type with country code handling
- Format as they type

### Company/Organization
- Defer if possible
- Auto-suggest as they type
- Infer from email domain when possible

### Use Case / Role Questions
- Defer to onboarding if possible
- If needed at signup, keep to one question
- Use progressive disclosure (don't show all options at once)

---

## Single-Step vs. Multi-Step

### Single-Step Works When:
- 3 or fewer fields
- Simple B2C products
- High-intent visitors (from ads, waitlist)

### Multi-Step Works When:
- More than 3-4 fields needed
- Complex B2B products needing segmentation
- You need to collect different types of info

### Multi-Step Best Practices
- Show progress indicator
- Lead with easy questions (name, email)
- Put harder questions later (after psychological commitment)
- Each step should feel completable in seconds
- Allow back navigation
- Save progress (don't lose data on refresh)

**Progressive commitment pattern:**
1. Email only (lowest barrier)
2. Password + name
3. Customization questions (optional)

---

## Trust and Friction Reduction

### At the Form Level
- "Guest checkout available" (if account creation isn't required to complete a purchase)
- "Join free — [X]% off your first order" or the real loyalty-signup incentive, if there is one
- Privacy note: "We'll never share your email"
- Security badges (secure checkout, payment provider logos) if relevant
- Testimonial or review count near the signup form

### Error Handling
- Inline validation (not just on submit)
- Specific error messages ("Email already registered" + recovery path)
- Don't clear the form on error
- Focus on the problem field

### Microcopy
- Placeholder text: Use for examples, not labels
- Labels: Keep visible (not just placeholders) — placeholders disappear when typing, leaving users unsure what they're filling in
- Help text: Only when needed, placed close to field

---

## Mobile Signup Optimization

- Larger touch targets (44px+ height)
- Appropriate keyboard types (email, tel, etc.)
- Autofill support
- Reduce typing (social auth, pre-fill)
- Single column layout
- Sticky CTA button
- Test with actual devices

---

## Post-Submit Experience

### Success State
- Clear confirmation
- Immediate next step
- If email verification required:
  - Explain what to do
  - Easy resend option
  - Check spam reminder
  - Option to change email if wrong

### Verification Flows
- Consider delaying verification until necessary
- Magic link as alternative to password
- Let users explore while awaiting verification
- Clear re-engagement if verification stalls

---

## Measurement

### Key Metrics
- Form start rate (landed → started filling)
- Form completion rate (started → submitted)
- Field-level drop-off (which fields lose people)
- Time to complete
- Error rate by field
- Mobile vs. desktop completion

### What to Track
- Each field interaction (focus, blur, error)
- Step progression in multi-step
- Social auth vs. email signup ratio
- Time between steps

---

## Output Format

### Audit Findings
For each issue found:
- **Issue**: What's wrong
- **Impact**: Why it matters (with estimated impact if possible)
- **Fix**: Specific recommendation
- **Priority**: High/Medium/Low

### Recommended Changes
Organized by:
1. Quick wins (same-day fixes)
2. High-impact changes (week-level effort)
3. Test hypotheses (things to A/B test)

### Form Redesign (if requested)
- Recommended field set with rationale
- Field order
- Copy for labels, placeholders, buttons, errors
- Visual layout suggestions

---

## Common Signup Flow Patterns

### Ecommerce Checkout Account
1. Guest checkout as the default
2. Account creation optional, offered post-purchase ("save your info for next time") rather than gating checkout
3. OR social auth with a single click if an account is required

### Loyalty/Rewards Program
1. Email (or phone, if SMS-based) + name
2. Optional: birthday, preferences (for personalized offers) — defer if not essential to the first reward
3. → Onboarding flow (see `onboarding` if there's a real app; otherwise a simple confirmation + welcome email/SMS)

### Subscribe-and-Save Account
1. Product/plan selection + delivery cadence
2. Email + payment method
3. → Confirmation, with clear next-delivery date and how to skip/manage (see `loyalty` and `churn-prevention`)

### B2B/Wholesale Account Application
1. Business details (name, tax/resale ID if required, business type)
2. Contact + intended order volume
3. → Manual review/approval (not instant activation — see `marketing-strategy` Section 16) before trade pricing unlocks (see `paywalls`)

### Waitlist/Early Access
1. Email only
2. Optional: one qualifying question (size, preference, region)
3. → Waitlist confirmation, feeding into `launch`'s early-access phase

---

## Experiment Ideas

### Form Design Experiments

**Layout & Structure**
- Single-step vs. multi-step signup flow
- Multi-step with progress bar vs. without
- 1-column vs. 2-column field layout
- Form embedded on page vs. separate signup page
- Horizontal vs. vertical field alignment

**Field Optimization**
- Reduce to minimum fields (email + password only)
- Add or remove phone number field
- Single "Name" field vs. "First/Last" split
- Add or remove company/organization field
- Test required vs. optional field balance

**Authentication Options**
- Add SSO options (Google, Microsoft, GitHub, LinkedIn)
- SSO prominent vs. email form prominent
- Test which SSO options resonate (varies by audience)
- SSO-only vs. SSO + email option

**Visual Design**
- Test button colors and sizes for CTA prominence
- Plain background vs. product-related visuals
- Test form container styling (card vs. minimal)
- Mobile-optimized layout testing

---

### Copy & Messaging Experiments

**Headlines & CTAs**
- Test headline variations above signup form
- CTA button text: "Create Account" vs. "Join & Save [X]%" vs. "Get Started"
- Add clarity around the actual signup incentive in the CTA, if there is one
- Test value proposition emphasis in form header

**Microcopy**
- Field labels: minimal vs. descriptive
- Placeholder text optimization
- Error message clarity and tone
- Password requirement display (upfront vs. on error)

**Trust Elements**
- Add social proof next to signup form
- Test trust badges near form (security, compliance)
- Add "No credit card required" messaging
- Include privacy assurance copy

---

### Account-Creation Commitment Experiments

**Guest Checkout & Account Timing**
- Guest checkout as default vs. account required to purchase
- Account creation offered post-purchase vs. pre-purchase
- Loyalty enrollment incentive (a discount, a bonus points offer) vs. no incentive, tested for both signup rate and its effect on margin
- Auto-enroll in loyalty at checkout (opt-out) vs. explicit opt-in — check `compliance` before testing auto-enroll, since consent requirements apply if enrollment includes marketing messages

**Friction Points**
- Email verification required vs. delayed vs. removed
- Test CAPTCHA impact on completion
- Terms/marketing-consent checkbox vs. implicit acceptance — see `compliance` for what actually requires explicit opt-in
- Business-details verification timing for a B2B/wholesale application (upfront vs. after initial submission)

---

### Post-Submit Experiments

- Clear next steps messaging after signup
- Instant product access vs. email confirmation first
- Personalized welcome message based on signup data
- Auto-login after signup vs. require login

---

## Task-Specific Questions

1. What's your current signup completion rate?
2. Do you have field-level analytics on drop-off?
3. What data is absolutely required before they can use the product?
4. Are there compliance or verification requirements?
5. What happens immediately after signup?

---

## Related Skills

- **onboarding**: For what happens after signup on a genuine app/portal (loyalty app, subscription portal, B2B ordering portal)
- **post-purchase-experience**: For the physical-product journey once checkout is complete, when signup isn't tied to an app
- **loyalty**: For the program structure a loyalty-signup flow is enrolling someone into
- **paywalls**: For the trade/wholesale price-reveal gate a B2B account application unlocks once approved
- **cro**: For non-signup forms (lead capture, contact) and for the landing page leading to signup
- **compliance**: For marketing-consent requirements on any auto-enroll or checkbox default tested here
- **ab-testing**: For testing signup flow changes
