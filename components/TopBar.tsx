import React from 'react';
import { Phone, Mail, ChevronRight, MapPin, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const TopBar: React.FC = () => {
  return (
    <div className="relative bg-[#020408] text-gray-400 font-mono border-b border-white/10 overflow-hidden z-[110]">
      
      {/* Background Texture & Gradient */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-dfw-red/5 via-transparent to-blue-900/5 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* === Desktop View === */}
        <div className="hidden md:flex justify-between items-center h-10 text-[9px] lg:text-[10px] font-medium tracking-[0.2em] uppercase">
           
           {/* Left: System Status */}
           <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 group cursor-pointer">
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                </span>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Facility: <span className="text-green-400 font-bold">Open</span></span>
              </div>
              
              <div className="w-[1px] h-3 bg-white/10"></div>
              
              <div className="flex items-center gap-2 text-gray-400">
                 <Clock size={10} className="text-dfw-red" />
                 <span>05:00 AM - 11:00 PM</span>
              </div>
           </div>

           {/* Right: Contact & Quick Links */}
           <div className="flex items-center gap-6">
              <a 
                href={`https://maps.google.com/?q=${CONTACT_INFO.address}`} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                 <MapPin size={10} className="text-gray-500 group-hover:text-dfw-red transition-colors" />
                 <span className="truncate max-w-[150px] lg:max-w-none group-hover:underline decoration-dfw-red/50 underline-offset-4 decoration-1">Fort Worth, TX</span>
              </a>

              <div className="w-[1px] h-3 bg-white/10"></div>

              <div className="flex items-center gap-4">
                 <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-2 hover:text-white transition-colors group">
                    <Phone size={10} className="text-gray-500 group-hover:text-dfw-red transition-colors" />
                    <span>{CONTACT_INFO.phone}</span>
                 </a>
                 <div className="w-[1px] h-3 bg-white/10"></div>
                 <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 hover:text-white transition-colors group">
                    <Mail size={10} className="text-gray-500 group-hover:text-dfw-red transition-colors" />
                    <span>Support</span>
                 </a>
              </div>
           </div>
        </div>

        {/* === Mobile View === */}
        <div className="md:hidden flex justify-between items-center h-10 text-[9px] font-medium tracking-widest uppercase">
           <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-white">Now Open</span>
           </div>
           
           <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-1.5 text-gray-300 hover:text-white">
              <Phone size={10} className="text-dfw-red" />
              <span>Call Us</span>
           </a>
        </div>

      </div>
    </div>
  );
};

export default TopBar;