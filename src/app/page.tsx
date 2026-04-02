import SnapScrollController from "@/components/SnapScrollController";
import HomepageGrid from "@/components/sections/HomepageGrid";
import { profile } from "@/data/profile";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <SnapScrollController />

      {/* ─── Section 1: Hero ─────────────────────────────────────────────── */}
      <section
        className="relative flex flex-col justify-between bg-[#0e1012]"
        style={{ height: "100dvh", scrollSnapAlign: "start" }}
      >
        {/* Display name */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-10 pt-20">
          <h1 className="leading-none tracking-tighter select-none" style={{ fontSize: "clamp(4rem, 13vw, 13rem)" }}>
            <span
              className="block"
              style={{
                WebkitTextStroke: "1.5px rgba(255,255,255,0.85)",
                color: "transparent",
              }}
            >
              Carlotta
            </span>
            <span className="block" style={{ color: "#c8f04a" }}>
              Pupulin
            </span>
          </h1>
        </div>

        {/* Bottom bar */}
        <div className="px-6 md:px-10 pb-10 flex items-end justify-between gap-6">
          {/* Left: title + tagline */}
          <div className="max-w-md">
            <p className="text-xl md:text-2xl font-bold text-white mb-2">
              {profile.title}
            </p>
            <p className="text-sm text-white/50 leading-relaxed">
              {profile.tagline}
            </p>
          </div>

          {/* Right: status + CTA */}
          <div className="flex flex-col items-end gap-4 shrink-0">
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: "#c8f04a" }}
              />
              <span className="text-sm text-white/60">
                Open to remote &amp; hybrid — Basel, CH
              </span>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-[#0e1012] hover:opacity-80 transition-opacity"
              style={{ background: "#c8f04a" }}
            >
              See my work ↓
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none select-none">
          <div className="w-px h-6 bg-white/20" />
          <span className="text-[10px] font-bold tracking-[0.2em] text-white/25 uppercase">
            Scroll
          </span>
        </div>
      </section>

      {/* ─── Section 2: Work Grid ─────────────────────────────────────────── */}
      <section
        className="flex flex-col justify-center bg-[#0e1012]"
        style={{ height: "100dvh", scrollSnapAlign: "start" }}
      >
        <div className="w-full max-w-[1100px] mx-auto px-6 py-8">
          <HomepageGrid />
        </div>
      </section>
    </>
  );
}
