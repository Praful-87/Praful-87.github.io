import React from 'react';
import { Project } from '../types';
import { X, ExternalLink, Github, CheckCircle2, Award, Terminal } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  isDark: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, isDark }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-2xl rounded-2xl border shadow-2xl overflow-hidden p-6 md:p-8 transition-all ${
          isDark
            ? 'bg-[#0f1422] border-white/15 text-white'
            : 'bg-white border-slate-200 text-slate-900 shadow-slate-300'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project modal"
          className={`absolute top-5 right-5 p-2 rounded-xl transition-colors cursor-pointer ${
            isDark
              ? 'bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white border border-white/10'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 border border-slate-200'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top File badge */}
        <div className="flex items-center gap-2 mb-3">
          <Terminal className="w-4 h-4 text-sky-400" />
          <span className="text-xs font-mono text-slate-400">{project.filename}</span>
          <span
            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase ml-2 ${
              project.category === 'completed'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
            }`}
          >
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">{project.title}</h3>
        <p className={`text-sm md:text-base mb-6 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          {project.details?.overview || project.description}
        </p>

        {/* Role & Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {project.details?.role && (
            <div
              className={`p-3 rounded-xl border ${
                isDark ? 'bg-slate-900/60 border-white/5' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-1">
                <Award className="w-3.5 h-3.5" />
                Role
              </div>
              <div className="text-sm font-medium">{project.details.role}</div>
            </div>
          )}

          {project.details?.metrics && (
            <div
              className={`p-3 rounded-xl border ${
                isDark ? 'bg-slate-900/60 border-white/5' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Impact &amp; Metrics
              </div>
              <div className="text-sm font-medium">{project.details.metrics}</div>
            </div>
          )}
        </div>

        {/* Highlights */}
        {project.details?.highlights && (
          <div className="mb-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Key Highlights</h4>
            <ul className="space-y-2">
              {project.details.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2.5 text-xs md:text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 flex-shrink-0" />
                  <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 rounded-lg text-xs font-medium border ${
                isDark
                  ? 'bg-slate-800/80 text-slate-300 border-white/10'
                  : 'bg-slate-100 text-slate-700 border-slate-200'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/[0.08]">
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-colors ${
              isDark
                ? 'bg-white/5 hover:bg-white/10 text-white border-white/15'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
            }`}
          >
            <Github className="w-4 h-4" />
            View Repository
          </a>

          <a
            href={project.liveUrl}
            onClick={(e) => {
              if (project.liveUrl === '#') {
                e.preventDefault();
                alert(`Opening live preview demo for ${project.title}`);
              }
            }}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors shadow-md"
          >
            <ExternalLink className="w-4 h-4" />
            {project.liveUrlLabel}
          </a>
        </div>
      </div>
    </div>
  );
};
