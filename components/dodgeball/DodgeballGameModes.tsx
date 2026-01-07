import React from 'react';
import { RefreshCw, UserPlus, Crown, ShieldAlert, Zap, Skull } from 'lucide-react';

const modes = [
  {
    icon: Zap,
    title: "Classic Elimination",
    desc: "Hit opponent = out. Catch = thrower out & teammate revives. Simple, competitive, timeless."
  },
  {
    icon: RefreshCw,
    title: "Doctor Dodgeball",
    desc: "Each team has a 'Doctor' who can revive eliminated players. Protect your doctor at all costs."
  },
  {
    icon: UserPlus,
    title: "Medic Mode",
    desc: "Two medics per team. Once they are eliminated, no more revivals. Strategic targeting required."
  },
  {
    icon: ShieldAlert,
    title: "Jailbreak",
    desc: "Eliminated players go to 'jail' behind enemy lines. Teammates can free them with a catch. Constant action."
  },
  {
    icon: Crown,
    title: "King's Court",
    desc: "One 'King' per team cannot be eliminated until all teammates are out. The King is the last hope."
  },
  {
    icon: Skull,
    title: "Protect The President",
    desc: "VIP player must be protected. They can't throw/catch. Perfect for birthday parties (VIP is birthday child)."
  }
];

const DodgeballGameModes: React.FC = () => {
  return (
    <section className="py-24 bg-[#4C1D95] text-white relative overflow-hidden">
       <div className="absolute inset-0 bg-[url('/textures/stardust.png')] opacity-10"></div>
       <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/20 to-transparent"></div>

       <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
             <span className="text-orange-400 font-mono text-xs font-bold uppercase tracking-widest mb-3 block">More Than One Way To Play</span>
             <h2 className="text-3xl md:text-5xl font-header font-bold text-white uppercase mb-6">Game Variations</h2>
             <p className="text-violet-200">Our staff can teach and facilitate all these modes to keep your event fresh.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {modes.map((mode, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors group">
                   <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 bg-orange-500 rounded-md text-white shadow-lg group-hover:scale-110 transition-transform">
                         <mode.icon size={20} />
                      </div>
                      <h3 className="font-header font-bold text-lg uppercase">{mode.title}</h3>
                   </div>
                   <p className="text-sm text-gray-300 leading-relaxed font-light">
                      {mode.desc}
                   </p>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
};

export default DodgeballGameModes;