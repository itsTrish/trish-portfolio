"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { CodeLine } from "@/components/ui/CodeLine";
import { RenderBlock } from "@/components/ui/RenderBlock";
import { ProjectRow } from "@/components/ui/ProjectRow";
import { Keyword, Type, Comment } from "@/components/ui/SyntaxTokens";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";
import { projects, projectFilters, type ProjectFilter } from "@/data/projects";
import { cn } from "@/lib/cn";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-4 sm:py-6 pr-2 sm:pr-12">
      <CodeBlock>
        <CodeLine lineNumber={21}>
          <Comment>// --- Projects Section ---</Comment>
        </CodeLine>
        <CodeLine lineNumber={22}>
          <Keyword>public class</Keyword> <Type>Projects</Type> :{" "}
          <Type>Section</Type>
        </CodeLine>
        <CodeLine lineNumber={23}>{"{"}</CodeLine>
      </CodeBlock>

      <RenderBlock>
        <FadeInWhenVisible>
          <div className="bg-surface border border-border p-4 sm:p-8 md:p-12 rounded">
            <h2 className="text-xl sm:text-2xl md:text-[28px] font-semibold mb-3">
              Selected Projects
            </h2>
            <div className="flex gap-1 mb-4 sm:mb-8 flex-wrap">
              {projectFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    "font-mono text-[11px] px-3.5 py-1.5 border rounded-[3px] cursor-pointer transition-colors",
                    activeFilter === filter
                      ? "bg-mauve text-surface-2 border-mauve"
                      : "bg-transparent text-text-dim border-border hover:border-mauve/50"
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-0.5">
              <AnimatePresence mode="popLayout">
                {filtered.map((project) => (
                  <ProjectRow
                    key={project.id}
                    project={project}
                    index={project.id}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>
        </FadeInWhenVisible>
      </RenderBlock>

      <CodeBlock>
        <CodeLine lineNumber={24}>{"}"}</CodeLine>
      </CodeBlock>
    </section>
  );
}
