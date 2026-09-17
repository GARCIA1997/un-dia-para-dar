import { useState } from "react";
import { Lock, Eye, Check, Circle, Bell } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import { EVENT, REVEAL_TIMELINE } from "../config/event";

/** Pistas publicables: hablan de la causa, nunca del nombre. */
const MYSTERY = [
  {
    code: "Organización 01",
    clue: "Trabaja con quienes la ciudad suele mirar de lado.",
    hint: "Pista: su día empieza mucho antes de que abra el Jardín Libertad.",
    accent: "from-brand-red/80 to-brand-orange/70",
  },
  {
    code: "Organización 02",
    clue: "Su herramienta principal no cabe en una caja de donativos.",
    hint: "Pista: lo que reparten no se acaba cuando se entrega.",
    accent: "from-brand-amber/80 to-brand-lime/70",
  },
  {
    code: "Organización 03",
    clue: "Lleva años sosteniendo a Colima sin salir en la foto.",
    hint: "Pista: más de una familia colimense ya le debe un buen día.",
    accent: "from-brand-teal/80 to-brand-blue/70",
  },
];

const REVEAL_DATE_ISO = "2026-11-24T19:00:00-06:00";

export default function MysteryOrgs() {
  const [opened, setOpened] = useState<number[]>([]);
  const toggle = (i: number) =>
    setOpened((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));

  return (
    <section id="reveal" className="grain relative overflow-hidden bg-ink-800 py-24 md:py-32">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
      <div
        aria-hidden
        className="absolute right-[-15%] top-1/4 h-[32rem] w-[32rem] animate-aurora rounded-full bg-brand-red/20 blur-[140px]"
      />

      <div className="container relative mx-auto px-5 md:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center reveal">
          <p className="eyebrow mb-6">
            <Lock className="h-3.5 w-3.5" />
            Clasificado hasta el 24 de noviembre
          </p>
          <h2 className="display text-balance text-[clamp(2rem,6.5vw,4rem)]">
            <span className="text-gradient">{EVENT.orgsCount} organizaciones.</span>
            <br />
            Cero nombres. Por ahora.
          </h2>
          <p className="mt-6 text-lg font-light leading-relaxed text-white/70">
            Este año el círculo no apoya a una sola causa: apoya a tres. Ya están elegidas, ya
            saben quiénes son… y aún no lo pueden contar. Aquí quedan las pistas mientras llega el
            día del destape.
          </p>
        </div>

        {/* Tarjetas misterio */}
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3 reveal">
          {MYSTERY.map((org, i) => {
            const isOpen = opened.includes(i);
            return (
              <button
                key={org.code}
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                className="group perspective relative min-h-[19rem] overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.04] p-7 text-left backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-white/30 hover:shadow-[0_30px_80px_-45px_rgba(255,255,255,0.5)]"
              >
                <div
                  aria-hidden
                  className={`absolute inset-0 bg-gradient-to-br ${org.accent} opacity-[0.16] transition-opacity duration-700 group-hover:opacity-30`}
                />

                <div className="relative flex h-full flex-col">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/60">
                      {org.code}
                    </span>
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/20 bg-white/10">
                      {isOpen ? <Eye className="h-4 w-4" /> : <Lock className="h-4 w-4" />}
                    </span>
                  </div>

                  {/* Silueta censurada */}
                  <div className="relative mb-6 grid h-24 place-items-center">
                    <div
                      aria-hidden
                      className={`h-20 w-20 rounded-full bg-white/15 transition-all duration-700 ${
                        isOpen ? "blur-[6px] scale-105" : "blur-[14px]"
                      }`}
                    />
                    <span className="display absolute text-5xl text-white/25">?</span>
                  </div>

                  <p className="font-display text-xl font-bold leading-snug tracking-tight text-white">
                    {org.clue}
                  </p>

                  <div
                    className={`grid transition-all duration-500 ${
                      isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="overflow-hidden text-sm font-light leading-relaxed text-brand-lime">
                      {org.hint}
                    </p>
                  </div>

                  <span className="mt-auto pt-6 text-sm font-semibold text-white/55 transition-colors group-hover:text-white">
                    {isOpen ? "Ocultar pista" : "Destapar pista →"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Cuenta regresiva al destape */}
        <div className="mx-auto mt-14 max-w-4xl rounded-[2rem] border border-white/12 bg-white/[0.05] p-8 text-center backdrop-blur-xl reveal md:p-10">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-lime">
            Faltan para el destape en vivo
          </p>
          <CountdownTimer targetISO={REVEAL_DATE_ISO} compact />
          <a
            href={`https://wa.me/${EVENT.whatsapp}?text=${encodeURIComponent(
              "Hola, quiero que me avisen cuando se revelen las 3 organizaciones de Un Día para Dar Colima 2026."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8"
          >
            <Bell className="h-5 w-5" />
            Avísame cuando se revelen
          </a>
        </div>

        {/* Ruta hacia el 1 de diciembre */}
        <ol className="mx-auto mt-16 max-w-4xl space-y-0 reveal">
          {REVEAL_TIMELINE.map((item, i) => (
            <li key={item.title} className="relative flex gap-5 pb-9 last:pb-0">
              {i < REVEAL_TIMELINE.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-[19px] top-10 h-full w-px bg-gradient-to-b from-white/25 to-white/5"
                />
              )}
              <span
                className={`relative z-10 mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border ${
                  item.state === "done"
                    ? "border-brand-lime/60 bg-brand-lime text-ink-900"
                    : item.state === "next"
                    ? "border-brand-amber/60 bg-brand-amber/20 text-brand-amber"
                    : "border-white/15 bg-white/5 text-white/35"
                }`}
              >
                {item.state === "done" ? (
                  <Check className="h-5 w-5" />
                ) : item.state === "next" ? (
                  <Circle className="h-4 w-4 animate-pulse" fill="currentColor" />
                ) : (
                  <Lock className="h-4 w-4" />
                )}
              </span>
              <div className="pt-0.5">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/45">
                  {item.date}
                </span>
                <h3 className="font-display text-lg font-bold tracking-tight">{item.title}</h3>
                <p className="mt-1 max-w-2xl text-sm font-light leading-relaxed text-white/60">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
