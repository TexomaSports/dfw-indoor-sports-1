'use client'

import React from 'react';
import { Ruler, ShieldCheck, Thermometer, Box, Users, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Ruler,
    title: "Regulation Dimensions",
    desc: "Full 50' x 25' court with clear center line, attack lines, and boundary markings. Balanced for action and strategy.",
    detail: "Spec: Competitive Standard"
  },
  {
    icon: Box,
    title: "Safe Foam Tech",
    desc: "We use high-density foam balls (7\", 8.5\", 10\"). Soft enough to prevent injury, firm enough for accurate throwing.",
    detail: "Tech: No-Sting Impact"
  },
  {
    icon: Thermometer,
    title: "Climate Controlled",
    desc: "72°F year-round. Texas heat makes outdoor play dangerous. Our indoor facility prevents heat exhaustion.",
    detail: "Spec: 72°F Constant"
  },
  {
    icon: ShieldCheck,
    title: "Safety Perimeter",
    desc: "Cushioned wall zones and ample run-off space. Dive for catches without fear of hitting hard surfaces.",
    detail: "Safety: Impact Protection"
  },
  {
    icon: Users,
    title: "Game Facilitation",
    desc: "Staff available to referee, organize teams, and teach game variations. We handle the logistics, you have fun.",
    detail: "Service: Pro Referees"
  },
  {
    icon: Activity,
    title: "Pro Surface",
    desc: "Sport court flooring provides ideal traction for quick cuts and dodging while being forgiving on joints.",
    detail: "Tech: Shock Absorption"
  }
];

const DodgeballFeatures: React.FC = () => {
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
           <span className="text-violet-600 font-mono text-xs font-bold uppercase tracking-widest mb-3 block">Infrastructure</span>
           <h2 className="text-3xl md:text-5xl font-header font-bold text-[#4C1D95] dark:text-white uppercase leading-tight mb-6">
             Professional Dodgeball <br/> Environment
           </h2>
           <p className="text-gray-500 dark:text-gray-400">Engineered for safety, speed, and maximum enjoyment.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-white/5 p-8 rounded-lg border border-gray-200 dark:border-white/10 hover:border-violet-500/50 dark:hover:border-violet-500/50 hover:shadow-xl transition-all duration-500 group relative overflow-hidden h-full flex flex-col"
            >
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-400 to-fuchsia-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
               
               <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 rounded-lg flex items-center justify-center border border-violet-100 dark:border-white/5 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                     <feat.icon size={28} strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-mono text-gray-300 dark:text-gray-600 group-hover:text-violet-500 transition-colors">0{idx + 1}</span>
               </div>
               
               <h3 className="text-xl font-header font-bold text-gray-900 dark:text-white uppercase mb-3 group-hover:text-violet-800 dark:group-hover:text-violet-400 transition-colors">{feat.title}</h3>
               <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6 border-b border-gray-100 dark:border-white/10 pb-6 flex-grow">
                  {feat.desc}
               </p>
               <div className="flex items-center gap-2 mt-auto">
                  <ShieldCheck size={14} className="text-violet-500" />
                  <p className="text-xs text-violet-700 dark:text-violet-400 font-bold font-mono uppercase tracking-tight">
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

export default DodgeballFeatures;