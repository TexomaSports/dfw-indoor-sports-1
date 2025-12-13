import React from 'react';
import { Ruler, Zap, Thermometer, Video, Calendar, ShieldCheck, Activity, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Ruler,
    title: "ICC-Standard Lanes",
    desc: "Regulation 22-yard (20.12m) pitch length, Australian cricket matting, full bowling run-up space (30+ meters).",
    detail: "Spec: 22 Yards x 30m Run-up"
  },
  {
    icon: Zap,
    title: "Bowling Machines Included",
    desc: "Normally $15-20 extra elsewhere - included FREE. Variable speed (40-90 mph), programmable line/length.",
    detail: "Tech: 40-90mph Swing/Spin"
  },
  {
    icon: Thermometer,
    title: "Climate-Controlled",
    desc: "Perfect 72°F year-round. No heat exhaustion in summer, no cold muscles in winter. Humidity controlled.",
    detail: "Spec: 72°F Constant"
  },
  {
    icon: Video,
    title: "Video Analysis",
    desc: "Recording stations at each lane. Tablet/phone mounting, multiple angle capability, and slow-motion playback.",
    detail: "Tech: PitchVision Integration"
  },
  {
    icon: Calendar,
    title: "Flexible Booking",
    desc: "Book online 24/7. Real-time availability, instant confirmation. Reserve up to 30 days in advance.",
    detail: "System: Instant Online"
  },
  {
    icon: ShieldCheck,
    title: "Equipment Provided",
    desc: "Basic gear included: balls (leather/synthetic), helmets, pads, gloves, batting tees, and training aids.",
    detail: "Gear: Full Kit Available"
  }
];

const CricketFeatures: React.FC = () => {
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
           <span className="text-[#CC0000] font-mono text-xs font-bold uppercase tracking-widest mb-3 block">Technical Specifications</span>
           <h2 className="text-3xl md:text-5xl font-header font-bold text-[#006838] dark:text-white uppercase leading-tight mb-6">
             Built For <span className="text-green-600">Serious Training</span>
           </h2>
           <p className="text-gray-500 dark:text-gray-400">Every inch of our facility is engineered to support professional development.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-white/5 p-8 rounded-lg border border-gray-200 dark:border-white/10 hover:border-green-500/50 dark:hover:border-green-500/50 hover:shadow-xl transition-all duration-500 group relative overflow-hidden h-full flex flex-col"
            >
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
               
               <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-green-50 dark:bg-green-900/30 text-[#006838] dark:text-green-400 rounded-lg flex items-center justify-center border border-green-100 dark:border-white/5 group-hover:bg-[#006838] group-hover:text-white transition-colors duration-300">
                     <feat.icon size={28} strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-mono text-gray-300 dark:text-gray-600 group-hover:text-green-500 transition-colors">0{idx + 1}</span>
               </div>
               
               <h3 className="text-xl font-header font-bold text-gray-900 dark:text-white uppercase mb-3 group-hover:text-green-800 dark:group-hover:text-green-400 transition-colors">{feat.title}</h3>
               <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6 border-b border-gray-100 dark:border-white/10 pb-6 flex-grow">
                  {feat.desc}
               </p>
               <div className="flex items-center gap-2 mt-auto">
                  <Activity size={12} className="text-green-500" />
                  <p className="text-xs text-green-700 dark:text-green-400 font-bold font-mono uppercase tracking-tight">
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

export default CricketFeatures;