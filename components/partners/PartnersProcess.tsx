import React from 'react';
import { motion } from 'framer-motion';

const PartnersProcess: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-white dark:bg-[#020408] transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
             <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-4">How It Works</h2>
             <p className="text-gray-500 dark:text-gray-400">Four simple steps to launching your partnership.</p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
             {/* Connector Line - Desktop */}
             <div className="hidden md:block absolute top-[26px] left-0 w-full h-[2px] bg-gray-100 dark:bg-white/10 -z-10"></div>

             <motion.div 
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               className="grid grid-cols-1 md:grid-cols-4 gap-8"
             >
                {[
                   { step: "01", title: "Consultation", desc: "We discuss your business goals, target audience, and budget in a quick exploratory call." },
                   { step: "02", title: "Proposal", desc: "Receive a tailored package detailing benefits, placement, and ROI projections." },
                   { step: "03", title: "Activation", desc: "Agreement signed. We collect assets (logos) and begin production of signage and digital materials." },
                   { step: "04", title: "Optimization", desc: "Launch! Ongoing support, performance updates, and quarterly reviews to ensure success." }
                ].map((item, i) => (
                   <motion.div variants={itemVariants} key={i} className="flex flex-col items-center text-center group">
                      {/* Step Circle */}
                      <div className="w-14 h-14 bg-white dark:bg-[#0A111F] border-2 border-gray-100 dark:border-white/20 rounded-full flex items-center justify-center font-bold font-header text-xl text-dfw-navy dark:text-white mb-6 group-hover:border-dfw-red group-hover:text-dfw-red transition-all duration-300 shadow-sm relative z-10">
                         {item.step}
                      </div>
                      
                      <div className="bg-white dark:bg-white/5 p-6 border border-gray-100 dark:border-white/10 rounded-lg shadow-sm hover:shadow-lg transition-all w-full h-full">
                         <h4 className="font-bold text-dfw-navy dark:text-white uppercase mb-3 text-sm">{item.title}</h4>
                         <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                      </div>
                   </motion.div>
                ))}
             </motion.div>
          </div>
       </div>
    </section>
  );
};

export default PartnersProcess;