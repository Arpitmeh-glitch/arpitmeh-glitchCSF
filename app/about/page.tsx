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
                href="https://linkedin.com/in/arpitmehrotra"
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
                href="https://linkedin.com/in/arpitmehrotra"
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

      {/* ─── Styles ─── */}
      <style jsx>{`
        /* ── Reset / Base ── */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        /* ── Root vars (cyberpunk palette) ── */
        .about-page {
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

        .accent { color: var(--cyan); }

        /* ── Scanlines ── */
        .scanlines {
          pointer-events: none;
          position: fixed;
          inset: 0;
          z-index: 100;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 229, 255, 0.015) 2px,
            rgba(0, 229, 255, 0.015) 4px
          );
        }

        /* ── Glitch ── */
        .glitch-text {
          position: relative;
          color: var(--cyan);
          display: inline-block;
        }
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          inset: 0;
          opacity: 0.7;
        }
        .glitch-text::before {
          color: var(--pink);
          animation: glitch-a 4s infinite;
          clip-path: polygon(0 30%, 100% 30%, 100% 50%, 0 50%);
        }
        .glitch-text::after {
          color: var(--green);
          animation: glitch-b 4s infinite 0.15s;
          clip-path: polygon(0 60%, 100% 60%, 100% 75%, 0 75%);
        }
        @keyframes glitch-a {
          0%, 90%, 100% { transform: none; opacity: 0; }
          92% { transform: translateX(-3px); opacity: 0.7; }
          94% { transform: translateX(3px); opacity: 0.7; }
          96% { transform: none; opacity: 0; }
        }
        @keyframes glitch-b {
          0%, 88%, 100% { transform: none; opacity: 0; }
          90% { transform: translateX(4px); opacity: 0.7; }
          93% { transform: translateX(-2px); opacity: 0.7; }
          95% { transform: none; opacity: 0; }
        }

        /* ── Blink cursor ── */
        .blink-cursor {
          color: var(--green);
          animation: blink 1s step-end infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }

        /* ── Hero ── */
        .hero-section {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          min-height: 100vh;
          padding: 6rem 5vw 4rem;
          overflow: hidden;
        }

        .hero-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0, 229, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 229, 255, 0.04) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }
        .hero-grid-bg::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 60% at 30% 50%, rgba(0,229,255,0.06) 0%, transparent 70%);
        }

        .hero-eyebrow {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--green);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 1.2rem;
        }

        .hero-content h1 {
          font-size: clamp(2.8rem, 6vw, 5rem);
          font-weight: 800;
          line-height: 1.05;
          margin: 0 0 1.5rem;
          color: var(--text);
          letter-spacing: -0.02em;
        }

        .hero-name-accent {
          color: var(--cyan);
          text-shadow: 0 0 30px rgba(0, 229, 255, 0.5);
        }

        .hero-intro {
          font-size: 1.1rem;
          color: var(--text-dim);
          max-width: 50ch;
          margin-bottom: 2rem;
          line-height: 1.8;
        }
        .hero-intro strong { color: var(--text); }

        .hero-links {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        /* ── Cyber buttons ── */
        .cyber-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.4rem;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--text);
          font-family: var(--font-mono);
          font-size: 0.85rem;
          text-decoration: none;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s, background 0.2s, box-shadow 0.2s;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
        }
        .cyber-btn:hover,
        .cyber-btn:focus-visible {
          border-color: var(--cyan);
          color: var(--cyan);
          box-shadow: 0 0 12px rgba(0, 229, 255, 0.25);
          outline: none;
        }
        .cyber-btn.primary {
          border-color: var(--cyan);
          background: rgba(0, 229, 255, 0.08);
          color: var(--cyan);
        }
        .cyber-btn.primary:hover,
        .cyber-btn.primary:focus-visible {
          background: rgba(0, 229, 255, 0.18);
          box-shadow: 0 0 20px rgba(0, 229, 255, 0.35);
        }
        .cyber-btn.large { padding: 0.8rem 2rem; font-size: 0.95rem; }

        /* ── Terminal ── */
        .hero-terminal {
          background: #060b12;
          border: 1px solid var(--border);
          border-radius: 2px;
          overflow: hidden;
          font-family: var(--font-mono);
          font-size: 0.9rem;
          box-shadow: 0 0 40px rgba(0, 229, 255, 0.08), inset 0 0 60px rgba(0,0,0,0.5);
          position: relative;
          z-index: 1;
        }
        .terminal-bar {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.6rem 1rem;
          background: #0d1220;
          border-bottom: 1px solid var(--border);
        }
        .terminal-bar span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--border);
        }
        .terminal-bar span:first-child { background: #ff5f57; }
        .terminal-bar span:nth-child(2) { background: #febc2e; }
        .terminal-bar span:nth-child(3) { background: #28c840; }
        .terminal-bar code { margin-left: auto; color: var(--text-dim); font-size: 0.8rem; }
        .terminal-body {
          padding: 1.5rem;
          line-height: 2;
          color: var(--text-dim);
        }
        .t-prompt { color: var(--green); margin-right: 0.5rem; }
        .t-out { color: var(--cyan); padding-left: 1rem; }

        /* ── Sections ── */
        .content-section {
          padding: 5rem 5vw;
        }
        .alt-bg { background: var(--bg-alt); }
        .container { max-width: 1100px; margin: 0 auto; }

        /* ── Section header ── */
        .section-header { margin-bottom: 3rem; }
        .section-label {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--cyan);
          letter-spacing: 0.2em;
          margin-bottom: 0.4rem;
          text-transform: uppercase;
        }
        .section-header h2 {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 700;
          color: var(--text);
          margin: 0 0 1rem;
          letter-spacing: -0.02em;
        }
        .section-line {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, var(--cyan), transparent);
        }

        /* ── Skills ── */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .skill-bar-item { display: flex; flex-direction: column; gap: 0.4rem; }
        .skill-bar-top { display: flex; justify-content: space-between; }
        .skill-name { font-size: 0.95rem; color: var(--text); font-weight: 500; }
        .skill-pct { font-family: var(--font-mono); font-size: 0.8rem; color: var(--cyan); }
        .skill-track {
          height: 4px;
          background: var(--surface);
          border-radius: 2px;
          overflow: hidden;
        }
        .skill-fill {
          height: 100%;
          width: var(--fill, 0%);
          background: linear-gradient(90deg, var(--cyan), var(--green));
          border-radius: 2px;
          animation: fill-in 1.2s ease-out forwards;
          transform-origin: left;
        }
        @keyframes fill-in { from { width: 0; } }

        /* ── Cards ── */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 1.5rem;
        }
        .cyber-card {
          position: relative;
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 1.5rem;
          transition: border-color 0.2s, box-shadow 0.2s;
          clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%);
        }
        .cyber-card:hover {
          border-color: var(--cyan);
          box-shadow: 0 0 20px rgba(0, 229, 255, 0.1);
        }
        .card-corner {
          position: absolute;
          top: 0;
          right: 0;
          width: 16px;
          height: 16px;
          background: var(--cyan);
          clip-path: polygon(0 0, 100% 0, 100% 100%);
          opacity: 0.6;
        }
        .cyber-card h3 {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--cyan);
          margin: 0 0 0.6rem;
        }
        .cyber-card p {
          font-size: 0.9rem;
          color: var(--text-dim);
          margin: 0;
          line-height: 1.65;
        }

        /* ── Tools ── */
        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 1rem;
        }
        .tool-chip {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 1rem 1.25rem;
          transition: border-color 0.2s;
        }
        .tool-chip:hover { border-color: var(--green); }
        .tool-icon { font-size: 1.5rem; flex-shrink: 0; }
        .tool-chip strong { display: block; font-size: 0.95rem; color: var(--text); }
        .tool-chip small { display: block; font-size: 0.78rem; color: var(--text-dim); margin-top: 0.15rem; }

        /* ── Goals ── */
        .goals-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 1rem; }
        .goal-item {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          padding: 1.25rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-left: 3px solid var(--cyan);
          font-size: 0.95rem;
          color: var(--text-dim);
          transition: color 0.2s, border-color 0.2s;
        }
        .goal-item:hover { color: var(--text); border-left-color: var(--green); }
        .goal-index {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--cyan);
          flex-shrink: 0;
          padding-top: 0.15rem;
        }

        /* ── Platforms ── */
        .platforms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1rem;
        }
        .platform-card {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          padding: 1.25rem;
          background: var(--surface);
          border: 1px solid var(--border);
          text-decoration: none;
          color: var(--text);
          transition: border-color 0.2s, box-shadow 0.2s;
          position: relative;
        }
        .platform-card:hover,
        .platform-card:focus-visible {
          border-color: var(--accent, var(--cyan));
          box-shadow: 0 0 16px rgba(0, 229, 255, 0.1);
          outline: none;
        }
        .platform-badge {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        .platform-card strong { font-size: 1rem; }
        .platform-arrow {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-dim);
          transition: transform 0.2s, color 0.2s;
        }
        .platform-card:hover .platform-arrow {
          transform: translateY(-50%) translateX(4px);
          color: var(--text);
        }

        /* ── CTA ── */
        .cta-section {
          padding: 6rem 5vw;
          border-top: 1px solid var(--border);
          background: radial-gradient(ellipse 70% 70% at 50% 100%, rgba(0,229,255,0.04) 0%, transparent 70%);
        }
        .cta-inner {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        .cta-inner h2 {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          color: var(--text);
          margin: 0;
        }
        .cta-inner p {
          color: var(--text-dim);
          max-width: 55ch;
          font-size: 1rem;
          margin: 0;
        }
        .cta-inner nav { display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .hero-section {
            grid-template-columns: 1fr;
            padding: 5rem 1.5rem 3rem;
            min-height: auto;
            gap: 2rem;
          }
          .hero-terminal { order: -1; }
          .content-section { padding: 3.5rem 1.5rem; }
          .cta-section { padding: 4rem 1.5rem; }
        }

        @media (prefers-reduced-motion: reduce) {
          .glitch-text::before,
          .glitch-text::after,
          .blink-cursor { animation: none; }
          .skill-fill { animation: none; }
        }
      `}</style>
    </>
  );
}
