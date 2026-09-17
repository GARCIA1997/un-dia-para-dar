import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { EVENT } from "../config/event";

const LINKS = [
  { label: "Círculos de Dar", to: "/#circulos" },
  { label: "Las 3 causas", to: "/#reveal" },
  { label: "Únete", to: "/#unete" },
  { label: "Aliados", to: "/#aliados" },
  { label: "Historia 2025", to: "/historia-2025" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const max = document.body.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Barra de progreso de lectura */}
      <div
        className="h-[3px] origin-left bg-gradient-to-r from-brand-red via-brand-amber to-brand-lime transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />

      <nav
        className={`transition-all duration-500 ${
          scrolled ? "bg-ink-900/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
        }`}
        aria-label="Navegación principal"
      >
        <div className="container mx-auto flex items-center justify-between gap-4 px-5 py-3 md:px-8">
          <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Inicio">
            <img
              src="/LOGO_UDPD_COLIMA.png"
              alt="Un Día para Dar Colima"
              className="h-11 w-11 rounded-2xl bg-white/10 object-contain p-1.5 backdrop-blur"
            />
            <span className="hidden font-display text-base font-extrabold leading-none tracking-tight sm:block">
              Un Día para Dar
              <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brand-lime">
                Colima {EVENT.edition}
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="rounded-full px-4 py-2 text-sm font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/${EVENT.whatsapp}?text=${encodeURIComponent(
                "Hola, quiero formar parte de un Círculo de Dar en Un Día para Dar Colima 2026."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lime hidden px-5 py-2.5 text-sm sm:inline-flex"
            >
              <Sparkles className="h-4 w-4" />
              Quiero mi círculo
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur lg:hidden"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        <div
          className={`overflow-hidden border-t border-white/10 bg-ink-900/95 backdrop-blur-xl transition-[max-height] duration-500 lg:hidden ${
            open ? "max-h-[420px]" : "max-h-0"
          }`}
        >
          <ul className="container mx-auto space-y-1 px-5 py-4">
            {LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="block rounded-2xl px-4 py-3 text-base font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={`https://wa.me/${EVENT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lime w-full"
              >
                <Sparkles className="h-4 w-4" />
                Quiero mi círculo
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
