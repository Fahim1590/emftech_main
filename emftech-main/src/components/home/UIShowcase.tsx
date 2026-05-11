import React from 'react';
import { motion } from 'framer-motion';

const showcases = [
  {
    title: "Intelligence Hub",
    category: "Enterprise ERP",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400",
    desc: "A mission-critical command center for global operations. Integrated, real-time, and built for scale."
  },
  {
    title: "Smart Menu Core",
    category: "F&B Technology",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1400",
    desc: "Interactive dining experience with high-fidelity QR menus and integrated payment protocols."
  },
  {
    title: "Clinical Command",
    category: "Health Technology",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1400",
    desc: "Digitalizing the patient journey with secure data pipelines and intelligent healthcare management."
  }
];

const UIShowcase: React.FC = () => {
  return (
    <section className="py-40 bg-dark overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-5 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-500 text-[8px] sm:text-[9px] font-bold tracking-[0.4em] uppercase mb-8"
          >
            Product Ecosystem
          </motion.div>
          <h2 className="text-4xl sm:text-6xl lg:text-[100px] font-black text-white tracking-[0.05em] sm:tracking-[0.1em] uppercase leading-[1.1] sm:leading-none mb-12 px-2">
            The Platform <br />
            <span className="text-gray-600">That Scales</span>
          </h2>
        </div>

        <div className="space-y-40">
          {showcases.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-24 items-center`}
            >
              <div className="lg:w-2/5">
                <div className="max-w-md">
                  <div className="w-12 h-0.5 bg-white/20 mb-8"></div>
                  <span className="text-primary text-[10px] font-black tracking-[0.4em] uppercase mb-6 block">{item.category}</span>
                  <h3 className="text-5xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.95]">{item.title}</h3>
                  <p className="text-gray-500 text-lg font-medium leading-relaxed mb-12">{item.desc}</p>
                  <button className="btn-secondary uppercase text-[10px] font-black tracking-[0.3em] px-10">System Architecture</button>
                </div>
              </div>
              <div className="lg:w-3/5 w-full">
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className="rounded-[2.5rem] border border-white/5 bg-dark-lighter p-4 shadow-[0_0_100px_rgba(0,0,0,0.5)]"
                >
                  <div className="rounded-[1.8rem] overflow-hidden border border-white/10 relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-auto opacity-90 grayscale-[0.1] hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UIShowcase;
