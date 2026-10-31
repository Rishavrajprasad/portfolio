"use client";

import React from "react";
import {
  FiCheckCircle,
  FiActivity,
  FiCpu,
  FiSmartphone,
  FiWifi,
  FiShare2,
  FiShield,
  FiStar,
} from "react-icons/fi";

// -------------------------------------------------------------
// 1. FileFlow Mockup: Instant P2P File Transfer & QR Generator
// -------------------------------------------------------------
export function FileFlowMockup() {
  return (
    <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-[#121622] to-[#0a0d14] border border-white/10 p-4 sm:p-5 flex flex-col justify-between overflow-hidden group/mockup">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-amber-500/15 rounded-full blur-3xl pointer-events-none transition-opacity duration-500 group-hover/mockup:opacity-100 opacity-60" />

      {/* Top simulated toolbar */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[11px] text-white/40">fileflow.transfer/p2p</span>
        </div>
        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-[10px] font-mono">
          <FiWifi className="w-3 h-3 animate-pulse" />
          <span>Active Peer Link</span>
        </div>
      </div>

      {/* Center Interactive Visual: QR + Dropzone + Live Transfer */}
      <div className="relative z-10 grid grid-cols-5 gap-3 items-center my-auto">
        {/* QR Code Graphic Card */}
        <div className="col-span-2 flex flex-col items-center justify-center p-3 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md">
          <div className="relative p-2 rounded-lg bg-white/95 text-slate-900 shadow-lg">
            {/* Stylized QR Code SVG */}
            <svg className="w-16 h-16 sm:w-20 sm:h-20" viewBox="0 0 100 100" fill="currentColor">
              {/* Top-left position marker */}
              <rect x="0" y="0" width="30" height="30" rx="4" />
              <rect x="6" y="6" width="18" height="18" rx="2" fill="white" />
              <rect x="10" y="10" width="10" height="10" rx="1" />
              {/* Top-right position marker */}
              <rect x="70" y="0" width="30" height="30" rx="4" />
              <rect x="76" y="6" width="18" height="18" rx="2" fill="white" />
              <rect x="80" y="10" width="10" height="10" rx="1" />
              {/* Bottom-left position marker */}
              <rect x="0" y="70" width="30" height="30" rx="4" />
              <rect x="6" y="76" width="18" height="18" rx="2" fill="white" />
              <rect x="10" y="80" width="10" height="10" rx="1" />
              {/* Data dots */}
              <rect x="40" y="10" width="8" height="8" rx="1" />
              <rect x="52" y="10" width="8" height="8" rx="1" />
              <rect x="40" y="24" width="8" height="8" rx="1" />
              <rect x="52" y="36" width="8" height="8" rx="1" />
              <rect x="70" y="45" width="8" height="8" rx="1" />
              <rect x="85" y="45" width="8" height="8" rx="1" />
              <rect x="40" y="55" width="8" height="8" rx="1" />
              <rect x="55" y="65" width="8" height="8" rx="1" />
              <rect x="70" y="75" width="8" height="8" rx="1" />
              <rect x="85" y="85" width="8" height="8" rx="1" />
              <rect x="40" y="85" width="8" height="8" rx="1" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-b from-amber-400/20 via-transparent to-amber-500/20 rounded-lg pointer-events-none" />
          </div>
          <span className="mt-2 text-[10px] font-mono text-white/50 tracking-wider">SCAN TO RECEIVE</span>
        </div>

        {/* Transfer Status & File Info */}
        <div className="col-span-3 flex flex-col justify-center space-y-2.5">
          <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-semibold text-white/90 truncate">production_bundle.tar.gz</span>
              <span className="text-[10px] font-mono text-amber-400">100%</span>
            </div>
            {/* Progress bar */}
            <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full animate-pulse" />
            </div>
            <div className="flex items-center justify-between mt-2 text-[10px] text-white/50 font-mono">
              <span>34.2 MB • Zero Auth</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <FiCheckCircle className="w-3 h-3" /> Ready
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs">
            <FiShare2 className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[11px] font-medium truncate">Instant QR & auto-expiring stream</span>
          </div>
        </div>
      </div>

      {/* Bottom Footer Telemetry */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/5 text-[10px] font-mono text-white/40">
        <span>TLS 1.3 End-to-End</span>
        <span className="text-amber-400/80">No login required</span>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 2. LocTrack Mockup: Real-Time Telemetry & GIS Radar Screen
// -------------------------------------------------------------
export function LocTrackMockup() {
  return (
    <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-[#0b121e] to-[#070b13] border border-white/10 p-4 sm:p-5 flex flex-col justify-between overflow-hidden group/mockup">
      {/* Cyan/Sky Blue ambient glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/15 rounded-full blur-3xl pointer-events-none transition-opacity duration-500 group-hover/mockup:opacity-100 opacity-60" />

      {/* Top simulated toolbar */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[11px] text-white/40">loctrack.telemetry/live</span>
        </div>
        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-[10px] font-mono">
          <FiActivity className="w-3 h-3 text-sky-400 animate-pulse" />
          <span>&lt; 18ms Latency</span>
        </div>
      </div>

      {/* Tactical Radar / Map Viewport */}
      <div className="relative z-10 my-auto h-36 w-full rounded-xl bg-black/40 border border-sky-500/20 overflow-hidden flex items-center justify-center">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c715_1px,transparent_1px),linear-gradient(to_bottom,#0284c715_1px,transparent_1px)] bg-[size:20px_20px]" />

        {/* Concentric radar rings */}
        <div className="absolute w-28 h-28 rounded-full border border-sky-500/20 pointer-events-none" />
        <div className="absolute w-44 h-44 rounded-full border border-sky-500/15 pointer-events-none" />
        <div className="absolute w-60 h-60 rounded-full border border-sky-500/10 pointer-events-none" />

        {/* Radar crosshairs */}
        <div className="absolute inset-x-0 top-1/2 h-px bg-sky-500/20 pointer-events-none" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-sky-500/20 pointer-events-none" />

        {/* Radar sweep beam animation */}
        <div
          className="absolute w-32 h-32 rounded-full border-r-2 border-sky-400/40 pointer-events-none"
          style={{
            background: "conic-gradient(from 0deg, transparent 70%, rgba(56, 189, 248, 0.25) 100%)",
            animation: "spin 5s linear infinite",
          }}
        />

        {/* Active Node Target with Ping */}
        <div className="relative z-20 flex flex-col items-center">
          <div className="relative">
            <span className="w-3.5 h-3.5 rounded-full bg-sky-400 block shadow-[0_0_12px_#38bdf8]" />
            <span className="absolute -inset-1 rounded-full bg-sky-400/50 animate-ping" />
          </div>
          <div className="mt-1 px-2 py-0.5 rounded bg-black/80 border border-sky-400/40 text-[9px] font-mono text-sky-200 backdrop-blur-sm shadow-md whitespace-nowrap">
            VEHICLE_NODE_88 • 48.2 km/h
          </div>
        </div>

        {/* Telemetry Corner Readout HUD */}
        <div className="absolute bottom-2 left-2 text-[9px] font-mono text-sky-300/70 bg-black/60 px-1.5 py-0.5 rounded border border-white/5">
          LAT 28.6139° N • LNG 77.2090° E
        </div>
        <div className="absolute top-2 right-2 text-[9px] font-mono text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-500/30">
          WEBSOCKET ACTIVE
        </div>
      </div>

      {/* Bottom Footer Telemetry */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/5 text-[10px] font-mono text-white/40">
        <span>Leaflet GIS + Socket.io Cluster</span>
        <span className="text-sky-400/90">Bi-directional push</span>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 3. CropGuard AI Mockup: Computer Vision Classifier HUD
// -------------------------------------------------------------
export function CropGuardMockup() {
  return (
    <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-[#0e1915] to-[#070e0b] border border-white/10 p-4 sm:p-5 flex flex-col justify-between overflow-hidden group/mockup">
      {/* Emerald green ambient glow */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none transition-opacity duration-500 group-hover/mockup:opacity-100 opacity-60" />

      {/* Top simulated toolbar */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[11px] text-white/40">cropguard.ai/inference</span>
        </div>
        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-[10px] font-mono">
          <FiCpu className="w-3 h-3 text-emerald-400" />
          <span>CNN LeNet-5 Modified</span>
        </div>
      </div>

      {/* Center Camera Inspection Viewport */}
      <div className="relative z-10 my-auto h-36 w-full rounded-xl bg-black/50 border border-emerald-500/20 overflow-hidden flex items-center justify-between p-3.5">
        {/* Inspection Reticle Overlay */}
        <div className="relative w-32 h-28 rounded-lg border-2 border-dashed border-emerald-400/40 bg-emerald-950/20 flex flex-col items-center justify-center p-2">
          {/* Target Corner Accents */}
          <span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-emerald-400" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-emerald-400" />
          <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-emerald-400" />
          <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-emerald-400" />

          {/* Leaf outline SVG */}
          <svg className="w-12 h-12 text-emerald-400/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
          </svg>
          <span className="mt-1 text-[9px] font-mono text-emerald-300">SCAN: FOLIAR</span>
        </div>

        {/* Diagnosis & Probability Card */}
        <div className="flex-1 ml-4 space-y-2">
          <div>
            <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider">Classification</div>
            <div className="text-sm font-bold text-white/95">Solanum Lycopersicum</div>
            <div className="text-[11px] text-emerald-300/80 font-mono">Diagnosis: Early Blight</div>
          </div>

          <div>
            <div className="flex items-center justify-between text-[10px] font-mono text-white/60 mb-1">
              <span>Confidence Score</span>
              <span className="text-emerald-400 font-bold">94.8%</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-[94.8%] bg-gradient-to-r from-emerald-500 to-teal-300 rounded-full" />
            </div>
          </div>

          <div className="text-[9px] font-mono text-white/40">Dataset: 20,639 high-res agricultural samples</div>
        </div>
      </div>

      {/* Bottom Footer Telemetry */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/5 text-[10px] font-mono text-white/40">
        <span>Keras & TensorFlow Pipeline</span>
        <span className="text-emerald-400/90">Kaggle Verified</span>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 4. GlamHub Mockup: Mobile App Marketplace Interface
// -------------------------------------------------------------
export function GlamHubMockup() {
  return (
    <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-[#1a101a] to-[#0c080d] border border-white/10 p-4 sm:p-5 flex flex-col justify-between overflow-hidden group/mockup">
      {/* Rose pink ambient glow */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-pink-500/15 rounded-full blur-3xl pointer-events-none transition-opacity duration-500 group-hover/mockup:opacity-100 opacity-60" />

      {/* Top simulated toolbar */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[11px] text-white/40">glamhub.app/mobile-sdk</span>
        </div>
        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-pink-500/15 border border-pink-400/30 text-pink-300 text-[10px] font-mono">
          <FiSmartphone className="w-3 h-3 text-pink-400" />
          <span>Flutter & Firebase</span>
        </div>
      </div>

      {/* Center Simulated Mobile Booking Card */}
      <div className="relative z-10 my-auto h-36 w-full rounded-xl bg-black/40 border border-pink-500/20 p-3 flex items-center justify-between gap-3">
        {/* Salon Card Visual */}
        <div className="w-24 h-full rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-600/30 border border-white/10 flex flex-col items-center justify-center text-center p-2">
          <div className="w-9 h-9 rounded-full bg-pink-500/30 flex items-center justify-center text-pink-300 mb-1">
            <FiStar className="w-4 h-4 fill-current" />
          </div>
          <span className="text-[10px] font-bold text-white leading-tight">Luxe Studio</span>
          <span className="text-[9px] text-pink-300/80 font-mono">4.9 ★ (340+)</span>
        </div>

        {/* Booking Slots & Payment Simulation */}
        <div className="flex-1 flex flex-col justify-between h-full py-0.5">
          <div>
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-white/90">Hair & Styling Session</span>
              <span className="font-bold text-pink-300">$45.00</span>
            </div>
            <div className="text-[10px] text-white/50">Includes consultation & custom trim</div>
          </div>

          {/* Time Slot Chips */}
          <div className="flex items-center gap-1.5 my-1">
            <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[9px] font-mono text-white/60">
              10:30 AM
            </span>
            <span className="px-2 py-0.5 rounded-md bg-pink-500/25 border border-pink-400/40 text-[9px] font-mono text-pink-200 font-bold">
              02:00 PM ✓
            </span>
            <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[9px] font-mono text-white/60">
              04:30 PM
            </span>
          </div>

          {/* Stripe 1-Tap Pill */}
          <div className="flex items-center justify-between px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/15">
            <span className="text-[10px] font-mono text-white/70 flex items-center gap-1">
              <FiShield className="w-3 h-3 text-emerald-400" /> Stripe Secure Checkout
            </span>
            <span className="text-[10px] font-bold text-pink-300">Booked</span>
          </div>
        </div>
      </div>

      {/* Bottom Footer Telemetry */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/5 text-[10px] font-mono text-white/40">
        <span>Cross-Platform iOS & Android</span>
        <span className="text-pink-400/90">Multi-Vendor Ready</span>
      </div>
    </div>
  );
}
