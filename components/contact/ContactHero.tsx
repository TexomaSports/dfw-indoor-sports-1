'use client'

import React from 'react';
import { Phone, Mail, ChevronDown, MessageSquare } from 'lucide-react';

const ContactHero: React.FC = () => {
  return (
    <div className="relative h-[60vh] min-h-[400px] flex items-center bg-[#020408] overflow-hidden">
        {/* Dynamic Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50 scale-105 animate-zoom-slow"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")' }}
        ></div>
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020408] via-[#020408]/90 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#020408]/50 via-transparent to-[#020408] z-10"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay z-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-20 pt-10">
           {/* Live Status Badge */}
           <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-green-400 font-mono text-[10px] uppercase tracking-[0.25em] mb-4 animate-fade-in-up hover:bg-white/10 transition-colors cursor-default shadow-lg group">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="group-hover:text-white transition-colors">Support Online</span>
           </div>
           
           <h1 className="text-3xl md:text-5xl lg:text-6xl font-header font-bold text-white uppercase tracking-tighter mb-4 leading-[1.1] animate-slide-up max-w-5xl drop-shadow-2xl">
             Let's Start A <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-dfw-red via-dfw-red to-white">Conversation</span>
           </h1>
           
           <p className="max-w-xl text-gray-400 text-base md:text-lg font-light leading-relaxed border-l-2 border-dfw-red pl-6 animate-slide-up mb-6">
             We aren't a nameless call center. We're a team of local sports enthusiasts ready to help you plan your next game, party, or league.
           </p>

           <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
              <a 
                href="tel:8179380808"
                className="group relative px-6 py-3 bg-white text-dfw-navy font-bold uppercase tracking-widest text-xs rounded-sm overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center justify-center gap-3 transition-transform hover:-translate-y-1"
              >
                 <Phone size={16} className="text-dfw-red transition-transform group-hover:scale-110" /> 
                 <span>Call (817) 938-0808</span>
              </a>
              <button 
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-6 py-3 border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-white hover:text-dfw-navy transition-all flex items-center justify-center gap-3"
              >
                 <MessageSquare size={16} className="group-hover:text-dfw-red transition-colors" /> 
                 <span>Send Message</span>
              </button>
           </div>
        </div>
    </div>
  );
};

export default ContactHero;