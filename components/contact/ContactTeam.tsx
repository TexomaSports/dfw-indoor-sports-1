import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const ContactTeam: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-200">
       <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-header font-bold text-dfw-navy uppercase mb-6">Department Directory</h2>
             <p className="text-gray-500">Skip the queue. Contact the right team directly.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
             {[
                { title: "General Inquiries", email: "info@dfwindoorsports.com", desc: "Basic questions & lost/found" },
                { title: "Membership Services", email: "memberships@dfwindoorsports.com", desc: "Billing, freezing, or upgrading" },
                { title: "Event Planning", email: "events@dfwindoorsports.com", desc: "Corporate bookings & birthdays" },
                { title: "Academy & Coaching", email: "coaching@dfwindoorsports.com", desc: "CricKingdom programs & schedules" },
                { title: "Court Reservations", email: "bookings@dfwindoorsports.com", desc: "Rental modifications & team blocks" },
                { title: "Management", email: "feedback@dfwindoorsports.com", desc: "Feedback, partnerships & complaints" },
             ].map((dept, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-dfw-navy hover:bg-white hover:shadow-lg transition-all group duration-300">
                   <h4 className="font-header font-bold text-dfw-navy uppercase text-lg mb-2">{dept.title}</h4>
                   <p className="text-xs text-gray-500 mb-4 h-4">{dept.desc}</p>
                   <a href={`mailto:${dept.email}`} className="text-xs font-bold text-blue-600 hover:text-dfw-red transition-colors flex items-center gap-2 uppercase tracking-wide">
                      <Mail size={14} /> {dept.email} <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0" />
                   </a>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
};

export default ContactTeam;