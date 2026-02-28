"use client";

import { cn } from "@/lib/cn";
import type { SectionId } from "@/types";

interface Tab {
  label: string;
  sectionId: SectionId;
}

const tabs: Tab[] = [
  { label: "Portfolio.cs", sectionId: "hero" },
  { label: "About.cs", sectionId: "about" },
  { label: "Skills.cs", sectionId: "skills" },
  { label: "Projects.json", sectionId: "projects" },
  { label: "Experience.cs", sectionId: "experience" },
  { label: "Contact.cs", sectionId: "contact" },
];

interface Props {
  activeSection: SectionId;
  onTabClick: (sectionId: SectionId) => void;
}

export function TitleBar({ activeSection, onTabClick }: Props) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-surface-2 border-b border-border flex items-center h-10 px-4">
      <div className="flex gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-red" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow" />
        <span className="w-2.5 h-2.5 rounded-full bg-green" />
      </div>
      <div className="flex ml-6 overflow-x-auto scrollbar-none">
        {tabs.map((tab) => (
          <button
            key={tab.sectionId}
            onClick={() => onTabClick(tab.sectionId)}
            className={cn(
              "font-mono text-[11px] px-5 py-2.5 border-r border-border cursor-pointer transition-colors whitespace-nowrap",
              activeSection === tab.sectionId
                ? "bg-bg text-text"
                : "text-text-dim hover:text-text"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
