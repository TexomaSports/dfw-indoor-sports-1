'use client'

import React from 'react';
import { User, Users, Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

const HomePrograms: React.FC = () => {
   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1
         }
      }
   };

   const cardVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50 } }
   };

   return (
      <section className="py-24 bg-white dark:bg-[#020408] border-b border-gray-100 dark:border-white/5 transition-colors duration-300">
         <div className="container mx-auto px-4 md:px-6">

            {/* Section Banner with Dodgeball Action Image */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mb-12"
            >
               <div className="relative h-[200px] md:h-[280px] rounded-2xl overflow-hidden shadow-xl max-w-5xl mx-auto">
                  <OptimizedImage
                     src="/images/home/home-programs-dodgeball-action.webp"
                     alt="Athletes in action at DFW Indoor Sports programs"
                     fill
                     className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dfw-navy/80 via-dfw-navy/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-center">
                     <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-2 block">Development Pathways</span>
                     <p className="text-white font-header font-bold text-2xl md:text-3xl uppercase">Programs for Every Goal</p>
                  </div>
               </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-12 max-w-3xl mx-auto"
            >
               <p className="text-gray-500 dark:text-gray-400">From beginners to champions, finding your level is the first step.</p>
            </motion.div>

            <motion.div
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-50px" }}
               className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >

               {/* Youth */}
               <motion.div variants={cardVariants} className="group relative rounded-xl border border-gray-200 dark:border-white/10 hover:border-green-500/30 dark:hover:border-green-500/30 transition-all duration-300 overflow-hidden h-[480px]">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                     <OptimizedImage
                        src="/images/home/home-programs-cricket-action.webp"
                        alt="Youth cricket training at DFW Indoor Sports"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-dfw-navy via-dfw-navy/70 to-dfw-navy/30" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col p-8">
                     <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-green-500/20 backdrop-blur-sm text-green-400 rounded-lg border border-green-500/30"><Star size={24} /></div>
                        <span className="text-[10px] font-bold uppercase tracking-widest bg-white/10 backdrop-blur-sm border border-white/20 px-2 py-1 rounded text-white">Ages 6-17</span>
                     </div>
                     <div className="mt-auto">
                        <h3 className="text-2xl font-header font-bold text-white uppercase mb-3">Youth Development</h3>
                        <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                           Building athletic foundations through expert coaching. After-school programs, weekend sessions, and summer camps.
                        </p>
                        <div className="space-y-2 mb-6 border-t border-white/10 pt-4">
                           <div className="flex items-center gap-2 text-xs font-bold text-gray-300 uppercase"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> CricKingdom Academy</div>
                           <div className="flex items-center gap-2 text-xs font-bold text-gray-300 uppercase"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Technical Soccer</div>
                           <div className="flex items-center gap-2 text-xs font-bold text-gray-300 uppercase"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Multi-Sport Discovery</div>
                        </div>
                        <Link href="/academy" className="text-xs font-bold text-green-400 uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">Explore Youth <ArrowRight size={14} /></Link>
                     </div>
                  </div>
               </motion.div>

               {/* Adult */}
               <motion.div variants={cardVariants} className="group relative rounded-xl border border-gray-200 dark:border-white/10 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 overflow-hidden h-[480px]">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                     <OptimizedImage
                        src="/images/home/home-programs-badminton-action.webp"
                        alt="Adult recreational sports at DFW Indoor Sports"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-dfw-navy via-dfw-navy/70 to-dfw-navy/30" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col p-8">
                     <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-blue-500/20 backdrop-blur-sm text-blue-400 rounded-lg border border-blue-500/30"><Users size={24} /></div>
                        <span className="text-[10px] font-bold uppercase tracking-widest bg-white/10 backdrop-blur-sm border border-white/20 px-2 py-1 rounded text-white">18+ / Seniors</span>
                     </div>
                     <div className="mt-auto">
                        <h3 className="text-2xl font-header font-bold text-white uppercase mb-3">Adult Rec & Comp</h3>
                        <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                           Stay active, compete, connect. Work schedule friendly leagues and drop-in sessions with a community atmosphere.
                        </p>
                        <div className="space-y-2 mb-6 border-t border-white/10 pt-4">
                           <div className="flex items-center gap-2 text-xs font-bold text-gray-300 uppercase"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Recreational Leagues</div>
                           <div className="flex items-center gap-2 text-xs font-bold text-gray-300 uppercase"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Competitive Divisions</div>
                           <div className="flex items-center gap-2 text-xs font-bold text-gray-300 uppercase"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Social Drop-In</div>
                        </div>
                        <Link href="/sports" className="text-xs font-bold text-blue-400 uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">View Adult Programs <ArrowRight size={14} /></Link>
                     </div>
                  </div>
               </motion.div>

               {/* Elite */}
               <motion.div variants={cardVariants} className="group relative rounded-xl border border-dfw-red/30 dark:border-white/10 shadow-xl overflow-hidden h-[480px]">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                     <OptimizedImage
                        src="/images/home/home-programs-soccer-action.webp"
                        alt="Elite performance training at DFW Indoor Sports"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-dfw-navy via-dfw-navy/80 to-dfw-navy/40" />
                     <div className="absolute inset-0 bg-[url('/textures/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col p-8">
                     <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-white/10 backdrop-blur-sm text-dfw-red rounded-lg border border-white/20"><User size={24} /></div>
                        <span className="text-[10px] font-bold uppercase tracking-widest bg-dfw-red text-white px-2 py-1 rounded">Advanced</span>
                     </div>
                     <div className="mt-auto">
                        <h3 className="text-2xl font-header font-bold text-white uppercase mb-3">Elite Performance</h3>
                        <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                           For serious athletes pursuing excellence. Personalized training plans, video analysis, and collegiate pathway guidance.
                        </p>
                        <div className="space-y-2 mb-6 border-t border-white/10 pt-4">
                           <div className="flex items-center gap-2 text-xs font-bold text-gray-300 uppercase"><div className="w-1.5 h-1.5 bg-dfw-red rounded-full"></div> High-Performance Track</div>
                           <div className="flex items-center gap-2 text-xs font-bold text-gray-300 uppercase"><div className="w-1.5 h-1.5 bg-dfw-red rounded-full"></div> Video Analysis</div>
                           <div className="flex items-center gap-2 text-xs font-bold text-gray-300 uppercase"><div className="w-1.5 h-1.5 bg-dfw-red rounded-full"></div> College Recruiting</div>
                        </div>
                        <Link href="/academy" className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">Learn About Elite <ArrowRight size={14} /></Link>
                     </div>
                  </div>
               </motion.div>

            </motion.div>
         </div>
      </section>
   );
};

export default HomePrograms;