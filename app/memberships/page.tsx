import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema } from '@/lib/metadata'
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
  title: 'Indoor Sports Memberships Fort Worth | Cricket & Badminton Plans from $70/mo',
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

  const faqSchema = generateFAQSchema([
    { question: "Is membership worth it if I only play once a week?", answer: "Yes, especially for Badminton. 4 sessions a month drop-in is ~$150. Membership is $70-85. For cricket, you break even at about 3 hours of play per month." },
    { question: "Can I freeze my membership?", answer: "We don't offer freezes, but monthly plans can be cancelled with 30-day notice. Half-yearly plans must complete their term." },
    { question: "Can I share my membership?", answer: "No. Memberships are individual (except Family Gold). Sharing credentials carries a $250 fine. Use Guest Passes to bring friends!" },
    { question: "Do you offer student/senior discounts?", answer: "Our rates are already highly discounted compared to drop-in. Students/Seniors benefit equally from unlimited access." },
    { question: "Is there a registration fee?", answer: "Yes, a one-time $20 registration fee applies to all new memberships to cover administrative setup." },
    { question: "What if the facility is crowded?", answer: "Members have priority booking rights (7-14 days in advance). We also cap total memberships to ensure reasonable access." }
  ])

  const serviceSchema = generateServiceSchema({
    name: 'Indoor Sports Membership',
    description: 'Unlimited access to cricket lanes, badminton courts, soccer fields with member-only rates and priority booking at DFW Indoor Sports in Fort Worth, Texas.',
    price: '70',
  })

  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans selection:bg-dfw-red selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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