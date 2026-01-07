'use client'

import React from 'react';
import { Calculator, Target, Users, Check, Smile } from 'lucide-react';
import { motion } from 'framer-motion';

const MembershipsIntro: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#020408] relative transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
             
             {/* Left: The Narrative */}
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="lg:w-3/5"
             >
                <div className="inline-flex items-center gap-2 mb-6">
                   <Smile size={16} className="text-dfw-red" />
                   <span className="text-dfw-navy dark:text-white font-mono text-xs font-bold uppercase tracking-widest">Commit to Yourself</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-header font-bold text-dfw-navy dark:text-white uppercase leading-[0.95] mb-8">
                   Remove the Friction <br/> from your <span className="text-gray-400">Game.</span>
                </h2>
                <div className="prose prose-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-10 font-light">
                   <p>
                      We know the feeling. You want to play, but you worry about the hourly cost. Or you want to practice, but you're unsure if a lane is free.
                   </p>
                   <p>
                      Membership at DFW Indoor Sports is designed to remove those barriers. When you don't have to pull out your credit card every time you walk in the door, you play more. When you play more, you get better. And when you get better, you have more fun.
                   </p>
                   <p>
                      <strong className="text-dfw-navy dark:text-white">The math is simple:</strong> if you play more than twice a month, membership pays for itself. But the real value is the freedom to treat this facility as your own.
                   </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="p-6 bg-gray-50 dark:bg-[#0A111F] border border-gray-100 dark:border-white/10 rounded-sm hover:border-dfw-red/20 transition-colors">
                      <h4 className="font-bold text-dfw-navy dark:text-white uppercase text-sm mb-2 flex items-center gap-2">
                         <Target size={16} className="text-dfw-red" /> Priority Access
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                         Don't get stuck on the waitlist. Members get a 14-day advance booking window to secure prime evening spots.
                      </p>
                   </div>
                   <div className="p-6 bg-gray-50 dark:bg-[#0A111F] border border-gray-100 dark:border-white/10 rounded-sm hover:border-dfw-red/20 transition-colors">
                      <h4 className="font-bold text-dfw-navy dark:text-white uppercase text-sm mb-2 flex items-center gap-2">
                         <Users size={16} className="text-dfw-red" /> The Tribe
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                         Exclusive access to member tournaments, social mixers, and a network of players to challenge.
                      </p>
                   </div>
                </div>
             </motion.div>

             {/* Right: Quick Facts Box (AEO Optimized) */}
             <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="lg:w-2/5 w-full"
             >
                <div className="bg-dfw-navy dark:bg-[#0A111F] p-8 rounded-lg shadow-2xl relative overflow-hidden text-white group border border-white/5">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-dfw-red/20 rounded-full blur-[50px] pointer-events-none"></div>
                   <div className="absolute inset-0 bg-[url('/textures/graphy.png')] opacity-10"></div>
                   
                   <h3 className="text-xl font-header font-bold uppercase tracking-wider mb-6 border-b border-white/10 pb-4 relative z-10">Membership at a Glance</h3>
                   
                   <ul className="space-y-6 relative z-10">
                      <li className="flex gap-4">
                         <div className="p-2 bg-white/10 rounded-md h-fit"><Check size={18} className="text-dfw-red" /></div>
                         <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Who is it for?</h4>
                            <p className="text-sm font-medium text-gray-300">Consistent players (2+ visits/mo), families, and serious athletes.</p>
                         </div>
                      </li>
                      <li className="flex gap-4">
                         <div className="p-2 bg-white/10 rounded-md h-fit"><Check size={18} className="text-dfw-red" /></div>
                         <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">What's Included?</h4>
                            <p className="text-sm font-medium text-gray-300">Unlimited courts, no hourly fees, bowling machine included (cricket).</p>
                         </div>
                      </li>
                      <li className="flex gap-4">
                         <div className="p-2 bg-white/10 rounded-md h-fit"><Check size={18} className="text-dfw-red" /></div>
                         <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Flexibility</h4>
                            <p className="text-sm font-medium text-gray-300">Monthly plans available. Cancel with 30 days notice.</p>
                         </div>
                      </li>
                   </ul>
                </div>
             </motion.div>
          </div>
       </div>
    </section>
  );
};

export default MembershipsIntro;