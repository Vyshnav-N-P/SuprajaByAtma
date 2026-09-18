"use client";

import React, { useState } from "react";
import { X, Sparkles, CheckCircle2, MessageCircle, ShieldCheck, ArrowRight } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    partner1: "",
    partner2: "",
    phone: "",
    email: "",
    preferredConsult: "Online Telehealth",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/80 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#EBF7EE] text-[#2D6A4F] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#12382D] mb-2">
              Assessment Requested!
            </h3>
            <p className="text-xs sm:text-sm text-[#5F7369] leading-relaxed mb-6">
              Thank you {formData.partner1}. Our ATMA fertility care coordinator will reach out via
              WhatsApp/call within 2 hours to confirm your consultation slot.
            </p>
            <div className="space-y-3">
              <a
                href={`https://wa.me/918136894093?text=Hi%20ATMA!%20I%20have%20submitted%20the%20consultation%20request%20for%20The%20Fertility%20Reset.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-2xl bg-[#25D366] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm Instantly on WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full py-3 rounded-2xl bg-gray-100 text-gray-700 font-semibold text-xs"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF7EE] text-[#1B4D3E] text-[10px] font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3 text-[#C5A880]" />
                21-Day Programme Intake
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#12382D]">
                Book Your Couple Assessment
              </h3>
              <p className="text-xs text-[#5F7369] mt-1">
                Personalized fertility wellness support for couples preparing for a healthy
                pregnancy.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#12382D] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.partner1}
                    onChange={(e) => setFormData({ ...formData, partner1: e.target.value })}
                    placeholder="Full name"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-[#1B4D3E] focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#12382D] mb-1">
                    Partner Name
                  </label>
                  <input
                    type="text"
                    value={formData.partner2}
                    onChange={(e) => setFormData({ ...formData, partner2: e.target.value })}
                    placeholder="Partner name"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-[#1B4D3E] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#12382D] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-[#1B4D3E] focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#12382D] mb-1">
                    Consultation Mode
                  </label>
                  <select
                    value={formData.preferredConsult}
                    
                    onChange={(e) =>
                      setFormData({ ...formData, preferredConsult: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-[#1B4D3E] focus:bg-white transition-colors"
                  >
                    <option value="Online Telehealth" selected>Online Telehealth (Global) </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#12382D] mb-1">
                  Brief Medical Note (Optional & Confidential)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="E.g., preconception planning, PCOS, thyroid, sperm health..."
                  className="w-full px-3.5 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-[#1B4D3E] focus:bg-white transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#1B4D3E] hover:bg-[#12382D] text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-[#1B4D3E]/20 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Submit Assessment Request</span>
                <ArrowRight className="w-4 h-4 text-[#C5A880] transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-gray-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span>Strict Confidentiality • No Spam • Doctor Direct</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
