import React from 'react';
import { MapPin, Navigation, Car } from 'lucide-react';

const SoccerLocation: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100 border-t border-gray-200">
       <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
             <div className="md:w-1/2">
                <span className="text-emerald-600 font-mono text-xs font-bold uppercase tracking-widest mb-3 block">Service Area</span>
                <h2 className="text-3xl font-header font-bold text-[#064E3B] uppercase mb-6">Conveniently Located</h2>
                <div className="space-y-6 mb-8">
                   <div>
                      <h4 className="font-bold text-gray-900 text-sm uppercase mb-2 flex items-center gap-2">
                         <Car size={16} className="text-emerald-500" /> Close Proximity (10-20 Mins)
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed bg-white p-3 rounded-sm border border-gray-200">
                         Fort Worth • Arlington • Grand Prairie • Irving • Bedford • Euless • Hurst • North Richland Hills • Keller • Southlake • Grapevine • Colleyville
                      </p>
                   </div>
                   <div>
                      <h4 className="font-bold text-gray-900 text-sm uppercase mb-2 flex items-center gap-2">
                         <Car size={16} className="text-emerald-500" /> Worth the Drive (20-35 Mins)
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed bg-white p-3 rounded-sm border border-gray-200">
                         Dallas (West/Central) • Carrollton • Farmers Branch • Coppell • Flower Mound • Lewisville • Mansfield • Plano (South) • Richardson
                      </p>
                   </div>
                   <div>
                      <h4 className="font-bold text-gray-900 text-sm uppercase mb-2 flex items-center gap-2">
                         <Car size={16} className="text-emerald-500" /> Extended Service (35-50 Mins)
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed bg-white p-3 rounded-sm border border-gray-200">
                         Frisco • McKinney • Allen • Plano (North) • Denton • Prosper • Celina
                      </p>
                   </div>
                </div>
                <div className="flex items-center gap-4">
                   <a 
                      href="https://maps.google.com/?q=16230+Three+Wide+Drive+Suite+200,+Fort+Worth,+TX+76177" 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#064E3B] text-white font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-emerald-700 transition-colors shadow-lg"
                   >
                      <Navigation size={14} /> Get Directions
                   </a>
                   <span className="text-xs font-bold text-gray-500 uppercase">Free Parking: 100+ Spaces</span>
                </div>
             </div>
             <div className="md:w-1/2 h-[500px] bg-gray-200 rounded-lg relative overflow-hidden shadow-inner flex items-center justify-center group">
                {/* Simulated Map */}
                <div className="absolute inset-0 bg-[#E5E7EB] opacity-50"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10"></div>
                <div className="relative z-10 flex flex-col items-center">
                   <MapPin size={48} className="text-[#064E3B] drop-shadow-xl mb-2 group-hover:-translate-y-2 transition-transform duration-300" />
                   <span className="bg-white px-4 py-2 text-xs font-bold text-[#064E3B] rounded shadow-sm border border-emerald-100">16230 Three Wide Dr</span>
                   <span className="mt-2 text-[10px] bg-emerald-100 text-emerald-800 px-2 py-1 rounded font-bold uppercase tracking-widest">Easy Highway Access (I-35W / I-30)</span>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
};

export default SoccerLocation;