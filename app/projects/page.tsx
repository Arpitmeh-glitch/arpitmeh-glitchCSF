import "./project.css";
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
    </>
  );
}