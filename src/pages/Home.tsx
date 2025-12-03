import {
  Calendar,
  Heart,
  Send,
  Facebook,
  Instagram,
  Users,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import SponsorsCarousel from "../components/SponsorsCarousel";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    foundation: "",
    reason: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola, quiero sugerir una fundación para Un Día para Dar:\n\nNombre: ${formData.name}\nEmail: ${formData.email}\nFundación sugerida: ${formData.foundation}\nRazón: ${formData.reason}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/523122459294?text=${encodedMessage}`, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const pastEvents = [
    {
      year: "2021",
      foundation: "Fundación ABC",
      description: "Apoyamos con recursos educativos para niños vulnerables",
      impact: "150 niños beneficiados",
      color: "from-blue-500 to-blue-600",
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      year: "2022",
      foundation: "Casa Hogar XYZ",
      description: "Mejoramos las instalaciones y equipamiento del hogar",
      impact: "80 personas apoyadas",
      color: "from-green-500 to-green-600",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      year: "2023",
      foundation: "Fundación Salud",
      description: "Financiamos tratamientos médicos especializados",
      impact: "200 consultas realizadas",
      color: "from-purple-500 to-purple-600",
      image: "https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      year: "2024",
      foundation: "Educación para Todos",
      description: "Becas y material escolar para estudiantes de escasos recursos",
      impact: "300 estudiantes becados",
      color: "from-orange-500 to-orange-600",
      image: "https://images.pexels.com/photos/8923157/pexels-photo-8923157.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      year: "2025",
      foundation: "Fundación Carolita IAP",
      description:
        "Atención integral a personas con discapacidad, programas educativos y terapéuticos",
      impact: "Infraestructura, equipamiento y apoyo directo a beneficiarios",
      color: "from-red-500 to-red-600",
      image: "/images/historico/carolita.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Coming Soon */}
      <section className="relative bg-gradient-to-br from-[#EE202E] via-[#EE202E] to-[#d11c29] text-white overflow-hidden min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="relative container mx-auto px-6 py-20 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center items-center space-x-12 mb-12">
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl w-40 h-40 flex items-center justify-center shadow-2xl">
                <img
                  src="/LOGO_UDPD_COLIMA.png"
                  alt="Logo Un Día para Dar Colima"
                  className="w-[90%] h-[90%] object-contain"
                />
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight animate-fade-in">
              Un Día para Dar
            </h1>
            <h2 className="text-4xl md:text-6xl font-semibold mb-12 text-white/95 tracking-tight">
              Colima 2026
            </h2>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 mb-12 shadow-2xl border border-white/20">
              <p className="text-3xl md:text-4xl mb-6 font-light">
                Próximamente
              </p>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                Estamos preparando algo especial para 2026. Juntos seguiremos transformando vidas y construyendo un futuro mejor para nuestra comunidad.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="#history"
                className="inline-flex items-center bg-white text-[#EE202E] font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-lg"
              >
                Ver ediciones anteriores
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#suggest"
                className="inline-flex items-center bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:bg-white/20 shadow-xl hover:shadow-2xl text-lg"
              >
                Sugerir fundación
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is Un Día para Dar */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#808285] mb-12 tracking-tight">
              ¿Qué es Un Día para Dar?
            </h2>
            <p className="text-xl md:text-2xl text-[#808285] leading-relaxed font-light mb-8">
              Un Día para Dar es un movimiento global que promueve la solidaridad y la generosidad. Cada año, millones de personas se unen para donar su tiempo, recursos y apoyo a causas que lo necesitan.
            </p>
            <p className="text-xl md:text-2xl text-[#808285] leading-relaxed font-light">
              En Colima, nos sumamos a este movimiento apoyando a fundaciones locales que trabajan incansablemente por mejorar la vida de quienes más lo necesitan.
            </p>
          </div>
        </div>
      </section>

      {/* Historical Section */}
      <section className="py-20 md:py-32 bg-gray-50" id="history">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#808285] mb-6 tracking-tight">
                Nuestro Impacto a Través de los Años
              </h2>
              <p className="text-xl md:text-2xl text-[#808285] leading-relaxed max-w-4xl mx-auto font-light">
                Desde 2021, hemos apoyado a diferentes fundaciones de Colima, generando un impacto positivo en miles de vidas.
              </p>
            </div>

            <div className="space-y-8">
              {pastEvents.map((event, index) => (
                <div
                  key={event.year}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="grid md:grid-cols-3 gap-0">
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <img
                        src={event.image}
                        alt={`${event.foundation} ${event.year}`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-20`}></div>
                      <div className={`absolute top-4 left-4 bg-gradient-to-br ${event.color} rounded-2xl p-4 shadow-lg`}>
                        <Calendar className="w-8 h-8 text-white mb-1" />
                        <p className="text-3xl font-bold text-white">{event.year}</p>
                      </div>
                    </div>
                    <div className="md:col-span-2 p-8 md:p-12">
                      <h3 className="text-3xl font-bold text-[#808285] mb-4">
                        {event.foundation}
                      </h3>
                      <p className="text-xl text-[#808285] leading-relaxed mb-6 font-light">
                        {event.description}
                      </p>
                      <div className="flex items-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border-l-4 border-green-500">
                        <Heart className="w-6 h-6 text-green-600 mr-3" />
                        <span className="text-lg font-semibold text-green-800">
                          Impacto: {event.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Suggestion Section */}
      <section className="py-20 md:py-32 bg-white" id="suggest">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#808285] mb-6 tracking-tight">
                ¿Conoces una fundación que merece apoyo?
              </h2>
              <p className="text-xl md:text-2xl text-[#808285] leading-relaxed font-light">
                Tu voz importa. Ayúdanos a identificar organizaciones que están haciendo una diferencia en nuestra comunidad.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-semibold text-[#808285] mb-2">
                    Tu nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-[#EE202E] focus:outline-none text-lg transition-colors"
                    placeholder="Escribe tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg font-semibold text-[#808285] mb-2">
                    Tu correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-[#EE202E] focus:outline-none text-lg transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="foundation" className="block text-lg font-semibold text-[#808285] mb-2">
                    Nombre de la fundación
                  </label>
                  <input
                    type="text"
                    id="foundation"
                    name="foundation"
                    required
                    value={formData.foundation}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-[#EE202E] focus:outline-none text-lg transition-colors"
                    placeholder="Nombre de la organización"
                  />
                </div>

                <div>
                  <label htmlFor="reason" className="block text-lg font-semibold text-[#808285] mb-2">
                    ¿Por qué deberíamos apoyarla?
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    required
                    value={formData.reason}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-[#EE202E] focus:outline-none text-lg transition-colors resize-none"
                    placeholder="Cuéntanos sobre el impacto y trabajo de esta fundación..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#EE202E] to-[#d11c29] text-white font-bold py-5 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl text-lg flex items-center justify-center"
                >
                  <Send className="w-6 h-6 mr-3" />
                  Enviar sugerencia
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Carousel */}
      <SponsorsCarousel />

      {/* Footer */}
      <footer className="bg-[#808285] text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-12">
              <h3 className="text-3xl font-bold mb-6 tracking-tight">
                Un Día para Dar Colima
              </h3>
              <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-12 text-white/90 text-lg">
                <div className="flex items-center">
                  <span>✉️ undiaparadarcolima@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-8 mb-12">
              <a
                href="https://www.facebook.com/share/1BfmYrV77r/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 rounded-full p-4 hover:bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Facebook className="w-7 h-7" />
              </a>
              <a
                href="https://www.instagram.com/fundacioncarolita_?igsh=NHZndGF2OXB2NzBl"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 rounded-full p-4 hover:bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Instagram className="w-7 h-7" />
              </a>
            </div>

            <div className="text-white/80 mb-6">
              <p className="font-semibold text-lg">#UnDíaParaDarMX #Colima</p>
            </div>

            <div className="text-white/90 italic text-xl font-light mb-6">
              La solidaridad es el lenguaje universal que todos entendemos
            </div>

            <div className="text-white/70 text-sm">
              © {new Date().getFullYear()} Un Día para Dar Colima. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
