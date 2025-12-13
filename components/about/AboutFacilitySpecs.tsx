'use client'

import React from 'react';
import { Building2, Thermometer, Lightbulb, Wifi } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutFacilitySpecs: React.FC = () => {
  return (
    <section className="bg-gray-50 dark:bg-[#0A111F] py-24 relative transition-colors duration-300">
       <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-dfw-red to-transparent"></div>
       <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-16 items-start">
             {/* Left: Sticky Text */}
             <div className="md:w-1/3 md:sticky md:top-32">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                   <div className="inline-flex items-center gap-2 mb-4">
                      <Building2 size={16} className="text-dfw-red" />
                      <span className="text-gray-400 font-mono text-xs font-bold uppercase tracking-widest">Infrastructure v2.0</span>
                   </div>
                   <h2 className="text-4xl md:text-5xl font-header font-bold text-dfw-navy dark:text-white uppercase leading-[0.95] mb-6">
                      Designed for <br/> Performance, <br/> Built for <span className="text-dfw-red">Comfort.</span>
                   </h2>
                   <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm mb-8 border-l-2 border-gray-200 dark:border-white/10 pl-4">
                      50,000 square feet of purpose-built athletic excellence. From hybrid turf technology to medical-grade padding, every detail is calibrated for safety and performance.
                   </p>
                   
                   <div className="space-y-4">
                      <div className="flex items-center gap-4 group">
                         <div className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-dfw-navy dark:text-white group-hover:bg-dfw-red group-hover:text-white transition-colors">
                            <Thermometer size={18} />
                         </div>
                         <div>
                            <p className="font-bold text-dfw-navy dark:text-white uppercase text-xs">Climate Control</p>
                            <p className="text-xs text-gray-400">72°F Constant Year-Round</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-4 group">
                         <div className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-dfw-navy dark:text-white group-hover:bg-dfw-red group-hover:text-white transition-colors">
                            <Lightbulb size={18} />
                         </div>
                         <div>
                            <p className="font-bold text-dfw-navy dark:text-white uppercase text-xs">Pro Lighting</p>
                            <p className="text-xs text-gray-400">1000 Lux LED / Anti-Glare</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-4 group">
                         <div className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-dfw-navy dark:text-white group-hover:bg-dfw-red group-hover:text-white transition-colors">
                            <Wifi size={18} />
                         </div>
                         <div>
                            <p className="font-bold text-dfw-navy dark:text-white uppercase text-xs">Connected</p>
                            <p className="text-xs text-gray-400">High-speed WiFi & PitchVision™</p>
                         </div>
                      </div>
                   </div>
                </motion.div>
             </div>

             {/* Right: The Facility Grid (Bento) */}
             <div className="md:w-2/3 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {/* Cricket */}
                   <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="md:col-span-2 relative h-64 rounded-sm overflow-hidden group border border-white/10"
                   >
                      <img src="https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Cricket" />
                      <div className="absolute inset-0 bg-gradient-to-t from-dfw-navy/90 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                         <h3 className="font-header text-2xl uppercase mb-1">Cricket Complex</h3>
                         <p className="text-xs font-mono text-gray-300">6 Lanes // Auto-Feeders // Analysis</p>
                      </div>
                   </motion.div>

                   {/* Badminton */}
                   <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.1 }}
                     className="relative h-64 rounded-sm overflow-hidden group border border-white/10"
                   >
                      <img src="https://images.unsplash.com/photo-1626224583764-847890e058f5?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Badminton" />
                      <div className="absolute inset-0 bg-gradient-to-t from-dfw-navy/90 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                         <h3 className="font-header text-2xl uppercase mb-1">Badminton Hall</h3>
                         <p className="text-xs font-mono text-gray-300">8 Courts // Pro Floor</p>
                      </div>
                   </motion.div>

                   {/* Lounge */}
                   <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 }}
                     className="relative h-64 rounded-sm overflow-hidden group border border-white/10"
                   >
                      <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Lounge" />
                      <div className="absolute inset-0 bg-gradient-to-t from-dfw-navy/90 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                         <h3 className="font-header text-2xl uppercase mb-1">Player Lounge</h3>
                         <p className="text-xs font-mono text-gray-300">Recovery // Social // Pro Shop</p>
                      </div>
                   </motion.div>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
};

export default AboutFacilitySpecs;