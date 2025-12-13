import React from 'react';
import { Calendar, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SportsCTA: React.FC = () => {
  return (
    <section className="py-24 bg-dfw-navy dark:bg-[#0A111F] relative overflow-hidden text-center">
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
       
       <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-6 block animate-pulse"
          >
            Don't Wait on the Sidelines
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-header font-bold text-white uppercase mb-6"
          >
             Ready to <span className="text-dfw-red">Play?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg font-light mb-10 max-w-2xl mx-auto"
          >
             Whether you're looking for a serious league or a fun weekend activity, we have a spot for you. Come see why Fort Worth chooses us.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
             <Link to="/rentals" className="px-10 py-5 bg-dfw-red text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-red-700 transition-colors shadow-[0_0_30px_rgba(214,40,40,0.4)]">
                Book A Court
             </Link>
             <Link to="/contact" className="px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-white hover:text-dfw-navy transition-colors">
                Visit Us
             </Link>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-gray-500 text-xs font-mono uppercase tracking-widest border-t border-white/5 pt-8">
             <span className="flex items-center gap-2"><MapPin size={12} className="text-dfw-red" /> Fort Worth, TX</span>
             <span className="flex items-center gap-2"><Calendar size={12} className="text-dfw-red" /> Open 24/7 for Members</span>
             <span className="flex items-center gap-2"><Phone size={12} className="text-dfw-red" /> (817) 938-0808</span>
          </div>
       </div>
    </section>
  );
};

export default SportsCTA;