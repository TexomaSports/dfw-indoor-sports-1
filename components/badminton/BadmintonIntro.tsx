'use client'

import React from 'react';
import { DollarSign, CheckCircle2, MapPin, Clock, ArrowRight, ArrowUp, Wind } from 'lucide-react';
import { motion } from 'framer-motion';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

const BadmintonIntro: React.FC = () => {
   return (
      <section className="py-24 bg-white dark:bg-[#020408] relative transition-colors duration-300">
         {/* Background Noise */}
         <div className="absolute inset-0 bg-[url('/textures/noise.png')] opacity-[0.03] dark:opacity-[0.05]"></div>

         <div className="container mx-auto px-4 md:px-6 relative z-10">

            {/* Badminton Courts Overview Image */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mb-16"
            >
               <div className="relative h-[250px] md:h-[350px] rounded-2xl overflow-hidden shadow-2xl">
                  <OptimizedImage
                     src="/images/badminton/badminton-intro-courts-overview.webp"
                     alt="Eight professional BWF-standard badminton courts at DFW Indoor Sports"
                     fill
                     className="object-cover"
                     priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                     <p className="text-white font-header font-bold text-xl md:text-2xl uppercase">8 BWF-Standard Courts</p>
                     <p className="text-white/70 text-xs font-mono uppercase tracking-widest mt-1">30ft+ Clearance • Draft-Free Environment</p>
                  </div>
               </div>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

               {/* Left: Introduction Narrative */}
               <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="lg:w-3/5"
               >
                  <div className="inline-flex items-center gap-2 mb-6">
                     <div className="h-[1px] w-8 bg-blue-600"></div>
                     <span className="text-blue-900 dark:text-blue-400 font-mono text-xs font-bold uppercase tracking-widest">Precision Engineered</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-header font-bold text-[#1E3A8A] dark:text-white uppercase leading-[0.9] mb-8">
                     The Perfect <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Flight Path</span>
                  </h2>

                  <div className="prose prose-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10 font-light">
                     <p>
                        Badminton players in Texas face a frustrating reality: finding proper courts is nearly impossible. Recreation centers offer low ceilings where high clears hit rafters. Multipurpose gyms have slippery floors causing injuries. Outdoor courts battle wind and humidity destroying shuttlecock flight.
                     </p>
                     <p className="border-l-4 border-blue-500 pl-6 italic text-gray-800 dark:text-gray-200 font-medium my-8">
                        "We engineered this facility to remove every variable. The ceiling is high, the air is still, and the floor grips. It's just you and the bird."
                     </p>
                     <p>
                        Our eight professional courts meet <strong className="text-[#1E3A8A] dark:text-blue-400">BWF specifications</strong> down to the inch. Every detail matters: 30+ foot clearance for defensive lifts, professional mats for shock absorption, and an HVAC system designed to eliminate air currents that affect trajectory.
                     </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="p-6 bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800 rounded-sm hover:border-blue-300 transition-all group">
                        <h4 className="font-bold text-[#1E3A8A] dark:text-white uppercase text-sm mb-2 flex items-center gap-2">
                           <ArrowUp size={16} className="text-blue-600 group-hover:scale-110 transition-transform" /> 30ft+ Vertical Clearance
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                           Never hit a rafter again. Full height allowance for deep clears and high serves.
                        </p>
                     </div>
                     <div className="p-6 bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800 rounded-sm hover:border-blue-300 transition-all group">
                        <h4 className="font-bold text-[#1E3A8A] dark:text-white uppercase text-sm mb-2 flex items-center gap-2">
                           <Wind size={16} className="text-blue-600 group-hover:scale-110 transition-transform" /> Draft Control
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                           AC vents are strategically positioned to cool the player zone without disturbing shuttle flight paths.
                        </p>
                     </div>
                  </div>
               </motion.div>

               {/* Right: Quick Answer Box (AEO Optimized) */}
               <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="lg:w-2/5 w-full"
               >
                  <div className="bg-[#1E3A8A] dark:bg-[#0A111F] p-10 rounded-xl shadow-2xl relative overflow-hidden text-white border border-white/10 group">
                     {/* Abstract Decor */}
                     <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[60px] pointer-events-none"></div>
                     <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-[40px] pointer-events-none"></div>
                     <div className="absolute inset-0 bg-[url('/textures/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>

                     <h3 className="text-2xl font-header font-bold uppercase tracking-wider mb-8 border-b border-white/20 pb-4 relative z-10 flex justify-between items-center">
                        Court Facts
                     </h3>

                     <ul className="space-y-6 text-sm relative z-10">
                        <li className="flex gap-4 items-start group/item">
                           <div className="mt-1 p-2 bg-white/10 rounded group-hover/item:bg-blue-500 transition-colors"><DollarSign size={16} className="text-white" /></div>
                           <div>
                              <span className="block font-bold text-blue-200 uppercase text-[10px] tracking-widest mb-1">Court Rates</span>
                              <p className="font-medium">$25/hr (Peak) | $20/hr (Off-Peak)</p>
                              <p className="text-xs text-gray-300 mt-1">Unlimited membership $70/mo</p>
                           </div>
                        </li>
                        <li className="flex gap-4 items-start group/item">
                           <div className="mt-1 p-2 bg-white/10 rounded group-hover/item:bg-blue-500 transition-colors"><CheckCircle2 size={16} className="text-white" /></div>
                           <div>
                              <span className="block font-bold text-blue-200 uppercase text-[10px] tracking-widest mb-1">Equipment</span>
                              <p className="font-medium">Nets & Posts Included</p>
                              <p className="text-xs text-gray-300 mt-1">Racket rental & shuttles available</p>
                           </div>
                        </li>
                        <li className="flex gap-4 items-start group/item">
                           <div className="mt-1 p-2 bg-white/10 rounded group-hover/item:bg-blue-500 transition-colors"><MapPin size={16} className="text-white" /></div>
                           <div>
                              <span className="block font-bold text-blue-200 uppercase text-[10px] tracking-widest mb-1">Location</span>
                              <p className="font-medium">16230 Three Wide Dr, Fort Worth</p>
                           </div>
                        </li>
                        <li className="flex gap-4 items-start group/item">
                           <div className="mt-1 p-2 bg-white/10 rounded group-hover/item:bg-blue-500 transition-colors"><Clock size={16} className="text-white" /></div>
                           <div>
                              <span className="block font-bold text-blue-200 uppercase text-[10px] tracking-widest mb-1">Access</span>
                              <p className="font-medium">Daily: 5:00 AM - 11:00 PM</p>
                           </div>
                        </li>
                     </ul>

                     <button className="w-full mt-10 py-4 bg-blue-500 text-white font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-blue-400 transition-colors shadow-lg relative z-10 flex items-center justify-center gap-2 group/btn">
                        Book Court Now <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                     </button>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   );
};

export default BadmintonIntro;