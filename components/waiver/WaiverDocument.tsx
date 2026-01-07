'use client'

import React, { useState } from 'react';
import { CheckSquare, Square, AlertCircle, Calendar, User, Upload, CheckCircle2, Loader2, FileCheck, Printer, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const WaiverDocument: React.FC = () => {
  const [agreed, setAgreed] = useState(false);
  const [signature, setSignature] = useState('');
  const [isMinor, setIsMinor] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Auto-fill date
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed || signature.length < 3) return;

    setIsSubmitting(true);

    // Simulate API call/processing time
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Ensure view is centered on success message
    setTimeout(() => {
        document.getElementById('waiver-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  return (
    <section className="py-20 bg-gray-50 relative">
       {/* Texture */}
       <div className="absolute inset-0 bg-[url('/textures/cubes.png')] opacity-[0.03]"></div>

       <div className="container mx-auto px-4 md:px-6 relative z-10">
          
          <div className="max-w-4xl mx-auto">
             {/* Document Header */}
             <div className="bg-white p-8 md:p-12 rounded-t-lg border-b border-gray-100 shadow-sm text-center">
                <h2 className="text-3xl font-header font-bold text-dfw-navy uppercase mb-2">Release and Waiver of Liability</h2>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-mono">Last Updated: October 2024</p>
             </div>

             {/* Document Body */}
             <div className="bg-white p-8 md:p-12 shadow-sm border-x border-gray-100 prose prose-sm max-w-none text-gray-600">
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-12 rounded-r-sm">
                   <h3 className="text-blue-800 font-bold uppercase text-sm mb-2 flex items-center gap-2"><AlertCircle size={16} /> Important Legal Document</h3>
                   <p className="text-blue-700 text-xs leading-relaxed m-0">
                      This Release and Waiver of Liability ("Agreement") is a legal document affecting your rights. By signing this Agreement or participating in activities at DFW Indoor Sports, you acknowledge that you have read, understood, and agree to all terms and conditions outlined below.
                   </p>
                </div>

                <div className="space-y-12">
                   
                   {/* Section 1 */}
                   <section>
                      <h4 className="font-header font-bold text-lg text-dfw-navy uppercase border-b border-gray-100 pb-2 mb-4">1. Facility and Activity Information</h4>
                      <p className="mb-4">
                         <strong>Facility:</strong> DFW Indoor Sports, 16230 Three Wide Drive, Suite 200, Fort Worth, Texas 76177.
                      </p>
                      <p>
                         This Agreement covers participation in all indoor sports activities offered at the Facility, including but not limited to indoor cricket, indoor soccer, badminton, dodgeball, and any other sports, fitness, or recreational activities.
                      </p>
                   </section>

                   {/* Section 2 */}
                   <section>
                      <h4 className="font-header font-bold text-lg text-dfw-navy uppercase border-b border-gray-100 pb-2 mb-4">2. Acknowledgment of Risk</h4>
                      <p className="mb-4">I acknowledge and understand that:</p>
                      <ul className="list-disc pl-5 space-y-2">
                         <li><strong>Physical Nature:</strong> The Activities involve physical contact, vigorous exercise, and use of sports equipment.</li>
                         <li><strong>Inherent Risks:</strong> Sports activities involve risks including sprains, fractures, concussions, joint injuries, serious bodily injury, permanent disability, paralysis, and death.</li>
                         <li><strong>Voluntary Participation:</strong> I am voluntarily participating in the Activities with full knowledge of these risks and expressly agree to accept and assume all risks of injury, death, or property damage.</li>
                      </ul>
                   </section>

                   {/* Section 3 */}
                   <section>
                      <h4 className="font-header font-bold text-lg text-dfw-navy uppercase border-b border-gray-100 pb-2 mb-4">3. Release and Waiver of Liability</h4>
                      <p className="mb-4">
                         I hereby expressly waive, release, and discharge any and all claims, now known or hereafter known, against <strong>DFW Indoor Sports</strong> and its officers, directors, employees, agents, affiliates, members, successors, and assigns ("Releasees").
                      </p>
                      <p>
                         This release applies to claims arising from my participation in any Activities, use of the Facility, or negligence of the Company or any Releasees (excluding gross negligence or intentional misconduct). I covenant not to make or bring any claim against the Company.
                      </p>
                   </section>

                   {/* Section 4 */}
                   <section>
                      <h4 className="font-header font-bold text-lg text-dfw-navy uppercase border-b border-gray-100 pb-2 mb-4">4. Indemnification</h4>
                      <p>
                         I agree to defend, indemnify, and hold harmless DFW Indoor Sports against any and all losses, damages, liabilities, deficiencies, claims, actions, judgments, settlements, interest, awards, penalties, fines, costs, or expenses of any kind, including reasonable attorneys' fees, arising out of or resulting from my participation in Activities or violation of this Agreement.
                      </p>
                   </section>

                   {/* Section 5 */}
                   <section>
                      <h4 className="font-header font-bold text-lg text-dfw-navy uppercase border-b border-gray-100 pb-2 mb-4">5. Medical Treatment Authorization</h4>
                      <p>
                         I authorize DFW Indoor Sports to obtain emergency medical treatment for me if necessary. I understand that I am responsible for all costs associated with medical treatment and that the Company assumes no responsibility for these costs. I verify that I have adequate medical insurance.
                      </p>
                   </section>

                   {/* Section 9 (Abbreviated for UI) */}
                   <section>
                      <h4 className="font-header font-bold text-lg text-dfw-navy uppercase border-b border-gray-100 pb-2 mb-4">Code of Conduct & Media Release</h4>
                      <p className="mb-4">
                         I agree to follow all facility rules, treat staff/participants with respect, and maintain appropriate conduct. Violation may result in immediate removal without refund.
                      </p>
                      <p>
                         I grant DFW Indoor Sports permission to use photographs or video recordings of me for marketing purposes without compensation.
                      </p>
                   </section>

                </div>
             </div>

             {/* Interactive Form Section */}
             <div className="bg-gray-100 p-8 md:p-12 border-x border-b border-gray-200 rounded-b-lg" id="waiver-form">
                
                {isSubmitted ? (
                   <div className="py-12 text-center animate-fade-in-up">
                      <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                         <FileCheck size={40} />
                      </div>
                      <h3 className="text-3xl font-header font-bold text-dfw-navy uppercase mb-4">Waiver Signed Successfully</h3>
                      <p className="text-gray-500 max-w-lg mx-auto mb-8">
                         Thank you, <strong>{firstName || signature}</strong>. Your liability waiver has been securely recorded and filed. You are now cleared for facility activities.
                      </p>
                      
                      <div className="bg-white p-6 rounded-lg border border-gray-200 max-w-md mx-auto mb-8 text-left shadow-sm">
                         <div className="flex justify-between border-b border-gray-100 pb-3 mb-3">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Reference ID</span>
                            <span className="text-xs font-mono text-dfw-navy">WAV-{Math.floor(Math.random() * 1000000)}</span>
                         </div>
                         <div className="flex justify-between border-b border-gray-100 pb-3 mb-3">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Date Signed</span>
                            <span className="text-xs font-mono text-dfw-navy">{today}</span>
                         </div>
                         <div className="flex justify-between">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Status</span>
                            <span className="text-xs font-bold text-green-600 uppercase flex items-center gap-1"><CheckCircle2 size={12} /> Active</span>
                         </div>
                      </div>

                      <div className="flex flex-col sm:flex-row justify-center gap-4">
                         <button 
                            onClick={() => window.print()}
                            className="px-6 py-3 border border-gray-300 bg-white text-dfw-navy font-bold uppercase text-xs tracking-widest rounded-sm hover:border-dfw-navy transition-colors flex items-center justify-center gap-2"
                         >
                            <Printer size={16} /> Print Copy
                         </button>
                         <Link href="/" className="px-6 py-3 bg-dfw-navy text-white font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-dfw-red transition-colors shadow-lg flex items-center justify-center gap-2">
                            Return Home <ArrowRight size={16} />
                         </Link>
                      </div>
                   </div>
                ) : (
                   <form onSubmit={handleSubmit} className="space-y-8">
                      <h3 className="font-header font-bold text-2xl text-dfw-navy uppercase mb-8">Participant Information & Signature</h3>
                      
                      {/* Personal Info Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">First Name *</label>
                            <input 
                               type="text" 
                               required
                               value={firstName}
                               onChange={(e) => setFirstName(e.target.value)}
                               className="w-full p-3 rounded-sm border border-gray-300 focus:outline-none focus:border-dfw-navy focus:ring-1 focus:ring-dfw-navy bg-white transition-all" 
                            />
                         </div>
                         <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Last Name *</label>
                            <input 
                               type="text" 
                               required
                               value={lastName}
                               onChange={(e) => setLastName(e.target.value)}
                               className="w-full p-3 rounded-sm border border-gray-300 focus:outline-none focus:border-dfw-navy focus:ring-1 focus:ring-dfw-navy bg-white transition-all" 
                            />
                         </div>
                         <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Date of Birth *</label>
                            <div className="relative">
                               <input type="date" required className="w-full p-3 rounded-sm border border-gray-300 focus:outline-none focus:border-dfw-navy focus:ring-1 focus:ring-dfw-navy bg-white transition-all text-gray-600" />
                            </div>
                         </div>
                         <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Phone Number *</label>
                            <input type="tel" required className="w-full p-3 rounded-sm border border-gray-300 focus:outline-none focus:border-dfw-navy focus:ring-1 focus:ring-dfw-navy bg-white transition-all" />
                         </div>
                         <div className="md:col-span-2">
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email Address *</label>
                            <input type="email" required className="w-full p-3 rounded-sm border border-gray-300 focus:outline-none focus:border-dfw-navy focus:ring-1 focus:ring-dfw-navy bg-white transition-all" />
                         </div>
                         <div className="md:col-span-2">
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Address</label>
                            <input type="text" className="w-full p-3 rounded-sm border border-gray-300 focus:outline-none focus:border-dfw-navy focus:ring-1 focus:ring-dfw-navy bg-white transition-all" placeholder="Street Address, City, State, ZIP" />
                         </div>
                      </div>

                      {/* Emergency Contact */}
                      <div className="pt-6 border-t border-gray-300">
                         <h4 className="font-header font-bold text-lg text-dfw-navy uppercase mb-6">Emergency Contact</h4>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                               <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Contact Name *</label>
                               <input type="text" required className="w-full p-3 rounded-sm border border-gray-300 focus:outline-none focus:border-dfw-navy focus:ring-1 focus:ring-dfw-navy bg-white transition-all" />
                            </div>
                            <div>
                               <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Contact Phone *</label>
                               <input type="tel" required className="w-full p-3 rounded-sm border border-gray-300 focus:outline-none focus:border-dfw-navy focus:ring-1 focus:ring-dfw-navy bg-white transition-all" />
                            </div>
                         </div>
                      </div>

                      {/* Minor Section Toggle */}
                      <div className="pt-6 border-t border-gray-300">
                         <div className="flex items-center gap-4 mb-6">
                            <button 
                               type="button"
                               onClick={() => setIsMinor(!isMinor)}
                               className={`w-6 h-6 rounded-sm border flex items-center justify-center transition-colors ${isMinor ? 'bg-dfw-navy border-dfw-navy text-white' : 'bg-white border-gray-400'}`}
                            >
                               {isMinor && <CheckCircle2 size={16} />}
                            </button>
                            <span className="text-sm font-bold text-dfw-navy cursor-pointer select-none" onClick={() => setIsMinor(!isMinor)}>
                               I am signing for a minor (Under 18)
                            </span>
                         </div>

                         {isMinor && (
                            <div className="bg-white p-6 rounded-sm border border-gray-200 animate-fade-in-up">
                               <h4 className="font-header font-bold text-sm text-dfw-navy uppercase mb-4">Parent/Guardian Information</h4>
                               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  <div>
                                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Guardian Name</label>
                                     <input type="text" className="w-full p-3 rounded-sm border border-gray-300 bg-gray-50" />
                                  </div>
                                  <div>
                                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Relationship</label>
                                     <input type="text" className="w-full p-3 rounded-sm border border-gray-300 bg-gray-50" />
                                  </div>
                               </div>
                            </div>
                         )}
                      </div>

                      {/* Agreement & Signature */}
                      <div className="pt-6 border-t border-gray-300 bg-white p-6 rounded-sm border border-gray-200">
                         <div className="flex items-start gap-4 mb-8">
                            <button 
                               type="button"
                               onClick={() => setAgreed(!agreed)}
                               className={`mt-1 w-6 h-6 shrink-0 rounded-sm border flex items-center justify-center transition-colors ${agreed ? 'bg-dfw-red border-dfw-red text-white' : 'bg-white border-gray-400 hover:border-dfw-red'}`}
                            >
                               {agreed && <CheckCircle2 size={16} />}
                            </button>
                            <p className="text-sm text-gray-600 cursor-pointer select-none leading-relaxed" onClick={() => setAgreed(!agreed)}>
                               <strong>I have read, understood, and agree to the Release and Waiver of Liability.</strong> I understand that I am giving up substantial legal rights, including the right to sue. I acknowledge that I am signing this agreement freely and voluntarily.
                            </p>
                         </div>

                         <div className="mb-6">
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Electronic Signature (Type Full Name) *</label>
                            <input 
                               type="text" 
                               required
                               value={signature}
                               onChange={(e) => setSignature(e.target.value)}
                               placeholder="e.g. John A. Doe"
                               className="w-full p-4 rounded-sm border-2 border-gray-300 focus:outline-none focus:border-dfw-red focus:bg-red-50/10 font-header text-2xl uppercase tracking-wide text-dfw-navy transition-all placeholder:text-gray-300" 
                            />
                            <p className="text-[10px] text-gray-400 mt-2 flex items-center gap-1">
                               <CheckCircle2 size={10} /> Your typed name above constitutes a legal electronic signature.
                            </p>
                         </div>

                         <div className="flex justify-between items-end text-xs font-mono text-gray-400">
                            <div>
                               <span className="block uppercase tracking-widest mb-1">Date Signed</span>
                               <span className="text-dfw-navy font-bold">{today}</span>
                            </div>
                            <div>
                               <span className="block uppercase tracking-widest mb-1 text-right">IP Address</span>
                               <span className="text-dfw-navy font-bold">Recorded for Verification</span>
                            </div>
                         </div>
                      </div>

                      <button 
                         type="submit" 
                         disabled={!agreed || signature.length < 3 || isSubmitting}
                         className={`w-full py-5 font-bold uppercase tracking-widest text-sm rounded-sm transition-all shadow-lg flex items-center justify-center gap-3 ${agreed && signature.length >= 3 && !isSubmitting ? 'bg-dfw-red text-white hover:bg-red-700 hover:-translate-y-1' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                      >
                         {isSubmitting ? (
                            <><Loader2 size={18} className="animate-spin" /> Processing...</>
                         ) : (
                            <><Upload size={18} /> Submit Waiver</>
                         )}
                      </button>

                   </form>
                )}
             </div>

          </div>
       </div>
    </section>
  );
};

export default WaiverDocument;