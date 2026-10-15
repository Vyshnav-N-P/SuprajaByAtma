"use client";

import React from "react";
import Image from "next/image";
import {
  Sparkles,
  ExternalLink,
  Award,
  Globe,
  Quote,
  Calendar,
} from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

interface FounderProps {
  onOpenBooking?: () => void;
}

export interface FounderProfileData {
  name: string;
  credentials: string;
  roles: string[];
  photo: string;
  alt: string;
  tagline: string;
  quote: string;
  websiteUrl: string;
  websiteCta: string;
  instagramUrl?: string;
  paragraphs: string[];
  pillars: {
    title: string;
    description: string;
  }[];
}

export const FOUNDER_DATA: FounderProfileData = {
  name: "Dr. Abhijith Karma",
  credentials: "BNYS",
  roles: [
    "Founder & Managing Director — ATMA Group of Hospitals & Wellness",
    "Pioneer of Conscious Pre-Conception Therapy in Kerala",
    "Advocate for Integrative Naturopathy & Reproductive Vitality",
  ],
  photo: "/images/abhijith_karma.PNG",
  alt: "Dr. Abhijith Karma — Founder & Managing Director, ATMA Group of Hospitals",
  tagline: "Visionary Leadership in Holistic Healthcare",
  quote:
    "“The future of your child's health is not a matter of chance; it is a conscious, sacred choice. When we restore cellular harmony in both parents before conception, we transform generations.”",
  websiteUrl: "https://dr-abhijith-karma-portfolio.vercel.app/",
  websiteCta: "Explore His Official Website",
  instagramUrl: "https://www.instagram.com/dr_abhi_ijth/",
  paragraphs: [
    "Dr. Abhijith Karma founded the ATMA Group of Hospitals with a singular, transformative conviction: that true medicine must heal the root rather than merely manage symptoms. Witnessing countless modern couples caught in cycles of emotional fatigue, invasive interventions, and disconnected clinical advice, he dedicated his life to restoring natural biological equilibrium before pregnancy begins.",
    "A distinguished BNYS physician, Dr. Karma pioneered ATMA's couple-centric 21-day preconception methodology. By bridging timeless classical Ayurveda, therapeutic Panchakarma, functional nutrition, and lifestyle transformation, his clinical protocols treat prospective parents as one unified biological system.",
    "Under his vision, ATMA has expanded across premier sanctuaries in Kerala — including the inpatient hospital retreat in Kottayam, Sreemoolavasam coastal healing center, and the misty highlands of Wayanad — guiding more than 25,000 individuals toward vibrant, conscious health.",
  ],
  pillars: [
    {
      title: "Conscious Preconception",
      description: "Treating both partners together to optimize cellular DNA and reproductive terrain.",
    },
    {
      title: "Doctor-Led Sanctuaries",
      description: "Supervised inpatient retreats across Kottayam, Sreemoolavasam, and Wayanad.",
    },
    {
      title: "Generational Vitality",
      description: "Empowering families with sustainable lifestyle medicine that lasts for life.",
    },
  ],
};

export default function FounderSection({ onOpenBooking }: FounderProps) {
  return (
    <section id="founder" className="py-20 sm:py-28 bg-[#FFFDF9] relative overflow-hidden border-t border-[#E8DCC4]/50">
      {/* Decorative ambient background accents */}
      <div className="absolute top-1/3 -right-24 w-80 h-80 rounded-full bg-[#C5A880]/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -left-24 w-80 h-80 rounded-full bg-[#1B4D3E]/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Pill Badge */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            Founder & Visionary
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#12382D] tracking-tight leading-tight">
            A Movement Rooted in <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#C5A880]">Compassion, Science</span> & Heritage
          </h2>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left Column: Portrait Showcase */}
          <div className="lg:col-span-5 relative">
            {/* Ambient Portrait Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1B4D3E]/20 via-[#C5A880]/20 to-transparent rounded-[2.5rem] blur-2xl transform scale-95 pointer-events-none"></div>

            <div className="relative z-10 bg-white p-3 sm:p-4 rounded-[2.5rem] border-2 border-[#E8DCC4] shadow-[0_20px_50px_rgba(18,56,45,0.08)]">
              {/* Photo Frame */}
              <div className="relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden bg-[#FAF6F0]">
                <Image
                  src={FOUNDER_DATA.photo}
                  alt={FOUNDER_DATA.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12382D]/70 via-transparent to-transparent"></div>

                {/* Founder Name on Image overlay */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#1B4D3E]/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-[#E8DCC4] mb-1.5 border border-[#C5A880]/40">
                    Founder Profile
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white drop-shadow-sm">
                    {FOUNDER_DATA.name}
                  </h3>
                  <p className="text-xs text-[#E8DCC4] font-medium tracking-wide">
                    {FOUNDER_DATA.credentials} • ATMA Group of Hospitals
                  </p>
                </div>
              </div>

              {/* Floating Leadership Badge */}
              <div className="mt-4 p-4 rounded-2xl bg-[#FAF9F6] border border-[#E8DCC4]/60 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#1B4D3E] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <Award className="w-5 h-5 text-[#C5A880]" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#5F7369] uppercase tracking-wider">
                    Leadership
                  </p>
                  <p className="text-xs font-bold text-[#12382D]">
                    Founder & Managing Director
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Biography & Interactive Links */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Quote Callout */}
            <div className="relative p-6 sm:p-7 rounded-3xl bg-[#FAF6F0] border border-[#E8DCC4] mb-8 shadow-sm">
              <Quote className="w-8 h-8 text-[#C5A880]/60 mb-3" />
              <p className="font-serif italic text-base sm:text-lg text-[#12382D] leading-relaxed">
                {FOUNDER_DATA.quote}
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2D6A4F]"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C5A880]">
                  — {FOUNDER_DATA.name}
                </span>
              </div>
            </div>

            {/* Editorial Biography Paragraphs */}
            <div className="space-y-4 text-xs sm:text-sm text-[#2B3B34]/85 leading-relaxed mb-8">
              {FOUNDER_DATA.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Three Foundational Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 pt-6 border-t border-gray-100">
              {FOUNDER_DATA.pillars.map((pillar, pIdx) => (
                <div key={pIdx} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                  <p className="font-serif text-sm font-bold text-[#1B4D3E] mb-1">
                    {pillar.title}
                  </p>
                  <p className="text-[11px] text-[#5F7369] leading-snug">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Action CTA Buttons (modeled on premium editorial standards) */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Primary Personal Website Hyperlink */}
              <a
                href={FOUNDER_DATA.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1B4D3E] hover:bg-[#12382D] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg shadow-[#1B4D3E]/20 group"
              >
                <Globe className="w-4 h-4 text-[#C5A880]" />
                <span>{FOUNDER_DATA.websiteCta}</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#C5A880] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Secondary Social/Instagram CTA */}
              {FOUNDER_DATA.instagramUrl && (
                <a
                  href={FOUNDER_DATA.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#FAF6F0] text-[#12382D] border border-[#E8DCC4] text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow-md group"
                >
                  <InstagramIcon className="w-4 h-4 text-[#C5A880] transition-transform group-hover:scale-110" />
                  <span>Connect with Dr. Karma</span>
                </a>
              )}

              {/* Direct Booking CTA */}
              {onOpenBooking && (
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FAF6F0] hover:bg-[#F3EDE2] text-[#12382D] border border-[#C5A880] text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow-md cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#C5A880]" />
                  <span>Book Consultation</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
