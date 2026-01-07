import React from 'react';
import { MARQUEE_ITEMS } from '../constants';

const Marquee: React.FC = () => {
  return (
    <div className="bg-dfw-navy overflow-hidden py-8 border-y border-white/5 relative z-20">
      
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('/textures/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-dfw-navy via-transparent to-dfw-navy z-20 pointer-events-none"></div>

      <div className="flex relative z-10 mask-linear-fade">
        {/* First Loop Set */}
        <div className="animate-marquee flex whitespace-nowrap min-w-full shrink-0 items-center">
          {MARQUEE_ITEMS.map((item, index) => (
             <div key={index} className="flex items-center group">
               <span 
                 className="mx-8 text-5xl md:text-8xl font-header font-bold uppercase italic tracking-tighter text-transparent transition-all duration-500 group-hover:text-white/10 cursor-default select-none" 
                 style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.15)' }}
               >
                 {item}
               </span>
               <div className="mx-4 flex items-center justify-center w-4 h-4 rounded-full border border-dfw-red/30 relative">
                  <div className="w-1.5 h-1.5 bg-dfw-red rounded-full shadow-[0_0_10px_rgba(214,40,40,0.8)] animate-pulse"></div>
               </div>
             </div>
          ))}
        </div>
        
        {/* Second Loop Set */}
        <div className="animate-marquee flex whitespace-nowrap min-w-full shrink-0 items-center">
          {MARQUEE_ITEMS.map((item, index) => (
             <div key={`dup-${index}`} className="flex items-center group">
               <span 
                 className="mx-8 text-5xl md:text-8xl font-header font-bold uppercase italic tracking-tighter text-transparent transition-all duration-500 group-hover:text-white/10 cursor-default select-none" 
                 style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.15)' }}
               >
                 {item}
               </span>
               <div className="mx-4 flex items-center justify-center w-4 h-4 rounded-full border border-dfw-red/30 relative">
                  <div className="w-1.5 h-1.5 bg-dfw-red rounded-full shadow-[0_0_10px_rgba(214,40,40,0.8)] animate-pulse"></div>
               </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;