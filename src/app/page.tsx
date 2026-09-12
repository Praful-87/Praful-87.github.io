"use client";
import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectShowcaseSection } from "./components/ProjectShowcaseSection";


export default function Home() {
  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      document.body.className =
        "bg-[#0a0d14] text-slate-200 font-sans antialiased selection:bg-sky-500 selection:text-white min-h-screen relative overflow-x-hidden";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      document.body.className =
        "bg-slate-50 text-slate-900 font-sans antialiased selection:bg-sky-500 selection:text-white min-h-screen relative overflow-x-hidden";
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-[#0a0d14]" : "bg-slate-50"}`}
    >
      {/* Sticky Header Navigation */}
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

      {/* Main Portfolio Content */}
      <main>
        <HeroSection isDark={isDark} />
        <ExperienceSection isDark={isDark} />
        <SkillsSection isDark={isDark} />
        <ProjectShowcaseSection isDark={isDark} />
        {/* <ContactSection isDark={isDark} /> */}
      </main>
    </div>
  );
}
