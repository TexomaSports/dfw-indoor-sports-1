'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface StatProps {
    icon: LucideIcon
    value: string
    label: string
    sublabel?: string
}

export default function CityStats({ stats }: { stats: StatProps[] }) {
    return (
        <section className="relative z-20 -mt-20 pb-20 pointer-events-none">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto pointer-events-auto">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index }}
                            className="bg-white/10 dark:bg-[#0a111f]/80 backdrop-blur-xl border border-white/20 p-6 rounded-xl hover:bg-white/20 transition-all duration-300 group"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="p-3 bg-dfw-red/10 rounded-full mb-3 group-hover:bg-dfw-red group-hover:scale-110 transition-all duration-300">
                                    <stat.icon className="text-dfw-red w-6 h-6" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</h3>
                                <p className="text-xs font-bold uppercase tracking-widest text-gray-300">{stat.label}</p>
                                {stat.sublabel && (
                                    <p className="text-[10px] text-gray-400 mt-1">{stat.sublabel}</p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
