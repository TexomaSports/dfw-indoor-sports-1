'use client'

import React from 'react';
import { Star, Quote, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
   {
      text: "Love the overall experience! The staff is friendly and the whole vibe just makes me want to come again and again!",
      author: "Abhishek Tiwari",
      role: "Google Review ★★★★★",
      highlight: "Amazing Vibe"
   },
   {
      text: "This facility consistently provides an excellent experience for us. The indoor cricket setup is exceptional, with well-kept grounds and superb lighting. The personnel was pleasant and helpful. I highly suggest it!",
      author: "Krishna Reddy",
      role: "Google Review ★★★★★",
      highlight: "Exceptional Cricket Setup"
   },
   {
      text: "Excellent facility for indoor cricket and badminton. Attentive staff and seamless 24/7 operations. This is indeed a great place for games and fitness activities.",
      author: "James Tiwari",
      role: "Local Guide ★★★★★",
      highlight: "Top-Notch Facility"
   },
   {
      text: "Excellent indoor cricket nets and badminton facility in Fort Worth! The turf is top-notch, and the facilities are well-maintained. Perfect for cricket enthusiasts and badminton players alike. Coaches are expert!",
      author: "Prem Ahire",
      role: "Local Guide ★★★★★",
      highlight: "Expert Coaching"
   }
];

const HomeTestimonials: React.FC = () => {
   return (
      <section className="py-24 bg-gradient-to-br from-dfw-navy to-[#050911] dark:from-black dark:to-[#050911] relative overflow-hidden">
         {/* Decorative Elements */}
         <div className="absolute top-0 right-0 w-96 h-96 bg-dfw-red/5 rounded-full blur-[100px] pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

         <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-widest mb-6 backdrop-blur-sm">
                  <Heart size={12} className="text-dfw-red fill-current" /> Community Stories
               </span>
               <h2 className="text-3xl md:text-5xl font-header font-bold text-white uppercase mb-4">Why We Do This</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {testimonials.map((t, i) => (
                  <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm relative group hover:bg-white/10 transition-colors"
                  >
                     <div className="absolute -top-4 -right-4 bg-dfw-navy border border-white/10 w-12 h-12 rounded-full flex items-center justify-center text-dfw-red shadow-lg group-hover:scale-110 transition-transform">
                        <Quote size={20} fill="currentColor" />
                     </div>

                     <p className="text-white/60 font-mono text-xs uppercase tracking-widest mb-4">{t.highlight}</p>

                     <p className="text-gray-200 text-lg leading-relaxed mb-8 font-light">"{t.text}"</p>

                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-dfw-red to-orange-500 flex items-center justify-center text-white font-bold text-xs">
                           {t.author.charAt(0)}
                        </div>
                        <div>
                           <p className="text-white font-bold uppercase text-sm">{t.author}</p>
                           <p className="text-white/40 text-xs uppercase tracking-widest">{t.role}</p>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default HomeTestimonials;