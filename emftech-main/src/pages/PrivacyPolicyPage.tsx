import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 md:p-12"
        >
          <h1 className="text-4xl font-bold mb-8 text-primary">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-300">
            <p>Last updated: May 20, 2025</p>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p>We collect information you provide directly to us when you fill out a contact form, book a demo, or communicate with us.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Data Storage</h2>
              <p>All data is stored securely in accordance with Saudi Arabian data protection regulations (PDPL). We prioritize hosting our data within the Kingdom of Saudi Arabia.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Use of Information</h2>
              <p>We use the information we collect to provide, maintain, and improve our services, and to communicate with you about your projects.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at irobiul159@gmail.com.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
