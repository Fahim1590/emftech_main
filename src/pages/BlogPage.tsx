import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

const posts = [
  {
    title: "AI in Saudi Arabia: 2025 Trends & Opportunities",
    slug: "ai-saudi-arabia-2025",
    excerpt: "Discover how AI is reshaping the business landscape in the Kingdom and what it means for your company.",
    date: "May 15, 2025",
    author: "Fahad bin Khalid",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "How to Choose the Best ERP System for Your Saudi Business",
    slug: "choose-best-erp-saudi",
    excerpt: "A comprehensive guide on selecting and implementing an ERP that fits local regulations and needs.",
    date: "May 10, 2025",
    author: "Sarah Ahmed",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Restaurant QR Menu: A Complete Guide",
    slug: "restaurant-qr-menu-guide",
    excerpt: "Why digital menus are no longer optional for Saudi F&B businesses in 2025.",
    date: "May 05, 2025",
    author: "Mohammed Ali",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800"
  }
];

const BlogPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <SEO 
        title="Blog & Insights" 
        description="Stay updated with the latest AI trends, ERP guides, and digital transformation insights for the Saudi market." 
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Blog & <span className="text-primary">Insights</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Stay updated with the latest trends in technology and digital transformation in Saudi Arabia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card overflow-hidden group"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.slug}`} 
                  className="text-primary font-bold flex items-center group-hover:translate-x-2 transition-transform"
                >
                  Read More
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
