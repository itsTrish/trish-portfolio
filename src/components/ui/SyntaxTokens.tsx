import type { ReactNode } from "react";

function Token({ className, children }: { className: string; children: ReactNode }) {
  return <span className={className}>{children}</span>;
}

export function Keyword({ children }: { children: ReactNode }) {
  return <Token className="text-mauve">{children}</Token>;
}

export function Type({ children }: { children: ReactNode }) {
  return <Token className="text-teal">{children}</Token>;
}

export function StringLit({ children }: { children: ReactNode }) {
  return <Token className="text-green">{children}</Token>;
}

export function Comment({ children }: { children: ReactNode }) {
  return <Token className="text-text-dim italic">{children}</Token>;
}

export function Method({ children }: { children: ReactNode }) {
  return <Token className="text-blue">{children}</Token>;
}

export function NumberLit({ children }: { children: ReactNode }) {
  return <Token className="text-peach">{children}</Token>;
}

export function Attr({ children }: { children: ReactNode }) {
  return <Token className="text-yellow">{children}</Token>;
}
