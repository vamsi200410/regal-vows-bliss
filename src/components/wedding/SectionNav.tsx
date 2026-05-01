import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { id: "countdown",  label: "Countdown" },
  { id: "invitation", label: "Invitation" },
  { id: "couple",     label: "Couple" },
  { id: "events",     label: "Itinerary" },
  { id: "info",       label: "Gratitude" },
  { id: "rsvp",       label: "RSVP" },
];

export const SectionNav = () => {
  const [active, setActive] = useState<string>("countdown");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <nav
      aria-label="Section navigation"
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-500",
        scrolled
          ? "bg-background/70 backdrop-blur-md border-b border-gold/30 shadow-deep"
          : "bg-transparent"
      )}
    >
      <ul className="max-w-5xl mx-auto flex items-center justify-center gap-1 sm:gap-2 px-3 py-3 overflow-x-auto">
        {links.map((l) => (
          <li key={l.id}>
            <a
              href={`#${l.id}`}
              onClick={(e) => handleClick(e, l.id)}
              className={cn(
                "relative inline-block px-3 py-1.5 text-[10px] sm:text-xs tracking-[0.25em] uppercase whitespace-nowrap transition-colors duration-300",
                "after:content-[''] after:absolute after:left-2 after:right-2 after:bottom-0 after:h-px after:bg-primary after:scale-x-0 after:origin-center after:transition-transform after:duration-300",
                active === l.id
                  ? "text-primary after:scale-x-100"
                  : "text-foreground/70 hover:text-foreground"
              )}
              aria-current={active === l.id ? "true" : undefined}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
