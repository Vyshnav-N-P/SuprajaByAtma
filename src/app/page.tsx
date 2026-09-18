"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import WhyAtma from "@/components/WhyAtma";
import TheJourney from "@/components/TheJourney";
import ComparisonSection from "@/components/ComparisonSection";
import DoctorsSection from "@/components/DoctorsSection";
import ConversionSection from "@/components/ConversionSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <main className="min-h-screen relative selection:bg-[#2D6A4F] selection:text-white bg-[#FAF9F6]">
      {/* Fixed Pill Header (Gaspetworld style) */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero Cover (Fertility Reset, 21-Day Programme, Couple Imagery, Floating Badges) */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* Continuous Marquee Ticker */}
      <MarqueeBanner />

      {/* Why ATMA (Personal Approach, Research, 5 Holistic Dimensions, Vitality Metrics) */}
      <WhyAtma />

      {/* The 21-Day Journey (1-2-3 Phases: Assessment & Detox, Support & Rejuvenate, Restore & Integrate) */}
      <TheJourney onOpenBooking={handleOpenBooking} />

      {/* Comparison Grid (Conventional vs ATMA Reset) */}
      <ComparisonSection />

      {/* Doctors & Clinical Guidance (Dr. Febin, Dr. Shakkeel, and Specialist Team) */}
      <DoctorsSection onOpenBooking={handleOpenBooking} />

      {/* Conversion Section (Call, WhatsApp, Scan to Book, Closing Manifesto) */}
      <ConversionSection onOpenBooking={handleOpenBooking} />

      {/* FAQ Section */}
      <FAQSection />

      {/* Luxury Footer */}
      <Footer />

      {/* Pulsing Floating WhatsApp CTA Button (Gaspetworld style) */}
      <FloatingWhatsApp />

      {/* Instant Consultation Intake Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </main>
  );
}
