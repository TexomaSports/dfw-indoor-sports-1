import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, generateFAQSchema, BUSINESS_INFO } from '@/lib/metadata'
import { Car, Clock, Phone, DollarSign, Trophy, Users, Award, Shield, MapPin, Heart, Palette } from 'lucide-react'
import CityHero from '@/components/city/CityHero'
import CityStats from '@/components/city/CityStats'
import CityFeatures from '@/components/city/CityFeatures'
import CityDirections from '@/components/city/CityDirections'
import CitySportsGrid from '@/components/city/CitySportsGrid'
import CityTestimonial from '@/components/city/CityTestimonial'

export const metadata: Metadata = createPageMetadata({
    title: 'Indoor Sports Near Plano TX | Cricket & Badminton | Family Friendly',
    description: 'The preferred indoor sports facility for Plano families. Quality cricket lanes, badminton coaching, and safe indoor soccer fields. Just a short drive on TX-121. Open daily 5AM-11PM.',
    keywords: [
        'indoor sports Plano TX',
        'cricket coaching Plano',
        'badminton lessons Plano',
        'family sports facility near Plano',
        'indoor soccer Plano',
        'kids sports programs Plano',
        'cultural sports center DFW',
    ],
    path: '/areas-we-serve/plano',
})

const planoFaqs = [
    {
        question: 'How long is the drive from Plano to DFW Indoor Sports?',
        answer: 'It\'s closer than you might think! Via Sam Rayburn Tollway (TX-121), it\'s a smooth 35-40 minute drive. Many of our members from Plano find the drive relaxing and worth it for the quality of facilities we offer.',
    },
    {
        question: 'Why do Plano residents drive to Fort Worth for indoor sports?',
        answer: 'Quality and Availability. While Plano has facilities, they are often overcrowded or lack specific amenities like programmable cricket bowing machines or Olympic-spec badminton flooring. We offer a spacious, premium experience.',
    },
    {
        question: 'Do you have youth programs for kids from Plano?',
        answer: 'Yes! We have a robust Youth Academy for cricket and badminton. Many Plano parents bring their children for our weekend camps. It\'s a great way for kids to learn discipline and teamwork in a high-quality environment.',
    },
    {
        question: 'Is it safe for families?',
        answer: 'Absolutely. We pride ourselves on being a family-first facility. We maintain a clean, well-lit, and secure environment. We have comfortable seating areas for parents and clean restrooms.',
    },
    {
        question: 'Can we book for private cultural events or parties?',
        answer: 'Yes, we host many community events, birthday parties, and cultural celebrations. Our large open spaces are perfect for gathering your community for a day of sports and fun.',
    },
    {
        question: 'Do you offer membership discounts for families?',
        answer: 'Yes, our Family Membership ($150/mo) is very popular with Plano residents. It covers parents and kids, making it affordable for the whole family to play together.',
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
        description: 'Premier indoor sports destination for Plano families. Specializing in youth cricket and badminton development programs. A safe, high-quality environment for sports and community.',
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
        <div className="bg-[#020408] min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <CityHero
                city="Plano"
                distance="35-40 Min"
                tagline="The preferred weekend sports destination for Plano families and serious athletes."
            />

            <CityStats
                stats={[
                    { icon: Car, value: "35 Min", label: "Via TX-121", sublabel: "Smooth Drive" },
                    { icon: Heart, value: "Family", label: "Friendly", sublabel: "Safe Environment" },
                    { icon: Users, value: "Community", label: "Hub", sublabel: "South Asian Sports" },
                    { icon: Award, value: "Coaching", label: "Certified", sublabel: "Youth Academy" }
                ]}
            />

            <CityFeatures
                title="Why Plano Families Choose Us"
                description="Plano has parks, but for serious skill development and year-round play, DFW Indoor Sports offers an unmatched environment."
                features={[
                    {
                        title: "Cultural Sports Hub",
                        description: "We understand the passion for cricket and badminton in the South Asian community. Our facility is designed to celebrate these sports with the respect and quality they deserve.",
                        icon: Users
                    },
                    {
                        title: "Youth Development Focus",
                        description: "We don't just offer space; we offer growth. Our academy programs in cricket and badminton are led by experienced coaches who nurture talent from the ground up.",
                        icon: Award
                    },
                    {
                        title: "Premium Family Experience",
                        description: "Clean facilities, comfortable waiting areas, and a respectful atmosphere. We ensure that while the kids train, parents can relax or get a workout in too.",
                        icon: Heart
                    },
                    {
                        title: "Worth the Drive",
                        description: "Our members say the 35-minute drive from Plano is a small price for the quality of play. No waiting for courts, no wind affecting your shuttlecock.",
                        icon: Car
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
                        features: ["Pro bowling machines", "Youth coaching", "Tournament hosting"],
                        link: "/cricket-lanes"
                    },
                    {
                        name: "Badminton",
                        icon: "🏸",
                        price: "$10/person",
                        priceNote: "drop-in",
                        features: ["6 Synthetic courts", "Coaching available", "Shoe rentals"],
                        link: "/badminton-courts"
                    },
                    {
                        name: "Events",
                        icon: "🎉",
                        price: "Custom",
                        priceNote: "packages",
                        features: ["Birthday parties", "Cultural festivals", "Community gatherings"],
                        link: "/contact"
                    },
                    {
                        name: "Training",
                        icon: "💪",
                        price: "Academy",
                        priceNote: "monthly",
                        features: ["Structured curriculum", "Certified coaches", "Skill assessment"],
                        link: "/academy"
                    }
                ]}
            />

            <CityDirections
                city="Plano"
                address="16230 Three Wide Drive, Fort Worth, TX 76177"
                googleMapsLink="https://maps.google.com/?q=16230+Three+Wide+Drive+Fort+Worth+TX+76177"
                directions={[
                    {
                        area: "From West Plano / Legacy West",
                        distance: "~32 miles",
                        time: "35-40 min",
                        steps: [
                            "Take Sam Rayburn Tollway (TX-121 S)",
                            "Continue onto TX-114 W toward Roanoke",
                            "Pass through Trophy Club",
                            "Turn left onto Three Wide Drive",
                            "Look for DFW Indoor Sports on the left"
                        ]
                    },
                    {
                        area: "From East Plano / US-75",
                        distance: "~40 miles",
                        time: "40-50 min",
                        steps: [
                            "Take President George Bush Turnpike (PGBT) West",
                            "Merge onto I-35E S",
                            "Take TX-121 S (Sam Rayburn Tollway)",
                            "Continue onto TX-114 W",
                            "Turn left onto Three Wide Drive"
                        ]
                    }
                ]}
            />

            <CityTestimonial
                quote="We live in West Plano and drive here every Sunday for my son's cricket coaching. The coaches are fantastic and the facility is much better maintained than the ones closer to us. It's become our Sunday family ritual."
                author="Raj K."
                location="West Plano Resident"
            />

            {/* FAQ Section */}
            <section className="py-24 bg-gray-900 border-t border-white/10">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-header font-bold text-white uppercase mb-12 text-center">
                            Questions from Plano Parents
                        </h2>
                        <div className="space-y-4">
                            {planoFaqs.map((faq, index) => (
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
