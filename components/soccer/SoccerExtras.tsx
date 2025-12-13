import React from 'react';
import { ShoppingBag, Trophy, ArrowRight, Shirt, Briefcase, Activity, Goal } from 'lucide-react';

const SoccerExtras: React.FC = () => {
  return (
    <section className="bg-white py-24 border-b border-gray-200">
       <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             
             {/* Pro Shop */}
             <div>
                <div className="flex items-center gap-3 mb-6">
                   <div className="p-3 bg-emerald-50 rounded-full text-[#064E3B]"><ShoppingBag size={24} /></div>
                   <h3 className="text-2xl font-header font-bold text-[#064E3B] uppercase">On-Site Pro Shop</h3>
                </div>
                <p className="text-gray-500 mb-6 leading-relaxed text-sm">
                   Soccer equipment and apparel from leading brands.
                </p>
                <div className="space-y-6">
                   <div className="flex justify-between border-b border-gray-200 pb-3">
                      <span className="font-bold text-gray-700 text-sm">Soccer Balls</span>
                      <span className="text-xs text-gray-500">Match (Size 3,4,5), Training, Futsal</span>
                   </div>
                   <div className="flex justify-between border-b border-gray-200 pb-3">
                      <span className="font-bold text-gray-700 text-sm">Footwear</span>
                      <span className="text-xs text-gray-500">Indoor shoes, Turf trainers, Socks</span>
                   </div>
                   <div className="flex justify-between border-b border-gray-200 pb-3">
                      <span className="font-bold text-gray-700 text-sm">Apparel</span>
                      <span className="text-xs text-gray-500">Jerseys, Shorts, Team Uniforms, Goalkeeper gear</span>
                   </div>
                   <div className="flex justify-between border-b border-gray-200 pb-3">
                      <span className="font-bold text-gray-700 text-sm">Training Equipment</span>
                      <span className="text-xs text-gray-500">Cones, Agility ladders, Bands</span>
                   </div>
                </div>
                <div className="mt-6 p-4 bg-emerald-50 rounded border border-emerald-100">
                   <p className="text-xs font-bold text-emerald-700 uppercase tracking-widest text-center">Member Discount: 10% Off All Purchases</p>
                </div>
             </div>

             {/* Additional Services */}
             <div>
                <div className="flex items-center gap-3 mb-6">
                   <div className="p-3 bg-emerald-50 rounded-full text-[#064E3B]"><Trophy size={24} /></div>
                   <h3 className="text-2xl font-header font-bold text-[#064E3B] uppercase">Complete Experience</h3>
                </div>
                <div className="space-y-4">
                   <div className="p-4 bg-gray-50 rounded border border-gray-100 hover:border-emerald-200 transition-colors group">
                      <h4 className="font-bold text-[#064E3B] text-sm uppercase mb-1 flex items-center gap-2">
                         <Trophy size={14} className="text-emerald-500" /> Tournament Hosting
                      </h4>
                      <p className="text-xs text-gray-500">Multi-field setup, professional coordination, referee services available.</p>
                   </div>
                   <div className="p-4 bg-gray-50 rounded border border-gray-100 hover:border-emerald-200 transition-colors group">
                      <h4 className="font-bold text-[#064E3B] text-sm uppercase mb-1 flex items-center gap-2">
                         <Briefcase size={14} className="text-emerald-500" /> Corporate Team Building
                      </h4>
                      <p className="text-xs text-gray-500">Soccer-based team building for companies. Fun, active, builds camaraderie.</p>
                   </div>
                   <div className="p-4 bg-gray-50 rounded border border-gray-100 hover:border-emerald-200 transition-colors group">
                      <h4 className="font-bold text-[#064E3B] text-sm uppercase mb-1 flex items-center gap-2">
                         <Activity size={14} className="text-emerald-500" /> Skills Assessments
                      </h4>
                      <p className="text-xs text-gray-500">Professional player evaluation identifying strengths and areas for improvement.</p>
                   </div>
                   <div className="p-4 bg-gray-50 rounded border border-gray-100 hover:border-emerald-200 transition-colors group">
                      <h4 className="font-bold text-[#064E3B] text-sm uppercase mb-1 flex items-center gap-2">
                         <Goal size={14} className="text-emerald-500" /> Goalkeeper Clinics
                      </h4>
                      <p className="text-xs text-gray-500">Specialized training for keepers. Position-specific techniques.</p>
                   </div>
                </div>
             </div>

          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center border-t border-gray-100 pt-12">
             <div>
                <h5 className="font-bold text-gray-900 text-sm uppercase mb-2">Changing Facilities</h5>
                <p className="text-xs text-gray-500">Men's & Women's locker rooms with showers. Clean & secure.</p>
             </div>
             <div>
                <h5 className="font-bold text-gray-900 text-sm uppercase mb-2">Viewing Areas</h5>
                <p className="text-xs text-gray-500">Spectator seating with field views. WiFi available.</p>
             </div>
             <div>
                <h5 className="font-bold text-gray-900 text-sm uppercase mb-2">Summer Camps</h5>
                <p className="text-xs text-gray-500">Week-long intensive training during summer. All skill levels.</p>
             </div>
          </div>
       </div>
    </section>
  );
};

export default SoccerExtras;