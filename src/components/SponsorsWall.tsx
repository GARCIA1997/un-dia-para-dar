import { Handshake, Sparkles } from "lucide-react";
import { EVENT } from "../config/event";

interface Sponsor {
  name: string;
  logo: string;
  url?: string;
}

/**
 * Patrocinadores de Un Día para Dar Colima 2026 (confirmados a la fecha).
 * En escritorio se muestran quietos y grandes (caben los 4 sin apretarse).
 * En móvil se listan en un carrusel: es más fácil de recorrer con el dedo
 * que una cuadrícula 2x2 apretada.
 */
const SPONSORS: Sponsor[] = [
  { name: "Spartans Dev", logo: "/images/sponsors/spartansdevio.png", url: "https://spartans-dev.io" },
  { name: "Razo", logo: "/images/sponsors/razo.png" },
  { name: "Casa Macehual", logo: "/images/sponsors/macehual.png" },
  { name: "Bestia Grupera", logo: "/images/sponsors/bestia.png" },
];

function LogoTile({ sponsor, carousel = false }: { sponsor: Sponsor; carousel?: boolean }) {
  // Los logos vienen en formatos y fondos distintos, así que van sobre una
  // "tarjeta" blanca: se ven bien todos sin tener que retocar cada archivo.
  const content = (
    <span className="grid h-28 w-full place-items-center overflow-hidden rounded-2xl bg-white px-6 py-4 transition-all duration-500 sm:h-32">
      <img
        src={sponsor.logo}
        alt={`${sponsor.name} — patrocinador de ${EVENT.name}`}
        loading="lazy"
        className="h-full w-full object-contain"
      />
    </span>
  );

  const classes = `group relative flex flex-col items-center justify-center gap-3 rounded-3xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-white/30 hover:bg-white/[0.12] ${
    carousel ? "w-40 shrink-0" : ""
  }`;

  const inner = (
    <>
      {content}
      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60 transition-colors duration-500 group-hover:text-brand-lime">
        {sponsor.name}
      </span>
    </>
  );

  return sponsor.url ? (
    <a href={sponsor.url} target="_blank" rel="noopener noreferrer" className={classes}>
      {inner}
    </a>
  ) : (
    <div className={classes}>{inner}</div>
  );
}

export default function SponsorsWall() {
  return (
    <section id="aliados" className="relative overflow-hidden bg-ink-800 py-24 md:py-32">
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-80 w-[55rem] -translate-x-1/2 rounded-full bg-brand-amber/10 blur-[140px]"
      />

      <div className="container relative mx-auto px-5 md:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center reveal">
          <p className="eyebrow mb-6">
            <Handshake className="h-3.5 w-3.5" />
            Quienes sostienen el círculo
          </p>
          <h2 className="display text-balance text-[clamp(2rem,6vw,3.5rem)]">
            Patrocinadores y <span className="text-gradient">aliados</span>
          </h2>
          <p className="mt-6 text-lg font-light leading-relaxed text-white/70">
            Empresas y organizaciones colimenses que ponen el hombro para que Un Día para Dar
            exista. Sin ellas, el círculo no cierra.
          </p>
        </div>

        {/* Patrocinadores confirmados: carrusel en móvil, cuadrícula quieta desde sm */}
        <div className="mb-14 reveal">
          <div className="marquee-mask -mx-5 overflow-hidden px-5 sm:hidden">
            <div className="flex w-max animate-marquee gap-5">
              {/* Duplicado exacto: el keyframe "marquee" recorre -50%, que debe
                  coincidir con el ancho de un set completo para que el loop
                  no salte. */}
              {[...SPONSORS, ...SPONSORS].map((sponsor, i) => (
                <LogoTile key={`${sponsor.name}-${i}`} sponsor={sponsor} carousel />
              ))}
            </div>
          </div>

          <div className="mx-auto hidden max-w-3xl grid-cols-4 gap-5 sm:grid">
            {SPONSORS.map((sponsor) => (
              <LogoTile key={sponsor.name} sponsor={sponsor} />
            ))}
          </div>
        </div>

        {/* Invitación a patrocinar */}
        <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-white/12 bg-gradient-to-br from-brand-red/20 via-white/[0.04] to-brand-teal/20 p-8 backdrop-blur-xl reveal md:p-12">
          <div className="flex flex-col items-center gap-7 text-center md:flex-row md:text-left">
            <div className="flex-1">
              <h3 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                Aquí cabe el logo de tu empresa
              </h3>
              <p className="mt-3 text-base font-light leading-relaxed text-white/70">
                Patrocinar Un Día para Dar Colima {EVENT.edition} es sumarte a las tres causas al
                mismo tiempo, con presencia en el Jardín Libertad, en la campaña digital y en el
                boletín de prensa.
              </p>
            </div>
            <a
              href={`https://wa.me/${EVENT.whatsapp}?text=${encodeURIComponent(
                `Hola, mi empresa quiere ser patrocinadora de ${EVENT.name}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary shrink-0"
            >
              <Sparkles className="h-5 w-5" />
              Quiero patrocinar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
