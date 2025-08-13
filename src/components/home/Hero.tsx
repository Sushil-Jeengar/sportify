import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

const Hero = () => {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = clamp((e.clientX / window.innerWidth) * 100, 0, 100);
      const y = clamp((e.clientY / window.innerHeight) * 100, 0, 100);
      setPos({ x, y });
    };
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mq.matches) window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section className="relative overflow-hidden rounded-xl border bg-surface-soft shadow-elevated">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background: `radial-gradient(600px at ${pos.x}% ${pos.y}%, hsl(var(--primary)/0.25), transparent 60%)`,
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-5xl px-6 py-20 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Elevate Your Game</h1>
        <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
          Shop pro-grade gear, book world‑class experts, and master new skills with curated training.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/auth"><Button variant="hero" size="xl" className="hover-scale">Join Now</Button></Link>
          <Link to="/marketplace"><Button variant="cta" size="xl" className="hover-scale">Explore Marketplace</Button></Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
