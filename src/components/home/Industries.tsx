import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Coffee, Store, Hospital, GraduationCap, Briefcase } from 'lucide-react';

const industries = [
  { name: 'Hospitals', icon: <Hospital size={32} />, desc: 'Smart patient management and digital health records.' },
  { name: 'Clinics', icon: <GraduationCap size={32} />, desc: 'Simplified booking and appointment systems.' },
  { name: 'Restaurants', icon: <Coffee size={32} />, desc: 'QR menus and integrated ordering platforms.' },
  { name: 'Shopping Malls', icon: <Building2 size={32} />, desc: 'Customer engagement and digital directory solutions.' },
  { name: 'Retail', icon: <Store size={32} />, desc: 'Modern E-commerce and POS integrations.' },
  { name: 'SMEs', icon: <Briefcase size={32} />, desc: 'Scalable ERP and CRM tools for growth.' },
];

const Industries: React.FC = () => {
  return (
    <section className="py-32 bg-dark-lighter relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/5 text-secondary text-[10px] font-black tracking-[0.3em] uppercase mb-4"
          >
            Sectors & Impact
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            DOMINATING <span className="text-primary">MARKET SECTORS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card p-12 flex flex-col items-center group relative overflow-hidden transition-all duration-500 border border-white/5 hover:border-primary/40"
            >
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <div className="mb-8 text-primary group-hover:scale-110 group-hover:text-accent transition-all duration-500 p-6 rounded-3xl bg-white/5">
                {industry.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight uppercase text-white group-hover:text-primary transition-colors">{industry.name}</h3>
              <p className="text-gray-500 text-center font-medium leading-relaxed group-hover:text-gray-300 transition-colors">
                {industry.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
