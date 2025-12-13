import React from 'react';
import WaiverHero from '../components/waiver/WaiverHero';
import WaiverDocument from '../components/waiver/WaiverDocument';

const Waiver: React.FC = () => {
  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans selection:bg-dfw-red selection:text-white">
      <WaiverHero />
      <WaiverDocument />
    </div>
  );
};

export default Waiver;