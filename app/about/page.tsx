import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/metadata'
import AboutHero from '@/components/about/AboutHero'
import AboutStory from '@/components/about/AboutStory'
import AboutValues from '@/components/about/AboutValues'
import AboutPhilosophy from '@/components/about/AboutPhilosophy'
import AboutSportsGrid from '@/components/about/AboutSportsGrid'
import AboutFacilitySpecs from '@/components/about/AboutFacilitySpecs'
import AboutAudiences from '@/components/about/AboutAudiences'
import AboutLocation from '@/components/about/AboutLocation'
import AboutFAQ from '@/components/about/AboutFAQ'
import AboutVision from '@/components/about/AboutVision'
import AboutCTA from '@/components/about/AboutCTA'

export const metadata: Metadata = createPageMetadata({
  title: 'About Us | State-of-the-Art Sports Facility in DFW',
  description: "Learn about DFW Indoor Sports - Dallas-Fort Worth's premier multi-sport destination. Discover our state-of-the-art facility, expert coaching staff, and vibrant sports community in Fort Worth, Texas.",
  keywords: [
    'about DFW Indoor Sports',
    'Fort Worth sports facility',
    'Dallas indoor sports center',
    'multi-sport complex Texas',
    'sports community DFW',
  ],
  path: '/about',
})

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ])

  const faqSchema = generateFAQSchema([
    { question: "What sports can I play?", answer: "We offer four primary sports: Cricket, Badminton, Soccer, and Dodgeball. All available year-round indoors." },
    { question: "Do I need a membership?", answer: "No. We offer both membership options (unlimited access) and drop-in rentals. Membership is best for 2+ visits/month." },
    { question: "Is DFW Indoor Sports only for experienced players?", answer: "Absolutely not. About 40% of new members are beginners. We welcome all skill levels with specific programs." },
    { question: "Can I rent for private events?", answer: "Yes. We host birthday parties, corporate team-building, and tournaments. Dodgeball and Cricket are popular for groups." },
    { question: "How do I get started?", answer: "Schedule a free tour, book a drop-in session online, or call (817) 938-0808 to discuss options." },
    { question: "Do you offer scholarships?", answer: "Yes. We provide support for youth facing financial barriers. We believe money shouldn't prevent talent from training." }
  ])

  return (
    <div className="bg-white dark:bg-[#020408] min-h-screen font-sans selection:bg-dfw-red selection:text-white transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutPhilosophy />
      <AboutSportsGrid />
      <AboutFacilitySpecs />
      <AboutAudiences />
      <AboutLocation />
      <AboutFAQ />
      <AboutVision />
      <AboutCTA />
    </div>
  )
}