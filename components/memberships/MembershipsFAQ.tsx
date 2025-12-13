'use client'

import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const MembershipsFAQ: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#020408] transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-12 text-center"
          >
            Membership FAQ
          </motion.h2>
          
          <div className="space-y-4">
             {[
                { q: "Is membership worth it if I only play once a week?", a: "Yes, especially for Badminton. 4 sessions a month drop-in is ~$150. Membership is $70-85. For cricket, you break even at about 3 hours of play per month." },
                { q: "Can I freeze my membership?", a: "We don't offer freezes, but monthly plans can be cancelled with 30-day notice. Half-yearly plans must complete their term." },
                { q: "Can I share my membership?", a: "No. Memberships are individual (except Family Gold). Sharing credentials carries a $250 fine. Use Guest Passes to bring friends!" },
                { q: "Do you offer student/senior discounts?", a: "Our rates are already highly discounted compared to drop-in. Students/Seniors benefit equally from unlimited access." },
                { q: "Is there a registration fee?", a: "Yes, a one-time $20 registration fee applies to all new memberships to cover administrative setup." },
                { q: "What if the facility is crowded?", a: "Members have priority booking rights (7-14 days in advance). We also cap total memberships to ensure reasonable access." }
             ].map((item, idx) => (
                <details key={idx} className="group border-b border-gray-100 dark:border-white/10 pb-4">
                   <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-dfw-navy dark:text-white uppercase tracking-wide text-xs select-none hover:text-dfw-red dark:hover:text-dfw-red transition-colors py-4">
                      {item.q}
                      <span className="transition-transform group-open:rotate-180 text-gray-400">
                         <ChevronDown size={16} />
                      </span>
                   </summary>
                   <div className="pt-2 pb-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed animate-fade-in-up">
                      {item.a}
                   </div>
                </details>
             ))}
          </div>
       </div>
    </section>
  );
};

export default MembershipsFAQ;