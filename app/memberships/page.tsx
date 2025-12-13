import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema } from '@/lib/metadata'
import MembershipsHero from '@/components/memberships/MembershipsHero'
import MembershipsIntro from '@/components/memberships/MembershipsIntro'
import MembershipsValue from '@/components/memberships/MembershipsValue'
import MembershipsPricing from '@/components/memberships/MembershipsPricing'
import MembershipsAddons from '@/components/memberships/MembershipsAddons'
import MembershipsComparison from '@/components/memberships/MembershipsComparison'
import MembershipsGuide from '@/components/memberships/MembershipsGuide'
import MembershipsTestimonials from '@/components/memberships/MembershipsTestimonials'
import MembershipsFAQ from '@/components/memberships/MembershipsFAQ'
import MembershipsCTA from '@/components/memberships/MembershipsCTA'

export const metadata: Metadata = createPageMetadata({
  title: 'Membership Packages | Flexible Plans for Every Athlete',
  description: 'Join DFW Indoor Sports with flexible membership packages. Get unlimited access to cricket lanes, badminton courts, soccer fields. Special rates on coaching and exclusive member benefits.',
  keywords: [
    'sports membership Fort Worth',
    'indoor sports membership Dallas',
    'DFW sports membership plans',
    'cricket membership Texas',
    'badminton membership DFW',
  ],
  path: '/memberships',
})

export default function MembershipsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Memberships', url: '/memberships' },
  ])

  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans selection:bg-dfw-red selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <MembershipsHero />
      <MembershipsIntro />
      <MembershipsValue />
      <MembershipsPricing />
      <MembershipsAddons />
      <MembershipsComparison />
      <MembershipsGuide />
      <MembershipsTestimonials />
      <MembershipsFAQ />
      <MembershipsCTA />
    </div>
  )
}