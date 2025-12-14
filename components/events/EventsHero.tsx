'use client'

import React from 'react';
import { ArrowRight, CheckCircle2, Calendar, PartyPopper } from 'lucide-react';
import { motion } from 'framer-motion';

const EventsHero: React.FC = () => {
  return (
    <div className="relative h-[60vh] min-h-[400px] flex items-center bg-[#050911] overflow-hidden">
        {/* Dynamic Background */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop")' }}
        ></motion.div>
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050911] via-[#050911]/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 mix-blend-overlay z-10"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-20 pt-10">
           {/* Trust Badge */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl text-white/90 font-mono text-[10px] uppercase tracking-[0.3em] mb-4 hover:bg-white/10 transition-colors cursor-default shadow-lg"
           >
              <PartyPopper size={12} className="text-dfw-red animate-bounce" />
              Memories Made Here
           </motion.div>
           
           <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4, duration: 0.8 }}
             className="text-3xl md:text-5xl lg:text-6xl font-header font-bold text-white uppercase tracking-tighter mb-4 leading-[1.1] max-w-5xl drop-shadow-2xl"
           >
             Celebrate in <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-dfw-red via-dfw-red to-white">Motion</span>
           </motion.h1>
           
           <motion.p 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.6 }}
             className="max-w-xl text-gray-300 text-base md:text-lg font-light leading-relaxed border-l-2 border-dfw-red pl-6 mb-6 backdrop-blur-sm"
           >
             Ditch the boring banquet halls. Give your team, your child, or your friends an experience they'll actually talk about.
           </motion.p>

           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.8 }}
             className="flex flex-col sm:flex-row gap-3"
           >
              <button 
                onClick={() => document.getElementById('planning')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-white text-dfw-navy font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-gray-100 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center gap-3 group"
              >
                 Start Planning <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-white hover:text-dfw-navy transition-all flex items-center gap-3"
              >
                 <Calendar size={14} /> View Packages
              </button>
           </motion.div>
           
           {/* Trust Indicators */}
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1 }}
             className="mt-6 flex flex-wrap gap-4 text-xs font-mono text-gray-400"
           >
              <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> We Handle Cleanup</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Equipment Included</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Coaches Provided</span>
           </motion.div>
        </div>
      </div>
  );
};

export default EventsHero;