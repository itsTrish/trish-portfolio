"use client";

import { CodeBlock } from "@/components/ui/CodeBlock";
import { CodeLine } from "@/components/ui/CodeLine";
import { RenderBlock } from "@/components/ui/RenderBlock";
import { Keyword, Type, Comment } from "@/components/ui/SyntaxTokens";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";
import { personal } from "@/data/personal";

export function AboutSection() {
  return (
    <section id="about" className="py-6 pr-4 sm:pr-12">
      <CodeBlock>
        <CodeLine lineNumber={11}>
          <Comment>// --- About Section ---</Comment>
        </CodeLine>
        <CodeLine lineNumber={12}>
          <Keyword>public class</Keyword> <Type>About</Type> : <Type>Section</Type>
        </CodeLine>
        <CodeLine lineNumber={13}>{"{"}</CodeLine>
      </CodeBlock>

      <RenderBlock>
        <FadeInWhenVisible>
          <div className="bg-surface border border-border p-8 sm:p-12 rounded">
            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-12">
              <div className="aspect-square bg-surface-2 border border-dashed border-border flex items-center justify-center font-mono text-[11px] text-text-dim rounded">
                [ photo ]
              </div>
              <div>
                <h2 className="text-2xl sm:text-[28px] font-semibold mb-4">
                  About Me
                </h2>
                {personal.bio.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-sm text-text-dim leading-[1.7] mb-3"
                  >
                    {paragraph}
                  </p>
                ))}
                <div className="flex flex-wrap gap-2 mt-5">
                  <div className="font-mono text-[11px] px-3 py-1.5 border border-border rounded-[3px] text-text-dim">
                    Location:{" "}
                    <span className="text-text">{personal.location}</span>
                  </div>
                  <div className="font-mono text-[11px] px-3 py-1.5 border border-border rounded-[3px] text-text-dim">
                    Stack:{" "}
                    <span className="text-text">{personal.stack}</span>
                  </div>
                  <div className="font-mono text-[11px] px-3 py-1.5 border border-border rounded-[3px] text-text-dim">
                    Status:{" "}
                    <span className="text-green">{personal.status}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInWhenVisible>
      </RenderBlock>

      <CodeBlock>
        <CodeLine lineNumber={14}>{"}"}</CodeLine>
      </CodeBlock>
    </section>
  );
}
