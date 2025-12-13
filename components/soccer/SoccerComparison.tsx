import React from 'react';
import { Star, Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

const SoccerComparison: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0A111F] border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6">
          
          {/* Comparison Table */}
          <div className="max-w-5xl mx-auto mb-24">
             <div className="text-center mb-12">
                <h2 className="text-3xl font-header font-bold text-[#064E3B] dark:text-white uppercase mb-4">The Indoor Advantage</h2>
                <p className="text-gray-500 dark:text-gray-400">Why top players are moving indoors for technical development.</p>
             </div>
             
             <div className="bg-white dark:bg-white/5 rounded-xl shadow-sm border border-gray-200 dark:border-white/10 overflow-hidden">
                <table className="w-full text-left border-collapse">
                   <thead>
                      <tr className="bg-[#064E3B] dark:bg-emerald-900/80 text-white">
                         <th className="p-5 md:p-6 text-sm font-bold uppercase tracking-wider">Training Aspect</th>
                         <th className="p-5 md:p-6 text-sm font-bold uppercase tracking-wider bg-black/20 border-x border-white/10">Indoor 6v6</th>
                         <th className="p-5 md:p-6 text-sm font-bold uppercase tracking-wider opacity-70">Outdoor 11v11</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-100 dark:divide-white/5 text-gray-700 dark:text-gray-300">
                      {[
                         { feat: "Touches Per Hour", us: "200+ (High Repetition)", them: "30-50" },
                         { feat: "Decision Speed", us: "Rapid (Tight Space)", them: "Moderate Pace" },
                         { feat: "Ball Control", us: "Tight Space Mastery", them: "More Time/Space" },
                         { feat: "Fitness", us: "Constant Sprints", them: "Long Runs" },
                         { feat: "Weather Impact", us: "Perfect Every Time", them: "Variable" },
                         { feat: "Field Availability", us: "Reserved, Reliable", them: "Limited, Shared" }
                      ].map((row, i) => (
                         <tr key={i} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                            <td className="p-5 md:p-6 font-bold text-[#064E3B] dark:text-emerald-400 text-sm">{row.feat}</td>
                            <td className="p-5 md:p-6 bg-emerald-50/40 dark:bg-emerald-900/20 text-sm font-bold text-gray-800 dark:text-white flex items-center gap-2 border-x border-gray-100 dark:border-white/10">
                               <Check size={16} className="text-emerald-600 dark:text-emerald-400" /> {row.us}
                            </td>
                            <td className="p-5 md:p-6 text-sm text-gray-400">
                               {row.them}
                            </td>
                         </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </div>

          {/* Testimonials */}
          <div>
             <h2 className="text-3xl font-header font-bold text-[#064E3B] dark:text-white uppercase mb-12 text-center">Player Testimonials</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                   { name: "Carlos Martinez", role: "Youth Club Coach | Arlington, TX", text: "Our U14 club team trains here weekly during off-season. The indoor work transformed our players' first touch and close control. When outdoor season started, opposing coaches asked what we'd done differently.", stars: 5 },
                   { name: "Mike Thompson", role: "Recreational Player | Fort Worth, TX", text: "Adult recreational league every Thursday. Climate control means we play year-round without summer heat ruining matches. Competition is good, field quality is excellent, and it's the highlight of my week.", stars: 5 },
                   { name: "Robert Chen", role: "Adult Player | Irving, TX", text: "I'm 52 and playing soccer again after 20 years off. Indoor format is perfect - smaller field suits my fitness level, and the cushioned turf is easier on my knees than outdoor grass. Lost 30 pounds this year having fun.", stars: 5 },
                   { name: "Jennifer Lopez", role: "Parent | Southlake, TX", text: "High school team practices outdoors, but my son rents field here 2x weekly for individual training. His technical skills improved dramatically. Made varsity as a freshman largely due to extra indoor training.", stars: 5 }
                ].map((t, i) => (
                   <motion.div 
                     key={i} 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="bg-white dark:bg-white/5 p-8 rounded-lg border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 relative group h-full flex flex-col"
                   >
                      <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 dark:bg-white/10 group-hover:bg-emerald-500 transition-colors"></div>
                      <div className="flex text-yellow-400 mb-4 gap-1">
                         {[...Array(t.stars)].map((_, s) => <Star key={s} size={14} fill="currentColor" />)}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm italic mb-6 leading-relaxed flex-grow">"{t.text}"</p>
                      <div>
                         <p className="font-bold text-[#064E3B] dark:text-white uppercase text-xs">{t.name}</p>
                         <p className="text-gray-400 text-[10px] uppercase tracking-widest">{t.role}</p>
                      </div>
                   </motion.div>
                ))}
             </div>
          </div>

       </div>
    </section>
  );
};

export default SoccerComparison;