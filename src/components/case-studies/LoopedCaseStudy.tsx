"use client";

import { useState } from "react";
import ImgSlot from "@/components/ui/ImgSlot";

const NAV = "#1e2a3a";
const TEAL = "#00b8a9";
const CORAL = "#ff6b6b";
const CREAM = "#f0ece4";
const FONT = "system-ui, -apple-system, 'Helvetica Neue', sans-serif";

function SectionLabel({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: light ? "rgba(240,236,228,0.4)" : "rgba(26,26,26,0.35)", margin: 0 }}>
      {children}
    </p>
  );
}

function Divider() {
  return <div style={{ height: 1, background: "rgba(26,26,26,0.08)", margin: "0 48px" }} />;
}

const meta = [
  { label: "Year", value: "2024–2025" },
  { label: "Role", value: "Product Designer — end-to-end" },
  { label: "Timeline", value: "6 months" },
  { label: "Team", value: "Solo (design + AI-assisted dev)" },
  { label: "Tools", value: "Figma · Lovable · Supabase · Stripe" },
  { label: "Status", value: "Live ↗", link: "https://uselooped.app" },
];

interface Decision {
  number: string;
  title: string;
  problem: string;
  insight: string;
  outcome: string;
  imgLabel: string;
  imgHint: string;
  imgRatio: string;
  imgSrc: string;
}

const decisions: Decision[] = [
  {
    number: "01",
    title: "Verification over reviews",
    problem: "Musicians don't trust strangers with a €3,000 cello.",
    insight: "Every person I interviewed mentioned trust first — not price, not selection. Reviews felt gameable. Verification felt real.",
    outcome: "8/10 musicians in prototype testing said they felt confident renting without knowing the owner personally.",
    imgLabel: "Before / After — Profile verification badge",
    imgHint: "Side-by-side: profile card WITHOUT verification (left) vs WITH badge + instrument history visible (right). Light bg. Export 1200×600px from Figma.",
    imgRatio: "2/1",
    imgSrc: "",
  },
  {
    number: "02",
    title: "Checkout from 5 steps to 3",
    problem: "Early prototypes had a 5-step booking flow. Drop-off was instant.",
    insight: "\"The forms killed the vibe\" — direct quote from a test session. Musicians think in sessions, not transactions.",
    outcome: "Reduced perceived friction. Users described the flow as 'like booking a friend's instrument'.",
    imgLabel: "GIF — 3-step checkout flow walkthrough",
    imgHint: "Screen recording of the booking: step 1 (instrument + dates) → step 2 (confirm) → step 3 (payment). Max 10 sec, looped. 1200×750px.",
    imgRatio: "16/10",
    imgSrc: "",
  },
  {
    number: "03",
    title: "Dashboard as setlist",
    problem: "The owner dashboard was a data dump — bookings, earnings, messages all competing.",
    insight: "Musicians think in setlists: what's now, what's next, what happened. That mental model restructured everything.",
    outcome: "Zero support messages about 'where is my booking' after the redesign.",
    imgLabel: "Annotated dashboard — 3 temporal zones",
    imgHint: "Owner dashboard screenshot with colored annotation overlays: Active (teal), Upcoming (blue), History (grey). 1200×800px.",
    imgRatio: "3/2",
    imgSrc: "",
  },
];

const outcomes = [
  { metric: "40+", label: "musicians on the waitlist within weeks of launch" },
  { metric: "8/10", label: "prototype testers preferred Looped over existing platforms" },
  { metric: "3 steps", label: "booking flow — down from 5 in early prototypes" },
  { metric: "Live", label: "fully functional with Stripe Connect + Supabase" },
];

const learnings = [
  "Trust is built through logic and tone, not just visual design — a clear pricing breakdown does more than a polished UI.",
  "Moving between Figma and code early forced better decisions. When something was hard to build, it was usually hard to understand too.",
  "Solo doesn't mean unsupported. Testing with 6 musicians, even informally, changed every major flow.",
];

function DecisionCard({ d }: { d: Decision }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      style={{ background: open ? NAV : "#f2f0eb", borderRadius: 12, padding: "32px 40px", cursor: "pointer", transition: "background 0.3s", fontFamily: FONT }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24 }}>
        <div style={{ display: "flex", gap: 28, alignItems: "flex-start", flex: 1 }}>
          <span style={{ fontSize: 13, fontWeight: 800, color: open ? TEAL : "rgba(26,26,26,0.25)", letterSpacing: "0.06em", minWidth: 28, paddingTop: 4, transition: "color 0.3s" }}>{d.number}</span>
          <h3 style={{ fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 800, letterSpacing: "-0.02em", color: open ? "#fff" : "#1a1a1a", transition: "color 0.3s", margin: 0 }}>{d.title}</h3>
        </div>
        <span style={{ fontSize: 20, color: open ? TEAL : "rgba(26,26,26,0.3)", transition: "all 0.3s", transform: open ? "rotate(45deg)" : "rotate(0deg)", display: "inline-block", marginTop: 4 }}>+</span>
      </div>

      {open && (
        <div style={{ marginTop: 32, paddingLeft: 56 }} onClick={(e) => e.stopPropagation()}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, marginBottom: 36 }}>
            {[
              { label: "Problem", text: d.problem, color: "rgba(240,236,228,0.45)" },
              { label: "Insight", text: d.insight, color: TEAL },
              { label: "Outcome", text: d.outcome, color: CORAL },
            ].map((col) => (
              <div key={col.label}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: col.color, margin: "0 0 10px" }}>{col.label}</p>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(240,236,228,0.75)", margin: 0 }}>{col.text}</p>
              </div>
            ))}
          </div>
          <ImgSlot label={d.imgLabel} hint={d.imgHint} aspectRatio={d.imgRatio} src={d.imgSrc} dark />
        </div>
      )}
    </div>
  );
}

export default function LoopedCaseStudy() {
  return (
    <div style={{ fontFamily: FONT, background: "#fafaf8", color: "#1a1a1a", minHeight: "100vh" }}>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ background: NAV, padding: "140px 48px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: 0, right: -20,
          fontSize: "clamp(120px, 20vw, 280px)", fontWeight: 900,
          letterSpacing: "-0.05em", color: "transparent",
          WebkitTextStroke: "1px rgba(255,255,255,0.04)",
          lineHeight: 1, userSelect: "none", pointerEvents: "none",
        }}>Looped</div>

        <div style={{ maxWidth: 960, position: "relative", zIndex: 2 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: TEAL, margin: "0 0 20px" }}>
            Product Design · Marketplace · Trust Systems
          </p>
          <h1 style={{ fontSize: "clamp(36px, 5.5vw, 72px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, color: CREAM, margin: "0 0 32px" }}>
            Designing trust into<br />a P2P instrument<br /><span style={{ color: TEAL }}>rental platform.</span>
          </h1>

          <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "24px 32px", maxWidth: 600, marginBottom: 64 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: TEAL, margin: "0 0 12px" }}>At a glance</p>
            <p style={{ fontSize: 16, color: CREAM, opacity: 0.8, margin: "0 0 8px", lineHeight: 1.6 }}><strong style={{ color: CREAM }}>Problem:</strong> Musicians needed access to quality instruments locally — but peer rental felt too risky without clear trust signals.</p>
            <p style={{ fontSize: 16, color: CREAM, opacity: 0.8, margin: "0 0 8px", lineHeight: 1.6 }}><strong style={{ color: CREAM }}>Approach:</strong> Redesigned end-to-end around verified profiles, simplified booking, and transparent payments.</p>
            <p style={{ fontSize: 16, color: CREAM, opacity: 0.8, margin: 0, lineHeight: 1.6 }}><strong style={{ color: CORAL }}>Result:</strong> 8/10 musicians preferred Looped in testing. 40+ waitlist signups. Platform is live.</p>
          </div>

          <ImgSlot
            label="IMAGE 1 — Hero product mockup"
            hint="Laptop on music stand (you already have this photo) OR laptop + tablet mockup on shots.so with dark background. Shows Looped homepage live. 1440×810px."
            aspectRatio="16/9"
            src=""
            dark
          />
        </div>
      </section>

      {/* ── META BAR ─────────────────────────────────────────────────── */}
      <section style={{ background: "#f2f0eb", borderBottom: "1px solid rgba(26,26,26,0.08)", padding: "0 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", maxWidth: 960, margin: "0 auto" }}>
          {meta.map((m, i) => (
            <div key={i} style={{ padding: "24px 0", borderRight: i < meta.length - 1 ? "1px solid rgba(26,26,26,0.08)" : "none", paddingRight: 24, paddingLeft: i > 0 ? 24 : 0 }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.4, margin: "0 0 6px" }}>{m.label}</p>
              {m.link
                ? <a href={m.link} target="_blank" rel="noreferrer" style={{ fontSize: 13, fontWeight: 600, color: TEAL, textDecoration: "none" }}>{m.value}</a>
                : <p style={{ fontSize: 13, fontWeight: 600, margin: 0, lineHeight: 1.4 }}>{m.value}</p>
              }
            </div>
          ))}
        </div>
      </section>

      {/* ── PROBLEM ──────────────────────────────────────────────────── */}
      <section style={{ padding: "100px 48px", maxWidth: 960, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <SectionLabel>The Problem</SectionLabel>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, margin: "16px 0 0" }}>A problem I lived first hand.</h2>
          </div>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#444", margin: "0 0 24px" }}>
              As a professional baroque harpist, I&apos;ve faced the same logistical nightmare before every concert abroad: transport a fragile, expensive instrument across borders, or scramble to find a rental. Existing rental services are designed for music schools, not for touring musicians who need something specific, fast, and local.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#444", margin: "0 0 32px" }}>
              Looped started as a hypothesis: what if musicians could rent instruments from each other — locally, safely, and without the friction of traditional rental shops?
            </p>
            <div style={{ borderLeft: `4px solid ${TEAL}`, paddingLeft: 24 }}>
              <p style={{ fontSize: 18, fontStyle: "italic", fontWeight: 500, color: NAV, margin: 0, lineHeight: 1.6 }}>
                &ldquo;How might we help musicians access high-quality instruments locally — with minimal friction and maximum trust?&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── RESEARCH ─────────────────────────────────────────────────── */}
      <section style={{ padding: "100px 48px", maxWidth: 960, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 80 }}>
          <div>
            <SectionLabel>Research</SectionLabel>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, margin: "16px 0 0" }}>Listening before designing.</h2>
          </div>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#444", margin: "0 0 32px" }}>
              I interviewed 8 musicians — classical, folk, and electronic — and benchmarked against Airbnb, Fat Llama, and Sparkplug. One finding shaped everything:
            </p>
            <div style={{ background: NAV, borderRadius: 12, padding: "32px 36px", marginBottom: 40 }}>
              <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: TEAL, margin: "0 0 12px" }}>Key insight</p>
              <p style={{ fontSize: 22, fontWeight: 700, color: CREAM, margin: 0, lineHeight: 1.4 }}>
                Every musician mentioned trust first — not price, not selection. That single insight shaped every design choice.
              </p>
            </div>
            <ImgSlot
              label="IMAGE 2 — Competitor benchmark with annotations"
              hint="2–3 competitor screenshots (Airbnb, Fat Llama) with red circles/arrows showing where trust signals are hidden or absent. White background. 1200×700px."
              aspectRatio="12/7"
              src=""
            />
          </div>
        </div>
      </section>

      <Divider />

      {/* ── DESIGN DECISIONS ─────────────────────────────────────────── */}
      <section style={{ padding: "100px 48px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto 64px" }}>
          <SectionLabel>Design Decisions</SectionLabel>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, margin: "16px 0 0", maxWidth: 600 }}>
            Three decisions that built trust.
          </h2>
        </div>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", flexDirection: "column", gap: 3 }}>
          {decisions.map((d, i) => <DecisionCard key={i} d={d} />)}
        </div>
      </section>

      <Divider />

      {/* ── OUTCOMES ─────────────────────────────────────────────────── */}
      <section style={{ padding: "100px 48px", background: NAV }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <SectionLabel light>Outcomes</SectionLabel>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, color: CREAM, margin: "16px 0 48px", maxWidth: 500 }}>
            Early impact and community response.
          </h2>

          <div style={{ marginBottom: 48 }}>
            <ImgSlot
              label="IMAGE 3 — Responsive mockup (laptop + tablet + phone)"
              hint="Looped on 3 devices. Use shots.so or Mockuuups with a dark/navy background. 1440×700px."
              aspectRatio="16/7"
              src=""
              dark
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 2, marginBottom: 48 }}>
            {outcomes.map((o, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "32px 28px" }}>
                <p style={{ fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 900, color: TEAL, margin: "0 0 12px", letterSpacing: "-0.04em", lineHeight: 1 }}>{o.metric}</p>
                <p style={{ fontSize: 14, color: CREAM, opacity: 0.65, margin: 0, lineHeight: 1.5 }}>{o.label}</p>
              </div>
            ))}
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 48 }}>
            <blockquote style={{ fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, fontStyle: "italic", color: CREAM, margin: 0, lineHeight: 1.5, maxWidth: 700 }}>
              &ldquo;Looped captures what musicians really need — clarity, trust, and a sense of community. The interface feels natural, like it was designed by someone who actually understands how we work.&rdquo;
            </blockquote>
            <p style={{ fontSize: 13, color: CREAM, opacity: 0.45, margin: "16px 0 0" }}>— Clara Reinhardt, Baroque Cellist &amp; Early Adopter</p>
          </div>
        </div>
      </section>

      {/* ── LEARNINGS ────────────────────────────────────────────────── */}
      <section style={{ padding: "100px 48px", maxWidth: 960, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 80 }}>
          <div>
            <SectionLabel>Learnings</SectionLabel>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, margin: "16px 0 0" }}>What building Looped taught me.</h2>
          </div>
          <div style={{ paddingTop: 8 }}>
            {learnings.map((l, i) => (
              <div key={i} style={{ display: "flex", gap: 20, alignItems: "flex-start", padding: "24px 0", borderBottom: i < learnings.length - 1 ? "1px solid rgba(26,26,26,0.08)" : "none" }}>
                <span style={{ fontSize: 11, fontWeight: 800, color: TEAL, letterSpacing: "0.06em", minWidth: 24, paddingTop: 3 }}>{String(i + 1).padStart(2, "0")}</span>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: "#444", margin: 0 }}>{l}</p>
              </div>
            ))}
            <div style={{ marginTop: 40, background: "#f2f0eb", borderRadius: 12, padding: "28px 32px" }}>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.4, margin: "0 0 12px" }}>What&apos;s next</p>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555", margin: 0 }}>Rating &amp; review system · Damage deposit flows · Insurance partnerships · PWA mobile optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEXT PROJECT ─────────────────────────────────────────────── */}
      <section style={{ padding: "80px 48px", borderTop: "1px solid rgba(26,26,26,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
        <div>
          <p style={{ fontSize: 12, opacity: 0.4, margin: "0 0 8px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>Next project</p>
          <h3 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.03em", margin: 0 }}>StraTivari →</h3>
        </div>
        <a href="/work/strativari" style={{ background: NAV, color: CREAM, textDecoration: "none", borderRadius: 6, padding: "16px 32px", fontSize: 15, fontWeight: 600 }}>
          View case study
        </a>
      </section>

    </div>
  );
}
