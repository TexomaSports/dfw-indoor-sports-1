import React from 'react';
import { Users, Heart, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SportsCommunity: React.FC = () => {
  return (
    <section className="bg-gray-50 dark:bg-[#0A111F] py-24 border-y border-gray-200 dark:border-white/5 transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6">
          
          <div className="flex flex-col lg:flex-row gap-16">
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:w-1/2"
             >
                <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-4 block">The "Gold" Standard</span>
                <h2 className="text-4xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6">Your Passport To Play</h2>
                <p className="text-gray-500 dark:text-gray-400 text-lg mb-8">
                   We know athletes don't always stick to just one thing. Sometimes you want to bat, sometimes you want to dodge.
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-lg mb-8">
                   Our <strong>Gold Membership ($109/mo)</strong> isn't just a pass; it's a key to the entire facility. Unlimited access to all four sports means you never have to choose.
                </p>
                <div className="bg-white dark:bg-white/5 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-white/10 mb-8">
                   <div className="flex justify-between items-end border-b border-gray-100 dark:border-white/10 pb-4 mb-4">
                      <div>
                         <p className="text-xs text-gray-400 uppercase tracking-widest">Typical Cost (Drop-in)</p>
                         <p className="font-bold text-gray-700 dark:text-gray-200">2 Sports / 2x Week</p>
                      </div>
                      <div className="text-right">
                         <span className="text-2xl font-bold text-gray-400 line-through">$260</span>
                      </div>
                   </div>
                   <div className="flex justify-between items-end">
                      <div>
                         <p className="text-xs text-dfw-red uppercase tracking-widest font-bold">Gold Member</p>
                         <p className="font-bold text-dfw-navy dark:text-white">Unlimited Access</p>
                      </div>
                      <div className="text-right">
                         <span className="text-4xl font-header font-bold text-dfw-navy dark:text-white">$109</span>
                         <span className="text-xs text-gray-500 dark:text-gray-400">/mo</span>
                      </div>
                   </div>
                </div>
                <Link to="/memberships" className="text-dfw-red font-bold text-sm uppercase tracking-widest hover:text-dfw-navy dark:hover:text-white transition-colors">See all membership benefits &rarr;</Link>
             </motion.div>

             <div className="lg:w-1/2">
                <div className="grid grid-cols-1 gap-6">
                   <motion.div 
                     initial={{ opacity: 0, x: 30 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="flex gap-6 p-6 bg-white dark:bg-white/5 rounded-lg shadow-sm border border-gray-100 dark:border-white/10 hover:-translate-y-1 transition-transform cursor-default"
                   >
                      <div className="w-12 h-12 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center shrink-0">
                         <Star size={24} />
                      </div>
                      <div>
                         <h3 className="font-header font-bold text-lg text-dfw-navy dark:text-white uppercase mb-1">For The Youth</h3>
                         <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                            Multi-sport participation builds better athletes. Let them develop coordination in cricket and agility in soccer without paying double.
                         </p>
                      </div>
                   </motion.div>
                   <motion.div 
                     initial={{ opacity: 0, x: 30 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.1 }}
                     className="flex gap-6 p-6 bg-white dark:bg-white/5 rounded-lg shadow-sm border border-gray-100 dark:border-white/10 hover:-translate-y-1 transition-transform cursor-default"
                   >
                      <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center shrink-0">
                         <Users size={24} />
                      </div>
                      <div>
                         <h3 className="font-header font-bold text-lg text-dfw-navy dark:text-white uppercase mb-1">For The Community</h3>
                         <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                            Our "social hours" and drop-in nights are legendary. It's the easiest way to meet active people in Fort Worth.
                         </p>
                      </div>
                   </motion.div>
                   <motion.div 
                     initial={{ opacity: 0, x: 30 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 }}
                     className="flex gap-6 p-6 bg-white dark:bg-white/5 rounded-lg shadow-sm border border-gray-100 dark:border-white/10 hover:-translate-y-1 transition-transform cursor-default"
                   >
                      <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full flex items-center justify-center shrink-0">
                         <Heart size={24} />
                      </div>
                      <div>
                         <h3 className="font-header font-bold text-lg text-dfw-navy dark:text-white uppercase mb-1">For Health</h3>
                         <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                            Low impact on joints (Badminton), high cardio (Soccer), mental focus (Cricket). A balanced approach to lifelong fitness.
                         </p>
                      </div>
                   </motion.div>
                </div>
             </div>
          </div>

       </div>
    </section>
  );
};

export default SportsCommunity;