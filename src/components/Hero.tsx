"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Sparkles,
  MessageCircle,
  Heart,
  ShieldCheck,
  ArrowRight,
  Users,
  Play,
  Pause,
  Volume2,
  VolumeX,
  RotateCcw,
  Film,
} from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export const HERO_VIDEO_SRC = "/videos/ai_hero.mp4";
export const HERO_POSTER_SRC = "/images/couple_fertility_hero.jpg";

export default function Hero({ onOpenBooking }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [videoError, setVideoError] = useState<boolean>(false);

  // Check prefers-reduced-motion on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      const handleMotionPreference = (e: MediaQueryListEvent | MediaQueryList) => {
        if (e.matches && videoRef.current) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      };

      if (mediaQuery.matches && videoRef.current) {
        videoRef.current.pause();
      }

      mediaQuery.addEventListener("change", handleMotionPreference);
      return () => mediaQuery.removeEventListener("change", handleMotionPreference);
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {});
  };

  return (
    <section
      id="overview"
      className="relative w-full overflow-hidden luxury-hero-bg pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 border-b border-[#E8DCC4]/40"
    >
      {/* Decorative Organic Floating Elements (Gaspetworld style) */}
      <div className="hidden md:block absolute top-[120px] left-[6%] w-[180px] h-[180px] rounded-full bg-gradient-to-br from-[#D8F3DC]/40 to-transparent blur-2xl pointer-events-none animate-float"></div>
      <div className="hidden md:block absolute top-[140px] right-[8%] w-[220px] h-[220px] rounded-full bg-gradient-to-br from-[#F5EBE1]/60 to-transparent blur-3xl pointer-events-none animate-float-delay"></div>
      <div className="hidden lg:block absolute top-[40%] right-[3%] w-[160px] h-[160px] rounded-full bg-gradient-to-br from-[#C87D69]/10 to-transparent blur-2xl pointer-events-none animate-float-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-white/90 border border-[#1B4D3E]/15 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#2D6A4F] animate-pulse"></span>
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#1B4D3E]">
              21-Day Doctor-Led Programme
            </span>
            <span className="text-xs text-[#C5A880] font-bold">•</span>
            <span className="text-[11px] sm:text-xs font-medium text-[#5F7369]">
              Integrative & Functional
            </span>
          </div>

          {/* Main Cover Title */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-[4.5rem] font-bold text-[#12382D] tracking-tight leading-[1.1] mb-5">
            The <span className="italic font-normal text-[#C5A880]">Fertility</span> Reset
          </h1>

          {/* Core Brochure Detailing Subtitle */}
          <p className="text-base sm:text-xl lg:text-2xl text-[#2B3B34]/85 max-w-3xl leading-relaxed font-sans mb-8">
            Personalized fertility wellness support for couples preparing for a healthy pregnancy.
            Bridging timeless Ayurvedic wisdom and modern functional medicine.
          </p>

          {/* Dual Action CTA Buttons (modeled on gaspetworld) */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-12 sm:mb-16 w-full max-w-md sm:max-w-none">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto min-w-[210px] px-8 py-4 rounded-full bg-[#1B4D3E] hover:bg-[#12382D] text-white font-semibold text-sm sm:text-base tracking-wide shadow-xl shadow-[#1B4D3E]/20 hover:shadow-2xl hover:shadow-[#1B4D3E]/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Begin Your 21-Day Reset</span>
              <ArrowRight className="w-4 h-4 text-[#C5A880] transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <a
              href="https://wa.me/916282515231?text=Hi%20ATMA!%20I%20would%20like%20to%20consult%20regarding%20The%20Fertility%20Reset%20programme%20for%20couples."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-w-[210px] px-8 py-4 rounded-full bg-white hover:bg-[#FAF6F0] text-[#12382D] border border-[#25D366]/40 hover:border-[#25D366] font-semibold text-sm sm:text-base tracking-wide shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366] transition-transform duration-300 group-hover:scale-110" />
              <span className="text-[#128C7E]">WhatsApp Specialist</span>
            </a>
          </div>
        </div>

        {/* Hero Visual Showcase with Playable AI Video & Floating Badges */}
        <div className="relative max-w-5xl mx-auto mt-2">
          {/* Subtle Glow Backdrop */}
          <div className="absolute inset-0 z-0 bg-gradient-to-tr from-[#1B4D3E]/15 via-[#C5A880]/15 to-[#D8F3DC]/30 rounded-[3rem] blur-2xl transform scale-95 pointer-events-none"></div>

          {/* Main Visual Frame */}
          <div className="relative z-10 rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden border-[8px] sm:border-[12px] border-white/90 shadow-[0_25px_60px_-15px_rgba(18,56,45,0.2)] bg-black">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[580px] overflow-hidden">
              {/* Playable AI Video Banner */}
              {!videoError ? (
                <video
                  ref={videoRef}
                  src={HERO_VIDEO_SRC}
                  poster={HERO_POSTER_SRC}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onError={() => setVideoError(true)}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                /* Static Poster Fallback if video is unavailable or blocked */
                <Image
                  src={HERO_POSTER_SRC}
                  alt="Couple preparing for pregnancy through ATMA Fertility Reset"
                  fill
                  priority
                  className="object-cover object-center"
                />
              )}

              {/* Top Video Header Controls Bar */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between z-20 pointer-events-none">
                {/* AI Cinematic Experience Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold tracking-wide pointer-events-auto">
                  <Film className="w-3.5 h-3.5 text-[#C5A880] animate-pulse" />
                  <span>Cinematic Vision</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]"></span>
                </div>

                {/* Visible Interactive Video Controls */}
                {!videoError && (
                  <div className="flex items-center gap-2 pointer-events-auto bg-black/45 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/20">
                    {/* Play/Pause Button */}
                    <button
                      onClick={togglePlay}
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                      className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
                      title={isPlaying ? "Pause video" : "Play video"}
                    >
                      {isPlaying ? (
                        <Pause className="w-3.5 h-3.5 text-white" />
                      ) : (
                        <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
                      )}
                    </button>

                    {/* Mute/Unmute Button */}
                    <button
                      onClick={toggleMute}
                      aria-label={isMuted ? "Unmute video" : "Mute video"}
                      className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
                      title={isMuted ? "Unmute audio" : "Mute audio"}
                    >
                      {isMuted ? (
                        <VolumeX className="w-3.5 h-3.5 text-white" />
                      ) : (
                        <Volume2 className="w-3.5 h-3.5 text-white" />
                      )}
                    </button>

                    {/* Restart Button */}
                    <button
                      onClick={handleRestart}
                      aria-label="Restart video"
                      className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A880] hidden sm:flex"
                      title="Restart video"
                    >
                      <RotateCcw className="w-3 h-3 text-white" />
                    </button>
                  </div>
                )}
              </div>

              {/* Gradient Scrim for Content Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#12382D]/90 via-[#12382D]/30 to-transparent pointer-events-none"></div>

              {/* In-Image Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white z-20 pointer-events-none">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider text-white mb-2">
                    Preconception Vitality
                  </span>
                  <p className="font-serif text-xl sm:text-3xl font-medium tracking-tight">
                    Nurturing the Roots of New Life Together.
                  </p>
                  <p className="text-xs sm:text-sm text-white/85 font-sans mt-1 max-w-lg">
                    Whole-body care designed for both partners, not just one.
                  </p>
                </div>

                <div className="flex items-center gap-3 bg-white/15 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/25 self-start sm:self-auto pointer-events-auto">
                  <Heart className="w-5 h-5 text-[#E8B4A2] fill-[#E8B4A2]" />
                  <div className="text-left">
                    <p className="text-[10px] text-white/70 uppercase tracking-widest font-semibold">
                      Couple Protocol
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-white">
                      Dual Assessment Included
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Pill Badge 1: Top Right (Gaspetworld style) */}
          <div className="absolute -top-6 sm:-top-8 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl sm:rounded-3xl z-30 shadow-xl border border-[#C5A880]/30 hidden sm:flex items-center gap-3.5 animate-float pointer-events-none">
            <div className="w-11 h-11 rounded-xl bg-[#FAF6F0] flex items-center justify-center text-[#C5A880] border border-[#E8DCC4]">
              <Sparkles className="w-5 h-5 text-[#C5A880]" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-[#5F7369] uppercase tracking-wider">
                Assessment
              </p>
              <p className="text-xs sm:text-sm font-bold text-[#12382D]">
                100% Individualized
              </p>
            </div>
          </div>

          {/* Floating Pill Badge 2: Bottom Left (Gaspetworld style) */}
          <div className="absolute -bottom-6 sm:-bottom-8 -left-2 sm:-left-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl sm:rounded-3xl z-30 shadow-xl border border-[#1B4D3E]/20 hidden sm:flex items-center gap-3.5 animate-float-delay pointer-events-none">
            <div className="w-11 h-11 rounded-xl bg-[#D8F3DC]/50 flex items-center justify-center text-[#1B4D3E]">
              <ShieldCheck className="w-5 h-5 text-[#2D6A4F]" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-[#5F7369] uppercase tracking-wider">
                Integrative Science
              </p>
              <p className="text-xs sm:text-sm font-bold text-[#12382D]">
                Ayurveda + Functional Med
              </p>
            </div>
          </div>

          {/* Floating Pill Badge 3: Center Bottom Mini Metric */}
          <div className="absolute -bottom-5 right-[18%] bg-white/95 backdrop-blur-md px-4 py-2 rounded-full z-30 shadow-lg border border-gray-100 hidden lg:flex items-center gap-2 animate-float-slow pointer-events-none">
            <Users className="w-4 h-4 text-[#2D6A4F]" />
            <span className="text-xs font-semibold text-[#12382D]">
              Guided by Senior Doctors
            </span>
          </div>
        </div>

        {/* Quick Highlights Row */}
        <div className="mt-14 sm:mt-20 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-white/80 shadow-sm">
            <p className="font-serif text-2xl sm:text-3xl font-bold text-[#1B4D3E]">21 Days</p>
            <p className="text-xs text-[#5F7369] font-medium mt-1">Structured Reset</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-white/80 shadow-sm">
            <p className="font-serif text-2xl sm:text-3xl font-bold text-[#C5A880]">5 Pillars</p>
            <p className="text-xs text-[#5F7369] font-medium mt-1">Integrative Modalities</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-white/80 shadow-sm">
            <p className="font-serif text-2xl sm:text-3xl font-bold text-[#1B4D3E]">25k+</p>
            <p className="text-xs text-[#5F7369] font-medium mt-1">Journeys Guided</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-white/80 shadow-sm">
            <p className="font-serif text-2xl sm:text-3xl font-bold text-[#C5A880]">1:1 Care</p>
            <p className="text-xs text-[#5F7369] font-medium mt-1">Physician Supervised</p>
          </div>
        </div>
      </div>
    </section>
  );
}
