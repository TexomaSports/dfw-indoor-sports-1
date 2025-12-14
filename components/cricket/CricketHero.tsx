'use client'

import React from 'react';
import { ChevronRight, Calendar, Info, Check, Trophy, PlayCircle } from 'lucide-react';

const CricketHero: React.FC = () => {
  return (
    <div className="relative h-[60vh] min-h-[400px] flex items-center bg-[#006838] overflow-hidden group">
      {/* Background Image with Cinematic Zoom and Parallax Feel */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50 scale-105 animate-zoom-slow mix-blend-luminosity"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?q=80&w=2070&auto=format&fit=crop")' }}
      ></div>
      
      {/* Advanced Gradient Overlays for Depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#006838] via-[#006838]/90 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 mix-blend-overlay z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#006838] to-transparent z-10"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 pt-10">
         
         {/* Live Availability Ticker - Glassmorphism */}
         <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-green-400/30 bg-green-900/40 backdrop-blur-xl text-green-100 font-mono text-[10px] uppercase tracking-[0.25em] mb-4 animate-fade-in-up hover:bg-green-900/60 transition-colors cursor-default shadow-[0_0_20px_rgba(22,163,74,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CC0000] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#CC0000]"></span>
            </span>
            <span className="font-bold">Live:</span> Lanes Available Now
         </div>
         
         <h1 className="text-3xl md:text-5xl lg:text-6xl font-header font-bold text-white uppercase tracking-tighter mb-4 leading-[1.1] animate-slide-up max-w-5xl drop-shadow-2xl">
           ICC Standard <br/>
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-white to-green-100">Cricket Lanes</span>
         </h1>
         
         <div className="flex flex-col md:flex-row items-start gap-4 mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <p className="max-w-xl text-gray-200 text-base md:text-lg font-light leading-relaxed border-l-2 border-[#CC0000] pl-6 backdrop-blur-sm">
              Experience the precision of 22-yard pitches and Australian turf. Automated bowling machines and video analysis included with every session.
            </p>
            
            {/* Micro Stats */}
            <div className="hidden lg:flex gap-6 border-l border-white/10 pl-6">
               <div>
                  <div className="text-xl font-header font-bold text-white">90<span className="text-sm align-top text-red-500">mph</span></div>
                  <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">Max Speed</div>
               </div>
               <div>
                  <div className="text-xl font-header font-bold text-white">22<span className="text-sm align-top text-red-500">yds</span></div>
                  <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">Pitch Length</div>
               </div>
            </div>
         </div>
         
         {/* 3 Prominent CTAs */}
         <div className="flex flex-col sm:flex-row gap-3 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <button className="group relative px-6 py-3 bg-[#CC0000] text-white font-bold uppercase tracking-widest text-xs rounded-sm overflow-hidden shadow-[0_0_40px_rgba(204,0,0,0.4)] transition-all hover:shadow-[0_0_60px_rgba(204,0,0,0.6)] hover:-translate-y-1">
               <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine"></div>
               <span className="relative flex items-center gap-3">Book Lane Now <ChevronRight size={14} /></span>
            </button>
            <button 
               onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
               className="px-6 py-3 bg-white text-[#006838] font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-gray-100 transition-all shadow-lg flex items-center gap-2"
            >
               <PlayCircle size={14} /> View Facilities
            </button>
            <button 
               onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
               className="px-6 py-3 border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-white hover:text-[#006838] transition-all flex items-center gap-2"
            >
               <Calendar size={14} /> Memberships
            </button>
         </div>
      </div>
    </div>
  );
};

export default CricketHero;