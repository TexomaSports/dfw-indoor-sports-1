import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'
import HomeHero from '@/components/home/HomeHero'
import HomeMarquee from '@/components/home/HomeMarquee'
import HomeIntro from '@/components/home/HomeIntro'
import HomeFeatures from '@/components/home/HomeFeatures'
import HomeFacilities from '@/components/home/HomeFacilities'
import HomePrograms from '@/components/home/HomePrograms'
import HomeMembership from '@/components/home/HomeMembership'
import HomeCoaching from '@/components/home/HomeCoaching'
import HomeEvents from '@/components/home/HomeEvents'
import HomeTestimonials from '@/components/home/HomeTestimonials'
import HomeLocation from '@/components/home/HomeLocation'
import HomeCTAGrid from '@/components/home/HomeCTAGrid'
import HomeBottom from '@/components/home/HomeBottom'

export const metadata: Metadata = createPageMetadata({
  title: 'Premier Multi-Sport Indoor Facility in Dallas-Fort Worth',
  description: 'DFW Indoor Sports - State-of-the-art indoor cricket lanes, badminton courts, soccer fields, and dodgeball courts. Professional coaching, memberships, and court rentals in Fort Worth, TX. Open 5AM-11PM daily.',
  keywords: [
    'indoor sports Dallas Fort Worth',
    'multi-sport facility DFW',
    'indoor cricket Fort Worth',
    'badminton courts Dallas',
    'indoor soccer DFW',
    'sports facility Texas',
    'court rentals Fort Worth',
  ],
  path: '/',
})

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeMarquee />
      <HomeIntro />
      <HomeFeatures />
      <HomeFacilities />
      <HomePrograms />
      <HomeMembership />
      <HomeCoaching />
      <HomeEvents />
      <HomeTestimonials />
      <HomeLocation />
      <HomeCTAGrid />
      <HomeBottom />
    </>
  )
}