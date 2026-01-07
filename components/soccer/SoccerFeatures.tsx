'use client'

import React from 'react';
import { Layers, Users, Thermometer, Target, Layout, Clock, Activity, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Layers,
    title: "FIFA-Approved Turf",
    desc: "Professional-grade artificial turf providing consistent ball roll, proper traction, and a cushioned base reducing impact injuries.",
    detail: "Quality matters enormously for safety."
  },
  {
    icon: Users,
    title: "Small-Sided Games",
    desc: "Configurable field sizes (5v5, 6v6, 7v7). More touches per player than traditional 11v11 equals faster skill development.",
    detail: "200+ touches per hour vs 30-40."
  },
  {
    icon: Thermometer,
    title: "Year-Round Climate",
    desc: "Maintained at 72°F regardless of outside temperature. No heat exhaustion, no cold muscles, zero weather cancellations.",
    detail: "Train hard without environmental stress."
  },
  {
    icon: Target,
    title: "Pro Goal Systems",
    desc: "Regulation goal systems with safety netting. Portable smaller goals for technical drills and 1v1 scenarios.",
    detail: "Professional equipment enabling progression."
  },
  {
    icon: Layout,
    title: "Flexible Configuration",
    desc: "Adaptive training space. Full field for 7v7 or split for multiple 5v5 grids. Optimize space for specific session plans.",
    detail: "Ideal for coaches organizing drills."
  },
  {
    icon: Clock,
    title: "Extended Hours",
    desc: "Open 5 AM - 11 PM daily. Train before work, after school, or late night. Member 24/7 access available.",
    detail: "Train on your schedule."
  }
];

const SoccerFeatures: React.FC = () => {
  return (
    <section className="bg-gray-50 dark:bg-[#050911] py-24 relative overflow-hidden transition-colors duration-300">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('/textures/cubes.png')] opacity-[0.04] dark:opacity-[0.06]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
           <span className="text-emerald-600 font-mono text-xs font-bold uppercase tracking-widest mb-3 block">Infrastructure</span>
           <h2 className="text-3xl md:text-5xl font-header font-bold text-[#064E3B] dark:text-white uppercase leading-tight mb-6">
             Professional Indoor <br/> Soccer Infrastructure
           </h2>
           <p className="text-gray-500 dark:text-gray-400">Every inch of our facility is engineered to support athlete development and safety.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-white/5 p-8 rounded-lg border border-gray-200 dark:border-white/10 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:shadow-xl transition-all duration-500 group relative overflow-hidden h-full flex flex-col"
            >
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
               
               <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-lg flex items-center justify-center border border-emerald-100 dark:border-white/5 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                     <feat.icon size={28} strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-mono text-gray-300 dark:text-gray-600 group-hover:text-emerald-500 transition-colors">0{idx + 1}</span>
               </div>
               
               <h3 className="text-xl font-header font-bold text-gray-900 dark:text-white uppercase mb-3 group-hover:text-emerald-800 dark:group-hover:text-emerald-400 transition-colors">{feat.title}</h3>
               <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6 border-b border-gray-100 dark:border-white/10 pb-6 flex-grow">
                  {feat.desc}
               </p>
               <div className="flex items-center gap-2 mt-auto">
                  <ShieldCheck size={14} className="text-emerald-500" />
                  <p className="text-xs text-emerald-700 dark:text-emerald-400 font-bold font-mono uppercase tracking-tight">
                     {feat.detail}
                  </p>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoccerFeatures;