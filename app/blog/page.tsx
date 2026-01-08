import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema } from '@/lib/metadata'
import Link from 'next/link'
import { Calendar, ArrowRight, Clock, Tag } from 'lucide-react'

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

// Placeholder blog posts - in a real implementation, these would come from a CMS or markdown files
const featuredPosts = [
    {
        title: 'Complete Guide to Indoor Cricket in Dallas-Fort Worth',
        slug: 'indoor-cricket-guide-dfw',
        excerpt: 'Everything you need to know about indoor cricket in the DFW area. From beginner basics to advanced techniques.',
        category: 'Cricket',
        date: '2026-01-15',
        readTime: '8 min read',
        featured: true,
    },
    {
        title: '10 Benefits of Playing Badminton for Fitness',
        slug: 'badminton-fitness-benefits',
        excerpt: 'Discover why badminton is one of the best full-body workouts you can do indoors.',
        category: 'Badminton',
        date: '2026-01-10',
        readTime: '5 min read',
        featured: true,
    },
    {
        title: 'Youth Sports Programs in Fort Worth: Parent Guide',
        slug: 'youth-sports-programs-fort-worth',
        excerpt: 'A comprehensive guide for parents looking to enroll their children in youth sports programs.',
        category: 'Youth Sports',
        date: '2026-01-05',
        readTime: '6 min read',
        featured: false,
    },
    {
        title: 'Corporate Team Building: Why Dodgeball Works',
        slug: 'corporate-team-building-dodgeball',
        excerpt: 'How dodgeball has become the go-to activity for corporate team building events.',
        category: 'Events',
        date: '2026-01-01',
        readTime: '4 min read',
        featured: false,
    },
]

const categories = ['All', 'Cricket', 'Badminton', 'Soccer', 'Dodgeball', 'Youth Sports', 'Events', 'Tips & Tricks']

export default function BlogPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
    ])

    return (
        <div className="bg-white dark:bg-[#020408] min-h-screen transition-colors duration-300">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            {/* Hero Section */}
            <section className="py-24 bg-gradient-to-b from-dfw-navy to-[#0a1628]">
                <div className="container mx-auto px-4 text-center">
                    <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold text-white uppercase tracking-widest mb-6">
                        <Tag size={14} className="text-dfw-red" /> Blog
                    </span>
                    <h1 className="text-4xl md:text-6xl font-header font-bold text-white uppercase mb-6">
                        Sports Tips & Insights
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Expert guides, training tips, and news from DFW Indoor Sports.
                        Learn how to improve your game and stay updated.
                    </p>
                </div>
            </section>

            {/* Categories */}
            <section className="py-8 bg-gray-50 dark:bg-[#0a111f] border-b border-gray-100 dark:border-white/10">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-colors ${category === 'All'
                                        ? 'bg-dfw-red text-white'
                                        : 'bg-white dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-dfw-red hover:text-white'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Posts */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-8">
                        Featured Articles
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {featuredPosts.filter(p => p.featured).map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group bg-gray-100 dark:bg-white/5 rounded-xl overflow-hidden hover:shadow-xl transition-all"
                            >
                                <div className="aspect-video bg-gradient-to-br from-dfw-navy to-dfw-red/50 flex items-center justify-center">
                                    <span className="text-6xl opacity-50">📰</span>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="bg-dfw-red/10 text-dfw-red px-2 py-1 rounded text-xs font-bold uppercase">
                                            {post.category}
                                        </span>
                                        <span className="flex items-center gap-1 text-gray-400 text-xs">
                                            <Clock size={12} /> {post.readTime}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-dfw-navy dark:text-white group-hover:text-dfw-red transition-colors mb-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="flex items-center gap-1 text-gray-400 text-xs">
                                            <Calendar size={12} /> {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </span>
                                        <span className="flex items-center gap-1 text-dfw-red text-sm font-bold uppercase group-hover:gap-2 transition-all">
                                            Read More <ArrowRight size={14} />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Posts */}
            <section className="py-16 bg-gray-50 dark:bg-[#0a111f]">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-8">
                        Latest Posts
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredPosts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-lg p-6 hover:shadow-lg hover:border-dfw-red/30 transition-all"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="bg-dfw-red/10 text-dfw-red px-2 py-1 rounded text-xs font-bold uppercase">
                                        {post.category}
                                    </span>
                                    <span className="flex items-center gap-1 text-gray-400 text-xs">
                                        <Clock size={12} /> {post.readTime}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-dfw-navy dark:text-white group-hover:text-dfw-red transition-colors mb-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">
                                    {post.excerpt}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-16 bg-dfw-navy">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-header font-bold text-white uppercase mb-4">
                        Stay Updated
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                        Subscribe to our newsletter for the latest sports tips, facility updates, and exclusive member offers.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder:text-gray-400 flex-1"
                        />
                        <button className="bg-dfw-red text-white px-6 py-3 rounded font-bold uppercase text-sm hover:bg-red-700 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
