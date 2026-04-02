"use client";

import { useState } from "react";
import ImgSlot from "@/components/ui/ImgSlot";

const ESPRESSO = "#2a1f17";
const RUST = "#c4622d";
const CREAM = "#f0e6d3";
const SAND = "#e8dcc8";
const OFFWHITE = "#fafaf8";
const FONT = "system-ui, -apple-system, 'Helvetica Neue', sans-serif";

function SectionLabel({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: dark ? "rgba(240,230,211,0.35)" : "rgba(26,26,26,0.35)", margin: 0 }}>
      {children}
    </p>
  );
}

function Divider() {
  return <div style={{ height: 1, background: "rgba(26,26,26,0.08)", margin: "0 48px" }} />;
}

const meta = [
  { label: "Year", value: "2026" },
  { label: "Role", value: "Product Designer + Builder" },
  { label: "Timeline", value: "Ongoing" },
  { label: "Team", value: "Solo (AI-assisted dev)" },
  { label: "Tools", value: "Figma · Lovable · Supabase" },
  { label: "Status", value: "Live ↗", link: "https://deskwork-freelance-hq.lovable.app" },
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
    title: "Project types built for musicians",
    problem: "Generic freelance tools treat a concert booking the same as a logo design. The fields are wrong, the language is wrong, the whole mental model is wrong.",
    insight: "A musician doesn't have a 'project scope' — they have a venue, rehearsal dates, a programme, and a fee type. The form had to speak that language.",
    outcome: "Project types: Concert · Recording · Tour · Workshop · Design · Lessons · Transcriptions. Each unlocks context-specific fields.",
    imgLabel: "New Project form — Concert type expanded",
    imgHint: "Screenshot of the New Project modal with Concert type selected, showing musician-specific fields: Venue, Performance Date(s), Rehearsal Dates, Program/Repertoire. 1200×800px.",
    imgRatio: "3/2",
    imgSrc: "",
  },
  {
    number: "02",
    title: "Invoice with Concert Details section",
    problem: "When you send an invoice for a performance, the client needs to see the concert context — not just a line item that says 'Concert performance: 400€'.",
    insight: "The invoice IS the contract summary for many freelance musicians. Venue and performance date on the invoice reduces back-and-forth and disputes.",
    outcome: "Concert Details block embedded in invoice: Venue + Performance Dates pulled automatically from the project. Bank transfer details pre-filled from settings.",
    imgLabel: "Invoice view — Concert Details block",
    imgHint: "Screenshot of the invoice showing Concert Details section (Venue, Performance Dates) above the line items. 1200×900px.",
    imgRatio: "4/3",
    imgSrc: "",
  },
  {
    number: "03",
    title: "Multi-currency support for international work",
    problem: "Freelance musicians work internationally. Getting paid in CHF from a Swiss venue and EUR from a German label in the same month is normal — not an edge case.",
    insight: "Switching bank details manually per invoice is where errors happen. The client receives the wrong IBAN. Payments bounce. Trust erodes.",
    outcome: "Multiple currencies supported across the platform. Each user stores their own bank accounts per currency in Settings — the invoice surfaces the right account automatically.",
    imgLabel: "Settings — Bank Accounts (multi-currency)",
    imgHint: "Screenshot of Settings page showing Bank Accounts section with multiple accounts in different currencies. 1200×500px.",
    imgRatio: "12/5",
    imgSrc: "",
  },
];

const outcomes = [
  { metric: "Live", label: "fully functional app on Lovable + Supabase" },
  { metric: "7", label: "project types tailored to musician work contexts" },
  { metric: "Multi", label: "currency support — each user stores accounts per currency, auto-routed on invoices" },
  { metric: "1", label: "tool replacing 3 separate apps (spreadsheet + Word + bank)" },
];

const learnings = [
  "The gap in the market wasn't features — it was vocabulary. Calling it 'venue' instead of 'location', 'programme' instead of 'scope' made the product feel native immediately.",
  "Building your own tool changes how you design. Every friction point I hit as a user became a design decision. The Concert Details on invoices came from a real invoice dispute.",
  "Lovable + Supabase made end-to-end product ownership possible solo. The constraint of no back-end team forced simpler, better data models.",
];

