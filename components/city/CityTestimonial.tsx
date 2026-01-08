'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

interface CityTestimonialProps {
    quote: string
    author: string
    location: string
    rating?: number
}

export default function CityTestimonial({ quote, author, location, rating = 5 }: CityTestimonialProps) {
    return (
        <section className="py-24 bg-dfw-navy relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-dfw-red/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl backdrop-blur-sm relative"
                >
                    <Quote className="absolute top-8 left-8 text-dfw-red/20 w-16 h-16 -z-10" />

                    <div className="flex flex-col items-center text-center">
                        <div className="flex gap-1 mb-6">
                            {[...Array(rating)].map((_, i) => (
                                <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                            ))}
                        </div>

                        <blockquote className="text-xl md:text-2xl font-light text-white leading-relaxed mb-8">
                            "{quote}"
                        </blockquote>

                        <div>
                            <div className="font-bold text-white uppercase tracking-wider">{author}</div>
                            <div className="text-dfw-red text-sm font-bold uppercase tracking-widest mt-1">{location}</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
