import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const QRFeature: React.FC = () => {
  return (
    <section className="py-40 bg-dark relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2 relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="rounded-[2.5rem] border border-white/10 bg-dark-lighter p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <QrCode size={200} />
                </div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center">
                    <QrCode size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg uppercase tracking-tight">Location Linker</h4>
                    <p className="text-[10px] text-gray-500 font-black tracking-widest uppercase">Secured by EMF Core</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="h-12 bg-white/5 border border-white/5 rounded-xl flex items-center px-4">
                    <div className="w-2/3 h-2 bg-white/10 rounded-full"></div>
                  </div>
                  <div className="h-40 bg-white flex items-center justify-center rounded-2xl">
                    <QrCode size={100} className="text-black" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-10 bg-primary/20 border border-primary/20 rounded-lg"></div>
                    <div className="h-10 bg-white/5 border border-white/5 rounded-lg"></div>
                  </div>
                </div>
              </div>

              {/* Floating Shield */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 glass-card p-4 border border-white/20 z-20 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
                  <ShieldCheck size={16} />
                </div>
                <span className="text-[10px] font-black text-white tracking-widest uppercase">Verified Access</span>
              </motion.div>
            </motion.div>
            <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full"></div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-0.5 bg-primary mb-8"></div>
              <span className="text-primary text-[10px] font-black tracking-[0.4em] uppercase mb-6 block text-glow">Premium Protocol</span>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.95] mb-10">
                Maps QR <br /> <span className="text-gray-600">Command</span>
              </h2>
              <p className="text-gray-500 text-lg font-medium leading-relaxed mb-12 max-w-lg">
                Exclusively for EMFTECH members. Generate high-precision navigation codes for your business infrastructure. Integrated directly with Google Maps datasets.
              </p>
              
              <Link to="/qr-generator" className="btn-primary inline-flex items-center group">
                ACCESS GENERATOR
                <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRFeature;
