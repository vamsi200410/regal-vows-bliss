import { useReveal } from "@/hooks/use-reveal";
import { Lanterns } from "@/components/wedding/Lanterns";
import { MusicPlayer } from "@/components/wedding/MusicPlayer";
import { Ornament } from "@/components/wedding/Ornament";
import { Countdown } from "@/components/wedding/Countdown";
import { Button } from "@/components/ui/button";
import {
  MapPin, MessageCircle, Calendar, Cloud, Shirt, Hotel, Heart, Sparkles, Phone,
} from "lucide-react";
import heroTemple from "@/assets/hero-temple.jpg";
import couple1 from "@/assets/couple-1.jpeg";
import couple2 from "@/assets/couple-2.jpeg";
import couple3 from "@/assets/couple-3.jpeg";
import mandala from "@/assets/mandala.png";
import eventFrame from "@/assets/event-frame.png";
import celebrationFrame from "@/assets/celebration-frame.png";
import textureTeal from "@/assets/texture-teal.png";
import texturePink from "@/assets/texture-pink.png";
import textureOlive from "@/assets/texture-olive.png";
import textureNavy from "@/assets/texture-navy.png";

const WEDDING_DATE = "2026-05-08T08:00:00";
const WHATSAPP_NUMBER = "917731807609";
const WHATSAPP_MSG = encodeURIComponent(
  "Namaste! I would love to RSVP for Uma & VasudevaRao's wedding celebrations 🌸"
);

const events = [
  { name: "Haldi",            date: "May 8, 2026", time: "8:00 AM",  venue: "Paturu Village",       map: "https://maps.app.goo.gl/wGsVVQjkNhxbVSeX9",       color: "from-primary to-accent-warm" },
  { name: "Bride Reception",  date: "May 7, 2026", time: "12:00 PM", venue: "Saravabonthu Village", map: "https://maps.app.goo.gl/9Nz2PjagC6vJ2kPA8", color: "from-accent-rose to-accent" },
  { name: "Groom Reception",  date: "May 8, 2026", time: "12:00 PM", venue: "Paturu Village",       map: "https://maps.app.goo.gl/wGsVVQjkNhxbVSeX9",       color: "from-accent to-primary" },
];

const Section = ({
  id,
  children,
  className = "",
  texture,
  tint,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  texture?: string;
  tint?: string;
}) => {
  const ref = useReveal<HTMLElement>();
  return (
    <section
      id={id}
      ref={ref}
      className={`reveal relative py-24 md:py-32 px-6 ${className}`}
      style={
        texture
          ? {
              backgroundImage: `url(${texture})`,
              backgroundSize: "600px",
              backgroundRepeat: "repeat",
              backgroundColor: tint,
              backgroundBlendMode: "multiply",
            }
          : undefined
      }
    >
      {texture && (
        <>
          {/* Base dark overlay */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, hsl(215 60% 12% / 0.55), hsl(215 60% 12% / 0.45))",
            }}
          />
          {/* Top fade — blends into previous section / body */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-28 pointer-events-none z-10"
            style={{
              background: "linear-gradient(to bottom, hsl(215 60% 12%), transparent)",
            }}
          />
          {/* Bottom fade — blends into next section / body */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-28 pointer-events-none z-10"
            style={{
              background: "linear-gradient(to top, hsl(215 60% 12%), transparent)",
            }}
          />
        </>
      )}
      <div className="relative z-10">{children}</div>
    </section>
  );
};

