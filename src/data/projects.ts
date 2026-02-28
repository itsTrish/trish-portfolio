import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "COCREE 2.0",
    description: "Banking credit system — Windows App & web platform",
    tech: ["C#", "ASP.NET", "SQL Server"],
    category: "Full Stack",
  },
  {
    id: 2,
    title: "PesoNet Inward System",
    description: "Interbank electronic fund transfer processing",
    tech: ["C#", ".NET", "SQL Server"],
    category: "Backend",
  },
  {
    id: 3,
    title: "Loan Notification System",
    description: "Automated loan status alerts & code review",
    tech: ["ASP.NET", "PL/SQL", "Oracle"],
    category: "Backend",
  },
  {
    id: 4,
    title: "HRIS-ESS Application",
    description: "Human resource self-service portal (QA & testing)",
    tech: ["C#", "ASP.NET", "SQL Server"],
    category: "Full Stack",
  },
  {
    id: 5,
    title: "Management System",
    description: "Internal management system for manufacturing",
    tech: ["C#", ".NET", "SQL Server"],
    category: "Full Stack",
  },
  {
    id: 6,
    title: "Examination System",
    description: "Intern examination platform for hospital",
    tech: ["PHP", "MySQL", "Bootstrap"],
    category: "Full Stack",
  },
];

export const projectFilters = ["All", "Backend", "Full Stack", "API"] as const;
export type ProjectFilter = (typeof projectFilters)[number];
