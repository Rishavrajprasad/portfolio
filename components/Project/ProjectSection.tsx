"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "./workData";
import { StickyProjectNote } from "./StickyProjectNote";
import { ProjectDetailModal } from "./ProjectDetailModal";
import { TornPaperDivider } from "../Journey/TornPaperDivider";
import { FiGithub, FiLayers, FiArrowUpRight, FiCoffee } from "react-icons/fi";

export function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="project"
      className="relative w-full min-h-screen bg-[#faf8f5] dark:bg-[#07090e] text-slate-900 dark:text-white pt-24 sm:pt-32 pb-44 px-6 sm:px-10 md:px-14 lg:px-20 transition-colors duration-500 overflow-x-clip"
    >
      {/* RIPPED / TORN PAPER TOP EDGE (Image 2: tears off-white upwards over Journey's beige/slate) */}
      <TornPaperDivider position="top" fillClass="fill-[#faf8f5] dark:fill-[#07090e]" />

      {/* Ambient background glows */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-amber-500/10 dark:bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-sky-500/10 dark:bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* SECTION HEADER (Directly modeled after user's reference) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              Selected projects, 2022–2026
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-sans mt-2">
              Drag the notes around, or click one to open it.
            </p>
          </div>

          <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono italic md:text-right flex items-center md:justify-end gap-1.5">
            <FiCoffee className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 inline" />
            <span>designed with diet coke + late night terminal runs</span>
          </div>
        </div>

        {/* DRAGGABLE POLAROID NOTES CANVAS */}
        <div className="relative w-full py-8 sm:py-12">
          {/* Scrollable / Draggable Board */}
          <div className="flex flex-wrap lg:flex-nowrap items-start justify-center lg:justify-between gap-6 sm:gap-7 md:gap-8 pb-8 pt-4">
            {PROJECTS.map((project) => (
              <StickyProjectNote
                key={project.id}
                project={project}
                onSelect={(proj) => setSelectedProject(proj)}
              />
            ))}
          </div>
        </div>

        {/* BOTTOM EXPLORATION PILLS (Light & Dark Mode) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-black/10 dark:border-white/10 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans">
          <span>More codebases & experiments on public registries:</span>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Rishavrajprasad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 text-slate-900 dark:text-white font-medium transition-colors border border-black/5 dark:border-white/10"
            >
              <FiGithub className="w-3.5 h-3.5" />
              <span>GitHub / @Rishavrajprasad</span>
              <FiArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>

            <a
              href="https://leetcode.com/u/rishavrajprasad800/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-300 font-medium transition-colors border border-amber-500/20"
            >
              <FiLayers className="w-3.5 h-3.5" />
              <span>LeetCode Profile</span>
              <FiArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>
        </div>
      </div>

      {/* POPUP DETAIL MODAL */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* RIPPED / TORN PAPER BOTTOM EDGE (Image 3: opposite! tears off-white downwards at the end of section) */}
      <TornPaperDivider position="bottom" fillClass="fill-[#faf8f5] dark:fill-[#07090e]" />
    </section>
  );
}
