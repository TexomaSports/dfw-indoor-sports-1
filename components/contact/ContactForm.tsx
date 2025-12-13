import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, ArrowRight, Loader2 } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    topic: 'General Inquiry',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus('success');
    setFormData({ firstName: '', lastName: '', email: '', phone: '', topic: 'General Inquiry', message: '' });
  };

  return (
    <section className="py-24 md:py-32 bg-[#050911] text-white relative overflow-hidden" id="contact-form">
       {/* Background Texture & Gradients */}
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
       <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-dfw-navy/80 to-transparent pointer-events-none"></div>
       <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px]"></div>
       
       <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
             
             {/* Left: The Form */}
             <div className="lg:col-span-7">
                <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-4 block animate-pulse">24/7 Support</span>
                <h2 className="text-4xl md:text-5xl font-header font-bold text-white uppercase mb-8">Send A Message</h2>
                <p className="text-gray-400 mb-10 text-lg font-light max-w-lg">
                   Fill out the form below and our team will route your inquiry to the right department immediately.
                </p>
                
                {status === 'success' ? (
                   <div className="bg-green-900/20 border border-green-500/30 p-8 rounded-lg flex flex-col items-center justify-center text-center">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                         <CheckCircle2 size={32} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-header font-bold text-white uppercase mb-2">Message Sent</h3>
                      <p className="text-gray-300 mb-6">We've received your inquiry and will respond shortly.</p>
                      <button onClick={() => setStatus('idle')} className="text-green-400 font-bold uppercase text-xs tracking-widest hover:text-white transition-colors">Send Another</button>
                   </div>
                ) : (
                   <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <div className="group">
                            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-blue-400 transition-colors">First Name</label>
                            <input 
                              type="text" 
                              name="firstName" 
                              required 
                              value={formData.firstName}
                              onChange={handleChange}
                              className="w-full bg-white/5 border-b border-white/20 py-3 text-white focus:outline-none focus:border-blue-400 transition-all placeholder:text-gray-700" 
                              placeholder="Enter first name" 
                            />
                         </div>
                         <div className="group">
                            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-blue-400 transition-colors">Last Name</label>
                            <input 
                              type="text" 
                              name="lastName" 
                              required 
                              value={formData.lastName}
                              onChange={handleChange}
                              className="w-full bg-white/5 border-b border-white/20 py-3 text-white focus:outline-none focus:border-blue-400 transition-all placeholder:text-gray-700" 
                              placeholder="Enter last name" 
                            />
                         </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <div className="group">
                            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-blue-400 transition-colors">Email Address</label>
                            <input 
                              type="email" 
                              name="email" 
                              required 
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full bg-white/5 border-b border-white/20 py-3 text-white focus:outline-none focus:border-blue-400 transition-all placeholder:text-gray-700" 
                              placeholder="name@company.com" 
                            />
                         </div>
                         <div className="group">
                            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-blue-400 transition-colors">Phone Number</label>
                            <input 
                              type="tel" 
                              name="phone" 
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full bg-white/5 border-b border-white/20 py-3 text-white focus:outline-none focus:border-blue-400 transition-all placeholder:text-gray-700" 
                              placeholder="(555) 000-0000" 
                            />
                         </div>
                      </div>

                      <div className="group">
                         <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-blue-400 transition-colors">Topic</label>
                         <select 
                           name="topic" 
                           value={formData.topic} 
                           onChange={handleChange}
                           className="w-full bg-white/5 border-b border-white/20 py-3 text-white focus:outline-none focus:border-blue-400 transition-all appearance-none cursor-pointer"
                         >
                            <option className="bg-[#0A111F]">General Inquiry</option>
                            <option className="bg-[#0A111F]">Membership & Pricing</option>
                            <option className="bg-[#0A111F]">Court Booking Issue</option>
                            <option className="bg-[#0A111F]">Event Planning (Corporate/Party)</option>
                            <option className="bg-[#0A111F]">Academy / Coaching</option>
                            <option className="bg-[#0A111F]">Lost & Found</option>
                         </select>
                      </div>

                      <div className="group">
                         <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-blue-400 transition-colors">Message</label>
                         <textarea 
                           name="message" 
                           required 
                           rows={4} 
                           value={formData.message}
                           onChange={handleChange}
                           className="w-full bg-white/5 border-b border-white/20 py-3 text-white focus:outline-none focus:border-blue-400 transition-all placeholder:text-gray-700 resize-none" 
                           placeholder="Tell us how we can help..."
                         ></textarea>
                      </div>

                      <button 
                        type="submit" 
                        disabled={status === 'submitting'}
                        className="group relative w-full md:w-auto px-10 py-4 bg-dfw-red text-white font-bold uppercase tracking-widest text-xs rounded-sm overflow-hidden shadow-[0_0_20px_rgba(214,40,40,0.4)] transition-all hover:shadow-[0_0_40px_rgba(214,40,40,0.6)] hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                         <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine"></div>
                         <span className="relative flex items-center justify-center gap-3">
                            {status === 'submitting' ? <Loader2 size={14} className="animate-spin" /> : <><Send size={14} /> Send Inquiry</>}
                         </span>
                      </button>
                   </form>
                )}
             </div>

             {/* Right: Expectation Setting */}
             <div className="lg:col-span-5 pt-12 lg:pt-0">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-10 h-full relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-40 h-40 bg-dfw-red/10 rounded-full blur-[60px] pointer-events-none"></div>
                   
                   <h3 className="font-header font-bold text-2xl uppercase mb-10 text-white">The Process</h3>
                   
                   <div className="space-y-10 relative">
                      {/* Connector Line */}
                      <div className="absolute top-4 left-[15px] w-0.5 h-[calc(100%-40px)] bg-gradient-to-b from-green-500 via-blue-500 to-purple-500 opacity-30"></div>

                      <div className="flex gap-6 relative group">
                         <div className="w-8 h-8 rounded-full bg-[#050911] border-2 border-green-500 text-green-500 flex items-center justify-center shrink-0 font-bold text-xs shadow-[0_0_15px_rgba(34,197,94,0.3)] z-10">1</div>
                         <div>
                            <h4 className="font-bold text-white text-sm mb-2 group-hover:text-green-400 transition-colors">Submission</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">Your inquiry is logged instantly. You'll receive an automated confirmation email with a ticket number.</p>
                         </div>
                      </div>

                      <div className="flex gap-6 relative group">
                         <div className="w-8 h-8 rounded-full bg-[#050911] border-2 border-blue-500 text-blue-500 flex items-center justify-center shrink-0 font-bold text-xs shadow-[0_0_15px_rgba(59,130,246,0.3)] z-10">2</div>
                         <div>
                            <h4 className="font-bold text-white text-sm mb-2 group-hover:text-blue-400 transition-colors">Routing</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">Our system routes your message to the specific department head (e.g., Coaching Director for academy questions).</p>
                         </div>
                      </div>

                      <div className="flex gap-6 relative group">
                         <div className="w-8 h-8 rounded-full bg-[#050911] border-2 border-purple-500 text-purple-500 flex items-center justify-center shrink-0 font-bold text-xs shadow-[0_0_15px_rgba(168,85,247,0.3)] z-10">3</div>
                         <div>
                            <h4 className="font-bold text-white text-sm mb-2 group-hover:text-purple-400 transition-colors">Resolution</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">A real human responds within 24 hours with a personalized answer or solution.</p>
                         </div>
                      </div>
                   </div>

                   <div className="mt-12 bg-white/5 rounded-lg p-6 border border-white/5">
                      <h4 className="text-dfw-red font-bold uppercase text-[10px] tracking-widest mb-3 flex items-center gap-2"><AlertCircle size={14} /> Tip for Faster Service</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">
                         If your inquiry is regarding a court booking occurring <strong>today</strong>, please call the front desk at (817) 938-0808 instead of using this form.
                      </p>
                   </div>
                </div>
             </div>

          </div>
       </div>
    </section>
  );
};

export default ContactForm;