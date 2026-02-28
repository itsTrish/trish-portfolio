"use client";

import { CodeBlock } from "@/components/ui/CodeBlock";
import { CodeLine } from "@/components/ui/CodeLine";
import { RenderBlock } from "@/components/ui/RenderBlock";
import { Keyword, Type, Comment } from "@/components/ui/SyntaxTokens";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/StaggerChildren";
import { experiences } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-6 pr-4 sm:pr-12">
      <CodeBlock>
        <CodeLine lineNumber={26}>
          <Comment>// --- Experience ---</Comment>
        </CodeLine>
        <CodeLine lineNumber={27}>
          <Keyword>public record</Keyword> <Type>Experience</Type>(
          <Type>string</Type> Role, <Type>string</Type> Company,{" "}
          <Type>DateRange</Type> Period);
        </CodeLine>
      </CodeBlock>

      <RenderBlock>
        <FadeInWhenVisible>
          <div className="bg-surface border border-border p-8 sm:p-12 rounded">
            <h2 className="text-2xl sm:text-[28px] font-semibold mb-8">
              Work Experience
            </h2>
            <StaggerContainer>
              {experiences.map((exp, i) => (
                <StaggerItem key={i}>
                  <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-8 py-7 border-t border-border">
                    <div className="font-mono text-xs text-text-dim">
                      {exp.period}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold mb-0.5">
                        {exp.role}
                      </h3>
                      <div className="text-[13px] text-mauve mb-2.5">
                        {exp.company}
                      </div>
                      <div className="text-[13px] text-text-dim leading-relaxed">
                        {exp.tasks}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeInWhenVisible>
      </RenderBlock>

      <CodeBlock>
        <CodeLine lineNumber={28}>
          <Comment>// end experience</Comment>
        </CodeLine>
      </CodeBlock>
    </section>
  );
}
