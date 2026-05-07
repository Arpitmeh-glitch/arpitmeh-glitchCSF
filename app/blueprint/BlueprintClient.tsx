"use client";

import Image from "next/image";
import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useMemo,
} from "react";
import { PANEL_DATA } from "./data";
import { motion, AnimatePresence, useAnimation, useSpring } from "framer-motion";
import GridBackground from "@/components/ui/GridBackground";


// ─────────────────────────────────────────────────────────────────────────────
// REGION_GROUPS
// Each entry has:
//   id          — unique key
//   label       — display name
//   code        — system code
//   panelId     — which PANEL_DATA entry to show on click
//   closeupImg  — image src for close-up panel
//   zoomTo      — { cx (0–100%), cy (0–100%), scale } — zoom centre + cursor magnet target
//   dots        — array of { cx, cy } in SVG-space; each renders pulsing rings
//   polygons    — array of SVG point strings; ALL trigger the same region
// ─────────────────────────────────────────────────────────────────────────────
const REGION_GROUPS = [
  {
    id: "nose",
    label: "NOSE CONE",
    code: "SYS-001",
    panelId: "about",
    closeupImg: "/blueprints/nose.webp",
    zoomTo: { cx: 50, cy: 14, scale: 2.4 },
    dots: [
      { cx: 672, cy: 42 },
      { cx: 658, cy: 92 },
      { cx: 686, cy: 92 },
    ],
    polygons: [
      "672,20 655,58 672,100 689,58",
      "655,58 640,112 672,148 704,112 689,58",
      "640,112 626,160 672,192 718,160 704,112",
    ],
  },
  {
    id: "cockpit",
    label: "COCKPIT",
    code: "SYS-002",
    panelId: "cockpit",
    closeupImg: "/blueprints/cockpit.webp",
    zoomTo: { cx: 50, cy: 37, scale: 2.2 },
    dots: [
      { cx: 672, cy: 228 },
      { cx: 644, cy: 318 },
      { cx: 700, cy: 318 },
    ],
    polygons: [
      "638,192 706,192 720,258 706,296 638,296 624,258",
      "624,296 720,296 732,356 720,392 624,392 612,356",
    ],
  },
  {
    id: "fuselage",
    label: "PAYLOAD BAY",
    code: "SYS-003",
    panelId: "projects",
    closeupImg: "/blueprints/payload.webp",
    zoomTo: { cx: 50, cy: 59, scale: 2.0 },
    dots: [
      { cx: 672, cy: 438 },
      { cx: 628, cy: 482 },
      { cx: 716, cy: 482 },
    ],
    polygons: [
      "622,392 722,392 732,450 612,450",
      "612,450 732,450 740,538 604,538",
    ],
  },
  {
    id: "wing_left",
    label: "PORT WING",
    code: "SYS-004L",
    panelId: "achievements",
    closeupImg: "/blueprints/leftwing.webp",
    zoomTo: { cx: 22, cy: 57, scale: 2.0 },
    dots: [
      { cx: 340, cy: 462 },
      { cx: 210, cy: 492 },
      { cx: 460, cy: 442 },
    ],
    polygons: [
      "562,400 612,400 562,450 295,493 194,488",
      "194,488 295,493 562,450 546,538 136,522 106,484",
      "106,484 136,522 205,532 145,544 93,514",
      "546,538 398,538 278,545 198,540 145,530 106,512 106,472 145,478 198,490 546,450",
    ],
  },
  {
    id: "wing_right",
    label: "STARBOARD WING",
    code: "SYS-004R",
    panelId: "achievements",
    closeupImg: "/blueprints/rightwing.webp",
    zoomTo: { cx: 78, cy: 57, scale: 2.0 },
    dots: [
      { cx: 1004, cy: 462 },
      { cx: 1134, cy: 492 },
      { cx: 884, cy: 442 },
    ],
    polygons: [
      "732,400 782,400 782,450 1049,493 1150,488",
      "1150,488 1049,493 782,450 798,538 1208,522 1238,484",
      "1238,484 1208,522 1139,532 1199,544 1251,514",
      "798,538 946,538 1066,545 1150,540 1199,530 1238,512 1238,472 1199,478 1150,490 798,450",
    ],
  },
  {
    id: "weapon_left",
    label: "PORT PYLONS",
    code: "SYS-004L-W",
    panelId: "tools",
    closeupImg: "/blueprints/payload.webp",
    zoomTo: { cx: 30, cy: 62, scale: 2.1 },
    dots: [
      { cx: 362, cy: 511 },
      { cx: 240, cy: 517 },
    ],
    polygons: [
      "302,503 420,492 438,522 399,535 283,527",
      "194,500 302,498 320,523 281,537 178,527",
    ],
  },
  {
    id: "weapon_right",
    label: "STARBOARD PYLONS",
    code: "SYS-004R-W",
    panelId: "tools",
    closeupImg: "/blueprints/payload.webp",
    zoomTo: { cx: 70, cy: 62, scale: 2.1 },
    dots: [
      { cx: 982, cy: 511 },
      { cx: 1104, cy: 517 },
    ],
    polygons: [
      "906,492 1024,503 1061,527 1024,535 906,522",
      "1044,498 1150,500 1169,527 1122,537 1044,522",
    ],
  },
  {
    id: "engines",
    label: "ENGINE NACELLES",
    code: "SYS-005",
    panelId: "contact",
    closeupImg: "/blueprints/engines.webp",
    zoomTo: { cx: 50, cy: 84, scale: 2.5 },
    dots: [
      { cx: 630, cy: 582 },
      { cx: 714, cy: 582 },
      { cx: 672, cy: 650 },
    ],
    polygons: [
      "606,538 672,538 672,650 606,650",
      "672,538 738,538 738,650 672,650",
      "606,650 738,650 754,710 590,710",
    ],
  },
  {
    id: "tail",
    label: "TAIL / STABILISERS",
    code: "SYS-006",
    panelId: "tools",
    closeupImg: "/blueprints/tail.webp",
    zoomTo: { cx: 50, cy: 95, scale: 2.6 },
    dots: [
      { cx: 672, cy: 728 },
      { cx: 506, cy: 720 },
      { cx: 838, cy: 720 },
    ],
    polygons: [
      "590,710 754,710 770,750 574,750",
      "434,668 590,710 574,750 454,750 416,712",
      "754,710 910,668 948,712 908,750 770,750",
      "574,750 770,750 754,762 672,766 590,762",
    ],
  },
] as const;

