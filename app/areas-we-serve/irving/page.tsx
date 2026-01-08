import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, generateFAQSchema, BUSINESS_INFO } from '@/lib/metadata'
import Link from 'next/link'
import { MapPin, Clock, Car, ArrowRight, Phone, CheckCircle, Star, DollarSign, Users, Trophy, Plane, Building } from 'lucide-react'

export const metadata: Metadata = createPageMetadata({
    title: 'Indoor Sports Near Irving TX | Cricket, Badminton, Soccer | 20 Min Drive',
    description: 'Best indoor sports near Irving, Texas. DFW Indoor Sports offers professional cricket, badminton, soccer & dodgeball just 20 minutes from Las Colinas. Open 5AM-11PM. Book online or call (817) 938-0808.',
    keywords: [
        'indoor sports near Irving TX',
        'Irving cricket facility',
        'badminton courts Irving',
        'indoor soccer Irving Texas',
        'Las Colinas indoor sports',
        'cricket practice Irving',
        'sports facility near DFW Airport',
    ],
    path: '/areas-we-serve/irving',
})

const irvingFaqs = [
    {
        question: 'How far is DFW Indoor Sports from Irving/Las Colinas?',
        answer: 'We\'re approximately 20-25 minutes from Las Colinas via TX-114 W. The drive is straightforward with minimal traffic, especially outside of rush hours.',
    },
    {
        question: 'Is your facility convenient for DFW Airport travelers?',
        answer: 'Yes! We\'re located just off TX-114, about 15 minutes north of DFW Airport. We\'ve hosted players with long layovers who wanted to get some practice in, as well as business travelers staying in Irving who wanted to play after work.',
    },
    {
        question: 'Do you offer corporate events for Irving businesses?',
        answer: 'Absolutely. Many Las Colinas businesses host team building events at our facility. Dodgeball tournaments are especially popular. We can accommodate groups of 10-100+ and offer catering coordination.',
    },
    {
        question: 'What sports can I play?',
        answer: 'We offer cricket (3 lanes with bowling machines), badminton (6 Olympic-spec courts), indoor soccer (full futsal field), and dodgeball. Equipment is provided for all sports.',
    },
    {
        question: 'What are your hours?',
        answer: 'We\'re open 5 AM to 11 PM, seven days a week. Early morning sessions are popular with professionals heading to Las Colinas offices afterward.',
    },
    {
        question: 'Do you have memberships?',
        answer: 'Yes, monthly memberships start at $70 for unlimited open play access. For Irving residents who visit twice monthly, membership is more economical than drop-in rates.',
    },
]

