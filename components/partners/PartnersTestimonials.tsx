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
                   "Sponsoring DFW Indoor Sports connected our business with hundreds of families in our target market. The on-site exposure during tournaments and leagues translated directly to increased foot traffic and brand recognition."
                </p>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
                   <div>
                      <p className="font-bold uppercase text-sm">Local Healthcare Provider</p>
                      <p className="text-xs text-gray-500 uppercase tracking-widest">Gold Partner</p>
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
                   "Beyond the advertising value, partnering with DFW Indoor Sports aligned our brand with community health and youth development—values central to our company mission. The partnership has been mutually beneficial."
                </p>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
                   <div>
                      <p className="font-bold uppercase text-sm">Tech Start-Up CEO</p>
                      <p className="text-xs text-gray-500 uppercase tracking-widest">Silver Partner</p>
                   </div>
                </div>
             </motion.div>
          </div>
       </div>
    </section>
  );
};

export default PartnersTestimonials;