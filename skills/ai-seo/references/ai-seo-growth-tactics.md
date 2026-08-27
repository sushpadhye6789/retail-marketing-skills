# White-Hat AI SEO Growth Tactics Reference

## Agentic Commerce & Transactional Product Schema

### MerchantReturnPolicy Schema
Implement structured data for return policies to improve AI understanding of purchase confidence:

```json
{
  "@context": "https://schema.org/",
  "@type": "MerchantReturnPolicy",
  "applicableCountry": "US",
  "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
  "merchantReturnDays": 30,
  "returnMethod": "https://schema.org/ReturnByMail",
  "returnFees": "https://schema.org/FreeReturn",
  "feesCurrency": "USD",
  "feesValue": 0,
  "returnShippingFeesAmount": 0,
  "returnShippingFeesCurrency": "USD"
}
```

### OfferShippingDetails Schema
Specify shipping information for transactional queries:

```json
{
  "@context": "https://schema.org/",
  "@type": "OfferShippingDetails",
  "shippingRate": {
    "@type": "MonetaryAmount",
    "value": 0,
    "currency": "USD"
  },
  "shippingDestination": [
    {
      "@type": "DefinedRegion",
      "addressCountry": "US",
      "addressRegion": ["CA", "NY", "TX"]
    }
  ],
  "deliveryTime": {
    "@type": "QuantitativeValue",
    "value": 2,
    "unitCode": "DAY",
    "maxValue": 5
  },
  "doesNotShip": false,
  "isFreeShipping": true
}
```

### Product Schema Enhancements for AI Shopping Agents
Add transactional elements that AI shopping agents prioritize:

```json
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Product Name",
  "image": [
    "https://example.com/photos/1x1/photo.jpg",
    "https://example.com/photos/4x3/photo.jpg"
  ],
  "description": "Product description",
  "sku": "SKU123",
  "brand": {
    "@type": "Brand",
    "name": "Brand Name"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://example.com/product",
    "priceCurrency": "USD",
    "price": 29.99,
    "priceValidUntil": "2023-12-31",
    "itemCondition": "https://schema.org/NewCondition",
    "availability": "https://schema.org/InStock",
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingRate": {
        "@type": "MonetaryAmount",
        "value": 0,
        "currency": "USD"
      },
      "shippingDestination": [
        {
          "@type": "DefinedRegion",
          "addressCountry": "US"
        }
      ],
      "deliveryTime": {
        "@type": "QuantitativeValue",
        "value": 2,
        "unitCode": "DAY",
        "maxValue": 5
      }
    }
  },
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": 4,
      "bestRating": 5
    },
    "author": {
      "@type": "Person",
      "name": "John Doe"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": 4.4,
    "reviewCount": 89
  }
}
```

## Google Merchant Center Feed Synchronization

### Feed Requirements for AI Overviews / Google AI Mode
Optimize your product feeds for maximum visibility in AI-generated shopping results:

#### Essential Feed Attributes
- **ID**: Unique, stable product identifier
- **title**: Clear, descriptive product title (max 150 characters)
- **description**: Detailed product description (max 5000 characters)
- **link**: Landing page URL
- **image_link**: High-quality product image URL
- **availability**: In stock, preorder, out of stock
- **price**: Current price with currency
- **brand**: Product brand name
- **gtin**: Global Trade Item Number (if applicable)
- **mpn**: Manufacturer Part Number (if applicable)

#### AI-Specific Enhancements
1. **Custom Labels for AI Segmentation**:
   - Use custom_label_0 for AI priority products
   - Use custom_label_1 for seasonal AI campaigns
   - Use custom_label_2 for high-margin AI targets

2. **Enhanced Product Types**:
   - Use Google's product taxonomy (more than 6,000 categories)
   - Add custom product types for better AI categorization
   - Example: "Home & Garden > Kitchen & Dining > Small Appliances > Coffee Makers"

