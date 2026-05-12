import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Headphones, 
  Layers, 
  Users, 
  Stethoscope, 
  Calendar, 
  Utensils, 
  ShoppingBag, 
  Box, 
  Layout,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "AI Automation",
    description: "Streamline your operations with intelligent AI workflows",
    color: "from-[#C19A6B] to-[#8B5E3C]"
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "AI Reception",
    description: "AI-powered voice and chat reception for 24/7 customer service",
    color: "from-[#8B5E3C] to-[#5D4037]"
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "ERP System",
    description: "Complete enterprise resource planning for Saudi businesses",
    color: "from-[#D7C0AE] to-[#A67C52]"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "CRM System",
    description: "Customer relationship management built for Saudi market",
    color: "from-[#A67C52] to-[#8B5E3C]"
  },
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: "Health Tech",
    description: "Smart solutions for hospitals and clinics in Saudi Arabia",
    color: "from-[#8B5E3C] to-[#C19A6B]"
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Booking Platform",
    description: "Online booking system for appointments and reservations",
    color: "from-[#C19A6B] to-[#D7C0AE]"
  },
  {
    icon: <Utensils className="w-8 h-8" />,
    title: "Restaurant Menu + QR",
    description: "Digital menus and QR code ordering for F&B",
    color: "from-[#8B5E3C] to-[#A67C52]"
  },
  {
    icon: <ShoppingBag className="w-8 h-8" />,
    title: "E-Commerce",
    description: "Full-featured online stores with Saudi payment integration",
    color: "from-[#D7C0AE] to-[#8B5E3C]"
  },
  {
    icon: <Box className="w-8 h-8" />,
    title: "SaaS Products",
    description: "Cloud-based software solutions for businesses",
    color: "from-[#A67C52] to-[#5D4037]"
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Landing Page Builder",
    description: "Create high-converting landing pages without coding",
    color: "from-[#C19A6B] to-[#F5E6D3]"
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-32 bg-dark" id="services">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary text-[10px] font-black tracking-[0.4em] uppercase mb-4"
            >
              System Capabilities
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none"
            >
              ADVANCED <br />
              <span className="text-gray-600">TECHNOLOGY CORE</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 max-w-sm text-sm font-medium leading-relaxed"
          >
            Engineering mission-critical infrastructure for Saudi Arabia's digital-first enterprises. Built on the Obsidian standard.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.02 }}
              className="bg-dark p-12 hover:bg-[#080808] transition-colors group cursor-pointer"
            >
              <div className="text-primary mb-8 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight uppercase group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-10 group-hover:text-gray-400 transition-colors">
                {service.description}
              </p>
              <Link 
                to={`/services#${service.title.toLowerCase().replace(/ /g, '-')}`} 
                className="inline-flex items-center text-[10px] font-black tracking-[0.2em] uppercase text-white/20 group-hover:text-white transition-all"
              >
                ACCESS MODULE
                <ArrowRight size={14} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
