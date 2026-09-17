/**
 * Fuente única de verdad del evento. Cambiar aquí se refleja en toda la página
 * (hero, cuenta regresiva, .ics, datos estructurados y meta tags).
 */
export const SITE_URL = "https://un-dia-para-dar-colima.spartans-dev.io";

export const EVENT = {
  edition: 2026,
  name: "Un Día para Dar Colima 2026",
  tagline: "Tres causas. Un solo círculo. Toda Colima dando.",
  /** Giving Tuesday 2026: martes 1 de diciembre */
  dateISO: "2026-12-01T09:00:00-06:00",
  endISO: "2026-12-01T20:00:00-06:00",
  dateLabel: "Martes 1 de diciembre de 2026",
  timeLabel: "9:00 AM – 8:00 PM",
  place: "Jardín Libertad, Colima, México",
  whatsapp: "5213121109700",
  email: "undiaparadarcolima@gmail.com",
  hashtags: ["#UnDiaParaDarMX", "#CirculosDeDar", "#UnDiaParaDarColima"],
  /** Número de organizaciones beneficiarias de esta edición (aún sin revelar). */
  orgsCount: 3,
  social: {
    facebook: "https://www.facebook.com/share/1BfmYrV77r/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/fundacioncarolita_?igsh=NHZndGF2OXB2NzBl",
  },
} as const;

/** Fechas de la ruta hacia el 1 de diciembre: expectativa escalonada. */
export const REVEAL_TIMELINE = [
  {
    date: "Octubre 2026",
    title: "Se abre el círculo",
    body: "Lanzamos la convocatoria: personas, familias y empresas se registran para formar parte de los Círculos de Dar.",
    state: "done" as const,
  },
  {
    date: "Noviembre 2026",
    title: "Primera pista",
    body: "Revelamos las tres causas —no los nombres— que sostendrán las organizaciones de este año.",
    state: "next" as const,
  },
  {
    date: "24 de noviembre 2026",
    title: "El gran reveal",
    body: "Se destapan las 3 organizaciones beneficiarias en vivo, frente a todos los círculos.",
    state: "locked" as const,
  },
  {
    date: "1 de diciembre 2026",
    title: "Un Día para Dar",
    body: "El círculo se cierra en el Jardín Libertad: donativos, talento, tiempo y voz para las tres causas.",
    state: "locked" as const,
  },
];
