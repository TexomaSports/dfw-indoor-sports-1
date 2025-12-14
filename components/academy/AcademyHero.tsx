'use client'

import React from 'react';
import { ChevronRight, PlayCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const AcademyHero: React.FC = () => {
  return (
    <div className="relative h-[60vh] min-h-[400px] flex items-center bg-[#050911] overflow-hidden">
      {/* Dynamic Background with Parallax Feel */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop")' }}
      ></motion.div>
      
      {/* Advanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050911] via-[#050911]/80 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#050911] via-transparent to-transparent z-10"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay z-10"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 pt-10">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-dfw-red/40 bg-dfw-red/10 backdrop-blur-2xl text-dfw-red font-mono text-[10px] uppercase tracking-[0.25em] mb-4 hover:bg-dfw-red/20 transition-colors cursor-default"
         >
            <Star size={12} fill="currentColor" />
            <span>CricKingdom by Rohit Sharma</span>
         </motion.div>
         
         <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-header font-bold text-white uppercase tracking-tighter mb-4 leading-[1.1] max-w-5xl drop-shadow-2xl"
         >
           Where Potential <br/>
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-dfw-red via-dfw-red to-white">Meets Purpose</span>
         </motion.h1>
         
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row items-start md:items-center gap-4"
         >
           <p className="max-w-xl text-gray-300 text-base md:text-lg font-light leading-relaxed border-l-2 border-dfw-red pl-6 backdrop-blur-sm">
             We don't just teach cricket; we build character. Through world-class mentorship and a supportive community, we guide every athlete.
           </p>
           
           {/* Human-Centric Micro Stats */}
           <div className="hidden md:flex gap-6 border-l border-white/10 pl-6">
              <div>
                 <div className="text-xl font-header font-bold text-white">1:6</div>
                 <div className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">Personal Attention</div>
              </div>
              <div>
                 <div className="text-xl font-header font-bold text-white">Age 5+</div>
                 <div className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">To Elite Level</div>
              </div>
           </div>
         </motion.div>

         <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mt-6"
         >
            <button className="group relative px-6 py-3 bg-dfw-red text-white font-bold uppercase tracking-widest text-xs rounded-sm overflow-hidden shadow-[0_0_40px_rgba(214,40,40,0.4)] transition-all hover:shadow-[0_0_60px_rgba(214,40,40,0.6)] hover:-translate-y-1">
               <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine"></div>
               <span className="relative flex items-center gap-3">Book Free Assessment <ChevronRight size={14} /></span>
            </button>
            <button className="px-6 py-3 border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-white hover:text-dfw-navy transition-all flex items-center gap-3">
               <PlayCircle size={14} /> Watch Our Story
            </button>
         </motion.div>
      </div>
    </div>
  );
};

export default AcademyHero;