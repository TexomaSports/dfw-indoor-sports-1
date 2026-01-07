'use client'

import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const PartnersTestimonials: React.FC = () => {
   return (
      <section className="py-24 bg-[#050911] text-white">
         <div className="container mx-auto px-4 md:px-6">
            <motion.h2
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-3xl font-header font-bold uppercase mb-16 text-center"
            >
               Success Stories
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
               <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white/5 border border-white/10 p-8 rounded-lg relative"
               >
                  <Quote className="text-dfw-red mb-4 opacity-50" size={32} />
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                     "Excellent facility for indoor cricket and badminton. Attentive staff and seamless 24/7 operations. This is indeed a great place for games and fitness activities."
                  </p>
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 bg-gradient-to-br from-dfw-red to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">JT</div>
                     <div>
                        <p className="font-bold uppercase text-sm">James Tiwari</p>
                        <p className="text-xs text-gray-500 uppercase tracking-widest">Local Guide ★★★★★</p>
                     </div>
                  </div>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/5 border border-white/10 p-8 rounded-lg relative"
               >
                  <Quote className="text-dfw-red mb-4 opacity-50" size={32} />
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                     "Excellent indoor cricket nets and badminton facility in Fort Worth! The turf is top-notch, and the facilities are well-maintained. Perfect for cricket enthusiasts and badminton players alike. Highly recommend for junior cricket training sessions!"
                  </p>
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 bg-gradient-to-br from-dfw-red to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">PA</div>
                     <div>
                        <p className="font-bold uppercase text-sm">Prem Ahire</p>
                        <p className="text-xs text-gray-500 uppercase tracking-widest">Local Guide ★★★★★</p>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   );
};

export default PartnersTestimonials;