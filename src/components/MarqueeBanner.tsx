"use client";

import React from "react";
import {
  Sparkles,
  Leaf,
  Activity,
  Heart,
  ShieldCheck,
  Apple,
  Dna,
  SunMedium,
} from "lucide-react";

export default function MarqueeBanner() {
  const tickerItems = [
    { text: "Ayurveda + Integrative Wellness", icon: Leaf },
    { text: "Functional Medicine Approaches", icon: Dna },
    { text: "Nutrition & Metabolic Lifestyle", icon: Apple },
    { text: "Yoga Therapy & Physiotherapy", icon: SunMedium },
    { text: "Naturopathy Detox Support", icon: Activity },
    { text: "Personalized Individual Assessment", icon: ShieldCheck },
    { text: "Dual-Partner Fertility Care", icon: Heart },
    { text: "Doctor-Led Clinical Guidance", icon: Sparkles },
  ];

  return (
    <section className="bg-[#1B4D3E] py-6 sm:py-8 overflow-hidden relative z-30 shadow-xl border-y border-[#C5A880]/30">
      <div className="flex relative z-10 select-none">
        {/* Continuous 2x loop track */}
        <div className="animate-marquee flex items-center">
          {tickerItems.concat(tickerItems).map((item, idx) => {
            const Icon = item.icon;
            return (
              <span
                key={idx}
                className="inline-flex items-center gap-3.5 mx-6 sm:mx-10 text-white font-serif font-medium text-sm sm:text-base tracking-wide whitespace-nowrap"
              >
                <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#E8DCC4] border border-white/10 shrink-0">
                  <Icon className="w-4 h-4 text-[#C5A880]" />
                </span>
                <span>{item.text}</span>
                <span className="ml-6 flex items-center gap-1.5 opacity-60">
                  <span className="w-1.5 h-1.5 bg-[#C5A880] rounded-full"></span>
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full"></span>
                </span>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
