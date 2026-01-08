'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronRight, MapPin } from 'lucide-react'

interface CityHeroProps {
    city: string
    distance: string
    heroImage?: string
    tagline?: string
}

export default function CityHero({ city, distance, heroImage = '/images/hero/sports-action.webp', tagline }: CityHeroProps) {
    return (
        <div className="relative w-full h-[85vh] md:h-[90vh] min-h-[600px] bg-[#020408] overflow-hidden">
            {/* Background Layers */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.4 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url("${heroImage}")` }}
                />

                {/* Advanced Gradients for Depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-[#020408]/50 to-transparent mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020408]/90 via-[#020408]/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-tr from-dfw-red/20 via-transparent to-blue-500/10 mix-blend-overlay" />
            </div>

            {/* Ambient Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-dfw-red/20 rounded-full blur-[100px]"
                />
                <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
                <div className="max-w-4xl">
                    {/* Location Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 group hover:bg-white/20 transition-colors cursor-default"
                    >
                        <MapPin size={16} className="text-dfw-red group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-bold uppercase tracking-widest text-white">Serving {city}, TX</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                        className="text-5xl sm:text-6xl md:text-8xl font-header font-bold text-white leading-[1.1] uppercase tracking-tighter mb-8 drop-shadow-2xl"
                    >
                        Indoor Sports <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                            Near {city}
                        </span>
                    </motion.h1>

                    {/* Subheadline with Red Bar */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 pl-6 border-l-4 border-dfw-red"
                    >
                        <p className="text-lg md:text-xl text-gray-300 font-light max-w-xl leading-relaxed">
                            {tagline || `World-class cricket, badminton, and soccer facilities just a short drive from ${city}.`}
                        </p>
                        <div className="hidden md:block w-px h-12 bg-white/20" />
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-white tabular-nums">{distance}</span>
                            <span className="text-xs text-gray-400 uppercase tracking-wider">Estimated Drive</span>
                        </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link href="/rentals" className="group relative px-8 py-4 bg-dfw-red text-white text-sm font-bold uppercase tracking-widest rounded-sm overflow-hidden shadow-lg hover:shadow-dfw-red/50 transition-all hover:-translate-y-1">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-shine" />
                            <span className="relative z-10 flex items-center gap-2">
                                Book a Court <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>

                        <Link href="/contact" className="px-8 py-4 bg-transparent border border-white/30 text-white text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-white hover:text-dfw-navy transition-all hover:-translate-y-1 backdrop-blur-sm flex items-center gap-2">
                            Get Directions
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent animate-pulse" />
            </motion.div>
        </div>
    )
}
