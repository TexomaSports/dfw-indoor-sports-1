import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, generateServiceSchema } from '@/lib/metadata'
import AcademyHero from '@/components/academy/AcademyHero'
import AcademyNarrative from '@/components/academy/AcademyNarrative'
import AcademyPrograms from '@/components/academy/AcademyPrograms'
import AcademyCareerPathway from '@/components/academy/AcademyCareerPathway'
import AcademyCoaching from '@/components/academy/AcademyCoaching'
import AcademyExcellence from '@/components/academy/AcademyExcellence'
import AcademyGlobal from '@/components/academy/AcademyGlobal'
import AcademyFAQ from '@/components/academy/AcademyFAQ'
import AcademyCTA from '@/components/academy/AcademyCTA'

export const metadata: Metadata = createPageMetadata({
  title: 'Cricket Academy Fort Worth | Badminton Training Dallas | Youth Sports Programs',
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

  const serviceSchema = generateServiceSchema({
    name: 'Sports Training Academy',
    description: 'Professional cricket and badminton coaching programs for all ages and skill levels. Expert coaches, structured curriculum at DFW Indoor Sports in Fort Worth, Texas.',
    price: '150',
  })

  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans selection:bg-dfw-red selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <AcademyHero />
      <AcademyNarrative />
      <AcademyPrograms />
      <AcademyCareerPathway />
      <AcademyCoaching />
      <AcademyExcellence />
      <AcademyGlobal />
      <AcademyFAQ />
      <AcademyCTA />
    </div>
  )
}