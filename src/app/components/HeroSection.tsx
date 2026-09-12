"use client";
import React, { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaExternalLinkAlt   } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { PERSONAL_INFO } from "../data/portfolioData";
import { FiMail } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";

interface HeroSectionProps {
  isDark: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  isDark,
}: HeroSectionProps) => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const words = PERSONAL_INFO.roles;
    const currentWord = words[wordIndex % words.length];

    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText === currentWord) {
      // Pause at full word before backspacing
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && displayText === "") {
      // Finished deleting, move to next word
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      timer = setTimeout(() => {}, 200);
    } else {
      const speed = isDeleting ? 38 : 75;
      timer = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentWord.substring(0, prev.length - 1)
            : currentWord.substring(0, prev.length + 1),
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <section
      id="hero"
      className={`relative pt-20 pb-20 md:pt-28 md:pb-28 hero-glow overflow-hidden ${
        isDark ? "text-white" : "text-slate-900"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Monogram Avatar with Subtle Glow */}
        <div className="relative mb-8 group" id="hero-avatar-container">
          <div className="absolute -inset-1.5 rounded-full bg-linear-to-r from-sky-500/30 to-indigo-500/30 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full p-1 bg-linear-to-b from-sky-400/30 to-white/10 border-2 border-sky-400/30 shadow-2xl overflow-hidden flex items-center justify-center">
            <img
              id="hero-avatar-img"
              src={PERSONAL_INFO.avatarUrl}
              alt={PERSONAL_INFO.name}
              className="w-full h-full rounded-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Hero Headline */}
        <h1
          id="hero-headline"
          className={`text-4xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          {PERSONAL_INFO.headline}{" "}
          <span className="inline-block animate-bounce origin-bottom-right">
            👋
          </span>
        </h1>

        {/* Typewriter Effect */}
        <div className="inline-flex items-center justify-center min-h-10 mb-6">
          <span
            id="typewriter-text"
            className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-cyan-300 to-blue-500 tracking-tight"
          >
            {displayText || "\u00A0"}
          </span>
          <span className="inline-block w-0.5 h-6 md:h-7 ml-1 bg-cyan-400 animate-pulse align-middle shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
        </div>

        {/* Subheading Summary */}
        <p
          id="hero-summary"
          className={`text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto mb-8 ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {PERSONAL_INFO.summary}
        </p>

        {/* Location & Email Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-sm font-medium">
          <span
            id="badge-location"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm backdrop-blur-sm ${
              isDark
                ? "bg-slate-900/90 border-white/10 text-slate-300"
                : "bg-white border-slate-200 text-slate-700 shadow-slate-200/50"
            }`}
          >
            <FaLocationDot  className="w-4 h-4 text-red-500" />
            {PERSONAL_INFO.location}
          </span>

          <a
            id="badge-email"
            href={`mailto:${PERSONAL_INFO.email}`}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm backdrop-blur-sm transition-colors ${
              isDark
                ? "bg-slate-900/90 hover:bg-slate-800 border-white/10 hover:border-white/20 text-slate-300 hover:text-white"
                : "bg-white hover:bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900"
            }`}
          >
            <FiMail className="w-4 h-4 text-sky-400" />
            {PERSONAL_INFO.email}
          </a>
        </div>

        <div className="mb-10 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-linear-to-r from-sky-500/20 via-blue-500/20 to-sky-400/20 hover:from-sky-500/30 hover:to-blue-500/30 border border-sky-400/40 hover:border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] group"
          >
            <svg
              className="w-4 h-4 text-sky-400 group-hover:translate-y-0.5 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              ></path>
            </svg>
            <span className="">Download Resume</span>
          </a>
        </div>

        {/* Social Media Circular Quick Links */}
        <div
          className="flex items-center justify-center gap-4"
          id="hero-social-links"
        >
          {/* GitHub */}
          <a
            id="social-github-btn"
            aria-label="GitHub Profile"
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 hover:-translate-y-1 shadow-md ${
              isDark
                ? "bg-slate-900/80 border-white/10 hover:border-sky-400 hover:text-sky-400 text-slate-300"
                : "bg-white border-slate-200 hover:border-sky-500 hover:text-sky-600 text-slate-600 shadow-sm"
            }`}
          >
            <FaGithub className="w-5 h-5" />
          </a>

          {/* LinkedIn */}
          <a
            id="social-linkedin-btn"
            aria-label="LinkedIn Profile"
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 hover:-translate-y-1 shadow-md ${
              isDark
                ? "bg-slate-900/80 border-white/10 hover:border-sky-400 hover:text-sky-400 text-slate-300"
                : "bg-white border-slate-200 hover:border-sky-500 hover:text-sky-600 text-slate-600 shadow-sm"
            }`}
          >
            <FaLinkedin className="w-5 h-5" />
          </a>

          {/* External / Featured Projects */}
          <a
            id="social-projects-btn"
            aria-label="Featured Projects"
            href="#projects"
            className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 hover:-translate-y-1 shadow-md ${
              isDark
                ? "bg-slate-900/80 border-white/10 hover:border-sky-400 hover:text-sky-400 text-slate-300"
                : "bg-white border-slate-200 hover:border-sky-500 hover:text-sky-600 text-slate-600 shadow-sm"
            }`}
          >
            <FaExternalLinkAlt className="w-5 h-5" />
          </a>

          {/* X (Twitter) */}
          <a
            id="social-twitter-btn"
            aria-label="X (Twitter) Profile"
            href={PERSONAL_INFO.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 hover:-translate-y-1 shadow-md ${
              isDark
                ? "bg-slate-900/80 border-white/10 hover:border-sky-400 hover:text-sky-400 text-slate-300"
                : "bg-white border-slate-200 hover:border-sky-500 hover:text-sky-600 text-slate-600 shadow-sm"
            }`}
          >
            <FaSquareXTwitter className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
