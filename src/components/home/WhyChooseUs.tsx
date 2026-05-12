import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Zap, Globe2 } from 'lucide-react';

const features = [
  { title: 'Built for Saudi Market', desc: 'Compliant with local regulations and business culture.', icon: <Globe2 className="text-primary" size={24} /> },
  { title: 'AI-Powered Core', desc: 'Leveraging neural networks to automate complex workflows.', icon: <Zap className="text-primary" size={24} /> },
  { title: 'Rapid Deployment', desc: 'Quantum-speed implementation cycles for fast-moving markets.', icon: <CheckCircle2 className="text-primary" size={24} /> },
  { title: 'Hyper-Scale Security', desc: 'Fortified, enterprise-grade architecture that grows exponentially.', icon: <ShieldCheck className="text-primary" size={24} /> },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-40 bg-dark relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.95] mb-10"
          >
            Built for <span className="text-gray-500">Regulated</span> <br /> Environments
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-lg md:text-xl font-medium"
          >
            Compliant by design. Secure by default. Trusted by Saudi Arabia's leading firms.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-dark-lighter p-10 flex flex-col items-center text-center group border border-transparent hover:border-white/10 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-8 text-primary group-hover:bg-white/10 transition-colors">
                {feature.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-3 uppercase tracking-tight">{feature.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Big Branding Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 0.05 }}
          viewport={{ once: true }}
          className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none -mb-20"
        >
          <span className="text-[250px] font-black tracking-tighter leading-none select-none">EMFTECH</span>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
