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

export const metadata = {
  title: 'Cricket Lane Rentals',
  description: 'Book premium indoor cricket lanes at DFW Indoor Sports. Professional-grade facilities for practice and training.',
}

export default function CricketLanesPage() {
  return (
    <>
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
