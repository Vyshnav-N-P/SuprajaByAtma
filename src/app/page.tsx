"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import WhyAtma from "@/components/WhyAtma";
import LocationsSection from "@/components/LocationsSection";
import TheJourney from "@/components/TheJourney";
import ComparisonSection from "@/components/ComparisonSection";
import DoctorsSection from "@/components/DoctorsSection";
import FounderSection from "@/components/FounderSection";
import InterviewsSection from "@/components/InterviewsSection";
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
      {/* Fixed Pill Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* 1. Top AI Video Hero Banner (Playable AI Video, Muted Autoplay, Play/Mute Controls, Fallback) */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* Continuous Marquee Ticker */}
      <MarqueeBanner />

      {/* Why ATMA (Personal Approach, Research, 5 Holistic Dimensions, Vitality Metrics) */}
      <WhyAtma />

      {/* 2. IP Locations: Kottayam, Sreemoolavasam, Wayanad (Individual Photographs & Details) */}
      <LocationsSection onOpenBooking={handleOpenBooking} />

      {/* The 21-Day Journey (Assessment & Detox, Support & Rejuvenate, Restore & Integrate) */}
      <TheJourney onOpenBooking={handleOpenBooking} />

      {/* Comparison Grid (Conventional vs ATMA Reset) */}
      <ComparisonSection />

      {/* Doctors & Clinical Guidance (Dr. Febin, Dr. Shakkeel, Dr. Suchithra Viswam) */}
      <DoctorsSection onOpenBooking={handleOpenBooking} />

      {/* 3. Founder Profile: Dr. Abhijith Karma (Photographs, Biography, Personal Website Link) */}
      <FounderSection onOpenBooking={handleOpenBooking} />

      {/* 4. Instagram Interviews: ATMA in Conversation (Real Instagram Reels & Dialogue Highlights) */}
      <InterviewsSection />

      {/* Conversion Section (Call, WhatsApp, Scan to Book, Closing Manifesto) */}
      <ConversionSection onOpenBooking={handleOpenBooking} />

      {/* FAQ Section */}
      <FAQSection />

      {/* Luxury Footer with comprehensive navigation links */}
      <Footer />

      {/* Pulsing Floating WhatsApp CTA Button */}
      <FloatingWhatsApp />

      {/* Instant Consultation Intake Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </main>
  );
}
