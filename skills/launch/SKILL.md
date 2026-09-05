---
name: launch
description: "When the user wants to plan a product, collection, or new-store launch, or a major restock/drop announcement. Also use when the user mentions 'launch,' 'product launch,' 'collection launch,' 'drop,' 'restock announcement,' 'go-to-market,' 'pre-order,' 'early access,' 'waitlist,' 'limited release,' 'launch checklist,' 'GTM plan,' or 'we're about to launch.' Use this whenever someone is preparing to release a product, collection, or drop publicly. For a new physical-location opening, see new-store-launch. For ongoing marketing after launch, see marketing-ideas. For the offer being launched (bonuses, guarantees, scarcity, naming), see offers."
metadata:
  version: 3.0.1
---

# Launch Strategy

You are an expert in retail and ecommerce product launches — new products, collections, drops, and restocks. Your goal is to help users plan launches that build momentum, capture attention, and convert interest into sales.

## Before Starting

**Check for existing strategy context first:**
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions. Use that context and only ask for information not already covered or specific to this task. Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).

**Not a physical-location opening.** If the request is about opening a new store (not launching a product/collection), use `new-store-launch` instead — it sequences the location-specific work (Google Business Profile, the opening event, local press) this skill doesn't cover. The two combine when a flagship store opens around a new collection.

---

## Core Philosophy

The best brands don't just launch once—they launch again and again. Every new collection, restock, and product drop is an opportunity to capture attention and re-engage the audience.

A strong launch isn't about a single moment. It's about:
- Getting the product into customers' hands with real anticipation built first
- Learning from early feedback before the full assortment ships
- Making a splash at every stage, not just launch day
- Building momentum that compounds — across collections, not just within one

---

## The ORB Framework

Structure launch marketing across three channel types. Everything should ultimately lead back to owned channels.

### Owned Channels
You own the channel (though not the audience). Direct access without algorithms or platform rules.

**Examples:**
- Email/SMS list
- Blog/content hub
- Loyalty/membership program
- Branded community
- Website/app

**Why they matter:**
- Get more effective over time
- No algorithm changes or pay-to-play
- Direct relationship with the customer
- Compound value from content

**Start with 1-2 based on audience:**
- Category lacks quality content → Start a blog/content hub
- Customers want direct drop alerts → Focus on SMS/email
- Repeat-purchase category → Build a loyalty/early-access program

**Example - Glossier:**
Built an early cult following through its own content (Into The Gloss) and a highly engaged owned community before most product launches — new drops sold out fast because the owned audience was primed in advance, not discovered cold on launch day.

### Rented Channels
Platforms that provide visibility but you don't control. Algorithms shift, rules change, pay-to-play increases.

**Examples:**
- Social media (Instagram, TikTok, Pinterest)
- Marketplaces (Amazon, Etsy)
- YouTube
- Reddit/niche forums

**How to use correctly:**
- Pick 1-2 platforms where the audience is active
- Use them to drive traffic to owned channels (email/SMS capture, the website)
- Don't rely on them as the only strategy

**Example - a limited sneaker/streetwear drop:**
Hype is built entirely on rented channels (Instagram teasers, TikTok unboxings, resale-market chatter) in the run-up — but the brands that sustain the model funnel every one of those rented-channel viewers into an owned early-access list for the *next* drop, rather than starting from zero each time.

**Platform-specific tactics:**
- Instagram/TikTok: Teaser content and countdowns → link to email/SMS signup for early access
- Pinterest: Lookbook/inspiration content → drive to the collection page
- Marketplaces: Optimize the listing → drive repeat buyers to the owned site for future drops

Rented channels give speed, not stability. Capture momentum by bringing customers into the owned ecosystem (email/SMS list, loyalty program).

### Borrowed Channels
Tap into someone else's audience to shortcut the hardest part—getting noticed.

**Examples:**
- Influencer/creator seeding (see `influencer-marketing`)
- Press/media coverage (see `public-relations`)
- Gift guide and "best of" inclusion (see `directory-submissions`)
- Co-branded collaborations (see `co-marketing`)

**Be proactive, not passive:**
1. List the creators and press outlets the target audience actually follows
2. Pitch win-win collaborations or seed product ahead of launch under embargo
3. Set up affiliate/referral incentives for ongoing creator promotion (see `referrals`)

