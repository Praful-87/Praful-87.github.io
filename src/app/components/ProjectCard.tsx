import React from "react";

import { FaLocationDot } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CiSun } from "react-icons/ci";
import { PERSONAL_INFO } from "../data/portfolioData";
import { FiMail } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { GoZap } from "react-icons/go";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  isDark: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
  isDark,
}) => {
  // Render custom graphical mockup preview header based on project type
  const renderPreviewHeader = () => {
    switch (project.previewType) {
      case "task-board":
        return (
          <div className="h-48 bg-linear-to-br from-slate-900 via-[#131c31] to-[#0a0d14] relative p-3 flex flex-col justify-between border-b border-white/8 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-tr from-sky-500/10 via-transparent to-indigo-500/10 opacity-60 group-hover:opacity-100 transition-opacity" />

            {/* Top file tab bar */}
            <div className="relative flex items-center justify-between z-10">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-[10px] font-mono text-slate-400/80">
                  {project.filename}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {project.isFeatured && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    Featured
                  </span>
                )}
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Completed
                </span>
              </div>
            </div>

            {/* 3-Column Kanban Board Graphic */}
            <div className="relative z-10 grid grid-cols-3 gap-2 mt-2 px-1">
              {/* Todo Column */}
              <div className="bg-slate-900/90 rounded-lg p-2 border border-white/5 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-semibold text-slate-400 uppercase">
                    Todo
                  </span>
                  <span className="text-[9px] px-1 rounded bg-slate-800 text-slate-400">
                    3
                  </span>
                </div>
                <div className="p-1.5 rounded bg-slate-800/80 border border-white/5">
                  <div className="h-1.5 w-3/4 bg-slate-400/70 rounded mb-1" />
                  <div className="h-1 w-1/2 bg-slate-600 rounded" />
                </div>
              </div>

              {/* In Dev Column */}
              <div className="bg-slate-900/90 rounded-lg p-2 border border-white/5 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-semibold text-sky-400 uppercase">
                    In Dev
                  </span>
                  <span className="text-[9px] px-1 rounded bg-sky-500/20 text-sky-400">
                    2
                  </span>
                </div>
                <div className="p-1.5 rounded bg-sky-950/40 border border-sky-500/30 shadow-sm">
                  <div className="h-1.5 w-4/5 bg-sky-300 rounded mb-1" />
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                    <div className="h-1 w-2/5 bg-sky-500/60 rounded" />
                  </div>
                </div>
              </div>

              {/* Done Column */}
              <div className="bg-slate-900/90 rounded-lg p-2 border border-white/5 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-semibold text-emerald-400 uppercase">
                    Done
                  </span>
                  <span className="text-[9px] px-1 rounded bg-emerald-500/20 text-emerald-400">
                    5
                  </span>
                </div>
                <div className="p-1.5 rounded bg-slate-800/80 border border-white/5 opacity-75">
                  <div className="h-1.5 w-full bg-emerald-400/60 rounded mb-1" />
                  <div className="h-1 w-1/3 bg-emerald-500/40 rounded" />
                </div>
              </div>
            </div>

            {/* Bottom Progress Bar */}
            <div className="relative z-10 w-full h-1 bg-white/5 rounded-full overflow-hidden mt-2">
              <div className="w-full h-full bg-emerald-400/70 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            </div>
          </div>
        );

      case "ecommerce-metrics":
        return (
          <div className="h-48 bg-linear-to-br from-slate-900 via-[#142323] to-[#0a0d14] relative p-3 flex flex-col justify-between border-b border-white/8 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-tr from-emerald-500/10 via-transparent to-teal-500/10 opacity-60 group-hover:opacity-100 transition-opacity" />

            <div className="relative flex items-center justify-between z-10">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-[10px] font-mono text-slate-400/80">
                  {project.filename}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {project.isFeatured && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    Featured
                  </span>
                )}
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Completed
                </span>
              </div>
            </div>

            {/* Metrics cards grid */}
            <div className="relative z-10 grid grid-cols-2 gap-2 mt-2 px-1">
              <div className="bg-slate-900/90 rounded-lg p-2.5 border border-white/5 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] text-slate-400">Conversion</span>
                  <span className="text-[9px] text-emerald-400 font-semibold">
                    +24.8%
                  </span>
                </div>
                <div className="text-base font-bold text-white mt-1">
                  $142.8k
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-1">
                  <div className="w-4/5 h-full bg-emerald-400" />
                </div>
              </div>

              <div className="bg-slate-900/90 rounded-lg p-2.5 border border-white/5 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] text-slate-400">Active Cart</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="w-5 h-5 rounded bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                    <FaCheck
                      className="w-3 h-3 text-emerald-300"
                      strokeWidth={2.5}
                    />
                  </div>
                  <div className="text-xs font-semibold text-white">
                    Checkout
                  </div>
                </div>
                <div className="text-[9px] text-slate-400 mt-1">
                  Stripe • Next.js API
                </div>
              </div>
            </div>

            <div className="relative z-10 w-full h-1 bg-white/5 rounded-full overflow-hidden mt-2">
              <div className="w-full h-full bg-emerald-400/70 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            </div>
          </div>
        );

      case "portfolio-template":
        return (
          <div className="h-48 bg-linear-to-br from-slate-900 via-[#181d33] to-[#0a0d14] relative p-3 flex flex-col justify-between border-b border-white/8 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-tr from-blue-500/10 via-transparent to-indigo-500/10 opacity-60 group-hover:opacity-100 transition-opacity" />

            <div className="relative flex items-center justify-between z-10">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-[10px] font-mono text-slate-400/80">
                  {project.filename}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  In Progress
                </span>
              </div>
            </div>

            {/* Performance layout grid */}
            <div className="relative z-10 grid grid-cols-3 gap-1.5 mt-2 px-1">
              <div className="col-span-2 bg-slate-900/90 rounded-lg p-2 border border-white/5 space-y-1.5">
                <div className="flex items-center gap-1.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-blue-400/30" />
                  <div className="h-1.5 w-20 bg-slate-300/80 rounded" />
                </div>
                <div className="h-1 w-full bg-slate-700/60 rounded" />
              </div>

              <div className="bg-slate-900/90 rounded-lg p-2 border border-white/5 flex flex-col justify-center items-center gap-1">
                <div className="w-4 h-4 rounded-full border border-blue-400 flex items-center justify-center text-[9px] text-blue-300">
                  <GoZap className="w-2.5 h-2.5 text-blue-400" />
                </div>
                <div className="h-1 w-8 bg-blue-400/60 rounded" />
              </div>

              <div className="bg-slate-900/90 rounded-lg p-1.5 border border-white/5">
                <div className="h-1.5 w-8 bg-slate-500/60 rounded mb-1" />
                <div className="h-3 w-full bg-slate-800 rounded" />
              </div>

              <div className="col-span-2 bg-slate-900/90 rounded-lg p-1.5 border border-white/5 flex items-center justify-between px-2">
                <div className="h-1.5 w-16 bg-slate-400/70 rounded" />
                <span className="text-[8px] font-mono text-blue-400">
                  98% Perf
                </span>
              </div>
            </div>

            <div className="relative z-10 w-full h-1 bg-white/5 rounded-full overflow-hidden mt-2">
              <div className="w-3/5 h-full bg-blue-400/70 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
            </div>
          </div>
        );

      case "weather-radar":
        return (
          <div className="h-48 bg-linear-to-br from-slate-900 via-[#102334] to-[#0a0d14] relative p-3 flex flex-col justify-between border-b border-white/8 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-tr from-sky-500/10 via-transparent to-cyan-500/10 opacity-60 group-hover:opacity-100 transition-opacity" />

            <div className="relative flex items-center justify-between z-10">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-[10px] font-mono text-slate-400/80">
                  {project.filename}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Completed
                </span>
              </div>
            </div>

            {/* Weather & Radar info */}
            <div className="relative z-10 grid grid-cols-2 gap-2 mt-2 px-1">
              <div className="bg-slate-900/90 rounded-lg p-2 border border-white/5 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-sky-400/20 flex items-center justify-center">
                  <CiSun className="w-4 h-4 text-sky-400 animate-pulse" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">24°C</div>
                  <div className="text-[9px] text-slate-400">Pune, Sunny</div>
                </div>
              </div>

              <div className="bg-slate-900/90 rounded-lg p-2 border border-white/5 flex flex-col justify-center gap-1">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] text-slate-400">Radar</span>
                  <span className="text-[9px] text-sky-400">Live</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-sky-400/50 animate-ping" />
                  <div className="h-1 w-full bg-sky-400/20 rounded-full overflow-hidden">
                    <div className="w-2/3 h-full bg-sky-400" />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 w-full h-1 bg-white/5 rounded-full overflow-hidden mt-2">
              <div className="w-full h-full bg-emerald-400/70 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            </div>
          </div>
        );
    }
  };

  return (
    <div
      id={`project-card-${project.id}`}
      onClick={() => onSelect(project)}
      className={`group relative rounded-2xl border transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden cursor-pointer ${
        isDark
          ? "bg-[#0f1422] border-white/8 hover:border-sky-400/50 hover:shadow-[0_10px_35px_-10px_rgba(56,189,248,0.2)]"
          : "bg-white border-slate-200 hover:border-sky-400/50 hover:shadow-lg"
      }`}
    >
      {/* Mockup graphical header */}
      {renderPreviewHeader()}

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3
            className={`text-lg font-bold mb-2 tracking-tight transition-colors ${
              isDark
                ? "text-white group-hover:text-sky-400"
                : "text-slate-900 group-hover:text-sky-600"
            }`}
          >
            {project.title}
          </h3>
          <p
            className={`text-sm leading-relaxed mb-5 ${isDark ? "text-slate-400" : "text-slate-600"}`}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className={`px-2.5 py-1 text-xs rounded border ${
                  isDark
                    ? "bg-slate-800/80 text-slate-300 border-white/5"
                    : "bg-slate-100 text-slate-700 border-slate-200"
                }`}
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span
                className={`px-2 py-1 text-xs rounded border ${
                  isDark
                    ? "bg-slate-800/40 text-slate-400 border-white/5"
                    : "bg-slate-100 text-slate-500 border-slate-200"
                }`}
              >
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div
          className="flex items-center gap-3 text-xs font-medium border-t border-white/6 pt-4"
          onClick={(e) => e.stopPropagation()}
        >
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border transition-all duration-200 ${
              isDark
                ? "bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border-white/10"
                : "bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-950 border-slate-200"
            }`}
          >
            <FaGithub className="w-4 h-4" />
            <span>Code</span>
          </a>

          <a
            href={project.liveUrl}
            onClick={(e) => {
              if (project.liveUrl === "#") {
                e.preventDefault();
                onSelect(project);
              }
            }}
            className={`flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border transition-all duration-200 ${
              project.accentColor === "emerald"
                ? "bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 hover:text-emerald-300 border-emerald-500/20"
                : project.accentColor === "blue"
                  ? "bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 hover:text-blue-200 border-blue-500/30"
                  : "bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 hover:text-sky-300 border-sky-500/20"
            }`}
          >
            <FaExternalLinkAlt className="w-3.5 h-3.5" />
            <span>{project.liveUrlLabel}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
