'use client'

import React, { useState } from 'react';
import { MousePointer2, Phone, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const RentalsCTA: React.FC = () => {
  const [code, setCode] = useState('');
  const [applied, setApplied] = useState(false);

  const applyCode = () => {
    if (code.toUpperCase() === 'FIRSTTIME') {
      setApplied(true);
    }
  };

  return (
    <section className="py-24 bg-dfw-navy dark:bg-black relative overflow-hidden text-center transition-colors duration-300">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
         
         <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
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
               Book your court online instantly. Enter code below for 50% off your 2nd hour.
            </motion.p>

            <div className="flex justify-center mb-8">
               <div className="relative">
                  <input 
                    type="text" 
                    value={code}
                    onChange={(e) => setCode(e.target.value.toUpperCase())}
                    placeholder="Enter Code"
                    disabled={applied}
                    className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-l-sm focus:outline-none uppercase placeholder:text-gray-500 w-40 text-sm font-mono"
                  />
                  <button 
                    onClick={applyCode}
                    className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-r-sm text-sm font-bold uppercase transition-colors"
                    disabled={applied}
                  >
                    {applied ? <CheckCircle2 size={16} /> : 'Apply'}
                  </button>
                  {applied && <p className="absolute -bottom-6 left-0 w-full text-[10px] text-green-400 uppercase tracking-widest font-bold">Discount Applied!</p>}
               </div>
            </div>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="flex flex-col sm:flex-row justify-center gap-4"
            >
               <Link href="/contact" className="px-10 py-5 bg-dfw-red text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-red-700 transition-colors shadow-[0_0_30px_rgba(214,40,40,0.4)] flex items-center justify-center gap-2">
                  <MousePointer2 size={16} /> Book Online Now
               </Link>
               <a href="tel:8179380808" className="px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-white hover:text-dfw-navy transition-colors flex items-center justify-center gap-2">
                  <Phone size={16} /> Call (817) 938-0808
               </a>
            </motion.div>
         </div>
      </section>
  );
};

export default RentalsCTA;