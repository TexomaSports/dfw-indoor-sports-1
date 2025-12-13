'use client'

import React, { useState } from 'react';
import { HelpCircle, ChevronRight, Search } from 'lucide-react';
import Link from 'next/link';

const ContactQuickAnswers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const questions = [
    { q: "How do I book a court?", a: "Book online 24/7 via our portal, call us, or walk in. Online booking shows real-time availability.", link: "Book Online", href: "/rentals" },
    { q: "What membership fits me?", a: "Playing 2+ times/month? Membership saves money. Gold gives access to all sports. Sport-specific options available.", link: "Compare Plans", href: "/memberships" },
    { q: "Can I tour the facility?", a: "Absolutely. Free tours available daily. Call ahead or mention it in your message to schedule.", link: "Schedule Tour", href: "/contact" },
    { q: "Do you offer free trials?", a: "Yes. First-time participants get complimentary trial sessions for most sports. Mention 'free trial'.", link: "Claim Trial", href: "/contact" },
    { q: "How do I plan an event?", a: "Fill out the contact form selecting 'Event Planning' or call our coordinator for a custom proposal.", link: "Event Details", href: "/events" },
    { q: "How do I make a complaint?", a: "We take satisfaction seriously. Contact us immediately via phone or form and we will address it promptly.", link: "Contact Mgmt", href: "/contact" },
  ];

  const filteredQuestions = questions.filter(item => 
    item.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-24 bg-white border-b border-gray-100">
       <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
             <div className="flex items-center gap-3">
                <div className="p-3 bg-gray-100 rounded-full text-gray-500"><HelpCircle size={24} /></div>
                <div>
                   <h2 className="text-2xl font-header font-bold text-dfw-navy uppercase">Instant Answers</h2>
                   <p className="text-xs text-gray-500">Most common topics resolved.</p>
                </div>
             </div>
             {/* Functional Search Bar */}
             <div className="relative w-full md:w-64">
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search topics..." 
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs focus:outline-none focus:border-dfw-navy transition-colors" 
                />
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {filteredQuestions.length > 0 ? filteredQuestions.map((item, i) => (
                <div key={i} className="p-8 rounded-lg bg-white border border-gray-200 hover:border-dfw-navy/30 hover:shadow-lg transition-all duration-300 group cursor-default">
                   <h3 className="font-header font-bold text-dfw-navy text-sm uppercase mb-3 group-hover:text-dfw-red transition-colors">{item.q}</h3>
                   <p className="text-xs text-gray-500 leading-relaxed mb-6">{item.a}</p>
                   <Link href={item.href} className="text-[10px] font-bold text-dfw-navy uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all border-b border-gray-200 pb-1 w-max group-hover:border-dfw-red">
                      {item.link} <ChevronRight size={10} />
                   </Link>
                </div>
             )) : (
                <div className="col-span-3 text-center text-gray-500 py-12">No matching questions found.</div>
             )}
          </div>
       </div>
    </section>
  );
};

export default ContactQuickAnswers;