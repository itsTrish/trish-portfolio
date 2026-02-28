import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface Props {
  children: ReactNode;
  className?: string;
  variant?: "default" | "hero";
}

export function RenderBlock({ children, className, variant = "default" }: Props) {
  return (
    <div
      className={cn(
        "my-6 sm:ml-20 ml-4 mr-4 max-w-[900px]",
        variant === "hero" &&
          "px-8 py-12 sm:px-14 sm:py-20 bg-surface border border-border rounded",
        className
      )}
    >
      {children}
    </div>
  );
}
