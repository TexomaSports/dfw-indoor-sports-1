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

export const metadata = {
  title: 'Dodgeball Court Rentals',
  description: 'Book dodgeball courts at DFW Indoor Sports. Perfect for team events, parties, and league play.',
}

export default function DodgeballCourtsPage() {
  return (
    <>
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
