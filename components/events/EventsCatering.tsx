import React from 'react';
import { Pizza, Utensils, Wine, Coffee, Music, Heart, Globe, Film } from 'lucide-react';
import { motion } from 'framer-motion';

const EventsCatering: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#020408] relative transition-colors duration-300">
         <div className="container mx-auto px-4 md:px-6">
            
            {/* Custom Events Grid */}
            <div className="mb-24">
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
               >
                  <h2 className="text-3xl font-header font-bold text-dfw-navy dark:text-white uppercase tracking-wide mb-4">Custom Experiences</h2>
                  <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Beyond tournaments and parties. If you can imagine it, we can host it.</p>
               </motion.div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                     { title: "Fundraisers", icon: Heart, desc: "Charity matches and auctions." },
                     { title: "Cultural Events", icon: Globe, desc: "Diwali, Independence Day, Festivals." },
                     { title: "Social Mixers", icon: Music, desc: "Young professionals & networking." },
                     { title: "Productions", icon: Film, desc: "Commercial shoots & documentaries." },
                  ].map((item, i) => (
                     <div key={i} className="flex gap-4 p-4 border border-gray-100 dark:border-white/10 rounded-lg hover:border-dfw-red/30 transition-colors bg-gray-50 dark:bg-white/5">
                        <div className="p-2 bg-white dark:bg-white/10 rounded h-fit text-dfw-navy dark:text-white"><item.icon size={20} /></div>
                        <div>
                           <h4 className="font-bold text-dfw-navy dark:text-white text-sm uppercase mb-1">{item.title}</h4>
                           <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Catering Section */}
            <div>
               <div className="flex items-center gap-3 mb-10">
                  <span className="w-10 h-[2px] bg-dfw-red"></span>
                  <h2 className="text-2xl font-header font-bold text-dfw-navy dark:text-white uppercase tracking-wide">Fuel Your Event</h2>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                     { title: "Pizza Package", price: "$8/pp", items: "2 Slices + Drink", icon: Pizza },
                     { title: "Game Day", price: "$15/pp", items: "Pizza, Wings, Sides", icon: Utensils },
                     { title: "Premium", price: "$25/pp", items: "Entrees, Sides, Dessert", icon: Wine },
                     { title: "Snacks", price: "$5/pp", items: "Chips, Fruit, Drinks", icon: Coffee },
                  ].map((menu, i) => (
                     <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="border border-gray-100 dark:border-white/10 p-6 rounded-sm hover:shadow-lg hover:border-dfw-red/20 transition-all text-center group cursor-default bg-white dark:bg-white/5"
                     >
                        <div className="w-12 h-12 bg-gray-50 dark:bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400 dark:text-gray-300 group-hover:text-dfw-red transition-colors">
                           <menu.icon size={20} />
                        </div>
                        <h3 className="font-header font-bold text-dfw-navy dark:text-white uppercase text-lg mb-1">{menu.title}</h3>
                        <p className="text-dfw-red font-bold text-sm mb-2">{menu.price}</p>
                        <p className="text-xs text-gray-400 uppercase font-mono">{menu.items}</p>
                     </motion.div>
                  ))}
               </div>
               <p className="text-center text-xs text-gray-400 mt-8">
                  *Custom catering available for dietary restrictions (Halal, Vegetarian, Gluten-Free). BYOB allowed for adults with coordination.
               </p>
            </div>
         </div>
      </section>
  );
};

export default EventsCatering;