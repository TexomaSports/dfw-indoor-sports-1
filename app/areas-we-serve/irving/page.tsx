import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, generateFAQSchema, BUSINESS_INFO } from '@/lib/metadata'
import { Car, Clock, Phone, DollarSign, Trophy, Users, Award, Shield, Plane, Briefcase, MapPin } from 'lucide-react'
import CityHero from '@/components/city/CityHero'
import CityStats from '@/components/city/CityStats'
import CityFeatures from '@/components/city/CityFeatures'
import CityDirections from '@/components/city/CityDirections'
import CitySportsGrid from '@/components/city/CitySportsGrid'
import CityTestimonial from '@/components/city/CityTestimonial'

export const metadata: Metadata = createPageMetadata({
    title: 'Indoor Sports Near Irving & Las Colinas | Cricket, Soccer, Corporate Events',
    description: 'Premier indoor sports facility just 15 mins from DFW Airport and Las Colinas. Perfect for corporate team building, cricket leagues, and after-work badminton. Open late daily.',
    keywords: [
        'indoor sports Irving TX',
        'Las Colinas team building',
        'cricket near DFW Airport',
        'badminton courts Irving',
        'indoor soccer Las Colinas',
        'corporate sports events DFW',
        'sports facility near Irving',
    ],
    path: '/areas-we-serve/irving',
})

const irvingFaqs = [
    {
        question: 'How far is DFW Indoor Sports from Irving/Las Colinas?',
        answer: 'We are extremely convenient for Irving residents. From Las Colinas, it\'s typically a 15-20 minute drive via TX-114 W. We are located just north of the Texas Motor Speedway area.',
    },
    {
        question: 'Is your facility convenient for DFW Airport travelers?',
        answer: 'Yes! We are directly adjacent to the airport area. If you have a long layover or are staying at an airport hotel, we are a quick Uber ride away for a workout or game.',
    },
    {
        question: 'Do you offer corporate events for Irving businesses?',
        answer: 'We specialize in them. With Las Colinas being a corporate hub, we host many company tournaments and team-building days. We can organize cricket matches, dodgeball tournaments, or multi-sport Olympics for your team.',
    },
    {
        question: 'Do you have shower facilities?',
        answer: 'Yes, we have clean changing rooms and showers, making it easy to come for an early morning game before heading to the office or freshening up after an evening match.',
    },
    {
        question: 'Can we reserve courts for recurring company leagues?',
        answer: 'Yes, many companies set up weekly blocked times for their employees. Contact our management team to discuss corporate accounts and recurring bookings.',
    },
    {
        question: 'Is there a lounge area or Wi-Fi?',
        answer: 'Yes, we have a comfortable lounge area with high-speed Wi-Fi, so you can catch up on emails before or after your game.',
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
        description: 'Convenient indoor sports facility for Irving and Las Colinas professionals. Specializing in corporate team building, cricket, badminton, and soccer just minutes from DFW Airport.',
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
        <div className="bg-[#020408] min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <CityHero
                city="Irving"
                distance="15-20 Min"
                tagline="The home court for Las Colinas professionals and DFW travelers."
            />

            <CityStats
                stats={[
                    { icon: Car, value: "15 Min", label: "From Las Colinas", sublabel: "Via TX-114" },
                    { icon: Plane, value: "Airport", label: "Adjacent", sublabel: "10 Min Drive" },
                    { icon: Briefcase, value: "Corporate", label: "Events", sublabel: "Team Building" },
                    { icon: Clock, value: "Late Night", label: "Open til 11 PM", sublabel: "After Work" }
                ]}
            />

            <CityFeatures
                title="Why Irving Professionals Choose Us"
                description="Convenience meets quality. Whether it's a pre-work workout, a team-building event, or an evening league, we fit your schedule."
                features={[
                    {
                        title: "Corporate Team Building",
                        description: "Break out of the boardroom. We organize structured tournaments for Las Colinas companies. Dodgeball, cricket, or soccer—we handle all the logistics.",
                        icon: Briefcase
                    },
                    {
                        title: "Airport Proximity",
                        description: "Located just minutes from DFW Airport, we're the perfect spot for travelers to get a game in, or for colleagues flying in to meet for a fun activity.",
                        icon: Plane
                    },
                    {
                        title: "Executive Amenities",
                        description: "We understand needing to stay connected. High-speed Wi-Fi, clean showers, and a lounge area make it easy to transition between work and play.",
                        icon: Shield
                    },
                    {
                        title: "Diverse Sports Options",
                        description: "From the global appeal of cricket and soccer to the intensity of badminton, we offer sports that appeal to DFW's international workforce.",
                        icon: Trophy
                    }
                ]}
            />

            <CitySportsGrid
                sports={[
                    {
                        name: "Corporate",
                        icon: "🤝",
                        price: "Custom",
                        priceNote: "events",
                        features: ["Full facility buyout", "Catering coordination", "Hosted tournaments"],
                        link: "/contact"
                    },
                    {
                        name: "Badminton",
                        icon: "🏸",
                        price: "$10/person",
                        priceNote: "drop-in",
                        features: ["After-work focus", "Shower facilities", "Racket rentals"],
                        link: "/badminton-courts"
                    },
                    {
                        name: "Cricket",
                        icon: "🏏",
                        price: "$25/hr",
                        priceNote: "lane rental",
                        features: ["Corporate leagues", "Pro equipment", "Team training"],
                        link: "/cricket-lanes"
                    },
                    {
                        name: "Soccer",
                        icon: "⚽",
                        price: "$100/hr",
                        priceNote: "field rental",
                        features: ["5-a-side", "Futsal goals", "League play"],
                        link: "/soccer-fields"
                    }
                ]}
            />

            <CityDirections
                city="Irving"
                address="16230 Three Wide Drive, Fort Worth, TX 76177"
                googleMapsLink="https://maps.google.com/?q=16230+Three+Wide+Drive+Fort+Worth+TX+76177"
                directions={[
                    {
                        area: "From Las Colinas / Urban Center",
                        distance: "~15 miles",
                        time: "15-20 min",
                        steps: [
                            "Take TX-114 W toward Grapevine",
                            "Continue past DFW Airport North entry",
                            "Stay on TX-114 W through Southlake/Trophy Club",
                            "Exit toward Roanoke",
                            "Turn left onto Three Wide Drive"
                        ]
                    },
                    {
                        area: "From South Irving / Belt Line",
                        distance: "~20 miles",
                        time: "25-30 min",
                        steps: [
                            "Take TX-183 W toward Fort Worth",
                            "Merge onto TX-360 N",
                            "Exit toward TX-114 W / Grapevine",
                            "Merge onto TX-114 W",
                            "Continue to Three Wide Drive exit"
                        ]
                    }
                ]}
            />

            <CityTestimonial
                quote="Our company (based in Las Colinas) held our quarterly team building here. It was brilliant. We played a mini cricket tournament and then dodgeball. The staff handled everything perfectly."
                author="Kevin L."
                location="Las Colinas Professional"
            />

            {/* FAQ Section */}
            <section className="py-24 bg-gray-900 border-t border-white/10">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-header font-bold text-white uppercase mb-12 text-center">
                            FAQs for Irving & Las Colinas
                        </h2>
                        <div className="space-y-4">
                            {irvingFaqs.map((faq, index) => (
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
