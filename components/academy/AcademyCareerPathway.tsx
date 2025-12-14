'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Users, Star, Trophy, ChevronRight, Target, Medal, Zap, GraduationCap } from 'lucide-react';

const AcademyCareerPathway: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState<string | null>(null);

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
    <section className="bg-gradient-to-b from-white to-gray-50 dark:from-[#0A111F] dark:to-[#0f172a] py-24 border-y border-gray-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
       {/* Background decorative elements */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-dfw-red/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
       </div>

       <div className="container mx-auto px-4 md:px-6 relative z-10">
          
          <div className="text-center mb-20 max-w-3xl mx-auto">
             <motion.div
               initial={{ opacity: 0, y: -10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dfw-red/10 text-dfw-red text-[10px] font-bold uppercase tracking-widest mb-4"
             >
               <Target size={12} />
               Roadmap to Excellence
             </motion.div>
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-4xl md:text-5xl font-header font-bold text-dfw-navy dark:text-white uppercase leading-none mb-6"
             >
                Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-dfw-red to-orange-500">Pathway</span>
             </motion.h2>
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-gray-500 dark:text-gray-400 text-lg"
             >
                A structured journey for players and coaches to reach their highest potential, from grassroot beginnings to professional excellence.
             </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
             {/* Player Pathway */}
             <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={containerVariants}
               className="space-y-8 relative"
             >
                <motion.div variants={itemVariants} className="bg-white dark:bg-white/5 p-8 rounded-2xl border border-gray-100 dark:border-white/10 shadow-xl dark:shadow-none relative overflow-hidden group">
                   <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-dfw-red to-orange-500"></div>
                   <div className="absolute -right-10 -top-10 w-40 h-40 bg-dfw-red/5 rounded-full blur-2xl group-hover:bg-dfw-red/10 transition-colors duration-500"></div>
                   
                   <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-dfw-red/10 rounded-xl text-dfw-red">
                         <Trophy size={24} />
                      </div>
                      <h3 className="text-2xl font-header font-bold text-dfw-navy dark:text-white">Players Pathway</h3>
                   </div>
                   <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                      The Player Pathway highlights the various levels of cricket that a player can pass through as they progress towards making a career in the game. From grassroots to the Elite Player Group, aiming for State, Premier Clubs, National Teams, or IPL.
                   </p>
                </motion.div>

                <div className="flex flex-col items-center justify-end h-[420px] w-full max-w-md mx-auto relative perspective-1000 pt-10">
                    {/* Elite */}
                    <motion.div 
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, zIndex: 60 }}
                      className="w-[20%] h-[70px] bg-gradient-to-b from-[#E53935] to-[#C62828] text-white text-[10px] md:text-xs font-bold flex flex-col items-center justify-center text-center clip-pyramid-top shadow-[0_10px_20px_rgba(198,40,40,0.3)] z-50 mb-[-12px] relative cursor-pointer group"
                      onClick={() => setActiveLevel(activeLevel === 'Elite' ? null : 'Elite')}
                    >
                        <Trophy size={14} className="mb-1 opacity-80 group-hover:opacity-100 transition-opacity" />
                        <span className="tracking-wide">Elite</span>
                    </motion.div>
                    
                    {/* Advance */}
                    <motion.div 
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, zIndex: 50 }}
                      className="w-[35%] h-[75px] bg-gradient-to-b from-[#FF9800] to-[#EF6C00] text-white text-[10px] md:text-xs font-bold flex flex-col items-center justify-center text-center clip-trapezoid shadow-[0_10px_20px_rgba(239,108,0,0.3)] z-40 mb-[-12px] relative cursor-pointer group"
                      onClick={() => setActiveLevel(activeLevel === 'Advance' ? null : 'Advance')}
                    >
                        <Star size={14} className="mb-1 opacity-80 group-hover:opacity-100 transition-opacity" />
                        <span className="tracking-wide">Advance</span>
                    </motion.div>

                    {/* Intermediate B */}
                    <motion.div 
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, zIndex: 40 }}
                      className="w-[50%] h-[80px] bg-gradient-to-b from-[#66BB6A] to-[#2E7D32] text-white text-[10px] md:text-xs font-bold flex flex-col items-center justify-center text-center clip-trapezoid shadow-[0_10px_20px_rgba(46,125,50,0.3)] z-30 mb-[-12px] relative cursor-pointer group"
                      onClick={() => setActiveLevel(activeLevel === 'Intermediate' ? null : 'Intermediate')}
                    >
                        <Medal size={14} className="mb-1 opacity-80 group-hover:opacity-100 transition-opacity" />
                        <span className="tracking-wide">Intermediate B</span>
                    </motion.div>

                    {/* Intermediate A */}
                    <motion.div 
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, zIndex: 30 }}
                      className="w-[65%] h-[85px] bg-gradient-to-b from-[#81C784] to-[#43A047] text-white text-[10px] md:text-xs font-bold flex flex-col items-center justify-center text-center clip-trapezoid shadow-[0_10px_20px_rgba(67,160,71,0.3)] z-20 mb-[-12px] relative cursor-pointer group"
                      onClick={() => setActiveLevel(activeLevel === 'Intermediate' ? null : 'Intermediate')}
                    >
                        <Users size={14} className="mb-1 opacity-80 group-hover:opacity-100 transition-opacity" />
                        <span className="tracking-wide">Intermediate A</span>
                    </motion.div>

                    {/* Beginners */}
                    <motion.div 
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, zIndex: 20 }}
                      className="w-[80%] h-[90px] bg-gradient-to-b from-[#42A5F5] to-[#1565C0] text-white text-[10px] md:text-xs font-bold flex flex-col items-center justify-center text-center clip-trapezoid-bottom shadow-[0_10px_20px_rgba(21,101,192,0.3)] z-10 relative cursor-pointer group"
                      onClick={() => setActiveLevel(activeLevel === 'Beginners' ? null : 'Beginners')}
                    >
                        <User size={14} className="mb-1 opacity-80 group-hover:opacity-100 transition-opacity" />
                        <span className="tracking-wide">Beginners</span>
                    </motion.div>
                </div>
             </motion.div>

             {/* Coaches Pathway */}
             <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={containerVariants}
               className="space-y-8"
             >
                <motion.div variants={itemVariants} className="bg-white dark:bg-white/5 p-8 rounded-2xl border border-gray-100 dark:border-white/10 shadow-xl dark:shadow-none relative overflow-hidden group">
                   <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-400 to-blue-600"></div>
                   <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors duration-500"></div>

                   <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-blue-500/10 rounded-xl text-blue-600 dark:text-blue-400">
                         <GraduationCap size={24} />
                      </div>
                      <h3 className="text-2xl font-header font-bold text-dfw-navy dark:text-white">Coaches Pathway</h3>
                   </div>
                   <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                      CricKingdom coaches pathway is designed to provide a platform to enhance coaching skills. We promote coaches to travel in India and overseas through exchange programs, tours, and tournaments.
                   </p>
                </motion.div>

                <div className="flex flex-col items-center justify-end h-[420px] w-full max-w-md mx-auto pt-10">
                    {[
                      { title: "Mentor", color: "from-[#2E7D32] to-[#1B5E20]", width: "30%", height: "60px", icon: Star },
                      { title: "Head Coach", color: "from-[#C62828] to-[#B71C1C]", width: "45%", height: "70px", icon: Zap },
                      { title: "Senior Coach", color: "from-[#EF6C00] to-[#E65100]", width: "60%", height: "80px", icon: Medal },
                      { title: "Coach", color: "from-[#8BC34A] to-[#689F38]", width: "75%", height: "90px", icon: Users },
                      { title: "Assistant Coach", color: "from-[#1976D2] to-[#0D47A1]", width: "90%", height: "100px", icon: User }
                    ].map((level, index) => (
                      <motion.div 
                        key={level.title}
                        variants={itemVariants}
                        whileHover={{ scale: 1.03, x: 0 }}
                        className={`w-[${level.width}] h-[${level.height}] bg-gradient-to-r ${level.color} text-white text-[10px] md:text-xs font-bold flex items-center justify-between px-6 rounded-lg shadow-lg mb-3 relative overflow-hidden group cursor-pointer`}
                        style={{ width: level.width, height: level.height }}
                      >
                          <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                          <span className="flex items-center gap-2">
                            <level.icon size={14} className="opacity-80" />
                            {level.title}
                          </span>
                          <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transition-transform" />
                      </motion.div>
                    ))}
                </div>
             </motion.div>
          </div>

          {/* Detailed Breakdown */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
             {/* Beginners Card */}
             <motion.div variants={itemVariants} className={`bg-white dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10 p-1 overflow-hidden hover:shadow-xl transition-all duration-300 ${activeLevel && activeLevel !== 'Beginners' ? 'opacity-40 grayscale blur-[1px]' : 'opacity-100 scale-100 ring-2 ring-blue-500/20'}`}>
                <div className="h-2 bg-gradient-to-r from-[#42A5F5] to-[#1565C0] rounded-t-xl"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                     <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-[#1565C0]">
                        <User size={24} />
                     </div>
                     <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Level 1</span>
                  </div>
                  <h4 className="text-xl font-header font-bold text-dfw-navy dark:text-white mb-4">Beginners</h4>
                  
                  <div className="space-y-4">
                     <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-white/5 p-3 rounded-lg">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1565C0]"></div>
                        Age 5-8 (Soft ball)
                     </div>
                     
                     <div className="space-y-2 pl-2">
                        {["Basics skills training", "In-house matches", "Carnivals"].map((item, i) => (
                           <div key={i} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                              <ChevronRight size={12} className="text-[#1565C0]" />
                              {item}
                           </div>
                        ))}
                     </div>
                  </div>
                </div>
             </motion.div>

             {/* Intermediate Card */}
             <motion.div variants={itemVariants} className={`bg-white dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10 p-1 overflow-hidden hover:shadow-xl transition-all duration-300 ${activeLevel && activeLevel !== 'Intermediate' ? 'opacity-40 grayscale blur-[1px]' : 'opacity-100 scale-100 ring-2 ring-green-500/20'}`}>
                <div className="h-2 bg-gradient-to-r from-[#66BB6A] to-[#2E7D32] rounded-t-xl"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                     <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg text-[#2E7D32]">
                        <Users size={24} />
                     </div>
                     <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Level 2</span>
                  </div>
                  <h4 className="text-xl font-header font-bold text-dfw-navy dark:text-white mb-4">Intermediate</h4>
                  
                  <div className="space-y-4">
                     <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-white/5 p-3 rounded-lg">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]"></div>
                        Age 9-12 (Hard ball)
                     </div>
                     
                     <div className="space-y-2 pl-2">
                        {["Net practice sessions", "Local tournaments", "Domestic & Int. tours"].map((item, i) => (
                           <div key={i} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                              <ChevronRight size={12} className="text-[#2E7D32]" />
                              {item}
                           </div>
                        ))}
                     </div>
                  </div>
                </div>
             </motion.div>

             {/* Advance Card */}
             <motion.div variants={itemVariants} className={`bg-white dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10 p-1 overflow-hidden hover:shadow-xl transition-all duration-300 ${activeLevel && activeLevel !== 'Advance' ? 'opacity-40 grayscale blur-[1px]' : 'opacity-100 scale-100 ring-2 ring-orange-500/20'}`}>
                <div className="h-2 bg-gradient-to-r from-[#FF9800] to-[#EF6C00] rounded-t-xl"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                     <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-[#EF6C00]">
                        <Star size={24} />
                     </div>
                     <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Level 3</span>
                  </div>
                  <h4 className="text-xl font-header font-bold text-dfw-navy dark:text-white mb-4">Advance</h4>
                  
                  <div className="space-y-4">
                     <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-white/5 p-3 rounded-lg">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#EF6C00]"></div>
                        Age 13 & above
                     </div>
                     
                     <div className="space-y-2 pl-2">
                        {["Club representation", "Celebrity coach sessions", "Fitness/Bio-Mechanics"].map((item, i) => (
                           <div key={i} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                              <ChevronRight size={12} className="text-[#EF6C00]" />
                              {item}
                           </div>
                        ))}
                     </div>
                  </div>
                </div>
             </motion.div>

             {/* Elite Card */}
             <motion.div variants={itemVariants} className={`bg-white dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10 p-1 overflow-hidden hover:shadow-xl transition-all duration-300 ${activeLevel && activeLevel !== 'Elite' ? 'opacity-40 grayscale blur-[1px]' : 'opacity-100 scale-100 ring-2 ring-red-500/20'}`}>
                <div className="h-2 bg-gradient-to-r from-[#E53935] to-[#C62828] rounded-t-xl"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                     <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-lg text-[#C62828]">
                        <Trophy size={24} />
                     </div>
                     <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Level 4</span>
                  </div>
                  <h4 className="text-xl font-header font-bold text-dfw-navy dark:text-white mb-4">Elite</h4>
                  
                  <div className="space-y-4">
                     <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-white/5 p-3 rounded-lg">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C62828]"></div>
                        Professional
                     </div>
                     
                     <div className="space-y-2 pl-2">
                        {["State/National Player", "Specialized Sessions", "International Tours"].map((item, i) => (
                           <div key={i} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                              <ChevronRight size={12} className="text-[#C62828]" />
                              {item}
                           </div>
                        ))}
                     </div>
                  </div>
                </div>
             </motion.div>
          </motion.div>
       </div>

       <style jsx global>{`
          .clip-pyramid-top {
            clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
          }
          .clip-trapezoid {
            clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
          }
          .clip-trapezoid-bottom {
             clip-path: polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%);
          }
          .perspective-1000 {
            perspective: 1000px;
          }
       `}</style>
    </section>
  );
};

export default AcademyCareerPathway;