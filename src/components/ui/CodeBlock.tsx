import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function CodeBlock({ children }: Props) {
  return (
    <div className="relative">
      {/* Gutter line */}
      <div className="absolute left-[60px] top-0 bottom-0 w-px bg-border hidden sm:block" />
      {children}
    </div>
  );
}
