import React from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutStory from '../components/about/AboutStory';
import AboutValues from '../components/about/AboutValues';
import AboutPhilosophy from '../components/about/AboutPhilosophy';
import AboutSportsGrid from '../components/about/AboutSportsGrid';
import AboutFacilitySpecs from '../components/about/AboutFacilitySpecs';
import AboutAudiences from '../components/about/AboutAudiences';
import AboutLocation from '../components/about/AboutLocation';
import AboutFAQ from '../components/about/AboutFAQ';
import AboutVision from '../components/about/AboutVision';
import AboutCTA from '../components/about/AboutCTA';

const About: React.FC = () => {
  return (
    <div className="bg-white dark:bg-[#020408] min-h-screen font-sans selection:bg-dfw-red selection:text-white transition-colors duration-300">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutPhilosophy />
      <AboutSportsGrid />
      <AboutFacilitySpecs />
      <AboutAudiences />
      <AboutLocation />
      <AboutFAQ />
      <AboutVision />
      <AboutCTA />
    </div>
  );
};

export default About;