import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, generateFAQSchema, BUSINESS_INFO } from '@/lib/metadata'
import Link from 'next/link'
import { MapPin, Clock, Car, ArrowRight, Phone, CheckCircle, Star, DollarSign, Users, Trophy, Shield, Target, Building } from 'lucide-react'

export const metadata: Metadata = createPageMetadata({
    title: 'Indoor Sports Near Plano TX | Cricket, Badminton, Soccer | 35 Min Drive',
    description: 'Looking for indoor cricket or badminton near Plano, Texas? DFW Indoor Sports offers 50,000 sq ft of professional courts just 35 minutes west. Open 5AM-11PM. Courts from $25/hr. Call (817) 938-0808.',
    keywords: [
        'indoor sports near Plano TX',
        'Plano cricket facility',
        'badminton courts Plano',
        'indoor soccer Plano Texas',
        'sports complex near Plano',
        'cricket practice Plano',
        'badminton near me Plano',
    ],
    path: '/areas-we-serve/plano',
})

const planoFaqs = [
    {
        question: 'How long is the drive from Plano to DFW Indoor Sports?',
        answer: 'From central Plano, expect approximately 35-45 minutes via TX-121 W to TX-114 W. Traffic is usually light, especially on weekends. Many of our Plano members make the drive 2-3 times per week.',
    },
    {
        question: 'Why do Plano residents drive to Fort Worth for indoor sports?',
        answer: 'Our purpose-built 50,000 sq ft facility offers amenities that Plano gyms can\'t match: programmable bowling machines (40-90 mph) for cricket, Olympic-specification badminton courts with proper ceiling height, and a dedicated indoor soccer field. Once you play here, the drive is worth it.',
    },
    {
        question: 'Do you have youth programs for kids from Plano?',
        answer: 'Yes! Our Youth Academy serves families from across DFW, including many from Plano. We offer cricket and badminton training for ages 6+, with Saturday programs that work well for Plano families who want to make a day trip.',
    },
    {
        question: 'What are the membership options for Plano residents?',
        answer: 'Monthly memberships start at $70 for adult open play access. For Plano residents who plan to visit 2+ times per month, membership pays for itself. Members also get priority booking up to 30 days in advance.',
    },
    {
        question: 'Is there a South Asian sports community at DFW Indoor Sports?',
        answer: 'Absolutely. Our facility has become a hub for the DFW South Asian community. We host cricket leagues, badminton tournaments, and social events. Many Plano families appreciate the community atmosphere alongside the professional facilities.',
    },
    {
        question: 'Can I book courts online?',
        answer: 'Yes, our online booking system is available 24/7. You can reserve specific courts and time slots in advance. For weekend bookings from Plano, we recommend reserving at least 3-5 days ahead.',
    },
]

