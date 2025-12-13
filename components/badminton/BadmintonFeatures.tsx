import React from 'react';
import { ArrowUp, Layers, Lightbulb, Thermometer, Grid, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: ArrowUp,
    title: "30+ Foot Ceilings",
    desc: "Most recreational facilities have 15-20 foot ceilings. This fundamentally breaks badminton. High clears hit rafters.",
    detail: "Spec: 32ft Clear Height"
  },
  {
    icon: Layers,
    title: "Pro Sports Flooring",
    desc: "Concrete destroys knees. Basketball floors are slippery. We use tournament-quality 5mm synthetic badminton mats.",
    detail: "Tech: Shock Absorbent"
  },
  {
    icon: Lightbulb,
    title: "Shadow-Free Lighting",
    desc: "500 lux illumination positioned along the sidelines, not overhead. Track the shuttlecock perfectly without blinding glare.",
    detail: "Spec: Side-Mounted LED"
  },
  {
    icon: Thermometer,
    title: "Drift-Free Climate",
    desc: "HVAC system engineered with low-velocity diffusers. Maintains 72°F without creating air currents that alter shuttle flight.",
    detail: "Tech: Laminar Flow"
  },
  {
    icon: Grid,
    title: "Pro Net Systems",
    desc: "Regulation 5'1\" center height with professional tensioning. Heavy-duty posts that don't wobble or slide.",
    detail: "Equip: BWF Certified"
  },
  {
    icon: ShieldCheck,
    title: "Safety Zones",
    desc: "Adequate spacing between courts (3ft min) and behind baselines (5ft min). Play aggressive defense without wall crashes.",
    detail: "Layout: Competition Spacing"
  }
];

const BadmintonFeatures: React.FC = () => {
  return (
    <section className="bg-gray-50 dark:bg-[#050911] py-24 relative overflow-hidden transition-colors duration-300">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.04] dark:opacity-[0.06]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
           <span className="text-blue-600 font-mono text-xs font-bold uppercase tracking-widest mb-3 block">Technical Specifications</span>
           <h2 className="text-3xl md:text-5xl font-header font-bold text-[#1E3A8A] dark:text-white uppercase leading-tight mb-6">
             Built For <span className="text-blue-600">Serious Play</span>
           </h2>
           <p className="text-gray-500 dark:text-gray-400">Every inch of our courts is engineered to support speed, agility, and precision.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-white/5 p-8 rounded-lg border border-gray-200 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-xl transition-all duration-500 group relative overflow-hidden h-full flex flex-col"
            >
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
               
               <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg flex items-center justify-center border border-blue-100 dark:border-white/5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                     <feat.icon size={28} strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-mono text-gray-300 dark:text-gray-600 group-hover:text-blue-500 transition-colors">0{idx + 1}</span>
               </div>
               
               <h3 className="text-xl font-header font-bold text-gray-900 dark:text-white uppercase mb-3 group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors">{feat.title}</h3>
               <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6 border-b border-gray-100 dark:border-white/10 pb-6 flex-grow">
                  {feat.desc}
               </p>
               <div className="flex items-center gap-2 mt-auto">
                  <Zap size={12} className="text-blue-500" />
                  <p className="text-xs text-blue-700 dark:text-blue-400 font-bold font-mono uppercase tracking-tight">
                     {feat.detail}
                  </p>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BadmintonFeatures;