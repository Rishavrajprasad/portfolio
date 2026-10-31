"use client";

import React, { useState } from "react";
import { FloatingItem } from "./heroConfig";
import {
  FiUser,
  FiCode,
  FiCompass,
  FiStar,
  FiExternalLink,
  FiBriefcase,
  FiFolder,
} from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

interface FloatingCardProps {
  item: FloatingItem;
  index: number;
}

export function FloatingCard({ item, index }: FloatingCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Staggered float animation durations and delays for the pill
  const animationDuration = `${4.5 + (index % 3) * 0.7}s`;
  const animationDelay = `${(index * 0.9) % 2.5}s`;

  // Render icon based on iconType
  const renderIcon = () => {
    switch (item.iconType) {
      case "education":
        return <FaGraduationCap className="w-3.5 h-3.5 text-orange-300" />;
      case "person":
        return <FiUser className="w-3.5 h-3.5 text-yellow-300" />;
      case "briefcase":
        return <FiBriefcase className="w-3.5 h-3.5 text-sky-300" />;
      case "folder":
        return <FiFolder className="w-3.5 h-3.5 text-purple-300" />;
      case "rocket":
        return <FiCompass className="w-3.5 h-3.5 text-red-300" />;
      case "sparkles":
        return <FiStar className="w-3.5 h-3.5 text-amber-300" />;
      case "code":
      default:
        return <FiCode className="w-3.5 h-3.5 text-emerald-300" />;
    }
  };

  const pulseColor = item.pulseColor || "#f97316";

  // Alignment classes for popover placement
  const isAlignRight = item.alignPopover === "right";
  const isAlignLeft = item.alignPopover === "left";

  const popoverPositionClass = isAlignRight
    ? "right-0 sm:-right-8"
    : isAlignLeft
    ? "left-0 sm:-left-8"
    : "left-1/2 -translate-x-1/2";

  const pointerPositionClass = isAlignRight
    ? "right-8"
    : isAlignLeft
    ? "left-8"
    : "left-1/2 -translate-x-1/2";

  return (
    <div
      className={`absolute z-20 pointer-events-auto select-none ${
        !item.mobileVisible ? "hidden md:block" : "block"
      }`}
      style={{
        left: `${item.x}%`,
        top: `${item.y}%`,
      }}
    >
      {/* ANCHOR WRAPPER: Origin (0,0) is centered exactly on the target dot */}
      <div className="relative flex items-center justify-center">
        {/* TARGET PIN / RADAR BULLSEYE ON THE LANDSCAPE */}
        <div className="absolute flex items-center justify-center pointer-events-none">
          {/* Outermost expanding water ripple */}
          <span
            className="absolute w-10 h-10 rounded-full opacity-40 animate-ping"
            style={{ backgroundColor: pulseColor }}
          />
          {/* Secondary glowing ambient ring */}
          <span
            className="absolute w-6 h-6 rounded-full border border-sky-400/50 opacity-75 animate-glow-pulse"
          />
          {/* Middle specular ring */}
          <span
            className="absolute w-4 h-4 rounded-full border border-white/80 opacity-90"
            style={{ borderColor: pulseColor }}
          />
          {/* Inner solid glowing core */}
          <span
            className="w-2.5 h-2.5 rounded-full shadow-[0_0_12px_#0284c7] ring-2 ring-white/60"
            style={{ backgroundColor: pulseColor, color: pulseColor }}
          />
        </div>

        {/* FLOATING GLASS PILL (Floats directly above the landmark dot) */}
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 group cursor-pointer"
          style={{
            animation: `heroFloat ${animationDuration} ease-in-out infinite alternate`,
            animationDelay: animationDelay,
          }}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {/* Ambient Glow Aura */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-sky-500/30 via-teal-400/20 to-blue-600/30 opacity-0 group-hover:opacity-100 blur-md transition-all duration-500 pointer-events-none" />

          {/* Pill Container */}
          <div className="relative flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-950/75 hover:bg-slate-950/90 text-white backdrop-blur-2xl border border-white/25 hover:border-sky-400/60 shadow-[0_10px_32px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all duration-300 group-hover:scale-[1.03] group-hover:-translate-y-0.5 overflow-hidden whitespace-nowrap">
            {/* Shimmer Light Sweeper Animation */}
            <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none animate-badge-shimmer" />

            {/* Circular Logo or Icon Badge */}
            {item.logo ? (
              <div className="relative w-6 h-6 rounded-full bg-white p-0.5 shadow-[0_2px_8px_rgba(0,0,0,0.25)] flex items-center justify-center flex-shrink-0 ring-1 ring-white/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.logo}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <div
                className="relative w-6 h-6 rounded-full border border-white/20 shadow-inner flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${pulseColor}33` }}
              >
                {renderIcon()}
              </div>
            )}

            {/* Title */}
            <span className="text-xs sm:text-sm font-bold tracking-tight text-white drop-shadow-sm">
              {item.title}
            </span>

            {/* Subtitle / Role */}
            {item.subtitle && (
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-white/80 font-normal">
                <span className="text-sky-400/60 font-black">•</span>
                <span>{item.subtitle}</span>
              </span>
            )}

            {/* Year / Value Badge */}
            {item.year && (
              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono font-medium text-emerald-300 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 shadow-inner">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>{item.year}</span>
              </span>
            )}
          </div>

          {/* EXPANDABLE DETAIL POPOVER ON CLICK OR HOVER */}
          {/* CASE A: MULTI-PROJECTS LIST POPOVER */}
          {item.projects && item.projects.length > 0 ? (
            <div
              className={`absolute ${popoverPositionClass} bottom-full mb-3.5 w-72 sm:w-84 max-w-[90vw] p-3.5 rounded-2xl bg-black/85 backdrop-blur-xl border border-white/20 shadow-[0_16px_40px_rgba(0,0,0,0.65)] text-left transition-all duration-300 pointer-events-auto ${
                isOpen
                  ? "opacity-100 scale-100 translate-y-0 visible"
                  : "opacity-0 scale-95 translate-y-2 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:visible"
              }`}
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
                <span className="text-[11px] font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
                  <FiFolder className="w-3.5 h-3.5" />
                  Featured Projects
                </span>
                <span className="text-[10px] text-white/60 font-mono">
                  {item.projects.length} builds
                </span>
              </div>

              {/* Project List */}
              <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
                {item.projects.map((proj, idx) => (
                  <a
                    key={idx}
                    href={proj.link || "#"}
                    target={proj.link ? "_blank" : undefined}
                    rel={proj.link ? "noopener noreferrer" : undefined}
                    onClick={(e) => e.stopPropagation()}
                    className="group/item block p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <h5 className="text-xs font-bold text-white group-hover/item:text-purple-300 transition-colors">
                        {proj.name}
                      </h5>
                      {proj.link && (
                        <FiExternalLink className="w-3 h-3 text-white/50 group-hover/item:text-purple-300 transition-colors" />
                      )}
                    </div>
                    <p className="text-[10px] text-white/70 mt-0.5 line-clamp-2 leading-relaxed">
                      {proj.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {proj.tech.map((t, ti) => (
                        <span
                          key={ti}
                          className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-white/80 font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </a>
                ))}
              </div>

              {/* Downward triangle arrow indicator */}
              <div
                className={`absolute -bottom-1.5 ${pointerPositionClass} w-3 h-3 bg-black/85 border-r border-b border-white/20 rotate-45`}
              />
            </div>
          ) : item.description ? (
            /* CASE B: COMPACT OVERVIEW POPOVER */
            <div
              className={`absolute ${popoverPositionClass} bottom-full mb-3.5 w-80 sm:w-88 max-w-[88vw] p-4 rounded-3xl bg-slate-950/90 backdrop-blur-2xl border border-white/20 shadow-[0_24px_60px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.15)] text-left transition-all duration-300 pointer-events-auto overflow-hidden ${
                isOpen
                  ? "opacity-100 scale-100 translate-y-0 visible"
                  : "opacity-0 scale-95 translate-y-2 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:visible"
              }`}
            >
              {/* Ambient radial lighting in top-right */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-sky-500/15 via-transparent to-transparent rounded-tr-3xl pointer-events-none" />

              {/* Header */}
              <div className="relative flex items-center justify-between gap-3 pb-3 mb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  {item.logo ? (
                    <div className="w-8 h-8 rounded-xl bg-white p-1 shadow-md flex items-center justify-center flex-shrink-0 ring-1 ring-white/30">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.logo}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/20 shadow-inner"
                      style={{ backgroundColor: `${pulseColor}33` }}
                    >
                      {renderIcon()}
                    </div>
                  )}
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-wide flex items-center gap-1.5">
                      <span>{item.title}</span>
                      <span className="text-[9px] font-mono font-medium px-1.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30">
                        {item.category}
                      </span>
                    </h4>
                    <p className="text-[11px] text-amber-300 font-medium">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 text-[9px] font-mono font-semibold text-emerald-300 bg-emerald-500/15 border border-emerald-400/30 px-2 py-0.5 rounded-full flex-shrink-0 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{item.year || "Present"}</span>
                </span>
              </div>

              {/* Short Overview Description */}
              <p className="relative text-xs text-white/80 leading-relaxed mb-3">
                {item.description}
              </p>

              {/* Quick Tech Tags & Link */}
              <div className="relative flex items-center justify-between pt-2.5 border-t border-white/10">
                {item.skills && item.skills.length > 0 ? (
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-white/10 hover:bg-white/15 border border-white/10 text-white/85 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : <div />}

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1 transition-all duration-200 hover:translate-x-0.5 flex-shrink-0 ml-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Website</span>
                    <FiExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

              {/* Downward triangle arrow indicator */}
              <div
                className={`absolute -bottom-1.5 ${pointerPositionClass} w-3 h-3 bg-slate-950/90 border-r border-b border-white/20 rotate-45`}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
