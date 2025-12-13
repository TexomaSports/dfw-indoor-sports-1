import React from 'react';
import { MapPin, ArrowRight, UserPlus, Calendar, CreditCard } from 'lucide-react';

const CricketInfo: React.FC = () => {
  return (
    <section className="bg-white py-24">
       <div className="container mx-auto px-4 md:px-6">
          
          {/* Booking Steps */}
          <div className="mb-24">
             <h2 className="text-3xl font-header font-bold text-[#006838] uppercase mb-12 text-center">How To Book</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                   { icon: UserPlus, title: "1. Create Account", desc: "Sign up in 30 seconds. No credit card required to view availability." },
                   { icon: Calendar, title: "2. Select Slot", desc: "Choose your lane and time. Real-time calendar shows open spots." },
                   { icon: CreditCard, title: "3. Confirm & Play", desc: "Pay securely online. Receive instant code for facility access." }
                ].map((step, idx) => (
                   <div key={idx} className="flex flex-col items-center text-center group">
                      <div className="w-16 h-16 bg-green-50 text-[#006838] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#006838] group-hover:text-white transition-colors duration-500 shadow-sm">
                         <step.icon size={28} />
                      </div>
                      <h3 className="text-lg font-bold uppercase text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-500 max-w-xs">{step.desc}</p>
                   </div>
                ))}
             </div>
             <div className="text-center mt-12">
                <button className="px-8 py-3 bg-[#006838] text-white font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-[#00502a] transition-colors shadow-lg">
                   Book Online Now
                </button>
             </div>
          </div>

          {/* Location & Academy Split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             {/* Location */}
             <div className="bg-gray-50 p-10 rounded-lg border border-gray-200">
                <h3 className="text-xl font-header font-bold text-[#006838] uppercase mb-4 flex items-center gap-2">
                   <MapPin size={20} /> Convenient Access
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                   Centrally located in Fort Worth, accessible within 20-30 minutes from Arlington, Irving, Southlake, and Keller. Ample free parking available.
                </p>
                <div className="h-64 bg-gray-200 rounded-sm relative overflow-hidden group">
                   <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                      <span className="text-gray-500 font-bold uppercase tracking-widest">Map Placeholder</span>
                   </div>
                </div>
             </div>

             {/* Academy Cross-sell */}
             <div className="bg-[#006838] p-10 rounded-lg text-white relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
                <div className="relative z-10">
                   <h3 className="text-xl font-header font-bold uppercase mb-4">Want Professional Coaching?</h3>
                   <p className="text-green-100 text-sm mb-8 leading-relaxed">
                      Combine lane rental with expert instruction from CricKingdom Academy. Certified coaches available for private 1-on-1 sessions.
                   </p>
                   <div className="space-y-4">
                      <div className="flex items-center gap-3 text-sm font-bold">
                         <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">1</span>
                         Private 1:1 Coaching
                      </div>
                      <div className="flex items-center gap-3 text-sm font-bold">
                         <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">2</span>
                         Group Development
                      </div>
                      <div className="flex items-center gap-3 text-sm font-bold">
                         <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">3</span>
                         Elite Pathways
                      </div>
                   </div>
                   <button className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-white/30 pb-1 hover:text-green-200 hover:border-green-200 transition-all">
                      View Academy Programs <ArrowRight size={14} />
                   </button>
                </div>
             </div>
          </div>

       </div>
    </section>
  );
};

export default CricketInfo;