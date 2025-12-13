import React from 'react';
import { Star, Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

const CricketComparison: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0A111F] border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6">
          
          {/* Comparison Table */}
          <div className="max-w-5xl mx-auto mb-24">
             <div className="text-center mb-12">
                <h2 className="text-3xl font-header font-bold text-[#006838] dark:text-white uppercase mb-4">The DFW Standard</h2>
                <p className="text-gray-500 dark:text-gray-400">How we stack up against typical nets.</p>
             </div>
             
             <div className="bg-white dark:bg-white/5 rounded-xl shadow-sm border border-gray-200 dark:border-white/10 overflow-hidden">
                <table className="w-full text-left border-collapse">
                   <thead>
                      <tr className="bg-[#006838] dark:bg-green-900/80 text-white">
                         <th className="p-5 md:p-6 text-sm font-bold uppercase tracking-wider">Feature</th>
                         <th className="p-5 md:p-6 text-sm font-bold uppercase tracking-wider bg-black/20 border-x border-white/10">DFW Indoor Sports</th>
                         <th className="p-5 md:p-6 text-sm font-bold uppercase tracking-wider opacity-70">Typical Facility</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-100 dark:divide-white/5 text-gray-700 dark:text-gray-300">
                      {[
                         { feat: "Pitch Length", us: "22 Yards (ICC)", them: "Often Shortened" },
                         { feat: "Bowling Machine", us: "FREE Included", them: "Extra $15-20/hr" },
                         { feat: "Climate Control", us: "72°F Year-Round", them: "None / Warehouse Fan" },
                         { feat: "Run-Up Space", us: "30+ Meters", them: "Limited / Restricted" },
                         { feat: "Booking", us: "Instant Online 24/7", them: "Phone Call Required" },
                         { feat: "Equipment", us: "Balls & Gear Provided", them: "Bring Your Own" },
                         { feat: "Coaching", us: "CricKingdom Certified", them: "Freelance / None" }
                      ].map((row, i) => (
                         <tr key={i} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                            <td className="p-5 md:p-6 font-bold text-[#006838] dark:text-green-400 text-sm">{row.feat}</td>
                            <td className="p-5 md:p-6 bg-green-50/30 dark:bg-green-900/20 text-sm font-bold text-gray-800 dark:text-white flex items-center gap-2 border-x border-gray-100 dark:border-white/10">
                               <Check size={16} className="text-green-600 dark:text-green-400" /> {row.us}
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
             <h2 className="text-3xl font-header font-bold text-[#006838] dark:text-white uppercase mb-12 text-center">Player Results</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                   { name: "Rajesh Kumar", role: "Club Captain", text: "Moved to DFW from Mumbai. After trying three places, this is the only one meeting international standards. The machine alone is worth the membership.", stars: 5 },
                   { name: "Priya Patel", role: "Parent", text: "My 14-year-old trains here. The climate control means he practices year-round without summer heat exhaustion. Worth every dollar.", stars: 5 },
                   { name: "Anjan M.", role: "Youth Coach", text: "Having proper 22-yard lanes instead of modified nets makes a huge difference in player development. Kids learn correct rhythm.", stars: 5 },
                   { name: "Mike T.", role: "Adult Beginner", text: "Complete beginner. Staff explained everything, provided gear, and the machine let me practice without needing a bowler. I'm hooked.", stars: 5 }
                ].map((t, i) => (
                   <motion.div 
                     key={i} 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="bg-white dark:bg-white/5 p-8 rounded-lg border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 relative group"
                   >
                      <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 dark:bg-white/10 group-hover:bg-[#006838] dark:group-hover:bg-green-500 transition-colors"></div>
                      <div className="flex text-yellow-400 mb-4 gap-1">
                         {[...Array(t.stars)].map((_, s) => <Star key={s} size={14} fill="currentColor" />)}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm italic mb-6 leading-relaxed">"{t.text}"</p>
                      <div>
                         <p className="font-bold text-[#006838] dark:text-white uppercase text-xs">{t.name}</p>
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

export default CricketComparison;