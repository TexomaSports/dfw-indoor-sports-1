/**
 * Schema Validation Tests
 * Tests all JSON-LD schema generation functions for correctness
 */

import {
    BUSINESS_INFO,
    generateLocalBusinessSchema,
    generateOrganizationSchema,
    generateBreadcrumbSchema,
    generateSportsActivitySchema,
    generateFAQSchema,
    generateServiceSchema,
    generateAggregateRatingSchema,
    generateEventSchema,
    generateArticleSchema,
} from '@/lib/metadata'

describe('BUSINESS_INFO constant', () => {
    it('should have all required fields', () => {
        expect(BUSINESS_INFO.name).toBe('DFW Indoor Sports')
        expect(BUSINESS_INFO.url).toBe('https://dfwindoorsports.com')
        expect(BUSINESS_INFO.address.street).toBe('16230 Three Wide Drive')
        expect(BUSINESS_INFO.address.city).toBe('Fort Worth')
        expect(BUSINESS_INFO.address.state).toBe('TX')
        expect(BUSINESS_INFO.address.zip).toBe('76177')
        expect(BUSINESS_INFO.contact.phone).toBe('(817) 938-0808')
        expect(BUSINESS_INFO.contact.email).toBe('info@dfwindoorsports.com')
    })

    it('should have valid geo coordinates', () => {
        expect(BUSINESS_INFO.geo.latitude).toBeCloseTo(33.0392, 2)
        expect(BUSINESS_INFO.geo.longitude).toBeCloseTo(-97.3281, 2)
    })
})

describe('generateLocalBusinessSchema', () => {
    const schema = generateLocalBusinessSchema()

    it('should have correct @context and @type', () => {
        expect(schema['@context']).toBe('https://schema.org')
        expect(schema['@type']).toBe('SportsActivityLocation')
    })

    it('should include required LocalBusiness properties', () => {
        expect(schema.name).toBe(BUSINESS_INFO.name)
        expect(schema.url).toBe(BUSINESS_INFO.url)
        expect(schema.telephone).toBe(BUSINESS_INFO.contact.phone)
        expect(schema.email).toBe(BUSINESS_INFO.contact.email)
    })

    it('should have properly formatted address', () => {
        expect(schema.address['@type']).toBe('PostalAddress')
        expect(schema.address.streetAddress).toBe(BUSINESS_INFO.address.street)
        expect(schema.address.addressLocality).toBe(BUSINESS_INFO.address.city)
        expect(schema.address.addressRegion).toBe(BUSINESS_INFO.address.state)
        expect(schema.address.postalCode).toBe(BUSINESS_INFO.address.zip)
    })

    it('should have geo coordinates', () => {
        expect(schema.geo['@type']).toBe('GeoCoordinates')
        expect(schema.geo.latitude).toBeDefined()
        expect(schema.geo.longitude).toBeDefined()
    })
})

describe('generateOrganizationSchema', () => {
    const schema = generateOrganizationSchema()

    it('should have correct @context and @type', () => {
        expect(schema['@context']).toBe('https://schema.org')
        expect(schema['@type']).toBe('Organization')
    })

    it('should include social media profiles', () => {
        expect(schema.sameAs).toContain(BUSINESS_INFO.social.facebook)
        expect(schema.sameAs).toContain(BUSINESS_INFO.social.instagram)
    })
})

describe('generateBreadcrumbSchema', () => {
    it('should generate valid breadcrumb list', () => {
        const items = [
            { name: 'Home', url: '/' },
            { name: 'About', url: '/about' },
        ]
        const schema = generateBreadcrumbSchema(items)

        expect(schema['@context']).toBe('https://schema.org')
        expect(schema['@type']).toBe('BreadcrumbList')
        expect(schema.itemListElement).toHaveLength(2)
    })

    it('should include correct position values', () => {
        const items = [
            { name: 'Home', url: '/' },
            { name: 'Sports', url: '/sports' },
            { name: 'Cricket', url: '/cricket-lanes' },
        ]
        const schema = generateBreadcrumbSchema(items)

        expect(schema.itemListElement[0].position).toBe(1)
        expect(schema.itemListElement[1].position).toBe(2)
        expect(schema.itemListElement[2].position).toBe(3)
    })

    it('should construct full URLs', () => {
        const items = [{ name: 'Home', url: '/' }]
        const schema = generateBreadcrumbSchema(items)

        expect(schema.itemListElement[0].item).toContain(BUSINESS_INFO.url)
    })
})

describe('generateSportsActivitySchema', () => {
    it('should generate valid SportsEvent schema', () => {
        // Function takes (sportName: string, description: string)
        const schema = generateSportsActivitySchema(
            'Indoor Cricket',
            'Professional cricket lanes'
        )

        expect(schema['@context']).toBe('https://schema.org')
        expect(schema['@type']).toBe('SportsEvent')
        expect(schema.name).toContain('Indoor Cricket')
    })
})

