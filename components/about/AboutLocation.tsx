'use client'

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
                className="lg:w-1/2 h-[400px] w-full rounded-lg relative overflow-hidden shadow-inner group border border-gray-300 dark:border-white/10"
              >
                 <iframe
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.1234567890!2d-97.30889!3d32.91111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7d0000000000%3A0x0!2s16230%20Three%20Wide%20Dr%20Suite%20200%2C%20Fort%20Worth%2C%20TX%2076177!5e0!3m2!1sen!2sus!4v1702500000000!5m2!1sen!2sus"
                   width="100%"
                   height="100%"
                   style={{ border: 0 }}
                   allowFullScreen
                   loading="lazy"
                   referrerPolicy="no-referrer-when-downgrade"
                   title="DFW Indoor Sports Location"
                   className="absolute inset-0 w-full h-full"
                 ></iframe>
              </motion.div>
           </div>
       </div>
    </section>
  );
};

export default AboutLocation;