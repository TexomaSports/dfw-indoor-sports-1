import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/metadata'
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

  const faqSchema = generateFAQSchema([
    { question: "Can I just walk in and play?", answer: "Yes! We love drop-ins. However, evenings and weekends can get busy, so we highly recommend booking your slot online to guarantee your court time." },
    { question: "Do I need to be a member to use the facility?", answer: "Not at all. You can rent courts or lanes by the hour as a guest. Membership is simply a great option if you find yourself playing more than twice a month." },
    { question: "What should I bring for my first visit?", answer: "Just comfortable athletic wear and non-marking indoor shoes (to protect our courts!). We have rental rackets, bats, and balls available if you don't have your own gear yet." },
    { question: "Is the facility suitable for young children?", answer: "Absolutely. We have specific youth programs for ages 6+, and our dodgeball and badminton courts are very popular with families. We can adjust net heights and provide lighter equipment." },
    { question: "Do you have leagues for beginners?", answer: "Yes. We run 'recreational' divisions in all our sports specifically designed for people who are new to the game or just playing for fun/fitness." },
    { question: "Is the facility open year-round?", answer: "Yes, 365 days a year. Our climate-controlled indoor environment means you can play comfortably whether it's 105°F or 20°F outside." }
  ])

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