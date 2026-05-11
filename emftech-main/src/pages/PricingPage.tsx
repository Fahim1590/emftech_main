import React from 'react';
import Pricing from '../components/home/Pricing';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import SEO from '../components/common/SEO';

const PricingPage: React.FC = () => {
  const faqs = [
    { q: "Is there a setup fee?", a: "Most plans have a one-time setup fee depending on the modules required." },
    { q: "Can I upgrade my plan later?", a: "Yes, you can upgrade or downgrade your plan at any time." },
    { q: "Do you support Arabic?", a: "All our systems are built with native Arabic and English support." },
    { q: "Is it compliant with ZATCA?", a: "Yes, our ERP and POS systems are fully compliant with ZATCA Phase 2 requirements." }
  ];

  return (
    <div className="pt-24 pb-20">
      <SEO 
        title="Transparent Pricing" 
        description="Flexible plans for AI tools, ERP systems, and CRM solutions. Built for Saudi SMEs and enterprises."
      />
      <div className="container mx-auto px-4">
        <Pricing />
        
        <div className="mt-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 border border-white/5"
              >
                <div className="flex items-start space-x-4">
                  <HelpCircle className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold mb-2 text-white">{faq.q}</h4>
                    <p className="text-gray-400 text-sm">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
