'use client'

import React from 'react';
import { MousePointer2, Phone, UserPlus, CreditCard, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CricketBooking: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#020408] transition-colors duration-300" id="booking-process">
       <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-header font-bold text-[#006838] dark:text-white uppercase mb-6">Three Easy Ways To Book</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
             
             {/* Online */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-gray-50 dark:bg-white/5 p-8 rounded-lg border border-gray-100 dark:border-white/10 hover:shadow-lg transition-all text-center group"
             >
                <div className="w-16 h-16 bg-[#006838] dark:bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                   <MousePointer2 size={28} />
                </div>
                <h3 className="text-xl font-header font-bold text-[#006838] dark:text-white uppercase mb-4">1. Book Online</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                   Recommended. Fastest way. Real-time availability, instant confirmation, modify bookings 24/7.
                </p>
                <div className="text-left text-xs text-gray-500 dark:text-gray-400 space-y-2 mb-8 bg-white dark:bg-white/5 p-4 rounded border border-gray-100 dark:border-white/5">
                   <div className="flex gap-2"><UserPlus size={14} className="text-[#CC0000]" /> 1. Create Profile</div>
                   <div className="flex gap-2"><Calendar size={14} className="text-[#CC0000]" /> 2. Select Slot</div>
                   <div className="flex gap-2"><CreditCard size={14} className="text-[#CC0000]" /> 3. Secure Payment</div>
                </div>
                <Link href="/contact" className="w-full py-3 bg-[#CC0000] text-white font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-red-700 transition-colors block text-center">Book Now</Link>
             </motion.div>

             {/* Phone */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="bg-gray-50 dark:bg-white/5 p-8 rounded-lg border border-gray-100 dark:border-white/10 hover:shadow-lg transition-all text-center group"
             >
                <div className="w-16 h-16 bg-white dark:bg-white/10 border-2 border-[#006838] dark:border-green-600 text-[#006838] dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                   <Phone size={28} />
                </div>
                <h3 className="text-xl font-header font-bold text-[#006838] dark:text-white uppercase mb-4">2. Call Us</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                   Best for questions, group inquiries, or first-time guidance. Staff available 9 AM - 9 PM.
                </p>
                <div className="mb-8 py-4">
                   <p className="text-2xl font-header font-bold text-gray-800 dark:text-white">(817) 938-0808</p>
                   <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Mon-Sun Support</p>
                </div>
                <a href="tel:8179380808" className="block w-full py-3 border border-[#006838] text-[#006838] dark:border-green-600 dark:text-green-400 font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-[#006838] hover:text-white dark:hover:bg-green-600 dark:hover:text-white transition-colors">Click To Call</a>
             </motion.div>

             {/* Walk-In */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="bg-gray-50 dark:bg-white/5 p-8 rounded-lg border border-gray-100 dark:border-white/10 hover:shadow-lg transition-all text-center group"
             >
                <div className="w-16 h-16 bg-white dark:bg-white/10 border-2 border-gray-300 dark:border-white/20 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                   <Calendar size={28} />
                </div>
                <h3 className="text-xl font-header font-bold text-gray-700 dark:text-gray-300 uppercase mb-4">3. Walk-In</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                   Subject to availability. Peak times often booked. Best for off-peak weekday mornings.
                </p>
                <div className="mb-8 text-xs text-gray-500 dark:text-gray-400 bg-white dark:bg-white/5 p-4 rounded border border-gray-100 dark:border-white/5">
                   <p className="font-bold text-[#006838] dark:text-green-400 mb-1">16230 Three Wide Dr</p>
                   <p>Fort Worth, TX 76177</p>
                </div>
                <button className="w-full py-3 border border-gray-300 dark:border-white/20 text-gray-500 dark:text-gray-400 font-bold uppercase text-xs tracking-widest rounded-sm cursor-not-allowed">Check Live Status</button>
             </motion.div>

          </div>
       </div>
    </section>
  );
};

export default CricketBooking;