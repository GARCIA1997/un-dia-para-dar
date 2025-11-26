import { ArrowLeft, Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface Newsletter {
  id: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  content: string;
  image?: string;
}

const newsletters: Newsletter[] = [
  {
    id: 1,
    title: 'Un Día para Dar Colima 2025: Preparativos finales',
    description: 'Nos acercamos al gran evento. Conoce todos los detalles y cómo puedes participar.',
    date: '20 de noviembre de 2025',
    author: 'Fundación Carolita',
    category: 'Evento',
    content: `El 2 de diciembre viviremos juntos "Un Día para Dar Colima", un movimiento global de solidaridad que transformará vidas en nuestra comunidad.

Desde las 9 AM hasta las 8 PM, el Jardín Libertad será el epicentro de actividades llenas de color, alegría y propósito. Tendremos actividades diversas durante todo el día, con un enfoque especial en el evento cultural que comenzará a las 6 PM, contando con invitados especiales que compartirán su talento y experiencia.

Este evento es una oportunidad única para conocer el trabajo de Fundación Carolita IAP, interactuar con nuestros beneficiarios y ser parte de un cambio significativo. Esperamos tu participación.`,
    image: 'https://images.pexels.com/photos/6646922/pexels-photo-6646922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    title: 'Conoce nuestros beneficiarios: Historias de transformación',
    description: 'Descubre cómo el apoyo comunitario ha cambiado vidas en Fundación Carolita.',
    date: '15 de noviembre de 2025',
    author: 'Equipo de Comunicación',
    category: 'Historias',
    content: `En Fundación Carolita IAP trabajamos cada día para transformar la vida de personas con discapacidad. A través de programas educativos, terapéuticos y culturales, brindamos oportunidades para que desarrollen su potencial y ejerzan plenamente sus derechos.

Nuestros beneficiarios son el corazón de nuestra misión. Cada uno de ellos tiene una historia única de superación, aprendizaje y crecimiento. Sus logros son nuestra inspiración para continuar adelante.

Si deseas conocer más sobre sus historias y el impacto de tu apoyo, te invitamos a visitarnos o contactarnos a través de nuestros canales de comunicación.`,
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    title: 'Galletas Carolita: Apoyo desde la cocina',
    description: 'Conoce cómo nuestras galletas artesanales generan ingresos y oportunidades.',
    date: '10 de noviembre de 2025',
    author: 'Área de Producción',
    category: 'Productos',
    content: `Las Galletas Carolita son mucho más que un producto delicioso. Son el resultado del esfuerzo, dedicación y talento de nuestros beneficiarios, quienes participan activamente en su elaboración.

Este proyecto de producción artesanal no solo genera ingresos para la fundación, sino que también proporciona oportunidades de capacitación, desarrollo de habilidades y generación de ingresos para nuestros beneficiarios.

Cada galleta que compras apoya directamente a personas con discapacidad. Nuestras variedades incluyen chocolate, vainilla, avena y más. ¡Pruébalas y sé parte del cambio!

Para hacer tu pedido, contáctanos por WhatsApp o visita nuestras redes sociales.`,
    image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    title: 'Necesidades prioritarias: Cómo puedes ayudar',
    description: 'Te contamos las necesidades actuales que requieren tu apoyo solidario.',
    date: '5 de noviembre de 2025',
    author: 'Dirección General',
    category: 'Necesidades',
    content: `Para continuar brindando atención de calidad a nuestros beneficiarios, enfrentamos algunas necesidades prioritarias que requieren el apoyo de la comunidad.

Entre nuestras principales necesidades están:

• Becas para capacitación profesional
• Materiales didácticos y de terapia
• Mejora y mantenimiento de instalaciones
• Recursos para transporte y movilidad
• Equipos especializados para terapias

Si deseas conocer en detalle cómo puedes apoyar alguna de estas necesidades, te invitamos a visitar nuestra página de Carolita o contactarnos directamente. Tu aporte, grande o pequeño, hace la diferencia.`,
    image: 'https://images.pexels.com/photos/6646915/pexels-photo-6646915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

export default function Boletin() {
  const [expandedId, setExpandedId] = useState<string | number | null>(null);

  const toggleExpand = (id: string | number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link
            to="/"
            className="inline-flex items-center text-[#808285] hover:text-[#EE202E] transition-colors mb-6 font-semibold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver al inicio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-[#808285] tracking-tight">
            Boletín Informativo
          </h1>
          <p className="text-lg text-[#808285]/70 mt-3 font-light">
            Mantente informado sobre las actividades y noticias de Fundación Carolita IAP
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Newsletter (Right in desktop, first in mobile) */}
          <div className="lg:col-span-2 order-1">
            <section>
              <div className="bg-white rounded-[20px] shadow-xl overflow-hidden border border-gray-100">
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/6646922/pexels-photo-6646922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt={newsletters[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#EE202E] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                      Destacado
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-white/90 text-sm font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
                      {newsletters[0].category}
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-[#808285]">
                    {newsletters[0].title}
                  </h2>
                  <p className="text-[#808285]/80 text-lg mb-6 font-light leading-relaxed">
                    {newsletters[0].description}
                  </p>
                  <div className="flex flex-col md:flex-row gap-4 text-[#808285]/60 text-sm mb-8">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {newsletters[0].date}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {newsletters[0].author}
                    </div>
                  </div>
                  <button
                    onClick={() => toggleExpand(newsletters[0].id)}
                    className="inline-flex items-center bg-[#EE202E] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#d11c29] transition-all duration-300 hover:scale-105 shadow-md"
                  >
                    Leer más
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                  {expandedId === newsletters[0].id && (
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <p className="text-[#808285] font-light leading-relaxed whitespace-pre-line">
                        {newsletters[0].content}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar - Suggested Newsletters (Left in desktop, second in mobile) */}
          <aside className="lg:col-span-1 order-2 lg:order-first">
            <div className="lg:sticky lg:top-24">
              <h3 className="text-2xl font-bold text-[#808285] mb-6 tracking-tight">
                Más Boletines
              </h3>
              <div className="space-y-4">
                {newsletters.slice(1).map((newsletter) => (
                  <div key={newsletter.id}>
                    <article
                      className="bg-white border border-gray-200 rounded-[20px] overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-[#EE202E]/50 cursor-pointer group"
                      onClick={() => toggleExpand(newsletter.id)}
                    >
                      <div className="relative h-32 overflow-hidden">
                        <img
                          src={newsletter.image}
                          alt={newsletter.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        <div className="absolute top-2 left-2">
                          <span className="text-xs font-bold bg-[#EE202E] text-white px-2 py-1 rounded-full">
                            {newsletter.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="text-sm font-bold text-[#808285] mb-1 line-clamp-2 group-hover:text-[#EE202E] transition-colors">
                          {newsletter.title}
                        </h4>
                        <p className="text-xs text-[#808285]/60 mb-2 line-clamp-2 font-light">
                          {newsletter.description}
                        </p>
                        <span className="text-xs text-[#808285]/50 flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {newsletter.date}
                        </span>
                      </div>
                    </article>

                    {expandedId === newsletter.id && (
                      <div className="mt-4 bg-white border border-[#EE202E] rounded-[20px] overflow-hidden shadow-lg animate-in slide-in-from-top duration-300">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={newsletter.image}
                            alt={newsletter.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs font-bold bg-[#EE202E] text-white px-3 py-1 rounded-full">
                              {newsletter.category}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-[#808285] mb-3 tracking-tight">
                            {newsletter.title}
                          </h3>
                          <div className="flex flex-col gap-2 text-[#808285]/60 text-xs mb-4">
                            <div className="flex items-center">
                              <Calendar className="w-3 h-3 mr-2" />
                              {newsletter.date}
                            </div>
                            <div className="flex items-center">
                              <User className="w-3 h-3 mr-2" />
                              {newsletter.author}
                            </div>
                          </div>
                          <p className="text-[#808285] text-sm font-light leading-relaxed whitespace-pre-line mb-4">
                            {newsletter.content}
                          </p>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedId(null);
                            }}
                            className="inline-flex items-center text-[#EE202E] font-semibold hover:text-[#d11c29] transition-colors text-sm"
                          >
                            Cerrar
                            <ArrowLeft className="w-3 h-3 ml-2" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Call to Action Box */}
              <div className="mt-6 bg-gradient-to-br from-[#14AC94] to-[#0f9582] rounded-[20px] p-6 text-white">
                <h4 className="text-lg font-bold mb-3 text-center">
                  ¿Deseas recibir nuestro boletín?
                </h4>
                <p className="text-sm text-white/90 mb-4 text-center font-light">
                  Suscríbete para recibir actualizaciones
                </p>
                <a
                  href="https://wa.me/5213121109700?text=Hola, me gustaría suscribirme al boletín informativo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-[#14AC94] font-semibold py-2 px-4 rounded-full text-center hover:bg-gray-100 transition-all duration-300 text-sm"
                >
                  Suscribirse
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>

            {/* Footer */}
      <footer className="bg-[#808285] text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white/80 font-light">
            © 2025 Un Día Para Dar Colima. Todos los derechos reservados:{" "}
            <a
              href="https://spartans-dev.io"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              Powered by Spartans-dev.io
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}
