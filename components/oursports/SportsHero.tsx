'use client'

import React from 'react';
import { ChevronRight, Play, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const SportsHero: React.FC = () => {
  return (
    <div className="relative h-[60vh] min-h-[400px] flex items-center bg-[#050911] overflow-hidden">
      {/* Dynamic Background with Parallax Feel */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2676&auto=format&fit=crop")' }}
      ></motion.div>
      
      {/* Advanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050911] via-[#050911]/90 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#050911] via-transparent to-transparent z-10"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay z-10"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 pt-10">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl text-dfw-red font-mono text-[10px] uppercase tracking-[0.25em] mb-4 hover:bg-white/10 transition-colors cursor-default shadow-[0_0_20px_rgba(214,40,40,0.2)]"
         >
            <span className="w-1.5 h-1.5 rounded-full bg-dfw-red animate-pulse"></span>
            Fort Worth's Active Hub
         </motion.div>
         
         <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-header font-bold text-white uppercase tracking-tighter mb-4 leading-[1.1] max-w-5xl drop-shadow-2xl"
         >
           Discover <br/>
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-dfw-red via-dfw-red to-white">Your Game</span>
         </motion.h1>
         
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row items-start md:items-center gap-4"
         >
           <p className="max-w-xl text-gray-300 text-base md:text-lg font-light leading-relaxed border-l-2 border-dfw-red pl-6 backdrop-blur-sm">
             Whether you're chasing a cricket century, smashing a shuttlecock, scoring a goal, or dodging a ball – this is where your passion comes to play.
           </p>
           
           {/* Micro Stats - Humanized */}
           <div className="hidden md:flex gap-6 border-l border-white/10 pl-6">
              <div>
                 <div className="text-xl font-header font-bold text-white">4</div>
                 <div className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">Core Sports</div>
              </div>
              <div>
                 <div className="text-xl font-header font-bold text-white">1</div>
                 <div className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">Thriving Community</div>
              </div>
           </div>
         </motion.div>

         <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mt-6"
         >
            <button 
               onClick={() => document.getElementById('sports-showcase')?.scrollIntoView({ behavior: 'smooth' })}
               className="group relative px-6 py-3 bg-dfw-red text-white font-bold uppercase tracking-widest text-xs rounded-sm overflow-hidden shadow-[0_0_40px_rgba(214,40,40,0.4)] transition-all hover:shadow-[0_0_60px_rgba(214,40,40,0.6)] hover:-translate-y-1"
            >
               <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine"></div>
               <span className="relative flex items-center gap-3">Find Your Sport <ChevronRight size={14} /></span>
            </button>
            <button className="px-6 py-3 border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-white hover:text-dfw-navy transition-all flex items-center gap-3">
               <Heart size={14} fill="currentColor" className="text-dfw-red" /> Join the Family
            </button>
         </motion.div>
      </div>
    </div>
  );
};

export default SportsHero;