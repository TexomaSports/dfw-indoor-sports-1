'use client'

import React from 'react';
import { Medal, ArrowRight, Users, Zap, Star, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const EventsTournaments: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#020408] border-b border-gray-200 dark:border-white/5 transition-colors duration-300" id="tournaments">
         <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-16">
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="lg:w-1/3"
               >
                  <div className="inline-flex items-center gap-2 mb-4">
                     <Medal size={16} className="text-dfw-red" />
                     <span className="text-dfw-navy dark:text-white font-mono text-xs font-bold uppercase tracking-widest">Tournament Hosting</span>
                  </div>
                  <h2 className="text-4xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6 leading-tight">
                     Engineered for <br/> Championships
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8 border-l-2 border-gray-100 dark:border-white/10 pl-4">
                     We've hosted 100+ tournaments. From local leagues to regional qualifiers, our facility provides the professional infrastructure organizers need.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                     <div className="flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-green-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">Cricket T20 & One-Day</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-green-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">Badminton Team/Individual</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-green-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">Volleyball 6v6</span>
                     </div>
                  </div>

                  <button className="flex items-center gap-2 text-dfw-red font-bold uppercase text-xs tracking-widest border-b border-dfw-red/20 pb-1 hover:text-dfw-navy dark:hover:text-white hover:border-dfw-navy dark:hover:border-white transition-all">
                      Download Hosting Guide <ArrowRight size={14} />
                  </button>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="lg:w-2/3"
               >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                     {[
                        { title: "Capacity", desc: "Simultaneous matches across 50k sq ft. 8-50+ teams supported.", icon: Users },
                        { title: "Tech Stack", desc: "Digital brackets, live scoring displays, and PA system included.", icon: Zap },
                        { title: "Spectator Exp", desc: "Comfortable seating, excellent sightlines, and concessions.", icon: Star },
                        { title: "Operations", desc: "Dedicated tournament director and referee coordination available.", icon: ShieldCheck }
                     ].map((item, i) => (
                        <div key={i} className="flex gap-4 p-6 bg-gray-50 dark:bg-white/5 rounded-lg border border-gray-100 dark:border-white/10 hover:border-dfw-red/20 transition-colors">
                           <div className="p-2 bg-white dark:bg-white/10 rounded-md shadow-sm h-fit text-dfw-navy dark:text-white">
                              <item.icon size={20} />
                           </div>
                           <div>
                              <h4 className="font-header font-bold text-dfw-navy dark:text-white uppercase text-sm mb-1">{item.title}</h4>
                              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
                  
                  {/* Tournament Packages Table */}
                  <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-white/10">
                     <table className="w-full text-left text-sm">
                        <thead className="bg-dfw-navy dark:bg-white/5 text-white">
                           <tr>
                              <th className="p-4 font-header uppercase tracking-wider text-xs">Package</th>
                              <th className="p-4 font-header uppercase tracking-wider text-xs">Teams</th>
                              <th className="p-4 font-header uppercase tracking-wider text-xs">Duration</th>
                              <th className="p-4 font-header uppercase tracking-wider text-xs text-right">Start</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-white/5 bg-white dark:bg-[#0A111F]">
                           <tr>
                              <td className="p-4 font-bold text-dfw-navy dark:text-white">Local League</td>
                              <td className="p-4 text-gray-500 dark:text-gray-400 text-xs">Up to 8</td>
                              <td className="p-4 text-gray-500 dark:text-gray-400 text-xs">1 Day</td>
                              <td className="p-4 font-bold text-dfw-navy dark:text-white text-right">$1,200</td>
                           </tr>
                           <tr>
                              <td className="p-4 font-bold text-dfw-navy dark:text-white">Regional Champ</td>
                              <td className="p-4 text-gray-500 dark:text-gray-400 text-xs">12-16</td>
                              <td className="p-4 text-gray-500 dark:text-gray-400 text-xs">1-2 Days</td>
                              <td className="p-4 font-bold text-dfw-navy dark:text-white text-right">$2,500</td>
                           </tr>
                           <tr>
                              <td className="p-4 font-bold text-dfw-navy dark:text-white">Multi-Day Series</td>
                              <td className="p-4 text-gray-500 dark:text-gray-400 text-xs">16+</td>
                              <td className="p-4 text-gray-500 dark:text-gray-400 text-xs">2-3 Days</td>
                              <td className="p-4 font-bold text-dfw-navy dark:text-white text-right">Custom</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
  );
};

export default EventsTournaments;