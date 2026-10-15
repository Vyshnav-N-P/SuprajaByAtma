"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  ArrowRight,
  Compass,
  Check,
  Calendar,
} from "lucide-react";

interface LocationsProps {
  onOpenBooking: () => void;
}

export interface LocationItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  image: string;
  alt: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  climate: string;
  facilities: string[];
  locationUrl?: string;
}

export const ATMA_LOCATIONS: LocationItem[] = [
  {
    id: "kottayam",
    name: "Kottayam Centre",
    tagline: "Inpatient Retreat & Hospital Sanctuary",
    category: "Inpatient Sanctuary",
    image: "/images/Kottayam_img.jpeg",
    alt: "ATMA Kottayam Inpatient Retreat and Wellness Sanctuary",
    shortDescription:
      "A doctor-supervised inpatient sanctuary set in serene central Kerala, offering comprehensive Panchakarma theatres and holistic residential care.",
    fullDescription:
      "Our Kottayam centre serves as ATMA's clinical flagship inpatient retreat. Set amidst quiet, verdant grounds, it integrates 24/7 doctor supervision, classical Panchakarma therapy suites, specialized therapeutic kitchen, and comfortable couples' living residences designed for peaceful, undistracted recovery.",
    highlights: [
      "24/7 Physician Supervised Care",
      "Dedicated Panchakarma Suites",
      "Couples Residential Living",
      "Therapeutic Nutrition Kitchen",
    ],
    climate: "Lush Tropical & Tranquil",
    facilities: ["OP & IP Care", "Herbal Pharmacy", "Yoga Pavilion"],
    locationUrl: "#overview",
  },
  {
    id: "sreemoolavasam",
    name: "Sreemoolavasam",
    tagline: "Coastal Ayurvedic Healing Sanctuary",
    category: "Heritage Sanctuary",
    image: "/images/sreemoolavasam_img.jpeg",
    alt: "Sreemoolavasam Coastal Ayurvedic Healing Sanctuary",
    shortDescription:
      "A coastal retreat led by Dr. Suchithra Viswam, specializing in traditional Panchakarma, restorative women's care, and mindful rejuvenation.",
    fullDescription:
      "Steeped in classical Kerala Ayurvedic traditions, Sreemoolavasam provides an intimate coastal sanctuary where therapeutic tranquility takes center stage. Led on-site by Dr. Suchithra Viswam, the centre emphasizes female reproductive revitalization, deep cellular detox, therapeutic yoga, and Smrithi counselling.",
    highlights: [
      "Led by Dr. Suchithra Viswam",
      "Women's Hormonal Vitality Focus",
      "Classical Marma & Smrithi Care",
      "Coastal Air & Restorative Calm",
    ],
    climate: "Gentle Coastal Breeze",
    facilities: ["Panchakarma Hall", "Meditation Deck", "Individualized Cottages"],
    locationUrl: "#overview",
  },
  {
    id: "wayanad",
    name: "Wayanad Retreat",
    tagline: "High-Altitude Nature Sanctuary",
    category: "Highland Retreat",
    image: "/images/wayanad_img.jpeg",
    alt: "ATMA Wayanad Misty Hill Retreat and Forest Sanctuary",
    shortDescription:
      "Nestled among the misty hills and sacred forests of Wayanad, offering pristine mountain air, organic herbal estates, and complete seclusion.",
    fullDescription:
      "Perched high in the Western Ghats, ATMA Wayanad harnesses the therapeutic power of clean mountain elevation, forest bathing, and undisturbed nature. Ideal for couples seeking a total sensory detox, stress elimination, and restorative rejuvenation far removed from modern urban stressors.",
    highlights: [
      "High-Altitude Clean Air Therapy",
      "Bio-Organic Herbal Estates",
      "Forest Bathing & Mindfulness",
      "Secluded Couples' Cottages",
    ],
    climate: "Cool Mountain Mist",
    facilities: ["Forest Walking Trails", "Organic Farm-to-Table", "Herbal Steam Suites"],
    locationUrl: "#overview",
  },
];

