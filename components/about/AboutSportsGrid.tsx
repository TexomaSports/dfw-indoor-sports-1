'use client'

import React from 'react';
import { Target, Zap, Activity, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSportsGrid: React.FC = () => {
  return (
    <section className="bg-white dark:bg-[#020408] py-24 border-b border-gray-100 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
             <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-3 block">Multi-Discipline Ecosystem</span>
             <h2 className="text-4xl md:text-5xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6">Four Sports. One Community.</h2>
             <p className="text-gray-500 dark:text-gray-400">Specialization without compromise. We embrace four key disciplines with professional focus.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
             {[
                { title: "Cricket", sub: "Flagship", desc: "6 Pro Lanes, Bowling Machines, CricKingdom Academy.", icon: Target, featured: true },
                { title: "Badminton", sub: "BWF Approved", desc: "8 Pro Courts, Anti-glare lighting, Tournament ready.", icon: Zap },
                { title: "Soccer", sub: "FIFA Turf", desc: "Indoor turf fields for small-sided games and skills.", icon: Activity },
                { title: "Dodgeball", sub: "Corporate", desc: "Organized leagues and team building events.", icon: Users },
             ].map((sport, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`p-6 rounded-sm border transition-all duration-300 group cursor-default relative overflow-hidden ${
                     sport.featured 
                        ? 'bg-dfw-red border-dfw-red text-white' 
                        : 'bg-white dark:bg-white/5 border-gray-100 dark:border-white/10 text-dfw-navy dark:text-white hover:shadow-lg hover:-translate-y-1'
                  }`}
                >
                   <div className="relative z-10">
                      <div className="flex justify-between items-start mb-4">
                         <sport.icon size={24} className={sport.featured ? 'text-white' : 'text-dfw-red'} />
                         <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm ${sport.featured ? 'bg-black/20 text-white' : 'bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-300'}`}>{sport.sub}</span>
                      </div>
                      <h3 className={`text-xl font-header font-bold uppercase mb-2 ${sport.featured ? 'text-white' : 'text-dfw-navy dark:text-white'}`}>{sport.title}</h3>
                      <p className={`text-xs leading-relaxed ${sport.featured ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>{sport.desc}</p>
                   </div>
                </motion.div>
             ))}
          </div>
       </div>
    </section>
  );
};

export default AboutSportsGrid;