import React, { useEffect } from 'react';
import CricketHero from '../components/cricket/CricketHero';
import CricketIntro from '../components/cricket/CricketIntro';
import CricketFeatures from '../components/cricket/CricketFeatures';
import CricketPricing from '../components/cricket/CricketPricing';
import CricketComparison from '../components/cricket/CricketComparison';
import CricketShowcase from '../components/cricket/CricketShowcase';
import CricketLocation from '../components/cricket/CricketLocation';
import CricketBooking from '../components/cricket/CricketBooking';
import CricketExtras from '../components/cricket/CricketExtras';
import CricketFAQ from '../components/cricket/CricketFAQ';
import CricketCTA from '../components/cricket/CricketCTA';

const CricketLaneRental: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white dark:bg-[#020408] min-h-screen font-sans selection:bg-[#CC0000] selection:text-white transition-colors duration-300">
      <CricketHero />
      <CricketIntro />
      <CricketFeatures />
      <CricketShowcase />
      <CricketPricing />
      <CricketComparison />
      <CricketLocation />
      <CricketBooking />
      <CricketExtras />
      <CricketFAQ />
      <CricketCTA />
    </div>
  );
};

export default CricketLaneRental;