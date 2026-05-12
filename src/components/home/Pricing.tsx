import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Starter',
    price: 2500,
    desc: 'Basic AI tools for small businesses.',
    features: ['1 AI Module', 'Email Support', '5GB Storage', 'Basic Analytics', 'Mobile Access'],
    notIncluded: ['Custom Branding', 'API Access', 'ZATCA Integration'],
    highlighted: false
  },
  {
    name: 'Business',
    price: 5000,
    desc: 'Full AI suite for growing companies.',
    features: ['3 AI Modules', 'Priority Support', '50GB Storage', 'Advanced Analytics', 'Arabic Support', 'ZATCA Integration', 'Custom Branding'],
    notIncluded: ['Dedicated Account Manager'],
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Contact',
    desc: 'Custom solutions for large enterprises.',
    features: ['All AI Modules', '24/7 Dedicated Support', 'Unlimited Storage', 'Full Customization', 'On-Premise Option', 'API Access', 'Dedicated Account Manager'],
    notIncluded: [],
    highlighted: false
  }
];

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-24 bg-dark-lighter">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Transparent Pricing</h2>
          <p className="text-gray-400 mb-8">Choose the plan that fits your business needs.</p>
          
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-7 bg-primary/20 rounded-full relative p-1 transition-colors"
            >
              <div className={`w-5 h-5 bg-primary rounded-full transition-transform ${isAnnual ? 'translate-x-7' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-sm ${isAnnual ? 'text-white' : 'text-gray-500'}`}>Annual (Save 20%)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ translateY: -10 }}
              className={`glass-card p-10 relative flex flex-col group border border-white/5 ${plan.highlighted ? 'border-primary/40 shadow-2xl shadow-primary/10' : ''}`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black text-[10px] font-black tracking-[0.2em] py-1.5 px-6 rounded-full uppercase shadow-2xl">
                  ELITE ACCESS
                </div>
              )}
              
              <h3 className="text-2xl font-black mb-2 tracking-tighter text-white uppercase">{plan.name}</h3>
              <p className="text-gray-500 text-[10px] font-black tracking-[0.1em] mb-10 uppercase">{plan.desc}</p>
              
              <div className="mb-10 p-8 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex items-baseline">
                  <span className="text-5xl font-black text-white tracking-tighter">
                    {typeof plan.price === 'number' 
                      ? `${isAnnual ? Math.floor(plan.price * 12 * 0.8) : plan.price}` 
                      : plan.price}
                  </span>
                  {typeof plan.price === 'number' && (
                    <span className="text-gray-500 font-bold ml-2 uppercase text-[10px] tracking-[0.2em]">SAR/{isAnnual ? 'YR' : 'MO'}</span>
                  )}
                </div>
                <p className="text-[9px] text-gray-600 mt-2 font-black tracking-[0.2em] uppercase">15% VAT INCLUDED</p>
              </div>

              <ul className="space-y-6 mb-12 flex-grow">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-start text-xs font-bold text-gray-400">
                    <Check size={14} className="text-white mr-4 mt-0.5 flex-shrink-0" />
                    <span className="uppercase tracking-tight">{feature}</span>
                  </li>
                ))}
                {plan.notIncluded.map(feature => (
                  <li key={feature} className="flex items-start text-xs font-bold text-gray-700">
                    <X size={14} className="mr-4 mt-0.5 flex-shrink-0" />
                    <span className="uppercase tracking-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`w-full py-4 rounded-xl font-black text-[11px] tracking-[0.2em] uppercase text-center transition-all ${
                  plan.highlighted ? 'btn-primary' : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-primary/40'
                }`}
              >
                {plan.price === 'Contact' ? 'ENQUIRE NOW' : 'SECURE ACCESS'}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
