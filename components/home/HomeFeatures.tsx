'use client'

import React from 'react';
import { ArrowRight, Target, Wind, Activity, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HomeFeatures: React.FC = () => {
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
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section className="bg-gray-50 dark:bg-[#050911] transition-colors duration-300 py-24 md:py-32 relative overflow-hidden">
      {/* Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
           <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-4 block">Find Your Passion</span>
           <h2 className="text-4xl md:text-5xl font-header font-bold text-dfw-navy dark:text-white uppercase leading-tight">
             Our Sports
           </h2>
           <p className="text-gray-500 dark:text-gray-400 mt-4 text-lg font-light">
             Four distinct ways to move, compete, and connect.
           </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          
          {/* Cricket - Semantic H3 for topical relevance */}
          <motion.div variants={cardVariants} className="group bg-white dark:bg-white/5 p-8 rounded-xl border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
             <div className="w-14 h-14 bg-red-50 dark:bg-red-900/30 text-dfw-red dark:text-red-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-dfw-red group-hover:text-white transition-colors">
                <Target size={28} strokeWidth={1.5} />
             </div>
             <h3 className="text-xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-3">Cricket</h3>
             <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6 border-b border-gray-50 dark:border-white/10 pb-6">
                From the crack of the bat to the cheer of the team. Train on international-standard lanes and find your rhythm.
             </p>
             <Link href="/academy" className="text-xs font-bold text-dfw-red uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                Explore Academy <ArrowRight size={14} />
             </Link>
          </motion.div>

          {/* Badminton */}
          <motion.div variants={cardVariants} className="group bg-white dark:bg-white/5 p-8 rounded-xl border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
             <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Wind size={28} strokeWidth={1.5} />
             </div>
             <h3 className="text-xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-3">Badminton</h3>
             <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6 border-b border-gray-50 dark:border-white/10 pb-6">
                Speed, agility, and grace. Play on professional flooring designed to be kind to your body while you fly across the court.
             </p>
             <Link href="/badminton-courts" className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                View Programs <ArrowRight size={14} />
             </Link>
          </motion.div>

          {/* Soccer */}
          <motion.div variants={cardVariants} className="group bg-white dark:bg-white/5 p-8 rounded-xl border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
             <div className="w-14 h-14 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <Activity size={28} strokeWidth={1.5} />
             </div>
             <h3 className="text-xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-3">Soccer</h3>
             <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6 border-b border-gray-50 dark:border-white/10 pb-6">
                The beautiful game, played in perfect conditions. Join a league or bring your friends for fast-paced 5-a-side fun.
             </p>
             <Link href="/soccer-fields" className="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                Soccer Info <ArrowRight size={14} />
             </Link>
          </motion.div>

          {/* Dodgeball */}
          <motion.div variants={cardVariants} className="group bg-white dark:bg-white/5 p-8 rounded-xl border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
             <div className="w-14 h-14 bg-orange-50 dark:bg-orange-900/30 text-orange-500 dark:text-orange-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <Zap size={28} strokeWidth={1.5} />
             </div>
             <h3 className="text-xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-3">Dodgeball</h3>
             <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6 border-b border-gray-50 dark:border-white/10 pb-6">
                Pure energy and laughter. The ultimate social sport for parties, team building, or just blowing off steam.
             </p>
             <Link href="/dodgeball-courts" className="text-xs font-bold text-orange-500 dark:text-orange-400 uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                Book Court <ArrowRight size={14} />
             </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default HomeFeatures;