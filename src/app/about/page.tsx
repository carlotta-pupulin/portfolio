import { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description: `About ${profile.name}, product designer based in Basel.`,
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-28 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
        {/* Text */}
        <div>
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/30 mb-4">
            About
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
            {profile.name}
          </h1>

          <div className="space-y-5 mb-10">
            {profile.bio.map((paragraph, i) => (
              <p key={i} className="text-white/60 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center h-11 px-6 rounded-full text-sm font-semibold text-[#0e1012] hover:opacity-80 transition-opacity"
              style={{ background: "#c8f04a" }}
            >
              Say hello
            </a>
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-11 px-6 rounded-full text-sm font-medium border border-white/10 hover:border-white/30 transition-colors"
              >
                LinkedIn ↗
              </a>
            )}
          </div>
        </div>

        {/* Info column */}
        <div className="space-y-8">
          {/* Avatar placeholder */}
          <div
            className="aspect-[4/5] rounded-2xl flex items-center justify-center overflow-hidden"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <span
              className="text-7xl font-black select-none"
              style={{ color: "rgba(200,240,74,0.15)" }}
            >
              CP
            </span>
          </div>

          {/* Info rows */}
          <div className="space-y-0">
            {[
              { label: "Based in", value: profile.location },
              { label: "Role", value: profile.title },
              { label: "Availability", value: "Open to remote & hybrid" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex items-center justify-between py-3.5 border-b"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              >
                <span className="text-sm text-white/40">{label}</span>
                <span className="text-sm font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Work CTA */}
      <div
        className="mt-20 pt-12 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div>
          <h2 className="text-xl font-bold mb-1.5">Curious about my work?</h2>
          <p className="text-sm text-white/40">Explore the projects I&apos;ve designed and shipped.</p>
        </div>
        <Link
          href="/work"
          className="inline-flex items-center justify-center h-11 px-6 rounded-full text-sm font-medium border border-white/10 hover:border-white/30 transition-colors shrink-0"
        >
          See my work →
        </Link>
      </div>
    </div>
  );
}
