import "./about.css";
import type { Metadata } from "next";

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "About Arpit Mehrotra | Cybersecurity Portfolio",
  description:
    "Learn about Arpit Mehrotra — a cybersecurity enthusiast and CSE student at UPES skilled in penetration testing, Linux, Python automation, Nmap, Burp Suite, and web security.",
  keywords: [
    "Arpit Mehrotra",
    "Cybersecurity",
    "Penetration Testing",
    "Linux",
    "Python",
    "Web Security",
    "Nmap",
    "Burp Suite",
    "Network Reconnaissance",
    "UPES",
    "CSE",
    "Ethical Hacking",
  ],
  openGraph: {
    title: "About Arpit Mehrotra | Cybersecurity Portfolio",
    description:
      "Arpit Mehrotra — cybersecurity enthusiast, CSE student at UPES, focused on penetration testing, Linux, Python automation, and web security.",
    url: "https://arpitmehrotra.vercel.app/about",
    siteName: "Arpit Mehrotra",
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Arpit Mehrotra | Cybersecurity Portfolio",
    description:
      "Cybersecurity enthusiast and CSE student at UPES focused on penetration testing, Linux, Python automation, and web security.",
  },
  alternates: {
    canonical: "https://arpitmehrotra.vercel.app/about",
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const skills = [
  { label: "Penetration Testing", level: 70 },
  { label: "Linux Administration", level: 80 },
  { label: "Python Automation", level: 75 },
  { label: "Web Security", level: 72 },
  { label: "Network Reconnaissance", level: 68 },
  { label: "Bash Scripting", level: 65 },
];

const tools = [
  { name: "Nmap", icon: "🔍", desc: "Network discovery & security auditing" },
  { name: "Burp Suite", icon: "🕷️", desc: "Web vulnerability scanning & testing" },
  { name: "Wireshark", icon: "📡", desc: "Network protocol analysis" },
  { name: "Metasploit", icon: "💀", desc: "Exploitation framework" },
  { name: "Kali Linux", icon: "🐉", desc: "Penetration testing OS" },
  { name: "Python", icon: "🐍", desc: "Automation & exploit scripting" },
  { name: "Git / GitHub", icon: "🔧", desc: "Version control & open-source" },
  { name: "VS Code", icon: "⚡", desc: "Primary development environment" },
];

const interests = [
  { title: "Penetration Testing", body: "Simulating real-world cyberattacks to identify and fix vulnerabilities before malicious actors can exploit them." },
  { title: "Linux & Open Source", body: "Deep-diving into Linux internals, shell scripting, and contributing to the open-source security community." },
  { title: "Web Security", body: "Studying OWASP Top 10 vulnerabilities, injection attacks, broken authentication, and modern web exploit chains." },
  { title: "Network Reconnaissance", body: "Mapping networks with tools like Nmap to understand attack surfaces and expose misconfigurations." },
];

const goals = [
  "Earn industry certifications: CEH, CompTIA Security+, and eventually OSCP.",
  "Build open-source Python tools for automated network reconnaissance.",
  "Contribute to bug bounty programs on HackerOne and Bugcrowd.",
  "Master full-stack web security from client-side XSS to server-side RCE.",
  "Become a red-team professional specialising in adversarial simulation.",
];

const platforms = [
  { name: "TryHackMe", url: "https://tryhackme.com", badge: "Active", color: "#c11111" },
  { name: "Hack The Box", url: "https://hackthebox.com", badge: "Learning", color: "#9fef00" },
  { name: "PortSwigger Web Academy", url: "https://portswigger.net/web-security", badge: "Active", color: "#ff6633" },
  { name: "PicoCTF", url: "https://picoctf.org", badge: "CTF", color: "#0080ff" },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function GlitchText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={`glitch-text ${className}`} data-text={text} aria-label={text}>
      {text}
    </span>
  );
}

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="section-header">
      <span className="section-label" aria-hidden="true">{label}</span>
      <h2>{title}</h2>
      <div className="section-line" aria-hidden="true" />
    </div>
  );
}

