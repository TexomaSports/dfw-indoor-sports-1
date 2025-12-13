'use client'

import React from 'react';
import { Star, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const BadmintonComparison: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0A111F] border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6">
          
          {/* Comparison Table */}
          <div className="max-w-5xl mx-auto mb-24">
             <div className="text-center mb-12">
                <h2 className="text-3xl font-header font-bold text-[#1E3A8A] dark:text-white uppercase mb-4">The BWF Standard</h2>
                <p className="text-gray-500 dark:text-gray-400">Why experienced players choose DFW Indoor Sports.</p>
             </div>
             
             <div className="bg-white dark:bg-white/5 rounded-xl shadow-sm border border-gray-200 dark:border-white/10 overflow-hidden">
                <table className="w-full text-left border-collapse">
                   <thead>
                      <tr className="bg-[#1E3A8A] dark:bg-blue-900/80 text-white">
                         <th className="p-5 md:p-6 text-sm font-bold uppercase tracking-wider">Feature</th>
                         <th className="p-5 md:p-6 text-sm font-bold uppercase tracking-wider bg-black/20 border-x border-white/10">DFW Indoor Sports</th>
                         <th className="p-5 md:p-6 text-sm font-bold uppercase tracking-wider opacity-70">Rec Centers</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-100 dark:divide-white/5 text-gray-700 dark:text-gray-300">
                      {[
                         { feat: "Ceiling Height", us: "32 Feet (Clear)", them: "15-20 Feet" },
                         { feat: "Flooring", us: "5mm Pro Synthetic", them: "Wood/Concrete" },
                         { feat: "Lighting", us: "Side-Mounted 500 Lux", them: "Overhead (Glare)" },
                         { feat: "Airflow", us: "Laminar (No Draft)", them: "Turbulent" },
                         { feat: "Net Tension", us: "Pro Standard", them: "Sagging / Loose" },
                         { feat: "Booking", us: "Online Instant", them: "Phone / Walk-in" },
                         { feat: "Access", us: "24/7 Member Access", them: "Limited Hours" }
                      ].map((row, i) => (
                         <tr key={i} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                            <td className="p-5 md:p-6 font-bold text-[#1E3A8A] dark:text-blue-400 text-sm">{row.feat}</td>
                            <td className="p-5 md:p-6 bg-blue-50/40 dark:bg-blue-900/20 text-sm font-bold text-gray-800 dark:text-white flex items-center gap-2 border-x border-gray-100 dark:border-white/10">
                               <Check size={16} className="text-blue-600 dark:text-blue-400" /> {row.us}
                            </td>
                            <td className="p-5 md:p-6 text-sm text-gray-400">
                               {row.them}
                            </td>
                         </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </div>

          {/* Testimonials */}
          <div>
             <h2 className="text-3xl font-header font-bold text-[#1E3A8A] dark:text-white uppercase mb-12 text-center">Player Stories</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                   { name: "Priya Mehta", role: "Tournament Player", text: "The ceiling height alone makes this facility worth driving 40 minutes. Finally can practice clears without hitting rafters.", stars: 5 },
                   { name: "Robert Chen", role: "Recreational", text: "Started at 55 for fitness. The flooring is gentle on my knees, I can play 2 hours without pain. Lost 25lbs having fun.", stars: 5 },
                   { name: "Sarah J.", role: "High School Athlete", text: "Improved my game dramatically. Proper flooring taught me footwork I couldn't learn at my school gym.", stars: 5 },
                   { name: "Amit Patel", role: "League Player", text: "Climate control is game-changing. Shuttlecocks actually fly consistently here unlike outdoors or warehouse gyms.", stars: 5 }
                ].map((t, i) => (
                   <motion.div 
                     key={i} 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="bg-white dark:bg-white/5 p-8 rounded-lg border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 relative group"
                   >
                      <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 dark:bg-white/10 group-hover:bg-blue-500 transition-colors"></div>
                      <div className="flex text-yellow-400 mb-4 gap-1">
                         {[...Array(t.stars)].map((_, s) => <Star key={s} size={14} fill="currentColor" />)}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm italic mb-6 leading-relaxed">"{t.text}"</p>
                      <div>
                         <p className="font-bold text-[#1E3A8A] dark:text-white uppercase text-xs">{t.name}</p>
                         <p className="text-gray-400 text-[10px] uppercase tracking-widest">{t.role}</p>
                      </div>
                   </motion.div>
                ))}
             </div>
          </div>

       </div>
    </section>
  );
};

export default BadmintonComparison;