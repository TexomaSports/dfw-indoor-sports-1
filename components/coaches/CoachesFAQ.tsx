import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const CoachesFAQ: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#020408] transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
             <h2 className="text-3xl md:text-5xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6">Coaching FAQ</h2>
             <div className="w-24 h-1 bg-dfw-red mx-auto"></div>
          </motion.div>

          <div className="divide-y divide-gray-100 dark:divide-white/10">
             {[
                { q: "How qualified are CricKingdom coaches?", a: "All head coaches hold minimum Cricket Australia Level 2 or ICC Level 2 certifications. This represents the global gold standard for high-performance coaching." },
                { q: "Can I request a specific coach for my child?", a: "Yes. While we assign coaches based on program level and scheduling, we accommodate coach preference requests when possible." },
                { q: "Do coaches work with complete beginners?", a: "Absolutely. Our coaches excel at introducing cricket to people who've never played, making the sport accessible and enjoyable for beginners." },
                { q: "What's the difference between group and private coaching?", a: "Group coaching (max 1:6) offers peer learning and affordability. Private coaching (1:1) offers maximum personalized attention and faster progression for specific technical needs." },
                { q: "How do coaches handle different skill levels in one group?", a: "Our coaches use differentiated instruction, providing appropriate challenges for each player within the group setting. Advanced players get complex drills; beginners work on fundamentals." },
                { q: "Can coaches help with cricket scholarships?", a: "Yes. For high school players, we provide guidance on US college cricket, skill development to competitive standards, and recruitment video assistance." }
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

export default CoachesFAQ;