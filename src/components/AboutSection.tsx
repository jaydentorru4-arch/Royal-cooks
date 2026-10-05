import React, { useState, useEffect, useRef } from 'react';
import { Globe, Utensils, HeartHandshake } from 'lucide-react';
import { STATS, IMAGES } from '../data/cateringData';

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1200;
          const startTime = performance.now();

          const updateCounters = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);

            const nextCounts = STATS.map((stat) => Math.floor(easeOutProgress * stat.value));
            setCounts(nextCounts);

            if (progress < 1) {
              requestAnimationFrame(updateCounters);
            } else {
              setCounts(STATS.map((s) => s.value));
            }
          };

          requestAnimationFrame(updateCounters);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[#080808] text-[#FFF8E7]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          {/* Left Column: Real Food Photo */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-lg aspect-[4/3]">
              <img
                src={IMAGES.jollof}
                alt="Party Jollof Rice with Fried Plantains"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column: Fast, Direct Text */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#D4AF37] block">
              About Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FFF8E7]">
              Real Food, Cooked Fresh
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              We cater weddings, birthdays, and parties with delicious dishes from Nigeria, West Africa, Asia, Europe, and America. Every plate is freshly prepared and served hot.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#141414] border border-neutral-800">
                <Globe className="w-4 h-4 text-[#D4AF37] mb-1.5" />
                <h4 className="font-semibold text-xs text-[#FFF8E7] mb-0.5">Real Flavors</h4>
                <p className="text-[11px] text-neutral-400">Authentic spices and traditional recipes.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#141414] border border-neutral-800">
                <Utensils className="w-4 h-4 text-[#D4AF37] mb-1.5" />
                <h4 className="font-semibold text-xs text-[#FFF8E7] mb-0.5">Served Hot</h4>
                <p className="text-[11px] text-neutral-400">Warming trays keep food hot all event.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#141414] border border-neutral-800">
                <HeartHandshake className="w-4 h-4 text-[#D4AF37] mb-1.5" />
                <h4 className="font-semibold text-xs text-[#FFF8E7] mb-0.5">Friendly Team</h4>
                <p className="text-[11px] text-neutral-400">Helpful staff who take care of guests.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Clean, Simple Stats */}
        <div className="rounded-xl p-5 sm:p-7 bg-[#121212] border border-neutral-800">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-neutral-800">
            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center ${index > 0 ? 'pt-3 sm:pt-0 sm:pl-4' : ''}`}
              >
                <div className="font-display text-3xl sm:text-4xl font-black text-[#D4AF37] tabular-nums">
                  {counts[index]}
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-xs font-bold text-[#FFF8E7] tracking-wider uppercase mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
