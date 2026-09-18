"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Who is the 21-Day Fertility Reset designed for?",
      a: "The programme is designed for couples actively planning a pregnancy within the next 3 to 12 months, couples experiencing delayed conception or 'unexplained infertility', those preparing for IUI/IVF to maximize gamete quality, and couples diagnosed with PCOS, endometriosis, low ovarian reserve, or sub-optimal sperm parameters.",
    },
    {
      q: "Do both partners need to participate?",
      a: "Yes, we strongly advocate for dual-partner participation. 50% of the biological blueprint comes from the ovum and 50% from the sperm. Cellular nourishment, oxidative stress reduction, and dietary alignment for both partners dramatically increase conception readiness and healthy embryo development.",
    },
    {
      q: "Is the programme available online or only in-clinic in Kerala?",
      a: "The Fertility Reset is delivered through a online model. Couples across India and internationally can complete the programme fully online with virtual doctor consultations, personalized medicine delivery, diet coaching, and remote yoga therapy.",
    },
    {
      q: "How does ATMA integrate Ayurveda with Functional Medicine?",
      a: "Ayurveda provides timeless frameworks for deep systemic purification (Koshta Shuddhi), reproductive tissue tonification (Rasayana), and circadian alignment. Functional medicine introduces modern diagnostic clarity—mapping gut microbiome health, mitochondrial energetics, insulin sensitivity, and inflammatory cytokines. Together, they create an unparalleled root-cause protocol.",
    },
    {
      q: "What happens after the 21 days are completed?",
      a: "On Day 21, your Chief Medical Advisor conducts a comprehensive review and provides your personalized Conception Roadmap for the next 3 to 6 months—including sustained nutritional guidelines, tailored herbal support, and ongoing monthly check-ins.",
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#C5A880]" />
            Frequently Asked Questions
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#12382D] tracking-tight leading-tight mb-4">
            Everything You Need <span className="italic font-normal text-[#C5A880]">to Know</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5F7369]">
            Have questions about the 21-day timeline, therapies, or couple requirements?
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#E8DCC4]/60 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4"
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-[#12382D]">
                    {item.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? "bg-[#1B4D3E] text-white" : "bg-[#FAF6F0] text-[#12382D]"
                    }`}
                  >
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-[#5F7369] leading-relaxed border-t border-gray-50 animate-in fade-in duration-200">
                    <p className="pt-3">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
