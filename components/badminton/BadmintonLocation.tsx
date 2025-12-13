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
             <div className="md:w-1/2 h-64 rounded-lg relative overflow-hidden shadow-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.1234567890!2d-97.30889!3d32.91111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7d0000000000%3A0x0!2s16230%20Three%20Wide%20Dr%20Suite%20200%2C%20Fort%20Worth%2C%20TX%2076177!5e0!3m2!1sen!2sus!4v1702500000000!5m2!1sen!2sus"
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

export default BadmintonLocation;