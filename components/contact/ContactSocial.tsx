import React, { useState } from 'react';
import { Instagram, Facebook, Youtube, Linkedin, Check } from 'lucide-react';

const ContactSocial: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <section className="py-24 bg-[#050911] text-white">
       <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
             
             <div className="max-w-md text-center md:text-left">
                <h2 className="text-3xl font-header font-bold uppercase mb-4">Stay Connected</h2>
                <p className="text-gray-400 text-sm mb-8">
                   Follow us for daily facility updates, member highlights, tournament photos, and training tips.
                </p>
                <div className="flex justify-center md:justify-start gap-4">
                   <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-dfw-red hover:text-white transition-all group border border-white/10">
                      <Instagram size={20} />
                   </a>
                   <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-blue-600 hover:text-white transition-all group border border-white/10">
                      <Facebook size={20} />
                   </a>
                   <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-red-600 hover:text-white transition-all group border border-white/10">
                      <Youtube size={20} />
                   </a>
                   <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-blue-700 hover:text-white transition-all group border border-white/10">
                      <Linkedin size={20} />
                   </a>
                </div>
             </div>

             <div className="w-full max-w-md bg-white/5 p-8 rounded-lg border border-white/10 backdrop-blur-sm">
                <h3 className="font-bold text-white uppercase text-sm mb-2">Join Our Newsletter</h3>
                <p className="text-xs text-gray-400 mb-4">Get monthly updates on programs, events, and special offers.</p>
                <div className="flex gap-2">
                   <input 
                     type="email" 
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder="Email Address" 
                     className="flex-1 bg-black/20 border border-white/10 rounded-sm px-4 py-2 text-sm text-white focus:outline-none focus:border-dfw-red placeholder:text-gray-600" 
                   />
                   <button 
                     onClick={handleSubscribe}
                     className={`px-4 py-2 rounded-sm font-bold uppercase text-xs tracking-wider transition-colors ${subscribed ? 'bg-green-600 text-white' : 'bg-dfw-red hover:bg-red-600 text-white'}`}
                   >
                      {subscribed ? <Check size={16} /> : 'Sign Up'}
                   </button>
                </div>
             </div>

          </div>
       </div>
    </section>
  );
};

export default ContactSocial;