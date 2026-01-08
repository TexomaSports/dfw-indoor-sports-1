import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, generateArticleSchema } from '@/lib/metadata'
import Link from 'next/link'
import { ArrowRight, Trophy, Users, Shield, Star, Heart } from 'lucide-react'
import BlogHero from '@/components/blog/BlogHero'

export const metadata: Metadata = createPageMetadata({
    title: 'Youth Sports Programs in Fort Worth: A Parent\'s Guide (2026)',
    description: 'Find the best youth sports programs in DFW. Learn what to look for in coaching, facilities, and developmental pathways for cricket, soccer, and badminton.',
    keywords: [
        'youth sports Fort Worth',
        'kids cricket training Dallas',
        'indoor soccer for kids DFW',
        'badminton coaching for children',
        'youth athletic development',
    ],
    path: '/blog/youth-sports-programs-fort-worth',
})

export default function YouthSportsPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Youth Sports Guide', url: '/blog/youth-sports-programs-fort-worth' },
    ])

    const articleSchema = generateArticleSchema({
        title: 'Youth Sports Programs in Fort Worth: A Parent\'s Guide',
        description: 'Find the best youth sports programs in DFW. Learn what to look for in coaching and facilities.',
        publishedDate: '2026-01-05T10:00:00Z',
        modifiedDate: '2026-01-05T10:00:00Z',
        url: 'https://dfwindoorsports.com/blog/youth-sports-programs-fort-worth',
    })

    return (
        <article className="bg-white dark:bg-[#020408] min-h-screen transition-colors duration-300">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

            <BlogHero
                title="Youth Sports Programs in Fort Worth: A Parent's Guide"
                description="How to choose the right sports program for your child's development, confidence, and long-term love of the game."
                category="Youth Sports"
                date="Jan 05, 2026"
                readTime="6 min read"
                author="DFW Indoor Sports Team"
            />

            <div className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                            Choosing a sports program for your child is about more than just keeping them busy. It's about finding an environment where they build character, learn teamwork, and develop physical skills safely.
                        </p>

                        <h2 className="text-2xl font-bold text-dfw-navy dark:text-white mb-4">What to Look For</h2>
                        <ul className="space-y-4 mb-8">
                            {[
                                { title: "Qualified Coaching", desc: "Look for certified coaches who understand child development, not just the sport." },
                                { title: "Safe Facilities", desc: "Indoor, climate-controlled environments reduce risk of heat exhaustion and allow year-round consistency." },
                                { title: "Focus on Fundamentals", desc: "Programs should prioritize skill acquisition over winning at young ages." }
                            ].map((item, i) => (
                                <li key={i} className="bg-gray-50 dark:bg-white/5 p-4 rounded-lg">
                                    <strong className="block text-dfw-navy dark:text-white">{item.title}</strong>
                                    <span className="text-gray-600 dark:text-gray-400">{item.desc}</span>
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-2xl font-bold text-dfw-navy dark:text-white mb-4">Top Programs at DFW Indoor Sports</h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="border border-gray-200 dark:border-white/10 p-6 rounded-xl">
                                <h3 className="text-xl font-bold text-dfw-red mb-2">Youth Cricket Academy</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Ages 6-16. From holding the bat to advanced spin bowling techniques.</p>
                            </div>
                            <div className="border border-gray-200 dark:border-white/10 p-6 rounded-xl">
                                <h3 className="text-xl font-bold text-dfw-red mb-2">Junior Badminton</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Improve agility and coordination with our fast-paced badminton clinics.</p>
                            </div>
                        </div>

                        <div className="bg-dfw-navy text-white p-8 rounded-xl mt-12">
                            <h3 className="text-2xl font-bold mb-4">Enroll Your Child Today</h3>
                            <p className="mb-6 text-gray-300">Give your child the advantage of professional coaching in a world-class facility.</p>
                            <Link href="/academy" className="inline-flex items-center gap-2 bg-dfw-red text-white px-6 py-3 rounded font-bold uppercase hover:bg-red-700 transition-colors">
                                View Academy Schedule <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
