'use client'

import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutFAQ: React.FC = () => {
  return (
    <section className="bg-white dark:bg-[#020408] py-24 border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-12 text-center"
          >
            Common Questions
          </motion.h2>
          
          <div className="space-y-3">
             {[
                { q: "What sports can I play?", a: "We offer four primary sports: Cricket, Badminton, Soccer, and Dodgeball. All available year-round indoors." },
                { q: "Do I need a membership?", a: "No. We offer both membership options (unlimited access) and drop-in rentals. Membership is best for 2+ visits/month." },
                { q: "Is DFW Indoor Sports only for experienced players?", a: "Absolutely not. About 40% of new members are beginners. We welcome all skill levels with specific programs." },
                { q: "Can I rent for private events?", a: "Yes. We host birthday parties, corporate team-building, and tournaments. Dodgeball and Cricket are popular for groups." },
                { q: "How do I get started?", a: "Schedule a free tour, book a drop-in session online, or call (817) 938-0808 to discuss options." },
                { q: "Do you offer scholarships?", a: "Yes. We provide support for youth facing financial barriers. We believe money shouldn't prevent talent from training." }
             ].map((item, idx) => (
                <motion.details 
                  key={idx} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group bg-gray-50 dark:bg-white/5 rounded-sm border border-gray-200 dark:border-white/10 overflow-hidden transition-all duration-300 open:shadow-md"
                >
                   <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-dfw-navy dark:text-white uppercase tracking-wide text-sm select-none hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                      <span className="flex items-center gap-3"><span className="text-dfw-red">0{idx+1}.</span> {item.q}</span>
                      <span className="transition-transform group-open:rotate-180 text-gray-400">
                         <ChevronRight size={16} />
                      </span>
                   </summary>
                   <div className="p-6 pt-0 text-gray-600 dark:text-gray-300 text-sm leading-relaxed border-t border-gray-200 dark:border-white/5 mt-2 ml-4 border-l-2 border-dfw-red/20 pl-4">
                      {item.a}
                   </div>
                </motion.details>
             ))}
          </div>
       </div>
    </section>
  );
};

export default AboutFAQ;