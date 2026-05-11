import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../common/Logo';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(nextLang);
  };

  const navLinks = [
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.portfolio'), path: '/portfolio' },
    { name: 'QR Tools', path: '/qr-generator' },
    { name: t('nav.pricing'), path: '/pricing' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled || isOpen ? 'bg-dark/95 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center group no-underline" onClick={() => setIsOpen(false)}>
              <Logo className="h-8 sm:h-12 flex-shrink-0" showText={false} />
              <div className="ml-2 sm:ml-3 flex flex-col justify-center">
                <span className="text-xl sm:text-3xl font-black tracking-tighter text-white group-hover:text-primary transition-colors duration-300 leading-none">
                  EMF<span className="text-primary group-hover:text-white">TECH</span>
                </span>
                <span className="text-[7px] sm:text-[9px] font-black tracking-[0.3em] sm:tracking-[0.5em] uppercase text-primary/80 group-hover:text-white transition-colors duration-300 mt-0.5">Digital Backbone</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1 bg-white/5 rounded-full px-2 py-1 border border-white/5 backdrop-blur-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 xl:px-5 py-2 text-[10px] xl:text-xs font-black tracking-widest uppercase transition-all rounded-full ${
                    location.pathname === link.path 
                      ? 'bg-white text-black shadow-lg shadow-white/20' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full hover:bg-white/10 transition-colors text-white"
              aria-label="Toggle Language"
            >
              <Globe size={18} />
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-white/10 transition-colors text-white"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link to="/contact" className="btn-primary py-2 px-5 text-[10px] font-black tracking-widest">
              {t('nav.bookDemo')}
            </Link>
          </div>

          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className="p-2 text-white/60 hover:text-white"
            >
              <Globe size={18} />
            </button>
            <button onClick={toggleDarkMode} className="p-2 text-white/60 hover:text-white">
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/5 focus:outline-none transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: i18n.dir() === 'rtl' ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: i18n.dir() === 'rtl' ? 50 : -50 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-0 top-[72px] w-full h-[calc(100vh-72px)] bg-dark z-[100] border-t border-primary/10"
          >
            <div className="px-6 py-10 flex flex-col h-full overflow-y-auto bg-dark">
              <div className="space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block text-3xl font-black uppercase tracking-tighter transition-colors ${
                      location.pathname === link.path ? 'text-primary' : 'text-white/60'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              <div className="mt-auto space-y-8 pb-10">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center text-white/40 font-black tracking-widest text-xs uppercase"
                >
                  <Globe size={14} className="mr-2" />
                  {i18n.language === 'en' ? 'Switch to Arabic' : 'English - EN'}
                </button>
                
                <Link
                  to="/contact"
                  className="btn-primary w-full block text-center py-5 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {t('nav.bookDemo')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
