'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const SPORTS_ITEMS = [
  '🏏 CRICKET', '🏸 BADMINTON', '⚽ SOCCER', '🎯 DODGEBALL'
];

const HomeMarquee: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const strokeColor = isDarkMode ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.5)';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-dfw-navy dark:bg-white/5 overflow-hidden py-6 border-y border-white/5 relative z-20"
    >

      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('/textures/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-dfw-navy dark:from-black via-transparent to-dfw-navy dark:to-black z-20 pointer-events-none"></div>

      <div className="flex relative z-10 mask-linear-fade">
        {/* First Loop Set */}
        <div className="animate-marquee flex whitespace-nowrap min-w-full shrink-0 items-center">
          {SPORTS_ITEMS.map((item, index) => (
            <div key={index} className="flex items-center group">
              <span
                className="mx-8 text-3xl md:text-5xl font-header font-bold uppercase italic tracking-tighter text-transparent transition-all duration-500 group-hover:text-white/40 dark:group-hover:text-black/40 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] cursor-default select-none flex items-center gap-4"
                style={{ WebkitTextStroke: `2px ${strokeColor}` }}
              >
                {item}
              </span>
              <div className="mx-4 flex items-center justify-center w-2 h-2 rounded-full bg-dfw-red/70 relative shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
            </div>
          ))}
        </div>

        {/* Second Loop Set */}
        <div className="animate-marquee flex whitespace-nowrap min-w-full shrink-0 items-center">
          {SPORTS_ITEMS.map((item, index) => (
            <div key={`dup-${index}`} className="flex items-center group">
              <span
                className="mx-8 text-3xl md:text-5xl font-header font-bold uppercase italic tracking-tighter text-transparent transition-all duration-500 group-hover:text-white/40 dark:group-hover:text-black/40 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] cursor-default select-none flex items-center gap-4"
                style={{ WebkitTextStroke: `2px ${strokeColor}` }}
              >
                {item}
              </span>
              <div className="mx-4 flex items-center justify-center w-2 h-2 rounded-full bg-dfw-red/70 relative shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HomeMarquee;