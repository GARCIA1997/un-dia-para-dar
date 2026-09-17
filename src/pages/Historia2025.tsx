import {
  ArrowRight,
  Book,
  Briefcase,
  Calendar,
  Car,
  Clock,
  Cookie,
  GraduationCap,
  Heart,
  HomeIcon,
  MapPin,
  Share2,
  Stethoscope,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { shareEvent } from "../utils/share";
import WhatsAppButton from "../components/WhatsAppButton";
import ImpactStats from "../components/ImpactStats";
import StudentCarousel from "../components/StudentCarousel";
import NeedsCta from "../components/NeedsCta";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import { useReveal } from "../hooks/useReveal";
import { SITE_URL } from "../config/event";


const HISTORIA_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Un Día para Dar Colima 2025 – Fundación Carolita IAP",
  description:
    "Edición 2025 de Un Día para Dar Colima en beneficio de la Fundación Carolita IAP, celebrada el 2 de diciembre de 2025 en el Jardín Libertad.",
  startDate: "2025-12-02T09:00:00-06:00",
  endDate: "2025-12-02T20:00:00-06:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Jardín Libertad",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Colima",
      addressRegion: "Colima",
      addressCountry: "MX",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Un Día para Dar Colima",
    url: SITE_URL,
  },
};

export default function Historia2025() {
  useReveal();

  return (
    <div className="min-h-screen bg-gray-50">
      <Seo
        title="Historia 2025 · Un Día para Dar Colima y Fundación Carolita IAP"
        description="El archivo de la edición 2025: cómo Colima se volcó sobre la Fundación Carolita IAP el 2 de diciembre en el Jardín Libertad. Historias, impacto y necesidades."
        path="/historia-2025"
        jsonLd={HISTORIA_JSONLD}
      />
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-[#EE202E] via-[#EE202E] to-[#d11c29] text-white overflow-hidden"
        id="home"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="text-center max-w-5xl mx-auto">
            {/* Logos */}
            <div className="flex justify-center items-center space-x-12 mb-10">
              <div className="bg-white/20 backdrop-blur-sm rounded-[20px] w-28 h-28 flex items-center justify-center shadow-lg">
                <img
                  src="/LOGO_UDPD_COLIMA.png"
                  alt="Logo Un Día para Dar Colima"
                  className="w-[90%] h-[90%] object-contain"
                />
              </div>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] backdrop-blur-sm">
              Archivo · Edición 2025
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
              Un día para dar Colima 2025
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-[#FFFFFF] tracking-tight animate-fade-in-up">
              Fundación Carolita IAP
            </h2>
            <p className="text-2xl md:text-3xl mb-12 text-white/95 leading-relaxed font-light max-w-4xl mx-auto">
              "Un día para transformar vidas. Únete y sé parte del cambio."
            </p>
            <div className="flex items-center justify-center space-x-3 mb-10 text-xl md:text-2xl font-medium">
              <Calendar className="w-7 h-7" />
              <span>Martes 2 de diciembre de 2025</span>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 max-w-3xl mx-auto">
              <Link
                to="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#EE202E] shadow-xl transition-all duration-300 hover:scale-105"
              >
                Ver la edición 2026
                <ArrowRight className="w-5 h-5" />
              </Link>
              <WhatsAppButton
                message="Hola, quiero comprar galletas para apoyar a Fundación Carolita IAP."
                variant="outline"
                className="w-full sm:w-auto bg-white/10 border-white text-white hover:bg-white hover:text-[#EE202E] text-lg px-8 py-4 shadow-xl"
              >
                Comprar Galletas
              </WhatsAppButton>
            </div>

            {/* Share buttons */}
            <div className="flex justify-center space-x-6 mt-12">
              <button
                onClick={shareEvent}
                aria-label="Compartir"
                className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Share2 className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Un Día para Dar */}
      <section className="py-20 md:py-32 bg-white" id="description">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#808285] mb-12 tracking-tight">
              ¿Qué es "Un día para dar"?
            </h2>
            <p className="text-xl md:text-2xl text-[#808285] leading-relaxed font-light">
              "Un día para dar es un movimiento global que promueve la
              solidaridad y la generosidad. Cada año, millones de personas se
              unen para donar su tiempo, recursos y apoyo a causas que lo
              necesitan. Este 2025 unimos esfuerzos de corazón para apoyar a la
              Fundación Carolita, que hoy está en proceso de transformación."
            </p>
          </div>
        </div>
      </section>

      {/* About Foundation */}
      <section className="py-20 md:py-32 bg-gray-50" id="about">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#808285] mb-12 tracking-tight">
                ¿Quién es la Fundación Carolita IAP?
              </h2>
              <p className="text-xl md:text-2xl text-[#808285] leading-relaxed max-w-5xl mx-auto font-light">
                "Nuestra asociación tiene como propósito brindar atención,
                formación y acompañamiento integral a personas con discapacidad
                en situación de vulnerabilidad. Lo hacemos a través de programas
                educativos, terapéuticos, culturales y de desarrollo personal
                que fomentan su inclusión, fortalecen su autonomía y mejoran su
                calidad de vida."
              </p>
            </div>

            {/* Mission and Vision Layout */}
            <div className="grid lg:grid-cols-2 gap-10 mb-16">
              {/* Mission - Orange Background */}
              <div className="bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-[20px] p-10 text-white transform transition-all duration-700 hover:scale-105 shadow-xl">
                <div className="flex items-center mb-8">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mr-5">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight">Misión</h3>
                </div>
                <p className="text-white/95 leading-relaxed text-xl font-light">
                  "Brindar atención, formación y acompañamiento integral a
                  personas con discapacidad en situación de vulnerabilidad, a
                  través de programas educativos, terapéuticos, culturales y de
                  desarrollo personal que fortalezcan su inclusión, autonomía y
                  calidad de vida, en un entorno de respeto, calidez y
                  dignidad."
                </p>
              </div>

              {/* Vision - White Background */}
              <div className="bg-white rounded-[20px] p-10 shadow-xl border border-gray-100 transform transition-all duration-700 hover:scale-105">
                <div className="flex items-center mb-8">
                  <div className="w-14 h-14 bg-[#14AC94]/10 rounded-full flex items-center justify-center mr-5">
                    <Users className="w-7 h-7 text-[#14AC94]" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#808285] tracking-tight">
                    Visión
                  </h3>
                </div>
                <p className="text-[#808285] leading-relaxed text-xl font-light">
                  "Ser un referente regional en la atención integral a personas
                  con discapacidad, reconocida por su enfoque humano, inclusivo
                  y transformador, donde cada persona sea valorada, desarrolle
                  su potencial y ejerza plenamente sus derechos como parte
                  activa de la sociedad."
                </p>
              </div>
            </div>

            {/* Values - Three Blue Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-[#14AC94] to-[#0f9582] rounded-[20px] p-8 text-white transform transition-all duration-700 hover:scale-105 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold tracking-tight">
                    Inclusión social y vida independiente
                  </h4>
                </div>
              </div>
              <div
                className="bg-gradient-to-br from-[#14AC94] to-[#0f9582] rounded-[20px] p-8 text-white transform transition-all duration-700 hover:scale-105 shadow-xl"
                style={{ animationDelay: "200ms" }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold tracking-tight">
                    Desarrollo personal y expresión
                  </h4>
                </div>
              </div>
              <div
                className="bg-gradient-to-br from-[#14AC94] to-[#0f9582] rounded-[20px] p-8 text-white transform transition-all duration-700 hover:scale-105 shadow-xl"
                style={{ animationDelay: "400ms" }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold tracking-tight">
                    Formación y educación inclusiva
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Activities */}
      <section className="py-20 md:py-32 bg-white" id="activities">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#808285] text-center mb-16 tracking-tight">
              ¿Qué realiza la Fundación Carolita IAP?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="bg-white rounded-[20px] p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 shadow-lg border border-gray-100">
                <div className="w-20 h-20 bg-[#EE202E]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-10 h-10 text-[#EE202E]" />
                </div>
                <h3 className="text-xl font-bold text-[#808285] mb-4 tracking-tight">
                  ⁠Habilidades adaptativas
                </h3>
                <p className="text-[#808285] text-base leading-relaxed font-light">
                  Desarrollo de hábitos de independencia.
                </p>
              </div>
              <div className="bg-white rounded-[20px] p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 shadow-lg border border-gray-100">
                <div className="w-20 h-20 bg-[#EE202E]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Stethoscope className="w-10 h-10 text-[#EE202E]" />
                </div>
                <h3 className="text-xl font-bold text-[#808285] mb-4 tracking-tight">
                  Terapias ocupacionales
                </h3>
                <p className="text-[#808285] text-base leading-relaxed font-light">
                  Programas individuales de rehabilitación y desarrollo.
                </p>
              </div>
              <div className="bg-white rounded-[20px] p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 shadow-lg border border-gray-100">
                <div className="w-20 h-20 bg-[#EE202E]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Cookie className="w-10 h-10 text-[#EE202E]" />
                </div>
                <h3 className="text-xl font-bold text-[#808285] mb-4 tracking-tight">
                  Producción de galletas artesanales
                </h3>
                <p className="text-[#808285] text-base leading-relaxed font-light">
                  Elaboradas por los beneficiarios como fuente de ingreso.
                </p>
              </div>
              <div className="bg-white rounded-[20px] p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 shadow-lg border border-gray-100">
                <div className="w-20 h-20 bg-[#EE202E]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-[#EE202E]" />
                </div>
                <h3 className="text-xl font-bold text-[#808285] mb-4 tracking-tight">
                  Eventos comunitarios
                </h3>
                <p className="text-[#808285] text-base leading-relaxed font-light">
                  Actividades para sensibilizar e integrar a la comunidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20 md:py-32 bg-gradient-to-br from-[#14AC94] to-[#0f9582] text-white"
        id="needs"
      >
        {/* Needs */}
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
              Necesidades de la Fundación Carolita IAP
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <p className="font-semibold text-lg tracking-tight">
                  Becas para capacitación
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Book className="w-10 h-10 text-white" />
                </div>
                <p className="font-semibold text-lg tracking-tight">
                  Materiales didácticos
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HomeIcon className="w-10 h-10 text-white" />
                </div>
                <p className="font-semibold text-lg tracking-tight">
                  Mejora de instalaciones
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Car className="w-10 h-10 text-white" />
                </div>
                <p className="font-semibold text-lg tracking-tight">
                  Recursos para transporte
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <ImpactStats />

      {/* Students Carousel  */}
      <StudentCarousel />

      {/* Needs CTA Section */}
      <NeedsCta />

      {/* Fundraising Events 
      <FundraisingEvents />
      */}
      {/* Call to Action */}
      <section className="py-20 md:py-32 bg-white" id="cta">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#808285] mb-12 tracking-tight">
              Llamado a la acción para asistir y ayudar
            </h2>
            <p className="text-xl md:text-2xl text-[#808285] leading-relaxed mb-12 font-light">
              "Este año, tu participación puede marcar la diferencia. Ven,
              conoce nuestra labor y ayúdanos comprando nuestras galletas,
              realizando una donación o apadrinando a una persona joven."
            </p>

            <div className="bg-white rounded-[20px] p-10 mb-12 shadow-xl border border-gray-100">
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 text-[#808285]">
                <div className="flex flex-col items-center gap-2">
                  <Calendar className="w-8 h-8 text-[#EE202E]" />
                  <span className="font-semibold text-lg text-center">
                    Fecha: Martes 2 de diciembre de 2025
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Clock className="w-8 h-8 text-[#EE202E]" />
                  <span className="font-semibold text-lg text-center">
                    Hora: 9:00 AM - 8:00 PM
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <MapPin className="w-8 h-8 text-[#EE202E]" />
                  <span className="font-semibold text-lg text-center">
                    Lugar: Jardín Libertad, Colima, México
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
