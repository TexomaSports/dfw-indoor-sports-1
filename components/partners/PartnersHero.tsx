'use client'

import React from 'react';
import { ArrowRight, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';

const PartnersHero: React.FC = () => {
  return (
    <div className="relative h-[60vh] min-h-[400px] flex items-center bg-[#020408] overflow-hidden">
      {/* Dynamic Background */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop")' }}
      ></motion.div>
      
      {/* Cinematic Grading Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020408] via-[#020408]/90 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent z-10"></div>
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay z-10"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 pt-10">
         {/* Badge */}
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl text-white/90 font-mono text-[10px] uppercase tracking-[0.3em] mb-4 hover:bg-white/10 transition-colors cursor-default shadow-lg group"
         >
            <span className="w-1.5 h-1.5 rounded-full bg-dfw-red shadow-[0_0_10px_#D62828] group-hover:animate-pulse"></span>
            Community Leadership
         </motion.div>
         
         <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-header font-bold text-white uppercase tracking-tighter mb-4 leading-[1.1] max-w-5xl drop-shadow-2xl"
         >
           Build Something <br/>
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-dfw-red via-dfw-red to-white">Lasting</span>
         </motion.h1>
         
         <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-2xl text-gray-400 text-base md:text-lg font-light leading-relaxed border-l-2 border-dfw-red pl-6 mb-6 backdrop-blur-sm"
         >
           Don't just advertise. Integrate your brand into the daily lives of 500+ active families. Become a pillar of the Fort Worth sports community.
         </motion.p>

         <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3"
         >
            <button 
              onClick={() => document.getElementById('contact-partners')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-white text-dfw-navy font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-gray-50 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center justify-center gap-3 group"
            >
               Partner With Us <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
               onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
               className="px-6 py-3 border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-white hover:text-dfw-navy transition-all flex items-center justify-center gap-3"
            >
               <Handshake size={16} /> Explore Impact
            </button>
         </motion.div>
      </div>
    </div>
  );
};

export default PartnersHero;