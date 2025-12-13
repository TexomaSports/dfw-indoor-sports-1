import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const BadmintonEquip: React.FC = () => {
  return (
    <section className="bg-gray-50 py-24 border-b border-gray-200">
       <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
             
             {/* Left: Text */}
             <div className="md:w-1/2">
                <div className="inline-flex items-center gap-2 mb-4">
                   <div className="p-2 bg-blue-100 rounded-full text-[#1E3A8A]"><ShoppingBag size={16} /></div>
                   <span className="text-[#1E3A8A] font-mono text-xs font-bold uppercase tracking-widest">Pro Shop On-Site</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-header font-bold text-[#1E3A8A] uppercase mb-6">
                   Gear Up Like A Pro
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                   Don't have gear? No problem. Our fully stocked pro shop carries everything from beginner setups to tournament-grade equipment. We also offer professional restringing services.
                </p>
                
                <div className="space-y-6 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                   <div className="flex justify-between border-b border-gray-100 pb-3">
                      <span className="font-bold text-gray-700 text-sm">Racket Rental</span>
                      <span className="text-blue-600 font-bold">$5 <span className="text-xs text-gray-400 font-normal">/ session</span></span>
                   </div>
                   <div className="flex justify-between border-b border-gray-100 pb-3">
                      <span className="font-bold text-gray-700 text-sm">Feather Shuttles (Tube)</span>
                      <span className="text-blue-600 font-bold">$25-35</span>
                   </div>
                   <div className="flex justify-between border-b border-gray-100 pb-3">
                      <span className="font-bold text-gray-700 text-sm">Synthetic Shuttles (Tube)</span>
                      <span className="text-blue-600 font-bold">$15</span>
                   </div>
                   <div className="flex justify-between border-b border-gray-100 pb-3">
                      <span className="font-bold text-gray-700 text-sm">Restringing Service</span>
                      <span className="text-blue-600 font-bold">$20 <span className="text-xs text-gray-400 font-normal">+ string cost</span></span>
                   </div>
                </div>

                <div className="mt-8 flex gap-4">
                   <div className="px-4 py-2 bg-white border border-gray-200 text-xs font-bold uppercase text-gray-400 rounded hover:border-blue-500 hover:text-blue-500 transition-colors cursor-default">Yonex</div>
                   <div className="px-4 py-2 bg-white border border-gray-200 text-xs font-bold uppercase text-gray-400 rounded hover:border-blue-500 hover:text-blue-500 transition-colors cursor-default">Victor</div>
                   <div className="px-4 py-2 bg-white border border-gray-200 text-xs font-bold uppercase text-gray-400 rounded hover:border-blue-500 hover:text-blue-500 transition-colors cursor-default">Li-Ning</div>
                </div>
             </div>

             {/* Right: Image */}
             <div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-2xl group">
                <img src="https://images.unsplash.com/photo-1626224583764-847890e058f5?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Pro Shop" />
                <div className="absolute inset-0 bg-[#1E3A8A]/30 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute bottom-6 left-6">
                   <p className="text-white font-bold uppercase text-xl drop-shadow-md">10% Off For Members</p>
                </div>
             </div>

          </div>
       </div>
    </section>
  );
};

export default BadmintonEquip;