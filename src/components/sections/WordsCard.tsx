"use client";

import { useEffect, useState, CSSProperties } from "react";

const LIME = "#c8f04a";
const LINE_HEIGHT = 20 * 1.1;

interface WordsCardProps {
  label: string;
  name: string;
  location: string;
  words: string[];
  isSliver: boolean;
  isHovered: boolean;
  isMobile?: boolean;
  style: CSSProperties;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function WordsCard({
  label,
  name,
  location,
  words,
  isSliver,
  isHovered,
  isMobile = false,
  style,
  onMouseEnter,
  onMouseLeave,
}: WordsCardProps) {
  const [current, setCurrent] = useState(0);
  const [exiting, setExiting] = useState<number | null>(null);
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setExiting(current);
      setTimeout(() => setExiting(null), 400);
      const next = (current + 1) % words.length;
      setCurrent(next);
      setActiveDot(next);
    }, 2600);
    return () => clearInterval(interval);
  }, [current, words.length]);

  const bgColor = isSliver ? LIME : "#0e1012";

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        ...style,
        background: bgColor,
        border: isSliver ? "none" : `0.5px solid rgba(200,240,74,0.18)`,
        borderRadius: style.borderRadius,
        overflow: "hidden",
        position: "relative",
        cursor: "default",
        height: isMobile ? "auto" : style.height,
        transition:
          "width 0.5s cubic-bezier(0.4,0,0.2,1), height 0.5s cubic-bezier(0.4,0,0.2,1), background-color 0.4s ease",
        flexShrink: 0,
      }}
    >
      {/* corner accent */}
      {!isSliver && (
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 36,
            height: 36,
            borderTop: `0.5px solid rgba(200,240,74,0.3)`,
            borderRight: `0.5px solid rgba(200,240,74,0.3)`,
            borderRadius: "0 10px 0 0",
            opacity: isHovered ? 0 : 1,
            transition: "opacity 0.4s ease",
            zIndex: 3,
          }}
        />
      )}

      {!isSliver && (
        <div
          style={{
            position: isMobile ? "relative" : "absolute",
            inset: isMobile ? undefined : 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "18px 16px 16px",
            overflow: "hidden",
            zIndex: 2,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase" as const,
                color: "rgba(200,240,74,0.5)",
                marginBottom: 10,
                fontFamily: "sans-serif",
              }}
            >
              {label}
            </div>

            {/* Word container */}
            <div style={{ position: "relative", height: 72, overflow: "visible" }}>
              {words.map((word, i) => {
                const visible = i === current;
                const exit = i === exiting;
                return (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      color: word === "remote-friendly" ? LIME : "#fff",
                      lineHeight: 1.1,
                      letterSpacing: "-0.03em",
                      whiteSpace: "nowrap" as const,
                      fontFamily: "sans-serif",
                      opacity: visible ? 1 : exit ? 0 : 0,
                      transform: visible
                        ? "translateY(0)"
                        : exit
                          ? "translateY(-8px)"
                          : "translateY(10px)",
                      transition: "opacity 0.35s ease, transform 0.35s ease",
                    }}
                  >
                    {word}
                  </div>
                );
              })}
              {/* Cursor */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: LINE_HEIGHT,
                  width: 2,
                  height: 20,
                  background: LIME,
                  borderRadius: 1,
                  transition: "top 0.35s ease",
                  animation: "blink 1s step-end infinite",
                }}
              />
            </div>
          </div>

          {/* Bottom info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                color: "rgba(255,255,255,0.7)",
                fontFamily: "sans-serif",
              }}
            >
              {name}
            </div>
            <div
              style={{
                fontSize: 10,
                fontWeight: 400,
                color: "rgba(255,255,255,0.25)",
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
                fontFamily: "sans-serif",
              }}
            >
              {location}
            </div>
            {/* Dots */}
            <div
              style={{
                display: "flex",
                gap: 4,
                marginTop: 10,
                flexWrap: "wrap" as const,
              }}
            >
              {words.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: i === activeDot ? LIME : "rgba(255,255,255,0.12)",
                    transition: "background 0.3s",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Blur overlay */}
      {!isSliver && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 4,
            backdropFilter: isHovered ? "blur(0px)" : "blur(3px)",
            WebkitBackdropFilter: isHovered ? "blur(0px)" : "blur(3px)",
            background: isHovered ? "rgba(14,16,18,0)" : "rgba(14,16,18,0.25)",
            transition: "backdrop-filter 0.4s ease, background 0.4s ease",
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
}
