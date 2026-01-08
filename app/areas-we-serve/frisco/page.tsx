import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, generateFAQSchema, BUSINESS_INFO } from '@/lib/metadata'
import Link from 'next/link'
import { MapPin, Clock, Car, ArrowRight, Phone, CheckCircle, Star, DollarSign, Users, Trophy, Target, Heart } from 'lucide-react'

export const metadata: Metadata = createPageMetadata({
    title: 'Indoor Sports Near Frisco TX | Cricket, Badminton, Soccer | 40 Min Drive',
    description: 'Looking for indoor cricket or badminton near Frisco, Texas? DFW Indoor Sports offers professional courts just 40 minutes southwest. 50,000 sq ft facility. Open 5AM-11PM. Call (817) 938-0808.',
    keywords: [
        'indoor sports near Frisco TX',
        'Frisco cricket facility',
        'badminton courts Frisco',
        'indoor soccer Frisco Texas',
        'sports complex near Frisco',
        'cricket near Frisco',
        'badminton Frisco area',
    ],
    path: '/areas-we-serve/frisco',
})

const friscoFaqs = [
    {
        question: 'How long does it take to get to DFW Indoor Sports from Frisco?',
        answer: 'From Frisco, expect approximately 40-50 minutes via TX-121 W (Sam Rayburn Tollway) to TX-114 W. Weekend mornings typically have lighter traffic and can be as quick as 35 minutes.',
    },
    {
        question: 'Is the drive from Frisco worth it?',
        answer: 'Many Frisco families think so! Our purpose-built facility offers amenities that local gyms can\'t match: programmable bowling machines for cricket, Olympic-spec badminton courts with proper 30+ ft ceiling height, and a dedicated indoor soccer field. The drive becomes routine after a few visits.',
    },
    {
        question: 'Do you have programs for Frisco youth?',
        answer: 'Yes! Our Youth Academy serves families from across the Metroplex. Saturday programs are especially popular with Frisco families who make it a weekend activity. Cricket and badminton training for ages 6+.',
    },
    {
        question: 'Can I meet other players from Frisco there?',
        answer: 'Absolutely. Our community includes players from Frisco, Plano, Allen, McKinney, and beyond. Many members from North DFW have formed regular playing groups. Our open play sessions are great for meeting fellow players.',
    },
    {
        question: 'What sports do you offer?',
        answer: 'We offer cricket (3 professional lanes with bowling machines), badminton (6 Olympic-spec courts), indoor soccer (full futsal field), and dodgeball. All equipment is provided.',
    },
    {
        question: 'What are your membership options?',
        answer: 'Monthly memberships start at $70 for unlimited open play access. Family memberships are $150. For Frisco residents who visit even twice monthly, membership is more economical than drop-in rates.',
    },
]

