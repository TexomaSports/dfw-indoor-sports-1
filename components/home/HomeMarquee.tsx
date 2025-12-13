'use client'

import React from 'react';
import { motion } from 'framer-motion';

const SPORTS_ITEMS = [
  '🏏 CRICKET', '🏸 BADMINTON', '⚽ SOCCER', '🎯 DODGEBALL'
];

const HomeMarquee: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-dfw-navy dark:bg-white/5 overflow-hidden py-6 border-y border-white/5 relative z-20"
    >
      
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-dfw-navy dark:from-black via-transparent to-dfw-navy dark:to-black z-20 pointer-events-none"></div>

      <div className="flex relative z-10 mask-linear-fade">
        {/* First Loop Set */}
        <div className="animate-marquee flex whitespace-nowrap min-w-full shrink-0 items-center">
          {SPORTS_ITEMS.map((item, index) => (
             <div key={index} className="flex items-center group">
               <span 
                 className="mx-8 text-3xl md:text-5xl font-header font-bold uppercase italic tracking-tighter text-transparent transition-all duration-500 group-hover:text-white/20 cursor-default select-none flex items-center gap-4" 
                 style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.15)' }}
               >
                 {item}
               </span>
               <div className="mx-4 flex items-center justify-center w-2 h-2 rounded-full bg-dfw-red/50 relative"></div>
             </div>
          ))}
        </div>
        
        {/* Second Loop Set */}
        <div className="animate-marquee flex whitespace-nowrap min-w-full shrink-0 items-center">
          {SPORTS_ITEMS.map((item, index) => (
             <div key={`dup-${index}`} className="flex items-center group">
               <span 
                 className="mx-8 text-3xl md:text-5xl font-header font-bold uppercase italic tracking-tighter text-transparent transition-all duration-500 group-hover:text-white/20 cursor-default select-none flex items-center gap-4" 
                 style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.15)' }}
               >
                 {item}
               </span>
               <div className="mx-4 flex items-center justify-center w-2 h-2 rounded-full bg-dfw-red/50 relative"></div>
             </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HomeMarquee;