import { Skill } from "@/types";

export const skills: Skill[] = [
  // Design
  { name: "User Interface Design", category: "design" },
  { name: "Interaction Design", category: "design" },
  { name: "Visual Design", category: "design" },
  { name: "Prototyping", category: "design" },
  { name: "Design Systems", category: "design" },
  { name: "Responsive Design", category: "design" },

  // Research
  { name: "User Research", category: "research" },
  { name: "Usability Testing", category: "research" },
  { name: "User Interviews", category: "research" },
  { name: "Competitive Analysis", category: "research" },
  { name: "Journey Mapping", category: "research" },
  { name: "Accessibility", category: "research" },

  // Tools
  { name: "Figma", category: "tools" },
  { name: "FigJam", category: "tools" },
  { name: "Notion", category: "tools" },
  { name: "Linear", category: "tools" },
  { name: "Maze", category: "tools" },
  { name: "Miro", category: "tools" },
  { name: "Lottie / After Effects", category: "tools" },
  { name: "Framer", category: "tools" },

  // Soft skills
  { name: "Cross-functional collaboration", category: "soft" },
  { name: "Stakeholder communication", category: "soft" },
  { name: "Design critique", category: "soft" },
  { name: "Problem framing", category: "soft" },
];

export const skillCategories = [
  { key: "design" as const, label: "Design" },
  { key: "research" as const, label: "Research & Strategy" },
  { key: "tools" as const, label: "Tools" },
  { key: "soft" as const, label: "Ways of Working" },
];