**Example - a founder-gifted product review:**
Sending a free product to a relevant creator — not a paid sponsorship, just hoping they'd genuinely like it — can produce an organic, in-depth review that drives outsized traffic and sales if the product is genuinely good and the creator's audience is a real fit. The mechanic (unpaid gifting + hoping for an honest, enthusiastic review) works the same whether the product is software or a physical product; retail arguably has an advantage since a physical product is more naturally reviewable/unboxable on camera.

Borrowed channels give instant credibility, but only work if you convert borrowed attention into owned relationships (email/SMS signups, loyalty enrollment).

---

## Readiness Gate: Are You Ready to Launch?

Run this **before** the phased mechanics. Products don't market themselves—but a product that isn't ready won't market either. The launch mechanics only pay off if what you're launching is worth launching.

Two failure modes kill launches from opposite ends:

- **Stealth Mode** — launching too late. "Procrastination in a fancy suit." You keep polishing in private, waiting for the collection/store/product to be perfect. It never ships, and nobody learns you exist.
- **"Just One More SKU"** — never launching. Every proposed launch date gets pushed for one more product line, one more finish, one more feature. The scope creeps forever; the launch never comes.

The middle path is **SLC — Simple, Lovable, Complete** (Jason Cohen), the antidote to shipping a bare-bones assortment that's minimal but unlovable. Don't launch a stub nobody wants; don't wait for a bloated full-catalog rollout. A launchable v1 is:

- **Simple** — it does *one* thing. A focused core assortment or a single hero product/collection, not a sprawling catalog launched half-finished.
- **Lovable** — customers *want* it, not just tolerate it. Don't ask early buyers to settle for a stripped-down range "to test demand." SLC gives them something they'd choose. If nobody would be disappointed to see it discontinued, it isn't lovable yet.
- **Complete** — it's a *whole* experience for that one thing, not a stub with obvious holes: sizes/variants in stock, packaging finished, checkout and fulfillment working end to end. Complete at its chosen scope, not a teaser of a bigger range to come.

**The gate:** If it's not yet Simple, Lovable, and Complete, you're in "Just One More SKU" territory only when adding scope is what's missing—otherwise you're in Stealth Mode and should ship. Cut scope until one collection/product is lovable and complete, then launch that. SLC gives you a real launch now instead of a perfect launch never.

**Quick check before running the phases:**
- [ ] Does it do one clearly-defined thing? (Simple)
- [ ] Would a target customer *choose* it, not just endure it? (Lovable)
- [ ] Is that one thing a whole experience, with no glaring stubs (stock, variants, fulfillment)? (Complete)
- [ ] Are you polishing past this bar? → Stop. You're in Stealth Mode. Ship.
- [ ] Are you still adding new SKUs/variants to the launch scope? → Stop. You're in "Just One More SKU." Cut back to SLC.

Pass the gate, then run the phases below.

---

## Five-Phase Launch Approach

Launching isn't a one-day event. It's a phased process that builds momentum — the phases scale down for a routine seasonal drop and scale up for a flagship collection or new product category.

### Phase 1: Internal Preview
Gather initial feedback and iron out major issues before going public.

**Actions:**
- Sample the product internally (team, close advisors) and with a small trusted-customer panel
- Collect feedback on fit, quality, packaging, and any friction in the buying experience
- Confirm production/inventory readiness is real, not aspirational — a launch date set before supply is confirmed is the single most common cause of a broken launch

**Goal:** Validate the product and buying experience with friendly eyes before any customer-facing signal goes out.

### Phase 2: Waitlist / Early-Access Build
Build anticipation and a qualified list before the product is purchasable.

**Actions:**
- Create a landing page or collection teaser page with an early-access signup form (email/SMS)
- Announce that something is coming without fully revealing it — teaser content across owned and rented channels
- Seed a small number of trusted customers, loyalty VIPs, or creators individually ahead of the public reveal

**Goal:** First external validation and an early-access list to launch into.

### Phase 3: Press & Creator Preview
Scale up early access while generating external buzz — this is where borrowed-channel work concentrates.

**Actions:**
- Send product samples to press and relevant creators under embargo (see `public-relations` and `influencer-marketing`)
- Start marketing with teasers about the problem/occasion the product solves
- Recruit loyalty-program VIPs and known advocates to preview and share

**Consider adding:**
- A "coming soon" landing page or countdown
- Early-access toggle for loyalty members (see `loyalty`)
- SMS/email invites to the early-access list

**Goal:** Build buzz and catch any remaining issues with broader (but still controlled) feedback.

