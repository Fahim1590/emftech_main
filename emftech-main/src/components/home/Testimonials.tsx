import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Ahmed Al-Saud",
    company: "Riyadh Logistics",
    role: "CEO",
    quote: "EMFTECH transformed our entire operations with their AI ERP system. The transition was smooth and the support is exceptional.",
    rating: 5
  },
  {
    name: "Sara Mohammed",
    company: "HealthPlus Clinic",
    role: "Operations Manager",
    quote: "The Health Tech solution from EMFTECH has significantly reduced our patient wait times and automated our appointment bookings.",
    rating: 5
  },
  {
    name: "Faisal Ibrahim",
    company: "The Gourmet Hub",
    role: "Founder",
    quote: "Their QR Menu system is by far the best in the market. Our customers love the ease of use and the design is stunning.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-gray-400">Hear from the businesses we've helped succeed.</p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="glass-card p-8 h-full flex flex-col"
              >
                <div className="flex text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <div className="mb-6 relative">
                  <Quote className="absolute -top-4 -left-4 text-primary/20" size={48} />
                  <p className="text-gray-300 italic relative z-10">{t.quote}</p>
                </div>
                <div className="mt-auto flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.role}, {t.company}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
