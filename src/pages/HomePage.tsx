import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Stats from '../components/home/Stats';
import Industries from '../components/home/Industries';
import WhyChooseUs from '../components/home/WhyChooseUs';
import UIShowcase from '../components/home/UIShowcase';
import QRFeature from '../components/home/QRFeature';
import Testimonials from '../components/home/Testimonials';
import Pricing from '../components/home/Pricing';
import Contact from '../components/home/Contact';
import SEO from '../components/common/SEO';

const HomePage: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <SEO 
        title="AI & Digital Transformation Solutions Saudi Arabia" 
        description="EMFTECH provides world-class AI Automation, ERP, CRM, and Health Tech solutions tailored for the Saudi Arabian market. Trusted by 100+ businesses."
      />
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <UIShowcase />
      <QRFeature />
      <Industries />
      <Testimonials />
      <Pricing />
      <Contact />
    </div>
  );
};

export default HomePage;
