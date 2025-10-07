import React, { useState, useEffect, useRef } from 'react';
import { Users, Cookie, TrendingUp } from 'lucide-react';

interface Stat {
  number: string;
  label: string;
  description: string;
  finalValue: number;
  bgColor: string;
  textColor: string;
  icon: string;
}

const ImpactStats: React.FC = () => {
  const stats: Stat[] = [
    {
      number: "+200",
      label: "JÓVENES CAPACITADOS",
      description: "Personas con discapacidad que han recibido formación integral",
      finalValue: 200,
      bgColor: "bg-white",
      textColor: "text-[#808285]",
      icon: "users"
    },
    {
      number: "+60,000",
      label: "GALLETAS VENDIDAS AL AÑO",
      description: "Productos artesanales elaborados por nuestros beneficiarios",
      finalValue: 60000,
      bgColor: "bg-[#14AC94]",
      textColor: "text-white",
      icon: "cookie"
    },
    {
      number: "+1000",
      label: "MODA CIRCULAR",
      description: "Más de 1,000 prendas reutilizadas al año, dando nueva vida a la ropa.",
      finalValue: 1000,
      bgColor: "bg-[#D0DD28]",
      textColor: "text-black",
      icon: "trending-up"
    }
  ];

  const [visibleStats, setVisibleStats] = useState<boolean[]>(new Array(stats.length).fill(false));
  const [animatedValues, setAnimatedValues] = useState<number[]>(new Array(stats.length).fill(0));
  const sectionRef = useRef<HTMLDivElement>(null);

  // Icon mapping
  const iconMap = {
    users: Users,
    cookie: Cookie,
    'trending-up': TrendingUp
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger staggered animations
          stats.forEach((_, index) => {
            setTimeout(() => {
              setVisibleStats(prev => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });

              // Start count-up animation
              animateNumber(index, stats[index].finalValue);
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateNumber = (index: number, finalValue: number) => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = finalValue / steps;
    let currentValue = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      currentValue = Math.min(currentValue + increment, finalValue);

      setAnimatedValues(prev => {
        const newValues = [...prev];
        newValues[index] = Math.floor(currentValue);
        return newValues;
      });

      if (step >= steps || currentValue >= finalValue) {
        clearInterval(timer);
        setAnimatedValues(prev => {
          const newValues = [...prev];
          newValues[index] = finalValue;
          return newValues;
        });
      }
    }, duration / steps);
  };

  const formatNumber = (value: number, originalFormat: string) => {
    if (originalFormat.includes('%')) {
      return `+${value}%`;
    } else if (originalFormat.includes(',')) {
      return `+${value.toLocaleString()}`;
    } else {
      return `+${value}`;
    }
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-gray-50" id="impact">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#808285] text-center mb-16 tracking-tight">
            Nuestro impacto
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
              return (
              <div
                key={index}
                className={`${stat.bgColor} rounded-[20px] p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 border border-gray-100 ${
                  visibleStats[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${
                  stat.bgColor === 'bg-white' ? 'bg-[#14AC94]/10' : 'bg-white/20'
                } mb-6`}>
                  <IconComponent className={`w-10 h-10 ${
                    stat.bgColor === 'bg-white' ? 'text-[#14AC94]' : 'text-white'
                  }`} />
                </div>

                <div className={`font-bold mb-4 ${stat.textColor} tracking-tight`} style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
                  {formatNumber(animatedValues[index], stat.number)}
                </div>

                <div className={`${stat.textColor} font-bold mb-4 tracking-wide text-center`} style={{ fontSize: 'clamp(0.875rem, 2vw, 1.125rem)' }}>
                  {stat.label}
                </div>

                <p className={`${stat.textColor} ${stat.bgColor === 'bg-white' ? 'opacity-80' : 'opacity-90'} leading-relaxed font-light text-center break-words`} style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
                  {stat.description}
                </p>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;