const comparisonRows = [
  { field: "Project type", generic: "Fixed Price / Hourly", deskwork: "Concert · Tour · Recording · Workshop · Lessons · Transcriptions · Design" },
  { field: "Key dates", generic: "Start date / Due date", deskwork: "Performance date · Rehearsal dates" },
  { field: "Location", generic: "Not a field", deskwork: "Venue / City" },
  { field: "Programme", generic: "Notes (free text)", deskwork: "Program / Repertoire (dedicated field)" },
  { field: "Invoice context", generic: "Line items only", deskwork: "Concert Details block auto-populated" },
  { field: "Multi-currency", generic: "One account, manual switch", deskwork: "Multiple currencies, bank accounts per currency auto-routed" },
];

function DecisionCard({ d }: { d: Decision }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      style={{ background: open ? ESPRESSO : "#f2f0eb", borderRadius: 12, padding: "32px 40px", cursor: "pointer", transition: "background 0.3s", fontFamily: FONT }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24 }}>
        <div style={{ display: "flex", gap: 28, alignItems: "flex-start", flex: 1 }}>
          <span style={{ fontSize: 13, fontWeight: 800, color: open ? RUST : "rgba(26,26,26,0.25)", letterSpacing: "0.06em", minWidth: 28, paddingTop: 4, transition: "color 0.3s" }}>{d.number}</span>
          <h3 style={{ fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 800, letterSpacing: "-0.02em", color: open ? "#fff" : "#1a1a1a", transition: "color 0.3s", margin: 0 }}>{d.title}</h3>
        </div>
        <span style={{ fontSize: 20, color: open ? RUST : "rgba(26,26,26,0.3)", transition: "all 0.3s", transform: open ? "rotate(45deg)" : "rotate(0deg)", display: "inline-block", marginTop: 4 }}>+</span>
      </div>

      {open && (
        <div style={{ marginTop: 32, paddingLeft: 56 }} onClick={(e) => e.stopPropagation()}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, marginBottom: 36 }}>
            {[
              { label: "Problem", text: d.problem, color: "rgba(240,230,211,0.45)" },
              { label: "Insight", text: d.insight, color: RUST },
              { label: "Outcome", text: d.outcome, color: SAND },
            ].map((col) => (
              <div key={col.label}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: col.color, margin: "0 0 10px" }}>{col.label}</p>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(240,230,211,0.75)", margin: 0 }}>{col.text}</p>
              </div>
            ))}
          </div>
          <ImgSlot label={d.imgLabel} hint={d.imgHint} aspectRatio={d.imgRatio} src={d.imgSrc} dark />
        </div>
      )}
    </div>
  );
}

export default function DeskworkCaseStudy() {
  return (
    <div style={{ fontFamily: FONT, background: OFFWHITE, color: "#1a1a1a", minHeight: "100vh" }}>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ background: ESPRESSO, padding: "140px 48px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: -10, right: -40,
          fontSize: "clamp(100px, 18vw, 260px)", fontWeight: 900,
          letterSpacing: "-0.05em", color: "transparent",
          WebkitTextStroke: "1px rgba(240,230,211,0.05)",
          lineHeight: 1, userSelect: "none", pointerEvents: "none",
        }}>Desk<br />work</div>

        <div style={{ maxWidth: 960, position: "relative", zIndex: 2 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: RUST, margin: "0 0 20px" }}>
            Product Design · SaaS · Freelance Tools · Musicians
          </p>
          <h1 style={{ fontSize: "clamp(36px, 5.5vw, 72px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, color: CREAM, margin: "0 0 32px" }}>
            A freelance dashboard<br />built for musicians —<br /><span style={{ color: RUST }}>by a musician.</span>
          </h1>

          <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "24px 32px", maxWidth: 600, marginBottom: 64 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: RUST, margin: "0 0 12px" }}>At a glance</p>
            <p style={{ fontSize: 16, color: CREAM, opacity: 0.8, margin: "0 0 8px", lineHeight: 1.6 }}>
              <strong style={{ color: CREAM }}>Problem:</strong> Freelance musicians manage projects, invoices, and clients across 3+ tools — none of which understand what a concert booking actually involves.
            </p>
            <p style={{ fontSize: 16, color: CREAM, opacity: 0.8, margin: "0 0 8px", lineHeight: 1.6 }}>
              <strong style={{ color: CREAM }}>Approach:</strong> Designed and built an end-to-end freelance HQ with musician-specific project types, context-aware invoices, and multi-currency support.
            </p>
            <p style={{ fontSize: 16, color: CREAM, opacity: 0.8, margin: 0, lineHeight: 1.6 }}>
              <strong style={{ color: RUST }}>Result:</strong> A live, fully functional app that replaces spreadsheets, Word invoices, and manual bank switching — with multi-currency support built in.
            </p>
          </div>

          <ImgSlot
            label="IMAGE 1 — Deskwork dashboard overview"
            hint="Overview page showing revenue chart, pipeline summary, and recent invoices. Laptop mockup on shots.so with dark background. 1440×810px."
            aspectRatio="16/9"
            src=""
            dark
          />
        </div>
      </section>

      {/* ── META BAR ─────────────────────────────────────────────────── */}
      <section style={{ background: SAND, borderBottom: "1px solid rgba(26,26,26,0.08)", padding: "0 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", maxWidth: 960, margin: "0 auto" }}>
          {meta.map((m, i) => (
            <div key={i} style={{ padding: "24px 0", borderRight: i < meta.length - 1 ? "1px solid rgba(26,26,26,0.08)" : "none", paddingRight: 24, paddingLeft: i > 0 ? 24 : 0 }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.4, margin: "0 0 6px" }}>{m.label}</p>
              {m.link
                ? <a href={m.link} target="_blank" rel="noreferrer" style={{ fontSize: 13, fontWeight: 600, color: RUST, textDecoration: "none" }}>{m.value}</a>
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
              Every freelance tool exists. None of them understand musicians.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#444", margin: "0 0 24px" }}>
              As a freelance musician, my admin stack looked like this: a Google Sheet for tracking projects, a Word template for invoices, a notes app for client details, and a lot of manual copy-pasting between all three every time I got a concert booking.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#444", margin: "0 0 32px" }}>
              Tools like FreshBooks and HoneyBook exist for freelancers — but they&apos;re built for designers and consultants. They don&apos;t know what a rehearsal date is. They don&apos;t know that a &ldquo;venue&rdquo; matters on an invoice. They don&apos;t know that I get paid in CHF on Tuesday and EUR on Friday.
            </p>
            <div style={{ borderLeft: `4px solid ${RUST}`, paddingLeft: 24 }}>
              <p style={{ fontSize: 18, fontStyle: "italic", fontWeight: 500, color: ESPRESSO, margin: 0, lineHeight: 1.6 }}>
                &ldquo;How might we design a freelance management tool that actually speaks the language of a working musician — from project creation to invoice sent?&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── THE GAP ──────────────────────────────────────────────────── */}
      <section style={{ padding: "100px 48px", maxWidth: 960, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 80 }}>
          <div>
            <SectionLabel>The Gap</SectionLabel>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, margin: "16px 0 0" }}>
              Generic tools, wrong vocabulary.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#444", margin: "0 0 32px" }}>
              I audited 4 freelance tools as a musician trying to log a concert booking. Every single one failed at the same point: the project form.
            </p>

            <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(26,26,26,0.08)", marginBottom: 40 }}>
              {comparisonRows.map((row, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: i % 2 === 0 ? "#f2f0eb" : OFFWHITE, borderBottom: i < comparisonRows.length - 1 ? "1px solid rgba(26,26,26,0.06)" : "none" }}>
                  <div style={{ padding: "14px 20px", fontSize: 13, fontWeight: 600, color: "#1a1a1a" }}>{row.field}</div>
                  <div style={{ padding: "14px 20px", fontSize: 13, color: "#999", borderLeft: "1px solid rgba(26,26,26,0.06)" }}>{row.generic}</div>
                  <div style={{ padding: "14px 20px", fontSize: 13, color: RUST, fontWeight: 600, borderLeft: "1px solid rgba(26,26,26,0.06)" }}>{row.deskwork}</div>
                </div>
              ))}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: ESPRESSO }}>
                <div style={{ padding: "12px 20px" }} />
                <div style={{ padding: "12px 20px", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "rgba(240,230,211,0.4)", borderLeft: "1px solid rgba(255,255,255,0.06)" }}>Generic tools</div>
                <div style={{ padding: "12px 20px", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: RUST, borderLeft: "1px solid rgba(255,255,255,0.06)" }}>Deskwork</div>
              </div>
            </div>

            <div style={{ background: ESPRESSO, borderRadius: 12, padding: "28px 32px" }}>
              <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: RUST, margin: "0 0 10px" }}>Key insight</p>
              <p style={{ fontSize: 20, fontWeight: 700, color: CREAM, margin: 0, lineHeight: 1.4 }}>
                The gap wasn&apos;t missing features. It was missing vocabulary. Renaming &ldquo;location&rdquo; to &ldquo;venue&rdquo; and &ldquo;scope&rdquo; to &ldquo;programme&rdquo; made the tool feel native to musicians immediately.
              </p>
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
            Three decisions that made it feel right.
          </h2>
        </div>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", flexDirection: "column", gap: 3 }}>
          {decisions.map((d, i) => <DecisionCard key={i} d={d} />)}
        </div>
      </section>

      <Divider />

      {/* ── OUTCOMES ─────────────────────────────────────────────────── */}
      <section style={{ padding: "100px 48px", background: ESPRESSO }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <SectionLabel dark>Outcomes</SectionLabel>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, color: CREAM, margin: "16px 0 48px", maxWidth: 500 }}>
            One tool. All the admin.
          </h2>
          <div style={{ marginBottom: 48 }}>
            <ImgSlot
              label="IMAGE 2 — App screens side by side"
              hint="3-up layout: Overview + Projects + Invoice view. OR laptop mockup on shots.so with espresso background. 1440×700px."
              aspectRatio="16/7"
              src=""
              dark
            />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 2 }}>
            {outcomes.map((o, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "32px 28px" }}>
                <p style={{ fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 900, color: RUST, margin: "0 0 12px", letterSpacing: "-0.04em", lineHeight: 1 }}>{o.metric}</p>
                <p style={{ fontSize: 14, color: CREAM, opacity: 0.65, margin: 0, lineHeight: 1.5 }}>{o.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEARNINGS ────────────────────────────────────────────────── */}
      <section style={{ padding: "100px 48px", maxWidth: 960, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 80 }}>
          <div>
            <SectionLabel>Learnings</SectionLabel>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, margin: "16px 0 0" }}>
              What building Deskwork taught me.
            </h2>
          </div>
          <div style={{ paddingTop: 8 }}>
            {learnings.map((l, i) => (
              <div key={i} style={{ display: "flex", gap: 20, alignItems: "flex-start", padding: "24px 0", borderBottom: i < learnings.length - 1 ? "1px solid rgba(26,26,26,0.08)" : "none" }}>
                <span style={{ fontSize: 11, fontWeight: 800, color: RUST, letterSpacing: "0.06em", minWidth: 24, paddingTop: 3 }}>{String(i + 1).padStart(2, "0")}</span>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: "#444", margin: 0 }}>{l}</p>
              </div>
            ))}
            <div style={{ marginTop: 40, background: SAND, borderRadius: 12, padding: "28px 32px" }}>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.4, margin: "0 0 12px" }}>What&apos;s next</p>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555", margin: 0 }}>
                PDF invoice download · Time tracking per project · Recurring contracts · Mobile-optimised view for on-the-go logging
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BACK TO PORTFOLIO ────────────────────────────────────────── */}
      <section style={{ padding: "80px 48px", borderTop: "1px solid rgba(26,26,26,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
        <div>
          <p style={{ fontSize: 12, opacity: 0.4, margin: "0 0 8px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>All projects</p>
          <h3 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.03em", margin: 0 }}>← Back to portfolio</h3>
        </div>
        <a href="/" style={{ background: ESPRESSO, color: CREAM, textDecoration: "none", borderRadius: 6, padding: "16px 32px", fontSize: 15, fontWeight: 600 }}>
          View all work
        </a>
      </section>

    </div>
  );
}
