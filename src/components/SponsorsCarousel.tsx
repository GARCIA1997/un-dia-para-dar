import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

interface Sponsor {
  id: string;
  name: string;
  logo: string;
  url?: string;
}

const SponsorsCarousel: React.FC = () => {
  const sponsors: Sponsor[] = [
    { id: '1', name: 'Spartans Dev', logo: '/spartansdevio-high-resolution-logo-color-on-transparent-background.png', url: 'https://spartans-dev.io' },
    { id: '2', name: 'Razo', logo: '/razo.png' },
    { id: '3', name: 'Macehual', logo: '/macehual.png' },
    { id: '4', name: 'Artecultores', logo: '/artecultores.png' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [logosPerRow, setLogosPerRow] = useState(3);
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Calculate logos per row based on screen size - STRICT: Always single row
  useEffect(() => {
    const updateLogosPerRow = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setLogosPerRow(1); // Mobile: 1 logo per row
      } else if (width < 768) {
        setLogosPerRow(2); // Small tablet: 2 logos per row
      } else {
        setLogosPerRow(3); // Desktop/tablet: 3 logos per row
      }
    };

    updateLogosPerRow();
    window.addEventListener('resize', updateLogosPerRow);
    return () => window.removeEventListener('resize', updateLogosPerRow);
  }, []);

  // Calculate total steps - STRICT: Based on single row per step
  const totalSteps = Math.ceil(sponsors.length / logosPerRow);

  // Reset current index when logos per row changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [logosPerRow]);

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (isVisible && !isDragging && totalSteps > 1) {
      autoScrollRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % totalSteps);
      }, 4000);
    }

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isVisible, isDragging, totalSteps]);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % totalSteps);
    resetAutoScroll();
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + totalSteps) % totalSteps);
    resetAutoScroll();
  };

  const resetAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
    if (isVisible && totalSteps > 1) {
      autoScrollRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % totalSteps);
      }, 4000);
    }
  };

  // Touch/drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(currentIndex);
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    setScrollLeft(currentIndex);
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (startX - x) / 100;
    const newIndex = Math.max(0, Math.min(scrollLeft + Math.round(walk), totalSteps - 1));
    setCurrentIndex(newIndex);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX;
    const walk = (startX - x) / 100;
    const newIndex = Math.max(0, Math.min(scrollLeft + Math.round(walk), totalSteps - 1));
    setCurrentIndex(newIndex);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    resetAutoScroll();
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    resetAutoScroll();
  };

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#808285] mb-3 tracking-tight">
              Donadores y Patrocinadores
            </h2>
            <p className="text-lg text-[#14AC94] font-medium">
              Gracias a quienes hacen posible nuestra misión
            </p>
          </div>

          {/* Carousel Container - STRICT: Single row per step */}
          <div className={`relative mb-10 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
            <div className="overflow-hidden mx-4 md:mx-8">
              <div
                ref={carouselRef}
                className="flex transition-transform duration-500 ease-in-out cursor-grab active:cursor-grabbing"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {Array.from({ length: totalSteps }).map((_, stepIndex) => (
                  <div key={stepIndex} className="w-full flex-shrink-0">
                    {/* STRICT: Single row layout only */}
                    <div className={`flex justify-center gap-6 px-4 ${logosPerRow === 1 ? 'flex-col items-center' :
                        logosPerRow === 2 ? 'flex-col sm:flex-row items-center' :
                          'flex-col sm:flex-row items-center'
                      }`}>
                      {sponsors
                        .slice(stepIndex * logosPerRow, (stepIndex + 1) * logosPerRow)
                        .map((sponsor) => (
                          <div key={sponsor.id} className="flex justify-center">
                            <div className="group bg-white rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 relative overflow-hidden w-full max-w-[160px] h-20 flex items-center justify-center">
                              {/* Enlace que cubre toda la tarjeta */}
                              <a
                                href={sponsor.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 z-10"
                                onClick={(e) => {
                                  if (isDragging) e.preventDefault();
                                }}
                              />

                              {/* Logo */}
                              <img
                                src={sponsor.logo}
                                alt={`${sponsor.name} - Patrocinador de Fundación Carolita IAP`}
                                className="max-w-full max-h-full object-contain transition-all duration-300 filter brightness-75 group-hover:brightness-100"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  const fallback = target.parentElement?.querySelector('.fallback-logo');
                                  if (fallback) {
                                    (fallback as HTMLElement).style.display = 'flex';
                                  }
                                }}
                              />

                              {/* Fallback logo */}
                              <div className="fallback-logo hidden w-10 h-10 bg-gray-200 rounded-lg items-center justify-center">
                                {/* Puedes poner un icono o texto aquí */}
                              </div>

                              {/* Overlay con pointer-events: none */}
                              <div className="absolute inset-0 bg-[#14AC94]/95 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <p className="text-white font-semibold text-xs text-center px-2">
                                  {sponsor.name}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      {/* Fill empty slots if needed for consistent layout */}
                      {Array.from({
                        length: Math.max(0, logosPerRow - sponsors.slice(stepIndex * logosPerRow, (stepIndex + 1) * logosPerRow).length)
                      }).map((_, emptyIndex) => (
                        <div key={`empty-${emptyIndex}`} className="flex justify-center">
                          <div className="w-full max-w-[160px] h-20"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Navigation arrows - only show if more than 1 step */}
            {totalSteps > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 opacity-80 hover:opacity-100"
                >
                  <ChevronLeft className="w-5 h-5 text-[#808285]" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 opacity-80 hover:opacity-100"
                >
                  <ChevronRight className="w-5 h-5 text-[#808285]" />
                </button>
              </>
            )}

            {/* Dots indicator - only show if more than 1 step */}
            {totalSteps > 1 && (
              <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: totalSteps }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#EE202E]' : 'bg-gray-300'
                      }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* CTA Button */}
          <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
            <WhatsAppButton
              message="Hola, quiero ser donador o patrocinador de Fundación Carolita IAP."
              variant="outline"
              className="text-sm px-6 py-3 border-[#14AC94] text-[#14AC94] hover:bg-[#14AC94] hover:text-white"
            >
              Únete como patrocinador
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsCarousel;