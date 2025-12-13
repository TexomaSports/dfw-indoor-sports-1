import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const BadmintonLocation: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100 border-t border-gray-200">
       <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
             <div className="md:w-1/2">
                <h2 className="text-3xl font-header font-bold text-[#1E3A8A] uppercase mb-6">Worth The Drive</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                   "Tried badminton courts closer to home in Frisco. All had low ceilings or poor lighting. 40-minute drive to DFW Indoor Sports worth it for courts that don't compromise my game." <span className="block mt-2 font-bold text-[#1E3A8A]">- Tournament Player</span>
                </p>
                <div className="space-y-4 mb-8">
                   <div>
                      <h4 className="font-bold text-gray-900 text-sm uppercase mb-1">Primary (10-20 Mins)</h4>
                      <p className="text-xs text-gray-500">Fort Worth, Arlington, Grand Prairie, Irving, Bedford, Hurst, Euless</p>
                   </div>
                   <div>
                      <h4 className="font-bold text-gray-900 text-sm uppercase mb-1">Secondary (20-35 Mins)</h4>
                      <p className="text-xs text-gray-500">Dallas (West), Carrollton, Coppell, Lewisville, Mansfield, Plano (South)</p>
                   </div>
                </div>
                <a 
                   href="https://maps.google.com/?q=16230+Three+Wide+Drive+Suite+200,+Fort+Worth,+TX+76177" 
                   target="_blank" 
                   rel="noreferrer"
                   className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E3A8A] text-white font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-blue-800 transition-colors"
                >
                   <Navigation size={14} /> Get Directions
                </a>
             </div>
             <div className="md:w-1/2 h-64 bg-gray-200 rounded-lg relative overflow-hidden shadow-inner flex items-center justify-center group">
                {/* Simulated Map */}
                <div className="absolute inset-0 bg-[#E5E7EB] opacity-50"></div>
                <MapPin size={48} className="text-[#1E3A8A] relative z-10 drop-shadow-xl" />
                <span className="absolute bottom-4 left-4 bg-white px-3 py-1 text-xs font-bold text-[#1E3A8A] rounded shadow-sm z-10">16230 Three Wide Dr</span>
             </div>
          </div>
       </div>
    </section>
  );
};

export default BadmintonLocation;