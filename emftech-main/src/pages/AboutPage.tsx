import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Award } from 'lucide-react';
import SEO from '../components/common/SEO';

const values = [
  { title: 'Innovation', desc: 'Constantly pushing the boundaries of what is possible with AI.', icon: <Lightbulb size={32} /> },
  { title: 'Local Focus', desc: 'Everything we build is tailored for the Saudi market.', icon: <Target size={32} /> },
  { title: 'Integrity', desc: 'Transparent business practices and reliable solutions.', icon: <Award size={32} /> },
  { title: 'Collaboration', desc: 'Working closely with our clients to ensure success.', icon: <Users size={32} /> },
];

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <SEO 
        title="Our Story" 
        description="Founded in Riyadh, EMFTECH is the digital backbone of Saudi business. We architect the Kingdom's most ambitious digital transformations."
      />
      <div className="container mx-auto px-4">
        {/* Story Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Our <span className="text-primary">Story</span></h1>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Founded in Riyadh, EMFTECH began with a simple mission: to build the digital backbone of Saudi business. We saw a gap in the market for high-quality, AI-driven solutions that were built specifically for local needs.
            </p>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Today, we are a leading technology partner for over 100 clients across the Kingdom, from healthcare providers to restaurant groups and government entities.
            </p>
          </motion.div>
          <div className="lg:w-1/2">
            <div className="glass-card p-4">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Our Team" 
                className="rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 group hover:border-primary/50 transition-all"
              >
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
