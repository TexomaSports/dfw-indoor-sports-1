'use client'

import React from 'react';
import { ShieldCheck, FileText } from 'lucide-react';

const WaiverHero: React.FC = () => {
  return (
    <div className="relative h-[60vh] min-h-[350px] flex items-center bg-[#020408] overflow-hidden">
      {/* Background with darker tone for legal feel */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop")' }}
      ></div>
      
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020408] via-[#020408]/90 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay z-10"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 pt-8">
         {/* Badge */}
         <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl text-white/90 font-mono text-[10px] uppercase tracking-[0.3em] mb-4 animate-fade-in-up hover:bg-white/10 transition-colors cursor-default shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-dfw-red shadow-[0_0_10px_#D62828] animate-pulse"></span>
            Legal Document
         </div>
         
         <h1 className="text-3xl md:text-5xl font-header font-bold text-white uppercase tracking-tighter mb-4 leading-[1.1] animate-slide-up max-w-4xl drop-shadow-2xl">
           Release & Waiver <br/>
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">Of Liability</span>
         </h1>
         
         <p className="max-w-2xl text-gray-400 text-sm md:text-base font-light leading-relaxed border-l-2 border-dfw-red pl-6 animate-slide-up mb-6">
           To ensure the safety and enjoyment of all participants, please read and sign this agreement before accessing the facility.
         </p>

         <div className="flex flex-col sm:flex-row gap-3 animate-slide-up">
            <button 
              onClick={() => document.getElementById('waiver-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-dfw-red text-white font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-red-700 transition-all shadow-[0_0_30px_rgba(214,40,40,0.2)] flex items-center gap-3 group"
            >
               <FileText size={16} /> Sign Document
            </button>
            <div className="px-6 py-3 flex items-center gap-2 text-gray-500 text-xs font-mono uppercase tracking-widest">
                <ShieldCheck size={14} className="text-green-500" /> Secure SSL Form
            </div>
         </div>
      </div>
    </div>
  );
};

export default WaiverHero;