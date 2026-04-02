"use client";

import { useEffect, useRef } from "react";

interface AnimatedCanvasProps {
  c1: number[];
  c2: number[];
  speed: number;
}

export default function AnimatedCanvas({ c1, c2, speed }: AnimatedCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number | undefined>(undefined);
  const tRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth || 300;
      canvas.height = canvas.offsetHeight || 200;
    }

    function draw() {
      if (!canvas || !ctx) return;
      resize();
      const w = canvas.width;
      const h = canvas.height;
      const t = tRef.current;

      ctx.fillStyle = `rgb(${c2.join(",")})`;
      ctx.fillRect(0, 0, w, h);

      const x1 = w * (0.3 + 0.4 * Math.sin(t * speed));
      const y1 = h * (0.3 + 0.3 * Math.cos(t * speed * 0.7));
      const g1 = ctx.createRadialGradient(x1, y1, 0, x1, y1, w * 0.65);
      g1.addColorStop(0, `rgba(${c1.join(",")},0.9)`);
      g1.addColorStop(1, `rgba(${c2.join(",")},0)`);
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, w, h);

      const x2 = w * (0.7 + 0.25 * Math.cos(t * speed * 1.3));
      const y2 = h * (0.65 + 0.25 * Math.sin(t * speed * 0.9));
      const g2 = ctx.createRadialGradient(x2, y2, 0, x2, y2, w * 0.45);
      g2.addColorStop(
        0,
        `rgba(${c1.map((v) => Math.min(255, v + 50)).join(",")},0.5)`
      );
      g2.addColorStop(1, `rgba(${c2.join(",")},0)`);
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, w, h);

      tRef.current += 0.012;
      animRef.current = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [c1, c2, speed]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}
