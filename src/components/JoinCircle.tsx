import { useMemo, useState } from "react";
import { MessageCircle, Users2, Building2, HeartHandshake } from "lucide-react";
import { EVENT } from "../config/event";

const MXN = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  maximumFractionDigits: 0,
});

const WAYS = [
  {
    icon: Users2,
    title: "Círculo personal",
    body: "Tu familia, tus amigos o tu equipo. Desde 5 personas ya son un círculo.",
    cta: "Armar mi círculo",
    message:
      "Hola, quiero armar un Círculo de Dar con mi familia/amigos para Un Día para Dar Colima 2026.",
  },
  {
    icon: Building2,
    title: "Círculo empresarial",
    body: "Tu empresa aporta y suma a su gente. Damos acompañamiento y kit de comunicación.",
    cta: "Quiero el kit para empresas",
    message:
      "Hola, represento a una empresa y queremos formar un Círculo de Dar en Un Día para Dar Colima 2026.",
  },
  {
    icon: HeartHandshake,
    title: "Círculo de talento",
    body: "¿No puedes donar dinero? Dona horas, oficio o difusión. También cuenta, y mucho.",
    cta: "Ofrecer mi talento",
    message:
      "Hola, quiero aportar tiempo/talento a un Círculo de Dar en Un Día para Dar Colima 2026.",
  },
];

export default function JoinCircle() {
  const [people, setPeople] = useState(12);
  const [amount, setAmount] = useState(300);

  const total = people * amount;
  const perOrg = useMemo(() => Math.round(total / EVENT.orgsCount), [total]);

  return (
    <section id="unete" className="relative overflow-hidden bg-ink-900 py-24 md:py-32">
      <div
        aria-hidden
        className="absolute left-[-10%] bottom-0 h-[30rem] w-[30rem] animate-aurora rounded-full bg-brand-lime/15 blur-[150px]"
      />

      <div className="container relative mx-auto px-5 md:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center reveal">
          <p className="eyebrow mb-6">Tu turno</p>
          <h2 className="display text-balance text-[clamp(2rem,6vw,3.75rem)]">
            Arma tu círculo <span className="text-gradient-lime">hoy</span>
          </h2>
          <p className="mt-6 text-lg font-light leading-relaxed text-white/70">
            No necesitas saber todavía a quién vas a apoyar: el círculo se arma antes del destape.
            Esa es justo la gracia —te sumas por confianza en la comunidad, no por una sola causa.
          </p>
        </div>

        {/* Simulador de impacto */}
        <div className="mx-auto mb-12 max-w-4xl gradient-border rounded-[2rem] bg-white/[0.05] p-7 backdrop-blur-xl reveal sm:p-10">
          <h3 className="font-display text-xl font-bold tracking-tight">
            Simula lo que puede lograr tu círculo
          </h3>
          <p className="mt-1 text-sm text-white/55">
            Mueve los controles. Los círculos no se miden por lo que da uno, sino por lo que dan todos.
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div className="space-y-7">
              <label className="block">
                <span className="mb-2 flex items-baseline justify-between text-sm font-medium text-white/70">
                  Personas en el círculo
                  <span className="display text-2xl text-white">{people}</span>
                </span>
                <input
                  type="range"
                  min={5}
                  max={100}
                  step={1}
                  value={people}
                  onChange={(e) => setPeople(Number(e.target.value))}
                  className="w-full accent-[#D0DD28]"
                  aria-label="Personas en el círculo"
                />
              </label>

              <label className="block">
                <span className="mb-2 flex items-baseline justify-between text-sm font-medium text-white/70">
                  Aportación de cada quien
                  <span className="display text-2xl text-white">{MXN.format(amount)}</span>
                </span>
                <input
                  type="range"
                  min={50}
                  max={3000}
                  step={50}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full accent-[#14AC94]"
                  aria-label="Aportación por persona"
                />
              </label>
            </div>

            <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-brand-teal/25 to-brand-lime/15 p-7 text-center">
              <span className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-white/60">
                Tu círculo reuniría
              </span>
              <div className="display mt-2 text-[clamp(2rem,7vw,3rem)] tabular-nums text-gradient-lime">
                {MXN.format(total)}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                ≈ <strong className="text-white">{MXN.format(perOrg)}</strong> para cada una de las{" "}
                {EVENT.orgsCount} organizaciones.
              </p>
            </div>
          </div>
        </div>

        {/* Formas de participar */}
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3 reveal">
          {WAYS.map((way) => (
            <article
              key={way.title}
              className="group flex flex-col rounded-[2rem] border border-white/12 bg-white/[0.04] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-white/28 hover:bg-white/[0.08]"
            >
              <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-lime to-brand-teal p-3 text-ink-900">
                <way.icon className="h-6 w-6" />
              </span>
              <h3 className="font-display text-xl font-bold tracking-tight">{way.title}</h3>
              <p className="mt-2 flex-1 text-base font-light leading-relaxed text-white/65">
                {way.body}
              </p>
              <a
                href={`https://wa.me/${EVENT.whatsapp}?text=${encodeURIComponent(way.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost mt-6 w-full text-sm"
              >
                <MessageCircle className="h-4 w-4" />
                {way.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
