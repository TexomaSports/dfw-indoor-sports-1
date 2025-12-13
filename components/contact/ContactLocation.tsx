import React from 'react';
import { MapPin, Navigation, Car, Clock } from 'lucide-react';

const ContactLocation: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
       <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">
             
             {/* Left: Details */}
             <div className="lg:w-1/3">
                <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-3 block">Navigation</span>
                <h2 className="text-3xl font-header font-bold text-dfw-navy uppercase mb-8">Central Hub</h2>
                
                <address className="not-italic mb-10 p-6 bg-gray-50 rounded-lg border border-gray-100 relative overflow-hidden group hover:border-dfw-navy/20 transition-colors">
                   <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity"><MapPin size={40} className="text-dfw-navy" /></div>
                   <strong className="block text-xl font-header font-bold text-dfw-navy uppercase mb-2">DFW Indoor Sports</strong>
                   <span className="block text-gray-600 mb-1">16230 Three Wide Drive, Suite 200</span>
                   <span className="block text-gray-600">Fort Worth, TX 76177</span>
                </address>

                <div className="space-y-8 mb-10">
                   <div>
                      <h4 className="font-bold text-dfw-navy text-xs uppercase mb-3 flex items-center gap-2 tracking-widest">
                         <Car size={14} className="text-dfw-red" /> Est. Drive Times
                      </h4>
                      <ul className="text-xs text-gray-500 space-y-2 font-mono">
                         <li className="flex justify-between items-center border-b border-dashed border-gray-200 pb-2"><span>Downtown Fort Worth</span> <span className="text-dfw-navy font-bold">15 min</span></li>
                         <li className="flex justify-between items-center border-b border-dashed border-gray-200 pb-2"><span>Arlington</span> <span className="text-dfw-navy font-bold">20 min</span></li>
                         <li className="flex justify-between items-center border-b border-dashed border-gray-200 pb-2"><span>Southlake/Grapevine</span> <span className="text-dfw-navy font-bold">25 min</span></li>
                         <li className="flex justify-between items-center border-b border-dashed border-gray-200 pb-2"><span>West Dallas</span> <span className="text-dfw-navy font-bold">30 min</span></li>
                      </ul>
                   </div>
                   
                   <div>
                      <h4 className="font-bold text-dfw-navy text-xs uppercase mb-3 flex items-center gap-2 tracking-widest">
                         <Clock size={14} className="text-dfw-red" /> Parking Info
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed bg-blue-50 p-3 rounded-sm border border-blue-100">
                         <strong>200+ Free Spaces.</strong> Dedicated lot. Accessible parking is located immediately in front of the main glass entrance.
                      </p>
                   </div>
                </div>

                <a 
                   href="https://maps.google.com/?q=16230+Three+Wide+Drive+Suite+200,+Fort+Worth,+TX+76177" 
                   target="_blank" 
                   rel="noreferrer"
                   className="w-full py-4 bg-dfw-navy text-white font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-dfw-red transition-colors flex items-center justify-center gap-3 shadow-lg"
                >
                   <Navigation size={16} /> Open in Google Maps
                </a>
             </div>

             {/* Right: Google Maps Embed */}
             <div className="lg:w-2/3 h-[500px] lg:h-auto rounded-xl relative overflow-hidden shadow-inner border border-gray-200">
                <iframe
                  src="https://www.google.com/maps?q=DFW+Indoor+Sports+16230+Three+Wide+Dr+Suite+200+Fort+Worth+TX+76177&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '500px' }}
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

export default ContactLocation;