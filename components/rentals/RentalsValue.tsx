'use client'

import React from 'react';
import { Target, Wind, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

const RentalsValue: React.FC = () => {
   return (
      <section className="py-24 bg-[#0A111F] text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('/textures/cubes.png')] opacity-[0.05]"></div>
         <div className="container mx-auto px-4 md:px-6 relative z-10">

            {/* Happy Renters Image Banner */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mb-12"
            >
               <div className="relative h-[200px] md:h-[280px] rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto border border-white/10">
                  <OptimizedImage
                     src="/images/rentals/rentals-value-happy-renters.webp"
                     alt="Happy members enjoying facility rentals at DFW Indoor Sports"
                     fill
                     className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A111F]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-center">
                     <p className="text-white font-header font-bold text-xl md:text-2xl uppercase">Smart Savings for Regular Players</p>
                     <p className="text-white/70 text-xs font-mono uppercase tracking-widest mt-1">Membership Pays for Itself</p>
                  </div>
               </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-3 block">Value Analysis</span>
               <h2 className="text-3xl md:text-5xl font-header font-bold uppercase mb-6">Membership vs. Drop-In</h2>
               <p className="text-gray-400 max-w-2xl mx-auto">Do the math. If you train more than twice a month, membership usually wins.</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

               {/* Scenario 1: Cricket */}
               <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-colors"
               >
                  <div className="flex items-center gap-3 mb-6">
                     <Target className="text-dfw-red" size={24} />
                     <h3 className="font-header font-bold text-xl uppercase">Frequent Cricketer</h3>
                  </div>
                  <div className="space-y-6">
                     <div className="flex justify-between items-end">
                        <div>
                           <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Drop-In (2x / Week)</p>
                           <p className="text-2xl font-mono text-gray-500 line-through">$640<span className="text-xs">/mo</span></p>
                        </div>
                        <div className="text-right">
                           <p className="text-xs text-dfw-red uppercase tracking-widest mb-1 font-bold">Gold Member</p>
                           <p className="text-4xl font-mono text-white font-bold">$109<span className="text-xs font-normal text-gray-400">/mo</span></p>
                        </div>
                     </div>
                     <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                           initial={{ width: 0 }}
                           whileInView={{ width: "83%" }}
                           transition={{ duration: 1, delay: 0.5 }}
                           className="h-full bg-green-500"
                        ></motion.div>
                     </div>
                     <p className="text-center text-green-400 font-bold uppercase text-xs tracking-widest">
                        You Save $531 / Month ($6,372 / Year)
                     </p>
                  </div>
               </motion.div>

               {/* Scenario 2: Badminton */}
               <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-colors"
               >
                  <div className="flex items-center gap-3 mb-6">
                     <Wind className="text-blue-500" size={24} />
                     <h3 className="font-header font-bold text-xl uppercase">Occasional Player</h3>
                  </div>
                  <div className="space-y-6">
                     <div className="flex justify-between items-end">
                        <div>
                           <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Drop-In (2x / Month)</p>
                           <p className="text-4xl font-mono text-white font-bold">$75<span className="text-xs font-normal text-gray-400">/mo</span></p>
                        </div>
                        <div className="text-right">
                           <p className="text-xs text-blue-500 uppercase tracking-widest mb-1 font-bold">Membership</p>
                           <p className="text-2xl font-mono text-gray-500 line-through">$70<span className="text-xs">/mo</span></p>
                        </div>
                     </div>
                     <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                           initial={{ width: 0 }}
                           whileInView={{ width: "10%" }}
                           transition={{ duration: 1, delay: 0.5 }}
                           className="h-full bg-blue-500"
                        ></motion.div>
                     </div>
                     <p className="text-center text-blue-400 font-bold uppercase text-xs tracking-widest">
                        Stick to Drop-In (Break Even)
                     </p>
                  </div>
               </motion.div>

            </div>

            <div className="mt-12 text-center">
               <Link href="/memberships" className="inline-flex items-center gap-2 text-white border-b border-dfw-red pb-1 hover:text-dfw-red transition-colors text-sm font-bold uppercase tracking-widest">
                  View All Membership Options <ArrowRight size={14} />
               </Link>
            </div>
         </div>
      </section>
   );
};

export default RentalsValue;