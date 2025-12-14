import React from 'react';
import { ChevronRight, Thermometer, Activity, Star, Trophy, Users, Zap, MousePointer2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-[60vh] min-h-[400px] md:min-h-[450px] bg-gray-50 pb-6">
      {/* Container for rounded effect with Deep Physical Shadow */}
      <div className="relative h-full w-full overflow-hidden rounded-b-2xl md:rounded-b-3xl shadow-[0_20px_40px_-10px_rgba(10,17,31,0.4)] z-20">
        
        {/* Dynamic Background with Cinematic Zoom */}
        <div className="absolute inset-0 overflow-hidden bg-dfw-navy">
          <div 
            className="absolute inset-0 bg-cover bg-center animate-zoom-slow opacity-60"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?q=80&w=2070&auto=format&fit=crop")',
            }}
          ></div>
          {/* Multi-layer gradients for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-dfw-navy via-dfw-navy/50 to-transparent mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-dfw-navy/90 via-dfw-navy/40 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
        </div>

        {/* Hyper-Realistic Glass Widget */}
        <div className="absolute top-28 right-4 md:top-32 md:right-16 z-30 hidden lg:flex flex-col gap-2 perspective-1000">
          <div className="p-5 rounded-lg flex items-center gap-6 animate-fade-in-up bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] backdrop-blur-2xl ring-1 ring-white/10 transform hover:rotate-y-2 transition-transform duration-500">
            <div className="flex flex-col">
              <span className="text-[9px] text-gray-400 font-mono uppercase tracking-widest mb-1.5 flex items-center gap-1">
                <span className="w-1 h-1 bg-green-500 rounded-sm animate-pulse"></span> Status
              </span>
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-sm tracking-wide font-header">LIVE NOW</span>
              </div>
            </div>
            <div className="h-8 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
            <div className="flex flex-col">
              <span className="text-[9px] text-gray-400 font-mono uppercase tracking-widest mb-1.5">Temp</span>
              <div className="flex items-center gap-2">
                <Thermometer size={14} className="text-dfw-red" />
                <span className="text-white font-bold text-sm tracking-wide font-header">72°F</span>
              </div>
            </div>
            <div className="h-8 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
            <div className="flex flex-col">
              <span className="text-[9px] text-gray-400 font-mono uppercase tracking-widest mb-1.5">Capacity</span>
              <div className="flex items-center gap-2">
                <Activity size={14} className="text-dfw-red" />
                <span className="text-white font-bold text-sm tracking-wide font-header">42%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 h-full flex flex-col justify-center pt-20 md:pt-20">
          <div className="max-w-5xl">
            {/* Tagline */}
            <div className="flex items-center gap-4 mb-6 md:mb-8 opacity-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="px-4 py-1.5 md:px-5 md:py-2 border border-dfw-red/30 bg-gradient-to-r from-dfw-red/20 to-transparent text-dfw-red text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm flex items-center gap-2 backdrop-blur-md shadow-lg shadow-dfw-red/10">
                <span className="w-1.5 h-1.5 bg-dfw-red rounded-sm animate-pulse"></span> Ft. Worth, Texas
              </div>
            </div>
            
            {/* Headline with 3D shadow */}
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-header font-bold text-white leading-[1.1] md:leading-[1.1] uppercase tracking-tighter mb-6 md:mb-10 opacity-0 animate-slide-up drop-shadow-2xl" style={{ animationDelay: '0.2s' }}>
              Beyond <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500" style={{ WebkitTextStroke: '0px' }}>Boundaries</span>
            </h1>
            
            {/* Description & Buttons */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 md:gap-20 opacity-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-base md:text-xl text-gray-300 font-light max-w-xl leading-relaxed border-l-2 border-dfw-red pl-6 md:pl-8 backdrop-blur-sm">
                50,000 sq ft of pure adrenaline. Engineered for professional cricket, badminton, and soccer. Welcome to the future of indoor sports.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 md:gap-5 w-full sm:w-auto">
                <button className="group relative w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-dfw-red text-white text-sm font-bold uppercase tracking-widest overflow-hidden rounded-sm shadow-[0_10px_40px_-10px_rgba(214,40,40,0.6)] hover:shadow-[0_20px_60px_-10px_rgba(214,40,40,0.8)] hover:-translate-y-1 transition-all duration-300 text-center flex justify-center items-center">
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shine"></div>
                  <span className="relative z-10 flex items-center gap-3">
                    Book A Court <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                
                <button className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 border border-white/20 hover:bg-white hover:text-dfw-navy text-white text-sm font-bold uppercase tracking-widest transition-all rounded-sm backdrop-blur-md hover:shadow-lg hover:-translate-y-1 text-center">
                  View Academy
                </button>
              </div>
            </div>

            {/* Feature Strip - Floating */}
            <div className="mt-12 md:mt-24 pt-8 md:pt-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 opacity-0 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              {[
                { icon: Trophy, text: "Championship Grade" },
                { icon: Users, text: "Elite Coaching" },
                { icon: Star, text: "Pro Facilities" },
                { icon: Zap, text: "24/7 Access" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 md:gap-4 text-gray-400 group cursor-default hover:text-white transition-colors duration-500">
                  <div className="p-2 md:p-3 bg-white/5 rounded-lg border border-white/5 group-hover:border-dfw-red/50 group-hover:bg-dfw-red/20 group-hover:text-dfw-red transition-all duration-300 shadow-inner">
                    <item.icon className="shrink-0 transition-colors" size={16} />
                  </div>
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest leading-tight">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce hidden md:flex">
            <span className="text-[10px] text-white/50 uppercase tracking-widest">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;