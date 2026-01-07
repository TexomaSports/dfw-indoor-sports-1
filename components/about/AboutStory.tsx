'use client'

import React from 'react';
import { ShieldCheck, Users, Quote, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutStory: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white dark:bg-[#020408] relative transition-colors duration-300" id="story">
       <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
             
             {/* Left: The Problem & Vision */}
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="lg:col-span-7"
             >
                <div className="inline-flex items-center gap-2 mb-6">
                   <span className="w-2 h-2 bg-dfw-navy dark:bg-dfw-red rounded-full"></span>
                   <span className="text-dfw-navy dark:text-white font-mono text-xs font-bold uppercase tracking-widest">Our Why</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-header font-bold text-dfw-navy dark:text-white uppercase leading-[0.95] mb-8">
                   Built For Athletes, <br/>
                   <span className="text-gray-400">By Athletes.</span>
                </h2>

                <div className="prose prose-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
                   <p className="font-semibold text-dfw-navy dark:text-white">
                      Every great sports facility starts with a frustration. Ours was simple: talented athletes in Dallas Fort Worth had nowhere to call "home".
                   </p>
                   <p>
                      Cricket players drove hours to find decent nets. Badminton enthusiasts played in multipurpose gyms with drafts and glare. Families wanted a safe place where parents could play while kids trained, but found only fragmented options.
                   </p>
                   <p>
                      <span className="bg-dfw-red/10 text-dfw-red px-1 rounded-sm">We decided to build the solution.</span> A "third place"—not work, not home, but a sanctuary for sport. A facility designed specifically for serious play, where the turf is professional grade, the lighting is broadcast quality, and the community feels like family.
                   </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="p-6 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-sm hover:border-dfw-red/30 transition-colors">
                      <h4 className="font-bold text-dfw-navy dark:text-white uppercase text-sm mb-2 flex items-center gap-2">
                         <ShieldCheck size={16} className="text-dfw-red" /> The Standard
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                         To be North Texas's premier multi-sport complex, recognized internationally for facility quality and player development.
                      </p>
                   </div>
                   <div className="p-6 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-sm hover:border-dfw-red/30 transition-colors">
                      <h4 className="font-bold text-dfw-navy dark:text-white uppercase text-sm mb-2 flex items-center gap-2">
                         <Heart size={16} className="text-dfw-red" /> The Soul
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                         A welcoming community hub where beginners are encouraged, and pros are challenged. Everyone belongs.
                      </p>
                   </div>
                </div>
             </motion.div>

             {/* Right: Founder Badge & Image */}
             <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="lg:col-span-5 relative"
             >
                <div className="relative z-10 h-full min-h-[500px] rounded-sm overflow-hidden shadow-2xl group border border-gray-200 dark:border-white/10">
                   <img 
                      src="/images/sports/team-community.webp" 
                      alt="Community gathering at DFW Indoor Sports" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-dfw-navy via-dfw-navy/40 to-transparent opacity-90"></div>
                   
                   <div className="absolute bottom-8 left-8 right-8">
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-sm text-white">
                         <Quote size={32} className="text-dfw-red mb-4" />
                         <p className="font-header text-xl uppercase leading-tight mb-4 text-shadow-sm">
                            "We didn't just want to build a gym. We wanted to build a place where you high-five strangers after a good game."
                         </p>
                         <div className="flex items-center gap-3">
                            <div className="w-10 h-[1px] bg-white/50"></div>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-300">Founding Team</span>
                         </div>
                      </div>
                   </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-dfw-red/10 -z-10 rounded-full blur-2xl"></div>
             </motion.div>
          </div>
       </div>
    </section>
  );
};

export default AboutStory;