import { useState } from "react";
import { Utensils, Flame, Accessibility, MapPin, Check, Circle, Lock, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { EVENT, REVEAL_TIMELINE } from "../config/event";
import { ORGANIZATIONS } from "../config/organizations";

const ICONS: Record<string, LucideIcon> = {
  "comedor-cristo-rey": Utensils,
  "red-desaparecidos": Flame,
  fhadi: Accessibility,
};

export default function Causas() {
  const [active, setActive] = useState(0);
  const org = ORGANIZATIONS[active];
  const Icon = ICONS[org.id] ?? Sparkles;

  return (
    <section id="causas" className="grain relative overflow-hidden bg-ink-800 py-24 md:py-32">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
      <div
        aria-hidden
        className="absolute right-[-15%] top-1/4 h-[32rem] w-[32rem] animate-aurora rounded-full bg-brand-red/20 blur-[140px]"
      />

      <div className="container relative mx-auto px-5 md:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center reveal">
          <p className="eyebrow mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            Revelación {EVENT.edition}
          </p>
          <h2 className="display text-balance text-[clamp(2rem,6.5vw,4rem)]">
            Ellas son las <span className="text-gradient">{EVENT.orgsCount} organizaciones</span> de este año
          </h2>
          <p className="mt-6 text-lg font-light leading-relaxed text-white/70">
            Tres causas, tres formas de cuidar a Colima. Cada Círculo de Dar conoce a las tres,
            conversa y decide a cuál destinar lo que reúna.
          </p>
        </div>

        {/* Selector */}
        <div
          role="tablist"
          aria-label="Organizaciones beneficiarias"
          className="mx-auto mb-6 grid max-w-6xl gap-4 md:grid-cols-3 reveal"
        >
          {ORGANIZATIONS.map((o, i) => {
            const OIcon = ICONS[o.id] ?? Sparkles;
            const isActive = i === active;
            return (
              <button
                key={o.id}
                role="tab"
                aria-selected={isActive}
                aria-controls="causa-detalle"
                onClick={() => setActive(i)}
                className={`group relative overflow-hidden rounded-[1.75rem] border p-5 text-left transition-all duration-500 ${
                  isActive
                    ? "border-white/30 bg-white/[0.1] shadow-[0_24px_70px_-40px_rgba(255,255,255,0.6)]"
                    : "border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${o.accent} text-white transition-transform duration-500 ${
                      isActive ? "scale-100" : "scale-90 opacity-70 group-hover:opacity-100"
                    }`}
                  >
                    <OIcon className="h-6 w-6" />
                  </span>
                  <div className="min-w-0">
                    <span className="block text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-brand-lime">
                      Organización {i + 1} · {o.causeLabel}
                    </span>
                    <h3 className="font-display text-lg font-bold leading-snug tracking-tight">
                      {o.shortName}
                    </h3>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detalle */}
        <div
          id="causa-detalle"
          role="tabpanel"
          key={org.id}
          className="gradient-border mx-auto max-w-6xl animate-fade-in-up rounded-[2rem] bg-white/[0.05] p-7 backdrop-blur-xl md:p-12"
          style={{ animationDelay: "0s" }}
        >
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <span
                className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${org.accent} text-white`}
              >
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="font-display text-2xl font-extrabold leading-tight tracking-tight md:text-4xl">
                {org.name}
              </h3>
              <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-white/60">
                <MapPin className="h-4 w-4 text-brand-lime" />
                {org.where}
              </p>

              <p className="mt-6 text-base font-light leading-relaxed text-white/75 md:text-lg">
                {org.summary}
              </p>
              <p className="mt-4 text-base font-light leading-relaxed text-white/60">
                <strong className="font-semibold text-white/80">A quiénes acompaña: </strong>
                {org.beneficiaries}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {org.facts.map((fact) => (
                  <li
                    key={fact}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/75"
                  >
                    {fact}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/20 p-6 md:p-8">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-brand-lime">
                Lo que logran los círculos
              </p>
              <h4 className="mt-2 font-display text-xl font-bold tracking-tight md:text-2xl">
                {org.campaignTitle}
              </h4>
              <p className="mt-3 text-sm font-light leading-relaxed text-white/65">
                {org.campaignIntro}
              </p>
              <ul className="mt-5 space-y-3">
                {org.uses.map((use) => (
                  <li key={use} className="flex gap-3 text-sm font-light leading-relaxed text-white/75">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-lime" />
                    {use}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/${EVENT.whatsapp}?text=${encodeURIComponent(
                  `Hola, mi Círculo de Dar quiere apoyar a ${org.whatsappCause} en Un Día para Dar Colima 2026.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lime mt-7 w-full"
              >
                <Sparkles className="h-5 w-5" />
                Mi círculo apoya a esta causa
              </a>
            </div>
          </div>
        </div>

        {/* Ruta hacia el 1 de diciembre */}
        <ol className="mx-auto mt-16 max-w-4xl reveal">
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
