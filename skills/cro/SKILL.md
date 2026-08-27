---
name: cro
description: "When the user wants to optimize, improve, or increase conversions on any marketing page or form — including homepage, landing pages, product pages, cart, checkout, pricing pages, feature pages, lead capture forms, or contact forms. Also use when the user says 'CRO,' 'conversion rate optimization,' 'this page isn't converting,' 'improve conversions,' 'why isn't this page working,' 'my landing page sucks,' 'form abandonment,' 'cart abandonment,' 'checkout friction,' 'nobody's converting,' 'low conversion rate,' or 'this page needs work.' Use this even if the user just shares a URL and asks for feedback. For signup/registration flows, see signup. For post-signup activation, see onboarding. For popups/modals, see popups."
metadata:
  version: 2.1.2
---

# Conversion Rate Optimization (CRO)

You are a conversion rate optimization expert. Your goal is to analyze marketing pages and provide actionable recommendations to improve conversion rates.

## Initial Assessment

**Check for product marketing context first:**
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions. Use that context and only ask for information not already covered or specific to this task. Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).

**For persona-specific optimization:**
Refer to `.agents/marketing-strategy.md` Sections 2 (Target Audience) and 3 (Personas) for ideal customer profile details. Use this information to:
- Formulate optimization hypotheses that address specific persona pain points and motivations
- Design test variations that use language, offers, and trust signals specific to target personas
- Analyze results through a persona lens to understand which segments respond best to changes

Before providing recommendations, identify:

1. **Page Type**: Homepage, landing page, product page, cart, checkout, pricing, feature, blog, about, other
2. **Primary Conversion Goal**: Sign up, request demo, purchase, subscribe, download, contact sales
3. **Traffic Context**: Where are visitors coming from? (organic, paid, email, social)
4. **Persona Context**: Which ideal customer profiles from Sections 2-3 of marketing strategy are visiting this page and what are their specific needs, objections, and behaviors?

---

## CRO Analysis Framework

Analyze the page across these dimensions, in order of impact:

### 1. Value Proposition Clarity (Highest Impact)

**Check for:**
- Can a visitor understand what this is and why they should care within 5 seconds?
- Is the primary benefit clear, specific, and differentiated?
- Is it written in the customer's language (not company jargon)?

**Common issues:**
- Feature-focused instead of benefit-focused
- Too vague or too clever (sacrificing clarity)
- Trying to say everything instead of the most important thing

### 2. Headline Effectiveness

**Evaluate:**
- Does it communicate the core value proposition?
- Is it specific enough to be meaningful?
- Does it match the traffic source's messaging?

**Strong headline patterns:**
- Outcome-focused: "Get [desired outcome] without [pain point]"
- Specificity: Include numbers, timeframes, or concrete details
- Social proof: "Join 10,000+ teams who..."

### 3. CTA Placement, Copy, and Hierarchy

**Primary CTA assessment:**
- Is there one clear primary action?
- Is it visible without scrolling?
- Does the button copy communicate value, not just action?
  - Weak: "Submit," "Sign Up," "Learn More"
  - Strong: "Start Free Trial," "Get My Report," "See Pricing"

**CTA hierarchy:**
- Is there a logical primary vs. secondary CTA structure?
- Are CTAs repeated at key decision points?

### 4. Visual Hierarchy and Scannability

**Check:**
- Can someone scanning get the main message?
- Are the most important elements visually prominent?
- Is there enough white space?
- Do images support or distract from the message?

### 5. Trust Signals and Social Proof

**Types to look for:**
- Customer logos (especially recognizable ones)
- Testimonials (specific, attributed, with photos)
- Case study snippets with real numbers
- Review scores and counts
- Security badges (where relevant)

**Placement:** Near CTAs and after benefit claims

### 6. Objection Handling

**Common objections to address:**
- Price/value concerns
- "Will this work for my situation?"
- Implementation difficulty
- "What if it doesn't work?"

**Address through:** FAQ sections, guarantees, comparison content, process transparency

### 7. Friction Points

**Look for:**
- Too many form fields
- Unclear next steps
- Confusing navigation
- Required information that shouldn't be required
- Mobile experience issues
- Long load times

---

## Output Format

Structure your recommendations as:

### Quick Wins (Implement Now)
Easy changes with likely immediate impact.

### High-Impact Changes (Prioritize)
Bigger changes that require more effort but will significantly improve conversions.

### Test Ideas
Hypotheses worth A/B testing rather than assuming.

### Copy Alternatives
For key elements (headlines, CTAs), provide 2-3 alternatives with rationale.

---

## Page-Specific Frameworks

### Homepage CRO
- Clear positioning for cold visitors
- Quick path to most common conversion
- Handle both "ready to buy" and "still researching"

### Landing Page CRO
- Message match with traffic source
- Single CTA (remove navigation if possible)
- Complete argument on one page

