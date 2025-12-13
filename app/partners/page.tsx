import PartnersHero from '@/components/partners/PartnersHero'
import PartnersIntro from '@/components/partners/PartnersIntro'
import CurrentPartners from '@/components/partners/CurrentPartners'
import SponsorshipTiers from '@/components/partners/SponsorshipTiers'
import InvestmentLevels from '@/components/partners/InvestmentLevels'
import PartnersTestimonials from '@/components/partners/PartnersTestimonials'
import PartnersProcess from '@/components/partners/PartnersProcess'
import PartnersFAQ from '@/components/partners/PartnersFAQ'
import PartnersCTA from '@/components/partners/PartnersCTA'

export const metadata = {
  title: 'Partners & Sponsors',
  description: 'Partner with DFW Indoor Sports. Explore sponsorship opportunities and investment levels.',
}

export default function PartnersPage() {
  return (
    <>
      <PartnersHero />
      <PartnersIntro />
      <CurrentPartners />
      <SponsorshipTiers />
      <InvestmentLevels />
      <PartnersTestimonials />
      <PartnersProcess />
      <PartnersFAQ />
      <PartnersCTA />
    </>
  )
}
