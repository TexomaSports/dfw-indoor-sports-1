import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, generateFAQSchema, BUSINESS_INFO } from '@/lib/metadata'
import Link from 'next/link'
import { MapPin, Clock, Car, ArrowRight, Phone, Dumbbell, Users, Trophy, CheckCircle, Star, Calendar, DollarSign, Shield, Award, Heart, Target, Zap, Building } from 'lucide-react'

export const metadata: Metadata = createPageMetadata({
    title: 'Indoor Sports Near Arlington TX | Cricket, Badminton, Soccer | 15 Min Drive',
    description: 'Best indoor sports facility near Arlington, TX. DFW Indoor Sports is just 15 minutes north with professional cricket, badminton, soccer & dodgeball. Open 5AM-11PM daily. Drop-in from $25. Call (817) 938-0808.',
    keywords: [
        'indoor sports near Arlington TX',
        'Arlington cricket facility',
        'badminton courts Arlington',
        'indoor soccer Arlington Texas',
        'sports facility near Arlington',
        'indoor futsal Arlington',
        'cricket practice Arlington',
        'DFW indoor sports Arlington',
    ],
    path: '/areas-we-serve/arlington',
})

const arlingtonFaqs = [
    {
        question: 'How far is DFW Indoor Sports from Arlington?',
        answer: 'We\'re located just 15-20 minutes north of Arlington via TX-360 or I-20 to I-35W. From the AT&T Stadium area, you can reach us in about 20 minutes outside of rush hour.',
    },
    {
        question: 'What makes your facility better than options in Arlington?',
        answer: 'Our 50,000 sq ft purpose-built facility offers professional-grade courts that most Arlington venues can\'t match. We have programmable bowling machines for cricket, Olympic-specification badminton courts with proper 30ft ceiling clearance, and dedicated indoor soccer fields—not multi-purpose gyms.',
    },
    {
        question: 'Do you have programs for UTA students?',
        answer: 'Yes! Many UT Arlington students play at our facility. We offer student-friendly pricing and our evening hours (open until 11 PM) work well for students with daytime classes. We also host pickup games that are great for meeting other players.',
    },
    {
        question: 'Can I host a corporate team building event for my Arlington business?',
        answer: 'Absolutely. We host corporate events for companies across DFW, including many Arlington businesses. Dodgeball tournaments are especially popular for team building. We can accommodate groups of 10-100+ with catering options available.',
    },
    {
        question: 'What are the best times to visit from Arlington to avoid traffic?',
        answer: 'From Arlington, weekday mornings before 7 AM or evenings after 7 PM offer the smoothest drives. Weekends are generally easy any time. Avoid I-30/I-35 interchange during 5-6 PM rush hour.',
    },
    {
        question: 'Do you offer cricket coaching for beginners?',
        answer: 'Yes, our coaching staff includes certified cricket coaches who work with all skill levels, from complete beginners to competitive players. Private lessons start at $50/hour and include lane time.',
    },
    {
        question: 'Is there a pro shop or can I just use your equipment?',
        answer: 'We provide all necessary equipment free of charge—rackets, bats, balls, shuttlecocks, and safety gear. However, many regular players prefer their own equipment. We don\'t currently have a pro shop, but staff can recommend local sporting goods stores.',
    },
    {
        question: 'Can I book courts for a birthday party?',
        answer: 'Yes! Birthday parties are one of our most popular offerings. We have packages starting at $200 that include court time, party room access, and basic setup. Dodgeball parties are especially popular with kids ages 8-14.',
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
        description: 'Premier indoor sports facility serving Arlington, Texas with professional cricket lanes, badminton courts, soccer fields, and dodgeball courts. Just 15 minutes from downtown Arlington.',
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
        geo: {
            '@type': 'GeoCoordinates',
            latitude: BUSINESS_INFO.geo.latitude,
            longitude: BUSINESS_INFO.geo.longitude,
        },
        areaServed: {
            '@type': 'City',
            name: 'Arlington',
            containedInPlace: { '@type': 'State', name: 'Texas' },
        },
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '05:00',
            closes: '23:00',
        },
    }

    return (
        <div className="bg-white dark:bg-[#020408] min-h-screen transition-colors duration-300">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero Section */}
            <section className="py-24 bg-gradient-to-b from-dfw-navy to-[#0a1628] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/textures/cubes.png')] opacity-5"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold text-white uppercase tracking-widest mb-6">
                        <MapPin size={14} className="text-dfw-red" /> Serving Arlington, TX
                    </span>
                    <h1 className="text-4xl md:text-6xl font-header font-bold text-white uppercase mb-6">
                        Indoor Sports Near Arlington, Texas
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                        Arlington's closest professional indoor sports facility is just <strong className="text-dfw-red">15 minutes</strong> north.
                        Cricket lanes with bowling machines, Olympic-grade badminton courts, indoor soccer, and dodgeball—all under one 50,000 sq ft roof.
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

            {/* Quick Stats */}
            <section className="py-12 bg-gray-50 dark:bg-[#0a111f]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        <div className="bg-white dark:bg-white/5 p-6 rounded-lg text-center">
                            <Car className="text-dfw-red mx-auto mb-3" size={32} />
                            <p className="font-bold text-dfw-navy dark:text-white text-lg">15-20 Min</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">from Arlington</p>
                        </div>
                        <div className="bg-white dark:bg-white/5 p-6 rounded-lg text-center">
                            <Clock className="text-dfw-red mx-auto mb-3" size={32} />
                            <p className="font-bold text-dfw-navy dark:text-white text-lg">5 AM - 11 PM</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Open Daily</p>
                        </div>
                        <div className="bg-white dark:bg-white/5 p-6 rounded-lg text-center">
                            <DollarSign className="text-dfw-red mx-auto mb-3" size={32} />
                            <p className="font-bold text-dfw-navy dark:text-white text-lg">From $25/hr</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Court Rental</p>
                        </div>
                        <div className="bg-white dark:bg-white/5 p-6 rounded-lg text-center">
                            <Phone className="text-dfw-red mx-auto mb-3" size={32} />
                            <p className="font-bold text-dfw-navy dark:text-white text-lg">(817) 938-0808</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Book Now</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Arlington Players Choose Us */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6 text-center">
                            Why Arlington Athletes Choose DFW Indoor Sports
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-3xl mx-auto">
                            Arlington is home to world-class entertainment venues—AT&T Stadium, Globe Life Field, Six Flags. Now Arlington athletes have access to a world-class indoor sports facility just 15 minutes away.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-dfw-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Trophy className="text-dfw-red" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-2">Purpose-Built Facility</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            Unlike multi-purpose gyms, our 50,000 sq ft facility was designed specifically for indoor sports. Cricket lanes have proper netting and bowling machines. Badminton courts have 30+ ft ceiling clearance. The difference is immediately noticeable.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-dfw-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Building className="text-dfw-red" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-2">Convenient Location</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            Located just off TX-114 in Fort Worth, we're easily accessible from Arlington via I-20 or TX-360. The drive is often faster than getting across Arlington during busy times, and there's always free parking.
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
                                        <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-2">Great for Groups & Teams</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            Whether it's corporate team building from Arlington businesses, youth team practice, or a group of friends, we accommodate groups of all sizes. Many Arlington companies host quarterly team events here.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-dfw-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Zap className="text-dfw-red" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-2">Extended Hours</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            Open 5 AM to 11 PM, seven days a week. Perfect for early morning workouts before heading to GM Financial or other Arlington employers, or evening sessions after work or classes at UTA.
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
                                        "Our company is based near AT&T Stadium and we've done team building events at DFW Indoor Sports twice now. The dodgeball setup is perfect for groups of 20-30, and the drive from Arlington is easy—about 20 minutes. Staff handles everything from setup to cleanup."
                                    </p>
                                    <p className="text-gray-400 text-sm">— Marcus T., HR Manager at Arlington Tech Company</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Directions from Arlington */}
            <section className="py-24 bg-gray-50 dark:bg-[#0a111f]">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6 text-center">
                            Getting Here from Arlington
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                            We're at <strong>16230 Three Wide Drive, Fort Worth, TX 76177</strong>. Here are the best routes from different parts of Arlington:
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            {/* Downtown Arlington / UTA */}
                            <div className="bg-white dark:bg-white/5 p-6 rounded-xl">
                                <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-4 flex items-center gap-2">
                                    <MapPin size={18} className="text-dfw-red" /> From Downtown Arlington / UTA
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3"><strong>Distance:</strong> ~18 miles | <strong>Time:</strong> 20-25 min</p>
                                <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                                    <li>Head north on TX-360 N</li>
                                    <li>Merge onto TX-121 N toward Grapevine</li>
                                    <li>Continue onto TX-114 W toward Roanoke</li>
                                    <li>Take the Three Wide Drive exit</li>
                                    <li>Turn left onto Three Wide Drive</li>
                                    <li>DFW Indoor Sports is on your left (Suite 200)</li>
                                </ol>
                            </div>

                            {/* AT&T Stadium / Entertainment District */}
                            <div className="bg-white dark:bg-white/5 p-6 rounded-xl">
                                <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-4 flex items-center gap-2">
                                    <MapPin size={18} className="text-dfw-red" /> From AT&T Stadium Area
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3"><strong>Distance:</strong> ~20 miles | <strong>Time:</strong> 20-30 min</p>
                                <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                                    <li>Head north on Collins St toward I-30</li>
                                    <li>Merge onto I-30 W toward Fort Worth</li>
                                    <li>Take exit 28 to I-35W N</li>
                                    <li>Continue on I-35W N for about 12 miles</li>
                                    <li>Take exit 67 toward TX-114 W</li>
                                    <li>Turn right onto Three Wide Drive</li>
                                </ol>
                            </div>

                            {/* South Arlington / Mansfield */}
                            <div className="bg-white dark:bg-white/5 p-6 rounded-xl">
                                <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-4 flex items-center gap-2">
                                    <MapPin size={18} className="text-dfw-red" /> From South Arlington / Mansfield
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3"><strong>Distance:</strong> ~22 miles | <strong>Time:</strong> 25-35 min</p>
                                <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                                    <li>Head north on US-287 N</li>
                                    <li>Merge onto I-20 W</li>
                                    <li>Take I-35W N toward Denton</li>
                                    <li>Continue on I-35W N for about 15 miles</li>
                                    <li>Take exit 67 toward TX-114 W</li>
                                    <li>Turn right onto Three Wide Drive</li>
                                </ol>
                            </div>

                            {/* East Arlington / Grand Prairie */}
                            <div className="bg-white dark:bg-white/5 p-6 rounded-xl">
                                <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-4 flex items-center gap-2">
                                    <MapPin size={18} className="text-dfw-red" /> From East Arlington / Grand Prairie
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3"><strong>Distance:</strong> ~25 miles | <strong>Time:</strong> 25-35 min</p>
                                <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                                    <li>Head north on TX-360 N</li>
                                    <li>Continue through Irving</li>
                                    <li>Merge onto TX-114 W toward Grapevine/Trophy Club</li>
                                    <li>Continue on TX-114 W for about 15 miles</li>
                                    <li>Turn left onto Three Wide Drive</li>
                                </ol>
                            </div>
                        </div>

                        {/* Pro Tips */}
                        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                            <h4 className="font-bold text-dfw-navy dark:text-white mb-3">🚗 Pro Tips for Arlington Drivers</h4>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                                <li><CheckCircle className="inline text-blue-500 mr-2" size={16} /><strong>Game day traffic:</strong> If the Cowboys or Rangers are playing, leave early or take TX-360 instead of I-30</li>
                                <li><CheckCircle className="inline text-blue-500 mr-2" size={16} /><strong>Best times:</strong> Weekday mornings before 7 AM, or weekends anytime</li>
                                <li><CheckCircle className="inline text-blue-500 mr-2" size={16} /><strong>TX-360 route:</strong> Often faster than I-30/I-35W, especially during rush hour</li>
                                <li><CheckCircle className="inline text-blue-500 mr-2" size={16} /><strong>Free parking:</strong> Large lot with 100+ spaces—never a problem</li>
                            </ul>
                        </div>

                        <div className="text-center">
                            <Link
                                href="https://maps.google.com/?q=16230+Three+Wide+Drive+Fort+Worth+TX+76177"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-dfw-navy dark:bg-white text-white dark:text-dfw-navy px-8 py-4 rounded font-bold uppercase text-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                            >
                                <MapPin size={18} /> Open in Google Maps
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sports with Pricing */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6 text-center">
                            Sports & Pricing for Arlington Players
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                            Four sports, professional facilities, and transparent pricing. Here's what you can play:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: '🏏',
                                    name: 'Cricket',
                                    price: '$25/hr',
                                    priceNote: 'per lane',
                                    features: ['3 professional lanes', 'Bowling machines (40-90 mph)', 'All equipment included', 'Private coaching from $50/hr'],
                                    link: '/cricket-lanes',
                                },
                                {
                                    icon: '🏸',
                                    name: 'Badminton',
                                    price: '$10/person',
                                    priceNote: 'open play',
                                    features: ['6 Olympic-spec courts', '30+ ft ceiling clearance', 'Rackets & shuttles provided', 'Court rental from $30/hr'],
                                    link: '/badminton-courts',
                                },
                                {
                                    icon: '⚽',
                                    name: 'Indoor Soccer',
                                    price: '$100/hr',
                                    priceNote: 'field rental',
                                    features: ['Full futsal field', 'Premium turf surface', 'Balls provided', 'League play available'],
                                    link: '/soccer-fields',
                                },
                                {
                                    icon: '🔴',
                                    name: 'Dodgeball',
                                    price: '$150+',
                                    priceNote: 'group package',
                                    features: ['Dedicated courts', 'Foam balls for safety', 'Great for 10-30 players', 'Corporate packages available'],
                                    link: '/dodgeball-courts',
                                },
                            ].map((sport) => (
                                <div key={sport.name} className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <span className="text-3xl">{sport.icon}</span>
                                            <h3 className="text-xl font-bold text-dfw-navy dark:text-white uppercase">{sport.name}</h3>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-2xl font-bold text-dfw-red">{sport.price}</p>
                                            <p className="text-gray-500 dark:text-gray-400 text-xs">{sport.priceNote}</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2 mb-4">
                                        {sport.features.map((feature, i) => (
                                            <li key={i} className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-2">
                                                <CheckCircle className="text-green-500" size={14} /> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href={sport.link} className="text-dfw-red font-bold text-sm uppercase flex items-center gap-1 hover:underline">
                                        Learn More <ArrowRight size={14} />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Special Offer for Arlington */}
            <section className="py-16 bg-gradient-to-r from-dfw-navy to-[#0a1628]">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl font-header font-bold text-white uppercase mb-4">
                            First Time from Arlington?
                        </h2>
                        <p className="text-gray-300 mb-6">
                            Mention "ARLINGTON" when booking your first session and get <span className="text-dfw-red font-bold">10% off</span> your first court rental.
                            Valid for new customers only.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/rentals" className="bg-dfw-red text-white px-8 py-3 rounded font-bold uppercase text-sm hover:bg-red-700 transition-colors">
                                Book Now
                            </Link>
                            <Link href="tel:8179380808" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded font-bold uppercase text-sm hover:bg-white/10 transition-colors">
                                Call (817) 938-0808
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-gray-50 dark:bg-[#0a111f]">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-12 text-center">
                            Frequently Asked Questions from Arlington Players
                        </h2>

                        <div className="space-y-4">
                            {arlingtonFaqs.map((faq, index) => (
                                <details key={index} className="bg-white dark:bg-white/5 p-6 rounded-xl group">
                                    <summary className="font-bold text-dfw-navy dark:text-white cursor-pointer flex items-center justify-between">
                                        {faq.question}
                                        <span className="text-dfw-red group-open:rotate-45 transition-transform">+</span>
                                    </summary>
                                    <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-dfw-red">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-header font-bold text-white uppercase mb-4">
                        Ready to Play? Arlington's Best Indoor Sports Are 15 Minutes Away
                    </h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
                        Join players from across Arlington who make DFW Indoor Sports their home court. Book online or call us today.
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
