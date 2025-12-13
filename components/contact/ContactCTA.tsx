import React from 'react';
import { Calendar, MousePointer2, FileText, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-32 bg-[#020408] relative overflow-hidden text-center">
       {/* Background Effects */}
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#020408]/90 to-[#020408] pointer-events-none"></div>
       
       <div className="container mx-auto px-4 md:px-6 relative z-10">
          <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-6 block animate-pulse">Action Center</span>
          <h2 className="text-4xl md:text-7xl font-header font-bold text-white uppercase mb-16 tracking-tight">
             Take The <span className="text-transparent bg-clip-text bg-gradient-to-r from-dfw-red to-orange-600">Next Step</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
             
             {/* Card 1 */}
             <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-dfw-red/0 via-dfw-red/0 to-dfw-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 text-white group-hover:bg-dfw-red group-hover:scale-110 transition-all duration-300 border border-white/10">
                   <Calendar size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-header font-bold text-white uppercase text-xl mb-3">New Here?</h3>
                <p className="text-sm text-gray-400 mb-8 leading-relaxed">Experience the facility firsthand. Meet coaches and see the courts.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-xs text-white font-bold uppercase tracking-widest border-b border-dfw-red pb-1 hover:text-dfw-red transition-colors">
                   Book Free Tour <ChevronRight size={14} />
                </Link>
             </div>

             {/* Card 2 */}
             <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 via-green-500/0 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 text-white group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300 border border-white/10">
                   <MousePointer2 size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-header font-bold text-white uppercase text-xl mb-3">Ready to Play?</h3>
                <p className="text-sm text-gray-400 mb-8 leading-relaxed">Skip the talk. Reserve your court instantly online. 24/7 system.</p>
                <Link href="/rentals" className="inline-flex items-center gap-2 text-xs text-white font-bold uppercase tracking-widest border-b border-green-500 pb-1 hover:text-green-500 transition-colors">
                   Book Online Now <ChevronRight size={14} />
                </Link>
             </div>

             {/* Card 3 */}
             <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 text-white group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300 border border-white/10">
                   <FileText size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-header font-bold text-white uppercase text-xl mb-3">Planning Event?</h3>
                <p className="text-sm text-gray-400 mb-8 leading-relaxed">Corporate or private. Get a custom proposal within 24 hours.</p>
                <Link href="/events" className="inline-flex items-center gap-2 text-xs text-white font-bold uppercase tracking-widest border-b border-blue-500 pb-1 hover:text-blue-500 transition-colors">
                   Request Proposal <ChevronRight size={14} />
                </Link>
             </div>

          </div>
       </div>
    </section>
  );
};

export default ContactCTA;