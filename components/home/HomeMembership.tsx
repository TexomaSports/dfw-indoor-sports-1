'use client'

import React from 'react';
import { ArrowRight, Check, Smile } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HomeMembership: React.FC = () => {
  return (
    <section className="py-24 bg-[#050911] relative overflow-hidden">
       <div className="absolute inset-0 bg-[url('/textures/stardust.png')] opacity-10"></div>
       <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-dfw-red/10 to-transparent pointer-events-none"></div>

       <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
             
             {/* Left Text */}
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:w-1/2"
             >
                <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-4 block">Join The Family</span>
                <h2 className="text-4xl md:text-6xl font-header font-bold text-white uppercase leading-none mb-6">
                   Make It Your <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-dfw-red to-orange-500">Home Base</span>
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-lg font-light">
                   Playing regularly? Membership isn't just about saving money (though you'll save a lot). It's about removing barriers. No counting hours, no hesitation—just come and play whenever the inspiration strikes.
                </p>
                <div className="flex flex-col gap-4 mb-10">
                   {[
                      "Unlimited Access to 4 Sports", 
                      "Priority Booking for Your Favorite Times", 
                      "24/7 Access to Train on Your Schedule"
                   ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                         <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center"><Check size={14} strokeWidth={3} /></div>
                         <p className="text-sm font-medium text-white tracking-wide">{item}</p>
                      </div>
                   ))}
                </div>
                <Link href="/memberships" className="inline-block px-8 py-4 bg-white text-dfw-navy font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-gray-200 transition-colors">
                   Find Your Plan
                </Link>
             </motion.div>

             {/* Right Cards */}
             <div className="lg:w-1/2 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Gold Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-br from-dfw-red to-red-800 p-8 rounded-2xl shadow-2xl relative overflow-hidden group transform md:-translate-y-6 border border-white/10"
                >
                   <div className="absolute top-0 right-0 bg-white text-dfw-red text-[10px] font-bold uppercase px-3 py-1 rounded-bl-xl">Community Favorite</div>
                   <h3 className="text-2xl font-header font-bold text-white uppercase mb-1">Gold</h3>
                   <p className="text-xs text-white/80 uppercase tracking-widest mb-6">All Access Pass</p>
                   <div className="text-5xl font-header font-bold text-white mb-2">$109<span className="text-sm font-sans font-normal text-white/70">/mo</span></div>
                   <p className="text-xs text-white/70 mb-6 leading-relaxed">
                      Total freedom. Unlimited cricket, badminton, soccer, and dodgeball. Plus free bowling machine usage.
                   </p>
                   <Link href="/memberships" className="block w-full py-3 bg-black/20 text-white font-bold uppercase text-xs rounded-sm hover:bg-black/40 transition-colors border border-white/10 text-center">View Details</Link>
                </motion.div>

                {/* Family Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors group"
                >
                   <h3 className="text-2xl font-header font-bold text-white uppercase mb-1">Family Gold</h3>
                   <p className="text-xs text-gray-400 uppercase tracking-widest mb-6">2 Adults + 2 Kids</p>
                   <div className="text-5xl font-header font-bold text-white mb-2">$129<span className="text-sm font-sans font-normal text-gray-400">/mo</span></div>
                   <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                      The ultimate family activity. Everyone plays what they love. Active weekends sorted.
                   </p>
                   <Link href="/memberships" className="block w-full py-3 border border-white/20 text-white font-bold uppercase text-xs rounded-sm hover:bg-white hover:text-dfw-navy transition-colors text-center">View Details</Link>
                </motion.div>

             </div>
          </div>
       </div>
    </section>
  );
};

export default HomeMembership;