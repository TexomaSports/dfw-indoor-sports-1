'use client'

import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const sportsData = [
  {
    id: "cricket",
    title: "Cricket",
    subtitle: "The Gentleman's Game, Perfected",
    desc: "Experience the crack of leather on willow in an environment worthy of the game. Our ICC-standard lanes and CricKingdom academy bring professional cricket culture to Texas.",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop",
    features: ["6 Professional Lanes", "Automated Bowling Machines", "Video Analysis Tech"],
    programs: ["CricKingdom Academy", "Adult Leagues", "Elite Training"],
    link: "/cricket-lanes",
    color: "dfw-red"
  },
  {
    id: "badminton",
    title: "Badminton",
    subtitle: "Speed, Agility, Precision",
    desc: "Feel the difference of playing on BWF-approved mats with shadow-free lighting. Whether you're rallying for fitness or training for gold, every smash lands true.",
    image: "https://images.unsplash.com/photo-1626224583764-847890e058f5?q=80&w=2070&auto=format&fit=crop",
    features: ["8 BWF Standard Courts", "30ft+ Clear Height", "Anti-Glare LED Lighting"],
    programs: ["Social Drop-In", "Junior Coaching", "Tournament Series"],
    link: "/badminton-courts",
    color: "blue-600"
  },
  {
    id: "soccer",
    title: "Indoor Soccer",
    subtitle: "The Beautiful Game, Year-Round",
    desc: "Forget the rainouts and the heat. Our FIFA-grade turf offers a fast, consistent surface for technical development and high-energy 5-a-side matches.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2676&auto=format&fit=crop",
    features: ["FIFA-Approved Turf", "Wall-Rebound Systems", "Climate Controlled"],
    programs: ["Youth Development", "Adult Rec Leagues", "Team Rentals"],
    link: "/soccer-fields",
    color: "green-600"
  },
  {
    id: "dodgeball",
    title: "Dodgeball",
    subtitle: "Pure Adrenaline & Laughter",
    desc: "The ultimate social sport. Gather your friends, colleagues, or classmates for high-intensity fun that burns calories without feeling like a workout.",
    image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2070&auto=format&fit=crop",
    features: ["Safe Foam Balls", "Regulation Courts", "Referee Services"],
    programs: ["Corporate Events", "Birthday Parties", "Social Leagues"],
    link: "/dodgeball-courts",
    color: "purple-600"
  }
];

const SportsShowcase: React.FC = () => {
  return (
    <section className="bg-gray-50 dark:bg-[#050911] border-y border-gray-200 dark:border-white/5 transition-colors duration-300" id="sports-showcase">
       {sportsData.map((sport, index) => (
          <motion.div 
            key={sport.id} 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className={`py-24 ${index % 2 !== 0 ? 'bg-white dark:bg-[#020408]' : 'bg-gray-50 dark:bg-[#0A111F]'} transition-colors duration-300`}
          >
             <div className="container mx-auto px-4 md:px-6">
                <div className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                   
                   {/* Visual */}
                   <div className="lg:w-1/2 w-full group relative">
                      <div className={`absolute top-4 left-4 w-full h-full border-2 border-${sport.color} rounded-lg transform translate-x-2 translate-y-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500 opacity-50`}></div>
                      <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-[4/3] border border-gray-200 dark:border-white/10">
                         <img src={sport.image} alt={`${sport.title} at DFW Indoor Sports`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                         <div className={`absolute inset-0 bg-${sport.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 mix-blend-overlay`}></div>
                      </div>
                   </div>

                   {/* Content */}
                   <div className="lg:w-1/2 w-full">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-${sport.color}/10 text-${sport.color} font-mono text-[10px] uppercase tracking-widest mb-6`}>
                         {sport.subtitle}
                      </div>
                      <h3 className="text-4xl md:text-5xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6">
                         {sport.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-8">
                         {sport.desc}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                         <div>
                            <h4 className="font-bold text-dfw-navy dark:text-white text-xs uppercase tracking-widest mb-4 border-b border-gray-200 dark:border-white/10 pb-2">Highlights</h4>
                            <ul className="space-y-2">
                               {sport.features.map((feat, i) => (
                                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                     <CheckCircle2 size={14} className={`text-${sport.color}`} /> {feat}
                                  </li>
                               ))}
                            </ul>
                         </div>
                         <div>
                            <h4 className="font-bold text-dfw-navy dark:text-white text-xs uppercase tracking-widest mb-4 border-b border-gray-200 dark:border-white/10 pb-2">Ways to Play</h4>
                            <ul className="space-y-2">
                               {sport.programs.map((prog, i) => (
                                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                     <div className={`w-1.5 h-1.5 rounded-full bg-${sport.color}`}></div> {prog}
                                  </li>
                               ))}
                            </ul>
                         </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                         <Link href={sport.link} className={`px-8 py-3 bg-${sport.color} text-white font-bold uppercase tracking-widest text-xs rounded-sm hover:opacity-90 transition-opacity shadow-lg text-center`}>
                            Book {sport.title}
                         </Link>
                         <Link href={sport.link} className="px-8 py-3 border border-gray-300 dark:border-white/20 text-dfw-navy dark:text-white font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-dfw-navy dark:hover:bg-white hover:text-white dark:hover:text-dfw-navy transition-colors flex items-center justify-center gap-2 group">
                            Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                         </Link>
                      </div>
                   </div>

                </div>
             </div>
          </motion.div>
       ))}
    </section>
  );
};

export default SportsShowcase;