import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, BUSINESS_INFO } from '@/lib/metadata'
import Link from 'next/link'
import { MapPin, Clock, Car, ArrowRight, Phone, Dumbbell, Users, Trophy } from 'lucide-react'

export const metadata: Metadata = createPageMetadata({
    title: 'Indoor Sports Near Dallas | Cricket, Badminton, Soccer & Dodgeball',
    description: 'DFW Indoor Sports - just 25 minutes from Dallas. Premier indoor cricket lanes, badminton courts, soccer fields, and dodgeball. Professional coaching and court rentals available.',
    keywords: [
        'indoor sports near Dallas',
        'Dallas cricket facility',
        'badminton courts Dallas area',
        'indoor soccer Dallas',
        'sports facility near Dallas TX',
    ],
    path: '/areas-we-serve/dallas',
})

export default function DallasPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Areas We Serve', url: '/areas-we-serve' },
        { name: 'Dallas', url: '/areas-we-serve/dallas' },
    ])

    const citySchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: BUSINESS_INFO.name,
        description: 'Premier indoor sports facility serving Dallas residents with cricket, badminton, soccer, and dodgeball courts.',
        url: `${BUSINESS_INFO.url}/areas-we-serve/dallas`,
        telephone: BUSINESS_INFO.contact.phone,
        address: {
            '@type': 'PostalAddress',
            streetAddress: BUSINESS_INFO.address.street,
            addressLocality: BUSINESS_INFO.address.city,
            addressRegion: BUSINESS_INFO.address.state,
            postalCode: BUSINESS_INFO.address.zip,
            addressCountry: BUSINESS_INFO.address.country,
        },
        areaServed: {
            '@type': 'City',
            name: 'Dallas',
            containedInPlace: {
                '@type': 'State',
                name: 'Texas',
            },
        },
    }

    return (
        <div className="bg-white dark:bg-[#020408] min-h-screen transition-colors duration-300">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
            />

            {/* Hero Section */}
            <section className="py-24 bg-gradient-to-b from-dfw-navy to-[#0a1628] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/textures/cubes.png')] opacity-5"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold text-white uppercase tracking-widest mb-6">
                        <MapPin size={14} className="text-dfw-red" /> Serving Dallas, TX
                    </span>
                    <h1 className="text-4xl md:text-6xl font-header font-bold text-white uppercase mb-6">
                        Indoor Sports Near Dallas
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                        Just <strong className="text-dfw-red">25 minutes</strong> from downtown Dallas.
                        Professional indoor cricket, badminton, soccer, and dodgeball facilities.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/rentals"
                            className="bg-dfw-red text-white px-8 py-3 rounded font-bold uppercase text-sm hover:bg-red-700 transition-colors flex items-center gap-2"
                        >
                            Book a Court <ArrowRight size={16} />
                        </Link>
                        <Link
                            href="/contact"
                            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded font-bold uppercase text-sm hover:bg-white/10 transition-colors"
                        >
                            Get Directions
                        </Link>
                    </div>
                </div>
            </section>

            {/* Distance Info */}
            <section className="py-12 bg-gray-50 dark:bg-[#0a111f]">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="bg-white dark:bg-white/5 p-6 rounded-lg text-center">
                            <Car className="text-dfw-red mx-auto mb-3" size={32} />
                            <p className="font-bold text-dfw-navy dark:text-white text-lg">25 Minutes</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">from Downtown Dallas</p>
                        </div>
                        <div className="bg-white dark:bg-white/5 p-6 rounded-lg text-center">
                            <Clock className="text-dfw-red mx-auto mb-3" size={32} />
                            <p className="font-bold text-dfw-navy dark:text-white text-lg">5 AM - 11 PM</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Open 7 Days a Week</p>
                        </div>
                        <div className="bg-white dark:bg-white/5 p-6 rounded-lg text-center">
                            <Phone className="text-dfw-red mx-auto mb-3" size={32} />
                            <p className="font-bold text-dfw-navy dark:text-white text-lg">(817) 938-0808</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Call to Book</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Directions */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                        <div>
                            <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6">
                                Getting Here from Dallas
                            </h2>
                            <div className="space-y-4 text-gray-600 dark:text-gray-400">
                                <p><strong className="text-dfw-navy dark:text-white">Via I-35W North:</strong></p>
                                <ol className="list-decimal list-inside space-y-2 pl-4">
                                    <li>Take I-35W North toward Fort Worth</li>
                                    <li>Continue on I-35W for approximately 20 miles</li>
                                    <li>Take exit 67 toward TX-114</li>
                                    <li>Turn right onto Three Wide Drive</li>
                                    <li>DFW Indoor Sports is on your right at 16230 Three Wide Drive</li>
                                </ol>
                                <p className="mt-6 text-sm bg-gray-100 dark:bg-white/5 p-4 rounded-lg">
                                    <strong>Pro Tip:</strong> Traffic is lighter before 7 AM and after 8 PM.
                                    Many Dallas members schedule early morning or late evening sessions.
                                </p>
                            </div>
                        </div>
                        <div className="bg-gray-100 dark:bg-white/5 p-8 rounded-xl">
                            <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-4">Our Address</h3>
                            <address className="not-italic text-gray-600 dark:text-gray-400 mb-6">
                                16230 Three Wide Drive, Suite 200<br />
                                Fort Worth, TX 76177
                            </address>
                            <Link
                                href="https://maps.google.com/?q=16230+Three+Wide+Drive+Fort+Worth+TX+76177"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-dfw-navy dark:bg-white text-white dark:text-dfw-navy px-6 py-3 rounded font-bold uppercase text-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                            >
                                <MapPin size={16} /> Open in Google Maps
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sports Available */}
            <section className="py-24 bg-gray-50 dark:bg-[#0a111f]">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-12 text-center">
                        Sports Available for Dallas Residents
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {[
                            { name: 'Cricket', icon: '🏏', link: '/cricket-lanes', desc: 'Professional lanes with bowling machines' },
                            { name: 'Badminton', icon: '🏸', link: '/badminton-courts', desc: 'Olympic-grade courts, all skill levels' },
                            { name: 'Soccer', icon: '⚽', link: '/soccer-fields', desc: 'Indoor futsal and 5-a-side fields' },
                            { name: 'Dodgeball', icon: '🔴', link: '/dodgeball-courts', desc: 'Fun for groups and team building' },
                        ].map((sport) => (
                            <Link
                                key={sport.name}
                                href={sport.link}
                                className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 p-6 rounded-xl text-center hover:shadow-lg hover:border-dfw-red/30 transition-all group"
                            >
                                <span className="text-4xl mb-4 block">{sport.icon}</span>
                                <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-2 group-hover:text-dfw-red transition-colors">
                                    {sport.name}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">{sport.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Dallas Residents Choose Us */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-12 text-center">
                        Why Dallas Players Choose DFW Indoor Sports
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-dfw-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Dumbbell className="text-dfw-red" size={28} />
                            </div>
                            <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-2">Pro-Level Facilities</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">50,000 sq ft of premium indoor courts and lanes</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-dfw-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="text-dfw-red" size={28} />
                            </div>
                            <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-2">Expert Coaching</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Professional coaches for all skill levels</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-dfw-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Trophy className="text-dfw-red" size={28} />
                            </div>
                            <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-2">Active Community</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Leagues, tournaments, and social events</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-dfw-red">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-header font-bold text-white uppercase mb-4">
                        Ready to Play?
                    </h2>
                    <p className="text-white/80 mb-8 max-w-xl mx-auto">
                        Join hundreds of Dallas residents who make the short drive to DFW Indoor Sports every week.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/memberships"
                            className="bg-white text-dfw-red px-8 py-3 rounded font-bold uppercase text-sm hover:bg-gray-100 transition-colors"
                        >
                            View Memberships
                        </Link>
                        <Link
                            href="tel:8179380808"
                            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded font-bold uppercase text-sm hover:bg-white/10 transition-colors"
                        >
                            Call (817) 938-0808
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
