import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema } from '@/lib/metadata'
import PartnersHero from '@/components/partners/PartnersHero'
import PartnersIntro from '@/components/partners/PartnersIntro'
import CurrentPartners from '@/components/partners/CurrentPartners'
import SponsorshipTiers from '@/components/partners/SponsorshipTiers'
import InvestmentLevels from '@/components/partners/InvestmentLevels'
import PartnersTestimonials from '@/components/partners/PartnersTestimonials'
import PartnersProcess from '@/components/partners/PartnersProcess'
import PartnersFAQ from '@/components/partners/PartnersFAQ'
import PartnersCTA from '@/components/partners/PartnersCTA'

export const metadata: Metadata = createPageMetadata({
  title: 'Our Partners & Sponsors | DFW Indoor Sports',
  description: 'Meet our valued partners and sponsors who support DFW Indoor Sports. Explore sponsorship opportunities, investment levels, and community partnership programs in Fort Worth.',
  keywords: [
    'sports sponsors Fort Worth',
    'partnership opportunities Dallas',
    'sports facility partners DFW',
    'sponsorship programs Texas',
  ],
  path: '/partners',
})

export default function PartnersPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Partners', url: '/partners' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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