"use client";

import { cn } from "@/lib/cn";

interface Props {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export function ActivityBar({ sidebarOpen, onToggleSidebar }: Props) {
  return (
    <div className="bg-surface-2 border-r border-border flex-col items-center pt-4 gap-5 hidden md:flex">
      <button
        onClick={onToggleSidebar}
        className={cn(
          "w-7 h-7 flex items-center justify-center font-mono text-sm cursor-pointer border-l-2 transition-colors",
          sidebarOpen
            ? "text-text border-l-mauve"
            : "text-text-dim border-l-transparent hover:text-text"
        )}
        aria-label="Toggle sidebar"
      >
        &#9776;
      </button>
      <div className="w-7 h-7 flex items-center justify-center font-mono text-sm text-text-dim cursor-pointer border-l-2 border-l-transparent hover:text-text">
        &#128269;
      </div>
      <div className="w-7 h-7 flex items-center justify-center font-mono text-sm text-text-dim cursor-pointer border-l-2 border-l-transparent hover:text-text">
        &#9881;
      </div>
    </div>
  );
}