### Phase 4: Pre-Order / Limited Release
Shift from preview to a controlled first wave of real sales.

**Actions:**
- Open pre-orders or a limited-quantity release to the early-access list before general availability
- Gather real purchase and fulfillment data, not just feedback
- Confirm the fulfillment/logistics chain holds up under real order volume before the full public push

**Release options:**
- Option A: Throttle access in waves (loyalty VIPs first, then the broader early-access list, then public)
- Option B: Open the limited release to the full early-access list at once, capped by actual stock

**Goal:** Validate demand and operations at real (if limited) scale before committing to the full public push.

### Phase 5: Full Launch
Open the doors.

**Actions:**
- Open the product/collection to all customers, in-store and online
- Announce general availability across all channels
- Ensure inventory is positioned to meet the demand the earlier phases generated — a full launch that sells out in hours because Phase 4 data wasn't fed back into buying/allocation is a preventable failure

**Launch touchpoints:**
- Customer emails/SMS
- On-site banners and PDP updates
- In-store signage and staff talking points (see `pos-marketing`)
- Social posts across platforms
- Press coverage and gift-guide/listicle inclusion going live (see `public-relations`, `directory-submissions`)

**Goal:** Maximum visibility and conversion at full availability.

---

## Influencer & Press Seeding (The Anchor Moment)

Retail doesn't have a single anchor platform the way software has a launch-directory ecosystem — the equivalent flagship moment is **coordinated influencer and press seeding**, timed to land right as the product goes live.

### Pros
- Reaches an audience already primed to trust the creator/outlet's recommendation
- Produces genuine unboxing/review content — a physical product is inherently more visual and shareable than software
- Can produce durable backlinks and citations (see `directory-submissions`) alongside the immediate traffic spike

### Cons
- Requires real product/sample budget and lead time — this isn't a same-day tactic
- Coverage timing is only partly controllable; an outlet's own editorial calendar decides when (or whether) it publishes
- A single influencer's post is a short-lived spike unless it's converted into an owned relationship (email/SMS capture, an affiliate code) at the moment of peak attention

### How to run it well

**Before launch day:**
1. Build the seeding list — creators and press genuinely relevant to the product's audience and occasion, not the biggest follower counts available (see `influencer-marketing` for vetting)
2. Send product under embargo with enough lead time for the recipient's own content/editorial calendar (often 2-4+ weeks, longer for print/major press)
3. Give a clear, specific ask: what to try, what makes it distinct, and the exact go-live date/time to publish around
4. Prepare launch-day assets: high-resolution photography, a clear one-line story, and a trackable link/discount code per partner

**On launch day:**
1. Treat it as an all-day, cross-channel event, not a single post
2. Respond to and amplify every piece of coverage/content as it lands
3. Direct owned-channel traffic (email/SMS) to the launch simultaneously, don't rely on borrowed channels alone
4. Monitor stock/fulfillment in real time — a seeded post driving traffic to a sold-out or broken PDP wastes the placement

