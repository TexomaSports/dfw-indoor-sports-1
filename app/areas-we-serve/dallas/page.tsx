import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, generateFAQSchema, BUSINESS_INFO } from '@/lib/metadata'
import Link from 'next/link'
import { MapPin, Clock, Car, ArrowRight, Phone, Dumbbell, Users, Trophy, CheckCircle, Star, Calendar, DollarSign, Shield, Award, Heart, Target, Zap } from 'lucide-react'

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
        <div className="bg-white dark:bg-[#020408] min-h-screen transition-colors duration-300">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero Section */}
            <section className="py-24 bg-gradient-to-b from-dfw-navy to-[#0a1628] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/textures/cubes.png')] opacity-5"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold text-white uppercase tracking-widest mb-6">
                        <MapPin size={14} className="text-dfw-red" /> Serving Dallas, TX & Surrounding Areas
                    </span>
                    <h1 className="text-4xl md:text-6xl font-header font-bold text-white uppercase mb-6">
                        Indoor Sports Near Dallas, Texas
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                        Looking for world-class indoor cricket, badminton, soccer, or dodgeball near Dallas?
                        DFW Indoor Sports is your destination—just <strong className="text-dfw-red">25 minutes</strong> from downtown.
                        50,000 sq ft of climate-controlled courts, professional coaching, and a welcoming community.
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
                            <p className="font-bold text-dfw-navy dark:text-white text-lg">25 Minutes</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">from Downtown Dallas</p>
                        </div>
                        <div className="bg-white dark:bg-white/5 p-6 rounded-lg text-center">
                            <Clock className="text-dfw-red mx-auto mb-3" size={32} />
                            <p className="font-bold text-dfw-navy dark:text-white text-lg">5 AM - 11 PM</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Open 7 Days a Week</p>
                        </div>
                        <div className="bg-white dark:bg-white/5 p-6 rounded-lg text-center">
                            <DollarSign className="text-dfw-red mx-auto mb-3" size={32} />
                            <p className="font-bold text-dfw-navy dark:text-white text-lg">From $25/hr</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Drop-in Court Rental</p>
                        </div>
                        <div className="bg-white dark:bg-white/5 p-6 rounded-lg text-center">
                            <Phone className="text-dfw-red mx-auto mb-3" size={32} />
                            <p className="font-bold text-dfw-navy dark:text-white text-lg">(817) 938-0808</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Call to Book</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Dallas Residents Drive to DFW Indoor Sports */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6 text-center">
                            Why Dallas Residents Choose to Make the Drive
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-3xl mx-auto">
                            We know you have options in Dallas. But hundreds of Dallas players drive to our Fort Worth facility every week. Here's why:
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-xl">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-dfw-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Trophy className="text-dfw-red" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-2">Professional-Grade Facilities</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            Our 50,000 sq ft facility isn't a converted warehouse—it's purpose-built for indoor sports. Cricket lanes with programmable bowling machines (40-90 mph), Olympic-specification badminton courts with proper lighting and floor markings, and regulation futsal fields that serious players demand.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-xl">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-dfw-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Users className="text-dfw-red" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-2">Active Playing Community</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            Finding other players at your skill level can be hard. Our community includes 200+ active members from Dallas, Fort Worth, Arlington, and surrounding areas. Whether you're looking for competitive league play or casual rally partners, you'll find them here.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-xl">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-dfw-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Award className="text-dfw-red" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-2">Certified Coaching Staff</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            Our coaching team includes former professional players and certified instructors. Whether you're a complete beginner or preparing for competitive play, our coaches provide personalized training that actually improves your game—not just generic drills.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-xl">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-dfw-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Shield className="text-dfw-red" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-2">Year-Round Comfort</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            Texas weather is unpredictable—105°F summers, sudden thunderstorms, winter cold snaps. Our climate-controlled facility maintains a consistent 68-72°F year-round. No more canceled games or uncomfortable practice sessions.
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
                                        "I live in Richardson and tried a few badminton places closer to home, but the courts were always crowded and the quality just wasn't there. DFW Indoor Sports is worth the 35-minute drive. The courts are pristine, there's always availability when I book ahead, and I've made great playing partners through their community."
                                    </p>
                                    <p className="text-gray-400 text-sm">— Priya M., Richardson (Dallas Area)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Directions from Dallas Neighborhoods */}
            <section className="py-24 bg-gray-50 dark:bg-[#0a111f]">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6 text-center">
                            Getting Here from Dallas
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                            We're located at <strong>16230 Three Wide Drive, Fort Worth, TX 76177</strong>, just off TX-114. Here's how to reach us from different Dallas areas:
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            {/* Downtown Dallas */}
                            <div className="bg-white dark:bg-white/5 p-6 rounded-xl">
                                <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-4 flex items-center gap-2">
                                    <MapPin size={18} className="text-dfw-red" /> From Downtown Dallas
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3"><strong>Distance:</strong> ~25 miles | <strong>Time:</strong> 25-35 min (depending on traffic)</p>
                                <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                                    <li>Head west on I-30 W toward Fort Worth</li>
                                    <li>Take exit 28 to merge onto I-35W N</li>
                                    <li>Continue on I-35W for approximately 15 miles</li>
                                    <li>Take exit 67 toward TX-114 W / Roanoke</li>
                                    <li>Turn right onto Three Wide Drive</li>
                                    <li>DFW Indoor Sports is on your right (Suite 200)</li>
                                </ol>
                            </div>

                            {/* North Dallas / Richardson / Plano */}
                            <div className="bg-white dark:bg-white/5 p-6 rounded-xl">
                                <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-4 flex items-center gap-2">
                                    <MapPin size={18} className="text-dfw-red" /> From North Dallas / Richardson / Addison
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3"><strong>Distance:</strong> ~30 miles | <strong>Time:</strong> 35-45 min</p>
                                <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                                    <li>Head west on TX-635 (LBJ Freeway)</li>
                                    <li>Merge onto TX-114 W toward Grapevine/DFW Airport</li>
                                    <li>Continue on TX-114 W for approximately 20 miles</li>
                                    <li>Pass through Trophy Club and Roanoke</li>
                                    <li>Turn left onto Three Wide Drive</li>
                                    <li>DFW Indoor Sports is on your left (Suite 200)</li>
                                </ol>
                            </div>

                            {/* Oak Lawn / Uptown / Highland Park */}
                            <div className="bg-white dark:bg-white/5 p-6 rounded-xl">
                                <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-4 flex items-center gap-2">
                                    <MapPin size={18} className="text-dfw-red" /> From Oak Lawn / Uptown / Highland Park
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3"><strong>Distance:</strong> ~28 miles | <strong>Time:</strong> 30-40 min</p>
                                <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                                    <li>Take Dallas North Tollway north</li>
                                    <li>Merge onto TX-121 N toward Grapevine</li>
                                    <li>Continue onto TX-114 W</li>
                                    <li>Continue through Trophy Club to Roanoke</li>
                                    <li>Turn left onto Three Wide Drive</li>
                                    <li>DFW Indoor Sports is on your left</li>
                                </ol>
                            </div>

                            {/* Mesquite / East Dallas */}
                            <div className="bg-white dark:bg-white/5 p-6 rounded-xl">
                                <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-4 flex items-center gap-2">
                                    <MapPin size={18} className="text-dfw-red" /> From East Dallas / Mesquite / Garland
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3"><strong>Distance:</strong> ~35 miles | <strong>Time:</strong> 40-50 min</p>
                                <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                                    <li>Head west on I-30 W toward Fort Worth</li>
                                    <li>Take exit 28 to merge onto I-35W N</li>
                                    <li>Continue on I-35W N for 15 miles</li>
                                    <li>Take exit 67 toward TX-114 W</li>
                                    <li>Turn right onto Three Wide Drive</li>
                                    <li>DFW Indoor Sports is on your right</li>
                                </ol>
                            </div>
                        </div>

                        {/* Pro Tips */}
                        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
                            <h4 className="font-bold text-dfw-navy dark:text-white mb-3">🚗 Pro Tips for Dallas Drivers</h4>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                                <li><CheckCircle className="inline text-blue-500 mr-2" size={16} /><strong>Best times to drive:</strong> Before 7 AM or after 8 PM for minimal traffic</li>
                                <li><CheckCircle className="inline text-blue-500 mr-2" size={16} /><strong>Weekend mornings:</strong> 15-20 minutes faster than weekday rush hour</li>
                                <li><CheckCircle className="inline text-blue-500 mr-2" size={16} /><strong>Avoid:</strong> I-35 during 7-9 AM and 4-7 PM on weekdays</li>
                                <li><CheckCircle className="inline text-blue-500 mr-2" size={16} /><strong>Alternative route:</strong> TX-114 is often faster than I-35 from North Dallas</li>
                            </ul>
                        </div>

                        <div className="text-center mt-8">
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

            {/* Sports Available with Detailed Information */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6 text-center">
                            Sports Available for Dallas Residents
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                            Four world-class sports, one destination. Here's what you can play:
                        </p>

                        <div className="space-y-8">
                            {/* Cricket */}
                            <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-xl">
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="md:col-span-2">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-4xl">🏏</span>
                                            <h3 className="text-2xl font-bold text-dfw-navy dark:text-white uppercase">Indoor Cricket</h3>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                                            Practice year-round in our professional cricket lanes with programmable bowling machines. Perfect for batsmen looking to groove technique or teams preparing for tournaments.
                                        </p>
                                        <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                                            <li><CheckCircle className="inline text-green-500 mr-2" size={16} />3 professional-grade lanes (40 ft length)</li>
                                            <li><CheckCircle className="inline text-green-500 mr-2" size={16} />Programmable bowling machines (40-90 mph)</li>
                                            <li><CheckCircle className="inline text-green-500 mr-2" size={16} />Equipment included (bats, pads, helmets)</li>
                                            <li><CheckCircle className="inline text-green-500 mr-2" size={16} />Private coaching available</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white dark:bg-dfw-navy p-6 rounded-lg text-center">
                                        <p className="text-gray-500 dark:text-gray-400 text-sm uppercase mb-2">Starting from</p>
                                        <p className="text-3xl font-bold text-dfw-red mb-2">$25/hr</p>
                                        <p className="text-gray-500 dark:text-gray-400 text-xs mb-4">per lane rental</p>
                                        <Link href="/cricket-lanes" className="block bg-dfw-red text-white px-4 py-2 rounded text-sm font-bold uppercase hover:bg-red-700 transition-colors">
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Badminton */}
                            <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-xl">
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="md:col-span-2">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-4xl">🏸</span>
                                            <h3 className="text-2xl font-bold text-dfw-navy dark:text-white uppercase">Badminton</h3>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                                            Our Olympic-grade badminton courts feature proper ceiling height, professional lighting, and premium flooring. Whether you're a casual player or competitive athlete, you'll feel the difference.
                                        </p>
                                        <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                                            <li><CheckCircle className="inline text-green-500 mr-2" size={16} />6 full-size courts with proper clearance</li>
                                            <li><CheckCircle className="inline text-green-500 mr-2" size={16} />Competition-grade flooring and nets</li>
                                            <li><CheckCircle className="inline text-green-500 mr-2" size={16} />Rackets and shuttlecocks provided</li>
                                            <li><CheckCircle className="inline text-green-500 mr-2" size={16} />Open play and reserved sessions available</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white dark:bg-dfw-navy p-6 rounded-lg text-center">
                                        <p className="text-gray-500 dark:text-gray-400 text-sm uppercase mb-2">Starting from</p>
                                        <p className="text-3xl font-bold text-dfw-red mb-2">$10/person</p>
                                        <p className="text-gray-500 dark:text-gray-400 text-xs mb-4">open play session</p>
                                        <Link href="/badminton-courts" className="block bg-dfw-red text-white px-4 py-2 rounded text-sm font-bold uppercase hover:bg-red-700 transition-colors">
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Soccer */}
                            <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-xl">
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="md:col-span-2">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-4xl">⚽</span>
                                            <h3 className="text-2xl font-bold text-dfw-navy dark:text-white uppercase">Indoor Soccer / Futsal</h3>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                                            Play 5-a-side or futsal on our full-size indoor field. Perfect for pickup games, league play, or team training sessions away from the Texas heat.
                                        </p>
                                        <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                                            <li><CheckCircle className="inline text-green-500 mr-2" size={16} />Full-size indoor field with goals</li>
                                            <li><CheckCircle className="inline text-green-500 mr-2" size={16} />Premium turf surface</li>
                                            <li><CheckCircle className="inline text-green-500 mr-2" size={16} />Balls provided</li>
                                            <li><CheckCircle className="inline text-green-500 mr-2" size={16} />League and pickup games available</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white dark:bg-dfw-navy p-6 rounded-lg text-center">
                                        <p className="text-gray-500 dark:text-gray-400 text-sm uppercase mb-2">Starting from</p>
                                        <p className="text-3xl font-bold text-dfw-red mb-2">$100/hr</p>
                                        <p className="text-gray-500 dark:text-gray-400 text-xs mb-4">field rental</p>
                                        <Link href="/soccer-fields" className="block bg-dfw-red text-white px-4 py-2 rounded text-sm font-bold uppercase hover:bg-red-700 transition-colors">
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Dodgeball */}
                            <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-xl">
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="md:col-span-2">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-4xl">🔴</span>
                                            <h3 className="text-2xl font-bold text-dfw-navy dark:text-white uppercase">Dodgeball</h3>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                                            Perfect for team building, birthday parties, or just having fun with friends. Our dodgeball courts are a hit with corporate groups and families alike.
                                        </p>
                                        <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                                            <li><CheckCircle className="inline text-green-500 mr-2" size={16} />Dedicated dodgeball courts</li>
                                            <li><CheckCircle className="inline text-green-500 mr-2" size={16} />Foam balls for safety</li>
                                            <li><CheckCircle className="inline text-green-500 mr-2" size={16} />Great for groups of 10-20</li>
                                            <li><CheckCircle className="inline text-green-500 mr-2" size={16} />Corporate event packages available</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white dark:bg-dfw-navy p-6 rounded-lg text-center">
                                        <p className="text-gray-500 dark:text-gray-400 text-sm uppercase mb-2">Starting from</p>
                                        <p className="text-3xl font-bold text-dfw-red mb-2">$150</p>
                                        <p className="text-gray-500 dark:text-gray-400 text-xs mb-4">group package</p>
                                        <Link href="/dodgeball-courts" className="block bg-dfw-red text-white px-4 py-2 rounded text-sm font-bold uppercase hover:bg-red-700 transition-colors">
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs for Dallas Families */}
            <section className="py-24 bg-gray-50 dark:bg-[#0a111f]">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6 text-center">
                            Programs for Dallas Families
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                            We're not just courts for rent—we're a community. Here are programs that Dallas families love:
                        </p>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white dark:bg-white/5 p-6 rounded-xl">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                                    <Target className="text-blue-500" size={24} />
                                </div>
                                <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-2">Youth Academy (Ages 6-18)</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                    Structured training programs in cricket and badminton. Seasonal sessions, holiday camps, and private coaching. Many Dallas parents drive their kids here on weekends for quality instruction.
                                </p>
                                <Link href="/academy" className="text-dfw-red font-bold text-sm uppercase flex items-center gap-1 hover:underline">
                                    Learn More <ArrowRight size={14} />
                                </Link>
                            </div>

                            <div className="bg-white dark:bg-white/5 p-6 rounded-xl">
                                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                                    <Users className="text-green-500" size={24} />
                                </div>
                                <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-2">Adult Leagues</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                    Join our badminton and futsal leagues. Meet players from across DFW, compete in a friendly environment, and improve your game. Leagues run seasonally with playoffs.
                                </p>
                                <Link href="/events" className="text-dfw-red font-bold text-sm uppercase flex items-center gap-1 hover:underline">
                                    View Schedule <ArrowRight size={14} />
                                </Link>
                            </div>

                            <div className="bg-white dark:bg-white/5 p-6 rounded-xl">
                                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
                                    <Heart className="text-purple-500" size={24} />
                                </div>
                                <h3 className="font-bold text-dfw-navy dark:text-white uppercase mb-2">Birthday Parties</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                    Host an unforgettable birthday party with dodgeball, badminton, or multi-sport options. We handle the setup—you bring the cake. Private party rooms available.
                                </p>
                                <Link href="/events" className="text-dfw-red font-bold text-sm uppercase flex items-center gap-1 hover:underline">
                                    Book a Party <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Membership Value for Dallas Commuters */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6">
                            Is Membership Worth It for Dallas Commuters?
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8">
                            If you play just <strong>2 times per month</strong>, membership pays for itself. Here's the math:
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-xl">
                                <h3 className="font-bold text-gray-500 uppercase text-sm mb-4">Without Membership</h3>
                                <p className="text-4xl font-bold text-dfw-navy dark:text-white mb-2">$100+</p>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">4 sessions × $25/hr = $100/month</p>
                            </div>
                            <div className="bg-dfw-red text-white p-8 rounded-xl">
                                <h3 className="font-bold text-white/80 uppercase text-sm mb-4">With Membership</h3>
                                <p className="text-4xl font-bold mb-2">$70</p>
                                <p className="text-white/80 text-sm">Unlimited access, priority booking</p>
                                <p className="text-yellow-300 font-bold mt-4">Save $30+/month</p>
                            </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 mb-8">
                            Plus, members get priority booking (up to 30 days in advance), discounts on coaching, and access to member-only events.
                        </p>

                        <Link href="/memberships" className="inline-flex items-center gap-2 bg-dfw-navy text-white px-8 py-4 rounded font-bold uppercase text-sm hover:bg-gray-800 transition-colors">
                            View Membership Options <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-gray-50 dark:bg-[#0a111f]">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-12 text-center">
                            Frequently Asked Questions from Dallas Players
                        </h2>

                        <div className="space-y-4">
                            {dallasFaqs.map((faq, index) => (
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
                        Ready to Experience the Best Indoor Sports Near Dallas?
                    </h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
                        Join the hundreds of Dallas residents who drive to DFW Indoor Sports every week. Book your first session online or give us a call.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/rentals" className="bg-white text-dfw-red px-8 py-4 rounded font-bold uppercase text-sm hover:bg-gray-100 transition-colors flex items-center gap-2">
                            Book Online Now <ArrowRight size={16} />
                        </Link>
                        <Link href="/memberships" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded font-bold uppercase text-sm hover:bg-white/10 transition-colors">
                            View Memberships
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
