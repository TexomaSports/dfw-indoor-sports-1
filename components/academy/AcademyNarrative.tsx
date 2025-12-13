'use client'

import React from 'react';
import { CheckCircle2, UserCheck, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

const AcademyNarrative: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#020408] relative transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
             
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.7 }}
               className="relative order-2 lg:order-1"
             >
                {/* Image Composition */}
                <div className="relative rounded-lg overflow-hidden shadow-2xl group border border-gray-200 dark:border-white/10">
                   <div className="absolute inset-0 bg-dfw-navy/10 mix-blend-multiply z-10 transition-opacity group-hover:opacity-0"></div>
                   <img 
                      src="https://images.unsplash.com/photo-1593341646782-e0b495cffd32?q=80&w=800&auto=format&fit=crop" 
                      alt="Coach mentoring young player" 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                   />
                   
                   {/* Floating Stat Card */}
                   <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-black/90 backdrop-blur-xl p-6 rounded-sm border border-white/20 dark:border-white/10 shadow-lg z-20">
                      <div className="flex justify-between items-end">
                         <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Our Promise</p>
                            <h4 className="text-dfw-navy dark:text-white font-header font-bold text-xl uppercase">Every Player Matters</h4>
                         </div>
                         <div className="h-10 w-10 bg-dfw-red rounded-full flex items-center justify-center text-white shadow-lg">
                            <HeartHandshake size={20} />
                         </div>
                      </div>
                   </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-dfw-red/20 -z-10"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-dfw-red/20 -z-10"></div>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.7 }}
               className="order-1 lg:order-2"
             >
                <div className="inline-flex items-center gap-2 mb-6">
                   <span className="w-8 h-[1px] bg-dfw-red"></span>
                   <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest">The CricKingdom Way</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-header font-bold text-dfw-navy dark:text-white uppercase leading-[0.95] mb-8">
                   Building Skills. <br/> <span className="text-gray-400">Shaping Futures.</span>
                </h2>
                <div className="prose prose-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                   <p>
                      In partnership with Indian cricket legend <strong>Rohit Sharma</strong>, we bring a philosophy that goes beyond the nets. We believe talent is everywhere, but opportunity is not.
                   </p>
                   <p>
                      Our academy provides that opportunity. Whether your child is picking up a bat for the first time or aiming for the national team, they enter an ecosystem designed to nurture their confidence, discipline, and love for the game. We use a scientific, tiered curriculum to ensure every player progresses at their own optimal pace.
                   </p>
                </div>
                
                <div className="flex flex-col gap-4">
                   {[
                      { title: "Standardized Curriculum", desc: "Uniform coaching methods ensuring consistent growth, regardless of the coach." },
                      { title: "Small Group Ratios", desc: "Max 1:6 coach-student ratio. No one gets lost in the crowd." },
                      { title: "Holistic Development", desc: "We train the mind as much as the body. Focus, resilience, and teamwork." }
                   ].map((item, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-[#0A111F] border border-gray-100 dark:border-white/5 hover:border-dfw-red/20 transition-colors group cursor-default"
                      >
                         <div className="mt-1 h-5 w-5 flex items-center justify-center rounded-full bg-dfw-red/10 text-dfw-red group-hover:bg-dfw-red group-hover:text-white transition-colors">
                            <CheckCircle2 size={12} />
                         </div>
                         <div>
                            <h4 className="text-sm font-bold text-dfw-navy dark:text-white uppercase tracking-wide mb-1">{item.title}</h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                         </div>
                      </motion.div>
                   ))}
                </div>
             </motion.div>

          </div>
       </div>
    </section>
  );
};

export default AcademyNarrative;