import React from 'react';
import { Waves, Sun, Sparkles, Smile, ShieldCheck } from 'lucide-react';

export const PoolTips: React.FC = () => {
  const tips = [
    {
      emoji: '🩱',
      title: 'Traje de Baño',
      desc: 'Ven con tu traje de baño listo o para cambiarte al llegar en los vestidores.',
    },
    {
      emoji: '🏖️',
      title: 'Toalla Personal',
      desc: 'Trae tu toalla de piscina o playa favorita para secarte cómodamente.',
    },
    {
      emoji: '🧴',
      title: 'Bloqueador Solar',
      desc: 'El sol de Peñalolén estará radiante; protégete para disfrutar al 100%.',
    },
    {
      emoji: '🕶️',
      title: 'Lentes & Sombrero',
      desc: 'Un toque chic y fresco para proteger tus ojos mientras descansas.',
    },
    {
      emoji: '👗',
      title: 'Ropa de Cambio Seca',
      desc: 'Para la hora del brindis, corte de pastel y la fiesta al atardecer.',
    },
    {
      emoji: '🎉',
      title: '¡Ganas de Pasarla Increíble!',
      desc: 'Lo más importante: tu energía y cariño para hacer este día inolvidable.',
    },
  ];

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <div className="rounded-3xl p-6 sm:p-10 bg-linear-to-br from-[#164E5B] to-[#458D9D] text-white shadow-xl relative overflow-hidden">
        {/* Subtle decorative circles */}
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/10 blur-xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-[#d4af37]/20 blur-xl pointer-events-none" />

        <div className="text-center mb-10 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-widest mb-3 border border-white/25">
            <Waves className="w-4 h-4 text-[#9ED3E6]" />
            <span>Checklist para la Piscina</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl font-bold">
            ¿Qué no puede faltar en tu mochila?
          </h2>
          <p className="font-body text-xs sm:text-sm text-white/85 max-w-lg mx-auto mt-2">
            Preparativos para disfrutar al máximo una tarde de piscina entre risas y amigos:
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 relative z-10">
          {tips.map((tip, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-200 hover:bg-white/15 hover:border-white/40 flex flex-col items-center text-center"
            >
              <div className="text-3xl mb-2 select-none">{tip.emoji}</div>
              <h4 className="font-semibold text-sm sm:text-base text-white mb-1">
                {tip.title}
              </h4>
              <p className="text-xs text-white/80 leading-relaxed font-light">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Safety & Comfort Note */}
        <div className="mt-8 pt-6 border-t border-white/20 text-center text-xs text-white/85 flex items-center justify-center gap-2 relative z-10">
          <ShieldCheck className="w-4 h-4 text-[#9ED3E6]" />
          <span>El lugar cuenta con vestidores, baños y áreas de sombra para mayor comodidad.</span>
        </div>
      </div>
    </section>
  );
};
