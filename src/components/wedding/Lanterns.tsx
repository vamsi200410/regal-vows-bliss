import lantern from "@/assets/lantern.png";

const LANTERNS = [
  { left: "4%",  size: 70, delay: 0,   duration: 26 },
  { left: "12%", size: 52, delay: 7,   duration: 32 },
  { left: "20%", size: 88, delay: 14,  duration: 28 },
  { left: "28%", size: 46, delay: 4,   duration: 34 },
  { left: "36%", size: 64, delay: 11,  duration: 30 },
  { left: "44%", size: 40, delay: 18,  duration: 36 },
  { left: "56%", size: 76, delay: 2,   duration: 27 },
  { left: "64%", size: 50, delay: 9,   duration: 33 },
  { left: "72%", size: 90, delay: 16,  duration: 29 },
  { left: "80%", size: 44, delay: 5,   duration: 35 },
  { left: "88%", size: 68, delay: 12,  duration: 31 },
  { left: "94%", size: 38, delay: 20,  duration: 37 },
];

export const Lanterns = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    {LANTERNS.map((l, i) => (
      <img
        key={i}
        src={lantern}
        alt=""
        className="absolute bottom-0 animate-flicker"
        style={{
          left: l.left,
          width: l.size,
          height: l.size,
          animation: `float-up ${l.duration}s linear ${l.delay}s infinite, flicker 3s ease-in-out infinite`,
          opacity: 0.85,
        }}
      />
    ))}
  </div>
);
