import React from 'react';
import { ShieldCheck, FileText } from 'lucide-react';

const WaiverHero: React.FC = () => {
  return (
    <div className="relative h-[55vh] min-h-[500px] flex items-center bg-[#020408] overflow-hidden">
      {/* Background with darker tone for legal feel */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop")' }}
      ></div>
      
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020408] via-[#020408]/90 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay z-10"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 pt-10">
         {/* Badge */}
         <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl text-white/90 font-mono text-[10px] uppercase tracking-[0.3em] mb-8 animate-fade-in-up hover:bg-white/10 transition-colors cursor-default shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6] animate-pulse"></span>
            Legal Document
         </div>
         
         <h1 className="text-4xl md:text-6xl font-header font-bold text-white uppercase tracking-tighter mb-6 leading-[0.9] animate-slide-up max-w-4xl drop-shadow-2xl">
           Release & Waiver <br/>
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">Of Liability</span>
         </h1>
         
         <p className="max-w-2xl text-gray-400 text-sm md:text-base font-light leading-relaxed border-l-2 border-dfw-red pl-6 animate-slide-up mb-10">
           To ensure the safety and enjoyment of all participants, please read and sign this agreement before accessing the facility. This document affects your legal rights.
         </p>

         <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
            <button 
              onClick={() => document.getElementById('waiver-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-dfw-red text-white font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-red-700 transition-all shadow-[0_0_30px_rgba(214,40,40,0.2)] flex items-center gap-3 group"
            >
               <FileText size={16} /> Sign Document
            </button>
            <div className="px-6 py-4 flex items-center gap-2 text-gray-500 text-xs font-mono uppercase tracking-widest">
                <ShieldCheck size={14} className="text-green-500" /> Secure SSL Form
            </div>
         </div>
      </div>
    </div>
  );
};

export default WaiverHero;