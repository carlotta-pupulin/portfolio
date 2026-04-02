import { Metadata } from "next";
import { skills, skillCategories } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills",
  description: "Design skills, research methods, and tools.",
};

export default function SkillsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-28 pb-20">
      <div className="mb-14">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/30 mb-4">
          Expertise
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
          Skills & Tools
        </h1>
        <p className="text-white/50 leading-relaxed max-w-lg">
          How I think, what I use, and how I work with teams.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map(({ key, label }) => {
          const categorySkills = skills.filter((s) => s.category === key);
          return (
            <div
              key={key}
              className="rounded-xl border p-6"
              style={{
                borderColor: "rgba(255,255,255,0.06)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <h2 className="text-xs font-bold tracking-[0.2em] uppercase mb-5" style={{ color: "#c8f04a" }}>
                {label}
              </h2>
              <ul className="space-y-3">
                {categorySkills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center gap-3 text-sm text-white/70"
                  >
                    <span
                      className="w-1 h-1 rounded-full shrink-0"
                      style={{ background: "rgba(200,240,74,0.5)" }}
                    />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
