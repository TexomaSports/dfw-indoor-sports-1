'use client'

import React from 'react';
import { DollarSign, CheckCircle2, MapPin, Clock, Shield, Ruler, ArrowRight, Video } from 'lucide-react';
import { motion } from 'framer-motion';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

const CricketIntro: React.FC = () => {
   return (
      <section className="py-24 bg-white dark:bg-[#020408] relative transition-colors duration-300">
         {/* Background Noise */}
         <div className="absolute inset-0 bg-[url('/textures/noise.png')] opacity-[0.03] dark:opacity-[0.05]"></div>

         <div className="container mx-auto px-4 md:px-6 relative z-10">

            {/* Cricket Lanes Overview Image */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mb-16"
            >
               <div className="relative h-[250px] md:h-[350px] rounded-2xl overflow-hidden shadow-2xl">
                  <OptimizedImage
                     src="/images/cricket/cricket-intro-lanes-overview.webp"
                     alt="Six professional indoor cricket training lanes at DFW Indoor Sports Fort Worth"
                     fill
                     className="object-cover"
                     priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#006838]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                     <p className="text-white font-header font-bold text-xl md:text-2xl uppercase">6 ICC-Standard Cricket Lanes</p>
                     <p className="text-white/70 text-xs font-mono uppercase tracking-widest mt-1">Professional Indoor Training Facility</p>
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
                     <div className="h-[1px] w-8 bg-[#006838]"></div>
                     <span className="text-[#006838] font-mono text-xs font-bold uppercase tracking-widest">Professional Standards</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-header font-bold text-[#006838] dark:text-white uppercase leading-[0.9] mb-8">
                     Fort Worth's Premier <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400">Indoor Hub</span>
                  </h2>

                  <div className="prose prose-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10 font-light">
                     <p>
                        Finding quality cricket practice facilities in North Texas is challenging. Outdoor nets become unbearable in summer heat exceeding 100°F. Public parks lack proper pitch maintenance. Most facilities close during rain or extreme weather.
                     </p>
                     <p className="border-l-4 border-[#006838] pl-6 italic text-gray-800 dark:text-gray-200 font-medium my-8">
                        "We solved the Texas cricket problem. No heat exhaustion, no uneven bounce, no rain delays. Just perfect cricket."
                     </p>
                     <p>
                        Our six professional cricket lanes provide year-round access to <strong className="text-[#006838] dark:text-green-400">ICC-standard training facilities</strong>. From the 22-yard pitch length to the Australian-imported matting, every detail is engineered for true bounce and spin. Whether you're a beginner or a state-level player, our climate-controlled indoor facility delivers consistency impossible to find outdoors.
                     </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="p-6 bg-green-50/50 dark:bg-green-900/10 border border-green-100 dark:border-green-800 rounded-sm hover:border-green-300 transition-all group">
                        <h4 className="font-bold text-[#006838] dark:text-white uppercase text-sm mb-2 flex items-center gap-2">
                           <Ruler size={16} className="text-green-600 group-hover:scale-110 transition-transform" /> ICC Dimensions
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                           Full 22-yard pitch length and 30m run-up space for fast bowlers. No shortened pitches.
                        </p>
                     </div>
                     <div className="p-6 bg-green-50/50 dark:bg-green-900/10 border border-green-100 dark:border-green-800 rounded-sm hover:border-green-300 transition-all group">
                        <h4 className="font-bold text-[#006838] dark:text-white uppercase text-sm mb-2 flex items-center gap-2">
                           <Video size={16} className="text-green-600 group-hover:scale-110 transition-transform" /> Tech Enabled
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                           PitchVision integration and video analysis stations available in select lanes.
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
                  <div className="bg-[#006838] dark:bg-[#0A111F] p-10 rounded-xl shadow-2xl relative overflow-hidden text-white border border-white/10 group">
                     {/* Abstract Decor */}
                     <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-[60px] pointer-events-none"></div>
                     <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-[40px] pointer-events-none"></div>
                     <div className="absolute inset-0 bg-[url('/textures/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>

                     <h3 className="text-2xl font-header font-bold uppercase tracking-wider mb-8 border-b border-white/20 pb-4 relative z-10 flex justify-between items-center">
                        Lane Facts
                     </h3>

                     <ul className="space-y-6 text-sm relative z-10">
                        <li className="flex gap-4 items-start group/item">
                           <div className="mt-1 p-2 bg-white/10 rounded group-hover/item:bg-green-500 transition-colors"><DollarSign size={16} className="text-white" /></div>
                           <div>
                              <span className="block font-bold text-green-200 uppercase text-[10px] tracking-widest mb-1">Pricing</span>
                              <p className="font-medium">$40/hr (Peak) | $35/hr (Off-Peak)</p>
                              <p className="text-xs text-gray-300 mt-1">Unlimited membership $109/mo</p>
                           </div>
                        </li>
                        <li className="flex gap-4 items-start group/item">
                           <div className="mt-1 p-2 bg-white/10 rounded group-hover/item:bg-green-500 transition-colors"><CheckCircle2 size={16} className="text-white" /></div>
                           <div>
                              <span className="block font-bold text-green-200 uppercase text-[10px] tracking-widest mb-1">Equipment</span>
                              <p className="font-medium">Bowling Machine Included</p>
                              <p className="text-xs text-gray-300 mt-1">Balls, helmets, & pads provided</p>
                           </div>
                        </li>
                        <li className="flex gap-4 items-start group/item">
                           <div className="mt-1 p-2 bg-white/10 rounded group-hover/item:bg-green-500 transition-colors"><MapPin size={16} className="text-white" /></div>
                           <div>
                              <span className="block font-bold text-green-200 uppercase text-[10px] tracking-widest mb-1">Location</span>
                              <p className="font-medium">16230 Three Wide Dr, Fort Worth</p>
                           </div>
                        </li>
                        <li className="flex gap-4 items-start group/item">
                           <div className="mt-1 p-2 bg-white/10 rounded group-hover/item:bg-green-500 transition-colors"><Clock size={16} className="text-white" /></div>
                           <div>
                              <span className="block font-bold text-green-200 uppercase text-[10px] tracking-widest mb-1">Access</span>
                              <p className="font-medium">Daily: 5:00 AM - 11:00 PM</p>
                           </div>
                        </li>
                     </ul>

                     <button className="w-full mt-10 py-4 bg-[#CC0000] text-white font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-red-700 transition-colors shadow-lg relative z-10 flex items-center justify-center gap-2 group/btn">
                        Book Lane Now <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                     </button>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   );
};

export default CricketIntro;