'use client'

import React from 'react';
import { Check, Star, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const BadmintonPricing: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#020408] transition-colors duration-300" id="pricing">
       <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
             <h2 className="text-4xl md:text-5xl font-header font-bold text-[#1E3A8A] dark:text-white uppercase mb-6">Court Rental Rates</h2>
             <p className="text-gray-500 dark:text-gray-400">Transparent pricing for casual games or dedicated training.</p>
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
                   <h3 className="text-xl font-header font-bold text-gray-900 dark:text-white uppercase">Hourly Court</h3>
                   <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mt-1">Pay Per Session</p>
                </div>
                <div className="mb-8 pb-8 border-b border-gray-100 dark:border-white/10">
                   <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-header font-bold text-[#1E3A8A] dark:text-blue-400">$25</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">/hr</span>
                   </div>
                   <p className="text-xs text-gray-400 mt-2 flex items-center gap-1"><Clock size={12} /> $20/hr Off-Peak (M-F 9am-4pm)</p>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                   <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"><Check size={16} className="text-blue-600 dark:text-blue-400" /> 1 BWF Professional Court</li>
                   <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"><Check size={16} className="text-blue-600 dark:text-blue-400" /> Nets & Posts Included</li>
                   <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"><Check size={16} className="text-blue-600 dark:text-blue-400" /> Singles or Doubles</li>
                   <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"><Check size={16} className="text-blue-600 dark:text-blue-400" /> Up to 6 Players</li>
                </ul>
                <Link href="/contact" className="w-full py-4 border-2 border-[#1E3A8A] dark:border-blue-400 text-[#1E3A8A] dark:text-blue-400 font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-[#1E3A8A] hover:text-white dark:hover:bg-blue-400 dark:hover:text-black transition-colors block text-center">Book Court</Link>
             </motion.div>

             {/* Membership - Highlighted */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="bg-[#1E3A8A] dark:bg-[#0A111F] rounded-xl border border-[#1E3A8A] dark:border-blue-500/30 p-8 shadow-2xl relative transform md:-translate-y-6 flex flex-col z-10 dark:shadow-[0_0_40px_rgba(37,99,235,0.15)]"
             >
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] font-bold uppercase px-4 py-1.5 rounded-bl-lg shadow-sm">Best Value</div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
                
                <div className="mb-4 relative z-10">
                   <h3 className="text-2xl font-header font-bold text-white uppercase">Unlimited</h3>
                   <p className="text-xs font-mono text-blue-300 uppercase tracking-widest mt-1">Monthly Membership</p>
                </div>
                <div className="mb-8 pb-8 border-b border-blue-800 dark:border-white/10 relative z-10">
                   <div className="flex items-baseline gap-1">
                      <span className="text-6xl font-header font-bold text-white">$70</span>
                      <span className="text-sm text-blue-200 font-medium">/mo</span>
                   </div>
                   <p className="text-xs text-blue-300/80 mt-2">With 6-month commitment</p>
                </div>
                
                <div className="bg-white/10 p-3 rounded mb-6 border border-white/10 relative z-10">
                   <p className="text-xs text-blue-100 font-bold flex items-center gap-2"><Star size={12} className="text-yellow-400" /> Save $230/mo if playing 3x weekly</p>
                </div>

                <ul className="space-y-4 mb-8 flex-grow relative z-10">
                   <li className="flex gap-3 text-sm text-blue-50"><Check size={16} className="text-white" /> <strong className="text-white">UNLIMITED</strong> Court Bookings</li>
                   <li className="flex gap-3 text-sm text-blue-50"><Check size={16} className="text-white" /> Priority Booking Window</li>
                   <li className="flex gap-3 text-sm text-blue-50"><Check size={16} className="text-white" /> 24/7 Facility Access</li>
                   <li className="flex gap-3 text-sm text-blue-50"><Check size={16} className="text-white" /> 10% Pro Shop Discount</li>
                </ul>
                <Link href="/memberships" className="w-full py-4 bg-blue-500 text-white font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-blue-400 transition-colors shadow-lg relative z-10 block text-center">Start Membership</Link>
             </motion.div>

             {/* Gold All Sports */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 p-8 hover:shadow-2xl transition-all duration-300 relative group flex flex-col"
             >
                <div className="mb-4">
                   <h3 className="text-xl font-header font-bold text-gray-900 dark:text-white uppercase">Gold Access</h3>
                   <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mt-1">Multi-Sport</p>
                </div>
                <div className="mb-8 pb-8 border-b border-gray-100 dark:border-white/10">
                   <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-header font-bold text-[#1E3A8A] dark:text-blue-400">$109</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">/mo</span>
                   </div>
                   <p className="text-xs text-gray-400 mt-2">Includes Cricket, Soccer & Dodgeball</p>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                   <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"><Check size={16} className="text-blue-600 dark:text-blue-400" /> <strong className="text-[#1E3A8A] dark:text-white">Unlimited</strong> Badminton</li>
                   <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"><Check size={16} className="text-blue-600 dark:text-blue-400" /> Unlimited Cricket, Soccer, Dodgeball</li>
                   <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"><Check size={16} className="text-blue-600 dark:text-blue-400" /> Cross-Training Opportunity</li>
                   <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"><Check size={16} className="text-blue-600 dark:text-blue-400" /> Bring 2 Guests Monthly Free</li>
                </ul>
                <Link href="/memberships" className="w-full py-4 border-2 border-gray-200 dark:border-white/20 text-gray-600 dark:text-gray-300 font-bold uppercase text-xs tracking-widest rounded-sm hover:border-[#1E3A8A] hover:text-[#1E3A8A] dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors flex items-center justify-center gap-2">
                   <Users size={16} /> Explore Gold
                </Link>
             </motion.div>

          </div>
       </div>
    </section>
  );
};

export default BadmintonPricing;