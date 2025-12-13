'use client'

import React from 'react';
import { motion } from 'framer-motion';

const AboutVision: React.FC = () => {
  return (
    <section className="bg-[#050911] py-20 relative overflow-hidden">
       <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
           <motion.span 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-4 block"
           >
             The Roadmap
           </motion.span>
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-3xl md:text-4xl font-header font-bold text-white uppercase mb-8"
           >
             What's Next?
           </motion.h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                 { title: "Expansion", desc: "Additional courts and specialized training centers planned for 2025." },
                 { title: "Tech Integration", desc: "Advanced AI video analysis and wearable tracking for members." },
                 { title: "Global Partnerships", desc: "Exchange programs with international academies." }
              ].map((item, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="p-6 border border-white/10 rounded-sm bg-white/5 hover:bg-white/10 transition-colors"
                 >
                    <h4 className="text-white font-bold uppercase mb-2">{item.title}</h4>
                    <p className="text-xs text-gray-400">{item.desc}</p>
                 </motion.div>
              ))}
           </div>
       </div>
    </section>
  );
};

export default AboutVision;