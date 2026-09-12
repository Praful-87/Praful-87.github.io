import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';

interface ExperienceSectionProps {
  isDark: boolean;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ isDark }) => {
  return (
    <section
      id="experience"
      className={`py-20 border-t relative transition-colors ${
        isDark ? 'border-white/6 bg-[#0a0d14]' : 'border-slate-200 bg-slate-50/50'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold tracking-wide uppercase mb-3">
            <span className="relative flex h-2 w-2 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400" />
            </span>
            Career Timeline
          </div>
          <h2
            id="experience-heading"
            className={`text-3xl md:text-4xl font-bold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Work experience
          </h2>
        </div>

        {/* Stacked Timeline Cards */}
        <div className="relative pl-6 md:pl-10 space-y-8">
          {/* Vertical Guideline */}
          <div className="absolute left-2.5 md:left-4 top-3 bottom-4 w-px bg-linear-to-b from-sky-400 via-sky-500/20 to-transparent" />

          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className="relative group">
              {/* Glowing Active Pulse Node */}
              <div className="absolute -left-[27px] md:-left-[39px] top-6 flex items-center justify-center">
                {exp.isCurrent ? (
                  <>
                    <span className="absolute w-5 h-5 rounded-full bg-sky-400/30 animate-ping" />
                    <span className="relative w-3.5 h-3.5 rounded-full bg-sky-400 border-2 border-[#0a0d14] shadow-sm" />
                  </>
                ) : (
                  <span className="relative w-3 h-3 rounded-full bg-slate-500 border-2 border-[#0a0d14]" />
                )}
              </div>

              {/* Timeline Content Card */}
              <div
                id={`experience-card-${exp.id}`}
                className={`p-6 md:p-8 rounded-2xl border transition-all duration-300 card-glow ${
                  isDark
                    ? 'bg-[#0f1422] border-white/[0.08] hover:border-white/20'
                    : 'bg-white border-slate-200/80 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg group-hover:scale-105 transition-transform flex-shrink-0 ${
                        isDark
                          ? 'bg-slate-800/80 border border-white/10 text-white'
                          : 'bg-slate-100 border border-slate-200 text-slate-800'
                      }`}
                    >
                      {exp.avatarLetter}
                    </div>
                    <div>
                      <h3
                        className={`text-xl font-semibold tracking-tight transition-colors ${
                          isDark
                            ? 'text-white group-hover:text-sky-400'
                            : 'text-slate-900 group-hover:text-sky-600'
                        }`}
                      >
                        {exp.company}
                      </h3>
                      <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        {exp.role}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap self-start border ${
                      isDark
                        ? 'bg-slate-800/70 border-white/10 text-slate-300'
                        : 'bg-slate-100 border-slate-200 text-slate-700'
                    }`}
                  >
                    {exp.isCurrent && (
                      <span className="relative flex h-2 w-2 mr-1">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400" />
                      </span>
                    )}
                    {exp.period}
                  </div>
                </div>

                <p
                  className={`text-sm md:text-base leading-relaxed mb-4 ${
                    isDark ? 'text-slate-300/90' : 'text-slate-600'
                  }`}
                >
                  {exp.description}
                </p>

                {/* Key achievements bullet points */}
                {exp.achievements && (
                  <ul className="space-y-1.5 mb-4 pl-1">
                    {exp.achievements.map((item, i) => (
                      <li
                        key={i}
                        className={`text-xs md:text-sm flex items-start gap-2 ${
                          isDark ? 'text-slate-400' : 'text-slate-600'
                        }`}
                      >
                        <span className="text-sky-400 mt-1 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Skill pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-[11px] font-medium px-2.5 py-1 rounded-md border ${
                        isDark
                          ? 'bg-slate-800/50 text-slate-300 border-white/5'
                          : 'bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
