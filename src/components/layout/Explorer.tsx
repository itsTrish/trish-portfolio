"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import type { SectionId } from "@/types";

interface FileItem {
  name: string;
  icon: "cs" | "json" | "md" | "config" | "folder";
  sectionId?: SectionId;
  indent?: number;
}

const iconColorMap = {
  cs: "text-green",
  json: "text-yellow",
  md: "text-blue",
  config: "text-peach",
  folder: "text-mauve",
} as const;

const iconSymbolMap = {
  cs: "C#",
  json: "{ }",
  md: "#",
  config: "\u2699",
  folder: "\u25BC",
} as const;

const srcFiles: FileItem[] = [
  { name: "Hero.cs", icon: "cs", sectionId: "hero", indent: 2 },
  { name: "About.cs", icon: "cs", sectionId: "about", indent: 2 },
  { name: "Skills.cs", icon: "cs", sectionId: "skills", indent: 2 },
  { name: "Projects.cs", icon: "cs", sectionId: "projects", indent: 2 },
  { name: "Experience.cs", icon: "cs", sectionId: "experience", indent: 2 },
  { name: "Contact.cs", icon: "cs", sectionId: "contact", indent: 2 },
];

const dataFiles: FileItem[] = [
  { name: "projects.json", icon: "json", indent: 2 },
  { name: "skills.json", icon: "json", indent: 2 },
];

const rootFiles: FileItem[] = [
  { name: "appsettings.json", icon: "config" },
  { name: "README.md", icon: "md" },
];

interface Props {
  activeSection: SectionId;
  onFileClick: (sectionId: SectionId) => void;
  className?: string;
}

export function Explorer({ activeSection, onFileClick, className }: Props) {
  const [srcOpen, setSrcOpen] = useState(true);
  const [dataOpen, setDataOpen] = useState(true);

  return (
    <div className={cn("bg-surface border-r border-border py-3 overflow-y-auto", className)}>
      <div className="font-mono text-[10px] uppercase tracking-widest text-text-dim px-4 pb-3">
        Explorer
      </div>
      <div className="font-mono text-[11px] font-semibold px-4 pt-2 pb-1 text-text">
        &#9660; PORTFOLIO
      </div>

      {/* src/ folder */}
      <button
        onClick={() => setSrcOpen(!srcOpen)}
        className="w-full text-left font-mono text-xs px-4 py-1 flex items-center gap-1.5 text-text-dim hover:bg-white/[0.03] hover:text-text cursor-pointer"
      >
        <span className="text-mauve">{srcOpen ? "\u25BC" : "\u25B6"}</span>
        src/
      </button>
      {srcOpen &&
        srcFiles.map((file) => (
          <button
            key={file.name}
            onClick={() => file.sectionId && onFileClick(file.sectionId)}
            className={cn(
              "w-full text-left font-mono text-xs py-1 flex items-center gap-1.5 cursor-pointer",
              file.indent === 2 ? "pl-10 pr-4" : "pl-6 pr-4",
              file.sectionId === activeSection
                ? "bg-white/[0.05] text-text"
                : "text-text-dim hover:bg-white/[0.03] hover:text-text"
            )}
          >
            <span className={iconColorMap[file.icon]}>
              {iconSymbolMap[file.icon]}
            </span>
            {file.name}
          </button>
        ))}

      {/* data/ folder */}
      <button
        onClick={() => setDataOpen(!dataOpen)}
        className="w-full text-left font-mono text-xs px-4 py-1 flex items-center gap-1.5 text-text-dim hover:bg-white/[0.03] hover:text-text cursor-pointer mt-1"
      >
        <span className="text-mauve">{dataOpen ? "\u25BC" : "\u25B6"}</span>
        data/
      </button>
      {dataOpen &&
        dataFiles.map((file) => (
          <div
            key={file.name}
            className="font-mono text-xs py-1 pl-10 pr-4 flex items-center gap-1.5 text-text-dim"
          >
            <span className={iconColorMap[file.icon]}>
              {iconSymbolMap[file.icon]}
            </span>
            {file.name}
          </div>
        ))}

      {/* root files */}
      {rootFiles.map((file) => (
        <div
          key={file.name}
          className="font-mono text-xs py-1 pl-4 pr-4 flex items-center gap-1.5 text-text-dim"
        >
          <span className={iconColorMap[file.icon]}>
            {iconSymbolMap[file.icon]}
          </span>
          {file.name}
        </div>
      ))}
    </div>
  );
}
