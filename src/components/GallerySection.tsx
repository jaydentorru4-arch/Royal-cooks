import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/cateringData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'banquet' | 'dishes' | 'dessert'>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeTab === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  const tabs = [
    { key: 'all', label: 'All Photos' },
    { key: 'dishes', label: 'Dishes' },
    { key: 'banquet', label: 'Event Setups' },
    { key: 'dessert', label: 'Desserts & Snacks' },
  ];

  return (
    <section
      id="gallery"
      className="relative py-20 sm:py-28 bg-[#080808] text-[#FFF8E7]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#D4AF37] block mb-2">
            Gallery
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FFF8E7] mb-4">
            Photos from Our Events
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-5" />
          <p className="text-base text-neutral-300 leading-relaxed">
            Take a look at real dishes and catering setups from our past weddings, parties, and dinners.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key as any)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-lg transition-colors ${
                activeTab === tab.key
                  ? 'bg-[#D4AF37] text-black font-bold'
                  : 'bg-[#151515] text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#141414] border border-neutral-800 hover:border-[#D4AF37] aspect-[4/3] cursor-pointer transition-colors shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              {/* Caption Overlay */}
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#FFF8E7]">
                    {item.title}
                  </h3>
                  <div className="p-1.5 rounded-full bg-black/60 text-[#D4AF37]">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
                <p className="text-xs text-neutral-300 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative max-w-3xl w-full bg-[#151515] border border-neutral-700 rounded-2xl overflow-hidden shadow-2xl">
            <button
              type="button"
              onClick={() => setLightboxItem(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/70 text-white hover:text-[#D4AF37] transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative max-h-[70vh] w-full overflow-hidden bg-black flex items-center justify-center">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="max-h-[70vh] w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-5 bg-[#151515] border-t border-neutral-800">
              <h3 className="font-display text-lg font-bold text-[#FFF8E7] mb-1">
                {lightboxItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300">
                {lightboxItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
