import { ExperienceItem, Project, SkillItem } from "../types";

export const PERSONAL_INFO = {
  name: "Praful Jadhao",
  shortName: "PJ",
  headline: "Hi, I'm Praful Jadhao",
  roles: [
    "MERN Stack Developer",
    "Full Stack Developer",
    "Full Stack Engineer",
  ],
  summary:
    "Passionate software engineer with 2.5+ years of experience building scalable web applications. I love solving complex problems and creating intuitive user experiences.",
  location: "Pune, IN",
  email: "prafuljadhao87@gmail.com",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/103850217?v=4",
  socials: {
    github: "https://github.com/praful-87",
    linkedin: "https://linkedin.com/in/praful-jadhao/",
    twitter: "https://x.com",
  },
  availability: "Available for freelance & full-time roles",
  responseTime: "Direct response within 24 hours",
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "shopify",
    company: "Shopify",
    role: "Senior Frontend Engineer",
    period: "May 2023 – Present",
    isCurrent: true,
    avatarLetter: "S",
    avatarBg: "bg-emerald-600/20 text-emerald-400 border-emerald-500/30",
    description:
      "Spearheaded headless storefront performance architecture, cutting LCP metric by 35% across millions of active merchant checkouts. Collaborated on foundational UI component design tokens.",
    achievements: [
      "Reduced Largest Contentful Paint (LCP) by 35% through asset streaming & selective hydration",
      "Architected cross-team reusable React design system tokens consumed by 200+ developers",
      "Engineered edge middleware caching reducing checkout load spikes during global flash sales",
    ],
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "GraphQL",
      "Tailwind CSS",
      "Performance Audit",
    ],
  },
  {
    id: "techsolutions",
    company: "TechSolutions Cloud Labs",
    role: "Full Stack Engineer",
    period: "Jan 2021 – Apr 2023",
    isCurrent: false,
    avatarLetter: "T",
    avatarBg: "bg-sky-600/20 text-sky-400 border-sky-500/30",
    description:
      "Designed and shipped high-concurrency microservices and real-time dashboard interfaces. Led migration of legacy monolith to modular TypeScript services on AWS container clusters.",
    achievements: [
      "Delivered low-latency WebSocket live data synchronizers handling 50k+ peak concurrent connections",
      "Streamlined CI/CD deployment pipelines cutting staging verification cycle times in half",
      "Mentored 6 junior engineers and authored frontend best practice specifications",
    ],
    skills: [
      "Node.js",
      "Express",
      "React",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Redis",
    ],
  },
];

export const SKILLS_ROW_1: SkillItem[] = [
  {
    name: "TypeScript",
    category: "Language",
    color: "#3178C6",
    svgIcon: "typescript",
  },
  {
    name: "Vue.js",
    category: "Frontend",
    color: "#42b883",
    svgIcon: "vue",
  },
  {
    name: "Next.js",
    category: "Framework",
    color: "#ffffff",
    svgIcon: "nextjs",
  },
  {
    name: "React",
    category: "Frontend",
    color: "#61dafb",
    svgIcon: "react",
  },
  {
    name: "Node.js",
    category: "Runtime",
    color: "#68a063",
    svgIcon: "nodejs",
  },
  {
    name: "JavaScript",
    category: "Language",
    color: "#f7df1e",
    svgIcon: "javascript",
  },
  {
    name: "Python",
    category: "Backend / AI",
    color: "#3776ab",
    svgIcon: "python",
  },
];

