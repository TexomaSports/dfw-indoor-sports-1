import React from 'react';
import { Sun, Heart, Users, MapPin, Clock, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const HomeIntro: React.FC = () => {
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
    <section className="relative py-24 md:py-32 bg-white dark:bg-[#020408] transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
           
           {/* Left Content - Human Connection Focus */}
           <motion.div 
             className="lg:w-3/5"
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-100px" }}
             variants={containerVariants}
           >
              <motion.span variants={itemVariants} className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-4 block">Our Philosophy</motion.span>
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-header font-bold text-dfw-navy dark:text-white uppercase leading-[0.95] mb-8">
                 A Place Where <br/> Everyone <span className="text-transparent bg-clip-text bg-gradient-to-r from-dfw-navy to-gray-500 dark:from-white dark:to-gray-400">Belongs</span>
              </motion.h2>
              
              <motion.div variants={itemVariants} className="prose prose-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
                 <p>
                    DFW Indoor Sports isn't just a facility; it's a living, breathing community in the heart of Fort Worth. It's the sound of sneakers on the court, the high-fives after a good play, and the friendships formed over a shared love of the game.
                 </p>
                 <p>
                    We built this space for you. Whether you're a parent looking for a safe place for your kids to grow, a professional refining your craft, or friends gathering for a weekend match, we've designed every inch to be welcoming, comfortable, and inspiring.
                 </p>
              </motion.div>

              <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <motion.div variants={itemVariants} className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full"><Sun size={24} /></div>
                    <div>
                       <h3 className="font-bold text-dfw-navy dark:text-white uppercase text-sm mb-1">Comfort First</h3>
                       <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">Escape the Texas heat or winter chill. Our climate-controlled space keeps you comfortable year-round.</p>
                    </div>
                 </motion.div>
                 <motion.div variants={itemVariants} className="flex items-start gap-4">
                    <div className="p-3 bg-red-50 dark:bg-red-900/20 text-dfw-red dark:text-red-400 rounded-full"><Heart size={24} /></div>
                    <div>
                       <h3 className="font-bold text-dfw-navy dark:text-white uppercase text-sm mb-1">Quality You Feel</h3>
                       <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">From the flooring to the lighting, we've chosen materials that care for your joints and enhance your game.</p>
                    </div>
                 </motion.div>
                 <motion.div variants={itemVariants} className="flex items-start gap-4">
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full"><Users size={24} /></div>
                    <div>
                       <h3 className="font-bold text-dfw-navy dark:text-white uppercase text-sm mb-1">Community Focused</h3>
                       <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">We are more than a rental space. We are a hub for leagues, events, and making connections.</p>
                    </div>
                 </motion.div>
              </motion.div>
           </motion.div>

           {/* Right: Quick Answer Box (AEO Optimized) */}
           <motion.div 
             className="lg:w-2/5 w-full"
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
              {/* Structured Data Container for Answer Engines */}
              <div className="bg-dfw-navy dark:bg-[#0A111F] border border-white/10 dark:border-white/5 p-8 md:p-10 rounded-2xl shadow-2xl relative overflow-hidden text-white group hover:shadow-dfw-red/10 transition-shadow">
                 {/* Decorative */}
                 <div className="absolute top-0 right-0 w-40 h-40 bg-dfw-red/10 rounded-full blur-[60px] pointer-events-none"></div>
                 <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-[60px] pointer-events-none"></div>
                 
                 <h3 className="text-2xl font-header font-bold uppercase tracking-wider mb-8 border-b border-white/10 pb-4 relative z-10">
                    At A Glance
                 </h3>

                 <ul className="space-y-6 relative z-10">
                    <li className="flex gap-4 items-center">
                       <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center"><Users size={14} className="text-white" /></div>
                       <div>
                          <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Core Sports</span>
                          <p className="text-sm font-medium leading-snug">Cricket, Badminton, Soccer, Dodgeball</p>
                       </div>
                    </li>
                    <li className="flex gap-4 items-center">
                       <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center"><MapPin size={14} className="text-white" /></div>
                       <div>
                          <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Location</span>
                          <p className="text-sm font-medium leading-snug">16230 Three Wide Dr Suite 200, Fort Worth</p>
                       </div>
                    </li>
                    <li className="flex gap-4 items-center">
                       <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center"><DollarSign size={14} className="text-white" /></div>
                       <div>
                          <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Access</span>
                          <p className="text-sm font-medium leading-snug">Drop-in from $25/hr, Members from $70/mo</p>
                       </div>
                    </li>
                    <li className="flex gap-4 items-center">
                       <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center"><Clock size={14} className="text-white" /></div>
                       <div>
                          <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Operating Hours</span>
                          <p className="text-sm font-medium leading-snug">5 AM - 11 PM daily</p>
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

export default HomeIntro;