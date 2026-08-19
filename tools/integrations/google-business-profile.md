# Google Business Profile

Google's API for managing local business listings — the single highest-leverage local marketing asset (see the `local-marketing` skill). Covers profile data, posts, Q&A, and review management for owned or dealer-managed locations.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | My Business Business Information API + Account Management API + Q&A/Notifications APIs |
| MCP | - | Not available as a dedicated MCP server at time of writing — verify current availability |
| CLI | [✓](../clis/google-business-profile.js) | Zero-dependency Node script, this repo |
| SDK | ✓ | Official client libraries (Java, Python, Node, Go) via Google API client generators |

## Authentication

- **Type**: OAuth 2.0 (a Google Cloud project with the Business Profile APIs enabled, and a verified business account)
- **Header**: `Authorization: Bearer {access_token}`
- **Base URLs** (the product is split across several API surfaces — this is the most common source of integration confusion):
  - Account Management: `https://mybusinessaccountmanagement.googleapis.com/v1`
  - Business Information (listing data, locations): `https://mybusinessbusinessinformation.googleapis.com/v1`
  - Notifications/Verifications: separate dedicated endpoints
- API access requires approval from Google (the Business Profile APIs are not self-service like most Google Cloud APIs) — budget lead time for this before assuming same-day integration.

**Verify current endpoint paths and the access-request process against Google's own documentation before building against this** — this API surface has been restructured more than once (it was previously a single "Google My Business API"), and the exact resource names shift between versions.

## Common Agent Operations

### List accounts

```bash
GET https://mybusinessaccountmanagement.googleapis.com/v1/accounts
```

### List locations under an account

```bash
GET https://mybusinessbusinessinformation.googleapis.com/v1/{account_name}/locations
```

### Get a location's current profile data

```bash
GET https://mybusinessbusinessinformation.googleapis.com/v1/{location_name}?readMask=name,storefrontAddress,phoneNumbers,regularHours,categories,openInfo
```

### Update location attributes (hours, pickup/curbside, etc.)

```bash
PATCH https://mybusinessbusinessinformation.googleapis.com/v1/{location_name}?updateMask=regularHours,serviceArea

{
  "regularHours": { "..." : "..." }
}
```

### Create a local post (offers, events, updates)

```bash
POST https://mybusinessbusinessinformation.googleapis.com/v1/{location_name}/localPosts

{
  "languageCode": "en-US",
  "summary": "Spring Clearance — up to 40% off select styles",
  "topicType": "OFFER"
}
```

## Key Data for This Repo's Skills

- **NAP fields (Name, Address, Phone)** — `local-marketing`'s consistency discipline depends on these matching exactly across the profile, the site, and directories; pull the profile's current values before an audit rather than assuming they match what's on file internally.
- **Pickup/curbside/delivery attributes** — set explicitly if the location offers them; `pos-marketing`'s Omnichannel Fulfillment Signage section depends on a shopper being able to find this via search first.
- **Reviews** — read via the API for `local-marketing`'s review-response discipline and `customer-research`'s review-mining; never post a review yourself or programmatically incentivize one — see `compliance`.

## When to Use

- Auditing NAP consistency across many locations before a `local-marketing` engagement
- Bulk-updating hours/attributes for a seasonal change or a multi-location rollout
- Publishing local posts tied to a campaign (coordinate with `compound-marketing`'s Campaign Brief)
- Pulling review data for response-rate tracking or sentiment mining

## Rate Limits

Quota is per-project and tiered by verification/usage history — small integrations get a modest default quota; request an increase from Google before a bulk multi-location operation, not during one.

## Relevant Skills

- local-marketing
- pos-marketing
- customer-research
- compliance
