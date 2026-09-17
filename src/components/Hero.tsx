import { useEffect, useRef } from "react";
import { CalendarPlus, MapPin, Share2, Sparkles, ArrowDown } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import { EVENT } from "../config/event";
import { downloadCalendar, shareEvent } from "../utils/share";

/** Anillo de puntos que gira: metáfora visual del "círculo de dar". */
function GivingRing() {
  const dots = Array.from({ length: 28 });
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[min(110vw,900px)] w-[min(110vw,900px)] -translate-x-1/2 -translate-y-1/2 animate-spin-slow md:block"
    >
      {dots.map((_, i) => {
        const rad = (i / dots.length) * 2 * Math.PI;
        const isAccent = i % 7 === 0;
        return (
          <span
            key={i}
            className={`absolute rounded-full ${
              isAccent ? "h-2.5 w-2.5 bg-brand-lime/70" : "h-1.5 w-1.5 bg-white/20"
            }`}
            style={{
              left: `${50 + 50 * Math.cos(rad)}%`,
              top: `${50 + 50 * Math.sin(rad)}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
        );
      })}
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  /* Luz que sigue al cursor (se desactiva en táctil por coste/ruido). */
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(hover: none)").matches) return;
    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="grain relative flex min-h-[100svh] items-center overflow-hidden bg-ink-900 pt-28 pb-20"
    >
      {/* Fondos: aurora + rejilla + anillo */}
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div
        aria-hidden
        className="absolute -left-40 top-[-10%] h-[38rem] w-[38rem] animate-aurora rounded-full bg-brand-red/35 blur-[130px]"
      />
      <div
        aria-hidden
        className="absolute -right-32 top-1/4 h-[34rem] w-[34rem] animate-aurora rounded-full bg-brand-teal/30 blur-[130px] [animation-delay:-6s]"
      />
      <div
        aria-hidden
        className="absolute bottom-[-20%] left-1/3 h-[30rem] w-[30rem] animate-aurora rounded-full bg-brand-amber/25 blur-[140px] [animation-delay:-12s]"
      />
      <GivingRing />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70 transition-opacity"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx, 50%) var(--my, 30%), rgba(208,221,40,0.10), transparent 65%)",
        }}
      />

      <div className="container relative mx-auto px-5 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mx-auto mb-7 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulseRing rounded-full bg-brand-lime" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-lime" />
            </span>
            Edición {EVENT.edition} · Giving Tuesday Colima
          </p>

          <h1 className="display text-balance text-[clamp(2.6rem,9vw,6.2rem)]">
            <span className="block text-white/95">Este año damos</span>
            <span className="block text-gradient">en círculo</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-balance text-lg font-light leading-relaxed text-white/70 sm:text-xl">
            Un Día para Dar Colima estrena los <strong className="font-semibold text-white">Círculos de Dar</strong>:
            grupos de personas y empresas que juntan tiempo, talento y recursos, y deciden
            <em className="not-italic text-brand-lime"> juntos</em> a quién apoyar.
            Este {EVENT.edition} serán{" "}
            <strong className="font-semibold text-white">{EVENT.orgsCount} organizaciones</strong> …
            y todavía nadie sabe cuáles.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-white/65">
            <span className="inline-flex items-center gap-2">
              <CalendarPlus className="h-4 w-4 text-brand-lime" />
              {EVENT.dateLabel}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand-lime" />
              {EVENT.place}
            </span>
          </div>

          <CountdownTimer />

          <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#unete" className="btn-lime w-full sm:w-auto">
              <Sparkles className="h-5 w-5" />
              Forma tu Círculo de Dar
            </a>
            <a href="#reveal" className="btn-ghost w-full sm:w-auto">
              Descubre las 3 causas
            </a>
          </div>

          <div className="mt-9 flex items-center justify-center gap-3">
            <button
              onClick={shareEvent}
              className="grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur transition-all hover:scale-110 hover:bg-white/15"
              aria-label="Compartir el evento"
            >
              <Share2 className="h-5 w-5" />
            </button>
            <button
              onClick={downloadCalendar}
              className="grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur transition-all hover:scale-110 hover:bg-white/15"
              aria-label="Agregar a mi calendario"
            >
              <CalendarPlus className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <a
        href="#circulos"
        aria-label="Bajar a la siguiente sección"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 animate-float text-white/40 transition-colors hover:text-white md:block"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  );
}
