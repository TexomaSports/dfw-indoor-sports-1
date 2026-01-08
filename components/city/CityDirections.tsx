'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, MapPin } from 'lucide-react'
import Link from 'next/link'

interface DirectionBlock {
    area: string
    distance: string
    time: string
    steps: string[]
}

export default function CityDirections({ city, address, googleMapsLink, directions }: {
    city: string
    address: string
    googleMapsLink: string
    directions: DirectionBlock[]
}) {
    return (
        <section className="py-24 bg-gray-50 dark:bg-[#0a111f] relative">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6">
                            Easy Drive from {city}
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            Navigate to <span className="text-dfw-navy dark:text-white font-bold">{address}</span>
                        </p>
                    </div>

                    <div className="grid gap-6">
                        {directions.map((dir, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 p-6 md:p-8 rounded-xl hover:border-dfw-red/30 transition-colors"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                    <h3 className="text-xl font-bold text-dfw-navy dark:text-white flex items-center gap-2">
                                        <MapPin className="text-dfw-red" size={20} /> {dir.area}
                                    </h3>
                                    <div className="flex items-center gap-4 text-sm font-mono text-gray-500">
                                        <span>{dir.distance}</span>
                                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                        <span>{dir.time}</span>
                                    </div>
                                </div>
                                <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-3 space-y-6">
                                    {dir.steps.map((step, sIdx) => (
                                        <li key={sIdx} className="pl-6 relative">
                                            <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-gray-200 dark:bg-gray-700 ring-4 ring-white dark:ring-[#0a111f]"></span>
                                            <span className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed block">{step}</span>
                                        </li>
                                    ))}
                                </ol>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            href={googleMapsLink}
                            target="_blank"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-dfw-navy text-white font-bold uppercase tracking-widest text-sm rounded hover:bg-dfw-red transition-colors duration-300 shadow-lg"
                        >
                            Open in Google Maps <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
