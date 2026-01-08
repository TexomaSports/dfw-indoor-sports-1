'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, User, ChevronLeft, Tag } from 'lucide-react'

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
    return (
        <div className="relative w-full h-[60vh] min-h-[500px] bg-[#020408] overflow-hidden flex items-end pb-20">
            {/* Background Layers */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.4 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url("${image}")` }}
                />

                {/* Advanced Gradients for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-[#020408]/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020408]/50 via-transparent to-[#020408]/50" />
            </div>

            {/* Back Link */}
            <div className="absolute top-24 left-4 md:left-10 z-20">
                <Link href="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors bg-black/20 hover:bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm text-sm font-bold uppercase tracking-wider">
                    <ChevronLeft size={16} /> Back to Blog
                </Link>
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4">
                <div className="max-w-4xl">
                    {/* Meta Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-dfw-red text-white text-[10px] font-bold uppercase tracking-widest">
                            <Tag size={12} /> {category}
                        </span>
                        <div className="h-px w-8 bg-white/20" />
                        <span className="text-gray-300 text-xs font-bold uppercase tracking-wide flex items-center gap-2">
                            <Calendar size={12} className="text-dfw-red" /> {date}
                        </span>
                        <span className="text-gray-300 text-xs font-bold uppercase tracking-wide flex items-center gap-2">
                            <Clock size={12} className="text-dfw-red" /> {readTime}
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-4xl md:text-6xl font-header font-bold text-white leading-tight mb-6 drop-shadow-xl"
                    >
                        {title}
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-300 font-light max-w-2xl leading-relaxed mb-8 border-l-4 border-dfw-red pl-6"
                    >
                        {description}
                    </motion.p>

                    {/* Author */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center gap-3"
                    >
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                            <User size={20} className="text-white" />
                        </div>
                        <div>
                            <div className="text-xs text-gray-400 uppercase tracking-widest">Written By</div>
                            <div className="text-sm font-bold text-white">{author}</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
