export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  year: string;
  tags: string[];
  role: string;
  duration: string;
  team?: string;
  tools: string[];
  pill: string;
  cardBg: string;
  canvasColors: { c1: number[]; c2: number[]; speed: number };
  thumbnail: string;
  hero: string;
  featured: boolean;
  overview: string;
  sections: CaseStudySection[];
  outcome?: string;
  link?: string;
}

export interface CaseStudySection {
  title: string;
  content: string;
  images?: string[];
}

export interface Skill {
  name: string;
  category: "design" | "research" | "tools" | "soft";
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string[];
  location: string;
  email: string;
  linkedin?: string;
  behance?: string;
  dribbble?: string;
  cvUrl?: string;
}
