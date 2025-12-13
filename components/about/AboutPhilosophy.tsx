'use client'

import React from 'react';
import { Award, UserCheck, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPhilosophy: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A111F] text-white relative overflow-hidden">
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]"></div>
       <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:w-1/2"
             >
                <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-4 block">Development Methodology</span>
                <h2 className="text-4xl md:text-5xl font-header font-bold text-white uppercase mb-6">
                   More Than Instruction. <br/> True Development.
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                   We don't hire recreational players to coach. We employ certified professionals who've competed at high levels. Our systematic approach ensures consistent progress from foundation to mastery.
                </p>
                
                <div className="space-y-6">
                   <div className="flex gap-4">
                      <div className="p-2 bg-white/10 rounded-md h-fit"><Award size={20} className="text-dfw-red" /></div>
                      <div>
                         <h4 className="font-bold text-white uppercase text-sm mb-1">Sport-Specific Expertise</h4>
                         <p className="text-xs text-gray-400">Cricket Australia/ICC Level 2, USSF, and BWF certified instructors.</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="p-2 bg-white/10 rounded-md h-fit"><UserCheck size={20} className="text-dfw-red" /></div>
                      <div>
                         <h4 className="font-bold text-white uppercase text-sm mb-1">Individualized Attention</h4>
                         <p className="text-xs text-gray-400">Maximum 1:6 coach-to-student ratio ensuring personal feedback.</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="p-2 bg-white/10 rounded-md h-fit"><Brain size={20} className="text-dfw-red" /></div>
                      <div>
                         <h4 className="font-bold text-white uppercase text-sm mb-1">Holistic Approach</h4>
                         <p className="text-xs text-gray-400">Developing technical skills, tactical IQ, physical fitness, and mental resilience.</p>
                      </div>
                   </div>
                </div>
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="lg:w-1/2 relative w-full"
             >
                <div className="grid grid-cols-2 gap-4">
                   <motion.div whileHover={{ y: -5 }} className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                      <h4 className="text-dfw-red font-bold text-xl mb-2">01</h4>
                      <h5 className="text-white font-bold uppercase text-sm mb-2">Foundation</h5>
                      <p className="text-xs text-gray-400">Technique & Fundamentals</p>
                   </motion.div>
                   <motion.div whileHover={{ y: -5 }} className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm mt-8 hover:bg-white/10 transition-colors">
                      <h4 className="text-dfw-red font-bold text-xl mb-2">02</h4>
                      <h5 className="text-white font-bold uppercase text-sm mb-2">Development</h5>
                      <p className="text-xs text-gray-400">Skill Refinement & Tactics</p>
                   </motion.div>
                   <motion.div whileHover={{ y: -5 }} className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                      <h4 className="text-dfw-red font-bold text-xl mb-2">03</h4>
                      <h5 className="text-white font-bold uppercase text-sm mb-2">Specialization</h5>
                      <p className="text-xs text-gray-400">Position Specifics</p>
                   </motion.div>
                   <motion.div whileHover={{ y: -5 }} className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm mt-8 hover:bg-white/10 transition-colors">
                      <h4 className="text-dfw-red font-bold text-xl mb-2">04</h4>
                      <h5 className="text-white font-bold uppercase text-sm mb-2">Mastery</h5>
                      <p className="text-xs text-gray-400">Competitive Excellence</p>
                   </motion.div>
                </div>
             </motion.div>
          </div>
       </div>
    </section>
  );
};

export default AboutPhilosophy;