"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const terminalData = [
  { key: "NAME", value: "Arpit Mehrotra" },
  { key: "ROLE", value: "Cybersecurity Student" },
  { key: "STATUS", value: "AVAILABLE", highlight: true },
  { key: "LOCATION", value: "India" },
  { key: "UNIVERSITY", value: "UPES Dehradun" },
  { key: "FOCUS", value: "Penetration Testing" },
];

const infoCards = [
  {
    id: "01",
    title: "University",
    value: "University of Petroleum and Energy Studies",
    sub: "B.Tech · Computer Science",
    icon: "🎓",
    color: "rgba(0,240,255,0.06)",
  },
  {
    id: "02",
    title: "TryHackMe",
    value: "Top 15% Worldwide",
    sub: "Presecurity Path · 200+ Rooms",
    icon: "⚡",
    color: "rgba(0,240,255,0.06)",
  },
  {
    id: "03",
    title: "India Innovates 26",
    value: "National Finalist",
    sub: "Innovation Competition · 2026",
    icon: "🏆",
    color: "rgba(0,240,255,0.06)",
  },
];

export default function About() {
  return (
    <section id="about" className="relative z-10 py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="// 01"
          label="WHO AM I"
          title="ABOUT ME"
          subtitle="> profile_data.json loaded successfully"
        />

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Terminal profile panel */}
          <Reveal direction="left">
            <div className="glass-panel p-6 relative overflow-hidden group">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[rgba(0,240,255,0.1)]">
                <div className="w-2 h-2 rounded-full bg-red-500 opacity-60" />
                <div className="w-2 h-2 rounded-full bg-yellow-500 opacity-60" />
                <div className="w-2 h-2 rounded-full bg-green-500 opacity-60" />
                <span className="font-mono text-[0.65rem] text-[var(--text-muted)] ml-2 tracking-widest">
                  profile.json
                </span>
              </div>

              <div className="font-mono text-sm">
                <div className="text-[var(--text-muted)] text-xs mb-4">{"{"}</div>
                <dl className="space-y-3 pl-4">
                  {terminalData.map((item, i) => (
                    <motion.div
                      key={item.key}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="grid grid-cols-[auto_1fr_auto] gap-3 items-start"
                    >
                      <dt className="text-[var(--cyan)] opacity-60 w-20 shrink-0 text-xs">
                        "{item.key}":
                      </dt>
                      <dd
                        className={`text-xs ${
                          item.highlight
                            ? "text-[var(--cyan)] font-bold"
                            : "text-[var(--text-primary)]"
                        }`}
                      >
                        "{item.value}"
                        {i < terminalData.length - 1 ? "," : ""}
                      </dd>
                      {item.highlight && (
                        <span className="w-2 h-2 rounded-full bg-[var(--cyan)] animate-pulse ml-1" />
                      )}
                    </motion.div>
                  ))}
                </dl>
                <div className="text-[var(--text-muted)] text-xs mt-4">{"}"}</div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: "inset 0 0 30px rgba(0,240,255,0.04)" }}
              />

              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[var(--cyan)] opacity-40" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[var(--cyan)] opacity-40" />
            </div>

            {/* Bio text */}
            <div className="mt-5 glass-panel p-5">
              <p className="font-body text-[var(--text-secondary)] leading-relaxed text-base tracking-wide">
                Passionate cybersecurity student with hands-on experience in penetration
                testing, web application security, and full-stack development. I combine
                technical depth with creative problem-solving to build secure, resilient systems.
              </p>
            </div>
          </Reveal>

          {/* Info cards */}
          <div className="flex flex-col gap-4">
            {infoCards.map((card, i) => (
              <Reveal key={card.id} delay={i * 0.12} direction="right">
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 24px rgba(0,240,255,0.18), 0 0 8px rgba(0,240,255,0.12)",
                  }}
                  transition={{ duration: 0.25 }}
                  className="glass-panel p-5 border border-[rgba(0,240,255,0.08)] hover:border-[rgba(0,240,255,0.3)] transition-colors duration-300 relative overflow-hidden group cursor-default"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center text-lg shrink-0 border border-[rgba(0,240,255,0.15)] bg-[rgba(0,240,255,0.04)]">
                      {card.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-mono text-[0.6rem] text-[var(--cyan)] opacity-50 tracking-widest">
                          [{card.id}]
                        </span>
                        <span className="font-mono text-[0.65rem] text-[var(--text-muted)] tracking-widest uppercase">
                          {card.title}
                        </span>
                      </div>
                      <div className="font-display text-sm text-white tracking-wide mb-0.5">
                        {card.value}
                      </div>
                      <div className="font-mono text-xs text-[var(--text-muted)]">
                        {card.sub}
                      </div>
                    </div>
                  </div>

                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-[var(--cyan)] to-transparent transition-all duration-500" />
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
