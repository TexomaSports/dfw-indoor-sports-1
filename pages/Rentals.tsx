import React, { useEffect } from 'react';
import RentalsHero from '../components/rentals/RentalsHero';
import RentalsIntro from '../components/rentals/RentalsIntro';
import RentalsFacilities from '../components/rentals/RentalsFacilities';
import RentalsPricing from '../components/rentals/RentalsPricing';
import RentalsValue from '../components/rentals/RentalsValue';
import RentalsFAQ from '../components/rentals/RentalsFAQ';
import RentalsCTA from '../components/rentals/RentalsCTA';

const Rentals: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAFAFA] dark:bg-[#020408] min-h-screen font-sans selection:bg-dfw-red selection:text-white transition-colors duration-300">
      <RentalsHero />
      <RentalsIntro />
      <RentalsFacilities />
      <RentalsPricing />
      <RentalsValue />
      <RentalsFAQ />
      <RentalsCTA />
    </div>
  );
};

export default Rentals;