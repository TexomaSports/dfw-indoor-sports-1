import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema } from '@/lib/metadata'
import Link from 'next/link'
import { MapPin, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = createPageMetadata({
    title: 'Areas We Serve | Indoor Sports Near Dallas, Fort Worth, Arlington & Plano',
    description: 'DFW Indoor Sports serves the entire Dallas-Fort Worth metroplex. Find indoor cricket, badminton, soccer, and dodgeball near you in Fort Worth, Dallas, Arlington, Plano, Irving, and Frisco.',
    keywords: [
        'indoor sports near me Dallas',
        'sports facility Fort Worth',
        'cricket courts Arlington',
        'badminton Plano',
        'indoor soccer Irving',
        'sports facility near Frisco',
    ],
    path: '/areas-we-serve',
})

const cities = [
    {
        name: 'Dallas',
        slug: 'dallas',
        distance: '25 min drive',
        description: 'Serving cricket, badminton, soccer & dodgeball enthusiasts from Dallas and surrounding areas.',
        population: '1.3M+',
    },
    {
        name: 'Arlington',
        slug: 'arlington',
        distance: '20 min drive',
        description: 'Your closest premier indoor sports destination for Arlington residents.',
        population: '400K+',
    },
    {
        name: 'Plano',
        slug: 'plano',
        distance: '40 min drive',
        description: 'Worth the drive for Plano athletes seeking professional-grade facilities.',
        population: '290K+',
    },
    {
        name: 'Irving',
        slug: 'irving',
        distance: '30 min drive',
        description: 'Easy access from Irving via I-35W for all your indoor sports needs.',
        population: '250K+',
    },
    {
        name: 'Frisco',
        slug: 'frisco',
        distance: '45 min drive',
        description: 'Frisco families choose DFW Indoor Sports for quality facilities and coaching.',
        population: '220K+',
    },
]

export default function AreasWeServePage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Areas We Serve', url: '/areas-we-serve' },
    ])

    return (
        <div className="bg-white dark:bg-[#020408] min-h-screen transition-colors duration-300">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            {/* Hero Section */}
            <section className="py-24 bg-gradient-to-b from-dfw-navy to-[#0a1628]">
                <div className="container mx-auto px-4 text-center">
                    <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold text-white uppercase tracking-widest mb-6">
                        <MapPin size={14} className="text-dfw-red" /> Local SEO
                    </span>
                    <h1 className="text-4xl md:text-6xl font-header font-bold text-white uppercase mb-6">
                        Areas We Serve
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        DFW Indoor Sports proudly serves the entire Dallas-Fort Worth metroplex.
                        Find indoor cricket, badminton, soccer, and dodgeball near you.
                    </p>
                </div>
            </section>

            {/* Facility Location Highlight */}
            <section className="py-16 bg-gray-50 dark:bg-[#0a111f]">
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-4 bg-white dark:bg-white/5 px-6 py-4 rounded-lg shadow-md">
                        <MapPin className="text-dfw-red" size={24} />
                        <div className="text-left">
                            <p className="font-bold text-dfw-navy dark:text-white">Our Location</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">16230 Three Wide Drive, Fort Worth, TX 76177</p>
                        </div>
                        <div className="pl-4 border-l border-gray-200 dark:border-white/10">
                            <Clock className="text-gray-400" size={20} />
                        </div>
                        <div className="text-left">
                            <p className="font-bold text-dfw-navy dark:text-white">Open Daily</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">5:00 AM - 11:00 PM</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* City Grid */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-12 text-center">
                        Find Indoor Sports Near You
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cities.map((city) => (
                            <Link
                                key={city.slug}
                                href={`/areas-we-serve/${city.slug}`}
                                className="group bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-xl p-8 hover:shadow-xl hover:border-dfw-red/30 transition-all duration-300"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-2xl font-header font-bold text-dfw-navy dark:text-white uppercase group-hover:text-dfw-red transition-colors">
                                        {city.name}
                                    </h3>
                                    <span className="bg-gray-100 dark:bg-white/10 px-3 py-1 rounded-full text-xs font-bold text-gray-500 dark:text-gray-400">
                                        {city.distance}
                                    </span>
                                </div>
                                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                                    {city.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-400 dark:text-gray-500">Population: {city.population}</span>
                                    <span className="flex items-center gap-2 text-dfw-red text-xs font-bold uppercase group-hover:gap-3 transition-all">
                                        View Details <ArrowRight size={14} />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-dfw-red">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-header font-bold text-white uppercase mb-4">
                        Ready to Visit?
                    </h2>
                    <p className="text-white/80 mb-8 max-w-xl mx-auto">
                        No matter where you're coming from in the DFW metroplex, we're worth the drive.
                        Book your court today or schedule a free facility tour.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/contact"
                            className="bg-white text-dfw-red px-8 py-3 rounded font-bold uppercase text-sm hover:bg-gray-100 transition-colors"
                        >
                            Contact Us
                        </Link>
                        <Link
                            href="/rentals"
                            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded font-bold uppercase text-sm hover:bg-white/10 transition-colors"
                        >
                            Book a Court
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
