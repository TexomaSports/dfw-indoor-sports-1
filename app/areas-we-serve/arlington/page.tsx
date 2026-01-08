import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, generateFAQSchema, BUSINESS_INFO } from '@/lib/metadata'
import { Car, Clock, Phone, DollarSign, Trophy, Users, Award, Shield, MapPin, GraduationCap } from 'lucide-react'
import CityHero from '@/components/city/CityHero'
import CityStats from '@/components/city/CityStats'
import CityFeatures from '@/components/city/CityFeatures'
import CityDirections from '@/components/city/CityDirections'
import CitySportsGrid from '@/components/city/CitySportsGrid'
import CityTestimonial from '@/components/city/CityTestimonial'

export const metadata: Metadata = createPageMetadata({
    title: 'Indoor Sports Near Arlington TX | Cricket, Badminton, Soccer | 20 Min Drive',
    description: 'Premier indoor sports facility just 20 mins from Arlington, TX. Professional cricket lanes, badminton courts, and indoor soccer. Perfect for UTA students and families. Open 5AM-11PM daily.',
    keywords: [
        'indoor sports Arlington TX',
        'cricket near Arlington',
        'badminton courts Arlington',
        'indoor soccer Arlington',
        'UTA sports facility',
        'sports complex near AT&T Stadium',
        'cricket training Arlington',
    ],
    path: '/areas-we-serve/arlington',
})

const arlingtonFaqs = [
    {
        question: 'How far is DFW Indoor Sports from Arlington?',
        answer: 'We are very close! Most Arlington residents can reach us in 20-25 minutes via TX-360 N or I-30 W. We\'re located just north of Fort Worth, making it an easy drive against traffic for many.',
    },
    {
        question: 'What makes your facility better than options in Arlington?',
        answer: 'While Arlington has great parks, we offer a dedicated *indoor* experience with professional-grade amenities: 30ft ceilings for badminton, programmable bowling machines for cricket, and climate control that lets you play year-round regardless of Texas neat.',
    },
    {
        question: 'Do you have programs for UTA students?',
        answer: 'Yes! We have many students from UT Arlington who play here. We offer student discounts on select memberships (valid ID required) and host collegiate tournaments occasionally.',
    },
    {
        question: 'Can we host corporate team building events here?',
        answer: 'Absolutely. With many major companies in Arlington (like GM, DR Horton), we regularly host corporate dodgeball and multi-sport events. We can handle groups from 10 to 200+.',
    },
    {
        question: 'Is equipment provided?',
        answer: 'Yes, basic equipment is included with all rentals. Premium demo gear is also available for rent if you want to test high-end rackets or bats.',
    },
    {
        question: 'What are the peak hours?',
        answer: 'Weeknights from 6 PM - 9 PM and weekends turn to be busiest. For a quieter experience, we recommend booking on weekday mornings or early afternoons.',
    },
    {
        question: 'Do you have leagues?',
        answer: 'Yes, we run seasonal leagues for cricket, badminton, and soccer. They are great for meeting new people if you\'re new to the area.',
    },
    {
        question: 'Is there food available?',
        answer: 'We have a concession stand with snacks and drinks. For events, we can arrange catering or allow outside food vendors.',
    },
]

