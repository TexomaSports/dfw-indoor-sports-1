import React from 'react';
import { ArrowUpRight, CheckCircle2, Wind, Wifi, Zap, Activity, Cast, Layout, ArrowRight } from 'lucide-react';

const facilities = [
  {
    title: 'Pro Cricket Arena',
    id: '01',
    subtitle: 'International Standard',
    status: 'Active',
    capacity: '22 Players',
    specs: ['70m Boundaries', 'PitchVision™', 'Hybrid Turf'],
    img: '/images/facilities/cricket-lanes.webp',
    className: 'md:col-span-2 md:row-span-2',
    priority: true,
    icons: [Wifi, Wind, Cast]
  },
  {
    title: 'Badminton Hall',
    id: '02',
    subtitle: 'BWF Approved',
    status: 'Busy',
    capacity: '6 Courts',
    specs: ['BWF Courts', 'Anti-Glare LED', 'Pro Flooring'],
    img: '/images/facilities/badminton-courts.webp',
    className: 'md:col-span-2 md:row-span-1',
    icons: [Wind, Zap]
  },
  {
    title: 'FIFA Turf',
    id: '03',
    subtitle: '5-a-side',
    status: 'Open',
    capacity: '10 Players',
    specs: ['FIFA Grade', 'Shock Pad'],
    img: '/images/facilities/soccer-fields.webp',
    className: 'md:col-span-1 md:row-span-1',
    icons: [Activity]
  },
  {
    title: 'Net Practice',
    id: '04',
    subtitle: 'Automated',
    status: 'Reserved',
    capacity: '4 Lanes',
    specs: ['Auto-Feeders', 'Video Analysis'],
    img: '/images/facilities/bowling-machine.webp',
    className: 'md:col-span-1 md:row-span-1',
    icons: [Cast, Wifi]
  },
  {
    title: 'Events Arena',
    id: '05',
    subtitle: 'Multi-purpose',
    status: 'Inquire',
    capacity: '200+ Guests',
    specs: ['Corporate', 'Parties', 'Team Building'],
    img: '/images/events/corporate-events.webp',
    className: 'md:col-span-2 md:row-span-1',
    icons: [Layout, Wifi, Wind]
  },
  {
    title: 'Facility Tour',
    id: '06',
    subtitle: 'Explore',
    status: 'Book Now',
    isContact: true,
    specs: ['Schedule Visit', 'Membership Info'],
    img: '/images/events/gym-fitness.webp',
    className: 'md:col-span-2 md:row-span-1 bg-dfw-navy',
    icons: []
  }
];

