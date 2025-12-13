import React from 'react';
import { Target, Users, MapPin, Layers, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const PartnersIntro: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-white dark:bg-[#020408] relative overflow-hidden transition-colors duration-300">
       {/* Background Texture */}
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05]"></div>

       <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
             
             {/* Left: Narrative */}
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="lg:w-1/2"
             >
                <div className="inline-flex items-center gap-2 mb-6">
                   <Target size={16} className="text-dfw-red" />
                   <span className="text-dfw-navy dark:text-white font-mono text-xs font-bold uppercase tracking-widest">Why Partner?</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-header font-bold text-dfw-navy dark:text-white uppercase leading-[0.95] mb-8">
                   Authentic Connection <br/> <span className="text-gray-400">Over Impressions.</span>
                </h2>
                <div className="prose prose-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10 font-light">
                   <p>
                      DFW Indoor Sports isn't just another billboard. We are a vibrant ecosystem where families spend their weekends, professionals decompress after work, and elite athletes train daily.
                   </p>
                   <p>
                      When you sponsor us, you aren't just buying logo placement. You are integrating your brand into the lifestyle of active, engaged, and health-conscious consumers across the Dallas-Fort Worth metroplex.
                   </p>
                   <p>
                      We believe in <strong>genuine partnerships</strong>. Your investment receives personalized attention, creative marketing support, and measurable results.
                   </p>
                </div>
             </motion.div>

             {/* Right: Impact Grid */}
             <div className="lg:w-1/2 w-full">
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                   {/* Card 1 */}
                   <motion.div variants={itemVariants} className="bg-white dark:bg-white/5 p-8 rounded-xl border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 group">
                      <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                         <Users size={24} />
                      </div>
                      <h4 className="font-header font-bold text-dfw-navy dark:text-white uppercase text-lg mb-2">Engaged Audience</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-light">500+ active members and 2,000+ monthly visitors spending quality time.</p>
                   </motion.div>

                   {/* Card 2 */}
                   <motion.div variants={itemVariants} className="bg-white dark:bg-white/5 p-8 rounded-xl border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 group">
                      <div className="w-12 h-12 bg-red-50 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-6 text-dfw-red dark:text-red-400 group-hover:bg-dfw-red group-hover:text-white transition-colors duration-500">
                         <MapPin size={24} />
                      </div>
                      <h4 className="font-header font-bold text-dfw-navy dark:text-white uppercase text-lg mb-2">Local Penetration</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-light">Serving the entire metroplex with strong presence in Fort Worth, Arlington, & Dallas.</p>
                   </motion.div>

                   {/* Card 3 */}
                   <motion.div variants={itemVariants} className="bg-white dark:bg-white/5 p-8 rounded-xl border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 group">
                      <div className="w-12 h-12 bg-green-50 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6 text-green-600 dark:text-green-400 group-hover:bg-green-600 group-hover:text-white transition-colors duration-500">
                         <Layers size={24} />
                      </div>
                      <h4 className="font-header font-bold text-dfw-navy dark:text-white uppercase text-lg mb-2">Multi-Sport Reach</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-light">Access diverse communities: Cricket, Badminton, Soccer, and Dodgeball demographics.</p>
                   </motion.div>

                   {/* Card 4 */}
                   <motion.div variants={itemVariants} className="bg-white dark:bg-white/5 p-8 rounded-xl border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 group">
                      <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-6 text-orange-500 dark:text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-500">
                         <Clock size={24} />
                      </div>
                      <h4 className="font-header font-bold text-dfw-navy dark:text-white uppercase text-lg mb-2">High Dwell Time</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-light">Average visit is 2-3 hours. Prolonged exposure to your messaging.</p>
                   </motion.div>
                </motion.div>
             </div>

          </div>
       </div>
    </section>
  );
};

export default PartnersIntro;