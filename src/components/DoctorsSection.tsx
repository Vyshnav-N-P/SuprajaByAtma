"use client";

import React, { useState } from "react";
import {
  Award,
  Stethoscope,
  Globe,
  Sparkles,
  CheckCircle2,
  Calendar,
  MessageCircle,
  MapPin,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Febin_PP from "../../public/images/Febin_PP.jpeg";
import Shakkeel_PP from "../../public/images/Shakkeel_PP.jpeg";
interface DoctorsProps {
  onOpenBooking: () => void;
}

export default function DoctorsSection({ onOpenBooking }: DoctorsProps) {
  const [expandedDr, setExpandedDr] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedDr(expandedDr === idx ? null : idx);
  };

  const doctors = [
    {
      name: "Dr. Febin",
      photo: Febin_PP,
      credentials: "BNYS, FINEM",
      title: "Integrative & Functional Medicine Physician, Kochi",
      roles: [
        "Founder – Dr. Naturals Clinic",
        "Co-Founder – Dr. Pulse Spine & Pain Clinic",
        "Chief Medical Advisor – ATMA Group of Hospitals & OP Clinics",
      ],
      certifications: [
        "Certified Ozone Therapist (Ozone Forum of India & Dr. Frank Shallenberger, USA)",
        "Pursuing Functional Medicine",
        "A Class Registered Practitioner Kerala State Medical Council for ISM",
      ],
      experience: "Practicing since 2018",
      focusAreas: [
        "Functional nutrition & metabolic disorders",
        "Gut microbiome & intestinal barrier health",
        "Autoimmune conditions affecting fertility",
        "Integrative pain & hormonal management",
      ],
      fullBio:
        "Dr. Febin brings a rigorous, evidence-informed functional medicine lens to fertility care. Practicing since 2018, he specializes in identifying hidden metabolic roadblocks, insulin resistance, chronic mucosal inflammation, and cellular oxidative stress. As Chief Medical Advisor to ATMA Group of Hospitals, Dr. Febin crafts bio-individual protocols that synergize modern biochemical insights with natural rejuvenation.",
      tag: "Chief Medical Advisor",
      location: "Kochi, Kerala",
      avatarInitials: "DF",
      avatarBg: "from-[#1B4D3E] to-[#2D6A4F]",
    },
    {
      name: "Dr. Shakkeel",
      photo: Shakkeel_PP,
      credentials: "BNYS, CIDESCO",
      title: "NHRA Licensed Naturopath & Global Wellness Visionary",
      roles: [
        "Former Wellness Director: Anantara Maldives, Gili Lankanfushi Maldives, Banyan Tree Maldives",
        "Senior Strategist: Dhawa Ihuru & Ifuru Island Maldives",
        "Global Wellness Advisor: Retreats across India, Bahrain & China",
      ],
      certifications: [
        "NHRA Licensed Naturopathic Physician",
        "CIDESCO International Certified",
        "Expertise in Acupuncture, Yoga Therapy & Lifestyle Transformation",
      ],
      experience: "Over Two Decades | 25,000+ Journeys Guided",
      focusAreas: [
        "Holistic women's wellness & preconception vitality",
        "Metabolic health & weight optimization",
        "Stress management & neuro-endocrine alignment",
        "Acupuncture for reproductive microcirculation",
      ],
      fullBio:
        "An NHRA Licensed Naturopath and wellness visionary, Dr. Shakkeel brings over two decades of experience in holistic healthcare, wellness medicine, yoga therapy, functional nutrition, acupuncture, and lifestyle transformation. His distinguished career spans some of the world's most acclaimed wellness destinations, including Anantara Maldives, Gili Lankanfushi Maldives, Banyan Tree Maldives, Dhawa Ihuru, Ifuru Island Maldives, and leading wellness retreats across India, Bahrain, and China. Having guided more than 25,000 wellness journeys, he is recognized for his expertise in addressing lifestyle disorders, stress management, metabolic health, weight management, women's wellness, and preventive healthcare through an integrated approach combining Ayurveda, naturopathy, nutrition, and mindful living. At ATMA, his global experience and passion for holistic healing further strengthen our commitment to authentic, personalized, and life-changing fertility experiences.",
      tag: "Global Wellness Visionary",
      location: "International & Kerala",
      avatarInitials: "DS",
      avatarBg: "from-[#C5A880] to-[#9E7D53]",
    }
  ];

  return (
    <section id="doctors" className="py-20 sm:py-28 bg-[#FFFDF9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <Stethoscope className="w-3.5 h-3.5 text-[#C5A880]" />
            Doctors + Clinical Conversion
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#12382D] tracking-tight leading-tight mb-4">
            Guided by Your <span className="italic font-normal text-[#C5A880]">ATMA Wellness</span> Care Team
          </h2>
          <p className="text-base sm:text-lg text-[#5F7369] leading-relaxed">
            Meet the senior physicians, functional medicine pioneers, and global wellness leaders
            who personally guide every couple through their 21-day reset.
          </p>
        </div>

        {/* Doctor Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {doctors.map((dr, idx) => {
            const isExpanded = expandedDr === idx;

            return (
              <div
                key={dr.name}
                className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E8DCC4]/70 shadow-[0_15px_40px_rgba(18,56,45,0.06)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Doctor Meta */}
                  <div className="flex items-start gap-4 sm:gap-5 mb-6">
                    {/* Doctor Photo with Verification Badge */}
                    <div className="relative shrink-0">
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shadow-md border-2 border-white shrink-0 bg-[#FAF6F0]">
                        <Image
                          src={dr.photo}
                          alt={dr.name}
                          fill
                          sizes="80px"
                          className="object-cover object-top"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#FAF6F0] border border-[#C5A880] flex items-center justify-center text-[#1B4D3E] shadow-sm z-10">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#2D6A4F]" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#EBF7EE] text-[#1B4D3E]">
                          {dr.tag}
                        </span>
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#C5A880]" />
                          {dr.location}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#12382D]">
                        {dr.name}
                      </h3>
                      <p className="text-xs font-bold text-[#C5A880] tracking-wide mt-0.5">
                        {dr.credentials}
                      </p>
                      <p className="text-xs text-[#5F7369] font-medium mt-1 leading-snug">
                        {dr.title}
                      </p>
                    </div>
                  </div>

                  {/* Key Roles & Institutional Affiliations */}
                  <div className="space-y-1.5 mb-5 pb-5 border-b border-gray-100">
                    {dr.roles.map((role, rIdx) => (
                      <p key={rIdx} className="text-xs text-[#2B3B34] font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] shrink-0"></span>
                        <span>{role}</span>
                      </p>
                    ))}
                  </div>

                  {/* Experience & Certifications Pill */}
                  <div className="bg-[#FAF9F6] p-3.5 rounded-2xl border border-gray-100 mb-5">
                    <p className="text-[10px] uppercase tracking-wider font-bold text-[#5F7369] mb-1">
                      Credentials & Experience
                    </p>
                    <p className="text-xs font-semibold text-[#12382D] mb-1.5">{dr.experience}</p>
                    <div className="space-y-1 text-[11px] text-gray-600">
                      {dr.certifications.slice(0, 2).map((cert, cIdx) => (
                        <p key={cIdx} className="leading-snug">• {cert}</p>
                      ))}
                    </div>
                  </div>

                  {/* Focus Areas */}
                  <div className="mb-5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#12382D] mb-2">
                      Clinical Focus:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {dr.focusAreas.map((f, fIdx) => (
                        <span
                          key={fIdx}
                          className="text-[11px] px-2.5 py-1 rounded-lg bg-[#FAF6F0] text-[#2B3B34] border border-[#E8DCC4]/50"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Bio Section */}
                  {isExpanded && (
                    <div className="pt-4 border-t border-gray-100 mb-5 text-xs text-[#5F7369] leading-relaxed animate-in fade-in duration-300">
                      <p className="bg-[#FAF8F5] p-4 rounded-2xl border border-gray-100">
                        {dr.fullBio}
                      </p>
                    </div>
                  )}
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => toggleExpand(idx)}
                    className="text-xs font-semibold text-[#1B4D3E] hover:text-[#C5A880] flex items-center gap-1 transition-colors"
                  >
                    <span>{isExpanded ? "Show Less" : "Read Full Profile"}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={onOpenBooking}
                    className="px-4 py-2 rounded-full bg-[#1B4D3E] hover:bg-[#12382D] text-white text-xs font-semibold tracking-wide transition-all shadow-sm flex items-center gap-1.5"
                  >
                    <Calendar className="w-3 h-3 text-[#C5A880]" />
                    <span>Consult with {dr.name.split(" ")[1] || dr.name}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Doctor Callout Quote */}
        <div className="max-w-4xl mx-auto text-center bg-[#FAF6F0] rounded-3xl p-8 border border-[#E8DCC4]">
          <p className="font-serif italic text-lg sm:text-xl text-[#12382D]">
            “Fertility is not an isolated hormonal metric—it is the biological expression of overall
            vitality, cellular harmony, and emotional resilience shared between two partners.”
          </p>
          <span className="block text-xs font-bold uppercase tracking-widest text-[#C5A880] mt-3">
            — ATMA Senior Medical Board
          </span>
        </div>
      </div>
    </section>
  );
}
