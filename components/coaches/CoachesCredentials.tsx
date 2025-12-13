import React from 'react';
import { motion } from 'framer-motion';

const CoachesCredentials: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#020408] border-b border-gray-100 dark:border-white/5 transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:w-1/2"
             >
                <h2 className="text-3xl md:text-4xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6">Understanding Certifications</h2>
                <div className="prose prose-sm text-gray-500 dark:text-gray-400 mb-8">
                   <p>Not all cricket coaches are created equal. We prioritize internationally recognized standards to ensure your child receives safe, effective, and world-class instruction.</p>
                </div>
                <div className="space-y-4">
                   <div className="flex gap-4 p-4 bg-gray-50 dark:bg-white/5 rounded-lg border border-gray-100 dark:border-white/10">
                      <div className="font-bold text-dfw-navy dark:text-white min-w-[120px]">Level 1</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Foundation Coach. Entry-level certification for community cricket.</div>
                   </div>
                   <div className="flex gap-4 p-4 bg-dfw-navy/5 dark:bg-dfw-red/10 rounded-lg border border-dfw-navy/10 dark:border-dfw-red/20">
                      <div className="font-bold text-dfw-navy dark:text-white min-w-[120px]">Level 2</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 font-semibold">Development Coach. Advanced certification for academy and elite junior coaching. Requires demonstrated mastery.</div>
                   </div>
                   <div className="flex gap-4 p-4 bg-gray-50 dark:bg-white/5 rounded-lg border border-gray-100 dark:border-white/10">
                      <div className="font-bold text-dfw-navy dark:text-white min-w-[120px]">Level 3</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">High Performance Coach. Professional certification for state and national programs.</div>
                   </div>
                </div>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="lg:w-1/2 relative"
             >
                <div className="bg-dfw-navy dark:bg-[#0A111F] p-8 rounded-lg text-white relative overflow-hidden border border-white/10">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-dfw-red/20 rounded-full blur-[40px]"></div>
                   <h3 className="font-bold text-xl uppercase mb-4">CricKingdom's Commitment</h3>
                   <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      All head coaches at CricKingdom hold minimum Level 2 certifications from recognized cricket bodies (Cricket Australia or ICC). This ensures coaching quality meets international standards regardless of which CricKingdom location you attend.
                   </p>
                   <div className="flex items-center gap-4">
                      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Cricket_Australia_logo.svg/1200px-Cricket_Australia_logo.svg.png" alt="CA" className="h-8 opacity-80 bg-white p-1 rounded" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/International_Cricket_Council_logo.svg/1200px-International_Cricket_Council_logo.svg.png" alt="ICC" className="h-8 opacity-80 bg-white p-1 rounded" />
                   </div>
                </div>
             </motion.div>
          </div>
       </div>
    </section>
  );
};

export default CoachesCredentials;