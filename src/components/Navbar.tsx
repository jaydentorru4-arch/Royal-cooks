import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { RoyalCooksLogo } from './RoyalCooksLogo';
import { WHATSAPP_BASE_URL } from '../data/cateringData';

interface NavbarProps {
  onOpenBookingModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Menus', href: '#menus' },
    { label: 'Cuisines', href: '#cuisines' },
    { label: 'Services', href: '#services' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#080808]/90 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-[0_4px_24px_rgba(0,0,0,0.7)]'
          : 'py-5 bg-gradient-to-b from-[#080808]/90 via-[#080808]/40 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Royal Cooks Logo Brand Zone */}
          <div className="flex items-center">
            <a href="#home" className="group flex items-center focus:outline-none" aria-label="Royal Cooks Home">
              <RoyalCooksLogo size={isScrolled ? 'sm' : 'md'} />
            </a>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-neutral-300 hover:text-[#D4AF37] transition-colors relative py-1 text-[13px] uppercase tracking-wider font-medium hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action (Hire Us Button) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={WHATSAPP_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-widest uppercase text-black bg-[#D4AF37] hover:bg-[#FFF8E7] rounded-md transition-colors shadow-md active:scale-95 whitespace-nowrap"
            >
              <span>Hire Us</span>
              <ArrowUpRight className="w-4 h-4 text-black stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={WHATSAPP_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 text-[11px] font-bold tracking-wider uppercase text-black bg-[#D4AF37] rounded transition-transform active:scale-95"
            >
              Hire Us
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-[#D4AF37] focus:outline-none transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#D4AF37]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080808]/98 border-b border-[#D4AF37]/30 px-6 py-6 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium tracking-wide text-neutral-200 hover:text-[#D4AF37] py-2 border-b border-neutral-800/80 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2">
              <a
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold tracking-widest uppercase text-black bg-[#D4AF37] rounded-md shadow-md"
              >
                <span>Hire Us on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
