'use client'

import React from 'react';
import { PartyPopper, Briefcase, Medal } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

const HomeEvents: React.FC = () => {
   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1
         }
      }
   };

   const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
   };

   return (
      <section className="py-24 bg-gray-50 dark:bg-[#050911] border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
         <div className="container mx-auto px-4 md:px-6">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-3 block">More Than Training</span>
               <h2 className="text-4xl md:text-5xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6">Host Unforgettable Events</h2>
            </motion.div>

            {/* Events Showcase Image */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mb-16"
            >
               <div className="relative h-[220px] md:h-[320px] rounded-2xl overflow-hidden shadow-xl max-w-5xl mx-auto">
                  <OptimizedImage
                     src="/images/events/home-events-birthday-party.webp"
                     alt="Kids celebrating at a birthday party at DFW Indoor Sports"
                     fill
                     className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                     <p className="text-white/90 text-lg md:text-2xl font-header font-bold uppercase">Celebrations That Score Big</p>
                     <p className="text-white/60 text-xs md:text-sm font-mono uppercase tracking-widest mt-1">Birthdays • Corporate Events • Tournaments</p>
                  </div>
               </div>
            </motion.div>

            <motion.div
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-50px" }}
               className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
               {/* Birthday */}
               <Link href="/events">
                  <motion.div variants={itemVariants} className="bg-white dark:bg-[#0A111F] p-8 rounded-sm shadow-sm border border-gray-100 dark:border-white/10 hover:shadow-lg transition-all group cursor-pointer text-center">
                     <div className="w-16 h-16 mx-auto bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <PartyPopper size={32} />
                     </div>
                     <h3 className="text-xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-3">Birthday Parties</h3>
                     <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                        Sports-themed parties kids remember. Cricket, Dodgeball, or Multi-sport packages from $299. We handle the chaos.
                     </p>
                     <span className="text-purple-600 dark:text-purple-400 font-bold text-xs uppercase tracking-widest border-b border-purple-200 dark:border-purple-800 pb-1">View Packages</span>
                  </motion.div>
               </Link>

               {/* Corporate */}
               <Link href="/events">
                  <motion.div variants={itemVariants} className="bg-white dark:bg-[#0A111F] p-8 rounded-sm shadow-sm border border-gray-100 dark:border-white/10 hover:shadow-lg transition-all group cursor-pointer text-center">
                     <div className="w-16 h-16 mx-auto bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Briefcase size={32} />
                     </div>
                     <h3 className="text-xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-3">Corporate Team Building</h3>
                     <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                        Dodgeball tournaments and cricket challenges that build genuine bonds. 20-100 participants with professional facilitation.
                     </p>
                     <span className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-widest border-b border-blue-200 dark:border-blue-800 pb-1">Corporate Events</span>
                  </motion.div>
               </Link>

               {/* Tournaments */}
               <Link href="/events">
                  <motion.div variants={itemVariants} className="bg-white dark:bg-[#0A111F] p-8 rounded-sm shadow-sm border border-gray-100 dark:border-white/10 hover:shadow-lg transition-all group cursor-pointer text-center">
                     <div className="w-16 h-16 mx-auto bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Medal size={32} />
                     </div>
                     <h3 className="text-xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-3">Tournament Hosting</h3>
                     <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                        Professional organization for leagues and cups. 8-50+ teams, referee services, and championship atmosphere.
                     </p>
                     <span className="text-orange-600 dark:text-orange-400 font-bold text-xs uppercase tracking-widest border-b border-orange-200 dark:border-orange-800 pb-1">Host Tournament</span>
                  </motion.div>
               </Link>
            </motion.div>
         </div>
      </section>
   );
};

export default HomeEvents;