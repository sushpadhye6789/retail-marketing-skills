# Site Type Templates

Full page hierarchy templates with ASCII trees, URL maps, and navigation recommendations for common site types.

---

## Wholesale/B2B Portal Site

See `marketing-strategy` Section 16 for when this applies — a dedicated trade/wholesale ordering site alongside (or instead of) a consumer storefront.

### Page Hierarchy

```
Homepage (/)
├── Catalog (/catalog)
│   ├── Category A (/catalog/category-a)
│   │   └── [Product] (/catalog/category-a/product-slug)
│   └── Category B (/catalog/category-b)
├── Trade Pricing (/trade-pricing) — gated, see `paywalls`
├── Account (/account)
│   ├── Order History (/account/orders)
│   ├── Reorder (/account/reorder)
│   └── Account Details (/account/details)
├── Resources (/resources)
│   ├── Line Sheets (/resources/line-sheets)
│   ├── Brand Guidelines (/resources/brand-guidelines)
│   └── Marketing Assets (/resources/assets) — for co-op/MDF-funded materials, see `supplier-funded-marketing`
├── Apply for an Account (/apply) — new trade-account application, see `signup`
├── About (/about)
│   └── Contact (/contact)
├── Privacy (/privacy)
└── Terms (/terms)
```

### URL Map

| Page | URL | Nav Location | Priority |
|------|-----|-------------|----------|
| Homepage | `/` | Header (logo) | Critical |
| Catalog | `/catalog` | Header | Critical |
| Category pages | `/catalog/{category}` | Header dropdown | High |
| Trade pricing | `/trade-pricing` | Header (gated) | Critical |
| Account/order history | `/account` | Header (post-login) | Critical |
| Line sheets/resources | `/resources` | Header | High |
| Apply for an account | `/apply` | Header (CTA, pre-login) | Critical |
| About/contact | `/about` | Footer | Low |

### Navigation

**Header (pre-login)**: Catalog preview | Apply for an Account | Contact
**Header (post-login)**: Catalog | Trade Pricing | Account/Orders | Resources | [Reorder]

**Footer columns**:
- Ordering: Catalog, Trade Pricing, Reorder, Apply
- Resources: Line Sheets, Brand Guidelines, Marketing Assets
- Company: About, Contact
- Legal: Privacy, Terms

---

## Content / Blog Site

### Page Hierarchy

```
Homepage (/)
├── Blog (/blog)
│   ├── [Category: Topic A] (/blog/category/topic-a)
│   ├── [Category: Topic B] (/blog/category/topic-b)
│   ├── [Category: Topic C] (/blog/category/topic-c)
│   └── [Posts] (/blog/post-slug)
├── Newsletter (/newsletter)
├── Resources (/resources)
│   ├── Guides (/resources/guides)
│   │   └── [Guide] (/resources/guides/guide-slug)
│   └── Tools (/resources/tools)
│       └── [Tool] (/resources/tools/tool-slug)
├── About (/about)
├── Contact (/contact)
├── Privacy (/privacy)
└── Terms (/terms)
```

### URL Map

| Page | URL | Nav Location | Priority |
|------|-----|-------------|----------|
| Homepage | `/` | Header (logo) | Critical |
| Blog index | `/blog` | Header | High |
| Categories | `/blog/category/{slug}` | Header dropdown | Medium |
| Posts | `/blog/{slug}` | — | Medium |
| Newsletter | `/newsletter` | Header (CTA) | High |
| Guides | `/resources/guides` | Header | Medium |
| About | `/about` | Header | Low |

### Navigation

**Header (4 items + CTA)**: Blog | Resources | About | Contact | [Subscribe]

**Sidebar** (on blog): Categories, Popular Posts, Newsletter signup

---

## E-Commerce

### Page Hierarchy

```
Homepage (/)
├── Shop (/shop)
│   ├── Category A (/shop/category-a)
│   │   ├── Subcategory (/shop/category-a/subcategory)
│   │   │   └── [Product] (/shop/category-a/subcategory/product-slug)
│   │   └── [Product] (/shop/category-a/product-slug)
│   ├── Category B (/shop/category-b)
│   │   └── [Product] (/shop/category-b/product-slug)
│   └── Category C (/shop/category-c)
│       └── [Product] (/shop/category-c/product-slug)
├── Collections (/collections)
│   └── [Collection] (/collections/collection-slug)
├── Sale (/sale)
├── Blog (/blog)
│   └── [Posts] (/blog/post-slug)
├── About (/about)
│   └── Our Story (/about/our-story)
├── Help (/help)
│   ├── FAQ (/help/faq)
│   ├── Shipping (/help/shipping)
│   ├── Returns (/help/returns)
│   └── Contact (/contact)
├── Cart (/cart)
├── Account (/account)
├── Privacy (/privacy)
└── Terms (/terms)
```

### URL Map

