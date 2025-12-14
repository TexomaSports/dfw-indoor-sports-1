'use client'

import React from 'react';
import { ChevronRight, Calendar, Users, Check } from 'lucide-react';

const SoccerHero: React.FC = () => {
  return (
    <div className="relative h-[60vh] min-h-[400px] flex items-center bg-[#064E3B] overflow-hidden group">
      {/* Background Image with Cinematic Zoom and Parallax Feel */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50 scale-105 animate-zoom-slow mix-blend-luminosity"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2600&auto=format&fit=crop")' }}
      ></div>
      
      {/* Advanced Gradient Overlays for Depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#064E3B] via-[#064E3B]/90 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 mix-blend-overlay z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#064E3B] to-transparent z-10"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 pt-10">
         
         {/* Live Availability Ticker - Glassmorphism */}
         <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-900/40 backdrop-blur-xl text-emerald-100 font-mono text-[10px] uppercase tracking-[0.25em] mb-4 animate-fade-in-up hover:bg-emerald-900/60 transition-colors cursor-default shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-bold">Status:</span> Open 5 AM - 11 PM Daily
         </div>
         
         <h1 className="text-3xl md:text-5xl lg:text-6xl font-header font-bold text-white uppercase tracking-tighter mb-4 leading-[1.1] animate-slide-up max-w-5xl drop-shadow-2xl">
           Indoor Soccer Field Rental <br/>
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-200 to-white">Fort Worth</span>
         </h1>
         
         <div className="flex flex-col md:flex-row items-start gap-4 mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <p className="max-w-2xl text-gray-200 text-base md:text-lg font-light leading-relaxed border-l-2 border-emerald-500 pl-6 backdrop-blur-sm">
              Reserve professional indoor soccer fields with climate-controlled comfort. Small-sided games on FIFA-approved artificial turf.
            </p>
         </div>
         
         {/* 3 Prominent CTAs */}
         <div className="flex flex-col sm:flex-row gap-3 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <button className="group relative px-6 py-3 bg-emerald-600 text-white font-bold uppercase tracking-widest text-xs rounded-sm overflow-hidden shadow-[0_0_40px_rgba(5,150,105,0.4)] transition-all hover:shadow-[0_0_60px_rgba(5,150,105,0.6)] hover:-translate-y-1">
               <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine"></div>
               <span className="relative flex items-center gap-3">Book Field Now <ChevronRight size={14} /></span>
            </button>
            <button 
               onClick={() => document.getElementById('booking-process')?.scrollIntoView({ behavior: 'smooth' })}
               className="px-6 py-3 bg-white text-[#064E3B] font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-gray-100 transition-all shadow-lg flex items-center gap-2"
            >
               <Calendar size={14} /> View Availability
            </button>
            <button 
               onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
               className="px-6 py-3 border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-white hover:text-[#064E3B] transition-all flex items-center gap-2"
            >
               <Users size={14} /> Membership Options
            </button>
         </div>
      </div>
    </div>
  );
};

export default SoccerHero;