import {
  Calendar,
  User,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Lock,
  Handshake,
  Archive,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import { useReveal } from "../hooks/useReveal";
import { EVENT, SITE_URL } from "../config/event";

interface Newsletter {
  id: string;
  edition: 2026 | 2025;
  title: string;
  description: string;
  date: string;
  isoDate: string;
  author: string;
  category: string;
  content: string;
  /** Comunicados 2025: foto real del evento. Comunicados 2026: tarjeta gráfica. */
  image?: string;
  icon?: LucideIcon;
  accent?: string;
}

const newsletters: Newsletter[] = [
  // ---------- Edición 2026 ----------
  {
    id: "2026-lanzamiento",
    edition: 2026,
    title: "Un Día para Dar Colima 2026 estrena los Círculos de Dar",
    description:
      "La campaña cambia de dinámica: en vez de una sola causa, este año tres organizaciones colimenses se benefician a la vez, elegidas por la propia comunidad.",
    date: "16 de septiembre de 2026",
    isoDate: "2026-09-16",
    author: "Comité Organizador Un Día Para Dar Colima",
    category: "Comunicado Oficial",
    icon: Sparkles,
    accent: "from-brand-red to-brand-orange",
    content: `COLIMA, Col. – 16 de septiembre de 2026 – El comité organizador de "Un Día para Dar Colima" anuncia el arranque de su edición ${EVENT.edition} bajo un formato inédito en la ciudad: los Círculos de Dar. A diferencia de años anteriores, en los que la campaña se organizaba alrededor de una sola institución beneficiaria, este año grupos de personas, familias y empresas podrán formar sus propios círculos, aportar tiempo, talento o recursos, y decidir en conjunto a cuál causa apoyar.

"Queremos que dar deje de ser un acto individual y se vuelva una decisión colectiva", explicó el comité organizador. "Cada círculo tiene voz propia: no les decimos a quién ayudar, ellos lo deciden entre todos".

Como parte de esta edición, serán tres las organizaciones colimenses beneficiarias — un salto respecto a la edición anterior, enfocada únicamente en la Fundación Carolita IAP. Sus nombres se mantendrán en reserva hasta el destape oficial, programado para el 24 de noviembre de 2026, semana previa al evento central.

La cita para cerrar el círculo será el ${EVENT.dateLabel}, de ${EVENT.timeLabel}, en el ${EVENT.place}, coincidiendo una vez más con el movimiento global Giving Tuesday.

Un Día para Dar Colima
Es la iniciativa local del movimiento global #UnDíaParaDar / Giving Tuesday, que desde 2016 ha movilizado a miles de colimenses en actos de generosidad. La edición ${EVENT.edition} suma la mecánica de Círculos de Dar como su principal novedad.`,
  },
  {
    id: "2026-misterio",
    edition: 2026,
    title: '"Ya las elegimos, pero no lo podemos contar": el misterio de las 3 organizaciones',
    description:
      "El comité confirma que las tres organizaciones beneficiarias de este año ya fueron seleccionadas. Sus nombres se revelan hasta el 24 de noviembre.",
    date: "20 de septiembre de 2026",
    isoDate: "2026-09-20",
    author: "Comité Organizador Un Día Para Dar Colima",
    category: "Detrás de cámaras",
    icon: Lock,
    accent: "from-brand-amber to-brand-lime",
    content: `COLIMA, Col. – 20 de septiembre de 2026 – Contrario a lo que se podría pensar, el proceso de selección de las tres organizaciones beneficiarias de "Un Día para Dar Colima ${EVENT.edition}" ya concluyó. El comité organizador confirmó que las causas fueron evaluadas y elegidas durante el verano, pero se mantendrán en secreto hasta el día del destape.

"No es un truco de mercadotecnia, es parte de la mecánica de los Círculos de Dar", aclaró el comité. "Queremos que la gente se sume a un círculo por confianza en el movimiento, no solo porque ya sabe a quién va a ayudar. Esa es la diferencia con años anteriores".

Mientras tanto, en el sitio oficial se han publicado pistas sobre el trabajo de cada organización, sin revelar nombres ni logotipos. El destape en vivo se realizará el 24 de noviembre de 2026 y será transmitido a los círculos ya registrados antes de darse a conocer públicamente.

Quienes deseen enterarse primero pueden registrar su interés directamente por WhatsApp desde la sección "Las 3 causas" del sitio oficial.`,
  },
  {
    id: "2026-patrocinadores",
    edition: 2026,
    title: "Empresas colimenses se suman como patrocinadoras del círculo 2026",
    description:
      "Spartans Dev, Razo, Casa Macehual y La Bestia Grupera confirman su respaldo a la edición de este año.",
    date: "25 de septiembre de 2026",
    isoDate: "2026-09-25",
    author: "Comité Organizador Un Día Para Dar Colima",
    category: "Patrocinadores",
    icon: Handshake,
    accent: "from-brand-teal to-brand-lime",
    content: `COLIMA, Col. – 25 de septiembre de 2026 – El comité organizador de "Un Día para Dar Colima ${EVENT.edition}" dio a conocer a las primeras empresas confirmadas como patrocinadoras de esta edición: Spartans Dev, Razo, Casa Macehual y La Bestia Grupera.

Cada patrocinador aporta algo distinto al movimiento: desde el desarrollo del sitio oficial y la plataforma digital de los Círculos de Dar, hasta presencia en medios, servicios de bienestar en el Jardín Libertad y difusión en radio.

"Patrocinar este año significa sumarse a las tres causas al mismo tiempo, no solo a una", señaló el comité. "Es una manera de multiplicar el impacto sin tener que elegir a cuál organización apoyar".

El comité invitó a más empresas e instituciones colimenses a sumarse como patrocinadoras antes del 1 de diciembre, con presencia garantizada en el evento, en la campaña digital y en este boletín de prensa.`,
  },
  // ---------- Archivo 2025 ----------
  {
    id: "2025-lanzamiento",
    edition: 2025,
    title:
      'Beneficiará el movimiento global, este diciembre "Un Día para Dar", a sector vulnerable de Colima',
    description:
      "Movimiento internacional en Colima busca incentivar la generosidad a través de diversas actividades el próximo 02 de diciembre en el centro de la capital colimense",
    date: "28 de noviembre de 2025",
    isoDate: "2025-11-28",
    author: "Comité Organizador Un Día Para Dar Colima",
    category: "Comunicado Oficial",
    content: `COLIMA, Col. – 28 de noviembre de 2025 – El comité organizador de "Un Día para Dar Colima" 2025 anuncia el lanzamiento oficial de su campaña anual de generosidad, en beneficio de la Fundación Carolita IAP. Se invita a todos los colimenses a sumarse con actos de generosidad a las distintas actividades que se llevarán a cabo en el Jardín Libertad. El objetivo es ambicioso; mejorar las condiciones de infraestructura y capacitación profesional de las instalaciones de dicha fundación dedicada a la atención y formación integral de personas con discapacidad en situación de vulnerabilidad.

Bajo el lema "Un día para transformar vidas. Únete y sé parte del cambio", Claudia Razo Morales, Directora del Comité Organizador de "Un día para Dar Colima" explica -Este año, no solo queremos invitar a la gente a donar, queremos crear un verdadero viaje de generosidad que una a nuestra comunidad-. Por ello, el comité ha planeado incentivar a que se sumen familias, empresas y amigos para conocer la nueva administración de la Fundación Carolita IAP, para concientizar y lograr generar un impacto real y visible en la vida de los jóvenes y adultos a los que sirve la fundación. Claudia Razo concluye -Nuestra meta es ambiciosa, pero sabemos que el corazón de Colima es aún más grande-.

Con este evento se sumará Colima a más de 80 países para celebrar el Día para Dar (Giving Tuesday). Como parte de la estrategia de "Un Día para Dar Colima" en beneficio de la Fundación Carolita I.A.P., se ha dispuesto la instalación de stands ubicados estratégicamente en el Jardín Libertad en Colima, Colima.

Estos módulos de generosidad concentrarán diversas actividades de apoyo. Habrá espacios dedicados a la venta de productos con causa, incluyendo galletas elaboradas por la Fundación Carolita I.A.P. y ropa. Adicionalmente, el público podrá acceder a distintos servicios de Casa Macehual, por ejemplo masajes relajantes, y se recibirán ahí mismo donaciones en especie para la Fundación. Finalmente, un módulo informativo proporcionará detalles sobre el movimiento "Un Día para Dar Colima".

Cabe destacar que el comité organizador garantiza que la totalidad de los recursos obtenidos mediante la venta de estos productos será destinada íntegramente a la recaudación de fondos para la Fundación Carolita I.A.P., así como un stand de AMANC Colima; asociación invitada con venta de donas con causa.

"Para la familia de Fundación Carolita, ser los beneficiarios de "Un Día para Dar Colima" es un honor y una oportunidad inmensa", comentó Cristina Delgado Cárdenas, Presidenta de Fundación Carolita IAP. "Alcanzar la meta de recaudación nos permitirá expandir nuestras terapias especializadas, talleres de desarrollo de habilidades y mejorar las instalaciones, ofreciendo un futuro más brillante y autónomo a nuestros jóvenes. La comunidad es nuestro motor, y esta campaña lo demuestra".

Se invita a toda la ciudadanía, empresas y organizaciones a sumarse a la causa donando, participando como voluntarios o asistiendo al evento el 2 de diciembre. Toda la información se encuentra en el sitio https://un-dia-para-dar-colima.spartans-dev.io/ y en la página de Facebook: Un Día para Dar Colima.

Un Día para Dar Colima
Es la iniciativa local del movimiento global #UnDíaParaDar #GivingTuesday, que busca incentivar y celebrar la generosidad en todo el mundo. Desde su implementación en Colima, desde 2016 ha movilizado a miles de personas y ha sido un catalizador de apoyo para diversas causas sociales en el estado.

Fundación Carolita I.A.P.
Es la nueva administración de la institución de asistencia privada sin fines de lucro, comprometida con el desarrollo integral de personas con discapacidad en Colima. A través de sus programas educativos, terapéuticos y culturales, busca promover la autonomía, la inclusión y mejorar la calidad de vida de sus beneficiarios y sus familias.`,
    image: "/images/boletin/boletin.jpg",
  },
  {
    id: "2025-galletas",
    edition: 2025,
    title: "Galletas Carolita: Apoyo desde la cocina",
    description:
      "Conoce cómo nuestras galletas artesanales generan ingresos y oportunidades.",
    date: "10 de noviembre de 2025",
    isoDate: "2025-11-10",
    author: "Un Día Para Dar Colima",
    category: "Productos",
    content: `Las Galletas Carolita son mucho más que un producto delicioso. Son el resultado del esfuerzo, dedicación y talento de nuestros beneficiarios, quienes participan activamente en su elaboración.

Este proyecto de producción artesanal no solo genera ingresos para la fundación, sino que también proporciona oportunidades de capacitación, desarrollo de habilidades y generación de ingresos para nuestros beneficiarios.

Cada galleta que compras apoya directamente a personas con discapacidad. Nuestras variedades incluyen chocolate, vainilla, avena y más. ¡Pruébalas y sé parte del cambio!

Para hacer tu pedido, contáctanos por WhatsApp o visita nuestras redes sociales.`,
    image: "/images/boletin/galletas.jpg",
  },
  {
    id: "2025-necesidades",
    edition: 2025,
    title: "Necesidades prioritarias: Cómo puedes ayudar",
    description:
      "Te contamos las necesidades actuales que requieren tu apoyo solidario.",
    date: "5 de noviembre de 2025",
    isoDate: "2025-11-05",
    author: "Dirección General",
    category: "Necesidades",
    content: `Para continuar brindando atención de calidad a nuestros beneficiarios, enfrentamos algunas necesidades prioritarias que requieren el apoyo de la comunidad.

Entre nuestras principales necesidades están:

• Becas para capacitación profesional
• Materiales didácticos y de terapia
• Mejora y mantenimiento de instalaciones
• Recursos para transporte y movilidad
• Equipos especializados para terapias

Si deseas conocer en detalle cómo puedes apoyar alguna de estas necesidades, te invitamos a visitar nuestra página de Carolita o contactarnos directamente. Tu aporte, grande o pequeño, hace la diferencia.`,
    image: "/images/boletin/necesidades.jpg",
  },
];

const needsImages = [
  { src: "/images/boletin/boletint4.jpg", title: "Remodelación y adaptación de baños", description: "Mejora de la infraestructura sanitaria para mayor accesibilidad" },
  { src: "/images/boletin/boletin5.jpg", title: "Taller de repostería", description: "Desarrollo de habilidades culinarias y autonomía" },
  { src: "/images/boletin/boletin6.jpg", title: "Pintura de instalaciones", description: "Mantenimiento y embellecimiento de espacios" },
  { src: "/images/boletin/boletin7.jpg", title: "Materiales didácticos y educativos", description: "Recursos para el aprendizaje continuo" },
  { src: "/images/boletin/boletin8.jpg", title: "Instalaciones eléctricas", description: "Mejoras en seguridad y eficiencia energética" },
  { src: "/images/boletin/boletin9.jpg", title: "Equipamiento de movimiento y fisioterapia", description: "Herramientas para terapias especializadas" },
  { src: "/images/boletin/boletin10.jpg", title: "Impermeabilización y reparación de techos", description: "Protección de instalaciones y bienestar" },
  { src: "/images/boletin/boletin11.jpg", title: "Becas y uniformes", description: "Apoyo educativo integral para beneficiarios" },
];

const BOLETIN_JSONLD = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Sala de prensa · Un Día para Dar Colima",
  description:
    "Comunicados oficiales de Un Día para Dar Colima: la edición 2026 con los Círculos de Dar y el archivo de comunicados de la edición 2025.",
  url: `${SITE_URL}/boletin`,
  hasPart: newsletters.map((n) => ({
    "@type": "NewsArticle",
    headline: n.title,
    description: n.description,
    datePublished: n.isoDate,
    author: { "@type": "Organization", name: n.author },
  })),
};

