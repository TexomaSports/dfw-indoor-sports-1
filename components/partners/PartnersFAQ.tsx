'use client'

import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const PartnersFAQ: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#020408] transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-12 text-center"
          >
            Partnership FAQ
          </motion.h2>
          
          <div className="divide-y divide-gray-100 dark:divide-white/10">
             {[
                { q: "What types of businesses partner with DFW Indoor Sports?", a: "Diverse range: healthcare providers, restaurants, retail businesses, professional services, automotive, real estate, financial services, and tech companies. Any business targeting active families." },
                { q: "Can we customize partnership packages?", a: "Absolutely. Published tiers are starting points. We create custom partnerships aligning with your specific goals, budget, and target audience." },
                { q: "What's the minimum partnership commitment?", a: "Standard partnerships require a 12-month commitment to ensure adequate exposure and ROI. Shorter-term event-specific sponsorships (3-6 months) are available." },
                { q: "Can we sponsor specific sports or programs?", a: "Yes. Program-specific sponsorships are available for Cricket Academy, Youth Soccer, etc., allowing you to target precise demographics." },
                { q: "How quickly can we activate?", a: "Digital components (website, email) typically launch in 1-2 weeks. Physical installations (banners, boards) take 3-4 weeks for production." }
             ].map((item, idx) => (
                <motion.details 
                  key={idx} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group py-6 cursor-pointer"
                >
                   <summary className="flex justify-between items-center font-bold text-dfw-navy dark:text-white uppercase tracking-wide text-xs select-none hover:text-dfw-red dark:hover:text-dfw-red transition-colors list-none">
                      {item.q}
                      <span className="transition-transform group-open:rotate-180 text-gray-400">
                         <ChevronDown size={16} />
                      </span>
                   </summary>
                   <div className="pt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed animate-fade-in-up">
                      {item.a}
                   </div>
                </motion.details>
             ))}
          </div>
       </div>
    </section>
  );
};

export default PartnersFAQ;