describe('generateFAQSchema', () => {
    it('should generate valid FAQPage schema', () => {
        const faqs = [
            { question: 'What are your hours?', answer: '5 AM to 11 PM daily' },
            { question: 'Do you offer memberships?', answer: 'Yes, starting at $70/month' },
        ]
        const schema = generateFAQSchema(faqs)

        expect(schema['@context']).toBe('https://schema.org')
        expect(schema['@type']).toBe('FAQPage')
        expect(schema.mainEntity).toHaveLength(2)
    })

    it('should format questions correctly', () => {
        const faqs = [{ question: 'Test question?', answer: 'Test answer.' }]
        const schema = generateFAQSchema(faqs)

        expect(schema.mainEntity[0]['@type']).toBe('Question')
        expect(schema.mainEntity[0].name).toBe('Test question?')
        expect(schema.mainEntity[0].acceptedAnswer['@type']).toBe('Answer')
        expect(schema.mainEntity[0].acceptedAnswer.text).toBe('Test answer.')
    })

    it('should handle empty FAQ array', () => {
        const schema = generateFAQSchema([])
        expect(schema.mainEntity).toHaveLength(0)
    })
})

describe('generateServiceSchema', () => {
    it('should generate valid Service schema', () => {
        const schema = generateServiceSchema({
            name: 'Court Rental',
            description: 'Hourly court rentals',
            price: '25',  // String as per actual implementation
        })

        expect(schema['@context']).toBe('https://schema.org')
        expect(schema['@type']).toBe('Service')
        expect(schema.name).toBe('Court Rental')
    })

    it('should include offers when price is provided', () => {
        const schema = generateServiceSchema({
            name: 'Court Rental',
            description: 'Hourly court rentals',
            price: '25',
        })

        expect(schema.offers).toBeDefined()
        expect(schema.offers?.price).toBe('25')
        expect(schema.offers?.priceCurrency).toBe('USD')
    })

    it('should include provider information', () => {
        const schema = generateServiceSchema({
            name: 'Academy',
            description: 'Training programs',
            price: '150',
        })

        expect(schema.provider['@type']).toBe('SportsActivityLocation')
        expect(schema.provider.name).toBe(BUSINESS_INFO.name)
    })
})

describe('generateAggregateRatingSchema', () => {
    it('should generate valid AggregateRating schema', () => {
        const schema = generateAggregateRatingSchema({
            ratingValue: 4.8,
            reviewCount: 50,
        })

        expect(schema['@context']).toBe('https://schema.org')
        expect(schema['@type']).toBe('LocalBusiness')
        expect(schema.aggregateRating['@type']).toBe('AggregateRating')
        expect(schema.aggregateRating.ratingValue).toBe(4.8)
        expect(schema.aggregateRating.reviewCount).toBe(50)
    })

    it('should include best and worst rating defaults', () => {
        const schema = generateAggregateRatingSchema({
            ratingValue: 5.0,
            reviewCount: 10,
        })
        expect(schema.aggregateRating.bestRating).toBe(5)
        expect(schema.aggregateRating.worstRating).toBe(1)
    })
})

describe('generateEventSchema', () => {
    it('should generate valid Event schema', () => {
        const schema = generateEventSchema({
            name: 'Cricket Tournament',
            description: 'Annual tournament',
            startDate: '2026-03-15T10:00:00',
            endDate: '2026-03-15T18:00:00',
        })

        expect(schema['@context']).toBe('https://schema.org')
        expect(schema['@type']).toBe('Event')
        expect(schema.name).toBe('Cricket Tournament')
        expect(schema.startDate).toBe('2026-03-15T10:00:00')
    })

    it('should include location information', () => {
        const schema = generateEventSchema({
            name: 'Event',
            description: 'Description',
            startDate: '2026-01-01',
            endDate: '2026-01-01',
        })

        expect(schema.location['@type']).toBe('Place')
        expect(schema.location.name).toBe(BUSINESS_INFO.name)
    })
})

describe('generateArticleSchema', () => {
    it('should generate valid Article schema', () => {
        const schema = generateArticleSchema({
            title: 'Cricket Guide',
            description: 'Complete guide to cricket',
            publishedDate: '2026-01-15T10:00:00Z',
            modifiedDate: '2026-01-15T10:00:00Z',
            url: 'https://dfwindoorsports.com/blog/cricket-guide',
        })

        expect(schema['@context']).toBe('https://schema.org')
        expect(schema['@type']).toBe('Article')
        expect(schema.headline).toBe('Cricket Guide')
        expect(schema.datePublished).toBe('2026-01-15T10:00:00Z')
    })

    it('should include publisher information', () => {
        const schema = generateArticleSchema({
            title: 'Test',
            description: 'Test',
            publishedDate: '2026-01-01',
            url: '/blog/test',
        })

        expect(schema.publisher['@type']).toBe('Organization')
        expect(schema.publisher.name).toBe(BUSINESS_INFO.name)
    })
})
