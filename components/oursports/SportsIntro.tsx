'use client'

import React from 'react';
import { Layers, ShieldCheck, Thermometer } from 'lucide-react';
import { motion } from 'framer-motion';

const SportsIntro: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#020408] relative transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
             
             {/* Left: Content */}
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="lg:w-3/5"
             >
                <div className="inline-flex items-center gap-2 mb-6">
                   <Layers size={16} className="text-dfw-red" />
                   <span className="text-dfw-navy dark:text-white font-mono text-xs font-bold uppercase tracking-widest">A Place for Everyone</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-header font-bold text-dfw-navy dark:text-white uppercase leading-[0.95] mb-8">
                   One Roof. <br/> <span className="text-gray-400">Endless Energy.</span>
                </h2>
                <div className="prose prose-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10 font-light">
                   <p className="font-semibold text-dfw-navy dark:text-white">
                      We believe that sports are the best way to bring people together. That's why we didn't just build a facility; we built a community hub.
                   </p>
                   <p>
                      Whether you're introducing your child to their first team sport, reconnecting with a game you loved in college, or training at an elite level, you belong here.
                   </p>
                   <p>
                      We've removed the barriers to play: the Texas heat, the unpredictable rain, and the lack of quality courts. What's left is pure sport—<strong>Cricket, Badminton, Soccer, and Dodgeball</strong>—played in perfect comfort, every single day.
                   </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="p-6 bg-gray-50 dark:bg-[#0A111F] border border-gray-100 dark:border-white/10 rounded-sm hover:border-dfw-red/20 transition-colors">
                      <h4 className="font-bold text-dfw-navy dark:text-white uppercase text-sm mb-2 flex items-center gap-2">
                         <ShieldCheck size={16} className="text-dfw-red" /> Safe & Inclusive
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                         A welcoming environment for all ages and skill levels. Beginners are treated with the same respect as pros.
                      </p>
                   </div>
                   <div className="p-6 bg-gray-50 dark:bg-[#0A111F] border border-gray-100 dark:border-white/10 rounded-sm hover:border-dfw-red/20 transition-colors">
                      <h4 className="font-bold text-dfw-navy dark:text-white uppercase text-sm mb-2 flex items-center gap-2">
                         <Thermometer size={16} className="text-dfw-red" /> Consistent Comfort
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                         72°F year-round. Because you shouldn't have to battle the elements to enjoy your game.
                      </p>
                   </div>
                </div>
             </motion.div>

             {/* Right: Quick Answer Box (AEO Optimized) */}
             <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="lg:w-2/5 w-full"
             >
                <div className="bg-dfw-navy dark:bg-[#0A111F] p-8 rounded-lg shadow-2xl relative overflow-hidden text-white group border border-white/5">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-dfw-red/20 rounded-full blur-[50px] pointer-events-none"></div>
                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10"></div>
                   
                   <h3 className="text-xl font-header font-bold uppercase tracking-wider mb-6 border-b border-white/10 pb-4 relative z-10">Facility Overview</h3>
                   
                   <ul className="space-y-4 text-sm font-light text-gray-300 relative z-10">
                      <li className="flex gap-3">
                         <span className="font-bold text-dfw-red min-w-[100px]">Core Sports:</span>
                         Cricket, Badminton, Soccer, Dodgeball
                      </li>
                      <li className="flex gap-3">
                         <span className="font-bold text-dfw-red min-w-[100px]">Age Groups:</span>
                         Youth (6-17), Adults, Seniors
                      </li>
                      <li className="flex gap-3">
                         <span className="font-bold text-dfw-red min-w-[100px]">Skill Levels:</span>
                         Beginner to Professional
                      </li>
                      <li className="flex gap-3">
                         <span className="font-bold text-dfw-red min-w-[100px]">Offerings:</span>
                         Rentals, Leagues, Coaching, Parties
                      </li>
                   </ul>

                   <button 
                      onClick={() => document.getElementById('sports-showcase')?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-full mt-8 py-3 bg-white/10 border border-white/20 text-white font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-white hover:text-dfw-navy transition-colors relative z-10"
                   >
                      Explore The Sports
                   </button>
                </div>
             </motion.div>
          </div>
       </div>
    </section>
  );
};

export default SportsIntro;