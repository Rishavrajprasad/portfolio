"use client";

import React from "react";
import { HERO_CONFIG } from "./heroConfig";
import { HeroBackground } from "./HeroBackground";
import { HeroTopBar } from "./HeroTopBar";
import { HeroContent } from "./HeroContent";
import { FloatingCard } from "./FloatingCard";
import { ScrollIndicator } from "./ScrollIndicator";
import { FloatingNavbar } from "./FloatingNavbar";
import { useParallax } from "./useParallax";
import { useAmbientAudio } from "./useAmbientAudio";
import { FiVolume2, FiVolumeX } from "react-icons/fi";

export default function Hero() {
  const parallax = useParallax();
  const { isPlaying, toggleSound } = useAmbientAudio();

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen h-screen overflow-hidden flex flex-col justify-between select-none"
    >
      {/* 1. IMMERSIVE SCENIC BACKGROUND WITH DAY/NIGHT CROSSFADE & LOCKED LANDMARKS */}
      <HeroBackground
        bgParallaxX={parallax.bgX}
        bgParallaxY={parallax.bgY}
      >
        {HERO_CONFIG.floatingItems.map((item, index) => (
          <FloatingCard key={item.id} item={item} index={index} />
        ))}
      </HeroBackground>

      {/* 2. TOP BAR (Status badge & Day/Night Theme Toggle) */}
      <HeroTopBar />

      {/* 3. HERO CONTENT & BOTTOM CONTROLS (Pass-through clicks to landscape pins) */}
      <div className="relative z-20 flex-1 w-full h-full flex flex-col justify-between pointer-events-none">
        {/* Top-Left Intro & Main Heading */}
        <HeroContent
          fgParallaxX={parallax.fgX}
          fgParallaxY={parallax.fgY}
        />

        {/* Center-Bottom Scroll Indicator */}
        <div className="relative z-30 pb-24 md:pb-28">
          <ScrollIndicator />
        </div>
      </div>

      {/* 4. BOTTOM-LEFT SECONDARY AUDIO TOGGLE */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:block pointer-events-auto">
        <button
          type="button"
          onClick={toggleSound}
          className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 backdrop-blur-md border shadow-md ${
            isPlaying
              ? "bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/30"
              : "bg-black/40 hover:bg-black/60 text-white/80 hover:text-white border-white/15 hover:border-white/30"
          }`}
          aria-label={isPlaying ? "Mute ambient audio" : "Unmute ambient audio"}
        >
          {isPlaying ? (
            <FiVolume2 className="w-4 h-4" />
          ) : (
            <FiVolumeX className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* 5. FLOATING GLASS NAVBAR (Bottom-center capsule) */}
      <FloatingNavbar />
    </section>
  );
}
