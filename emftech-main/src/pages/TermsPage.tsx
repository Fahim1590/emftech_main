import React from 'react';
import { motion } from 'framer-motion';

const TermsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 md:p-12"
        >
          <h1 className="text-4xl font-bold mb-8 text-primary">Terms of Service</h1>
          
          <div className="space-y-6 text-gray-300">
            <p>Last updated: May 20, 2025</p>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p>By accessing our website at https://emftech.online, you agree to be bound by these terms of service and all applicable laws and regulations in Saudi Arabia.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
              <p>Permission is granted to temporarily download one copy of the materials on EMFTECH's website for personal, non-commercial transitory viewing only.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
              <p>The materials on EMFTECH's website are provided on an 'as is' basis. EMFTECH makes no warranties, expressed or implied.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Governing Law</h2>
              <p>These terms and conditions are governed by and construed in accordance with the laws of Saudi Arabia.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsPage;
