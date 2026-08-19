# Smile.io

A hosted points, tiers, and referrals loyalty platform, commonly used on Shopify — one of the platforms the `loyalty` skill names as a starting option for a points or tiered program.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST Admin API for merchant/program data |
| MCP | - | Not available as a dedicated MCP server at time of writing — verify current availability |
| CLI | [✓](../clis/smile-io.js) | Zero-dependency Node script, this repo |
| SDK | - | No official SDK; REST only |

## Authentication

- **Type**: API key, issued per-program from the Smile.io merchant dashboard (Settings → API)
- **Header**: `Authorization: Bearer {api_key}`
- **Base URL**: `https://api.smile.io/v1/`

**Confirm the current auth flow and base URL directly in Smile.io's own developer documentation before integrating** — this repo has lower confidence in the exact current API surface here than in the major-platform APIs above (Google, Amazon); Smile.io's public API has historically been narrower than its dashboard functionality, and some operations may only be available through the dashboard UI itself, not the API.

## Common Agent Operations (verify against current docs)

### Get a customer's points balance

```bash
GET https://api.smile.io/v1/customers/{customer_id}/points
```

### List a customer's earned/redeemed activity

```bash
GET https://api.smile.io/v1/customers/{customer_id}/points/history
```

### Manually award points (e.g., a support-driven goodwill grant)

```bash
POST https://api.smile.io/v1/customers/{customer_id}/points/earn

{
  "amount": 100,
  "reason": "Customer service goodwill gesture"
}
```

### List available rewards

```bash
GET https://api.smile.io/v1/rewards
```

## Key Data for This Repo's Skills

- **Points balance and redemption rate** feed `loyalty`'s Measuring Success section directly — redemption rate is the metric that shows whether the program is delivering perceived value, not just accumulating unredeemed points.
- **Points-history/activity data** is the input for `loyalty`'s point-balance-reminder and expiring-points-nudge retention mechanics — pull inactive-but-enrolled members with a real balance before sending that touch, rather than blasting the full list.

## When to Use

- Pulling program-health metrics (enrollment, active member rate, redemption rate) for `loyalty`'s Measuring Success checklist
- Identifying inactive members with an unredeemed balance for a re-engagement send (see `emails`/`sms`)
- Manual point adjustments tied to a customer-service resolution

## Rate Limits

Not independently confirmed at time of writing — check current API documentation for the merchant plan tier in use before building a high-volume integration.

## Relevant Skills

- loyalty
- emails
- sms
- churn-prevention
