import { useEffect, useMemo, useState } from "react";
import { EVENT } from "../config/event";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const LABELS: Record<keyof TimeLeft, string> = {
  days: "Días",
  hours: "Horas",
  minutes: "Min",
  seconds: "Seg",
};

function diff(target: number): TimeLeft {
  const d = Math.max(0, target - Date.now());
  return {
    days: Math.floor(d / 86400000),
    hours: Math.floor((d % 86400000) / 3600000),
    minutes: Math.floor((d % 3600000) / 60000),
    seconds: Math.floor((d % 60000) / 1000),
  };
}

interface Props {
  /** Fecha destino ISO. Por defecto, el día del evento. */
  targetISO?: string;
  compact?: boolean;
}

export default function CountdownTimer({ targetISO = EVENT.dateISO, compact = false }: Props) {
  const target = useMemo(() => new Date(targetISO).getTime(), [targetISO]);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => diff(target));

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(diff(target)), 1000);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <div
      className={`flex justify-center gap-3 sm:gap-5 ${compact ? "" : "mt-10"}`}
      role="timer"
      aria-label={`Faltan ${timeLeft.days} días para Un Día para Dar Colima`}
    >
      {(Object.keys(LABELS) as (keyof TimeLeft)[]).map((unit) => (
        <div
          key={unit}
          className={`gradient-border relative grid place-items-center rounded-3xl bg-white/[0.07] backdrop-blur-xl ${
            compact ? "min-w-[64px] px-3 py-3" : "min-w-[78px] px-4 py-5 sm:min-w-[104px] sm:px-6"
          }`}
        >
          <div
            className={`display tabular-nums text-gradient ${
              compact ? "text-2xl" : "text-4xl sm:text-5xl"
            }`}
          >
            {timeLeft[unit].toString().padStart(2, "0")}
          </div>
          <div className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/55 sm:text-xs">
            {LABELS[unit]}
          </div>
        </div>
      ))}
    </div>
  );
}
