'use client'

import React from 'react';
import { Calendar, Phone, MapPin, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SoccerCTA: React.FC = () => {
  return (
    <section className="py-24 bg-[#064E3B] dark:bg-black relative overflow-hidden text-center text-white">
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
       
       <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest mb-6 block animate-pulse"
          >
            Get Started
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-header font-bold uppercase mb-8"
          >
             Reserve Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">Soccer Field Today</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
             <Link href="/contact" className="px-10 py-5 bg-emerald-500 text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-emerald-600 transition-colors shadow-lg flex items-center justify-center gap-2">
                Book Field Now
             </Link>
             <Link href="/contact" className="px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-white hover:text-[#064E3B] transition-colors flex items-center justify-center gap-2">
                <PlayCircle size={16} /> Tour Facility
             </Link>
             <Link href="/memberships" className="px-10 py-5 bg-white/10 backdrop-blur-md text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-white/20 transition-colors">
                Start Membership
             </Link>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-emerald-100/70 text-xs font-mono uppercase tracking-widest">
             <span className="flex items-center gap-2"><MapPin size={12} className="text-emerald-400" /> 16230 Three Wide Dr Suite 200, Fort Worth, TX 76177</span>
             <span className="flex items-center gap-2"><Phone size={12} className="text-emerald-400" /> (817) 938-0808</span>
             <span className="flex items-center gap-2"><Calendar size={12} className="text-emerald-400" /> Open 5 AM - 11 PM Daily</span>
          </div>
          
          <div className="mt-8 text-xs text-emerald-200/50">
             <a href="mailto:info@dfwindoorsports.com" className="hover:text-white transition-colors">info@dfwindoorsports.com</a>
          </div>
       </div>
    </section>
  );
};

export default SoccerCTA;