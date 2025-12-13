import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const CricketLocation: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100 border-t border-gray-200">
       <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
             <div className="md:w-1/2">
                <h2 className="text-3xl font-header font-bold text-[#006838] uppercase mb-6">Worth The Drive</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                   "I drive 45 minutes from Plano. Worth it for facilities this good. Tried closer options - nothing compares. Climate control alone makes the drive worthwhile." <span className="block mt-2 font-bold text-[#006838]">- Arjun, Member</span>
                </p>
                <div className="space-y-4 mb-8">
                   <div>
                      <h4 className="font-bold text-gray-900 text-sm uppercase mb-1">Primary (10-25 Mins)</h4>
                      <p className="text-xs text-gray-500">Fort Worth, Arlington, Grand Prairie, Irving, Euless, Bedford, Hurst, Keller, Southlake</p>
                   </div>
                   <div>
                      <h4 className="font-bold text-gray-900 text-sm uppercase mb-1">Secondary (25-40 Mins)</h4>
                      <p className="text-xs text-gray-500">Dallas (West), Plano, Frisco, Carrollton, Coppell, Lewisville</p>
                   </div>
                </div>
                <a 
                   href="https://maps.google.com/?q=16230+Three+Wide+Drive+Suite+200,+Fort+Worth,+TX+76177" 
                   target="_blank" 
                   rel="noreferrer"
                   className="inline-flex items-center gap-2 px-6 py-3 bg-[#006838] text-white font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-[#00502a] transition-colors"
                >
                   <Navigation size={14} /> Get Directions
                </a>
             </div>
             <div className="md:w-1/2 h-64 rounded-lg relative overflow-hidden shadow-inner">
                <iframe
                  src="https://www.google.com/maps?q=DFW+Indoor+Sports+16230+Three+Wide+Dr+Suite+200+Fort+Worth+TX+76177&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DFW Indoor Sports Location"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
             </div>
          </div>
       </div>
    </section>
  );
};

export default CricketLocation;