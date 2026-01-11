'use client'

import React from 'react';
import { ArrowRight, Target, Wind, Activity, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

const HomeFeatures: React.FC = () => {
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

   const sports = [
      {
         name: 'Cricket',
         icon: Target,
         image: '/images/home/home-features-lighting.webp',
         description: 'From the crack of the bat to the cheer of the team. Train on international-standard lanes and find your rhythm.',
         link: '/academy',
         linkText: 'Explore Academy',
         color: 'red',
         bgColor: 'bg-red-50 dark:bg-red-900/30',
         textColor: 'text-dfw-red dark:text-red-400',
         hoverBg: 'group-hover:bg-dfw-red'
      },
      {
         name: 'Badminton',
         icon: Wind,
         image: '/images/home/home-features-community.webp',
         description: 'Speed, agility, and grace. Play on professional flooring designed to be kind to your body while you fly across the court.',
         link: '/badminton-courts',
         linkText: 'View Programs',
         color: 'blue',
         bgColor: 'bg-blue-50 dark:bg-blue-900/30',
         textColor: 'text-blue-600 dark:text-blue-400',
         hoverBg: 'group-hover:bg-blue-600'
      },
      {
         name: 'Soccer',
         icon: Activity,
         image: '/images/home/home-features-turf-closeup.webp',
         description: 'The beautiful game, played in perfect conditions. Join a league or bring your friends for fast-paced 5-a-side fun.',
         link: '/soccer-fields',
         linkText: 'Soccer Info',
         color: 'green',
         bgColor: 'bg-green-50 dark:bg-green-900/30',
         textColor: 'text-green-600 dark:text-green-400',
         hoverBg: 'group-hover:bg-green-600'
      },
      {
         name: 'Dodgeball',
         icon: Zap,
         image: '/images/home/home-features-climate-control.webp',
         description: 'Pure energy and laughter. The ultimate social sport for parties, team building, or just blowing off steam.',
         link: '/dodgeball-courts',
         linkText: 'Book Court',
         color: 'orange',
         bgColor: 'bg-orange-50 dark:bg-orange-900/30',
         textColor: 'text-orange-500 dark:text-orange-400',
         hoverBg: 'group-hover:bg-orange-500'
      }
   ];

   return (
      <section className="bg-gray-50 dark:bg-[#050911] transition-colors duration-300 py-24 md:py-32 relative overflow-hidden">
         {/* Texture */}
         <div className="absolute inset-0 bg-[url('/textures/cubes.png')] opacity-[0.03] dark:opacity-[0.05]"></div>

         <div className="container mx-auto px-4 md:px-6 relative z-10">

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center max-w-3xl mx-auto mb-20"
            >
               <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-4 block">Find Your Passion</span>
               <h2 className="text-4xl md:text-5xl font-header font-bold text-dfw-navy dark:text-white uppercase leading-tight">
                  Our Sports
               </h2>
               <p className="text-gray-500 dark:text-gray-400 mt-4 text-lg font-light">
                  Four distinct ways to move, compete, and connect.
               </p>
            </motion.div>

            <motion.div
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-50px" }}
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
               {sports.map((sport, index) => {
                  const Icon = sport.icon;
                  return (
                     <motion.div
                        key={sport.name}
                        variants={cardVariants}
                        className="group relative bg-white dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden h-[400px]"
                     >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                           <OptimizedImage
                              src={sport.image}
                              alt={`${sport.name} at DFW Indoor Sports`}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-dfw-navy via-dfw-navy/70 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col justify-end p-8">
                           <div className={`w-12 h-12 ${sport.bgColor} ${sport.textColor} rounded-xl flex items-center justify-center mb-4 ${sport.hoverBg} group-hover:text-white transition-colors`}>
                              <Icon size={24} strokeWidth={1.5} />
                           </div>
                           <h3 className="text-xl font-header font-bold text-white uppercase mb-2">{sport.name}</h3>
                           <p className="text-sm text-gray-300 leading-relaxed mb-4 line-clamp-2">
                              {sport.description}
                           </p>
                           <Link href={sport.link} className={`text-xs font-bold ${sport.textColor} uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all`}>
                              {sport.linkText} <ArrowRight size={14} />
                           </Link>
                        </div>
                     </motion.div>
                  );
               })}
            </motion.div>
         </div>
      </section>
   );
};

export default HomeFeatures;