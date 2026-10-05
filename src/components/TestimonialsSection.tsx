import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/cateringData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#080808] text-[#FFF8E7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#D4AF37] block mb-1">
            Reviews
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FFF8E7] mb-2">
            What Our Clients Say
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            Real feedback from weddings, birthday parties, and corporate events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-xl bg-[#141414] border border-neutral-800 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-6 h-6 text-[#D4AF37] mb-3 opacity-60" />
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed mb-5">
                  “{t.quote}”
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-800">
                <div className="font-bold text-xs sm:text-sm text-[#FFF8E7]">
                  {t.clientName}
                </div>
                <div className="text-[11px] text-[#D4AF37] mt-0.5">
                  {t.role} {t.event && `· ${t.event}`}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