const Index = () => {
  return (
    <main className="relative overflow-x-hidden">
      <MusicPlayer />
      {/* HERO */}
      <header className="relative min-h-screen flex items-start justify-center overflow-hidden pt-16 md:pt-24">
        <img
          src={heroTemple}
          alt="Painterly South Indian temple gopuram against a deep blue sky and sunset horizon"
          className="absolute inset-0 w-full h-full object-cover object-bottom"
          style={{ animation: "hero-zoom 20s ease-out forwards" }}
          width={1280}
          height={1920}
        />
        {/* very soft top vignette only — let painting breathe */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />
        <Lanterns />

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="leading-none">
            <span
              className="block font-display tracking-[0.18em] text-foreground text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
              style={{ 
                fontFamily: "'Italiana', serif", 
                textShadow: "0 4px 30px hsl(215 60% 10% / 0.5)",
                animation: "name-reveal 1.2s 0.2s both"
              }}
            >
              UMA
            </span>
            <span
              className="block my-3 md:my-5 text-foreground/85 tracking-[0.5em] text-xs sm:text-sm md:text-base font-light uppercase"
              style={{ 
                fontFamily: "'Marcellus', serif",
                animation: "name-reveal 1.2s 0.5s both"
              }}
            >
              weds
            </span>
            <span
              className="block font-display tracking-[0.14em] text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ 
                fontFamily: "'Italiana', serif", 
                textShadow: "0 4px 30px hsl(215 60% 10% / 0.5)",
                animation: "name-reveal 1.2s 0.8s both"
              }}
            >
              VASUDEVARAO
            </span>
          </h1>
          <p
            className="mt-8 text-foreground/85 tracking-[0.35em] text-[10px] sm:text-xs uppercase"
            style={{ 
              fontFamily: "'Marcellus', serif",
              animation: "name-reveal 1.2s 1.1s both"
            }}
          >
            8 · 5 · 2026&nbsp;
          </p>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-foreground/70 text-[10px] tracking-[0.4em] uppercase animate-fade-in">
          scroll
        </div>
      </header>

      {/* COUNTDOWN */}
      <Section id="countdown" texture={textureNavy} tint="hsl(215 55% 20%)">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-primary tracking-[0.4em] text-xs uppercase mb-3">The Wait Begins</p>
          <h2 className="font-display text-4xl md:text-5xl text-gold-gradient mb-10">A Moment Approaching</h2>
          <Countdown target={WEDDING_DATE} />
        </div>
      </Section>

      {/* INVITATION / BLESSINGS */}
      <Section id="invitation" texture={textureTeal} tint="hsl(170 45% 30%)">
        <div className="max-w-3xl mx-auto text-center relative">
          <img src={mandala} alt="" aria-hidden className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 opacity-10 animate-slow-spin" width={768} height={768} />
          <div className="relative">
            <p className="text-primary tracking-[0.4em] text-xs uppercase mb-4">श्री गणेशाय नमः</p>
            <h2 className="font-display text-3xl md:text-5xl text-gold-gradient mb-8">With the Blessings of Our Elders</h2>
            <Ornament className="mb-8" />
            <p className="font-serif-italic text-xl md:text-2xl text-foreground/90 leading-relaxed">
              Mr. &amp; Mrs. Chinninti Narayana
              <br />
              <span className="text-muted-foreground text-base tracking-widest uppercase">together with</span>
              <br />
              Mr. &amp; Mrs. Janni Gopala Rao
            </p>
            <p className="mt-10 text-base md:text-lg text-foreground/80 max-w-xl mx-auto leading-loose">
              request the honour of your presence as we celebrate the union of our beloved children
              <br /><span className="font-display text-primary text-2xl md:text-3xl tracking-wider">Uma &amp; VasudevaRao</span>
              in a sacred ceremony of love, light and tradition.
            </p>
          </div>
        </div>
      </Section>

      {/* ABOUT THE COUPLE */}
      <Section id="couple" texture={texturePink} tint="hsl(335 45% 55%)">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative mx-auto w-full max-w-[460px]" style={{ animation: "premium-reveal 1.2s 0.2s both" }}>
            <div className="absolute -inset-6 bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl rounded-2xl animate-pulse" />
            <div className="relative overflow-hidden rounded-2xl border-2 border-gold shadow-deep aspect-[3/4] hover:scale-[1.02] transition-transform duration-700">
              <div className="flex h-full w-[300%] animate-couple-slide">
                <img src={couple1} alt="Uma and VasudevaRao in traditional wedding attire" loading="lazy" width={1080} height={1600} className="w-1/3 h-full object-cover flex-shrink-0" />
                <img src={couple2} alt="Uma and VasudevaRao sharing a moment" loading="lazy" width={1080} height={1600} className="w-1/3 h-full object-cover flex-shrink-0" />
                <img src={couple3} alt="Uma and VasudevaRao at the engagement" loading="lazy" width={1080} height={1600} className="w-1/3 h-full object-cover flex-shrink-0" />
              </div>
            </div>
          </div>
          <div>
            <p 
              className="text-primary tracking-[0.4em] text-xs uppercase mb-3 flex items-center gap-2"
              style={{ animation: "name-reveal 1s 0.4s both" }}
            >
              <Heart size={14} /> The Couple
            </p>
            <h2 
              className="font-display text-4xl md:text-5xl text-gold-gradient mb-6"
              style={{ animation: "name-reveal 1s 0.6s both" }}
            >
              Meet the Bride and Groom
            </h2>
            <Ornament 
              className="!justify-start mb-6 [&::before]:hidden [&::after]:max-w-[60px]" 
              style={{ animation: "name-reveal 1s 0.8s both" }}
            />
            <div className="space-y-5 text-foreground/85 text-lg leading-relaxed font-serif">
              <p style={{ animation: "name-reveal 1.2s 1s both" }}>
                We are both so delighted that you are able to join us in celebrating what we hope will be
                one of the happiest days of our lives.
              </p>
              <p style={{ animation: "name-reveal 1.2s 1.2s both" }}>
                The affection shown to us by so many people since our Nichayathartham has been incredibly
                moving, and has touched us both deeply. We would like to take this opportunity to thank
                everyone most sincerely for their kindness.
              </p>
              <p style={{ animation: "name-reveal 1.2s 1.4s both" }}>
                We are looking forward to seeing you at the wedding.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ITINERARY */}
      <Section id="events" texture={textureNavy} tint="hsl(215 60% 14%)">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.4em] text-xs uppercase mb-3">Festivities</p>
            <h2 className="font-display text-4xl md:text-5xl text-gold-gradient mb-4" style={{ fontFamily: "'Italiana', serif" }}>The Celebrations</h2>
            <Ornament />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {events.map((e, idx) => (
              <article
                key={e.name}
                className="group relative h-[360px] sm:h-[440px] md:h-[500px] flex items-center justify-center transition-all duration-700"
                style={{ animation: `premium-reveal 1.2s ${idx * 0.2}s both` }}
              >
                {/* Floral geometric frame */}
                <img
                  src={celebrationFrame}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none scale-[1.35] group-hover:scale-[1.58] transition-all duration-500 ease-out"
                  style={{
                    filter: "drop-shadow(0 10px 30px hsl(45 80% 50% / 0.25))",
                  }}
                />
                {/* Soft glow behind */}
                <div className="absolute inset-[22%] rounded-full bg-gradient-radial from-primary/15 via-transparent to-transparent blur-2xl" />

                {/* Centered content inside the frame */}
                <div className="relative z-10 text-center px-2 max-w-[48%]">
                  <h3
                    className="text-sm md:text-base tracking-[0.2em] mb-2 text-gold-gradient leading-tight"
                    style={{ fontFamily: "'Italiana', serif" }}
                  >
                    {e.name.toUpperCase()}
                  </h3>
                  <div className="w-8 h-px bg-gold mx-auto mb-2 opacity-70" />
                  <div
                    className="space-y-0.5 text-[9px] md:text-[10px] font-serif text-foreground/90 tracking-wide"
                  >
                    <p>{e.date}</p>
                    <p>{e.time}</p>
                    <p className="italic text-foreground/70 text-[8px] md:text-[9px]">{e.venue}</p>
                  </div>
                  <a
                    href={e.map}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-primary hover:text-primary-glow transition-colors"
                  >
                    <MapPin size={9} /> Route
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* COMPLIMENTS */}
      <Section id="info" texture={textureTeal} tint="hsl(170 45% 35%)">
        <div className="max-w-3xl mx-auto text-center relative overflow-hidden">

          {/* Floating gold particles */}
          {[
            { top: "8%",  left: "4%",  delay: "0s",    drift: "22px",  size: 4 },
            { top: "20%", left: "92%", delay: "0.7s",  drift: "-18px", size: 3 },
            { top: "55%", left: "2%",  delay: "1.4s",  drift: "30px",  size: 5 },
            { top: "70%", left: "88%", delay: "0.3s",  drift: "-25px", size: 3 },
            { top: "35%", left: "96%", delay: "2.1s",  drift: "-12px", size: 4 },
            { top: "80%", left: "8%",  delay: "1.8s",  drift: "15px",  size: 3 },
            { top: "15%", left: "50%", delay: "2.5s",  drift: "20px",  size: 2 },
            { top: "90%", left: "60%", delay: "0.9s",  drift: "-20px", size: 3 },
            { top: "45%", left: "75%", delay: "3.2s",  drift: "10px",  size: 2 },
            { top: "60%", left: "18%", delay: "1.1s",  drift: "-10px", size: 4 },
          ].map((p, i) => (
            <span
              key={i}
              aria-hidden
              className="absolute pointer-events-none rounded-full"
              style={{
                top: p.top, left: p.left,
                width: p.size, height: p.size,
                background: "radial-gradient(circle, hsl(45 100% 85%), hsl(38 80% 60%))",
                ["--pdrift" as string]: p.drift,
                animation: `float-particle 4s ${p.delay} ease-in-out infinite`,
              }}
            />
          ))}

          {/* Heading with shimmer */}
          <p className="text-primary tracking-[0.4em] text-xs uppercase mb-3"
             style={{ animation: "name-reveal 0.8s 0.1s both" }}>
            With Gratitude
          </p>
          <h2
            className="animate-gold-shimmer font-display text-4xl md:text-5xl mb-6"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Yours Sincerely
          </h2>
          <Ornament className="mb-10" style={{ animation: "name-reveal 0.8s 0.4s both" }} />

          {/* Name with reveal */}
          <p
            className="font-serif-italic text-xl md:text-2xl text-foreground/90 leading-relaxed mb-12"
            style={{ animation: "name-reveal 1s 0.5s both" }}
          >
            Yours,
            <br />
            <span className="font-display text-2xl md:text-3xl text-primary tracking-wider">
              Smt. &amp; Sri Chinninti Narayana – Kanakamma
            </span>
          </p>

          {/* Compliments card with breathe glow */}
          <div className="animate-card-breathe bg-card/60 backdrop-blur-sm border border-gold rounded-xl p-8 md:p-10">
            <p
              className="text-primary tracking-[0.3em] text-xs uppercase mb-5"
              style={{ animation: "name-reveal 0.7s 0.6s both" }}
            >
              With Best Compliments From
            </p>
            <div className="space-y-3 text-foreground/85 text-base md:text-lg font-serif leading-relaxed">
              {[
                "Smt. & Sri Jaminivalasa Sriramulu",
                "Smt. & Sri Mekala Rama Rao",
                "Smt. & Sri Gedela Kaveswara Rao",
                "Smt. & Sri Jalaka Bhaskara Rao",
                "Chinninti Mahalaxmi",
              ].map((name, i) => (
                <p
                  key={name}
                  style={{ animation: `name-reveal 0.7s ${0.75 + i * 0.15}s both` }}
                >
                  {name}
                </p>
              ))}
              <p
                className="font-serif-italic text-muted-foreground pt-2"
                style={{ animation: `name-reveal 0.7s ${0.75 + 5 * 0.15}s both` }}
              >
                and Near &amp; Dear
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* RSVP */}
      <Section id="rsvp" texture={textureNavy} tint="hsl(215 60% 22%)">
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-gradient-radial-glow opacity-50" style={{ background: "var(--gradient-radial-glow)" }} />
          <div className="relative">
            <p 
              className="text-primary tracking-[0.4em] text-xs uppercase mb-3"
              style={{ animation: "name-reveal 1s 0.2s both" }}
            >
              Kindly Respond
            </p>
            <h2 
              className="font-display text-4xl md:text-5xl text-gold-gradient mb-6"
              style={{ animation: "name-reveal 1s 0.4s both" }}
            >
              Will You Join Us?
            </h2>
            <Ornament 
              className="mb-8" 
              style={{ animation: "name-reveal 1s 0.6s both" }}
            />
            <p 
              className="text-foreground/85 text-lg max-w-xl mx-auto mb-10 leading-relaxed font-serif"
              style={{ animation: "name-reveal 1s 0.8s both" }}
            >
              Your presence would mean the world. Tap below to RSVP directly via WhatsApp —
              we will get back to you with all the details.
            </p>
            <Button
              asChild
              size="lg"
              className="group relative bg-gradient-to-r from-primary via-primary-glow to-primary text-primary-foreground font-display tracking-widest uppercase px-10 py-7 text-base rounded-full shadow-gold hover:shadow-glow transition-all duration-500 hover:scale-105"
              style={{ 
                backgroundSize: "200% auto", 
                animation: "shimmer 4s linear infinite, name-reveal 1s 1s both" 
              }}
            >
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2" /> Contact on WhatsApp
              </a>
            </Button>
            <div 
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10"
              style={{ animation: "name-reveal 1s 1.2s both" }}
            >
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Or call us at</p>
                <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8">
                  <a 
                    href="tel:7702902407" 
                    className="group flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <div className="p-2 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors">
                      <Phone size={14} className="text-primary" />
                    </div>
                    <span className="font-serif tracking-widest text-sm md:text-base">7702902407</span>
                  </a>
                  <div className="hidden sm:block w-px h-4 bg-gold/30" />
                  <a 
                    href="tel:9121189750" 
                    className="group flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <div className="p-2 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors">
                      <Phone size={14} className="text-primary" />
                    </div>
                    <span className="font-serif tracking-widest text-sm md:text-base">9121189750</span>
                  </a>
                </div>
              </div>
            </div>
            <p className="mt-10 text-muted-foreground text-[10px] md:text-xs tracking-wider opacity-60">
              Kindly respond by 8<sup>th</sup> May 2026
            </p>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="relative py-24 px-6 text-center border-t border-gold/20 overflow-hidden">
        {/* Floating Hearts Background */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float-up text-primary/40"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: "-20px",
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
                fontSize: `${12 + Math.random() * 16}px`,
              }}
            >
              <Heart fill="currentColor" />
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <Ornament className="mb-8" style={{ animation: "name-reveal 1.2s 0.2s both" }} />
          
          <h2 
            className="font-display text-4xl md:text-5xl text-gold-gradient mb-6"
            style={{ animation: "name-reveal 1.2s 0.4s both" }}
          >
            Thank You
          </h2>
          
          <p 
            className="font-serif-italic text-lg md:text-xl text-foreground/80 mb-12 max-w-lg mx-auto leading-relaxed"
            style={{ animation: "name-reveal 1.2s 0.6s both" }}
          >
            We can't wait to share our special day with you. 
            Your love and blessings are our greatest gift.
          </p>

          <div className="pt-12 border-t border-gold/10 inline-block">
            <p className="font-display text-2xl text-gold-gradient" style={{ animation: "name-reveal 1.2s 0.8s both" }}>
              Uma &amp; VasudevaRao
            </p>
            <p className="font-serif-italic text-muted-foreground mt-2" style={{ animation: "name-reveal 1.2s 1s both" }}>
              Forever begins on 8.5.2026
            </p>
          </div>

          <p className="mt-16 text-[10px] tracking-[0.4em] uppercase text-muted-foreground/50" style={{ animation: "name-reveal 1.2s 1.2s both" }}>
            Made with Love &middot; 2026
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
