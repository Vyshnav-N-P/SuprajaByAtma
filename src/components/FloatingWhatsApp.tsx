"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip on hover */}
      <div className="hidden sm:block mr-3 px-3.5 py-1.5 rounded-full bg-white text-[#12382D] text-xs font-semibold shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Chat with Fertility Specialist
      </div>

      {/* Pulsing Floating Button */}
      <a
        href="https://wa.me/916282515231?text=Hi%20ATMA!%20I%20would%20like%20to%20know%20more%20about%20The%20Fertility%20Reset%2021-Day%20Programme."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Care Desk"
        className="relative bg-[#25D366] hover:bg-[#1ebd5b] text-white p-4 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 flex items-center gap-2.5 group hover:scale-105 ring-4 ring-[#25D366]/20 animate-pulse-ring"
      >
        <MessageCircle className="w-6 h-6 text-white" />
        <span className="hidden sm:inline font-bold text-sm tracking-tight">WhatsApp Us</span>
      </a>
    </div>
  );
}
