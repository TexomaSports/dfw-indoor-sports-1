'use client'

/**
 * HomeMarquee - Premium Typography-Focused Marquee
 * 
 * Design Philosophy (Inspired by luxury brand websites):
 * - Clean, sophisticated typography as the hero element
 * - Subtle glow effects instead of cartoon icons
 * - Premium diamond separators with refined animations
 * - Elegant hover states with smooth transitions
 */

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

// Sports items - now focused purely on elegant typography
const SPORTS_ITEMS = [
  { name: 'CRICKET' },
  { name: 'BADMINTON' },
  { name: 'SOCCER' },
  { name: 'DODGEBALL' },
];

const HomeMarquee: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  // Premium separator - elegant diamond shape
  const DiamondSeparator = () => (
    <div className="mx-8 md:mx-12 flex items-center justify-center">
      <div className="relative">
        {/* Outer glow */}
        <div className="absolute inset-0 w-3 h-3 bg-dfw-red/50 blur-md rounded-full transform rotate-45" />
        {/* Diamond shape */}
        <div className="w-2 h-2 bg-gradient-to-br from-dfw-red to-red-700 transform rotate-45 shadow-lg" />
      </div>
    </div>
  );

  // Render a single marquee item with premium typography
  const renderMarqueeItem = (item: typeof SPORTS_ITEMS[0], index: number, keyPrefix: string = '') => (
    <div key={`${keyPrefix}${index}`} className="flex items-center">
      <span
        className={`
          text-4xl md:text-6xl lg:text-7xl 
          font-header font-bold uppercase tracking-tight
          transition-all duration-700 ease-out
          cursor-default select-none
          ${isDarkMode
            ? 'text-white/10 hover:text-white/30'
            : 'text-white/20 hover:text-white/50'
          }
          hover:tracking-wide
        `}
        style={{
          textShadow: isDarkMode
            ? '0 0 60px rgba(255,255,255,0.05)'
            : '0 0 60px rgba(255,255,255,0.1)',
        }}
      >
        {item.name}
      </span>
      <DiamondSeparator />
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="bg-dfw-navy dark:bg-[#050a14] overflow-hidden py-8 md:py-10 border-y border-white/5 relative z-20"
    >
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />

      {/* Edge fade masks */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dfw-navy dark:from-[#050a14] to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dfw-navy dark:from-[#050a14] to-transparent z-20 pointer-events-none" />

      <div className="flex relative z-10">
        {/* First Loop Set */}
        <div className="animate-marquee flex whitespace-nowrap min-w-full shrink-0 items-center">
          {SPORTS_ITEMS.map((item, index) => renderMarqueeItem(item, index, 'first-'))}
        </div>

        {/* Second Loop Set (duplicate for seamless scroll) */}
        <div className="animate-marquee flex whitespace-nowrap min-w-full shrink-0 items-center">
          {SPORTS_ITEMS.map((item, index) => renderMarqueeItem(item, index, 'second-'))}
        </div>
      </div>
    </motion.div>
  );
};

export default HomeMarquee;