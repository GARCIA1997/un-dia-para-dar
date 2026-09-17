import { Handshake, Sparkles } from "lucide-react";
import { EVENT } from "../config/event";

interface Sponsor {
  name: string;
  logo: string;
  url?: string;
  tier: "principal" | "aliado";
}

/**
 * Patrocinadores y aliados de Un Día para Dar Colima.
 * Los "principales" se muestran grandes; los "aliados" en el muro que corre.
 */
const SPONSORS: Sponsor[] = [
  { name: "Spartans Dev", logo: "/images/sponsors/spartansdevio.png", url: "https://spartans-dev.io", tier: "principal" },
  { name: "Coparmex", logo: "/images/sponsors/coparmex.png", tier: "principal" },
  { name: "CMIC", logo: "/images/sponsors/cmic.png", tier: "principal" },
  { name: "Razo", logo: "/images/sponsors/razo.png", tier: "aliado" },
  { name: "Casa Macehual", logo: "/images/sponsors/macehual.png", tier: "aliado" },
  { name: "Interestelar", logo: "/images/sponsors/interestelar.png", tier: "aliado" },
  { name: "Bestia Grupera", logo: "/images/sponsors/bestia.png", tier: "aliado" },
];

const PRINCIPALES = SPONSORS.filter((s) => s.tier === "principal");
const ALIADOS = SPONSORS.filter((s) => s.tier === "aliado");

function LogoTile({ sponsor, large = false }: { sponsor: Sponsor; large?: boolean }) {
  // Los logos vienen en formatos y fondos distintos, así que van sobre una
  // "tarjeta" clara: se ven bien todos sin tener que retocar cada archivo.
  const content = (
    <span
      className={`grid w-full place-items-center overflow-hidden rounded-2xl bg-white px-5 py-3 transition-all duration-500 ${
        large ? "h-24" : "h-16"
      }`}
    >
      <img
        src={sponsor.logo}
        alt={`${sponsor.name} — patrocinador de ${EVENT.name}`}
        loading="lazy"
        className="h-full w-full object-contain grayscale transition-all duration-500 group-hover:grayscale-0"
      />
    </span>
  );

  const classes = `group relative flex flex-col items-center justify-center gap-2 rounded-3xl border border-white/10 bg-white/[0.05] p-3 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-white/30 hover:bg-white/[0.12] ${
    large ? "" : "w-48 shrink-0"
  }`;

  const inner = (
    <>
      {content}
      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/45 transition-colors duration-500 group-hover:text-brand-lime">
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

        {/* Patrocinadores principales */}
        <div className="mx-auto mb-10 grid max-w-4xl gap-5 sm:grid-cols-3 reveal">
          {PRINCIPALES.map((sponsor) => (
            <LogoTile key={sponsor.name} sponsor={sponsor} large />
          ))}
        </div>

        {/* Muro que corre con el resto de aliados */}
        <div className="marquee-mask relative mb-14 overflow-hidden reveal">
          <div className="flex w-max animate-marquee gap-5 hover:[animation-play-state:paused]">
            {[...ALIADOS, ...ALIADOS, ...ALIADOS, ...ALIADOS].map((sponsor, i) => (
              <LogoTile key={`${sponsor.name}-${i}`} sponsor={sponsor} />
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
