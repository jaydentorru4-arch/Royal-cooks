import React, { useState } from 'react';
import {
  MessageSquare,
  Send,
  MapPin,
  Utensils,
  Clock,
  CheckCircle2,
  ChevronDown,
  ArrowUpRight
} from 'lucide-react';
import { FAQS, WHATSAPP_BASE_URL, getWhatsAppLink } from '../data/cateringData';

export const BookingInquirySection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding',
    guestCount: 150,
    packageTier: 'Royal Premium (Most Popular)',
    eventDate: '',
    venueLocation: '',
    selectedCuisines: ['Nigerian Food', 'European Classics'],
    dietaryNotes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableCuisines = [
    'Nigerian Food',
    'West African',
    'Asian Food',
    'Middle Eastern',
    'Mediterranean',
    'European Classics',
    'American BBQ',
  ];

  const handleCuisineToggle = (cuisine: string) => {
    setFormData((prev) => {
      const exists = prev.selectedCuisines.includes(cuisine);
      if (exists) {
        return { ...prev, selectedCuisines: prev.selectedCuisines.filter((c) => c !== cuisine) };
      } else {
        return { ...prev, selectedCuisines: [...prev.selectedCuisines, cuisine] };
      }
    });
  };

  const generateWhatsAppMessage = () => {
    return `Hello Royal Cooks! 👋

I would like to inquire about catering for our event:
• Name: ${formData.name || 'Client'}
• Event: ${formData.eventType}
• Guests: ${formData.guestCount}
• Package: ${formData.packageTier}
• Date: ${formData.eventDate || 'To be decided'}
• Location: ${formData.venueLocation || 'To be confirmed'}
• Food choices: ${formData.selectedCuisines.join(', ') || 'Recommendations'}
${formData.dietaryNotes ? `• Notes: ${formData.dietaryNotes}` : ''}

Please let me know the price and if you are available. Thank you!`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    const waUrl = getWhatsAppLink(generateWhatsAppMessage());
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-[#080808] text-[#FFF8E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#D4AF37] block mb-2">
            Contact & Pricing
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FFF8E7] mb-4">
            Book Catering for Your Event
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-5" />
          <p className="text-base text-neutral-300 leading-relaxed">
            Message us directly on WhatsApp or fill out the quick form below. We will send you a price and menu options.
          </p>
        </div>

        {/* 2-Column Contact & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-20">
          {/* Left Column: Direct WhatsApp Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-[#141414] border border-[#D4AF37]/50 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366]">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold block">
                    Fastest Response
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#FFF8E7]">
                    Chat on WhatsApp
                  </h3>
                </div>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                Want a quick price or have questions about the menu? Click the button below to message us directly on WhatsApp.
              </p>

              <a
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 text-xs sm:text-sm font-bold tracking-wider uppercase text-black bg-[#D4AF37] hover:bg-[#FFF8E7] rounded-xl shadow-md transition-colors"
              >
                <span>Hire Us on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <div className="mt-3 text-center">
                <span className="text-xs text-neutral-400">
                  Official WhatsApp: <code className="text-[#D4AF37]">{WHATSAPP_BASE_URL}</code>
                </span>
              </div>
            </div>

            {/* Quick Details */}
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-[#141414] border border-neutral-800 flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#FFF8E7]">On-Time Setup</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    We arrive early to set up food warmers so everything is hot and ready when guests sit down.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#141414] border border-neutral-800 flex items-start gap-3.5">
                <Utensils className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#FFF8E7]">Food Tastings</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Tasting sessions are available for weddings and large parties before the event.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#141414] border border-neutral-800 flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#FFF8E7]">We Travel to Your Venue</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    We cater at event halls, homes, church halls, outdoor marquees, and hotels.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl bg-[#141414] border border-neutral-800 shadow-xl">
              <div className="mb-6">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#FFF8E7] mb-1">
                  Event Inquiry Form
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400">
                  Fill in your event details and click below to send them straight to our WhatsApp.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. David Smith"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#080808] border border-neutral-800 text-[#FFF8E7] placeholder-neutral-600 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Your phone number"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#080808] border border-neutral-800 text-[#FFF8E7] placeholder-neutral-600 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                {/* Event Type & Package */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1.5">
                      Event Type
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#080808] border border-neutral-800 text-[#FFF8E7] focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option>Wedding Reception</option>
                      <option>Birthday Party</option>
                      <option>Corporate Dinner / Lunch</option>
                      <option>Private Home Dinner</option>
                      <option>Outdoor / Marquee Party</option>
                      <option>Anniversary Celebration</option>
                      <option>Other Event</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1.5">
                      Menu Plan
                    </label>
                    <select
                      value={formData.packageTier}
                      onChange={(e) => setFormData({ ...formData, packageTier: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#080808] border border-neutral-800 text-[#FFF8E7] focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option>Royal Classic (Small Parties)</option>
                      <option>Royal Premium (Weddings & Galas)</option>
                      <option>Royal Grand (Full Luxury)</option>
                    </select>
                  </div>
                </div>

                {/* Guest Count Slider */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                      Estimated Guest Count
                    </label>
                    <span className="font-display text-sm font-bold text-[#D4AF37]">
                      {formData.guestCount} Guests
                    </span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="1000"
                    step="10"
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                    className="w-full accent-[#D4AF37] bg-neutral-800 h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
                    <span>20 guests</span>
                    <span>250 guests</span>
                    <span>500+ guests</span>
                  </div>
                </div>

                {/* Date & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1.5">
                      Event Date
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#080808] border border-neutral-800 text-[#FFF8E7] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1.5">
                      Venue / City
                    </label>
                    <input
                      type="text"
                      value={formData.venueLocation}
                      onChange={(e) => setFormData({ ...formData, venueLocation: e.target.value })}
                      placeholder="e.g. London, Lagos, Hall Name"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#080808] border border-neutral-800 text-[#FFF8E7] placeholder-neutral-600 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                {/* Cuisines Choice */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                    Food You Are Interested In (Select any)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {availableCuisines.map((c) => {
                      const selected = formData.selectedCuisines.includes(c);
                      return (
                        <button
                          key={c}
                          type="button"
                          onClick={() => handleCuisineToggle(c)}
                          className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
                            selected
                              ? 'bg-[#D4AF37] text-black font-semibold'
                              : 'bg-[#080808] text-neutral-400 border border-neutral-800 hover:border-neutral-600'
                          }`}
                        >
                          {selected ? '✓ ' : '+ '}
                          {c}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Dietary Notes */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1.5">
                    Dietary Requirements or Notes
                  </label>
                  <textarea
                    rows={2}
                    value={formData.dietaryNotes}
                    onChange={(e) => setFormData({ ...formData, dietaryNotes: e.target.value })}
                    placeholder="e.g. Vegetarian options needed, Halal meat, allergies..."
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#080808] border border-neutral-800 text-[#FFF8E7] placeholder-neutral-600 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#FFF8E7] rounded-xl shadow-md active:scale-98 transition-colors"
                >
                  <Send className="w-4 h-4 stroke-[2.5]" />
                  <span>Send Inquiry to WhatsApp</span>
                </button>

                {isSubmitted && (
                  <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/50 text-emerald-300 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>Opening WhatsApp with your event details...</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-2xl mx-auto pt-4 border-t border-neutral-800">
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl font-bold text-[#FFF8E7] mb-1">
              Common Questions
            </h3>
            <p className="text-xs text-neutral-400">
              Quick answers about our catering service.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-[#141414] border border-neutral-800 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 text-sm font-semibold text-[#FFF8E7] hover:text-[#D4AF37] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#D4AF37] transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
