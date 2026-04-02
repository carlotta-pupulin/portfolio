import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 pt-28 pb-24">
      {/* Back */}
      <Link
        href="/work"
        className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mb-10"
      >
        ← All projects
      </Link>

      {/* Header */}
      <header className="mb-10">
        <span
          className="inline-block text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border mb-5"
          style={{ color: "rgba(200,240,74,0.9)", borderColor: "rgba(200,240,74,0.4)" }}
        >
          {project.pill}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 leading-tight">
          {project.title}
        </h1>
        <p className="text-lg text-white/50 leading-relaxed">{project.subtitle}</p>
      </header>

      {/* Hero placeholder */}
      <div
        className="rounded-xl overflow-hidden mb-12 flex items-center justify-center"
        style={{ background: project.cardBg, aspectRatio: "16/9" }}
      >
        <span
          className="text-8xl font-black select-none"
          style={{ color: "rgba(255,255,255,0.05)" }}
        >
          {project.title.charAt(0)}
        </span>
      </div>

      {/* Meta */}
      <div
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-xl border p-5 mb-12"
        style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
      >
        <div>
          <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Role</p>
          <p className="text-sm font-medium">{project.role}</p>
        </div>
        <div>
          <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Year</p>
          <p className="text-sm font-medium">{project.year}</p>
        </div>
        <div>
          <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Duration</p>
          <p className="text-sm font-medium">{project.duration}</p>
        </div>
        <div>
          <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Tools</p>
          <p className="text-sm font-medium">{project.tools.join(", ")}</p>
        </div>
      </div>

      {/* Overview */}
      <div className="mb-12">
        <h2 className="text-xl font-bold mb-4">Overview</h2>
        <p className="text-white/60 leading-relaxed">{project.overview}</p>
      </div>

      {/* Sections */}
      {project.sections.map((section, i) => (
        <section key={i} className="mb-12">
          <h2 className="text-xl font-bold mb-4">{section.title}</h2>
          <p className="text-white/60 leading-relaxed">{section.content}</p>
        </section>
      ))}

      {/* Outcome */}
      {project.outcome && (
        <div
          className="rounded-xl p-8 mb-12 border"
          style={{
            background: "rgba(200,240,74,0.04)",
            borderColor: "rgba(200,240,74,0.15)",
          }}
        >
          <h2 className="text-lg font-bold mb-3" style={{ color: "#c8f04a" }}>
            Outcome
          </h2>
          <p className="text-white/60 leading-relaxed">{project.outcome}</p>
        </div>
      )}

      {/* Footer nav */}
      <div
        className="flex items-center justify-between pt-8 border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <Link
          href="/work"
          className="text-sm text-white/40 hover:text-white transition-colors"
        >
          ← All projects
        </Link>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:opacity-60 transition-opacity"
            style={{ color: "#c8f04a" }}
          >
            View live project →
          </a>
        )}
      </div>
    </article>
  );
}
