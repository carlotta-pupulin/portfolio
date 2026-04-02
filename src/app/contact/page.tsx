import { Metadata } from "next";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Carlotta Pupulin.",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 pt-28 pb-20">
      <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/30 mb-4">
        Contact
      </p>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 leading-tight">
        Let&apos;s work together
      </h1>
      <p className="text-white/50 leading-relaxed mb-12 max-w-md">
        I&apos;m open to full-time roles, freelance projects, or just a conversation
        about design. Based in Basel, open to remote &amp; hybrid.
      </p>

      <div className="space-y-4">
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center justify-between w-full rounded-xl border p-5 hover:border-white/20 transition-colors group"
          style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
        >
          <div>
            <p className="text-xs text-white/30 uppercase tracking-widest mb-1">Email</p>
            <p className="font-medium group-hover:opacity-70 transition-opacity">{profile.email}</p>
          </div>
          <span className="text-white/30 group-hover:text-white transition-colors text-xl">↗</span>
        </a>

        {profile.linkedin && (
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full rounded-xl border p-5 hover:border-white/20 transition-colors group"
            style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
          >
            <div>
              <p className="text-xs text-white/30 uppercase tracking-widest mb-1">LinkedIn</p>
              <p className="font-medium group-hover:opacity-70 transition-opacity">
                {profile.linkedin.replace("https://", "")}
              </p>
            </div>
            <span className="text-white/30 group-hover:text-white transition-colors text-xl">↗</span>
          </a>
        )}
      </div>
    </div>
  );
}
