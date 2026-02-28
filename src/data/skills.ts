import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend / .NET",
    skills: [
      { name: "C#", level: 5 },
      { name: "ASP.NET MVC", level: 4 },
      { name: "ASP.NET Core", level: 4 },
      { name: "RESTful API", level: 4 },
      { name: "Magic XPA", level: 3 },
    ],
  },
  {
    title: "Frontend / Web",
    skills: [
      { name: "HTML / CSS", level: 4 },
      { name: "JavaScript", level: 4 },
      { name: "Bootstrap", level: 4 },
      { name: "PHP", level: 3 },
    ],
  },
  {
    title: "Database / Tools",
    skills: [
      { name: "SQL Server / MS SQL", level: 5 },
      { name: "PL/SQL Oracle", level: 4 },
      { name: "MySQL", level: 4 },
      { name: "Power BI", level: 3 },
      { name: "JIRA", level: 3 },
    ],
  },
];
