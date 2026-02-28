import type { ReactNode } from "react";

interface Props {
  lineNumber: number;
  children?: ReactNode;
}

export function CodeLine({ lineNumber, children }: Props) {
  return (
    <div className="grid grid-cols-[1fr] sm:grid-cols-[60px_1fr] min-h-[24px] sm:min-h-[28px] items-baseline py-0.5">
      <span className="font-mono text-xs text-text-dim text-right pr-5 select-none opacity-50 hidden sm:block">
        {lineNumber}
      </span>
      <span className="font-mono text-[12px] sm:text-[13px] pl-4 sm:pl-5 overflow-x-auto">
        {children}
      </span>
    </div>
  );
}
