import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, generateSportsActivitySchema, generateFAQSchema } from '@/lib/metadata'
import CricketHero from '@/components/cricket/CricketHero'
import CricketIntro from '@/components/cricket/CricketIntro'
import CricketFeatures from '@/components/cricket/CricketFeatures'
import CricketPricing from '@/components/cricket/CricketPricing'
import CricketComparison from '@/components/cricket/CricketComparison'
import CricketShowcase from '@/components/cricket/CricketShowcase'
import CricketLocation from '@/components/cricket/CricketLocation'
import CricketBooking from '@/components/cricket/CricketBooking'
import CricketExtras from '@/components/cricket/CricketExtras'
import CricketFAQ from '@/components/cricket/CricketFAQ'
import CricketCTA from '@/components/cricket/CricketCTA'

export const metadata: Metadata = createPageMetadata({
  title: 'Indoor Cricket Lanes Fort Worth | Professional Practice Facility',
  description: 'Book professional indoor cricket lanes at DFW Indoor Sports. State-of-the-art batting cages, bowling machines, and coaching available. Hourly rentals in Fort Worth, TX.',
  keywords: [
    'indoor cricket lanes Fort Worth',
    'cricket practice facility Dallas',
    'cricket nets rental DFW',
    'batting cage Texas',
    'cricket training facility',
  ],
  path: '/cricket-lanes',
})

export default function CricketLanesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Rentals', url: '/rentals' },
    { name: 'Cricket Lanes', url: '/cricket-lanes' },
  ])

  const cricketSchema = generateSportsActivitySchema(
    'Indoor Cricket',
    'Professional indoor cricket lanes for practice, training, and matches. Features bowling machines and professional-grade facilities.'
  )

  const faqSchema = generateFAQSchema([
    { question: "Do I need to bring my own cricket equipment?", answer: "No. We provide basic cricket equipment including balls (leather and synthetic), protective gear (helmets, pads, gloves in all sizes), stumps, and training aids. However, most serious players prefer their own bat for comfort." },
    { question: "Are cricket lanes available for complete beginners?", answer: "Absolutely. Many members start with zero cricket experience. Our staff provides basic safety instruction and equipment orientation. Bowling machines are excellent for beginners." },
    { question: "What's included with the bowling machine?", answer: "Full bowling machine access is included FREE with every lane rental (normally $15-20 extra elsewhere). Machines are programmable: adjustable speed (40-90 mph), variable line and length." },
    { question: "Can I book lanes for team practice?", answer: "Yes. Teams frequently rent multiple lanes simultaneously. Three-lane setup accommodates full team rotation. We offer discounted team packages for regular weekly bookings." },
    { question: "How far in advance can I book cricket lanes?", answer: "Online booking opens 30 days in advance for members, 14 days for drop-in players. Peak times (weekday evenings) book quickly." },
    { question: "What's your cancellation policy?", answer: "Cancellations made 24+ hours before booking receive full refund or credit. Cancellations 12-24 hours before receive 50% credit. Less than 12 hours forfeits payment." },
    { question: "Can I use video recording during practice?", answer: "Yes. Each lane has tablet/phone mounting station for video recording. Bring your device or borrow a tablet (limited availability)." },
    { question: "What if I'm visiting from out of town?", answer: "Drop-in hourly rentals are perfect for traveling players. No membership required. Book online before arriving or call day-of for availability." }
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cricketSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CricketHero />
      <CricketIntro />
      <CricketFeatures />
      <CricketShowcase />
      <CricketPricing />
      <CricketComparison />
      <CricketLocation />
      <CricketBooking />
      <CricketExtras />
      <CricketFAQ />
      <CricketCTA />
    </>
  )
}