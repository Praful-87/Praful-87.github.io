import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { PERSONAL_INFO } from "../data/portfolioData";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

interface ContactSectionProps {
  isDark: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ isDark }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "project",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "project",
        message: "",
      });
    }, 900);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="contact"
      className={`py-24 border-t relative transition-colors ${
        isDark ? "border-white/6 bg-[#0a0d14]" : "border-slate-200 bg-white"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold tracking-wide uppercase mb-3">
            <span className="relative flex h-2 w-2 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400" />
            </span>
            Get In Touch / Open To Work
          </div>
          <h2
            id="contact-heading"
            className={`text-3xl md:text-5xl font-bold tracking-tight mb-4 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Get in touch
          </h2>
          <p
            className={`text-base md:text-lg ${isDark ? "text-slate-400" : "text-slate-600"}`}
          >
            I'm always interested in new opportunities, exciting projects, or
            even grabbing a coffee.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact & Info Card */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <div
              id="contact-info-card"
              className={`p-6 md:p-8 rounded-2xl border relative overflow-hidden flex flex-col justify-between h-full shadow-2xl card-glow ${
                isDark
                  ? "bg-[#0f1422] border-white/10"
                  : "bg-slate-50 border-slate-200 shadow-slate-100"
              }`}
            >
              {/* Ambient glow inside card */}
              <div className="absolute -top-16 -right-16 w-44 h-44 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-44 h-44 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Top Details */}
              <div className="relative z-10 space-y-6">
                {/* Header Badge */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-sky-500/20 to-blue-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.2)] shrink-0">
                    <CiMail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3
                      className={`text-lg font-bold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}
                    >
                      Email Me
                    </h3>
                    <p
                      className={`text-xs flex items-center gap-1.5 mt-0.5 ${isDark ? "text-slate-400" : "text-slate-500"}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {PERSONAL_INFO.responseTime}
                    </p>
                  </div>
                </div>

                {/* Direct Email Address Box */}
                <div
                  className={`rounded-xl p-4 border transition-all duration-300 group/link ${
                    isDark
                      ? "bg-slate-900/90 border-white/8 hover:border-sky-400/40"
                      : "bg-white border-slate-200 hover:border-sky-500/40 shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                      Direct Email
                    </span>
                    <button
                      type="button"
                      onClick={copyEmailToClipboard}
                      className="text-[11px] text-sky-400 hover:text-sky-300 flex items-center gap-1 cursor-pointer transition-colors"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? (
                        <>
                          <FaCheck className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <FaRegCopy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <a
                    id="contact-email-link"
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className={`text-base md:text-lg font-semibold transition-colors break-all flex items-center justify-between gap-2 ${
                      isDark
                        ? "text-white group-hover/link:text-sky-400"
                        : "text-slate-900 group-hover/link:text-sky-600"
                    }`}
                  >
                    <span>{PERSONAL_INFO.email}</span>
                    <FaExternalLinkAlt className="w-4 h-4 text-slate-400 group-hover/link:text-sky-400 transition-colors shrink-0" />
                  </a>
                </div>

                {/* Availability status badge */}
                <div className="inline-flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium w-full shadow-sm">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span>{PERSONAL_INFO.availability}</span>
                </div>
              </div>

              {/* Social Media Connections */}
              <div className="relative z-10 pt-6 mt-6 border-t border-white/8">
                <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider mb-3.5">
                  Or connect with me on
                </p>
                <div className="flex items-center gap-3">
                  <a
                    aria-label="GitHub"
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 h-11 rounded-xl border flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-md group ${
                      isDark
                        ? "bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-sky-400 border-white/10 hover:border-sky-400/50"
                        : "bg-white hover:bg-slate-100 text-slate-600 hover:text-sky-600 border-slate-200"
                    }`}
                  >
                    <FaGithub className="w-4 h-4 transition-transform group-hover:scale-110" />
                  </a>
                  <a
                    aria-label="LinkedIn"
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 h-11 rounded-xl border flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-md group ${
                      isDark
                        ? "bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-sky-400 border-white/10 hover:border-sky-400/50"
                        : "bg-white hover:bg-slate-100 text-slate-600 hover:text-sky-600 border-slate-200"
                    }`}
                  >
                    <FaLinkedin className="w-4 h-4 transition-transform group-hover:scale-110" />
                  </a>
                  <a
                    aria-label="X (Twitter)"
                    href={PERSONAL_INFO.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 h-11 rounded-xl border flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-md group ${
                      isDark
                        ? "bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-sky-400 border-white/10 hover:border-sky-400/50"
                        : "bg-white hover:bg-slate-100 text-slate-600 hover:text-sky-600 border-slate-200"
                    }`}
                  >
                    <FaSquareXTwitter className="w-4 h-4 transition-transform group-hover:scale-110" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className={`p-6 md:p-8 rounded-2xl border space-y-5 shadow-2xl h-full flex flex-col justify-between card-glow relative overflow-hidden ${
                isDark
                  ? "bg-[#0f1422] border-white/10"
                  : "bg-slate-50 border-slate-200 shadow-slate-100"
              }`}
            >
              {/* Ambient glow inside form card */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-5 relative z-10">
                {/* Success alert message */}
                {submitted && (
                  <div
                    id="contact-success-alert"
                    className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 flex items-center justify-between gap-3 text-sm animate-in fade-in duration-300"
                  >
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span>
                        Thank you! Your message has been sent successfully.
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-semibold hover:underline text-emerald-200"
                    >
                      Dismiss
                    </button>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${
                        isDark ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-sky-400 ${
                        isDark
                          ? "bg-slate-900/90 border-white/10 text-white placeholder-slate-500 focus:border-sky-400"
                          : "bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-sky-500"
                      }`}
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${
                        isDark ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-sky-400 ${
                        isDark
                          ? "bg-slate-900/90 border-white/10 text-white placeholder-slate-500 focus:border-sky-400"
                          : "bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-sky-500"
                      }`}
                    />
                  </div>
                </div>

                {/* Subject Dropdown */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${
                      isDark ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    Subject
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-sky-400 cursor-pointer ${
                      isDark
                        ? "bg-slate-900/90 border-white/10 text-white focus:border-sky-400"
                        : "bg-white border-slate-200 text-slate-900 focus:border-sky-500"
                    }`}
                  >
                    <option value="project">New Project Collaboration</option>
                    <option value="hire">Job Opportunity / Full-time</option>
                    <option value="consulting">
                      Technical Advisory / Consulting
                    </option>
                    <option value="coffee">Casual Networking / Coffee</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${
                      isDark ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Hello Praful, I would love to discuss a project..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors resize-none focus:outline-none focus:ring-1 focus:ring-sky-400 ${
                      isDark
                        ? "bg-slate-900/90 border-white/10 text-white placeholder-slate-500 focus:border-sky-400"
                        : "bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-sky-500"
                    }`}
                  />
                </div>
              </div>

              {/* Submit CTA Button */}
              <div className="pt-2 relative z-10">
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-900 font-semibold text-sm transition-all duration-200 hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] active:scale-[0.98] border border-sky-300/40 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                      Sending Message...
                    </span>
                  ) : (
                    <>
                      <IoSend className="w-4 h-4 text-slate-900" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
