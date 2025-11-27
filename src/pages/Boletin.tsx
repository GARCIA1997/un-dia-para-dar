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
    title: 'Beneficiará el movimiento global, este diciembre "Un Día para Dar", a sector vulnerable de Colima',
    description: 'Movimiento internacional en Colima busca incentivar la generosidad a través de diversas actividades el próximo 02 de diciembre en el centro de la capital colimense',
    date: '28 de noviembre de 2025',
    author: 'Comité Organizador Un Día Para Dar Colima',
    category: 'Comunicado Oficial',
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
    image: 'images/boletin/boletin.jpg'
  },
  {
    id: 3,
    title: 'Galletas Carolita: Apoyo desde la cocina',
    description: 'Conoce cómo nuestras galletas artesanales generan ingresos y oportunidades.',
    date: '10 de noviembre de 2025',
    author: 'Un Día Para Dar Colima',
    category: 'Productos',
    content: `Las Galletas Carolita son mucho más que un producto delicioso. Son el resultado del esfuerzo, dedicación y talento de nuestros beneficiarios, quienes participan activamente en su elaboración.

Este proyecto de producción artesanal no solo genera ingresos para la fundación, sino que también proporciona oportunidades de capacitación, desarrollo de habilidades y generación de ingresos para nuestros beneficiarios.

Cada galleta que compras apoya directamente a personas con discapacidad. Nuestras variedades incluyen chocolate, vainilla, avena y más. ¡Pruébalas y sé parte del cambio!

Para hacer tu pedido, contáctanos por WhatsApp o visita nuestras redes sociales.`,
    image: 'images/boletin/galletas.jpg'
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
    image: 'images/boletin/necesidades.jpg'
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
          {/* Main Newsletter (Left in desktop, first in mobile) */}
          <div className="lg:col-span-2 order-1">
            <section>
              <div className="bg-white rounded-[20px] shadow-xl overflow-hidden border border-gray-100">
                <div className="relative h-80 md:h-96 overflow-hidden">
                  <img
                    src={newsletters[0].image}
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
                      <p className="text-[#808285] font-light leading-relaxed whitespace-pre-line mb-12">
                        {newsletters[0].content}
                      </p>

                      {/* Necesidades de Carolita dentro del boletín */}
                      <div className="mt-12 pt-12 border-t border-gray-200">
                        <div className="text-center mb-8">
                          <h3 className="text-3xl md:text-4xl font-bold text-[#808285] mb-4 tracking-tight">
                            Necesidades de Carolita
                          </h3>
                          <p className="text-base text-[#808285]/70 font-light">
                            Conoce las áreas donde tu apoyo puede generar un impacto significativo
                          </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          <div className="relative h-48 rounded-[16px] overflow-hidden group">
                            <img
                              src="https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=800"
                              alt="Terapias especializadas"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-3 left-3 right-3">
                              <p className="text-white font-semibold text-xs">Terapias Especializadas</p>
                            </div>
                          </div>

                          <div className="relative h-48 rounded-[16px] overflow-hidden group">
                            <img
                              src="https://images.pexels.com/photos/8612994/pexels-photo-8612994.jpeg?auto=compress&cs=tinysrgb&w=800"
                              alt="Materiales didácticos"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-3 left-3 right-3">
                              <p className="text-white font-semibold text-xs">Materiales Didácticos</p>
                            </div>
                          </div>

                          <div className="relative h-48 rounded-[16px] overflow-hidden group">
                            <img
                              src="https://images.pexels.com/photos/8923187/pexels-photo-8923187.jpeg?auto=compress&cs=tinysrgb&w=800"
                              alt="Equipamiento"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-3 left-3 right-3">
                              <p className="text-white font-semibold text-xs">Equipamiento Especializado</p>
                            </div>
                          </div>

                          <div className="relative h-48 rounded-[16px] overflow-hidden group">
                            <img
                              src="https://images.pexels.com/photos/7551662/pexels-photo-7551662.jpeg?auto=compress&cs=tinysrgb&w=800"
                              alt="Infraestructura"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-3 left-3 right-3">
                              <p className="text-white font-semibold text-xs">Mejora de Instalaciones</p>
                            </div>
                          </div>

                          <div className="relative h-48 rounded-[16px] overflow-hidden group">
                            <img
                              src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800"
                              alt="Capacitación"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-3 left-3 right-3">
                              <p className="text-white font-semibold text-xs">Capacitación Profesional</p>
                            </div>
                          </div>

                          <div className="relative h-48 rounded-[16px] overflow-hidden group">
                            <img
                              src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800"
                              alt="Transporte"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-3 left-3 right-3">
                              <p className="text-white font-semibold text-xs">Transporte y Movilidad</p>
                            </div>
                          </div>

                          <div className="relative h-48 rounded-[16px] overflow-hidden group">
                            <img
                              src="https://images.pexels.com/photos/8923039/pexels-photo-8923039.jpeg?auto=compress&cs=tinysrgb&w=800"
                              alt="Desarrollo de habilidades"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-3 left-3 right-3">
                              <p className="text-white font-semibold text-xs">Talleres de Desarrollo</p>
                            </div>
                          </div>

                          <div className="relative h-48 rounded-[16px] overflow-hidden group">
                            <img
                              src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800"
                              alt="Inclusión social"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-3 left-3 right-3">
                              <p className="text-white font-semibold text-xs">Programas de Inclusión</p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-8 text-center">
                          <a
                            href="https://wa.me/5213121109700?text=Hola, me gustaría conocer más sobre cómo puedo apoyar las necesidades de Fundación Carolita"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-[#14AC94] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#0f9582] transition-all duration-300 hover:scale-105 shadow-lg"
                          >
                            ¿Cómo puedo ayudar?
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar - Suggested Newsletters (Right in desktop, second in mobile) */}
          <aside className="lg:col-span-1 order-2">
            <div className="lg:sticky lg:top-24">
              <h3 className="text-2xl font-bold text-[#808285] mb-6 tracking-tight">
                Más Boletines
              </h3>
              <div className="space-y-4">
                {newsletters.slice(1).map((newsletter) => {
                  const isExpanded = expandedId === newsletter.id;

                  return (
                    <article
                      key={newsletter.id}
                      className={`bg-white border rounded-[20px] overflow-hidden transition-all duration-300 cursor-pointer ${
                        isExpanded
                          ? 'border-[#EE202E] shadow-lg'
                          : 'border-gray-200 hover:shadow-lg hover:border-[#EE202E]/50'
                      }`}
                      onClick={() => toggleExpand(newsletter.id)}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={newsletter.image}
                          alt={newsletter.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        <div className="absolute top-2 left-2">
                          <span className="text-xs font-bold bg-[#EE202E] text-white px-2 py-1 rounded-full">
                            {newsletter.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="text-sm font-bold text-[#808285] mb-1 hover:text-[#EE202E] transition-colors">
                          {isExpanded ? newsletter.title : (
                            <span className="line-clamp-2">{newsletter.title}</span>
                          )}
                        </h4>
                        {!isExpanded && (
                          <>
                            <p className="text-xs text-[#808285]/60 mb-2 line-clamp-2 font-light">
                              {newsletter.description}
                            </p>
                            <span className="text-xs text-[#808285]/50 flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              {newsletter.date}
                            </span>
                          </>
                        )}

                        {isExpanded && (
                          <div className="mt-3 animate-in fade-in duration-300">
                            <div className="flex flex-col gap-2 text-[#808285]/60 text-xs mb-3">
                              <div className="flex items-center">
                                <Calendar className="w-3 h-3 mr-2" />
                                {newsletter.date}
                              </div>
                              <div className="flex items-center">
                                <User className="w-3 h-3 mr-2" />
                                {newsletter.author}
                              </div>
                            </div>
                            <p className="text-[#808285] text-sm font-light leading-relaxed whitespace-pre-line mb-3">
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
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Call to Action Box */}
              <div className="mt-6 bg-gradient-to-br from-[#14AC94] to-[#0f9582] rounded-[20px] p-6 text-white">
                <h4 className="text-lg font-bold mb-3 text-center">
                  ¿Deseas recibir saber màs?
                </h4>
                <p className="text-sm text-white/90 mb-4 text-center font-light">
                  Envioanos un WhatsApp
                </p>
                <a
                  href="https://wa.me/5213121109700?text=Hola, me gustaría recibir mas informacion sobre el boletín de Un Día Para Dar Colima."
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
