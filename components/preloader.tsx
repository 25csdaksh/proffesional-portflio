"use client";

import { useEffect, useState, useRef } from "react";

export function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);
  const [fade, setFade] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setMounted(true);
    // Check if the preloader has already played in this session
    if (sessionStorage.getItem("intro-played") === "true") {
      return;
    }
    
    setShow(true);

    // Disable scrolling during preloader
    document.body.style.overflow = "hidden";

    // Start fade out at 2.7s
    const fadeTimer = setTimeout(() => {
      setFade(true);
    }, 2700);

    // Completely remove preloader at 3.0s
    const removeTimer = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
      sessionStorage.setItem("intro-played", "true");
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  // Canvas particle animation
  useEffect(() => {
    if (!show || !mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Respect user preferences for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particles array
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      alphaSpeed: number;
    }> = [];

    // Scale particle count dynamically based on viewport dimensions
    const particleCount = Math.min(80, Math.floor((width * height) / 22000));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.2,
        alphaSpeed: (Math.random() * 0.005 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connecting lines
      ctx.strokeStyle = "rgba(168, 85, 247, 0.07)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particle nodes
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168, 85, 247, ${p.alpha})`;
        ctx.shadowBlur = 4;
        ctx.shadowColor = "rgba(168, 85, 247, 0.3)";
        ctx.fill();
        ctx.shadowBlur = 0;

        p.x += p.vx;
        p.y += p.vy;

        p.alpha += p.alphaSpeed;
        if (p.alpha <= 0.15 || p.alpha >= 0.75) {
          p.alphaSpeed = -p.alphaSpeed;
        }

        // Boundary reflection
        if (p.x < 0 || p.x > width) p.vx = -p.vx;
        if (p.y < 0 || p.y > height) p.vy = -p.vy;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [show, mounted]);

  if (!mounted || !show) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030303] select-none pointer-events-auto transition-all duration-300 ${
        fade ? "opacity-0 scale-105 blur-sm" : "opacity-100 scale-100"
      }`}
      style={{ overflow: "hidden" }}
    >
      {/* Scanline / Cyber texture overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/[0.008] to-transparent bg-[size:100%_4px] pointer-events-none opacity-40" />

      {/* Floating Canvas Particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
      />

      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Main text content wrapper */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <h1 
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase text-transparent bg-clip-text bg-linear-to-r from-white via-neutral-100 to-neutral-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.35)] motion-safe:animate-cinematic-reveal"
          style={{
            fontFamily: "var(--font-sans), sans-serif",
            animationDuration: "2.5s",
            animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            animationFillMode: "forwards"
          }}
        >
          Daksh Soni
        </h1>
        <p 
          className="mt-4 text-xs sm:text-sm tracking-[0.4em] uppercase text-neutral-500 motion-safe:animate-subtitle-reveal"
          style={{
            animationDuration: "2.0s",
            animationDelay: "0.4s",
            animationTimingFunction: "ease-out",
            animationFillMode: "forwards",
            opacity: 0
          }}
        >
          Portfolio
        </p>
      </div>

      {/* Elegant minimalist loader bar */}
      <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 w-40 sm:w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <div 
          className="h-full bg-linear-to-r from-purple-500 via-pink-500 to-purple-500 w-0 motion-safe:animate-progress" 
          style={{
            animationDuration: "2.6s",
            animationTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            animationFillMode: "forwards"
          }}
        />
      </div>
    </div>
  );
}
