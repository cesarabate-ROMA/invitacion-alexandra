import React from 'react';
import { Sparkles, Ban, Check, Sun, Waves, Shirt } from 'lucide-react';

export const DressCode: React.FC = () => {
  const palette = [
    {
      name: 'Azul Petróleo',
      hex: '#164E5B',
      textColor: 'text-white',
      allowed: true,
      description: 'Elegante y sofisticado',
    },
    {
      name: 'Aqua Marino',
      hex: '#458D9D',
      textColor: 'text-white',
      allowed: true,
      description: 'Fresco y primaveral',
    },
    {
      name: 'Celeste Pastel',
      hex: '#9ED3E6',
      textColor: 'text-[#164E5B]',
      allowed: false,
      description: '¡RESERVADO SOLO PARA LA QUINCEAÑERA!',
    },
    {
      name: 'Blanco Marfil / Crema',
      hex: '#F5F5EE',
      textColor: 'text-[#164E5B]',
      allowed: true,
      description: 'Luminoso y chic',
    },
    {
      name: 'Arena Cálida / Beige',
      hex: '#C4B5A5',
      textColor: 'text-[#164E5B]',
      allowed: true,
      description: 'Cálido y neutro',
    },
  ];

  return (
    <section id="dress-code" className="py-16 px-4 max-w-4xl mx-auto scroll-mt-10">
      <div className="parchment-card rounded-3xl p-6 sm:p-10 border border-[#d4af37]/30 shadow-xl relative overflow-hidden">
        {/* Soft decorative background circles */}
        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#458D9D]/10 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-[#d4af37]/10 blur-2xl pointer-events-none" />

        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#164E5B]/10 text-[#164E5B] text-xs font-semibold uppercase tracking-widest mb-3">
            <Shirt className="w-4 h-4 text-[#458D9D]" />
            <span>Código de Vestimenta</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl text-[#164E5B] font-bold">
            Dress Code & Paleta de Colores
          </h2>
          <p className="font-body text-sm sm:text-base text-[#458D9D] max-w-xl mx-auto mt-2">
            Queremos que te sientas cómodo/a y radiante. Inspirado en nuestra paleta pastel playera & pool chic:
          </p>
        </div>

        {/* Visual Color Swatches Palette */}
        <div className="mb-10">
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-center text-[#164E5B]/80 mb-4 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Paleta Oficial del Evento</span>
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          </div>

          {/* Palette Banner (mimicking user uploaded image 4 with red crossed line) */}
          <div className="grid grid-cols-5 h-44 sm:h-52 rounded-2xl overflow-hidden shadow-md border-2 border-white/80 ring-1 ring-[#164E5B]/10">
            {palette.map((color, index) => (
              <div
                key={index}
                style={{ backgroundColor: color.hex }}
                className="relative flex flex-col justify-between p-2 sm:p-3 transition-transform hover:scale-[1.02] duration-200"
              >
                {/* Top Badge */}
                <div className="flex justify-center">
                  {color.allowed ? (
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/90 text-emerald-600 shadow-xs">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                  ) : (
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-rose-600 text-white shadow-md animate-pulse">
                      <Ban className="w-4 h-4 stroke-[2.5]" />
                    </span>
                  )}
                </div>

                {/* Red cross-out scribble on the 3rd color */}
                {!color.allowed && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <svg className="w-full h-full text-red-600 drop-shadow-md" viewBox="0 0 100 200" preserveAspectRatio="none">
                      <path
                        d="M20,10 Q60,30 35,50 Q10,70 50,90 Q85,110 30,130 Q15,150 70,170 Q40,185 60,195"
                        fill="none"
                        stroke="#dc2626"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <line x1="15" y1="20" x2="85" y2="180" stroke="#b91c1c" strokeWidth="7" strokeLinecap="round" />
                      <line x1="85" y1="20" x2="15" y2="180" stroke="#b91c1c" strokeWidth="7" strokeLinecap="round" />
                    </svg>
                  </div>
                )}

                {/* Bottom label */}
                <div className={`text-center ${color.textColor} text-[10px] sm:text-xs font-semibold leading-tight drop-shadow-xs`}>
                  {color.name}
                  {!color.allowed && (
                    <span className="block text-[9px] sm:text-[10px] font-bold text-red-700 bg-white/95 px-1 py-0.5 rounded-sm mt-1 shadow-xs">
                      RESERVADO
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Alert Box for Celeste Pastel */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/90 border border-amber-300 text-amber-900 mb-8 flex items-start gap-3.5 shadow-xs">
          <div className="p-2 rounded-xl bg-amber-200/80 text-amber-950 shrink-0">
            <Ban className="w-5 h-5 text-red-600" />
          </div>
          <div className="text-sm">
            <strong className="block font-semibold text-rose-950 text-sm sm:text-base mb-0.5">
              Nota importante sobre el color Celeste:
            </strong>
            <p className="text-amber-900/90 leading-relaxed">
              El color <strong className="underline decoration-red-500 font-bold text-red-700">Celeste Pastel (tachado en rojo)</strong> está reservado <strong>exclusivamente para el vestido de la Quinceañera (Alexandra)</strong>. Agradecemos con todo el corazón que elijas cualquiera de los otros cuatro bellos tonos pasteles: <em>Azul Petróleo, Aqua Marino, Blanco Marfil / Crema o Arena Cálida</em>.
            </p>
          </div>
        </div>

        {/* Pool Chic Guidelines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-white/80 border border-[#458D9D]/20 shadow-xs">
            <div className="flex items-center gap-2.5 text-[#164E5B] font-semibold text-sm sm:text-base mb-2">
              <Sun className="w-5 h-5 text-[#d4af37]" />
              <h4>Estilo para la Celebración</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Ropa fresca, vestidos ligeros, lino, guayaberas, faldas o pantalones cómodos dentro de la gama de colores permitidos.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/80 border border-[#458D9D]/20 shadow-xs">
            <div className="flex items-center gap-2.5 text-[#164E5B] font-semibold text-sm sm:text-base mb-2">
              <Waves className="w-5 h-5 text-[#458D9D]" />
              <h4>Para la Piscina</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              No olvides tu traje de baño, toalla, sandalias, gafas de sol y bloqueador solar para disfrutar una tarde refrescante e inolvidable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
