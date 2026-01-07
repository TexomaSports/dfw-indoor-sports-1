'use client'

import React from 'react';
import { Calendar, MousePointer2, UserPlus } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SportsGuide: React.FC = () => {
  return (
    <section className="bg-white dark:bg-[#020408] py-24 transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6">
          
          {/* Comparison Section */}
          <div className="mb-24">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center max-w-3xl mx-auto mb-16"
             >
                <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-3 block">Selection Guide</span>
                <h2 className="text-3xl md:text-5xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6">Find Your Fit</h2>
                <p className="text-gray-500 dark:text-gray-400">Not sure where to start? Here's a quick guide based on what you're looking for.</p>
             </motion.div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Kids */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-[#0A111F] p-8 rounded-lg border border-gray-100 dark:border-white/10 hover:shadow-lg transition-all"
                >
                   <h3 className="font-header font-bold text-xl text-dfw-navy dark:text-white uppercase mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-xs">01</span> For the Kids
                   </h3>
                   <ul className="space-y-4">
                      <li>
                         <span className="font-bold text-dfw-navy dark:text-gray-200 text-sm block mb-1">Cricket Academy</span>
                         <p className="text-xs text-gray-500 dark:text-gray-400">Structure, discipline, and hand-eye coordination. Ages 6+.</p>
                      </li>
                      <li>
                         <span className="font-bold text-dfw-navy dark:text-gray-200 text-sm block mb-1">Soccer Training</span>
                         <p className="text-xs text-gray-500 dark:text-gray-400">Energy burning, teamwork, and agility. Great for active kids.</p>
                      </li>
                      <li>
                         <span className="font-bold text-dfw-navy dark:text-gray-200 text-sm block mb-1">Dodgeball Parties</span>
                         <p className="text-xs text-gray-500 dark:text-gray-400">The ultimate birthday experience. Pure fun with friends.</p>
                      </li>
                   </ul>
                </motion.div>

                {/* Adults - Rec */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-gray-50 dark:bg-[#0A111F] p-8 rounded-lg border border-gray-100 dark:border-white/10 hover:shadow-lg transition-all"
                >
                   <h3 className="font-header font-bold text-xl text-dfw-navy dark:text-white uppercase mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs">02</span> Stay Active
                   </h3>
                   <ul className="space-y-4">
                      <li>
                         <span className="font-bold text-dfw-navy dark:text-gray-200 text-sm block mb-1">Badminton</span>
                         <p className="text-xs text-gray-500 dark:text-gray-400">The best cardio workout. Fast-paced, social, and easy to learn.</p>
                      </li>
                      <li>
                         <span className="font-bold text-dfw-navy dark:text-gray-200 text-sm block mb-1">Social Dodgeball</span>
                         <p className="text-xs text-gray-500 dark:text-gray-400">Relieve work stress. Join a league or bring your co-workers.</p>
                      </li>
                      <li>
                         <span className="font-bold text-dfw-navy dark:text-gray-200 text-sm block mb-1">Indoor Soccer</span>
                         <p className="text-xs text-gray-500 dark:text-gray-400">5-a-side games are intense and fun. Keep your touch sharp.</p>
                      </li>
                   </ul>
                </motion.div>

                {/* Competitors */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-gray-50 dark:bg-[#0A111F] p-8 rounded-lg border border-gray-100 dark:border-white/10 hover:shadow-lg transition-all"
                >
                   <h3 className="font-header font-bold text-xl text-dfw-navy dark:text-white uppercase mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 bg-dfw-red/10 dark:bg-dfw-red/20 text-dfw-red rounded-full flex items-center justify-center text-xs">03</span> Serious Training
                   </h3>
                   <ul className="space-y-4">
                      <li>
                         <span className="font-bold text-dfw-navy dark:text-gray-200 text-sm block mb-1">Cricket Lanes</span>
                         <p className="text-xs text-gray-500 dark:text-gray-400">Bowling machines and video analysis for technique refinement.</p>
                      </li>
                      <li>
                         <span className="font-bold text-dfw-navy dark:text-gray-200 text-sm block mb-1">Elite Badminton</span>
                         <p className="text-xs text-gray-500 dark:text-gray-400">Train on BWF flooring. Perfect your footwork and shots.</p>
                      </li>
                      <li>
                         <span className="font-bold text-dfw-navy dark:text-gray-200 text-sm block mb-1">Technical Soccer</span>
                         <p className="text-xs text-gray-500 dark:text-gray-400">Small-sided environment forces faster decision making.</p>
                      </li>
                   </ul>
                </motion.div>
             </div>
          </div>

          {/* Getting Started */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-dfw-navy dark:bg-[#0A111F] border border-white/10 rounded-2xl p-12 text-white relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-[url('/textures/stardust.png')] opacity-10"></div>
             <div className="relative z-10">
                <div className="text-center mb-12">
                   <h2 className="text-3xl font-header font-bold uppercase mb-4">Start Your Journey</h2>
                   <p className="text-gray-400">Three simple ways to get in the game.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                   <div className="group">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-dfw-red transition-colors">
                         <Calendar size={32} />
                      </div>
                      <h4 className="font-bold uppercase text-lg mb-2">1. Book a Slot</h4>
                      <p className="text-xs text-gray-400 leading-relaxed mb-4 px-4">Instant online booking for courts and lanes. Pay as you play.</p>
                      <Link href="/rentals" className="text-dfw-red text-xs font-bold uppercase tracking-widest border-b border-dfw-red pb-1 group-hover:text-white group-hover:border-white transition-colors">View Schedule</Link>
                   </div>

                   <div className="group">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-dfw-red transition-colors">
                         <UserPlus size={32} />
                      </div>
                      <h4 className="font-bold uppercase text-lg mb-2">2. Become a Member</h4>
                      <p className="text-xs text-gray-400 leading-relaxed mb-4 px-4">Play more, save more. Unlimited access plans for individuals and families.</p>
                      <Link href="/memberships" className="text-dfw-red text-xs font-bold uppercase tracking-widest border-b border-dfw-red pb-1 group-hover:text-white group-hover:border-white transition-colors">Compare Plans</Link>
                   </div>

                   <div className="group">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-dfw-red transition-colors">
                         <MousePointer2 size={32} />
                      </div>
                      <h4 className="font-bold uppercase text-lg mb-2">3. Join a Program</h4>
                      <p className="text-xs text-gray-400 leading-relaxed mb-4 px-4">Academies, leagues, and clinics. Let us guide your development.</p>
                      <Link href="/academy" className="text-dfw-red text-xs font-bold uppercase tracking-widest border-b border-dfw-red pb-1 group-hover:text-white group-hover:border-white transition-colors">Find Programs</Link>
                   </div>
                </div>
             </div>
          </motion.div>

       </div>
    </section>
  );
};

export default SportsGuide;