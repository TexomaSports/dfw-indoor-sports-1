import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema } from '@/lib/metadata'
import SportsHero from '@/components/oursports/SportsHero'
import SportsIntro from '@/components/oursports/SportsIntro'
import SportsShowcase from '@/components/oursports/SportsShowcase'
import SportsGuide from '@/components/oursports/SportsGuide'
import SportsCommunity from '@/components/oursports/SportsCommunity'
import SportsFAQ from '@/components/oursports/SportsFAQ'
import SportsCTA from '@/components/oursports/SportsCTA'

export const metadata: Metadata = createPageMetadata({
  title: 'Our Sports | Cricket, Badminton, Soccer & Dodgeball in Fort Worth',
  description: 'Explore indoor cricket, badminton, soccer, and dodgeball at DFW Indoor Sports. Professional facilities and coaching for all skill levels in the Dallas-Fort Worth area.',
  keywords: [
    'indoor sports DFW',
    'sports offerings Fort Worth',
    'cricket badminton soccer Dallas',
    'multi-sport activities Texas',
    'indoor athletics DFW',
  ],
  path: '/sports',
})

export default function SportsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Our Sports', url: '/sports' },
  ])

  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans selection:bg-dfw-red selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SportsHero />
      <SportsIntro />
      <SportsShowcase />
      <SportsGuide />
      <SportsCommunity />
      <SportsFAQ />
      <SportsCTA />
    </div>
  )
}