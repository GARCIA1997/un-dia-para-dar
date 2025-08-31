import React, { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, Users, Download, MessageCircle } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  emoji: string;
  googleMapsUrl: string;
}

const FundraisingEvents: React.FC = () => {
  const events: Event[] = [
    {
      id: 'kermes-mexicana',
      title: 'Kermés mexicana',
      description: 'Una mañana llena de juegos, antojitos y rifas para apoyar a Fundación Carolita. Disfruta con tu familia mientras contribuyes con donaciones y souvenirs solidarios.',
      date: 'Sábado 20 de septiembre 2025',
      time: '9:00 am – 1:00 pm',
      location: 'Fundación Carolita IAP (instalaciones)',
      emoji: '🎉',
      googleMapsUrl: 'https://maps.google.com/?q=Fundación+Carolita+IAP+Colima'
    },
    {
      id: 'pasarela-moda-circular',
      title: 'Pasarela de moda circular',
      description: 'Vive una pasarela única donde la moda se convierte en solidaridad. Diseñadores, emprendedores y público se unen en un intercambio de prendas y experiencias con causa.',
      date: 'Sábado 25 de octubre 2025',
      time: '10:00 am – 2:00 pm',
      location: 'Fundación Carolita IAP (instalaciones)',
      emoji: '👗',
      googleMapsUrl: 'https://maps.google.com/?q=Fundación+Carolita+IAP+Colima'
    },
    {
      id: 'carrera-con-causa',
      title: 'Carrera con causa',
      description: 'Súmate a esta carrera inclusiva y solidaria. Corre, camina o apoya a los participantes en un evento que promueve salud, comunidad y recaudación para jóvenes con discapacidad.',
      date: 'Domingo 23 de noviembre 2025',
      time: '7:00 am',
      location: 'Fundación Carolita IAP (instalaciones)',
      emoji: '🏃‍♂️',
      googleMapsUrl: 'https://maps.google.com/?q=Fundación+Carolita+IAP+Colima'
    },
    {
      id: 'un-dia-para-dar-colima',
      title: 'Un día para dar colima',
      description: 'La gran jornada solidaria del año. Un movimiento global en el que Colima se une para donar tiempo, recursos y apoyo, transformando vidas en nuestra comunidad.',
      date: 'Martes 2 de diciembre 2025',
      time: 'Por confirmar',
      location: 'Fundación Carolita IAP (instalaciones)',
      emoji: '🌍',
      googleMapsUrl: 'https://maps.google.com/?q=Fundación+Carolita+IAP+Colima'
    }
  ];

  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(events.length).fill(false));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards(prev => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }, index * 200);
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const generateWhatsAppLink = (eventTitle: string) => {
    const message = `Hola, quiero colaborar en el evento ${eventTitle} de Fundación Carolita IAP. ¿Cómo puedo ayudar?`;
    return `https://wa.me/5213121109700?text=${encodeURIComponent(message)}`;
  };

  const generateCalendarFile = (event: Event) => {
    // Parse the Spanish date format
    const parseEventDate = (dateStr: string, timeStr: string) => {
      // Extract day, month, year from Spanish date format
      const dateMatch = dateStr.match(/(\d{1,2})\s+de\s+(\w+)\s+(\d{4})/);
      if (!dateMatch) return null;
      
      const day = parseInt(dateMatch[1]);
      const monthName = dateMatch[2].toLowerCase();
      const year = parseInt(dateMatch[3]);
      
      // Spanish month names to numbers
      const months: { [key: string]: number } = {
        'enero': 0, 'febrero': 1, 'marzo': 2, 'abril': 3,
        'mayo': 4, 'junio': 5, 'julio': 6, 'agosto': 7,
        'septiembre': 8, 'octubre': 9, 'noviembre': 10, 'diciembre': 11
      };
      
      const month = months[monthName];
      if (month === undefined) return null;
      
      // Parse time - handle ranges by taking the start time
      let hour = 9; // default hour
      let minute = 0; // default minute
      
      if (timeStr && timeStr !== 'Por confirmar') {
        const timeMatch = timeStr.match(/(\d{1,2}):(\d{2})\s*(am|pm)/i);
        if (timeMatch) {
          hour = parseInt(timeMatch[1]);
          minute = parseInt(timeMatch[2]);
          const period = timeMatch[3].toLowerCase();
          
          // Convert to 24-hour format
          if (period === 'pm' && hour !== 12) {
            hour += 12;
          } else if (period === 'am' && hour === 12) {
            hour = 0;
          }
        }
      }
      
      return new Date(year, month, day, hour, minute);
    };
    
    const startDate = parseEventDate(event.date, event.time);
    if (!startDate) {
      alert('Error: No se pudo procesar la fecha del evento');
      return;
    }
    
    const endDate = new Date(startDate.getTime() + 3 * 60 * 60 * 1000); // 3 hours duration
    
    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Fundación Carolita IAP//ES
BEGIN:VEVENT
UID:${event.id}@fundacioncarolita.org
DTSTAMP:${formatDate(new Date())}
DTSTART:${formatDate(startDate)}
DTEND:${formatDate(endDate)}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${event.id}.ics`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#808285] mb-8 tracking-tight">
              Eventos de recaudación
            </h2>
            <p className="text-xl md:text-2xl text-[#808285] leading-relaxed max-w-4xl mx-auto font-light">
              Únete a nuestros eventos especiales y ayúdanos a recaudar fondos para continuar transformando vidas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div
                key={event.id}
                ref={el => cardRefs.current[index] = el}
                className={`bg-white rounded-[20px] shadow-xl border border-gray-100 overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                  visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Card Header */}
                <div className="bg-gradient-to-br from-[#EE202E] to-[#d11c29] p-6 text-white">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{event.emoji}</span>
                    <h3 className="text-2xl font-bold tracking-tight">{event.title}</h3>
                  </div>
                  <p className="text-white/95 leading-relaxed font-light">
                    {event.description}
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-[#808285]">
                      <Calendar className="w-5 h-5 mr-3 text-[#EE202E]" />
                      <span className="font-medium">{event.date}, {event.time}</span>
                    </div>
                    <div className="flex items-start text-[#808285]">
                      <MapPin className="w-5 h-5 mr-3 text-[#EE202E] mt-0.5 flex-shrink-0" />
                      <span className="font-medium">{event.location}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <a
                      href={generateWhatsAppLink(event.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#D0DD28] text-black font-semibold py-3 px-4 rounded-full hover:bg-[#b8c423] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      ¿En qué puedo colaborar?
                    </a>
                    
                    <a
                      href={event.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#14AC94] text-white font-semibold py-3 px-4 rounded-full hover:bg-[#0f9582] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                    >
                      <MapPin className="w-5 h-5 mr-2" />
                      Ver ubicación
                    </a>
                    
                    <button
                      onClick={() => generateCalendarFile(event)}
                      className="w-full bg-[#EE202E] text-white font-semibold py-3 px-4 rounded-full hover:bg-[#d11c29] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Agendar en mi calendario
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundraisingEvents;