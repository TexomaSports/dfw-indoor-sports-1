import EventsHero from '@/components/events/EventsHero'
import EventsIntro from '@/components/events/EventsIntro'
import EventsPackages from '@/components/events/EventsPackages'
import EventsCorporate from '@/components/events/EventsCorporate'
import EventsTournaments from '@/components/events/EventsTournaments'
import EventsCatering from '@/components/events/EventsCatering'
import EventsFAQ from '@/components/events/EventsFAQ'
import EventsCTA from '@/components/events/EventsCTA'

export default function EventsPage() {
  return (
    <div className="bg-white dark:bg-[#020408] min-h-screen font-sans selection:bg-dfw-red selection:text-white transition-colors duration-300">
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
