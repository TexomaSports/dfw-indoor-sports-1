'use client'

import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const CricketFAQ: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#020408] border-t border-gray-100 dark:border-white/5 transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-header font-bold text-[#006838] dark:text-white uppercase mb-12 text-center"
          >
            Cricket Rental FAQ
          </motion.h2>
          
          <div className="divide-y divide-gray-200 dark:divide-white/10">
             {[
                { q: "Do I need to bring my own cricket equipment?", a: "No. We provide basic cricket equipment including balls (leather and synthetic), protective gear (helmets, pads, gloves in all sizes), stumps, and training aids. However, most serious players prefer their own bat for comfort." },
                { q: "Are cricket lanes available for complete beginners?", a: "Absolutely. Many members start with zero cricket experience. Our staff provides basic safety instruction and equipment orientation. Bowling machines are excellent for beginners." },
                { q: "What's included with the bowling machine?", a: "Full bowling machine access is included FREE with every lane rental (normally $15-20 extra elsewhere). Machines are programmable: adjustable speed (40-90 mph), variable line and length." },
                { q: "Can I book lanes for team practice?", a: "Yes. Teams frequently rent multiple lanes simultaneously. Three-lane setup accommodates full team rotation. We offer discounted team packages for regular weekly bookings." },
                { q: "How far in advance can I book cricket lanes?", a: "Online booking opens 30 days in advance for members, 14 days for drop-in players. Peak times (weekday evenings) book quickly." },
                { q: "What's your cancellation policy?", a: "Cancellations made 24+ hours before booking receive full refund or credit. Cancellations 12-24 hours before receive 50% credit. Less than 12 hours forfeits payment." },
                { q: "Can I use video recording during practice?", a: "Yes. Each lane has tablet/phone mounting station for video recording. Bring your device or borrow a tablet (limited availability)." },
                { q: "What if I'm visiting from out of town?", a: "Drop-in hourly rentals are perfect for traveling players. No membership required. Book online before arriving or call day-of for availability." }
             ].map((item, idx) => (
                <motion.details 
                  key={idx} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group py-6 cursor-pointer"
                >
                   <summary className="flex justify-between items-center font-bold text-[#006838] dark:text-white uppercase tracking-wide text-xs select-none hover:text-[#CC0000] dark:hover:text-green-400 transition-colors list-none">
                      {item.q}
                      <span className="transition-transform group-open:rotate-180 text-gray-400">
                         <ChevronDown size={16} />
                      </span>
                   </summary>
                   <div className="pt-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed animate-fade-in-up pl-4 border-l-2 border-[#CC0000]/10 dark:border-green-500/20 mt-2">
                      {item.a}
                   </div>
                </motion.details>
             ))}
          </div>
       </div>
    </section>
  );
};

export default CricketFAQ;