import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin, CalendarPlus } from "lucide-react";
import { EVENT } from "../config/event";
import { downloadCalendar } from "../utils/share";

export default function Footer() {
  return (
    <footer className="grain relative overflow-hidden border-t border-white/10 bg-ink-900 pt-20 pb-10" id="footer">
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-64 w-[50rem] -translate-x-1/2 rounded-full bg-brand-teal/10 blur-[130px]"
      />

      <div className="container relative mx-auto px-5 md:px-8">
        {/* Bloque final de evento */}
        <div className="mx-auto mb-16 max-w-5xl rounded-[2rem] border border-white/12 bg-white/[0.05] p-8 backdrop-blur-xl md:p-12">
          <div className="grid gap-8 text-center sm:grid-cols-3 sm:text-left">
            {[
              { icon: CalendarPlus, label: "Fecha", value: EVENT.dateLabel },
              { icon: MapPin, label: "Lugar", value: EVENT.place },
              { icon: Phone, label: "Horario", value: EVENT.timeLabel },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 sm:items-start">
                <item.icon className="h-6 w-6 text-brand-lime" />
                <span className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-white/45">
                  {item.label}
                </span>
                <span className="font-display text-lg font-bold leading-snug tracking-tight">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <button onClick={downloadCalendar} className="btn-ghost mt-9 w-full sm:w-auto">
            <CalendarPlus className="h-5 w-5" />
            Guardar en mi calendario
          </button>
        </div>

        <div className="grid gap-10 border-t border-white/10 pt-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/LOGO_UDPD_COLIMA.png"
                alt="Un Día para Dar Colima"
                className="h-14 w-14 rounded-2xl bg-white/10 object-contain p-2"
              />
              <span className="font-display text-xl font-extrabold tracking-tight">
                Un Día para Dar Colima
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm font-light leading-relaxed text-white/60">
              Iniciativa local del movimiento global #UnDíaParaDar / Giving Tuesday. Desde 2016
              movilizando la generosidad colimense.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={EVENT.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid h-11 w-11 place-items-center rounded-2xl border border-white/15 bg-white/5 transition-all hover:scale-110 hover:bg-white/15"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={EVENT.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-11 w-11 place-items-center rounded-2xl border border-white/15 bg-white/5 transition-all hover:scale-110 hover:bg-white/15"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${EVENT.email}`}
                aria-label="Correo"
                className="grid h-11 w-11 place-items-center rounded-2xl border border-white/15 bg-white/5 transition-all hover:scale-110 hover:bg-white/15"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <nav aria-label="Secciones">
            <h3 className="mb-4 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-white/45">
              Explora
            </h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><a className="hover:text-brand-lime" href="/#circulos">Círculos de Dar</a></li>
              <li><a className="hover:text-brand-lime" href="/#reveal">Las 3 causas</a></li>
              <li><a className="hover:text-brand-lime" href="/#unete">Cómo participar</a></li>
              <li><a className="hover:text-brand-lime" href="/#aliados">Patrocinadores</a></li>
              <li><Link className="hover:text-brand-lime" to="/historia-2025">Historia 2025</Link></li>
              <li><Link className="hover:text-brand-lime" to="/boletin">Sala de prensa</Link></li>
            </ul>
          </nav>

          <div>
            <h3 className="mb-4 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-white/45">
              Contacto
            </h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <a className="hover:text-brand-lime" href={`mailto:${EVENT.email}`}>
                  {EVENT.email}
                </a>
              </li>
              <li>
                <a className="hover:text-brand-lime" href={`https://wa.me/${EVENT.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  WhatsApp · +52 312 110 9700
                </a>
              </li>
              <li>{EVENT.place}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-xs text-white/45 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} Un Día para Dar Colima · Comité organizador
          </p>
          <p className="font-semibold text-white/60">{EVENT.hashtags.join(" ")}</p>
        </div>
      </div>
    </footer>
  );
}
