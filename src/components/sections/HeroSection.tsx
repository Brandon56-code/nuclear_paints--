"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroSection({
  onOpenAuth,
}: {
  onOpenAuth: (mode: "login" | "signup") => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Trigger the fade-in on mount via a layout effect to avoid setState-in-effect lint error
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setLoaded(true), 0);
    return () => clearTimeout(id);
  }, []);

  /* ---- animated paint-splash canvas ---- */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    /* Splat definition */
    type Splat = {
      x: number;
      y: number;
      r: number;
      maxR: number;
      color: string;
      alpha: number;
      vx: number;
      vy: number;
      growing: boolean;
    };

    const colors = [
      "rgba(59,130,246,",   // blue
      "rgba(234,179,8,",    // yellow
      "rgba(220,38,38,",    // red
      "rgba(249,115,22,",   // orange
      "rgba(16,185,129,",   // green
      "rgba(168,85,247,",   // purple
    ];

    const splats: Splat[] = Array.from({ length: 18 }, () => ({
      x: Math.random() * (canvas.width || 1200),
      y: Math.random() * (canvas.height || 600),
      r: Math.random() * 30 + 10,
      maxR: Math.random() * 160 + 60,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.35 + 0.1,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      growing: true,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const s of splats) {
        /* Grow / shrink */
        if (s.growing) {
          s.r += 0.35;
          if (s.r >= s.maxR) s.growing = false;
        } else {
          s.r -= 0.2;
          if (s.r <= 20) {
            s.growing = true;
            s.x = Math.random() * canvas.width;
            s.y = Math.random() * canvas.height;
            s.color = colors[Math.floor(Math.random() * colors.length)];
          }
        }
        /* Drift */
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < -s.r) s.x = canvas.width + s.r;
        if (s.x > canvas.width + s.r) s.x = -s.r;
        if (s.y < -s.r) s.y = canvas.height + s.r;
        if (s.y > canvas.height + s.r) s.y = -s.r;

        /* Paint blob – radial gradient */
        const grd = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r);
        grd.addColorStop(0, `${s.color}${s.alpha})`);
        grd.addColorStop(0.6, `${s.color}${s.alpha * 0.5})`);
        grd.addColorStop(1, `${s.color}0)`);

        ctx.beginPath();
        /* Irregular shape using bezier curves */
        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.scale(1 + Math.sin(Date.now() * 0.001 + s.r) * 0.08, 1 + Math.cos(Date.now() * 0.001 + s.r) * 0.08);
        ctx.arc(0, 0, s.r, 0, Math.PI * 2);
        ctx.restore();
        ctx.fillStyle = grd;
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Animated canvas backdrop */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: "screen" }}
        aria-hidden
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90" />

      {/* Floating decorative paint splashes */}
      <div className="absolute top-16 left-8 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl animate-blob" />
      <div className="absolute bottom-20 right-12 w-80 h-80 rounded-full bg-yellow-400/20 blur-3xl animate-blob-delay2" />
      <div className="absolute top-1/3 right-1/4 w-56 h-56 rounded-full bg-red-500/20 blur-3xl animate-blob-delay4" />

      {/* Content */}
      <div
        className={`relative z-10 text-center px-4 max-w-5xl mx-auto transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-yellow-400 text-sm font-semibold mb-6 border border-yellow-400/30">
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
          Ruai, Nairobi County
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4">
          <span className="block">Nuclear</span>
          <span className="block bg-gradient-to-r from-blue-400 via-yellow-400 to-red-400 bg-clip-text text-transparent animate-color-shift">
            Paints Ltd
          </span>
        </h1>

        <p className="text-2xl md:text-3xl font-light text-slate-300 mb-4">
          Color That <em className="text-yellow-400 not-italic font-semibold">Defines</em> Spaces
        </p>

        <p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
          High-quality, durable &amp; vibrant paint solutions for residential,
          commercial, and industrial use — trusted since Nairobi&apos;s Eastern Bypass.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#products"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 font-bold text-lg shadow-lg shadow-orange-500/30 hover:scale-105 hover:shadow-orange-400/50 transition-all duration-300"
          >
            Explore Products
          </a>
          <button
            onClick={() => onOpenAuth("signup")}
            className="px-8 py-4 rounded-full glass text-white font-bold text-lg border border-white/20 hover:border-yellow-400/60 hover:text-yellow-400 hover:scale-105 transition-all duration-300"
          >
            Get Started
          </button>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: "20+", label: "Product Lines" },
            { value: "100%", label: "Quality Assured" },
            { value: "24/7", label: "Customer Support" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-black text-yellow-400">{s.value}</div>
              <div className="text-slate-400 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 animate-float">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-400 to-transparent" />
      </div>
    </section>
  );
}
