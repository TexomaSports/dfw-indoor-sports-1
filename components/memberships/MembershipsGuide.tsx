'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

const MembershipsGuide: React.FC = () => {
   return (
      <section className="py-24 bg-[#0A111F] text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('/textures/cubes.png')] opacity-[0.05]"></div>
         <div className="container mx-auto px-4 md:px-6 relative z-10">

            {/* Family Membership Image Banner */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mb-12"
            >
               <div className="relative h-[200px] md:h-[280px] rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto border border-white/10">
                  <OptimizedImage
                     src="/images/memberships/memberships-guide-family.webp"
                     alt="Happy family enjoying sports together at DFW Indoor Sports"
                     fill
                     className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A111F]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-center">
                     <p className="text-white font-header font-bold text-xl md:text-2xl uppercase">Find Your Perfect Membership</p>
                     <p className="text-white/70 text-xs font-mono uppercase tracking-widest mt-1">Individual • Family • Group Options</p>
                  </div>
               </div>
            </motion.div>

            <h2 className="text-4xl font-header font-bold uppercase mb-12 text-center">Which Plan Fits You?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                  <h4 className="font-bold text-dfw-red uppercase mb-2">Play Both Sports?</h4>
                  <p className="text-sm text-gray-300 mb-4">If you cross-train or just like variety.</p>
                  <p className="font-bold text-white uppercase text-sm">→ Gold Membership ($109)</p>
               </div>
               <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                  <h4 className="font-bold text-dfw-red uppercase mb-2">Cricket Only?</h4>
                  <p className="text-sm text-gray-300 mb-4">Training 3+ times a week for competition.</p>
                  <p className="font-bold text-white uppercase text-sm">→ Cricket Unlimited ($129)</p>
               </div>
               <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                  <h4 className="font-bold text-dfw-red uppercase mb-2">Badminton Only?</h4>
                  <p className="text-sm text-gray-300 mb-4">Want the best value for court time.</p>
                  <p className="font-bold text-white uppercase text-sm">→ Badminton Half-Yearly ($70)</p>
               </div>
               <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                  <h4 className="font-bold text-dfw-red uppercase mb-2">Have Kids?</h4>
                  <p className="text-sm text-gray-300 mb-4">If 2+ family members play.</p>
                  <p className="font-bold text-white uppercase text-sm">→ Family Gold ($129)</p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default MembershipsGuide;