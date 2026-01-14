'use client'

import React from 'react';
import { ChevronRight, Calendar, Users, Heart, Smile } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const HomeHero: React.FC = () => {
  return (
    <div className="relative w-full h-[85vh] md:h-screen min-h-[500px] md:min-h-[700px] bg-[#020408] pb-6">
      {/* Container for rounded effect with Deep Physical Shadow */}
      <div className="relative h-full w-full overflow-hidden rounded-b-2xl md:rounded-b-[3rem] shadow-[0_40px_80px_-20px_rgba(10,17,31,0.6)] z-20">

        {/* Dynamic Background - CSS animation for LCP performance */}
        <div className="absolute inset-0 overflow-hidden bg-dfw-navy">
          {/* LCP Image - Using CSS animation instead of JS for faster paint */}
          <div className="absolute inset-0 opacity-50 animate-hero-zoom">
            <Image
              src="/images/hero/sports-action.webp"
              alt="Indoor sports action at DFW Indoor Sports facility"
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              className="object-cover object-center"
              quality={85}
            />
          </div>
          {/* Multi-layer gradients for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-[#020408]/40 to-transparent mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#020408]/90 via-[#020408]/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-dfw-red/10 via-transparent to-dfw-red/5 mix-blend-overlay"></div>
        </div>

        {/* Premium Ambient Luminosity - CSS animations for orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-[5]" aria-hidden="true">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-gradient-radial from-dfw-red/20 via-dfw-red/5 to-transparent blur-3xl animate-fade-in-delay" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-radial from-blue-500/10 via-blue-500/3 to-transparent blur-3xl animate-fade-in-delay-2" />
          <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-white/5 blur-2xl hidden lg:block animate-float" />
        </div>

        {/* Welcoming Glass Widget - CSS animation */}
        <div className="absolute top-24 right-4 md:top-32 md:right-16 z-30 hidden lg:flex flex-col gap-2 perspective-1000 animate-slide-in-right">
          <div className="p-5 rounded-lg flex items-center gap-6 bg-white/10 border border-white/20 shadow-lg backdrop-blur-md ring-1 ring-white/10 transform hover:rotate-y-2 transition-transform duration-500">
            <div>
              <span className="text-[10px] text-gray-300 font-sans font-bold uppercase tracking-widest mb-1 block">Facility Status</span>
              <span className="flex items-center gap-2 text-white font-bold text-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> Open & Welcoming
              </span>
            </div>
            <div className="h-8 w-[1px] bg-white/20"></div>
            <div>
              <span className="text-[10px] text-gray-300 font-sans font-bold uppercase tracking-widest mb-1 block">Atmosphere</span>
              <span className="text-white font-bold text-sm">Comfortable 72°F</span>
            </div>
            <div className="h-8 w-[1px] bg-white/20"></div>
            <div>
              <span className="text-[10px] text-gray-300 font-sans font-bold uppercase tracking-widest mb-1 block">Community</span>
              <span className="text-white font-bold text-sm">Active Now</span>
            </div>
          </div>
        </div>

        {/* Main Content - CSS animations for faster paint */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 h-full flex flex-col justify-center pt-16 md:pt-16">
          <div className="max-w-5xl">
            {/* Tagline */}
            <div className="flex items-center gap-4 mb-6 md:mb-8 animate-slide-up">
              <div className="px-4 py-1.5 md:px-5 md:py-2 border border-white/20 bg-white/10 text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] rounded-full flex items-center gap-2 backdrop-blur-md">
                <span className="text-dfw-red">♥</span> Made for Fort Worth
              </div>
            </div>

            {/* Headline - starts visible for LCP, animates in */}
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-header font-bold text-white leading-[1.1] md:leading-[1.1] uppercase tracking-tighter mb-6 md:mb-10 drop-shadow-2xl animate-slide-up-delay">
              Your Place <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">To Play.</span>
            </h1>

            {/* Description & Buttons */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 md:gap-20 animate-slide-up-delay-2">
              <p className="text-base md:text-xl text-gray-200 font-light max-w-xl leading-relaxed border-l-2 border-dfw-red pl-6 md:pl-8 backdrop-blur-sm">
                More than a facility, we're a community. Whether you're picking up a racket for the first time or chasing a championship, you have a home here in North Texas.
              </p>

              <div className="flex flex-row gap-4 md:gap-5 w-full sm:w-auto">
                <Link href="/rentals" className="group relative whitespace-nowrap px-6 md:px-10 py-4 md:py-5 bg-dfw-red text-white text-sm font-bold uppercase tracking-widest overflow-hidden rounded-sm shadow-lg hover:shadow-dfw-red/40 hover:-translate-y-1 transition-all duration-300 text-center flex justify-center items-center">
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine"></div>
                  <span className="relative z-10 flex items-center gap-3">
                    Start Playing <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </span>
                </Link>

                <Link href="/memberships" className="whitespace-nowrap px-6 md:px-10 py-4 md:py-5 border border-white/20 hover:bg-white hover:text-dfw-navy text-white text-sm font-bold uppercase tracking-widest transition-all rounded-sm backdrop-blur-md hover:shadow-lg hover:-translate-y-1 text-center flex items-center justify-center gap-3">
                  <Smile size={16} aria-hidden="true" /> Join the Family
                </Link>
              </div>
            </div>

            {/* Feature Strip */}
            <div className="mt-12 md:mt-24 pt-8 md:pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 animate-fade-in-delay-3">
              {[
                { icon: Heart, text: "Passion Driven" },
                { icon: Users, text: "Friendly Staff" },
                { icon: Smile, text: "Beginner Friendly" },
                { icon: Calendar, text: "Open Daily" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 md:gap-4 text-gray-300 group cursor-default hover:text-white transition-colors duration-500">
                  <div className="p-2 md:p-3 bg-white/5 rounded-full border border-white/10 group-hover:border-dfw-red/50 group-hover:bg-dfw-red/20 group-hover:text-dfw-red transition-all duration-300">
                    <item.icon className="shrink-0 transition-colors" size={16} aria-hidden="true" />
                  </div>
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest leading-tight">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-60 hidden md:flex">
          <span className="text-[10px] text-white/50 uppercase tracking-widest">Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;