import React from 'react';
import HomeHero from '../components/home/HomeHero';
import HomeMarquee from '../components/home/HomeMarquee';
import HomeIntro from '../components/home/HomeIntro';
import HomeFeatures from '../components/home/HomeFeatures';
import HomeFacilities from '../components/home/HomeFacilities';
import HomePrograms from '../components/home/HomePrograms';
import HomeMembership from '../components/home/HomeMembership';
import HomeCoaching from '../components/home/HomeCoaching';
import HomeEvents from '../components/home/HomeEvents';
import HomeTestimonials from '../components/home/HomeTestimonials';
import HomeLocation from '../components/home/HomeLocation';
import HomeCTAGrid from '../components/home/HomeCTAGrid';
import HomeBottom from '../components/home/HomeBottom';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <>
      <SEO title="Home" description="DFW Indoor Sports - The premier multi-sport indoor facility in Fort Worth offering Cricket, Badminton, Soccer, and more." />
      <HomeHero />
      <HomeMarquee />
      <HomeIntro />
      <HomeFeatures />
      <HomeFacilities />
      <HomePrograms />
      <HomeMembership />
      <HomeCoaching />
      <HomeEvents />
      <HomeTestimonials />
      <HomeLocation />
      <HomeCTAGrid />
      <HomeBottom />
    </>
  );
};

export default Home;