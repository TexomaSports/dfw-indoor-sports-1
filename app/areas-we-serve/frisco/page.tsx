import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, generateFAQSchema, BUSINESS_INFO } from '@/lib/metadata'
import { Car, Clock, Phone, DollarSign, Trophy, Users, Award, Shield, Target, Heart, CheckCircle } from 'lucide-react'
import CityHero from '@/components/city/CityHero'
import CityStats from '@/components/city/CityStats'
import CityFeatures from '@/components/city/CityFeatures'
import CityDirections from '@/components/city/CityDirections'
import CitySportsGrid from '@/components/city/CitySportsGrid'
import CityTestimonial from '@/components/city/CityTestimonial'

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
        <div className="bg-[#020408] min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <CityHero
                city="Frisco"
                distance="40-50 Min"
                tagline="Worth the drive for Frisco athletes seeking professional-grade facilities."
            />

            <CityStats
                stats={[
                    { icon: Car, value: "40 Min", label: "Worth the Drive", sublabel: "Via TX-121" },
                    { icon: Target, value: "Youth", label: "Programs", sublabel: "Build Champions" },
                    { icon: Users, value: "Community", label: "North DFW", sublabel: "Find Players" },
                    { icon: Heart, value: "Family", label: "Focused", sublabel: "Safe & clean" }
                ]}
            />

            <CityFeatures
                title="Why Frisco Families Make the Trip"
                description="Frisco is growing fast, but for specialized indoor sports training, DFW Indoor Sports remains the destination of choice."
                features={[
                    {
                        title: "Professional Youth Training",
                        description: "Our structured academy programs are worth the weekly commute. We provide the disciplined, high-level coaching that aspiring athletes need to truly improve.",
                        icon: Target
                    },
                    {
                        title: "Olympic-Standard Courts",
                        description: "Don't compromise with multi-purpose gym floors. Our badminton courts have proper BWF-approved synthetic flooring that protects knees and improves game play.",
                        icon: Trophy
                    },
                    {
                        title: "North DFW Hub",
                        description: "We've become a central gathering point for the cricket and badminton communities of Frisco, Plano, and McKinney. You'll likely see neighbors here!",
                        icon: Users
                    },
                    {
                        title: "Weekend Destination",
                        description: "Make a day of it. Saturday morning training followed by lunch in nearby Southlake Town Square makes for a perfect family weekend routine.",
                        icon: Heart
                    }
                ]}
            />

            <CitySportsGrid
                sports={[
                    {
                        name: "Cricket",
                        icon: "🏏",
                        price: "$25/hr",
                        priceNote: "lane rental",
                        features: ["Private lanes", "Bowling machines", "Kit storage available"],
                        link: "/cricket-lanes"
                    },
                    {
                        name: "Badminton",
                        icon: "🏸",
                        price: "$10/person",
                        priceNote: "drop-in",
                        features: ["6 Courts", "High ceiling", "Yonex shuttles"],
                        link: "/badminton-courts"
                    },
                    {
                        name: "Birthday Parties",
                        icon: "🎂",
                        price: "$250+",
                        priceNote: "package",
                        features: ["2 hours event", "Dodgeball/Soccer", "Party room"],
                        link: "/contact"
                    },
                    {
                        name: "Academy",
                        icon: "🎓",
                        price: "Enroll",
                        priceNote: "now",
                        features: ["Ages 6-16", "Expert coaches", "Skill progression"],
                        link: "/academy"
                    }
                ]}
            />

            <CityDirections
                city="Frisco"
                address="16230 Three Wide Drive, Fort Worth, TX 76177"
                googleMapsLink="https://maps.google.com/?q=16230+Three+Wide+Drive+Fort+Worth+TX+76177"
                directions={[
                    {
                        area: "From Frisco / Boyd High Area",
                        distance: "~38 miles",
                        time: "40-45 min",
                        steps: [
                            "Take TX-121 S (Sam Rayburn Tollway)",
                            "Merge onto TX-114 W toward Roanoke/Fort Worth",
                            "Continue straight past Trophy Club",
                            "Exit toward Three Wide Drive",
                            "Turn left onto Three Wide Drive"
                        ]
                    },
                    {
                        area: "From West Frisco / FM 423",
                        distance: "~35 miles",
                        time: "35-40 min",
                        steps: [
                            "Take FM 423 South",
                            "Turn right onto TX-121 S",
                            "Merge onto TX-114 W",
                            "Continue to Roanoke area",
                            "Turn left onto Three Wide Drive"
                        ]
                    }
                ]}
            />

            <CityTestimonial
                quote="We moved to Frisco from India and really missed having proper cricket facilities. DFW Indoor Sports is the closest thing to what we had back home. Yes, it's a 45-minute drive, but we go every Saturday morning. Our son has improved so much."
                author="Venkat S."
                location="Frisco Resident"
            />

            {/* FAQ Section */}
            <section className="py-24 bg-gray-900 border-t border-white/10">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-header font-bold text-white uppercase mb-12 text-center">
                            Frisco Family FAQs
                        </h2>
                        <div className="space-y-4">
                            {friscoFaqs.map((faq, index) => (
                                <details key={index} className="bg-white/5 border border-white/10 p-6 rounded-xl group cursor-pointer hover:bg-white/10 transition-colors">
                                    <summary className="font-bold text-white flex items-center justify-between list-none">
                                        {faq.question}
                                        <span className="text-dfw-red group-open:rotate-45 transition-transform">+</span>
                                    </summary>
                                    <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
