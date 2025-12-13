import React from 'react';
import { Target, Users, Trophy, Flag, Heart, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* --- Header Section --- */}
      <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#050911] overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-dfw-navy via-black to-dfw-red/20 opacity-90"></div>
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-dfw-red/5 rounded-full blur-[120px]"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
           <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-gray-300 font-mono text-[10px] uppercase tracking-[0.2em] mb-6 animate-fade-in-up">
              Since 2024
           </span>
           <h1 className="text-5xl md:text-8xl font-header font-bold text-white uppercase tracking-tight mb-6 md:mb-8 leading-none animate-slide-up" style={{ animationDelay: '0.1s' }}>
             Built for the <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-dfw-red to-orange-500">Love of Sport</span>
           </h1>
           <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
             We are redefining the indoor sports experience in DFW. A sanctuary for athletes, a hub for community, and a stage for champions.
           </p>
        </div>
      </div>

      {/* --- Mission & Vision --- */}
      <section className="py-20 md:py-32 relative">
         <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
               <div className="relative">
                  <div className="relative rounded-lg overflow-hidden shadow-2xl">
                     <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop" alt="Our Facility" className="w-full object-cover transform hover:scale-105 transition-transform duration-700" />
                     <div className="absolute inset-0 bg-dfw-navy/20 hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  {/* Decorative Box */}
                  <div className="absolute -bottom-10 -right-10 bg-white p-6 md:p-8 rounded-lg shadow-xl max-w-xs hidden md:block">
                     <p className="font-header text-4xl font-bold text-dfw-navy mb-2">50k+</p>
                     <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Square Feet of Pure Adrenaline</p>
                  </div>
               </div>
               
               <div>
                  <h2 className="text-3xl md:text-5xl font-header font-bold text-dfw-navy uppercase leading-tight mb-6">
                    More Than Just <br/> A Facility
                  </h2>
                  <div className="space-y-6 text-gray-600 leading-relaxed">
                    <p>
                      DFW Indoor Sports was born from a simple observation: the Dallas-Fort Worth area needed a world-class indoor facility that didn't compromise on quality. We wanted to create a space where the turf is always green, the lighting is broadcast-quality, and the community feels like family.
                    </p>
                    <p>
                      Whether you're a professional cricketer looking to fine-tune your yorkers with our PitchVision technology, or a weekend warrior gathering friends for badminton, we treat every player with the same level of respect and dedication.
                    </p>
                  </div>
                  
                  <div className="mt-8 grid grid-cols-2 gap-6">
                     <div className="flex flex-col gap-2">
                        <Flag className="text-dfw-red mb-2" size={24} />
                        <h4 className="font-bold text-dfw-navy uppercase text-sm tracking-wider">Our Mission</h4>
                        <p className="text-xs text-gray-500">To inspire athletic excellence and community connection through superior facilities.</p>
                     </div>
                     <div className="flex flex-col gap-2">
                        <Globe className="text-dfw-red mb-2" size={24} />
                        <h4 className="font-bold text-dfw-navy uppercase text-sm tracking-wider">Our Vision</h4>
                        <p className="text-xs text-gray-500">To be the premier destination for indoor sports in Texas and beyond.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- Values Grid --- */}
      <section className="bg-gray-50 py-20 md:py-32 border-y border-gray-200">
         <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-header font-bold text-dfw-navy uppercase mb-16">Core Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { icon: Heart, title: 'Passion First', desc: 'We live and breathe sports. That energy is infused into every inch of our facility.' },
                 { icon: Users, title: 'Community', desc: 'We are a gathering place for families, teams, and friends to create lasting memories.' },
                 { icon: Trophy, title: 'Excellence', desc: 'From our turf to our customer service, we refuse to settle for anything less than the best.' }
               ].map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
                     <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-dfw-red group-hover:text-white transition-colors duration-300">
                        <item.icon size={28} />
                     </div>
                     <h3 className="font-header text-xl font-bold text-dfw-navy uppercase mb-4">{item.title}</h3>
                     <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- Team / CTA Section --- */}
      <section className="py-20 md:py-32 bg-dfw-navy relative overflow-hidden text-white">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
         <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-header font-bold uppercase mb-8">Join The Movement</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
               Ready to experience the best indoor sports facility in Fort Worth? Stop by for a tour or book your first session today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link href="/contact" className="bg-dfw-red hover:bg-red-600 text-white py-4 px-8 rounded-sm font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(214,40,40,0.4)] hover:shadow-[0_0_40px_rgba(214,40,40,0.6)]">
                  Schedule Tour <ArrowRight size={16} />
               </Link>
               <Link href="/rentals" className="bg-white/10 hover:bg-white hover:text-dfw-navy text-white border border-white/20 py-4 px-8 rounded-sm font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 transition-all">
                  View Rentals
               </Link>
            </div>
         </div>
      </section>

    </div>
  );
};

export default About;