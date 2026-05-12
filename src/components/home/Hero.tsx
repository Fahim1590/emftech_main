import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 obsidian-grid opacity-40 z-0"></div>
      
      {/* Muted Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center mb-10 md:mb-12"
          >
            <Logo className="h-14 md:h-20 mb-6 md:mb-8 filter brightness-125" showText={false} />
            <div className="px-4 py-1 rounded-full border border-white/10 bg-white/5 text-gray-400 text-[8px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase">
              Saudi Arabia's Premier Digital Architects
            </div>
          </motion.div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[120px] font-black mb-6 leading-[1] sm:leading-[0.9] tracking-tighter text-white uppercase drop-shadow-2xl px-2">
            Building the <br />
            <span className="text-gray-500 block sm:inline">Digital Backbone</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto font-medium leading-relaxed px-4">
            Obsidian-grade technology infrastructure for Saudi Arabia's smartest businesses.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link to="/contact" className="btn-primary w-full sm:w-auto flex items-center justify-center">
              {t('nav.bookDemo')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link to="/portfolio" className="btn-secondary w-full sm:w-auto">
              {t('hero.viewWork')}
            </Link>
          </div>

          {/* Product Preview Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative w-full max-w-6xl mx-auto px-4"
          >
            <div className="rounded-2xl border border-white/10 bg-dark-lighter p-2 shadow-2xl shadow-white/5">
              <div className="rounded-xl overflow-hidden border border-white/5 bg-dark-lighter">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400" 
                  alt="EMFTECH Platform Preview" 
                  className="w-full h-auto opacity-80"
                />
              </div>
            </div>
            {/* Top Light Ray */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-white/5 blur-3xl rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
