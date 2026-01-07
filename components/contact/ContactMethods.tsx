'use client'

import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const ContactMethods: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 relative">
       <div className="absolute inset-0 bg-[url('/textures/cubes.png')] opacity-[0.03]"></div>
       
       <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
             <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-3 block">Direct Channels</span>
             <h2 className="text-3xl md:text-5xl font-header font-bold text-dfw-navy uppercase mb-6">Ways To Connect</h2>
             <p className="text-gray-500">Choose the channel that suits your needs. We're monitoring all lines.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             
             {/* Method 1: Phone */}
             <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-inner group-hover:shadow-lg group-hover:rotate-3">
                   <Phone size={28} />
                </div>
                
                <h3 className="text-xl font-header font-bold text-dfw-navy uppercase mb-3 group-hover:text-blue-600 transition-colors">Phone Support</h3>
                <p className="text-sm text-gray-500 mb-8 leading-relaxed h-10">Immediate assistance for bookings, availability, and urgent facility questions.</p>
                
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 text-center mb-8 group-hover:bg-blue-50/50 group-hover:border-blue-100 transition-colors">
                   <span className="block text-xl font-header font-bold text-dfw-navy mb-1">(817) 938-0808</span>
                   <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Mon-Sun 5am-11pm</span>
                </div>
                
                <a href="tel:8179380808" className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest group-hover:gap-3 transition-all">
                   Call Now <ArrowRight size={12} />
                </a>
             </div>

             {/* Method 2: Email */}
             <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-dfw-red to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <div className="w-16 h-16 bg-red-50 text-dfw-red rounded-2xl flex items-center justify-center mb-8 group-hover:bg-dfw-red group-hover:text-white transition-all duration-300 shadow-inner group-hover:shadow-lg group-hover:-rotate-3">
                   <Mail size={28} />
                </div>
                
                <h3 className="text-xl font-header font-bold text-dfw-navy uppercase mb-3 group-hover:text-dfw-red transition-colors">Email Inquiry</h3>
                <p className="text-sm text-gray-500 mb-8 leading-relaxed h-10">Detailed questions about memberships, events, or academy programs.</p>
                
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 text-center mb-8 group-hover:bg-red-50/50 group-hover:border-red-100 transition-colors">
                   <span className="block text-sm font-bold text-dfw-navy mb-1 truncate">info@dfwindoorsports.com</span>
                   <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Response in 24h</span>
                </div>
                
                <button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 text-xs font-bold text-dfw-red uppercase tracking-widest group-hover:gap-3 transition-all">
                   Send Message <ArrowRight size={12} />
                </button>
             </div>

             {/* Method 3: Visit */}
             <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-green-600 group-hover:text-white transition-all duration-300 shadow-inner group-hover:shadow-lg group-hover:rotate-3">
                   <MapPin size={28} />
                </div>
                
                <h3 className="text-xl font-header font-bold text-dfw-navy uppercase mb-3 group-hover:text-green-600 transition-colors">Visit HQ</h3>
                <p className="text-sm text-gray-500 mb-8 leading-relaxed h-10">Tour the facility, meet our coaches, or visit the pro shop in person.</p>
                
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 text-center mb-8 group-hover:bg-green-50/50 group-hover:border-green-100 transition-colors">
                   <span className="block text-sm font-bold text-dfw-navy mb-1">16230 Three Wide Dr</span>
                   <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Fort Worth, TX</span>
                </div>
                
                <a href="https://maps.google.com/?q=16230+Three+Wide+Drive+Suite+200,+Fort+Worth,+TX+76177" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-green-600 uppercase tracking-widest group-hover:gap-3 transition-all">
                   Get Directions <ArrowRight size={12} />
                </a>
             </div>

          </div>
       </div>
    </section>
  );
};

export default ContactMethods;