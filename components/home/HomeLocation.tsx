import React from 'react';
import { MapPin, ArrowRight, Car } from 'lucide-react';
import { motion } from 'framer-motion';

const HomeLocation: React.FC = () => {
  return (
    <section className="bg-white dark:bg-[#020408] py-24 border-b border-gray-100 dark:border-white/5 transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:w-1/2"
             >
                <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-4 block">Central Location</span>
                <h2 className="text-4xl md:text-5xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6">
                   Serving All of DFW
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                   Strategically located in Fort Worth with easy highway access. Our members drive from Plano, Frisco, and Dallas because the facility quality makes the trip worthwhile.
                </p>
                
                <div className="bg-gray-50 dark:bg-[#0A111F] p-6 rounded-lg border border-gray-200 dark:border-white/10 mb-8 transition-colors">
                   <h4 className="font-bold text-dfw-navy dark:text-white uppercase text-sm mb-4 flex items-center gap-2"><Car size={16} className="text-dfw-red" /> Drive Times</h4>
                   <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex justify-between border-b border-gray-200 dark:border-white/10 pb-2"><span>Fort Worth</span> <span>10-15m</span></div>
                      <div className="flex justify-between border-b border-gray-200 dark:border-white/10 pb-2"><span>Arlington</span> <span>15-20m</span></div>
                      <div className="flex justify-between border-b border-gray-200 dark:border-white/10 pb-2"><span>Southlake</span> <span>15-25m</span></div>
                      <div className="flex justify-between border-b border-gray-200 dark:border-white/10 pb-2"><span>West Dallas</span> <span>20-30m</span></div>
                   </div>
                </div>

                <a href="https://maps.google.com/?q=16230+Three+Wide+Drive+Suite+200,+Fort+Worth,+TX+76177" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-dfw-red font-bold uppercase text-xs tracking-widest border-b border-dfw-red/20 pb-1 hover:text-dfw-navy dark:hover:text-white hover:border-dfw-navy dark:hover:border-white transition-all w-max">
                   Get Directions on Google Maps <ArrowRight size={14} />
                </a>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:w-1/2 h-[400px] w-full bg-gray-200 dark:bg-[#111] rounded-lg relative overflow-hidden shadow-inner group"
             >
                <div className="absolute inset-0 bg-[#E5E7EB] dark:bg-[#1a1d24] flex items-center justify-center transition-colors">
                   <div className="text-center opacity-50">
                      <MapPin size={48} className="mx-auto text-gray-400 mb-2" />
                      <span className="font-header font-bold uppercase text-gray-400 tracking-widest">16230 Three Wide Dr Suite 200</span>
                   </div>
                </div>
                {/* Adding width/height attributes to hypothetical map image for CLS prevention logic, though here it is a placeholder div */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                   <span className="relative flex h-6 w-6">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dfw-red opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-6 w-6 bg-dfw-red border-4 border-white dark:border-[#0A111F] shadow-lg"></span>
                   </span>
                </div>
             </motion.div>
          </div>
       </div>
    </section>
  );
};

export default HomeLocation;