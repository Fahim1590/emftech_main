import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const StatCounter = ({ end, duration = 2 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

const Stats: React.FC = () => {
  const stats = [
    { label: 'PROVEN CLIENTS', value: 100, suffix: '+' },
    { label: 'GLOBAL PROJECTS', value: 1000, suffix: '+' },
    { label: 'SUPPORT STATUS', value: 24, suffix: '/7' },
    { label: 'EXPERT YEARS', value: 5, suffix: '+' },
  ];

  return (
    <section className="py-20 border-y border-white/5 bg-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center">
              <div className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-2">
                <StatCounter end={stat.value} />{stat.suffix}
              </div>
              <div className="text-[10px] font-black text-gray-500 tracking-[0.3em] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
