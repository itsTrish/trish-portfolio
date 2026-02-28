"use client";

import { cn } from "@/lib/cn";
import type { SectionId } from "@/types";

interface Tab {
  label: string;
  shortLabel: string;
  sectionId: SectionId;
}

const tabs: Tab[] = [
  { label: "Portfolio.cs", shortLabel: "Portfolio", sectionId: "hero" },
  { label: "About.cs", shortLabel: "About", sectionId: "about" },
  { label: "Skills.cs", shortLabel: "Skills", sectionId: "skills" },
  { label: "Projects.json", shortLabel: "Projects", sectionId: "projects" },
  { label: "Experience.cs", shortLabel: "Exp", sectionId: "experience" },
  { label: "Contact.cs", shortLabel: "Contact", sectionId: "contact" },
];

interface Props {
  activeSection: SectionId;
  onTabClick: (sectionId: SectionId) => void;
}

export function TitleBar({ activeSection, onTabClick }: Props) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-surface-2 border-b border-border flex items-center h-10 px-3 md:px-4">
      {/* Traffic light dots — hidden on mobile to save space */}
      <div className="hidden sm:flex gap-1.5 shrink-0">
        <span className="w-2.5 h-2.5 rounded-full bg-red" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow" />
        <span className="w-2.5 h-2.5 rounded-full bg-green" />
      </div>

      {/* Tab bar — scrollable, with smaller padding on mobile */}
      <div className="flex sm:ml-6 overflow-x-auto scrollbar-none pr-10 md:pr-0">
        {tabs.map((tab) => (
          <button
            key={tab.sectionId}
            onClick={() => onTabClick(tab.sectionId)}
            className={cn(
              "font-mono text-[10px] sm:text-[11px] px-2.5 sm:px-5 py-2.5 border-r border-border cursor-pointer transition-colors whitespace-nowrap shrink-0",
              activeSection === tab.sectionId
                ? "bg-bg text-text"
                : "text-text-dim hover:text-text"
            )}
          >
            {/* Short label on mobile, full label on desktop */}
            <span className="sm:hidden">{tab.shortLabel}</span>
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
