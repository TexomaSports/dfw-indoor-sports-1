import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/metadata'
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

  const faqSchema = generateFAQSchema([
    { question: "Can I schedule a specific time to speak with someone?", answer: "Yes. Request a callback in the contact form or call during business hours to schedule a conversation at your convenience." },
    { question: "Do you respond to emails on weekends?", answer: "Yes, but response times may be slightly longer. Weekday inquiries typically receive same-day responses; weekend inquiries are answered by Sunday evening or Monday morning." },
    { question: "What if I need to reach you urgently?", answer: "Call (817) 938-0808. During business hours, staff answers directly. After hours, leave a detailed voicemail with your phone number and reason for urgency." },
    { question: "Can I visit without an appointment?", answer: "Yes, though facility tours are easier to accommodate when you call ahead. Drop-ins welcome during business hours." },
    { question: "I submitted the form but haven't heard back - what should I do?", answer: "Check your spam folder first. If nothing after 48 hours, call us at (817) 938-0808 - something may have gone wrong with the submission." }
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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