export default function IrvingPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Areas We Serve', url: '/areas-we-serve' },
        { name: 'Irving', url: '/areas-we-serve/irving' },
    ])

    const faqSchema = generateFAQSchema(irvingFaqs)

    const citySchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: BUSINESS_INFO.name,
        description: 'Premier indoor sports facility serving Irving and Las Colinas, Texas with professional cricket lanes, badminton courts, soccer fields, and dodgeball.',
        url: `${BUSINESS_INFO.url}/areas-we-serve/irving`,
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
        areaServed: { '@type': 'City', name: 'Irving', containedInPlace: { '@type': 'State', name: 'Texas' } },
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
                        <MapPin size={14} className="text-dfw-red" /> Serving Irving & Las Colinas, TX
                    </span>
                    <h1 className="text-4xl md:text-6xl font-header font-bold text-white uppercase mb-6">
                        Indoor Sports Near Irving, Texas
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                        <strong className="text-dfw-red">20 minutes</strong> from Las Colinas. Professional cricket lanes, Olympic badminton courts, indoor soccer, and dodgeball—all in our 50,000 sq ft climate-controlled facility.
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
                            <p className="font-bold text-dfw-navy dark:text-white text-lg">20-25 Min</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">from Las Colinas</p>
                        </div>
                        <div className="bg-white dark:bg-white/5 p-6 rounded-lg text-center">
                            <Plane className="text-dfw-red mx-auto mb-3" size={32} />
                            <p className="font-bold text-dfw-navy dark:text-white text-lg">15 Min</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">from DFW Airport</p>
                        </div>
                        <div className="bg-white dark:bg-white/5 p-6 rounded-lg text-center">
                            <Clock className="text-dfw-red mx-auto mb-3" size={32} />
                            <p className="font-bold text-dfw-navy dark:text-white text-lg">5 AM - 11 PM</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Open Daily</p>
                        </div>
                        <div className="bg-white dark:bg-white/5 p-6 rounded-lg text-center">
                            <DollarSign className="text-dfw-red mx-auto mb-3" size={32} />
                            <p className="font-bold text-dfw-navy dark:text-white text-lg">From $25/hr</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Court Rental</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Irving/Las Colinas Residents Choose Us */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6 text-center">
                            Why Irving Professionals Choose DFW Indoor Sports
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-3xl mx-auto">
                            Las Colinas is a hub for Fortune 500 companies. Busy professionals need a sports facility that fits their schedule. We're open early and late, with no waiting for courts.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl text-center">
                                <div className="w-16 h-16 bg-dfw-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Building className="text-dfw-red" size={28} />
                                </div>
                                <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-2">Corporate Team Building</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    Dodgeball tournaments, badminton challenges, and group events for Las Colinas companies. We handle setup and coordination.
                                </p>
                            </div>

                            <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl text-center">
                                <div className="w-16 h-16 bg-dfw-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Clock className="text-dfw-red" size={28} />
                                </div>
                                <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-2">Extended Hours</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    Open 5 AM to 11 PM. Play before work, during lunch, or late evening. Our schedule fits yours.
                                </p>
                            </div>

                            <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl text-center">
                                <div className="w-16 h-16 bg-dfw-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Trophy className="text-dfw-red" size={28} />
                                </div>
                                <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-2">Professional Facilities</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    50,000 sq ft purpose-built for indoor sports. Real equipment, proper courts, year-round climate control.
                                </p>
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
                                        "I work in Las Colinas and discovered DFW Indoor Sports through a colleague. Now I play badminton 2-3 times a week after work. The 20-minute drive is nothing—and against traffic, so it's actually faster than driving home first."
                                    </p>
                                    <p className="text-gray-400 text-sm">— Kevin L., Las Colinas Professional</p>
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
                            Getting Here from Irving
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                            Address: <strong>16230 Three Wide Drive, Fort Worth, TX 76177</strong>
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div className="bg-white dark:bg-white/5 p-6 rounded-xl">
                                <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-4 flex items-center gap-2">
                                    <MapPin size={18} className="text-dfw-red" /> From Las Colinas
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3"><strong>Distance:</strong> ~18 miles | <strong>Time:</strong> 20-25 min</p>
                                <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                                    <li>Head north on TX-114 W toward Grapevine</li>
                                    <li>Continue on TX-114 W past DFW Airport</li>
                                    <li>Stay on TX-114 W through Trophy Club</li>
                                    <li>Take the Three Wide Drive exit</li>
                                    <li>Turn left onto Three Wide Drive</li>
                                    <li>DFW Indoor Sports is on your left</li>
                                </ol>
                            </div>

                            <div className="bg-white dark:bg-white/5 p-6 rounded-xl">
                                <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-4 flex items-center gap-2">
                                    <Plane size={18} className="text-dfw-red" /> From DFW Airport
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3"><strong>Distance:</strong> ~12 miles | <strong>Time:</strong> 15-20 min</p>
                                <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                                    <li>Exit the airport via North Entrance</li>
                                    <li>Merge onto TX-114 W toward Roanoke</li>
                                    <li>Continue west for about 10 miles</li>
                                    <li>Take the Three Wide Drive exit</li>
                                    <li>Turn left onto Three Wide Drive</li>
                                </ol>
                                <p className="text-gray-500 dark:text-gray-400 text-xs mt-4 italic">
                                    Note: For travelers with 4+ hour layovers, we've had players stop by for a quick session!
                                </p>
                            </div>
                        </div>

                        <div className="text-center">
                            <Link href="https://maps.google.com/?q=16230+Three+Wide+Drive+Fort+Worth+TX+76177" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-dfw-navy dark:bg-white text-white dark:text-dfw-navy px-8 py-4 rounded font-bold uppercase text-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                                <MapPin size={18} /> Open in Google Maps
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sports */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-12 text-center">
                            Sports & Pricing
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
                            Questions from Irving Players
                        </h2>

                        <div className="space-y-4">
                            {irvingFaqs.map((faq, index) => (
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
                        20 Minutes from Las Colinas. World-Class Courts.
                    </h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
                        Join Irving professionals who make DFW Indoor Sports their after-work destination.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/rentals" className="bg-white text-dfw-red px-8 py-4 rounded font-bold uppercase text-sm hover:bg-gray-100 transition-colors flex items-center gap-2">
                            Book Online <ArrowRight size={16} />
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
