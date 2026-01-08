import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema } from '@/lib/metadata'
import { MapPin, ArrowRight } from 'lucide-react'
import BlogHero from '@/components/blog/BlogHero'
import BlogGrid from '@/components/blog/BlogGrid'

export const metadata: Metadata = createPageMetadata({
    title: 'Blog | Indoor Sports Tips, News & Guides | DFW Indoor Sports',
    description: 'Learn about indoor cricket, badminton, soccer, and dodgeball. Tips, techniques, equipment guides, and news from DFW Indoor Sports in Fort Worth, Texas.',
    keywords: [
        'indoor sports blog',
        'cricket tips Fort Worth',
        'badminton guide Dallas',
        'sports news DFW',
        'indoor sports training tips',
    ],
    path: '/blog',
})

// Simulated CMS Data
const posts = [
    {
        title: 'Complete Guide to Indoor Cricket in Dallas-Fort Worth',
        slug: 'indoor-cricket-guide-dfw',
        excerpt: 'Everything you need to know about indoor cricket in the DFW area. From beginner basics to advanced techniques.',
        category: 'Cricket',
        date: 'Jan 15, 2026',
        readTime: '8 min',
        featured: true,
    },
    {
        title: '10 Benefits of Playing Badminton for Fitness',
        slug: 'badminton-fitness-benefits',
        excerpt: 'Discover why badminton is one of the best full-body workouts you can do indoors. Burn calories and improve agility.',
        category: 'Fitness',
        date: 'Jan 10, 2026',
        readTime: '5 min',
        featured: false,
    },
    {
        title: 'Youth Sports Programs in Fort Worth: Parent Guide',
        slug: 'youth-sports-programs-fort-worth',
        excerpt: 'A comprehensive guide for parents looking to enroll their children in youth sports programs. What to look for in a coach.',
        category: 'Youth Sports',
        date: 'Jan 05, 2026',
        readTime: '6 min',
        featured: false,
    },
    {
        title: 'Corporate Team Building: Why Dodgeball Works',
        slug: 'corporate-team-building-dodgeball',
        excerpt: 'How dodgeball has become the go-to activity for corporate team building events. Fun, fast, and inclusive.',
        category: 'Events',
        date: 'Jan 01, 2026',
        readTime: '4 min',
        featured: false,
    },
    {
        title: 'Understanding Indoor Soccer Rules vs Outdoor',
        slug: 'indoor-soccer-rules-explained',
        excerpt: 'The key differences between indoor (futsal-style) and outdoor soccer. Walls, ball types, and sub rules explained.',
        category: 'Soccer',
        date: 'Dec 25, 2025',
        readTime: '5 min',
        featured: false,
    }
]

export default function BlogIndexPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
    ])

    return (
        <div className="bg-[#020408] min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <BlogHero
                title="Sports Insights & News"
                description="Expert tips, training guides, and community stories from the premier indoor sports facility in DFW."
                category="The Blog"
                date="Updated Weekly"
                readTime="Latest"
                image="/images/hero/sports-action.webp"
            />

            <BlogGrid posts={posts} />

            {/* Newsletter Section */}
            <section className="py-24 bg-dfw-navy relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-dfw-red/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />

                <div className="container mx-auto px-4 text-center relative z-10">
                    <span className="text-dfw-red font-bold uppercase tracking-widest text-xs block mb-4">Stay in the Loop</span>
                    <h2 className="text-3xl md:text-5xl font-header font-bold text-white uppercase mb-6">
                        Get Pro Tips Weekly
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-xl mx-auto text-lg font-light">
                        Join 2,000+ DFW athletes receiving training drills, event announcements, and exclusive membership offers.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="px-6 py-4 rounded bg-white/5 border border-white/20 text-white placeholder:text-gray-500 focus:border-dfw-red focus:outline-none focus:ring-1 focus:ring-dfw-red flex-1 backdrop-blur-sm transition-all"
                        />
                        <button className="bg-dfw-red text-white px-8 py-4 rounded font-bold uppercase text-sm hover:bg-red-700 transition-colors shadow-lg hover:shadow-dfw-red/50">
                            Subscribe
                        </button>
                    </div>
                    <p className="text-gray-500 text-xs mt-6">
                        No spam. Unsubscribe anytime. View our <a href="/privacy" className="text-gray-400 underline hover:text-white">Privacy Policy</a>.
                    </p>
                </div>
            </section>
        </div>
    )
}
