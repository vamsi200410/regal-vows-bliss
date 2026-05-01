import { useEffect, useState } from "react";

interface Props { target: string }

const calc = (target: string) => {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff / 3600000) % 24),
    m: Math.floor((diff / 60000) % 60),
    s: Math.floor((diff / 1000) % 60),
  };
};

export const Countdown = ({ target }: Props) => {
  const [t, setT] = useState(() => calc(target));
  useEffect(() => {
    const id = setInterval(() => setT(calc(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const items = [
    { label: "Days", value: t.d },
    { label: "Hours", value: t.h },
    { label: "Minutes", value: t.m },
    { label: "Seconds", value: t.s },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
      {items.map((it) => (
        <div
          key={it.label}
          className="relative bg-card/60 backdrop-blur-sm border border-gold rounded-lg p-6 text-center shadow-deep overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gold-soft opacity-50" />
          <div className="relative font-display text-4xl md:text-5xl text-gold-gradient font-semibold tabular-nums">
            {String(it.value).padStart(2, "0")}
          </div>
          <div className="relative mt-2 text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground">
            {it.label}
          </div>
        </div>
      ))}
    </div>
  );
};