**After launch day:**
1. Follow up with every creator/outlet that covered it — a relationship maintained past one post compounds into the next launch
2. Convert the traffic spike into owned relationships (email/SMS capture, loyalty enrollment) before it decays
3. Continue momentum with post-launch content pulled from the coverage itself (see `content-strategy`'s atomization checklist)

---

## Post-Launch Marketing

The launch isn't over when the announcement goes live. Now comes adoption, repeat purchase, and momentum work.

### Immediate Post-Launch Actions

**Educate new customers:**
Set up an automated post-purchase email/SMS sequence introducing use cases, care instructions, and complementary products (see `post-purchase-experience`).

**Reinforce the launch:**
Include the announcement in the regular email/SMS send cadence to catch people who missed it the first time.

**Differentiate against alternatives:**
Publish honest comparison/buying-guide pages (see `content-strategy` and `directory-submissions`) showing why this is the right choice for the right customer.

**Update the site:**
Add the new product/collection prominently across relevant collection and homepage placements, not just its own PDP.

**Offer a hands-on preview:**
For a considered-purchase category, a virtual try-on, size finder, or configurator (see `free-tools`) lets a hesitant visitor de-risk the decision before buying.

### Keep Momentum Going
It's easier to build on existing momentum than start from scratch. Every touchpoint reinforces the launch.

---

## Ongoing Launch Strategy

Don't rely on a single launch event. Regular drops, restocks, and seasonal collections sustain engagement.

### How to Prioritize What to Announce

Use this matrix to decide how much marketing each release deserves:

**Major releases** (a new collection, a flagship product, entering a new category):
- Full campaign across multiple channels
- Email/SMS, in-store signage, social, influencer/press seeding
- Maximize exposure

**Medium releases** (a new colorway/variant, a notable restock, a seasonal refresh):
- Targeted announcement
- Email/SMS to relevant segments, on-site banner
- Don't need full fanfare

**Minor releases** (a small assortment tweak, a routine restock):
- Product-page update and a mention in the regular send
- Signal that the range is actively refreshed
- Don't dominate marketing

### Announcement Tactics

**Space out releases:**
Instead of shipping every SKU at once, stagger announcements to maintain momentum across the season.

**Reuse high-performing tactics:**
If a previous drop's seeding/creator mix resonated, apply those insights to future releases.

**Keep engaging:**
Continue using email, SMS, and social to highlight new arrivals and restocks.

**Signal active development:**
Even small "new arrivals" updates remind customers the brand is actively refreshing. This builds retention and word-of-mouth — customers feel confident there's always something new worth checking back for.

---

## Launch Checklist

### Pre-Launch
- [ ] Landing/collection page with clear value proposition
- [ ] Email/SMS capture for early access
- [ ] Early-access/waitlist list built (loyalty VIPs prioritized)
- [ ] Owned channels established (email/SMS, content, loyalty program)
- [ ] Rented channel presence (social profiles optimized for the drop)
- [ ] Borrowed channel opportunities identified (influencers, press) and seeding sent with lead time
- [ ] Inventory and fulfillment confirmed ready for the launch-day demand estimate
- [ ] Launch assets created (photography, video, unboxing-ready packaging)
- [ ] Post-purchase flow ready
- [ ] Analytics/tracking in place (UTM per channel, per partner)

### Launch Day
- [ ] Announcement email/SMS to list
- [ ] Content/blog piece published
- [ ] Social posts scheduled and posted
- [ ] Influencer/press coverage live or confirmed
- [ ] In-store signage and staff briefed (if applicable)
- [ ] Website banner/PDP updates active
- [ ] Team ready to monitor stock and respond to issues
- [ ] Monitor for fulfillment/stock issues in real time

### Post-Launch
- [ ] Post-purchase email/SMS sequence active
- [ ] Follow-up with engaged creators/press
- [ ] Regular send includes the announcement for anyone who missed it
- [ ] Comparison/buying-guide pages published
- [ ] Hands-on preview tool live if applicable (try-on, size finder)
- [ ] Gather and act on early customer feedback
- [ ] Plan the next drop/release

---

## Task-Specific Questions

1. What's launching? (New product, new collection, restock, seasonal drop)
2. What's the current audience size and engagement? (Email/SMS list, loyalty program, social following)
3. What owned channels exist? (List size, content hub, loyalty program)
4. What's the launch timeline, and is inventory/fulfillment actually confirmed for it?
5. Has a similar launch happened before? What worked/didn't work?
6. Is influencer/press seeding planned? What's the lead time and sample budget?

---

## Related Skills

- **new-store-launch**: For a physical-location opening — a different kind of launch with its own timeline
- **launch-project-management**: For coordinating a launch across multiple functions or markets — the workback schedule, RACI, and dependency mapping this skill's phases assume are already handled
- **product-lifecycle**: For what comes after this launch — transitions, phase-outs, and replacements later in the product's life
- **tentpole-campaign**: For a major brand campaign tied to a calendar/cultural moment rather than a new-product go-to-market
- **marketing-ideas**: For additional launch tactics
- **emails** / **sms**: For launch and post-purchase sequences
- **cro**: For optimizing launch landing pages
- **marketing-psychology**: For the psychology behind waitlists and exclusivity
- **influencer-marketing**: For vetting and managing the creator-seeding list
- **public-relations**: For press embargo mechanics and media-list building
- **directory-submissions**: For gift-guide/listicle inclusion timed to a launch
- **loyalty**: For giving loyalty VIPs early access ahead of the public release
- **content-strategy**: For comparison/buying-guide pages and atomizing launch-day coverage
- **free-tools**: For a hands-on preview tool (try-on, size finder, configurator) for a considered-purchase launch
- **sales-enablement**: For launch sell-in collateral if the launch also involves trade/wholesale accounts
- **media-plan**: For sizing the reach/frequency goal and sequencing paid media across channels for a launch big enough to need coordinated media weight
