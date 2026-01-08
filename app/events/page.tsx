import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema } from '@/lib/metadata'
import EventsHero from '@/components/events/EventsHero'
import EventsIntro from '@/components/events/EventsIntro'
import EventsPackages from '@/components/events/EventsPackages'
import EventsCorporate from '@/components/events/EventsCorporate'
import EventsTournaments from '@/components/events/EventsTournaments'
import EventsCatering from '@/components/events/EventsCatering'
import EventsFAQ from '@/components/events/EventsFAQ'
import EventsCTA from '@/components/events/EventsCTA'

export const metadata: Metadata = createPageMetadata({
  title: 'Sports Events Fort Worth | Birthday Parties & Corporate Team Building Dallas',
  description: 'Host your special event at DFW Indoor Sports. Perfect venue for birthday parties, corporate events, tournaments, and team building activities in Fort Worth, TX.',
  keywords: [
    'sports events Fort Worth',
    'birthday party venue Dallas',
    'corporate sports events DFW',
    'sports tournaments Texas',
    'team building events',
  ],
  path: '/events',
})

export default function EventsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Events', url: '/events' },
  ])

  return (
    <div className="bg-white dark:bg-[#020408] min-h-screen font-sans selection:bg-dfw-red selection:text-white transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <EventsHero />
      <EventsIntro />
      <EventsPackages />
      <EventsCorporate />
      <EventsTournaments />
      <EventsCatering />
      <EventsFAQ />
      <EventsCTA />
    </div>
  )
}