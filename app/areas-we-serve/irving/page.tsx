import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, BUSINESS_INFO } from '@/lib/metadata'
import Link from 'next/link'
import { MapPin, Clock, Car, ArrowRight, Phone } from 'lucide-react'

export const metadata: Metadata = createPageMetadata({
    title: 'Indoor Sports Near Irving | Cricket, Badminton, Soccer & Dodgeball',
    description: 'DFW Indoor Sports - 30 minutes from Irving. Premier indoor cricket lanes, badminton courts, soccer fields, and dodgeball. Easy access via I-35W.',
    keywords: [
        'indoor sports near Irving',
        'Irving cricket facility',
        'badminton courts Irving area',
        'indoor soccer Irving',
    ],
    path: '/areas-we-serve/irving',
})

export default function IrvingPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Areas We Serve', url: '/areas-we-serve' },
        { name: 'Irving', url: '/areas-we-serve/irving' },
    ])

    const citySchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: BUSINESS_INFO.name,
        description: 'Premier indoor sports facility serving Irving residents.',
        url: `${BUSINESS_INFO.url}/areas-we-serve/irving`,
        telephone: BUSINESS_INFO.contact.phone,
        areaServed: { '@type': 'City', name: 'Irving' },
    }

    return (
        <div className="bg-white dark:bg-[#020408] min-h-screen transition-colors duration-300">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />

            <section className="py-24 bg-gradient-to-b from-dfw-navy to-[#0a1628]">
                <div className="container mx-auto px-4 text-center">
                    <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold text-white uppercase tracking-widest mb-6">
                        <MapPin size={14} className="text-dfw-red" /> Serving Irving, TX
                    </span>
                    <h1 className="text-4xl md:text-6xl font-header font-bold text-white uppercase mb-6">Indoor Sports Near Irving</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                        Just <strong className="text-dfw-red">30 minutes</strong> from Irving via I-35W.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/rentals" className="bg-dfw-red text-white px-8 py-3 rounded font-bold uppercase text-sm flex items-center gap-2">Book a Court <ArrowRight size={16} /></Link>
                        <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded font-bold uppercase text-sm">Get Directions</Link>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gray-50 dark:bg-[#0a111f]">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="bg-white dark:bg-white/5 p-6 rounded-lg text-center">
                            <Car className="text-dfw-red mx-auto mb-3" size={32} />
                            <p className="font-bold text-dfw-navy dark:text-white text-lg">30 Minutes</p>
                            <p className="text-gray-500 text-sm">from Irving</p>
                        </div>
                        <div className="bg-white dark:bg-white/5 p-6 rounded-lg text-center">
                            <Clock className="text-dfw-red mx-auto mb-3" size={32} />
                            <p className="font-bold text-dfw-navy dark:text-white text-lg">5 AM - 11 PM</p>
                            <p className="text-gray-500 text-sm">Open 7 Days</p>
                        </div>
                        <div className="bg-white dark:bg-white/5 p-6 rounded-lg text-center">
                            <Phone className="text-dfw-red mx-auto mb-3" size={32} />
                            <p className="font-bold text-dfw-navy dark:text-white text-lg">(817) 938-0808</p>
                            <p className="text-gray-500 text-sm">Call to Book</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6">Getting Here from Irving</h2>
                    <div className="text-gray-600 dark:text-gray-400 space-y-4">
                        <p><strong>Via TX-183 & I-35W:</strong></p>
                        <ol className="list-decimal list-inside space-y-2 pl-4">
                            <li>Take TX-183 West toward Fort Worth</li>
                            <li>Merge onto I-35W North</li>
                            <li>Exit 67 toward TX-114</li>
                            <li>Turn right onto Three Wide Drive</li>
                        </ol>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-dfw-red">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-header font-bold text-white uppercase mb-4">Ready to Play?</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/memberships" className="bg-white text-dfw-red px-8 py-3 rounded font-bold uppercase text-sm">View Memberships</Link>
                        <Link href="tel:8179380808" className="border-2 border-white text-white px-8 py-3 rounded font-bold uppercase text-sm">Call (817) 938-0808</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
