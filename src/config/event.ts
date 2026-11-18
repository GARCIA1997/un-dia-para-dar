/**
 * Fuente única de verdad del evento. Cambiar aquí se refleja en toda la página
 * (hero, cuenta regresiva, .ics, datos estructurados y meta tags).
 */
export const SITE_URL = "https://udpd.spartans-dev.io";

export const EVENT = {
  edition: 2026,
  name: "Un Día para Dar Colima 2026",
  tagline: "Tres causas. Un solo círculo. Toda Colima dando.",
  /** Giving Tuesday 2026: martes 1 de diciembre */
  dateISO: "2026-12-01T17:30:00-06:00",
  endISO: "2026-12-01T19:30:00-06:00",
  dateLabel: "Martes 1 de diciembre de 2026",
  timeLabel: "5:30 PM a 7:30 PM",
  /** Las puertas de ISIMA abren antes del evento para recibir donativos. */
  doorsNote: "Desde las 9:00 AM las puertas de ISIMA están abiertas para recibir, con gratitud, tus donativos en especie.",
  placeName: "ISIMA Colima",
  streetAddress: "Aquiles Serdán 549, La Armonía",
  postalCode: "28030",
  place: "ISIMA Colima, Aquiles Serdán 549, La Armonía, Colima, México",
  mapUrl: "https://maps.google.com/?q=ISIMA+Colima,+Aquiles+Serd%C3%A1n+549,+La+Armon%C3%ADa,+Colima",
  whatsapp: "5213121437460",
  email: "undiaparadarcolima@gmail.com",
  hashtags: ["#UnDiaParaDarMX", "#CirculosDeDar", "#UnDiaParaDarColima"],
  /** Número de organizaciones beneficiarias de esta edición. */
  orgsCount: 3,
  social: {
    facebook: "https://www.facebook.com/share/1BfmYrV77r/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/fundacioncarolita_?igsh=NHZndGF2OXB2NzBl",
  },
} as const;

/** Ruta hacia el 1 de diciembre. */
export const REVEAL_TIMELINE = [
  {
    date: "Octubre 2026",
    title: "Se abre el círculo",
    body: "Se lanza la convocatoria: personas, familias y empresas se registran para formar parte de los Círculos de Dar.",
    state: "done" as const,
  },
  {
    date: "9 de noviembre 2026",
    title: "Se revelan las 3 organizaciones",
    body: "El comité da a conocer a las tres organizaciones colimenses beneficiarias de esta edición.",
    state: "done" as const,
  },
  {
    date: "Noviembre 2026",
    title: "Cada círculo elige su causa",
    body: "Los círculos conocen a las organizaciones, conversan y deciden a cuál destinar lo que reúnan.",
    state: "next" as const,
  },
  {
    date: "1 de diciembre 2026",
    title: "Un Día para Dar",
    body: "El círculo se cierra en ISIMA Colima: donativos, talento, tiempo y voz para las tres causas.",
    state: "locked" as const,
  },
];
