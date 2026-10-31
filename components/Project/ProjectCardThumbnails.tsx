"use client";

import React from "react";
import { FiWifi, FiActivity, FiCpu, FiSmartphone, FiArrowUpRight } from "react-icons/fi";

// -------------------------------------------------------------
// 1. FileFlow Thumbnail (matches reference style 1 with "View" badge)
// -------------------------------------------------------------
export function FileFlowThumbnail() {
  return (
    <div className="relative w-full h-44 sm:h-48 rounded-lg bg-white border border-black/5 flex flex-col items-center justify-center p-4 overflow-hidden group/thumb">
      {/* Background subtle mesh/gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-amber-50/40 pointer-events-none" />

      {/* Brand & QR visual */}
      <div className="relative z-10 flex flex-col items-center space-y-2 text-center">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-sky-500 text-white flex items-center justify-center shadow-sm">
            <FiWifi className="w-4 h-4 animate-pulse" />
          </div>
          <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900">
            File<span className="text-sky-500">Flow</span>
          </span>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-[10px] font-mono text-slate-600">
          <span>Instant P2P Transfer</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        </div>
      </div>

      {/* Floating Yellow "View" Badge (Identical to reference image) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-3 sm:translate-y-4 group-hover/thumb:scale-110 transition-transform duration-300 z-20">
        <div className="w-12 h-12 rounded-full bg-[#fde047] text-slate-900 font-bold text-xs flex items-center justify-center shadow-[0_4px_12px_rgba(253,224,71,0.5)] border border-amber-300">
          <span>View</span>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 2. LocTrack Thumbnail (matches reference style 2 with monitor & telemetry)
// -------------------------------------------------------------
export function LocTrackThumbnail() {
  return (
    <div className="relative w-full h-44 sm:h-48 rounded-lg bg-[#0a101b] dark:bg-[#070b13] border border-black/5 dark:border-white/10 flex flex-col justify-between p-3 overflow-hidden group/thumb">
      {/* Tactical radar rings & grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf810_1px,transparent_1px),linear-gradient(to_bottom,#38bdf810_1px,transparent_1px)] bg-[size:16px_16px]" />
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full border border-sky-500/20 pointer-events-none" />
      <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full border border-sky-500/25 pointer-events-none" />

      {/* Top toolbar */}
      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-sky-300/80">
        <span className="flex items-center gap-1">
          <FiActivity className="w-3 h-3 text-sky-400 animate-pulse" />
          <span>LIVE TELEMETRY</span>
        </span>
        <span className="px-1.5 py-0.5 rounded bg-sky-950/80 border border-sky-500/30 text-sky-200">
          &lt;18ms
        </span>
      </div>

      {/* Center Ping Target */}
      <div className="relative z-10 flex flex-col items-center my-auto">
        <div className="relative">
          <span className="w-3.5 h-3.5 rounded-full bg-sky-400 block shadow-[0_0_12px_#38bdf8]" />
          <span className="absolute -inset-1.5 rounded-full bg-sky-400/40 animate-ping" />
        </div>
        <span className="mt-1.5 text-[10px] font-mono text-sky-200 bg-black/70 px-2 py-0.5 rounded border border-sky-400/30 backdrop-blur-sm">
          LAT 28.6139° N • LNG 77.2090° E
        </span>
      </div>

      {/* Bottom status */}
      <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-white/50 border-t border-white/10 pt-1.5">
        <span>Leaflet + WebSockets</span>
        <span className="text-sky-400 font-semibold group-hover/thumb:translate-x-0.5 transition-transform flex items-center gap-0.5">
          Stream <FiArrowUpRight className="w-3 h-3" />
        </span>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 3. CropGuard AI Thumbnail (matches reference style 3 with camera/sensor)
// -------------------------------------------------------------
export function CropGuardThumbnail() {
  return (
    <div className="relative w-full h-44 sm:h-48 rounded-lg bg-[#0e1712] dark:bg-[#09110c] border border-black/5 dark:border-white/10 flex flex-col justify-between p-3.5 overflow-hidden group/thumb">
      {/* Emerald ambient blur */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />

      {/* Top telemetry */}
      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-emerald-300">
        <span className="flex items-center gap-1">
          <FiCpu className="w-3 h-3 text-emerald-400" />
          <span>VISION CNN</span>
        </span>
        <span className="px-1.5 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30 text-emerald-200 font-bold">
          94.8% ACC
        </span>
      </div>

      {/* Center scan reticle with leaf SVG */}
      <div className="relative z-10 my-auto flex items-center justify-center gap-3">
        <div className="relative p-2 rounded-lg border border-dashed border-emerald-400/50 bg-emerald-950/30">
          <span className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-emerald-400" />
          <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-emerald-400" />
          <svg className="w-10 h-10 text-emerald-400/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
          </svg>
        </div>
        <div className="text-left space-y-0.5">
          <div className="text-[11px] font-bold text-white">Solanum Specimen</div>
          <div className="text-[10px] text-emerald-300 font-mono">Foliar Diagnostics</div>
          <div className="text-[9px] text-white/50">TensorFlow & OpenCV</div>
        </div>
      </div>

      {/* Bottom accuracy meter */}
      <div className="relative z-10 border-t border-white/10 pt-1.5">
        <div className="w-full h-1 rounded-full bg-white/10 overflow-hidden">
          <div className="w-[94.8%] h-full bg-gradient-to-r from-emerald-500 to-teal-300 rounded-full" />
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 4. GlamHub Thumbnail (matches reference style 4 with mobile screen frames)
// -------------------------------------------------------------
export function GlamHubThumbnail() {
  return (
    <div className="relative w-full h-44 sm:h-48 rounded-lg bg-[#181119] dark:bg-[#110b12] border border-black/5 dark:border-white/10 flex flex-col justify-between p-3 overflow-hidden group/thumb">
      {/* Pink ambient glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/15 rounded-full blur-2xl pointer-events-none" />

      {/* Top telemetry */}
      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-pink-300">
        <span className="flex items-center gap-1">
          <FiSmartphone className="w-3 h-3 text-pink-400" />
          <span>FLUTTER & DART</span>
        </span>
        <span className="px-1.5 py-0.5 rounded bg-pink-950/80 border border-pink-500/30 text-pink-200">
          iOS & Android
        </span>
      </div>

      {/* Center Simulated Mobile Card Preview */}
      <div className="relative z-10 my-auto p-2 rounded-lg bg-black/40 border border-pink-500/20 flex items-center justify-between gap-2">
        <div className="w-8 h-8 rounded-full bg-pink-500/30 flex items-center justify-center text-pink-300 font-bold text-xs">
          ★
        </div>
        <div className="flex-1 text-left">
          <div className="text-[11px] font-bold text-white">Luxe Beauty Lounge</div>
          <div className="text-[9px] text-pink-300/80 font-mono">14:00 Today • $45.00</div>
        </div>
        <div className="px-2 py-0.5 rounded bg-pink-500/20 text-pink-200 text-[9px] font-mono font-bold">
          Stripe
        </div>
      </div>

      {/* Bottom status */}
      <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-white/50 border-t border-white/10 pt-1.5">
        <span>Salon Marketplace</span>
        <span className="text-pink-400 font-semibold group-hover/thumb:translate-x-0.5 transition-transform flex items-center gap-0.5">
          Explore <FiArrowUpRight className="w-3 h-3" />
        </span>
      </div>
    </div>
  );
}

