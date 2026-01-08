'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

interface SportCardProps {
    name: string
    icon: string
    price: string
    priceNote?: string
    features: string[]
    link: string
    delay?: number
}

const SportCard = ({ name, icon, price, priceNote, features, link, delay = 0 }: SportCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="group relative bg-[#0a111f] border border-white/10 rounded-xl overflow-hidden hover:border-dfw-red/50 transition-colors duration-300"
    >
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none text-9xl font-header leading-none select-none group-hover:opacity-10 transition-opacity">
            {name[0]}
        </div>

        <div className="p-8 relative z-10 h-full flex flex-col">
            <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 border border-white/5">
                    {icon}
                </div>
                <div className="text-right">
                    <div className="text-2xl font-bold text-dfw-red">{price}</div>
                    <div className="text-[10px] uppercase tracking-wider text-gray-500">{priceNote}</div>
                </div>
            </div>

            <h3 className="text-2xl font-header font-bold text-white uppercase mb-6 group-hover:text-dfw-red transition-colors">{name}</h3>

            <ul className="space-y-3 mb-8 flex-grow">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                        <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={14} />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <Link href={link} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-dfw-red transition-colors mt-auto">
                View Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
    </motion.div>
)

export default function CitySportsGrid({ sports }: { sports: Omit<SportCardProps, 'delay'>[] }) {
    return (
        <section className="py-24 bg-[#020408]">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="text-dfw-red font-bold uppercase tracking-widest text-xs block mb-4">World Class Facilities</span>
                    <h2 className="text-3xl md:text-5xl font-header font-bold text-white uppercase">Choose Your Sport</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {sports.map((sport, idx) => (
                        <SportCard key={sport.name} {...sport} delay={idx * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    )
}
