"use client";

import { useState } from "react";
import Link from "next/link";
import { profile } from "@/data/profile";

const EASE = "cubic-bezier(0.4,0,0.2,1)";
const DUR = "0.35s";
const TRANSITION = `transform ${DUR} ${EASE}, opacity ${DUR} ${EASE}`;

// ─── LogoItem: cognome di default → nome al hover ────────────────────────────

function LogoItem() {
  const [hovered, setHovered] = useState(false);

  const base: React.CSSProperties = {
    position: "absolute",
    fontSize: 13,
    fontWeight: 300,
    letterSpacing: "0.04em",
    color: "#ffffff",
    whiteSpace: "nowrap",
    transition: TRANSITION,
  };

  return (
    <Link
      href="/"
      style={{
        position: "relative",
        height: "100%",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        textDecoration: "none",
        minWidth: 72,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Cognome: visibile di default → scende al hover */}
      <span
        style={{
          ...base,
          transform: hovered ? "translateY(100%)" : "translateY(0)",
          opacity: hovered ? 0 : 1,
        }}
      >
        pupulin
      </span>
      {/* Nome: nascosto (viene dall'alto) → entra al hover */}
      <span
        style={{
          ...base,
          transform: hovered ? "translateY(0)" : "translateY(-100%)",
          opacity: hovered ? 1 : 0,
        }}
      >
        carlotta
      </span>
    </Link>
  );
}

// ─── NavItem: slide verticale al hover ───────────────────────────────────────

function NavItem({
  label,
  href,
  isCV = false,
}: {
  label: string;
  href: string;
  isCV?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  const base: React.CSSProperties = {
    position: "absolute",
    fontSize: 13,
    letterSpacing: "0.04em",
    whiteSpace: "nowrap",
    transition: TRANSITION,
    display: "flex",
    alignItems: "center",
    gap: 4,
  };

  return (
    <a
      href={href}
      target={isCV ? "_blank" : "_self"}
      rel={isCV ? "noopener noreferrer" : undefined}
      style={{
        position: "relative",
        height: "100%",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        textDecoration: "none",
        padding: "0 2px",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Testo default → slide su e scompare */}
      <span
        style={{
          ...base,
          color: isCV ? "rgba(200,240,74,0.7)" : "rgba(255,255,255,0.55)",
          fontWeight: 300,
          transform: hovered ? "translateY(-100%)" : "translateY(0)",
          opacity: hovered ? 0 : 1,
        }}
      >
        {label}
        {isCV && <span style={{ fontSize: 11 }}>↗</span>}
      </span>

      {/* Testo hover → entra dal basso */}
      <span
        style={{
          ...base,
          color: isCV ? "#c8f04a" : "#ffffff",
          fontWeight: isCV ? 500 : 600,
          transform: hovered ? "translateY(0)" : "translateY(100%)",
          opacity: hovered ? 1 : 0,
        }}
      >
        {label}
        {isCV && (
          <span
            style={{
              fontSize: 11,
              display: "inline-block",
              transition: "transform 0.3s ease",
              transform: hovered ? "translate(2px, -2px)" : "translate(0,0)",
            }}
          >
            ↗
          </span>
        )}
      </span>
    </a>
  );
}

// ─── Navbar principale ────────────────────────────────────────────────────────

export default function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(14,16,18,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderRadius: "0 0 8px 8px",
        height: 52,
      }}
    >
      <nav
        className="max-w-6xl mx-auto"
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: 24,
          paddingRight: 24,
        }}
      >
        <LogoItem />

        <div style={{ display: "flex", alignItems: "center", height: "100%", gap: 32 }}>
          <NavItem label="work"    href="/work" />
          <NavItem label="about"   href="/about" />
          <NavItem label="contact" href="/contact" />
          {profile.cvUrl && (
            <NavItem label="cv" href={profile.cvUrl} isCV />
          )}
        </div>
      </nav>
    </header>
  );
}
