import React from 'react';
import { DollarSign, CheckCircle2, MapPin, Clock, Shield, ArrowRight, Heart, Zap, Smile } from 'lucide-react';
import { motion } from 'framer-motion';

const DodgeballIntro: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#020408] relative transition-colors duration-300">
       {/* Background Noise */}
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.03] dark:opacity-[0.05]"></div>

       <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
             
             {/* Left: Introduction Narrative */}
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="lg:w-3/5"
             >
                <div className="inline-flex items-center gap-2 mb-6">
                   <div className="h-[1px] w-8 bg-violet-600"></div>
                   <span className="text-violet-900 dark:text-violet-400 font-mono text-xs font-bold uppercase tracking-widest">Exercise Disguised As Fun</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-header font-bold text-[#4C1D95] dark:text-white uppercase leading-[0.95] mb-8">
                   DFW's Secret <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-500">Fitness Weapon</span>
                </h2>
                
                <div className="prose prose-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10 font-light">
                   <p>
                      Remember dodgeball from elementary school? The excitement, the laughter, the adrenaline rush? We brought it back—but better. Professional courts, safety-first foam balls, organized games, and climate-controlled comfort.
                   </p>
                   <p className="border-l-4 border-violet-500 pl-6 italic text-gray-800 dark:text-gray-200 font-medium my-8 bg-violet-50/50 dark:bg-violet-900/10 py-4 rounded-r-md">
                      "You'll burn 400-600 calories per hour sprinting, dodging, and diving without noticing because you're having too much fun."
                   </p>
                   <p>
                      Unlike sports requiring years of skill development, dodgeball has a <strong className="text-[#4C1D95] dark:text-violet-400">2-minute learning curve</strong>. Throw the ball, dodge the ball, catch the ball. This accessibility makes it perfect for mixed groups, birthday parties, and corporate team building where athletic ability varies.
                   </p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8 text-center">
                   <div className="p-4 bg-gray-50 dark:bg-white/5 rounded-lg border border-gray-100 dark:border-white/10">
                      <Heart className="mx-auto text-red-500 mb-2" size={24} />
                      <p className="text-[10px] font-bold uppercase text-gray-500 dark:text-gray-400">Cardio Boost</p>
                   </div>
                   <div className="p-4 bg-gray-50 dark:bg-white/5 rounded-lg border border-gray-100 dark:border-white/10">
                      <Zap className="mx-auto text-yellow-500 mb-2" size={24} />
                      <p className="text-[10px] font-bold uppercase text-gray-500 dark:text-gray-400">Reflexes</p>
                   </div>
                   <div className="p-4 bg-gray-50 dark:bg-white/5 rounded-lg border border-gray-100 dark:border-white/10">
                      <Smile className="mx-auto text-orange-500 mb-2" size={24} />
                      <p className="text-[10px] font-bold uppercase text-gray-500 dark:text-gray-400">Stress Relief</p>
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
                <div className="bg-[#4C1D95] dark:bg-[#0A111F] p-8 md:p-10 rounded-xl shadow-2xl relative overflow-hidden text-white border border-white/10 group">
                   {/* Abstract Decor */}
                   <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-[60px] pointer-events-none"></div>
                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
                   
                   <h3 className="text-xl font-header font-bold uppercase tracking-wider mb-8 border-b border-white/20 pb-4 relative z-10 flex justify-between items-center">
                      Quick Facts
                   </h3>
                   
                   <ul className="space-y-6 text-sm relative z-10">
                      <li className="flex gap-4 items-start group/item">
                         <div className="mt-1 p-2 bg-white/10 rounded group-hover/item:bg-violet-500 transition-colors"><DollarSign size={16} className="text-white" /></div>
                         <div>
                            <span className="block font-bold text-violet-200 uppercase text-[10px] tracking-widest mb-1">Pricing</span>
                            <p className="font-medium">$35/hr Standard | $30/hr Off-Peak</p>
                            <p className="text-xs text-gray-400 mt-1">Party packages from $299</p>
                         </div>
                      </li>
                      <li className="flex gap-4 items-start group/item">
                         <div className="mt-1 p-2 bg-white/10 rounded group-hover/item:bg-violet-500 transition-colors"><CheckCircle2 size={16} className="text-white" /></div>
                         <div>
                            <span className="block font-bold text-violet-200 uppercase text-[10px] tracking-widest mb-1">Included</span>
                            <p className="font-medium">Court, Balls (All Sizes), Safety Gear</p>
                         </div>
                      </li>
                      <li className="flex gap-4 items-start group/item">
                         <div className="mt-1 p-2 bg-white/10 rounded group-hover/item:bg-violet-500 transition-colors"><Shield size={16} className="text-white" /></div>
                         <div>
                            <span className="block font-bold text-violet-200 uppercase text-[10px] tracking-widest mb-1">Court Spec</span>
                            <p className="font-medium">Regulation 50'x25' with padded zones</p>
                         </div>
                      </li>
                      <li className="flex gap-4 items-start group/item">
                         <div className="mt-1 p-2 bg-white/10 rounded group-hover/item:bg-violet-500 transition-colors"><MapPin size={16} className="text-white" /></div>
                         <div>
                            <span className="block font-bold text-violet-200 uppercase text-[10px] tracking-widest mb-1">Location</span>
                            <p className="font-medium">16230 Three Wide Dr, Fort Worth, TX</p>
                         </div>
                      </li>
                      <li className="flex gap-4 items-start group/item">
                         <div className="mt-1 p-2 bg-white/10 rounded group-hover/item:bg-violet-500 transition-colors"><Clock size={16} className="text-white" /></div>
                         <div>
                            <span className="block font-bold text-violet-200 uppercase text-[10px] tracking-widest mb-1">Hours</span>
                            <p className="font-medium">Mon-Sun 5:00 AM - 11:00 PM</p>
                         </div>
                      </li>
                   </ul>

                   <button 
                      onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-full mt-10 py-4 bg-orange-600 text-white font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-orange-500 transition-colors shadow-lg relative z-10 flex items-center justify-center gap-2 group/btn"
                   >
                      View Booking Options <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                   </button>
                </div>
             </motion.div>
          </div>
       </div>
    </section>
  );
};

export default DodgeballIntro;