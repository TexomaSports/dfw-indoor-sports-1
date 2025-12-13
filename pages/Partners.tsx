import React, { useEffect } from 'react';
import PartnersHero from '../components/partners/PartnersHero';
import PartnersIntro from '../components/partners/PartnersIntro';
import CurrentPartners from '../components/partners/CurrentPartners';
import SponsorshipTiers from '../components/partners/SponsorshipTiers';
import InvestmentLevels from '../components/partners/InvestmentLevels';
import PartnersTestimonials from '../components/partners/PartnersTestimonials';
import PartnersProcess from '../components/partners/PartnersProcess';
import PartnersFAQ from '../components/partners/PartnersFAQ';
import PartnersCTA from '../components/partners/PartnersCTA';

const Partners: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white dark:bg-[#020408] min-h-screen font-sans selection:bg-dfw-red selection:text-white transition-colors duration-300">
      <PartnersHero />
      <PartnersIntro />
      <CurrentPartners />
      <SponsorshipTiers />
      <InvestmentLevels />
      <PartnersTestimonials />
      <PartnersProcess />
      <PartnersFAQ />
      <PartnersCTA />
    </div>
  );
};

export default Partners;