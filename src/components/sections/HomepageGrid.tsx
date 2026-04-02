"use client";

import { useEffect, useRef, useState, CSSProperties } from "react";
import AnimatedCanvas from "@/components/canvas/AnimatedCanvas";
import WordsCard from "@/components/sections/WordsCard";
import { projects } from "@/data/projects";
import { words } from "@/data/profile";

const LIME = "#c8f04a";

// ─── ProjectCard ──────────────────────────────────────────────────────────────

function ProjectCard({
  pill,
  title,
  description,
  tags,
  year,
  videoSrc,
  canvasColors,
  bgColor,
  isSliver,
  isHovered,
  href,
  isMobile = false,
  style,
  onMouseEnter,
  onMouseLeave,
}: {
  pill: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  videoSrc?: string;
  canvasColors: { c1: number[]; c2: number[]; speed: number };
  bgColor: string;
  isSliver: boolean;
  isHovered: boolean;
  href: string;
  isMobile?: boolean;
  style: CSSProperties;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch(() => {});
      }
    }
  }, [isHovered]);

  const handleClick = () => {
    window.location.href = href;
  };

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleClick}
      style={{
        ...style,
        background: isSliver ? LIME : bgColor,
        border: "0.5px solid rgba(255,255,255,0.06)",
        borderRadius: style.borderRadius,
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        flexShrink: 0,
        transition:
          "width 0.5s cubic-bezier(0.4,0,0.2,1), height 0.5s cubic-bezier(0.4,0,0.2,1), background-color 0.4s ease",
      }}
    >
      {/* Video / canvas background */}
      {!isSliver && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            overflow: "hidden",
          }}
        >
          {videoSrc ? (
            <video
              ref={videoRef}
              src={videoSrc}
              loop
              muted
              playsInline
              autoPlay
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: isHovered
                  ? "blur(0px) brightness(1)"
                  : "blur(4px) brightness(0.6)",
                transform: isHovered ? "scale(1)" : "scale(1.06)",
                transition: "filter 0.55s ease, transform 0.55s ease",
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                filter: isHovered
                  ? "blur(0px) brightness(1)"
                  : "blur(4px) brightness(0.6)",
                transform: isHovered ? "scale(1)" : "scale(1.06)",
                transition: "filter 0.55s ease, transform 0.55s ease",
              }}
            >
              <AnimatedCanvas
                c1={canvasColors.c1}
                c2={canvasColors.c2}
                speed={canvasColors.speed}
              />
            </div>
          )}
        </div>
      )}

      {/* Dark overlay */}
      {!isSliver && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background: "rgba(0,0,0,0.28)",
            opacity: isHovered ? 0 : 1,
            transition: "opacity 0.5s ease",
          }}
        />
      )}

      {/* Year — desktop only */}
      {!isSliver && !isMobile && (
        <div
          style={{
            position: "absolute",
            top: 14,
            right: 16,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.07em",
            zIndex: 3,
            color: "rgba(255,255,255,0.35)",
            fontFamily: "sans-serif",
          }}
        >
          {year}
        </div>
      )}

      {/* Card bottom content */}
      {!isSliver && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 3,
            padding: isMobile ? 16 : 20,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 50%, transparent 100%)",
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? 6 : 10,
          }}
        >
          {/* Pill */}
          <div
            style={{
              display: "inline-block",
              fontSize: isMobile ? 9 : 10,
              fontWeight: 900,
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              color: "rgba(200,240,74,0.9)",
              border: "0.5px solid rgba(200,240,74,0.4)",
              borderRadius: 20,
              padding: isMobile ? "2px 7px" : "3px 9px",
              alignSelf: "flex-start",
              fontFamily: "sans-serif",
            }}
          >
            {pill}
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: isMobile ? "1rem" : "1.25rem",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              fontFamily: "sans-serif",
            }}
          >
            {title}
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: isMobile ? 12 : 13,
              fontWeight: 300,
              color: "rgba(255,255,255,0.55)",
              lineHeight: isMobile ? 1.5 : 1.65,
              width: "100%",
              fontFamily: "sans-serif",
            }}
          >
            {description}
          </div>

          {/* Tags + year */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 8,
            }}
          >
            <div
              style={{
                fontSize: isMobile ? 11 : 12,
                fontWeight: 400,
                color: "rgba(255,255,255,0.35)",
                letterSpacing: "0.01em",
                fontFamily: "sans-serif",
                whiteSpace: "nowrap" as const,
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {tags.join(" · ")}
            </div>
            {isMobile && (
              <span
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "0.07em",
                  color: "rgba(255,255,255,0.3)",
                  fontFamily: "sans-serif",
                  flexShrink: 0,
                }}
              >
                {year}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main HomepageGrid ────────────────────────────────────────────────────────

const GAP = 8;
const SLIVER = 28;
const BORDER_RADIUS = 10;
const ASPECT_RATIO = 16 / 9;

export default function HomepageGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ total: 600, rowH: 200 });
  const [hovered, setHovered] = useState<string | null>(null);

  const [looped, strat, desk] = projects;

  useEffect(() => {
    function update() {
      if (!containerRef.current) return;
      const total = containerRef.current.offsetWidth;
      const totalH = total / ASPECT_RATIO;
      const rowH = (totalH - GAP) / 2;
      setDims({ total, rowH });
    }
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const { total, rowH } = dims;
  const wideW = ((total - GAP) * 3) / 5;
  const narrowW = ((total - GAP) * 2) / 5;
  const bigH = rowH * 2 - SLIVER;

  type Sizes = {
    loopedW: number; loopedH: number;
    wordsW: number;  wordsH: number;
    deskW: number;   deskH: number;
    stratW: number;  stratH: number;
    topH: number;    botH: number;
  };

  function getSizes(): Sizes {
    switch (hovered) {
      case "looped":
        return {
          loopedW: total - GAP - SLIVER, loopedH: bigH,
          wordsW: SLIVER,                wordsH: bigH,
          deskW: narrowW,                deskH: SLIVER,
          stratW: wideW,                 stratH: SLIVER,
          topH: bigH, botH: SLIVER,
        };
      case "desk":
        return {
          loopedW: total - GAP - narrowW, loopedH: SLIVER,
          wordsW: narrowW,                wordsH: SLIVER,
          deskW: total - GAP - SLIVER,    deskH: bigH,
          stratW: SLIVER,                 stratH: bigH,
          topH: SLIVER, botH: bigH,
        };
      case "strat":
        return {
          loopedW: total - GAP - narrowW, loopedH: SLIVER,
          wordsW: narrowW,                wordsH: SLIVER,
          deskW: SLIVER,                  deskH: bigH,
          stratW: total - GAP - SLIVER,   stratH: bigH,
          topH: SLIVER, botH: bigH,
        };
      default:
        return {
          loopedW: wideW,  loopedH: rowH,
          wordsW: narrowW, wordsH: rowH,
          deskW: narrowW,  deskH: rowH,
          stratW: wideW,   stratH: rowH,
          topH: rowH, botH: rowH,
        };
    }
  }

  const s = getSizes();
  const totalHeight = rowH * 2 + GAP;
  const isMobile = total < 810;
  const mobileCardH = total < 600 ? total * (2 / 3) : total * (9 / 16);

  const loopedIsSliver = hovered !== null && hovered !== "looped" && hovered !== "words";
  const wordsIsSliver  = hovered === "looped";
  const deskIsSliver   = hovered !== null && hovered !== "desk" && hovered !== "words";
  const stratIsSliver  = hovered !== null && hovered !== "strat" && hovered !== "words";

  // ── Mobile ──────────────────────────────────────────────────────────────────
  if (isMobile) {
    return (
      <div
        ref={containerRef}
        style={{ width: "100%", display: "flex", flexDirection: "column", gap: GAP }}
      >
        <ProjectCard
          pill={looped.pill}
          title={looped.title}
          description={looped.description}
          tags={looped.tags}
          year={looped.year}
          canvasColors={looped.canvasColors}
          bgColor={looped.cardBg}
          isSliver={false}
          isHovered={true}
          isMobile={true}
          href={`/work/${looped.slug}`}
          style={{ width: total, height: mobileCardH, borderRadius: BORDER_RADIUS }}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
        />
        <WordsCard
          label="Carlotta Pupulin is a"
          name="Carlotta Pupulin"
          location="Basel, Switzerland"
          words={words}
          isSliver={false}
          isHovered={true}
          isMobile={true}
          style={{ width: total, borderRadius: BORDER_RADIUS }}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
        />
        <ProjectCard
          pill={strat.pill}
          title={strat.title}
          description={strat.description}
          tags={strat.tags}
          year={strat.year}
          canvasColors={strat.canvasColors}
          bgColor={strat.cardBg}
          isSliver={false}
          isHovered={true}
          isMobile={true}
          href={`/work/${strat.slug}`}
          style={{ width: total, height: mobileCardH, borderRadius: BORDER_RADIUS }}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
        />
        <ProjectCard
          pill={desk.pill}
          title={desk.title}
          description={desk.description}
          tags={desk.tags}
          year={desk.year}
          canvasColors={desk.canvasColors}
          bgColor={desk.cardBg}
          isSliver={false}
          isHovered={true}
          isMobile={true}
          href={`/work/${desk.slug}`}
          style={{ width: total, height: mobileCardH, borderRadius: BORDER_RADIUS }}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
        />
      </div>
    );
  }

  // ── Desktop ─────────────────────────────────────────────────────────────────
  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: totalHeight,
        display: "flex",
        flexDirection: "column",
        gap: GAP,
        transition: "height 0.5s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      {/* Row top */}
      <div
        style={{
          display: "flex",
          gap: GAP,
          height: s.topH,
          overflow: "hidden",
          flexShrink: 0,
          transition: "height 0.5s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <ProjectCard
          pill={looped.pill}
          title={looped.title}
          description={looped.description}
          tags={looped.tags}
          year={looped.year}
          canvasColors={looped.canvasColors}
          bgColor={looped.cardBg}
          isSliver={loopedIsSliver}
          isHovered={hovered === "looped"}
          href={`/work/${looped.slug}`}
          style={{ width: s.loopedW, height: s.loopedH, borderRadius: BORDER_RADIUS }}
          onMouseEnter={() => setHovered("looped")}
          onMouseLeave={() => setHovered(null)}
        />
        <WordsCard
          label="Carlotta Pupulin is a"
          name="Carlotta Pupulin"
          location="Basel, Switzerland"
          words={words}
          isSliver={wordsIsSliver}
          isHovered={hovered === "words"}
          style={{ width: s.wordsW, height: s.wordsH, borderRadius: BORDER_RADIUS }}
          onMouseEnter={() => setHovered("words")}
          onMouseLeave={() => setHovered(null)}
        />
      </div>

      {/* Row bottom */}
      <div
        style={{
          display: "flex",
          gap: GAP,
          height: s.botH,
          overflow: "hidden",
          flexShrink: 0,
          transition: "height 0.5s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <ProjectCard
          pill={desk.pill}
          title={desk.title}
          description={desk.description}
          tags={desk.tags}
          year={desk.year}
          canvasColors={desk.canvasColors}
          bgColor={desk.cardBg}
          isSliver={deskIsSliver}
          isHovered={hovered === "desk"}
          href={`/work/${desk.slug}`}
          style={{ width: s.deskW, height: s.deskH, borderRadius: BORDER_RADIUS }}
          onMouseEnter={() => setHovered("desk")}
          onMouseLeave={() => setHovered(null)}
        />
        <ProjectCard
          pill={strat.pill}
          title={strat.title}
          description={strat.description}
          tags={strat.tags}
          year={strat.year}
          canvasColors={strat.canvasColors}
          bgColor={strat.cardBg}
          isSliver={stratIsSliver}
          isHovered={hovered === "strat"}
          href={`/work/${strat.slug}`}
          style={{ width: s.stratW, height: s.stratH, borderRadius: BORDER_RADIUS }}
          onMouseEnter={() => setHovered("strat")}
          onMouseLeave={() => setHovered(null)}
        />
      </div>
    </div>
  );
}
