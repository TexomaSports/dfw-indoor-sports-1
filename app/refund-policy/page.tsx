'use client'

import { ShieldAlert, CheckCircle2, AlertTriangle, XCircle, Info } from 'lucide-react'
import { motion } from 'framer-motion'
import { generateBreadcrumbSchema } from '@/lib/metadata'

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function RefundPolicyPage() {
  return (
    <div className="bg-white dark:bg-[#020408] min-h-screen font-sans selection:bg-dfw-red selection:text-white transition-colors duration-300 text-gray-900 dark:text-gray-100">
      <div className="relative bg-[#020408] py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020408]/90"></div>
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="container mx-auto px-4 md:px-6 relative z-10 text-center"
        >
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-gray-400 font-mono text-[10px] uppercase tracking-[0.25em] mb-8">
              <ShieldAlert size={14} className="text-dfw-red" />
              Policy Document
           </div>
           <h1 className="text-4xl md:text-6xl font-header font-bold text-white uppercase mb-6 tracking-tight">
             Refunds & <span className="text-dfw-red">Cancellations</span>
           </h1>
           <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
             Clear, fair policies for court rentals, memberships, programs, and events. We value transparency and want you to understand our cancellation terms before booking.
           </p>
           <p className="text-xs text-gray-500 font-mono mt-8 uppercase tracking-widest">Last Updated: December 2024</p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.2, duration: 0.6 }}
             className="lg:w-1/4"
           >
              <div className="sticky top-24 bg-gray-50 dark:bg-[#0A111F] p-6 rounded-lg border border-gray-100 dark:border-white/10 transition-colors duration-300">
                 <h3 className="font-header font-bold text-dfw-navy dark:text-white uppercase text-lg mb-4">Quick Navigation</h3>
                 <nav className="space-y-2">
                    {[
                       { id: 'intro', label: 'Introduction' },
                       { id: 'court-lane-rentals', label: 'Court & Lane Rentals' },
                       { id: 'memberships', label: 'Memberships' },
                       { id: 'academy-programs', label: 'Academy & Coaching' },
                       { id: 'special-events', label: 'Events & Parties' },
                       { id: 'leagues-tournaments', label: 'Leagues & Tournaments' },
                       { id: 'pro-shop', label: 'Pro Shop' },
                       { id: 'weather-emergencies', label: 'Weather & Closures' },
                       { id: 'contact-exceptions', label: 'Exceptions & Contact' },
                    ].map((item) => (
                       <button 
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className="block w-full text-left text-xs font-bold text-gray-500 dark:text-gray-400 hover:text-dfw-red dark:hover:text-dfw-red hover:bg-white dark:hover:bg-white/5 px-3 py-2 rounded transition-all uppercase tracking-wide border-l-2 border-transparent hover:border-dfw-red"
                       >
                          {item.label}
                       </button>
                    ))}
                 </nav>
              </div>
           </motion.div>

           <motion.div 
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-100px" }}
             className="lg:w-3/4"
           >
              
              <motion.section variants={itemVariants} id="intro" className="mb-16 scroll-mt-28">
                 <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6">Our Commitment to Fair Policies</h2>
                 <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">At DFW Indoor Sports, we strive to maintain fair and transparent policies that protect both our business operations and our customers&apos; interests. This page outlines our refund and cancellation policies for all services we offer.</p>
                 <div className="bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500 p-6 my-6 rounded-r-sm">
                    <p className="text-sm text-blue-800 dark:text-blue-300 font-bold m-0 flex items-center gap-2">
                       <ShieldAlert size={16} /> Important Note
                    </p>
                    <p className="text-xs text-blue-700 dark:text-blue-200/70 mt-2 leading-relaxed m-0">
                       All policies are subject to our discretion in cases of extenuating circumstances. We&apos;re reasonable people and will work with you when genuine emergencies arise.
                    </p>
                 </div>
              </motion.section>

              <motion.hr variants={itemVariants} className="border-gray-200 dark:border-white/10 my-12" />

              <motion.section variants={itemVariants} id="court-lane-rentals" className="mb-16 scroll-mt-28">
                 <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-2">Hourly Court/Lane Rental Cancellation Policy</h2>
                 <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Applies to: Cricket lanes, badminton courts, soccer fields, and dodgeball courts</p>
                 
                 <h3 className="text-xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6">Cancellation Timeline</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="p-6 border border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-900/10 rounded-lg">
                       <h4 className="font-bold text-green-700 dark:text-green-400 uppercase text-sm mb-2 flex items-center gap-2"><CheckCircle2 size={16}/> 24+ Hours Notice</h4>
                       <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                          <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></div> Full refund to original payment method</li>
                          <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></div> OR full credit toward future booking</li>
                          <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></div> No penalties or fees</li>
                       </ul>
                    </div>
                    <div className="p-6 border border-yellow-200 dark:border-yellow-800 bg-yellow-50/50 dark:bg-yellow-900/10 rounded-lg">
                       <h4 className="font-bold text-yellow-700 dark:text-yellow-400 uppercase text-sm mb-2 flex items-center gap-2"><AlertTriangle size={16}/> 12-24 Hours Notice</h4>
                       <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                          <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-1.5"></div> 50% refund to original payment method</li>
                          <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-1.5"></div> OR 100% credit toward future booking</li>
                          <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-1.5"></div> Credit valid for 6 months</li>
                       </ul>
                    </div>
                    <div className="p-6 border border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-900/10 rounded-lg">
                       <h4 className="font-bold text-red-700 dark:text-red-400 uppercase text-sm mb-2 flex items-center gap-2"><XCircle size={16}/> Less Than 12 Hours</h4>
                       <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                          <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5"></div> No refund</li>
                          <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5"></div> One-time courtesy: 100% credit (first occurrence only)</li>
                       </ul>
                    </div>
                    <div className="p-6 border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 rounded-lg">
                       <h4 className="font-bold text-gray-700 dark:text-gray-200 uppercase text-sm mb-2 flex items-center gap-2"><XCircle size={16}/> No-Show</h4>
                       <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                          <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-1.5"></div> Payment forfeited completely</li>
                          <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-1.5"></div> No refund, no credit</li>
                       </ul>
                    </div>
                 </div>

                 <h3 className="text-xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-4">How to Cancel</h3>
                 <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400 marker:text-dfw-red">
                    <li><strong>Online (Recommended):</strong> Log into your account &gt; My Bookings &gt; Cancel Booking. Available 24/7.</li>
                    <li><strong>By Phone:</strong> Call (817) 938-0808 during business hours (Mon-Fri 9am-9pm).</li>
                 </ul>

                 <div className="mt-8 p-6 bg-gray-100 dark:bg-[#0A111F] rounded-lg border-l-4 border-dfw-navy dark:border-white/20">
                    <h4 className="m-0 text-dfw-navy dark:text-white font-bold uppercase text-sm flex items-center gap-2"><Info size={16} /> Weather Policy</h4>
                    <p className="mt-2 mb-0 text-sm text-gray-600 dark:text-gray-300"><strong>We are an indoor, climate-controlled facility.</strong> Weather is NOT a valid cancellation reason. Rain, heat, cold, or snow do not affect bookings inside our facility.</p>
                 </div>
              </motion.section>

              <motion.hr variants={itemVariants} className="border-gray-200 dark:border-white/10 my-12" />

              <motion.section variants={itemVariants} id="memberships" className="mb-16 scroll-mt-28">
                 <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6">Membership Cancellation & Refund Policy</h2>
                 
                 <h3 className="text-xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-3">Monthly Memberships</h3>
                 <p className="text-sm text-gray-600 dark:text-gray-400 mb-4"><strong>Applies to:</strong> Cricket Unlimited (Month-to-Month), Badminton Unlimited (Month-to-Month)</p>
                 <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400 marker:text-dfw-red mb-8">
                    <li><strong>Notice:</strong> 30-day written notice required.</li>
                    <li><strong>Timing:</strong> Must cancel BEFORE your next billing date to avoid being charged for the following month.</li>
                    <li><strong>Refunds:</strong> No refunds for current month already billed. No partial month refunds.</li>
                    <li><strong>Method:</strong> Email <a href="mailto:info@dfwindoorsports.com" className="text-dfw-red font-bold hover:underline">info@dfwindoorsports.com</a> with subject &quot;Membership Cancellation&quot;.</li>
                 </ul>

                 <h3 className="text-xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-3">Commitment Memberships (Half-Yearly)</h3>
                 <p className="text-sm text-gray-600 dark:text-gray-400 mb-4"><strong>Applies to:</strong> Gold Membership, Family Gold</p>
                 <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400 marker:text-dfw-red mb-8">
                    <li><strong>Commitment:</strong> 6-month minimum commitment required.</li>
                    <li><strong>Early Termination:</strong> Not allowed except for relocation (50+ miles), medical condition, or military deployment.</li>
                    <li><strong>Fee:</strong> If approved for early termination, fee is 50% of remaining commitment.</li>
                 </ul>

                 <h3 className="text-xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-3">Registration Fee</h3>
                 <p className="text-gray-600 dark:text-gray-400">The one-time $20 registration fee is <strong>NON-REFUNDABLE</strong> in all circumstances. This covers account setup and system processing.</p>
              </motion.section>

              <motion.hr variants={itemVariants} className="border-gray-200 dark:border-white/10 my-12" />

              <motion.section variants={itemVariants} id="academy-programs" className="mb-16 scroll-mt-28">
                 <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6">Academy Programs & Coaching</h2>
                 
                 <h3 className="text-xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-3">Session-Based Programs</h3>
                 <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400 marker:text-dfw-red mb-8">
                    <li><strong>Before Start:</strong> Full refund minus $25 admin fee.</li>
                    <li><strong>Week 1:</strong> Full refund minus $50 admin fee OR transfer to next session free.</li>
                    <li><strong>Week 2:</strong> 75% refund.</li>
                    <li><strong>Week 3+:</strong> No refunds.</li>
                 </ul>

                 <h3 className="text-xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-3">Make-Up Classes</h3>
                 <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400 marker:text-dfw-red mb-8">
                    <li><strong>Student Absence:</strong> No make-up classes provided. It is the student&apos;s responsibility to attend.</li>
                    <li><strong>Facility Cancellation:</strong> Make-up class scheduled or credit applied.</li>
                 </ul>

                 <h3 className="text-xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-3">Private Coaching</h3>
                 <p className="text-gray-600 dark:text-gray-400"><strong>24+ Hours Notice:</strong> Full refund or free reschedule.<br/><strong>Less than 24 Hours:</strong> No refund. Reschedule with $25 fee.</p>
              </motion.section>

              <motion.hr variants={itemVariants} className="border-gray-200 dark:border-white/10 my-12" />

              <motion.section variants={itemVariants} id="special-events" className="mb-16 scroll-mt-28">
                 <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6">Special Events & Parties</h2>
                 
                 <h3 className="text-xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-3">Birthday Parties</h3>
                 <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400 marker:text-dfw-red mb-8">
                    <li><strong>30+ Days Before:</strong> Full refund minus $50 deposit.</li>
                    <li><strong>14-30 Days Before:</strong> 50% refund OR full credit within 6 months.</li>
                    <li><strong>7-14 Days Before:</strong> 25% refund OR 50% credit.</li>
                    <li><strong>Less than 7 Days:</strong> No refund. One-time reschedule for $100 fee.</li>
                 </ul>

                 <h3 className="text-xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-3">Corporate Events</h3>
                 <p className="text-gray-600 dark:text-gray-400">See contract for specific terms. Generally requires 45+ days notice for full refund minus deposit. Short notice cancellations subject to 50-100% fees due to facility block-out.</p>
              </motion.section>

              <motion.hr variants={itemVariants} className="border-gray-200 dark:border-white/10 my-12" />

              <motion.section variants={itemVariants} id="leagues-tournaments" className="mb-16 scroll-mt-28">
                 <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6">Leagues & Tournaments</h2>
                 <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400 marker:text-dfw-red">
                    <li><strong>League Registration:</strong> Full refund minus $25 fee if cancelled before season starts. No refunds after Week 1 begins.</li>
                    <li><strong>Tournament Entry:</strong> Full refund minus $15 fee if cancelled 7+ days before event. 50% refund if 3-7 days before. No refund less than 3 days before.</li>
                    <li><strong>Injuries:</strong> No refunds for mid-season injuries (risk acknowledged in waiver). Registration may be transferred to a friend with approval.</li>
                 </ul>
              </motion.section>

              <motion.hr variants={itemVariants} className="border-gray-200 dark:border-white/10 my-12" />

              <motion.section variants={itemVariants} id="pro-shop" className="mb-16 scroll-mt-28">
                 <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6">Pro Shop Purchases</h2>
                 <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400 marker:text-dfw-red">
                    <li><strong>Unused/Original Condition:</strong> Full refund within 14 days with receipt.</li>
                    <li><strong>Used/Opened:</strong> No refunds. Exchanges for manufacturer defects only.</li>
                    <li><strong>Custom Items:</strong> No returns or refunds on personalized gear (jerseys, engraved items).</li>
                 </ul>
              </motion.section>

              <motion.hr variants={itemVariants} className="border-gray-200 dark:border-white/10 my-12" />

              <motion.section variants={itemVariants} id="weather-emergencies" className="mb-16 scroll-mt-28">
                 <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6">Facility Closures</h2>
                 <h3 className="text-xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-3">Planned Closures</h3>
                 <p className="text-gray-600 dark:text-gray-400 mb-4">All bookings notified 48+ hours in advance. Full refund or free reschedule offered.</p>

                 <h3 className="text-xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-3">Emergency Closures</h3>
                 <p className="text-gray-600 dark:text-gray-400">(Power outages, natural disasters, etc.) Full refund automatically issued or rescheduled to any date within 90 days.</p>
              </motion.section>

              <motion.hr variants={itemVariants} className="border-gray-200 dark:border-white/10 my-12" />

              <motion.section variants={itemVariants} id="contact-exceptions" className="mb-16 scroll-mt-28">
                 <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6">Extenuating Circumstances</h2>
                 <p className="text-gray-600 dark:text-gray-400 mb-6">We understand life happens. We consider exceptions for:</p>
                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm font-bold text-gray-700 dark:text-gray-300 mb-6">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-dfw-red rounded-full"></div> Medical Emergencies</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-dfw-red rounded-full"></div> Family Emergencies</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-dfw-red rounded-full"></div> Natural Disasters</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-dfw-red rounded-full"></div> Military Deployment</li>
                 </ul>
                 <p className="mt-4 text-gray-600 dark:text-gray-400">
                    <strong>How to Request:</strong> Email <a href="mailto:info@dfwindoorsports.com" className="text-dfw-red hover:underline font-bold">info@dfwindoorsports.com</a> immediately. Explain the situation and provide documentation if requested. We review within 24-48 hours.
                 </p>

                 <div className="mt-12 bg-[#020408] border border-white/10 text-white p-8 rounded-lg text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-dfw-red/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <h3 className="text-white uppercase mb-4 relative z-10 font-bold text-xl">Questions?</h3>
                    <p className="text-gray-400 mb-6 relative z-10">Our team is here to help clarify any policy details.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm font-mono uppercase tracking-widest relative z-10">
                       <span className="hover:text-dfw-red transition-colors font-bold">(817) 938-0808</span>
                       <span className="hidden sm:inline text-gray-600">|</span>
                       <span className="hover:text-dfw-red transition-colors font-bold">info@dfwindoorsports.com</span>
                    </div>
                 </div>
              </motion.section>

           </motion.div>
        </div>
      </div>
    </div>
  )
}