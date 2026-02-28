"use client";

import { CodeBlock } from "@/components/ui/CodeBlock";
import { CodeLine } from "@/components/ui/CodeLine";
import { RenderBlock } from "@/components/ui/RenderBlock";
import { SkillBlock } from "@/components/ui/SkillBlock";
import { Keyword, Type, Comment } from "@/components/ui/SyntaxTokens";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/StaggerChildren";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";
import { skillCategories } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="py-4 sm:py-6 pr-2 sm:pr-12">
      <CodeBlock>
        <CodeLine lineNumber={16}>
          <Comment>// --- Skills Section ---</Comment>
        </CodeLine>
        <CodeLine lineNumber={17}>
          <Keyword>public class</Keyword> <Type>Skills</Type> :{" "}
          <Type>IEnumerable</Type>&lt;<Type>Skill</Type>&gt;
        </CodeLine>
        <CodeLine lineNumber={18}>{"{"}</CodeLine>
      </CodeBlock>

      <RenderBlock>
        <FadeInWhenVisible>
          <div className="bg-surface border border-border p-5 sm:p-8 md:p-12 rounded">
            <h2 className="text-xl sm:text-2xl md:text-[28px] font-semibold mb-6 sm:mb-8">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {skillCategories.map((category) => (
                <StaggerContainer key={category.title}>
                  <div className="font-mono text-[11px] uppercase tracking-widest text-mauve pb-3 border-b border-border mb-4">
                    {category.title}
                  </div>
                  {category.skills.map((skill) => (
                    <StaggerItem key={skill.name}>
                      <div className="flex justify-between items-center py-2 text-[13px]">
                        <span className="text-text">{skill.name}</span>
                        <SkillBlock level={skill.level} />
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              ))}
            </div>
          </div>
        </FadeInWhenVisible>
      </RenderBlock>

      <CodeBlock>
        <CodeLine lineNumber={19}>{"}"}</CodeLine>
      </CodeBlock>
    </section>
  );
}
