import CoachesHero from '@/components/coaches/CoachesHero'
import CoachesStats from '@/components/coaches/CoachesStats'
import CoachesIntro from '@/components/coaches/CoachesIntro'
import CoachesProfiles from '@/components/coaches/CoachesProfiles'
import CoachesPhilosophy from '@/components/coaches/CoachesPhilosophy'
import CoachesCredentials from '@/components/coaches/CoachesCredentials'
import CoachesAgeGroups from '@/components/coaches/CoachesAgeGroups'
import CoachesFAQ from '@/components/coaches/CoachesFAQ'
import CoachesCTA from '@/components/coaches/CoachesCTA'

export default function CoachesPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans selection:bg-dfw-red selection:text-white">
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
