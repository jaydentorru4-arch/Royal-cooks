import React from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import { MENU_PLANS, getWhatsAppLink } from '../data/cateringData';

export const MenuPlansSection: React.FC = () => {
  return (
    <section id="menus" className="py-16 sm:py-24 bg-[#080808] text-[#FFF8E7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#D4AF37] block mb-1">
            Packages
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FFF8E7] mb-2">
            Choose Your Menu Plan
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            Simple packages for weddings, birthdays, and parties. Menus can be customized.
          </p>
        </div>

        {/* 3 Package Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-10">
          {MENU_PLANS.map((plan) => {
            const isRecommended = plan.isRecommended;
            const waLink = getWhatsAppLink(
              `Hello Royal Cooks! I want to ask about the "${plan.name}" package for our upcoming event.`
            );

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-xl p-6 sm:p-7 ${
                  isRecommended
                    ? 'bg-[#181818] border-2 border-[#D4AF37] lg:-translate-y-1'
                    : 'bg-[#141414] border border-neutral-800'
                }`}
              >
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37] mb-1">
                    {isRecommended ? 'Most Popular' : plan.id === 'royal-classic' ? 'Small Parties' : 'Full Luxury'}
                  </div>

                  <h3 className="font-display text-2xl font-bold text-[#FFF8E7] mb-1">
                    {plan.name}
                  </h3>

                  <p className="text-xs text-neutral-400 mb-5">
                    {plan.tagline}
                  </p>

                  {/* Core Features List */}
                  <div className="space-y-2.5 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-200">
                        <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                      isRecommended
                        ? 'text-black bg-[#D4AF37] hover:bg-[#FFF8E7]'
                        : 'text-[#FFF8E7] bg-[#1E1E1E] hover:bg-[#D4AF37] hover:text-black border border-neutral-700'
                    }`}
                  >
                    <span>Inquire on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Menu Note */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#141414] border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-neutral-300">
            Want a custom mix of dishes? We can combine any Nigerian, Asian, American BBQ, and European food.
          </p>
          <a
            href={getWhatsAppLink("Hello Royal Cooks! I want to ask about a custom menu for my event.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#FFF8E7] rounded-lg transition-colors whitespace-nowrap"
          >
            Custom Menu
          </a>
        </div>
      </div>
    </section>
  );
};
