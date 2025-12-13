'use client'

import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const SoccerFAQ: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#020408] border-t border-gray-100 dark:border-white/5 transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-header font-bold text-[#064E3B] dark:text-white uppercase mb-12 text-center"
          >
            Soccer Field Rental FAQ
          </motion.h2>
          
          <div className="divide-y divide-gray-200 dark:divide-white/10">
             {[
                { q: "What equipment do I need to bring?", a: "Soccer ball, appropriate footwear (indoor soccer shoes or turf trainers - no outdoor cleats with metal studs), shin guards, water bottle, and athletic clothing. We provide training cones/markers. Soccer balls available for purchase if needed." },
                { q: "Can outdoor cleats be worn on the turf?", a: "Indoor soccer shoes or turf trainers recommended. Traditional outdoor cleats with plastic studs acceptable, but metal studs prohibited (damage turf). Many players prefer indoor shoes for better feel on artificial surface." },
                { q: "How many players fit on one field?", a: "Depends on format. 5v5 (10 players), 6v6 (12 players), 7v7 (14 players). Maximum recommended: 16 players for training sessions (allows substitutions and drills)." },
                { q: "Can we host a tournament?", a: "Yes. We accommodate soccer tournaments and can provide full-day or multi-day field rental. Tournament packages include field time, referee coordination (if needed), and facility access. Contact events coordinator for custom tournament planning." },
                { q: "Do you provide referees for games?", a: "Referees provided for organized league matches (included in league registration). For private field rentals, referees available upon request for additional fee ($25-40 depending on level). Most training sessions and pickup games self-referee." },
                { q: "What if we need to cancel our booking?", a: "24+ hours notice: full refund or credit. 12-24 hours: 50% credit. Less than 12 hours or no-show: payment forfeited. Weather never a cancellation reason (we're indoors)." },
                { q: "Can younger and older players play together?", a: "Yes, field rental allows mixed age groups. Many families rent fields for multi-generational play. Youth leagues and programs have age divisions for appropriate competition." },
                { q: "Is there a minimum rental time?", a: "One-hour minimum for field rental. No maximum - book as long as needed subject to availability. Most teams rent 1.5-2 hours for effective training sessions." },
                { q: "Do you host birthday parties?", a: "Yes. Soccer birthday parties popular for kids and adults. Packages include field time, basic equipment, party room access, and optional coaching/organization. Starting at $300 for 10 kids." },
                { q: "Can individuals rent fields or only teams?", a: "Both. Individuals can rent fields for personal training. We also offer player-matching services helping individuals find pickup games and regular playing partners." },
                { q: "Are goalkeepers allowed?", a: "Yes. Full goals available for goalkeeper training and match play. Goalkeeper-specific training sessions can be arranged with coaching staff." },
                { q: "What's the ceiling height?", a: "Adequate clearance for soccer play including high balls and goal kicks. Ceiling doesn't interfere with normal gameplay." }
             ].map((item, idx) => (
                <motion.details 
                  key={idx} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group py-6 cursor-pointer"
                >
                   <summary className="flex justify-between items-center font-bold text-[#064E3B] dark:text-white uppercase tracking-wide text-xs select-none hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors list-none">
                      {item.q}
                      <span className="transition-transform group-open:rotate-180 text-gray-400">
                         <ChevronDown size={16} />
                      </span>
                   </summary>
                   <div className="pt-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed animate-fade-in-up pl-4 border-l-2 border-emerald-100 dark:border-emerald-500/20 mt-2">
                      {item.a}
                   </div>
                </motion.details>
             ))}
          </div>
       </div>
    </section>
  );
};

export default SoccerFAQ;