export default function PlanoPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Areas We Serve', url: '/areas-we-serve' },
        { name: 'Plano', url: '/areas-we-serve/plano' },
    ])

    const faqSchema = generateFAQSchema(planoFaqs)

    const citySchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: BUSINESS_INFO.name,
        description: 'Premier indoor sports facility serving Plano, Texas with professional cricket lanes, badminton courts, soccer fields, and dodgeball. Located 35 minutes west of Plano.',
        url: `${BUSINESS_INFO.url}/areas-we-serve/plano`,
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
        areaServed: { '@type': 'City', name: 'Plano', containedInPlace: { '@type': 'State', name: 'Texas' } },
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
                        <MapPin size={14} className="text-dfw-red" /> Serving Plano, TX
                    </span>
                    <h1 className="text-4xl md:text-6xl font-header font-bold text-white uppercase mb-6">
                        Indoor Sports Near Plano, Texas
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                        Plano has great dining and shopping—but for serious indoor sports, make the <strong className="text-dfw-red">35-minute drive</strong> to DFW Indoor Sports.
                        Professional cricket lanes, Olympic badminton courts, and a welcoming community await.
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
                            <p className="font-bold text-dfw-navy dark:text-white text-lg">35-45 Min</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">from Plano</p>
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

            {/* Why Plano Residents Choose Us */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6 text-center">
                            Why Plano Families Make the Drive
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-3xl mx-auto">
                            Plano is known for excellent schools and family-friendly communities. We've become a weekend destination for Plano families who want quality sports facilities for their kids—and themselves.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-dfw-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Trophy className="text-dfw-red" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-2">Professional Cricket Training</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            Our bowling machines can be programmed from 40-90 mph with various spin settings. Plano cricket enthusiasts who want real practice—not just net sessions—find exactly what they need here.
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
                                        <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-2">Active Community</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            Our player community includes families from Plano, Frisco, Allen, and McKinney. Weekend sessions often turn into social gatherings. Many Plano members have formed regular playing groups through our facility.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-dfw-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Target className="text-dfw-red" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-2">Youth Development Programs</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            Our Saturday Academy sessions attract families from across the Metroplex. Professional coaching in cricket and badminton for ages 6+, with structured curriculum that actually develops skills.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-dfw-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Shield className="text-dfw-red" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-2">Year-Round Comfort</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            Whether it's 105°F in August or a rare Texas ice storm, our climate-controlled facility maintains 68-72°F year-round. No more canceled practices or weather delays.
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
                                        "We live in West Plano and tried several badminton options closer to home. Nothing compared. The courts at DFW Indoor Sports are proper Olympic spec—good ceiling height, correct flooring, professional nets. Our whole family goes on Saturday mornings now. It's become a weekly tradition."
                                    </p>
                                    <p className="text-gray-400 text-sm">— Raj K., West Plano</p>
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
                            Getting Here from Plano
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                            Our address: <strong>16230 Three Wide Drive, Fort Worth, TX 76177</strong>
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div className="bg-white dark:bg-white/5 p-6 rounded-xl">
                                <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-4 flex items-center gap-2">
                                    <MapPin size={18} className="text-dfw-red" /> From Central/Downtown Plano
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3"><strong>Distance:</strong> ~32 miles | <strong>Time:</strong> 35-45 min</p>
                                <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                                    <li>Take TX-121 (Sam Rayburn Tollway) west</li>
                                    <li>Continue onto TX-114 W past Grapevine/DFW Airport</li>
                                    <li>Stay on TX-114 W through Trophy Club and Roanoke</li>
                                    <li>Take the Three Wide Drive exit</li>
                                    <li>Turn left onto Three Wide Drive</li>
                                    <li>DFW Indoor Sports is on your left</li>
                                </ol>
                            </div>

                            <div className="bg-white dark:bg-white/5 p-6 rounded-xl">
                                <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-4 flex items-center gap-2">
                                    <MapPin size={18} className="text-dfw-red" /> From West Plano / The Colony
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3"><strong>Distance:</strong> ~28 miles | <strong>Time:</strong> 30-40 min</p>
                                <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                                    <li>Head west on TX-121 (Sam Rayburn Tollway)</li>
                                    <li>Merge onto TX-114 W at the interchange</li>
                                    <li>Continue west through Southlake and Trophy Club</li>
                                    <li>Take the Three Wide Drive exit</li>
                                    <li>Turn left onto Three Wide Drive</li>
                                </ol>
                            </div>
                        </div>

                        {/* Tips */}
                        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                            <h4 className="font-bold text-dfw-navy dark:text-white mb-3">🚗 Tips for Plano Drivers</h4>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                                <li><CheckCircle className="inline text-blue-500 mr-2" size={16} /><strong>Weekend mornings:</strong> 25-30 min drive with minimal traffic</li>
                                <li><CheckCircle className="inline text-blue-500 mr-2" size={16} /><strong>Tollway vs free:</strong> TX-121/114 is fastest; free routes add 15-20 min</li>
                                <li><CheckCircle className="inline text-blue-500 mr-2" size={16} /><strong>Make it a day trip:</strong> Many Plano families combine the drive with lunch in Southlake or Roanoke</li>
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
                            Questions from Plano Players
                        </h2>

                        <div className="space-y-4">
                            {planoFaqs.map((faq, index) => (
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
                        Ready to Experience DFW's Best Indoor Sports?
                    </h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
                        Join families from Plano, Frisco, and Allen who make DFW Indoor Sports their weekend destination.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/rentals" className="bg-white text-dfw-red px-8 py-4 rounded font-bold uppercase text-sm hover:bg-gray-100 transition-colors flex items-center gap-2">
                            Book Online <ArrowRight size={16} />
                        </Link>
                        <Link href="/memberships" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded font-bold uppercase text-sm hover:bg-white/10 transition-colors">
                            Memberships from $70/mo
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
