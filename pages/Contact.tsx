import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactIntro from '../components/contact/ContactIntro';
import ContactMethods from '../components/contact/ContactMethods';
import ContactQuickAnswers from '../components/contact/ContactQuickAnswers';
import ContactForm from '../components/contact/ContactForm';
import ContactLocation from '../components/contact/ContactLocation';
import ContactHours from '../components/contact/ContactHours';
import ContactSocial from '../components/contact/ContactSocial';
import ContactFAQ from '../components/contact/ContactFAQ';
import ContactTeam from '../components/contact/ContactTeam';
import ContactCTA from '../components/contact/ContactCTA';

const Contact: React.FC = () => {
  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans selection:bg-dfw-red selection:text-white">
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
    </div>
  );
};

export default Contact;
