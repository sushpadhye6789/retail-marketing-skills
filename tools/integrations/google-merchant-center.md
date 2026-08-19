# Google Merchant Center (Content API for Shopping)

Google's API for managing the product feed that powers Shopping ads, free listings, and PMax — the data layer the `product-feed` skill covers. Lets an agent read/write product data programmatically instead of only through a file-based feed upload.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Content API for Shopping (`content/v2.1`) |
| MCP | - | Not available as a dedicated MCP server at time of writing — verify current availability |
| CLI | [✓](../clis/google-merchant-center.js) | Zero-dependency Node script, this repo |
| SDK | ✓ | Official client libraries via Google API client generators |

## Authentication

- **Type**: OAuth 2.0 or a service account with domain-wide delegation
- **Header**: `Authorization: Bearer {access_token}`
- **Base URL**: `https://shoppingcontent.googleapis.com/content/v2.1/{merchantId}/...`
- Requires a verified and claimed Merchant Center account (`merchantId`) — the same account used for the Shopping/PMax campaigns this feed powers, see `ads`.

**Verify current field requirements against Google's live documentation before finalizing feed logic** — required attributes and policy rules (image requirements, restricted categories) change over time; this repo's `product-feed` skill deliberately doesn't hardcode a fixed attribute list for the same reason.

## Common Agent Operations

### List products

```bash
GET https://shoppingcontent.googleapis.com/content/v2.1/{merchantId}/products?maxResults=250
```

### Get a single product

```bash
GET https://shoppingcontent.googleapis.com/content/v2.1/{merchantId}/products/{productId}
```

### Insert or update a product

```bash
POST https://shoppingcontent.googleapis.com/content/v2.1/{merchantId}/products

{
  "offerId": "sku-12345",
  "title": "Acme Wireless Earbuds — Bluetooth 5.3, 30hr Battery, Black",
  "description": "...",
  "link": "https://example.com/products/sku-12345",
  "imageLink": "https://example.com/images/sku-12345.jpg",
  "contentLanguage": "en",
  "targetCountry": "US",
  "channel": "online",
  "availability": "in stock",
  "price": { "value": "49.99", "currency": "USD" },
  "brand": "Acme",
  "gtin": "0123456789012"
}
```

### Delete a product

```bash
DELETE https://shoppingcontent.googleapis.com/content/v2.1/{merchantId}/products/{productId}
```

### Check product status (disapprovals, warnings)

```bash
GET https://shoppingcontent.googleapis.com/content/v2.1/{merchantId}/productstatuses/{productId}
```

### List account-level issues

```bash
GET https://shoppingcontent.googleapis.com/content/v2.1/{merchantId}/accountstatuses/{merchantId}
```

## Key Data for This Repo's Skills

- **`productstatuses`** is the direct programmatic equivalent of `product-feed`'s Troubleshooting Disapprovals workflow — pull this before manually digging through the Merchant Center UI.
- **`accountstatuses`** surfaces account-level suspensions, which `product-feed` flags as the item to check first, before any item-level fix.
- **Custom labels** (`customLabel0`-`customLabel4` fields on a product) are how `product-feed`'s Feed Rules & Supplemental Feeds segmentation (margin tier, bestseller, clearance flag) actually gets set programmatically.

## When to Use

- Bulk product updates (price/availability sync) faster than a scheduled file feed allows
- Pulling disapproval reasons at scale across a large catalog
- Setting custom labels for `ads`' campaign-structure segmentation
- Auditing feed completeness (missing GTIN, missing images) before a launch

## Rate Limits

Quota is per-project; the API supports batch requests (`products/custom/batch`, `productstatuses/custom/batch`) for bulk operations — prefer batching over one-call-per-product for a catalog past a few hundred SKUs.

## Relevant Skills

- product-feed
- ads
- schema
- price-elasticity
