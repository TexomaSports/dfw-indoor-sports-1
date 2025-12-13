import React from 'react';
import { Clock, Briefcase } from 'lucide-react';

const ContactHours: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 border-y border-gray-200">
       <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
             <div className="text-center mb-16">
                <h2 className="text-3xl font-header font-bold text-dfw-navy uppercase mb-4">Availability Schedule</h2>
                <p className="text-gray-500">Optimized for early risers and late-night athletes.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Facility Hours */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                   <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
                   <div className="flex items-center gap-4 mb-8">
                      <div className="p-3 bg-green-50 text-green-600 rounded-lg group-hover:bg-green-600 group-hover:text-white transition-colors"><Clock size={24} /></div>
                      <div>
                         <h3 className="font-header font-bold text-xl text-dfw-navy uppercase">Facility Access</h3>
                         <span className="text-[10px] uppercase font-bold text-green-600 tracking-widest flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></span> Open Now</span>
                      </div>
                   </div>
                   
                   <div className="space-y-4">
                      <div className="flex justify-between items-center text-sm border-b border-gray-50 pb-3">
                         <span className="text-gray-500 font-medium">Monday - Friday</span>
                         <span className="font-bold text-dfw-navy font-mono">5:00 AM - 11:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center text-sm border-b border-gray-50 pb-3">
                         <span className="text-gray-500 font-medium">Saturday - Sunday</span>
                         <span className="font-bold text-dfw-navy font-mono">6:00 AM - 11:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center text-sm pt-2">
                         <span className="text-gray-900 font-bold uppercase text-xs tracking-wider">Member Access</span>
                         <span className="font-bold text-white bg-green-600 px-3 py-1 rounded-full text-xs">24/7 Keycard</span>
                      </div>
                   </div>
                </div>

                {/* Office Staff */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                   <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
                   <div className="flex items-center gap-4 mb-8">
                      <div className="p-3 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors"><Briefcase size={24} /></div>
                      <div>
                         <h3 className="font-header font-bold text-xl text-dfw-navy uppercase">Front Desk</h3>
                         <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Support Staff</span>
                      </div>
                   </div>
                   
                   <div className="space-y-4">
                      <div className="flex justify-between items-center text-sm border-b border-gray-50 pb-3">
                         <span className="text-gray-500 font-medium">Monday - Friday</span>
                         <span className="font-bold text-dfw-navy font-mono">9:00 AM - 9:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center text-sm border-b border-gray-50 pb-3">
                         <span className="text-gray-500 font-medium">Saturday - Sunday</span>
                         <span className="font-bold text-dfw-navy font-mono">8:00 AM - 8:00 PM</span>
                      </div>
                      <p className="text-[10px] text-gray-400 italic text-center pt-3">
                         *Voicemails left after hours are returned by 10 AM the next day.
                      </p>
                   </div>
                </div>

             </div>
          </div>
       </div>
    </section>
  );
};

export default ContactHours;