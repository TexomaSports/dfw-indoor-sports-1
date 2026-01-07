'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const MembershipsCTA: React.FC = () => {
  return (
    <section className="py-24 bg-dfw-navy dark:bg-[#0A111F] relative overflow-hidden text-center transition-colors duration-300">
       <div className="absolute inset-0 bg-[url('/textures/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
       
       <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-6 block animate-pulse"
          >
            Founding Member Rate Lock
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-header font-bold text-white uppercase mb-6"
          >
             Stop Renting. <span className="text-dfw-red">Start Owning.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg font-light mb-10 max-w-2xl mx-auto"
          >
             Lock in current rates for 12 months. $20 Registration Fee waived for new sign-ups this week.
             <br/>Risk-free 30-day guarantee on all new memberships.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
             <Link href="/contact" className="px-10 py-5 bg-dfw-red text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-red-700 transition-colors shadow-[0_0_30px_rgba(214,40,40,0.4)]">
                Join Now Online
             </Link>
             <Link href="/contact" className="px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-white hover:text-dfw-navy transition-colors">
                Schedule Tour
             </Link>
          </motion.div>
          <p className="mt-8 text-xs text-gray-500 uppercase tracking-widest">
             Questions? Call (817) 938-0808
          </p>
       </div>
    </section>
  );
};

export default MembershipsCTA;