import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { MenuPlansSection } from './components/MenuPlansSection';
import { CuisinesSection } from './components/CuisinesSection';
import { SignatureDishesSection } from './components/SignatureDishesSection';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingInquirySection } from './components/BookingInquirySection';
import { Footer } from './components/Footer';
import { WHATSAPP_BASE_URL } from './data/cateringData';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#FFF8E7] font-sans selection:bg-[#D4AF37]/30 selection:text-[#FFF8E7] relative">
      {/* Sticky Luxury Navbar */}
      <Navbar
        onOpenBookingModal={() => {
          const contactElem = document.getElementById('contact');
          contactElem?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <main>
        {/* Full-screen Dramatic Hero Section */}
        <Hero />

        {/* About Royal Cooks & Animated Statistics */}
        <AboutSection />

        {/* Menu Plans (Royal Classic, Royal Premium, Royal Grand) */}
        <MenuPlansSection />

        {/* Intercontinental Cuisines Showcase (8 categories) */}
        <CuisinesSection />

        {/* Signature Dishes Showcase */}
        <SignatureDishesSection />

        {/* Catering Services Grid */}
        <ServicesSection />

        {/* Banquet & Plating Gallery with Lightbox */}
        <GallerySection />

        {/* Patron Reviews & Social Proof */}
        <TestimonialsSection />

        {/* Interactive Event Inquiry / Contact Section & FAQs */}
        <BookingInquirySection />
      </main>

      {/* Luxury Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button (Pinned to Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        <a
          href={WHATSAPP_BASE_URL}
          target="_blank"
          rel="noopener noreferrer"
          title="Chat with Royal Cooks on WhatsApp"
          className="group relative flex items-center gap-2 px-4 py-3 bg-[#080808] hover:bg-[#151515] border border-[#D4AF37] text-[#FFF8E7] rounded-full shadow-lg transition-colors active:scale-95"
        >
          <div className="relative">
            <span className="block w-2.5 h-2.5 bg-[#25D366] rounded-full" />
          </div>
          <MessageCircle className="w-5 h-5 text-[#D4AF37]" />
          <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline-block">
            Hire Us
          </span>
        </a>
      </div>
    </div>
  );
}
