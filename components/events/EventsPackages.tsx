'use client'

import React from 'react';
import { Clock, Trophy, Users, PartyPopper, Utensils, Star, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

const EventsPackages: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0A111F] border-y border-gray-200 dark:border-white/5 transition-colors duration-300" id="packages">
         <div className="container mx-auto px-4 md:px-6">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-3 block">Kids & Adults</span>
               <h2 className="text-4xl md:text-5xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6">Birthday Packages</h2>
               <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">The best gift is an experience. Choose from Cricket, Dodgeball, Soccer, and more.</p>
            </motion.div>

            <motion.div 
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-start mb-16"
            >
               
               {/* Basic Package */}
               <motion.div variants={itemVariants} className="bg-white dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10 p-8 hover:shadow-xl transition-all duration-300 relative group overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 dark:bg-white/20 group-hover:bg-blue-500 transition-colors"></div>
                  <h3 className="text-xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-2">Basic Sports</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                     <span className="text-4xl font-header font-bold text-dfw-navy dark:text-white">$299</span>
                     <span className="text-xs text-gray-400 font-bold uppercase">/ 12 Kids</span>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                     <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <Clock size={16} className="text-blue-500" /> 2 Hours Total
                     </div>
                     <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <Trophy size={16} className="text-blue-500" /> 1.5 Hrs Activities (1 Sport)
                     </div>
                     <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <Users size={16} className="text-blue-500" /> 1 Professional Coach
                     </div>
                     <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <PartyPopper size={16} className="text-blue-500" /> 30 Min Party Room
                     </div>
                  </div>
                  <div className="pt-4 border-t border-gray-100 dark:border-white/10 text-xs text-gray-400 italic mb-6">
                     *Bring your own food, cake & decor
                  </div>
                  <button className="w-full py-3 border border-dfw-navy dark:border-white/20 text-dfw-navy dark:text-white font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-dfw-navy hover:text-white dark:hover:bg-white dark:hover:text-dfw-navy transition-colors">Select Basic</button>
               </motion.div>

               {/* Deluxe Package - Featured */}
               <motion.div variants={itemVariants} className="bg-dfw-navy dark:bg-black rounded-lg border border-dfw-navy dark:border-white/20 p-8 shadow-2xl relative group overflow-hidden transform md:-translate-y-4 z-10">
                  <div className="absolute top-0 right-0 bg-dfw-red text-white text-[10px] font-bold uppercase px-3 py-1 rounded-bl-lg">Most Popular</div>
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
                  
                  <h3 className="text-xl font-header font-bold text-white uppercase mb-2 relative z-10">Deluxe Multi-Sport</h3>
                  <div className="flex items-baseline gap-1 mb-6 relative z-10">
                     <span className="text-4xl font-header font-bold text-white">$449</span>
                     <span className="text-xs text-gray-400 font-bold uppercase">/ 15 Kids</span>
                  </div>
                  
                  <div className="space-y-4 mb-8 relative z-10">
                     <div className="flex items-center gap-3 text-sm text-gray-300">
                        <Clock size={16} className="text-dfw-red" /> 2.5 Hours Total
                     </div>
                     <div className="flex items-center gap-3 text-sm text-gray-300">
                        <Trophy size={16} className="text-dfw-red" /> 2 Hrs Activities (2-3 Sports)
                     </div>
                     <div className="flex items-center gap-3 text-sm text-gray-300">
                        <Users size={16} className="text-dfw-red" /> 2 Professional Coaches
                     </div>
                     <div className="flex items-center gap-3 text-sm text-gray-300">
                        <Utensils size={16} className="text-dfw-red" /> Pizza Lunch Included
                     </div>
                     <div className="flex items-center gap-3 text-sm text-gray-300">
                        <Star size={16} className="text-dfw-red" /> Themed Decorations
                     </div>
                  </div>
                  <button className="w-full py-3 bg-dfw-red text-white font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-red-600 transition-colors relative z-10 shadow-lg">Select Deluxe</button>
               </motion.div>

               {/* Ultimate Package */}
               <motion.div variants={itemVariants} className="bg-white dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10 p-8 hover:shadow-xl transition-all duration-300 relative group overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 dark:bg-white/20 group-hover:bg-green-500 transition-colors"></div>
                  <h3 className="text-xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-2">Ultimate Bash</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                     <span className="text-4xl font-header font-bold text-dfw-navy dark:text-white">$649</span>
                     <span className="text-xs text-gray-400 font-bold uppercase">/ 20 Kids</span>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                     <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <Clock size={16} className="text-green-500" /> 3 Hours Total
                     </div>
                     <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <Trophy size={16} className="text-green-500" /> 2.5 Hrs (4-5 Sports)
                     </div>
                     <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <Users size={16} className="text-green-500" /> 3 Professional Coaches
                     </div>
                     <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <Utensils size={16} className="text-green-500" /> Premium Catering
                     </div>
                     <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <Camera size={16} className="text-green-500" /> Photography & Custom Jersey
                     </div>
                  </div>
                  <button className="w-full py-3 border border-dfw-navy dark:border-white/20 text-dfw-navy dark:text-white font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-dfw-navy hover:text-white dark:hover:bg-white dark:hover:text-dfw-navy transition-colors">Select Ultimate</button>
               </motion.div>
            </motion.div>

            {/* Extras Section - Semantic List */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 text-center">
               <div className="bg-white dark:bg-white/5 p-4 rounded border border-gray-100 dark:border-white/10">
                  <p className="text-[10px] font-bold uppercase text-gray-400 mb-1">Extra Kid</p>
                  <p className="text-dfw-navy dark:text-white font-bold">$15-25 <span className="text-xs font-normal">/ child</span></p>
               </div>
               <div className="bg-white dark:bg-white/5 p-4 rounded border border-gray-100 dark:border-white/10">
                  <p className="text-[10px] font-bold uppercase text-gray-400 mb-1">Extra Time</p>
                  <p className="text-dfw-navy dark:text-white font-bold">$75-100 <span className="text-xs font-normal">/ 30 min</span></p>
               </div>
               <div className="bg-white dark:bg-white/5 p-4 rounded border border-gray-100 dark:border-white/10">
                  <p className="text-[10px] font-bold uppercase text-gray-400 mb-1">Goody Bags</p>
                  <p className="text-dfw-navy dark:text-white font-bold">$10 <span className="text-xs font-normal">/ child</span></p>
               </div>
               <div className="bg-white dark:bg-white/5 p-4 rounded border border-gray-100 dark:border-white/10">
                  <p className="text-[10px] font-bold uppercase text-gray-400 mb-1">Photography</p>
                  <p className="text-dfw-navy dark:text-white font-bold">$150 <span className="text-xs font-normal">/ session</span></p>
               </div>
            </div>
         </div>
      </section>
  );
};

export default EventsPackages;