import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ChevronLeft, Share2 } from 'lucide-react';
import SEO from '../components/common/SEO';

const allPosts = [
  {
    slug: 'ai-saudi-arabia-2025',
    title: 'AI in Saudi Arabia: 2025 Trends & Opportunities',
    date: 'May 15, 2025',
    author: 'Fahad bin Khalid',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'Saudi Arabia is at the forefront of the global AI revolution. Explore trends for 2025.',
    content: `
      <p>Saudi Arabia is at the forefront of the global AI revolution. As part of Vision 2030, the Kingdom is investing heavily in artificial intelligence to diversify its economy and build a smarter future.</p>
      <h3>The Rise of Local AI Solutions</h3>
      <p>One of the most significant trends we're seeing in 2025 is the shift towards locally-built AI solutions. Saudi businesses are increasingly looking for systems that understand the local context, language nuances, and regulatory requirements.</p>
      <h3>AI in Government and Healthcare</h3>
      <p>From smart city initiatives in NEOM to automated patient care in Riyadh's leading hospitals, AI is becoming the backbone of Saudi's public and private sectors.</p>
      <blockquote>"The digital transformation of Saudi Arabia is not just about technology; it's about empowering people and businesses to reach their full potential."</blockquote>
      <h3>Opportunities for SMEs</h3>
      <p>Small and medium enterprises now have access to enterprise-grade AI tools that were once only available to large corporations. This leveling of the playing field is driving unprecedented innovation across the Kingdom.</p>
    `
  },
  {
    slug: 'choose-best-erp-saudi',
    title: 'How to Choose the Best ERP System for Your Saudi Business',
    date: 'May 10, 2025',
    author: 'Sarah Ahmed',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'A comprehensive guide on selecting and implementing an ERP that fits local regulations and needs.',
    content: `
      <p>Choosing the right ERP system is one of the most important decisions a Saudi business can make. With ZATCA compliance, VAT requirements, and Vision 2030 digital mandates, local context is everything.</p>
      <h3>Key Criteria for Saudi ERP Selection</h3>
      <p>Look for Arabic language support, ZATCA e-invoicing compliance, and integration with local banking systems. Your ERP must be able to handle both Hijri and Gregorian calendar dates natively.</p>
      <h3>Cloud vs On-Premise</h3>
      <p>Cloud-based ERPs are now the preferred choice for Saudi businesses — they reduce upfront capital expenditure and allow for faster implementation and updates.</p>
      <h3>Implementation Timeline</h3>
      <p>A typical ERP implementation for a mid-size Saudi company takes 3–6 months. Budget for training, data migration, and a parallel run period to ensure zero disruption.</p>
    `
  },
  {
    slug: 'restaurant-qr-menu-guide',
    title: 'Restaurant QR Menu: A Complete Guide',
    date: 'May 05, 2025',
    author: 'Mohammed Ali',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'Why digital menus are no longer optional for Saudi F&B businesses in 2025.',
    content: `
      <p>The Saudi F&B sector has experienced a dramatic shift toward digital menus since 2022. QR codes are now a standard expectation in Riyadh's dining scene — not a novelty.</p>
      <h3>Why QR Menus Win</h3>
      <p>No printing costs, real-time price updates, rich media (photos, videos), and seamless integration with your POS system. For a restaurant with 50 tables, you save thousands of riyals annually.</p>
      <h3>What to Look for in a QR Menu Platform</h3>
      <p>Arabic/English bilingual support is non-negotiable. Look for platforms that support allergen labeling, calorie counts (required by SFDA), and table-side ordering.</p>
      <h3>Getting Started</h3>
      <p>EMFTECH can deploy a fully custom QR menu system for your restaurant in under 2 weeks, complete with your branding, Arabic content, and SFDA compliance built in.</p>
    `
  }
];

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = allPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-32 pb-20 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl font-black text-white mb-4">404</h1>
        <p className="text-gray-400 mb-8">This post doesn't exist or has been removed.</p>
        <Link to="/blog" className="btn-primary">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      <SEO title={post.title} description={post.excerpt} />
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/blog" className="flex items-center text-primary mb-8 hover:translate-x-1 transition-transform inline-block">
          <ChevronLeft size={20} className="mr-2" />
          Back to Blog
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
            <div className="flex items-center space-x-1">
              <Calendar size={16} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <User size={16} />
              <span>{post.author}</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="glass-card aspect-video mb-12 overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <div className="prose prose-invert prose-primary max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <div className="border-t border-white/10 pt-8 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 font-medium">Share this post:</span>
              <button className="p-2 bg-white/5 rounded-full hover:bg-primary/20 transition-colors">
                <Share2 size={20} />
              </button>
            </div>
            <Link to="/contact" className="btn-primary text-sm">
              Discuss AI for Your Business
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPostPage;
