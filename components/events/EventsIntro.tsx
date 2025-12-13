import React from 'react';
import { Briefcase, Activity, Users, Zap, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const EventsIntro: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#020408] relative transition-colors duration-300">
         {/* Texture */}
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05]"></div>

         <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
               
               {/* Left: The Narrative */}
               <motion.div 
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
                 className="lg:w-1/2"
               >
                  <div className="inline-flex items-center gap-2 mb-6">
                     <Briefcase size={16} className="text-dfw-red" />
                     <span className="text-dfw-navy dark:text-white font-mono text-xs font-bold uppercase tracking-widest">The Perfect Venue</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-header font-bold text-dfw-navy dark:text-white uppercase leading-[0.95] mb-8">
                     Why DFW Indoor Sports?
                  </h2>
                  <div className="prose prose-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10 font-light">
                     <p>
                        Forget hotel conference rooms with stale coffee. Skip the generic party venues with minimum effort. 
                     </p>
                     <p className="font-semibold text-dfw-navy dark:text-white">
                        We offer something completely different: events built around actual sports, competition, and physical activity.
                     </p>
                     <p>
                        We're a sports facility first, event venue second - and that makes all the difference. Authentic energy, real competition, and facilities designed for action, not just standing around.
                     </p>
                  </div>

                  <div className="grid grid-cols-1 gap-6 mb-10">
                     <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-lg border border-red-100 dark:border-red-900/20">
                        <h4 className="font-bold text-red-700 dark:text-red-400 uppercase text-sm mb-2">The Traditional Problem</h4>
                        <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-2 list-disc pl-4">
                           <li>Kids corralled into limited activity rooms</li>
                           <li>"Trust fall" corporate exercises nobody enjoys</li>
                           <li>Inadequate facilities not designed for real competition</li>
                        </ul>
                     </div>
                     <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-lg border border-green-100 dark:border-green-900/20">
                        <h4 className="font-bold text-green-700 dark:text-green-400 uppercase text-sm mb-2">The DFW Difference</h4>
                        <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-2 list-disc pl-4">
                           <li>Purpose-built 50,000 sq ft infrastructure</li>
                           <li>Expert coordination by staff who understand sports logistics</li>
                           <li>Authentic competition that builds real bonds</li>
                        </ul>
                     </div>
                  </div>
               </motion.div>

               {/* Right: AEO Quick Answer Box */}
               <motion.div 
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
                 className="lg:w-1/2 w-full"
               >
                  <div className="bg-dfw-navy dark:bg-[#0A111F] p-8 rounded-lg shadow-2xl relative overflow-hidden text-white border border-white/10 group">
                     {/* Decorative Elements */}
                     <div className="absolute top-0 right-0 w-32 h-32 bg-dfw-red/20 rounded-full blur-[50px] pointer-events-none"></div>
                     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10"></div>
                     
                     <h3 className="font-header font-bold uppercase text-xl mb-6 text-white flex items-center gap-3 relative z-10">
                        <HelpCircle size={20} className="text-dfw-red" /> Quick Facts
                     </h3>
                     
                     <div className="space-y-6 relative z-10 text-sm">
                        <div>
                           <h4 className="font-bold text-gray-400 uppercase text-xs tracking-widest mb-1">What can you host?</h4>
                           <p className="text-gray-200">Birthday parties, corporate team-building, tournaments, school field trips, and private group gatherings.</p>
                        </div>
                        <div>
                           <h4 className="font-bold text-gray-400 uppercase text-xs tracking-widest mb-1">Capacity?</h4>
                           <p className="text-gray-200">10 to 200+ guests depending on event type.</p>
                        </div>
                        <div>
                           <h4 className="font-bold text-gray-400 uppercase text-xs tracking-widest mb-1">Sports Available?</h4>
                           <p className="text-gray-200">Cricket, Badminton, Soccer, Dodgeball.</p>
                        </div>
                        <div>
                           <h4 className="font-bold text-gray-400 uppercase text-xs tracking-widest mb-1">What's Included?</h4>
                           <p className="text-gray-200">Facility, equipment, coaching/facilitation, event coordination. Catering is optional.</p>
                        </div>
                        <div>
                           <h4 className="font-bold text-gray-400 uppercase text-xs tracking-widest mb-1">Booking Lead Time?</h4>
                           <p className="text-gray-200">2-4 weeks for small events, 6-8 weeks for tournaments or peak dates.</p>
                        </div>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
  );
};

export default EventsIntro;