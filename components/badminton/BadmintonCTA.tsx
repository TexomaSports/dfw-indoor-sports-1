import React from 'react';
import { Calendar, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const BadmintonCTA: React.FC = () => {
  return (
    <section className="py-24 bg-[#1E3A8A] dark:bg-black relative overflow-hidden text-center text-white">
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
       
       <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-400 font-mono text-xs font-bold uppercase tracking-widest mb-6 block animate-pulse"
          >
            Game On
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-header font-bold uppercase mb-8"
          >
             Start Playing at <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Texas's Best</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
             <button className="px-10 py-5 bg-blue-500 text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-blue-600 transition-colors shadow-lg">
                Reserve Court
             </button>
             <button className="px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-white hover:text-[#1E3A8A] transition-colors">
                Schedule Tour
             </button>
             <button className="px-10 py-5 bg-white/10 backdrop-blur-md text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-white/20 transition-colors">
                Join Membership
             </button>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-blue-100/70 text-xs font-mono uppercase tracking-widest">
             <span className="flex items-center gap-2"><MapPin size={12} className="text-blue-400" /> Fort Worth, TX</span>
             <span className="flex items-center gap-2"><Phone size={12} className="text-blue-400" /> (817) 938-0808</span>
             <span className="flex items-center gap-2"><Calendar size={12} className="text-blue-400" /> Open 7 Days</span>
          </div>
       </div>
    </section>
  );
};

export default BadmintonCTA;