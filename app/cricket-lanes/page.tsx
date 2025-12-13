import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, generateSportsActivitySchema } from '@/lib/metadata'
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