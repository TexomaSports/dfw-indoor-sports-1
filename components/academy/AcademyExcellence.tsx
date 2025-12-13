'use client'

import React from 'react';
import { Brain, Activity, TrendingUp, Zap, BookOpen, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

const AcademyExcellence: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="bg-slate-950 dark:bg-black py-24 relative overflow-hidden border-t border-white/5 transition-colors duration-300">
       <div className="absolute inset-0 bg-grid-white opacity-[0.03] pointer-events-none"></div>
       
       <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
             <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-3 block">High Performance Lab</span>
             <h2 className="text-4xl md:text-5xl font-header font-bold text-white uppercase">Centre of Excellence</h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
             {[
                { icon: Brain, title: "Mental Performance", desc: "Sports psychology workshops, pressure management techniques, and visualization methods to build resilience." },
                { icon: Activity, title: "Biomechanics Lab", desc: "High-speed cameras and motion-capture technology to analyze bowling actions and batting backlifts." },
                { icon: TrendingUp, title: "Data Analytics", desc: "Comprehensive performance metrics tracking. Batting strike rates, bowling speed, and consistency maps." },
                { icon: Zap, title: "Physical Conditioning", desc: "Cricket-specific strength and conditioning. Agility drills, core stability, and injury prevention protocols." },
                { icon: BookOpen, title: "Tactical Education", desc: "Classroom sessions on match strategy for Test, ODI, and T20 formats. Field placement theory." },
                { icon: ShoppingBag, title: "Pro Shop Access", desc: "Expert equipment fitting. Custom bat selection based on playing style. Premium protective gear." }
             ].map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={itemVariants}
                  className="bg-slate-900/50 backdrop-blur-sm border border-white/10 p-8 rounded-sm hover:border-dfw-red/50 hover:bg-slate-900 transition-all duration-300 group cursor-default"
                >
                   <div className="text-dfw-red mb-4 group-hover:scale-110 transition-transform duration-300 w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/5">
                      <item.icon size={24} strokeWidth={1.5} />
                   </div>
                   <h3 className="text-white font-mono font-bold uppercase text-sm tracking-wider mb-3 group-hover:text-dfw-red transition-colors">{item.title}</h3>
                   <p className="text-slate-400 text-xs leading-relaxed font-mono">{item.desc}</p>
                </motion.div>
             ))}
          </motion.div>
       </div>
    </section>
  );
};

export default AcademyExcellence;