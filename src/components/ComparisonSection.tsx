"use client";

import React from "react";
import { Check, X, Sparkles, ShieldCheck } from "lucide-react";

export default function ComparisonSection() {
  const comparisonItems = [
    {
      parameter: "Focus of Care",
      conventional: "Predominantly female-focused; male partner often assessed minimally or late",
      atma: "Holistic couple-centric care: simultaneous cellular optimization for ovum & sperm",
    },
    {
      parameter: "Diagnostic Approach",
      conventional: "Superficial basic hormone panels; often labeled 'unexplained infertility'",
      atma: "Deep functional mapping: gut-barrier integrity, chronic inflammation, cellular oxidative stress",
    },
    {
      parameter: "Treatment Modality",
      conventional: "Standard synthetic hormones, aggressive medication, or rushed invasive procedures",
      atma: "Evidence-based Ayurveda (Garbhadhana Vidhi) + Functional Medicine + Naturopathic therapies",
    },
    {
      parameter: "Nutrition Strategy",
      conventional: "Generic PDF diet sheets or vague 'eat healthy' advice without biological personalization",
      atma: "Tailored metabolic blueprint: anti-inflammatory, mitochondrial-dense, endocrine-stabilizing foods",
    },
    {
      parameter: "Stress & Nervous System",
      conventional: "Told 'just don't stress' with no dedicated clinical somatic tools or therapy",
      atma: "Targeted pelvic physiotherapy, nervous system down-regulation & restorative fertility yoga",
    },
    {
      parameter: "Physician Engagement",
      conventional: "Hurried 5-minute consultations; fragmented across isolated clinics",
      atma: "Close doctor mentorship guided by senior Integrative Physicians & Naturopaths",
    },
  ];

  return (
    <section id="protocol" className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden border-t border-[#E8DCC4]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            The Integrative Advantage
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#12382D] tracking-tight leading-tight mb-4">
            Conventional Advice vs <span className="italic font-normal text-[#C5A880]">The ATMA Reset</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5F7369] leading-relaxed">
            Why couples choose an integrative, whole-body approach instead of isolated, one-size-fits-all treatments.
          </p>
        </div>

        {/* Comparison Table / Cards Container */}
        <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(18,56,45,0.06)] border border-[#E8DCC4]/70">
          {/* Header row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 border-b border-gray-100">
            <div className="p-5 rounded-2xl bg-gray-50/80 border border-gray-200/60">
              <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500 block mb-1">
                Standard Industry Norm
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-700">
                Conventional Fragmented Care
              </h3>
            </div>

            <div className="p-5 rounded-2xl bg-[#EBF7EE] border border-[#2D6A4F]/30 relative overflow-hidden">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#2D6A4F] block mb-1">
                The ATMA Standard
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#12382D]">
                Personalized 21-Day Reset
              </h3>
              <div className="absolute top-3 right-4">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-[#1B4D3E] text-white px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Doctor-Led
                </span>
              </div>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="divide-y divide-gray-100">
            {comparisonItems.map((item, index) => (
              <div
                key={index}
                className="py-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-start hover:bg-gray-50/40 transition-colors rounded-xl px-2 sm:px-4"
              >
                {/* Conventional Item */}
                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5 border border-red-200">
                    <X className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase font-bold text-gray-500 tracking-wider mb-1">
                      {item.parameter}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {item.conventional}
                    </p>
                  </div>
                </div>

                {/* ATMA Reset Item */}
                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-[#EBF7EE] text-[#2D6A4F] flex items-center justify-center shrink-0 mt-0.5 border border-[#2D6A4F]/30">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase font-bold text-[#2D6A4F] tracking-wider mb-1">
                      {item.parameter}
                    </p>
                    <p className="text-xs sm:text-sm text-[#12382D] font-medium leading-relaxed">
                      {item.atma}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout */}
          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="font-serif italic text-base sm:text-lg text-[#1B4D3E]">
              “The gold standard of fertility care is addressing the root biological terrain before conception.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
