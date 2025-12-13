import React from 'react';
import { motion } from 'framer-motion';

const AcademyGlobal: React.FC = () => {
  return (
    <section className="bg-white dark:bg-[#020408] py-24 border-b border-gray-100 dark:border-white/5 transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-10"
          >
            Global Footprint
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12"
          >
             Part of an international network of academies sharing knowledge, coaches, and curriculum.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-6">
             {['United States', 'Singapore', 'Japan', 'India', 'Bangladesh'].map((country, i) => (
                <motion.div 
                  key={country} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative"
                >
                   <div className="px-8 py-4 bg-gray-50 dark:bg-white/5 rounded-full border border-gray-200 dark:border-white/10 text-sm font-bold uppercase tracking-widest text-gray-600 dark:text-gray-300 hover:bg-dfw-navy hover:text-white dark:hover:bg-white dark:hover:text-dfw-navy hover:border-dfw-navy dark:hover:border-white transition-all cursor-default relative z-10 shadow-sm hover:shadow-lg">
                      {country}
                   </div>
                   <div className="absolute inset-0 bg-dfw-red rounded-full opacity-0 group-hover:animate-ping -z-0"></div>
                </motion.div>
             ))}
          </div>
       </div>
    </section>
  );
};

export default AcademyGlobal;