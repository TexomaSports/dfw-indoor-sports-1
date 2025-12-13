import React from 'react';
import { MapPin, ArrowRight, Car } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutLocation: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#050911] transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6">
           <div className="flex flex-col lg:flex-row gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                 <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-4 block">Central Hub</span>
                 <h2 className="text-4xl md:text-5xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6">
                    Serving All of <br/> Dallas Fort Worth
                 </h2>
                 <p className="text-gray-500 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                    "I drive 40 minutes from Frisco. Worth every minute for facilities this good and community this strong." — Arjun K., Member
                 </p>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                    <div>
                       <h4 className="font-bold text-dfw-navy dark:text-white uppercase text-xs mb-2 flex items-center gap-2"><MapPin size={12} className="text-dfw-red"/> Primary (10-20m)</h4>
                       <p className="text-xs text-gray-500 dark:text-gray-400">Fort Worth, Arlington, Grand Prairie, HEB, Keller, Southlake</p>
                    </div>
                    <div>
                       <h4 className="font-bold text-dfw-navy dark:text-white uppercase text-xs mb-2 flex items-center gap-2"><MapPin size={12} className="text-dfw-red"/> Secondary (20-35m)</h4>
                       <p className="text-xs text-gray-500 dark:text-gray-400">Irving, Carrollton, Coppell, Lewisville, Mansfield</p>
                    </div>
                 </div>

                 <button className="flex items-center gap-2 text-dfw-red font-bold uppercase text-xs tracking-widest border-b border-dfw-red/20 pb-1 hover:text-dfw-navy dark:hover:text-white hover:border-dfw-navy dark:hover:border-white transition-all">
                    Get Directions <ArrowRight size={14} />
                 </button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2 h-[400px] w-full bg-gray-200 dark:bg-white/5 rounded-lg relative overflow-hidden shadow-inner group border border-gray-300 dark:border-white/10"
              >
                 {/* Placeholder for Map */}
                 <div className="absolute inset-0 bg-[#E5E7EB] dark:bg-[#111] flex items-center justify-center">
                    <div className="text-center opacity-50">
                       <MapPin size={48} className="mx-auto text-gray-400 mb-2" />
                       <span className="font-header font-bold uppercase text-gray-400 tracking-widest">Interactive Map</span>
                    </div>
                 </div>
                 {/* Stylized 'Pulse' at location */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="relative flex h-6 w-6">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dfw-red opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-6 w-6 bg-dfw-red border-4 border-white dark:border-[#0A111F] shadow-lg"></span>
                    </span>
                 </div>
                 {/* Map Card */}
                 <div className="absolute bottom-6 left-6 bg-white dark:bg-[#0A111F] p-4 rounded-sm shadow-lg max-w-xs border border-gray-100 dark:border-white/10">
                    <p className="font-bold text-dfw-navy dark:text-white text-sm mb-1">16230 Three Wide Drive</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Suite 200, Fort Worth, TX 76177</p>
                 </div>
              </motion.div>
           </div>
       </div>
    </section>
  );
};

export default AboutLocation;