'use client'

import React from 'react';
import { Check, Star, ArrowRight, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CricketPricing: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#020408] transition-colors duration-300" id="pricing">
       <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
             <h2 className="text-4xl md:text-5xl font-header font-bold text-[#006838] dark:text-white uppercase mb-6">Lane Rental Rates</h2>
             <p className="text-gray-500 dark:text-gray-400">Flexible pricing for casual hits or serious daily training.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
             
             {/* Hourly */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 p-8 hover:shadow-2xl transition-all duration-300 relative group flex flex-col"
             >
                <div className="mb-4">
                   <h3 className="text-xl font-header font-bold text-gray-900 dark:text-white uppercase">Hourly Rental</h3>
                   <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mt-1">Pay Per Session</p>
                </div>
                <div className="mb-8 pb-8 border-b border-gray-100 dark:border-white/10">
                   <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-header font-bold text-[#006838] dark:text-green-400">$40</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">/hr</span>
                   </div>
                   <p className="text-xs text-gray-400 mt-2 flex items-center gap-1"><Clock size={12} /> $35/hr Off-Peak (M-F 9am-4pm)</p>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                   <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"><Check size={16} className="text-green-600 dark:text-green-400" /> 1 ICC Lane</li>
                   <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"><Check size={16} className="text-green-600 dark:text-green-400" /> <strong>FREE</strong> Bowling Machine</li>
                   <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"><Check size={16} className="text-green-600 dark:text-green-400" /> Balls & Protective Gear</li>
                   <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"><Check size={16} className="text-green-600 dark:text-green-400" /> Up to 6 Players</li>
                </ul>
                <Link href="/contact" className="w-full py-4 border-2 border-[#006838] text-[#006838] dark:border-green-400 dark:text-green-400 font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-[#006838] hover:text-white dark:hover:bg-green-400 dark:hover:text-black transition-colors block text-center">Book Lane</Link>
             </motion.div>

             {/* Membership - Highlighted */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="bg-[#006838] dark:bg-[#0A111F] rounded-xl border border-[#006838] dark:border-green-500/30 p-8 shadow-2xl relative transform md:-translate-y-6 flex flex-col z-10 dark:shadow-[0_0_40px_rgba(22,163,74,0.15)]"
             >
                <div className="absolute top-0 right-0 bg-[#CC0000] text-white text-[10px] font-bold uppercase px-4 py-1.5 rounded-bl-lg shadow-sm">Best Value</div>
                <div className="absolute inset-0 bg-[url('/textures/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
                
                <div className="mb-4 relative z-10">
                   <h3 className="text-2xl font-header font-bold text-white uppercase">Unlimited</h3>
                   <p className="text-xs font-mono text-green-200 uppercase tracking-widest mt-1">Monthly Membership</p>
                </div>
                <div className="mb-8 pb-8 border-b border-green-800 dark:border-white/10 relative z-10">
                   <div className="flex items-baseline gap-1">
                      <span className="text-6xl font-header font-bold text-white">$109</span>
                      <span className="text-sm text-green-200 font-medium">/mo</span>
                   </div>
                   <p className="text-xs text-green-300/80 mt-2">With 6-month commitment</p>
                </div>
                
                <div className="bg-white/10 p-3 rounded mb-6 border border-white/10 relative z-10">
                   <p className="text-xs text-green-100 font-bold flex items-center gap-2"><Star size={12} className="text-yellow-400" /> Save $451/mo if playing 3x weekly</p>
                </div>

                <ul className="space-y-4 mb-8 flex-grow relative z-10">
                   <li className="flex gap-3 text-sm text-green-100"><Check size={16} className="text-white" /> <strong className="text-white">UNLIMITED</strong> Lane Bookings</li>
                   <li className="flex gap-3 text-sm text-green-100"><Check size={16} className="text-white" /> Priority Booking Window</li>
                   <li className="flex gap-3 text-sm text-green-100"><Check size={16} className="text-white" /> 24/7 Facility Access</li>
                   <li className="flex gap-3 text-sm text-green-100"><Check size={16} className="text-white" /> 10% Pro Shop & Coaching Discount</li>
                </ul>
                <Link href="/memberships" className="w-full py-4 bg-[#CC0000] text-white font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-red-700 transition-colors shadow-lg relative z-10 block text-center">Start Membership</Link>
             </motion.div>

             {/* Team Package */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 p-8 hover:shadow-xl transition-all duration-300 relative group flex flex-col"
             >
                <div className="mb-4">
                   <h3 className="text-xl font-header font-bold text-gray-900 dark:text-white uppercase">Team Packages</h3>
                   <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mt-1">Bulk Booking</p>
                </div>
                <div className="mb-8 pb-8 border-b border-gray-100 dark:border-white/10">
                   <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-header font-bold text-[#006838] dark:text-green-400">$30</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">/hr/lane</span>
                   </div>
                   <p className="text-xs text-gray-400 mt-2">When booking 3+ lanes or 10+ hours</p>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                   <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"><Check size={16} className="text-green-600 dark:text-green-400" /> Full Squad Training</li>
                   <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"><Check size={16} className="text-green-600 dark:text-green-400" /> Guaranteed Weekly Slots</li>
                   <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"><Check size={16} className="text-green-600 dark:text-green-400" /> Equipment Storage Option</li>
                   <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"><Check size={16} className="text-green-600 dark:text-green-400" /> Access to Meeting Room</li>
                </ul>
                <Link href="/contact" className="w-full py-4 border-2 border-gray-200 dark:border-white/20 text-gray-600 dark:text-gray-300 font-bold uppercase text-xs tracking-widest rounded-sm hover:border-[#006838] hover:text-[#006838] dark:hover:border-green-400 dark:hover:text-green-400 transition-colors flex items-center justify-center gap-2">
                   <Users size={16} /> Request Quote
                </Link>
             </motion.div>

          </div>
       </div>
    </section>
  );
};

export default CricketPricing;