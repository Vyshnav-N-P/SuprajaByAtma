"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Calendar, Phone, MessageCircle, Menu, X, HeartHandshake } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Why ATMA", href: "#why-atma" },
    { name: "21-Day Journey", href: "#journey" },
    { name: "The Protocol", href: "#protocol" },
    { name: "Medical Team", href: "#doctors" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-4 sm:top-6 left-0 right-0 mx-auto z-50 w-[calc(100%-1.5rem)] max-w-5xl transition-all duration-300 ${
        isScrolled ? "scale-[0.99] drop-shadow-md" : ""
      }`}
    >
      <div className="glass-pill rounded-full px-5 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between shadow-[0_12px_36px_rgba(18,56,45,0.09)] border border-white/80 transition-all">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1B4D3E] to-[#2D6A4F] flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
            <Sparkles className="w-4 h-4 text-[#E8DCC4]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl sm:text-2xl text-[#12382D] tracking-tight leading-none">
              ATMA
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#C5A880] font-semibold leading-none mt-1">
              Fertility Wellness
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[14px] font-medium text-[#2B3B34]/80 hover:text-[#12382D] transition-colors relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#C5A880] rounded-full transition-all duration-300 group-hover:w-4"></span>
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://wa.me/918136894093?text=Hello%20ATMA%20Wellness%2C%20I%20would%20like%20to%20know%20more%20about%20The%20Fertility%20Reset%2021-Day%20Programme."
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-[#FAF6F0] hover:bg-[#F3EDE2] text-[#2D6A4F] border border-[#E8DCC4] transition-colors"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
          </a>

          <button
            onClick={onOpenBooking}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1B4D3E] hover:bg-[#12382D] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md shadow-[#1B4D3E]/20 hover:shadow-lg hover:shadow-[#1B4D3E]/30 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Book Consultation</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenBooking}
            className="px-3 py-1.5 rounded-full bg-[#1B4D3E] text-white text-xs font-medium"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 rounded-full bg-[#FAF6F0] flex items-center justify-center text-[#12382D] border border-gray-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden mt-2 p-5 bg-white/95 backdrop-blur-xl rounded-3xl border border-white/80 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-[#2B3B34] hover:bg-[#FAF6F0] rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5">
              <a
                href="https://wa.me/918136894093?text=Hello%20ATMA%20Wellness%2C%20I%20would%20like%20to%20know%20more%20about%20The%20Fertility%20Reset%2021-Day%20Programme."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#25D366]/10 text-[#128C7E] font-medium text-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Specialist</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-[#1B4D3E] text-white font-semibold text-sm shadow-md"
              >
                Book 21-Day Assessment
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
