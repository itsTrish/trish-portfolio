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
      className="grid grid-cols-[48px_1fr_auto_40px] sm:grid-cols-[48px_1fr_200px_100px] items-center px-4 sm:px-6 py-5 bg-surface-2 cursor-pointer rounded-[3px] hover:bg-bg transition-colors"
    >
      <div className="font-mono text-xs text-text-dim">
        {String(index).padStart(2, "0")}
      </div>
      <div>
        <h3 className="text-[15px] font-semibold mb-1">{project.title}</h3>
        <div className="text-xs text-text-dim">{project.description}</div>
      </div>
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
      <div className="text-right text-text-dim">&rarr;</div>
    </motion.div>
  );
}
