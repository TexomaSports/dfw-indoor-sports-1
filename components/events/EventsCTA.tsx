'use client'

import React from 'react';
import { Calendar, MapPin, Clock, Phone, FileText, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const EventsCTA: React.FC = () => {
  return (
    <section id="planning" className="py-24 bg-dfw-navy dark:bg-black relative overflow-hidden text-center transition-colors duration-300">
         <div className="absolute inset-0 bg-[url('/textures/stardust.png')] opacity-10"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
         
         <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.span 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-4 block animate-pulse"
            >
               Event Special
            </motion.span>
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="text-4xl md:text-6xl font-header font-bold text-white uppercase mb-6"
            >
               Let's Plan Your <span className="text-dfw-red">Event</span>
            </motion.h2>
            <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: 0.2 }}
               className="text-gray-400 text-lg font-light mb-12 max-w-2xl mx-auto"
            >
               Book in December to receive 15% off any package + complimentary photography.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white/5 border border-white/10 p-6 rounded-lg hover:bg-white/10 transition-colors"
               >
                  <Phone className="mx-auto text-white mb-4" size={24} />
                  <h3 className="text-white font-bold uppercase text-sm mb-2">1. Free Consultation</h3>
                  <p className="text-xs text-gray-400 mb-4">Speak with our coordinator about vision & budget.</p>
                  <a href="tel:8179380808" className="text-dfw-red text-xs font-bold uppercase tracking-widest border-b border-dfw-red pb-1 hover:text-white hover:border-white transition-colors">Call (817) 938-0808</a>
               </motion.div>

               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/5 border border-white/10 p-6 rounded-lg hover:bg-white/10 transition-colors"
               >
                  <FileText className="mx-auto text-white mb-4" size={24} />
                  <h3 className="text-white font-bold uppercase text-sm mb-2">2. Custom Proposal</h3>
                  <p className="text-xs text-gray-400 mb-4">Get pricing, options, and recommendations.</p>
                  <Link href="/contact" className="text-dfw-red text-xs font-bold uppercase tracking-widest border-b border-dfw-red pb-1 hover:text-white hover:border-white transition-colors">Request Proposal</Link>
               </motion.div>

               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white/5 border border-white/10 p-6 rounded-lg hover:bg-white/10 transition-colors"
               >
                  <Play className="mx-auto text-white mb-4" size={24} />
                  <h3 className="text-white font-bold uppercase text-sm mb-2">3. Facility Tour</h3>
                  <p className="text-xs text-gray-400 mb-4">See the space and meet the team in person.</p>
                  <Link href="/contact" className="text-dfw-red text-xs font-bold uppercase tracking-widest border-b border-dfw-red pb-1 hover:text-white hover:border-white transition-colors">Book Tour</Link>
               </motion.div>
            </div>
            
            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-8 text-gray-500 text-xs font-mono uppercase tracking-widest">
               <span className="flex items-center gap-2"><MapPin size={12} className="text-dfw-red" /> Fort Worth, TX</span>
               <span className="flex items-center gap-2"><Clock size={12} className="text-dfw-red" /> Mon-Fri 9am-6pm</span>
               <span className="flex items-center gap-2"><Calendar size={12} className="text-dfw-red" /> Planning Office</span>
            </div>
         </div>
      </section>
  );
};

export default EventsCTA;