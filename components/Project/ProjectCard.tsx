"use client";

import React from "react";
import { Project } from "./workData";
import {
  FileFlowMockup,
  LocTrackMockup,
  CropGuardMockup,
  GlamHubMockup,
} from "./ProjectMockups";
import { FiArrowUpRight, FiGithub, FiExternalLink, FiZap } from "react-icons/fi";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  // Render the appropriate visual mockup component based on visualType
  const renderVisualMockup = () => {
    switch (project.visualType) {
      case "fileflow":
        return <FileFlowMockup />;
      case "loctrack":
        return <LocTrackMockup />;
      case "aivision":
        return <CropGuardMockup />;
      case "ecommerce":
        return <GlamHubMockup />;
      default:
        return null;
    }
  };

  // Status badge styling
  const statusColors = {
    Live: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
    Research: "bg-teal-500/15 border-teal-500/30 text-teal-300",
    "Open Source": "bg-amber-500/15 border-amber-500/30 text-amber-300",
    Production: "bg-sky-500/15 border-sky-500/30 text-sky-300",
  };

  const statusDotColors = {
    Live: "bg-emerald-400",
    Research: "bg-teal-400",
    "Open Source": "bg-amber-400",
    Production: "bg-sky-400",
  };

  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <article
      className="group relative flex flex-col justify-between rounded-3xl sm:rounded-[32px] bg-[#12151f]/80 backdrop-blur-2xl border border-white/10 hover:border-white/20 p-6 sm:p-8 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:-translate-y-1.5 overflow-hidden"
    >
      {/* Subtle hover gradient glow inside card */}
      <div
        className="absolute -top-32 -right-32 w-72 h-72 rounded-full blur-[100px] pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity duration-700"
        style={{ backgroundColor: project.accentColor }}
      />

      {/* TOP HEADER: Index, Category, Status, Year */}
      <div className="relative z-10 flex items-center justify-between gap-2 pb-5 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm sm:text-base font-bold text-white/40 tracking-wider">
            /{formattedIndex}
          </span>
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-white/70 uppercase">
            {project.category}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Status badge */}
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium border ${
              statusColors[project.status] || "bg-white/10 text-white"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                statusDotColors[project.status] || "bg-white"
              }`}
            />
            {project.status}
          </span>

          {/* Year pill */}
          <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-[11px] font-mono">
            {project.year}
          </span>
        </div>
      </div>

      {/* CENTER VISUAL MOCKUP PREVIEW */}
      <div className="relative z-10 my-6">
        {renderVisualMockup()}
      </div>

      {/* CONTENT & METRICS */}
      <div className="relative z-10 space-y-4">
        {/* Title & Headline */}
        <div>
          <div className="flex items-center justify-between group-hover:text-amber-300 transition-colors">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white group-hover:text-amber-300 transition-colors">
              {project.title}
            </h3>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 group-hover:bg-amber-400 group-hover:text-slate-950 text-white/70 transition-all duration-300"
                aria-label={`Open ${project.title} in new tab`}
              >
                <FiArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
          </div>
          <p className="mt-1 text-sm sm:text-base font-medium text-white/80">
            {project.headline}
          </p>
        </div>

        {/* Narrative Description */}
        <p className="text-sm leading-relaxed text-white/60">
          {project.description}
        </p>

        {/* Architectural Highlight Metric */}
        {project.metrics && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-white/80">
            <FiZap className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-white/50">{project.metrics.label}:</span>
            <span className="font-semibold text-white/90">{project.metrics.value}</span>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-white/70 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action CTAs */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/[0.08]">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-[0_4px_20px_rgba(251,191,36,0.3)] transition-all duration-300 active:scale-[0.98]"
            >
              <span>{project.visualType === "aivision" ? "Explore Model" : "Live Demo"}</span>
              <FiExternalLink className="w-4 h-4" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm border border-white/15 hover:border-white/25 transition-all duration-300 active:scale-[0.98]"
            >
              <FiGithub className="w-4 h-4" />
              <span>Source</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

