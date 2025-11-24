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
    image: '🎉'
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
    image: '❤️'
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
    image: '🍪'
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
    image: '🤝'
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
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Featured Newsletter */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-[#EE202E] to-[#d11c29] rounded-[20px] p-8 md:p-12 text-white shadow-xl overflow-hidden">
            <div className="flex items-start justify-between mb-6">
              <span className="text-3xl md:text-4xl">{newsletters[0].image}</span>
              <span className="bg-white/30 text-white text-xs font-bold px-4 py-2 rounded-full">
                Destacado
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {newsletters[0].title}
            </h2>
            <p className="text-white/90 text-lg mb-6 font-light">
              {newsletters[0].description}
            </p>
            <div className="flex flex-col md:flex-row gap-4 text-white/80 text-sm mb-8">
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
              className="inline-flex items-center bg-white text-[#EE202E] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Leer más
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            {expandedId === newsletters[0].id && (
              <div className="mt-8 pt-8 border-t border-white/30">
                <p className="text-white/95 font-light leading-relaxed whitespace-pre-line">
                  {newsletters[0].content}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletters Grid */}
        <section>
          <h3 className="text-3xl font-bold text-[#808285] mb-10 tracking-tight">
            Más boletines
          </h3>
          <div className="space-y-6">
            {newsletters.slice(1).map((newsletter) => (
              <article
                key={newsletter.id}
                className="bg-white border border-gray-200 rounded-[20px] p-6 md:p-8 hover:shadow-lg transition-all duration-300 hover:border-[#EE202E]/50"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl md:text-4xl mt-1">{newsletter.image}</span>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold bg-[#EE202E]/10 text-[#EE202E] px-3 py-1 rounded-full">
                        {newsletter.category}
                      </span>
                      <span className="text-xs text-[#808285]/60 font-medium">
                        {newsletter.date}
                      </span>
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-[#808285] mb-2 tracking-tight">
                      {newsletter.title}
                    </h4>
                    <p className="text-[#808285]/80 font-light mb-4 leading-relaxed">
                      {newsletter.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#808285]/60 flex items-center font-light">
                        <User className="w-4 h-4 mr-2" />
                        {newsletter.author}
                      </span>
                      <button
                        onClick={() => toggleExpand(newsletter.id)}
                        className="inline-flex items-center text-[#EE202E] font-semibold hover:text-[#d11c29] transition-colors group"
                      >
                        {expandedId === newsletter.id ? 'Leer menos' : 'Leer más'}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                    {expandedId === newsletter.id && (
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <p className="text-[#808285] font-light leading-relaxed whitespace-pre-line">
                          {newsletter.content}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 bg-gradient-to-r from-[#14AC94] to-[#0f9582] rounded-[20px] p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Deseas recibir nuestro boletín?
          </h3>
          <p className="text-white/90 mb-8 font-light max-w-2xl mx-auto">
            Suscríbete a nuestra lista de correo para recibir las últimas noticias y actualizaciones de Fundación Carolita IAP.
          </p>
          <a
            href="https://wa.me/5213121109700?text=Hola, me gustaría suscribirme al boletín informativo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-[#14AC94] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            Suscribirse por WhatsApp
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#808285] text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white/80 font-light">
            © 2025 Fundación Carolita, IAP. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
