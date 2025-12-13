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

export const metadata = {
  title: 'Soccer Field Rentals',
  description: 'Book indoor soccer fields at DFW Indoor Sports. Premium turf fields for training, leagues, and games.',
}

export default function SoccerFieldsPage() {
  return (
    <>
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
