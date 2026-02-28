"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface Props {
  variant?: "solid" | "outline";
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({
  variant = "solid",
  children,
  className,
  type = "button",
  disabled,
  onClick,
}: Props) {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      className={cn(
        "font-mono px-7 py-3 text-[13px] font-semibold cursor-pointer rounded-[3px] transition-colors",
        variant === "solid" && "bg-mauve text-surface-2 hover:bg-mauve/90",
        variant === "outline" &&
          "bg-transparent text-text border border-border hover:border-mauve/50",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
    </motion.button>
  );
}
