import type { PersonalInfo, Stat } from "@/types";

export const personal: PersonalInfo = {
  name: "Trishia Babiera",
  firstName: "Trishia",
  lastName: "Babiera",
  role: "Programmer Analyst",
  tagline:
    "Results-oriented Programmer with 5+ years of experience in developing, testing, and maintaining web and windows applications. Specializing in C#/.NET, ASP.NET, and database-driven systems across banking, enterprise, and manufacturing sectors.",
  bio: [
    "Full-stack programmer with 5+ years building production systems across banking, enterprise software, and manufacturing. I specialize in C#/.NET ecosystems — from ASP.NET Core web apps to Windows applications, PL/SQL Oracle, and SQL Server.",
    "Previously shipped software for ChinaBank, Friendlysoft Technology, Phil-Data Business Systems, and Shin-Etsu Magnetics. Experienced in handling projects as a sole programmer with minimal supervision — I care about clean code, thorough testing, and delivering on time.",
  ],
  location: "Calamba, Laguna, Philippines",
  stack: "C# / ASP.NET",
  status: "Open to work",
  email: "trishiababiera17@gmail.com",
  github: "github.com/trishiababiera",
  linkedin: "linkedin.com/in/trishiababiera",
};

export const stats: Stat[] = [
  { value: "5+", label: "Years experience", isNumeric: true, numericValue: 5 },
  { value: "10+", label: "Projects shipped", isNumeric: true, numericValue: 10 },
  { value: ".NET", label: "Primary stack" },
  { value: "C#", label: "Core language" },
];
