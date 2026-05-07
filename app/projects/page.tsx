import type { Metadata } from "next";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Projects | Arpit Mehrotra Cybersecurity Portfolio",
  description:
    "Cybersecurity, Python, Linux, automation, and web security projects built by Arpit Mehrotra — including phishing detection AI, VAPT tooling, and network reconnaissance tools.",
  keywords: [
    "Arpit Mehrotra",
    "Cybersecurity Projects",
    "Python",
    "Linux",
    "Penetration Testing",
    "Web Security",
    "Automation",
    "Nmap",
    "Networking",
    "Phishing Detection",
    "VAPT",
    "Security Tools",
    "OWASP",
  ],
  openGraph: {
    title: "Projects | Arpit Mehrotra Cybersecurity Portfolio",
    description:
      "Security tools, Python automation scripts, and web security research projects by Arpit Mehrotra — CSE student at UPES focused on penetration testing and cybersecurity.",
    url: "https://arpitmehrotra.vercel.app/projects",
    siteName: "Arpit Mehrotra",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Arpit Mehrotra Cybersecurity Portfolio",
    description:
      "Phishing detection AI, VAPT CLI tools, and web security automation built by Arpit Mehrotra.",
  },
  alternates: {
    canonical: "https://arpitmehrotra.vercel.app/projects",
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tech: string[];
  tags: string[];
  github: string;
  demo?: string;
  status: "shipped" | "active" | "wip";
  badge?: string;
};

const featuredProjects: Project[] = [
  {
    id: "phishguard",
    title: "PhishGuard AI",
    subtitle: "ML-Powered Phishing Detection & Threat Classification Platform",
    description:
      "A full-stack phishing detection platform that classifies URLs in real time using machine learning — achieving 94% accuracy on 27,000+ URLs with   validated against Alexa Top 1M domains.",
    highlights: [
      "Classified 27,000+ URLs at 94% accuracy with sub-2-second scan speed",
      "  validated against Alexa Top 1M domain dataset",
      "AES-256 encryption + JWT-based access control on all API endpoints",
      "Containerised deployment via Docker across a 4-member team",
      "  at India Innovates Hackathon 2026",
    ],
    tech: ["Python", "FastAPI", "Machine Learning", "Docker", "AES-256", "JWT", "PostgreSQL", "Redis"],
    tags: ["Cybersecurity", "ML", "Web Security", "VAPT", "Hackathon"],
    github: "https://github.com/Arpitmeh-glitch",
    status: "shipped",
    badge: "🏆 Hackathon Winner",
  },
  {
    id: "web-recon",
    title: "Web Recon CLI",
    subtitle: "Python CLI for Automated HTTP Security Auditing",
    description:
      "A Python command-line tool that performs 7 automated security checks per target — HTTPS enforcement, server fingerprinting, security header analysis, redirect chain mapping, and HTTP status inspection — aligned with OWASP testing guidelines.",
    highlights: [
      "7 automated security checks per target domain in a single command",
      "HTTPS enforcement, server fingerprinting, and 4-point header analysis",
      "Redirect chain mapping and HTTP status code inspection",
      "Structured JSON output for direct integration into pentest reports",
      "Covers misconfiguration detection aligned with OWASP testing guidelines",
    ],
    tech: ["Python", "HTTP/S", "Nmap", "OWASP", "JSON", "Linux CLI", "Networking"],
    tags: ["Penetration Testing", "Automation", "Reconnaissance", "Python", "Linux"],
    github: "https://github.com/Arpitmeh-glitch",
    status: "active",
    badge: "🔍 VAPT Tool",
  },
];

const securityTools: Project[] = [
  {
    id: "header-auditor",
    title: "HTTP Header Auditor",
    subtitle: "Security Header Compliance Checker",
    description:
      "Scans target URLs for missing or misconfigured HTTP security headers including CSP, X-Frame-Options, HSTS, and Referrer-Policy — generates compliance reports against OWASP best practices.",
    highlights: [
      "Checks 8+ critical security headers per request",
      "Scores compliance against OWASP header guidelines",
      "Outputs structured JSON for pentest report integration",
    ],
    tech: ["Python", "Requests", "OWASP", "JSON"],
    tags: ["Web Security", "Automation", "OWASP"],
    github: "https://github.com/Arpitmeh-glitch",
    status: "shipped",
  },
  {
    id: "port-scanner",
    title: "Custom Port Scanner",
    subtitle: "Lightweight Nmap Wrapper & Report Generator",
    description:
      "A Python wrapper around Nmap that automates service enumeration, OS detection, and version scanning — outputs structured reconnaissance reports for web application security assessments.",
    highlights: [
      "Automates Nmap scan profiles for web app reconnaissance",
      "Service enumeration and OS fingerprinting in one command",
      "Exports to JSON and Markdown for report integration",
    ],
    tech: ["Python", "Nmap", "Networking", "Linux", "Reconnaissance"],
    tags: ["Penetration Testing", "Networking", "Nmap", "Linux"],
    github: "https://github.com/Arpitmeh-glitch",
    status: "active",
  },
];

const automationProjects: Project[] = [
  {
    id: "log-parser",
    title: "Security Log Parser",
    subtitle: "Python Automation for IOC Extraction & Alert Triage",
    description:
      "Parses raw server and firewall logs to extract indicators of compromise (IOCs), flag suspicious IPs, and generate triage summaries — reducing manual log analysis time significantly.",
    highlights: [
      "IOC extraction from raw Apache, Nginx, and firewall log formats",
      "IP reputation lookups and suspicious pattern flagging",
      "Generates triage summaries aligned with SOC workflow",
    ],
    tech: ["Python", "Regex", "Log Analysis", "IOC", "SIEM"],
    tags: ["SOC", "Automation", "Threat Detection", "Python"],
    github: "https://github.com/Arpitmeh-glitch",
    status: "active",
  },
  {
    id: "subdomain-enum",
    title: "Subdomain Enumerator",
    subtitle: "Passive & Active Subdomain Discovery Tool",
    description:
      "Combines passive DNS lookups with active brute-forcing to discover subdomains — supports custom wordlists and exports results for integration into broader reconnaissance workflows.",
    highlights: [
      "Passive DNS + active brute-force subdomain discovery",
      "Custom wordlist support for targeted recon",
      "Filters live subdomains with HTTP probing",
    ],
    tech: ["Python", "DNS", "Networking", "Reconnaissance", "Linux"],
    tags: ["Reconnaissance", "Networking", "Automation", "Linux"],
    github: "https://github.com/Arpitmeh-glitch",
    status: "wip",
  },
];

const labs: Project[] = [
  {
    id: "tryhackme-notes",
    title: "TryHackMe Lab Notes",
    subtitle: "Documented Write-ups from SOC, VAPT & Threat Detection Labs",
    description:
      "Structured write-ups and methodology notes from 100+ TryHackMe rooms — covering network penetration testing, web hacking, SOC operations, Linux privilege escalation, and threat detection.",
    highlights: [
      "Top 15% globally on TryHackMe out of 3M+ users",
      "Covers SOC, penetration testing, and threat detection paths",
      "Documented methodology for reuse in real assessments",
    ],
    tech: ["Kali Linux", "Burp Suite", "Nmap", "Metasploit", "Wireshark", "Gobuster"],
    tags: ["Penetration Testing", "SOC", "Linux", "Web Security"],
    github: "https://github.com/Arpitmeh-glitch",
    status: "active",
    badge: "🏅 Top 15% Global",
  },
  {
    id: "owasp-lab",
    title: "OWASP Top 10 Research Lab",
    subtitle: "Hands-on Exploitation & Mitigation Studies",
    description:
      "Personal research lab working through all OWASP Top 10 vulnerability classes — SQL injection, XSS, broken authentication, IDOR, SSRF, and more — with custom PoC scripts and mitigation notes.",
    highlights: [
      "Full OWASP Top 10 coverage with hands-on exploitation",
      "Custom PoC scripts for each vulnerability class",
      "Mitigation notes and secure coding recommendations",
    ],
    tech: ["Burp Suite", "Python", "JavaScript", "SQL", "Web Security", "OWASP"],
    tags: ["Web Security", "OWASP", "Penetration Testing", "Research"],
    github: "https://github.com/Arpitmeh-glitch",
    status: "active",
  },
];

const statusConfig = {
  shipped: { label: "SHIPPED", color: "#39ff14" },
  active: { label: "ACTIVE", color: "#00e5ff" },
  wip: { label: "IN PROGRESS", color: "#ffe600" },
};

// ─── Sub-components ────────────────────────────────────────────────────────────

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="section-header">
      <span className="section-label" aria-hidden="true">{label}</span>
      <h2>{title}</h2>
      <div className="section-line" aria-hidden="true" />
    </div>
  );
}

function TagPill({ tag }: { tag: string }) {
  return <span className="tag-pill">{tag}</span>;
}

function TechBadge({ tech }: { tech: string }) {
  return <span className="tech-badge">{tech}</span>;
}

function StatusDot({ status }: { status: Project["status"] }) {
  const cfg = statusConfig[status];
  return (
    <span
      className="status-dot"
      style={{ "--dot-color": cfg.color } as React.CSSProperties}
      aria-label={`Status: ${cfg.label}`}
    >
      <span className="dot-pulse" aria-hidden="true" />
      {cfg.label}
    </span>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <article className="featured-card" aria-labelledby={`proj-${project.id}`}>
      <div className="card-corner-tl" aria-hidden="true" />
      <div className="card-corner-br" aria-hidden="true" />
      <header className="featured-card-header">
        <div className="featured-card-meta">
          <StatusDot status={project.status} />
          {project.badge && (
            <span className="proj-badge">{project.badge}</span>
          )}
        </div>
        <h3 id={`proj-${project.id}`}>{project.title}</h3>
        <p className="proj-subtitle">{project.subtitle}</p>
      </header>
      <p className="proj-description">{project.description}</p>
      <ul className="proj-highlights" aria-label="Key highlights">
        {project.highlights.map((h, i) => (
          <li key={i}>
            <span className="highlight-arrow" aria-hidden="true">▶</span>
            {h}
          </li>
        ))}
      </ul>
      <div className="proj-tags" aria-label="Tags">
        {project.tags.map((t) => <TagPill key={t} tag={t} />)}
      </div>
      <div className="proj-tech" aria-label="Technologies used">
        {project.tech.map((t) => <TechBadge key={t} tech={t} />)}
      </div>
      <footer className="proj-links">
        <a
          href={project.github}
          className="cyber-btn primary"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} on GitHub (opens in new tab)`}
        >
          <span aria-hidden="true">⌬</span> GitHub
        </a>
        {project.demo && (
          <a
            href={project.demo}
            className="cyber-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Live demo of ${project.title} (opens in new tab)`}
          >
            <span aria-hidden="true">◉</span> Live Demo
          </a>
        )}
      </footer>
    </article>
  );
}

