import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema } from '@/lib/metadata'
import WaiverHero from '@/components/waiver/WaiverHero'
import WaiverDocument from '@/components/waiver/WaiverDocument'

export const metadata: Metadata = createPageMetadata({
  title: 'Release & Waiver of Liability | DFW Indoor Sports',
  description: 'Read and complete the release and waiver of liability for DFW Indoor Sports. Required for all participants before using our sports facilities in Fort Worth, TX.',
  keywords: [
    'sports waiver Fort Worth',
    'liability release form',
    'DFW Indoor Sports waiver',
  ],
  path: '/waiver',
})

export default function WaiverPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Waiver', url: '/waiver' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <WaiverHero />
      <WaiverDocument />
    </>
  )
}