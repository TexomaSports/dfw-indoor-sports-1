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

             {/* Right: Interactive Map Placeholder */}
             <div className="lg:w-2/3 h-[500px] lg:h-auto bg-[#F0F2F5] rounded-xl relative overflow-hidden group shadow-inner border border-gray-200">
                {/* Simulated Map Background */}
                <div 
                   className="absolute inset-0 bg-cover bg-center grayscale opacity-60 group-hover:grayscale-0 transition-all duration-700"
                   style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop")' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#F0F2F5] to-transparent mix-blend-overlay"></div>
                
                {/* Center Marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 group-hover:scale-110 transition-transform duration-500">
                   <div className="relative flex h-8 w-8">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dfw-red opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-8 w-8 bg-dfw-red border-[3px] border-white shadow-xl items-center justify-center text-white">
                        <MapPin size={14} fill="currentColor" />
                     </span>
                   </div>
                   <div className="bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-100 flex flex-col items-center">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">You Are Here</span>
                      <span className="font-header font-bold text-dfw-navy uppercase text-sm">DFW Indoor Sports</span>
                   </div>
                </div>
                
                {/* Overlay UI elements for realism */}
                <div className="absolute bottom-6 right-6 flex gap-2">
                   <div className="w-8 h-8 bg-white rounded shadow flex items-center justify-center text-gray-600 font-bold text-xl cursor-pointer hover:bg-gray-50">+</div>
                   <div className="w-8 h-8 bg-white rounded shadow flex items-center justify-center text-gray-600 font-bold text-xl cursor-pointer hover:bg-gray-50">-</div>
                </div>
             </div>

          </div>
       </div>
    </section>
  );
};

export default ContactLocation;