type RegionGroup = (typeof REGION_GROUPS)[number];

// ─────────────────────────────────────────────────────────────────────────────
// RIGHT PANEL CONTENT
// ─────────────────────────────────────────────────────────────────────────────
const RIGHT_PANEL_CONTENT: Record<string, { title: string; content: React.ReactNode }> = {
  default: {
    title: "SYSTEM STATUS",
    content: (
      <div className="space-y-2 font-mono text-[0.6rem] text-[rgba(232,244,248,0.4)] tracking-widest">
        <p className="text-[#00f0ff] opacity-60">// HOVER A SYSTEM</p>
        <p>AWAITING INPUT...</p>
        <div className="mt-4 space-y-1.5">
          {["RADAR", "FLIGHT CTL", "WEAPONS", "ENGINES", "AVIONICS"].map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] opacity-40"
                    style={{ animation: `pulse 2s ${i * 0.3}s infinite` }} />
              <span>{s}</span>
              <span className="ml-auto text-[#00f0ff] opacity-50">STANDBY</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  nose: {
    title: "RADAR SYSTEM",
    content: (
      <div className="space-y-2 font-mono text-[0.6rem] text-[rgba(232,244,248,0.55)]">
        <p className="text-[#00f0ff]">ZHUK-MSE RADAR</p>
        <div className="space-y-1.5 mt-2">
          {[["TYPE","PESA / N011M"],["RANGE","400 km (track)"],["TARGETS","15 simultaneous"],
            ["MODES","TWS · STT · SAR"],["STATUS","◈ ACTIVE SCAN"]].map(([k, v]) => (
            <div key={k} className="flex gap-2">
              <span className="text-[rgba(0,240,255,0.45)] w-16 shrink-0">{k}</span>
              <span>{v}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  cockpit: {
    title: "SKILL MATRIX",
    content: (
      <div className="space-y-1.5 font-mono text-[0.6rem] text-[rgba(232,244,248,0.7)]">
        {[{label:"Penetration Testing",val:88},{label:"Python / FastAPI",val:90},
          {label:"Next.js / React",val:85},{label:"Network Security",val:82},{label:"Machine Learning",val:75}].map((s) => (
          <div key={s.label}>
            <div className="flex justify-between mb-0.5">
              <span className="text-[0.55rem]">{s.label}</span>
              <span className="text-[#00f0ff]">{s.val}%</span>
            </div>
            <div className="h-px bg-[rgba(0,240,255,0.1)]">
              <motion.div className="h-full" initial={{width:0}} animate={{width:`${s.val}%`}} transition={{duration:0.7,ease:"easeOut"}}
                style={{background:"linear-gradient(90deg,#00b8c4,#00f0ff)",boxShadow:"0 0 4px rgba(0,240,255,0.4)"}} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  fuselage: {
    title: "PAYLOAD SYSTEMS",
    content: (
      <div className="space-y-2 font-mono text-[0.6rem] text-[rgba(232,244,248,0.55)]">
        <p className="text-[#00f0ff]">HARDPOINT CONFIG</p>
        {[{id:"PRJ-001",name:"Web Recon CLI",desc:"HTTP analysis, OSINT toolkit"},
          {id:"PRJ-002",name:"PhishGuard AI",desc:"96.8% accuracy ML detector"}].map((p) => (
          <div key={p.id} className="border-l border-[rgba(0,240,255,0.3)] pl-2 mt-2">
            <div className="text-[#00f0ff] text-[0.5rem] tracking-widest">{p.id}</div>
            <div className="text-white text-[0.6rem]">{p.name}</div>
            <div className="opacity-50 text-[0.55rem]">{p.desc}</div>
          </div>
        ))}
      </div>
    ),
  },
  wing_left: {
    title: "PORT WING / ACHIEVEMENTS",
    content: (
      <div className="space-y-1.5 font-mono text-[0.6rem] text-[rgba(232,244,248,0.55)]">
        <p className="text-[#00f0ff]">PORT WING SYSTEMS</p>
        {["CEH — Certified Ethical Hacker","Top 10% — TryHackMe 2025",
          "Bug Bounty — HackerOne ack.","Contributor — OWASP community"].map((a) => (
          <div key={a} className="flex gap-1.5 items-start">
            <span className="text-[#00f0ff] shrink-0">▸</span><span>{a}</span>
          </div>
        ))}
      </div>
    ),
  },
  wing_right: {
    title: "STARBOARD WING / ACHIEVEMENTS",
    content: (
      <div className="space-y-1.5 font-mono text-[0.6rem] text-[rgba(232,244,248,0.55)]">
        <p className="text-[#00f0ff]">STARBOARD WING SYSTEMS</p>
        {["CEH — Certified Ethical Hacker","Top 10% — TryHackMe 2025",
          "Bug Bounty — HackerOne ack.","Contributor — OWASP community"].map((a) => (
          <div key={a} className="flex gap-1.5 items-start">
            <span className="text-[#00f0ff] shrink-0">▸</span><span>{a}</span>
          </div>
        ))}
      </div>
    ),
  },
  weapon_left: {
    title: "PORT WEAPON SYSTEMS",
    content: (
      <div className="space-y-1.5 font-mono text-[0.6rem] text-[rgba(232,244,248,0.55)]">
        <p className="text-[#00f0ff]">PORT PYLONS ACTIVE</p>
        {[["R-77","BVR AAM · Active radar"],["R-73","WVR AAM · IR seeker"],
          ["KH-31","Anti-radiation · Mach 3.5"],["FAB-500","Gravity bomb · 500 kg"]].map(([n, d]) => (
          <div key={n} className="border-l border-[rgba(0,240,255,0.3)] pl-2">
            <span className="text-[#00f0ff]">{n}</span> <span className="opacity-60">— {d}</span>
          </div>
        ))}
      </div>
    ),
  },
  weapon_right: {
    title: "STARBOARD WEAPON SYSTEMS",
    content: (
      <div className="space-y-1.5 font-mono text-[0.6rem] text-[rgba(232,244,248,0.55)]">
        <p className="text-[#00f0ff]">STARBOARD PYLONS ACTIVE</p>
        {[["R-77","BVR AAM · Active radar"],["R-73","WVR AAM · IR seeker"],
          ["KH-31","Anti-radiation · Mach 3.5"],["FAB-500","Gravity bomb · 500 kg"]].map(([n, d]) => (
          <div key={n} className="border-l border-[rgba(0,240,255,0.3)] pl-2">
            <span className="text-[#00f0ff]">{n}</span> <span className="opacity-60">— {d}</span>
          </div>
        ))}
      </div>
    ),
  },
  engines: {
    title: "ENGINE SYSTEMS",
    content: (
      <div className="space-y-2 font-mono text-[0.6rem] text-[rgba(232,244,248,0.55)]">
        <p className="text-[#00f0ff]">AL-31FP × 2</p>
        {[["THRUST","122.6 kN (AB)"],["TYPE","Turbofan w/ TVC"],["TBO","1,000 hrs"],
          ["TEMP","1,665 K (TIT)"],["RPM","◈ 14,200 RPM"]].map(([k, v]) => (
          <div key={k} className="flex gap-2">
            <span className="text-[rgba(0,240,255,0.45)] w-14 shrink-0">{k}</span><span>{v}</span>
          </div>
        ))}
        <div className="flex items-center gap-2 mt-2 pt-2 border-t border-[rgba(0,240,255,0.1)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" style={{animation:"pulse 1s infinite"}} />
          <span className="text-[#00f0ff]">ONLINE</span>
        </div>
      </div>
    ),
  },
  tail: {
    title: "TOOLKIT",
    content: (
      <div className="flex flex-wrap gap-1">
        {["nmap","Burp Suite","Metasploit","hashcat","Wireshark","SQLmap","Gobuster","Hydra","Nikto","John"].map((t) => (
          <span key={t} className="bg-[rgba(0,240,255,0.06)] border border-[rgba(0,240,255,0.18)] text-[#00f0ff] font-mono text-[0.5rem] px-1.5 py-0.5 tracking-wide">{t}</span>
        ))}
      </div>
    ),
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// PANEL DATA (modal content)
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// POLYGON HOVER OVERLAY
// Renders the exact polygon shape(s) of the hovered region with a glowing
// cyan stroke + subtle fill. An SVG <filter> produces the bloom/glow effect.
// This replaces the old radial-gradient approach — it follows the actual shape.
// ─────────────────────────────────────────────────────────────────────────────
function PolygonHoverOverlay({ region }: { region: RegionGroup }) {
  const filterId = `glow-${region.id}`;
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1344 768"
      preserveAspectRatio="xMidYMid meet"
      style={{ overflow: "visible" }}
    >
      <defs>
        <filter id={filterId} x="-60%" y="-60%" width="220%" height="220%">
          {/* Wide outer bloom */}
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur-wide" />
          <feColorMatrix in="blur-wide" type="matrix"
            values="0 0 0 0 0  0 0.941 0 0 1  0 0 0 0 1  0 0 0 0.55 0"
            result="bloom-wide" />
          {/* Tight inner glow */}
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur-tight" />
          <feColorMatrix in="blur-tight" type="matrix"
            values="0 0 0 0 0  0 0.941 0 0 1  0 0 0 0 1  0 0 0 1 0"
            result="bloom-tight" />
          <feMerge>
            <feMergeNode in="bloom-wide" />
            <feMergeNode in="bloom-tight" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Render every polygon of this region with visible fill + stroke */}
      <g filter={`url(#${filterId})`}>
        {region.polygons.map((pts, i) => (
          <polygon
            key={i}
            points={pts}
            fill="rgba(0,240,255,0.06)"
            stroke="#00f0ff"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        ))}
      </g>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CURSOR MAGNET HOOK
// Tracks raw mouse in screen-px. When a region is hovered, applies a
// proportional pull toward the region's zoomTo centre (% → px via container rect).
// Returns spring-animated x/y for the custom cursor, plus raw refs for tooltip.
// ─────────────────────────────────────────────────────────────────────────────
function useCursorMagnet(
  containerRef: React.RefObject<HTMLDivElement>,
  hoveredRegion: RegionGroup | undefined,
  zoomed: boolean
) {
  const PULL_STRENGTH = 0.20; // 0 = no pull, 1 = snap to centre

  const springCfg = { stiffness: 280, damping: 30 };
  const springX = useSpring(0, springCfg);
  const springY = useSpring(0, springCfg);

  // Store raw pos for tooltip (unaffected by magnet)
  const rawX = useRef(0);
  const rawY = useRef(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rawX.current = e.clientX;
      rawY.current = e.clientY;

      if (!hoveredRegion || zoomed) {
        springX.set(e.clientX);
        springY.set(e.clientY);
        return;
      }

      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();

      // Region centre in screen-px
      const rcx = rect.left + (hoveredRegion.zoomTo.cx / 100) * rect.width;
      const rcy = rect.top  + (hoveredRegion.zoomTo.cy / 100) * rect.height;

      // Distance-scaled pull: closer → weaker pull (avoid hard snap)
      const dx = rcx - e.clientX;
      const dy = rcy - e.clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      // Taper off pull at distances > 300px
      const pull = PULL_STRENGTH * Math.max(0, 1 - dist / 300);

      springX.set(e.clientX + dx * pull);
      springY.set(e.clientY + dy * pull);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [hoveredRegion, zoomed, springX, springY, containerRef]);

  return { x: springX, y: springY, rawX, rawY };
}

// ─────────────────────────────────────────────────────────────────────────────
// CUSTOM CURSOR
// A military-HUD crosshair that replaces the system cursor inside the viewport.
// Grows and shows crosshair arms when a region is active.
// ─────────────────────────────────────────────────────────────────────────────
function CustomCursor({
  x, y, visible, active,
}: {
  x: ReturnType<typeof useSpring>;
  y: ReturnType<typeof useSpring>;
  visible: boolean;
  active: boolean;
}) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[100]"
      style={{ translateX: x, translateY: y }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ opacity: { duration: 0.12 } }}
    >
      {/* Outer ring */}
      <motion.div
        className="absolute rounded-full border"
        animate={{
          width:       active ? 34 : 20,
          height:      active ? 34 : 20,
          x:           active ? -17 : -10,
          y:           active ? -17 : -10,
          borderColor: active ? "rgba(0,240,255,0.95)" : "rgba(0,240,255,0.45)",
          boxShadow:   active
            ? "0 0 14px rgba(0,240,255,0.7), inset 0 0 6px rgba(0,240,255,0.2)"
            : "0 0 4px rgba(0,240,255,0.2)",
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      />
      {/* Centre dot */}
      <div
        className="absolute rounded-full"
        style={{
          width: 4, height: 4, left: -2, top: -2,
          background: "#00f0ff",
          boxShadow: "0 0 8px rgba(0,240,255,1)",
        }}
      />
      {/* Crosshair arms — only when active */}
      <AnimatePresence>
        {active && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
          >
            {/* top */}
            <div className="absolute bg-[#00f0ff]" style={{ width:1, height:10, left:-0.5, top:-22, opacity:0.7 }} />
            {/* bottom */}
            <div className="absolute bg-[#00f0ff]" style={{ width:1, height:10, left:-0.5, top:12,  opacity:0.7 }} />
            {/* left */}
            <div className="absolute bg-[#00f0ff]" style={{ width:10, height:1, top:-0.5, left:-22, opacity:0.7 }} />
            {/* right */}
            <div className="absolute bg-[#00f0ff]" style={{ width:10, height:1, top:-0.5, left:12,  opacity:0.7 }} />
          </motion.g>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TOOLTIP
// ─────────────────────────────────────────────────────────────────────────────
function Tooltip({ label, code, x, y }: { label: string; code: string; x: number; y: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 4 }}
      transition={{ duration: 0.1 }}
      className="pointer-events-none fixed z-50 font-mono"
      style={{ left: x + 18, top: y - 14 }}
    >
      <div
        className="bg-[rgba(2,4,8,0.96)] border border-[rgba(0,240,255,0.42)] px-3 py-1.5 text-[0.58rem] backdrop-blur-md"
        style={{ boxShadow: "0 0 20px rgba(0,240,255,0.15), 0 0 2px rgba(0,240,255,0.5)" }}
      >
        <div className="text-[#00f0ff] tracking-[0.2em]">{label}</div>
        <div className="text-[rgba(232,244,248,0.35)] tracking-widest">{code}</div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// LEFT PANEL (static aircraft data)
// ─────────────────────────────────────────────────────────────────────────────
function LeftPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-44 pointer-events-none"
      style={{
        background: "rgba(2,6,14,0.82)",
        border: "1px solid rgba(0,240,255,0.18)",
        boxShadow: "0 0 30px rgba(0,240,255,0.04), inset 0 0 20px rgba(0,240,255,0.02)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="px-3 py-2 border-b border-[rgba(0,240,255,0.12)] flex items-center gap-2">
        <span className="w-1 h-1 rounded-full bg-[#00f0ff] animate-pulse" />
        <span className="font-mono text-[0.5rem] text-[#00f0ff] tracking-[0.3em]">AIRCRAFT DATA</span>
      </div>
      <div className="px-3 py-3 space-y-2.5 font-mono text-[0.58rem]">
        {[["DESIGNATION","SU-30MKI"],["ROLE","Multirole Air Superiority"],
          ["ENGINES","AL-31FP × 2"],["MAX SPEED","Mach 2.0"],["RANGE","~3,000 km"],
          ["CEILING","17,300 m"],["HARDPOINTS","12"],["CREW","2 (tandem)"]].map(([k, v]) => (
          <div key={k}>
            <div className="text-[rgba(0,240,255,0.4)] text-[0.45rem] tracking-[0.2em]">{k}</div>
            <div className="text-[rgba(232,244,248,0.75)]">{v}</div>
          </div>
        ))}
      </div>
      {(["top-0 left-0 border-t border-l","top-0 right-0 border-t border-r",
         "bottom-0 left-0 border-b border-l","bottom-0 right-0 border-b border-r"] as const).map((cls, i) => (
        <div key={i} className={`absolute w-2.5 h-2.5 border-[rgba(0,240,255,0.5)] ${cls}`} />
      ))}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// RIGHT PANEL (dynamic, updates on hover)
// ─────────────────────────────────────────────────────────────────────────────
function RightPanel({ regionId }: { regionId: string | null }) {
  const key = regionId && RIGHT_PANEL_CONTENT[regionId] ? regionId : "default";
  const content = RIGHT_PANEL_CONTENT[key];

  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-44 pointer-events-none"
      style={{
        background: "rgba(2,6,14,0.82)",
        border: "1px solid rgba(0,240,255,0.18)",
        boxShadow: "0 0 30px rgba(0,240,255,0.04), inset 0 0 20px rgba(0,240,255,0.02)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="px-3 py-2 border-b border-[rgba(0,240,255,0.12)] flex items-center gap-2">
        <span className="w-1 h-1 rounded-full bg-[#00f0ff]"
              style={{ animation: regionId ? "pulse 0.8s infinite" : "pulse 2s infinite" }} />
        <span className="font-mono text-[0.5rem] text-[#00f0ff] tracking-[0.3em]">SYSTEM STATUS</span>
      </div>
      <div className="px-3 py-3 min-h-[160px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16 }}
          >
            <div className="font-mono text-[0.5rem] text-[rgba(0,240,255,0.45)] tracking-[0.25em] mb-2">
              {content.title}
            </div>
            {content.content}
          </motion.div>
        </AnimatePresence>
      </div>
      {(["top-0 left-0 border-t border-l","top-0 right-0 border-t border-r",
         "bottom-0 left-0 border-b border-l","bottom-0 right-0 border-b border-r"] as const).map((cls, i) => (
        <div key={i} className={`absolute w-2.5 h-2.5 border-[rgba(0,240,255,0.5)] ${cls}`} />
      ))}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CLOSE-UP PANEL (modal)
// ─────────────────────────────────────────────────────────────────────────────
function CloseupPanel({ region, onClose }: { region: RegionGroup; onClose: () => void }) {
  const panelData = PANEL_DATA[region.panelId];
  return (
    <motion.div
      key={region.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-40 flex items-center justify-center p-4"
      style={{ background: "rgba(2,4,8,0.88)", backdropFilter: "blur(10px)" }}
    >
      <div className="absolute inset-0" onClick={onClose} />
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.38, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-10 w-full max-w-3xl flex flex-col md:flex-row overflow-hidden"
        style={{
          background: "rgba(4,10,18,0.98)",
          border: "1px solid rgba(0,240,255,0.28)",
          boxShadow: "0 0 60px rgba(0,240,255,0.08), 0 0 120px rgba(0,240,255,0.04)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close-up image */}
        <div className="relative w-full md:w-[52%] overflow-hidden bg-[#020810]" style={{ minHeight: 260 }}>
          <motion.img
            key={region.closeupImg}
            src={region.closeupImg}
            alt={region.label}
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full h-full object-cover"
            style={{ minHeight: 260 }}
            draggable={false}
          />
          <div className="absolute inset-0 pointer-events-none"
               style={{ background: "radial-gradient(ellipse 70% 70% at 50% 50%,transparent 40%,rgba(2,4,8,0.65) 100%)" }} />
          <div className="absolute top-3 left-3 font-mono text-[0.5rem] text-[#00f0ff] tracking-[0.25em] bg-[rgba(2,4,8,0.8)] px-2 py-1 border border-[rgba(0,240,255,0.18)]">
            {region.code}
          </div>
        </div>

        {/* Info pane */}
        <div className="flex-1 flex flex-col px-5 py-5">
          <div className="flex items-start justify-between mb-3">
            <div>
              <div className="font-mono text-[0.5rem] text-[rgba(0,240,255,0.45)] tracking-[0.3em] mb-1">SYSTEM ANALYSIS</div>
              <h2 className="font-mono text-sm text-white tracking-widest leading-snug" style={{ fontFamily: "'Orbitron',monospace" }}>
                {panelData.title}
              </h2>
              <div className="font-mono text-[0.5rem] text-[rgba(232,244,248,0.25)] tracking-[0.2em] mt-1">
                {panelData.subtitle}
              </div>
            </div>
            <button onClick={onClose}
                    className="font-mono text-[0.55rem] text-[rgba(232,244,248,0.3)] hover:text-[#00f0ff] tracking-widest transition-colors ml-4 shrink-0">
              [ ESC ]
            </button>
          </div>
          <div className="mb-3 h-px" style={{ background: "linear-gradient(90deg,rgba(0,240,255,0.4),transparent)" }} />
          <div className="flex-1 overflow-y-auto">{panelData.body}</div>
          <div className="mt-4 pt-3 border-t border-[rgba(0,240,255,0.08)] flex items-center justify-between">
            <span className="font-mono text-[0.48rem] text-[rgba(232,244,248,0.18)] tracking-widest">
              SU-30MKI // {region.label}
            </span>
            <button onClick={onClose}
                    className="font-mono text-[0.55rem] px-3 py-1.5 border border-[rgba(0,240,255,0.28)] text-[rgba(0,240,255,0.65)] hover:bg-[rgba(0,240,255,0.07)] hover:text-[#00f0ff] transition-all tracking-widest">
              ← EXIT FOCUS
            </button>
          </div>
        </div>

        {/* HUD corners */}
        {(["top-0 left-0 border-t-2 border-l-2","top-0 right-0 border-t-2 border-r-2",
           "bottom-0 left-0 border-b-2 border-l-2","bottom-0 right-0 border-b-2 border-r-2"] as const).map((cls, i) => (
          <div key={i} className={`absolute w-4 h-4 border-[#00f0ff] opacity-50 ${cls}`} />
        ))}
      </motion.div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function BlueprintPage() {
  const [hovered, setHovered]   = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);
  const [selected, setSelected] = useState<RegionGroup | null>(null);
  const [zoomed, setZoomed]     = useState(false);
  const [inViewport, setInViewport] = useState(false);

  const imgControls  = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null!);

  const hoveredRegion = useMemo(
    () => REGION_GROUPS.find((r) => r.id === hovered),
    [hovered]
  );

  // ── Cursor magnet springs ──
  const { x: cursorX, y: cursorY, rawX, rawY } = useCursorMagnet(
    containerRef, hoveredRegion, zoomed
  );

  // Tooltip follows raw mouse, not magnet
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setTooltipPos({ x: e.clientX, y: e.clientY });
  }, []);

  // ── Click → zoom ──
  const handleRegionClick = useCallback(async (region: RegionGroup) => {
    if (zoomed) return;
    setZoomed(true);
    setHovered(null);

    const s = region.zoomTo.scale;
    const tx = (50 - region.zoomTo.cx) * s;
    const ty = (50 - region.zoomTo.cy) * s;

    await imgControls.start({
      scale: s, x: `${tx}%`, y: `${ty}%`,
      transition: { duration: 0.72, ease: [0.4, 0, 0.2, 1] },
    });

    await new Promise((r) => setTimeout(r, 80));
    setSelected(region);
  }, [zoomed, imgControls]);

  // ── Escape / close ──
  const handleClose = useCallback(async () => {
    setSelected(null);
    await new Promise((r) => setTimeout(r, 80));
    await imgControls.start({
      scale: 1, x: "0%", y: "0%",
      transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] },
    });
    setZoomed(false);
  }, [imgControls]);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape" && selected) handleClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [selected, handleClose]);

  return (
    <>
      {/* Custom cursor rendered outside main to sit above everything */}
      <CustomCursor
        x={cursorX} y={cursorY}
        visible={inViewport && !zoomed}
        active={!!hoveredRegion}
      />

      <main className="relative h-screen w-full overflow-hidden bg-[#020408] flex flex-col">
        <GridBackground />

        {/* Scanlines */}
        <div className="fixed inset-0 z-10 pointer-events-none"
             style={{ background: "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,240,255,0.006) 2px,rgba(0,240,255,0.006) 4px)" }} />

        {/* ── Header ── */}
        <motion.header
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-20 flex items-center justify-between px-6 py-2.5 border-b border-[rgba(0,240,255,0.1)] shrink-0"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-[0.55rem] text-[#00f0ff] tracking-[0.35em]">◈ CLASSIFIED</span>
            <span className="w-px h-3 bg-[rgba(0,240,255,0.25)]" />
            <span className="font-mono text-[0.55rem] text-[rgba(232,244,248,0.35)] tracking-widest">
              SU-30MKI // TECHNICAL SCHEMATIC v4.3
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse" />
              <span className="font-mono text-[0.55rem] text-[#00f0ff] tracking-widest">SYSTEM ONLINE</span>
            </div>
            <a href="/" className="font-mono text-[0.55rem] text-[rgba(232,244,248,0.3)] hover:text-[#00f0ff] tracking-widest transition-colors">
              ← EXIT
            </a>
          </div>
        </motion.header>

        {/* ── Blueprint viewport ── */}
        <div
          ref={containerRef}
          className="relative z-20 flex-1 flex items-center justify-center overflow-hidden"
          style={{ cursor: inViewport && !zoomed ? "none" : "default" }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setInViewport(true)}
          onMouseLeave={() => { setInViewport(false); setHovered(null); }}
        >
          {/* Side panels */}
          {!zoomed && <LeftPanel />}
          {!zoomed && <RightPanel regionId={hovered} />}

          {/* Aircraft container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="relative select-none"
            style={{ width: "min(90vw, 155vh)", aspectRatio: "1344/768" }}
          >
            {/* Zoom wrapper */}
            <motion.div
              animate={imgControls}
              initial={{ scale: 1, x: "0%", y: "0%" }}
              className="absolute inset-0 w-full h-full origin-center"
              style={{ willChange: "transform" }}
            >
              {/* Blueprint image */}
              <Image
                src="/su30.webp"
                alt="SU-30 MKI Blueprint"
                fill
                sizes="100vw"
                className="absolute inset-0 w-full h-full"
                style={{ objectFit: "fill", filter: "brightness(0.88) contrast(1.1)" }}
                priority={false}
                draggable={false}
              />

              {/* ── Polygon-shaped hover overlay ─────────────────────────── */}
              <AnimatePresence>
                {hovered && hoveredRegion && !zoomed && (
                  <motion.div
                    key={`hover-${hovered}`}
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.14 }}
                  >
                    <PolygonHoverOverlay region={hoveredRegion} />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ── SVG overlay: hit polygons + annotation dots ─────────── */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 1344 768"
                preserveAspectRatio="xMidYMid meet"
                style={{ overflow: "visible" }}
              >
                {/* ── INVISIBLE HIT POLYGONS ── */}
                {REGION_GROUPS.map((region) =>
                  region.polygons.map((pts, pIdx) => (
                    <polygon
                      key={`${region.id}-hit-${pIdx}`}
                      points={pts}
                      // Near-zero fill is required; fill:none disables pointer events on interior
                      fill="rgba(0,0,0,0.001)"
                      stroke="none"
                      pointerEvents="all"
                      style={{ cursor: zoomed ? "default" : "none" }}
                      onMouseEnter={() => !zoomed && setHovered(region.id)}
                      onMouseLeave={() => !zoomed && setHovered(null)}
                      onClick={() => !zoomed && handleRegionClick(region)}
                    />
                  ))
                )}

                {/* ── MULTI-DOT PULSING ANNOTATIONS ── */}
                {!zoomed && REGION_GROUPS.map((region) =>
                  region.dots.map((dot, dIdx) => {
                    const isHov = hovered === region.id;
                    const dur   = `${2.2 + dIdx * 0.45}s`;
                    const begin = `${dIdx * 0.55}s`;
                    return (
                      <g key={`dot-${region.id}-${dIdx}`} style={{ pointerEvents: "none" }}>
                        {/* Solid core */}
                        <circle cx={dot.cx} cy={dot.cy} r={isHov ? 5 : 3.5} fill="#00f0ff">
                          <animate attributeName="opacity"
                            values={isHov ? "0.55;1;0.55" : "0.2;0.65;0.2"}
                            dur={dur} begin={begin} repeatCount="indefinite" />
                        </circle>
                        {/* Primary pulse ring */}
                        <circle cx={dot.cx} cy={dot.cy} r="4" fill="none" stroke="#00f0ff" strokeWidth="0.9">
                          <animate attributeName="r"    values="4;22;4"  dur={dur} begin={begin} repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.5;0;0.5" dur={dur} begin={begin} repeatCount="indefinite" />
                        </circle>
                        {/* Secondary slower ring (active state) */}
                        {isHov && (
                          <circle cx={dot.cx} cy={dot.cy} r="4" fill="none" stroke="rgba(0,240,255,0.4)" strokeWidth="0.5">
                            <animate attributeName="r"    values="6;32;6"  dur={`${parseFloat(dur) * 1.6}s`} begin={begin} repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0.4;0;0.4" dur={`${parseFloat(dur) * 1.6}s`} begin={begin} repeatCount="indefinite" />
                          </circle>
                        )}
                      </g>
                    );
                  })
                )}
              </svg>
            </motion.div>

            {/* Hint */}
            <AnimatePresence>
              {!zoomed && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: 1.4 }}
                  className="absolute bottom-[-1.6rem] left-0 right-0 text-center font-mono text-[0.46rem] text-[rgba(232,244,248,0.18)] tracking-widest pointer-events-none"
                >
                  // HOVER TO IDENTIFY • CLICK TO ACCESS SYSTEM DATA
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ── Footer ── */}
        <motion.footer
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative z-20 flex items-center justify-between px-6 py-2 border-t border-[rgba(0,240,255,0.07)] shrink-0"
        >
          <span className="font-mono text-[0.48rem] text-[rgba(232,244,248,0.16)] tracking-widest">
            AIRCRAFT: SUKHOI SU-30MKI // TWIN-ENGINE SUPERMANEUVERABLE MULTIROLE FIGHTER
          </span>
          <span className="font-mono text-[0.48rem] text-[rgba(232,244,248,0.16)] tracking-widest">
            REF: {new Date().toISOString().split("T")[0].replace(/-/g, "")}
          </span>
        </motion.footer>

        {/* ── Tooltip (follows raw cursor, not magnet) ── */}
        <AnimatePresence>
          {hovered && tooltipPos && hoveredRegion && !zoomed && (
            <Tooltip
              label={hoveredRegion.label}
              code={hoveredRegion.code}
              x={tooltipPos.x}
              y={tooltipPos.y}
            />
          )}
        </AnimatePresence>

        {/* ── Close-up panel ── */}
        <AnimatePresence>
          {selected && <CloseupPanel region={selected} onClose={handleClose} />}
        </AnimatePresence>
      </main>
    </>
  );
}
