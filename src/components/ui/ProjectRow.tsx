"use client";

import { motion } from "motion/react";
import type { Project } from "@/types";

interface Props {
  project: Project;
  index: number;
}

export function ProjectRow({ project, index }: Props) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      whileHover={{ x: 4 }}
      className="grid grid-cols-[32px_1fr_28px] sm:grid-cols-[48px_1fr_200px_60px] items-center px-3 sm:px-6 py-4 sm:py-5 bg-surface-2 cursor-pointer rounded-[3px] hover:bg-bg transition-colors"
    >
      <div className="font-mono text-xs text-text-dim">
        {String(index).padStart(2, "0")}
      </div>
      <div className="min-w-0">
        <h3 className="text-sm sm:text-[15px] font-semibold mb-0.5 sm:mb-1 truncate">
          {project.title}
        </h3>
        <div className="text-[11px] sm:text-xs text-text-dim truncate">
          {project.description}
        </div>
        {/* Tech tags — inline on mobile below description */}
        <div className="flex gap-1 flex-wrap mt-1.5 sm:hidden">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[9px] px-1.5 py-[2px] border border-border rounded-sm text-text-dim"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      {/* Tech tags — separate column on desktop */}
      <div className="hidden sm:flex gap-1.5 flex-wrap justify-end">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-mono text-[10px] px-2 py-[3px] border border-border rounded-sm text-text-dim"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="text-right text-text-dim text-sm">&rarr;</div>
    </motion.div>
  );
}
