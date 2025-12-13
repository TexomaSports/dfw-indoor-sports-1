import React, { useEffect } from 'react';
import SoccerHero from '../components/soccer/SoccerHero';
import SoccerIntro from '../components/soccer/SoccerIntro';
import SoccerFeatures from '../components/soccer/SoccerFeatures';
import SoccerPricing from '../components/soccer/SoccerPricing';
import SoccerComparison from '../components/soccer/SoccerComparison';
import SoccerShowcase from '../components/soccer/SoccerShowcase';
import SoccerPrograms from '../components/soccer/SoccerPrograms';
import SoccerBooking from '../components/soccer/SoccerBooking';
import SoccerLocation from '../components/soccer/SoccerLocation';
import SoccerExtras from '../components/soccer/SoccerExtras';
import SoccerFAQ from '../components/soccer/SoccerFAQ';
import SoccerCTA from '../components/soccer/SoccerCTA';

const SoccerFieldRental: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white dark:bg-[#020408] min-h-screen font-sans selection:bg-[#064E3B] selection:text-white transition-colors duration-300">
      <SoccerHero />
      <SoccerIntro />
      <SoccerFeatures />
      <SoccerPricing />
      <SoccerComparison />
      <SoccerShowcase />
      <SoccerPrograms />
      <SoccerExtras />
      <SoccerLocation />
      <SoccerBooking />
      <SoccerFAQ />
      <SoccerCTA />
    </div>
  );
};

export default SoccerFieldRental;