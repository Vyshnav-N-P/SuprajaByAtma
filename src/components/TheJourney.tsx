"use client";

import React, { useState } from "react";
import {
  Calendar,
  Sparkles,
  CheckCircle,
  Clock,
  ArrowRight,
  ShieldCheck,
  Zap,
  Heart,
  Droplets,
  Activity,
  Flame,
} from "lucide-react";

interface JourneyProps {
  onOpenBooking: () => void;
}

export default function TheJourney({ onOpenBooking }: JourneyProps) {
  const [selectedPhase, setSelectedPhase] = useState(0);

  const phases = [
    {
      phaseNumber: "01",
      days: "Days 1–7",
      title: "Assessment & Detox",
      tag: "Foundational Cleansing",
      description:
        "We uncover root cellular stressors, evaluate metabolic markers, and initiate gentle detoxification channels. The goal is preparing clean biological soil for conception.",
      actions: [
        "Comprehensive health & fertility history mapping for both partners",
        "Functional diagnostic analysis: hormonal rhythm, gut health & inflammation",
        "Ayurvedic Koshta (digestive tract) clearing & gentle metabolic reset",
        "Anti-inflammatory elimination nutrition plan with warm botanical teas",
      ],
      outcome: "Elimination of cellular toxic load & enhanced metabolic receptivity.",
      bgBadge: "bg-[#EBF7EE]",
      iconColor: "text-[#2D6A4F]",
      icon: Droplets,
    },
    {
      phaseNumber: "02",
      days: "Days 8–14",
      title: "Support & Rejuvenate",
      tag: "Cellular Nourishment",
      description:
        "With detoxification channels active, we infuse targeted Rasayanas (Ayurvedic cellular restoratives) and mitochondrial nutrition to elevate egg and sperm vitality.",
      actions: [
        "Administration of partner-specific Sukra & Artava Rasayana compounds",
        "Mitochondrial nutrient protocol: CoQ10, essential fatty acids & zinc synergy",
        "Targeted pelvic physiotherapy sessions to promote microcirculation",
        "Restorative yoga & circadian melatonin-cortisol rhythm realignment",
      ],
      outcome: "Optimized gamete mitochondrial energy & enhanced pelvic blood flow.",
      bgBadge: "bg-[#FAF6F0]",
      iconColor: "text-[#C5A880]",
      icon: Flame,
    },
    {
      phaseNumber: "03",
      days: "Days 15–21",
      title: "Restore & Integrate",
      tag: "Endocrine Harmony",
      description:
        "Final integration phase stabilizing endocrine balance, strengthening the uterine environment, and building a sustainable couple lifestyle roadmap.",
      actions: [
        "Hormonal synchrony evaluation & neuro-endocrine calming techniques",
        "Uterine tone optimization & implantation environment readiness",
        "Long-term post-reset preconception roadmap (3 to 6-month timeline)",
        "Final review consultation with ATMA Chief Medical Advisors",
      ],
      outcome: "Harmonized hormonal baseline & a clear, personalized path to pregnancy.",
      bgBadge: "bg-[#FBEEE9]",
      iconColor: "text-[#C87D69]",
      icon: Heart,
    },
  ];

  return (
    <section id="journey" className="py-20 sm:py-28 bg-[#FFFDF9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <Clock className="w-3.5 h-3.5 text-[#2D6A4F]" />
            Three Phases. One Personalized Path.
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#12382D] tracking-tight leading-tight mb-4">
            The <span className="italic font-normal text-[#C5A880]">21-Day</span> Journey
          </h2>
          <p className="text-base sm:text-lg text-[#5F7369] leading-relaxed">
            Three phases. One personalized path toward better whole-body wellbeing and fertility
            readiness. Crafted around your specific biological assessment.
          </p>
        </div>

        {/* Gaspetworld-style 1-2-3 Progress Timeline */}
        <div className="grid lg:grid-cols-3 gap-8 relative max-w-6xl mx-auto mb-16">
          {phases.map((p, idx) => {
            const Icon = p.icon;
            const isCurrent = selectedPhase === idx;

            return (
              <div
                key={p.phaseNumber}
                onClick={() => setSelectedPhase(idx)}
                className={`cursor-pointer rounded-3xl p-7 sm:p-8 transition-all duration-300 relative flex flex-col justify-between border ${
                  isCurrent
                    ? "bg-white shadow-[0_20px_50px_rgba(18,56,45,0.1)] border-[#1B4D3E]/40 scale-[1.02]"
                    : "bg-[#FAF8F5]/80 hover:bg-white border-gray-200/70 hover:shadow-md"
                }`}
              >
                <div>
                  {/* Top Bar with Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#12382D] text-white flex items-center justify-center font-serif text-lg font-bold shadow-md">
                        {p.phaseNumber}
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center border border-gray-100">
                        <Icon className={`w-5 h-5 ${p.iconColor}`} />
                      </div>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1B4D3E] px-3 py-1 rounded-full bg-[#EBF7EE]">
                      {p.days}
                    </span>
                  </div>

                  {/* Title and Tag */}
                  <div className="mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#C5A880] block mb-1">
                      {p.tag}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#12382D]">
                      {p.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#5F7369] leading-relaxed mb-6">
                    {p.description}
                  </p>

                  {/* Action Steps */}
                  <div className="space-y-2.5 pt-4 border-t border-gray-100 mb-6">
                    {p.actions.map((act, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2.5 text-xs text-[#2B3B34]">
                        <CheckCircle className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcome Pill */}
                <div className="mt-auto pt-4 border-t border-dashed border-gray-200">
                  <div className="bg-[#FAF9F6] p-3 rounded-2xl border border-gray-100">
                    <p className="text-[10px] uppercase font-bold text-[#5F7369] tracking-wider mb-0.5">
                      Phase Transformation:
                    </p>
                    <p className="text-xs font-semibold text-[#12382D]">{p.outcome}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Phase Bottom Summary Banner with CTA */}
        <div className="bg-gradient-to-r from-[#1B4D3E] to-[#12382D] rounded-[2.5rem] p-8 sm:p-12 text-white max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 rounded-l-full pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880]">
                21 Days Can Change Your Fertility Trajectory
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-1 text-white">
                Ready to map your couple assessment?
              </h3>
              <p className="text-xs sm:text-sm text-white/80 mt-1.5 max-w-xl">
                Our care team reviews your medical history and prepares your individual 21-day
                roadmap before starting.
              </p>
            </div>
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-full bg-[#C5A880] hover:bg-[#D4AF37] text-[#12382D] font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              Reserve Your Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
