'use client'

import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const InvestmentLevels: React.FC = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0A111F] border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-12 text-center"
          >
            Investment Levels
          </motion.h2>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end"
          >
             
             {/* Bronze */}
             <motion.div variants={itemVariants} className="bg-white dark:bg-white/5 p-8 rounded-lg border border-gray-200 dark:border-white/10 shadow-sm hover:border-dfw-navy dark:hover:border-white/30 transition-all relative group h-min">
                <h3 className="font-header font-bold text-xl text-dfw-navy dark:text-white uppercase mb-2">Bronze</h3>
                <div className="text-3xl font-bold text-gray-700 dark:text-gray-200 mb-6">$500<span className="text-xs font-normal text-gray-400 ml-1">/mo</span></div>
                <ul className="space-y-4 mb-8">
                   {["Homepage Logo", "Sponsor Page Profile", "Social Media (2x)", "Newsletter Banner"].map((item, i) => (
                      <li key={i} className="flex gap-3 text-xs text-gray-600 dark:text-gray-400"><Check size={14} className="text-gray-400 dark:text-gray-500" /> {item}</li>
                   ))}
                </ul>
                <Link href="/partners#contact-partners" className="w-full py-3 border border-gray-200 dark:border-white/20 text-gray-600 dark:text-gray-300 font-bold uppercase text-[10px] tracking-widest rounded-sm hover:bg-gray-100 dark:hover:bg-white/10 transition-colors block text-center">Select Bronze</Link>
             </motion.div>

             {/* Silver */}
             <motion.div variants={itemVariants} className="bg-white dark:bg-white/5 p-8 rounded-lg border border-gray-200 dark:border-white/10 shadow-sm hover:border-dfw-navy dark:hover:border-white/30 transition-all relative group h-min">
                <h3 className="font-header font-bold text-xl text-dfw-navy dark:text-white uppercase mb-2">Silver</h3>
                <div className="text-3xl font-bold text-gray-700 dark:text-gray-200 mb-6">$1,000<span className="text-xs font-normal text-gray-400 ml-1">/mo</span></div>
                <ul className="space-y-4 mb-8">
                   <li className="flex gap-3 text-xs text-gray-900 dark:text-white font-bold"><Check size={14} className="text-dfw-navy dark:text-white" /> All Bronze Benefits</li>
                   {["1 Field/Court Board", "Marketing Screen Ad", "T-Shirt Logo (1 Prog)"].map((item, i) => (
                      <li key={i} className="flex gap-3 text-xs text-gray-600 dark:text-gray-400"><Check size={14} className="text-dfw-navy dark:text-gray-400" /> {item}</li>
                   ))}
                </ul>
                <Link href="/partners#contact-partners" className="w-full py-3 border border-gray-200 dark:border-white/20 text-gray-600 dark:text-gray-300 font-bold uppercase text-[10px] tracking-widest rounded-sm hover:bg-gray-100 dark:hover:bg-white/10 transition-colors block text-center">Select Silver</Link>
             </motion.div>

             {/* Gold - Highlight */}
             <motion.div variants={itemVariants} className="bg-dfw-navy dark:bg-[#0A111F] p-8 rounded-lg border border-dfw-navy dark:border-dfw-red/30 shadow-2xl relative transform lg:-translate-y-4 overflow-hidden">
                <div className="absolute top-0 right-0 bg-gradient-to-r from-dfw-red to-red-600 text-white text-[9px] font-bold uppercase px-3 py-1 rounded-bl-sm shadow-md">Best Value</div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
                
                <h3 className="font-header font-bold text-2xl text-white uppercase mb-2 relative z-10">Gold</h3>
                <div className="text-4xl font-bold text-white mb-6 relative z-10">$2,500<span className="text-xs font-normal text-gray-400 ml-1">/mo</span></div>
                
                <div className="h-px w-full bg-white/10 mb-6 relative z-10"></div>

                <ul className="space-y-4 mb-8 relative z-10">
                   <li className="flex gap-3 text-xs text-white font-bold"><Check size={14} className="text-dfw-red" /> All Silver Benefits</li>
                   {["Multiple Field Boards", "Facility Banner", "League Presenting Sponsor", "2 VIP Memberships"].map((item, i) => (
                      <li key={i} className="flex gap-3 text-xs text-gray-300"><Check size={14} className="text-dfw-red" /> {item}</li>
                   ))}
                </ul>
                <Link href="/partners#contact-partners" className="w-full py-4 bg-dfw-red text-white font-bold uppercase text-[10px] tracking-widest rounded-sm hover:bg-red-600 transition-colors shadow-lg relative z-10 block text-center">Select Gold</Link>
             </motion.div>

             {/* Platinum */}
             <motion.div variants={itemVariants} className="bg-white dark:bg-white/5 p-8 rounded-lg border border-gray-200 dark:border-white/10 shadow-sm hover:border-dfw-navy dark:hover:border-white/30 transition-all relative group h-min">
                <h3 className="font-header font-bold text-xl text-dfw-navy dark:text-white uppercase mb-2">Platinum</h3>
                <div className="text-3xl font-bold text-gray-700 dark:text-gray-200 mb-6">$5,000+<span className="text-xs font-normal text-gray-400 ml-1">/mo</span></div>
                <ul className="space-y-4 mb-8">
                   <li className="flex gap-3 text-xs text-gray-900 dark:text-white font-bold"><Check size={14} className="text-dfw-navy dark:text-white" /> All Gold Benefits</li>
                   {["Category Exclusivity", "Naming Rights", "5 VIP Memberships", "Private Facility Event"].map((item, i) => (
                      <li key={i} className="flex gap-3 text-xs text-gray-600 dark:text-gray-400"><Check size={14} className="text-dfw-navy dark:text-gray-400" /> {item}</li>
                   ))}
                </ul>
                <Link href="/partners#contact-partners" className="w-full py-3 border border-gray-200 dark:border-white/20 text-gray-600 dark:text-gray-300 font-bold uppercase text-[10px] tracking-widest rounded-sm hover:bg-gray-100 dark:hover:bg-white/10 transition-colors block text-center">Contact Us</Link>
             </motion.div>

          </motion.div>
       </div>
    </section>
  );
};

export default InvestmentLevels;