/** Portada del comunicado: foto real (2025) o tarjeta gráfica de marca (2026, sin fotografía aún). */
function NewsletterCover({ item, className = "" }: { item: Newsletter; className?: string }) {
  if (item.image) {
    return (
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }
  const Icon = item.icon ?? Sparkles;
  return (
    <div
      className={`grid h-full w-full place-items-center bg-gradient-to-br ${
        item.accent ?? "from-brand-red to-brand-teal"
      } ${className}`}
    >
      <Icon className="h-12 w-12 text-white/90" strokeWidth={1.5} />
    </div>
  );
}

export default function Boletin() {
  useReveal([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const toggleExpand = (id: string) => setExpandedId(expandedId === id ? null : id);
  const openCarousel = (index: number) => setSelectedImageIndex(index);
  const closeCarousel = () => setSelectedImageIndex(null);
  const nextImage = () =>
    setSelectedImageIndex((i) => (i === null ? null : (i + 1) % needsImages.length));
  const prevImage = () =>
    setSelectedImageIndex((i) => (i === null ? null : (i - 1 + needsImages.length) % needsImages.length));

  const [featured, ...rest] = newsletters;
  const restEdicion2026 = rest.filter((n) => n.edition === 2026);
  const archivo2025 = rest.filter((n) => n.edition === 2025);
  const expandedItem = newsletters.find((n) => n.id === expandedId);

  return (
    <div className="min-h-screen bg-ink-900">
      <Seo
        title="Sala de prensa · Un Día para Dar Colima 2026"
        description="Comunicados oficiales de Un Día para Dar Colima: el lanzamiento de los Círculos de Dar, el misterio de las 3 organizaciones 2026 y el archivo de comunicados de la edición 2025."
        path="/boletin"
        jsonLd={BOLETIN_JSONLD}
      />
      <Navbar />

      {/* Header */}
      <header className="grain relative overflow-hidden bg-ink-900 pt-32 pb-16 md:pt-40 md:pb-20">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
        <div
          aria-hidden
          className="absolute left-1/2 top-0 h-72 w-[50rem] -translate-x-1/2 rounded-full bg-brand-red/15 blur-[140px]"
        />
        <div className="container relative mx-auto px-5 md:px-8">
          <p className="eyebrow mb-6">Sala de prensa</p>
          <h1 className="display text-balance text-[clamp(2rem,6vw,3.75rem)]">
            Boletín <span className="text-gradient">informativo</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg font-light leading-relaxed text-white/70">
            Comunicados oficiales de la edición {EVENT.edition} y el archivo completo de la
            campaña 2025 en beneficio de la Fundación Carolita IAP.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Comunicado destacado */}
          <div className="order-1 lg:col-span-2">
            <article className="gradient-border overflow-hidden rounded-[2rem] bg-white/[0.04] backdrop-blur-xl reveal">
              <div className="relative h-72 overflow-hidden md:h-96">
                <NewsletterCover item={featured} />
                <div className="absolute top-4 right-4">
                  <span className="rounded-full bg-brand-red px-4 py-2 text-xs font-bold text-white shadow-lg">
                    Destacado
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block rounded-full bg-black/40 px-3 py-1 text-sm font-medium text-white/90 backdrop-blur-sm">
                    {featured.category}
                  </span>
                </div>
              </div>
              <div className="p-7 md:p-12">
                <h2 className="font-display text-2xl font-bold leading-tight tracking-tight md:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-base font-light leading-relaxed text-white/70 md:text-lg">
                  {featured.description}
                </p>
                <div className="mt-6 flex flex-col gap-3 text-sm text-white/50 md:flex-row md:gap-6">
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {featured.date}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {featured.author}
                  </span>
                </div>
                <button onClick={() => toggleExpand(featured.id)} className="btn-primary mt-8">
                  {expandedId === featured.id ? "Leer menos" : "Leer más"}
                  <ArrowRight className="h-4 w-4" />
                </button>

                {expandedId === featured.id && (
                  <div className="mt-9 border-t border-white/10 pt-9">
                    <p className="whitespace-pre-line text-base font-light leading-relaxed text-white/75">
                      {featured.content}
                    </p>
                  </div>
                )}
              </div>
            </article>
          </div>

          {/* Sidebar: resto de 2026 + archivo 2025 */}
          <aside className="order-2 lg:col-span-1">
            <div className="space-y-10 lg:sticky lg:top-28">
              {restEdicion2026.length > 0 && (
                <div>
                  <h3 className="mb-4 font-display text-xl font-bold tracking-tight">
                    Más comunicados {EVENT.edition}
                  </h3>
                  <div className="space-y-4 reveal">
                    {restEdicion2026.map((item) => (
                      <NewsletterCard
                        key={item.id}
                        item={item}
                        isExpanded={expandedId === item.id}
                        onToggle={() => toggleExpand(item.id)}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="mb-4 flex items-center gap-2 font-display text-xl font-bold tracking-tight text-white/70">
                  <Archive className="h-5 w-5" />
                  Archivo 2025
                </h3>
                <div className="space-y-4 reveal">
                  {archivo2025.map((item) => (
                    <NewsletterCard
                      key={item.id}
                      item={item}
                      isExpanded={expandedId === item.id}
                      onToggle={() => toggleExpand(item.id)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Necesidades de Carolita: aparece al expandir cualquier comunicado del archivo 2025 */}
        {expandedItem?.edition === 2025 && (
          <div className="mt-16 border-t border-white/10 pt-14 reveal">
            <div className="mx-auto mb-9 max-w-2xl text-center">
              <h3 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                Necesidades de Carolita
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-sm font-light text-white/60">
                Conoce las áreas donde tu apoyo puede generar un impacto significativo en la vida
                de nuestros beneficiarios
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {needsImages.map((image, index) => (
                <button
                  key={image.src}
                  onClick={() => openCarousel(index)}
                  className="group relative h-48 overflow-hidden rounded-2xl border border-white/10 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <p className="absolute bottom-3 left-3 right-3 text-left text-sm font-bold text-white">
                    {image.title}
                  </p>
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-300 group-hover:border-brand-lime" />
                </button>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a
                href={`https://wa.me/${EVENT.whatsapp}?text=${encodeURIComponent(
                  "Hola, me gustaría conocer más sobre cómo puedo apoyar las necesidades de Fundación Carolita"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lime"
              >
                ¿Cómo puedo ayudar?
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </main>

      <Footer />

      {/* Carousel Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          onClick={closeCarousel}
        >
          <button
            onClick={closeCarousel}
            aria-label="Cerrar"
            className="absolute right-4 top-4 z-10 text-white transition-colors hover:text-brand-lime"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Anterior"
            className="absolute left-4 z-10 text-white transition-colors hover:text-brand-lime"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Siguiente"
            className="absolute right-4 z-10 text-white transition-colors hover:text-brand-lime"
          >
            <ChevronRight className="h-10 w-10" />
          </button>

          <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img
                src={needsImages[selectedImageIndex].src}
                alt={needsImages[selectedImageIndex].title}
                className="h-auto max-h-[80vh] w-full rounded-[20px] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 rounded-b-[20px] bg-gradient-to-t from-black/90 to-transparent p-6">
                <h4 className="mb-2 text-2xl font-bold text-white">
                  {needsImages[selectedImageIndex].title}
                </h4>
                <p className="text-base font-light text-white/90">
                  {needsImages[selectedImageIndex].description}
                </p>
              </div>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              {needsImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  aria-label={`Ir a la imagen ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === selectedImageIndex ? "w-8 bg-brand-lime" : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function NewsletterCard({
  item,
  isExpanded,
  onToggle,
}: {
  item: Newsletter;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <article
      onClick={onToggle}
      className={`cursor-pointer overflow-hidden rounded-[1.5rem] border backdrop-blur-xl transition-all duration-300 ${
        isExpanded
          ? "border-brand-lime/50 bg-white/[0.08]"
          : "border-white/10 bg-white/[0.04] hover:border-white/25 hover:bg-white/[0.07]"
      }`}
    >
      <div className="relative h-36 overflow-hidden">
        <NewsletterCover item={item} className="transition-transform duration-500 hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <span className="absolute left-2 top-2 rounded-full bg-brand-red px-2.5 py-1 text-[0.65rem] font-bold text-white">
          {item.category}
        </span>
      </div>
      <div className="p-4">
        <h4 className="line-clamp-2 text-sm font-bold leading-snug text-white">{item.title}</h4>

        {!isExpanded && (
          <>
            <p className="mt-2 line-clamp-2 text-xs font-light text-white/55">{item.description}</p>
            <span className="mt-2 flex items-center text-xs text-white/40">
              <Calendar className="mr-1 h-3 w-3" />
              {item.date}
            </span>
          </>
        )}

        {isExpanded && (
          <div className="mt-3 animate-fade-in-up">
            <div className="mb-3 flex flex-col gap-1.5 text-xs text-white/50">
              <span className="flex items-center">
                <Calendar className="mr-2 h-3 w-3" />
                {item.date}
              </span>
              <span className="flex items-center">
                <User className="mr-2 h-3 w-3" />
                {item.author}
              </span>
            </div>
            <p className="mb-3 whitespace-pre-line text-sm font-light leading-relaxed text-white/70">
              {item.content}
            </p>
          </div>
        )}
      </div>
    </article>
  );
}