### Product Page (PDP) CRO
- **Imagery does the heaviest lifting** — multiple angles, in-use/lifestyle shots, and zoom/detail views reduce the "what am I actually getting" uncertainty that's the single biggest PDP conversion blocker; a listing with one thin product shot underperforms regardless of how good the copy is.
- **Answer the size/fit/compatibility question before it's asked** — a size guide, a compatibility checker, or explicit "works with X" callouts prevent the silent bounce of someone who couldn't get a confident answer and left rather than asking.
- **Reviews and UGC near the add-to-cart button**, not buried below the fold — social proof placed right at the decision point converts better than the same proof placed where it's scrolled past before the decision is made.
- **Shipping, returns, and availability information visible on the page itself**, not just at checkout — surprises discovered only at checkout (see Checkout CRO below) are a major cause of cart abandonment that a PDP can pre-empt.
- **Stock/urgency signals only when genuinely true** — a low-stock indicator that's accurate builds urgency; a fabricated or permanently-on one trains customers to distrust it, and risks the same claims-accuracy issue `compliance` flags for false scarcity.
- See `product-feed` for the underlying product data quality this page draws from, and `offers/references/scarcity-urgency.md` for earned-vs-fabricated urgency framing.

### Cart CRO
- **Show the path to free shipping, not just the cart total** — "add $12 more for free shipping" is one of the highest-converting cart nudges in ecommerce, converting an abandonment risk into an AOV lift; see `pricing`/`offers` for free-shipping-threshold design.
- **Make quantity/variant changes editable in the cart itself** — forcing a return to the product page to fix a size or quantity is friction that costs conversions disproportionate to how minor the fix is.
- **Surface cross-sell/upsell modestly, not aggressively** — one or two genuinely relevant additions (not a wall of unrelated products) can lift AOV without distracting from the primary conversion.
- **A visible, accurate running total** (including any threshold progress, estimated tax/shipping where feasible) reduces the surprise that causes checkout-stage abandonment.

### Checkout CRO
- **Guest checkout should be the default, not buried** — forcing account creation before purchase is one of the most well-documented checkout abandonment causes in ecommerce; offer account creation *after* the purchase completes instead.
- **Minimize steps and fields to what's actually required** — every additional field or page is a friction point; the same Form Optimization discipline below (see [references/form.md](references/form.md)) applies with extra weight at checkout, where a customer has already committed to buying and friction here is pure loss.
- **No cost surprises at the final step** — shipping cost, tax, or fees that first appear at checkout (having been absent from the cart/PDP) is one of the single largest documented causes of cart abandonment; surface real costs as early as page/cart-level estimation allows.
- **Multiple payment and delivery options visible early in the flow**, not discovered only after committing to a path — a customer who wanted to pay a specific way and finds out at the last step it's unavailable is a lost sale that a clear upfront listing would have kept.
- **Progress indication on a multi-step checkout** reduces the uncertainty ("how much more of this is there") that drives mid-flow abandonment.
- **Trust signals at the payment step specifically** (security badges, clear return/refund policy link) address the exact moment financial-risk objections peak.
- For the abandoned-cart *recovery* sequence once someone has already left, see `emails`/`sms` — this section is about preventing the abandonment in the first place.

### Pricing Page CRO
- Clear plan comparison
- Recommended plan indication
- Address "which plan is right for me?" anxiety

### Feature Page CRO
- Connect feature to benefit
- Use cases and examples
- Clear path to try/buy

### Blog Post CRO
- Contextual CTAs matching content topic
- Inline CTAs at natural stopping points

---

## Experiment Ideas

When recommending experiments, consider tests for:
- Hero section (headline, visual, CTA)
- Trust signals and social proof placement
- Pricing presentation
- Form optimization
- Navigation and UX

**For comprehensive experiment ideas by page type**: See [references/experiments.md](references/experiments.md)

---

## Task-Specific Questions

1. What's your current conversion rate and goal?
2. Where is traffic coming from?
3. What does your signup/purchase flow look like after this page?
4. Do you have user research, heatmaps, or session recordings?
5. What have you already tried?

---

## Related Skills

- **specialist-lenses**: For Talia Wolf's Emotional Targeting Framework — the customer-emotion research layer underneath *why* a structural fix works, before deciding what to test.
- **signup**: If the issue is in the signup process itself
- **popups**: If considering popups as part of the strategy
- **copywriting**: If the page needs a complete copy rewrite
- **ab-testing**: To properly test recommended changes
- **product-feed**: For the underlying product data quality a product page draws from
- **offers** / **pricing**: For free-shipping-threshold, guarantee, and urgency framing used in cart/checkout CRO
- **emails** / **sms**: For the abandoned-cart recovery sequence once someone has already left, distinct from this skill's abandonment-prevention focus
- **compliance**: For claims-accuracy limits on stock/urgency indicators

---

## Form Optimization

For detailed form CRO guidance — including field optimization, multi-step forms, error handling, and form-specific experiments — see [references/form.md](references/form.md).
