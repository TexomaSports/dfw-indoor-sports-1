import React from 'react';
import SportsHero from '../components/oursports/SportsHero';
import SportsIntro from '../components/oursports/SportsIntro';
import SportsShowcase from '../components/oursports/SportsShowcase';
import SportsGuide from '../components/oursports/SportsGuide';
import SportsCommunity from '../components/oursports/SportsCommunity';
import SportsFAQ from '../components/oursports/SportsFAQ';
import SportsCTA from '../components/oursports/SportsCTA';

const OurSports: React.FC = () => {
  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans selection:bg-dfw-red selection:text-white">
      <SportsHero />
      <SportsIntro />
      <SportsShowcase />
      <SportsGuide />
      <SportsCommunity />
      <SportsFAQ />
      <SportsCTA />
    </div>
  );
};

export default OurSports;