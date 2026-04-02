import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";
import LoopedCaseStudy from "@/components/case-studies/LoopedCaseStudy";
import StrativariCaseStudy from "@/components/case-studies/StrativariCaseStudy";
import DeskworkCaseStudy from "@/components/case-studies/DeskworkCaseStudy";

type Props = { params: Promise<{ slug: string }> };

const caseStudyMap: Record<string, React.ComponentType> = {
  looped: LoopedCaseStudy,
  strativari: StrativariCaseStudy,
  deskwork: DeskworkCaseStudy,
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
  const Component = caseStudyMap[slug];
  if (!Component) notFound();
  return <Component />;
}
