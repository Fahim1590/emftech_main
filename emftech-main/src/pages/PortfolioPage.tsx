import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Tag } from 'lucide-react';
import SEO from '../components/common/SEO';

const categories = ['All', 'AI', 'ERP', 'Health Tech', 'Restaurant', 'E-Commerce'];

const projects = [
  {
    title: "AI Logistics Suite",
    category: "AI",
    industry: "Logistics",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    description: "Automated route optimization and inventory management for a major Riyadh logistics firm."
  },
  {
    title: "CareConnect Platform",
    category: "Health Tech",
    industry: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    description: "Full-scale clinic management system for specialized medical centers in Jeddah."
  },
  {
    title: "DineSmart QR",
    category: "Restaurant",
    industry: "F&B",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    description: "Integrated digital menu and payment system for high-end restaurants in Riyadh."
  },
  {
    title: "GlobalTrade ERP",
    category: "ERP",
    industry: "Trading",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    description: "Cross-border ERP solution with ZATCA integration for export-import businesses."
  },
  {
    title: "SaudiFashion Hub",
    category: "E-Commerce",
    industry: "Retail",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    description: "Modern e-commerce platform with Mada and Apple Pay integration."
  },
  {
    title: "SmartOffice AI",
    category: "AI",
    industry: "Corporate",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    description: "Office automation and intelligent energy management system."
  }
];

const PortfolioPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 pb-20">
      <SEO 
        title="Our Portfolio" 
        description="Explore our successful digital transformation projects across Saudi Arabia, including AI, ERP, and health tech implementations."
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-primary">Portfolio</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Showcasing our impact across various industries in Saudi Arabia.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                activeCategory === cat 
                  ? 'bg-white text-black shadow-lg shadow-white/20' 
                  : 'bg-white/5 text-gray-500 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card group overflow-hidden"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-dark p-3 rounded-full hover:scale-110 transition-transform">
                      <ExternalLink size={24} />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-primary text-xs font-bold uppercase tracking-wider mb-2">
                    <Tag size={12} />
                    <span>{project.category}</span>
                    <span className="text-gray-600">•</span>
                    <span>{project.industry}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioPage;
