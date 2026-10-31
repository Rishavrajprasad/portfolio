"use client";

import React from "react";

export function PlaceInteractionHint() {
  return (
    <div
      className="hidden lg:flex items-center gap-2 absolute left-[59%] top-[54%] z-20 pointer-events-none select-none text-white/70 animate-fade-in"
      aria-hidden="true"
    >
      <span className="font-sans italic text-xs tracking-wider drop-shadow-md">
        click a place
      </span>
      {/* Hand-drawn sketch arrow pointing towards a place marker */}
      <svg
        className="w-8 h-6 text-white/70 overflow-visible"
        viewBox="0 0 36 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 2 16 C 10 16, 20 18, 28 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="2 2"
        />
        <path
          d="M 23 7 L 29 8 L 27 14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

