'use client'

import React from 'react';
import { Shield, CheckCircle2, Award, Users, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const CoachesIntro: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#020408] relative transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
             
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="lg:w-3/5"
             >
                <div className="inline-flex items-center gap-2 mb-6">
                   <Users size={16} className="text-dfw-red" />
                   <span className="text-dfw-navy dark:text-white font-mono text-xs font-bold uppercase tracking-widest">The Human Connection</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-header font-bold text-dfw-navy dark:text-white uppercase leading-tight mb-8">
                   We Coach People, <br/><span className="text-gray-400">Not Just Players.</span>
                </h2>
                <div className="prose prose-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                   <p>
                      Technical skills are important, but confidence is everything. At DFW Indoor Sports, we believe the best coach is a mentor who understands the individual behind the athlete.
                   </p>
                   <p>
                      Our team brings decades of professional experience, but their true qualification is their ability to connect. They know when to push, when to pause, and how to ignite that spark of belief in a young player's eyes.
                   </p>
                   <p>
                      Whether guiding a 6-year-old through their first catch or helping a collegiate athlete refine their mental game, our approach is always personal, positive, and purposeful.
                   </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                   {[
                      "Positive reinforcement focus", "Mentorship beyond the field", "Emotional intelligence training", "Long-term development view"
                   ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                         <CheckCircle2 size={18} className="text-dfw-red shrink-0 mt-1" />
                         <span className="text-sm font-medium text-dfw-navy dark:text-white">{item}</span>
                      </div>
                   ))}
                </div>
             </motion.div>

             {/* Quick Answer Box - AEO Optimized */}
             <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="lg:w-2/5 w-full"
             >
                <div className="bg-dfw-navy dark:bg-[#0A111F] p-8 rounded-lg shadow-2xl relative overflow-hidden text-white group border border-white/5">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-dfw-red/20 rounded-full blur-[50px] pointer-events-none"></div>
                   <div className="absolute inset-0 bg-[url('/textures/graphy.png')] opacity-10"></div>
                   
                   <h3 className="text-xl font-header font-bold uppercase tracking-wider mb-6 border-b border-white/10 pb-4 relative z-10">Staff Credentials</h3>
                   
                   <div className="space-y-6 relative z-10">
                      <div className="flex gap-4">
                         <div className="p-2 bg-white/10 rounded-md h-fit"><Award size={18} className="text-dfw-red" /></div>
                         <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Certification</h4>
                            <p className="text-sm font-medium text-gray-300">Cricket Australia & ICC Level 2 minimum for Head Coaches.</p>
                         </div>
                      </div>
                      <div className="flex gap-4">
                         <div className="p-2 bg-white/10 rounded-md h-fit"><Users size={18} className="text-dfw-red" /></div>
                         <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Attention</h4>
                            <p className="text-sm font-medium text-gray-300">Max 1:6 ratio ensures your child is seen and heard.</p>
                         </div>
                      </div>
                      <div className="flex gap-4">
                         <div className="p-2 bg-white/10 rounded-md h-fit"><Star size={18} className="text-dfw-red" /></div>
                         <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Experience</h4>
                            <p className="text-sm font-medium text-gray-300">Former professional players & state-level representatives.</p>
                         </div>
                      </div>
                   </div>
                </div>
             </motion.div>
          </div>
       </div>
    </section>
  );
};

export default CoachesIntro;