| Page | URL | Nav Location | Priority |
|------|-----|-------------|----------|
| Homepage | `/` | Header (logo) | Critical |
| Shop | `/shop` | Header | Critical |
| Categories | `/shop/{category}` | Header mega menu | High |
| Products | `/shop/{category}/{product}` | — | High |
| Collections | `/collections/{slug}` | Header | Medium |
| Sale | `/sale` | Header (highlighted) | High |
| Cart | `/cart` | Header (icon) | Critical |
| Account | `/account` | Header (icon) | Medium |

### Navigation

**Header (5 items + cart/account)**: Shop (mega menu) | Collections | Sale | Blog | Help | [Cart icon] [Account icon]

**Mega menu under Shop**: Category columns with featured products/images

---

## Documentation Site

### Page Hierarchy

```
Docs Home (/docs)
├── Getting Started (/docs/getting-started)
│   ├── Installation (/docs/getting-started/installation)
│   ├── Quick Start (/docs/getting-started/quick-start)
│   └── Configuration (/docs/getting-started/configuration)
├── Guides (/docs/guides)
│   ├── Guide A (/docs/guides/guide-a)
│   ├── Guide B (/docs/guides/guide-b)
│   └── Guide C (/docs/guides/guide-c)
├── API Reference (/docs/api)
│   ├── Authentication (/docs/api/authentication)
│   ├── Endpoints (/docs/api/endpoints)
│   └── Webhooks (/docs/api/webhooks)
├── Examples (/docs/examples)
│   └── [Example] (/docs/examples/example-slug)
├── Changelog (/docs/changelog)
└── FAQ (/docs/faq)
```

### URL Map

| Page | URL | Nav Location | Priority |
|------|-----|-------------|----------|
| Docs home | `/docs` | Header | High |
| Getting Started | `/docs/getting-started` | Sidebar (top) | Critical |
| Guides | `/docs/guides` | Sidebar | High |
| API Reference | `/docs/api` | Sidebar | High |
| Changelog | `/docs/changelog` | Sidebar (bottom) | Low |

### Navigation

**Header**: Docs | API | Blog | Community | GitHub | [Dashboard]

**Sidebar** (persistent, left): Getting Started, Guides, API Reference, Examples, Changelog — with expandable subsections

**On-page**: Previous/Next navigation at bottom of each doc page

---

## Hybrid Ecommerce + Content

The most common real retail site type — a full storefront with an integrated content hub (buying guides, styling/usage content, brand storytelling) rather than a bare product catalog.

### Page Hierarchy

```
Homepage (/)
├── Shop (/shop)
│   ├── Category A (/shop/category-a)
│   │   └── [Product] (/shop/category-a/product-slug)
│   └── Category B (/shop/category-b)
├── Collections (/collections)
│   ├── By Occasion (/collections/occasion-slug)
│   └── Seasonal/Limited (/collections/seasonal-slug)
├── Blog (/blog)
│   ├── [Category] (/blog/category/slug)
│   └── [Posts] (/blog/post-slug)
├── Guides (/guides)
│   ├── Buying Guides (/guides/buying-guide-slug)
│   └── How-To/Care (/guides/care-slug)
├── About (/about)
│   ├── Our Story (/about/story)
│   ├── Sustainability (/about/sustainability) — see `compliance` before publishing sustainability claims
│   └── Contact (/contact)
├── Loyalty (/loyalty) — if a program exists, see `loyalty`
├── Privacy (/privacy)
└── Terms (/terms)
```

### Navigation

**Header (6 items + CTA)**: Shop | Collections | Guides | Blog | About | [Loyalty/Account] | [Cart]

Use mega menus for Shop (category list) and Collections (occasion/seasonal groupings) — see `visual-merchandising`'s spatial-layout logic for how this should mirror in-store category organization where relevant.

---

## Small Business / Local

### Page Hierarchy

```
Homepage (/)
├── Services (/services)
│   ├── Service A (/services/service-a)
│   ├── Service B (/services/service-b)
│   └── Service C (/services/service-c)
├── About (/about)
├── Testimonials (/testimonials)
├── Blog (/blog)
│   └── [Posts] (/blog/post-slug)
├── Contact (/contact)
├── Privacy (/privacy)
└── Terms (/terms)
```

### URL Map

| Page | URL | Nav Location | Priority |
|------|-----|-------------|----------|
| Homepage | `/` | Header (logo) | Critical |
| Services | `/services` | Header | High |
| Service pages | `/services/{slug}` | Header dropdown | High |
| About | `/about` | Header | Medium |
| Testimonials | `/testimonials` | Header | Medium |
| Blog | `/blog` | Header | Medium |
| Contact | `/contact` | Header (CTA) | High |

### Navigation

**Header (5 items + CTA)**: Services | About | Testimonials | Blog | [Contact Us]

Keep it simple. Small business sites should be flat (1-2 levels max). Every page should be reachable from the header.
