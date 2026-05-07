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

    </>
  );
}
