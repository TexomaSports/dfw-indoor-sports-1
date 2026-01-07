'use client'

import React from 'react';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const AboutCTA: React.FC = () => {
  return (
    <section className="py-24 bg-dfw-navy relative overflow-hidden">
       <div className="absolute inset-0 bg-[url('/textures/stardust.png')] opacity-10"></div>
       <div className="absolute inset-0 bg-gradient-to-r from-dfw-navy via-dfw-navy/90 to-transparent"></div>
       
       <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="max-w-2xl text-center md:text-left"
             >
                <h2 className="text-4xl md:text-6xl font-header font-bold text-white uppercase mb-4">
                   Ready to <span className="text-dfw-red">Play?</span>
                </h2>
                <p className="text-gray-400 text-lg font-light mb-6">
                   Join the fastest growing sports community in Fort Worth.
                </p>
                <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-sm">
                   <p className="text-xs text-white uppercase tracking-widest font-bold">New Member Offer: <span className="text-dfw-red">20% Off First Month</span></p>
                </div>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="flex flex-col sm:flex-row gap-4 w-full md:w-auto"
             >
                <Link href="/contact" className="px-8 py-4 bg-dfw-red text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-red-700 transition-colors shadow-[0_0_30px_rgba(214,40,40,0.3)] flex items-center justify-center gap-2">
                   <Calendar size={16} /> Book Free Tour
                </Link>
                <Link href="/memberships" className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-white hover:text-dfw-navy transition-colors text-center">
                   View Memberships
                </Link>
             </motion.div>
          </div>
       </div>
    </section>
  );
};

export default AboutCTA;