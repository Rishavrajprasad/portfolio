"use client";

import React from "react";
import { HERO_CONFIG } from "./heroConfig";

interface HeroContentProps {
  fgParallaxX?: number;
  fgParallaxY?: number;
}

export function HeroContent({
  fgParallaxX = 0,
  fgParallaxY = 0,
}: HeroContentProps) {
  return (
    <div
      className="relative z-20 max-w-3xl lg:max-w-4xl pt-6 sm:pt-10 md:pt-14 px-6 sm:px-10 md:px-12 lg:px-16 transition-transform duration-100 ease-out will-change-transform pointer-events-auto"
      style={{
        transform: `translate3d(${fgParallaxX}px, ${fgParallaxY}px, 0)`,
      }}
    >
      {/* 4. Top-left Introduction */}
      <div className="flex items-center gap-2 mb-2 sm:mb-3 animate-fade-in-up">
        {/* Glowing avatar dot */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-60"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.7)]"></span>
        </span>

        {/* Small greeting */}
        <span className="text-xs sm:text-sm font-medium tracking-wide text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          {HERO_CONFIG.personal.greeting}
        </span>
      </div>

      {/* 5. Main Hero Heading (strictly 2 lines with whitespace-nowrap) */}
      <h1 className="text-white font-extrabold tracking-tight leading-[1.1] sm:leading-[1.08] drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] text-[24px] xs:text-[28px] sm:text-[34px] md:text-[40px] lg:text-[46px] xl:text-[50px] select-none">
        <span className="block whitespace-nowrap">{HERO_CONFIG.personal.headingLines[0]}</span>
        {/* 6. Highlight / Strikethrough Phrase */}
        <span className="relative inline-block text-white font-black whitespace-nowrap mt-1">
          {HERO_CONFIG.personal.headingLines[1]}

          {/* Hand-drawn energetic strikethrough / highlight line SVG */}
          <svg
            className="absolute -left-2 top-1/2 -translate-y-1/2 w-[calc(100%+16px)] h-6 sm:h-8 md:h-10 pointer-events-none overflow-visible"
            viewBox="0 0 320 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Background glow stroke */}
            <path
              d="M 4 20 C 60 12, 160 24, 314 16"
              stroke="#f59e0b"
              strokeWidth="8"
              strokeLinecap="round"
              className="opacity-50 blur-[3px]"
            />
            {/* Main hand-drawn accent stroke */}
            <path
              d="M 6 20 C 70 13, 170 25, 312 17"
              stroke="#fbbf24"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="400"
              strokeDashoffset="0"
              className="hero-stroke-animate"
            />
            {/* Secondary expressive sketch underline */}
            <path
              d="M 16 28 C 90 25, 200 30, 298 26"
              stroke="#f97316"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="300"
              strokeDashoffset="0"
              className="hero-stroke-animate-delay"
              opacity="0.9"
            />
          </svg>
        </span>
      </h1>

      {/* 7. Subtitle */}
      <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-white/85 font-normal max-w-[520px] leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] antialiased">
        {HERO_CONFIG.personal.subtitle}
      </p>
    </div>
  );
}
