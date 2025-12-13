'use client'

import React from 'react';
import { Users, Briefcase, Heart, Zap, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const EventsCorporate: React.FC = () => {
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
    <section className="py-24 bg-[#0A111F] text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]"></div>
         <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none"></div>

         <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="max-w-2xl"
               >
                  <span className="text-blue-500 font-mono text-xs font-bold uppercase tracking-widest mb-4 block">Corporate Solutions</span>
                  <h2 className="text-4xl md:text-5xl font-header font-bold text-white uppercase leading-none">
                     Team Building <br/> That Actually <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Works</span>
                  </h2>
               </motion.div>
               <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="hidden md:block"
               >
                  <p className="text-gray-400 text-sm max-w-md text-right">
                     Forget trust falls. Authentic competition builds real bonds. 
                     From sales kickoffs to executive retreats, we host it all.
                  </p>
               </motion.div>
            </div>

            <motion.div 
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            >
               
               {/* Team Building */}
               <motion.div variants={itemVariants} className="group relative bg-white/5 border border-white/10 rounded-sm p-6 hover:bg-white/10 transition-colors duration-300">
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                  <div className="flex justify-between items-start mb-4">
                     <div className="p-2 bg-blue-900/30 text-blue-400 rounded-sm border border-blue-500/20">
                        <Users size={20} />
                     </div>
                     <span className="text-[10px] font-mono text-gray-400 uppercase">20-40 People</span>
                  </div>
                  <h3 className="text-lg font-header font-bold text-white uppercase mb-2">Team Tournament</h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-4 h-12">
                     Half-day multi-sport tournament. Professional refereeing, brackets, and trophies.
                  </p>
                  <div className="text-sm font-bold text-white">From $799</div>
               </motion.div>

               {/* Executive */}
               <motion.div variants={itemVariants} className="group relative bg-white/5 border border-white/10 rounded-sm p-6 hover:bg-white/10 transition-colors duration-300">
                  <div className="absolute top-0 left-0 w-1 h-full bg-amber-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                  <div className="flex justify-between items-start mb-4">
                     <div className="p-2 bg-amber-900/30 text-amber-400 rounded-sm border border-amber-500/20">
                        <Briefcase size={20} />
                     </div>
                     <span className="text-[10px] font-mono text-gray-400 uppercase">10-25 Execs</span>
                  </div>
                  <h3 className="text-lg font-header font-bold text-white uppercase mb-2">Executive Off-Site</h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-4 h-12">
                     Morning boardroom access, catered lunch, and afternoon competition.
                  </p>
                  <div className="text-sm font-bold text-white">From $1,499</div>
               </motion.div>

               {/* Department Social */}
               <motion.div variants={itemVariants} className="group relative bg-white/5 border border-white/10 rounded-sm p-6 hover:bg-white/10 transition-colors duration-300">
                  <div className="absolute top-0 left-0 w-1 h-full bg-purple-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                  <div className="flex justify-between items-start mb-4">
                     <div className="p-2 bg-purple-900/30 text-purple-400 rounded-sm border border-purple-500/20">
                        <Heart size={20} />
                     </div>
                     <span className="text-[10px] font-mono text-gray-400 uppercase">15-30 People</span>
                  </div>
                  <h3 className="text-lg font-header font-bold text-white uppercase mb-2">Dept. Social</h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-4 h-12">
                     Casual recreational play with food and drinks. Stress-free fun.
                  </p>
                  <div className="text-sm font-bold text-white">From $599</div>
               </motion.div>

               {/* Sales Incentive */}
               <motion.div variants={itemVariants} className="group relative bg-white/5 border border-white/10 rounded-sm p-6 hover:bg-white/10 transition-colors duration-300">
                  <div className="absolute top-0 left-0 w-1 h-full bg-green-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                  <div className="flex justify-between items-start mb-4">
                     <div className="p-2 bg-green-900/30 text-green-400 rounded-sm border border-green-500/20">
                        <Zap size={20} />
                     </div>
                     <span className="text-[10px] font-mono text-gray-400 uppercase">20-50 People</span>
                  </div>
                  <h3 className="text-lg font-header font-bold text-white uppercase mb-2">Sales Kickoff</h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-4 h-12">
                     High-energy competition with performance-based brackets and prizes.
                  </p>
                  <div className="text-sm font-bold text-white">From $899</div>
               </motion.div>

            </motion.div>

            {/* Process Steps */}
            <div className="border-t border-white/10 pt-12">
               <h3 className="text-center font-header font-bold text-white uppercase mb-12">Planning Process</h3>
               <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center relative">
                  {/* Connector Line (Desktop) */}
                  <div className="hidden md:block absolute top-4 left-0 w-full h-[1px] bg-white/10 -z-0"></div>
                  
                  {[
                     { step: "01", title: "Consultation", desc: "Goal setting & budget" },
                     { step: "02", title: "Proposal", desc: "Custom format & agenda" },
                     { step: "03", title: "Coordination", desc: "Catering & logistics" },
                     { step: "04", title: "Execution", desc: "Professional hosting" },
                     { step: "05", title: "Follow-Up", desc: "Photos & feedback" }
                  ].map((item, i) => (
                     <div key={i} className="relative group z-10 flex flex-col items-center">
                        <div className="w-9 h-9 bg-[#0A111F] border-2 border-white/20 rounded-full flex items-center justify-center text-xs font-bold text-gray-400 mb-4 group-hover:border-dfw-red group-hover:text-dfw-red transition-colors">
                           {item.step}
                        </div>
                        <h4 className="text-sm font-bold text-white uppercase mb-1">{item.title}</h4>
                        <p className="text-xs text-gray-500">{item.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
  );
};

export default EventsCorporate;