'use client'

import React from 'react';
import { ArrowRight, CheckCircle2, Calendar, PartyPopper } from 'lucide-react';
import { motion } from 'framer-motion';

const EventsHero: React.FC = () => {
  return (
    <div className="relative h-[60vh] min-h-[400px] flex items-center bg-[#1a1a1f] overflow-hidden">
        {/* Dynamic Background */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop")' }}
        ></motion.div>
        
        {/* Metallic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2d2d35] via-[#1a1a1f]/90 to-[#3a3a42]/70 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a1f]/50 to-[#1a1a1f] z-10"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-40 mix-blend-overlay z-10"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-20 pt-10">
           {/* Trust Badge */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-zinc-500/30 bg-zinc-800/50 backdrop-blur-2xl text-zinc-300 font-mono text-[10px] uppercase tracking-[0.3em] mb-4 hover:bg-zinc-700/50 transition-colors cursor-default shadow-lg"
           >
              <PartyPopper size={12} className="text-zinc-400 animate-bounce" />
              Memories Made Here
           </motion.div>
           
           <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4, duration: 0.8 }}
             className="text-3xl md:text-5xl lg:text-6xl font-header font-bold text-white uppercase tracking-tighter mb-4 leading-[1.1] max-w-5xl drop-shadow-2xl"
           >
             Celebrate in <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 via-zinc-400 to-zinc-600">Motion</span>
           </motion.h1>
           
           <motion.p 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.6 }}
             className="max-w-xl text-zinc-400 text-base md:text-lg font-light leading-relaxed border-l-2 border-zinc-500 pl-6 mb-6 backdrop-blur-sm"
           >
             Ditch the boring banquet halls. Give your team, your child, or your friends an experience they'll actually talk about.
           </motion.p>

           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.8 }}
             className="flex flex-row gap-3"
           >
              <button 
                onClick={() => document.getElementById('planning')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-gradient-to-r from-zinc-200 to-zinc-400 text-zinc-900 font-bold uppercase tracking-widest text-xs rounded-sm hover:from-white hover:to-zinc-300 transition-all shadow-[0_0_30px_rgba(161,161,170,0.3)] flex items-center gap-3 group"
              >
                 Start Planning <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 border border-zinc-600 bg-zinc-800/50 backdrop-blur-md text-zinc-300 font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-zinc-200 hover:text-zinc-900 hover:border-zinc-200 transition-all flex items-center gap-3"
              >
                 <Calendar size={14} /> View Packages
              </button>
           </motion.div>
           
           {/* Trust Indicators */}
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1 }}
             className="mt-6 flex flex-wrap gap-4 text-xs font-mono text-zinc-500"
           >
              <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-zinc-400" /> We Handle Cleanup</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-zinc-400" /> Equipment Included</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-zinc-400" /> Coaches Provided</span>
           </motion.div>
        </div>
      </div>
  );
};

export default EventsHero;