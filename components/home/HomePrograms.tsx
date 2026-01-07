'use client'

import React from 'react';
import { User, Users, Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HomePrograms: React.FC = () => {
   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1
         }
      }
   };

   const cardVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50 } }
   };

   return (
      <section className="py-24 bg-white dark:bg-[#020408] border-b border-gray-100 dark:border-white/5 transition-colors duration-300">
         <div className="container mx-auto px-4 md:px-6">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-16 max-w-3xl mx-auto"
            >
               <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-3 block">Development Pathways</span>
               <h2 className="text-4xl md:text-5xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6">Programs for Every Goal</h2>
               <p className="text-gray-500 dark:text-gray-400">From beginners to champions, finding your level is the first step.</p>
            </motion.div>

            <motion.div
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-50px" }}
               className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >

               {/* Youth */}
               <motion.div variants={cardVariants} className="bg-gray-50 dark:bg-[#0A111F] p-8 rounded-lg border border-gray-200 dark:border-white/10 hover:border-green-500/30 dark:hover:border-green-500/30 transition-all duration-300 group">
                  <div className="flex justify-between items-start mb-6">
                     <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg"><Star size={24} /></div>
                     <span className="text-[10px] font-bold uppercase tracking-widest bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-2 py-1 rounded text-gray-500 dark:text-gray-400">Ages 6-17</span>
                  </div>
                  <h3 className="text-2xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-3">Youth Development</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed min-h-[60px]">
                     Building athletic foundations through expert coaching. After-school programs, weekend sessions, and summer camps.
                  </p>
                  <div className="space-y-3 mb-8 border-t border-gray-200 dark:border-white/10 pt-4">
                     <div className="flex items-center gap-2 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> CricKingdom Academy</div>
                     <div className="flex items-center gap-2 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Technical Soccer</div>
                     <div className="flex items-center gap-2 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Multi-Sport Discovery</div>
                  </div>
                  <Link href="/academy" className="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">Explore Youth <ArrowRight size={14} /></Link>
               </motion.div>

               {/* Adult */}
               <motion.div variants={cardVariants} className="bg-gray-50 dark:bg-[#0A111F] p-8 rounded-lg border border-gray-200 dark:border-white/10 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 group">
                  <div className="flex justify-between items-start mb-6">
                     <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg"><Users size={24} /></div>
                     <span className="text-[10px] font-bold uppercase tracking-widest bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-2 py-1 rounded text-gray-500 dark:text-gray-400">18+ / Seniors</span>
                  </div>
                  <h3 className="text-2xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-3">Adult Rec & Comp</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed min-h-[60px]">
                     Stay active, compete, connect. Work schedule friendly leagues and drop-in sessions with a community atmosphere.
                  </p>
                  <div className="space-y-3 mb-8 border-t border-gray-200 dark:border-white/10 pt-4">
                     <div className="flex items-center gap-2 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Recreational Leagues</div>
                     <div className="flex items-center gap-2 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Competitive Divisions</div>
                     <div className="flex items-center gap-2 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Social Drop-In</div>
                  </div>
                  <Link href="/sports" className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">View Adult Programs <ArrowRight size={14} /></Link>
               </motion.div>

               {/* Elite */}
               <motion.div variants={cardVariants} className="bg-dfw-navy dark:bg-white/5 p-8 rounded-lg border border-dfw-navy dark:border-white/10 shadow-xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('/textures/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
                  <div className="flex justify-between items-start mb-6 relative z-10">
                     <div className="p-3 bg-white/10 text-dfw-red rounded-lg border border-white/10"><User size={24} /></div>
                     <span className="text-[10px] font-bold uppercase tracking-widest bg-dfw-red text-white px-2 py-1 rounded">Advanced</span>
                  </div>
                  <h3 className="text-2xl font-header font-bold text-white uppercase mb-3 relative z-10">Elite Performance</h3>
                  <p className="text-sm text-gray-400 mb-6 leading-relaxed min-h-[60px] relative z-10">
                     For serious athletes pursuing excellence. Personalized training plans, video analysis, and collegiate pathway guidance.
                  </p>
                  <div className="space-y-3 mb-8 border-t border-white/10 pt-4 relative z-10">
                     <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase"><div className="w-1.5 h-1.5 bg-dfw-red rounded-full"></div> High-Performance Track</div>
                     <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase"><div className="w-1.5 h-1.5 bg-dfw-red rounded-full"></div> Video Analysis</div>
                     <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase"><div className="w-1.5 h-1.5 bg-dfw-red rounded-full"></div> College Recruiting</div>
                  </div>
                  <Link href="/academy" className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all relative z-10">Learn About Elite <ArrowRight size={14} /></Link>
               </motion.div>

            </motion.div>
         </div>
      </section>
   );
};

export default HomePrograms;