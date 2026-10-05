import React, { useState } from 'react';
import { ArrowRight, X, Check } from 'lucide-react';
import { CUISINES, getWhatsAppLink } from '../data/cateringData';
import { Cuisine } from '../types';

export const CuisinesSection: React.FC = () => {
  const [selectedCuisine, setSelectedCuisine] = useState<Cuisine | null>(null);

  return (
    <section id="cuisines" className="py-16 sm:py-24 bg-[#080808] text-[#FFF8E7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#D4AF37] block mb-1">
            Cuisines
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FFF8E7] mb-2">
            Foods from Around the World
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            Real dishes from Africa, Asia, Europe, and America.
          </p>
        </div>

        {/* 8 Cuisines Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CUISINES.map((cuisine) => (
            <div
              key={cuisine.id}
              onClick={() => setSelectedCuisine(cuisine)}
              className="group rounded-xl overflow-hidden bg-[#141414] border border-neutral-800 hover:border-[#D4AF37] cursor-pointer transition-colors flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#101010]">
                <img
                  src={cuisine.image}
                  alt={cuisine.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-base font-bold text-[#FFF8E7] mb-1">
                    {cuisine.name}
                  </h3>
                  <p className="text-xs text-neutral-400 line-clamp-2 mb-3">
                    {cuisine.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-neutral-800 flex items-center justify-between text-xs text-[#D4AF37]">
                  <span>See dishes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simple Modal */}
      {selectedCuisine && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="relative w-full max-w-md bg-[#151515] border border-neutral-700 rounded-xl overflow-hidden text-[#FFF8E7]">
            <div className="relative h-44 w-full overflow-hidden">
              <img
                src={selectedCuisine.image}
                alt={selectedCuisine.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                type="button"
                onClick={() => setSelectedCuisine(null)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-black/70 text-white hover:text-[#D4AF37]"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 space-y-4">
              <div>
                <h3 className="font-display text-xl font-bold text-[#FFF8E7] mb-1">
                  {selectedCuisine.name}
                </h3>
                <p className="text-xs text-neutral-300">
                  {selectedCuisine.description}
                </p>
              </div>

              <div>
                <span className="text-xs font-semibold text-[#D4AF37] block mb-2">Popular Dishes:</span>
                <div className="grid grid-cols-2 gap-2">
                  {selectedCuisine.highlights.map((dish, idx) => (
                    <div key={idx} className="p-2 rounded bg-[#0a0a0a] border border-neutral-800 flex items-center gap-1.5 text-xs text-neutral-200">
                      <Check className="w-3 h-3 text-[#D4AF37] shrink-0" />
                      <span className="line-clamp-1">{dish}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-800 flex items-center justify-between gap-3">
                <span className="text-xs text-neutral-400">Ask about this cuisine:</span>
                <a
                  href={getWhatsAppLink(`Hello Royal Cooks! I want to ask about ${selectedCuisine.name} for our event.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#FFF8E7] rounded-lg transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
