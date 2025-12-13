'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const AcademyCTA: React.FC = () => {
  return (
    <section className="py-32 bg-dfw-navy dark:bg-black relative overflow-hidden text-center transition-colors duration-300">
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
       <div className="absolute inset-0 bg-gradient-to-r from-dfw-navy dark:from-black via-dfw-navy/90 dark:via-black/90 to-transparent"></div>
       <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
       
       <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-header font-bold text-white uppercase mb-8 tracking-tight"
          >
             Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-dfw-red to-orange-600">Legacy</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg font-light mb-12 max-w-2xl mx-auto leading-relaxed"
          >
             Join DFW's premier cricket academy. Whether you are a beginner picking up a bat or a pro refining your technique, we have a spot for you.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
             <Link href="/contact" className="px-10 py-5 bg-dfw-red text-white font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-red-700 transition-colors shadow-[0_0_30px_rgba(214,40,40,0.3)] hover:shadow-[0_0_50px_rgba(214,40,40,0.5)] transform hover:-translate-y-1">
                Book Free Trial Session
             </Link>
             <Link href="/contact" className="px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-white hover:text-dfw-navy transition-colors">
                Contact Academy
             </Link>
          </motion.div>
       </div>
    </section>
  );
};

export default AcademyCTA;