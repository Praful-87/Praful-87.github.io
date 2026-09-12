export type ProjectCategory = 'all' | 'completed' | 'in-progress';

export interface Project {
  id: string;
  title: string;
  filename: string;
  description: string;
  category: 'completed' | 'in-progress';
  isFeatured?: boolean;
  tags: string[];
  codeUrl: string;
  liveUrl: string;
  liveUrlLabel: string;
  accentColor: 'sky' | 'emerald' | 'blue';
  previewType: 'task-board' | 'ecommerce-metrics' | 'portfolio-template' | 'weather-radar';
  details?: {
    overview: string;
    highlights: string[];
    role: string;
    metrics?: string;
  };
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  isCurrent: boolean;
  avatarLetter: string;
  avatarBg?: string;
  description: string;
  achievements?: string[];
  skills: string[];
}

export interface SkillItem {
  name: string;
  category: string;
  color: string;
  svgIcon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
