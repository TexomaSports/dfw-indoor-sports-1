import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema } from '@/lib/metadata'
import CoachesHero from '@/components/coaches/CoachesHero'
import CoachesStats from '@/components/coaches/CoachesStats'
import CoachesIntro from '@/components/coaches/CoachesIntro'
import CoachesProfiles from '@/components/coaches/CoachesProfiles'
import CoachesPhilosophy from '@/components/coaches/CoachesPhilosophy'
import CoachesCredentials from '@/components/coaches/CoachesCredentials'
import CoachesAgeGroups from '@/components/coaches/CoachesAgeGroups'
import CoachesFAQ from '@/components/coaches/CoachesFAQ'
import CoachesCTA from '@/components/coaches/CoachesCTA'

export const metadata: Metadata = createPageMetadata({
  title: 'Our Expert Coaches | Professional Sports Training in Fort Worth',
  description: 'Meet our experienced coaching staff at DFW Indoor Sports. Professional trainers specializing in cricket, badminton, and other sports. Quality instruction for all ages and skill levels.',
  keywords: [
    'cricket coaches Fort Worth',
    'professional sports coaches Dallas',
    'expert training staff DFW',
    'certified coaches Texas',
    'badminton instructors DFW',
  ],
  path: '/academy/coaches',
})

export default function CoachesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Academy', url: '/academy' },
    { name: 'Coaches', url: '/academy/coaches' },
  ])

  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans selection:bg-dfw-red selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CoachesHero />
      <CoachesStats />
      <CoachesIntro />
      <CoachesProfiles />
      <CoachesPhilosophy />
      <CoachesCredentials />
      <CoachesAgeGroups />
      <CoachesFAQ />
      <CoachesCTA />
    </div>
  )
}