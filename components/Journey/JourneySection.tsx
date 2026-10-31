"use client";

import React from "react";
import { TornPaperDivider } from "./TornPaperDivider";

export function JourneySection() {
  return (
    <section
      id="journey"
      className="relative w-full min-h-screen bg-[#ede3d3] dark:bg-[#151926] text-slate-900 dark:text-white pt-28 sm:pt-36 pb-48 px-6 sm:px-12 md:px-16 lg:px-24 overflow-x-clip flex flex-col justify-center transition-colors duration-500"
    >
      {/* 1. RIPPED / TORN PAPER EDGE AT THE TOP (Overlaps the scenic hero section) */}
      <TornPaperDivider fillClass="fill-[#ede3d3] dark:fill-[#151926]" />

      {/* Subtle atmospheric ambient glow tailored to the beige / slate contrast */}
      <div className="absolute top-1/3 -left-48 w-[500px] h-[500px] bg-amber-600/10 dark:bg-purple-900/15 rounded-full blur-[120px] pointer-events-none transition-colors duration-500" />
      <div className="absolute bottom-1/4 -right-48 w-[500px] h-[500px] bg-orange-500/10 dark:bg-sky-600/10 rounded-full blur-[120px] pointer-events-none transition-colors duration-500" />

      {/* CENTERED EDITORIAL NARRATIVE CONTAINER */}
      <div className="relative z-10 max-w-4xl lg:max-w-5xl mx-auto space-y-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-600 dark:bg-amber-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-mono tracking-widest text-stone-600 dark:text-white/50 uppercase transition-colors">
            How I got here
          </span>
        </div>

        {/* Large Stylized Storytelling Narrative */}
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.32] sm:leading-[1.26] text-slate-900 dark:text-white/95 select-none transition-colors">
          I started by tearing apart{" "}
          {/* 1. Cyan / Blue Marker Highlight */}
          <span className="relative inline-block px-1 whitespace-nowrap">
            <span className="relative z-10">code and algorithms,</span>
            <span
              className="absolute inset-x-0 bottom-1 sm:bottom-2 h-3.5 sm:h-5 bg-sky-300/60 dark:bg-sky-500/30 -rotate-1 rounded-sm -z-0 pointer-events-none transition-colors"
            />
          </span>{" "}
          curious about{" "}
          {/* 2. Red / Coral Hand-drawn Oval Circle */}
          <span className="relative inline-block px-2.5 sm:px-3 my-1">
            <span className="relative z-10">how software truly ticks.</span>
            <svg
              className="absolute -inset-x-3 -inset-y-2 w-[calc(100%+24px)] h-[calc(100%+16px)] pointer-events-none overflow-visible"
              viewBox="0 0 280 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 14,32 C 14,12 90,6 190,8 C 260,10 274,24 268,40 C 262,54 200,60 100,56 C 30,54 8,44 18,26"
                stroke="#ef4444"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="opacity-90"
              />
            </svg>
          </span>{" "}
          Then I realized great engineering isn&apos;t just{" "}
          {/* 3. Yellow / Amber Marker Brush Highlight */}
          <span className="relative inline-block px-1 whitespace-nowrap my-1">
            <span className="relative z-10">fast under the hood,</span>
            <span
              className="absolute inset-x-0 bottom-1 sm:bottom-2 h-4 sm:h-6 bg-amber-300/70 dark:bg-amber-400/35 rotate-1 rounded-sm -z-0 pointer-events-none transition-colors"
            />
          </span>{" "}
          it&apos;s about how effortlessly people experience it. Now at{" "}
          {/* 4. Soft Golden Pill with Sparkle Doodle */}
          <span className="relative inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-200/60 dark:bg-[#fde68a]/20 border border-amber-400/60 dark:border-[#fde68a]/30 text-amber-950 dark:text-amber-200 text-[0.92em] align-middle transition-colors">
            <span className="relative z-10 font-black">Infosys,*</span>
            <svg
              className="w-4 h-4 text-amber-700 dark:text-amber-300 animate-pulse inline-block transition-colors"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </span>{" "}
          architecting resilient full-stack systems and turning complex code into{" "}
          {/* 5. Purple Wavy Accent Line */}
          <span className="relative inline-block px-1 whitespace-nowrap">
            <span className="relative z-10">effortless digital products.</span>
            <svg
              className="absolute left-0 -bottom-1 sm:-bottom-2 w-full h-3.5 pointer-events-none overflow-visible"
              viewBox="0 0 240 14"
              fill="none"
            >
              <path
                d="M 2,9 Q 60,2 120,8 T 238,7"
                className="stroke-purple-600 dark:stroke-purple-400 transition-colors"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
}
