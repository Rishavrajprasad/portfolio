"use client";

import React from "react";
import { SKILLS_ROW_1, SKILLS_ROW_2, SkillItem } from "./skillsData";
import { TornPaperDivider } from "../Journey/TornPaperDivider";

export function SkillsSection() {
  const ALL_SKILLS = [...SKILLS_ROW_1, ...SKILLS_ROW_2];

  const renderSkillTile = (item: SkillItem) => {
    const IconComponent = item.icon;

    return (
      <div
        key={item.id}
        className="flex flex-col items-center justify-start w-full max-w-[84px] sm:max-w-[92px] text-center group cursor-pointer select-none"
      >
        {/* Squircle App Tile */}
        <div
          className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${item.bgGradient} flex items-center justify-center border border-white/25 shadow-[0_8px_20px_rgba(0,0,0,0.18),inset_0_1px_1px_rgba(255,255,255,0.4)] dark:shadow-[0_10px_24px_rgba(0,0,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.3)] transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-110 group-hover:shadow-[0_16px_32px_rgba(0,0,0,0.3)]`}
        >
          {/* Subtle glossy glass shine overlay */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/30 via-white/5 to-transparent pointer-events-none" />

          {/* Icon */}
          <IconComponent
            className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
            style={{ color: item.iconColor }}
          />
        </div>

        {/* Clean Centered Label */}
        <span className="text-[11px] sm:text-xs font-semibold text-slate-800 dark:text-slate-200 tracking-tight mt-2 transition-colors duration-200 group-hover:text-amber-600 dark:group-hover:text-amber-300 block w-full truncate px-0.5">
          {item.name}
        </span>
      </div>
    );
  };

  return (
    <section
      id="skills"
      className="relative w-full min-h-screen bg-[#ede3d3] dark:bg-[#151926] text-slate-900 dark:text-white pt-28 sm:pt-36 pb-36 px-4 sm:px-8 md:px-12 overflow-x-clip flex flex-col justify-center items-center transition-colors duration-500"
    >
      {/* 1. TORN PAPER TRANSITION OVER PREVIOUS PROJECT SECTION */}
      <TornPaperDivider position="top" fillClass="fill-[#ede3d3] dark:fill-[#151926]" />

      {/* Main Editorial Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center space-y-10 sm:space-y-12">
        {/* SECTION HEADER */}
        <div className="space-y-3 sm:space-y-4">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2">
            <span className="text-xs sm:text-sm font-mono tracking-widest text-stone-600 dark:text-stone-400 uppercase font-bold">
              My stack
            </span>
          </div>

          {/* Expressive Headline */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.15] text-slate-900 dark:text-white select-none">
            Everything I know, unwrapped.
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed">
            Eighteen technologies I build with, from scalable backends to high-craft interfaces.
          </p>
        </div>

        {/* 2. SQUIRCLE APP TILES (Symmetric responsive grid: 9 on desktop, 6 on tablet, 3 on mobile) */}
        <div className="relative w-full py-4 flex flex-col items-center justify-center">
          <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9 gap-x-2 sm:gap-x-4 lg:gap-x-5 gap-y-7 sm:gap-y-9 w-full max-w-5xl mx-auto justify-items-center items-start">
            {ALL_SKILLS.map(renderSkillTile)}
          </div>
        </div>
      </div>
    </section>
  );
}

