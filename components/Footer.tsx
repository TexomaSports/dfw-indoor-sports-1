'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, ArrowRight, Linkedin, Send, Check } from 'lucide-react'
import { CONTACT_INFO } from '@/constants'
import { motion } from 'framer-motion'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setTimeout(() => {
        setEmail('')
        setSubscribed(false)
      }, 3000)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <footer className="bg-[#050911] text-gray-400 pt-16 md:pt-24 pb-8 relative overflow-hidden font-sans border-t border-white/5">
      
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-dfw-red/40 to-transparent"></div>

      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none overflow-hidden opacity-[0.02]">
        <span className="text-[18vw] font-header font-bold text-white uppercase leading-none tracking-tighter whitespace-nowrap">
          DFW INDOOR
        </span>
      </div>

      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16"
        >
          
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6">
            <div>
              <Link href="/" className="inline-block group mb-4">
                <img src="/images/dfwlogo.png" alt="DFW Indoor Sports" className="h-12 w-auto" />
              </Link>
              <p className="text-sm leading-relaxed text-gray-500 font-medium max-w-sm">
                The premier destination for indoor sports in Fort Worth. Engineered for champions, open for everyone.
              </p>
            </div>
            
            <div className="space-y-3 pt-2">
               <a href={`https://maps.google.com/?q=${CONTACT_INFO.address}`} target="_blank" rel="noreferrer" className="flex items-start gap-4 group cursor-pointer hover:bg-white/5 p-2 -ml-2 rounded-lg transition-colors">
                  <div className="p-1.5 rounded bg-white/5 border border-white/10 text-gray-400 group-hover:text-dfw-red group-hover:border-dfw-red/30 transition-all mt-0.5">
                     <MapPin size={14} />
                  </div>
                  <div>
                     <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-0.5 group-hover:text-white transition-colors">Visit HQ</span>
                     <p className="text-xs text-gray-300 leading-snug group-hover:text-white transition-colors">
                        16230 Three Wide Drive Suite 200,<br/> Fort Worth, TX 76177
                     </p>
                  </div>
               </a>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-3 group cursor-pointer hover:bg-white/5 p-2 -ml-2 rounded-lg transition-colors">
                    <div className="p-1.5 rounded bg-white/5 border border-white/10 text-gray-400 group-hover:text-dfw-red group-hover:border-dfw-red/30 transition-all">
                       <Phone size={14} />
                    </div>
                    <div>
                       <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-0.5 group-hover:text-white transition-colors">Call Us</span>
                       <span className="text-xs text-gray-300 group-hover:text-white transition-colors font-mono">
                          {CONTACT_INFO.phone}
                       </span>
                    </div>
                 </a>

                 <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 group cursor-pointer hover:bg-white/5 p-2 -ml-2 rounded-lg transition-colors">
                    <div className="p-1.5 rounded bg-white/5 border border-white/10 text-gray-400 group-hover:text-dfw-red group-hover:border-dfw-red/30 transition-all">
                       <Mail size={14} />
                    </div>
                    <div>
                       <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-0.5 group-hover:text-white transition-colors">Email</span>
                       <span className="text-xs text-gray-300 group-hover:text-white transition-colors font-mono break-all">
                          {CONTACT_INFO.email}
                       </span>
                    </div>
                 </a>
               </div>
            </div>
          </motion.div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-x-4 gap-y-8 md:gap-8">
            <motion.div variants={itemVariants}>
              <h3 className="font-header text-sm font-bold text-white uppercase tracking-[0.1em] mb-4 md:mb-6 flex items-center gap-2">
                <span className="w-1 h-3 bg-dfw-red rounded-full"></span> Explore
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'About Us', href: '/about' },
                  { label: 'Academy', href: '/academy' },
                  { label: 'Coaching', href: '/academy/coaches' },
                  { label: 'Memberships', href: '/memberships' },
                  { label: 'Events', href: '/events' },
                ].map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="group flex items-center gap-2 text-xs md:text-sm text-gray-500 hover:text-white transition-colors py-1 md:py-0">
                      <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-dfw-red transition-colors"></span>
                      <span className="relative group-hover:translate-x-1 transition-transform">
                         {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

             <motion.div variants={itemVariants}>
              <h3 className="font-header text-sm font-bold text-white uppercase tracking-[0.1em] mb-4 md:mb-6 flex items-center gap-2">
                <span className="w-1 h-3 bg-blue-600 rounded-full"></span> Sports
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {[
                  { label: 'Cricket', href: '/cricket-lanes' },
                  { label: 'Badminton', href: '/badminton-courts' },
                  { label: 'Soccer', href: '/soccer-fields' },
                  { label: 'Dodgeball', href: '/dodgeball-courts' }
                ].map((sport, i) => (
                  <li key={i}>
                    <Link href={sport.href} className="group flex items-center gap-2 text-xs md:text-sm text-gray-500 hover:text-white transition-colors py-1 md:py-0">
                      <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-blue-500 transition-colors"></span>
                      <span className="relative group-hover:translate-x-1 transition-transform">
                         {sport.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="lg:col-span-3">
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl relative overflow-hidden group hover:border-white/20 transition-all">
               
               <h3 className="font-header text-sm font-bold text-white uppercase tracking-wider mb-2">Join The Community</h3>
               <p className="text-[11px] text-gray-500 mb-4 leading-relaxed">
                 Get exclusive tournament invites and special offers.
               </p>
               
               <form className="relative flex items-center mb-6" onSubmit={handleSubscribe}>
                 <Mail className="absolute left-3 text-gray-500 w-3.5 h-3.5" />
                 <input 
                   type="email" 
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   placeholder="Enter email" 
                   className="w-full bg-[#050911] border border-white/10 rounded-sm py-2.5 pl-9 pr-10 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-dfw-red focus:ring-1 focus:ring-dfw-red/50 transition-all font-mono"
                   required
                 />
                 <button type="submit" className={`absolute right-1 p-1.5 rounded-sm transition-all shadow-md active:scale-95 ${subscribed ? 'bg-green-600 text-white' : 'bg-dfw-red hover:bg-red-600 text-white'}`}>
                   {subscribed ? <Check size={10} /> : <Send size={10} />}
                </button>
               </form>

               <div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-gray-600 mb-3 block">Follow Us</span>
                  <div className="flex gap-2">
                      {[
                        { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-500 hover:border-pink-500/30" },
                        { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-500 hover:border-blue-500/30" },
                        { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-sky-400 hover:border-sky-400/30" },
                        { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-700 hover:border-blue-700/30" }
                      ].map((Social, i) => (
                        <a key={i} href={Social.href} aria-label={Social.label} className={`w-8 h-8 flex items-center justify-center rounded-sm bg-white/5 border border-white/5 text-gray-500 ${Social.color} hover:bg-white/10 transition-all duration-300`}>
                          <Social.icon size={14} />
                        </a>
                      ))}
                  </div>
               </div>
            </div>
          </motion.div>

        </motion.div>

        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-white/5 pt-8 flex flex-col-reverse md:flex-row justify-between items-center gap-6"
        >
          <div className="flex flex-col md:flex-row items-center gap-4">
             <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest text-center md:text-left">
               © 2024 DFW Indoor Sports.
             </p>
             <span className="hidden md:block text-gray-800">|</span>
             <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest text-center md:text-left">
               Built for Athletes.
             </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
             {['Privacy Policy', 'Terms of Service', 'Waiver', 'Refund Policy', 'Contact'].map((item, i) => {
               const path = item === 'Contact' ? '/contact' : 
                            item === 'Waiver' ? '/waiver' : 
                            item === 'Refund Policy' ? '/refund-policy' :
                            item === 'Privacy Policy' ? '/privacy' :
                            item === 'Terms of Service' ? '/terms' : '#'
               return (
                <Link key={i} href={path} className="text-[10px] font-mono text-gray-500 hover:text-white uppercase tracking-widest transition-colors relative group">
                   {item}
                   <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full opacity-30"></span>
                </Link>
               )
             })}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}