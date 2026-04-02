import { CaseStudy } from "@/types";

export const projects: CaseStudy[] = [
  {
    slug: "looped",
    title: "Looped – P2P instrument rental",
    subtitle: "A platform built around the thing that makes strangers trust each other.",
    description:
      "A P2P instrument rental platform — designed around the one thing that makes strangers trust each other.",
    year: "2024–2025",
    tags: ["Product Design", "Research", "Marketplace"],
    role: "Lead Product Designer",
    duration: "Ongoing",
    tools: ["Figma", "Maze", "Notion", "FigJam"],
    pill: "Live product",
    cardBg: "#0a0a14",
    canvasColors: { c1: [60, 40, 160], c2: [10, 8, 50], speed: 0.4 },
    thumbnail: "/images/work/looped/thumbnail.jpg",
    hero: "/images/work/looped/hero.jpg",
    featured: true,
    overview:
      "Looped is a peer-to-peer instrument rental platform that connects musicians who own instruments with those who need them. The core design challenge was trust — how do you make a stranger feel safe enough to hand over a €2,000 violin to someone they've never met?",
    sections: [
      {
        title: "The Problem",
        content:
          "Instrument ownership is expensive, and most instruments spend most of their time in a case. At the same time, students, hobbyists, and touring musicians often need access to instruments they can't afford to buy. The market for short-term rentals exists, but it's fragmented, expensive, and largely trust-free.",
      },
      {
        title: "Research & Discovery",
        content:
          "We ran 18 in-depth interviews with instrument owners and renters. The central finding: people don't rent to strangers because they fear damage — but they will rent to someone a friend vouches for. The platform's design had to make this implicit social trust mechanism explicit and scalable.",
      },
      {
        title: "Design Process",
        content:
          "I designed the core trust loop: a profile system centred on community vouching, a damage resolution flow that removed ambiguity, and an onboarding that moved quickly from 'stranger' to 'verified community member'. Multiple prototypes, tested with real musicians in Basel and Milan.",
      },
      {
        title: "Final Solution",
        content:
          "The live product features vouching, instrument insurance integration, a real-time availability calendar, and a messaging system designed to feel personal rather than transactional. The interface is intentionally warm — dark, handcrafted aesthetics to reflect the world of music.",
      },
    ],
    outcome:
      "Looped launched in Basel in early 2025. Within three months: 200+ listings, €18k in rental value transacted, zero damage disputes. The vouching system became the most-mentioned feature in post-rental reviews.",
  },
  {
    slug: "deskwork",
    title: "Deskwork – Freelance tools for musicians",
    subtitle: "A fully functional invoicing and project management tool — built for the way musicians actually work.",
    description:
      "A fully functional invoicing and project management tool — built and shipped for the way musicians actually work.",
    year: "2026",
    tags: ["Product Design", "SaaS", "Built & Shipped"],
    role: "Product Designer & Co-founder",
    duration: "4 months",
    tools: ["Figma", "Linear", "Notion"],
    pill: "Functional tool",
    cardBg: "#060d0a",
    canvasColors: { c1: [20, 100, 60], c2: [4, 30, 18], speed: 0.3 },
    thumbnail: "/images/work/deskwork/thumbnail.jpg",
    hero: "/images/work/deskwork/hero.jpg",
    featured: true,
    overview:
      "Freelance musicians are creative professionals who happen to run small businesses — but most business tools are built for agencies, not artists. Deskwork is a focused invoicing and project management tool designed from the ground up for independent musicians.",
    sections: [
      {
        title: "The Problem",
        content:
          "Musicians who teach, perform, and record professionally spend hours every month on admin work that existing tools make unnecessarily complex. Invoice software designed for agencies, project managers built for teams — nothing fits how a solo musician actually operates.",
      },
      {
        title: "Research & Discovery",
        content:
          "Interviews with 24 freelance musicians across Europe revealed consistent patterns: the biggest pain points were creating invoices with the right VAT rates, tracking which clients owed money, and managing recurring gigs vs. one-off bookings. Most were using Excel or badly adapted generic tools.",
      },
      {
        title: "Design Process",
        content:
          "We stripped invoicing to its minimum viable form for musicians: client list, invoice creation, payment tracking, PDF export. No enterprise features, no bloat. Key decision: built the tax rate handling specifically for the freelance musician context (service type, country, self-employment status).",
      },
      {
        title: "Final Solution",
        content:
          "Deskwork shipped as a fully functional web app. Clean, dark UI. Invoice creation in under 60 seconds. Automatic follow-up reminders. Export to PDF in one click. The interface feels like a tool made by someone who knows what it's like to invoice a wedding gig at midnight.",
      },
    ],
    outcome:
      "Shipped in 4 months. 150+ freelance musicians signed up in the first month. Average invoice creation time dropped from 12 minutes (previous tools) to 2 minutes. 94% of users rated the onboarding as 'effortless' in post-signup surveys.",
  },
  {
    slug: "strativari",
    title: "StraTivari – Violins from recycled plastic",
    subtitle: "A grant-funded social enterprise bringing instruments into Turin schools — from material to brand.",
    description:
      "A grant-funded social enterprise bringing instruments into Turin schools — designed from material to brand.",
    year: "2022–2023",
    tags: ["Brand Design", "UX/UI", "Social Impact"],
    role: "Lead Designer & Co-founder",
    duration: "14 months",
    tools: ["Figma", "Miro", "Adobe CC"],
    pill: "Grant funded",
    cardBg: "#100a04",
    canvasColors: { c1: [150, 85, 20], c2: [50, 25, 5], speed: 0.5 },
    thumbnail: "/images/work/strativari/thumbnail.jpg",
    hero: "/images/work/strativari/hero.jpg",
    featured: false,
    overview:
      "StraTivari was a grant-funded social enterprise with a single mission: put instruments in the hands of children in Turin's public schools by manufacturing violins from recycled plastic. I led design across every layer — from the object's material identity to the brand, website, and pitch decks.",
    sections: [
      {
        title: "The Problem",
        content:
          "Music education in Italian public schools is severely underfunded. Most schools can't afford instruments. At the same time, plastic waste from Turin's recycling chain represented an untapped material opportunity. We asked: what if we could solve both problems at once?",
      },
      {
        title: "Research & Discovery",
        content:
          "Months of materials research, collaboration with a luthier, and prototyping with recycled HDPE plastic. The acoustic challenge was significant — plastic doesn't behave like spruce. We ran acoustic tests, adjusted geometry, and arrived at a playable instrument with a distinctive matte texture that became our aesthetic signature.",
      },
      {
        title: "Design Process",
        content:
          "I built the brand from the material: the recycled texture inspired the visual identity's grain pattern. The name 'StraTivari' plays on Stradivari + strati (layers) — a nod to both tradition and the layered material composition. Website, pitch deck, grant applications, and product documentation all designed to communicate credibility and humanity simultaneously.",
      },
      {
        title: "Final Solution",
        content:
          "A complete brand system: logo, visual identity, product photography, website, grant-ready documentation. 200 instruments manufactured and distributed to 8 Turin schools. The pitch deck secured two rounds of public funding.",
      },
    ],
    outcome:
      "StraTivari received €85k in grant funding across two rounds. 200 violins distributed. The project was featured in La Stampa and selected for a social innovation showcase in Brussels.",
  },
];

export function getProjectBySlug(slug: string): CaseStudy | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): CaseStudy[] {
  return projects.filter((p) => p.featured);
}
