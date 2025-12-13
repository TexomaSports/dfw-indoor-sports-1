import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomeCTAGrid: React.FC = () => {
  return (
    <section className="py-24 bg-[#050911] text-white border-t border-white/5">
       <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
             <h2 className="text-3xl md:text-5xl font-header font-bold uppercase mb-4">Choose Your Path</h2>
             <p className="text-gray-400">Ready to get started? Select the option that fits you best.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden rounded-lg">
             
             {/* New Visitor */}
             <motion.div 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                viewport={{ once: true }} 
                className="bg-[#050911] p-8 hover:bg-white/5 transition-colors group"
             >
                <h3 className="text-xl font-header font-bold uppercase mb-4 text-white group-hover:text-dfw-red transition-colors">New Here?</h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed h-16">Start with a free introduction. See the facility and meet the staff with no obligation.</p>
                <div className="flex flex-col gap-4">
                   <Link to="/contact" className="w-full flex items-center justify-center py-3 bg-white text-dfw-navy font-bold uppercase text-xs rounded-sm hover:bg-gray-200 transition-colors">Schedule Free Tour</Link>
                   <Link to="/contact" className="w-full flex items-center justify-center py-3 border border-white/20 text-white font-bold uppercase text-xs rounded-sm hover:bg-white/10 transition-colors">Book Free Trial</Link>
                </div>
             </motion.div>

             {/* Regular Training */}
             <motion.div 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                viewport={{ once: true }} 
                transition={{ delay: 0.1 }}
                className="bg-[#050911] p-8 hover:bg-white/5 transition-colors group"
             >
                <h3 className="text-xl font-header font-bold uppercase mb-4 text-white group-hover:text-blue-500 transition-colors">Ready to Train?</h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed h-16">Join hundreds of active members. Consistent access for consistent progress.</p>
                <div className="flex flex-col gap-4">
                   <Link to="/memberships" className="w-full flex items-center justify-center py-3 bg-blue-600 text-white font-bold uppercase text-xs rounded-sm hover:bg-blue-700 transition-colors">Compare Memberships</Link>
                   <Link to="/academy" className="w-full flex items-center justify-center py-3 border border-white/20 text-white font-bold uppercase text-xs rounded-sm hover:bg-white/10 transition-colors">Explore Programs</Link>
                </div>
             </motion.div>

             {/* Immediate Play */}
             <motion.div 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                viewport={{ once: true }} 
                transition={{ delay: 0.2 }}
                className="bg-[#050911] p-8 hover:bg-white/5 transition-colors group"
             >
                <h3 className="text-xl font-header font-bold uppercase mb-4 text-white group-hover:text-green-500 transition-colors">Book Today?</h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed h-16">Immediate access available for drop-in. Reserve your court online 24/7.</p>
                <div className="flex flex-col gap-4">
                   <Link to="/rentals" className="w-full flex items-center justify-center py-3 bg-green-600 text-white font-bold uppercase text-xs rounded-sm hover:bg-green-700 transition-colors">Book Court Now</Link>
                   <Link to="/rentals" className="w-full flex items-center justify-center py-3 border border-white/20 text-white font-bold uppercase text-xs rounded-sm hover:bg-white/10 transition-colors">Check Availability</Link>
                </div>
             </motion.div>

          </div>
       </div>
    </section>
  );
};

export default HomeCTAGrid;