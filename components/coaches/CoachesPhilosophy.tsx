import React from 'react';
import { Microscope, Brain, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const CoachesPhilosophy: React.FC = () => {
  return (
    <section className="bg-[#050911] text-white py-24 md:py-32 relative overflow-hidden">
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
       <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-dfw-red/5 to-transparent pointer-events-none"></div>

       <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
          >
             <div className="max-w-2xl">
                <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-4 block">The Methodology</span>
                <h2 className="text-4xl md:text-5xl font-header font-bold text-white uppercase leading-none">
                   The Pillars of <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">Excellence</span>
                </h2>
             </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {[
                { icon: Microscope, title: "Technical Excellence", desc: "Building proper technique from the foundation. Efficiency, injury prevention, and maximizing performance potential.", points: ["Batting Biomechanics", "Bowling Action", "Video Analysis"] },
                { icon: Brain, title: "Strategic Mindset", desc: "Teaching cricket intelligence. Understanding when, where, and why to use skills for match outcomes.", points: ["Match Awareness", "Tactical Education", "Decision Making"] },
                { icon: Sparkles, title: "Mental Conditioning", desc: "Developing the psychological strength cricket demands. Focus, confidence, and pressure management.", points: ["Focus Routines", "Resilience Training", "Team Psychology"] },
             ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-sm hover:border-dfw-red/50 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
                >
                   <div className="relative z-10">
                      <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-dfw-red border border-white/10 shadow-inner group-hover:scale-110 transition-transform">
                         <item.icon size={24} />
                      </div>
                      <h3 className="text-xl font-header font-bold uppercase mb-3">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">{item.desc}</p>
                      <div className="space-y-3 border-t border-white/10 pt-4">
                         {item.points.map((point, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase">
                               <div className="w-1 h-1 bg-dfw-red rounded-full"></div> {point}
                            </div>
                         ))}
                      </div>
                   </div>
                </motion.div>
             ))}
          </div>
       </div>
    </section>
  );
};

export default CoachesPhilosophy;