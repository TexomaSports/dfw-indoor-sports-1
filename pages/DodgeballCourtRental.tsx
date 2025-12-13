import React, { useEffect } from 'react';
import DodgeballHero from '../components/dodgeball/DodgeballHero';
import DodgeballIntro from '../components/dodgeball/DodgeballIntro';
import DodgeballFeatures from '../components/dodgeball/DodgeballFeatures';
import DodgeballGameModes from '../components/dodgeball/DodgeballGameModes';
import DodgeballPricing from '../components/dodgeball/DodgeballPricing';
import DodgeballPackages from '../components/dodgeball/DodgeballPackages';
import DodgeballShowcase from '../components/dodgeball/DodgeballShowcase';
import DodgeballLocation from '../components/dodgeball/DodgeballLocation';
import DodgeballBooking from '../components/dodgeball/DodgeballBooking';
import DodgeballFAQ from '../components/dodgeball/DodgeballFAQ';
import DodgeballCTA from '../components/dodgeball/DodgeballCTA';

const DodgeballCourtRental: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white dark:bg-[#020408] min-h-screen font-sans selection:bg-[#4C1D95] selection:text-white transition-colors duration-300">
      <DodgeballHero />
      <DodgeballIntro />
      <DodgeballFeatures />
      <DodgeballGameModes />
      <DodgeballPricing />
      <DodgeballPackages />
      <DodgeballShowcase />
      <DodgeballLocation />
      <DodgeballBooking />
      <DodgeballFAQ />
      <DodgeballCTA />
    </div>
  );
};

export default DodgeballCourtRental;