import type { Metadata } from "next";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Resume | Arpit Mehrotra",
  description:
    "Resume of Arpit Mehrotra — cybersecurity engineer and CSE student at UPES focused on VAPT, penetration testing, Linux, Python automation, and web security. Top 15% globally on TryHackMe.",
  keywords: [
    "Arpit Mehrotra Resume",
    "Cybersecurity",
    "Linux",
    "Python",
    "Penetration Testing",
    "Web Security",
    "Network Reconnaissance",
    "VAPT",
    "UPES",
    "TryHackMe",
    "Burp Suite",
    "Nmap",
    "CompTIA Security+",
  ],
  openGraph: {
    title: "Resume | Arpit Mehrotra",
    description:
      "Arpit Mehrotra — cybersecurity engineer at UPES specialising in VAPT, Python automation, Burp Suite, Nmap, and web security. Top 15% TryHackMe globally.",
    url: "https://arpitmehrotra.vercel.app/resume",
    siteName: "Arpit Mehrotra",
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume | Arpit Mehrotra",
    description:
      "Cybersecurity engineer resume — VAPT, Python, Linux, penetration testing, web security. Top 15% TryHackMe, India Innovates Hackathon 2026 finalist.",
  },
  alternates: {
    canonical: "https://arpitmehrotra.vercel.app/resume",
  },
};

// ─── Resume Data ───────────────────────────────────────────────────────────────

