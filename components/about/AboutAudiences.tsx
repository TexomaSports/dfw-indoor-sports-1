import React from 'react';
import { Star, Users, Heart, Trophy, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutAudiences: React.FC = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-white dark:bg-[#020408] border-y border-gray-100 dark:border-white/5 transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
             <h2 className="text-4xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-4">Athletes at Every Stage</h2>
             <p className="text-gray-500 dark:text-gray-400">From first-timers to national contenders, families to pros.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
          >
             {/* Youth */}
             <motion.div variants={itemVariants} className="bg-white dark:bg-white/5 p-8 rounded-sm shadow-sm border border-gray-100 dark:border-white/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-6">
                   <Star size={24} />
                </div>
                <h3 className="text-xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-4">Youth (6-17)</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                   Building champions through fundamental skills, discipline, and teamwork.
                </p>
                <ul className="space-y-2 mb-6">
                   <li className="flex items-center gap-2 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wide"><CheckCircle2 size={12} className="text-green-500" /> Elementary</li>
                   <li className="flex items-center gap-2 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wide"><CheckCircle2 size={12} className="text-green-500" /> High School</li>
                </ul>
             </motion.div>

             {/* Adult */}
             <motion.div variants={itemVariants} className="bg-white dark:bg-white/5 p-8 rounded-sm shadow-sm border border-gray-100 dark:border-white/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-6">
                   <Users size={24} />
                </div>
                <h3 className="text-xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-4">Adult Rec</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                   Rediscover sports, stay active, and have fun. Leagues for young professionals to seniors.
                </p>
                <ul className="space-y-2 mb-6">
                   <li className="flex items-center gap-2 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wide"><CheckCircle2 size={12} className="text-blue-500" /> Social Leagues</li>
                   <li className="flex items-center gap-2 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wide"><CheckCircle2 size={12} className="text-blue-500" /> Fitness</li>
                </ul>
             </motion.div>

             {/* Families */}
             <motion.div variants={itemVariants} className="bg-white dark:bg-white/5 p-8 rounded-sm shadow-sm border border-gray-100 dark:border-white/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full flex items-center justify-center mb-6">
                   <Heart size={24} />
                </div>
                <h3 className="text-xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-4">Families</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                   Activities the whole family enjoys. Parents practice while kids train.
                </p>
                <ul className="space-y-2 mb-6">
                   <li className="flex items-center gap-2 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wide"><CheckCircle2 size={12} className="text-orange-500" /> Multi-Gen</li>
                   <li className="flex items-center gap-2 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wide"><CheckCircle2 size={12} className="text-orange-500" /> Shared Time</li>
                </ul>
             </motion.div>

             {/* Competitive */}
             <motion.div variants={itemVariants} className="bg-dfw-navy dark:bg-[#0A111F] p-8 rounded-sm shadow-xl border border-dfw-navy dark:border-white/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
                <div className="relative z-10">
                   <div className="w-12 h-12 bg-white/10 text-dfw-red rounded-full flex items-center justify-center mb-6 border border-white/10">
                      <Trophy size={24} />
                   </div>
                   <h3 className="text-xl font-header font-bold text-white uppercase mb-4">Elite</h3>
                   <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                      Serious training for serious goals. Unlimited practice for club and rep athletes.
                   </p>
                   <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wide"><CheckCircle2 size={12} className="text-dfw-red" /> Tournament Prep</li>
                      <li className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wide"><CheckCircle2 size={12} className="text-dfw-red" /> College Path</li>
                   </ul>
                </div>
             </motion.div>
          </motion.div>
       </div>
    </section>
  );
};

export default AboutAudiences;