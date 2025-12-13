import React from 'react';
import AcademyHero from '../components/academy/AcademyHero';
import AcademyNarrative from '../components/academy/AcademyNarrative';
import AcademyPrograms from '../components/academy/AcademyPrograms';
import AcademyCoaching from '../components/academy/AcademyCoaching';
import AcademyExcellence from '../components/academy/AcademyExcellence';
import AcademyGlobal from '../components/academy/AcademyGlobal';
import AcademyFAQ from '../components/academy/AcademyFAQ';
import AcademyCTA from '../components/academy/AcademyCTA';

const Academy: React.FC = () => {
  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans selection:bg-dfw-red selection:text-white">
      <AcademyHero />
      <AcademyNarrative />
      <AcademyPrograms />
      <AcademyCoaching />
      <AcademyExcellence />
      <AcademyGlobal />
      <AcademyFAQ />
      <AcademyCTA />
    </div>
  );
};

export default Academy;
