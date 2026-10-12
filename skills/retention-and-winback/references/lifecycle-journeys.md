# Customer Lifecycle Journeys

Shared by `retention-and-winback`, `post-purchase-experience`, `loyalty`, `cro`, and `emails` — the trigger/timing/channel map across the standard retail lifecycle journeys, since each journey's actual execution is correctly split across the skill that owns that discipline (prevention in `cro`, send mechanics in `emails`/`sms`, win-back strategy in `retention-and-winback`) but nothing previously mapped the ten journeys as one coherent sequence. Use this to see where a journey sits and who owns it; use the owning skill for the actual execution detail.

## The Map

| Journey | Trigger | Typical timing | Primary channel(s) | Owning skill(s) | Exit condition |
|---|---|---|---|---|---|
| **Welcome** | New signup, first purchase, or loyalty enrollment | Immediate, then 2-4 touches over the first 1-2 weeks | Email, SMS (if opted in) | `emails` (Welcome Sequence), `loyalty` (if enrollment-triggered) | Converts to standard lifecycle messaging, or to Onboarding if there's a real activation step |
| **Onboarding** | First purchase of a product with a real setup/first-use step (not every category needs this) | First 30-90 days, timed to actual usage milestones, not just calendar days | Email, in-product/packaging insert, SMS for time-sensitive steps | `post-purchase-experience` | Customer reaches the "successfully using the product" state, or moves to standard retention messaging if no distinct onboarding exists for the category |
| **Post-purchase** | Order delivered (use the delivery event, not the order date) | Order confirmation and shipping updates straight away (service messages, not marketing). Care and how-to content in the first one to two weeks, timed to delivery. A review request once the product has been used long enough to judge it; the right gap depends on the category, so test it | Email; SMS for delivery updates | `post-purchase-experience` (care, how-to, registration), `emails` (send mechanics), `customer-research` (review and feedback request design) | Review left, or the request ignored once and not repeated, then standard lifecycle. Hands off to Replenishment for a consumable, or replaces this journey with Onboarding if the product has a real setup step; don't run both |
| **Abandoned browse** | Viewed products/category with no add-to-cart, session ended | Same-day or next-day, before interest cools | Email (if identified), retargeting ads, on-site personalization on return visit | `cro` (why they left — see PDP/PLP guidance), `ads` (retargeting), `emails` (if a browse-abandonment send is set up) | Converts to Abandoned Cart if they later add to cart, or lapses into standard lifecycle messaging after 1-2 touches — this journey should not run indefinitely; low intent means low tolerance for repeated follow-up |
| **Abandoned cart** | Added to cart, didn't complete checkout | First touch within hours (while intent is highest), 2-3 touches over 3-5 days | Email, SMS, retargeting ads | `cro` (prevention — see Cart/Checkout CRO), `emails`/`sms` (recovery sequence), `product-feed` (accurate stock/price so the recovery message isn't wrong by the time they return) | Completes purchase, or lapses after the sequence ends — don't let cart-recovery messaging blur into generic promotional messaging once the specific cart is stale |
| **Replenishment** | Purchase of a consumable/finite-life product, timed to expected reorder point | Timed to the category's actual consumption cycle (see `retention-and-winback`'s Replenishment Cadence Optimization), not a fixed generic interval | Email, SMS, subscription auto-ship if enrolled | `retention-and-winback`, `loyalty` (if a subscribe-and-save mechanic exists — see Subscription Commerce) | Reorders (cycle repeats), switches to a subscription, or lapses into Winback if the expected reorder window passes with no action |
| **Back-in-stock and price-drop alerts** | The customer asked to be told (waitlist, "notify me", saved item or wishlist), and the item came back in stock or the price really fell | When it happens, within the hour. Back-in-stock only while stock on hand covers the demand; limit sends to the units available. Price-drop only on a genuine reduction from a genuine previous price | Email, SMS, web push if opted in | `emails` / `sms` (send), `pricing` and `compliance` (a drop must be real and the "was" price genuine), `product-feed` (accurate stock and price), `paywalls` (waitlist gates) | Purchased, or the alert expires after a set window. One alert per event, not a series |
| **VIP and loyalty tiers** | The customer reaches a tier, is close to the next one, or is about to lose the one they have | At the moment a tier is reached; a "close to the next tier" nudge only when it is genuinely within reach; a "tier at risk" notice ahead of expiry; a periodic status summary | Email, SMS, in the account | `loyalty` (structure and rewards), `emails` / `sms` (send mechanics) | Tier reached or kept, or the tier lapses and the member returns to standard lifecycle messaging. Changing the tier structure itself is a decision that needs approval, not a send |
| **Winback** | Lapsed beyond the category's normal repurchase window with no reorder, or beyond a defined inactivity threshold | Escalating sequence over weeks, not a single blast — see `retention-and-winback`'s Win-Back Sequence Design | Email, SMS, retargeting; a genuine offer only if warranted (see Win-Back Offer Framework) | `retention-and-winback` | Reactivates (returns to standard lifecycle), or moves to Sunset if the win-back sequence completes with no response |
| **Sunset** | Win-back sequence exhausted with no reactivation, or an explicit opt-out/disengagement signal | End of the win-back sequence, or immediately on an explicit signal | Minimal — a final low-pressure touch, then reduced send frequency or suppression | `retention-and-winback` | Removed from active-lifecycle sends (not deleted — see data retention in `marketing-loops/references/loop-guardrails.md`'s PII handling); a genuine reactivation later restarts at Winback, not Welcome, since they're a known customer, not a new one |

## Reading the Map

**Sequential, not parallel.** A customer moves through at most one or two of these at a time — someone in an active Onboarding sequence shouldn't simultaneously receive Abandoned Browse messaging from a different category they glanced at. If a customer qualifies for more than one journey at once, the more specific/higher-intent journey wins (Abandoned Cart over Abandoned Browse; Onboarding over generic Welcome).

**Post-purchase and Onboarding are not two programs.** Where a product has a real setup or first-use step, Onboarding replaces the generic care emails; where it does not, Post-purchase runs. Replenishment then takes over for consumables.

**Alerts are customer-requested, so they sit outside the sequential rule**, but they still count toward the contact frequency cap. A person who asked to hear when something is back should hear it even in the middle of another journey; that is the one exception, and it stops being an exception if the alerts become promotional.

**Abandoned Browse is the one with no real precedent elsewhere in this repo** — it's lower-intent than Abandoned Cart, which means a lighter touch (fewer sends, more reliance on ads/retargeting than email) is usually right rather than treating it as a smaller version of the cart sequence.

**Replenishment and Loyalty's subscription mechanics overlap deliberately.** If `loyalty`'s Subscribe & Save program exists, Replenishment for an enrolled customer runs through that mechanic rather than a separate manual reminder sequence — check enrollment status before choosing which applies.

**This is a map, not a template library.** For the actual sequence design, subject lines, timing rules, and offer construction, use the owning skill named in the table — this file exists so the journeys compose into one coherent customer experience instead of each skill designing its slice in isolation.

## Build Order, in Rough Order of Revenue

Use this as a starting order, then re-sort it by the business's own revenue per journey once the reports exist. For a typical retail brand with an email list and an online store, the journeys tend to earn in about this order, and it is also a sensible build order, because the earlier ones need the fewest moving parts. Treat it as a pattern to check against your own numbers, not a promise.

1. **Abandoned cart, and browse abandonment.** Highest intent. Needs cart and browse events from the store platform.
2. **Welcome series.** Every new subscriber passes through it. If it carries a first-purchase offer, the offer needs a margin floor; an incentive beyond the brand's normal range needs approval (see `discount-and-clearance`).
3. **Post-purchase: care, how-to and review request.** Cheap to build, and it feeds everything after it (reviews, repeat purchase, replenishment timing).
4. **Replenishment, for consumables.** Skip it if nothing the business sells runs out. Time it to the real consumption cycle.
5. **Winback of lapsed customers.** Define "lapsed" from the category's own repurchase window, not a fixed number of days.
6. **Back-in-stock and price-drop alerts.** Worth building only if stock-outs or price changes happen often enough to matter. Needs accurate stock and price data, or the alert is wrong by the time it lands.
7. **VIP and loyalty tiers.** Needs a working loyalty program first.
8. **Sunset.** Earns nothing directly; it protects deliverability by suppressing people who never engage, so the other seven keep reaching the inbox. It is cheap, so build it as soon as Winback exists.

## Guardrails That Apply to Every Journey

- **Consent and service messages.** Commercial messages need consent, a working unsubscribe and clear sender identification (the Spam Act 2003 in Australia, the Unsolicited Electronic Messages Act 2007 in New Zealand; see `emails` Compliance & Deliverability). Order and delivery messages are service messages, a different category; don't add promotions to them without checking the rules.
- **Approval.** The first launch of a journey, any send to the full list, a new offer or a new loyalty structure is an action that needs approval. Drafting and analysis do not. See `compliance` and the two-tier action model.
- **Fail closed.** Don't send an alert for stock the business doesn't have, a price drop that isn't one, or an incentive with no margin floor. Name the missing input and stop.
- **Frequency cap.** One cap across all journeys, so one customer in several at once is not flooded. The more specific, higher-intent journey wins.
- **Measure per journey.** Revenue per recipient, and unsubscribe and complaint rates. For Abandoned Cart and Winback, hold out a small control group, because some of those customers would have come back anyway and the raw revenue overstates what the journey did.

## Related Skills

- **retention-and-winback**: Owns Replenishment, Winback, and Sunset — the file's home skill.
- **post-purchase-experience**: Owns Onboarding and the Post-purchase care, how-to and review journey.
- **loyalty**: Subscription/replenishment mechanics when a subscribe-and-save program exists, and the VIP and tier journey.
- **cro**: Abandonment *prevention* for both Browse and Cart — the on-page/on-site half of those two journeys.
- **emails** / **sms**: Send mechanics and sequence execution for every journey in this map that includes those channels.
- **compound-marketing**: For running any one journey as a unit of work — Brief the outcome metric, draft the sequence, execute, analyse, and log the result to `.agents/marketing-learnings.md`.
