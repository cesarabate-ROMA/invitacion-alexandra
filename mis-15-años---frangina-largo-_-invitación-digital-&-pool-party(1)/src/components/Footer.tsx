import React from 'react';
import { Heart, Sparkles, ArrowUp, Waves } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-[#d4af37]/30 bg-white/70 backdrop-blur-md py-12 px-4 text-center relative">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Crown & Name */}
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-[#d4af37]" />
          <span className="font-script text-4xl text-[#164E5B]">Alexandra</span>
          <Sparkles className="w-4 h-4 text-[#d4af37]" />
        </div>

        <p className="font-display text-sm tracking-[0.25em] uppercase text-[#458D9D] font-bold mb-4">
          Mis Dulces 15 Años • Pool Party
        </p>

        <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mb-6">
          Sábado 07 de Noviembre, 2026 • Laguna San Pedro 1865, Peñalolén.
          ¡Tu compañía hace que este día sea verdaderamente inolvidable!
        </p>

        <div className="flex items-center gap-2 text-xs text-slate-400 mb-8">
          <span>Hecho con</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>para celebrar un día mágico</span>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-all cursor-pointer active:scale-95 shadow-xs"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>Volver arriba</span>
        </button>
      </div>
    </footer>
  );
};
