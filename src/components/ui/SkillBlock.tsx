"use client";

import { motion } from "motion/react";

interface Props {
  level: number;
  max?: number;
}

export function SkillBlock({ level, max = 5 }: Props) {
  return (
    <div className="font-mono text-[11px] flex gap-[3px]">
      {Array.from({ length: max }).map((_, i) => (
        <motion.span
          key={i}
          className={`w-2 h-2 rounded-[1px] ${
            i < level ? "bg-green" : "bg-border"
          }`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.2 }}
        />
      ))}
    </div>
  );
}
