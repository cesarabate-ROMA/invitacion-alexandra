import React, { useState } from 'react';
import { Calendar, MapPin, Sparkles, Waves, Heart, ChevronDown } from 'lucide-react';
import defaultFramedImage from '../assets/images/FOTO3.jpg';

interface HeroProps {
  onOpenRsvp: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRsvp }) => {
  const [photoSrc] = useState<string>(() => {
    // Preserve custom photo if user had one in their browser, otherwise use original FOTO3.jpg
    const saved = localStorage.getItem('alexandra_custom_hero') || localStorage.getItem('alexandra_custom_photo');
    if (saved) return saved;
    return defaultFramedImage;
  });

  return (
    <header className="relative min-h-[92vh] flex flex-col items-center justify-center pt-16 pb-12 px-4 overflow-hidden">
      {/* Subtle organic light reflections */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-radial from-[#9ED3E6]/30 via-[#d4af37]/10 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Floating Seashell & Starfish Ambient Elements */}
      <div className="absolute top-24 left-8 text-2xl opacity-40 animate-float-slow hidden md:block select-none pointer-events-none">
        🐚
      </div>
      <div className="absolute top-40 right-10 text-2xl opacity-40 animate-float-slow hidden md:block select-none pointer-events-none" style={{ animationDelay: '2s' }}>
        ⭐
      </div>
      <div className="absolute bottom-28 left-14 text-2xl opacity-40 animate-float-slow hidden md:block select-none pointer-events-none" style={{ animationDelay: '4s' }}>
        ✨
      </div>

      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Crown & Subheading */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/90 border border-[#d4af37]/50 shadow-xs mb-6 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-[#d4af37]" />
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#164E5B]">
            ¡Estás Cordialmente Invitado/a!
          </span>
          <Sparkles className="w-4 h-4 text-[#d4af37]" />
        </div>

        {/* Script title */}
        <p className="font-script text-4xl sm:text-5xl md:text-6xl text-[#458D9D] mb-1">
          Mis Dulces
        </p>

        {/* Main Title */}
        <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#164E5B] uppercase mb-2">
          15 Años
        </h1>

        {/* Quinceañera Name */}
        <div className="relative mb-4">
          <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-extrabold gold-gradient-text tracking-wide">
            Alexandra
          </h2>
          <div className="w-24 h-0.5 bg-linear-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-3" />
        </div>

        {/* Badge: Invitación Individual / Sin Acompañantes */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold shadow-xs mb-4">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
          <span>Pase Personal • Invitación Individual (Sin Acompañantes)</span>
        </div>

        {/* FRAMED PORTRAIT: Original framed photo fixed permanently */}
        <div className="relative my-4 flex flex-col items-center">
          <div className="group relative">
            {/* Outer glowing halo */}
            <div className="absolute -inset-3 rounded-[32px] bg-linear-to-r from-[#d4af37]/40 via-[#458D9D]/30 to-[#9ED3E6]/40 blur-md opacity-80 group-hover:opacity-100 transition duration-500" />

            {/* Artistic Frame Card with seashells and pearls styling */}
            <div className="relative w-72 sm:w-84 md:w-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#fffdfa] bg-[#faf8f5] transition-transform duration-500 group-hover:scale-[1.01]">
              {/* Corner decorative watercolor accents */}
              <div className="absolute top-2 left-2 z-20 text-xl pointer-events-none drop-shadow-xs">🐚</div>
              <div className="absolute top-2 right-2 z-20 text-xl pointer-events-none drop-shadow-xs">⭐</div>
              <div className="absolute bottom-6 left-2 z-20 text-lg pointer-events-none drop-shadow-xs">⭐</div>
              <div className="absolute bottom-6 right-2 z-20 text-xl pointer-events-none drop-shadow-xs">🐚</div>

              {/* Framed Image - Fixed permanently without buttons */}
              <div className="relative min-h-[360px] sm:min-h-[420px] bg-linear-to-b from-[#eaf4f7] to-[#fbf7ee] flex items-center justify-center overflow-hidden">
                <img
                  src={photoSrc}
                  alt="Alexandra enmarcada con conchas marinas y perlas"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/images/FOTO3.jpg';
                  }}
                  className="w-full h-auto object-cover object-center block"
                />
              </div>
            </div>

            {/* Golden Ribbon Badge underneath */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-linear-to-r from-[#164E5B] to-[#458D9D] text-white text-[11px] font-semibold tracking-wider uppercase shadow-md flex items-center gap-1.5 whitespace-nowrap border border-white/60">
              <Heart className="w-3 h-3 text-[#A3D5E4] fill-[#A3D5E4]" />
              <span>Celebración & Pool Party</span>
            </div>
          </div>
        </div>

        {/* Emotional Invitation Message */}
        <div className="max-w-xl mx-auto mt-6 mb-8 space-y-3 px-4">
          <p className="font-editorial italic text-lg sm:text-xl text-[#164E5B] leading-relaxed">
            “Te invito a celebrar este día tan importante para mí.”
          </p>
          <p className="font-body text-sm sm:text-base text-slate-700 leading-relaxed font-light">
            Prepárate para un día de <strong className="font-semibold text-[#164E5B]">piscina</strong>, lleno de <strong className="font-semibold text-[#164E5B]">risas</strong>, <strong className="font-semibold text-[#164E5B]">amigos</strong> y muchísima diversión bajo el sol.
          </p>
        </div>

        {/* Quick Details Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-[#164E5B] font-medium mb-10">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/90 border border-[#d4af37]/30 shadow-xs">
            <Calendar className="w-4 h-4 text-[#458D9D]" />
            <span>Sábado 07 de Noviembre</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/90 border border-[#d4af37]/30 shadow-xs">
            <Waves className="w-4 h-4 text-[#458D9D]" />
            <span>1:00 PM a 7:00 PM</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/90 border border-[#d4af37]/30 shadow-xs">
            <MapPin className="w-4 h-4 text-[#458D9D]" />
            <span>Laguna San Pedro 1865, Peñalolén</span>
          </div>
        </div>

        {/* Primary Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenRsvp}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-linear-to-r from-[#164E5B] via-[#458D9D] to-[#164E5B] text-white font-semibold text-sm sm:text-base tracking-wide shadow-xl shadow-[#458D9D]/30 hover:shadow-2xl hover:brightness-110 active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2.5"
          >
            <Sparkles className="w-5 h-5 text-[#9ED3E6]" />
            <span>Confirmar Asistencia</span>
          </button>

          <a
            href="#ubicacion"
            className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/90 text-[#164E5B] border border-[#d4af37]/50 font-semibold text-sm sm:text-base tracking-wide shadow-md hover:bg-[#faf8f5] hover:border-[#d4af37] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <MapPin className="w-4 h-4 text-[#d4af37]" />
            <span>Ver Ubicación</span>
          </a>
        </div>
      </div>

      {/* Down arrow scroll helper */}
      <a
        href="#cuenta-regresiva"
        aria-label="Desplazarse hacia abajo"
        className="mt-12 text-[#458D9D] opacity-70 hover:opacity-100 transition-opacity animate-bounce cursor-pointer p-2"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </header>
  );
};
