"use client";

import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  targetAlpha: number;
  twinkleSpeed: number;
  vx: number;
  vy: number;
  color: string;
}

const STAR_COLORS = ["#ffffff", "#e0f7ff", "#b9e6ff", "#d4c8ff", "#a3e5ff"];

export default function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Responsive star count
    const starCount = Math.min(180, Math.floor((width * height) / 8000));
    const stars: Star[] = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.4 + 0.3,
        alpha: Math.random() * 0.7 + 0.2,
        targetAlpha: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.015 + 0.005,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    let isVisible = true;
    const handleVisibility = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibility);

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Render stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        if (!prefersReducedMotion) {
          // Twinkle effect
          if (Math.abs(star.alpha - star.targetAlpha) < 0.02) {
            star.targetAlpha = Math.random() * 0.85 + 0.15;
          }
          star.alpha += (star.targetAlpha - star.alpha) * star.twinkleSpeed;

          // Slow drift
          star.x += star.vx;
          star.y += star.vy;

          if (star.x < 0) star.x = width;
          if (star.x > width) star.x = 0;
          if (star.y < 0) star.y = height;
          if (star.y > height) star.y = 0;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.alpha;
        ctx.shadowBlur = star.radius > 1 ? 6 : 0;
        ctx.shadowColor = star.color;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Dynamic Starfield Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Hero Cosmic Black Hole & Accretion Glow Simulation */}
      <div className="absolute top-[18%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[520px] md:w-[720px] xl:w-[960px] aspect-square pointer-events-none">
        {/* Outer Gravitational Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/10 via-purple-600/15 to-transparent blur-[80px] sm:blur-[120px] animate-cosmic-pulse" />

        {/* Accretion Disk Outer Ring */}
        <div
          className="absolute inset-[15%] rounded-full border border-cyan-400/20 blur-[1px] animate-spin-slow opacity-60"
          style={{
            background:
              "radial-gradient(circle, transparent 58%, rgba(0, 215, 255, 0.08) 65%, rgba(168, 85, 247, 0.12) 75%, transparent 82%)",
          }}
        />

        {/* Accretion Disk Inner Swirl */}
        <div
          className="absolute inset-[24%] rounded-full border border-purple-500/30 blur-[2px] animate-spin-reverse opacity-70"
          style={{
            background:
              "radial-gradient(circle, transparent 55%, rgba(0, 229, 255, 0.15) 68%, rgba(139, 92, 246, 0.08) 78%, transparent 85%)",
          }}
        />

        {/* Event Horizon (Black Hole Center) */}
        <div className="absolute inset-[36%] rounded-full bg-[#040409] shadow-[0_0_60px_10px_rgba(0,215,255,0.22),inset_0_0_40px_rgba(0,0,0,1)] border border-cyan-400/30" />
      </div>

      {/* Ambient Cosmic Lights throughout the page */}
      <div className="absolute top-[45%] -left-[15%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px]" />
      <div className="absolute top-[75%] -right-[15%] w-[600px] h-[600px] bg-purple-700/10 rounded-full blur-[160px]" />
      <div className="absolute bottom-[5%] left-[20%] w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[130px]" />
    </div>
  );
}

