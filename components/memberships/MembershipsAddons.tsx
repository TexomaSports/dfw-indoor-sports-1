import React from 'react';
import { Check } from 'lucide-react';

const MembershipsAddons: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-[#0A111F] border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-10 text-center">Customize Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
             <div className="bg-white dark:bg-white/5 p-6 rounded-lg border border-gray-100 dark:border-white/10 shadow-sm transition-colors">
                <div className="flex justify-between items-start mb-4">
                   <h4 className="font-bold text-dfw-navy dark:text-white uppercase">Spouse Add-On</h4>
                   <span className="font-bold text-dfw-red">$49/mo</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Extend full membership benefits to your partner. Requires active primary membership.</p>
                <ul className="text-xs text-gray-400 dark:text-gray-500 space-y-2">
                   <li className="flex gap-2"><Check size={12} className="text-green-500" /> Full Unlimited Access</li>
                   <li className="flex gap-2"><Check size={12} className="text-green-500" /> Independent Keycard</li>
                </ul>
             </div>
             <div className="bg-white dark:bg-white/5 p-6 rounded-lg border border-gray-100 dark:border-white/10 shadow-sm transition-colors">
                <div className="flex justify-between items-start mb-4">
                   <h4 className="font-bold text-dfw-navy dark:text-white uppercase">Kids Add-On</h4>
                   <span className="font-bold text-dfw-red">$20/mo</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Per additional child (beyond 2 in Family plan, or added to Gold). Unlimited access.</p>
                <ul className="text-xs text-gray-400 dark:text-gray-500 space-y-2">
                   <li className="flex gap-2"><Check size={12} className="text-green-500" /> All Sports Access</li>
                   <li className="flex gap-2"><Check size={12} className="text-green-500" /> Youth Program Access</li>
                </ul>
             </div>
             <div className="bg-white dark:bg-white/5 p-6 rounded-lg border border-gray-100 dark:border-white/10 shadow-sm transition-colors">
                <div className="flex justify-between items-start mb-4">
                   <h4 className="font-bold text-dfw-navy dark:text-white uppercase">Guest Pass</h4>
                   <span className="font-bold text-dfw-red">$15/day</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Bring a friend to play. Valid for full day access to member's included sports.</p>
                <ul className="text-xs text-gray-400 dark:text-gray-500 space-y-2">
                   <li className="flex gap-2"><Check size={12} className="text-green-500" /> Facility Access</li>
                   <li className="flex gap-2"><Check size={12} className="text-green-500" /> Must Accompany Member</li>
                </ul>
             </div>
          </div>
       </div>
    </section>
  );
};

export default MembershipsAddons;