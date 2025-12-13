import React from 'react';
import { ArrowRight, Star, ChevronRight, Trophy } from 'lucide-react';

const HomeParallax: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 md:py-20 px-4 md:px-6 relative">
      
      {/* Floating Island Container */}
      <div className="max-w-[1400px] mx-auto bg-dfw-navy rounded-xl md:rounded-3xl overflow-hidden relative shadow-[0_40px_100px_-20px_rgba(10,17,31,0.6)] border border-white/5 ring-1 ring-white/10">
        
        {/* Background Texture & Gradients */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-dfw-navy via-dfw-navy/95 to-dfw-navy/60 z-10"></div>
        
        {/* Background Image Parallax */}
        <div 
           className="absolute inset-0 bg-cover bg-center z-0 opacity-50 mix-blend-luminosity"
           style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2000&auto=format&fit=crop")' }}
        ></div>

        <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-auto md:min-h-[600px] items-stretch">
           
           {/* Left Content - Rentals */}
           <div className="p-8 md:p-20 lg:pr-12 flex flex-col justify-center border-b lg:border-b-0 border-white/10">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-white/5 border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest mb-6 md:mb-8 backdrop-blur-md shadow-inner">
                    <span className="w-2 h-2 rounded-full bg-dfw-red animate-pulse"></span> Instant Booking
                </span>
                
                <h2 className="text-4xl md:text-7xl font-header font-bold text-white uppercase leading-[0.9] mb-6 md:mb-8 drop-shadow-lg">
                    Rent a Lane <br/>
                    <span className="text-transparent stroke-text opacity-40" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>Own The Game</span>
                </h2>
                
                <p className="text-gray-400 font-light mb-8 md:mb-12 leading-relaxed max-w-md text-base md:text-lg">
                    From casual matches to professional training sessions, our courts are ready. Book your slot in seconds.
                </p>

                <button className="group flex items-center gap-4 md:gap-6 text-white font-header font-bold uppercase tracking-wider text-sm hover:text-dfw-red transition-colors w-full md:w-auto justify-start">
                    <span className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-dfw-red text-white rounded-md group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(214,40,40,0.4)]">
                    <ArrowRight size={20} className="md:w-6 md:h-6" />
                    </span>
                    Reserve Now
                </button>
              </div>
           </div>

           {/* Right Content - Academy (Visual Split) */}
           <div className="relative bg-white/5 backdrop-blur-md border-t lg:border-t-0 lg:border-l border-white/10 p-8 md:p-20 flex flex-col justify-center hover:bg-white/10 transition-colors duration-500 group cursor-pointer overflow-hidden">
              {/* Highlight Glint */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent lg:hidden"></div>
              <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/30 to-transparent hidden lg:block"></div>
              
              <div className="absolute top-6 right-6 md:top-10 md:right-10 text-yellow-500 opacity-10 rotate-12 transition-transform duration-700 group-hover:rotate-45 group-hover:scale-110">
                 <Trophy size={100} className="md:w-40 md:h-40" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                   <div className="p-2 bg-yellow-500 rounded-sm text-dfw-navy shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                      <Star size={16} className="md:w-5 md:h-5" fill="currentColor" />
                   </div>
                   <span className="text-yellow-500 font-bold uppercase tracking-widest text-[10px] md:text-xs">The Academy</span>
                </div>

                <h3 className="text-3xl md:text-5xl font-header font-bold text-white uppercase leading-none mb-4 md:mb-6 group-hover:translate-x-2 transition-transform duration-300">
                   Join The <br/> Elite Squad
                </h3>
                
                <p className="text-gray-400 font-light mb-8 md:mb-10 max-w-sm text-sm md:text-base">
                   Train with national-level coaches and elevate your career. Structured programs for all ages.
                </p>

                <div className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[10px] md:text-xs group-hover:text-yellow-400 transition-colors border-b border-transparent group-hover:border-yellow-400 pb-1 w-max">
                   View Programs <ChevronRight size={14} className="md:w-4 md:h-4" />
                </div>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default HomeParallax;
