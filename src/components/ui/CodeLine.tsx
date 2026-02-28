import type { ReactNode } from "react";

interface Props {
  lineNumber: number;
  children?: ReactNode;
}

export function CodeLine({ lineNumber, children }: Props) {
  return (
    <div className="grid grid-cols-[60px_1fr] min-h-[28px] items-baseline py-0.5">
      <span className="font-mono text-xs text-text-dim text-right pr-5 select-none opacity-50 hidden sm:block">
        {lineNumber}
      </span>
      <span className="font-mono text-[13px] pl-5 sm:pl-5 pl-4">{children}</span>
    </div>
  );
}
