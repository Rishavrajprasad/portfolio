"use client";

import React from "react";
import { HERO_CONFIG } from "./heroConfig";

interface HeroBackgroundProps {
  bgParallaxX?: number;
  bgParallaxY?: number;
  children?: React.ReactNode;
}

export function HeroBackground({
  bgParallaxX = 0,
  bgParallaxY = 0,
  children,
}: HeroBackgroundProps) {
  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden select-none z-0 bg-gradient-to-b from-[#8eb3d4] via-[#c2d7e8] to-[#e4ded6] dark:from-[#090e1a] dark:via-[#101728] dark:to-[#090d16]"
      aria-hidden="false"
    >
      {/* DESKTOP SCENE CANVAS:
          Locks image & pins into the exact 1536 x 1024 aspect-ratio coordinate space.
          Guarantees that zooming in/out or resizing never shifts pins relative to landmarks! */}
      <div
        className="hidden md:block absolute left-1/2 top-1/2 will-change-transform transition-transform duration-100 ease-out"
        style={{
          width: "max(100vw, calc(100vh * (1536 / 1024)))",
          height: "max(100vh, calc(100vw * (1024 / 1536)))",
          transform: `translate(-50%, -50%) translate3d(${bgParallaxX}px, ${bgParallaxY}px, 0)`,
        }}
      >
        {/* Day Desktop - High Priority Async Render */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_CONFIG.backgrounds.dayDesktop}
          alt=""
          role="presentation"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out opacity-100 dark:opacity-0 pointer-events-none"
        />

        {/* Night Desktop - Deferred/Lazy */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_CONFIG.backgrounds.nightDesktop}
          alt=""
          role="presentation"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out opacity-0 dark:opacity-100 pointer-events-none"
        />

        {/* Readability Overlays */}
        <div className="absolute inset-0 w-full h-full transition-opacity duration-1000 bg-gradient-to-b from-black/40 via-transparent to-black/50 dark:from-black/60 dark:via-transparent dark:to-black/80 pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-full md:w-3/5 bg-gradient-to-r from-black/50 via-black/20 to-transparent dark:from-black/70 dark:via-black/35 dark:to-transparent transition-opacity duration-1000 pointer-events-none" />

        {/* PINNED LANDMARKS (Locked to exact image pixels, unaffected by zoom!) */}
        <div className="absolute inset-0 w-full h-full pointer-events-auto">
          {children}
        </div>
      </div>

      {/* MOBILE BACKGROUND (below md) */}
      <div className="block md:hidden absolute inset-0 w-full h-full">
        {/* Day Mobile */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_CONFIG.backgrounds.dayMobile}
          alt=""
          role="presentation"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-100 dark:opacity-0 pointer-events-none"
          style={{ objectPosition: "center 30%" }}
        />

        {/* Night Mobile */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_CONFIG.backgrounds.nightMobile}
          alt=""
          role="presentation"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-0 dark:opacity-100 pointer-events-none"
          style={{ objectPosition: "center 30%" }}
        />

        {/* Mobile Overlays */}
        <div className="absolute inset-0 w-full h-full transition-opacity duration-1000 bg-gradient-to-b from-black/40 via-transparent to-black/50 dark:from-black/60 dark:via-transparent dark:to-black/80 pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-black/50 via-black/20 to-transparent dark:from-black/70 dark:via-black/35 dark:to-transparent transition-opacity duration-1000 pointer-events-none" />

        {/* PINNED LANDMARKS & BADGES FOR MOBILE */}
        <div className="absolute inset-0 w-full h-full pointer-events-auto">
          {children}
        </div>
      </div>

      {/* Soft radial vignette around perimeter */}
      <div
        className="absolute inset-0 w-full h-full opacity-60 mix-blend-multiply pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.6) 100%)",
        }}
      />
    </div>
  );
}
