"use client";

import { useEffect, useState } from "react";

export default function ListenerCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    setCount(212 + Math.floor(Math.random() * 40));
    const id = setInterval(() => {
      setCount((c) => {
        if (c === null) return c;
        const drift = Math.floor(Math.random() * 5) - 2;
        return Math.max(180, c + drift);
      });
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-1.5 font-mono text-xs tabular-nums text-ivory/80 sm:text-sm">
      <span
        aria-hidden
        className="inline-block h-1.5 w-1.5 rounded-full bg-marigold animate-glow-pulse"
      />
      <span>{count ?? "···"}</span>
      <span className="hidden text-ivory/50 sm:inline">শুনছেন</span>
    </div>
  );
}