export default function ArlingtonPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Areas We Serve', url: '/areas-we-serve' },
        { name: 'Arlington', url: '/areas-we-serve/arlington' },
    ])

    const faqSchema = generateFAQSchema(arlingtonFaqs)

    const citySchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: BUSINESS_INFO.name,
        description: 'Top-rated indoor sports complex serving Arlington, Texas. Featuring cricket, badminton, soccer, and corporate events tailored for Arlington residents and businesses.',
        url: `${BUSINESS_INFO.url}/areas-we-serve/arlington`,
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
        areaServed: { '@type': 'City', name: 'Arlington', containedInPlace: { '@type': 'State', name: 'Texas' } },
    }

    return (
        <div className="bg-[#020408] min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <CityHero
                city="Arlington"
                distance="20 Min"
                tagline="The premier indoor sports destination for Arlington athletes, students, and corporate teams."
            />

            <CityStats
                stats={[
                    { icon: Car, value: "20 Min", label: "From Arlington", sublabel: "Short Drive" },
                    { icon: GraduationCap, value: "Student", label: "Discounts", sublabel: "For UTA Students" },
                    { icon: Users, value: "Groups", label: "Welcome", sublabel: "Team Building" },
                    { icon: Clock, value: "Daily", label: "5 AM - 11 PM", sublabel: "Year Round" }
                ]}
            />

            <CityFeatures
                title="Why Arlington Athletes Choose Us"
                description="Located just a short drive from the Entertainment District, we offer the professional indoor experience that serious players demand."
                features={[
                    {
                        title: "University & Student Friendly",
                        description: "Just 20 minutes from UTA. We offer a perfect escape for students looking to de-stress with cricket or badminton. Student ID discounts available.",
                        icon: GraduationCap
                    },
                    {
                        title: "Corporate Events Expert",
                        description: "Arlington is a business hub. We specialize in hosting active team-building events for local companies. Dodgeball tournaments are a favorite for bringing teams together.",
                        icon: Users
                    },
                    {
                        title: "Professional Standards",
                        description: "You're used to world-class venues like AT&T Stadium. We bring that same commitment to quality to recreational sports with our maintained turf and Olympic-standard courts.",
                        icon: Trophy
                    },
                    {
                        title: "Beat the Heat",
                        description: "Arlington summers are brutal. Our fully air-conditioned 50,000 sq ft facility lets you play your favorite sports comfortably, no matter the forecast.",
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
                        priceNote: "lane rental",
                        features: ["Bola bowling machines", "Full run-up area", "Video analysis ready"],
                        link: "/cricket-lanes"
                    },
                    {
                        name: "Badminton",
                        icon: "🏸",
                        price: "$10/drop-in",
                        priceNote: "per person",
                        features: ["BWF standard flooring", "Glare-free lighting", "Club nights"],
                        link: "/badminton-courts"
                    },
                    {
                        name: "Indoor Soccer",
                        icon: "⚽",
                        price: "$100/hr",
                        priceNote: "full field",
                        features: ["High-quality turf", "Futsal goals", "League play"],
                        link: "/soccer-fields"
                    },
                    {
                        name: "Corporate",
                        icon: "🤝",
                        price: "Custom",
                        priceNote: "packages",
                        features: ["Team building", "Catering options", "Private rooms"],
                        link: "/contact"
                    }
                ]}
            />

            <CityDirections
                city="Arlington"
                address="16230 Three Wide Drive, Fort Worth, TX 76177"
                googleMapsLink="https://maps.google.com/?q=16230+Three+Wide+Drive+Fort+Worth+TX+76177"
                directions={[
                    {
                        area: "From North Arlington / Entertainment District",
                        distance: "~18 miles",
                        time: "20-25 min",
                        steps: [
                            "Take I-30 W toward Fort Worth",
                            "Exit onto I-820 N",
                            "Merge onto I-35W N",
                            "Take exit 67 for TX-114 W",
                            "Turn right onto Three Wide Drive"
                        ]
                    },
                    {
                        area: "From South Arlington / Parks Mall",
                        distance: "~25 miles",
                        time: "30-35 min",
                        steps: [
                            "Take I-20 W toward Fort Worth",
                            "Merge onto I-35W N via exit 437",
                            "Continue north past downtown Fort Worth",
                            "Take exit 67 toward TX-114 W",
                            "Turn right onto Three Wide Drive"
                        ]
                    },
                    {
                        area: "From UTA Campus",
                        distance: "~22 miles",
                        time: "25-30 min",
                        steps: [
                            "Head north on Cooper St",
                            "Take I-30 W",
                            "Merge onto I-820 N",
                            "Merge onto I-35W N",
                            "Exit toward Roanoke/TX-114",
                            "Destination is on the right"
                        ]
                    }
                ]}
            />

            <CityTestimonial
                quote="We used to play at a rec center in Arlington, but the ceilings were too low for serious badminton. The courts here are perfect. It takes me 20 minutes to get here from my office near the stadium, which is perfect for after-work games."
                author="Marcus T."
                location="HR Manager, Arlington Tech Company"
            />

            {/* FAQ Section */}
            <section className="py-24 bg-gray-900 border-t border-white/10">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-header font-bold text-white uppercase mb-12 text-center">
                            Arlington Player FAQs
                        </h2>
                        <div className="space-y-4">
                            {arlingtonFaqs.map((faq, index) => (
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

            {/* Bottom CTA */}
            <section className="py-20 bg-dfw-red relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/textures/noise.png')] opacity-10 mix-blend-multiply" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-header font-bold text-white uppercase mb-6">
                        Arlington Special Offer
                    </h2>
                    <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
                        First time visiting from Arlington? Show your ID with an Arlington address and get <strong>50% off</strong> your first hour of court rental!
                    </p>
                    <a href="/rentals" className="inline-block bg-white text-dfw-red px-10 py-4 rounded font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors shadow-xl hover:-translate-y-1">
                        Claim Offer & Book
                    </a>
                </div>
            </section>
        </div>
    )
}
