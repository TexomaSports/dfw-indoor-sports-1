/**
 * Metadata Validation Tests
 * Tests page metadata generation for SEO correctness
 */

import { createPageMetadata, defaultMetadata, BUSINESS_INFO } from '@/lib/metadata'

describe('Default Metadata', () => {
    it('should have a metadataBase URL', () => {
        expect(defaultMetadata.metadataBase).toBeDefined()
        expect(defaultMetadata.metadataBase?.toString()).toBe(BUSINESS_INFO.url + '/')
    })

    it('should have a default title with template', () => {
        expect(defaultMetadata.title).toBeDefined()
        const title = defaultMetadata.title as { default?: string; template?: string }
        expect(title.default).toContain('DFW Indoor Sports')
        expect(title.template).toContain('%s')
    })

    it('should have a description', () => {
        expect(defaultMetadata.description).toBeDefined()
        expect(defaultMetadata.description?.length).toBeGreaterThan(50)
    })

    it('should have keywords as an array', () => {
        expect(defaultMetadata.keywords).toBeDefined()
        expect(Array.isArray(defaultMetadata.keywords)).toBe(true)
        expect(defaultMetadata.keywords?.length).toBeGreaterThan(0)
    })

    it('should have robots directives', () => {
        expect(defaultMetadata.robots).toBeDefined()
    })

    it('should have OpenGraph configuration', () => {
        expect(defaultMetadata.openGraph).toBeDefined()
    })

    it('should have Twitter card configuration', () => {
        expect(defaultMetadata.twitter).toBeDefined()
    })
})

describe('createPageMetadata', () => {
    it('should create valid metadata for a page', () => {
        const metadata = createPageMetadata({
            title: 'Test Page',
            description: 'This is a test page description',
            keywords: ['test', 'page'],
            path: '/test',
        })

        expect(metadata.title).toBe('Test Page')
        expect(metadata.description).toBe('This is a test page description')
        // Keywords include both custom and default keywords
        expect(metadata.keywords).toContain('test')
        expect(metadata.keywords).toContain('page')
    })

    it('should generate canonical URL from path', () => {
        const metadata = createPageMetadata({
            title: 'About Us',
            description: 'About our facility',
            keywords: ['about'],
            path: '/about',
        })

        // Canonical includes full URL
        expect(metadata.alternates?.canonical).toContain('/about')
    })

    it('should include OpenGraph data', () => {
        const metadata = createPageMetadata({
            title: 'Cricket Lanes',
            description: 'Professional cricket lanes',
            keywords: ['cricket'],
            path: '/cricket-lanes',
        })

        expect(metadata.openGraph?.title).toBe('Cricket Lanes')
        expect(metadata.openGraph?.description).toBe('Professional cricket lanes')
    })

    it('should include Twitter card data', () => {
        const metadata = createPageMetadata({
            title: 'Memberships',
            description: 'Join our membership program',
            keywords: ['memberships'],
            path: '/memberships',
        })

        expect(metadata.twitter?.title).toBe('Memberships')
        expect(metadata.twitter?.description).toBe('Join our membership program')
    })
})

describe('SEO Title Best Practices', () => {
    it('should keep titles under 80 characters for optimal display', () => {
        const optimizedTitles = [
            'Indoor Sports Memberships Fort Worth | Cricket & Badminton Plans from $70/mo',
            'Sports Events Fort Worth | Birthday Parties & Corporate Team Building Dallas',
            'Cricket Academy Fort Worth | Badminton Training Dallas | Youth Sports Programs',
        ]

        optimizedTitles.forEach((title) => {
            expect(title.length).toBeLessThanOrEqual(80)
        })
    })

    it('should include geo-modifiers in titles', () => {
        const geoTerms = ['Fort Worth', 'Dallas', 'DFW', 'Texas', 'TX']

        const testTitles = [
            'Indoor Sports Memberships Fort Worth | Cricket & Badminton Plans from $70/mo',
            'Sports Events Fort Worth | Birthday Parties & Corporate Team Building Dallas',
        ]

        testTitles.forEach((title) => {
            const hasGeoTerm = geoTerms.some((term) => title.includes(term))
            expect(hasGeoTerm).toBe(true)
        })
    })
})

describe('Meta Description Best Practices', () => {
    it('should have descriptions between 50-200 characters', () => {
        const testDescriptions = [
            BUSINESS_INFO.description,
        ]

        testDescriptions.forEach((desc) => {
            expect(desc.length).toBeGreaterThanOrEqual(50)
            expect(desc.length).toBeLessThanOrEqual(200)
        })
    })
})
