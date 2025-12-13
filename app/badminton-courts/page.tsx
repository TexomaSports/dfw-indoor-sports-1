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

export const metadata = {
  title: 'Badminton Court Rentals',
  description: 'Book professional badminton courts at DFW Indoor Sports. BWF-standard courts with premium facilities.',
}

export default function BadmintonCourtsPage() {
  return (
    <>
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
