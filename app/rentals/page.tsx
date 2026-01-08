import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, generateServiceSchema } from '@/lib/metadata'
import RentalsHero from '@/components/rentals/RentalsHero'
import RentalsIntro from '@/components/rentals/RentalsIntro'
import RentalsFacilities from '@/components/rentals/RentalsFacilities'
import RentalsPricing from '@/components/rentals/RentalsPricing'
import RentalsValue from '@/components/rentals/RentalsValue'
import RentalsFAQ from '@/components/rentals/RentalsFAQ'
import RentalsCTA from '@/components/rentals/RentalsCTA'

export const metadata: Metadata = createPageMetadata({
  title: 'Court Rentals | Book Cricket, Badminton, Soccer & Dodgeball Courts',
  description: 'Rent professional indoor sports courts at DFW Indoor Sports. Cricket lanes, badminton courts, soccer fields, and dodgeball courts. Affordable hourly rentals, open 5AM-11PM daily.',
  keywords: [
    'court rentals Fort Worth',
    'sports lane rental Dallas',
    'indoor court booking DFW',
    'rent sports facility Texas',
    'hourly court rental',
  ],
  path: '/rentals',
})

export default function RentalsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Rentals', url: '/rentals' },
  ])

  const serviceSchema = generateServiceSchema({
    name: 'Indoor Sports Court Rentals',
    description: 'Hourly rental of professional indoor cricket lanes, badminton courts, soccer fields, and dodgeball courts in Fort Worth, TX. Open 5AM-11PM daily.',
    price: '25',
  })

  return (
    <div className="bg-[#FAFAFA] dark:bg-[#020408] min-h-screen font-sans selection:bg-dfw-red selection:text-white transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <RentalsHero />
      <RentalsIntro />
      <RentalsFacilities />
      <RentalsPricing />
      <RentalsValue />
      <RentalsFAQ />
      <RentalsCTA />
    </div>
  )
}