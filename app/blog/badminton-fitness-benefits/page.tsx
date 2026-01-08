import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, generateArticleSchema } from '@/lib/metadata'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowRight, CheckCircle, Heart, Zap, Brain, Target, TrendingUp, Activity } from 'lucide-react'
import BlogHero from '@/components/blog/BlogHero'

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
            content: `According to Harvard Health, a 155-pound person burns approximately **450 calories** playing badminton for one hour—more than cycling or weight training. Why it works: The constant movement patterns (lunging, jumping, pivoting) engage multiple muscle groups simultaneously, keeping your heart rate elevated throughout the game.`,
        },
        {
            icon: <Heart className="text-red-500" size={28} />,
            title: "Excellent Cardiovascular Exercise",
            content: `A study published in the *British Journal of Sports Medicine* found that regular badminton players had significantly better cardiovascular health markers than non-players. Heart rate averages 70-80% of maximum during play.`,
        },
        {
            icon: <Activity className="text-blue-500" size={28} />,
            title: "Full-Body Muscle Engagement",
            content: `Unlike running which primarily works legs, badminton engages muscles throughout your entire body: Shoulders, arms, and back from swinging the racket; Core for stability; Lower body for constant movement.`,
        },
        {
            icon: <Target className="text-green-500" size={28} />,
            title: "Improves Reflexes and Hand-Eye Coordination",
            content: `The shuttlecock can travel up to **200 mph**. Even recreational play requires quick reactions and precise timing. These skills transfer to everyday activities like driving and avoiding hazards.`,
        },
        {
            icon: <Brain className="text-purple-500" size={28} />,
            title: "Mental Health and Stress Reduction",
            content: `The combination of physical activity, social interaction, and strategic thinking creates a powerful mental health boost. A study in *Psychology of Sport and Exercise* found badminton players reported 30% lower stress levels.`,
        },
        {
            icon: <TrendingUp className="text-orange-500" size={28} />,
            title: "Enhances Flexibility and Agility",
            content: `The dynamic stretching required in badminton—reaching for high shots, lunging for drop shots, twisting for backhand returns—naturally improves your range of motion and agility.`,
        },
        {
            icon: <CheckCircle className="text-teal-500" size={28} />,
            title: "Low Impact on Joints (When Played Indoors)",
            content: `Unlike running on hard surfaces, indoor badminton on properly-sprung floors is significantly easier on your joints. Ideal for older adults or those protecting their knees.`,
        },
        {
            icon: <Zap className="text-cyan-500" size={28} />,
            title: "Builds Bone Density",
            content: `Weight-bearing activities strengthen bones. A study in *Bone Reports* found that racket sport players had 3-4% higher bone mineral density in their dominant arm.`,
        },
        {
            icon: <Heart className="text-pink-500" size={28} />,
            title: "Social Connection and Community",
            content: `Badminton is inherently social. Scheduled games with partners keep you committed, and friendly competition motivates improvement.`,
        },
        {
            icon: <TrendingUp className="text-indigo-500" size={28} />,
            title: "Accessible for All Fitness Levels",
            content: `Badminton scales naturally. Beginners can rally slowly, while advanced players can push for high-intensity training. No equipment is needed to start at our facility!`,
        },
    ]

    return (
        <article className="bg-white dark:bg-[#020408] min-h-screen transition-colors duration-300">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

            <BlogHero
                title="10 Proven Benefits of Playing Badminton for Fitness"
                description="Why badminton might be the most underrated full-body workout—and how to start, even if you've never held a racket."
                category="Fitness"
                date="Jan 10, 2026"
                readTime="10 min read"
                author="DFW Indoor Sports Team"
            />

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
                            <p className="text-xs opacity-80">MPH Shuttlecock</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold">All</p>
                            <p className="text-xs opacity-80">Fitness Levels</p>
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
                            often exceeds—traditional gym routines. Here are 10 science-backed benefits.
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
                                <p className="text-sm text-gray-300">No equipment needed. We provide rackets and shuttlecocks for beginners.</p>
                            </div>
                            <div className="bg-gradient-to-br from-dfw-navy to-gray-800 text-white p-6 rounded-xl">
                                <div className="text-3xl font-bold text-dfw-red mb-2">Step 2</div>
                                <h3 className="font-bold uppercase mb-2">Book a Court</h3>
                                <p className="text-sm text-gray-300">Drop-in rates start at $10/person. Or try a membership for unlimited access.</p>
                            </div>
                            <div className="bg-gradient-to-br from-dfw-navy to-gray-800 text-white p-6 rounded-xl">
                                <div className="text-3xl font-bold text-dfw-red mb-2">Step 3</div>
                                <h3 className="font-bold uppercase mb-2">Join the Community</h3>
                                <p className="text-sm text-gray-300">Our badminton community is welcoming to all levels. Find playing partners easily.</p>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="bg-dfw-navy text-white p-8 md:p-12 rounded-xl">
                        <h2 className="text-2xl md:text-3xl font-header font-bold uppercase mb-4">Ready to Experience the Benefits?</h2>
                        <p className="text-gray-300 mb-6 max-w-2xl">
                            Join hundreds of DFW residents who've discovered badminton as their preferred workout.
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
