import React from 'react';
import { ArrowRight, CheckCircle2, User, Users, Star, TrendingUp, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const AcademyPrograms: React.FC = () => {
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
    <section className="bg-gray-50 dark:bg-[#050911] py-24 border-y border-gray-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
       {/* Background Texture */}
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05]"></div>
       
       <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          >
             <div className="max-w-2xl">
                <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-3 block">Find Your Level</span>
                <h2 className="text-4xl md:text-5xl font-header font-bold text-dfw-navy dark:text-white uppercase leading-none">
                   Development Tiers
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mt-4">Structured pathways for every stage of the athlete's journey.</p>
             </div>
             <div className="hidden md:block">
                <button className="flex items-center gap-2 text-xs font-bold text-dfw-navy dark:text-white uppercase tracking-widest border-b border-dfw-navy dark:border-white pb-1 hover:text-dfw-red dark:hover:text-dfw-red hover:border-dfw-red dark:hover:border-dfw-red transition-all">
                   Download Syllabus <ArrowRight size={14} />
                </button>
             </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
             {/* Program 1: Foundation */}
             <motion.div variants={itemVariants} className="group bg-white dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full">
                <div className="h-48 overflow-hidden relative">
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-green-600 rounded-sm z-10 shadow-sm flex items-center gap-2"><Star size={10} /> Ages 5-11</div>
                   <img src="https://images.unsplash.com/photo-1595053826286-2e5968719a0c?q=80&w=800&auto=format&fit=crop" alt="Youth Cricket Training" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-dfw-navy/80 dark:from-black/80 to-transparent opacity-60"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                   <div className="mb-4">
                      <h3 className="text-xl font-header font-bold text-dfw-navy dark:text-white uppercase">Foundation</h3>
                      <p className="text-xs text-gray-400 mt-1">For Beginners & Early Learners</p>
                   </div>
                   <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                      Focus on falling in love with the game. We teach grip, stance, and basic mechanics through fun, high-energy drills.
                   </p>
                   <ul className="space-y-2 mb-6 mt-auto">
                      <li className="flex items-center gap-2 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase"><CheckCircle2 size={12} className="text-green-500" /> Soft ball introduction</li>
                      <li className="flex items-center gap-2 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase"><CheckCircle2 size={12} className="text-green-500" /> Hand-eye coordination</li>
                   </ul>
                   <button className="w-full py-3 border border-gray-200 dark:border-white/20 text-dfw-navy dark:text-white text-[10px] font-bold uppercase tracking-widest rounded-sm group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-colors">Details</button>
                </div>
             </motion.div>

             {/* Program 2: Development */}
             <motion.div variants={itemVariants} className="group bg-white dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full">
                <div className="h-48 overflow-hidden relative">
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-600 rounded-sm z-10 shadow-sm flex items-center gap-2"><TrendingUp size={10} /> Ages 12-16</div>
                   <img src="https://images.unsplash.com/photo-1593341646782-e0b495cffd32?q=80&w=800&auto=format&fit=crop" alt="Junior Cricket Development" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-dfw-navy/80 dark:from-black/80 to-transparent opacity-60"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                   <div className="mb-4">
                      <h3 className="text-xl font-header font-bold text-dfw-navy dark:text-white uppercase">Development</h3>
                      <p className="text-xs text-gray-400 mt-1">Intermediate Skills</p>
                   </div>
                   <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                      Transitioning to hard ball cricket. Advanced shot selection, bowling variations, and introduction to match strategy.
                   </p>
                   <ul className="space-y-2 mb-6 mt-auto">
                      <li className="flex items-center gap-2 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase"><CheckCircle2 size={12} className="text-blue-500" /> Hard ball nets</li>
                      <li className="flex items-center gap-2 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase"><CheckCircle2 size={12} className="text-blue-500" /> Game scenarios</li>
                   </ul>
                   <button className="w-full py-3 border border-gray-200 dark:border-white/20 text-dfw-navy dark:text-white text-[10px] font-bold uppercase tracking-widest rounded-sm group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">Details</button>
                </div>
             </motion.div>

             {/* Program 3: High Performance */}
             <motion.div variants={itemVariants} className="group bg-dfw-navy dark:bg-[#0A111F] rounded-lg border border-dfw-navy dark:border-dfw-red/30 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative flex flex-col h-full shadow-lg">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
                <div className="h-48 overflow-hidden relative">
                   <div className="absolute top-4 left-4 bg-dfw-red px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white rounded-sm z-10 shadow-md flex items-center gap-2"><Trophy size={10} /> Invitational</div>
                   <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop" alt="Elite Cricket Training" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" />
                   <div className="absolute inset-0 bg-gradient-to-t from-dfw-navy via-dfw-navy/50 to-transparent"></div>
                </div>
                <div className="p-6 relative z-10 flex flex-col flex-grow">
                   <div className="mb-4">
                      <h3 className="text-xl font-header font-bold text-white uppercase">High Performance</h3>
                      <p className="text-xs text-gray-400 mt-1">Professional Pathway</p>
                   </div>
                   <p className="text-xs text-gray-400 leading-relaxed mb-6">
                      Intensive coaching for aspiring pros. Data-driven video analysis, biomechanics correction, and mental conditioning.
                   </p>
                   <ul className="space-y-2 mb-6 mt-auto">
                      <li className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase"><CheckCircle2 size={12} className="text-dfw-red" /> 1-on-1 Mentorship</li>
                      <li className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase"><CheckCircle2 size={12} className="text-dfw-red" /> College Recruitment</li>
                   </ul>
                   <button className="w-full py-3 bg-dfw-red border border-dfw-red text-white text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-red-600 transition-colors shadow-lg">Apply Now</button>
                </div>
             </motion.div>

             {/* Program 4: Adult */}
             <motion.div variants={itemVariants} className="group bg-white dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full">
                <div className="h-48 overflow-hidden relative">
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-orange-500 rounded-sm z-10 shadow-sm flex items-center gap-2"><Users size={10} /> Adults 18+</div>
                   <img src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800&auto=format&fit=crop" alt="Adult Cricket Training" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-dfw-navy/80 dark:from-black/80 to-transparent opacity-60"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                   <div className="mb-4">
                      <h3 className="text-xl font-header font-bold text-dfw-navy dark:text-white uppercase">Adult Club</h3>
                      <p className="text-xs text-gray-400 mt-1">Fitness & Technique</p>
                   </div>
                   <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                      For league players looking to refine their game or enthusiasts wanting a great workout. Evening and weekend sessions.
                   </p>
                   <ul className="space-y-2 mb-6 mt-auto">
                      <li className="flex items-center gap-2 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase"><CheckCircle2 size={12} className="text-orange-500" /> Technique Correction</li>
                      <li className="flex items-center gap-2 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase"><CheckCircle2 size={12} className="text-orange-500" /> Match Fitness</li>
                   </ul>
                   <button className="w-full py-3 border border-gray-200 dark:border-white/20 text-dfw-navy dark:text-white text-[10px] font-bold uppercase tracking-widest rounded-sm group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-colors">Details</button>
                </div>
             </motion.div>
          </motion.div>
       </div>
    </section>
  );
};

export default AcademyPrograms;