export default function FriscoPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Areas We Serve', url: '/areas-we-serve' },
        { name: 'Frisco', url: '/areas-we-serve/frisco' },
    ])

    const faqSchema = generateFAQSchema(friscoFaqs)

    const citySchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: BUSINESS_INFO.name,
        description: 'Premier indoor sports facility serving Frisco, Texas with professional cricket lanes, badminton courts, soccer fields, and dodgeball.',
        url: `${BUSINESS_INFO.url}/areas-we-serve/frisco`,
        telephone: BUSINESS_INFO.contact.phone,
        priceRange: '$25-$150',
        address: {
            '@type': 'PostalAddress',
            streetAddress: BUSINESS_INFO.address.street,
            addressLocality: BUSINESS_INFO.address.city,
            addressRegion: BUSINESS_INFO.address.state,
            postalCode: BUSINESS_INFO.address.zip,
            addressCountry: BUSINESS_INFO.address.country,
        },
        areaServed: { '@type': 'City', name: 'Frisco', containedInPlace: { '@type': 'State', name: 'Texas' } },
    }

    return (
        <div className="bg-white dark:bg-[#020408] min-h-screen transition-colors duration-300">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="py-24 bg-gradient-to-b from-dfw-navy to-[#0a1628] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/textures/cubes.png')] opacity-5"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold text-white uppercase tracking-widest mb-6">
                        <MapPin size={14} className="text-dfw-red" /> Serving Frisco, TX
                    </span>
                    <h1 className="text-4xl md:text-6xl font-header font-bold text-white uppercase mb-6">
                        Indoor Sports Near Frisco, Texas
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                        Frisco is booming—but for serious indoor sports, DFW Indoor Sports is worth the <strong className="text-dfw-red">40-minute drive</strong>.
                        Professional cricket, Olympic badminton, indoor soccer, and an active community await you.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/rentals" className="bg-dfw-red text-white px-8 py-3 rounded font-bold uppercase text-sm hover:bg-red-700 transition-colors flex items-center gap-2">
                            Book a Court <ArrowRight size={16} />
                        </Link>
                        <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded font-bold uppercase text-sm hover:bg-white/10 transition-colors">
                            Get Directions
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-gray-50 dark:bg-[#0a111f]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        <div className="bg-white dark:bg-white/5 p-6 rounded-lg text-center">
                            <Car className="text-dfw-red mx-auto mb-3" size={32} />
                            <p className="font-bold text-dfw-navy dark:text-white text-lg">40-50 Min</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">from Frisco</p>
                        </div>
                        <div className="bg-white dark:bg-white/5 p-6 rounded-lg text-center">
                            <Clock className="text-dfw-red mx-auto mb-3" size={32} />
                            <p className="font-bold text-dfw-navy dark:text-white text-lg">5 AM - 11 PM</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Open 7 Days</p>
                        </div>
                        <div className="bg-white dark:bg-white/5 p-6 rounded-lg text-center">
                            <DollarSign className="text-dfw-red mx-auto mb-3" size={32} />
                            <p className="font-bold text-dfw-navy dark:text-white text-lg">From $25/hr</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Court Rental</p>
                        </div>
                        <div className="bg-white dark:bg-white/5 p-6 rounded-lg text-center">
                            <Phone className="text-dfw-red mx-auto mb-3" size={32} />
                            <p className="font-bold text-dfw-navy dark:text-white text-lg">(817) 938-0808</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Call Us</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Frisco Families Choose Us */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6 text-center">
                            Why Frisco Families Make Us a Weekend Destination
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-3xl mx-auto">
                            Frisco is one of the fastest-growing cities in Texas, with young families seeking quality activities. Many have discovered that DFW Indoor Sports offers something special worth the drive.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-dfw-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Target className="text-dfw-red" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-2">Youth Development</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            Our Youth Academy provides structured training in cricket and badminton. Many Frisco parents bring their kids on Saturday mornings for professional coaching that develops real skills—not just casual play.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-dfw-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Users className="text-dfw-red" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-2">North DFW Community</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            Our player community includes families from Frisco, Plano, Allen, McKinney, and surrounding areas. Weekend sessions often feel like community gatherings, with families connecting over shared sports interests.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-dfw-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Trophy className="text-dfw-red" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-2">Professional Facilities</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            50,000 sq ft purpose-built for indoor sports. Programmable bowling machines (40-90 mph) for cricket, Olympic-specification badminton courts with proper ceiling height, and premium turf for soccer.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-dfw-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Heart className="text-dfw-red" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-2">Birthday Parties & Events</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            Looking for a unique birthday party venue? Our dodgeball and multi-sport party packages are hits with Frisco families. Private party rooms, equipment included, and unforgettable fun.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial */}
                        <div className="bg-dfw-navy text-white p-8 rounded-xl">
                            <div className="flex items-start gap-4">
                                <div className="flex gap-1 text-yellow-400 flex-shrink-0">
                                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <div>
                                    <p className="italic mb-4">
                                        "We moved to Frisco from India and really missed having proper cricket facilities. DFW Indoor Sports is the closest thing to what we had back home. Yes, it's a 45-minute drive, but we go every Saturday morning. Our son has improved so much with the coaching, and we've made great friends in the community."
                                    </p>
                                    <p className="text-gray-400 text-sm">— Venkat S., Frisco</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Directions */}
            <section className="py-24 bg-gray-50 dark:bg-[#0a111f]">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6 text-center">
                            Getting Here from Frisco
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                            Address: <strong>16230 Three Wide Drive, Fort Worth, TX 76177</strong>
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div className="bg-white dark:bg-white/5 p-6 rounded-xl">
                                <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-4 flex items-center gap-2">
                                    <MapPin size={18} className="text-dfw-red" /> Via TX-121 (Sam Rayburn Tollway)
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3"><strong>Distance:</strong> ~38 miles | <strong>Time:</strong> 40-50 min</p>
                                <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                                    <li>Take TX-121 (Sam Rayburn Tollway) west</li>
                                    <li>Continue onto TX-114 W at the interchange</li>
                                    <li>Stay on TX-114 W through Southlake, Trophy Club, and Roanoke</li>
                                    <li>Take the Three Wide Drive exit (past Roanoke)</li>
                                    <li>Turn left onto Three Wide Drive</li>
                                    <li>DFW Indoor Sports is on your left (Suite 200)</li>
                                </ol>
                            </div>

                            <div className="bg-white dark:bg-white/5 p-6 rounded-xl">
                                <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-4 flex items-center gap-2">
                                    <MapPin size={18} className="text-dfw-red" /> Alternative: Via I-35W
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3"><strong>Distance:</strong> ~42 miles | <strong>Time:</strong> 45-55 min</p>
                                <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                                    <li>Head west on Main St / FM 423</li>
                                    <li>Merge onto US-380 W</li>
                                    <li>Take I-35W S toward Fort Worth</li>
                                    <li>Take exit 67 toward TX-114 W</li>
                                    <li>Turn right onto Three Wide Drive</li>
                                </ol>
                                <p className="text-gray-500 dark:text-gray-400 text-xs mt-4 italic">
                                    Note: TX-121/114 route is usually faster and more direct.
                                </p>
                            </div>
                        </div>

                        {/* Tips */}
                        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                            <h4 className="font-bold text-dfw-navy dark:text-white mb-3">🚗 Tips for Frisco Drivers</h4>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                                <li><CheckCircle className="inline text-blue-500 mr-2" size={16} /><strong>Best time:</strong> Saturday/Sunday mornings—35-40 min with light traffic</li>
                                <li><CheckCircle className="inline text-blue-500 mr-2" size={16} /><strong>Make it a day:</strong> Many Frisco families combine the trip with lunch in Southlake or Roanoke</li>
                                <li><CheckCircle className="inline text-blue-500 mr-2" size={16} /><strong>Tolls:</strong> TX-121 has tolls; budget ~$5-7 each way with TollTag</li>
                            </ul>
                        </div>

                        <div className="text-center">
                            <Link href="https://maps.google.com/?q=16230+Three+Wide+Drive+Fort+Worth+TX+76177" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-dfw-navy dark:bg-white text-white dark:text-dfw-navy px-8 py-4 rounded font-bold uppercase text-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                                <MapPin size={18} /> Open in Google Maps
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sports & Pricing */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-12 text-center">
                            Sports Available
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: '🏏', name: 'Cricket', price: '$25/hr', link: '/cricket-lanes' },
                                { icon: '🏸', name: 'Badminton', price: '$10/person', link: '/badminton-courts' },
                                { icon: '⚽', name: 'Soccer', price: '$100/hr', link: '/soccer-fields' },
                                { icon: '🔴', name: 'Dodgeball', price: '$150+', link: '/dodgeball-courts' },
                            ].map((sport) => (
                                <Link key={sport.name} href={sport.link} className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl text-center hover:shadow-lg transition-all group">
                                    <span className="text-4xl mb-4 block">{sport.icon}</span>
                                    <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-2 group-hover:text-dfw-red transition-colors">{sport.name}</h3>
                                    <p className="text-dfw-red font-bold">{sport.price}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-gray-50 dark:bg-[#0a111f]">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-12 text-center">
                            Questions from Frisco Families
                        </h2>

                        <div className="space-y-4">
                            {friscoFaqs.map((faq, index) => (
                                <details key={index} className="bg-white dark:bg-white/5 p-6 rounded-xl group">
                                    <summary className="font-bold text-dfw-navy dark:text-white cursor-pointer flex items-center justify-between">
                                        {faq.question}
                                        <span className="text-dfw-red group-open:rotate-45 transition-transform">+</span>
                                    </summary>
                                    <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm leading-relaxed">{faq.answer}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-dfw-red">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-header font-bold text-white uppercase mb-4">
                        Worth the Drive from Frisco
                    </h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
                        Join families from Frisco, Plano, and beyond who make DFW Indoor Sports their weekend destination.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/rentals" className="bg-white text-dfw-red px-8 py-4 rounded font-bold uppercase text-sm hover:bg-gray-100 transition-colors flex items-center gap-2">
                            Book Online <ArrowRight size={16} />
                        </Link>
                        <Link href="/memberships" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded font-bold uppercase text-sm hover:bg-white/10 transition-colors">
                            Family Memberships $150/mo
                        </Link>
                        <Link href="tel:8179380808" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded font-bold uppercase text-sm hover:bg-white/10 transition-colors flex items-center gap-2">
                            <Phone size={16} /> (817) 938-0808
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
