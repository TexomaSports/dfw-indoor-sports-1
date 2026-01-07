import React from 'react';
import { ChevronDown, ArrowRight, Calendar, Bell, Trophy } from 'lucide-react';
import Link from 'next/link';

const HomeBottom: React.FC = () => {
  return (
    <>
      {/* FAQ Section */}
      <section className="py-24 bg-white dark:bg-[#020408] transition-colors duration-300">
         <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-12 text-center">Common Questions</h2>
            <div className="space-y-3">
               {[
                  { q: "What sports can I play here?", a: "Four sports: Cricket, Badminton, Soccer, and Dodgeball." },
                  { q: "Do I need a membership?", a: "No. Drop-in rentals are available. Membership is optional but recommended for frequent players (2+ times/month)." },
                  { q: "Can my whole family use one membership?", a: "Yes. Family Gold ($129/mo) covers 2 adults + 2 kids with unlimited access to all sports." },
                  { q: "What if I'm visiting from out of town?", a: "Drop-in hourly rentals are perfect for travelers. No membership required." },
                  { q: "Do you have programs for beginners?", a: "Yes. Every sport welcomes complete beginners with patient instruction. All ages welcome." }
               ].map((item, idx) => (
                  <details key={idx} className="group border-b border-gray-100 dark:border-white/10 pb-4">
                     <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-dfw-navy dark:text-white uppercase tracking-wide text-sm select-none hover:text-dfw-red dark:hover:text-dfw-red transition-colors py-4">
                        {item.q}
                        <span className="transition-transform group-open:rotate-180 text-gray-400"><ChevronDown size={16} /></span>
                     </summary>
                     <div className="pt-2 pb-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.a}</div>
                  </details>
               ))}
            </div>
            <div className="text-center mt-8">
               <Link href="/contact" className="text-xs font-bold text-dfw-red uppercase tracking-widest border-b border-dfw-red pb-1 hover:text-dfw-navy dark:hover:text-white hover:border-dfw-navy dark:hover:border-white transition-all">View All FAQs</Link>
            </div>
         </div>
      </section>

      {/* News Section */}
      <section className="py-24 bg-gray-50 dark:bg-[#0A111F] border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
         <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-end mb-12">
               <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase">Latest Updates</h2>
               <Link href="/events" className="hidden md:flex items-center gap-2 text-xs font-bold text-dfw-navy dark:text-white uppercase tracking-widest hover:text-dfw-red transition-colors">Read More <ArrowRight size={14} /></Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="bg-white dark:bg-white/5 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-white/10 hover:shadow-md transition-all">
                  <div className="text-dfw-red mb-4"><Bell size={20} /></div>
                  <h3 className="font-bold text-dfw-navy dark:text-white uppercase text-sm mb-2">Academy Enrollment Open</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">CricKingdom spring session registration is now live. Limited spots available.</p>
                  <span className="text-[10px] text-green-600 dark:text-green-400 uppercase font-mono font-bold">Register Now</span>
               </div>
               <div className="bg-white dark:bg-white/5 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-white/10 hover:shadow-md transition-all">
                  <div className="text-blue-600 mb-4"><Trophy size={20} /></div>
                  <h3 className="font-bold text-dfw-navy dark:text-white uppercase text-sm mb-2">Tournament Results</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Congratulations to the winners of our Winter Badminton Championship.</p>
                  <span className="text-[10px] text-blue-600 dark:text-blue-400 uppercase font-mono font-bold">Results Posted</span>
               </div>
               <div className="bg-white dark:bg-white/5 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-white/10 hover:shadow-md transition-all">
                  <div className="text-green-600 mb-4"><Calendar size={20} /></div>
                  <h3 className="font-bold text-dfw-navy dark:text-white uppercase text-sm mb-2">New Member Special</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Join in December to get 20% off first month + waived fees.</p>
                  <span className="text-[10px] text-red-500 dark:text-red-400 uppercase font-mono font-bold">Limited Time</span>
               </div>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-dfw-navy dark:bg-black relative overflow-hidden text-center">
         <div className="absolute inset-0 bg-[url('/textures/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
         
         <div className="container mx-auto px-4 md:px-6 relative z-10">
            <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-6 block animate-pulse">Limited Time Offer</span>
            <h2 className="text-4xl md:text-7xl font-header font-bold text-white uppercase mb-8">
               Join The <span className="text-dfw-red">Community</span>
            </h2>
            <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-sm mb-10">
               <p className="text-white text-sm font-bold uppercase mb-4">New Member Package</p>
               <ul className="text-gray-300 text-xs space-y-2 text-left mx-auto max-w-xs">
                  <li className="flex justify-between"><span>Waived Reg. Fee</span> <span className="text-green-400 font-bold">Free</span></li>
                  <li className="flex justify-between"><span>1st Month Discount</span> <span className="text-green-400 font-bold">20% Off</span></li>
                  <li className="flex justify-between"><span>Guest Passes</span> <span className="text-green-400 font-bold">2 Included</span></li>
               </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link href="/memberships" className="px-10 py-5 bg-dfw-red text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-red-700 transition-colors shadow-[0_0_30px_rgba(214,40,40,0.4)]">
                  Claim Offer Online
               </Link>
               <Link href="/contact" className="px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-white hover:text-dfw-navy transition-colors">
                  Schedule Visit
               </Link>
            </div>
         </div>
         
         {/* Trust Footer Strip */}
         <div className="absolute bottom-0 left-0 w-full border-t border-white/5 bg-black/20 py-4 hidden md:block">
            <div className="container mx-auto flex justify-center gap-12 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
               <span>✓ Intl Standard Facilities</span>
               <span>✓ Certified Coaches</span>
               <span>✓ 500+ Active Members</span>
               <span>✓ 4 Sports</span>
            </div>
         </div>
      </section>
    </>
  );
};

export default HomeBottom;