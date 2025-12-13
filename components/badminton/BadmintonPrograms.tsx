import React from 'react';
import { Trophy, Users, Zap, UserPlus } from 'lucide-react';

const BadmintonPrograms: React.FC = () => {
  return (
    <section className="bg-white py-24 border-b border-gray-200">
       <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
             <span className="text-blue-600 font-mono text-xs font-bold uppercase tracking-widest mb-3 block">Community</span>
             <h2 className="text-4xl md:text-5xl font-header font-bold text-[#1E3A8A] uppercase mb-6">More Than Just a Court</h2>
             <p className="text-gray-500">Join our thriving badminton community through leagues, training, and social play.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             
             {/* Leagues */}
             <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-blue-600 hover:-translate-y-1 transition-all group">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                   <Trophy size={24} />
                </div>
                <h3 className="font-bold text-[#1E3A8A] text-lg uppercase mb-2">Recreational Leagues</h3>
                <p className="text-xs text-gray-500 mb-6 h-12 leading-relaxed">Social doubles with rotating partners. Emphasis on fun and meeting people.</p>
                <div className="text-sm font-bold text-blue-700 border-t border-gray-200 pt-4 flex justify-between items-center">
                   <span>$120 / Season</span>
                   <span className="text-[10px] uppercase tracking-wider text-gray-400">Waitlist Open</span>
                </div>
             </div>

             {/* Drop-In */}
             <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-blue-600 hover:-translate-y-1 transition-all group">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                   <Users size={24} />
                </div>
                <h3 className="font-bold text-[#1E3A8A] text-lg uppercase mb-2">Drop-In Play</h3>
                <p className="text-xs text-gray-500 mb-6 h-12 leading-relaxed">Organized social sessions. We match you with partners. Tue/Thu/Sat.</p>
                <div className="text-sm font-bold text-blue-700 border-t border-gray-200 pt-4 flex justify-between items-center">
                   <span>Free for Members</span>
                   <span className="text-[10px] uppercase tracking-wider text-gray-400">Weekly</span>
                </div>
             </div>

             {/* Coaching */}
             <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-blue-600 hover:-translate-y-1 transition-all group">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                   <Zap size={24} />
                </div>
                <h3 className="font-bold text-[#1E3A8A] text-lg uppercase mb-2">Private Coaching</h3>
                <p className="text-xs text-gray-500 mb-6 h-12 leading-relaxed">1-on-1 instruction. Improve grip, footwork, and smash technique.</p>
                <div className="text-sm font-bold text-blue-700 border-t border-gray-200 pt-4 flex justify-between items-center">
                   <span>From $50 / Hr</span>
                   <span className="text-[10px] uppercase tracking-wider text-gray-400">By Appt</span>
                </div>
             </div>

             {/* Youth */}
             <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-blue-600 hover:-translate-y-1 transition-all group">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                   <UserPlus size={24} />
                </div>
                <h3 className="font-bold text-[#1E3A8A] text-lg uppercase mb-2">Youth Programs</h3>
                <p className="text-xs text-gray-500 mb-6 h-12 leading-relaxed">After-school clinics for ages 7-17. Build coordination and confidence.</p>
                <div className="text-sm font-bold text-blue-700 border-t border-gray-200 pt-4 flex justify-between items-center">
                   <span>$120 / Session</span>
                   <span className="text-[10px] uppercase tracking-wider text-gray-400">Seasonal</span>
                </div>
             </div>

          </div>
       </div>
    </section>
  );
};

export default BadmintonPrograms;