import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';
import { ProjectCard } from './ProjectCard';

interface ProjectShowcaseSectionProps {
  isDark: boolean;
}

export const ProjectShowcaseSection: React.FC<ProjectShowcaseSectionProps> = ({ isDark }) => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects dynamically
  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeFilter === 'all') return true;
    return proj.category === activeFilter;
  });

  const allCount = PROJECTS.length;
  const completedCount = PROJECTS.filter((p) => p.category === 'completed').length;
  const inProgressCount = PROJECTS.filter((p) => p.category === 'in-progress').length;

  return (
    <section
      id="projects"
      className={`py-24 border-t relative transition-colors ${
        isDark ? 'border-white/[0.06] bg-[#0b0f19]' : 'border-slate-200 bg-slate-50/60'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold tracking-wide uppercase mb-3">
            <span className="relative flex h-2 w-2 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400" />
            </span>
            Featured Work
          </div>
          <h2
            id="projects-heading"
            className={`text-3xl md:text-4xl font-bold tracking-tight mb-3 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Project showcase
          </h2>
          <p
            className={`text-sm md:text-base leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            I've worked on a huge variety of projects, however here are a selection of my favorite projects that showcase my skills and experience.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-14" id="project-filters">
          {/* All Filter */}
          <button
            id="filter-all-btn"
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full transition-colors cursor-pointer ${
              activeFilter === 'all'
                ? isDark
                  ? 'bg-white text-slate-900 shadow'
                  : 'bg-slate-900 text-white shadow'
                : isDark
                ? 'bg-slate-900 text-slate-400 hover:text-white border border-white/10'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <span>All</span>
            <span
              className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                activeFilter === 'all'
                  ? isDark
                    ? 'bg-slate-900/10 text-slate-900'
                    : 'bg-white/20 text-white'
                  : isDark
                  ? 'bg-slate-800 text-slate-300'
                  : 'bg-slate-100 text-slate-700'
              }`}
            >
              {allCount}
            </span>
          </button>

          {/* Completed Filter */}
          <button
            id="filter-completed-btn"
            type="button"
            onClick={() => setActiveFilter('completed')}
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full transition-colors cursor-pointer ${
              activeFilter === 'completed'
                ? isDark
                  ? 'bg-white text-slate-900 shadow'
                  : 'bg-slate-900 text-white shadow'
                : isDark
                ? 'bg-slate-900 text-slate-400 hover:text-white border border-white/10'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <span>Completed</span>
            <span
              className={`px-1.5 py-0.5 rounded-full text-[10px] font-medium ${
                activeFilter === 'completed'
                  ? isDark
                    ? 'bg-slate-900/10 text-slate-900'
                    : 'bg-white/20 text-white'
                  : isDark
                  ? 'bg-slate-800 text-slate-300'
                  : 'bg-slate-100 text-slate-700'
              }`}
            >
              {completedCount}
            </span>
          </button>

          {/* In Progress Filter */}
          <button
            id="filter-inprogress-btn"
            type="button"
            onClick={() => setActiveFilter('in-progress')}
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full transition-colors cursor-pointer ${
              activeFilter === 'in-progress'
                ? isDark
                  ? 'bg-white text-slate-900 shadow'
                  : 'bg-slate-900 text-white shadow'
                : isDark
                ? 'bg-slate-900 text-slate-400 hover:text-white border border-white/10'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <span>In Progress</span>
            <span
              className={`px-1.5 py-0.5 rounded-full text-[10px] font-medium ${
                activeFilter === 'in-progress'
                  ? isDark
                    ? 'bg-slate-900/10 text-slate-900'
                    : 'bg-white/20 text-white'
                  : isDark
                  ? 'bg-slate-800 text-slate-300'
                  : 'bg-slate-100 text-slate-700'
              }`}
            >
              {inProgressCount}
            </span>
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
              isDark={isDark}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        isDark={isDark}
      />
    </section>
  );
};
