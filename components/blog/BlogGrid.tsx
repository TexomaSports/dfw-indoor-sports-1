'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react'

interface BlogPost {
    title: string
    slug: string
    excerpt: string
    category: string
    date: string
    readTime: string
    featured?: boolean
}

export default function BlogGrid({ posts }: { posts: BlogPost[] }) {
    // Featured post is the first one
    const featuredPost = posts.find(p => p.featured) || posts[0]
    const otherPosts = posts.filter(p => p !== featuredPost)

    return (
        <section className="py-20 bg-gray-50 dark:bg-[#0a111f] relative">
            <div className="absolute inset-0 bg-[url('/textures/cubes.png')] opacity-[0.03] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">

                {/* Featured Post */}
                {featuredPost && (
                    <div className="mb-20">
                        <div className="flex items-end justify-between mb-8">
                            <h2 className="text-2xl font-header font-bold text-dfw-navy dark:text-white uppercase">Featured Article</h2>
                        </div>
                        <Link href={`/blog/${featuredPost.slug}`} className="group relative block rounded-2xl overflow-hidden shadow-2xl h-[500px]">
                            {/* Bg Image */}
                            <div className="absolute inset-0 bg-dfw-navy">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                                {/* Placeholder Image Pattern */}
                                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-dfw-red via-dfw-navy to-black" />
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="bg-dfw-red text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                                        {featuredPost.category}
                                    </span>
                                    <span className="text-gray-300 text-xs font-bold uppercase tracking-wide flex items-center gap-2">
                                        <Clock size={14} /> {featuredPost.readTime}
                                    </span>
                                </div>

                                <h3 className="text-3xl md:text-5xl font-header font-bold text-white mb-4 group-hover:text-dfw-red transition-colors duration-300">
                                    {featuredPost.title}
                                </h3>

                                <p className="text-lg text-gray-300 max-w-2xl mb-8 line-clamp-2">
                                    {featuredPost.excerpt}
                                </p>

                                <span className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm group-hover:gap-4 transition-all">
                                    Read Article <ArrowRight size={16} className="text-dfw-red" />
                                </span>
                            </div>
                        </Link>
                    </div>
                )}

                {/* Grid */}
                <div>
                    <div className="flex items-end justify-between mb-8">
                        <h2 className="text-2xl font-header font-bold text-dfw-navy dark:text-white uppercase">Latest Updates</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {otherPosts.map((post, idx) => (
                            <Link
                                key={idx}
                                href={`/blog/${post.slug}`}
                                className="group bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                            >
                                <div className="h-48 bg-gray-200 dark:bg-white/10 relative overflow-hidden">
                                    {/* Geometric Pattern Placeholder */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-dfw-navy/80 to-dfw-red/80 opacity-80" />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/20 backdrop-blur-md text-white px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-3 font-mono">
                                        <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                        <span className="w-1 h-1 bg-gray-500 rounded-full" />
                                        <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-dfw-navy dark:text-white mb-3 group-hover:text-dfw-red transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                                        <span className="text-xs font-bold uppercase tracking-widest text-dfw-navy dark:text-white group-hover:text-dfw-red transition-colors">Read Now</span>
                                        <ArrowRight size={14} className="text-gray-400 group-hover:text-dfw-red group-hover:translate-x-1 transition-all" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
