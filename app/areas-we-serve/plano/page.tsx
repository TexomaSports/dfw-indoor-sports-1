import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, BUSINESS_INFO } from '@/lib/metadata'
import Link from 'next/link'
import { MapPin, Clock, Car, ArrowRight, Phone, Dumbbell, Users, Trophy } from 'lucide-react'

export const metadata: Metadata = createPageMetadata({
    title: 'Indoor Sports Near Plano | Cricket, Badminton, Soccer & Dodgeball',
    description: 'DFW Indoor Sports - 40 minutes from Plano. Premier indoor cricket lanes, badminton courts, soccer fields, and dodgeball. Worth the drive for professional facilities.',
    keywords: [
        'indoor sports near Plano',
        'Plano cricket facility',
        'badminton courts Plano area',
        'indoor soccer Plano',
        'sports facility near Plano TX',
    ],
    path: '/areas-we-serve/plano',
})

export default function PlanoPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Areas We Serve', url: '/areas-we-serve' },
        { name: 'Plano', url: '/areas-we-serve/plano' },
    ])

    const citySchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: BUSINESS_INFO.name,
        description: 'Premier indoor sports facility serving Plano residents with cricket, badminton, soccer, and dodgeball courts.',
        url: `${BUSINESS_INFO.url}/areas-we-serve/plano`,
        telephone: BUSINESS_INFO.contact.phone,
        areaServed: { '@type': 'City', name: 'Plano' },
    }

    return (
        <div className="bg-white dark:bg-[#020408] min-h-screen transition-colors duration-300">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />

            <section className="py-24 bg-gradient-to-b from-dfw-navy to-[#0a1628]">
                <div className="container mx-auto px-4 text-center">
                    <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold text-white uppercase tracking-widest mb-6">
                        <MapPin size={14} className="text-dfw-red" /> Serving Plano, TX
                    </span>
                    <h1 className="text-4xl md:text-6xl font-header font-bold text-white uppercase mb-6">Indoor Sports Near Plano</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                        <strong className="text-dfw-red">40 minutes</strong> from Plano. Worth the drive for professional-grade facilities.
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
                            <p className="font-bold text-dfw-navy dark:text-white text-lg">40 Minutes</p>
                            <p className="text-gray-500 text-sm">from Plano</p>
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
                    <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6">Getting Here from Plano</h2>
                    <div className="text-gray-600 dark:text-gray-400 space-y-4">
                        <p><strong>Via I-35W South & TX-121:</strong></p>
                        <ol className="list-decimal list-inside space-y-2 pl-4">
                            <li>Take TX-121 West toward Fort Worth</li>
                            <li>Continue to I-35W South</li>
                            <li>Exit 67 toward TX-114</li>
                            <li>Turn right onto Three Wide Drive</li>
                        </ol>
                        <p className="bg-gray-100 dark:bg-white/5 p-4 rounded-lg text-sm mt-6">
                            <strong>Pro Tip:</strong> Many Plano families make weekend trips for youth coaching programs.
                        </p>
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
