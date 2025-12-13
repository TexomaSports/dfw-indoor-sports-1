import React from 'react';
import { PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const InfoSection: React.FC = () => {
  return (
    <section className="relative py-0 bg-white overflow-hidden">
      
      {/* Background Image with Parallax-feel */}
      <div className="absolute top-0 right-0 w-full md:w-[65%] h-full bg-gray-900">
         <img 
           src="https://images.unsplash.com/photo-1519766304800-096cdef291c9?q=80&w=2070&auto=format&fit=crop" 
           alt="Background" 
           width="2070"
           height="1200"
           className="w-full h-full object-cover opacity-80 mix-blend-overlay grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
         />
         <div className="absolute inset-0 bg-gradient-to-l from-transparent via-gray-900/40 to-white"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-16 md:py-40">
        <div className="max-w-4xl">
          
          {/* Hyper-Realistic Glass Card */}
          <div className="relative bg-white/80 backdrop-blur-2xl p-6 md:p-16 border border-white/60 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)] rounded-lg md:mr-24 overflow-hidden">
            
            {/* Noise Texture Overlay for Realism */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise.png')] pointer-events-none"></div>

            {/* Decorative Label */}
            <div className="absolute top-0 left-0 bg-dfw-red text-white px-4 md:px-6 py-2 md:py-3 font-header font-bold uppercase tracking-wider text-[10px] md:text-xs shadow-lg rounded-br-lg">
              Est. 2024
            </div>

            <div className="relative z-10 mt-6 md:mt-0">
                <h2 className="text-4xl md:text-7xl font-header font-bold text-dfw-navy uppercase leading-[0.9] md:leading-[0.85] mb-6 md:mb-10 tracking-tight drop-shadow-sm">
                  Defining <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-dfw-red to-red-900">Sports Culture</span>
                </h2>
                
                <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                   <div className="flex-1">
                     <p className="text-base md:text-lg text-gray-800 font-semibold leading-relaxed mb-4 md:mb-6">
                       DFW Indoor Sports isn't just a facility; it's a high-performance ecosystem. We bridge the gap between recreational passion and professional discipline.
                     </p>
                     <p className="text-gray-500 font-light leading-relaxed mb-6 md:mb-8 text-sm">
                       Whether you are training for the national team or organizing a corporate dodgeball league, our 50,000 sq ft climate-controlled arena provides the perfect stage for your performance.
                     </p>
                     
                     <Link to="/about" className="group flex items-center gap-3 text-dfw-navy font-bold uppercase tracking-widest text-xs border-b-2 border-dfw-navy/20 pb-1 hover:border-dfw-red hover:text-dfw-red transition-all">
                       <PlayCircle size={18} className="group-hover:scale-110 transition-transform" /> Our Story
                     </Link>
                   </div>
                   
                   {/* Integrated Stats with Divider */}
                   <div className="flex-1 border-t md:border-t-0 md:border-l border-gray-200 pt-8 md:pt-0 md:pl-12 flex flex-row md:flex-col justify-between md:justify-center gap-4 md:space-y-10">
                      <div className="group cursor-default">
                        <span className="block text-3xl md:text-5xl font-header font-bold text-dfw-navy mb-1 group-hover:text-dfw-red transition-colors">50k+</span>
                        <span className="text-[9px] md:text-[10px] font-mono uppercase text-gray-400 tracking-[0.2em]">Square Feet</span>
                      </div>
                      <div className="group cursor-default">
                        <span className="block text-3xl md:text-5xl font-header font-bold text-dfw-navy mb-1 group-hover:text-dfw-red transition-colors">04</span>
                        <span className="text-[9px] md:text-[10px] font-mono uppercase text-gray-400 tracking-[0.2em]">Disciplines</span>
                      </div>
                      <div className="group cursor-default">
                        <span className="block text-3xl md:text-5xl font-header font-bold text-dfw-navy mb-1 group-hover:text-dfw-red transition-colors">24/7</span>
                        <span className="text-[9px] md:text-[10px] font-mono uppercase text-gray-400 tracking-[0.2em]">Access</span>
                      </div>
                   </div>
                </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoSection;