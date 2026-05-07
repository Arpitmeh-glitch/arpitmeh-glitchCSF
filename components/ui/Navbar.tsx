"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "ACHIEVEMENTS", href: "#achievements" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      aria-label="Primary navigation"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(2,4,8,0.92)] backdrop-blur-md border-b border-[rgba(0,240,255,0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="font-display text-sm tracking-[0.2em] text-white group">
          <span className="text-[var(--cyan)] group-hover:text-white transition-colors">&gt;</span>
          <span className="ml-2 group-hover:text-[var(--cyan)] transition-colors">meh-glitch</span>
          <span className="ml-1 text-[var(--cyan)] opacity-60">.exe</span>
          <span className="sr-only">Home</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-[0.7rem] tracking-[0.15em] text-[var(--text-secondary)] hover:text-[var(--cyan)] transition-colors duration-200 relative group focus:outline-none focus:ring-2 focus:ring-[var(--cyan)] focus:ring-offset-2 focus:ring-offset-[#020408]"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--cyan)] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#contact"
            className="font-mono text-[0.7rem] tracking-[0.15em] px-4 py-2 border border-[var(--cyan)] text-[var(--cyan)] hover:bg-[rgba(0,240,255,0.1)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--cyan)] focus:ring-offset-2 focus:ring-offset-[#020408]"
          >
            CONNECT
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden text-[var(--cyan)] font-mono text-xs focus:outline-none focus:ring-2 focus:ring-[var(--cyan)] focus:ring-offset-2 focus:ring-offset-[#020408]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? "[CLOSE]" : "[MENU]"}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-[rgba(2,4,8,0.97)] border-b border-[rgba(0,240,255,0.1)]"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-mono text-xs tracking-widest text-[var(--text-secondary)] hover:text-[var(--cyan)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--cyan)] focus:ring-offset-2 focus:ring-offset-[#020408]"
                >
                  {"> "}{link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
