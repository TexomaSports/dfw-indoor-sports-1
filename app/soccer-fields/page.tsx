import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, generateSportsActivitySchema } from '@/lib/metadata'
import SoccerHero from '@/components/soccer/SoccerHero'
import SoccerIntro from '@/components/soccer/SoccerIntro'
import SoccerFeatures from '@/components/soccer/SoccerFeatures'
import SoccerPricing from '@/components/soccer/SoccerPricing'
import SoccerComparison from '@/components/soccer/SoccerComparison'
import SoccerShowcase from '@/components/soccer/SoccerShowcase'
import SoccerPrograms from '@/components/soccer/SoccerPrograms'
import SoccerBooking from '@/components/soccer/SoccerBooking'
import SoccerLocation from '@/components/soccer/SoccerLocation'
import SoccerExtras from '@/components/soccer/SoccerExtras'
import SoccerFAQ from '@/components/soccer/SoccerFAQ'
import SoccerCTA from '@/components/soccer/SoccerCTA'

export const metadata: Metadata = createPageMetadata({
  title: 'Indoor Soccer Fields Fort Worth | Climate-Controlled Turf Fields',
  description: 'Rent indoor soccer fields at DFW Indoor Sports. Premium turf fields perfect for training, league play, or pickup games. Climate-controlled environment in Fort Worth.',
  keywords: [
    'indoor soccer Fort Worth',
    'soccer field rental Dallas',
    'indoor soccer facility DFW',
    'turf soccer fields Texas',
    'futsal courts',
  ],
  path: '/soccer-fields',
})

export default function SoccerFieldsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Rentals', url: '/rentals' },
    { name: 'Soccer Fields', url: '/soccer-fields' },
  ])

  const soccerSchema = generateSportsActivitySchema(
    'Indoor Soccer',
    'Climate-controlled indoor soccer fields with premium turf for training, leagues, and recreational play.'
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(soccerSchema) }}
      />
      <SoccerHero />
      <SoccerIntro />
      <SoccerFeatures />
      <SoccerPricing />
      <SoccerComparison />
      <SoccerShowcase />
      <SoccerPrograms />
      <SoccerExtras />
      <SoccerLocation />
      <SoccerBooking />
      <SoccerFAQ />
      <SoccerCTA />
    </>
  )
}