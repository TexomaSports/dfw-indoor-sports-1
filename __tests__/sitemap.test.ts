/**
 * Sitemap Validation Tests
 * Tests sitemap configuration for completeness and correctness
 */

import sitemapFn from '@/app/sitemap'

describe('Sitemap Configuration', () => {
    let sitemap: ReturnType<typeof sitemapFn>

    beforeAll(() => {
        sitemap = sitemapFn()
    })

    it('should generate an array of sitemap entries', () => {
        expect(Array.isArray(sitemap)).toBe(true)
        expect(sitemap.length).toBeGreaterThan(0)
    })

    it('should include all critical pages', () => {
        const urls = sitemap.map((entry) => entry.url)

        // Core pages
        expect(urls).toContainEqual(expect.stringContaining('/'))
        expect(urls).toContainEqual(expect.stringContaining('/about'))
        expect(urls).toContainEqual(expect.stringContaining('/contact'))
        expect(urls).toContainEqual(expect.stringContaining('/sports'))

        // Sports pages
        expect(urls).toContainEqual(expect.stringContaining('/cricket-lanes'))
        expect(urls).toContainEqual(expect.stringContaining('/badminton-courts'))
        expect(urls).toContainEqual(expect.stringContaining('/soccer-fields'))
        expect(urls).toContainEqual(expect.stringContaining('/dodgeball-courts'))

        // Service pages
        expect(urls).toContainEqual(expect.stringContaining('/memberships'))
        expect(urls).toContainEqual(expect.stringContaining('/rentals'))
        expect(urls).toContainEqual(expect.stringContaining('/academy'))
        expect(urls).toContainEqual(expect.stringContaining('/events'))
    })

    it('should include all city landing pages', () => {
        const urls = sitemap.map((entry) => entry.url)

        expect(urls).toContainEqual(expect.stringContaining('/areas-we-serve'))
        expect(urls).toContainEqual(expect.stringContaining('/areas-we-serve/dallas'))
        expect(urls).toContainEqual(expect.stringContaining('/areas-we-serve/arlington'))
        expect(urls).toContainEqual(expect.stringContaining('/areas-we-serve/plano'))
        expect(urls).toContainEqual(expect.stringContaining('/areas-we-serve/irving'))
        expect(urls).toContainEqual(expect.stringContaining('/areas-we-serve/frisco'))
    })

    it('should include blog pages', () => {
        const urls = sitemap.map((entry) => entry.url)

        expect(urls).toContainEqual(expect.stringContaining('/blog'))
        expect(urls).toContainEqual(expect.stringContaining('/blog/indoor-cricket-guide-dfw'))
        expect(urls).toContainEqual(expect.stringContaining('/blog/badminton-fitness-benefits'))
    })

    it('should have valid URLs starting with https', () => {
        sitemap.forEach((entry) => {
            expect(entry.url).toMatch(/^https:\/\//)
        })
    })

    it('should have lastModified dates', () => {
        sitemap.forEach((entry) => {
            expect(entry.lastModified).toBeDefined()
        })
    })

    it('should have valid priority values between 0 and 1', () => {
        sitemap.forEach((entry) => {
            expect(entry.priority).toBeGreaterThanOrEqual(0)
            expect(entry.priority).toBeLessThanOrEqual(1)
        })
    })

    it('should have valid changeFrequency values', () => {
        const validFrequencies = ['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never']

        sitemap.forEach((entry) => {
            expect(validFrequencies).toContain(entry.changeFrequency)
        })
    })

    it('should prioritize homepage highest', () => {
        const homepage = sitemap.find((entry) => entry.url.endsWith('/') || entry.url.match(/dfwindoorsports\.com$/))
        const otherPages = sitemap.filter((entry) => entry !== homepage)

        if (homepage) {
            otherPages.forEach((page) => {
                expect(homepage.priority).toBeGreaterThanOrEqual(page.priority!)
            })
        }
    })

    it('should have unique URLs (no duplicates)', () => {
        const urls = sitemap.map((entry) => entry.url)
        const uniqueUrls = [...new Set(urls)]

        expect(urls.length).toBe(uniqueUrls.length)
    })
})
