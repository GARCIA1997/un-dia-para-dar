import { useState } from "react";
import { Users, HandHeart, Vote, PartyPopper } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Step {
  icon: LucideIcon;
  title: string;
  short: string;
  body: string;
  accent: string;
}

const STEPS: Step[] = [
  {
    icon: Users,
    title: "Se forma el círculo",
    short: "Reúnes a los tuyos",
    body: "Un grupo de personas que comparten algo —la familia, la oficina, el equipo de futbol, la generación de la prepa— decide dar en conjunto en lugar de dar por separado.",
    accent: "from-brand-red to-brand-orange",
  },
  {
    icon: HandHeart,
    title: "Cada quien aporta",
    short: "Tiempo, talento o recursos",
    body: "No todo es dinero. En un círculo se aporta lo que se tiene: horas de voluntariado, una habilidad profesional, difusión, especie o un donativo. Todo suma al mismo bote.",
    accent: "from-brand-amber to-brand-lime",
  },
  {
    icon: Vote,
    title: "Deciden juntos",
    short: "El poder se reparte",
    body: "El círculo se sienta a conversar y vota a cuál de las causas destina lo reunido. Nadie decide por ellos: aquí la filantropía es horizontal y participativa.",
    accent: "from-brand-lime to-brand-teal",
  },
  {
    icon: PartyPopper,
    title: "Se entrega el 1 de diciembre",
    short: "Y se celebra en el Jardín",
    body: "En Un Día para Dar Colima los círculos se encuentran, entregan lo reunido a las organizaciones beneficiarias y lo celebran frente a toda la ciudad.",
    accent: "from-brand-teal to-brand-blue",
  },
];

export default function CirculosDeDar() {
  const [active, setActive] = useState(0);
  const Current = STEPS[active];

  return (
    <section id="circulos" className="relative overflow-hidden bg-ink-900 py-24 md:py-32">
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-brand-teal/10 blur-[140px]"
      />

      <div className="container relative mx-auto px-5 md:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center reveal">
          <p className="eyebrow mb-6">La dinámica de este año</p>
          <h2 className="display text-balance text-[clamp(2rem,6vw,3.75rem)]">
            ¿Qué es un <span className="text-gradient-lime">Círculo de Dar</span>?
          </h2>
          <p className="mt-6 text-lg font-light leading-relaxed text-white/70">
            Es un grupo de personas con valores en común que se unen para generar un cambio: juntan
            su tiempo y sus recursos y deciden colectivamente cómo usarlos. Es filantropía
            democrática, participativa y al alcance de cualquiera —no hace falta ser una gran
            empresa para mover a Colima.
          </p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          {/* Pasos interactivos */}
          <ol className="space-y-3 reveal">
            {STEPS.map((step, i) => {
              const isActive = i === active;
              return (
                <li key={step.title}>
                  <button
                    onClick={() => setActive(i)}
                    aria-expanded={isActive}
                    className={`group w-full rounded-3xl border p-5 text-left transition-all duration-500 sm:p-6 ${
                      isActive
                        ? "border-white/25 bg-white/[0.1] shadow-[0_24px_70px_-40px_rgba(208,221,40,0.8)]"
                        : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${step.accent} text-white transition-transform duration-500 ${
                          isActive ? "scale-100" : "scale-90 opacity-70 group-hover:opacity-100"
                        }`}
                      >
                        <step.icon className="h-6 w-6" />
                      </span>
                      <div className="min-w-0">
                        <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brand-lime">
                          Paso {i + 1} · {step.short}
                        </span>
                        <h3 className="font-display text-xl font-bold tracking-tight">{step.title}</h3>
                      </div>
                    </div>
                    <div
                      className={`grid transition-all duration-500 ${
                        isActive ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <p className="overflow-hidden text-base font-light leading-relaxed text-white/70">
                        {step.body}
                      </p>
                    </div>
                  </button>
                </li>
              );
            })}
          </ol>

          {/* Visual del círculo */}
          <div className="gradient-border sticky top-28 hidden aspect-square place-items-center rounded-[2.5rem] bg-white/[0.04] p-10 backdrop-blur-xl lg:grid reveal">
            <div className="relative grid h-full w-full place-items-center">
              {[0, 1, 2].map((ring) => (
                <span
                  key={ring}
                  aria-hidden
                  className="absolute rounded-full border border-white/10"
                  style={{
                    inset: `${ring * 13}%`,
                    animation: `spin-slow ${26 + ring * 9}s linear infinite ${ring % 2 ? "reverse" : ""}`,
                  }}
                />
              ))}

              {/* Nodos del círculo: se van encendiendo con el paso activo */}
              {STEPS.map((step, i) => {
                // Posición sobre la circunferencia (radio = 40% del contenedor).
                const rad = ((i / STEPS.length) * 360 - 90) * (Math.PI / 180);
                const lit = i <= active;
                return (
                  <span
                    key={step.title}
                    className={`absolute grid h-16 w-16 place-items-center rounded-2xl border backdrop-blur-md transition-all duration-700 ${
                      lit
                        ? `border-white/30 bg-gradient-to-br ${step.accent} text-white scale-100`
                        : "border-white/10 bg-white/5 text-white/30 scale-90"
                    }`}
                    style={{
                      left: `${50 + 40 * Math.cos(rad)}%`,
                      top: `${50 + 40 * Math.sin(rad)}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <step.icon className="h-7 w-7" />
                  </span>
                );
              })}

              <div className="relative z-10 max-w-[10rem] text-center">
                <div className="display text-5xl text-gradient">{active + 1}/4</div>
                <p className="mt-2 text-sm font-medium leading-snug text-white/60">{Current.short}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
