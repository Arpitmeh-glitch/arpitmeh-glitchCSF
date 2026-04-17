"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const projects = [
  {
    id: "PRJ-001",
    title: "Web Recon CLI",
    category: "Security Tool",
    status: "DEPLOYED",
    description:
      "A powerful command-line interface tool for comprehensive web reconnaissance. Performs deep HTTP analysis, tracks redirect chains, inspects security headers, identifies technologies, and generates detailed vulnerability reports.",
    longDesc:
      "Built for security professionals and bug bounty hunters. Automatically checks for missing security headers (CSP, HSTS, X-Frame-Options), analyzes redirect paths, detects server technologies, and outputs structured JSON reports.",
    tags: ["Python", "Requests", "Click CLI", "HTTP Analysis", "Security Headers", "OSINT"],
    github: "https://github.com/Arpitmeh-glitch/web-recon-cli",
    demo: "#",
    metrics: [
      { label: "Response Analysis", value: "✓" },
      { label: "Header Inspection", value: "✓" },
      { label: "Redirect Tracking", value: "✓" },
    ],
    accent: "#00f0ff",
    index: 0,
  },
  {
    id: "PRJ-002",
    title: "PhishGuard AI",
    category: "SaaS Platform",
    status: "ACTIVE",
    description:
      "Full-stack cybersecurity SaaS platform leveraging machine learning for real-time phishing URL detection. Enterprise-grade architecture with JWT authentication, AES-256 encryption, and a modern dashboard.",
    longDesc:
      "Features an ML model trained on 50k+ phishing samples, end-to-end AES encryption for sensitive data, JWT-based auth with refresh tokens, a FastAPI backend with PostgreSQL, and a Next.js frontend with real-time threat feeds.",
    tags: [
      "FastAPI",
      "Next.js",
      "Machine Learning",
      "JWT Auth",
      "AES-256",
      "PostgreSQL",
      "Python",
      "Scikit-learn",
    ],
    github: "https://github.com/Arpitmeh-glitch/phishguard",
    demo: "https://phishguard-2kku.vercel.app/",
    metrics: [
      { label: "ML Accuracy", value: "96.8%" },
      { label: "Encryption", value: "AES-256" },
      { label: "Response", value: "<120ms" },
    ],
    accent: "#00f0ff",
    index: 1,
  },
];

function ProjectCard({ project, delay }: { project: typeof projects[0]; delay: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Reveal delay={delay}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="glass-panel border border-[rgba(0,240,255,0.1)] hover:border-[rgba(0,240,255,0.35)] transition-colors duration-400 relative group overflow-hidden"
        style={{
          boxShadow: "0 4px 30px rgba(0,0,0,0.4)",
        }}
      >
        {/* Hover glow overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "radial-gradient(ellipse at top left, rgba(0,240,255,0.06) 0%, transparent 60%)",
          }}
        />

        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-[rgba(0,240,255,0.08)]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[0.6rem] text-[var(--cyan)] opacity-50 tracking-widest">
              {project.id}
            </span>
            <span className="font-mono text-[0.6rem] tracking-widest text-[var(--text-muted)] uppercase">
              {project.category}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--cyan)] animate-pulse" />
            <span className="font-mono text-[0.6rem] text-[var(--cyan)] tracking-widest">
              {project.status}
            </span>
          </div>
        </div>

        {/* Main content */}
        <div className="p-6">
          <h3 className="font-display text-xl md:text-2xl font-bold text-white tracking-wider mb-3 group-hover:text-[var(--cyan)] transition-colors duration-300">
            {project.title}
          </h3>

          <p className="font-body text-[var(--text-secondary)] text-base leading-relaxed mb-5 tracking-wide">
            {project.description}
          </p>

          {/* Expandable detail */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mb-5 p-4 bg-[rgba(0,240,255,0.03)] border-l-2 border-[var(--cyan)]">
                  <p className="font-mono text-xs text-[var(--text-secondary)] leading-relaxed">
                    {project.longDesc}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="bg-[rgba(0,240,255,0.04)] border border-[rgba(0,240,255,0.1)] px-3 py-2 text-center"
              >
                <div className="font-mono text-[0.6rem] text-[var(--text-muted)] tracking-widest mb-0.5">
                  {m.label}
                </div>
                <div className="font-display text-[0.7rem] text-[var(--cyan)] tracking-wide">
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="tag-chip">
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 flex-wrap">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center gap-2 font-mono text-xs tracking-widest px-4 py-2.5 border border-[var(--cyan)] text-[var(--cyan)] hover:bg-[rgba(0,240,255,0.1)] transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GITHUB
            </a>
            <a
              href={project.demo}
              className="flex items-center gap-2 font-mono text-xs tracking-widest px-4 py-2.5 bg-[var(--cyan)] text-[#020408] font-bold hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-200"
            >
              LIVE DEMO
              <span className="opacity-70">→</span>
            </a>
            <button
              onClick={() => setExpanded(!expanded)}
              className="font-mono text-[0.65rem] text-[var(--text-muted)] hover:text-[var(--cyan)] transition-colors tracking-widest ml-auto"
            >
              {expanded ? "[ COLLAPSE ]" : "[ DETAILS ]"}
            </button>
          </div>
        </div>

        {/* HUD corners */}
        <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[var(--cyan)] opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
        <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[var(--cyan)] opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[var(--cyan)] opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
        <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[var(--cyan)] opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
      </motion.div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="// 03"
          label="PORTFOLIO"
          title="FEATURED PROJECTS"
          subtitle="> loading project_manifest.json..."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.15} />
          ))}
        </div>

        {/* Footer note */}
        <Reveal delay={0.3}>
          <div className="mt-8 text-center">
            <p className="font-mono text-xs text-[var(--text-muted)] tracking-widest">
              // MORE PROJECTS AVAILABLE ON{" "}
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--cyan)] hover:underline"
              >
                GITHUB
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
