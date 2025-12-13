'use client'

import React from 'react';
import { motion } from 'framer-motion';

const CoachesStats: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="bg-white dark:bg-[#0A111F] border-b border-gray-200 dark:border-white/10 relative z-30 lg:-mt-20 mx-4 md:mx-auto max-w-7xl rounded-lg shadow-2xl transition-colors duration-300"
    >
       <div className="w-full grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100 dark:divide-white/10 p-4 lg:p-8 gap-y-4 lg:gap-y-0">
          {[
             { label: "Combined Experience", value: "45+", unit: "Years" },
             { label: "Elite Players Mentored", value: "500+", unit: "Athletes" },
             { label: "Global Presence", value: "05", unit: "Countries" },
             { label: "Certification Level", value: "Lvl 2", unit: "Elite" },
          ].map((stat, i) => (
             <div key={i} className={`px-4 lg:px-6 flex flex-col justify-center ${i >= 2 ? 'border-t lg:border-t-0 border-gray-100 dark:border-white/10 pt-4 lg:pt-0' : ''}`}>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</span>
                <div className="flex items-baseline gap-1">
                   <span className="text-2xl lg:text-4xl font-header font-bold text-dfw-navy dark:text-white">{stat.value}</span>
                   <span className="text-xs lg:text-sm font-bold text-dfw-red">{stat.unit}</span>
                </div>
             </div>
          ))}
       </div>
    </motion.div>
  );
};

export default CoachesStats;