const resumeData = {
  name: "Arpit Mehrotra",
  tagline: "VAPT & Security Engineering  |  Threat Detection  |  Security Tool Development",
  contact: {
    location: "Dehradun, India",
    phone: "+91-9569269761",
    email: "mehrotraa245@gmail.com",
    github: "https://github.com/Arpitmeh-glitch",
    linkedin: "https://linkedin.com/in/arpitmehrotra-dev",
    portfolio: "https://arpitmehrotra.vercel.app",
  },
  summary:
    "Cybersecurity engineer graduating April 2029 (UPES Dehradun) with a track record of building and shipping real security tools — not just coursework. Engineered a phishing detection platform that classified 27,000+ URLs at 94% accuracy with   on Alexa Top 1M domains. Built automated VAPT tooling for HTTP security auditing. Ranked Top 15% globally on TryHackMe across 3M+ users and placed in the top 30 cybersecurity teams nationally at India Innovates Hackathon 2026.",
  skills: [
    {
      category: "VAPT & Offensive Security",
      items: ["Penetration Testing", "Vulnerability Assessment", "Reconnaissance (Active/Passive)", "OWASP Top 10", "Exploit Development"],
    },
    {
      category: "Security Tools",
      items: ["Burp Suite", "Nmap", "Wireshark", "Metasploit", "Nikto", "Gobuster", "Kali Linux"],
    },
    {
      category: "SOC & Threat Detection",
      items: ["IOC Analysis", "Alert Triage", "Log Analysis", "Incident Response", "SIEM (Splunk, Microsoft Sentinel)"],
    },
    {
      category: "Networking & Protocols",
      items: ["TCP/IP", "DNS", "HTTP/S", "TLS/SSL", "ARP", "ICMP", "OSI Model", "Firewall Concepts", "IDS/IPS"],
    },
    {
      category: "Secure Development",
      items: ["Python", "FastAPI", "AES-256 Encryption", "JWT Authentication", "Docker", "PostgreSQL", "Redis"],
    },
    {
      category: "Frameworks",
      items: ["OWASP", "NIST Cybersecurity Framework", "CIA Triad", "ISO 27001 (awareness)"],
    },
  ],
  projects: [
    {
      title: "PhishGuard AI",
      subtitle: "ML-Powered Phishing Detection & Threat Classification Platform",
      highlights: [
        "Engineered a full-stack phishing detection platform that classified 27,000+ URLs at 94% accuracy and sub-2-second scan speed, with   validated against Alexa Top 1M domains.",
        "Secured the application layer with AES-256 encryption, JWT-based access control, and containerised deployment via Docker — built across a 4-member team.",
        "Placed top 30 in cybersecurity category (top 200 overall) at India Innovates Hackathon 2026, competing with a live, working product against national-level teams.",
      ],
    },
    {
      title: "Web Recon CLI Tool",
      subtitle: "Python CLI for Automated HTTP Security Auditing",
      highlights: [
        "Built a Python CLI tool that runs 7 automated security checks per target — HTTPS enforcement, server fingerprinting, 4-point security header analysis, redirect chain mapping, and HTTP status inspection.",
        "Replaced manual per-URL auditing with structured JSON output, enabling direct integration into penetration testing reports and reducing documentation time.",
        "Designed for the reconnaissance phase of web application security assessments; covers misconfiguration detection aligned with OWASP testing guidelines.",
      ],
    },
  ],
  certifications: [
    {
      name: "TryHackMe Pre-Security Certified",
      detail: "Completed network fundamentals, web hacking, and Linux core modules.",
      status: "earned",
    },
    {
      name: "Top 15% Globally — TryHackMe",
      detail: "Ranked in top 15% out of 3M+ users across SOC, penetration testing, and threat detection labs.",
      status: "earned",
    },
    {
      name: "Top 30 Cybersecurity Team — India Innovates Hackathon 2026",
      detail: "Judged on live product functionality and security architecture at national level.",
      status: "earned",
    },
    {
      name: "CompTIA Security+",
      detail: "Target completion: Q3 2026.",
      status: "pursuing",
    },
  ],
  education: [
    {
      degree: "B.Tech — Computer Science (Cybersecurity)",
      institution: "University of Petroleum and Energy Studies (UPES), Dehradun, Uttarakhand",
      year: "April 2026",
      grade: null,
    },
    {
      degree: "Class XII",
      institution: "Ryan International School, Shahjahanpur, Uttar Pradesh",
      year: null,
      grade: "78%",
    },
    {
      degree: "Class X",
      institution: "Ryan International School, Shahjahanpur, Uttar Pradesh",
      year: null,
      grade: "93%",
    },
  ],
  platforms: [
    { name: "TryHackMe", url: "https://tryhackme.com", badge: "Top 15% Global", color: "#c11111" },
    { name: "GitHub", url: "https://github.com/Arpitmeh-glitch", badge: "Active", color: "#39ff14" },
    { name: "PortSwigger Web Academy", url: "https://portswigger.net/web-security", badge: "Active", color: "#ff6633" },
    { name: "Hack The Box", url: "https://hackthebox.com", badge: "Learning", color: "#9fef00" },
  ],
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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ResumePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Arpit Mehrotra",
            url: "https://arpitmehrotra.vercel.app",
            image: "https://arpitmehrotra.vercel.app/arpit-mehrotra.jpg",
            email: "mehrotraa245@gmail.com",
            telephone: "+91-9569269761",
            address: { "@type": "PostalAddress", addressLocality: "Dehradun", addressCountry: "IN" },
            sameAs: [
              "https://github.com/Arpitmeh-glitch",
              "https://linkedin.com/in/arpitmehrotra-dev",
            ],
            jobTitle: "Cybersecurity Engineer",
            alumniOf: { "@type": "CollegeOrUniversity", name: "UPES Dehradun" },
            knowsAbout: [
              "Cybersecurity", "Penetration Testing", "Linux", "Python",
              "Web Security", "Network Reconnaissance", "Nmap", "Burp Suite",
              "VAPT", "OWASP",
            ],
          }),
        }}
      />

      <div className="page-root">
        <div className="scanlines" aria-hidden="true" />

        {/* ════ HERO / HEADER ════ */}
        <header className="resume-hero" aria-labelledby="resume-h1">
          <div className="hero-grid-bg" aria-hidden="true" />
          <div className="resume-hero-inner">
            <div className="hero-eyebrow" aria-hidden="true">
              <span className="blink-cursor">█</span> RESUME.PDF DECRYPTED
            </div>
            <h1 id="resume-h1">{resumeData.name}</h1>
            <p className="resume-tagline">{resumeData.tagline}</p>

            {/* Contact row */}
            <address className="contact-row" aria-label="Contact information">
              <span className="contact-item">
                <span aria-hidden="true">📍</span> {resumeData.contact.location}
              </span>
              <span className="contact-item">
                <span aria-hidden="true">📞</span>
                <a href={`tel:${resumeData.contact.phone}`} className="contact-link">
                  {resumeData.contact.phone}
                </a>
              </span>
              <span className="contact-item">
                <span aria-hidden="true">✉</span>
                <a href={`mailto:${resumeData.contact.email}`} className="contact-link">
                  {resumeData.contact.email}
                </a>
              </span>
              <span className="contact-item">
                <a
                  href={resumeData.contact.github}
                  className="contact-link accent"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile (opens in new tab)"
                >
                  ⌬ GitHub
                </a>
              </span>
              <span className="contact-item">
                <a
                  href={resumeData.contact.linkedin}
                  className="contact-link accent"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile (opens in new tab)"
                >
                  ◈ LinkedIn
                </a>
              </span>
            </address>

            {/* Action buttons */}
            <nav className="resume-actions" aria-label="Resume actions">
              <a
                href="/Arpit_Resume_Final.docx"
                download
                className="cyber-btn primary large"
                aria-label="Download resume as PDF"
              >
                <span aria-hidden="true">⬇</span> Download Resume
              </a>
              <button
                className="cyber-btn large"
                onClick={() => typeof window !== "undefined" && window.print()}
                aria-label="Print resume"
              >
                <span aria-hidden="true">⎙</span> Print
              </button>
              <a href="/" className="cyber-btn" aria-label="Go to portfolio homepage">⌂ Home</a>
              <a href="/about" className="cyber-btn" aria-label="About page">◈ About</a>
              <a href="/projects" className="cyber-btn" aria-label="Projects page">▣ Projects</a>
            </nav>
          </div>
        </header>

        <main id="main-content">

          {/* ════ SUMMARY ════ */}
          <section className="content-section" aria-labelledby="summary-heading">
            <div className="container">
              <SectionHeader label="// 00 —" title="Professional Summary" />
              <div className="summary-block" id="summary-heading">
                <div className="summary-accent" aria-hidden="true">
                  <span className="blink-cursor">█</span>
                </div>
                <p>{resumeData.summary}</p>
              </div>
            </div>
          </section>

          {/* ════ EDUCATION ════ */}
          <section className="content-section alt-bg" aria-labelledby="edu-heading">
            <div className="container">
              <SectionHeader label="// 01 —" title="Education" />
              <div className="timeline" id="edu-heading" role="list">
                {resumeData.education.map((edu, i) => (
                  <article key={i} className="timeline-item" role="listitem">
                    <div className="timeline-dot" aria-hidden="true" />
                    <div className="timeline-content">
                      <h3>{edu.degree}</h3>
                      <p className="timeline-institution">{edu.institution}</p>
                      <div className="timeline-meta">
                        {edu.year && <span className="timeline-badge year">{edu.year}</span>}
                        {edu.grade && <span className="timeline-badge grade">{edu.grade}</span>}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ════ SKILLS ════ */}
          <section className="content-section" aria-labelledby="skills-heading">
            <div className="container">
              <SectionHeader label="// 02 —" title="Technical Skills" />
              <div className="skills-table" id="skills-heading" role="list">
                {resumeData.skills.map((group) => (
                  <div key={group.category} className="skills-row" role="listitem">
                    <dt className="skills-category">{group.category}</dt>
                    <dd className="skills-items">
                      {group.items.map((item) => (
                        <span key={item} className="skill-tag">{item}</span>
                      ))}
                    </dd>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ════ PROJECTS ════ */}
          <section className="content-section alt-bg" aria-labelledby="projects-heading">
            <div className="container">
              <SectionHeader label="// 03 —" title="Projects" />
              <div className="resume-projects" id="projects-heading" role="list">
                {resumeData.projects.map((proj) => (
                  <article key={proj.title} className="resume-project-card" role="listitem">
                    <div className="rp-corner" aria-hidden="true" />
                    <header>
                      <h3>{proj.title}</h3>
                      <p className="rp-subtitle">{proj.subtitle}</p>
                    </header>
                    <ul className="rp-highlights" aria-label="Project highlights">
                      {proj.highlights.map((h, i) => (
                        <li key={i}>
                          <span className="rp-arrow" aria-hidden="true">▶</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/projects"
                      className="cyber-btn sm"
                      aria-label={`View ${proj.title} details on projects page`}
                    >
                      View Full Details →
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ════ CERTIFICATIONS ════ */}
          <section className="content-section" aria-labelledby="cert-heading">
            <div className="container">
              <SectionHeader label="// 04 —" title="Certifications & Achievements" />
              <div className="cert-grid" id="cert-heading" role="list">
                {resumeData.certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className={`cert-card ${cert.status}`}
                    role="listitem"
                  >
                    <div className="cert-status-dot" aria-label={cert.status === "earned" ? "Earned" : "In progress"} />
                    <strong className="cert-name">{cert.name}</strong>
                    <p className="cert-detail">{cert.detail}</p>
                    {cert.status === "pursuing" && (
                      <span className="cert-pursuing-badge">In Progress</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ════ PLATFORMS ════ */}
          <section className="content-section alt-bg" aria-labelledby="platforms-heading">
            <div className="container">
              <SectionHeader label="// 05 —" title="Platforms & Profiles" />
              <div className="platforms-grid" id="platforms-heading">
                {resumeData.platforms.map((p) => (
                  <a
                    key={p.name}
                    href={p.url}
                    className="platform-card"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ "--accent": p.color } as React.CSSProperties}
                    aria-label={`${p.name} — ${p.badge} (opens in new tab)`}
                  >
                    <span className="platform-badge" style={{ color: p.color }}>{p.badge}</span>
                    <strong>{p.name}</strong>
                    <span className="platform-arrow" aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            </div>
          </section>

        </main>

        {/* ════ CTA ════ */}
        <section className="cta-section" aria-labelledby="cta-h">
          <div className="container cta-inner">
            <h2 id="cta-h">Open to Opportunities</h2>
            <p>
              Seeking internships and roles in <strong>penetration testing</strong>,{" "}
              <strong>SOC analysis</strong>, and <strong>security engineering</strong>.
              Let&apos;s connect.
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
                href={`mailto:${resumeData.contact.email}`}
                className="cyber-btn large"
                aria-label="Send email"
              >
                Send Email
              </a>
            </nav>
          </div>
        </section>
      </div>

      <style jsx>{`
        /* ── Print styles — must come first so they don't leak ── */
        @media print {
          .scanlines, .hero-grid-bg, .resume-actions, .cta-section { display: none !important; }
          .page-root {
            --bg: #fff; --bg-alt: #f8f8f8; --surface: #fff;
            --text: #111; --text-dim: #444; --border: #ddd;
            --cyan: #0055cc; --green: #006600;
            background: #fff; color: #111;
          }
          .content-section, .alt-bg { padding: 1.5rem 1rem; }
          .resume-hero { padding: 2rem 1rem 1rem; min-height: auto; }
          .section-header h2 { font-size: 1.2rem; }
          .timeline-item, .cert-card, .resume-project-card { break-inside: avoid; }
        }

        /* ── Root vars ── */
        .page-root {
          --bg: #0a0e17; --bg-alt: #0d1220; --surface: #111827;
          --border: #1e2d45; --cyan: #00e5ff; --green: #39ff14;
          --pink: #ff2d78; --yellow: #ffe600;
          --text: #c8d8e8; --text-dim: #5a7a9a;
          --font-mono: "Courier New", Courier, monospace;
          --font-display: "Segoe UI", system-ui, sans-serif;
          background: var(--bg); color: var(--text);
          font-family: var(--font-display); line-height: 1.7;
          position: relative; overflow-x: hidden; min-height: 100vh;
        }

        /* ── Scanlines ── */
        .scanlines {
          pointer-events: none; position: fixed; inset: 0; z-index: 100;
          background: repeating-linear-gradient(
            0deg, transparent, transparent 2px,
            rgba(0,229,255,.015) 2px, rgba(0,229,255,.015) 4px
          );
        }

        .blink-cursor { color: var(--green); animation: blink 1s step-end infinite; }
        @keyframes blink { 50% { opacity: 0; } }
        .accent { color: var(--cyan); }

        /* ── Resume hero ── */
        .resume-hero {
          position: relative; padding: 5rem 5vw 3.5rem; overflow: hidden;
          border-bottom: 1px solid var(--border);
        }
        .hero-grid-bg {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(0,229,255,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,229,255,.04) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .hero-grid-bg::after {
          content: ""; position: absolute; inset: 0;
          background: radial-gradient(ellipse 50% 80% at 0% 50%, rgba(0,229,255,.05) 0%, transparent 70%);
        }
        .resume-hero-inner { position: relative; z-index: 1; max-width: 1100px; margin: 0 auto; }

        .hero-eyebrow {
          font-family: var(--font-mono); font-size: 0.72rem; color: var(--green);
          letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 1rem;
        }

        .resume-hero h1 {
          font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 800;
          color: var(--cyan); margin: 0 0 0.5rem; letter-spacing: -0.03em;
          text-shadow: 0 0 40px rgba(0,229,255,.3); line-height: 1.05;
        }
        .resume-tagline {
          font-family: var(--font-mono); font-size: 0.82rem; color: var(--text-dim);
          letter-spacing: 0.06em; margin: 0 0 1.5rem;
          border-left: 2px solid var(--cyan); padding-left: 0.75rem;
        }

        /* Contact */
        .contact-row {
          display: flex; flex-wrap: wrap; gap: 1rem 2rem;
          font-style: normal; font-size: 0.88rem; color: var(--text-dim);
          margin-bottom: 2rem; align-items: center;
        }
        .contact-item { display: flex; align-items: center; gap: 0.35rem; }
        .contact-link { color: var(--text-dim); text-decoration: none; transition: color .2s; }
        .contact-link:hover { color: var(--cyan); }
        .contact-link.accent { color: var(--cyan); }

        /* Actions */
        .resume-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; }

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
        .cyber-btn.primary:hover { background: rgba(0,229,255,.18); box-shadow: 0 0 20px rgba(0,229,255,.3); }
        .cyber-btn.large { padding: 0.75rem 1.8rem; font-size: 0.9rem; }
        .cyber-btn.sm { padding: 0.35rem 0.85rem; font-size: 0.76rem; }

        /* ── Sections ── */
        .content-section { padding: 4rem 5vw; }
        .alt-bg { background: var(--bg-alt); }
        .container { max-width: 1100px; margin: 0 auto; }

        .section-header { margin-bottom: 2rem; }
        .section-label {
          display: block; font-family: var(--font-mono); font-size: 0.7rem;
          color: var(--cyan); letter-spacing: 0.2em; margin-bottom: 0.3rem; text-transform: uppercase;
        }
        .section-header h2 {
          font-size: clamp(1.6rem, 3.5vw, 2.4rem); font-weight: 700;
          color: var(--text); margin: 0 0 0.6rem; letter-spacing: -0.02em;
        }
        .section-line { width: 60px; height: 2px; background: linear-gradient(90deg, var(--cyan), transparent); }

        /* ── Summary ── */
        .summary-block {
          display: flex; gap: 1.5rem; align-items: flex-start;
          background: var(--surface); border: 1px solid var(--border);
          border-left: 3px solid var(--cyan); padding: 1.75rem;
        }
        .summary-accent { color: var(--cyan); font-family: var(--font-mono); flex-shrink: 0; }
        .summary-block p {
          margin: 0; font-size: 0.97rem; color: var(--text-dim); line-height: 1.8; max-width: 90ch;
        }

        /* ── Timeline (Education) ── */
        .timeline { display: flex; flex-direction: column; gap: 0; position: relative; }
        .timeline::before {
          content: ""; position: absolute; left: 9px; top: 12px;
          bottom: 12px; width: 1px; background: var(--border);
        }
        .timeline-item {
          display: flex; gap: 1.5rem; align-items: flex-start;
          padding: 1.25rem 1.25rem 1.25rem 0; position: relative;
        }
        .timeline-dot {
          width: 18px; height: 18px; border-radius: 50%;
          border: 2px solid var(--cyan); background: var(--bg);
          flex-shrink: 0; margin-top: 0.15rem; position: relative; z-index: 1;
          box-shadow: 0 0 8px rgba(0,229,255,.3);
        }
        .timeline-content {
          flex: 1; background: var(--surface); border: 1px solid var(--border);
          padding: 1.25rem 1.5rem;
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%);
        }
        .timeline-content h3 {
          font-size: 1.05rem; font-weight: 600; color: var(--cyan);
          margin: 0 0 0.3rem;
        }
        .timeline-institution { font-size: 0.88rem; color: var(--text-dim); margin: 0 0 0.6rem; }
        .timeline-meta { display: flex; gap: 0.5rem; flex-wrap: wrap; }
        .timeline-badge {
          font-family: var(--font-mono); font-size: 0.72rem; padding: 0.2rem 0.6rem;
          border: 1px solid var(--border);
        }
        .timeline-badge.year { color: var(--cyan); border-color: rgba(0,229,255,.25); background: rgba(0,229,255,.06); }
        .timeline-badge.grade { color: var(--green); border-color: rgba(57,255,20,.25); background: rgba(57,255,20,.06); }

        /* ── Skills table ── */
        .skills-table { display: flex; flex-direction: column; gap: 0; border: 1px solid var(--border); }
        .skills-row {
          display: grid; grid-template-columns: 220px 1fr;
          border-bottom: 1px solid var(--border); align-items: start;
        }
        .skills-row:last-child { border-bottom: none; }
        .skills-category {
          font-family: var(--font-mono); font-size: 0.8rem; color: var(--cyan);
          padding: 1rem 1.25rem; background: rgba(0,229,255,.04);
          border-right: 1px solid var(--border); font-weight: 600;
          letter-spacing: 0.03em; line-height: 1.5;
        }
        .skills-items {
          display: flex; flex-wrap: wrap; gap: 0.4rem;
          padding: 0.75rem 1.25rem; margin: 0; align-content: center;
        }
        .skill-tag {
          font-size: 0.75rem; padding: 0.2rem 0.6rem;
          background: rgba(255,255,255,.04); border: 1px solid var(--border);
          color: var(--text-dim); font-family: var(--font-mono);
          transition: border-color .15s, color .15s;
        }
        .skill-tag:hover { border-color: var(--cyan); color: var(--text); }

        /* ── Resume projects ── */
        .resume-projects { display: flex; flex-direction: column; gap: 1.25rem; }
        .resume-project-card {
          position: relative; background: var(--surface); border: 1px solid var(--border);
          padding: 1.75rem; transition: border-color .2s;
          clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%);
        }
        .resume-project-card:hover { border-color: var(--cyan); }
        .rp-corner {
          position: absolute; top: 0; right: 0; width: 18px; height: 18px;
          background: var(--cyan); clip-path: polygon(0 0,100% 0,100% 100%); opacity: .45;
        }
        .resume-project-card h3 {
          font-size: 1.15rem; font-weight: 700; color: var(--cyan); margin: 0 0 0.3rem;
        }
        .rp-subtitle { font-size: 0.85rem; color: var(--text-dim); margin: 0 0 1rem; }
        .rp-highlights {
          list-style: none; margin: 0 0 1.25rem; padding: 0;
          display: flex; flex-direction: column; gap: 0.5rem;
        }
        .rp-highlights li {
          display: flex; align-items: flex-start; gap: 0.6rem;
          font-size: 0.9rem; color: var(--text-dim); line-height: 1.6;
        }
        .rp-arrow { color: var(--green); font-size: 0.65rem; flex-shrink: 0; margin-top: 0.3rem; }

        /* ── Certs ── */
        .cert-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1rem;
        }
        .cert-card {
          position: relative; background: var(--surface); border: 1px solid var(--border);
          padding: 1.25rem 1.25rem 1.25rem 1.75rem;
          transition: border-color .2s;
        }
        .cert-card.earned { border-left: 3px solid var(--green); }
        .cert-card.pursuing { border-left: 3px solid var(--yellow); }
        .cert-card:hover { border-color: var(--cyan); }
        .cert-status-dot {
          position: absolute; left: -1px; top: 1.25rem;
          width: 7px; height: 7px; border-radius: 50%;
        }
        .cert-card.earned .cert-status-dot { background: var(--green); box-shadow: 0 0 6px var(--green); }
        .cert-card.pursuing .cert-status-dot { background: var(--yellow); box-shadow: 0 0 6px var(--yellow); }
        .cert-name { display: block; font-size: 0.92rem; color: var(--text); margin-bottom: 0.4rem; }
        .cert-detail { font-size: 0.82rem; color: var(--text-dim); margin: 0; line-height: 1.5; }
        .cert-pursuing-badge {
          display: inline-block; margin-top: 0.5rem; font-family: var(--font-mono);
          font-size: 0.68rem; color: var(--yellow); border: 1px solid rgba(255,230,0,.3);
          padding: 0.1rem 0.45rem; background: rgba(255,230,0,.06); letter-spacing: 0.1em;
        }

        /* ── Platforms ── */
        .platforms-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1rem;
        }
        .platform-card {
          display: flex; flex-direction: column; gap: 0.35rem;
          padding: 1.25rem; background: var(--surface); border: 1px solid var(--border);
          text-decoration: none; color: var(--text); position: relative;
          transition: border-color .2s, box-shadow .2s;
        }
        .platform-card:hover, .platform-card:focus-visible {
          border-color: var(--accent, var(--cyan));
          box-shadow: 0 0 16px rgba(0,229,255,.1); outline: none;
        }
        .platform-badge {
          font-family: var(--font-mono); font-size: 0.7rem;
          letter-spacing: .15em; text-transform: uppercase;
        }
        .platform-card strong { font-size: 1rem; }
        .platform-arrow {
          position: absolute; right: 1rem; top: 50%;
          transform: translateY(-50%); color: var(--text-dim);
          transition: transform .2s, color .2s;
        }
        .platform-card:hover .platform-arrow {
          transform: translateY(-50%) translateX(4px); color: var(--text);
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
        .cta-inner p strong { color: var(--text); }
        .cta-inner nav { display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .resume-hero { padding: 4rem 1.5rem 2.5rem; }
          .content-section { padding: 3rem 1.5rem; }
          .skills-row { grid-template-columns: 1fr; }
          .skills-category { border-right: none; border-bottom: 1px solid var(--border); }
          .cta-section { padding: 4rem 1.5rem; }
        }

        @media (prefers-reduced-motion: reduce) {
          .blink-cursor { animation: none; }
        }
      `}</style>
    </>
  );
}
