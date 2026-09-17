import { Link } from "react-router-dom";
import { ArrowUpRight, Newspaper } from "lucide-react";

const HIGHLIGHTS = [
  { value: "2016", label: "Primer Un Día para Dar en Colima" },
  { value: "+200", label: "Jóvenes capacitados en Fundación Carolita" },
  { value: "+60 mil", label: "Galletas con causa vendidas al año" },
  { value: "80+", label: "Países que celebran Giving Tuesday" },
];

export default function LegacyTeaser() {
  return (
    <section id="historia" className="relative overflow-hidden bg-ink-900 py-24 md:py-32">
      <div className="container relative mx-auto px-5 md:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/12 bg-white/[0.04] backdrop-blur-xl reveal">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="p-9 md:p-14">
              <p className="eyebrow mb-6">
                <Newspaper className="h-3.5 w-3.5" />
                De dónde venimos
              </p>
              <h2 className="display text-balance text-[clamp(1.9rem,5vw,3.25rem)]">
                La historia que nos trajo hasta aquí
              </h2>
              <p className="mt-5 text-base font-light leading-relaxed text-white/70 md:text-lg">
                En 2025 toda Colima se volcó sobre una sola causa: la Fundación Carolita IAP. Ese
                año quedó guardado —con sus voces, sus galletas y su gente— y es el punto de
                partida de los Círculos de Dar {new Date().getFullYear()}.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/historia-2025" className="btn-lime">
                  Ver la historia 2025
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
                <Link to="/boletin" className="btn-ghost">
                  Sala de prensa
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 border-t border-white/10 lg:border-l lg:border-t-0">
              {HIGHLIGHTS.map((item, i) => (
                <div
                  key={item.label}
                  className={`p-7 md:p-9 ${i % 2 === 0 ? "border-r border-white/10" : ""} ${
                    i < 2 ? "border-b border-white/10" : ""
                  }`}
                >
                  <div className="display text-[clamp(1.75rem,4vw,2.6rem)] text-gradient">
                    {item.value}
                  </div>
                  <p className="mt-2 text-sm font-light leading-snug text-white/60">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
