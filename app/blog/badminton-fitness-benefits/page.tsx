import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, generateArticleSchema } from '@/lib/metadata'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowRight, CheckCircle, Heart, Zap, Brain, Target, TrendingUp, Activity } from 'lucide-react'

export const metadata: Metadata = createPageMetadata({
    title: '10 Proven Benefits of Playing Badminton for Fitness (2026 Guide)',
    description: 'Discover why badminton is one of the best full-body workouts. Burns 450+ calories/hour, improves cardio, builds muscle, reduces stress. Backed by research.',
    keywords: [
        'badminton fitness benefits',
        'badminton workout',
        'badminton for weight loss',
        'badminton cardio',
        'badminton health benefits',
        'indoor badminton Dallas',
        'badminton exercise',
    ],
    path: '/blog/badminton-fitness-benefits',
})

export default function BadmintonFitnessBenefitsPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Badminton Fitness Benefits', url: '/blog/badminton-fitness-benefits' },
    ])

    const articleSchema = generateArticleSchema({
        title: '10 Proven Benefits of Playing Badminton for Fitness',
        description: 'Discover why badminton is one of the best full-body workouts.',
        publishedDate: '2026-01-10T10:00:00Z',
        modifiedDate: '2026-01-10T10:00:00Z',
        url: 'https://dfwindoorsports.com/blog/badminton-fitness-benefits',
    })

    const benefits = [
        {
            icon: <Zap className="text-yellow-500" size={28} />,
            title: "Burns 450+ Calories Per Hour",
            content: `According to Harvard Health, a 155-pound person burns approximately **450 calories** playing badminton for one hour—more than cycling or weight training.
      
**Why it works:** The constant movement patterns (lunging, jumping, pivoting) engage multiple muscle groups simultaneously, keeping your heart rate elevated throughout the game.

**Comparison:**
- Badminton: 450 cal/hr
- Cycling (moderate): 260 cal/hr
- Weight lifting: 220 cal/hr
- Walking (brisk): 300 cal/hr`,
        },
        {
            icon: <Heart className="text-red-500" size={28} />,
            title: "Excellent Cardiovascular Exercise",
            content: `A study published in the *British Journal of Sports Medicine* found that regular badminton players had significantly better cardiovascular health markers than non-players.

**What happens to your heart:**
- Heart rate averages 70-80% of maximum during play
- Interval-style nature (short bursts + recovery) mimics HIIT training
- Improves VO2 max over time
- Reduces resting heart rate with regular play`,
        },
        {
            icon: <Activity className="text-blue-500" size={28} />,
            title: "Full-Body Muscle Engagement",
            content: `Unlike running which primarily works legs, badminton engages muscles throughout your entire body:

**Upper Body:** Shoulders, arms, and back from swinging the racket
**Core:** Constant rotation and stability requirements
**Lower Body:** Quadriceps, hamstrings, and calves from constant movement
**Grip Strength:** Forearm muscles from racket control

**Pro tip:** Play 2-3 times per week and you'll notice improved muscle definition within 4-6 weeks.`,
        },
        {
            icon: <Target className="text-green-500" size={28} />,
            title: "Improves Reflexes and Hand-Eye Coordination",
            content: `The shuttlecock can travel up to **200 mph** off professional rackets. Even recreational play requires quick reactions and precise timing.

**Neurological benefits:**
- Faster reaction times (measurable within weeks of regular play)
- Improved spatial awareness
- Better fine motor control
- Enhanced predictive abilities (reading opponent movements)

**Real-world impact:** These skills transfer to everyday activities like driving, catching objects, and avoiding hazards.`,
        },
        {
            icon: <Brain className="text-purple-500" size={28} />,
            title: "Mental Health and Stress Reduction",
            content: `The combination of physical activity, social interaction, and strategic thinking creates a powerful mental health boost.

**Research findings:**
- A study in *Psychology of Sport and Exercise* found badminton players reported 30% lower stress levels after playing
- The strategic nature of the game (predicting shots, placing returns) keeps the mind engaged and away from daily worries
- Social doubles play builds connection and combats loneliness

**The "flow state":** Many players report entering a state of complete focus where time seems to fly—a meditative experience that reduces anxiety.`,
        },
        {
            icon: <TrendingUp className="text-orange-500" size={28} />,
            title: "Enhances Flexibility and Agility",
            content: `The dynamic stretching required in badminton—reaching for high shots, lunging for drop shots, twisting for backhand returns—naturally improves your range of motion.

**Flexibility improvements:**
- Hip flexor mobility from deep lunges
- Shoulder flexibility from overhead shots
- Ankle mobility from quick direction changes

**Agility development:**
- Rapid acceleration and deceleration
- Multi-directional movement patterns
- Body control during off-balance positions`,
        },
        {
            icon: <CheckCircle className="text-teal-500" size={28} />,
            title: "Low Impact on Joints (When Played Indoors)",
            content: `Unlike running on hard surfaces, indoor badminton on properly-sprung floors is significantly easier on your joints.

**Why indoor courts matter:**
- Wood or synthetic floors absorb impact
- Climate-controlled environment prevents muscle stiffness
- Consistent surface prevents ankle rolls
- No weather delays mean consistent training

**Ideal for:** Older adults, those recovering from injuries, or anyone wanting to protect their knees long-term.`,
        },
        {
            icon: <Zap className="text-cyan-500" size={28} />,
            title: "Builds Bone Density",
            content: `Weight-bearing activities strengthen bones. Badminton's jumping, landing, and directional changes stimulate bone-building cells.

**Research evidence:** A study in *Bone Reports* found that racket sport players had 3-4% higher bone mineral density in their dominant arm compared to non-players.

**Best for:** Adults over 30 (when natural bone density starts declining) and post-menopausal women at risk of osteoporosis.`,
        },
        {
            icon: <Heart className="text-pink-500" size={28} />,
            title: "Social Connection and Community",
            content: `Badminton is inherently social—you need at least one other person to play. This creates built-in accountability and community.

**Why this matters for fitness:**
- Scheduled games with partners keep you committed
- Friendly competition motivates improvement
- Club leagues create long-term fitness habits
- Doubles play builds teamwork and communication

**At DFW Indoor Sports:** We see players form lasting friendships through our badminton community, with many showing up for the social aspect as much as the exercise.`,
        },
        {
            icon: <TrendingUp className="text-indigo-500" size={28} />,
            title: "Accessible for All Fitness Levels",
            content: `Unlike some sports that require baseline fitness, badminton scales naturally to your ability level.

**How it adapts:**
- Beginners can rally slowly and still get exercise
- Advanced players can push harder for intense workouts
- Mixed-ability games are common and enjoyable
- Equipment is inexpensive to start (basic rackets under $30)

**No intimidation factor:** You don't need to be athletic to start. The lightweight shuttlecock means even first-timers can rally within minutes.`,
        },
    ]

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
                        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold uppercase">Badminton</span>
                        <span className="bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full text-xs font-bold uppercase">Fitness</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-header font-bold text-white leading-tight mb-6">
                        10 Proven Benefits of Playing Badminton for Fitness
                    </h1>
                    <p className="text-xl text-gray-300 mb-8">
                        Why badminton might be the most underrated full-body workout—and how to start, even if you've never held a racket.
                    </p>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                        <span className="flex items-center gap-2"><User size={16} /> DFW Indoor Sports Team</span>
                        <span className="flex items-center gap-2"><Calendar size={16} /> January 10, 2026</span>
                        <span className="flex items-center gap-2"><Clock size={16} /> 10 min read</span>
                    </div>
                </div>
            </header>

            {/* Key Stats Banner */}
            <section className="py-8 bg-dfw-red">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
                        <div>
                            <p className="text-3xl font-bold">450+</p>
                            <p className="text-xs opacity-80">Calories/Hour</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold">30%</p>
                            <p className="text-xs opacity-80">Stress Reduction</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold">200</p>
                            <p className="text-xs opacity-80">MPH Shuttlecock Speed</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold">All</p>
                            <p className="text-xs opacity-80">Fitness Levels Welcome</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <div className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">

                    {/* Introduction */}
                    <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                            When people think of fitness, they picture treadmills, weight rooms, or yoga studios.
                            Rarely does badminton come to mind. <strong>That's a mistake.</strong>
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Research consistently shows badminton provides a comprehensive workout that rivals—and
                            often exceeds—traditional gym routines. It combines cardiovascular training, strength
                            building, flexibility work, and mental stimulation into a single, enjoyable activity.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Here are 10 science-backed benefits of playing badminton for fitness, plus practical
                            tips to get started.
                        </p>
                    </div>

                    {/* Benefits List */}
                    <div className="space-y-12">
                        {benefits.map((benefit, idx) => (
                            <section key={idx} className="bg-gray-50 dark:bg-white/5 rounded-2xl p-8">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="bg-white dark:bg-white/10 p-3 rounded-xl shadow-sm">
                                        {benefit.icon}
                                    </div>
                                    <div>
                                        <span className="text-dfw-red font-mono text-sm font-bold">Benefit #{idx + 1}</span>
                                        <h2 className="text-xl md:text-2xl font-header font-bold text-dfw-navy dark:text-white">
                                            {benefit.title}
                                        </h2>
                                    </div>
                                </div>
                                <div className="prose prose-sm dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 whitespace-pre-line">
                                    {benefit.content}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* How to Get Started */}
                    <section className="mt-16 mb-12">
                        <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6">
                            How to Start Playing Badminton in DFW
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-gradient-to-br from-dfw-navy to-gray-800 text-white p-6 rounded-xl">
                                <div className="text-3xl font-bold text-dfw-red mb-2">Step 1</div>
                                <h3 className="font-bold uppercase mb-2">Show Up</h3>
                                <p className="text-sm text-gray-300">No equipment needed. We provide rackets and shuttlecocks for beginners. Just wear comfortable athletic clothing and indoor shoes.</p>
                            </div>
                            <div className="bg-gradient-to-br from-dfw-navy to-gray-800 text-white p-6 rounded-xl">
                                <div className="text-3xl font-bold text-dfw-red mb-2">Step 2</div>
                                <h3 className="font-bold uppercase mb-2">Book a Court</h3>
                                <p className="text-sm text-gray-300">Drop-in rates start at $10/person. Or try a membership for unlimited access starting at $70/month.</p>
                            </div>
                            <div className="bg-gradient-to-br from-dfw-navy to-gray-800 text-white p-6 rounded-xl">
                                <div className="text-3xl font-bold text-dfw-red mb-2">Step 3</div>
                                <h3 className="font-bold uppercase mb-2">Join the Community</h3>
                                <p className="text-sm text-gray-300">Our badminton community is welcoming to all levels. Find playing partners, join leagues, or take lessons from our coaches.</p>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="bg-dfw-navy text-white p-8 md:p-12 rounded-xl">
                        <h2 className="text-2xl md:text-3xl font-header font-bold uppercase mb-4">Ready to Experience the Benefits?</h2>
                        <p className="text-gray-300 mb-6 max-w-2xl">
                            Join hundreds of DFW residents who've discovered badminton as their preferred workout.
                            No experience necessary—our welcoming community helps everyone get started.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/badminton-courts" className="bg-dfw-red text-white px-8 py-3 rounded font-bold uppercase text-sm hover:bg-red-700 transition-colors flex items-center gap-2">
                                Book Badminton Courts <ArrowRight size={16} />
                            </Link>
                            <Link href="/academy" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded font-bold uppercase text-sm hover:bg-white/10 transition-colors">
                                View Coaching Programs
                            </Link>
                        </div>
                    </section>

                </div>
            </div>
        </article>
    )
}
