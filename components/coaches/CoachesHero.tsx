'use client'

import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const CoachesHero: React.FC = () => {
  return (
    <div className="relative h-[60vh] min-h-[400px] flex items-center bg-[#020408] overflow-hidden">
      {/* Dynamic Background */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/sports/cricket-training.webp")' }}
      ></motion.div>
      
      {/* Cinematic Grading Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020408] via-[#020408]/80 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent z-10"></div>
      <div className="absolute inset-0 opacity-20 bg-[url('/textures/carbon-fibre.png')] mix-blend-overlay z-10"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 pt-10">
         {/* Micro-Interaction Label */}
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl text-white/80 font-mono text-[10px] uppercase tracking-[0.3em] mb-4 hover:bg-white/10 transition-colors cursor-default"
         >
            <Heart size={12} className="text-dfw-red fill-current animate-pulse" />
            More Than Instruction
         </motion.div>
         
         <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-header font-bold text-white uppercase tracking-tighter mb-4 leading-[1.1] max-w-6xl drop-shadow-2xl"
         >
           Mentors Who <br/>
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-400 to-gray-600">Make Champions</span>
         </motion.h1>
         
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8"
         >
           <p className="max-w-xl text-gray-400 text-base md:text-lg font-light leading-relaxed border-l-2 border-dfw-red pl-6">
             A great coach doesn't just teach you how to hold the bat. They teach you how to hold your head high.
           </p>
           
           {/* Stats in Hero */}
           <div className="flex gap-6 md:gap-8">
              <div>
                 <div className="text-2xl font-header font-bold text-white">100%</div>
                 <div className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">Certified</div>
              </div>
              <div>
                 <div className="text-2xl font-header font-bold text-white">1:6</div>
                 <div className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">Focus Ratio</div>
              </div>
              <div>
                 <div className="text-2xl font-header font-bold text-white">Global</div>
                 <div className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">Experience</div>
              </div>
           </div>
         </motion.div>

         <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6"
         >
            <button 
               onClick={() => document.getElementById('faculty')?.scrollIntoView({ behavior: 'smooth' })}
               className="group relative px-6 py-3 bg-white text-dfw-navy font-bold uppercase tracking-widest text-xs rounded-sm overflow-hidden transition-all hover:bg-gray-100"
            >
               <div className="absolute inset-0 w-1 bg-dfw-red transition-all duration-300 group-hover:w-full opacity-10"></div>
               <span className="relative flex items-center gap-3">
                 Meet The Team <ArrowRight size={14} />
               </span>
            </button>
         </motion.div>
      </div>
    </div>
  );
};

export default CoachesHero;