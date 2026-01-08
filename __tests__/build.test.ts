/**
 * Build and Type Check Tests
 * Validates TypeScript compilation and Next.js build
 */

import { execSync } from 'child_process'
import * as fs from 'fs'
import * as path from 'path'

const ROOT_DIR = path.join(__dirname, '..')

describe('TypeScript Compilation', () => {
    it('should pass TypeScript type checking', () => {
        // This test runs tsc --noEmit to check types without building
        try {
            execSync('npx tsc --noEmit', { cwd: ROOT_DIR, encoding: 'utf-8', stdio: 'pipe' })
        } catch (error: unknown) {
            const typedError = error as { stdout?: string; stderr?: string }
            // If there's an error, fail with the output
            console.error('TypeScript errors:', typedError?.stdout || typedError?.stderr)
            throw new Error('TypeScript type checking failed')
        }
    }, 60000) // Allow 60 seconds for type checking
})

describe('Required Files Exist', () => {
    const requiredFiles = [
        'package.json',
        'tsconfig.json',
        'next.config.mjs',
        'tailwind.config.js',
        'app/layout.tsx',
        'app/page.tsx',
        'lib/metadata.ts',
        'app/sitemap.ts',
        'app/robots.ts',
    ]

    requiredFiles.forEach((file) => {
        it(`should have ${file}`, () => {
            const filePath = path.join(ROOT_DIR, file)
            expect(fs.existsSync(filePath)).toBe(true)
        })
    })
})

describe('SEO Pages Exist', () => {
    const seoPages = [
        // Core pages
        'app/about/page.tsx',
        'app/contact/page.tsx',
        'app/sports/page.tsx',

        // Sport-specific pages
        'app/cricket-lanes/page.tsx',
        'app/badminton-courts/page.tsx',
        'app/soccer-fields/page.tsx',
        'app/dodgeball-courts/page.tsx',

        // Service pages
        'app/memberships/page.tsx',
        'app/rentals/page.tsx',
        'app/academy/page.tsx',
        'app/events/page.tsx',

        // City landing pages
        'app/areas-we-serve/page.tsx',
        'app/areas-we-serve/dallas/page.tsx',
        'app/areas-we-serve/arlington/page.tsx',
        'app/areas-we-serve/plano/page.tsx',
        'app/areas-we-serve/irving/page.tsx',
        'app/areas-we-serve/frisco/page.tsx',

        // Blog pages
        'app/blog/page.tsx',
        'app/blog/indoor-cricket-guide-dfw/page.tsx',
        'app/blog/badminton-fitness-benefits/page.tsx',
    ]

    seoPages.forEach((page) => {
        it(`should have SEO page: ${page}`, () => {
            const filePath = path.join(ROOT_DIR, page)
            expect(fs.existsSync(filePath)).toBe(true)
        })
    })
})

describe('Component Files Exist', () => {
    const components = [
        'components/ui/RelatedPages.tsx',
        'components/home/HomeIntro.tsx',
        'components/Navbar.tsx',
        'components/Footer.tsx',
    ]

    components.forEach((component) => {
        it(`should have component: ${component}`, () => {
            const filePath = path.join(ROOT_DIR, component)
            expect(fs.existsSync(filePath)).toBe(true)
        })
    })
})

describe('Environment Configuration', () => {
    it('should have .env.example file', () => {
        const envExample = path.join(ROOT_DIR, '.env.example')
        expect(fs.existsSync(envExample)).toBe(true)
    })

    it('should have gitignore', () => {
        const gitignore = path.join(ROOT_DIR, '.gitignore')
        expect(fs.existsSync(gitignore)).toBe(true)
    })
})

describe('Package.json Scripts', () => {
    let packageJson: { scripts?: Record<string, string> }

    beforeAll(() => {
        const packagePath = path.join(ROOT_DIR, 'package.json')
        packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf-8'))
    })

    it('should have dev script', () => {
        expect(packageJson.scripts?.dev).toBeDefined()
    })

    it('should have build script', () => {
        expect(packageJson.scripts?.build).toBeDefined()
    })

    it('should have start script', () => {
        expect(packageJson.scripts?.start).toBeDefined()
    })

    it('should have lint script', () => {
        expect(packageJson.scripts?.lint).toBeDefined()
    })

    it('should have test script', () => {
        expect(packageJson.scripts?.test).toBeDefined()
    })
})
