import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, generateArticleSchema } from '@/lib/metadata'
import Link from 'next/link'
import { ArrowRight, Trophy, Users, Shield, Star, Briefcase } from 'lucide-react'
import BlogHero from '@/components/blog/BlogHero'

export const metadata: Metadata = createPageMetadata({
    title: 'Corporate Team Building: Why Dodgeball Works (2026)',
    description: 'Boost team morale with indoor dodgeball. The perfect corporate event idea in DFW for engagement, stress relief, and fun.',
    keywords: [
        'corporate team building DFW',
        'dodgeball corporate events',
        'team bonding activities Fort Worth',
        'fun office outings Dallas',
    ],
    path: '/blog/corporate-team-building-dodgeball',
})

export default function CorporateDodgeballPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Corporate Dodgeball', url: '/blog/corporate-team-building-dodgeball' },
    ])

    const articleSchema = generateArticleSchema({
        title: 'Corporate Team Building: Why Dodgeball Works',
        description: 'Boost team morale with indoor dodgeball. The perfect corporate event idea in DFW.',
        publishedDate: '2026-01-01T10:00:00Z',
        modifiedDate: '2026-01-01T10:00:00Z',
        url: 'https://dfwindoorsports.com/blog/corporate-team-building-dodgeball',
    })

    return (
        <article className="bg-white dark:bg-[#020408] min-h-screen transition-colors duration-300">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

            <BlogHero
                title="Corporate Team Building: Why Dodgeball Works"
                description="Forget boring trust falls. Discover why high-energy dodgeball is the best way to break the ice and build stronger teams."
                category="Events"
                date="Jan 01, 2026"
                readTime="4 min read"
                author="DFW Indoor Sports Team"
            />

            <div className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                            The modern workplace can be stressful. Deadlines, meetings, and emails pile up. To build a resilient team, you occasionally need to step away from the screens and do something completely different.
                        </p>

                        <h2 className="text-2xl font-bold text-dfw-navy dark:text-white mb-4">Why Dodgeball?</h2>
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl text-center">
                                <Users className="mx-auto text-dfw-red mb-4" size={32} />
                                <h3 className="font-bold mb-2 text-dfw-navy dark:text-white">Inclusive</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Easy rules, no prior skill needed. Everyone can play.</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl text-center">
                                <Briefcase className="mx-auto text-dfw-red mb-4" size={32} />
                                <h3 className="font-bold mb-2 text-dfw-navy dark:text-white">Stress Relief</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Physically throwing (soft) objects is a great stress buster.</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl text-center">
                                <Star className="mx-auto text-dfw-red mb-4" size={32} />
                                <h3 className="font-bold mb-2 text-dfw-navy dark:text-white">Fun First</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Laughter is guaranteed, which bonds teams instantly.</p>
                            </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 mb-8">
                            At DFW Indoor Sports, we host dozens of corporate events every month. We provide the referees, the equipment, and even organize round-robin tournaments so you can focus on having fun.
                        </p>

                        <div className="bg-dfw-navy text-white p-8 rounded-xl mt-12">
                            <h3 className="text-2xl font-bold mb-4">Plan Your Next Company Outing</h3>
                            <p className="mb-6 text-gray-300">We offer custom packages including facility rental, equipment, and catering options.</p>
                            <Link href="/contact" className="inline-flex items-center gap-2 bg-dfw-red text-white px-6 py-3 rounded font-bold uppercase hover:bg-red-700 transition-colors">
                                Request Event Quote <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
