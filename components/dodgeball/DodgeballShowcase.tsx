import React from 'react';
import { Camera, MapPin, Maximize2 } from 'lucide-react';

const DodgeballShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-[#050911] text-white relative overflow-hidden" id="showcase">
       <div className="absolute inset-0 bg-[url('/textures/stardust.png')] opacity-10"></div>
       
       <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-header font-bold uppercase mb-4">Visual Tour</h2>
             <p className="text-gray-400">See the arena where the action happens.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-auto md:h-[600px]">
             {/* Main Large Image */}
             <div className="md:col-span-2 md:row-span-2 relative rounded-lg overflow-hidden group cursor-pointer">
                <img src="/images/facilities/dodgeball-courts.webp" alt="Main Dodgeball Court" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <Maximize2 className="text-white drop-shadow-lg" size={32} />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                   <p className="font-bold uppercase tracking-widest text-sm flex items-center gap-2"><MapPin size={14} className="text-orange-500" /> Main Arena</p>
                </div>
             </div>

             {/* Side Images */}
             <div className="relative rounded-lg overflow-hidden group cursor-pointer">
                <img src="/images/sports/equipment.webp" alt="Equipment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent">
                   <p className="font-bold uppercase tracking-widest text-xs text-orange-400">Foam Balls Provided</p>
                </div>
             </div>
             
             <div className="relative rounded-lg overflow-hidden group cursor-pointer">
                <img src="/images/hero/sports-action.webp" alt="Action Shot" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent">
                   <p className="font-bold uppercase tracking-widest text-xs text-white">Group Events</p>
                </div>
             </div>
          </div>

          <div className="text-center mt-12">
             <button className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-white hover:text-[#4C1D95] transition-all flex items-center gap-3 mx-auto group">
                <Camera size={16} className="group-hover:text-[#4C1D95] transition-colors" /> Schedule In-Person Tour
             </button>
          </div>
       </div>
    </section>
  );
};

export default DodgeballShowcase;