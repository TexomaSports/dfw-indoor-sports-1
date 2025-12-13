'use client'

import React from 'react';
import { Clock, Users, Check, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const DodgeballPricing: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#020408] transition-colors duration-300" id="pricing">
       <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
             <h2 className="text-4xl md:text-5xl font-header font-bold text-[#4C1D95] dark:text-white uppercase mb-6">Court Rental & Leagues</h2>
             <p className="text-gray-500 dark:text-gray-400">Simple pricing for casual play or competitive seasons.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
             
             {/* Hourly Rental */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 p-8 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden flex flex-col"
             >
                <div className="absolute top-0 left-0 w-full h-1 bg-violet-600"></div>
                <div className="flex justify-between items-start mb-6">
                   <div>
                      <h3 className="text-2xl font-header font-bold text-[#4C1D95] dark:text-white uppercase">Hourly Rental</h3>
                      <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mt-1">Private Court</p>
                   </div>
                   <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-full flex items-center justify-center">
                      <Clock size={24} />
                   </div>
                </div>
                
                <div className="mb-8 pb-8 border-b border-gray-100 dark:border-white/10">
                   <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-header font-bold text-[#4C1D95] dark:text-violet-400">$35</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">/hr</span>
                   </div>
                   <p className="text-xs text-gray-400 mt-2">$30/hr Off-Peak (M-F 9am-4pm)</p>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                   <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"><Check size={16} className="text-violet-600 dark:text-violet-400" /> Private Regulation Court</li>
                   <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"><Check size={16} className="text-violet-600 dark:text-violet-400" /> All Dodgeballs Included</li>
                   <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"><Check size={16} className="text-violet-600 dark:text-violet-400" /> Safety Equipment Provided</li>
                   <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"><Check size={16} className="text-violet-600 dark:text-violet-400" /> Spectator Seating</li>
                </ul>

                <Link href="/contact" className="w-full py-4 bg-[#4C1D95] text-white font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-violet-800 transition-colors block text-center">Book Court</Link>
             </motion.div>

             {/* League */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 p-8 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden flex flex-col"
             >
                <div className="absolute top-0 left-0 w-full h-1 bg-orange-500"></div>
                <div className="flex justify-between items-start mb-6">
                   <div>
                      <h3 className="text-2xl font-header font-bold text-[#4C1D95] dark:text-white uppercase">Rec League</h3>
                      <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mt-1">8-Week Season</p>
                   </div>
                   <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full flex items-center justify-center">
                      <Trophy size={24} />
                   </div>
                </div>
                
                <div className="mb-8 pb-8 border-b border-gray-100 dark:border-white/10">
                   <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-header font-bold text-[#4C1D95] dark:text-violet-400">$150</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">/player</span>
                   </div>
                   <p className="text-xs text-gray-400 mt-2">Includes Jersey & Referee Fees</p>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                   <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"><Check size={16} className="text-orange-500" /> Weekly Matches (8 Weeks)</li>
                   <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"><Check size={16} className="text-orange-500" /> Referees Provided</li>
                   <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"><Check size={16} className="text-orange-500" /> Playoffs & Championship</li>
                   <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"><Check size={16} className="text-orange-500" /> Team or Individual Sign-up</li>
                </ul>

                <Link href="/contact" className="w-full py-4 border-2 border-[#4C1D95] dark:border-violet-400 text-[#4C1D95] dark:text-violet-400 font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-[#4C1D95] hover:text-white dark:hover:bg-violet-400 dark:hover:text-black transition-colors block text-center">Join League</Link>
             </motion.div>

          </div>
       </div>
    </section>
  );
};

export default DodgeballPricing;