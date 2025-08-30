import React from 'react';
import { 
  Heart, 
  Users, 
  Briefcase, 
  Stethoscope, 
  Cookie, 
  Calendar,
  MapPin,
  Clock,
  GraduationCap,
  Wrench,
  Home,
  Car,
  Facebook,
  Instagram,
  Share2,
  Book,
  Download
} from 'lucide-react';
import CountdownTimer from './components/CountdownTimer';
import WhatsAppButton from './components/WhatsAppButton';
import ImpactStats from './components/ImpactStats';
import FundraisingEvents from './components/FundraisingEvents';
import SponsorsCarousel from './components/SponsorsCarousel';
import StudentCarousel from './components/StudentCarousel';

function App() {
  const shareEvent = () => {
    if (navigator.share) {
      navigator.share({
        title: "Fundación Carolita IAP – Un Día para Dar México 2025",
        text: "Un día para transformar vidas. Únete y sé parte del cambio.",
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent("Un día para transformar vidas. Únete y sé parte del cambio.");
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank');
    }
  };

  const downloadCalendar = () => {
    const event = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Fundación Carolita IAP – Un Día para Dar México 2025//ES
BEGIN:VEVENT
UID:undiaparadar2025@fundacioncarolita.org
DTSTAMP:20241201T000000Z
DTSTART:20251202T180000Z
DTEND:20251202T220000Z
SUMMARY:Un Día para Dar México 2025
DESCRIPTION:Un día para transformar vidas. Únete y sé parte del cambio.
LOCATION:Por confirmar
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([event], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = "un-dia-para-dar-2025.ics";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#EE202E] via-[#EE202E] to-[#d11c29] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-6 py-20 md:py-32">
          <div className="text-center max-w-5xl mx-auto">
            {/* Logos */}
            <div className="flex justify-center items-center space-x-12 mb-12">
              <div className="bg-white/20 backdrop-blur-sm rounded-[20px] w-28 h-28 flex items-center justify-center shadow-lg">
                <img src="/LOGO_UDPD_COLIMA.png" alt="Logo Un Día para Dar Colima" className="w-[90%] h-[90%] object-contain" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
              Un Día para Dar México 2025
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

            <CountdownTimer />

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16 max-w-3xl mx-auto">
              <WhatsAppButton
                message="Hola, quiero apoyar con una donación para Fundación Carolita IAP."
                variant="secondary"
                className="w-full sm:w-auto text-lg px-8 py-4 shadow-xl"
              >
                Donar
              </WhatsAppButton>
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
                className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Share2 className="w-6 h-6" />
              </button>
              <button
                onClick={downloadCalendar}
                className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Download className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Un Día para Dar */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#808285] mb-12 tracking-tight">
              Qué es "Un Día para Dar"
            </h2>
            <p className="text-xl md:text-2xl text-[#808285] leading-relaxed font-light">
              "Un Día para Dar es un movimiento global que promueve la solidaridad y la generosidad. Cada año, millones de personas se unen para donar su tiempo, recursos y apoyo a causas que lo necesitan. Este 2025 unimos esfuerzos de corazón para apoyar a Fundación  Carolita que hoy está en proceso de transformación. "
            </p>
          </div>
        </div>
      </section>

      {/* About Foundation */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#808285] mb-12 tracking-tight">
                Quién es la Fundación Carolita IAP
              </h2>
              <p className="text-xl md:text-2xl text-[#808285] leading-relaxed max-w-5xl mx-auto font-light">
                "La Asociación tendrá por objeto social brindar atención, formación y acompañamiento integral a personas con discapacidad en situación de vulnerabilidad, mediante programas educativos, terapéuticos, culturales y de desarrollo personal que promuevan su inclusión, autonomía y calidad de vida."
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
                  "Brindar atención, formación y acompañamiento integral a personas con discapacidad en situación de vulnerabilidad, a través de programas educativos, terapéuticos, culturales y de desarrollo personal que fortalezcan su inclusión, autonomía y calidad de vida, en un entorno de respeto, calidez y dignidad."
                </p>
              </div>

              {/* Vision - White Background */}
              <div className="bg-white rounded-[20px] p-10 shadow-xl border border-gray-100 transform transition-all duration-700 hover:scale-105">
                <div className="flex items-center mb-8">
                  <div className="w-14 h-14 bg-[#14AC94]/10 rounded-full flex items-center justify-center mr-5">
                    <Users className="w-7 h-7 text-[#14AC94]" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#808285] tracking-tight">Visión</h3>
                </div>
                <p className="text-[#808285] leading-relaxed text-xl font-light">
                  "Ser un referente regional en la atención integral a personas con discapacidad, reconocida por su enfoque humano, inclusivo y transformador, donde cada persona sea valorada, desarrolle su potencial y ejerza plenamente sus derechos como parte activa de la sociedad."
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
                  <h4 className="text-xl font-bold tracking-tight">Inclusión social y vida independiente</h4>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#14AC94] to-[#0f9582] rounded-[20px] p-8 text-white transform transition-all duration-700 hover:scale-105 shadow-xl" style={{ animationDelay: '200ms' }}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold tracking-tight">Desarrollo personal y expresión</h4>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#14AC94] to-[#0f9582] rounded-[20px] p-8 text-white transform transition-all duration-700 hover:scale-105 shadow-xl" style={{ animationDelay: '400ms' }}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold tracking-tight">Formación y educación inclusiva</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Activities */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#808285] text-center mb-16 tracking-tight">
              Qué realiza la Fundación
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
                  Terapias adaptativas
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
                  Elaboradas por los beneficiarios como fuente de ingresos.
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

      {/* Needs */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#14AC94] to-[#0f9582] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
              Necesidades de Carolita
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <p className="font-semibold text-lg tracking-tight">Becas para capacitación</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Book className="w-10 h-10 text-white" />
                </div>
                <p className="font-semibold text-lg tracking-tight">Materiales didácticos</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Home className="w-10 h-10 text-white" />
                </div>
                <p className="font-semibold text-lg tracking-tight">Mejora de instalaciones</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Car className="w-10 h-10 text-white" />
                </div>
                <p className="font-semibold text-lg tracking-tight">Recursos para transporte</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <ImpactStats />

      {/* Students Carousel */}
      <StudentCarousel />

      {/* Fundraising Events */}
      <FundraisingEvents />

      {/* Sponsors Carousel */}
      <SponsorsCarousel />

      {/* Call to Action */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#808285] mb-12 tracking-tight">
              Llamado a la acción para asistir y ayudar
            </h2>
            <p className="text-xl md:text-2xl text-[#808285] leading-relaxed mb-12 font-light">
              "Este año, tu participación puede marcar la diferencia. Ven, conoce nuestra labor y ayúdanos comprando nuestras galletas, realizando una donación o apadrinando a un joven."
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
                    Hora: Por confirmar
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <MapPin className="w-8 h-8 text-[#EE202E]" />
                  <span className="font-semibold text-lg text-center">
                    Lugar: fundación Carolita IAP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#808285] text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-12">
              <h3 className="text-3xl font-bold mb-6 tracking-tight">Fundación Carolita IAP</h3>
              <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-12 text-white/90 text-lg">
                <div className="flex items-center">
                  <span>📞 52 13 121 109 700 | 52 13 121 437 460</span>
                </div>
                <div className="flex items-center">
                  <span>✉️ undiaparadarcolima@gmail.com</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-12 text-white/90 text-lg mt-3">
                <div className="flex items-center">
                  <span>✉️ fundacioncarolita1@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <span>🌐 www.fundacioncarolita.org</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-8 mb-12">
              <a href="https://www.facebook.com/FundacionCarolita" className="bg-white/20 rounded-full p-4 hover:bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg">
                <Facebook className="w-7 h-7" />
              </a>
              <a href="https://www.instagram.com/FundacionCarolita" className="bg-white/20 rounded-full p-4 hover:bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg">
                <Instagram className="w-7 h-7" />
              </a>
              <a href="#" className="bg-white/20 rounded-full p-4 hover:bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg">
                <Users className="w-7 h-7" />
              </a>
            </div>

            <div className="text-white/80 mb-6">
              <p className="font-semibold text-lg">#UnDiaParaDarMX #FundaciónCarolita</p>
            </div>

            <div className="text-white/90 italic text-xl font-light">
              "La solidaridad es el lenguaje universal que todos entendemos."
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;