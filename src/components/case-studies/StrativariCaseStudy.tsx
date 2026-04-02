"use client";

import { useState } from "react";
import ImgSlot from "@/components/ui/ImgSlot";

const NAVY = "#1a2a4a";
const YELLOW = "#f2d94e";
const CORAL = "#e17244";
const CREAM = "#fdf6e3";
const FONT = "system-ui, -apple-system, 'Helvetica Neue', sans-serif";

function SectionLabel({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: dark ? "rgba(253,246,227,0.35)" : "rgba(26,26,26,0.35)", margin: 0 }}>
      {children}
    </p>
  );
}

function Divider() {
  return <div style={{ height: 1, background: "rgba(26,26,26,0.08)", margin: "0 48px" }} />;
}

const meta = [
  { label: "Year", value: "2022–2023" },
  { label: "Role", value: "Founder · UX/UI · Brand Designer" },
  { label: "Team", value: "Carlotta Pupulin + Margherita Pupulin (Copy)" },
  { label: "Tools", value: "Figma · Wix Studio · Canva · Miro" },
  { label: "Scope", value: "Brand · Website · E-commerce · No-Code" },
  { label: "Status", value: "Live ↗", link: "https://violinistrativari.com" },
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
    title: "Story before shop",
    problem: "Sustainability projects that lead with products feel cold. Nobody buys from a cause they don't understand yet.",
    insight: "Teachers and parents in early conversations didn't want a shop — they wanted to understand the project first. The mission was the product.",
    outcome: "Sequential page flow: Project → Violini → Partecipa → Shop. Visitors who reach the shop page have already bought the idea.",
    imgLabel: "Site map / page flow diagram",
    imgHint: "Simple linear diagram showing the 4-page journey: Project → Violini → Partecipa → Shop. Yellow background. 1200×500px.",
    imgRatio: "12/5",
    imgSrc: "",
  },
  {
    number: "02",
    title: "Classroom palette, not craft fair",
    problem: "Sustainability can look 'crafty' or overly serious — neither works for the dual audience of kids and adults.",
    insight: "The violins needed to look like real instruments, not prototypes. Color creates energy; typography creates credibility. Both at once.",
    outcome: "Sky blue + yellow + coral on navy. Amatic SC for display headings (handmade warmth), Quicksand for body (clean, readable on school screens).",
    imgLabel: "Brand palette + typography specimen",
    imgHint: "Color swatches with font specimens: Amatic SC headline, Quicksand body. Show on yellow background. 1200×600px.",
    imgRatio: "2/1",
    imgSrc: "",
  },
  {
    number: "03",
    title: "Wix as a constraint, not a limitation",
    problem: "No budget for custom dev. Wix limits animation and layout flexibility — easy to end up with a generic template feel.",
    insight: "Rhythm through color blocks and scroll pace — not animation. Each section is a color chapter. The structure is the experience.",
    outcome: "5-section scrolling narrative built entirely in Wix Studio with zero custom code. Educators use it as a teaching tool in class.",
    imgLabel: "Section color map — the scroll journey",
    imgHint: "Visual showing the page scroll as color chapters: navy → yellow → coral → navy. Like a filmstrip. 1200×400px.",
    imgRatio: "3/1",
    imgSrc: "",
  },
];

const outcomes = [
  { metric: "Live", label: "brand website shipped entirely in no-code" },
  { metric: "2+", label: "educators using it as a classroom teaching tool" },
  { metric: "Wks", label: "first shop orders arrived within weeks of launch" },
  { metric: "2", label: "languages — Italian and English — serving international educators" },
];

const learnings = [
  "No-code design thrives when story leads structure. Wix's constraints forced narrative clarity I might have avoided with more freedom.",
  "Clarity and tone matter as much as aesthetics. The copy and the design had to work as a single voice — Margherita's writing shaped every layout decision.",
  "Educational UX needs empathy more than decoration. The question was never 'does this look good?' but 'does a 9-year-old understand this, and does their teacher trust it?'",
  "Playfulness can carry serious ideas farther than formality. The yellow homepage communicates the mission before anyone reads a word.",
];

function DecisionCard({ d }: { d: Decision }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      style={{ background: open ? NAVY : "#f2f0eb", borderRadius: 12, padding: "32px 40px", cursor: "pointer", transition: "background 0.3s", fontFamily: FONT }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24 }}>
        <div style={{ display: "flex", gap: 28, alignItems: "flex-start", flex: 1 }}>
          <span style={{ fontSize: 13, fontWeight: 800, color: open ? YELLOW : "rgba(26,26,26,0.25)", letterSpacing: "0.06em", minWidth: 28, paddingTop: 4, transition: "color 0.3s" }}>{d.number}</span>
          <h3 style={{ fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 800, letterSpacing: "-0.02em", color: open ? "#fff" : "#1a1a1a", transition: "color 0.3s", margin: 0 }}>{d.title}</h3>
        </div>
        <span style={{ fontSize: 20, color: open ? YELLOW : "rgba(26,26,26,0.3)", transition: "all 0.3s", transform: open ? "rotate(45deg)" : "rotate(0deg)", display: "inline-block", marginTop: 4 }}>+</span>
      </div>

      {open && (
        <div style={{ marginTop: 32, paddingLeft: 56 }} onClick={(e) => e.stopPropagation()}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, marginBottom: 36 }}>
            {[
              { label: "Problem", text: d.problem, color: "rgba(253,246,227,0.45)" },
              { label: "Insight", text: d.insight, color: YELLOW },
              { label: "Outcome", text: d.outcome, color: CORAL },
            ].map((col) => (
              <div key={col.label}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: col.color, margin: "0 0 10px" }}>{col.label}</p>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(253,246,227,0.75)", margin: 0 }}>{col.text}</p>
              </div>
            ))}
          </div>
          <ImgSlot label={d.imgLabel} hint={d.imgHint} aspectRatio={d.imgRatio} src={d.imgSrc} dark />
        </div>
      )}
    </div>
  );
}

export default function StrativariCaseStudy() {
  return (
    <div style={{ fontFamily: FONT, background: "#fafaf8", color: "#1a1a1a", minHeight: "100vh" }}>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ background: YELLOW, padding: "140px 48px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: -20, right: -40,
          fontSize: "clamp(100px, 18vw, 240px)", fontWeight: 900,
          letterSpacing: "-0.05em", color: "transparent",
          WebkitTextStroke: "1px rgba(26,42,74,0.08)",
          lineHeight: 1, userSelect: "none", pointerEvents: "none",
        }}>Stra<br />tivari</div>

        <div style={{ maxWidth: 960, position: "relative", zIndex: 2 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: NAVY, opacity: 0.5, margin: "0 0 20px" }}>
            Brand Design · UX/UI · No-Code · Education
          </p>
          <h1 style={{ fontSize: "clamp(36px, 5.5vw, 72px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, color: NAVY, margin: "0 0 32px" }}>
            Making sustainability<br />feel joyful — not<br /><span style={{ color: CORAL }}>heavy-handed.</span>
          </h1>

          <div style={{ background: "rgba(26,42,74,0.08)", border: "1px solid rgba(26,42,74,0.12)", borderRadius: 12, padding: "24px 32px", maxWidth: 600, marginBottom: 64 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: NAVY, opacity: 0.5, margin: "0 0 12px" }}>At a glance</p>
            <p style={{ fontSize: 16, color: NAVY, opacity: 0.8, margin: "0 0 8px", lineHeight: 1.6 }}>
              <strong style={{ opacity: 1 }}>Problem:</strong> Strativari — recycled plastic violins for Turin schools — had a mission worth sharing but no digital home that matched its energy.
            </p>
            <p style={{ fontSize: 16, color: NAVY, opacity: 0.8, margin: "0 0 8px", lineHeight: 1.6 }}>
              <strong style={{ opacity: 1 }}>Approach:</strong> Built a no-code brand website that turns the physical recycling journey into a scrolling narrative — playful enough for kids, credible enough for parents.
            </p>
            <p style={{ fontSize: 16, color: NAVY, opacity: 0.8, margin: 0, lineHeight: 1.6 }}>
              <strong style={{ color: CORAL, opacity: 1 }}>Result:</strong> Educators adopted it as a teaching tool. First shop orders in weeks. A local project became a shareable digital story.
            </p>
          </div>

          <ImgSlot
            label="IMAGE 1 — Hero mockup, Strativari website"
            hint="Laptop in classroom photo OR mockup on shots.so with yellow background. 1440×810px."
            aspectRatio="16/9"
            src=""
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
                ? <a href={m.link} target="_blank" rel="noreferrer" style={{ fontSize: 13, fontWeight: 600, color: CORAL, textDecoration: "none" }}>{m.value}</a>
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
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, margin: "16px 0 0" }}>
              From pandemic anxiety to playful education.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#444", margin: "0 0 24px" }}>
              In 2020, watching plastic pile up while schools closed, I started asking a different question: what if recycled plastic could become music? Strativari was born from that frustration — violins built from plastic waste, designed with and for children in Turin&apos;s schools.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#444", margin: "0 0 32px" }}>
              The physical project had energy and purpose. But the website — built hastily — couldn&apos;t communicate either. It looked like every other sustainability NGO: well-meaning, dense, and forgettable.
            </p>
            <div style={{ borderLeft: `4px solid ${YELLOW}`, paddingLeft: 24 }}>
              <p style={{ fontSize: 18, fontStyle: "italic", fontWeight: 500, color: NAVY, margin: 0, lineHeight: 1.6 }}>
                &ldquo;How might we design a digital experience that communicates sustainability with warmth and purpose — to both adults who need to trust it, and children who need to be curious about it?&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── AUDIENCE ─────────────────────────────────────────────────── */}
      <section style={{ padding: "100px 48px", maxWidth: 960, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 80 }}>
          <div>
            <SectionLabel>Audience</SectionLabel>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, margin: "16px 0 0" }}>
              Designing for two people at once.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#444", margin: "0 0 32px" }}>
              Early conversations with teachers and parents revealed two contradictory needs sitting in the same room:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
              {[
                { role: "Teachers & Parents", need: "Clarity and credibility. Something they can trust to share with children.", icon: "🎓", accent: NAVY },
                { role: "Children", need: "Curiosity and joy. Something that feels like play, not like homework.", icon: "🎻", accent: CORAL },
              ].map((a) => (
                <div key={a.role} style={{ background: "#f2f0eb", borderRadius: 12, padding: "28px 24px", borderTop: `3px solid ${a.accent}` }}>
                  <span style={{ fontSize: 28 }}>{a.icon}</span>
                  <p style={{ fontSize: 14, fontWeight: 800, color: "#1a1a1a", margin: "12px 0 8px" }}>{a.role}</p>
                  <p style={{ fontSize: 14, color: "#666", margin: 0, lineHeight: 1.6 }}>{a.need}</p>
                </div>
              ))}
            </div>
            <div style={{ background: NAVY, borderRadius: 12, padding: "28px 32px" }}>
              <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: YELLOW, margin: "0 0 10px" }}>Key insight</p>
              <p style={{ fontSize: 20, fontWeight: 700, color: CREAM, margin: 0, lineHeight: 1.4 }}>
                The same design had to feel like an educational space adults enjoy — not a children&apos;s site adults tolerate.
              </p>
            </div>
            <div style={{ marginTop: 32 }}>
              <ImgSlot
                label="IMAGE 2 — Dual audience insight"
                hint="Option A: Miro sticky clusters showing adult needs vs child needs. Option B: Figma two-column diagram. 1200×600px."
                aspectRatio="2/1"
                src=""
              />
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── DESIGN DECISIONS ─────────────────────────────────────────── */}
      <section style={{ padding: "100px 48px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto 64px" }}>
          <SectionLabel>Design Decisions</SectionLabel>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, margin: "16px 0 0", maxWidth: 600 }}>
            Three decisions that shaped the site.
          </h2>
        </div>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", flexDirection: "column", gap: 3 }}>
          {decisions.map((d, i) => <DecisionCard key={i} d={d} />)}
        </div>
      </section>

      <Divider />

      {/* ── OUTCOMES ─────────────────────────────────────────────────── */}
      <section style={{ padding: "100px 48px", background: NAVY }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <SectionLabel dark>Outcomes</SectionLabel>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, color: CREAM, margin: "16px 0 48px", maxWidth: 500 }}>
            A local project became a digital movement.
          </h2>
          <div style={{ marginBottom: 48 }}>
            <ImgSlot
              label="IMAGE 3 — Responsive mockup on dark background"
              hint="Strativari site on laptop + tablet + phone. Dark/navy background. Use shots.so or Mockuuups Studio. 1440×700px."
              aspectRatio="16/7"
              src=""
              dark
            />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 2, marginBottom: 48 }}>
            {outcomes.map((o, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "32px 28px" }}>
                <p style={{ fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 900, color: YELLOW, margin: "0 0 12px", letterSpacing: "-0.04em", lineHeight: 1 }}>{o.metric}</p>
                <p style={{ fontSize: 14, color: CREAM, opacity: 0.65, margin: 0, lineHeight: 1.5 }}>{o.label}</p>
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 48 }}>
            <blockquote style={{ fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, fontStyle: "italic", color: CREAM, margin: 0, lineHeight: 1.5, maxWidth: 700 }}>
              &ldquo;Carlotta&apos;s work captured the project&apos;s energy perfectly — playful, responsible, and deeply human. It communicates our mission better than any presentation could.&rdquo;
            </blockquote>
            <p style={{ fontSize: 13, color: CREAM, opacity: 0.45, margin: "16px 0 0" }}>— Miriam Paschetta, Co-founder, Strativari Project</p>
          </div>
        </div>
      </section>

      {/* ── LEARNINGS ────────────────────────────────────────────────── */}
      <section style={{ padding: "100px 48px", maxWidth: 960, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 80 }}>
          <div>
            <SectionLabel>Learnings</SectionLabel>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, margin: "16px 0 0" }}>
              What building StraTivari taught me.
            </h2>
          </div>
          <div style={{ paddingTop: 8 }}>
            {learnings.map((l, i) => (
              <div key={i} style={{ display: "flex", gap: 20, alignItems: "flex-start", padding: "24px 0", borderBottom: i < learnings.length - 1 ? "1px solid rgba(26,26,26,0.08)" : "none" }}>
                <span style={{ fontSize: 11, fontWeight: 800, color: CORAL, letterSpacing: "0.06em", minWidth: 24, paddingTop: 3 }}>{String(i + 1).padStart(2, "0")}</span>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: "#444", margin: 0 }}>{l}</p>
              </div>
            ))}
            <div style={{ marginTop: 40, background: "#f2f0eb", borderRadius: 12, padding: "28px 32px" }}>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.4, margin: "0 0 12px" }}>What&apos;s next</p>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555", margin: 0 }}>
                Short documentary clips · Multilingual version for international educators · DIY kits + downloadable teaching material
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEXT PROJECT ─────────────────────────────────────────────── */}
      <section style={{ padding: "80px 48px", borderTop: "1px solid rgba(26,26,26,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
        <div>
          <p style={{ fontSize: 12, opacity: 0.4, margin: "0 0 8px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>Next project</p>
          <h3 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.03em", margin: 0 }}>Deskwork →</h3>
        </div>
        <a href="/work/deskwork" style={{ background: NAVY, color: CREAM, textDecoration: "none", borderRadius: 6, padding: "16px 32px", fontSize: 15, fontWeight: 600 }}>
          View case study
        </a>
      </section>

    </div>
  );
}
