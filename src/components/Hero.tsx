import React from 'react';
import { ArrowUpRight, Utensils } from 'lucide-react';
import { IMAGES, WHATSAPP_BASE_URL } from '../data/cateringData';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#080808]"
    >
      {/* Background Image: High-res & clean */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Catering dining setup"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Content: Clean, Simple, Low Word Count */}
      <div className="relative z-20 max-w-2xl mx-auto px-4 text-center pt-28 pb-20">
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-black tracking-wider text-[#FFF8E7] mb-3">
          ROYAL <span className="text-[#D4AF37]">COOKS</span>
        </h1>

        <p className="font-serif-lux italic text-2xl sm:text-3xl text-[#D4AF37] mb-4">
          “Where Every Plate Tells a Story.”
        </p>

        <p className="text-base sm:text-lg text-neutral-200 mb-8 max-w-md mx-auto">
          Fresh African, European, Asian, and American food for weddings and parties.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#menus"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#FFF8E7] bg-[#151515] hover:bg-[#222222] border border-neutral-700 rounded-md transition-colors"
          >
            <Utensils className="w-4 h-4 text-[#D4AF37]" />
            <span>View Menus</span>
          </a>

          <a
            href={WHATSAPP_BASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold tracking-wider uppercase text-black bg-[#D4AF37] hover:bg-[#FFF8E7] rounded-md transition-colors shadow-md"
          >
            <span>Hire Us on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </section>
  );
};
