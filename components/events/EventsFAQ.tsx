import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const EventsFAQ: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0A111F] border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
         <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-12 text-center">Event Planning FAQ</h2>
            
            <div className="space-y-3">
               {[
                  { q: "How far in advance should I book?", a: "For small events (birthdays), 2-4 weeks is sufficient. For large tournaments or corporate buyouts, we recommend 6-8 weeks to ensure availability. Popular dates (weekends) book quickly." },
                  { q: "What's included in event packages?", a: "Facility rental, equipment, professional facilitation/coaching, basic setup/cleanup, and party/meeting room access. Catering is optional." },
                  { q: "Can I bring my own food?", a: "Yes! All packages allow you to bring your own cake, food, and decor. We just ask no outside alcohol (adults can BYOB with coordination)." },
                  { q: "Do you provide staff?", a: "Absolutely. All birthday and corporate packages include professional coaching/facilitation to run the games and manage the timeline." },
                  { q: "Is the facility climate controlled?", a: "Yes. 100% climate controlled year-round. No rainouts, no heat exhaustion. Just perfect playing conditions." },
                  { q: "What is your cancellation policy?", a: "14+ days notice receives full refund minus deposit. 7-14 days receives 50% refund. We are flexible with rescheduling for emergencies." },
                  { q: "What sports are available?", a: "Cricket, Badminton, Soccer, and Dodgeball. You can choose one or combine multiple depending on your package." }
               ].map((item, idx) => (
                  <motion.details 
                     key={idx} 
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.05 }}
                     className="group bg-white dark:bg-white/5 rounded-sm border border-gray-200 dark:border-white/10 overflow-hidden transition-all duration-300 open:shadow-md"
                  >
                     <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-dfw-navy dark:text-white uppercase tracking-wide text-xs select-none hover:bg-gray-50 dark:hover:bg-white/10 transition-colors">
                        {item.q}
                        <span className="transition-transform group-open:rotate-180 text-gray-400">
                           <ChevronDown size={16} />
                        </span>
                     </summary>
                     <div className="p-6 pt-0 text-gray-600 dark:text-gray-300 text-sm leading-relaxed border-t border-gray-50 dark:border-white/5 mt-2 ml-4 border-l-2 border-dfw-red/20 pl-4">
                        {item.a}
                     </div>
                  </motion.details>
               ))}
            </div>
         </div>
      </section>
  );
};

export default EventsFAQ;