"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { SectionId } from "@/types";
import { TitleBar } from "./TitleBar";
import { ActivityBar } from "./ActivityBar";
import { Explorer } from "./Explorer";
import { StatusBar } from "./StatusBar";

const SECTIONS: SectionId[] = [
  "hero",
  "about",
  "skills",
  "projects",
  "experience",
  "contact",
];

interface Props {
  children: React.ReactNode;
}

export function IDEShell({ children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("hero");
  const mainRef = useRef<HTMLDivElement>(null);

  const scrollToSection = useCallback((sectionId: SectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  }, []);

  // Scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => {
            const aIdx = SECTIONS.indexOf(a.target.id as SectionId);
            const bIdx = SECTIONS.indexOf(b.target.id as SectionId);
            return aIdx - bIdx;
          });
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id as SectionId);
        }
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Keyboard navigation: Ctrl+1-6
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key >= "1" && e.key <= "6") {
        e.preventDefault();
        const idx = parseInt(e.key) - 1;
        if (SECTIONS[idx]) scrollToSection(SECTIONS[idx]);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [scrollToSection]);

  return (
    <div className="min-h-screen">
      <TitleBar activeSection={activeSection} onTabClick={scrollToSection} />

      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="fixed top-2.5 right-4 z-[60] md:hidden font-mono text-text-dim hover:text-text text-lg"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? "\u2715" : "\u2630"}
      </button>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-10 left-0 bottom-6 w-[220px] z-50 md:hidden"
            >
              <Explorer
                activeSection={activeSection}
                onFileClick={scrollToSection}
                className="h-full"
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div
        className="grid min-h-screen pt-10 pb-6"
        style={{
          gridTemplateColumns: sidebarOpen
            ? "48px 220px 1fr"
            : "48px 1fr",
        }}
      >
        {/* Activity bar - hidden on mobile */}
        <ActivityBar
          sidebarOpen={sidebarOpen}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />

        {/* Explorer sidebar - hidden on mobile, toggleable on desktop */}
        {sidebarOpen && (
          <Explorer
            activeSection={activeSection}
            onFileClick={scrollToSection}
            className="hidden md:block"
          />
        )}

        {/* Main content */}
        <main
          ref={mainRef}
          className="overflow-y-auto h-[calc(100vh-64px)] scroll-smooth"
        >
          {children}
        </main>
      </div>

      <StatusBar activeSection={activeSection} />
    </div>
  );
}