export const SKILLS_ROW_2: SkillItem[] = [
  {
    name: "PostgreSQL",
    category: "Database",
    color: "#336791",
    svgIcon: "postgresql",
  },
  {
    name: "Docker",
    category: "DevOps",
    color: "#2496ed",
    svgIcon: "docker",
  },
  {
    name: "AWS",
    category: "Cloud Platform",
    color: "#ff9900",
    svgIcon: "aws",
  },
  {
    name: "Git",
    category: "VCS",
    color: "#f05032",
    svgIcon: "git",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    color: "#38bdf8",
    svgIcon: "tailwind",
  },
  {
    name: "GraphQL",
    category: "API Architecture",
    color: "#e10098",
    svgIcon: "graphql",
  },
  {
    name: "MongoDB",
    category: "Database",
    color: "#47a248",
    svgIcon: "mongodb",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "task-management",
    title: "Task Management App",
    filename: "task-manager.tsx",
    description:
      "A collaborative task management application with real-time updates and seamless team workspaces.",
    category: "completed",
    isFeatured: true,
    tags: ["React", "TypeScript", "Socket.io", "Node.js", "Tailwind"],
    codeUrl: "https://github.com",
    liveUrl: "#",
    liveUrlLabel: "Live Demo",
    accentColor: "sky",
    previewType: "task-board",
    details: {
      overview:
        "A full-featured Kanban and agile sprint planning tool featuring optimistic UI updates, multi-tenant team boards, and offline resilience.",
      role: "Lead Full Stack Engineer",
      metrics: "50k+ monthly tasks processed with <100ms sync latency",
      highlights: [
        "Real-time drag and drop board synchronization using WebSockets",
        "Custom tagging, filtering, and rich Markdown task descriptions",
        "Automated activity changelogs and instant notification dispatch",
      ],
    },
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    filename: "ecommerce-platform.tsx",
    description:
      "A full-stack e-commerce platform built with modern technologies, dynamic carts, and custom checkout flows.",
    category: "completed",
    isFeatured: true,
    tags: ["Vue.js", "Nuxt.js", "Node.js", "Stripe", "Tailwind"],
    codeUrl: "https://github.com",
    liveUrl: "#",
    liveUrlLabel: "Live Demo",
    accentColor: "emerald",
    previewType: "ecommerce-metrics",
    details: {
      overview:
        "High-converting digital storefront with sub-second product page loads, server-rendered dynamic catalogs, and PCI-compliant Stripe payment checkout.",
      role: "Frontend Architect",
      metrics: "+24.8% checkout conversion, $142.8k sales volume",
      highlights: [
        "Micro-frontend checkout funnel integrating one-click Stripe payments",
        "Dynamic inventory reconciliation with optimistic stock reservation",
        "Instant multi-currency exchange conversion and localized tax calculates",
      ],
    },
  },
  {
    id: "portfolio-template",
    title: "Portfolio Website Template",
    filename: "portfolio-template.tsx",
    description:
      "A customizable, performant portfolio website template tailored specifically for engineers and designers.",
    category: "in-progress",
    isFeatured: false,
    tags: ["Nuxt.js", "TypeScript", "Tailwind CSS", "Motion"],
    codeUrl: "https://github.com",
    liveUrl: "#",
    liveUrlLabel: "Preview WIP",
    accentColor: "blue",
    previewType: "portfolio-template",
    details: {
      overview:
        "Engineered for maximum Core Web Vitals performance with light/dark theme toggles, accessible keyboard navigation, and responsive typography scaling.",
      role: "Designer & Engineer",
      metrics: "98% Lighthouse Performance Score, 0 Cumulative Layout Shift",
      highlights: [
        "Zero runtime JavaScript CSS utilities utilizing Tailwind CSS",
        "Accessible color palettes complying with WCAG 2.1 AA standards",
        "Config-driven modular sections allowing rapid personal customization",
      ],
    },
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    filename: "weather-dashboard.tsx",
    description:
      "A responsive weather dashboard with location-based forecasts, precipitation metrics, and visual radars.",
    category: "completed",
    isFeatured: false,
    tags: ["Vue.js", "TypeScript", "OpenWeather API", "Chart.js"],
    codeUrl: "https://github.com",
    liveUrl: "#",
    liveUrlLabel: "Live Demo",
    accentColor: "sky",
    previewType: "weather-radar",
    details: {
      overview:
        "Interactive meteorological monitoring station displaying hyper-local 7-day forecasts, UV index, and precipitation radar overlays.",
      role: "Frontend Developer",
      metrics: "Sub-second geocoding search across 200,000+ cities",
      highlights: [
        "Interactive radar visualization of storm precipitation patterns",
        "Automatic geolocation detection with fallback manual search",
        "Dynamic ambient color theme mirroring current weather conditions",
      ],
    },
  },
];
