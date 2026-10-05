import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SIGNATURE_DISHES, getWhatsAppLink } from '../data/cateringData';

export const SignatureDishesSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'rice' | 'grills' | 'pastas' | 'pastries' | 'desserts'>('all');

  const filteredDishes = filter === 'all'
    ? SIGNATURE_DISHES
    : SIGNATURE_DISHES.filter((d) => d.category === filter);

  const categories = [
    { key: 'all', label: 'All' },
    { key: 'rice', label: 'Rice' },
    { key: 'grills', label: 'Grills & Meats' },
    { key: 'pastas', label: 'Noodles & Pasta' },
    { key: 'pastries', label: 'Small Chops' },
    { key: 'desserts', label: 'Desserts' },
  ];

  return (
    <section id="dishes" className="py-16 sm:py-24 bg-[#080808] text-[#FFF8E7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#D4AF37] block mb-1">
            Menu Highlights
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FFF8E7] mb-2">
            Signature Dishes
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            Our most popular dishes for weddings, parties, and dinners.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-10">
          {categories.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setFilter(tab.key as any)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                filter === tab.key
                  ? 'bg-[#D4AF37] text-black font-bold'
                  : 'bg-[#141414] text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dishes Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDishes.map((dish) => {
            const waDishLink = getWhatsAppLink(
              `Hello Royal Cooks! I want to ask about "${dish.name}" for our event.`
            );

            return (
              <div
                key={dish.id}
                className="group rounded-xl bg-[#141414] border border-neutral-800 hover:border-[#D4AF37] overflow-hidden flex flex-col justify-between transition-colors"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#101010]">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#D4AF37] block mb-1">
                      {dish.cuisine}
                    </span>
                    <h3 className="font-display text-base font-bold text-[#FFF8E7] mb-1">
                      {dish.name}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                      {dish.description}
                    </p>
                  </div>

                  <a
                    href={waDishLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-[#D4AF37] hover:text-black bg-[#1a1a1a] hover:bg-[#D4AF37] rounded border border-neutral-800 hover:border-[#D4AF37] transition-colors"
                  >
                    <span>Inquire on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
