"use client";

import React from "react";
import { Sparkles, Phone, Mail, MapPin, MessageCircle, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0D281E] text-white pt-16 sm:pt-20 pb-12 relative overflow-hidden border-t border-[#C5A880]/30">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1B4D3E]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#1B4D3E] flex items-center justify-center text-white border border-[#C5A880]/40">
                <Sparkles className="w-5 h-5 text-[#C5A880]" />
              </div>
              <div>
                <span className="font-serif font-bold text-2xl tracking-tight text-white block leading-none">
                  ATMA
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
                  Fertility Wellness
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300/80 leading-relaxed mb-6 max-w-sm">
              Personalized fertility wellness support for couples preparing for a healthy pregnancy.
              Integrating classical Ayurveda, modern functional medicine, nutrition, yoga, and
              naturopathy.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/918136894093"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] text-xs font-semibold border border-[#25D366]/30 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Care Desk</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A880] mb-4">
              Programme
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
              <li>
                <a href="#overview" className="hover:text-white transition-colors">
                  Fertility Reset Cover
                </a>
              </li>
              <li>
                <a href="#why-atma" className="hover:text-white transition-colors">
                  Why ATMA
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-white transition-colors">
                  The 21-Day Journey
                </a>
              </li>
              <li>
                <a href="#protocol" className="hover:text-white transition-colors">
                  Integrative Protocol
                </a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-white transition-colors">
                  Care Team & Doctors
                </a>
              </li>
            </ul>
          </div>

          {/* Clinic Centres & Presence */}
          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A880] mb-4">
              Clinical Presence
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Kochi Centre</span>
                  <p className="text-xs text-gray-400">Ernakulam & Kakkanad, Kerala</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Kottayam Centre</span>
                  <p className="text-xs text-gray-400">OP Clinics & Wellness Centre</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Global Telehealth</span>
                  <p className="text-xs text-gray-400">Consultations across India & GCC</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A880] mb-4">
              Get in Touch
            </p>
            <div className="space-y-3 text-xs sm:text-sm text-gray-300">
              <a
                href="tel:+918136894093"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A880]" />
                <span>+91 81368 94093</span>
              </a>
              <a
                href="mailto:care@atmawellness.com"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#C5A880]" />
                <span>care@atmawellness.com</span>
              </a>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-[11px] font-medium text-gray-300 leading-snug">
                “No one-size-fits-all promises. A plan built around you.”
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} ATMA Group of Hospitals & Wellness. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="/website-reveal"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-[#C5A880] transition-colors"
            >
              <Sparkles className="w-3 h-3" />
              <span>Launch Reveal Mode</span>
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-[#C5A880] hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
