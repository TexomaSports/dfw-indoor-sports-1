'use client'

import React from 'react';
import { CheckCircle2, Activity, Trophy, Users, Star, Target } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const RentalsFacilities: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0A111F] border-y border-gray-200 dark:border-white/5 transition-colors duration-300" id="facilities">
         <div className="container mx-auto px-4 md:px-6">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-3 block">Four Sports. World Class.</span>
               <h2 className="text-4xl md:text-5xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6">Choose Your Arena</h2>
               <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Engineered surfaces, professional dimensions, and stadium-quality lighting.</p>
            </motion.div>

            <div className="space-y-12">
               
               {/* Sport 1: Cricket */}
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
               >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                     <div className="relative min-h-[300px] lg:min-h-full overflow-hidden">
                        <div className="absolute top-0 left-0 bg-dfw-red text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 z-20">Most Popular</div>
                        <img src="https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Cricket" />
                        <div className="absolute inset-0 bg-dfw-navy/20 group-hover:bg-transparent transition-colors"></div>
                     </div>
                     <div className="p-8 lg:p-12">
                        <div className="flex justify-between items-start mb-6">
                           <div>
                              <h3 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-2">Cricket Lanes</h3>
                              <p className="text-sm font-mono text-gray-400 uppercase tracking-widest">International Standard</p>
                           </div>
                           <div className="text-right">
                              <span className="block text-3xl font-bold text-dfw-red">$40<span className="text-sm text-gray-400 font-normal">/hr</span></span>
                           </div>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                           ICC-standard pitch dimensions (22 yards) with Australian-imported matting for true bounce. Includes <strong>Bowling Machine</strong> usage at no extra cost (normally $15 elsewhere). Perfect for batting practice, bowling refinement, and net sessions.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                           <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                              <CheckCircle2 size={16} className="text-dfw-red" /> Bowling Machine Included
                           </div>
                           <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                              <CheckCircle2 size={16} className="text-dfw-red" /> Full 30m Run-ups
                           </div>
                           <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                              <CheckCircle2 size={16} className="text-dfw-red" /> Video Analysis Stands
                           </div>
                           <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                              <CheckCircle2 size={16} className="text-dfw-red" /> Protective Gear Available
                           </div>
                        </div>

                        <Link href="/cricket-lanes" className="inline-block text-center px-8 py-3 bg-dfw-navy dark:bg-white text-white dark:text-dfw-navy font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-dfw-red dark:hover:bg-gray-200 transition-colors w-full sm:w-auto">
                           Book Cricket Lane
                        </Link>
                     </div>
                  </div>
               </motion.div>

               {/* Sport 2: Badminton */}
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
               >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                     <div className="p-8 lg:p-12 order-2 lg:order-1">
                        <div className="flex justify-between items-start mb-6">
                           <div>
                              <h3 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-2">Badminton Courts</h3>
                              <p className="text-sm font-mono text-gray-400 uppercase tracking-widest">BWF Regulation</p>
                           </div>
                           <div className="text-right">
                              <span className="block text-3xl font-bold text-blue-600 dark:text-blue-400">$25<span className="text-sm text-gray-400 font-normal">/hr</span></span>
                           </div>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                           8 dedicated courts featuring tournament-standard flooring for optimal grip and cushioning. 30+ foot ceilings ensure clear play for high clears. Professional lighting eliminates shadows. Precise climate control keeps shuttlecock flight consistent.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                           <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                              <CheckCircle2 size={16} className="text-blue-600 dark:text-blue-400" /> BWF Shock-Absorbent Floor
                           </div>
                           <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                              <CheckCircle2 size={16} className="text-blue-600 dark:text-blue-400" /> Anti-Glare 500 Lux Lighting
                           </div>
                           <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                              <CheckCircle2 size={16} className="text-blue-600 dark:text-blue-400" /> Pro Nets & Posts
                           </div>
                           <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                              <CheckCircle2 size={16} className="text-blue-600 dark:text-blue-400" /> 30ft+ Clear Height
                           </div>
                        </div>

                        <Link href="/badminton-courts" className="inline-block text-center px-8 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-black transition-colors w-full sm:w-auto">
                           Book Badminton Court
                        </Link>
                     </div>
                     <div className="relative min-h-[300px] lg:min-h-full overflow-hidden order-1 lg:order-2">
                        <img src="https://images.unsplash.com/photo-1626224583764-847890e058f5?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Badminton" />
                        <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
                     </div>
                  </div>
               </motion.div>

               {/* Other Sports Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                  {/* Soccer */}
                  <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 }}
                     className="bg-white dark:bg-white/5 p-6 rounded-lg border border-gray-100 dark:border-white/10 hover:border-green-600 transition-all group"
                  >
                     <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-md group-hover:bg-green-600 group-hover:text-white transition-colors"><Activity size={24} /></div>
                        <span className="font-bold text-dfw-navy dark:text-white">$60<span className="text-xs font-normal text-gray-400">/hr</span></span>
                     </div>
                     <h4 className="font-header font-bold text-xl text-dfw-navy dark:text-white uppercase mb-2">Indoor Soccer</h4>
                     <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 h-16 leading-relaxed">FIFA-approved artificial turf. Configurable for 5v5, 6v6, or 7v7. Perfect for team training or small-sided games.</p>
                     <ul className="text-xs font-bold text-gray-400 space-y-2 mb-6">
                        <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-green-500" /> FIFA Turf Surface</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-green-500" /> Regulation Goals</li>
                     </ul>
                     <Link href="/soccer-fields" className="block w-full py-2 border border-gray-200 dark:border-white/20 text-gray-600 dark:text-gray-300 font-bold uppercase text-[10px] tracking-widest rounded-sm hover:bg-green-600 hover:text-white hover:border-green-600 transition-colors text-center">Check Availability</Link>
                  </motion.div>

                  {/* Dodgeball */}
                  <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.4 }}
                     className="bg-white dark:bg-white/5 p-6 rounded-lg border border-gray-100 dark:border-white/10 hover:border-purple-600 transition-all group"
                  >
                     <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-md"><Users size={24} /></div>
                        <span className="font-bold text-dfw-navy dark:text-white">$35<span className="text-xs font-normal text-gray-400">/hr</span></span>
                     </div>
                     <h4 className="font-header font-bold text-xl text-dfw-navy dark:text-white uppercase mb-2">Dodgeball</h4>
                     <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 h-16 leading-relaxed">The ultimate group activity. Regulation courts with center lines. We provide all balls and safety gear for instant fun.</p>
                     <ul className="text-xs font-bold text-gray-400 space-y-2 mb-6">
                        <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-purple-500" /> Balls Included</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-purple-500" /> Safety Gear Provided</li>
                     </ul>
                     <Link href="/dodgeball-courts" className="block w-full py-2 border border-gray-200 dark:border-white/20 text-gray-600 dark:text-gray-300 font-bold uppercase text-[10px] tracking-widest rounded-sm hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-colors text-center">Check Availability</Link>
                  </motion.div>
               </div>

            </div>
         </div>
      </section>
  );
};

export default RentalsFacilities;