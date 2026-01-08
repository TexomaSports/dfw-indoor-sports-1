import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, generateArticleSchema } from '@/lib/metadata'
import Link from 'next/link'
import { ArrowRight, BookOpen, Hash, Activity } from 'lucide-react'
import BlogHero from '@/components/blog/BlogHero'

export const metadata: Metadata = createPageMetadata({
    title: 'Indoor Soccer Rules vs Outdoor: Key Differences Explained (2026)',
    description: 'Understand the rules of indoor soccer (futsal style). Walls, ball types, substitution rules, and field dimensions explained for DFW players.',
    keywords: [
        'indoor soccer rules',
        'indoor vs outdoor soccer',
        'futsal rules',
        'soccer walls rules',
        'indoor soccer DFW',
    ],
    path: '/blog/indoor-soccer-rules-explained',
})

export default function IndoorSoccerRulesPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Indoor Soccer Rules', url: '/blog/indoor-soccer-rules-explained' },
    ])

    const articleSchema = generateArticleSchema({
        title: 'Indoor Soccer Rules vs Outdoor: Key Differences Explained',
        description: 'Understand the rules of indoor soccer (futsal style). Walls, ball types, substitution rules, and field dimensions explained.',
        publishedDate: '2025-12-25T10:00:00Z',
        modifiedDate: '2025-12-25T10:00:00Z',
        url: 'https://dfwindoorsports.com/blog/indoor-soccer-rules-explained',
    })

    return (
        <article className="bg-white dark:bg-[#020408] min-h-screen transition-colors duration-300">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

            <BlogHero
                title="Indoor Soccer Rules vs Outdoor: Key Differences Explained"
                description="Moving from the grass to the turf? Here are the 5 major rule changes you need to know before kickoff."
                category="Soccer"
                date="Dec 25, 2025"
                readTime="5 min read"
                author="DFW Indoor Sports Team"
            />

            <div className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                            Indoor soccer is faster, higher-scoring, and more intense than the outdoor game. If you're joining a league at DFW Indoor Sports, understanding these differences is crucial.
                        </p>

                        <div className="overflow-x-auto mb-8">
                            <table className="w-full border-collapse text-left">
                                <thead>
                                    <tr className="bg-dfw-navy text-white">
                                        <th className="p-4 rounded-tl-lg">Rule</th>
                                        <th className="p-4">Indoor Soccer</th>
                                        <th className="p-4 rounded-tr-lg">Outdoor Soccer</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    <tr className="border-b border-gray-200 dark:border-white/10">
                                        <td className="p-4 font-bold text-dfw-navy dark:text-white">Field</td>
                                        <td className="p-4 text-gray-600 dark:text-gray-400">Smaller, enclosed by walls</td>
                                        <td className="p-4 text-gray-600 dark:text-gray-400">Large, open field</td>
                                    </tr>
                                    <tr className="border-b border-gray-200 dark:border-white/10">
                                        <td className="p-4 font-bold text-dfw-navy dark:text-white">Players</td>
                                        <td className="p-4 text-gray-600 dark:text-gray-400">5v5 or 6v6</td>
                                        <td className="p-4 text-gray-600 dark:text-gray-400">11v11</td>
                                    </tr>
                                    <tr className="border-b border-gray-200 dark:border-white/10">
                                        <td className="p-4 font-bold text-dfw-navy dark:text-white">Offside</td>
                                        <td className="p-4 text-gray-600 dark:text-gray-400">No offside rule</td>
                                        <td className="p-4 text-gray-600 dark:text-gray-400">Offside enforced</td>
                                    </tr>
                                    <tr className="border-b border-gray-200 dark:border-white/10">
                                        <td className="p-4 font-bold text-dfw-navy dark:text-white">Subs</td>
                                        <td className="p-4 text-gray-600 dark:text-gray-400">Unlimited, on the fly</td>
                                        <td className="p-4 text-gray-600 dark:text-gray-400">Limited, play stoppage</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-2xl font-bold text-dfw-navy dark:text-white mb-4">Playing off the Walls</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            The most distinct feature of indoor soccer is the walls. You can use them to pass to yourself, get around defenders, or keep the ball in play. The ball is only "out" if it goes <em>over</em> the wall or hits the ceiling netting.
                        </p>

                        <div className="bg-dfw-navy text-white p-8 rounded-xl mt-12">
                            <h3 className="text-2xl font-bold mb-4">Join a League</h3>
                            <p className="mb-6 text-gray-300">We have men's, women's, and co-ed leagues starting every month.</p>
                            <Link href="/soccer" className="inline-flex items-center gap-2 bg-dfw-red text-white px-6 py-3 rounded font-bold uppercase hover:bg-red-700 transition-colors">
                                View Soccer Leagues <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
