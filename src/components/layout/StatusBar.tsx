"use client";

import type { SectionId } from "@/types";

const sectionLabels: Record<SectionId, string> = {
  hero: "Hero.cs",
  about: "About.cs",
  skills: "Skills.cs",
  projects: "Projects.cs",
  experience: "Experience.cs",
  contact: "Contact.cs",
};

interface Props {
  activeSection: SectionId;
}

export function StatusBar({ activeSection }: Props) {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-6 bg-mauve flex items-center justify-between px-3 font-mono text-[11px] text-surface-2 z-50">
      <span className="truncate">
        <span className="hidden sm:inline">
          &#9654; Portfolio.sln &mdash; C# 12 &mdash; .NET 8 &mdash;{" "}
        </span>
        <span className="sm:hidden">&#9654; </span>
        {sectionLabels[activeSection]}
      </span>
      <span className="hidden sm:inline shrink-0 ml-4">
        Ln 33, Col 1 &bull; UTF-8 &bull; CRLF
      </span>
      <span className="sm:hidden shrink-0 ml-2">UTF-8</span>
    </div>
  );
}
