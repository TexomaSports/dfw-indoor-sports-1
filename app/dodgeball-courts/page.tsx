import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, generateSportsActivitySchema } from '@/lib/metadata'
import DodgeballHero from '@/components/dodgeball/DodgeballHero'
import DodgeballIntro from '@/components/dodgeball/DodgeballIntro'
import DodgeballFeatures from '@/components/dodgeball/DodgeballFeatures'
import DodgeballGameModes from '@/components/dodgeball/DodgeballGameModes'
import DodgeballPricing from '@/components/dodgeball/DodgeballPricing'
import DodgeballPackages from '@/components/dodgeball/DodgeballPackages'
import DodgeballShowcase from '@/components/dodgeball/DodgeballShowcase'
import DodgeballLocation from '@/components/dodgeball/DodgeballLocation'
import DodgeballBooking from '@/components/dodgeball/DodgeballBooking'
import DodgeballFAQ from '@/components/dodgeball/DodgeballFAQ'
import DodgeballCTA from '@/components/dodgeball/DodgeballCTA'

export const metadata: Metadata = createPageMetadata({
  title: 'Dodgeball Court Rentals | Fun Indoor Sports in Fort Worth',
  description: 'Rent dodgeball courts at DFW Indoor Sports for parties, events, corporate team building, or league play. Safe indoor environment for all ages in Fort Worth, TX.',
  keywords: [
    'dodgeball court Fort Worth',
    'indoor dodgeball Dallas',
    'dodgeball rental DFW',
    'dodgeball facility Texas',
    'team building activities',
  ],
  path: '/dodgeball-courts',
})

export default function DodgeballCourtsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Rentals', url: '/rentals' },
    { name: 'Dodgeball Courts', url: '/dodgeball-courts' },
  ])

  const dodgeballSchema = generateSportsActivitySchema(
    'Dodgeball',
    'Safe indoor dodgeball courts perfect for team events, parties, corporate activities, and league play.'
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dodgeballSchema) }}
      />
      <DodgeballHero />
      <DodgeballIntro />
      <DodgeballFeatures />
      <DodgeballGameModes />
      <DodgeballPricing />
      <DodgeballPackages />
      <DodgeballShowcase />
      <DodgeballLocation />
      <DodgeballBooking />
      <DodgeballFAQ />
      <DodgeballCTA />
    </>
  )
}