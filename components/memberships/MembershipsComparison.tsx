import React from 'react';

const MembershipsComparison: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#020408] relative transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-12 text-center">Feature Comparison</h2>
          
          <div className="overflow-x-auto">
             <table className="w-full min-w-[900px] border-collapse">
                <thead>
                   <tr>
                      <th className="p-4 text-left border-b-2 border-dfw-navy/10 dark:border-white/10 w-1/4"></th>
                      <th className="p-4 text-center border-b-2 border-dfw-navy/10 dark:border-white/10 font-header font-bold text-dfw-navy dark:text-white uppercase tracking-wider">Badminton Unl.</th>
                      <th className="p-4 text-center border-b-2 border-dfw-navy/10 dark:border-white/10 font-header font-bold text-dfw-navy dark:text-white uppercase tracking-wider">Cricket Unl.</th>
                      <th className="p-4 text-center border-b-2 border-dfw-red bg-dfw-navy text-white font-header font-bold uppercase tracking-wider rounded-t-lg">Gold Member</th>
                      <th className="p-4 text-center border-b-2 border-dfw-navy/10 dark:border-white/10 font-header font-bold text-dfw-navy dark:text-white uppercase tracking-wider">Family Gold</th>
                   </tr>
                </thead>
                <tbody className="text-sm">
                   {[
                      { feature: "Commitment", bad: "6mo / Monthly", cric: "Monthly", gold: "6mo / Monthly", fam: "6 Months" },
                      { feature: "Cricket Access", bad: "---", cric: "Unlimited", gold: "Unlimited", fam: "Unlimited" },
                      { feature: "Badminton Access", bad: "Unlimited", cric: "---", gold: "Unlimited", fam: "Unlimited" },
                      { feature: "Bowling Machine", bad: "N/A", cric: "Included", gold: "Included", fam: "Included" },
                      { feature: "Members Covered", bad: "1 Adult", cric: "1 Adult", gold: "1 Adult", fam: "2 Adults + 2 Kids" },
                      { feature: "Coaching Discount", bad: "---", cric: "10%", gold: "10%", fam: "10% / Student" },
                      { feature: "24/7 Access", bad: "Yes", cric: "Yes", gold: "Yes", fam: "Yes" },
                      { feature: "Priority Booking", bad: "Yes", cric: "Yes", gold: "Yes", fam: "Yes" },
                   ].map((row, i) => (
                      <tr key={i} className={`hover:bg-gray-50 dark:hover:bg-white/5 transition-colors ${i % 2 === 0 ? 'bg-white dark:bg-[#050911]' : 'bg-[#FAFAFA] dark:bg-[#0A111F]'}`}>
                         <td className="p-4 font-medium text-gray-700 dark:text-gray-300 border-b border-gray-100 dark:border-white/5">{row.feature}</td>
                         <td className="p-4 text-center text-gray-600 dark:text-gray-400 border-b border-gray-100 dark:border-white/5">{row.bad}</td>
                         <td className="p-4 text-center text-gray-600 dark:text-gray-400 border-b border-gray-100 dark:border-white/5">{row.cric}</td>
                         <td className="p-4 text-center font-bold text-dfw-navy dark:text-white border-b border-gray-100 dark:border-white/5 bg-dfw-red/5 dark:bg-dfw-red/10 border-l border-r border-dfw-red/10">{row.gold}</td>
                         <td className="p-4 text-center text-gray-600 dark:text-gray-400 border-b border-gray-100 dark:border-white/5">{row.fam}</td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
       </div>
    </section>
  );
};

export default MembershipsComparison;