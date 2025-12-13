import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema } from '@/lib/metadata'
import AcademyHero from '@/components/academy/AcademyHero'
import AcademyNarrative from '@/components/academy/AcademyNarrative'
import AcademyPrograms from '@/components/academy/AcademyPrograms'
import AcademyCoaching from '@/components/academy/AcademyCoaching'
import AcademyExcellence from '@/components/academy/AcademyExcellence'
import AcademyGlobal from '@/components/academy/AcademyGlobal'
import AcademyFAQ from '@/components/academy/AcademyFAQ'
import AcademyCTA from '@/components/academy/AcademyCTA'

export const metadata: Metadata = createPageMetadata({
  title: 'Sports Academy | Professional Cricket & Badminton Training in DFW',
  description: 'Join the DFW Indoor Sports Academy for professional cricket and badminton training. Expert coaches, structured programs for all ages and skill levels in Fort Worth, Texas.',
  keywords: [
    'cricket academy Dallas',
    'badminton training Fort Worth',
    'sports coaching DFW',
    'youth sports academy Texas',
    'professional sports training',
  ],
  path: '/academy',
})

export default function AcademyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Academy', url: '/academy' },
  ])

  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans selection:bg-dfw-red selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AcademyHero />
      <AcademyNarrative />
      <AcademyPrograms />
      <AcademyCoaching />
      <AcademyExcellence />
      <AcademyGlobal />
      <AcademyFAQ />
      <AcademyCTA />
    </div>
  )
}