import React from 'react';
import Hero from './Hero';
import Marquee from './Marquee';
import FacilitiesGrid from './FacilitiesGrid';
import InfoSection from './InfoSection';
import FeatureHighlights from './FeatureHighlights';
import ParallaxCTA from './ParallaxCTA';
import ServiceCards from './ServiceCards';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <FacilitiesGrid />
      <InfoSection />
      <FeatureHighlights />
      <ParallaxCTA />
      <ServiceCards />
    </>
  );
};

export default Home;