const FacilitiesGrid: React.FC = () => {
  return (
    <section className="bg-white pt-20 md:pt-32 pb-16 md:pb-24 relative z-10">

      {/* Background Texture - Micro Detail */}
      <div className="absolute inset-0 bg-[url('/textures/cubes.png')] opacity-[0.03]"></div>

      {/* Technical Grid Lines */}
      <div className="absolute left-0 top-0 h-full w-[1px] bg-gray-100 left-[10%] hidden md:block"></div>
      <div className="absolute right-0 top-0 h-full w-[1px] bg-gray-100 right-[10%] hidden md:block"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6 md:gap-8">
          <div className="max-w-3xl relative">
            {/* Decorative Tech Element */}
            <div className="absolute -left-8 top-0 h-full w-[2px] bg-gradient-to-b from-dfw-red to-transparent hidden md:block"></div>

            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <span className="flex gap-1">
                <span className="h-[2px] w-2 bg-dfw-navy"></span>
                <span className="h-[2px] w-2 bg-dfw-navy/50"></span>
                <span className="h-[2px] w-12 bg-dfw-navy/20"></span>
              </span>
              <span className="text-dfw-navy font-mono text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em]">Infrastructure // Zone 01</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-7xl font-header font-bold text-dfw-navy uppercase leading-[0.9] tracking-tight mb-4 md:mb-6">
              Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-dfw-red to-red-800">Glory</span>
            </h2>

            <div className="flex flex-col md:flex-row gap-4 md:gap-8 md:items-center">
              <p className="text-gray-500 font-medium leading-relaxed max-w-lg text-sm border-l border-gray-200 pl-4 md:pl-6">
                50,000 sq ft of precision-engineered sports environments. From hybrid turf technology to BWF-approved flooring, every detail is calibrated for peak performance.
              </p>

              {/* Micro Stat */}
              <div className="hidden lg:block">
                <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1">Total Area</div>
                <div className="text-2xl font-header font-bold text-dfw-navy">50<span className="text-dfw-red text-sm">k</span></div>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <button className="group relative flex items-center gap-4 text-dfw-navy font-bold uppercase tracking-widest text-xs py-3 px-6 border border-gray-200 hover:border-dfw-navy transition-all duration-300 rounded-sm overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                View All Spaces <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={14} />
              </span>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-dfw-navy scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </div>

        {/* Bento Grid - Refined Physics */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[280px] md:auto-rows-[320px] gap-4 md:gap-6">
          {facilities.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg bg-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1 ${item.className}`}
            >
              {/* Image Layer with Smoother Zoom */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-110 will-change-transform grayscale-[20%] group-hover:grayscale-0"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>

              {/* Tech Overlay Grid (Visible on hover) */}
              <div className="absolute inset-0 bg-[url('/textures/graphy.png')] opacity-0 group-hover:opacity-10 transition-opacity duration-500 mix-blend-overlay"></div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dfw-navy/95 via-dfw-navy/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

              {/* Top Bar (Micro Details) */}
              <div className="absolute top-0 left-0 w-full p-4 md:p-6 flex justify-between items-start opacity-100 z-10">
                <div className="flex gap-2">
                  <span className="font-mono text-[9px] font-bold text-white/80 bg-black/20 backdrop-blur-md border border-white/10 px-2 py-1 rounded-sm uppercase tracking-widest">
                    {item.id}
                  </span>
                  {item.priority && (
                    <span className="font-mono text-[9px] font-bold text-dfw-red bg-dfw-red/10 backdrop-blur-md border border-dfw-red/20 px-2 py-1 rounded-sm uppercase tracking-widest flex items-center gap-1">
                      <span className="w-1 h-1 bg-dfw-red rounded-full animate-pulse"></span> Featured
                    </span>
                  )}
                </div>

                <div className="flex flex-col items-end gap-1">
                  <div className="flex gap-1 text-white/40 group-hover:text-white/80 transition-colors">
                    {item.icons.map((Icon, idx) => <Icon key={idx} size={12} />)}
                  </div>
                </div>
              </div>

              {/* Bottom Content Layer */}
              <div className="absolute bottom-0 left-0 w-full p-5 md:p-6 lg:p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">

                  {/* Title Section */}
                  <div className="mb-2">
                    <span className="text-[9px] md:text-[10px] font-bold text-dfw-red uppercase tracking-widest block mb-1 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 translate-y-0 md:translate-y-2 group-hover:translate-y-0">
                      {item.subtitle}
                    </span>
                    <h3 className={`font-header font-bold uppercase leading-[0.85] text-white drop-shadow-md ${item.priority ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'}`}>
                      {item.title}
                    </h3>
                  </div>

                  {/* Specs & Meta (Slide Up) */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${item.isContact ? 'max-h-20 opacity-100 mt-4' : 'max-h-20 md:max-h-0 opacity-100 md:opacity-0 group-hover:max-h-40 group-hover:opacity-100 mt-3 md:mt-0 group-hover:mt-4'}`}>

                    {item.isContact ? (
                      <button className="w-full bg-white hover:bg-dfw-red text-dfw-navy hover:text-white py-3 px-4 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all shadow-lg flex items-center justify-between group/btn">
                        Book Tour <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </button>
                    ) : (
                      <div className="space-y-3 border-t border-white/10 pt-3">
                        <div className="flex justify-between items-center text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                          <span>Capacity</span>
                          <span className="text-white">{item.capacity}</span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {item.specs.map((spec, i) => (
                            <span key={i} className="flex items-center gap-1.5 text-[9px] md:text-[10px] font-medium text-gray-300 bg-white/5 px-2 py-1 rounded-sm border border-white/5">
                              <CheckCircle2 size={10} className="text-dfw-red" /> {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Status Indicator Bottom Right (Absolute) */}
              {!item.isContact && (
                <div className="absolute bottom-5 right-5 md:bottom-6 md:right-6 opacity-0 md:opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  <span className="flex items-center gap-1.5 text-[9px] font-mono font-bold text-white/60 uppercase tracking-wider bg-black/20 px-2 py-1 rounded-sm backdrop-blur-sm border border-white/5">
                    <span className={`w-1.5 h-1.5 rounded-full ${item.status === 'Active' || item.status === 'Open' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                    {item.status}
                  </span>
                </div>
              )}

            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden mt-6">
          <button className="w-full flex items-center justify-center gap-2 px-6 py-4 border border-gray-200 text-dfw-navy font-bold uppercase text-xs tracking-widest bg-white rounded-sm shadow-sm">
            View All Spaces <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesGrid;