export const Ornament = ({ className = "" }: { className?: string }) => (
  <div className={`ornament-divider ${className}`}>
    <svg width="48" height="20" viewBox="0 0 48 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 2 L28 10 L24 18 L20 10 Z" fill="currentColor" opacity="0.9"/>
      <circle cx="24" cy="10" r="2" fill="hsl(var(--background))"/>
      <path d="M2 10 L18 10 M30 10 L46 10" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
      <circle cx="6"  cy="10" r="1.2" fill="currentColor"/>
      <circle cx="42" cy="10" r="1.2" fill="currentColor"/>
    </svg>
  </div>
);
