"use client";

import { motion } from "motion/react";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { CodeLine } from "@/components/ui/CodeLine";
import { RenderBlock } from "@/components/ui/RenderBlock";
import { Button } from "@/components/ui/Button";
import { Keyword, Type, StringLit, Attr, Method } from "@/components/ui/SyntaxTokens";
import { TypewriterText } from "@/components/motion/TypewriterText";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";
import { personal, stats } from "@/data/personal";

export function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="py-6 sm:py-10 pr-2 sm:pr-12">
      <CodeBlock>
        <CodeLine lineNumber={1}>
          <Keyword>namespace</Keyword> Portfolio.Sections;
        </CodeLine>
        <CodeLine lineNumber={2} />
        <CodeLine lineNumber={3}>
          <Keyword>public class</Keyword> <Type>Hero</Type> : <Type>Section</Type>
        </CodeLine>
        <CodeLine lineNumber={4}>{"{"}</CodeLine>
        <CodeLine lineNumber={5}>
          {"    "}
          <Keyword>public string</Keyword> <Attr>Name</Attr> =&gt;{" "}
          <StringLit>&quot;{personal.name}&quot;</StringLit>;
        </CodeLine>
        <CodeLine lineNumber={6}>
          {"    "}
          <Keyword>public string</Keyword> <Attr>Role</Attr> =&gt;{" "}
          <StringLit>&quot;{personal.role}&quot;</StringLit>;
        </CodeLine>
        <CodeLine lineNumber={7}>
          {"    "}
          <Keyword>public override void</Keyword> <Method>Render</Method>() =&gt;
        </CodeLine>
        <CodeLine lineNumber={8} />
      </CodeBlock>

      <RenderBlock variant="hero">
        <div className="font-mono text-[13px] text-green mb-4">
          <TypewriterText text="$ dotnet run --project Portfolio" speed={30} />
        </div>

        <motion.h1
          className="text-3xl sm:text-5xl font-bold leading-[1.1] mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            {personal.firstName}
          </motion.span>
          <br />
          <motion.span
            className="bg-gradient-to-br from-mauve to-blue bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            {personal.lastName}
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base text-text-dim leading-relaxed max-w-[540px] mb-6 sm:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          {personal.tagline}
        </motion.p>

        <motion.div
          className="flex gap-3 flex-wrap"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <Button onClick={scrollToProjects}>View Projects</Button>
          <Button variant="outline">Download CV</Button>
        </motion.div>
      </RenderBlock>

      <FadeInWhenVisible delay={0.3}>
        <div className="my-4 sm:my-6 mx-3 sm:ml-20 sm:mr-4 max-w-[900px]">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-surface border border-border p-5 sm:p-6 rounded"
              >
                <div className="font-mono text-2xl sm:text-[28px] font-bold text-blue">
                  {stat.isNumeric && stat.numericValue ? (
                    <AnimatedCounter
                      value={stat.numericValue}
                      suffix={stat.value.includes("+") ? "+" : ""}
                    />
                  ) : (
                    stat.value
                  )}
                </div>
                <div className="text-xs text-text-dim mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </FadeInWhenVisible>

      <CodeBlock>
        <CodeLine lineNumber={9}>{"}"}</CodeLine>
      </CodeBlock>
    </section>
  );
}
