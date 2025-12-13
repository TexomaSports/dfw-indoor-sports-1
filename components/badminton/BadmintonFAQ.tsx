'use client'

import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const BadmintonFAQ: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#020408] border-t border-gray-100 dark:border-white/5 transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-header font-bold text-[#1E3A8A] dark:text-white uppercase mb-12 text-center"
          >
            Badminton FAQ
          </motion.h2>
          
          <div className="divide-y divide-gray-200 dark:divide-white/10">
             {[
                { q: "Do I need to bring my own racket and shuttlecocks?", a: "Rackets and shuttlecocks are not included with court rental. Bring your own equipment or rent rackets ($5/racket) and purchase shuttlecocks on-site ($15-35/tube)." },
                { q: "What shoes should I wear?", a: "Non-marking court shoes are STRICTLY required to protect the professional floor and prevent injury (rolled ankles). Running shoes are discouraged." },
                { q: "Can complete beginners use the courts?", a: "Absolutely. Many members start with zero experience. We recommend combining rental with beginner coaching for fastest learning." },
                { q: "What is the difference between singles and doubles play?", a: "Both use the same court (44' x 20'), just different boundary lines. Both are playable on every court - lines are marked for both formats." },
                { q: "How many people can play on one court?", a: "Maximum 4 players playing at once. You can rotate in extra players, but we recommend booking a second court for groups larger than 6." },
                { q: "What if my reserved partner cancels?", a: "Court rental is for the time, not specific players. If your partner cancels, invite someone else or check our member group for a sub." }
             ].map((item, idx) => (
                <motion.details 
                  key={idx} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group py-6 cursor-pointer"
                >
                   <summary className="flex justify-between items-center font-bold text-[#1E3A8A] dark:text-white uppercase tracking-wide text-xs select-none hover:text-blue-500 dark:hover:text-blue-400 transition-colors list-none">
                      {item.q}
                      <span className="transition-transform group-open:rotate-180 text-gray-400">
                         <ChevronDown size={16} />
                      </span>
                   </summary>
                   <div className="pt-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed animate-fade-in-up pl-4 border-l-2 border-blue-100 dark:border-blue-500/20 mt-2">
                      {item.a}
                   </div>
                </motion.details>
             ))}
          </div>
       </div>
    </section>
  );
};

export default BadmintonFAQ;