import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CirculosDeDar from "../components/CirculosDeDar";
import MysteryOrgs from "../components/MysteryOrgs";
import JoinCircle from "../components/JoinCircle";
import SponsorsWall from "../components/SponsorsWall";
import LegacyTeaser from "../components/LegacyTeaser";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import { useReveal } from "../hooks/useReveal";
import { EVENT, SITE_URL } from "../config/event";

const JSONLD = [
  {
    "@context": "https://schema.org",
    "@type": "Event",
    name: EVENT.name,
    description:
      "Un Día para Dar Colima 2026 estrena los Círculos de Dar: grupos que juntan tiempo, talento y recursos y deciden juntos a cuál de las 3 organizaciones beneficiarias apoyar.",
    startDate: EVENT.dateISO,
    endDate: EVENT.endISO,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    isAccessibleForFree: true,
    inLanguage: "es-MX",
    image: [`${SITE_URL}/og-image.jpg`],
    location: {
      "@type": "Place",
      name: "Jardín Libertad",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jardín Libertad, Centro",
        addressLocality: "Colima",
        addressRegion: "Colima",
        postalCode: "28000",
        addressCountry: "MX",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Un Día para Dar Colima",
      url: SITE_URL,
      email: EVENT.email,
      sameAs: [EVENT.social.facebook, EVENT.social.instagram],
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "MXN",
      availability: "https://schema.org/InStock",
      url: SITE_URL,
      validFrom: "2026-09-01T00:00:00-06:00",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es un Círculo de Dar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Un Círculo de Dar es un grupo de personas con valores en común que se unen para generar un cambio: juntan tiempo, talento y recursos y deciden colectivamente a qué causa destinarlos. Es filantropía colectiva, democrática y participativa.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuándo es Un Día para Dar Colima 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `${EVENT.dateLabel}, de ${EVENT.timeLabel}, en ${EVENT.place}. Coincide con el Giving Tuesday global.`,
        },
      },
      {
        "@type": "Question",
        name: "¿Cuáles son las organizaciones beneficiarias de 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Este año serán tres organizaciones colimenses y sus nombres se revelarán el 24 de noviembre de 2026 en un destape en vivo. Hasta entonces solo publicamos pistas sobre sus causas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo puedo formar mi propio Círculo de Dar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Reúne a cinco personas o más —familia, amigos, tu equipo de trabajo—, define cuánto aporta cada quien (dinero, tiempo o talento) y escríbenos por WhatsApp para registrar el círculo antes del 1 de diciembre.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Un Día para Dar Colima",
    url: SITE_URL,
    inLanguage: "es-MX",
  },
];

export default function Home() {
  useReveal();

  return (
    <div className="min-h-screen bg-ink-900">
      <Seo
        title="Un Día para Dar Colima 2026 · Círculos de Dar | 3 causas por revelar"
        description="El 1 de diciembre de 2026 Colima da en círculo. Forma tu Círculo de Dar y súmate a las 3 organizaciones beneficiarias que se revelarán el 24 de noviembre. #UnDíaParaDarMX"
        path="/"
        jsonLd={JSONLD}
      />
      <Navbar />
      <main>
        <Hero />
        <CirculosDeDar />
        <MysteryOrgs />
        <JoinCircle />
        <SponsorsWall />
        <LegacyTeaser />
      </main>
      <Footer />
    </div>
  );
}
