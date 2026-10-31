"use client";

import React from "react";
import { HERO_CONFIG } from "./heroConfig";
import { ThemeToggle } from "./ThemeToggle";

export function HeroTopBar() {
  return (
    <header className="relative z-30 w-full max-w-full px-4 sm:px-6 md:px-10 lg:px-14 pt-4 sm:pt-6 flex items-center justify-between pointer-events-auto box-border">
      {/* LEFT: Status badge */}
      {HERO_CONFIG.topBar.showStatusBadge ? (
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-medium bg-black/35 hover:bg-black/50 text-white/90 backdrop-blur-md border border-white/15 transition-all duration-300 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="tracking-wide">
              <span className="hidden xs:inline">{HERO_CONFIG.personal.statusBadge}</span>
              <span className="xs:hidden">AVAILABLE</span>
            </span>
          </div>
        </div>
      ) : (
        <div />
      )}

      {/* RIGHT: Theme toggle (Day / Night) */}
      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 ml-auto">
        <ThemeToggle />
      </div>
    </header>
  );
}
