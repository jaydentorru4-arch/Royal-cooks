import React from 'react';
import { MessageSquare, Phone, ArrowUpRight } from 'lucide-react';
import { RoyalCooksLogo } from './RoyalCooksLogo';
import {
  WHATSAPP_BASE_URL,
  PHONE_NUMBER_DISPLAY,
  PHONE_NUMBER_TEL,
  AUTHOR_PROJECTS,
  getWhatsAppLink,
} from '../data/cateringData';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#050505] text-[#FFF8E7] border-t border-neutral-800 pt-16 pb-28 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-14">
          {/* Col 1 & 2: Brand Lockup & Simple Bio */}
          <div className="lg:col-span-2 space-y-4">
            <RoyalCooksLogo size="md" />
            <p className="font-serif-lux italic text-lg text-[#D4AF37]">
              “Where Every Plate Tells a Story.”
            </p>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              Royal Cooks provides reliable, delicious catering for weddings, birthdays, and events. We cook fresh African, European, Asian, and American dishes your guests will love.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#FFF8E7] transition-colors shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={PHONE_NUMBER_TEL}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#D4AF37] hover:text-black bg-[#141414] hover:bg-[#D4AF37] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{PHONE_NUMBER_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#D4AF37] mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a href="#home" className="hover:text-[#D4AF37] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#D4AF37] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#menus" className="hover:text-[#D4AF37] transition-colors">
                  Menu Plans
                </a>
              </li>
              <li>
                <a href="#cuisines" className="hover:text-[#D4AF37] transition-colors">
                  World Cuisines
                </a>
              </li>
              <li>
                <a href="#dishes" className="hover:text-[#D4AF37] transition-colors">
                  Popular Dishes
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#D4AF37] transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D4AF37] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Cuisines */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#D4AF37] mb-3">
              Cuisines We Cook
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>Nigerian Party Jollof & Suya</li>
              <li>West African Dishes & Waakye</li>
              <li>Asian Noodles & Stir-Fries</li>
              <li>Middle Eastern Grills & Kebabs</li>
              <li>Spanish Seafood Paella</li>
              <li>Italian Pastas & Meat Dishes</li>
              <li>American Smoked BBQ & Mac</li>
            </ul>
          </div>

          {/* Col 5: Direct Contact */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#D4AF37] mb-3">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <span className="text-neutral-500 block uppercase tracking-wider text-[10px]">Call or WhatsApp:</span>
                <a
                  href={PHONE_NUMBER_TEL}
                  className="text-[#D4AF37] hover:underline font-semibold tracking-wide text-sm block mt-0.5"
                >
                  {PHONE_NUMBER_DISPLAY}
                </a>
              </li>
              <li>
                <span className="text-neutral-500 block uppercase tracking-wider text-[10px]">Availability:</span>
                <span className="text-neutral-300">7 Days a Week for Inquiries</span>
              </li>
              <li>
                <span className="text-neutral-500 block uppercase tracking-wider text-[10px]">Reviews:</span>
                <a
                  href={getWhatsAppLink("Hello Royal Cooks! I would like to leave a review for your catering service:")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4AF37] hover:underline"
                >
                  Submit Client Review
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Specific Project Hyperlinks, & Author Attribution */}
        <div className="pt-6 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Royal Cooks. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pr-0 sm:pr-28 md:pr-36">
            <a
              href={getWhatsAppLink("Hello Royal Cooks! I would like to leave a review for your catering service:")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-[#D4AF37] transition-colors"
            >
              Leave a Review
            </a>
            <span className="text-neutral-700">·</span>
            {AUTHOR_PROJECTS.map((proj) => (
              <React.Fragment key={proj.name}>
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#D4AF37] hover:underline font-medium transition-colors"
                >
                  <span>{proj.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-neutral-700">·</span>
              </React.Fragment>
            ))}
            <span className="text-neutral-400">
              Author: <span className="text-[#D4AF37] font-semibold">Nel-Jayden</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
