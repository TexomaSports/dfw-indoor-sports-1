import React, { useEffect } from 'react';
import BadmintonHero from '../components/badminton/BadmintonHero';
import BadmintonIntro from '../components/badminton/BadmintonIntro';
import BadmintonFeatures from '../components/badminton/BadmintonFeatures';
import BadmintonPricing from '../components/badminton/BadmintonPricing';
import BadmintonComparison from '../components/badminton/BadmintonComparison';
import BadmintonShowcase from '../components/badminton/BadmintonShowcase';
import BadmintonLocation from '../components/badminton/BadmintonLocation';
import BadmintonBooking from '../components/badminton/BadmintonBooking';
import BadmintonPrograms from '../components/badminton/BadmintonPrograms';
import BadmintonEquip from '../components/badminton/BadmintonEquip';
import BadmintonFAQ from '../components/badminton/BadmintonFAQ';
import BadmintonCTA from '../components/badminton/BadmintonCTA';

const BadmintonCourtRental: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white dark:bg-[#020408] min-h-screen font-sans selection:bg-[#1E3A8A] selection:text-white transition-colors duration-300">
      <BadmintonHero />
      <BadmintonIntro />
      <BadmintonFeatures />
      <BadmintonPricing />
      <BadmintonComparison />
      <BadmintonShowcase />
      <BadmintonLocation />
      <BadmintonBooking />
      <BadmintonPrograms />
      <BadmintonEquip />
      <BadmintonFAQ />
      <BadmintonCTA />
    </div>
  );
};

export default BadmintonCourtRental;