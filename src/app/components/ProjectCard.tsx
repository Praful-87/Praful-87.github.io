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
    switch (project.category) {
      case "completed":
        return (
          <div className="h-48  relative p-3 flex flex-col justify-between border-b border-white/8 overflow-hidden">
            {/* <div className="absolute inset-0 bg-linear-to-tr from-emerald-500/10 via-transparent to-teal-500/10 opacity-60 group-hover:opacity-100 transition-opacity" /> */}
            <img
              src="https://cdn.dribbble.com/userupload/48297267/file/a8f3e40a9b9138a86ad35a656d1fdbb9.png?resize=1504x1128&vertical=center"
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />

            <div className="relative flex items-center justify-between z-10">
              <div className="flex items-center gap-1.5">
                {project.isFeatured && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    Featured
                  </span>
                )}
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Completed
                </span>
              </div>
            </div>

            {/* Metrics cards grid */}

            <div className="relative z-10 w-full h-1 bg-white/5 rounded-full overflow-hidden mt-2">
              <div className="w-full h-full bg-emerald-400/70 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            </div>
          </div>
        );

      case "in-progress":
        return (
          <div className="h-48 relative p-3 flex flex-col justify-between border-b border-white/8 overflow-hidden">
            {/* <div className="absolute inset-0 bg-linear-to-tr from-blue-500/10 via-transparent to-indigo-500/10 opacity-60 group-hover:opacity-100 transition-opacity" /> */}
            <img
              src="https://cdn.dribbble.com/userupload/48297267/file/a8f3e40a9b9138a86ad35a656d1fdbb9.png?resize=1504x1128&vertical=center"
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />

            <div className="relative flex items-center justify-between z-10">
              <div className="flex items-center gap-1.5"></div>
              <div className="flex items-center gap-1.5">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-blue-500/20 text-black border border-blue-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse " />
                  In Progress
                </span>
              </div>
            </div>

            {/* Performance layout grid */}
            <div className="relative z-10 grid grid-cols-3 gap-1.5 mt-2 px-1"></div>

            <div className="relative z-10 w-full h-1 bg-white/5 rounded-full overflow-hidden mt-2">
              <div className="w-3/5 h-full bg-blue-400/70 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
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
