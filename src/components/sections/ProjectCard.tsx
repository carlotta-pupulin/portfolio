import Link from "next/link";
import Image from "next/image";
import { CaseStudy } from "@/types";
import Tag from "@/components/ui/Tag";

interface ProjectCardProps {
  project: CaseStudy;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block rounded-2xl overflow-hidden bg-white border border-[#E2DFD9] hover:border-[#1A1918]/20 hover:shadow-xl hover:shadow-black/5 transition-all duration-300"
    >
      {/* Thumbnail */}
      <div className="aspect-[16/9] bg-[#EAE7E2] overflow-hidden relative">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
          onError={(e) => {
            // Hide broken image, show placeholder
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Placeholder gradient when no image */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8E5E0] to-[#D5D1CC] flex items-center justify-center">
          <span className="text-4xl font-bold text-[#B8B4AF] select-none">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-lg font-semibold leading-snug group-hover:opacity-70 transition-opacity">
            {project.title}
          </h3>
          <span className="text-sm text-[#7A7772] shrink-0">{project.year}</span>
        </div>
        <p className="text-sm text-[#7A7772] leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </Link>
  );
}
