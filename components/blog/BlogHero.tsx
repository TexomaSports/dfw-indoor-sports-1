'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, User, ChevronLeft, Tag, Share2 } from 'lucide-react'

interface BlogHeroProps {
    title: string
    description: string
    category: string
    date: string
    readTime: string
    author?: string
    image?: string
}

export default function BlogHero({
    title,
    description,
    category,
    date,
    readTime,
    author = "DFW Indoor Sports Team",
    image = "/images/hero/sports-action.webp"
}: BlogHeroProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    // Parallax transforms
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
    const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
    const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    // Smooth spring
    const smoothOpacity = useSpring(contentOpacity, { stiffness: 100, damping: 30 })

    // Stagger animation config
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            }
        }
    }

    const fadeUpItem = {
        hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 0.7 }
        }
    }

    return (
        <div ref={containerRef} className="relative w-full h-[70vh] min-h-[600px] bg-[#020408] overflow-hidden flex items-end">
            {/* ═══════════════════════════════════════════════════════════════
                BACKGROUND LAYERS
            ═══════════════════════════════════════════════════════════════ */}
            <div className="absolute inset-0 z-0">
                {/* Parallax Background Image */}
                <motion.div
                    style={{ y: backgroundY, scale: backgroundScale }}
                    className="absolute inset-0 w-full h-[120%] -top-[10%]"
                >
                    <motion.div
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.45 }}
                        transition={{ duration: 2 }}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url("${image}")` }}
                    />
                </motion.div>

                {/* Premium Gradient Stack */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-[#020408]/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020408]/70 via-transparent to-[#020408]/70" />
                <div className="absolute inset-0 bg-gradient-to-tr from-dfw-red-500/10 via-transparent to-blue-600/5 mix-blend-overlay" />

                {/* Noise texture */}
                <div className="absolute inset-0 noise-overlay opacity-30" />
            </div>

            {/* ═══════════════════════════════════════════════════════════════
                BACK LINK
            ═══════════════════════════════════════════════════════════════ */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute top-24 left-4 sm:left-8 lg:left-12 z-20"
            >
                <Link
                    href="/blog"
                    className="group inline-flex items-center gap-2 glass-premium px-5 py-2.5 rounded-full text-overline text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 focus-premium"
                >
                    <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Blog
                </Link>
            </motion.div>

            {/* ═══════════════════════════════════════════════════════════════
                MAIN CONTENT
            ═══════════════════════════════════════════════════════════════ */}
            <motion.div
                style={{ opacity: smoothOpacity }}
                className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-16"
            >
                <motion.div
                    className="max-w-4xl"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Meta Badges */}
                    <motion.div variants={fadeUpItem} className="flex flex-wrap items-center gap-4 mb-6">
                        {/* Category */}
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dfw-red-500/90 text-white text-overline tracking-luxury">
                            <Tag size={12} strokeWidth={2} />
                            {category}
                        </span>

                        {/* Separator */}
                        <div className="hidden sm:block w-8 h-px bg-gradient-to-r from-white/30 to-transparent" />

                        {/* Date */}
                        <span className="text-overline text-white/70 flex items-center gap-2">
                            <Calendar size={12} className="text-dfw-red-400" />
                            {date}
                        </span>

                        {/* Read time */}
                        <span className="text-overline text-white/70 flex items-center gap-2">
                            <Clock size={12} className="text-dfw-red-400" />
                            {readTime}
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        variants={fadeUpItem}
                        className="text-display-lg font-header text-white leading-[1.1] mb-6 text-balance"
                    >
                        {title}
                    </motion.h1>

                    {/* Description */}
                    <motion.div variants={fadeUpItem}>
                        <div className="flex gap-6 pl-6 border-l-2 border-dfw-red-500/50 mb-8">
                            <p className="text-body-lg text-white/70 font-light max-w-2xl leading-relaxed">
                                {description}
                            </p>
                        </div>
                    </motion.div>

                    {/* Author + Share */}
                    <motion.div variants={fadeUpItem} className="flex items-center justify-between">
                        {/* Author */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full glass-premium flex items-center justify-center">
                                <User size={20} className="text-white/70" strokeWidth={1.5} />
                            </div>
                            <div>
                                <div className="text-overline text-white/50 tracking-luxury mb-0.5">Written By</div>
                                <div className="text-body font-medium text-white">{author}</div>
                            </div>
                        </div>

                        {/* Share button */}
                        <button
                            className="group glass-premium p-3 rounded-xl hover:bg-white/10 transition-colors duration-300"
                            aria-label="Share article"
                        >
                            <Share2 size={18} className="text-white/60 group-hover:text-white transition-colors" strokeWidth={1.5} />
                        </button>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 dark:from-[#050911] to-transparent z-[5]" />
        </div>
    )
}
