import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutHero: React.FC = () => {
  return (
    <div className="relative h-[85vh] min-h-[700px] flex items-center bg-[#050911] overflow-hidden">
        {/* Dynamic Background with Parallax Feel */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 z-10 mix-blend-overlay"></div>
        <motion.div 
           initial={{ scale: 1.1, opacity: 0 }}
           animate={{ scale: 1, opacity: 0.5 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="absolute inset-0 bg-cover bg-center"
           style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519766304800-096cdef291c9?q=80&w=2070&auto=format&fit=crop")' }}
        ></motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050911] via-[#050911]/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050911] via-transparent to-transparent z-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-20 pt-12 pb-32">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.2 }}
             className="flex items-center gap-3 mb-8"
           >
              <div className="h-[1px] w-12 bg-dfw-red"></div>
              <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-[0.25em]">Est. 2024 // Fort Worth, TX</span>
           </motion.div>
           
           <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4, duration: 0.8 }}
             className="text-5xl md:text-7xl lg:text-8xl font-header font-bold text-white uppercase tracking-tighter mb-8 leading-[0.9] max-w-5xl drop-shadow-2xl"
           >
             Where Athletes Find <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Home, Community,</span> <br/>
             <span className="text-dfw-red">And Championship.</span>
           </motion.h1>
           
           <motion.p 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.6 }}
             className="max-w-2xl text-gray-300 text-lg md:text-xl font-light leading-relaxed border-l-2 border-white/10 pl-6 mb-12 backdrop-blur-sm"
           >
             Built by athletes who understand what serious players need: professional facilities, expert coaching, and a community that shares your passion. Welcome to North Texas's premier multi-sport indoor complex.
           </motion.p>

           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.8 }}
             className="flex flex-col sm:flex-row gap-6"
           >
              <button 
                onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-dfw-red text-white font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-red-700 transition-all shadow-[0_0_30px_rgba(214,40,40,0.3)] flex items-center justify-center gap-3 group"
              >
                 Experience Our Facility <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('values')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-white hover:text-dfw-navy transition-all flex items-center justify-center gap-3"
              >
                 Join Community
              </button>
           </motion.div>
        </div>

        {/* Hero Footer Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-0 left-0 w-full border-t border-white/5 bg-[#020408]/80 backdrop-blur-md z-20 hidden md:block"
        >
           <div className="container mx-auto px-4">
              <div className="grid grid-cols-4 divide-x divide-white/10">
                 {[
                    { label: "Facility Size", value: "50,000", unit: "Sq Ft" },
                    { label: "Active Members", value: "500", unit: "+" },
                    { label: "Sports", value: "04", unit: "Disciplines" },
                    { label: "Open", value: "24/7", unit: "Access" }
                 ].map((stat, i) => (
                    <div key={i} className="py-6 px-8 flex items-center justify-between group cursor-default hover:bg-white/5 transition-colors">
                       <div>
                          <p className="text-[10px] text-gray-500 uppercase tracking-widest font-mono mb-1">{stat.label}</p>
                          <p className="text-2xl font-header font-bold text-white">{stat.value} <span className="text-dfw-red text-sm">{stat.unit}</span></p>
                       </div>
                       <TrendingUp size={16} className="text-gray-700 group-hover:text-dfw-red transition-colors" />
                    </div>
                 ))}
              </div>
           </div>
        </motion.div>
    </div>
  );
};

export default AboutHero;