import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2025-12-02T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const labels = {
    days: "Días",
    hours: "Horas", 
    minutes: "Min",
    seconds: "Seg"
  };

  return (
    <div className="flex justify-center space-x-6 md:space-x-10 mt-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-[20px] p-4 md:p-6 min-w-[70px] md:min-w-[90px] shadow-lg">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              {value.toString().padStart(2, '0')}
            </div>
            <div className="text-sm md:text-base text-white/90 capitalize font-medium">
              {labels[unit as keyof typeof labels]}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;