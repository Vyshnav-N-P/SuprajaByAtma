"use client";

import React, { useState } from "react";
import {
  Phone,
  MessageCircle,
  QrCode,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Send,
} from "lucide-react";

interface ConversionProps {
  onOpenBooking: () => void;
}

export default function ConversionSection({ onOpenBooking }: ConversionProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    partner1Name: "",
    partner2Name: "",
    phone: "",
    city: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#FAF8F5] to-[#F2EBE1] relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#C5A880]/15 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#1B4D3E]/10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Strong Closing Manifesto Banner */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/90 border border-[#1B4D3E]/15 shadow-sm text-xs font-bold uppercase tracking-[0.2em] text-[#1B4D3E] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            The ATMA Philosophy
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#12382D] tracking-tight leading-[1.15] mb-6">
            “No one-size-fits-all promises. <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#C5A880]">A plan built around you.”</span>
          </h2>

          <p className="text-base sm:text-xl text-[#5F7369] max-w-2xl mx-auto leading-relaxed">
            Every couple’s cellular blueprint is unique. Start with a comprehensive assessment and
            step into parenthood with clarity and confidence.
          </p>
        </div>

        {/* 3 Conversion Channels: Call, WhatsApp, Scan to Book */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          {/* Left Column: Instant Access (Call & WhatsApp) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Channel 1: WhatsApp Connect */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#25D366]/30 shadow-lg relative overflow-hidden group hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 flex items-center justify-center text-[#128C7E]">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-[#25D366]/10 text-[#128C7E]">
                  Instant WhatsApp
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#12382D] mb-1">
                Chat with Care Advisor
              </h3>
              <p className="text-xs sm:text-sm text-[#5F7369] leading-relaxed mb-6">
                Connect directly with our fertility wellness coordinators for instant answers on the
                21-day programme, doctor availability, and pricing.
              </p>
              <a
                href="https://wa.me/918136894093?text=Hello%20ATMA%20Wellness!%20I%20would%20like%20to%20book%20The%20Fertility%20Reset%20assessment%20for%20my%20partner%20and%20myself."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#1ebd5b] text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-md shadow-[#25D366]/20 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message on WhatsApp (+91 81368 94093)</span>
              </a>
            </div>

            {/* Channel 2: Direct Doctor Desk Call */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E8DCC4] shadow-lg relative overflow-hidden group hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF6F0] flex items-center justify-center text-[#C5A880]">
                  <Phone className="w-6 h-6 text-[#C5A880]" />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-[#FAF6F0] text-[#1B4D3E]">
                  Direct Clinic Desk
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#12382D] mb-1">
                Speak with Clinical Desk
              </h3>
              <p className="text-xs sm:text-sm text-[#5F7369] leading-relaxed mb-6">
                Prefer to speak over the phone? Our clinical intake desk is open daily 8:00 AM – 8:00
                PM IST for confidential discussions.
              </p>
              <a
                href="tel:+918136894093"
                className="w-full py-3.5 px-6 rounded-2xl bg-[#1B4D3E] hover:bg-[#12382D] text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-md shadow-[#1B4D3E]/20 transition-all"
              >
                <Phone className="w-4 h-4 text-[#C5A880]" />
                <span>Call +91 81368 94093</span>
              </a>
            </div>
          </div>

          {/* Right Column: Scan to Book + Instant Couple Booking Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 border border-[#E8DCC4] shadow-xl flex flex-col justify-between">
            <div>
              {/* Scan to Book Heading & QR Code preview */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-gray-100 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF7EE] text-[#2D6A4F] text-[11px] font-bold uppercase tracking-wider mb-2">
                    <QrCode className="w-3.5 h-3.5" />
                    Scan to Book
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#12382D]">
                    Schedule Your Couple Intake
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5F7369] mt-0.5">
                    Scan with any phone camera or complete the intake below.
                  </p>
                </div>

                {/* Stylized Functional QR Code Card */}
                <div className="shrink-0 bg-[#FAF8F5] p-3 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center">
                  {/* High quality clean SVG QR code representation */}
                  <svg
                    width="96"
                    height="96"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="rounded-lg bg-white p-1"
                  >
                    {/* Corner Markers */}
                    <rect x="5" y="5" width="28" height="28" fill="#12382D" rx="4" />
                    <rect x="10" y="10" width="18" height="18" fill="white" />
                    <rect x="14" y="14" width="10" height="10" fill="#12382D" />

                    <rect x="67" y="5" width="28" height="28" fill="#12382D" rx="4" />
                    <rect x="72" y="10" width="18" height="18" fill="white" />
                    <rect x="76" y="14" width="10" height="10" fill="#12382D" />

                    <rect x="5" y="67" width="28" height="28" fill="#12382D" rx="4" />
                    <rect x="10" y="72" width="18" height="18" fill="white" />
                    <rect x="14" y="76" width="10" height="10" fill="#12382D" />

                    {/* QR Code Matrix Dots */}
                    <rect x="40" y="10" width="6" height="6" fill="#12382D" />
                    <rect x="52" y="10" width="6" height="6" fill="#C5A880" />
                    <rect x="40" y="22" width="6" height="6" fill="#C5A880" />
                    <rect x="52" y="22" width="6" height="6" fill="#12382D" />
                    <rect x="40" y="40" width="20" height="20" fill="#1B4D3E" rx="3" />
                    <rect x="10" y="40" width="6" height="6" fill="#12382D" />
                    <rect x="22" y="40" width="6" height="6" fill="#12382D" />
                    <rect x="10" y="52" width="6" height="6" fill="#C5A880" />
                    <rect x="70" y="40" width="8" height="8" fill="#12382D" />
                    <rect x="84" y="40" width="6" height="6" fill="#C5A880" />
                    <rect x="70" y="54" width="6" height="6" fill="#C5A880" />
                    <rect x="84" y="54" width="6" height="6" fill="#12382D" />
                    <rect x="40" y="70" width="8" height="8" fill="#12382D" />
                    <rect x="54" y="70" width="6" height="6" fill="#C5A880" />
                    <rect x="40" y="84" width="6" height="6" fill="#C5A880" />
                    <rect x="54" y="84" width="8" height="8" fill="#12382D" />
                    <rect x="72" y="72" width="20" height="20" fill="#12382D" rx="2" />
                  </svg>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#5F7369] mt-1.5">
                    Scan to Book
                  </span>
                </div>
              </div>

              {/* Form or Confirmation Message */}
              {formSubmitted ? (
                <div className="bg-[#EBF7EE] p-8 rounded-2xl text-center border border-[#2D6A4F]/30 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#2D6A4F] text-white flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#12382D] mb-2">
                    Intake Request Received!
                  </h4>
                  <p className="text-sm text-[#2B3B34] max-w-md mx-auto leading-relaxed mb-6">
                    Thank you {formData.partner1Name || "for reaching out"}. Our ATMA fertility care
                    team will contact you within 2 hours to confirm your consultation schedule.
                  </p>
                  <a
                    href={`https://wa.me/918136894093?text=Hi%20ATMA!%20I%20just%20submitted%20the%20intake%20form%20for%20${encodeURIComponent(
                      formData.partner1Name
                    )}%20and%20${encodeURIComponent(formData.partner2Name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white text-xs font-bold"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Speed up confirmation on WhatsApp</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#12382D] mb-1 uppercase tracking-wider">
                        Partner 1 Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.partner1Name}
                        onChange={(e) =>
                          setFormData({ ...formData, partner1Name: e.target.value })
                        }
                        placeholder="e.g. Priya"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-gray-200 text-sm focus:outline-none focus:border-[#1B4D3E] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#12382D] mb-1 uppercase tracking-wider">
                        Partner 2 Name (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.partner2Name}
                        onChange={(e) =>
                          setFormData({ ...formData, partner2Name: e.target.value })
                        }
                        placeholder="e.g. Rahul"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-gray-200 text-sm focus:outline-none focus:border-[#1B4D3E] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#12382D] mb-1 uppercase tracking-wider">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-gray-200 text-sm focus:outline-none focus:border-[#1B4D3E] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#12382D] mb-1 uppercase tracking-wider">
                        City / Location
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Kochi, Kottayam, International"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-gray-200 text-sm focus:outline-none focus:border-[#1B4D3E] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#12382D] mb-1 uppercase tracking-wider">
                      Current Journey / Medical Background (Confidential)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g., Preparing for first pregnancy, PCOS, unexplained delays, or seeking natural preconception detox."
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-gray-200 text-sm focus:outline-none focus:border-[#1B4D3E] focus:bg-white transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-[#1B4D3E] hover:bg-[#12382D] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#1B4D3E]/20 transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Request Personalized Couple Assessment</span>
                    <ArrowRight className="w-4 h-4 text-[#C5A880] transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-[11px] text-center text-gray-500 flex items-center justify-center gap-1.5 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#2D6A4F]" />
                    <span>100% Medical Confidentiality Guaranteed</span>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
