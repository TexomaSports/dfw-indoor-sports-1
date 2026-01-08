import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, generateArticleSchema } from '@/lib/metadata'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowRight, CheckCircle, MapPin, Phone, Star, AlertCircle, Lightbulb, Target } from 'lucide-react'

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

            {/* Hero Section */}
            <header className="py-20 bg-gradient-to-b from-dfw-navy to-[#0a1628]">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="flex items-center gap-3 mb-6">
                        <Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">← Back to Blog</Link>
                        <span className="text-gray-600">|</span>
                        <span className="bg-dfw-red/20 text-dfw-red px-3 py-1 rounded-full text-xs font-bold uppercase">Cricket</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-header font-bold text-white leading-tight mb-6">
                        Complete Guide to Indoor Cricket in Dallas-Fort Worth
                    </h1>
                    <p className="text-xl text-gray-300 mb-8">
                        Everything you need to know about playing, practicing, and improving your cricket game indoors in the DFW metroplex.
                    </p>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                        <span className="flex items-center gap-2"><User size={16} /> DFW Indoor Sports Team</span>
                        <span className="flex items-center gap-2"><Calendar size={16} /> January 15, 2026</span>
                        <span className="flex items-center gap-2"><Clock size={16} /> 12 min read</span>
                    </div>
                </div>
            </header>

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

                            <h3 className="text-xl font-bold text-dfw-navy dark:text-white mb-4">Who Benefits Most?</h3>
                            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                                <li className="flex items-start gap-3">
                                    <Target className="text-dfw-red flex-shrink-0 mt-1" size={18} />
                                    <span><strong>Serious batsmen:</strong> Face hundreds of deliveries per session to groove technique</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Target className="text-dfw-red flex-shrink-0 mt-1" size={18} />
                                    <span><strong>Bowlers working on action:</strong> Controlled environment to make technical changes</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Target className="text-dfw-red flex-shrink-0 mt-1" size={18} />
                                    <span><strong>Teams preparing for tournaments:</strong> Get everyone practice regardless of weather</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Target className="text-dfw-red flex-shrink-0 mt-1" size={18} />
                                    <span><strong>Beginners:</strong> Learn in a safer, less intimidating environment</span>
                                </li>
                            </ul>
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
                                        <tr className="border-b border-gray-200 dark:border-white/10">
                                            <td className="p-3 font-medium">Video Recording</td>
                                            <td className="p-3">Bring your own</td>
                                            <td className="p-3">Mounted camera stations</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-lg mb-6">
                                <div className="flex items-start gap-3">
                                    <AlertCircle className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                                    <div>
                                        <p className="font-bold text-dfw-navy dark:text-white mb-2">Pro Tip</p>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            When choosing a facility, ask if the bowling machine is <strong>included</strong> in the lane rental.
                                            Some places charge an extra $15-20/hour. At DFW Indoor Sports, it's always included free.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 3 */}
                        <section id="equipment" className="mb-16">
                            <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6 flex items-center gap-3">
                                <span className="w-10 h-10 bg-dfw-red rounded-full flex items-center justify-center text-white text-lg font-bold">3</span>
                                Equipment You Need (and Don't)
                            </h2>

                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                One of the biggest barriers for newcomers is thinking they need to buy expensive equipment.
                                Here's the truth about what you actually need:
                            </p>

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

                            <h3 className="text-xl font-bold text-dfw-navy dark:text-white mb-4">Equipment Investment Guide (If You Want Your Own)</h3>
                            <div className="overflow-x-auto mb-6">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-dfw-navy text-white">
                                            <th className="p-3 text-left text-sm font-bold uppercase">Item</th>
                                            <th className="p-3 text-left text-sm font-bold uppercase">Budget</th>
                                            <th className="p-3 text-left text-sm font-bold uppercase">Mid-Range</th>
                                            <th className="p-3 text-left text-sm font-bold uppercase">Premium</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-600 dark:text-gray-400">
                                        <tr className="border-b border-gray-200 dark:border-white/10">
                                            <td className="p-3 font-medium">Cricket Bat</td>
                                            <td className="p-3">$40-80</td>
                                            <td className="p-3">$100-200</td>
                                            <td className="p-3">$250-500+</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-white/10">
                                            <td className="p-3 font-medium">Batting Gloves</td>
                                            <td className="p-3">$20-40</td>
                                            <td className="p-3">$50-80</td>
                                            <td className="p-3">$100+</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-white/10">
                                            <td className="p-3 font-medium">Helmet</td>
                                            <td className="p-3">$30-50</td>
                                            <td className="p-3">$60-100</td>
                                            <td className="p-3">$150+</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-white/10">
                                            <td className="p-3 font-medium">Leg Pads</td>
                                            <td className="p-3">$30-50</td>
                                            <td className="p-3">$60-100</td>
                                            <td className="p-3">$150+</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section id="costs" className="mb-16">
                            <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6 flex items-center gap-3">
                                <span className="w-10 h-10 bg-dfw-red rounded-full flex items-center justify-center text-white text-lg font-bold">4</span>
                                Cost Breakdown: What to Expect in DFW
                            </h2>

                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Pricing varies across the Dallas-Fort Worth area. Here's what typical facilities charge:
                            </p>

                            <div className="bg-gradient-to-br from-dfw-navy to-[#0a1628] text-white p-8 rounded-xl mb-6">
                                <h3 className="font-bold uppercase text-lg mb-6">DFW Indoor Cricket Pricing Comparison</h3>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="text-center">
                                        <p className="text-gray-400 text-sm uppercase mb-2">Drop-In (Hourly)</p>
                                        <p className="text-4xl font-bold">$25-40</p>
                                        <p className="text-gray-400 text-xs mt-2">per hour, per lane</p>
                                    </div>
                                    <div className="text-center border-l border-r border-white/10 px-6">
                                        <p className="text-gray-400 text-sm uppercase mb-2">Monthly Membership</p>
                                        <p className="text-4xl font-bold">$70-150</p>
                                        <p className="text-gray-400 text-xs mt-2">unlimited access</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-gray-400 text-sm uppercase mb-2">Coaching Session</p>
                                        <p className="text-4xl font-bold">$50-100</p>
                                        <p className="text-gray-400 text-xs mt-2">per hour, 1-on-1</p>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-dfw-navy dark:text-white mb-4">When Membership Makes Sense</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                If you practice <strong>2+ times per month</strong>, membership typically pays for itself. Here's the math:
                            </p>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                                <li>• 4 drop-in sessions × $30/hr = <strong>$120/month</strong></li>
                                <li>• Membership = <strong>$70-85/month</strong></li>
                                <li>• <span className="text-green-600 font-bold">Savings: $35-50/month</span> (plus priority booking)</li>
                            </ul>
                        </section>

                        {/* Section 5 */}
                        <section id="beginner-tips" className="mb-16">
                            <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6 flex items-center gap-3">
                                <span className="w-10 h-10 bg-dfw-red rounded-full flex items-center justify-center text-white text-lg font-bold">5</span>
                                Beginner Tips from Local Coaches
                            </h2>

                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                We asked coaches at DFW-area cricket facilities what advice they give to beginners. Here's what they said:
                            </p>

                            <div className="space-y-6 mb-6">
                                {[
                                    {
                                        tip: "Start with the bowling machine at 40-50 mph",
                                        why: "Most beginners overestimate their ability to handle pace. Build timing before building speed.",
                                    },
                                    {
                                        tip: "Focus on 3 shots in your first month: front foot defense, back foot defense, and straight drive",
                                        why: "These foundational shots teach proper weight transfer and timing. Don't try to hit sixes on day one.",
                                    },
                                    {
                                        tip: "Book at least 2-hour sessions",
                                        why: "The first 30-45 minutes is just warming up and finding rhythm. Real improvement happens in hours 2+.",
                                    },
                                    {
                                        tip: "Record yourself from the side angle",
                                        why: "You can't feel what you're doing wrong. Video reveals problems with backlift, head position, and feet movement.",
                                    },
                                    {
                                        tip: "Practice with both leather and synthetic balls",
                                        why: "Leather teaches you to play with soft hands; synthetic builds confidence against pace.",
                                    },
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl">
                                        <p className="font-bold text-dfw-navy dark:text-white mb-2">"{item.tip}"</p>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm"><em>Why:</em> {item.why}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 6 */}
                        <section id="advanced" className="mb-16">
                            <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6 flex items-center gap-3">
                                <span className="w-10 h-10 bg-dfw-red rounded-full flex items-center justify-center text-white text-lg font-bold">6</span>
                                Advanced Training Techniques
                            </h2>

                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Once you've mastered the basics, here's how serious players use indoor nets to take their game to the next level:
                            </p>

                            <h3 className="text-xl font-bold text-dfw-navy dark:text-white mb-4">For Batsmen</h3>
                            <div className="space-y-4 mb-6">
                                <div className="border-l-4 border-dfw-red pl-4">
                                    <p className="font-bold text-dfw-navy dark:text-white">Scenario Practice</p>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                                        Set the bowling machine to random line/length. Practice playing 6 balls as if it's the last over
                                        needing 10 runs. This builds match-pressure decision making.
                                    </p>
                                </div>
                                <div className="border-l-4 border-dfw-red pl-4">
                                    <p className="font-bold text-dfw-navy dark:text-white">Targeted Weakness Work</p>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                                        Struggle with short balls? Set the machine to bowl only short, 50+ balls in a row.
                                        Repetition builds muscle memory faster than random variation.
                                    </p>
                                </div>
                                <div className="border-l-4 border-dfw-red pl-4">
                                    <p className="font-bold text-dfw-navy dark:text-white">Tired Training</p>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                                        Do a cardio session, then immediately face 30 balls. This simulates batting in the 40th over
                                        when you're physically tired but need to maintain technique.
                                    </p>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-dfw-navy dark:text-white mb-4">For Bowlers</h3>
                            <div className="space-y-4 mb-6">
                                <div className="border-l-4 border-blue-500 pl-4">
                                    <p className="font-bold text-dfw-navy dark:text-white">Target Practice</p>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                                        Place cones or markers on a specific line (e.g., off stump). Aim for 20 consecutive balls
                                        hitting the target zone before moving to a new target.
                                    </p>
                                </div>
                                <div className="border-l-4 border-blue-500 pl-4">
                                    <p className="font-bold text-dfw-navy dark:text-white">Variation Sequencing</p>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                                        Plan a 6-ball sequence before bowling it: e.g., outswingers for 4 balls, yorker, slower ball.
                                        Execute the exact plan. This trains match execution.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 7 */}
                        <section id="where-to-play" className="mb-16">
                            <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6 flex items-center gap-3">
                                <span className="w-10 h-10 bg-dfw-red rounded-full flex items-center justify-center text-white text-lg font-bold">7</span>
                                Where to Play Indoor Cricket in DFW
                            </h2>

                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Here are the main options for indoor cricket in the Dallas-Fort Worth area:
                            </p>

                            {/* Featured Facility */}
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
                                            <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Equipment rental available</li>
                                            <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Professional coaching programs</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-6 flex flex-wrap gap-4">
                                    <Link href="/cricket-lanes" className="bg-dfw-red text-white px-6 py-2 rounded font-bold uppercase text-sm hover:bg-red-700 transition-colors">
                                        View Cricket Lanes
                                    </Link>
                                    <Link href="/contact" className="bg-dfw-navy text-white px-6 py-2 rounded font-bold uppercase text-sm hover:bg-gray-800 transition-colors">
                                        Schedule a Tour
                                    </Link>
                                </div>
                            </div>
                        </section>

                        {/* Section 8 */}
                        <section id="faq" className="mb-16">
                            <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6 flex items-center gap-3">
                                <span className="w-10 h-10 bg-dfw-red rounded-full flex items-center justify-center text-white text-lg font-bold">8</span>
                                Frequently Asked Questions
                            </h2>

                            <div className="space-y-6">
                                {[
                                    { q: "Can complete beginners use indoor cricket facilities?", a: "Absolutely. About 40% of new visitors have never played cricket before. Staff provide basic instruction and the bowling machine can be set to very slow speeds for learning." },
                                    { q: "How far in advance should I book?", a: "Weekday mornings usually have same-day availability. Weekend evenings (the most popular times) should be booked 1-2 weeks ahead. Members get priority booking up to 30 days in advance." },
                                    { q: "Can I bring a group of friends who've never played?", a: "Yes! This is actually a popular activity for groups. Staff can help get everyone set up with equipment and basic instruction. Consider booking 2+ lanes for larger groups." },
                                    { q: "Is indoor cricket the same as playing outdoors?", a: "The fundamentals are identical, but indoor nets focus on batting and bowling technique. You won't practice fielding or running between wickets indoors. Think of it as intensive skill development." },
                                    { q: "What's the minimum age for children?", a: "Most facilities accept children 6+, though 8+ is ideal for focused practice. Youth coaching programs often start at age 6 with modified equipment and instruction." },
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
