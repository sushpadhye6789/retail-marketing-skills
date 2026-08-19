# Amazon Ads (Amazon Advertising API)

Amazon's API for Sponsored Products, Sponsored Brands, and Sponsored Display — the flagship retail media network covered in the `retail-media` skill. Distinct from Amazon's Selling Partner API (listings/inventory) and from Amazon DSP (programmatic, off-Amazon reach).

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Amazon Advertising API v3 (Sponsored Products/Brands/Display) |
| MCP | - | Not available as a dedicated MCP server at time of writing — verify current availability |
| CLI | [✓](../clis/amazon-ads.js) | Zero-dependency Node script, this repo |
| SDK | ✓ | Official SDKs for several languages |

## Authentication

- **Type**: OAuth 2.0 via Login with Amazon (LWA) — a refresh token exchanged for a short-lived access token
- **Headers**:
  - `Authorization: Bearer {access_token}`
  - `Amazon-Advertising-API-ClientId: {client_id}`
  - `Amazon-Advertising-API-Scope: {profile_id}` — required on nearly every call; a seller/vendor account can have multiple advertising profiles (one per marketplace), and the wrong profile ID silently returns the wrong account's data rather than an error
- **Base URL**: region-specific (North America, Europe, Far East each have a distinct endpoint) — confirm the correct regional base URL for the account before building requests

**This API has real onboarding friction**: registering an application, getting it approved for advertising API access, and exchanging the initial refresh token all happen outside a single API call — budget lead time before assuming same-day integration, the same caveat that applies to the Google Business Profile API above.

## Common Agent Operations

### List advertising profiles

```bash
GET https://advertising-api.amazon.com/v2/profiles
```

### List Sponsored Products campaigns

```bash
GET https://advertising-api.amazon.com/sp/campaigns
Amazon-Advertising-API-Scope: {profile_id}
```

### Get campaign performance (report)

Reports are asynchronous — request one, poll for completion, then download:

```bash
POST https://advertising-api.amazon.com/reporting/reports

{
  "name": "SP campaign report",
  "startDate": "2026-08-01",
  "endDate": "2026-08-19",
  "configuration": {
    "adProduct": "SPONSORED_PRODUCTS",
    "groupBy": ["campaign"],
    "columns": ["campaignId", "impressions", "clicks", "cost", "sales14d"],
    "reportTypeId": "spCampaigns",
    "timeUnit": "DAILY",
    "format": "GZIP_JSON"
  }
}
```

```bash
GET https://advertising-api.amazon.com/reporting/reports/{reportId}
```

### Update a campaign's budget or bid

```bash
PUT https://advertising-api.amazon.com/sp/campaigns

{
  "campaignId": "...",
  "budget": { "budget": 50, "budgetType": "DAILY" }
}
```

### List keywords for a campaign

```bash
GET https://advertising-api.amazon.com/sp/keywords?campaignIdFilter={campaignId}
```

## Key Data for This Repo's Skills

- **Report `sales14d` and `attributedConversions14d`-style fields** are on-platform attributed sales — `retail-media`'s Measurement section explicitly cautions these aren't automatically incremental; treat them as the starting signal, not the final read.
- **Campaign structure by custom label** — if `product-feed` has set margin-tier or bestseller custom labels, mirror that structure in campaign/ad-group organization here rather than a flat, unsegmented campaign.
- **Profile ID scoping** — always confirm which marketplace's profile a report or campaign call is scoped to before reporting numbers; a multi-marketplace seller pulling the wrong profile silently under- or over-reports performance.

## When to Use

- Pulling Sponsored Products/Brands/Display performance for `retail-media`'s Measurement section
- Bulk bid/budget adjustments across a large keyword or campaign set
- Checking Buy Box-adjacent signals (via the Selling Partner API, a separate but related integration) before scaling ad spend on a listing at risk of losing it

## Rate Limits

Rate limits are enforced per profile and per endpoint category; reporting endpoints are asynchronous specifically to handle large report generation without blocking on rate limits — always poll rather than retrying the report-creation call.

## Relevant Skills

- retail-media
- product-feed
- attribution
- budget-allocation
