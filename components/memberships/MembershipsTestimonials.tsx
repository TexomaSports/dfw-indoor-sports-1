import React from 'react';
import { Star } from 'lucide-react';

const MembershipsTestimonials: React.FC = () => {
   return (
      <section className="py-24 bg-white dark:bg-[#020408] border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
         <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-12 text-center">Real Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
               <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-lg border border-gray-100 dark:border-white/10 transition-colors">
                  <div className="flex gap-1 mb-4 text-yellow-500"><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /></div>
                  <p className="text-gray-600 dark:text-gray-300 italic mb-6">"The indoor pair cricket tournament at this DFW facility, organized by ACC, has been an exceptional experience. The facility's design and setup, including the box dimensions, evenly tensioned nets, and overall layout, demonstrate outstanding planning."</p>
                  <div className="font-bold text-dfw-navy dark:text-white text-sm">- Yash, Google Review</div>
               </div>
               <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-lg border border-gray-100 dark:border-white/10 transition-colors">
                  <div className="flex gap-1 mb-4 text-yellow-500"><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /></div>
                  <p className="text-gray-600 dark:text-gray-300 italic mb-6">"This facility consistently provides an excellent experience for us. The indoor cricket setup is exceptional, with well-kept grounds and superb lighting. Whether you play casually or competitively, this is an excellent place to enjoy cricket year-round."</p>
                  <div className="font-bold text-dfw-navy dark:text-white text-sm">- Krishna Reddy, Google Review</div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default MembershipsTestimonials;