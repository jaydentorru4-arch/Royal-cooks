import React from 'react';
import {
  HeartHandshake,
  Building2,
  Calendar,
  UtensilsCrossed,
  Sun,
  Crown,
  ArrowUpRight,
  Users
} from 'lucide-react';
import { CATERING_SERVICES, getWhatsAppLink } from '../data/cateringData';

export const ServicesSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    HeartHandshake: <HeartHandshake className="w-5 h-5 text-[#D4AF37]" />,
    Calendar: <Calendar className="w-5 h-5 text-[#D4AF37]" />,
    Building2: <Building2 className="w-5 h-5 text-[#D4AF37]" />,
    UtensilsCrossed: <UtensilsCrossed className="w-5 h-5 text-[#D4AF37]" />,
    Sun: <Sun className="w-5 h-5 text-[#D4AF37]" />,
    Crown: <Crown className="w-5 h-5 text-[#D4AF37]" />,
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#080808] text-[#FFF8E7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#D4AF37] block mb-1">
            Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FFF8E7] mb-2">
            Catering for Any Occasion
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            Hot, delicious food delivered and served on time.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATERING_SERVICES.map((service) => {
            const waServiceLink = getWhatsAppLink(
              `Hello Royal Cooks! I want to ask about catering for our "${service.title}".`
            );

            return (
              <div
                key={service.id}
                className="rounded-xl bg-[#141414] border border-neutral-800 hover:border-[#D4AF37] p-5 flex flex-col justify-between transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-[#0a0a0a] border border-neutral-800">
                      {iconMap[service.iconName] || <Crown className="w-5 h-5 text-[#D4AF37]" />}
                    </div>

                    <span className="text-[11px] text-[#D4AF37] font-medium">
                      {service.capacity}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#FFF8E7] mb-1">
                    {service.title}
                  </h3>

                  <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <a
                  href={waServiceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#FFF8E7] rounded-lg transition-colors"
                >
                  <span>Inquire on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
