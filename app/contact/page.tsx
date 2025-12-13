import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema } from '@/lib/metadata'
import ContactHero from '@/components/contact/ContactHero'
import ContactIntro from '@/components/contact/ContactIntro'
import ContactMethods from '@/components/contact/ContactMethods'
import ContactQuickAnswers from '@/components/contact/ContactQuickAnswers'
import ContactForm from '@/components/contact/ContactForm'
import ContactLocation from '@/components/contact/ContactLocation'
import ContactHours from '@/components/contact/ContactHours'
import ContactSocial from '@/components/contact/ContactSocial'
import ContactFAQ from '@/components/contact/ContactFAQ'
import ContactTeam from '@/components/contact/ContactTeam'
import ContactCTA from '@/components/contact/ContactCTA'

export const metadata: Metadata = createPageMetadata({
  title: 'Contact Us | Visit Our Fort Worth Sports Facility',
  description: 'Contact DFW Indoor Sports - Call (817) 938-0808 or visit us at 16230 Three Wide Drive, Fort Worth, TX 76177. Open 5AM-11PM daily. Schedule a tour or book your court today.',
  keywords: [
    'contact DFW Indoor Sports',
    'Fort Worth sports facility location',
    'Dallas indoor sports contact',
    'sports facility directions',
  ],
  path: '/contact',
})

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactHero />
      <ContactIntro />
      <ContactMethods />
      <ContactQuickAnswers />
      <ContactForm />
      <ContactLocation />
      <ContactHours />
      <ContactSocial />
      <ContactFAQ />
      <ContactTeam />
      <ContactCTA />
    </>
  )
}