import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, generateArticleSchema } from '@/lib/metadata'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowRight, CheckCircle, MapPin, Phone, Star, AlertCircle, Lightbulb, Target } from 'lucide-react'
import BlogHero from '@/components/blog/BlogHero'

export const metadata: Metadata = createPageMetadata({
    title: 'Complete Guide to Indoor Cricket in Dallas-Fort Worth (2026)',
    description: 'Everything you need to know about indoor cricket in DFW: facilities, rules, equipment, costs, and where to play. Written by local cricket experts for beginners and experienced players.',
    keywords: [
        'indoor cricket Dallas Fort Worth',
        'indoor cricket DFW',
        'cricket practice facility Texas',
        'cricket nets near me Dallas',
        'where to play cricket Texas',
        'indoor cricket rules',
        'cricket training Dallas',
        'cricket lanes Fort Worth',
    ],
    path: '/blog/indoor-cricket-guide-dfw',
})

export default function IndoorCricketGuidePage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Indoor Cricket Guide', url: '/blog/indoor-cricket-guide-dfw' },
    ])

    const articleSchema = generateArticleSchema({
        title: 'Complete Guide to Indoor Cricket in Dallas-Fort Worth',
        description: 'Everything you need to know about indoor cricket in DFW: facilities, rules, equipment, costs, and where to play.',
        publishedDate: '2026-01-15T10:00:00Z',
        modifiedDate: '2026-01-15T10:00:00Z',
        url: 'https://dfwindoorsports.com/blog/indoor-cricket-guide-dfw',
    })

    return (
        <article className="bg-white dark:bg-[#020408] min-h-screen transition-colors duration-300">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

            <BlogHero
                title="Complete Guide to Indoor Cricket in Dallas-Fort Worth"
                description="Everything you need to know about playing, practicing, and improving your cricket game indoors in the DFW metroplex."
                category="Cricket"
                date="Jan 15, 2026"
                readTime="12 min read"
                author="DFW Indoor Sports Team"
            />

            {/* Table of Contents */}
            <nav className="py-8 bg-gray-50 dark:bg-[#0a111f] border-b border-gray-100 dark:border-white/10">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="font-bold text-dfw-navy dark:text-white uppercase text-sm mb-4">Table of Contents</h2>
                    <ol className="grid md:grid-cols-2 gap-2 text-sm">
                        <li><a href="#why-indoor" className="text-gray-600 dark:text-gray-400 hover:text-dfw-red transition-colors">1. Why Play Indoor Cricket in Texas?</a></li>
                        <li><a href="#how-it-works" className="text-gray-600 dark:text-gray-400 hover:text-dfw-red transition-colors">2. How Indoor Cricket Works</a></li>
                        <li><a href="#equipment" className="text-gray-600 dark:text-gray-400 hover:text-dfw-red transition-colors">3. Equipment You Need (and Don't)</a></li>
                        <li><a href="#costs" className="text-gray-600 dark:text-gray-400 hover:text-dfw-red transition-colors">4. Cost Breakdown</a></li>
                        <li><a href="#beginner-tips" className="text-gray-600 dark:text-gray-400 hover:text-dfw-red transition-colors">5. Beginner Tips from Local Coaches</a></li>
                        <li><a href="#advanced" className="text-gray-600 dark:text-gray-400 hover:text-dfw-red transition-colors">6. Advanced Training Techniques</a></li>
                        <li><a href="#where-to-play" className="text-gray-600 dark:text-gray-400 hover:text-dfw-red transition-colors">7. Where to Play in DFW</a></li>
                        <li><a href="#faq" className="text-gray-600 dark:text-gray-400 hover:text-dfw-red transition-colors">8. FAQ</a></li>
                    </ol>
                </div>
            </nav>

            {/* Article Content */}
            <div className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        {/* Section 1 */}
                        <section id="why-indoor" className="mb-16">
                            <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6 flex items-center gap-3">
                                <span className="w-10 h-10 bg-dfw-red rounded-full flex items-center justify-center text-white text-lg font-bold">1</span>
                                Why Play Indoor Cricket in Texas?
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Texas weather is unpredictable. One day it's 105°F with 90% humidity, the next it's a sudden thunderstorm.
                                For cricket players, this means canceled matches, uncomfortable practice sessions, and inconsistent training schedules.
                            </p>
                            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                                <div className="flex items-start gap-3">
                                    <Lightbulb className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                                    <div>
                                        <p className="font-bold text-dfw-navy dark:text-white mb-2">Key Insight</p>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            Professional teams worldwide use indoor nets year-round—not as a backup, but as their primary training method.
                                            The controlled environment allows focused practice without external variables.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-dfw-navy dark:text-white mb-4">Benefits of Indoor Cricket Training</h3>
                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                                {[
                                    { title: 'Year-Round Access', desc: 'Train in any weather, any season. No cancellations.' },
                                    { title: 'Consistent Conditions', desc: 'Same pitch, lighting, and temperature every session.' },
                                    { title: 'Focused Practice', desc: 'No chasing balls across a field. More reps in less time.' },
                                    { title: 'Video Analysis', desc: 'Stable environment for recording and reviewing technique.' },
                                    { title: 'Bowling Machines', desc: 'Face consistent deliveries at programmable speeds (40-90 mph).' },
                                    { title: 'Safety', desc: 'Net enclosures protect everyone—especially beginners.' },
                                ].map((benefit, idx) => (
                                    <div key={idx} className="flex items-start gap-3 bg-gray-50 dark:bg-white/5 p-4 rounded-lg">
                                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                                        <div>
                                            <p className="font-bold text-dfw-navy dark:text-white text-sm">{benefit.title}</p>
                                            <p className="text-gray-500 dark:text-gray-400 text-sm">{benefit.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section id="how-it-works" className="mb-16">
                            <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6 flex items-center gap-3">
                                <span className="w-10 h-10 bg-dfw-red rounded-full flex items-center justify-center text-white text-lg font-bold">2</span>
                                How Indoor Cricket Works
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Indoor cricket facilities typically offer <strong>individual lanes</strong> (also called "nets")
                                that are 30-40 feet long and 10-12 feet wide, enclosed by mesh netting on all sides.
                            </p>
                            <h3 className="text-xl font-bold text-dfw-navy dark:text-white mb-4">Lane Setup at Most Facilities</h3>
                            <div className="overflow-x-auto mb-6">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-dfw-navy text-white">
                                            <th className="p-3 text-left text-sm font-bold uppercase">Feature</th>
                                            <th className="p-3 text-left text-sm font-bold uppercase">Standard</th>
                                            <th className="p-3 text-left text-sm font-bold uppercase">Premium</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-600 dark:text-gray-400">
                                        <tr className="border-b border-gray-200 dark:border-white/10">
                                            <td className="p-3 font-medium">Lane Length</td>
                                            <td className="p-3">30 ft</td>
                                            <td className="p-3">40 ft (full pitch length)</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-white/10">
                                            <td className="p-3 font-medium">Bowling Machine</td>
                                            <td className="p-3">Basic (single speed)</td>
                                            <td className="p-3">Programmable (40-90 mph)</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-white/10">
                                            <td className="p-3 font-medium">Pitch Surface</td>
                                            <td className="p-3">Synthetic mat</td>
                                            <td className="p-3">Professional turf with bounce consistency</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Section 3 */}
                        <section id="equipment" className="mb-16">
                            <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6 flex items-center gap-3">
                                <span className="w-10 h-10 bg-dfw-red rounded-full flex items-center justify-center text-white text-lg font-bold">3</span>
                                Equipment You Need (and Don't)
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                                    <h4 className="font-bold text-green-700 dark:text-green-400 uppercase text-sm mb-4">✅ Bring Yourself</h4>
                                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                        <li>• Comfortable athletic clothing</li>
                                        <li>• Indoor athletic shoes (non-marking)</li>
                                        <li>• Water bottle</li>
                                        <li>• Your own bat (if you have one you prefer)</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl">
                                    <h4 className="font-bold text-gray-700 dark:text-gray-300 uppercase text-sm mb-4">🏟️ Available at Facility</h4>
                                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                        <li>• Bats (various sizes)</li>
                                        <li>• Helmets, pads, gloves</li>
                                        <li>• Cricket balls (leather and synthetic)</li>
                                        <li>• Bowling machine operation</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section id="costs" className="mb-16">
                            <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6 flex items-center gap-3">
                                <span className="w-10 h-10 bg-dfw-red rounded-full flex items-center justify-center text-white text-lg font-bold">4</span>
                                Cost Breakdown
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Pricing varies across DFW. Here's a quick guide:
                            </p>
                            <div className="grid md:grid-cols-3 gap-6 mb-6">
                                <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl text-center">
                                    <p className="font-bold text-xl text-dfw-navy dark:text-white mb-2">Drop-In</p>
                                    <p className="text-3xl font-bold text-dfw-red mb-2">$25-40</p>
                                    <p className="text-sm text-gray-500">per hour / per lane</p>
                                </div>
                                <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl text-center border-2 border-dfw-red/20">
                                    <p className="font-bold text-xl text-dfw-navy dark:text-white mb-2">Membership</p>
                                    <p className="text-3xl font-bold text-dfw-red mb-2">$70-150</p>
                                    <p className="text-sm text-gray-500">monthly / unlimited</p>
                                </div>
                                <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl text-center">
                                    <p className="font-bold text-xl text-dfw-navy dark:text-white mb-2">Coaching</p>
                                    <p className="text-3xl font-bold text-dfw-red mb-2">$50-100</p>
                                    <p className="text-sm text-gray-500">per hour / 1-on-1</p>
                                </div>
                            </div>
                        </section>

                        {/* Section 5 */}
                        <section id="beginner-tips" className="mb-16">
                            <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6 flex items-center gap-3">
                                <span className="w-10 h-10 bg-dfw-red rounded-full flex items-center justify-center text-white text-lg font-bold">5</span>
                                Beginner Tips
                            </h2>
                            <div className="space-y-4">
                                <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl">
                                    <p className="font-bold text-dfw-navy dark:text-white mb-2">Start Slow</p>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">Don't crank the machine to 90mph. Start at 40-50mph to build confidence and timing.</p>
                                </div>
                                <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl">
                                    <p className="font-bold text-dfw-navy dark:text-white mb-2">Focus on Technique</p>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">Indoor nets are perfect for drilling basics like the forward defense and straight drive. Use video to check your form.</p>
                                </div>
                            </div>
                        </section>

                        {/* Section 6 */}
                        <section id="advanced" className="mb-16">
                            <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6 flex items-center gap-3">
                                <span className="w-10 h-10 bg-dfw-red rounded-full flex items-center justify-center text-white text-lg font-bold">6</span>
                                Advanced Training
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                For serious players, try <strong>Scenario Practice</strong>. Set the machine to random lengths and visualize specific match situations (e.g., last 5 overs) to train decision making under pressure.
                            </p>
                        </section>

                        {/* Section 7 */}
                        <section id="where-to-play" className="mb-16">
                            <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6 flex items-center gap-3">
                                <span className="w-10 h-10 bg-dfw-red rounded-full flex items-center justify-center text-white text-lg font-bold">7</span>
                                Where to Play in DFW
                            </h2>
                            <div className="bg-gradient-to-br from-dfw-red/10 to-dfw-navy/10 border-2 border-dfw-red rounded-xl p-8 mb-8">
                                <div className="flex items-start gap-4">
                                    <div className="bg-dfw-red text-white px-3 py-1 rounded text-xs font-bold uppercase">Featured</div>
                                </div>
                                <h3 className="text-2xl font-bold text-dfw-navy dark:text-white mt-4 mb-4">DFW Indoor Sports</h3>
                                <div className="grid md:grid-cols-2 gap-6 text-sm">
                                    <div className="space-y-3">
                                        <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                            <MapPin size={16} className="text-dfw-red" /> 16230 Three Wide Drive, Fort Worth, TX 76177
                                        </p>
                                        <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                            <Phone size={16} className="text-dfw-red" /> (817) 938-0808
                                        </p>
                                        <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                            <Clock size={16} className="text-dfw-red" /> 5 AM - 11 PM, 7 days a week
                                        </p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-dfw-navy dark:text-white mb-2">Key Features:</p>
                                        <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                                            <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> 3 professional cricket lanes</li>
                                            <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Bowling machines included FREE</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-6 flex flex-wrap gap-4">
                                    <Link href="/cricket-lanes" className="bg-dfw-red text-white px-6 py-2 rounded font-bold uppercase text-sm hover:bg-red-700 transition-colors">
                                        View Cricket Lanes
                                    </Link>
                                </div>
                            </div>
                        </section>

                        {/* Section 8: FAQ */}
                        <section id="faq" className="mb-16">
                            <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6 flex items-center gap-3">
                                <span className="w-10 h-10 bg-dfw-red rounded-full flex items-center justify-center text-white text-lg font-bold">8</span>
                                FAQ
                            </h2>
                            <div className="space-y-6">
                                {[
                                    { q: "Can complete beginners use indoor cricket facilities?", a: "Absolutely. About 40% of new visitors have never played cricket before. Staff provide basic instruction." },
                                    { q: "How far in advance should I book?", a: "Weekday mornings usually have same-day availability. Weekend evenings should be booked 1-2 weeks ahead." },
                                    { q: "Is indoor cricket the same as playing outdoors?", a: "The fundamentals are identical, but indoor nets focus on batting and bowling technique." },
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl">
                                        <p className="font-bold text-dfw-navy dark:text-white mb-2">{item.q}</p>
                                        <p className="text-gray-600 dark:text-gray-400">{item.a}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Conclusion CTA */}
                        <section className="bg-dfw-navy text-white p-8 md:p-12 rounded-xl">
                            <h2 className="text-2xl md:text-3xl font-header font-bold uppercase mb-4">Ready to Start Playing?</h2>
                            <p className="text-gray-300 mb-6 max-w-2xl">
                                Whether you're a complete beginner or a seasoned player looking for year-round practice,
                                indoor cricket offers the consistency and focus you need to improve.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/cricket-lanes" className="bg-dfw-red text-white px-8 py-3 rounded font-bold uppercase text-sm hover:bg-red-700 transition-colors flex items-center gap-2">
                                    Book Cricket Lanes <ArrowRight size={16} />
                                </Link>
                                <Link href="/academy" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded font-bold uppercase text-sm hover:bg-white/10 transition-colors">
                                    Explore Coaching Programs
                                </Link>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </article>
    )
}
