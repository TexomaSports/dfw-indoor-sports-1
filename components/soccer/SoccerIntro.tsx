import React from 'react';
import { DollarSign, CheckCircle2, MapPin, Clock, Shield, ArrowRight, Sun, CloudRain, Wind } from 'lucide-react';
import { motion } from 'framer-motion';

const SoccerIntro: React.FC = () => {
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
                   <div className="h-[1px] w-8 bg-emerald-600"></div>
                   <span className="text-emerald-900 dark:text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest">The Texas Challenge</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-header font-bold text-[#064E3B] dark:text-white uppercase leading-[0.95] mb-8">
                   Why Indoor Soccer Training <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Transforms Players</span>
                </h2>
                
                <div className="prose prose-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10 font-light">
                   <p>
                      Texas soccer players know the challenge: summer heat reaching <strong>105°F</strong> makes outdoor training dangerous. Spring thunderstorms cancel practice without warning. Winter cold affects ball feel and muscle performance. Field availability conflicts with multiple teams competing for limited outdoor space.
                   </p>
                   <p className="border-l-4 border-emerald-500 pl-6 italic text-gray-800 dark:text-gray-200 font-medium my-8 bg-emerald-50/50 dark:bg-emerald-900/10 py-4 rounded-r-md">
                      "Indoor soccer eliminates every obstacle while providing advantages impossible outdoors."
                   </p>
                   <p>
                      Our climate-controlled facility maintains <strong className="text-[#064E3B] dark:text-emerald-400">perfect 72°F conditions</strong> enabling year-round consistent training. FIFA-approved artificial turf delivers reliable ball roll and player traction regardless of weather. Small-sided game formats (5v5, 6v6, 7v7) maximize touches on ball—critical for technical development.
                   </p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8 text-center">
                   <div className="p-4 bg-gray-50 dark:bg-white/5 rounded-lg border border-gray-100 dark:border-white/10">
                      <Sun className="mx-auto text-orange-500 mb-2" size={24} />
                      <p className="text-[10px] font-bold uppercase text-gray-500 dark:text-gray-400">No Heat Exhaustion</p>
                   </div>
                   <div className="p-4 bg-gray-50 dark:bg-white/5 rounded-lg border border-gray-100 dark:border-white/10">
                      <CloudRain className="mx-auto text-blue-500 mb-2" size={24} />
                      <p className="text-[10px] font-bold uppercase text-gray-500 dark:text-gray-400">No Rainouts</p>
                   </div>
                   <div className="p-4 bg-gray-50 dark:bg-white/5 rounded-lg border border-gray-100 dark:border-white/10">
                      <Wind className="mx-auto text-gray-500 dark:text-gray-400 mb-2" size={24} />
                      <p className="text-[10px] font-bold uppercase text-gray-500 dark:text-gray-400">No Wind Interference</p>
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
                <div className="bg-[#064E3B] dark:bg-[#0A111F] p-8 md:p-10 rounded-xl shadow-2xl relative overflow-hidden text-white border border-white/10 group">
                   {/* Abstract Decor */}
                   <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none"></div>
                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
                   
                   <h3 className="text-xl font-header font-bold uppercase tracking-wider mb-8 border-b border-white/20 pb-4 relative z-10 flex justify-between items-center">
                      Quick Facts
                   </h3>
                   
                   <ul className="space-y-6 text-sm relative z-10">
                      <li className="flex gap-4 items-start group/item">
                         <div className="mt-1 p-2 bg-white/10 rounded group-hover/item:bg-emerald-500 transition-colors"><DollarSign size={16} className="text-white" /></div>
                         <div>
                            <span className="block font-bold text-emerald-200 uppercase text-[10px] tracking-widest mb-1">Pricing</span>
                            <p className="font-medium">$60/hr Standard | $50/hr Off-Peak</p>
                            <p className="text-xs text-gray-400 mt-1">Unlimited membership from $109/month</p>
                         </div>
                      </li>
                      <li className="flex gap-4 items-start group/item">
                         <div className="mt-1 p-2 bg-white/10 rounded group-hover/item:bg-emerald-500 transition-colors"><CheckCircle2 size={16} className="text-white" /></div>
                         <div>
                            <span className="block font-bold text-emerald-200 uppercase text-[10px] tracking-widest mb-1">Field Size</span>
                            <p className="font-medium">Configurable for 5v5, 6v6, 7v7 formats</p>
                         </div>
                      </li>
                      <li className="flex gap-4 items-start group/item">
                         <div className="mt-1 p-2 bg-white/10 rounded group-hover/item:bg-emerald-500 transition-colors"><Shield size={16} className="text-white" /></div>
                         <div>
                            <span className="block font-bold text-emerald-200 uppercase text-[10px] tracking-widest mb-1">Surface</span>
                            <p className="font-medium">FIFA-approved artificial turf</p>
                         </div>
                      </li>
                      <li className="flex gap-4 items-start group/item">
                         <div className="mt-1 p-2 bg-white/10 rounded group-hover/item:bg-emerald-500 transition-colors"><MapPin size={16} className="text-white" /></div>
                         <div>
                            <span className="block font-bold text-emerald-200 uppercase text-[10px] tracking-widest mb-1">Location</span>
                            <p className="font-medium">16230 Three Wide Dr, Fort Worth, TX</p>
                         </div>
                      </li>
                      <li className="flex gap-4 items-start group/item">
                         <div className="mt-1 p-2 bg-white/10 rounded group-hover/item:bg-emerald-500 transition-colors"><Clock size={16} className="text-white" /></div>
                         <div>
                            <span className="block font-bold text-emerald-200 uppercase text-[10px] tracking-widest mb-1">Hours</span>
                            <p className="font-medium">Mon-Sun 5:00 AM - 11:00 PM</p>
                         </div>
                      </li>
                   </ul>

                   <button 
                      onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-full mt-10 py-4 bg-emerald-500 text-white font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-emerald-400 transition-colors shadow-lg relative z-10 flex items-center justify-center gap-2 group/btn"
                   >
                      Book Field Now <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                   </button>
                </div>
             </motion.div>
          </div>
       </div>
    </section>
  );
};

export default SoccerIntro;