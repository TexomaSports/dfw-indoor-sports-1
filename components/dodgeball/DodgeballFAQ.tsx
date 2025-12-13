import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const DodgeballFAQ: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#020408] border-t border-gray-100 dark:border-white/5 transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-header font-bold text-[#4C1D95] dark:text-white uppercase mb-12 text-center"
          >
            Dodgeball FAQ
          </motion.h2>
          
          <div className="divide-y divide-gray-200 dark:divide-white/10">
             {[
                { q: "Is dodgeball safe? Does it hurt?", a: "Modern dodgeball is very safe. We use high-density foam balls (not the old rubber ones). They are soft enough to prevent injury and stinging, but firm enough to throw accurately. Rules prohibit headshots." },
                { q: "What should I wear?", a: "Athletic clothing and comfortable sneakers. You will be sprinting, stopping, and diving. No cleats allowed on the court." },
                { q: "Can very young kids play?", a: "We recommend ages 6+. Younger children may struggle with the mechanics and attention span. For mixed age parties, we adjust rules and ball sizes." },
                { q: "How many people do we need?", a: "Minimum 6 (3v3) for a fun game. Ideal is 10-16 players (5v5 to 8v8). The court can accommodate up to 24 players comfortably." },
                { q: "Do you provide referees?", a: "Yes. Staff are available to teach rules, facilitate games, and referee. This is included in birthday/corporate packages and available for an add-on fee for hourly rentals." },
                { q: "Can we bring our own balls?", a: "We provide all necessary equipment including balls of various sizes. You are welcome to bring your own foam balls if you have a specific preference, but rubber balls are not permitted." }
             ].map((item, idx) => (
                <motion.details 
                  key={idx} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group py-6 cursor-pointer"
                >
                   <summary className="flex justify-between items-center font-bold text-[#4C1D95] dark:text-white uppercase tracking-wide text-xs select-none hover:text-violet-500 dark:hover:text-violet-400 transition-colors list-none">
                      {item.q}
                      <span className="transition-transform group-open:rotate-180 text-gray-400">
                         <ChevronDown size={16} />
                      </span>
                   </summary>
                   <div className="pt-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed animate-fade-in-up pl-4 border-l-2 border-violet-100 dark:border-violet-500/20 mt-2">
                      {item.a}
                   </div>
                </motion.details>
             ))}
          </div>
       </div>
    </section>
  );
};

export default DodgeballFAQ;