"use client";

import React, { useState, useEffect, useCallback } from "react";
import { CONTACT_DETAILS } from "./contactData";
import { TornPaperDivider } from "../Journey/TornPaperDivider";
import { SiGmail, SiLeetcode } from "react-icons/si";
import { FaGithub, FaLinkedinIn, FaArrowUp } from "react-icons/fa6";
import { HiArrowDown, HiOutlineCheck, HiOutlineClipboardDocument } from "react-icons/hi2";

interface KeyAction {
  id: string;
  key: string;
  label: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  iconColor: string;
  bgGradient: string;
  shadowColor: string;
  bevelColor: string;
  annotation: {
    text: string;
    subtext?: string;
    position: "top" | "bottom";
  };
  onClick: () => void;
  href?: string;
}

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [pressedKey, setPressedKey] = useState<string | null>(null);

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText(CONTACT_DETAILS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  }, []);

  const handleMailClick = useCallback(() => {
    handleCopyEmail();
    window.location.href = `mailto:${CONTACT_DETAILS.email}?subject=Hello%20Rishav`;
  }, [handleCopyEmail]);

  const handleOpenLink = useCallback((url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  const keys: KeyAction[] = [
    {
      id: "mail",
      key: "M",
      label: "Email",
      icon: SiGmail,
      iconColor: "#ffffff",
      bgGradient: "from-[#ea4335] via-[#dc2626] to-[#b91c1c]",
      shadowColor: "#7f1d1d",
      bevelColor: "#f87171",
      annotation: {
        text: "Roles, projects, or just hi.",
        subtext: CONTACT_DETAILS.email,
        position: "bottom",
      },
      onClick: handleMailClick,
    },
    {
      id: "github",
      key: "G",
      label: "GitHub",
      icon: FaGithub,
      iconColor: "#ffffff",
      bgGradient: "from-zinc-700 via-neutral-800 to-stone-900",
      shadowColor: "#1c1917",
      bevelColor: "#71717a",
      annotation: {
        text: "Where I build in public.",
        subtext: "@Rishavrajprasad",
        position: "top",
      },
      onClick: () => handleOpenLink(CONTACT_DETAILS.github),
      href: CONTACT_DETAILS.github,
    },
    {
      id: "linkedin",
      key: "L",
      label: "LinkedIn",
      icon: FaLinkedinIn,
      iconColor: "#ffffff",
      bgGradient: "from-[#0a66c2] via-[#0284c7] to-[#0369a1]",
      shadowColor: "#0c4a6e",
      bevelColor: "#38bdf8",
      annotation: {
        text: "The work, and what I learned doing it.",
        position: "bottom",
      },
      onClick: () => handleOpenLink(CONTACT_DETAILS.linkedin),
      href: CONTACT_DETAILS.linkedin,
    },
    {
      id: "leetcode",
      key: "C",
      label: "LeetCode",
      icon: SiLeetcode,
      iconColor: "#FFA116",
      bgGradient: "from-zinc-800 via-neutral-900 to-black",
      shadowColor: "#451a03",
      bevelColor: "#fbbf24",
      annotation: {
        text: "Algorithms & problem solving.",
        subtext: "500+ solved • Top 7%",
        position: "top",
      },
      onClick: () => handleOpenLink(CONTACT_DETAILS.leetcode),
      href: CONTACT_DETAILS.leetcode,
    },
    {
      id: "resume",
      key: "R",
      label: "Resume",
      icon: HiArrowDown,
      iconColor: "#18181b",
      bgGradient: "from-amber-300 via-amber-400 to-amber-500",
      shadowColor: "#b45309",
      bevelColor: "#fef08a",
      annotation: {
        text: "My resume, one click away.",
        position: "bottom",
      },
      onClick: () => handleOpenLink(CONTACT_DETAILS.resumePath),
      href: CONTACT_DETAILS.resumePath,
    },
  ];

  // Listen for physical keyboard presses ('m', 'g', 'l', 'c', 'r')
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      const pressed = e.key.toUpperCase();
      const match = keys.find((k) => k.key === pressed);
      if (match) {
        setPressedKey(match.key);
        setTimeout(() => setPressedKey(null), 300);
        match.onClick();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [keys]);

  const scrollToTop = () => {
    const lenis = (window as unknown as { lenis?: { scrollTo: (target: number | string, options?: object) => void } }).lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-[#faf8f5] dark:bg-[#07090e] text-slate-900 dark:text-white pt-28 sm:pt-36 pb-20 px-4 sm:px-6 md:px-10 overflow-x-clip transition-colors duration-500 flex flex-col justify-between"
    >
      {/* 1. TORN PAPER TRANSITION OVER PREVIOUS SKILLS SECTION */}
      <TornPaperDivider position="top" fillClass="fill-[#faf8f5] dark:fill-[#07090e]" />

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center space-y-12 sm:space-y-14 my-auto">
        {/* SECTION HEADER */}
        <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto">


          {/* Expressive Headline */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.15] text-slate-900 dark:text-white">
            Let&apos;s build something{" "}
            <span className="italic font-normal text-amber-600 dark:text-amber-400 underline decoration-amber-500/40 decoration-wavy decoration-1 underline-offset-8">
              remarkable
            </span>{" "}
            together.
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
            Have a project in mind, an opportunity to discuss, or just want to say hi? Hit a key or click below.
          </p>
        </div>

        {/* 2. CENTERPIECE: 3D MECHANICAL KEYPAD DOCK (Matches reference) */}
        <div className="relative w-full max-w-5xl mx-auto">
          {/* Card Wrapper without Grid */}
          <div className="relative rounded-3xl p-6 sm:p-10 md:p-12 bg-white/80 dark:bg-[#0c1017]/90 backdrop-blur-2xl border border-stone-300/80 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden">
            {/* Top Prompt: "psst, these work on your keyboard too: [M] [G] [L] [C] [R]" */}
            <div className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2 mb-10 sm:mb-14 text-center">
              <span className="text-xs sm:text-sm font-mono text-stone-600 dark:text-stone-400 font-medium tracking-tight">
                psst, these work on your keyboard too:
              </span>
              <div className="inline-flex items-center gap-1">
                {keys.map((k) => (
                  <kbd
                    key={k.key}
                    onClick={() => {
                      setPressedKey(k.key);
                      setTimeout(() => setPressedKey(null), 300);
                      k.onClick();
                    }}
                    className={`inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-md text-[10px] sm:text-xs font-mono font-bold cursor-pointer transition-all ${pressedKey === k.key
                        ? "bg-amber-400 text-black scale-110 shadow-md ring-2 ring-amber-400"
                        : "bg-stone-200 dark:bg-white/10 text-stone-700 dark:text-stone-300 border border-stone-300 dark:border-white/10 hover:border-amber-400/60"
                      }`}
                  >
                    {k.key}
                  </kbd>
                ))}
              </div>
            </div>

            {/* The 5 Keycaps Row with Alternating Above/Below Annotations */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center">
              {keys.map((k) => {
                const IconComponent = k.icon;
                const isDown = pressedKey === k.key;

                return (
                  <div
                    key={k.id}
                    className="flex flex-col items-center justify-center w-full max-w-[170px] min-h-[190px]"
                  >
                    {/* TOP ANNOTATION (if position === 'top') */}
                    <div className="h-12 flex flex-col items-center justify-end text-center mb-2">
                      {k.annotation.position === "top" ? (
                        <div className="flex flex-col items-center animate-fade-in">
                          <p className="text-[11px] sm:text-xs font-medium text-slate-800 dark:text-slate-200 leading-tight">
                            {k.annotation.text}
                          </p>
                          {k.annotation.subtext && (
                            <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400 font-semibold mt-0.5">
                              {k.annotation.subtext}
                            </span>
                          )}
                          <span className="text-stone-400 dark:text-stone-500 text-xs mt-0.5">↓</span>
                        </div>
                      ) : null}
                    </div>

                    {/* 3D MECHANICAL KEYCAP BUTTON */}
                    <button
                      type="button"
                      onClick={() => {
                        setPressedKey(k.key);
                        setTimeout(() => setPressedKey(null), 300);
                        k.onClick();
                      }}
                      className="group relative focus:outline-none select-none transition-transform active:translate-y-2 cursor-pointer"
                      style={{
                        transform: isDown ? "translateY(8px)" : undefined,
                      }}
                      aria-label={`${k.label} (Press ${k.key})`}
                    >
                      {/* Deep 3D Shadow Base underneath */}
                      <div
                        className="absolute inset-0 rounded-[26px] translate-y-3 blur-[2px] transition-all group-active:translate-y-1"
                        style={{
                          backgroundColor: k.shadowColor,
                          opacity: 0.85,
                        }}
                      />

                      {/* 3D Mechanical Bottom Bevel Edge */}
                      <div
                        className="absolute inset-0 rounded-[26px] translate-y-2.5 transition-all group-active:translate-y-0.5"
                        style={{
                          backgroundColor: k.shadowColor,
                        }}
                      />

                      {/* Main Key Face */}
                      <div
                        className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-[26px] bg-gradient-to-br ${k.bgGradient} flex items-center justify-center border border-white/30 shadow-[inset_0_2px_2px_rgba(255,255,255,0.6),0_4px_12px_rgba(0,0,0,0.3)] transition-all duration-150 group-hover:scale-105 group-active:scale-95`}
                      >
                        {/* Specular Top Shine */}
                        <div className="absolute inset-x-2 top-1.5 h-6 rounded-t-[20px] bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

                        {/* Top-Left Corner Shortcut Key Badge */}
                        <div className="absolute top-2.5 left-2.5 w-5 h-5 rounded-md bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center text-[10px] font-mono font-bold text-white shadow-sm">
                          {k.key}
                        </div>

                        {/* Centered Main Icon */}
                        <IconComponent
                          className="w-9 h-9 sm:w-11 sm:h-11 transition-transform duration-200 group-hover:scale-110 drop-shadow-md"
                          style={{ color: k.iconColor }}
                        />
                      </div>
                    </button>

                    {/* BOTTOM ANNOTATION (if position === 'bottom') */}
                    <div className="h-14 flex flex-col items-center justify-start text-center mt-3">
                      {k.annotation.position === "bottom" ? (
                        <div className="flex flex-col items-center animate-fade-in">
                          <span className="text-stone-400 dark:text-stone-500 text-xs mb-0.5">↑</span>
                          <p className="text-[11px] sm:text-xs font-medium text-slate-800 dark:text-slate-200 leading-tight">
                            {k.annotation.text}
                          </p>
                          {k.id === "mail" ? (
                            <button
                              type="button"
                              onClick={handleCopyEmail}
                              className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-600 dark:text-amber-400 hover:underline mt-1 font-semibold group/copy"
                              title="Click to copy email"
                            >
                              <span>{copied ? "Copied! ✓" : CONTACT_DETAILS.email}</span>
                              {copied ? (
                                <HiOutlineCheck className="w-3.5 h-3.5 text-emerald-500 inline" />
                              ) : (
                                <HiOutlineClipboardDocument className="w-3.5 h-3.5 opacity-70 group-hover/copy:opacity-100 inline" />
                              )}
                            </button>
                          ) : null}
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 3. SITE FOOTER */}
      <div className="relative z-10 w-full max-w-6xl mx-auto pt-16 border-t border-stone-300/60 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 dark:text-stone-400">
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()} Rishav Raj Prasad.</span>
          <span>•</span>
          <span className="text-stone-400 dark:text-stone-500">Specialist Programmer @ Infosys</span>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-200/60 dark:bg-white/5 hover:bg-amber-500/10 dark:hover:bg-amber-400/10 text-slate-800 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors cursor-pointer"
        >
          <span>Back to top</span>
          <FaArrowUp className="w-3 h-3" />
        </button>
      </div>
    </section>
  );
}
