import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const SportsFAQ: React.FC = () => {
  return (
    <section className="bg-white dark:bg-[#020408] py-24 transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-12 text-center"
          >
            Your Questions Answered
          </motion.h2>
          
          <div className="divide-y divide-gray-100 dark:divide-white/10">
             {[
                { q: "Can I just walk in and play?", a: "Yes! We love drop-ins. However, evenings and weekends can get busy, so we highly recommend booking your slot online to guarantee your court time." },
                { q: "Do I need to be a member to use the facility?", a: "Not at all. You can rent courts or lanes by the hour as a guest. Membership is simply a great option if you find yourself playing more than twice a month." },
                { q: "What should I bring for my first visit?", a: "Just comfortable athletic wear and non-marking indoor shoes (to protect our courts!). We have rental rackets, bats, and balls available if you don't have your own gear yet." },
                { q: "Is the facility suitable for young children?", a: "Absolutely. We have specific youth programs for ages 6+, and our dodgeball and badminton courts are very popular with families. We can adjust net heights and provide lighter equipment." },
                { q: "Do you have leagues for beginners?", a: "Yes. We run 'recreational' divisions in all our sports specifically designed for people who are new to the game or just playing for fun/fitness." },
                { q: "Is the facility open year-round?", a: "Yes, 365 days a year. Our climate-controlled indoor environment means you can play comfortably whether it's 105°F or 20°F outside." },
             ].map((item, idx) => (
                <motion.details 
                  key={idx} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group py-6 cursor-pointer"
                >
                   <summary className="flex justify-between items-center font-bold text-dfw-navy dark:text-white uppercase tracking-wide text-sm select-none hover:text-dfw-red dark:hover:text-dfw-red transition-colors list-none">
                      <span className="flex items-center gap-4">
                         <span className="text-gray-300 dark:text-gray-600 font-mono text-xs">0{idx + 1}</span>
                         {item.q}
                      </span>
                      <span className="bg-gray-50 dark:bg-white/10 p-2 rounded-full text-gray-400 group-hover:text-dfw-red transition-colors">
                         <ChevronDown size={16} className="transition-transform group-open:rotate-180" />
                      </span>
                   </summary>
                   <div className="pl-10 pr-4 pt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed animate-fade-in-up">
                      {item.a}
                   </div>
                </motion.details>
             ))}
          </div>
       </div>
    </section>
  );
};

export default SportsFAQ;