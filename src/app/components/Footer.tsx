import React from 'react';
import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  isDark: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDark }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="footer"
      className={`border-t py-10 text-sm transition-colors ${
        isDark
          ? 'border-white/[0.07] bg-[#080b11] text-slate-400'
          : 'border-slate-200 bg-slate-100 text-slate-600'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-xs md:text-sm">
          © 2026 {PERSONAL_INFO.name}. All rights reserved.
        </p>

        {/* Footer Social Links & Back to Top */}
        <div className="flex items-center gap-5">
          <a
            aria-label="GitHub"
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors ${
              isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            aria-label="LinkedIn"
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors ${
              isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            aria-label="X (Twitter)"
            href={PERSONAL_INFO.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors ${
              isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Twitter className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`p-2 rounded-full border transition-colors cursor-pointer ml-2 ${
              isDark
                ? 'border-white/10 hover:border-white/20 text-slate-400 hover:text-white bg-white/5'
                : 'border-slate-300 hover:border-slate-400 text-slate-600 hover:text-slate-900 bg-white shadow-xs'
            }`}
            title="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
