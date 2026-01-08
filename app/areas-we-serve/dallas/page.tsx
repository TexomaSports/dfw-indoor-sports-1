import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, generateFAQSchema, BUSINESS_INFO } from '@/lib/metadata'
import { Car, Clock, Phone, DollarSign, Trophy, Users, Award, Shield } from 'lucide-react'
import CityHero from '@/components/city/CityHero'
import CityStats from '@/components/city/CityStats'
import CityFeatures from '@/components/city/CityFeatures'
import CityDirections from '@/components/city/CityDirections'
import CitySportsGrid from '@/components/city/CitySportsGrid'
import CityTestimonial from '@/components/city/CityTestimonial'

export const metadata: Metadata = createPageMetadata({
    title: 'Indoor Sports Near Dallas TX | Cricket, Badminton, Soccer Courts | 25 Min Drive',
    description: 'Looking for indoor sports near Dallas? DFW Indoor Sports offers professional cricket lanes, badminton courts, soccer fields & dodgeball just 25 minutes away. Open 5AM-11PM. Drop-in from $25, memberships from $70/mo. Book online or call (817) 938-0808.',
    keywords: [
        'indoor sports near Dallas',
        'Dallas cricket facility',
        'badminton courts Dallas area',
        'indoor soccer Dallas TX',
        'sports facility near Dallas Texas',
        'indoor sports complex Dallas',
        'cricket nets near Dallas',
        'badminton near me Dallas',
        'indoor futsal Dallas',
        'DFW indoor sports',
    ],
    path: '/areas-we-serve/dallas',
})

const dallasFaqs = [
    {
        question: 'How long does it take to get to DFW Indoor Sports from Dallas?',
        answer: 'From downtown Dallas, our facility is approximately 25-30 minutes via I-35W North. From North Dallas areas like Addison or Richardson, expect about 35-40 minutes. We recommend using Google Maps during your first visit as traffic conditions can vary.',
    },
    {
        question: 'What sports can Dallas residents play at DFW Indoor Sports?',
        answer: 'We offer four main sports: Cricket (3 professional lanes with bowling machines), Badminton (6 Olympic-grade courts), Indoor Soccer/Futsal (full-size indoor field), and Dodgeball (dedicated courts). All facilities are climate-controlled and available year-round.',
    },
    {
        question: 'How much does it cost to play?',
        answer: 'Drop-in rates start at $25 per hour for court rental. Monthly memberships start at $70 for adult open play access, with family memberships available at $150. Members get unlimited access during open hours plus priority booking.',
    },
    {
        question: 'Do I need to bring my own equipment?',
        answer: 'No, you don\'t need your own equipment. We provide all necessary gear including bats, rackets, balls, and shuttlecocks. However, many regular players prefer to bring their own equipment for personalized play.',
    },
    {
        question: 'Are there programs for kids from Dallas?',
        answer: 'Yes! We have youth programs for ages 6+ in cricket and badminton. Our Academy offers seasonal camps, after-school programs, and private coaching. Many Dallas families drive out on weekends for structured youth training.',
    },
    {
        question: 'Can I book a court online from Dallas?',
        answer: 'Absolutely. You can book courts online 24/7 through our website, or call us at (817) 938-0808. We recommend booking weekend slots at least 1 week in advance as they fill up quickly, especially from the Dallas area.',
    },
    {
        question: 'Is there parking available?',
        answer: 'Yes, we have a large free parking lot with over 100 spaces. Parking is never an issue, even during peak weekend hours.',
    },
    {
        question: 'What are your hours of operation?',
        answer: 'We\'re open 7 days a week from 5:00 AM to 11:00 PM. This extended schedule is specifically designed to accommodate working professionals who want to play before or after traditional business hours.',
    },
]