function SkillBar({ label, level }: { label: string; level: number }) {
  return (
    <div className="skill-bar-item">
      <div className="skill-bar-top">
        <span className="skill-name">{label}</span>
        <span className="skill-pct">{level}%</span>
      </div>
      <div className="skill-track" role="progressbar" aria-valuenow={level} aria-valuemin={0} aria-valuemax={100} aria-label={`${label} proficiency: ${level}%`}>
        <div className="skill-fill" style={{ "--fill": `${level}%` } as React.CSSProperties} />
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Arpit Mehrotra",
            url: "https://arpitmehrotra.vercel.app",
            image: "https://arpitmehrotra.vercel.app/arpit-mehrotra.jpg",
            sameAs: [
              "https://github.com/Arpitmeh-glitch",
              "https://linkedin.com/in/arpitmehrotra-dev",
            ],
            jobTitle: "Cybersecurity Enthusiast & CSE Student",
            alumniOf: { "@type": "CollegeOrUniversity", name: "UPES" },
            knowsAbout: [
              "Cybersecurity",
              "Penetration Testing",
              "Linux",
              "Python",
              "Web Security",
              "Network Reconnaissance",
              "Nmap",
              "Burp Suite",
            ],
          }),
        }}
      />

      <div className="about-page">
        {/* ── Scanline overlay ── */}
        <div className="scanlines" aria-hidden="true" />

        {/* ════════════════════ HERO ════════════════════ */}
        <section className="hero-section" aria-labelledby="hero-heading">
          <div className="hero-grid-bg" aria-hidden="true" />
          <div className="hero-content">
            <div className="hero-eyebrow" aria-hidden="true">
              <span className="blink-cursor">█</span> PROFILE.EXE LOADED
            </div>
            <h1 id="hero-heading">
              <GlitchText text="About Arpit" />
              <br />
              <span className="hero-name-accent">Mehrotra</span>
            </h1>
            <p className="hero-intro">
              Hi, I&apos;m <strong>Arpit Mehrotra</strong>, a{" "}
              <span className="accent">cybersecurity enthusiast</span> and first-year CSE
              student at <span className="accent">UPES</span> passionate about{" "}
              <strong>penetration testing</strong>, <strong>Linux</strong>,{" "}
              <strong>Python automation</strong>, and <strong>web security</strong>.
            </p>
            <nav className="hero-links" aria-label="Profile links">
              <a href="/" className="cyber-btn primary" aria-label="Go to portfolio homepage">
                <span aria-hidden="true">⌂</span> Home
              </a>
              <a
                href="https://github.com/Arpitmeh-glitch"
                className="cyber-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile (opens in new tab)"
              >
                <span aria-hidden="true">⌬</span> GitHub
              </a>
              <a
                href="https://linkedin.com/in/arpitmehrotra-dev"
                className="cyber-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile (opens in new tab)"
              >
                <span aria-hidden="true">◈</span> LinkedIn
              </a>
            </nav>
          </div>
          <div className="hero-terminal" aria-hidden="true">
            <div className="terminal-bar">
              <span />
              <span />
              <span />
              <code>arpit@upes:~$</code>
            </div>
            <div className="terminal-body">
              <p><span className="t-prompt">$</span> whoami</p>
              <p className="t-out">arpit_mehrotra</p>
              <p><span className="t-prompt">$</span> cat role.txt</p>
              <p className="t-out">CSE Student | Security Researcher</p>
              <p><span className="t-prompt">$</span> cat focus.txt</p>
              <p className="t-out">Penetration Testing &amp; Web Security</p>
              <p><span className="t-prompt">$</span> <span className="blink-cursor">█</span></p>
            </div>
          </div>
        </section>

        {/* ════════════════════ SKILLS ════════════════════ */}
        <section className="content-section" aria-labelledby="skills-heading">
          <div className="container">
            <SectionHeader label="// 01 —" title="Skills" />
            <div className="skills-grid" id="skills-heading" aria-label="Skill proficiency levels">
              {skills.map((s) => (
                <SkillBar key={s.label} label={s.label} level={s.level} />
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════ INTERESTS ════════════════════ */}
        <section className="content-section alt-bg" aria-labelledby="interests-heading">
          <div className="container">
            <SectionHeader label="// 02 —" title="Interests" />
            <div className="cards-grid" role="list" id="interests-heading">
              {interests.map((item) => (
                <article key={item.title} className="cyber-card" role="listitem">
                  <div className="card-corner" aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════ TOOLS ════════════════════ */}
        <section className="content-section" aria-labelledby="tools-heading">
          <div className="container">
            <SectionHeader label="// 03 —" title="Tools & Technologies" />
            <h2 id="tools-heading" className="sr-only">Tools and Technologies</h2>
            <div className="tools-grid">
              {tools.map((t) => (
                <div key={t.name} className="tool-chip">
                  <span className="tool-icon" aria-hidden="true">{t.icon}</span>
                  <div>
                    <strong>{t.name}</strong>
                    <small>{t.desc}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════ GOALS ════════════════════ */}
        <section className="content-section alt-bg" aria-labelledby="goals-heading">
          <div className="container">
            <SectionHeader label="// 04 —" title="Goals" />
            <ul className="goals-list" id="goals-heading" aria-label="Career goals">
              {goals.map((g, i) => (
                <li key={i} className="goal-item">
                  <span className="goal-index" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ════════════════════ PLATFORMS ════════════════════ */}
        <section className="content-section" aria-labelledby="platforms-heading">
          <div className="container">
            <SectionHeader label="// 05 —" title="Platforms & Profiles" />
            <h2 id="platforms-heading" className="sr-only">Platforms and Profiles</h2>
            <div className="platforms-grid">
              {platforms.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  className="platform-card"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.name} — ${p.badge} (opens in new tab)`}
                  style={{ "--accent": p.color } as React.CSSProperties}
                >
                  <span className="platform-badge" style={{ color: p.color }}>
                    {p.badge}
                  </span>
                  <strong>{p.name}</strong>
                  <span className="platform-arrow" aria-hidden="true">→</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════ CTA ════════════════════ */}
        <section className="cta-section" aria-labelledby="cta-heading">
          <div className="container cta-inner">
            <h2 id="cta-heading">Let&apos;s Connect</h2>
            <p>
              Interested in cybersecurity collaboration, CTF teams, or just geeking out about{" "}
              <strong>network reconnaissance</strong> and <strong>Burp Suite</strong>?
              Let&apos;s talk.
            </p>
            <nav aria-label="Contact links">
              <a
                href="https://linkedin.com/in/arpitmehrotra-dev"
                className="cyber-btn primary large"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message on LinkedIn (opens in new tab)"
              >
                Message on LinkedIn
              </a>
              <a href="/" className="cyber-btn large" aria-label="View full portfolio">
                View Portfolio
              </a>
            </nav>
          </div>
        </section>
      </div>
    </>
  );
}
