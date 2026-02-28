export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  tagline: string;
  bio: string[];
  location: string;
  stack: string;
  status: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface Stat {
  value: string;
  label: string;
  isNumeric?: boolean;
  numericValue?: number;
}

export interface Skill {
  name: string;
  level: number; // 1-5
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  category: "Backend" | "Full Stack" | "API";
  url?: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  tasks: string;
}

export interface FileTreeItem {
  name: string;
  type: "file" | "folder";
  icon?: "cs" | "json" | "md" | "config" | "folder";
  sectionId?: string;
  children?: FileTreeItem[];
  indent?: number;
}

export type SectionId =
  | "hero"
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "contact";
