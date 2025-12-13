import React from 'react';
import { Target, Wind, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const MembershipsValue: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0A111F] border-y border-gray-200 dark:border-white/5 transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
             <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-3 block">ROI Analysis</span>
             <h2 className="text-3xl md:text-5xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6">See The Savings</h2>
             <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Compare drop-in costs vs. membership for typical usage scenarios.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
             {/* Cricket Scenario */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-white dark:bg-white/5 p-8 rounded-lg border border-gray-200 dark:border-white/10 hover:shadow-lg transition-all duration-300"
             >
                <div className="flex items-center gap-3 mb-6">
                   <Target className="text-dfw-navy dark:text-white" size={24} />
                   <h3 className="font-header font-bold text-xl text-dfw-navy dark:text-white uppercase">Serious Cricketer</h3>
                </div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Training 3x Weekly</p>
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-100 dark:border-white/10">
                   <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>Lane Rental (12x/mo)</span>
                      <span>$480</span>
                   </div>
                   <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>Bowling Machine</span>
                      <span>$180</span>
                   </div>
                   <div className="flex justify-between font-bold text-dfw-navy dark:text-white pt-2">
                      <span>Monthly Drop-In Cost</span>
                      <span>$660</span>
                   </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-sm border border-green-100 dark:border-green-900/30">
                   <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-dfw-navy dark:text-white text-sm">Cricket Unlimited</span>
                      <span className="font-header font-bold text-2xl text-green-600 dark:text-green-400">$129</span>
                   </div>
                   <p className="text-xs text-green-700 dark:text-green-400 font-bold uppercase tracking-wide">Save $531 / Month</p>
                </div>
             </motion.div>

             {/* Badminton Scenario */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="bg-white dark:bg-white/5 p-8 rounded-lg border border-gray-200 dark:border-white/10 hover:shadow-lg transition-all duration-300"
             >
                <div className="flex items-center gap-3 mb-6">
                   <Wind className="text-dfw-navy dark:text-white" size={24} />
                   <h3 className="font-header font-bold text-xl text-dfw-navy dark:text-white uppercase">Regular Player</h3>
                </div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Playing 3x Weekly</p>
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-100 dark:border-white/10">
                   <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>Court Rental (18 hrs)</span>
                      <span>$450</span>
                   </div>
                   <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>Guest Fees</span>
                      <span>$30</span>
                   </div>
                   <div className="flex justify-between font-bold text-dfw-navy dark:text-white pt-2">
                      <span>Monthly Drop-In Cost</span>
                      <span>$480</span>
                   </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-sm border border-blue-100 dark:border-blue-900/30">
                   <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-dfw-navy dark:text-white text-sm">Badminton Membership</span>
                      <span className="font-header font-bold text-2xl text-blue-600 dark:text-blue-400">$70</span>
                   </div>
                   <p className="text-xs text-blue-700 dark:text-blue-400 font-bold uppercase tracking-wide">Save $410 / Month</p>
                </div>
             </motion.div>

             {/* Family Scenario */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="bg-white dark:bg-white/5 p-8 rounded-lg border border-gray-200 dark:border-white/10 hover:shadow-lg transition-all duration-300"
             >
                <div className="flex items-center gap-3 mb-6">
                   <Heart className="text-dfw-navy dark:text-white" size={24} />
                   <h3 className="font-header font-bold text-xl text-dfw-navy dark:text-white uppercase">Active Family</h3>
                </div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">2 Adults + 2 Kids (2x Wk)</p>
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-100 dark:border-white/10">
                   <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>Family Cricket (4 hrs)</span>
                      <span>$160</span>
                   </div>
                   <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>Badminton (4 hrs)</span>
                      <span>$100</span>
                   </div>
                   <div className="flex justify-between font-bold text-dfw-navy dark:text-white pt-2">
                      <span>Monthly Drop-In Cost</span>
                      <span>$500+</span>
                   </div>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-sm border border-yellow-100 dark:border-yellow-900/30">
                   <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-dfw-navy dark:text-white text-sm">Family Gold</span>
                      <span className="font-header font-bold text-2xl text-yellow-600 dark:text-yellow-400">$129</span>
                   </div>
                   <p className="text-xs text-yellow-700 dark:text-yellow-400 font-bold uppercase tracking-wide">Save $371 / Month</p>
                </div>
             </motion.div>
          </div>
       </div>
    </section>
  );
};

export default MembershipsValue;