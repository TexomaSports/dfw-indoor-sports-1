'use client'

import React, { useState, useEffect } from 'react';
import { ChevronRight, Calendar, Users, Heart, Smile, Play } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const HomeHero: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Trigger content reveal after intro animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2500); // 2.5s intro
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen bg-[#020408] overflow-hidden">
      
      {/* 1. Background Video (Always playing, z-0) */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className="object-cover w-full h-full"
        >
          <source src="https://videos.pexels.com/video-files/855074/855074-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for readability when content appears */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 0.7 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-[#020408]"
        />
      </div>

      {/* 2. Intro Mask Animation (z-50) */}
      <AnimatePresence>
        {!showContent && (
          <motion.div
            className="absolute inset-0 z-50 flex items-center justify-center bg-black mix-blend-multiply"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "linear" }}
          >
             <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 150, opacity: 1 }}
                transition={{ 
                    scale: { duration: 2.5, ease: [0.7, 0, 0.3, 1], delay: 0.2 },
                    opacity: { duration: 0.4 } 
                }}
                className="text-[15vw] md:text-[12vw] font-black text-white uppercase tracking-tighter select-none whitespace-nowrap cursor-default"
                style={{ lineHeight: 0.8 }}
             >
                PLAY
             </motion.span>
          </motion.div>
        )}
      </AnimatePresence>


      {/* 3. Hero Content (z-10) */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 h-full flex flex-col justify-center pt-20">
        <AnimatePresence>
          {showContent && (
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1 }}
                className="max-w-5xl"
            >
              
              {/* Tagline */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4 mb-6 md:mb-8"
              >
                <div className="px-4 py-1.5 border border-white/20 bg-white/10 text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] rounded-full flex items-center gap-2 backdrop-blur-md">
                  <span className="text-dfw-red animate-pulse">●</span> Live in Fort Worth
                </div>
              </motion.div>
              
              {/* Animated Split Headline */}
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-header font-bold text-white leading-[1] md:leading-[0.9] uppercase tracking-tighter mb-8 drop-shadow-2xl overflow-hidden">
                <div className="overflow-hidden">
                    <motion.span 
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
                        className="block"
                    >
                        Your Place
                    </motion.span>
                </div>
                <div className="overflow-hidden">
                    <motion.span 
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
                        className="block text-transparent bg-clip-text bg-gradient-to-r from-dfw-red via-white to-dfw-red bg-[length:200%_auto] animate-shine"
                    >
                        To Play.
                    </motion.span>
                </div>
              </h1>
              
              {/* Description & Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col lg:flex-row items-start lg:items-center gap-8 md:gap-20"
              >
                <p className="text-base md:text-xl text-gray-200 font-light max-w-xl leading-relaxed border-l-2 border-dfw-red pl-6 md:pl-8 backdrop-blur-sm">
                  Experience the ultimate indoor sports destination. From cricket to badminton, we're redefining the game in North Texas.
                </p>
                
                <div className="flex flex-row gap-4 md:gap-5 w-full sm:w-auto">
                  <Link href="/rentals" className="group relative whitespace-nowrap px-8 md:px-10 py-4 md:py-5 bg-dfw-red text-white text-sm font-bold uppercase tracking-widest overflow-hidden rounded-sm shadow-lg hover:shadow-dfw-red/40 transition-all duration-300 flex items-center justify-center">
                    <div className="absolute inset-0 w-full h-full bg-black/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                    <span className="relative z-10 flex items-center gap-3">
                      Book Court <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  
                  <Link href="/memberships" className="whitespace-nowrap px-8 md:px-10 py-4 md:py-5 border border-white/20 hover:bg-white hover:text-dfw-navy text-white text-sm font-bold uppercase tracking-widest transition-all rounded-sm backdrop-blur-md hover:shadow-lg flex items-center justify-center gap-3 group">
                    <span className="group-hover:scale-110 transition-transform"><Smile size={16} /></span> Join Us
                  </Link>
                </div>
              </motion.div>

              {/* Glass Stats Strip */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="mt-16 md:mt-24 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                {[
                  { label: "Surface", value: "Pro Grade" },
                  { label: "Courts", value: "12+ Indoor" },
                  { label: "Open", value: "5AM - 11PM" },
                  { label: "Rating", value: "4.9/5.0" }
                ].map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-xs text-gray-400 uppercase tracking-widest mb-1">{stat.label}</span>
                    <span className="text-xl md:text-2xl font-bold text-white font-header">{stat.value}</span>
                  </div>
                ))}
              </motion.div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
};

export default HomeHero;