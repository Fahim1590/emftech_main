import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Logo from '../common/Logo';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-dark pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <Link to="/" className="mb-6 block">
              <Logo className="h-16" />
            </Link>
            <p className="text-gray-400 mb-6 text-sm">
              The Digital Backbone of Saudi Business. Excellence in AI & Technology.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/emftech_sa/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">{t('nav.services')}</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors">AI Automation</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors">ERP Systems</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors">CRM Solutions</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Health Tech</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-primary transition-colors">{t('nav.portfolio')}</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-primary transition-colors">Blog & Insights</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-primary flex-shrink-0" size={20} />
                <span className="text-gray-400">2054 King Abdulaziz Rd, حي العمل, Riyadh 12643, Saudi Arabia</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-primary flex-shrink-0" size={20} />
                <span className="text-gray-400">+966 530 350 659</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-primary flex-shrink-0" size={20} />
                <a href="mailto:irobiul159@gmail.com" className="text-gray-400 hover:text-white transition-colors">irobiul159@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 EMFTECH. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
