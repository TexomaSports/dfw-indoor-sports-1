import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, generateSportsActivitySchema } from '@/lib/metadata'
import BadmintonHero from '@/components/badminton/BadmintonHero'
import BadmintonIntro from '@/components/badminton/BadmintonIntro'
import BadmintonFeatures from '@/components/badminton/BadmintonFeatures'
import BadmintonPricing from '@/components/badminton/BadmintonPricing'
import BadmintonComparison from '@/components/badminton/BadmintonComparison'
import BadmintonShowcase from '@/components/badminton/BadmintonShowcase'
import BadmintonLocation from '@/components/badminton/BadmintonLocation'
import BadmintonBooking from '@/components/badminton/BadmintonBooking'
import BadmintonPrograms from '@/components/badminton/BadmintonPrograms'
import BadmintonEquip from '@/components/badminton/BadmintonEquip'
import BadmintonFAQ from '@/components/badminton/BadmintonFAQ'
import BadmintonCTA from '@/components/badminton/BadmintonCTA'

export const metadata: Metadata = createPageMetadata({
  title: 'Premium Badminton Courts Fort Worth | Professional Indoor Courts',
  description: 'Book professional BWF-standard badminton courts at DFW Indoor Sports. International standard courts with proper lighting and flooring. Hourly rentals available 5AM-11PM daily.',
  keywords: [
    'badminton courts Fort Worth',
    'indoor badminton Dallas',
    'badminton court rental DFW',
    'professional badminton Texas',
    'BWF standard courts',
  ],
  path: '/badminton-courts',
})

export default function BadmintonCourtsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Rentals', url: '/rentals' },
    { name: 'Badminton Courts', url: '/badminton-courts' },
  ])

  const badmintonSchema = generateSportsActivitySchema(
    'Badminton',
    'BWF-standard professional badminton courts with premium facilities, proper lighting, and professional flooring.'
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(badmintonSchema) }}
      />
      <BadmintonHero />
      <BadmintonIntro />
      <BadmintonFeatures />
      <BadmintonPricing />
      <BadmintonComparison />
      <BadmintonShowcase />
      <BadmintonLocation />
      <BadmintonBooking />
      <BadmintonPrograms />
      <BadmintonEquip />
      <BadmintonFAQ />
      <BadmintonCTA />
    </>
  )
}