"use client";

import React, { useState, useEffect } from "react";
import { HERO_CONFIG } from "./heroConfig";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

interface FloatingNavbarProps {
  className?: string;
}

export function FloatingNavbar({ className = "" }: FloatingNavbarProps) {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const projectSection = document.getElementById("project");
      const journeySection = document.getElementById("journey");

      if (projectSection) {
        const rect = projectSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.45) {
          setActiveTab("project");
          return;
        }
      }
      if (journeySection) {
        const rect = journeySection.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.45) {
          setActiveTab("journey");
          return;
        }
      }
      setActiveTab("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string, href: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    // Smooth scroll if element exists
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-1.5rem)] sm:w-auto max-w-[820px] pointer-events-auto ${className}`}
      aria-label="Main Navigation"
    >
      {/* DESKTOP FLOATING CAPSULE NAVBAR (hidden below md) */}
      <div className="hidden md:flex items-center justify-between gap-3 p-1.5 pl-3 rounded-full bg-black/55 dark:bg-black/70 backdrop-blur-2xl border border-white/20 dark:border-white/15 shadow-[0_16px_50px_rgba(0,0,0,0.5)] transition-all duration-300">
        {/* Navigation Items Group */}
        <div className="flex items-center gap-1.5">
          {HERO_CONFIG.navigation.map((item) => {
            const isActive = activeTab === item.id;

            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id, item.href);
                }}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 select-none ${
                  isActive
                    ? "bg-white/15 text-white shadow-[0_2px_12px_rgba(255,255,255,0.1)] border border-white/25"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {/* Active Avatar Icon for Home */}
                {item.id === "home" && isActive && (
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-amber-400 text-xs shadow-inner">
                    {HERO_CONFIG.personal.avatar}
                  </span>
                )}
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* Emphasized Resume CTA Button */}
        <a
          href={HERO_CONFIG.personal.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm tracking-wide shadow-[0_4px_20px_rgba(251,191,36,0.4)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          <span>Resume</span>
          <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      {/* MOBILE FLOATING CAPSULE NAVBAR (visible below md) */}
      <div className="md:hidden flex flex-col items-center w-full max-w-[350px] mx-auto">
        {/* Expanded Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="w-full mb-2.5 p-3 rounded-3xl bg-black/85 backdrop-blur-2xl border border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.6)] animate-fade-in-up">
            <div className="flex flex-col gap-1">
              {HERO_CONFIG.navigation.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id, item.href)}
                    className={`flex items-center justify-between w-full min-h-[44px] px-4 py-2.5 rounded-2xl text-left text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-white/15 text-white"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      {item.id === "home" && (
                        <span className="text-base">
                          {HERO_CONFIG.personal.avatar}
                        </span>
                      )}
                      <span>{item.label}</span>
                    </span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Main Floating Mobile Pill Bar */}
        <div className="w-full flex items-center justify-between p-1.5 px-2 rounded-full bg-black/70 backdrop-blur-2xl border border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
          {/* Quick Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <FiX className="w-4 h-4" />
            ) : (
              <FiMenu className="w-4 h-4" />
            )}
          </button>

          {/* Key Quick Links */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => handleNavClick("home", "#hero")}
              className={`min-h-[40px] px-2.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeTab === "home"
                  ? "bg-white/20 text-white"
                  : "text-white/75 hover:text-white"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("journey", "#journey")}
              className={`min-h-[40px] px-2.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeTab === "journey"
                  ? "bg-white/20 text-white"
                  : "text-white/75 hover:text-white"
              }`}
            >
              Journey
            </button>
            <button
              onClick={() => handleNavClick("project", "#project")}
              className={`min-h-[40px] px-2.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeTab === "project"
                  ? "bg-white/20 text-white"
                  : "text-white/75 hover:text-white"
              }`}
            >
              Project
            </button>
          </div>

          {/* Compact Mobile Resume CTA */}
          <a
            href={HERO_CONFIG.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center min-h-[40px] px-3.5 py-1.5 rounded-full bg-amber-400 text-slate-950 font-bold text-xs tracking-wide shadow-[0_2px_12px_rgba(251,191,36,0.35)] hover:bg-amber-300 transition-transform active:scale-95"
          >
            <span>Resume</span>
            <FiArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
          </a>
        </div>
      </div>
    </nav>
  );
}
