# Customer Lifecycle Journeys

Shared by `retention-and-winback`, `post-purchase-experience`, `loyalty`, `cro`, and `emails` — the trigger/timing/channel map across the standard retail lifecycle journeys, since each journey's actual execution is correctly split across the skill that owns that discipline (prevention in `cro`, send mechanics in `emails`/`sms`, win-back strategy in `retention-and-winback`) but nothing previously mapped the seven journeys as one coherent sequence. Use this to see where a journey sits and who owns it; use the owning skill for the actual execution detail.

## The Map

| Journey | Trigger | Typical timing | Primary channel(s) | Owning skill(s) | Exit condition |
|---|---|---|---|---|---|
| **Welcome** | New signup, first purchase, or loyalty enrollment | Immediate, then 2-4 touches over the first 1-2 weeks | Email, SMS (if opted in) | `emails` (Welcome Sequence), `loyalty` (if enrollment-triggered) | Converts to standard lifecycle messaging, or to Onboarding if there's a real activation step |
| **Onboarding** | First purchase of a product with a real setup/first-use step (not every category needs this) | First 30-90 days, timed to actual usage milestones, not just calendar days | Email, in-product/packaging insert, SMS for time-sensitive steps | `post-purchase-experience` | Customer reaches the "successfully using the product" state, or moves to standard retention messaging if no distinct onboarding exists for the category |
| **Abandoned browse** | Viewed products/category with no add-to-cart, session ended | Same-day or next-day, before interest cools | Email (if identified), retargeting ads, on-site personalization on return visit | `cro` (why they left — see PDP/PLP guidance), `ads` (retargeting), `emails` (if a browse-abandonment send is set up) | Converts to Abandoned Cart if they later add to cart, or lapses into standard lifecycle messaging after 1-2 touches — this journey should not run indefinitely; low intent means low tolerance for repeated follow-up |
| **Abandoned cart** | Added to cart, didn't complete checkout | First touch within hours (while intent is highest), 2-3 touches over 3-5 days | Email, SMS, retargeting ads | `cro` (prevention — see Cart/Checkout CRO), `emails`/`sms` (recovery sequence), `product-feed` (accurate stock/price so the recovery message isn't wrong by the time they return) | Completes purchase, or lapses after the sequence ends — don't let cart-recovery messaging blur into generic promotional messaging once the specific cart is stale |
| **Replenishment** | Purchase of a consumable/finite-life product, timed to expected reorder point | Timed to the category's actual consumption cycle (see `retention-and-winback`'s Replenishment Cadence Optimization), not a fixed generic interval | Email, SMS, subscription auto-ship if enrolled | `retention-and-winback`, `loyalty` (if a subscribe-and-save mechanic exists — see Subscription Commerce) | Reorders (cycle repeats), switches to a subscription, or lapses into Winback if the expected reorder window passes with no action |
| **Winback** | Lapsed beyond the category's normal repurchase window with no reorder, or beyond a defined inactivity threshold | Escalating sequence over weeks, not a single blast — see `retention-and-winback`'s Win-Back Sequence Design | Email, SMS, retargeting; a genuine offer only if warranted (see Win-Back Offer Framework) | `retention-and-winback` | Reactivates (returns to standard lifecycle), or moves to Sunset if the win-back sequence completes with no response |
| **Sunset** | Win-back sequence exhausted with no reactivation, or an explicit opt-out/disengagement signal | End of the win-back sequence, or immediately on an explicit signal | Minimal — a final low-pressure touch, then reduced send frequency or suppression | `retention-and-winback` | Removed from active-lifecycle sends (not deleted — see data retention in `marketing-loops/references/loop-guardrails.md`'s PII handling); a genuine reactivation later restarts at Winback, not Welcome, since they're a known customer, not a new one |

## Reading the Map

**Sequential, not parallel.** A customer moves through at most one or two of these at a time — someone in an active Onboarding sequence shouldn't simultaneously receive Abandoned Browse messaging from a different category they glanced at. If a customer qualifies for more than one journey at once, the more specific/higher-intent journey wins (Abandoned Cart over Abandoned Browse; Onboarding over generic Welcome).

**Abandoned Browse is the one with no real precedent elsewhere in this repo** — it's lower-intent than Abandoned Cart, which means a lighter touch (fewer sends, more reliance on ads/retargeting than email) is usually right rather than treating it as a smaller version of the cart sequence.

**Replenishment and Loyalty's subscription mechanics overlap deliberately.** If `loyalty`'s Subscribe & Save program exists, Replenishment for an enrolled customer runs through that mechanic rather than a separate manual reminder sequence — check enrollment status before choosing which applies.

**This is a map, not a template library.** For the actual sequence design, subject lines, timing rules, and offer construction, use the owning skill named in the table — this file exists so the journeys compose into one coherent customer experience instead of each skill designing its slice in isolation.

## Related Skills

- **retention-and-winback**: Owns Replenishment, Winback, and Sunset — the file's home skill.
- **post-purchase-experience**: Owns Onboarding.
- **loyalty**: Subscription/replenishment mechanics when a subscribe-and-save program exists.
- **cro**: Abandonment *prevention* for both Browse and Cart — the on-page/on-site half of those two journeys.
- **emails** / **sms**: Send mechanics and sequence execution for every journey in this map that includes those channels.
- **compound-marketing**: For running any one journey as a unit of work — Brief the outcome metric, draft the sequence, execute, analyse, and log the result to `.agents/marketing-learnings.md`.
