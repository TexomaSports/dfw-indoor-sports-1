import React from 'react';
import { ChevronDown } from 'lucide-react';

const ContactFAQ: React.FC = () => {
  return (
    <section className="py-24 bg-white">
       <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl font-header font-bold text-dfw-navy uppercase mb-12 text-center">Still Have Questions?</h2>
          
          <div className="space-y-4">
             {[
                { q: "Can I schedule a specific time to speak with someone?", a: "Yes. Request a callback in the contact form or call during business hours to schedule a conversation at your convenience." },
                { q: "Do you respond to emails on weekends?", a: "Yes, but response times may be slightly longer. Weekday inquiries typically receive same-day responses; weekend inquiries are answered by Sunday evening or Monday morning." },
                { q: "What if I need to reach you urgently?", a: "Call (817) 938-0808. During business hours, staff answers directly. After hours, leave a detailed voicemail with your phone number and reason for urgency." },
                { q: "Can I visit without an appointment?", a: "Yes, though facility tours are easier to accommodate when you call ahead. Drop-ins welcome during business hours." },
                { q: "I submitted the form but haven't heard back - what should I do?", a: "Check your spam folder first. If nothing after 48 hours, call us at (817) 938-0808 - something may have gone wrong with the submission." }
             ].map((item, idx) => (
                <details key={idx} className="group border-b border-gray-100 pb-4">
                   <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-dfw-navy uppercase tracking-wide text-xs select-none hover:text-dfw-red transition-colors py-4">
                      {item.q}
                      <span className="transition-transform group-open:rotate-180 text-gray-400">
                         <ChevronDown size={16} />
                      </span>
                   </summary>
                   <div className="pt-2 pb-4 text-gray-500 text-sm leading-relaxed animate-fade-in-up">
                      {item.a}
                   </div>
                </details>
             ))}
          </div>
       </div>
    </section>
  );
};

export default ContactFAQ;
