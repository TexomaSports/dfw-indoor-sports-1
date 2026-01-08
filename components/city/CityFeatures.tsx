'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Trophy, Users, Shield, Target } from 'lucide-react'

interface Feature {
    title: string
    description: string
    icon: any
}

interface CityFeaturesProps {
    title: string
    description: string
    features: Feature[]
}

export default function CityFeatures({ title, description, features }: CityFeaturesProps) {
    return (
        <section className="py-24 bg-gray-50 dark:bg-[#050911] relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('/textures/cubes.png')] opacity-[0.03] dark:opacity-[0.05]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-dfw-red font-bold uppercase tracking-widest text-xs block mb-4"
                    >
                        Why Choose Us
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6"
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 dark:text-gray-400 text-lg"
                    >
                        {description}
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white dark:bg-white/5 p-8 rounded-2xl border border-gray-100 dark:border-white/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-dfw-red/10 flex items-center justify-center shrink-0 group-hover:bg-dfw-red transition-colors duration-300">
                                    <feature.icon className="text-dfw-red group-hover:text-white transition-colors duration-300" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-dfw-navy dark:text-white uppercase mb-3">{feature.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
