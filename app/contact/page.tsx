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

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with DFW Indoor Sports. Find our location, hours, and contact information.',
}

export default function ContactPage() {
  return (
    <>
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
