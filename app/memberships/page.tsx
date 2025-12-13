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

export default function MembershipsPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans selection:bg-dfw-red selection:text-white">
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