3. **Promotional Integration**:
   - Include sale_price_effective_date for time-bound offers
   - Use promotion_id for AI-recognized promotions
   - Add excluded_destination for feed optimization

### Feed Sync Best Practices
1. **Update Frequency**: Daily refresh for AI visibility
2. **Error Monitoring**: <1% error rate threshold
3. **Data Quality**: Complete attributes for all products
4. **Image Quality**: Minimum 800x800 pixels, clear background
5. **Price Accuracy**: Match landing page price within 24 hours

## Entity SEO & Knowledge Graph Disambiguation

### SameAs Array Implementation
Connect your brand to authoritative sources for Knowledge Graph inclusion:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://example.com/#organization",
  "name": "Brand Name",
  "url": "https://example.com",
  "sameAs": [
    "https://en.wikipedia.org/wiki/Brand_Name",
    "https://www.wikidata.org/wiki/Q1234567",
    "https://www.linkedin.com/company/brand-name",
    "https://twitter.com/brandname",
    "https://www.facebook.com/brandname",
    "https://www.instagram.com/brandname"
  ],
  "logo": {
    "@type": "ImageObject",
    "url": "https://example.com/logo.png"
  },
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "+1-408-555-1212",
    "contactType": "Customer Service",
    "areaServed": "US"
  }]
}
```

### Knowledge Panel Optimization
Elements that trigger Knowledge Panel appearance:

1. **Corroborated Information**:
   - Consistent NAP (Name, Address, Phone) across web
   - Multiple authoritative sources confirming facts
   - Government or educational institution references

2. **Structured Data Coverage**:
   - Organization schema with comprehensive properties
   - LocalBusiness schema (if applicable)
   - WebSite schema with search action

3. **Brand Signals**:
   - Consistent brand naming across all touchpoints
   - Trademark registration visibility
   - Press coverage from reputable sources

### Entity Association Building
Strategies for strengthening entity connections:

1. **Co-occurrence Optimization**:
   - Brand name + category terms in same sentences
   - Brand appearance in relevant contexts
   - Semantic proximity to established entities

2. **Structured Relationships**:
   - founderOf relationships
   - subsidiaryOf relationships
   - brand relationships

3. **Content Strategy**:
   - Create content that defines your entity
   - Answer questions about your brand category
   - Provide authoritative information in your niche

## Topical Authority Clusters

### Semantic Hub-and-Spoke Model
Build topical authority through interconnected content:

#### Hub Content (Pillar Pages)
- Comprehensive guides covering broad topics
- Target high-volume, informational queries
- Link to all related spoke content
- Example: "The Complete Guide to Sustainable Fashion"

#### Spoke Content (Cluster Pages)
- Specific subtopics addressing long-tail queries
- Link back to hub and related spokes
- Target specific questions and use cases
- Examples:
  - "How to Build a Capsule Wardrobe"
  - "Eco-Friendly Fabric Guide"
  - "Sustainable Fashion Brands Under $100"

#### Internal Linking Structure
- Hub → All spokes (primary navigation)
- Spoke → Hub (contextual links)
- Spoke → Related spokes (thematic connections)
- Use descriptive, keyword-rich anchor text
- Maintain natural link distribution

### Content Depth & Breadth Metrics
Measure topical authority development:

1. **Coverage Score**:
   - Percentage of subtopics covered vs. gap analysis
   - Target: >80% coverage of topic taxonomy

2. **Depth Indicators**:
   - Average word count per content piece
   - Number of subsections per guide
   - Data points and examples per topic

3. **Internal Link Density**:
   - Links per 100 words of content
   - Link diversity (different target pages)
   - Click-through rate on internal links

### Query Fan-Out Optimization
Structure content for AI query expansion:

1. **Question-Based Formats**:
   - FAQ schema for common questions
   - How-to guides with clear steps
   - Comparison tables for evaluative queries

2. **Semantic Variations**:
   - Synonym inclusion in natural language
   - Related concept coverage
   - Contextual examples and use cases

3. **AI-Friendly Formatting**:
   - Clear hierarchical headings (H1-H3)
   - Bullet points for scannability
   - Short paragraphs (2-3 sentences)
   - Defined terms in context

## AI Citation Link-Building ("Surround Sound" Strategy)

### Reddit Engagement Tactics
Build citations in communities AI monitors:

1. **Value-First Participation**:
   - Answer questions in relevant subreddits
   - Share expertise without promotion
   - Build karma before linking

2. **Strategic Link Placement**:
   - Link to deep, valuable resources
   - Use link as supporting evidence
   - Contextual relevance is key

3. **Community-Specific Approaches**:
   - r/Fitness: Workout routines, form tips
   - r/SkincareAddiction: Ingredient explanations
   - r/BuyItForLife: Durability discussions
   - r/HomeImprovement: Technique guides

### Review Site Optimization
Maximize visibility in AI-cited review platforms:

1. **Profile Completion**:
   - Complete all profile fields
   - Add high-quality photos
   - Include business hours and location

2. **Review Generation**:
   - Post-purchase email sequence
   - In-package review request cards
   - Loyalty points for reviews

3. **Response Strategy**:
   - Respond to all reviews (positive and negative)
   - Address concerns professionally
   - Showcase customer service

### Media & Publication Strategies
Earn citations in outlets AI frequently references:

1. **Data-Driven Pitches**:
   - Original research or surveys
   - Proprietary data analysis
   - Trend forecasts with methodology

2. **Expert Commentary**:
   - Offer quotes on industry trends
   - Provide background for journalists
   - Be available for follow-up questions

3. **Content Syndication**:
   - Repurpose content for different platforms
   - Adapt format for audience preferences
   - Maintain core message consistency

### Link Quality Signals for AI
Characteristics of links AI values:

1. **Editorial Context**:
   - Links within substantive content
   - Natural, earned placements
   - Relevant surrounding text

2. **Domain Authority**:
   - Established publications
   - Educational institutions (.edu)
   - Government sites (.gov)
   - Industry associations

3. **Topical Relevance**:
   - Links from same-topic sources
   - Contextual appropriateness
   - Audience overlap

4. **Traffic & Engagement**:
   - Referring traffic quality
   - Engagement metrics on source
   - Audience demographics match

### Monitoring & Measurement
Track AI citation development:

1. **Brand Mention Tracking**:
   - Monitor for brand + keyword combinations
   - Track sentiment and context
   - Identify citation opportunities

2. **Referral Analysis**:
   - AI platform referral traffic
   - Engagement quality from AI sources
   - Conversion rates from AI citations

3. **Competitive Benchmarking**:
   - Share of voice in AI answers
   - Citation frequency vs. competitors
   - Content gap analysis

## Implementation Checklist

### Technical Implementation
- [ ] Implement MerchantReturnPolicy schema
- [ ] Add OfferShippingDetails to product pages
- [ ] Enhance Product schema with shipping details
- [ ] Verify sameAs array completeness
- [ ] Check Knowledge Panel eligibility

### Feed Optimization
- [ ] Audit Google Merchant Center feed quality
- [ ] Add custom labels for AI segmentation
- [ ] Enhance product types with Google taxonomy
- [ ] Implement promotional feed attributes
- [ ] Set up daily feed refresh schedule

### Content Strategy
- [ ] Develop hub-and-spoke content model
- [ ] Create comprehensive pillar pages
- [ ] Develop supporting cluster content
- [ ] Implement internal linking structure
- [ ] Optimize for question-based queries

### Outreach & Engagement
- [ ] Develop Reddit participation strategy
- [ ] Optimize review site profiles and responses
- [ ] Create expert commentary outreach plan
- [ ] Build media relations for data-driven pitches
- [ ] Establish citation monitoring process

### Measurement Framework
- [ ] Set up brand mention tracking
- [ ] Implement AI referral analytics
- [ ] Create topical authority scoring
- [ ] Establish quarterly audit process
- [ ] Develop competitive benchmarking reports