function MiniProjectCard({ project }: { project: Project }) {
  return (
    <article className="mini-card" aria-labelledby={`mini-${project.id}`}>
      <div className="mini-card-corner" aria-hidden="true" />
      <header>
        <StatusDot status={project.status} />
        <h3 id={`mini-${project.id}`}>{project.title}</h3>
        <p className="proj-subtitle">{project.subtitle}</p>
      </header>
      <p className="proj-description">{project.description}</p>
      <div className="proj-tech" aria-label="Technologies">
        {project.tech.slice(0, 5).map((t) => <TechBadge key={t} tech={t} />)}
        {project.tech.length > 5 && (
          <span className="tech-badge muted">+{project.tech.length - 5}</span>
        )}
      </div>
      <footer className="proj-links">
        <a
          href={project.github}
          className="cyber-btn sm"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} on GitHub (opens in new tab)`}
        >
          <span aria-hidden="true">⌬</span> GitHub
        </a>
        {project.demo && (
          <a
            href={project.demo}
            className="cyber-btn sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        )}
      </footer>
    </article>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProjectsPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Cybersecurity Projects — Arpit Mehrotra",
            description:
              "Security tools, Python automation, and web security research projects built by Arpit Mehrotra.",
            url: "https://arpitmehrotra.vercel.app/projects",
            image: "https://arpitmehrotra.vercel.app/arpit-mehrotra.jpg",
            author: {
              "@type": "Person",
              name: "Arpit Mehrotra",
              url: "https://arpitmehrotra.vercel.app",
              image: "https://arpitmehrotra.vercel.app/arpit-mehrotra.jpg",
              sameAs: [
                "https://github.com/Arpitmeh-glitch",
                "https://linkedin.com/in/arpitmehrotra-dev",
              ],
            },
          }),
        }}
      />

      <div className="page-root">
        <div className="scanlines" aria-hidden="true" />

        {/* ════ HERO ════ */}
        <section className="hero-section" aria-labelledby="page-h1">
          <div className="hero-grid-bg" aria-hidden="true" />
          <div className="hero-content">
            <div className="hero-eyebrow" aria-hidden="true">
              <span className="blink-cursor">█</span> PROJECTS.DIR LOADED
            </div>
            <h1 id="page-h1" className="glitch-h1" data-text="Projects">
              Projects
            </h1>
            <p className="hero-intro">
              Security tools, <strong>Python automation</strong>, and{" "}
              <strong>web security</strong> research — built while learning{" "}
              <strong>penetration testing</strong>, <strong>Linux</strong>, and{" "}
              network reconnaissance at UPES.
            </p>
            <div className="stat-row" aria-label="Quick stats">
              <div className="stat-chip">
                <span className="stat-num">8+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-chip">
                <span className="stat-num">94%</span>
                <span className="stat-label">ML Accuracy</span>
              </div>
              <div className="stat-chip">
                <span className="stat-num">Top 15%</span>
                <span className="stat-label">TryHackMe Global</span>
              </div>
              <div className="stat-chip">
                <span className="stat-num">Top 30</span>
                <span className="stat-label">National Hackathon</span>
              </div>
            </div>
            <nav className="hero-nav" aria-label="Quick navigation">
              <a href="/" className="cyber-btn" aria-label="Homepage">⌂ Home</a>
              <a href="/about" className="cyber-btn" aria-label="About page">◈ About</a>
              <a href="/resume" className="cyber-btn" aria-label="Resume page">▣ Resume</a>
              <a
                href="https://github.com/Arpitmeh-glitch"
                className="cyber-btn primary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile (opens in new tab)"
              >
                ⌬ GitHub
              </a>
            </nav>
          </div>
        </section>

        {/* ════ FEATURED PROJECTS ════ */}
        <section className="content-section" aria-labelledby="featured-heading">
          <div className="container">
            <SectionHeader label="// 01 —" title="Featured Projects" />
            <p className="section-intro" id="featured-heading">
              Production-grade cybersecurity and web security tools shipped and
              validated against real datasets.
            </p>
            <div className="featured-grid">
              {featuredProjects.map((p) => (
                <FeaturedProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>

        {/* ════ SECURITY TOOLS ════ */}
        <section className="content-section alt-bg" aria-labelledby="tools-heading">
          <div className="container">
            <SectionHeader label="// 02 —" title="Security Tools" />
            <p className="section-intro" id="tools-heading">
              Focused CLI and Python tools for penetration testing, network
              reconnaissance, and OWASP-aligned security auditing.
            </p>
            <div className="mini-grid">
              {securityTools.map((p) => (
                <MiniProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>

        {/* ════ AUTOMATION ════ */}
        <section className="content-section" aria-labelledby="auto-heading">
          <div className="container">
            <SectionHeader label="// 03 —" title="Automation Projects" />
            <p className="section-intro" id="auto-heading">
              Python automation scripts for log analysis, IOC extraction, and
              reducing manual security operations overhead.
            </p>
            <div className="mini-grid">
              {automationProjects.map((p) => (
                <MiniProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>

        {/* ════ LABS ════ */}
        <section className="content-section alt-bg" aria-labelledby="labs-heading">
          <div className="container">
            <SectionHeader label="// 04 —" title="Experimental Labs" />
            <p className="section-intro" id="labs-heading">
              Hands-on research, CTF write-ups, and OWASP Top 10 exploitation
              studies — documenting the learning behind the tools.
            </p>
            <div className="mini-grid">
              {labs.map((p) => (
                <MiniProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>

        {/* ════ CTA ════ */}
        <section className="cta-section" aria-labelledby="cta-heading">
          <div className="container cta-inner">
            <h2 id="cta-heading">Want to collaborate?</h2>
            <p>
              Open to CTF teams, bug bounty collaboration, open-source security
              tooling, and cybersecurity research partnerships.
            </p>
            <nav aria-label="Contact links">
              <a
                href="https://linkedin.com/in/arpitmehrotra-dev"
                className="cyber-btn primary large"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on LinkedIn (opens in new tab)"
              >
                Connect on LinkedIn
              </a>
              <a
                href="https://github.com/Arpitmeh-glitch"
                className="cyber-btn large"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View GitHub (opens in new tab)"
              >
                View GitHub
              </a>
            </nav>
          </div>
        </section>
      </div>

      <style jsx>{`
        /* ── Root vars ── */
        .page-root {
          --bg: #0a0e17;
          --bg-alt: #0d1220;
          --surface: #111827;
          --border: #1e2d45;
          --cyan: #00e5ff;
          --green: #39ff14;
          --pink: #ff2d78;
          --yellow: #ffe600;
          --text: #c8d8e8;
          --text-dim: #5a7a9a;
          --font-mono: "Courier New", Courier, monospace;
          --font-display: "Segoe UI", system-ui, sans-serif;
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-display);
          line-height: 1.7;
          position: relative;
          overflow-x: hidden;
          min-height: 100vh;
        }

        .sr-only {
          position: absolute; width: 1px; height: 1px; padding: 0;
          margin: -1px; overflow: hidden; clip: rect(0,0,0,0);
          white-space: nowrap; border: 0;
        }

        /* ── Scanlines ── */
        .scanlines {
          pointer-events: none; position: fixed; inset: 0; z-index: 100;
          background: repeating-linear-gradient(
            0deg, transparent, transparent 2px,
            rgba(0,229,255,0.015) 2px, rgba(0,229,255,0.015) 4px
          );
        }

        /* ── Blink ── */
        .blink-cursor { color: var(--green); animation: blink 1s step-end infinite; }
        @keyframes blink { 50% { opacity: 0; } }

        /* ── Hero ── */
        .hero-section {
          position: relative; min-height: 80vh; padding: 6rem 5vw 4rem;
          display: flex; align-items: center; overflow: hidden;
        }
        .hero-grid-bg {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(0,229,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,229,255,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .hero-grid-bg::after {
          content: ""; position: absolute; inset: 0;
          background: radial-gradient(ellipse 70% 80% at 20% 50%, rgba(0,229,255,0.05) 0%, transparent 70%);
        }
        .hero-content { position: relative; z-index: 1; max-width: 900px; }

        .hero-eyebrow {
          font-family: var(--font-mono); font-size: 0.75rem; color: var(--green);
          letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 1.2rem;
        }

        /* Glitch H1 */
        .glitch-h1 {
          position: relative; display: inline-block;
          font-size: clamp(3rem, 8vw, 6rem); font-weight: 800;
          color: var(--cyan); letter-spacing: -0.03em;
          margin: 0 0 1.5rem; line-height: 1;
          text-shadow: 0 0 40px rgba(0,229,255,0.4);
        }
        .glitch-h1::before, .glitch-h1::after {
          content: attr(data-text); position: absolute; inset: 0; opacity: 0.7;
        }
        .glitch-h1::before {
          color: var(--pink); animation: glitch-a 5s infinite;
          clip-path: polygon(0 25%, 100% 25%, 100% 45%, 0 45%);
        }
        .glitch-h1::after {
          color: var(--green); animation: glitch-b 5s infinite 0.2s;
          clip-path: polygon(0 65%, 100% 65%, 100% 80%, 0 80%);
        }
        @keyframes glitch-a {
          0%,88%,100%{transform:none;opacity:0}
          90%{transform:translateX(-4px);opacity:.7}
          93%{transform:translateX(3px);opacity:.7}
          95%{transform:none;opacity:0}
        }
        @keyframes glitch-b {
          0%,86%,100%{transform:none;opacity:0}
          88%{transform:translateX(5px);opacity:.7}
          92%{transform:translateX(-3px);opacity:.7}
          94%{transform:none;opacity:0}
        }

        .hero-intro {
          font-size: 1.1rem; color: var(--text-dim); max-width: 60ch;
          margin-bottom: 2rem; line-height: 1.8;
        }
        .hero-intro strong { color: var(--text); }

        /* Stat row */
        .stat-row {
          display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 2rem;
        }
        .stat-chip {
          display: flex; flex-direction: column; align-items: center;
          padding: 0.75rem 1.25rem; background: var(--surface);
          border: 1px solid var(--border); min-width: 100px;
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%);
        }
        .stat-num {
          font-family: var(--font-mono); font-size: 1.1rem; color: var(--cyan);
          font-weight: 700;
        }
        .stat-label {
          font-size: 0.7rem; color: var(--text-dim); text-transform: uppercase;
          letter-spacing: 0.1em; margin-top: 0.2rem;
        }

        /* Nav */
        .hero-nav { display: flex; flex-wrap: wrap; gap: 0.75rem; }

        /* Buttons */
        .cyber-btn {
          display: inline-flex; align-items: center; gap: 0.4rem;
          padding: 0.55rem 1.2rem; border: 1px solid var(--border);
          background: transparent; color: var(--text);
          font-family: var(--font-mono); font-size: 0.82rem;
          text-decoration: none; letter-spacing: 0.05em; cursor: pointer;
          transition: border-color .2s, color .2s, background .2s, box-shadow .2s;
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
        }
        .cyber-btn:hover, .cyber-btn:focus-visible {
          border-color: var(--cyan); color: var(--cyan);
          box-shadow: 0 0 12px rgba(0,229,255,.2); outline: none;
        }
        .cyber-btn.primary {
          border-color: var(--cyan); background: rgba(0,229,255,.08); color: var(--cyan);
        }
        .cyber-btn.primary:hover, .cyber-btn.primary:focus-visible {
          background: rgba(0,229,255,.18); box-shadow: 0 0 20px rgba(0,229,255,.3);
        }
        .cyber-btn.large { padding: 0.75rem 1.8rem; font-size: 0.9rem; }
        .cyber-btn.sm { padding: 0.4rem 0.9rem; font-size: 0.78rem; }

        /* ── Sections ── */
        .content-section { padding: 5rem 5vw; }
        .alt-bg { background: var(--bg-alt); }
        .container { max-width: 1100px; margin: 0 auto; }

        .section-header { margin-bottom: 1rem; }
        .section-label {
          display: block; font-family: var(--font-mono); font-size: 0.72rem;
          color: var(--cyan); letter-spacing: 0.2em; margin-bottom: 0.4rem; text-transform: uppercase;
        }
        .section-header h2 {
          font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 700;
          color: var(--text); margin: 0 0 0.75rem; letter-spacing: -0.02em;
        }
        .section-line { width: 60px; height: 2px; background: linear-gradient(90deg, var(--cyan), transparent); }
        .section-intro {
          color: var(--text-dim); font-size: 0.95rem; max-width: 70ch;
          margin: 0 0 2.5rem; line-height: 1.7;
        }

        /* ── Featured cards ── */
        .featured-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
          gap: 1.5rem;
        }
        .featured-card {
          position: relative; background: var(--surface); border: 1px solid var(--border);
          padding: 2rem; transition: border-color .2s, box-shadow .2s;
          clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%);
        }
        .featured-card:hover {
          border-color: var(--cyan); box-shadow: 0 0 30px rgba(0,229,255,.1);
        }
        .card-corner-tl {
          position: absolute; top: 0; right: 0; width: 20px; height: 20px;
          background: var(--cyan); clip-path: polygon(0 0, 100% 0, 100% 100%); opacity: .5;
        }
        .card-corner-br {
          position: absolute; bottom: 0; left: 0; width: 12px; height: 12px;
          background: var(--green); clip-path: polygon(0 0, 0 100%, 100% 100%); opacity: .3;
        }

        .featured-card-header { margin-bottom: 1rem; }
        .featured-card-meta { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.6rem; flex-wrap: wrap; }
        .featured-card h3 {
          font-size: 1.35rem; font-weight: 700; color: var(--cyan);
          margin: 0 0 0.25rem; line-height: 1.2;
        }
        .proj-subtitle { font-size: 0.85rem; color: var(--text-dim); margin: 0; }
        .proj-badge {
          font-family: var(--font-mono); font-size: 0.72rem; color: var(--yellow);
          border: 1px solid rgba(255,230,0,.3); padding: 0.15rem 0.5rem;
          background: rgba(255,230,0,.06);
        }

        .proj-description { font-size: 0.92rem; color: var(--text-dim); line-height: 1.7; margin: 0 0 1.25rem; }

        .proj-highlights {
          list-style: none; margin: 0 0 1.25rem; padding: 0;
          display: flex; flex-direction: column; gap: 0.45rem;
        }
        .proj-highlights li {
          display: flex; align-items: flex-start; gap: 0.6rem;
          font-size: 0.88rem; color: var(--text-dim); line-height: 1.5;
        }
        .highlight-arrow { color: var(--green); font-size: 0.65rem; flex-shrink: 0; margin-top: 0.3rem; }

        .proj-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 0.75rem; }
        .tag-pill {
          font-size: 0.7rem; padding: 0.2rem 0.6rem; border: 1px solid rgba(0,229,255,.2);
          color: var(--cyan); background: rgba(0,229,255,.06); font-family: var(--font-mono);
          letter-spacing: 0.05em;
        }

        .proj-tech { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 1.25rem; }
        .tech-badge {
          font-size: 0.7rem; padding: 0.2rem 0.55rem; background: rgba(255,255,255,.04);
          border: 1px solid var(--border); color: var(--text-dim); font-family: var(--font-mono);
        }
        .tech-badge.muted { opacity: .6; }

        .proj-links { display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 0.5rem; }

        /* ── Status dot ── */
        .status-dot {
          display: inline-flex; align-items: center; gap: 0.4rem;
          font-family: var(--font-mono); font-size: 0.68rem;
          color: var(--dot-color, var(--cyan)); letter-spacing: 0.12em; text-transform: uppercase;
        }
        .dot-pulse {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--dot-color, var(--cyan));
          box-shadow: 0 0 6px var(--dot-color, var(--cyan));
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot { 0%,100%{opacity:1} 50%{opacity:.3} }

        /* ── Mini cards ── */
        .mini-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.25rem;
        }
        .mini-card {
          position: relative; background: var(--surface); border: 1px solid var(--border);
          padding: 1.5rem; transition: border-color .2s, box-shadow .2s;
          clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%);
          display: flex; flex-direction: column; gap: 0.75rem;
        }
        .mini-card:hover {
          border-color: var(--green); box-shadow: 0 0 16px rgba(57,255,20,.08);
        }
        .mini-card-corner {
          position: absolute; top: 0; right: 0; width: 14px; height: 14px;
          background: var(--green); clip-path: polygon(0 0,100% 0,100% 100%); opacity: .4;
        }
        .mini-card h3 {
          font-size: 1.05rem; font-weight: 600; color: var(--cyan); margin: 0.35rem 0 0.2rem;
        }

        /* ── CTA ── */
        .cta-section {
          padding: 6rem 5vw; border-top: 1px solid var(--border);
          background: radial-gradient(ellipse 60% 60% at 50% 100%, rgba(0,229,255,.04) 0%, transparent 70%);
        }
        .cta-inner {
          text-align: center; display: flex; flex-direction: column;
          align-items: center; gap: 1.5rem; max-width: 1100px; margin: 0 auto;
        }
        .cta-inner h2 {
          font-size: clamp(2rem, 5vw, 3.2rem); font-weight: 700;
          color: var(--text); margin: 0;
        }
        .cta-inner p { color: var(--text-dim); max-width: 55ch; font-size: 1rem; margin: 0; }
        .cta-inner nav { display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .hero-section { padding: 5rem 1.5rem 3rem; min-height: auto; }
          .featured-grid { grid-template-columns: 1fr; }
          .mini-grid { grid-template-columns: 1fr; }
          .content-section { padding: 3.5rem 1.5rem; }
          .cta-section { padding: 4rem 1.5rem; }
        }

        @media (prefers-reduced-motion: reduce) {
          .glitch-h1::before, .glitch-h1::after,
          .blink-cursor, .dot-pulse { animation: none; }
        }
      `}</style>
    </>
  );
}