'use client'

import React from 'react';
import { Check, Star, ArrowRight, Users, Clock, Trophy, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SoccerPricing: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#020408] transition-colors duration-300" id="pricing">
       <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
             <h2 className="text-4xl md:text-5xl font-header font-bold text-[#064E3B] dark:text-white uppercase mb-6">Soccer Field Rental Options</h2>
             <p className="text-gray-500 dark:text-gray-400">Flexible pricing for teams and individuals.</p>
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
                      <span className="text-5xl font-header font-bold text-[#064E3B] dark:text-emerald-400">$60</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">/hr</span>
                   </div>
                   <p className="text-xs text-gray-400 mt-2 flex items-center gap-1"><Clock size={12} /> $50/hr Off-Peak (M-F 9am-4pm)</p>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                   <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"><Check size={16} className="text-emerald-600 dark:text-emerald-400" /> 1 Indoor Field</li>
                   <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"><Check size={16} className="text-emerald-600 dark:text-emerald-400" /> FIFA Artificial Turf</li>
                   <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"><Check size={16} className="text-emerald-600 dark:text-emerald-400" /> Goal Systems Included</li>
                   <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"><Check size={16} className="text-emerald-600 dark:text-emerald-400" /> Up to 16 Players</li>
                </ul>
                <Link href="/contact" className="w-full py-4 border-2 border-[#064E3B] dark:border-emerald-400 text-[#064E3B] dark:text-emerald-400 font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-[#064E3B] hover:text-white dark:hover:bg-emerald-400 dark:hover:text-black transition-colors block text-center">Book Field Now</Link>
             </motion.div>

             {/* Membership - Highlighted */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="bg-[#064E3B] dark:bg-[#0A111F] rounded-xl border border-[#064E3B] dark:border-emerald-500/30 p-8 shadow-2xl relative transform md:-translate-y-6 flex flex-col z-10 dark:shadow-[0_0_40px_rgba(16,185,129,0.15)]"
             >
                <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold uppercase px-4 py-1.5 rounded-bl-lg shadow-sm">Best Value</div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
                
                <div className="mb-4 relative z-10">
                   <h3 className="text-2xl font-header font-bold text-white uppercase">Gold Membership</h3>
                   <p className="text-xs font-mono text-emerald-300 uppercase tracking-widest mt-1">Unlimited All Sports</p>
                </div>
                <div className="mb-8 pb-8 border-b border-emerald-800 dark:border-white/10 relative z-10">
                   <div className="flex items-baseline gap-1">
                      <span className="text-6xl font-header font-bold text-white">$109</span>
                      <span className="text-sm text-emerald-200 font-medium">/mo</span>
                   </div>
                   <p className="text-xs text-emerald-300/80 mt-2">With 6-month commitment</p>
                </div>
                
                <div className="bg-white/10 p-3 rounded mb-6 border border-white/10 relative z-10">
                   <p className="text-xs text-emerald-100 font-bold flex items-center gap-2"><Star size={12} className="text-yellow-400" /> Save $371/mo if playing 2x weekly</p>
                </div>

                <ul className="space-y-4 mb-8 flex-grow relative z-10">
                   <li className="flex gap-3 text-sm text-emerald-50"><Check size={16} className="text-white" /> <strong className="text-white">UNLIMITED</strong> Field Bookings</li>
                   <li className="flex gap-3 text-sm text-emerald-50"><Check size={16} className="text-white" /> Access to ALL 4 Sports</li>
                   <li className="flex gap-3 text-sm text-emerald-50"><Check size={16} className="text-white" /> 24/7 Facility Access</li>
                   <li className="flex gap-3 text-sm text-emerald-50"><Check size={16} className="text-white" /> 10% Pro Shop & Coaching Discount</li>
                </ul>
                <Link href="/memberships" className="w-full py-4 bg-emerald-500 text-white font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-emerald-400 transition-colors shadow-lg relative z-10 block text-center">Explore Gold Membership</Link>
             </motion.div>

             {/* Team Package */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 p-8 hover:shadow-2xl transition-all duration-300 relative group flex flex-col"
             >
                <div className="mb-4">
                   <h3 className="text-xl font-header font-bold text-gray-900 dark:text-white uppercase">Team Packages</h3>
                   <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mt-1">Weekly Practice Block</p>
                </div>
                <div className="mb-8 pb-8 border-b border-gray-100 dark:border-white/10">
                   <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-header font-bold text-[#064E3B] dark:text-emerald-400">$800</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">/season</span>
                   </div>
                   <p className="text-xs text-gray-400 mt-2">~ $50/session (16 hours total)</p>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                   <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"><Check size={16} className="text-emerald-600 dark:text-emerald-400" /> 8-Week Commitment</li>
                   <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"><Check size={16} className="text-emerald-600 dark:text-emerald-400" /> Guaranteed Weekly Slot</li>
                   <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"><Check size={16} className="text-emerald-600 dark:text-emerald-400" /> Priority Rescheduling</li>
                   <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"><Check size={16} className="text-emerald-600 dark:text-emerald-400" /> Equipment Storage Option</li>
                </ul>
                <Link href="/contact" className="w-full py-4 border-2 border-gray-200 dark:border-white/20 text-gray-600 dark:text-gray-300 font-bold uppercase text-xs tracking-widest rounded-sm hover:border-[#064E3B] hover:text-[#064E3B] dark:hover:border-emerald-400 dark:hover:text-emerald-400 transition-colors flex items-center justify-center gap-2">
                   <Users size={16} /> Request Team Quote
                </Link>
             </motion.div>

          </div>

          {/* League Pricing */}
          <div className="mt-16 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
             <div>
                <h4 className="text-xl font-header font-bold text-[#064E3B] dark:text-white uppercase mb-2">League & Tournament Pricing</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
                   <p><strong className="text-gray-900 dark:text-white">Leagues:</strong> $150-200 per season (8-10 weeks). Includes matches, field time, playoffs.</p>
                   <p><strong className="text-gray-900 dark:text-white">Tournaments:</strong> $350 Full Day (8 hrs) | $200 Half Day (4 hrs). Ideal for showcases.</p>
                </div>
             </div>
             <Link href="/events" className="px-8 py-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white font-bold uppercase text-xs tracking-widest rounded-sm hover:border-[#064E3B] hover:text-[#064E3B] dark:hover:bg-white dark:hover:text-[#064E3B] transition-colors whitespace-nowrap flex items-center gap-2">
                <Trophy size={14} /> View League Schedule
             </Link>
          </div>
       </div>
    </section>
  );
};

export default SoccerPricing;