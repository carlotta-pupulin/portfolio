import { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "A selection of product design case studies.",
};

export default function WorkPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-28 pb-20">
      <div className="mb-14">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/30 mb-4">
          Portfolio
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
          Selected Work
        </h1>
        <p className="text-white/50 leading-relaxed max-w-lg">
          End-to-end product design — from research to shipped experience. Each project tells a full story.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group relative rounded-xl overflow-hidden border border-white/[0.06] hover:border-white/20 transition-colors"
            style={{ background: project.cardBg, minHeight: 280 }}
          >
            {/* Pill */}
            <div className="absolute top-4 left-4 z-10">
              <span
                className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border"
                style={{ color: "rgba(200,240,74,0.9)", borderColor: "rgba(200,240,74,0.4)" }}
              >
                {project.pill}
              </span>
            </div>
            {/* Year */}
            <div
              className="absolute top-4 right-4 z-10 text-[10px] font-bold tracking-wider"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              {project.year}
            </div>

            {/* Bottom content */}
            <div
              className="absolute bottom-0 left-0 right-0 p-5"
              style={{
                background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
              }}
            >
              <h2 className="text-xl font-bold text-white leading-tight mb-2 group-hover:opacity-80 transition-opacity">
                {project.title}
              </h2>
              <p className="text-sm text-white/50 leading-relaxed mb-3 line-clamp-2">
                {project.description}
              </p>
              <p className="text-xs text-white/30">{project.tags.join(" · ")}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
