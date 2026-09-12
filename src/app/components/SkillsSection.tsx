import React from 'react';
import { SKILLS_ROW_1, SKILLS_ROW_2 } from '../data/portfolioData';
import { SkillItem } from '../types';
import { TechIcon } from './TechIcons';

interface SkillsSectionProps {
  isDark: boolean;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ isDark }) => {
  // Duplicate arrays for seamless infinite horizontal loop
  const row1Duplicated: SkillItem[] = [...SKILLS_ROW_1, ...SKILLS_ROW_1];
  const row2Duplicated: SkillItem[] = [...SKILLS_ROW_2, ...SKILLS_ROW_2];

  return (
    <section
      id="skills"
      className={`py-20 border-t transition-colors ${
        isDark ? 'border-white/[0.06] bg-[#0a0d14]' : 'border-slate-200 bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 text-center overflow-hidden">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold tracking-wide uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            Tech Stack &amp; Tooling
          </div>
          <h2
            id="skills-heading"
            className={`text-3xl md:text-4xl font-bold tracking-tight mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Skills &amp; Capabilities
          </h2>
          <p
            className={`text-base max-w-xl mx-auto ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Core technical competencies, programming frameworks, cloud infrastructure, and modern developer tooling optimized for high scale.
          </p>
        </div>

        {/* Marquee Wrapper with side gradient masks */}
        <div className="relative marquee-wrapper space-y-4">
          {/* Left Gradient Fade Mask */}
          <div
            className={`absolute left-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none bg-gradient-to-r ${
              isDark ? 'from-[#0a0d14] to-transparent' : 'from-white to-transparent'
            }`}
          />

          {/* Right Gradient Fade Mask */}
          <div
            className={`absolute right-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none bg-gradient-to-l ${
              isDark ? 'from-[#0a0d14] to-transparent' : 'from-white to-transparent'
            }`}
          />

          {/* Row 1 - Scrolling Left */}
          <div className="overflow-hidden py-1">
            <div className="marquee-track-left flex items-center gap-4">
              {row1Duplicated.map((skill, index) => (
                <div
                  key={`r1-${skill.name}-${index}`}
                  className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl border transition-all duration-300 group cursor-default select-none ${
                    isDark
                      ? 'bg-[#0f1422] border-white/[0.08] hover:border-sky-400/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]'
                      : 'bg-slate-50 border-slate-200 hover:border-sky-500/50 hover:shadow-md hover:bg-white'
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center p-1 group-hover:scale-110 transition-transform flex-shrink-0">
                    <TechIcon name={skill.svgIcon} />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`text-sm font-semibold transition-colors ${
                          isDark ? 'text-white group-hover:text-sky-400' : 'text-slate-900 group-hover:text-sky-600'
                        }`}
                      >
                        {skill.name}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <span className={`text-[11px] font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {skill.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Scrolling Right */}
          <div className="overflow-hidden py-1">
            <div className="marquee-track-right flex items-center gap-4">
              {row2Duplicated.map((skill, index) => (
                <div
                  key={`r2-${skill.name}-${index}`}
                  className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl border transition-all duration-300 group cursor-default select-none ${
                    isDark
                      ? 'bg-[#0f1422] border-white/[0.08] hover:border-sky-400/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]'
                      : 'bg-slate-50 border-slate-200 hover:border-sky-500/50 hover:shadow-md hover:bg-white'
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center p-1 group-hover:scale-110 transition-transform flex-shrink-0">
                    <TechIcon name={skill.svgIcon} />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`text-sm font-semibold transition-colors ${
                          isDark ? 'text-white group-hover:text-sky-400' : 'text-slate-900 group-hover:text-sky-600'
                        }`}
                      >
                        {skill.name}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <span className={`text-[11px] font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {skill.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
