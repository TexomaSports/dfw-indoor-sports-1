import React from 'react';
import { Trophy, Users, Zap, UserPlus } from 'lucide-react';

const SoccerPrograms: React.FC = () => {
  return (
    <section className="bg-white py-24 border-b border-gray-200">
       <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
             <span className="text-emerald-600 font-mono text-xs font-bold uppercase tracking-widest mb-3 block">Development & Play</span>
             <h2 className="text-4xl md:text-5xl font-header font-bold text-[#064E3B] uppercase mb-6">Complete Soccer Support</h2>
             <p className="text-gray-500">Beyond field rental: leagues, training, and clinics for every level.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             
             {/* Leagues */}
             <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-emerald-600 hover:-translate-y-1 transition-all group">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                   <Trophy size={24} />
                </div>
                <h3 className="font-bold text-[#064E3B] text-lg uppercase mb-2">Adult Leagues</h3>
                <p className="text-xs text-gray-500 mb-6 h-12 leading-relaxed">
                   Co-ed and Men's divisions. 8-10 week seasons. Weekly matches (6v6 or 7v7). Referees provided.
                </p>
                <div className="text-sm font-bold text-emerald-700 border-t border-gray-200 pt-4 flex justify-between items-center">
                   <span>$150-180 / Season</span>
                   <span className="text-[10px] uppercase tracking-wider text-gray-400">Rec & Comp</span>
                </div>
             </div>

             {/* Youth */}
             <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-emerald-600 hover:-translate-y-1 transition-all group">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                   <UserPlus size={24} />
                </div>
                <h3 className="font-bold text-[#064E3B] text-lg uppercase mb-2">Youth Development</h3>
                <p className="text-xs text-gray-500 mb-6 h-12 leading-relaxed">
                   Technical training for ages 6-17. Fundamentals (6-9), Skill Building (10-13), Advanced Tactics (14-17).
                </p>
                <div className="text-sm font-bold text-emerald-700 border-t border-gray-200 pt-4 flex justify-between items-center">
                   <span>$120-150 / 8 Wks</span>
                   <span className="text-[10px] uppercase tracking-wider text-gray-400">Weekly</span>
                </div>
             </div>

             {/* Coaching */}
             <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-emerald-600 hover:-translate-y-1 transition-all group">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                   <Zap size={24} />
                </div>
                <h3 className="font-bold text-[#064E3B] text-lg uppercase mb-2">Private Coaching</h3>
                <p className="text-xs text-gray-500 mb-6 h-12 leading-relaxed">
                   One-on-one instruction. Technical skills, position training (striker/mid/defender), speed/agility.
                </p>
                <div className="text-sm font-bold text-emerald-700 border-t border-gray-200 pt-4 flex justify-between items-center">
                   <span>$60-80 / Hour</span>
                   <span className="text-[10px] uppercase tracking-wider text-gray-400">Certified</span>
                </div>
             </div>

             {/* Team Training */}
             <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-emerald-600 hover:-translate-y-1 transition-all group">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                   <Users size={24} />
                </div>
                <h3 className="font-bold text-[#064E3B] text-lg uppercase mb-2">Team Sessions</h3>
                <p className="text-xs text-gray-500 mb-6 h-12 leading-relaxed">
                   Structured practice for clubs. Technical skills, tactical training, fitness & conditioning. Bring your own coach or use ours.
                </p>
                <div className="text-sm font-bold text-emerald-700 border-t border-gray-200 pt-4 flex justify-between items-center">
                   <span>Custom Quote</span>
                   <span className="text-[10px] uppercase tracking-wider text-gray-400">Clubs</span>
                </div>
             </div>

          </div>
       </div>
    </section>
  );
};

export default SoccerPrograms;