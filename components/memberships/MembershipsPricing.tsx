'use client'

import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

const MembershipsPricing: React.FC = () => {
   const [billingCycle, setBillingCycle] = useState<'monthly' | 'halfYearly'>('halfYearly');

   const toggleBilling = () => {
      setBillingCycle(prev => prev === 'monthly' ? 'halfYearly' : 'monthly');
   };

   return (
      <section className="py-24 bg-white dark:bg-[#020408] relative transition-colors duration-300" id="pricing">
         <div className="container mx-auto px-4 md:px-6">

            {/* Member Usage Banner */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mb-12"
            >
               <div className="relative h-[200px] md:h-[280px] rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto">
                  <OptimizedImage
                     src="/images/memberships/memberships-pricing-member-using.webp"
                     alt="Members enjoying facilities at DFW Indoor Sports"
                     fill
                     className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dfw-navy/80 via-dfw-navy/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-center">
                     <p className="text-white font-header font-bold text-2xl md:text-3xl uppercase">Unlimited Access. Maximum Value.</p>
                     <p className="text-white/70 text-xs font-mono uppercase tracking-widest mt-1">Play More, Pay Less • 4 Sports Included</p>
                  </div>
               </div>
            </motion.div>

            <div className="text-center max-w-3xl mx-auto mb-12">
               <h2 className="text-4xl md:text-6xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6">Choose Your Plan</h2>

               {/* Toggle */}
               <div className="flex justify-center items-center gap-4 mb-8">
                  <span className={`text-xs font-bold uppercase tracking-widest transition-colors ${billingCycle === 'monthly' ? 'text-dfw-navy dark:text-white' : 'text-gray-400'}`}>Monthly Flex</span>
                  <button
                     onClick={toggleBilling}
                     className="w-16 h-8 bg-dfw-navy dark:bg-white/20 rounded-full relative p-1 transition-colors duration-300 focus:outline-none"
                  >
                     <div className={`w-6 h-6 bg-white dark:bg-dfw-red rounded-full shadow-md transform transition-transform duration-300 ${billingCycle === 'halfYearly' ? 'translate-x-8' : 'translate-x-0'}`}></div>
                  </button>
                  <span className={`text-xs font-bold uppercase tracking-widest transition-colors ${billingCycle === 'halfYearly' ? 'text-dfw-navy dark:text-white' : 'text-gray-400'}`}>
                     6-Months <span className="text-green-500 text-[10px] ml-1">(Best Value)</span>
                  </span>
               </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">

               {/* Card 1: Badminton */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-[#0A111F] rounded-lg border border-gray-200 dark:border-white/10 p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
               >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 dark:bg-white/20 group-hover:bg-blue-500 transition-colors"></div>
                  <h3 className="text-xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-2">Badminton Unlimited</h3>
                  <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-6">Court Access Only</p>

                  <div className="mb-6 h-16">
                     <span className="text-4xl font-header font-bold text-dfw-navy dark:text-white animate-fade-in-up key-{billingCycle}">
                        ${billingCycle === 'halfYearly' ? '70' : '85'}
                     </span>
                     <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">/mo</span>
                     <p className="text-[10px] text-gray-400 mt-1">
                        {billingCycle === 'halfYearly' ? 'Commit to 6 months. Save $90.' : 'Cancel anytime with 30 days notice.'}
                     </p>
                  </div>

                  <ul className="space-y-4 mb-8 min-h-[180px]">
                     {[
                        "Unlimited Court Access", "No Hourly Fees", "Priority Booking", "24/7 Access", "10% Pro Shop Discount"
                     ].map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                           <Check size={16} className="text-blue-500 mt-0.5 shrink-0" />
                           {feat}
                        </li>
                     ))}
                  </ul>

                  <button className="w-full py-3 border border-dfw-navy dark:border-white/20 text-dfw-navy dark:text-white font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-dfw-navy hover:text-white dark:hover:bg-white dark:hover:text-dfw-navy transition-colors">
                     Select Plan
                  </button>
               </motion.div>

               {/* Card 2: GOLD (Highlighted) */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-dfw-navy dark:bg-[#0A111F] rounded-lg border border-dfw-navy dark:border-dfw-red/30 p-8 shadow-2xl relative group overflow-hidden xl:-mt-8 xl:mb-8 transform xl:scale-105 z-10 dark:shadow-[0_0_40px_rgba(214,40,40,0.15)]"
               >
                  <div className="absolute top-0 right-0 bg-dfw-red text-white text-[10px] font-bold uppercase px-3 py-1 rounded-bl-lg z-20">Most Popular</div>
                  {/* Background FX */}
                  <div className="absolute inset-0 bg-[url('/textures/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
                  <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-dfw-red/20 blur-[80px] rounded-full pointer-events-none"></div>

                  <div className="relative z-10">
                     <h3 className="text-2xl font-header font-bold text-white uppercase mb-2">Gold Membership</h3>
                     <p className="text-xs font-mono text-dfw-red uppercase tracking-widest mb-6">All 4 Sports Included</p>

                     <div className="mb-6 h-16">
                        <span className="text-5xl font-header font-bold text-white animate-fade-in-up key-{billingCycle}">
                           ${billingCycle === 'halfYearly' ? '109' : '119'}
                        </span>
                        <span className="text-sm text-gray-400 font-medium">/mo</span>
                        <p className="text-[10px] text-gray-500 mt-1">
                           {billingCycle === 'halfYearly' ? 'Lock in lowest rate.' : 'Monthly flexibility.'}
                        </p>
                     </div>

                     <div className="p-3 bg-white/5 rounded-lg border border-white/10 mb-6 backdrop-blur-sm">
                        <p className="text-xs text-gray-300 leading-relaxed">
                           <strong className="text-white">Includes:</strong> Unlimited Cricket, Badminton, Soccer & Dodgeball.
                        </p>
                     </div>

                     <ul className="space-y-4 mb-8 min-h-[180px]">
                        {[
                           "Unlimited Access to 4 Sports", "Bowling Machine Included", "Priority Booking (14 Days)", "20% League Discount", "Guest Passes Included"
                        ].map((feat, i) => (
                           <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                              <Check size={16} className="text-dfw-red mt-0.5 shrink-0" />
                              {feat}
                           </li>
                        ))}
                     </ul>

                     <button className="w-full py-4 bg-dfw-red text-white font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-red-600 transition-colors shadow-lg">
                        Get Gold Access
                     </button>
                  </div>
               </motion.div>

               {/* Card 3: Cricket Unlimited */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white dark:bg-[#0A111F] rounded-lg border border-gray-200 dark:border-white/10 p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
               >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 dark:bg-white/20 group-hover:bg-dfw-navy dark:group-hover:bg-dfw-red transition-colors"></div>
                  <h3 className="text-xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-2">Cricket Unlimited</h3>
                  <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-6">Serious Training</p>

                  <div className="mb-6 h-16">
                     <span className="text-4xl font-header font-bold text-dfw-navy dark:text-white animate-fade-in-up key-{billingCycle}">
                        $129
                     </span>
                     <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">/mo</span>
                     <p className="text-[10px] text-gray-400 mt-1">
                        Monthly subscription. No long-term commitment.
                     </p>
                  </div>

                  <ul className="space-y-4 mb-8 min-h-[180px]">
                     {[
                        "Unlimited Lane Access", "Bowling Machine Included", "Priority Booking", "Video Analysis Allowed", "10% Academy Discount"
                     ].map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                           <Check size={16} className="text-dfw-navy dark:text-gray-400 mt-0.5 shrink-0" />
                           {feat}
                        </li>
                     ))}
                  </ul>

                  <button className="w-full py-3 border border-dfw-navy dark:border-white/20 text-dfw-navy dark:text-white font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-dfw-navy hover:text-white dark:hover:bg-white dark:hover:text-dfw-navy transition-colors">
                     Select Plan
                  </button>
               </motion.div>

               {/* Card 4: Family */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-white dark:bg-[#0A111F] rounded-lg border border-gray-200 dark:border-white/10 p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
               >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 dark:bg-white/20 group-hover:bg-green-600 transition-colors"></div>
                  <h3 className="text-xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-2">Family Gold</h3>
                  <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-6">2 Adults + 2 Kids</p>

                  <div className="mb-6 h-16">
                     <span className="text-4xl font-header font-bold text-dfw-navy dark:text-white animate-fade-in-up key-{billingCycle}">
                        $129
                     </span>
                     <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">/mo</span>
                     <p className="text-[10px] text-gray-400 mt-1">
                        6-month commitment. Covers 4 family members.
                     </p>
                  </div>

                  <ul className="space-y-4 mb-8 min-h-[180px]">
                     {[
                        "Covers 2 Adults + 2 Kids", "Access to ALL 4 Sports", "Simultaneous Use", "Bowling Machine Included", "10% Coaching Discount"
                     ].map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                           <Check size={16} className="text-green-600 mt-0.5 shrink-0" />
                           {feat}
                        </li>
                     ))}
                  </ul>

                  <button className="w-full py-3 border border-dfw-navy dark:border-white/20 text-dfw-navy dark:text-white font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-dfw-navy hover:text-white dark:hover:bg-white dark:hover:text-dfw-navy transition-colors">
                     Select Plan
                  </button>
               </motion.div>

            </div>
         </div>
      </section>
   );
};

export default MembershipsPricing;