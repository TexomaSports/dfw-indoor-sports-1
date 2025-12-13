'use client'

import React from 'react';
import { Cake, Briefcase, Check, Star, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const DodgeballPackages: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0A111F] border-t border-gray-200 dark:border-white/5 transition-colors duration-300" id="packages">
       <div className="container mx-auto px-4 md:px-6">
          
          {/* Birthdays */}
          <div className="mb-24">
             <div className="text-center mb-12">
                <span className="text-orange-500 font-mono text-xs font-bold uppercase tracking-widest mb-3 block">Celebrations</span>
                <h2 className="text-3xl md:text-4xl font-header font-bold text-[#4C1D95] dark:text-white uppercase">Birthday Parties</h2>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                   { name: "Basic", price: "$299", kids: "12", time: "2 Hrs", features: ["1.5 Hrs Game Time", "1 Coach", "Party Room (30m)"] },
                   { name: "Deluxe", price: "$449", kids: "15", time: "2.5 Hrs", features: ["2 Hrs Multi-Sport", "2 Coaches", "Pizza Lunch", "Decorations", "Medals"], highlight: true },
                   { name: "Ultimate", price: "$649", kids: "20", time: "3 Hrs", features: ["3 Hrs Game Time", "3 Coaches", "Premium Catering", "Photos", "Custom Jersey"] }
                ].map((pkg, i) => (
                   <motion.div 
                     key={i} 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className={`bg-white dark:bg-white/5 rounded-lg p-8 border transition-all duration-300 relative overflow-hidden group ${pkg.highlight ? 'border-orange-500 shadow-xl transform md:-translate-y-4' : 'border-gray-200 dark:border-white/10 shadow-sm hover:shadow-md'}`}
                   >
                      {pkg.highlight && <div className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] font-bold uppercase px-3 py-1 rounded-bl-lg">Most Popular</div>}
                      <h3 className="text-xl font-header font-bold text-[#4C1D95] dark:text-white uppercase mb-2">{pkg.name}</h3>
                      <div className="flex items-baseline gap-1 mb-6">
                         <span className="text-3xl font-bold text-gray-900 dark:text-white">{pkg.price}</span>
                         <span className="text-xs text-gray-500 dark:text-gray-400">/ {pkg.kids} Kids</span>
                      </div>
                      <div className="flex items-center gap-2 mb-6 text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-white/10 p-2 rounded">
                         <Clock size={16} className="text-orange-500" /> {pkg.time} Duration
                      </div>
                      <ul className="space-y-3 mb-8">
                         {pkg.features.map((f, idx) => (
                            <li key={idx} className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                               <Check size={16} className="text-green-500 shrink-0" /> {f}
                            </li>
                         ))}
                      </ul>
                      <button className={`w-full py-3 font-bold uppercase text-xs tracking-widest rounded-sm transition-colors ${pkg.highlight ? 'bg-orange-500 text-white hover:bg-orange-600' : 'border border-[#4C1D95] dark:border-violet-400 text-[#4C1D95] dark:text-violet-400 hover:bg-[#4C1D95] hover:text-white dark:hover:bg-violet-400 dark:hover:text-black'}`}>
                         Select Package
                      </button>
                   </motion.div>
                ))}
             </div>
          </div>

          {/* Corporate */}
          <div id="corporate">
             <div className="text-center mb-12">
                <span className="text-violet-500 font-mono text-xs font-bold uppercase tracking-widest mb-3 block">Team Building</span>
                <h2 className="text-3xl md:text-4xl font-header font-bold text-[#4C1D95] dark:text-white uppercase">Corporate Events</h2>
             </div>

             <div className="bg-[#4C1D95] dark:bg-[#050911] rounded-xl overflow-hidden shadow-2xl relative text-white border border-white/10">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 relative z-10">
                   <div className="p-8 hover:bg-white/5 transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                         <div className="p-2 bg-white/10 rounded"><Users size={20} /></div>
                         <h4 className="font-bold text-lg uppercase">Standard</h4>
                      </div>
                      <p className="text-3xl font-bold mb-2">$599</p>
                      <p className="text-xs text-gray-300 mb-6">15-30 Employees | 2-3 Hours</p>
                      <ul className="space-y-2 text-sm text-gray-300 mb-8">
                         <li>• Organized Tournaments</li>
                         <li>• Professional Referees</li>
                         <li>• Casual Food (Pizza/Wings)</li>
                      </ul>
                      <button className="w-full py-2 bg-white/10 hover:bg-white/20 rounded text-xs font-bold uppercase">Request Quote</button>
                   </div>

                   <div className="p-8 hover:bg-white/5 transition-colors bg-white/5">
                      <div className="flex items-center gap-3 mb-4">
                         <div className="p-2 bg-orange-500 rounded text-white"><Briefcase size={20} /></div>
                         <h4 className="font-bold text-lg uppercase">Premium</h4>
                      </div>
                      <p className="text-3xl font-bold mb-2">$899</p>
                      <p className="text-xs text-gray-300 mb-6">20-50 Employees | Half Day</p>
                      <ul className="space-y-2 text-sm text-gray-300 mb-8">
                         <li>• Championship Brackets</li>
                         <li>• Trophies & Awards</li>
                         <li>• Catering Package</li>
                         <li>• Event Photography</li>
                      </ul>
                      <button className="w-full py-2 bg-orange-500 hover:bg-orange-600 rounded text-xs font-bold uppercase">Request Quote</button>
                   </div>

                   <div className="p-8 hover:bg-white/5 transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                         <div className="p-2 bg-white/10 rounded"><Star size={20} /></div>
                         <h4 className="font-bold text-lg uppercase">Executive</h4>
                      </div>
                      <p className="text-3xl font-bold mb-2">$1,499</p>
                      <p className="text-xs text-gray-300 mb-6">10-25 Execs | Full Day</p>
                      <ul className="space-y-2 text-sm text-gray-300 mb-8">
                         <li>• Morning Meeting Room</li>
                         <li>• Catered Lunch</li>
                         <li>• Afternoon Tournament</li>
                         <li>• High-End Facilitation</li>
                      </ul>
                      <button className="w-full py-2 bg-white/10 hover:bg-white/20 rounded text-xs font-bold uppercase">Request Quote</button>
                   </div>
                </div>
             </div>
          </div>

       </div>
    </section>
  );
};

export default DodgeballPackages;