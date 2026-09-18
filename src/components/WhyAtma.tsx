"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Leaf,
  Dna,
  Apple,
  Activity,
  HeartPulse,
  Shield,
  CheckCircle2,
  ChevronRight,
  Stethoscope,
  Microscope,
} from "lucide-react";

export default function WhyAtma() {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: "ayurveda",
      title: "Ayurveda + Integrative Wellness",
      tagline: "Cellular rejuvenation & Garbhadhana Vidhi",
      description:
        "Rooted in classical Ayurvedic preconception preparation (Garbhadhana Vidhi). We balance the Tridoshas, optimize Agni (metabolic fire), and apply Sukra & Artava Dhatu Rasayanas to enhance the biological quality of ovum and sperm.",
      highlights: [
        "Preconception Dosha & Agni balancing",
        "Targeted herbal Rasayana therapy",
        "Natural hormonal alignment without artificial stimulants",
        "Gentle, couple-oriented restorative therapies",
      ],
      icon: Leaf,
      metric: "95%",
      metricLabel: "Dhatu Vitality Response",
      accent: "#2D6A4F",
    },
    {
      id: "functional",
      title: "Functional Medicine Approaches",
      tagline: "Root-cause diagnostics & cellular biochemistry",
      description:
        "We look beneath superficial hormone levels to map gut-barrier integrity, chronic low-grade inflammation, oxidative stress, heavy metal burden, and mitochondrial energetics that directly impact embryo viability.",
      highlights: [
        "In-depth metabolic & hormonal profiling",
        "Gut microbiome & intestinal barrier restoration",
        "Oxidative stress & mitochondrial support",
        "Integrative pain & autoimmune condition management",
      ],
      icon: Dna,
      metric: "98%",
      metricLabel: "Diagnostic Clarity",
      accent: "#1B4D3E",
    },
    {
      id: "nutrition",
      title: "Nutrition & Metabolic Lifestyle",
      tagline: "Precision anti-inflammatory food protocols",
      description:
        "No generic diets. Every meal plan is tailored to individual glycemic responses, insulin sensitivity, and nutrient bioavailability. We nourish egg and sperm cell membranes with rich micronutrients and healthy fats.",
      highlights: [
        "Insulin sensitivity & metabolic reset",
        "Bioavailable fertility-friendly micronutrients",
        "Elimination of endocrine disruptors & toxins",
        "Tailored meal blueprints for both partners",
      ],
      icon: Apple,
      metric: "100%",
      metricLabel: "Custom Tailored Meals",
      accent: "#C5A880",
    },
    {
      id: "yoga",
      title: "Yoga Therapy & Physiotherapy",
      tagline: "Pelvic perfusion & nervous system regulation",
      description:
        "Specialized pelvic floor physiotherapy to maximize microcirculation to reproductive organs, combined with restorative fertility yoga therapies designed to down-regulate sympathetic nervous overdrive.",
      highlights: [
        "Pelvic floor tone & vascularization",
        "Hypothalamic-Pituitary-Ovarian (HPO) calming",
        "Postural alignment & breathwork (Pranayama)",
        "Couple restorative stress modulation",
      ],
      icon: HeartPulse,
      metric: "10x",
      metricLabel: "Stress Down-Regulation",
      accent: "#C87D69",
    },
    {
      id: "naturopathy",
      title: "Naturopathy Support",
      tagline: "Non-invasive detox & systemic harmony",
      description:
        "Utilizing nature's healing elements—therapeutic hydrotherapy, medicinal mud packs, acupuncture, and gentle botanical cleanses to assist the liver, kidneys, and lymphatic channels in eliminating accumulated toxins.",
      highlights: [
        "Liver & lymphatic gentle detox protocols",
        "Acupuncture for pelvic blood flow",
        "Circadian rhythm & restorative sleep alignment",
        "Personalized hydrotherapeutic applications",
      ],
      icon: Activity,
      metric: "21",
      metricLabel: "Days of Guided Care",
      accent: "#2D6A4F",
    },
  ];

  return (
    <section id="why-atma" className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden">
      {/* Decorative subtle background pattern */}
      <div className="absolute inset-0 leaf-pattern-bg opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            Personalized According to Individual Assessment
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#12382D] tracking-tight leading-tight mb-4">
            Why ATMA — <span className="italic font-normal text-[#C5A880]">A More Personal Approach</span> to Fertility Wellness
          </h2>
          <p className="text-base sm:text-lg text-[#5F7369] leading-relaxed">
            A Treatment protocol Crafted with years of Research and studies by the experts in the
            field. Designed for couples preparing for a healthy pregnancy.
          </p>
        </div>

        {/* Bio-Designed Excellence Metric Cards (Gaspetworld Vitality Aura style) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16 max-w-4xl mx-auto">
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#E8DCC4]/60 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 rounded-2xl bg-[#D8F3DC]/60 flex items-center justify-center text-[#1B4D3E] mb-4 group-hover:scale-110 transition-transform">
              <Microscope className="w-6 h-6 text-[#2D6A4F]" />
            </div>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#12382D] mb-1">
              96%
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#C5A880] mb-1">
              Cellular Bio-Optimization
            </p>
            <p className="text-xs text-[#5F7369] leading-relaxed">
              Targeted mitochondrial & reproductive tissue nourishment.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#E8DCC4]/60 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF6F0] flex items-center justify-center text-[#C5A880] mb-4 group-hover:scale-110 transition-transform">
              <Stethoscope className="w-6 h-6 text-[#C5A880]" />
            </div>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#12382D] mb-1">
              100%
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#C5A880] mb-1">
              Individual Assessment
            </p>
            <p className="text-xs text-[#5F7369] leading-relaxed">
              Zero cookie-cutter plans. Custom protocol for both partners.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#E8DCC4]/60 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 rounded-2xl bg-[#FBEEE9] flex items-center justify-center text-[#C87D69] mb-4 group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6 text-[#C87D69]" />
            </div>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#12382D] mb-1">
              25k+
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#C5A880] mb-1">
              Clinical Experience
            </p>
            <p className="text-xs text-[#5F7369] leading-relaxed">
              Backed by decades of global holistic & functional expertise.
            </p>
          </div>
        </div>

        {/* The 5 Integrative Pillars Interactive Showcase */}
        <div className="bg-white rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-12 border border-[#E8DCC4]/70 shadow-[0_20px_50px_rgba(18,56,45,0.06)]">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Pillar Selector Navigation */}
            <div className="lg:col-span-5 space-y-2.5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#5F7369] mb-4">
                The 5 Holistic Dimensions
              </p>
              {pillars.map((p, idx) => {
                const Icon = p.icon;
                const isSelected = activeTab === idx;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 flex items-center justify-between group ${
                      isSelected
                        ? "bg-[#1B4D3E] text-white shadow-lg shadow-[#1B4D3E]/15"
                        : "bg-[#FAF8F5] text-[#12382D] hover:bg-[#F3EDE2]/60"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected ? "bg-white/15 text-[#C5A880]" : "bg-white text-[#1B4D3E] shadow-sm"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-sm sm:text-base leading-tight">
                          {p.title}
                        </h4>
                        <p
                          className={`text-xs mt-0.5 ${
                            isSelected ? "text-white/75" : "text-[#5F7369]"
                          }`}
                        >
                          {p.tagline}
                        </p>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected
                          ? "text-[#C5A880] translate-x-1"
                          : "text-gray-400 group-hover:translate-x-1"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Active Pillar Detail Card */}
            <div className="lg:col-span-7 bg-[#FAF9F6] rounded-3xl p-6 sm:p-10 border border-[#E8DCC4]/50 relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#1B4D3E] text-xs font-semibold border border-gray-100 shadow-sm">
                  <span>Dimension {activeTab + 1} of 5</span>
                </div>
                <div className="text-right">
                  <span className="font-serif text-2xl font-bold text-[#1B4D3E]">
                    {pillars[activeTab].metric}
                  </span>
                  <span className="block text-[10px] uppercase font-bold text-[#C5A880]">
                    {pillars[activeTab].metricLabel}
                  </span>
                </div>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#12382D] mb-3">
                {pillars[activeTab].title}
              </h3>
              <p className="text-sm sm:text-base text-[#5F7369] leading-relaxed mb-6">
                {pillars[activeTab].description}
              </p>

              <div className="space-y-3 pt-4 border-t border-[#E8DCC4]/40">
                <p className="text-xs font-bold uppercase tracking-wider text-[#12382D]">
                  Key Clinical Benefits:
                </p>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {pillars[activeTab].highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2B3B34]">
                      <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
