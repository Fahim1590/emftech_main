import React from 'react';
import Contact from '../components/home/Contact';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-24">
      <SEO 
        title="Contact Us" 
        description="Get in touch with EMFTECH Riyadh. Discuss AI Automation, ERP, and CRM solutions for your Saudi business." 
      />
      <div className="container mx-auto px-4 text-center mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Let's <span className="text-primary">Connect</span>
        </motion.h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          We're ready to discuss your next project. Reach out to our team in Riyadh today.
        </p>
      </div>
      <Contact />
      
      <div className="container mx-auto px-4 pb-20">
        <div className="glass-card h-[400px] w-full overflow-hidden relative border border-white/10 rounded-3xl">
          <div className="absolute inset-0 bg-dark flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Central Command HQ</p>
              <p className="text-xl font-black text-white mb-2">2054 King Abdulaziz Rd, Riyadh 12643</p>
              <a href="mailto:irobiul159@gmail.com" className="text-primary font-bold hover:text-white transition-colors">irobiul159@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
