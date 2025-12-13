import React from 'react';
import { Star, Users, HandHeart, TrendingUp, ShieldCheck, Smile } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutValues: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-[#050911] border-y border-gray-200 dark:border-white/5 transition-colors duration-300" id="values">
       <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
             <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-3 block">Guiding Principles</span>
             <h2 className="text-4xl md:text-5xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6">Our Core Values</h2>
             <p className="text-gray-500 dark:text-gray-400">Excellence is the standard, but our values define the culture.</p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
             {[
                { icon: Star, title: "Excellence Without Ego", desc: "Pursuing high standards in facilities and coaching while maintaining humility and respect for all levels." },
                { icon: Users, title: "Community Over Competition", desc: "We love winning, but building a supportive environment where athletes thrive together comes first." },
                { icon: HandHeart, title: "Accessibility & Inclusion", desc: "Financial status or background should never prevent passion. We open doors for everyone." },
                { icon: TrendingUp, title: "Growth Mindset", desc: "Believing ability isn't fixed. Whether 8 or 58, beginner or pro, improvement is always possible." },
                { icon: ShieldCheck, title: "Integrity & Transparency", desc: "No hidden fees. No misleading promises. Honest operations and clear communication always." },
                { icon: Smile, title: "Passion First", desc: "We live and breathe sports. That energy is infused into every inch of our facility." }
             ].map((val, i) => (
                <motion.div 
                  key={i} 
                  variants={itemVariants}
                  className="bg-white dark:bg-white/5 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-white/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                   <div className="w-12 h-12 bg-dfw-navy/5 dark:bg-white/10 text-dfw-navy dark:text-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-dfw-red group-hover:text-white transition-colors">
                      <val.icon size={24} />
                   </div>
                   <h3 className="text-xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-3">{val.title}</h3>
                   <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{val.desc}</p>
                </motion.div>
             ))}
          </motion.div>
       </div>
    </section>
  );
};

export default AboutValues;