export default function LocationsSection({ onOpenBooking }: LocationsProps) {
  const [activeLocation, setActiveLocation] = useState<string>("kottayam");

  return (
    <section id="locations" className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden border-t border-[#E8DCC4]/50">
      {/* Subtle organic background gradients */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#1B4D3E]/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#C5A880]/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
            Healing Sanctuaries Across Kerala
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#12382D] tracking-tight leading-tight mb-4">
            Three Sacred Destinations, <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#C5A880]">One Transformative</span> Standard
          </h2>
          <p className="text-base sm:text-lg text-[#5F7369] leading-relaxed">
            Every couple deserves an environment tailored to their healing journey. Choose between
            our clinical inpatient hospital sanctuary in Kottayam, the coastal tranquility of Sreemoolavasam,
            or the highland mist of Wayanad.
          </p>
        </div>

        {/* 3-Card Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 mb-14">
          {ATMA_LOCATIONS.map((loc) => {
            const isSelected = activeLocation === loc.id;

            return (
              <div
                key={loc.id}
                onMouseEnter={() => setActiveLocation(loc.id)}
                className={`group bg-white rounded-[2rem] overflow-hidden border transition-all duration-500 flex flex-col justify-between ${isSelected
                  ? "border-[#C5A880] shadow-[0_20px_50px_rgba(18,56,45,0.12)] -translate-y-1"
                  : "border-[#E8DCC4]/70 shadow-[0_10px_30px_rgba(18,56,45,0.04)] hover:shadow-xl hover:-translate-y-1"
                  }`}
              >
                <div>
                  {/* Image Frame with Aspect Ratio */}
                  <div className="relative w-full aspect-[16/11] overflow-hidden bg-[#FAF6F0]">
                    <Image
                      src={loc.image}
                      alt={loc.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12382D]/80 via-black/20 to-transparent"></div>

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-[#1B4D3E] shadow-sm">
                        <MapPin className="w-3 h-3 text-[#C5A880]" />
                        {loc.name.split(" ")[0]}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#1B4D3E]/90 backdrop-blur-md text-[10px] font-semibold uppercase tracking-wider text-[#E8DCC4] border border-[#C5A880]/30">
                        {loc.category}
                      </span>
                    </div>

                    {/* Bottom Title Overlay inside Image */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-[11px] text-[#C5A880] font-medium tracking-wider uppercase mb-0.5">
                        {loc.climate}
                      </p>
                      <h3 className="font-serif text-2xl font-bold tracking-tight text-white drop-shadow-sm">
                        {loc.name}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-7">
                    <p className="text-xs font-bold text-[#C5A880] uppercase tracking-wider mb-2">
                      {loc.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-[#2B3B34]/85 leading-relaxed mb-5">
                      {loc.shortDescription}
                    </p>

                    {/* Key Highlights Checklist */}
                    <div className="space-y-2 mb-6 pt-4 border-t border-gray-100">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#12382D]">
                        Sanctuary Highlights:
                      </p>
                      {loc.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-[#5F7369]">
                          <div className="w-4 h-4 rounded-full bg-[#EBF7EE] text-[#1B4D3E] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Facility Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {loc.facilities.map((fac, fIdx) => (
                        <span
                          key={fIdx}
                          className="text-[10px] font-medium px-2.5 py-1 rounded-lg bg-[#FAF6F0] text-[#5F7369] border border-[#E8DCC4]/50"
                        >
                          {fac}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="p-6 sm:p-7 pt-0 border-t border-gray-50 flex items-center justify-between gap-3">
                  <button
                    onClick={onOpenBooking}
                    className="w-full py-3 px-5 rounded-full bg-[#1B4D3E] hover:bg-[#12382D] text-white text-xs font-semibold tracking-wide transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2 group-hover:bg-[#12382D]"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>Inquire About {loc.name.split(" ")[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A880] transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Travel & Care Support Callout */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DCC4] shadow-sm max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF6F0] flex items-center justify-center text-[#1B4D3E] shrink-0 border border-[#C5A880]">
              <Compass className="w-6 h-6 text-[#C5A880]" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-[#12382D]">
                Travelling from Outside Kerala or Abroad?
              </h4>
              <p className="text-xs sm:text-sm text-[#5F7369] mt-0.5">
                We coordinate airport transfers (Cochin COK, Calicut CCJ), travel planning, and pre-arrival telehealth evaluations.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="shrink-0 px-6 py-3 rounded-full bg-[#FAF6F0] hover:bg-[#F3EDE2] text-[#12382D] border border-[#C5A880] text-xs font-semibold tracking-wide transition-colors"
          >
            Request Sanctuary Itinerary
          </button>
        </div>
      </div>
    </section>
  );
}
