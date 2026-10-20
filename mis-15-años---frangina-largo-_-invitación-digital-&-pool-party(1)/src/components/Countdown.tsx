import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Bell, Sparkles } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const Countdown: React.FC = () => {
  // Target: Saturday November 7, 2026 at 13:00 (Chile Time UTC-3)
  const targetDate = new Date('2026-11-07T13:00:00-03:00').getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isPast: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const handleAddToCalendar = () => {
    const title = encodeURIComponent("15 Años de Alexandra - Pool Party");
    const details = encodeURIComponent(
      "¡Celebremos los 15 años de Alexandra! Día de piscina, amigos y diversión.\nImportante: Invitación personal individual (sin acompañantes).\nDress Code: Colores pasteles (excepto celeste reservado para la quinceañera).\nLugar: Laguna San Pedro 1865, Peñalolén.\nHorario: 1:00 PM a 7:00 PM."
    );
    const location = encodeURIComponent("Laguna San Pedro 1865, Peñalolén, Santiago, Chile");
    // 20261107T160000Z to 20261107T220000Z (13:00 to 19:00 CLT / UTC-3)
    const dates = "20261107T160000Z/20261107T220000Z";
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;

    window.open(googleCalendarUrl, '_blank', 'noopener,noreferrer');
  };

  const downloadIcs = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Alexandra//Mis 15 Anos//ES',
      'BEGIN:VEVENT',
      'SUMMARY:15 Años de Alexandra - Pool Party (Invitación Individual)',
      'DESCRIPTION:Día de piscina, risas, amigos y diversión. Invitación individual sin acompañantes. Traer traje de baño y toalla. Dress code colores pasteles (no celeste).',
      'LOCATION:Laguna San Pedro 1865, Peñalolén, Santiago, Chile',
      'DTSTART:20261107T160000Z',
      'DTEND:20261107T220000Z',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', '15_Anos_Alexandra.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative py-12 px-4 max-w-4xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#d4af37]/40 shadow-xs mb-4">
        <Sparkles className="w-4 h-4 text-[#d4af37]" />
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#164E5B]">
          Cuenta Regresiva
        </span>
        <Sparkles className="w-4 h-4 text-[#d4af37]" />
      </div>

      <h3 className="font-editorial text-2xl md:text-3xl text-[#164E5B] font-bold mb-2">
        Cada segundo nos acerca a este gran día
      </h3>
      <p className="font-body text-sm md:text-base text-[#458D9D] mb-8 font-light">
        Sábado 07 de Noviembre, 2026 • 1:00 PM a 7:00 PM
      </p>

      {/* Countdown Grid */}
      <div className="grid grid-cols-4 gap-2.5 sm:gap-4 md:gap-6 max-w-2xl mx-auto mb-8">
        {[
          { label: 'DÍAS', value: timeLeft.days },
          { label: 'HORAS', value: timeLeft.hours },
          { label: 'MINUTOS', value: timeLeft.minutes },
          { label: 'SEGUNDOS', value: timeLeft.seconds },
        ].map((item, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-[#d4af37]/35 shadow-lg shadow-[#458D9D]/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#d4af37]"
          >
            {/* Top golden pearl accent */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-linear-to-b from-white to-[#d4af37]/30 border border-white shadow-xs" />

            <div className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#164E5B] tracking-tight font-display tabular-nums">
              {String(item.value).padStart(2, '0')}
            </div>
            <div className="text-[10px] sm:text-xs tracking-[0.2em] font-semibold text-[#458D9D] mt-1">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* Add to Calendar Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={handleAddToCalendar}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#164E5B] text-white text-xs sm:text-sm font-medium tracking-wide shadow-md hover:bg-[#1f6675] hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-[#A3D5E4]" />
          <span>Agendar en Google Calendar</span>
        </button>

        <button
          onClick={downloadIcs}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#164E5B] border border-[#d4af37]/50 text-xs sm:text-sm font-medium tracking-wide shadow-xs hover:bg-[#faf8f5] hover:border-[#d4af37] transition-all duration-200 active:scale-95 cursor-pointer"
        >
          <Clock className="w-4 h-4 text-[#d4af37]" />
          <span>Descargar iCal (.ics)</span>
        </button>
      </div>
    </div>
  );
};
