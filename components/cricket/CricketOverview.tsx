import React from 'react';
import { Clock, MapPin, DollarSign, CheckCircle2, Shield, Ruler, Zap, Thermometer, Video, Calendar, ShieldCheck } from 'lucide-react';

const features = [
  { icon: Ruler, title: "ICC-Standard Lanes", desc: "Regulation 22-yard pitch length, Australian matting for true bounce, and full 30m run-up space." },
  { icon: Zap, title: "Machines Included", desc: "Variable speed (40-90 mph) bowling machines included FREE. Face 100+ deliveries/hr." },
  { icon: Thermometer, title: "Climate Controlled", desc: "Perfect 72°F year-round. Train through Texas summer heat without interruption." },
  { icon: Video, title: "Video Analysis", desc: "Recording stations at every lane. Tablet mounts for self-analysis or coach review." },
  { icon: Calendar, title: "Flexible Booking", desc: "Book online 24/7. Real-time availability. Reserve up to 30 days in advance." },
  { icon: ShieldCheck, title: "Gear Provided", desc: "We provide balls, helmets, pads, and gloves. Personal bat recommended but rentals available." }
];

const CricketOverview: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
       <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start mb-24">
             
             {/* Left: Narrative */}
             <div className="lg:w-3/5">
                <div className="inline-flex items-center gap-2 mb-6">
                   <Shield size={16} className="text-[#006838]" />
                   <span className="text-gray-900 font-mono text-xs font-bold uppercase tracking-widest">Premier Facility</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-header font-bold text-[#006838] uppercase leading-[0.95] mb-8">
                   Fort Worth's Premier <br/> <span className="text-gray-400">Indoor Cricket Hub</span>
                </h2>
                <div className="prose prose-lg text-gray-600 leading-relaxed mb-10 font-light">
                   <p>
                      Finding quality cricket practice facilities in North Texas is challenging. Outdoor nets become unbearable in summer heat. Public parks lack proper equipment. Most facilities close during rain or extreme weather.
                   </p>
                   <p>
                      <strong className="text-[#006838]">DFW Indoor Sports solves every problem.</strong>
                   </p>
                   <p>
                      Our six professional cricket lanes provide year-round access to ICC-standard training facilities just minutes from anywhere in the Dallas-Fort Worth metroplex. Whether you're a beginner learning cricket fundamentals or a competitive player preparing for tournaments, our climate-controlled indoor facility delivers consistent, high-quality practice conditions impossible to find elsewhere in Texas.
                   </p>
                </div>
             </div>

             {/* Right: Quick Answer Box (AEO) */}
             <div className="lg:w-2/5 w-full">
                <div className="bg-[#006838] p-8 rounded-lg shadow-2xl relative overflow-hidden text-white border border-white/10 group">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-white/20 transition-colors duration-700"></div>
                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
                   
                   <h3 className="text-xl font-header font-bold uppercase tracking-wider mb-6 border-b border-white/20 pb-4 relative z-10">Quick Facts</h3>
                   
                   <ul className="space-y-5 text-sm relative z-10">
                      <li className="flex gap-4 items-start">
                         <div className="mt-1"><DollarSign size={16} className="text-red-500" /></div>
                         <div>
                            <span className="block font-bold text-green-100 uppercase text-[10px] tracking-widest mb-1">Pricing</span>
                            <p>$40/hr (Peak) | $35/hr (Off-Peak)</p>
                         </div>
                      </li>
                      <li className="flex gap-4 items-start">
                         <div className="mt-1"><CheckCircle2 size={16} className="text-red-500" /></div>
                         <div>
                            <span className="block font-bold text-green-100 uppercase text-[10px] tracking-widest mb-1">Included</span>
                            <p>Lane, Machine, Balls, Basic Protective Gear</p>
                         </div>
                      </li>
                      <li className="flex gap-4 items-start">
                         <div className="mt-1"><MapPin size={16} className="text-red-500" /></div>
                         <div>
                            <span className="block font-bold text-green-100 uppercase text-[10px] tracking-widest mb-1">Location</span>
                            <p>16230 Three Wide Dr, Fort Worth</p>
                         </div>
                      </li>
                      <li className="flex gap-4 items-start">
                         <div className="mt-1"><Clock size={16} className="text-red-500" /></div>
                         <div>
                            <span className="block font-bold text-green-100 uppercase text-[10px] tracking-widest mb-1">Hours</span>
                            <p>Mon-Sun 5:00 AM - 11:00 PM</p>
                         </div>
                      </li>
                   </ul>

                   <button className="w-full mt-8 py-3 bg-red-600 text-white font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-red-700 transition-colors shadow-lg relative z-10">
                      Check Availability
                   </button>
                </div>
             </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, idx) => (
                <div key={idx} className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:border-[#006838]/30 hover:shadow-lg transition-all duration-300 group">
                   <div className="w-14 h-14 bg-white text-[#006838] rounded-lg flex items-center justify-center mb-6 border border-gray-200 group-hover:bg-[#006838] group-hover:text-white transition-colors">
                      <feat.icon size={28} strokeWidth={1.5} />
                   </div>
                   <h3 className="text-xl font-header font-bold text-gray-900 uppercase mb-3">{feat.title}</h3>
                   <p className="text-sm text-gray-500 leading-relaxed">
                      {feat.desc}
                   </p>
                </div>
            ))}
          </div>
       </div>
    </section>
  );
};

export default CricketOverview;