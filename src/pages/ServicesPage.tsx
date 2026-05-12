import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Headphones, Layers, Users, ArrowRight, CheckCircle } from 'lucide-react';
import SEO from '../components/common/SEO';

const services = [
  {
    icon: <Cpu className="w-12 h-12" />,
    title: "AI Automation",
    description: "Streamline your operations with intelligent AI workflows. We build custom agents that handle repetitive tasks, data analysis, and decision-making processes.",
    features: ["Custom AI Agents", "Workflow Automation", "Data Analysis", "Predictive Maintenance"],
    color: "from-[#C19A6B] to-[#8B5E3C]"
  },
  {
    icon: <Headphones className="w-12 h-12" />,
    title: "AI Reception",
    description: "AI-powered voice and chat reception for 24/7 customer service. Never miss a lead or a customer inquiry again with our bilingual AI receptionists.",
    features: ["Bilingual Support (AR/EN)", "24/7 Availability", "Instant Lead Capture", "Natural Language Processing"],
    color: "from-[#8B5E3C] to-[#5D4037]"
  },
  {
    icon: <Layers className="w-12 h-12" />,
    title: "ERP System",
    description: "Complete enterprise resource planning for Saudi businesses. Modular, scalable, and fully compliant with ZATCA regulations.",
    features: ["ZATCA Phase 2 Ready", "Inventory Management", "Financial Accounting", "HR & Payroll"],
    color: "from-[#D7C0AE] to-[#A67C52]"
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "CRM System",
    description: "Customer relationship management built for the Saudi market. Track every interaction and grow your customer loyalty.",
    features: ["Sales Pipeline", "Customer Segmentation", "Marketing Automation", "WhatsApp Integration"],
    color: "from-[#A67C52] to-[#8B5E3C]"
  }
];

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <SEO 
        title="Our Solutions" 
        description="Explore EMFTECH's AI-powered solutions including ERP, CRM, AI Automation, and Health Tech for Saudi businesses." 
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-primary">Expertise</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Delivering high-performance technology solutions that drive digital transformation in Saudi Arabia.
          </p>
        </div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              <div className="lg:w-1/2">
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 shadow-lg shadow-primary/20`}>
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {service.features.map(feature => (
                    <div key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="text-primary" size={20} />
                      <span className="text-gray-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="btn-primary flex items-center">
                  Get Started with {service.title}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
              <div className="lg:w-1/2 relative">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                  className="glass-card aspect-video relative overflow-hidden group shadow-2xl"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 z-10 group-hover:opacity-10 transition-opacity`}></div>
                  <img 
                    src={
                      service.title === "AI Automation" ? "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000" :
                      service.title === "AI Reception" ? "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000" :
                      service.title === "ERP System" ? "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" :
                      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
                    } 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent z-20"></div>
                </motion.div>
                <div className={`absolute -z-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl ${index % 2 === 0 ? '-top-10 -left-10' : '-bottom-10 -right-10'}`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
