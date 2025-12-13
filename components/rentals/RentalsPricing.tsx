'use client'

import React from 'react';
import { motion } from 'framer-motion';

const RentalsPricing: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#020408] relative transition-colors duration-300" id="pricing">
         <div className="container mx-auto px-4 md:px-6">
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-12 text-center"
            >
               Transparent Pricing
            </motion.h2>
            
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="overflow-x-auto rounded-lg shadow-sm border border-gray-200 dark:border-white/10"
            >
               <table className="w-full min-w-[800px] border-collapse">
                  <thead className="bg-dfw-navy dark:bg-white/10 text-white">
                     <tr>
                        <th className="p-5 text-left font-header uppercase tracking-wider text-xs">Facility</th>
                        <th className="p-5 text-left font-header uppercase tracking-wider text-xs">Standard Rate</th>
                        <th className="p-5 text-left font-header uppercase tracking-wider text-xs">Off-Peak (Mon-Fri 9-4)</th>
                        <th className="p-5 text-left font-header uppercase tracking-wider text-xs">Included Equipment</th>
                     </tr>
                  </thead>
                  <tbody className="text-sm text-gray-600 dark:text-gray-300 divide-y divide-gray-100 dark:divide-white/5 bg-white dark:bg-[#0A111F]">
                     {[
                        { name: "Cricket Lanes", rate: "$40/hour", off: "$35/hour", equip: "Bowling machine, balls, protective gear" },
                        { name: "Badminton Courts", rate: "$25/hour", off: "$20/hour", equip: "Nets, posts, court equipment" },
                        { name: "Soccer Fields", rate: "$60/hour", off: "$50/hour", equip: "Balls, cones, goals, training aids" },
                        { name: "Dodgeball Courts", rate: "$35/hour", off: "$30/hour", equip: "All balls, safety equipment" }
                     ].map((row, i) => (
                        <tr key={i} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                           <td className="p-5 font-bold text-dfw-navy dark:text-white">{row.name}</td>
                           <td className="p-5 font-mono text-dfw-red font-bold">{row.rate}</td>
                           <td className="p-5 font-mono text-green-600 dark:text-green-400">{row.off}</td>
                           <td className="p-5 text-xs uppercase font-bold text-gray-400">{row.equip}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </motion.div>
            
            <div className="mt-6 flex flex-wrap justify-between items-center text-xs text-gray-500 dark:text-gray-400">
               <div className="flex gap-4">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 bg-dfw-navy dark:bg-white rounded-full"></span> Peak: Weekday 4-10pm, Weekends</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 bg-green-500 rounded-full"></span> Off-Peak: Weekday 9am-4pm</span>
               </div>
               <p className="mt-2 md:mt-0">*Members receive 25% off all drop-in rates.</p>
            </div>
         </div>
      </section>
  );
};

export default RentalsPricing;