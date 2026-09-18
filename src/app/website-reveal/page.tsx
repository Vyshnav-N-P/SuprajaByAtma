"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Sparkles,
  Play,
  Volume2,
  VolumeX,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Heart,
  RefreshCw,
  Clock,
  Activity,
  Leaf,
  Dna,
  Zap,
  Flame,
} from "lucide-react";

export default function WebsiteRevealPage() {
  const TOTAL_SECONDS = 15;
  const [stage, setStage] = useState<"idle" | "counting" | "revealed">("idle");
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const [currentDayIdx, setCurrentDayIdx] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [particles, setParticles] = useState<
    Array<{ id: number; left: number; top: number; size: number; delay: number }>
  >([]);

  // Web Audio Context for zero-dependency sound effects
  const audioCtxRef = useRef<AudioContext | null>(null);

  // The 21 Days Clinical Programme Breakdown
  const twentyOneDays = [
    {
      day: 1,
      phase: "Phase 1: Assessment & Detox",
      phaseColor: "bg-[#2D6A4F] text-[#D8F3DC]",
      icon: Activity,
      title: "Comprehensive Couple Intake",
      detail: "Individual health history, lifestyle factors & Prakriti (dosha) mapping.",
    },
    {
      day: 2,
      phase: "Phase 1: Assessment & Detox",
      phaseColor: "bg-[#2D6A4F] text-[#D8F3DC]",
      icon: Dna,
      title: "Biomarker & Hormonal Profiling",
      detail: "Hormonal baseline, metabolic insulin sensitivity & inflammation markers.",
    },
    {
      day: 3,
      phase: "Phase 1: Assessment & Detox",
      phaseColor: "bg-[#2D6A4F] text-[#D8F3DC]",
      icon: Leaf,
      title: "Digestive Agni & Koshta Clearing",
      detail: "Gentle gastrointestinal clearing and digestive fire re-ignition.",
    },
    {
      day: 4,
      phase: "Phase 1: Assessment & Detox",
      phaseColor: "bg-[#2D6A4F] text-[#D8F3DC]",
      icon: Sparkles,
      title: "Cellular Anti-Inflammatory Diet",
      detail: "Tailored nutrient meal protocol eliminating endocrine disruptors.",
    },
    {
      day: 5,
      phase: "Phase 1: Assessment & Detox",
      phaseColor: "bg-[#2D6A4F] text-[#D8F3DC]",
      icon: Activity,
      title: "Hepatic & Lymphatic Drainage",
      detail: "Targeted botanical cleanses to assist liver and lymph toxin elimination.",
    },
    {
      day: 6,
      phase: "Phase 1: Assessment & Detox",
      phaseColor: "bg-[#2D6A4F] text-[#D8F3DC]",
      icon: Zap,
      title: "Naturopathic Hydrotherapy",
      detail: "Pelvic circulation stimulation, mud therapy & systemic revitalization.",
    },
    {
      day: 7,
      phase: "Phase 1: Assessment & Detox",
      phaseColor: "bg-[#2D6A4F] text-[#D8F3DC]",
      icon: CheckCircle2,
      title: "Phase 1 Complete — Cellular Detox",
      detail: "Biological terrain cleansed, purified and receptive for nourishment.",
    },
    {
      day: 8,
      phase: "Phase 2: Support & Rejuvenate",
      phaseColor: "bg-[#9E7D53] text-[#F7EFE6]",
      icon: Flame,
      title: "Sukra & Artava Rasayana Infusion",
      detail: "Classical Ayurvedic herbs to enhance ovum quality and sperm vitality.",
    },
    {
      day: 9,
      phase: "Phase 2: Support & Rejuvenate",
      phaseColor: "bg-[#9E7D53] text-[#F7EFE6]",
      icon: Dna,
      title: "Mitochondrial Energy Synergy",
      detail: "CoQ10, zinc, bioactive folate and healthy essential fatty acid saturation.",
    },
    {
      day: 10,
      phase: "Phase 2: Support & Rejuvenate",
      phaseColor: "bg-[#9E7D53] text-[#F7EFE6]",
      icon: Heart,
      title: "Pelvic Floor Vascularization",
      detail: "Specialized physiotherapy to optimize blood perfusion to reproductive organs.",
    },
    {
      day: 11,
      phase: "Phase 2: Support & Rejuvenate",
      phaseColor: "bg-[#9E7D53] text-[#F7EFE6]",
      icon: Clock,
      title: "Circadian Melatonin-Cortisol Alignment",
      detail: "Restoring deep regenerative sleep architecture and endocrine harmony.",
    },
    {
      day: 12,
      phase: "Phase 2: Support & Rejuvenate",
      phaseColor: "bg-[#9E7D53] text-[#F7EFE6]",
      icon: Leaf,
      title: "Fertility Restorative Yoga",
      detail: "HPO-axis down-regulation, calming autonomic sympathetic overdrive.",
    },
    {
      day: 13,
      phase: "Phase 2: Support & Rejuvenate",
      phaseColor: "bg-[#9E7D53] text-[#F7EFE6]",
      icon: ShieldCheck,
      title: "Oxidative Stress Neutralization",
      detail: "Targeting free radical damage to safeguard genetic DNA integrity.",
    },
    {
      day: 14,
      phase: "Phase 2: Support & Rejuvenate",
      phaseColor: "bg-[#9E7D53] text-[#F7EFE6]",
      icon: CheckCircle2,
      title: "Phase 2 Complete — Vitality Peak",
      detail: "Mid-programme milestone: deep rejuvenation of seed (Beeja) and soil.",
    },
    {
      day: 15,
      phase: "Phase 3: Restore & Integrate",
      phaseColor: "bg-[#C87D69] text-[#FAF0ED]",
      icon: Heart,
      title: "Uterine Environment Readiness",
      detail: "Endometrial receptivity optimization and natural hormonal rhythm sync.",
    },
    {
      day: 16,
      phase: "Phase 3: Restore & Integrate",
      phaseColor: "bg-[#C87D69] text-[#FAF0ED]",
      icon: Activity,
      title: "Neuro-Endocrine Stabilization",
      detail: "Balancing progesterone, estrogen, testosterone & thyroid synergy.",
    },
    {
      day: 17,
      phase: "Phase 3: Restore & Integrate",
      phaseColor: "bg-[#C87D69] text-[#FAF0ED]",
      icon: Dna,
      title: "Gamete Vitality Synchronization",
      detail: "Coordinated couple readiness for natural conception timing.",
    },
    {
      day: 18,
      phase: "Phase 3: Restore & Integrate",
      phaseColor: "bg-[#C87D69] text-[#FAF0ED]",
      icon: Sparkles,
      title: "Couple Somatic Harmony Coaching",
      detail: "Removing emotional anxiety and fostering deeper partner intimacy.",
    },
    {
      day: 19,
      phase: "Phase 3: Restore & Integrate",
      phaseColor: "bg-[#C87D69] text-[#FAF0ED]",
      icon: Clock,
      title: "Long-Term Preconception Blueprint",
      detail: "Custom 3 to 6-month roadmap for sustained pregnancy readiness.",
    },
    {
      day: 20,
      phase: "Phase 3: Restore & Integrate",
      phaseColor: "bg-[#C87D69] text-[#FAF0ED]",
      icon: ShieldCheck,
      title: "Chief Medical Advisors Review",
      detail: "Final clinical evaluation with Dr. Febin and Dr. Shakkeel.",
    },
    {
      day: 21,
      phase: "Phase 3: Restore & Integrate",
      phaseColor: "bg-[#C5A880] text-[#12382D]",
      icon: CheckCircle2,
      title: "The Fertility Reset Complete!",
      detail: "Whole-body transformation achieved. Prepared for new life.",
    },
  ];

  useEffect(() => {
    // Generate random ambient floating particles
    const generated = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: Math.floor(Math.random() * 90) + 5,
      top: Math.floor(Math.random() * 85) + 8,
      size: Math.floor(Math.random() * 10) + 6,
      delay: Math.random() * 4,
    }));
    setParticles(generated);
  }, []);

  // Web Audio Synthesizer Beeps
  const playSound = (type: "tick" | "pop" | "chime") => {
    if (!soundEnabled) return;
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      if (type === "tick") {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(880, ctx.currentTime);
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.12);
      } else if (type === "pop") {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(540, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(820, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.09);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.09);
      } else if (type === "chime") {
        const freqs = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
        freqs.forEach((f, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "triangle";
          osc.frequency.setValueAtTime(f, ctx.currentTime + idx * 0.08);
          gain.gain.setValueAtTime(0.2, ctx.currentTime + idx * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.08 + 1.1);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime + idx * 0.08);
          osc.stop(ctx.currentTime + idx * 0.08 + 1.1);
        });
      }
    } catch {
      // Audio playback fallback
    }
  };

  // Start the Launch Sequence
  const handleLaunchClick = () => {
    setSecondsLeft(TOTAL_SECONDS);
    setCurrentDayIdx(0);
    setStage("counting");
    playSound("tick");
  };

  // 15-Second Countdown and 21-Day Popup Interval
  useEffect(() => {
    let secondTimer: NodeJS.Timeout;
    let dayTimer: NodeJS.Timeout;

    if (stage === "counting") {
      // Seconds counter (15 down to 0)
      secondTimer = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(secondTimer);
            return 0;
          }
          playSound("tick");
          return prev - 1;
        });
      }, 1000);

      // 21 Days interval: 15,000ms / 21 = ~714ms per day
      const dayIntervalMs = Math.floor((TOTAL_SECONDS * 1000) / 21);
      dayTimer = setInterval(() => {
        setCurrentDayIdx((prev) => {
          if (prev >= twentyOneDays.length - 1) {
            clearInterval(dayTimer);
            // Finish countdown when day 21 is reached
            setTimeout(() => {
              setStage("revealed");
              playSound("chime");
            }, 600);
            return twentyOneDays.length - 1;
          }
          playSound("pop");
          return prev + 1;
        });
      }, dayIntervalMs);
    }

    return () => {
      clearInterval(secondTimer);
      clearInterval(dayTimer);
    };
  }, [stage, soundEnabled]);

  // Circle progress calculation (15 seconds total)
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const progress = (TOTAL_SECONDS - secondsLeft) / TOTAL_SECONDS;
  const strokeDashoffset = circumference - progress * circumference;

  const currentDayData = twentyOneDays[currentDayIdx] || twentyOneDays[0];
  const CurrentIcon = currentDayData.icon;

  return (
    <div className="fixed inset-0 z-[999999] bg-[#04100B] text-white flex flex-col items-center justify-center overflow-hidden font-sans select-none">
      {/* Deep Luxury Atmospheric Radial Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#081F15] via-[#04100B] to-[#020906] z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[750px] bg-gradient-to-b from-[#1B4D3E]/45 via-[#C5A880]/20 to-transparent blur-[140px] rounded-full pointer-events-none z-0 animate-pulse"></div>

      {/* Floating Gold & Sage Particle Orbs */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute pointer-events-none z-10 animate-float"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDelay: `${p.delay}s`,
          }}
        >
          <div
            className="rounded-full bg-gradient-to-tr from-[#9E7D53] via-[#C5A880] to-[#FFE39F] shadow-[0_0_16px_rgba(197,168,128,0.7)] border border-amber-300/40 opacity-70"
            style={{ width: `${p.size}px`, height: `${p.size}px` }}
          ></div>
        </div>
      ))}

      {/* Controls Bar (Top) */}
      <div className="absolute top-6 right-6 z-30 flex items-center gap-3">
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md text-xs font-semibold flex items-center gap-2 transition-colors text-gray-200"
          title="Toggle Sound"
        >
          {soundEnabled ? (
            <>
              <Volume2 className="w-4 h-4 text-[#C5A880]" />
              <span className="hidden sm:inline">Sound ON</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-gray-400" />
              <span className="hidden sm:inline">Sound OFF</span>
            </>
          )}
        </button>

        <Link
          href="/"
          className="px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md text-xs font-semibold text-gray-200 transition-colors"
        >
          Skip to Home
        </Link>
      </div>

      {/* Main Container */}
      <main className="relative z-20 w-full max-w-2xl px-6 flex flex-col items-center justify-center text-center">
        {/* STAGE 1: IDLE / LAUNCH TRIGGER */}
        {stage === "idle" && (
          <div className="flex flex-col items-center animate-in fade-in zoom-in-95 duration-500">
            {/* Decorative Glowing Circle — matches reference image */}
            <div
              className="relative flex items-center justify-center"
              style={{ width: "min(90vw, 520px)", height: "min(90vw, 520px)" }}
            >
              {/* Ambient radial inner glow */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(197,168,128,0.10) 0%, rgba(27,77,62,0.20) 55%, transparent 75%)",
                }}
              />
              {/* Gold SVG ring */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 520 520"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ filter: "drop-shadow(0 0 18px rgba(197,168,128,0.40))" }}
              >
                <defs>
                  <linearGradient id="ringGold" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#C5A880" stopOpacity="0.9" />
                    <stop offset="40%" stopColor="#FFE39F" stopOpacity="0.75" />
                    <stop offset="70%" stopColor="#9E7D53" stopOpacity="0.60" />
                    <stop offset="100%" stopColor="#C5A880" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
                <circle cx="260" cy="260" r="252" stroke="url(#ringGold)" strokeWidth="1.5" />
                <circle cx="260" cy="260" r="244" stroke="rgba(197,168,128,0.14)" strokeWidth="0.8" />
              </svg>

              {/* Inner content */}
              <div className="relative z-10 flex flex-col items-center px-10 text-center">
                {/* Sparkle icon orb */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1B4D3E] to-[#2D6A4F] flex items-center justify-center shadow-[0_0_30px_rgba(45,106,79,0.8),0_0_60px_rgba(197,168,128,0.25)] border border-[#C5A880]/60 mb-5">
                  <Sparkles className="w-7 h-7 text-[#C5A880]" />
                </div>

                {/* Brand Name */}
                <div className="mb-1 leading-tight">
                  <span className="font-serif font-bold text-[2.6rem] sm:text-[3.2rem] text-transparent bg-clip-text bg-gradient-to-b from-white via-[#EDD9B8] to-[#C5A880] tracking-tight block">
                    Supraja
                  </span>
                  <span className="font-serif text-base sm:text-lg text-[#C5A880]/80 tracking-[0.22em] font-medium block mt-0.5">
                    by Atma
                  </span>
                </div>

                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-[#C5A880]/65 font-semibold mb-6 mt-1">
                  Fertility Wellness
                </span>

                <p className="text-sm sm:text-[0.92rem] text-gray-300/80 max-w-[310px] mx-auto mb-8 leading-relaxed font-serif italic">
                  “Nurturing the Roots of New Life. A 21-Day Integrative Journey Built Around You.”
                </p>

                {/* Glowing Launch Button */}
                <div className="relative group cursor-pointer w-full">
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#C5A880] via-[#2D6A4F] to-[#C5A880] opacity-55 blur-lg group-hover:opacity-85 transition duration-500 animate-pulse"></div>
                  <button
                    onClick={handleLaunchClick}
                    className="relative flex items-center justify-center gap-3 w-full px-7 py-4 sm:py-5 rounded-full bg-gradient-to-r from-[#C5A880] via-[#E6CEB3] to-[#C5A880] text-[#04100B] font-serif font-bold text-base sm:text-lg tracking-wider uppercase transition-all duration-300 transform group-hover:scale-105 active:scale-95 shadow-[0_12px_40px_rgba(197,168,128,0.5)] border-2 border-white/60 cursor-pointer"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#04100B] text-[#C5A880] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 ml-0.5 fill-current" />
                    </div>
                    <span className="drop-shadow-sm">LAUNCH PROGRAM</span>
                  </button>
                </div>

                <div className="mt-5 text-[#C5A880]/65 text-[11px] tracking-wide">
                  Watch the 21-Day Programme Unfold
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STAGE 2: 15s COUNTDOWN WITH 21-DAY POPUPS */}
        {stage === "counting" && (
          <div className="flex flex-col items-center w-full animate-in zoom-in-90 duration-300">
            {/* Top Counter Section: Circular 15s Countdown */}
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center mb-6">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r={radius}
                  className="stroke-white/10"
                  strokeWidth="8"
                  fill="transparent"
                />
                <circle
                  cx="100"
                  cy="100"
                  r={radius}
                  className="stroke-[#C5A880] transition-all duration-1000 ease-linear"
                  strokeWidth="8"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <div className="font-serif font-bold text-5xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white via-[#C5A880] to-[#E6CEB3] leading-none drop-shadow-2xl tracking-tight">
                  {secondsLeft > 0
                    ? secondsLeft < 10
                      ? `0${secondsLeft}`
                      : secondsLeft
                    : "00"}
                </div>
                <span className="text-[9px] font-bold text-[#C5A880]/90 uppercase tracking-[0.25em] mt-1.5">
                  SECONDS REMAINING
                </span>
              </div>

              <div className="absolute inset-0 rounded-full border-2 border-[#C5A880]/40 animate-ping pointer-events-none opacity-40"></div>
            </div>

            {/* DYNAMIC 21-DAY POPUP CARD (Advances every ~714ms) */}
            <div className="w-full max-w-lg transition-all duration-300 transform scale-100">
              <div
                key={currentDayData.day}
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200"
              >
                {/* Glowing Top Pill with Day & Phase */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-serif font-bold text-lg sm:text-xl text-[#C5A880]">
                      DAY {currentDayData.day < 10 ? `0${currentDayData.day}` : currentDayData.day}
                    </span>
                    <span className="text-xs text-gray-400">/ 21</span>
                  </div>

                  <span
                    className={`text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full ${currentDayData.phaseColor} shadow-sm`}
                  >
                    {currentDayData.phase}
                  </span>
                </div>

                {/* Day Protocol Details */}
                <div className="flex items-start gap-4 text-left">
                  <div className="w-12 h-12 rounded-2xl bg-[#C5A880]/20 border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] shrink-0 shadow-sm">
                    <CurrentIcon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white leading-tight">
                      {currentDayData.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed">
                      {currentDayData.detail}
                    </p>
                  </div>
                </div>

                {/* Progress bar inside popup card */}
                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
                  <span>Journey Progress</span>
                  <span className="text-[#C5A880] font-semibold">
                    {Math.round(((currentDayIdx + 1) / 21) * 100)}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full mt-1.5 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#2D6A4F] via-[#C5A880] to-[#C87D69] transition-all duration-300 ease-linear rounded-full"
                    style={{ width: `${((currentDayIdx + 1) / 21) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Mini Step Indicator Dots for all 21 days */}
              <div className="flex items-center justify-center gap-1.5 mt-4 flex-wrap max-w-sm mx-auto">
                {twentyOneDays.map((d, idx) => (
                  <span
                    key={d.day}
                    className={`h-1.5 rounded-full transition-all duration-200 ${idx === currentDayIdx
                      ? "w-4 bg-[#C5A880]"
                      : idx < currentDayIdx
                        ? "w-1.5 bg-[#2D6A4F]"
                        : "w-1.5 bg-white/20"
                      }`}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STAGE 3: THE GRAND REVEAL (Upon finishing 15s and Day 21) */}
        {stage === "revealed" && (
          <div className="flex flex-col items-center animate-in zoom-in-95 duration-500 max-w-xl">
            {/* Confetti & Glow Aura */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#1B4D3E] to-[#C5A880] flex items-center justify-center text-white mb-6 shadow-[0_0_60px_rgba(197,168,128,0.9)] border-2 border-white animate-bounce">
              <Sparkles className="w-10 h-10 text-white" />
            </div>

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C5A880] mb-2">
              All 21 Days Unfolded
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              Welcome to{" "}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-b from-white via-[#EDD9B8] to-[#C5A880]">Supraja</span>
              <br />
              <span className="text-xl sm:text-2xl font-normal tracking-[0.22em] text-[#C5A880]/80">by Atma</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-200/90 leading-relaxed mb-8">
              “No one-size-fits-all promises. A plan built around you.” <br />
              Your personalized 21-day couple journey to reproductive wellness begins now.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
              <Link
                href="/"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#C5A880] via-[#E6CEB3] to-[#C5A880] text-[#04100B] font-bold text-sm tracking-wide shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                <span>Enter Live Experience</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => setStage("idle")}
                className="w-full sm:w-auto px-6 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-xs font-semibold text-gray-200 transition-colors flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Replay Countdown</span>
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
