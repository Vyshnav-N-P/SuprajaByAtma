"use client";

import React from "react";
import Image from "next/image";
import {
  Video,
  Play,
  ExternalLink,
  ArrowRight,
  User,
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

export interface InterviewItem {
  id: string;
  title: string;
  series: string;
  speaker: string;
  duration?: string;
  thumbnail: string;
  instagramUrl: string;
  tag: string;
  summary: string;
}

export const ATMA_INTERVIEWS: InterviewItem[] = [
  {
    id: "interview-1",
    title: "Planning for Parenthood: Why Pre-Conception Therapy Matters",
    series: "Portrayals by Gaddafi",
    speaker: "Dr. Abhijith Karma",
    duration: "Reel Highlight",
    thumbnail: "/images/reel_1.jpg",
    instagramUrl: "https://www.instagram.com/reel/DeWARz9yQP5/?srtk=MXQ2b2xtcGxyazRmeg==",
    tag: "Pre-Conception Therapy",
    summary:
      "What is pre-conception therapy, and why is it essential for couples preparing for parenthood? Dr. Abhijith Karma explains conscious preparation and holistic fertility readiness.",
  },
  {
    id: "interview-2",
    title: "The Future Is a Choice: Collaboration Over Competition",
    series: "Supraja by ATMA",
    speaker: "Dr. Abhijith Karma",
    duration: "Reel Dialogue",
    thumbnail: "/images/reel_2.jpg",
    instagramUrl: "https://www.instagram.com/reel/DeUda8Ezo-B/?psln=MWdoeXYyM2swMHBrYg==",
    tag: "Conscious Care",
    summary:
      "2026 is the era for collaboration in medicine. Together, creating healthier beginnings for future generations through structured 21-day couple preconception support.",
  },
  {
    id: "interview-3",
    title: "Infertility Beyond Clinical Labels: A Whole-Body Perspective",
    series: "Portrayals by Gaddafi",
    speaker: "Dr. Abhijith Karma",
    duration: "Reel Highlight",
    thumbnail: "/images/reel_3.jpg",
    instagramUrl: "https://www.instagram.com/reel/DeOECkNyNBz/?cplk=MXN5d3dtanlvZ3FpbQ==",
    tag: "Root Cause Wellness",
    summary:
      "Infertility is more than a single hormonal metric. Dr. Abhijith Karma explores underlying metabolic harmony, emotional stress, and holistic preconception health.",
  },
  {
    id: "interview-4",
    title: "What Is Supraja by ATMA? 21 Days, One Purpose",
    series: "Supraja by ATMA",
    speaker: "Dr. Abhijith Karma",
    duration: "Reel Feature",
    thumbnail: "/images/reel_4.jpg",
    instagramUrl: "https://www.instagram.com/reel/DeMvWsATujf/?srtk=MTR2dGx1MHR2c2JuNQ==",
    tag: "21-Day Programme",
    summary:
      "An introduction to Supraja by ATMA: a personalized pre-conception therapy programme designed to prepare both partners for healthy parenthood.",
  },
];

export default function InterviewsSection() {
  return (
    <section id="interviews" className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden border-t border-[#E8DCC4]/50">
      {/* Decorative background blurs */}
      <div className="absolute top-1/4 -right-28 w-96 h-96 rounded-full bg-[#1B4D3E]/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -left-28 w-96 h-96 rounded-full bg-[#C5A880]/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <Video className="w-3.5 h-3.5 text-[#C5A880]" />
            Stories, Insights & Conversations
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#12382D] tracking-tight leading-tight mb-4">
            ATMA in <span className="italic font-normal text-[#C5A880]">Conversation</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5F7369] leading-relaxed">
            Listen to founder Dr. Abhijith Karma unpack the clinical vision, reproductive science,
            and conscious parenthood philosophy behind the 21-Day Fertility Reset.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 mb-14">
          {ATMA_INTERVIEWS.map((interview) => (
            <div
              key={interview.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E8DCC4]/80 shadow-[0_10px_30px_rgba(18,56,45,0.04)] hover:shadow-xl hover:border-[#C5A880] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail Frame */}
                <div className="relative w-full aspect-[4/3] bg-[#FAF6F0] overflow-hidden">
                  <Image
                    src={interview.thumbnail}
                    alt={interview.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-white">
                      <InstagramIcon className="w-3 h-3 text-[#E1306C]" />
                      <span>Reel</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#1B4D3E]/90 backdrop-blur-md text-[10px] font-semibold text-[#E8DCC4] border border-[#C5A880]/30">
                      {interview.tag}
                    </span>
                  </div>

                  {/* Centered Play Button Overlay */}
                  <a
                    href={interview.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center transition-opacity"
                    aria-label={`Watch ${interview.title} on Instagram`}
                  >
                    <div className="w-12 h-12 rounded-full bg-white/90 group-hover:bg-white text-[#1B4D3E] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Play className="w-5 h-5 text-[#1B4D3E] fill-[#1B4D3E] ml-0.5" />
                    </div>
                  </a>

                  {/* Speaker Pill inside Thumbnail */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] pointer-events-none">
                    <span className="font-semibold text-white/90 flex items-center gap-1 drop-shadow-sm">
                      <User className="w-3 h-3 text-[#C5A880]" />
                      {interview.speaker}
                    </span>
                    <span className="text-white/70 text-[10px]">
                      {interview.series}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 sm:p-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A880] block mb-1.5">
                    {interview.series}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#12382D] leading-snug mb-3 group-hover:text-[#1B4D3E] transition-colors">
                    {interview.title}
                  </h3>
                  <p className="text-xs text-[#5F7369] leading-relaxed line-clamp-3">
                    {interview.summary}
                  </p>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-5 sm:p-6 pt-0 border-t border-gray-50">
                <a
                  href={interview.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-full bg-[#FAF6F0] hover:bg-[#1B4D3E] text-[#12382D] hover:text-white border border-[#E8DCC4] text-xs font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[#E1306C] group-hover/btn:text-white transition-colors" />
                  <span>Watch Interview</span>
                  <ExternalLink className="w-3 h-3 text-[#C5A880] group-hover/btn:text-white transition-transform group-hover/btn:translate-x-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Channel Banner Callout */}
        <div className="text-center max-w-xl mx-auto">
          <p className="text-xs text-[#5F7369] mb-3">
            Follow ATMA on Instagram for regular doctor discussions, clinical fertility Q&As, and wellness insights.
          </p>
          <a
            href="https://www.instagram.com/supraja.by.atma/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1B4D3E] hover:text-[#C5A880] transition-colors"
          >
            <InstagramIcon className="w-4 h-4 text-[#E1306C]" />
            <span>Follow @supraja.by.atma & @portrayals_by_gaddafi</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
