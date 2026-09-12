"use client"

import React, { useState, useEffect } from "react";
import { FaSun  } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import { PERSONAL_INFO } from "../data/portfolioData";

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      id="navbar"
      className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        isDark
          ? "bg-[#0a0d14]/85 border-white/[0.07]"
          : "bg-white/85 border-slate-200 shadow-sm"
      } ${isScrolled ? "py-0" : ""}`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo / Name */}
        <a
          id="nav-brand-logo"
          href="#hero"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="w-9 h-9 rounded-full bg-linear-to-tr from-slate-700 via-slate-800 to-slate-600 flex items-center justify-center font-bold text-white text-sm tracking-wider border border-white/20 shadow-inner group-hover:border-sky-400 transition-colors">
            {PERSONAL_INFO.shortName}
          </div>
          <span
            className={`font-semibold tracking-tight text-lg transition-colors ${
              isDark
                ? "text-white group-hover:text-sky-400"
                : "text-slate-900 group-hover:text-sky-600"
            }`}
          >
            {PERSONAL_INFO.name}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className={`hidden md:flex items-center gap-8 text-sm font-medium ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`py-1 transition-colors ${
                isDark ? "hover:text-white" : "hover:text-slate-900"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action CTAs: Hire Me & Theme Toggle */}
        <div className="flex items-center gap-3">
          <a
            id="nav-hire-me-btn"
            href="#contact"
            className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-200 ${
              isDark
                ? "text-white bg-white/6 hover:bg-white/12 border border-white/10"
                : "text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300/80"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Hire Me
          </a>

          {/* Theme Toggle Button */}
          <button
            id="theme-toggle-btn"
            type="button"
            aria-label="Toggle display theme"
            onClick={onToggleTheme}
            className={`p-2.5 rounded-full transition-colors cursor-pointer border ${
              isDark
                ? "text-slate-400 hover:text-white hover:bg-white/6 border-transparent hover:border-white/10"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 border-slate-200"
            }`}
          >
            {isDark ? (
              <FaSun  className="w-4 h-4 text-amber-300 transition-transform hover:rotate-45" />
            ) : (
              <FaMoon className="w-4 h-4 text-indigo-600 transition-transform hover:-rotate-12" />
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-btn"
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isDark
                ? "text-slate-400 hover:text-white hover:bg-white/6"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            {mobileMenuOpen ? (
              <IoMdClose className="w-5 h-5" />
            ) : (
              <IoIosMenu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-t px-6 py-5 space-y-3 transition-all ${
            isDark
              ? "bg-[#0f1422] border-white/10"
              : "bg-white border-slate-200"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-base font-medium transition-colors ${
                isDark
                  ? "text-slate-300 hover:text-white"
                  : "text-slate-700 hover:text-slate-950"
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-sky-500 hover:bg-sky-400 rounded-xl transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
