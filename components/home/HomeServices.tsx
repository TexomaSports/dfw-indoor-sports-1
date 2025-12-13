import React from 'react';
import { Target, Trophy, Zap, ArrowRight, Video, BarChart3, CheckCircle2 } from 'lucide-react';

const HomeServices: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 md:py-32 border-t border-gray-200 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-100/50 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Header Section */}
        <div className="mb-12 md:mb-20">
          <div className="flex items-center gap-3 mb-4 md:mb-5">
            <span className="w-8 md:w-10 h-[2px] bg-dfw-red"></span>
            <span className="text-dfw-red font-mono font-bold uppercase tracking-widest text-[10px] md:text-xs">✨ Experience state-of-the-art facilities ✨</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end gap-6 justify-between">
            <div className="flex items-center gap-4">
               <div className="hidden md:flex p-3 bg-dfw-navy/5 rounded-lg border border-dfw-navy/10">
                  <Target className="text-dfw-navy" size={32} />
               </div>
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-header font-bold text-dfw-navy uppercase leading-[0.9] tracking-tight">
                 Choose Your <br/> Path To Glory
               </h2>
            </div>
            <button className="hidden md:flex items-center gap-2 px-6 py-3 border border-gray-200 hover:border-dfw-red text-dfw-navy hover:text-dfw-red font-bold uppercase text-xs tracking-widest transition-all bg-white hover:shadow-lg rounded-sm">
                View All Programs <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Cards Grid - Enterprise Grade Alignment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-[1400px] mx-auto items-stretch">

          {/* Card 1: Training */}
          <div className="group bg-white flex flex-col justify-between border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 relative overflow-hidden rounded-lg">
            <div className="p-8 md:p-12">
              <div className="flex justify-between items-start mb-8 md:mb-10">
                <div className="w-12 h-12 md:w-14 md:h-14 border border-gray-100 bg-gray-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Target className="text-dfw-navy" size={24} strokeWidth={1.5} />
                </div>
                <span className="bg-gray-100 text-gray-600 ring-1 ring-gray-200 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-sm">Elite</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-header font-bold text-dfw-navy uppercase mb-4 md:mb-5 tracking-wide leading-tight group-hover:text-dfw-red transition-colors">Training</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 md:mb-10 font-medium pr-4 border-l-2 border-gray-100 pl-4">
                One-on-one sessions with national level coaches. Master your technique with data-driven feedback and video analysis.
              </p>

              <div className="flex flex-col gap-3">
                 <div className="flex items-center gap-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                    <Video size={14} className="text-dfw-red" /> <span>Video Analysis</span>
                 </div>
                 <div className="flex items-center gap-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                    <BarChart3 size={14} className="text-dfw-red" /> <span>Data-Driven Feedback</span>
                 </div>
              </div>
            </div>

            <a href="#" className="border-t border-gray-100 p-6 md:p-8 flex justify-between items-center bg-gray-50/50 group-hover:bg-white transition-colors">
              <span className="text-xs font-bold text-dfw-navy uppercase tracking-widest group-hover:translate-x-1 transition-transform">Book Session</span>
              <ArrowRight size={16} className="text-dfw-navy group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Card 2: Leagues (Dark Theme) */}
          <div className="group bg-dfw-navy flex flex-col justify-between relative shadow-2xl border border-dfw-navy overflow-hidden rounded-lg">
            {/* Texture & Gradients */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-dfw-red/10 blur-[80px] rounded-full pointer-events-none"></div>
            
            {/* Red Top Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-dfw-red to-red-600 shadow-[0_0_15px_rgba(214,40,40,0.6)]"></div>

            <div className="p-8 md:p-12 relative z-10">
              <div className="flex justify-between items-start mb-8 md:mb-10">
                <div className="w-12 h-12 md:w-14 md:h-14 border border-white/10 rounded-lg flex items-center justify-center bg-white/5 backdrop-blur-sm shadow-inner group-hover:border-dfw-red/30 transition-colors">
                  <Trophy className="text-white" size={24} strokeWidth={1.5} />
                </div>
                <span className="bg-gradient-to-r from-red-900/40 to-red-800/20 text-red-100 border border-red-500/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-sm shadow-[0_0_10px_rgba(220,38,38,0.2)]">Competitive</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-header font-bold text-white uppercase mb-4 md:mb-5 tracking-wide leading-tight text-shadow-sm">Leagues</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 md:mb-10 font-medium border-l-2 border-dfw-red/30 pl-4">
                Join the most competitive leagues in DFW. Weekly matches, live stats, and championship trophies.
              </p>

              {/* Stats UI */}
              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                 <div>
                    <span className="block text-2xl font-header font-bold text-white">Live</span>
                    <span className="text-[10px] uppercase tracking-widest text-gray-500">Stats Tracking</span>
                 </div>
                 <div>
                    <span className="block text-2xl font-header font-bold text-white">Weekly</span>
                    <span className="text-[10px] uppercase tracking-widest text-gray-500">Matches</span>
                 </div>
              </div>
            </div>

            <a href="#" className="border-t border-white/10 p-6 md:p-8 flex justify-between items-center hover:bg-white/5 transition-colors bg-dfw-navy relative z-10 group">
              <span className="text-xs font-bold text-white uppercase tracking-widest group-hover:text-dfw-red transition-colors">Join A Team</span>
              <ArrowRight size={16} className="text-white group-hover:text-dfw-red group-hover:translate-x-2 transition-all" />
            </a>
          </div>

          {/* Card 3: Events */}
          <div className="group bg-white flex flex-col justify-between border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 relative overflow-hidden rounded-lg">
            <div className="p-8 md:p-12">
              <div className="flex justify-between items-start mb-8 md:mb-10">
                <div className="w-12 h-12 md:w-14 md:h-14 border border-gray-100 bg-gray-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="text-dfw-navy" size={24} strokeWidth={1.5} />
                </div>
                <span className="bg-blue-50 text-blue-700 ring-1 ring-blue-600/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-sm">Premium</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-header font-bold text-dfw-navy uppercase mb-4 md:mb-5 tracking-wide leading-tight group-hover:text-dfw-red transition-colors">Events</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 md:mb-10 font-medium pr-4 border-l-2 border-gray-100 pl-4">
                Host corporate tournaments, birthday parties, or private events in our premium facility. Full catering available.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  <CheckCircle2 size={14} className="text-blue-500" /> Full Catering
                </div>
                <div className="flex items-center gap-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  <CheckCircle2 size={14} className="text-blue-500" /> Private Hosting
                </div>
              </div>
            </div>

            <a href="#" className="border-t border-gray-100 p-6 md:p-8 flex justify-between items-center bg-gray-50/50 group-hover:bg-white transition-colors">
              <span className="text-xs font-bold text-dfw-navy uppercase tracking-widest group-hover:translate-x-1 transition-transform">Plan Event</span>
              <ArrowRight size={16} className="text-dfw-navy group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Only - View All Button */}
          <div className="md:hidden mt-4">
            <button className="w-full flex items-center justify-center gap-2 px-6 py-4 border border-gray-200 text-dfw-navy font-bold uppercase text-xs tracking-widest bg-white rounded-sm">
                View All Programs <ArrowRight size={14} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeServices;
