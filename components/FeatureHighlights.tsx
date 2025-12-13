import React from 'react';
import { ArrowUpRight, Shield, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const highlights = [
  {
    id: '01',
    title: 'Elite Courts',
    subtitle: 'Multisport Configuration',
    description: 'Versatile, high-performance courts designed for international standards. Optimized for Cricket, Badminton, and Soccer.',
    img: 'https://images.unsplash.com/photo-1505666287802-931dc83948e9?q=80&w=800&auto=format&fit=crop',
    icon: Shield,
    link: '/rentals'
  },
  {
    id: '02',
    title: 'Pro Gear',
    subtitle: 'Advanced Training Equipment',
    description: 'Access state-of-the-art bowling machines, pitch vision technology, and analytics tools to refine your technique.',
    img: 'https://images.unsplash.com/photo-1606925797300-0b35e9d17d27?q=80&w=800&auto=format&fit=crop',
    icon: Target,
    link: '/cricket-lanes'
  },
  {
    id: '03',
    title: 'Expert Staff',
    subtitle: 'World-Class Coaching',
    description: 'Train under the guidance of certified professionals and former national players dedicated to your growth.',
    img: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=800&auto=format&fit=crop',
    icon: Award,
    link: '/academy/coaches'
  }
];

const FeatureHighlights: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 md:py-32 relative overflow-hidden">
      {/* Subtle Grain Texture */}
      <div className="absolute inset-0 opacity-[0.4] bg-[url('https://www.transparenttextures.com/patterns/snow.png')] pointer-events-none mix-blend-multiply"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-20 text-center max-w-3xl mx-auto">
           <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-4 block">The DFW Advantage</span>
           <h2 className="text-4xl md:text-5xl font-header font-bold text-dfw-navy uppercase leading-tight mb-6">
             Everything You Need <br/> To <span className="text-transparent bg-clip-text bg-gradient-to-r from-dfw-navy to-gray-500">Excel</span>
           </h2>
           <p className="text-gray-500 font-light leading-relaxed px-4 md:px-0">
             Our facility is more than just a place to play. It's a complete ecosystem designed to nurture talent and host world-class events.
           </p>
        </div>

        {/* Floating Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="group relative bg-white rounded-lg p-3 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              
              <div className="relative h-[220px] md:h-[280px] rounded-md overflow-hidden mb-6 md:mb-8 shadow-inner">
                 <div 
                   className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                   style={{ backgroundImage: `url(${item.img})` }}
                 ></div>
                 
                 {/* Cinematic Gradient Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-dfw-navy/90 via-transparent to-transparent opacity-80 group-hover:opacity-70 transition-opacity"></div>
                 
                 {/* Icon with Glass effect */}
                 <div className="absolute top-4 left-4 p-3 bg-white/10 backdrop-blur-md rounded-md border border-white/20 text-white group-hover:bg-white group-hover:text-dfw-red transition-all duration-300 shadow-lg">
                    <item.icon size={20} />
                 </div>
                 
                 {/* ID Watermark */}
                 <div className="absolute bottom-4 left-6 text-white mix-blend-overlay">
                    <span className="font-header text-5xl md:text-6xl font-bold opacity-30 select-none tracking-tighter">{item.id}</span>
                 </div>
              </div>

              <div className="px-4 md:px-5 pb-6 md:pb-8">
                <h3 className="text-2xl font-header font-bold text-dfw-navy uppercase mb-3 tracking-wide group-hover:text-dfw-red transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed mb-6 md:mb-8 border-l border-gray-100 pl-4 group-hover:border-dfw-red/20 transition-colors">
                  {item.description}
                </p>
                
                <Link to={item.link} className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-dfw-navy bg-gray-50 px-5 py-3 rounded-sm border border-gray-200 group-hover:bg-dfw-red group-hover:text-white group-hover:border-dfw-red transition-all duration-300 shadow-sm hover:shadow-md">
                  Learn More <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;