export default function DallasPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Areas We Serve', url: '/areas-we-serve' },
        { name: 'Dallas', url: '/areas-we-serve/dallas' },
    ])

    const faqSchema = generateFAQSchema(dallasFaqs)

    const citySchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: BUSINESS_INFO.name,
        description: 'Premier indoor sports facility serving Dallas, Texas residents with professional cricket lanes, badminton courts, soccer fields, and dodgeball courts. Located just 25 minutes from downtown Dallas.',
        url: `${BUSINESS_INFO.url}/areas-we-serve/dallas`,
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
        geo: {
            '@type': 'GeoCoordinates',
            latitude: BUSINESS_INFO.geo.latitude,
            longitude: BUSINESS_INFO.geo.longitude,
        },
        areaServed: {
            '@type': 'City',
            name: 'Dallas',
            containedInPlace: {
                '@type': 'State',
                name: 'Texas',
            },
        },
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '05:00',
            closes: '23:00',
        },
    }

    return (
        <div className="bg-[#020408] min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <CityHero
                city="Dallas"
                distance="25 Min"
                tagline="World-class indoor cricket, badminton, soccer, and dodgeball just 25 minutes from downtown Dallas."
            />

            <CityStats
                stats={[
                    { icon: Car, value: "25 Min", label: "From Downtown", sublabel: "Easy Highway Drive" },
                    { icon: Clock, value: "5 AM - 11 PM", label: "Open Daily", sublabel: "7 Days a Week" },
                    { icon: DollarSign, value: "$25/hr", label: "Starting Rate", sublabel: "Affordable Play" },
                    { icon: Phone, value: "(817) 938-0808", label: "Call to Book", sublabel: "Instant Confirmation" }
                ]}
            />

            <CityFeatures
                title="Why Dallas Residents Make the Drive"
                description="We know you have options in Dallas. But hundreds of Dallas players drive to our Fort Worth facility every week. Here's why."
                features={[
                    {
                        title: "Professional-Grade Facilities",
                        description: "Our 50,000 sq ft facility isn't a converted warehouse—it's purpose-built. Cricket lanes with programmable bowling machines (40-90 mph), Olympic-spec badminton courts, and regulation futsal fields.",
                        icon: Trophy
                    },
                    {
                        title: "Active Playing Community",
                        description: "Finding players at your level can be hard. Our community includes 200+ active members from Dallas, Fort Worth, and Arlington. Find competitive leagues or casual rally partners easily.",
                        icon: Users
                    },
                    {
                        title: "Certified Coaching Staff",
                        description: "Our coaching team includes former pros. Whether for you or your kids, get personalized training that actually improves your game—not just generic drills.",
                        icon: Award
                    },
                    {
                        title: "Year-Round Comfort",
                        description: "Texas weather is unpredictable. Our climate-controlled facility maintains a consistent 68-72°F year-round. No more canceled games due to heat or rain.",
                        icon: Shield
                    }
                ]}
            />

            <CitySportsGrid
                sports={[
                    {
                        name: "Cricket",
                        icon: "🏏",
                        price: "$25/hr",
                        priceNote: "per lane",
                        features: ["3 professional lanes", "Bowling machines", "Gear included"],
                        link: "/cricket-lanes"
                    },
                    {
                        name: "Badminton",
                        icon: "🏸",
                        price: "$10/person",
                        priceNote: "open play",
                        features: ["6 Olympic courts", "30ft ceilings", "Professional flooring"],
                        link: "/badminton-courts"
                    },
                    {
                        name: "Soccer",
                        icon: "⚽",
                        price: "$100/hr",
                        priceNote: "field rental",
                        features: ["Full futsal field", "Premium turf", "Leagues available"],
                        link: "/soccer-fields"
                    },
                    {
                        name: "Dodgeball",
                        icon: "🔴",
                        price: "$150+",
                        priceNote: "group package",
                        features: ["Dedicated courts", "Foam safety balls", "Team building"],
                        link: "/dodgeball-courts"
                    }
                ]}
            />

            <CityDirections
                city="Dallas"
                address="16230 Three Wide Drive, Fort Worth, TX 76177"
                googleMapsLink="https://maps.google.com/?q=16230+Three+Wide+Drive+Fort+Worth+TX+76177"
                directions={[
                    {
                        area: "From Downtown Dallas",
                        distance: "~25 miles",
                        time: "25-35 min",
                        steps: [
                            "Head west on I-30 W toward Fort Worth",
                            "Take exit 28 to merge onto I-35W N",
                            "Continue on I-35W for approximately 15 miles",
                            "Take exit 67 toward TX-114 W / Roanoke",
                            "Turn right onto Three Wide Drive",
                            "DFW Indoor Sports is on your right (Suite 200)"
                        ]
                    },
                    {
                        area: "From North Dallas / Richardson",
                        distance: "~30 miles",
                        time: "35-45 min",
                        steps: [
                            "Head west on TX-635 (LBJ Freeway)",
                            "Merge onto TX-114 W toward Grapevine/DFW Airport",
                            "Continue on TX-114 W for approximately 20 miles",
                            "Pass through Trophy Club and Roanoke",
                            "Turn left onto Three Wide Drive"
                        ]
                    },
                    {
                        area: "From Oak Lawn / Uptown",
                        distance: "~28 miles",
                        time: "30-40 min",
                        steps: [
                            "Take Dallas North Tollway north",
                            "Merge onto TX-121 N toward Grapevine",
                            "Continue onto TX-114 W",
                            "Continue through Trophy Club to Roanoke",
                            "Turn left onto Three Wide Drive"
                        ]
                    }
                ]}
            />

            <CityTestimonial
                quote="I live in Richardson and tried a few places closer to home, but the courts were always crowded and the quality just wasn't there. DFW Indoor Sports is worth the 35-minute drive. The courts are pristine, there's always availability when I book ahead."
                author="Priya M."
                location="Richardson (Dallas Area)"
            />

            {/* FAQ Section */}
            <section className="py-24 bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-header font-bold text-white uppercase mb-12 text-center">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-4">
                            {dallasFaqs.map((faq, index) => (
                                <details key={index} className="bg-white/5 border border-white/10 p-6 rounded-xl group cursor-pointer">
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
