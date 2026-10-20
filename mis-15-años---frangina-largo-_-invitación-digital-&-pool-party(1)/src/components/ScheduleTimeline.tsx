import React from 'react';
import { Clock, GlassWater, Waves, Utensils, Cake, Music, Heart, Sparkles } from 'lucide-react';

export const ScheduleTimeline: React.FC = () => {
  const schedule = [
    {
      time: '1:00 PM',
      title: 'Bienvenida & Cóctel Refrescante',
      description: 'Llegada de invitados, cócteles de bienvenida sin alcohol, fotos de bienvenida y acomodación.',
      icon: GlassWater,
      color: 'bg-[#164E5B]',
    },
    {
      time: '2:00 PM',
      title: '¡Pool Time & Diversión Acuática!',
      description: 'Apertura de la piscina, música veraniega, juegos con amigos, inflables y risas garantizadas.',
      icon: Waves,
      color: 'bg-[#458D9D]',
    },
    {
      time: '4:00 PM',
      title: 'Almuerzo & Estaciones de Snacks',
      description: 'Picoteo gourmet, barra de jugos naturales, comida deliciosa para recargar energías.',
      icon: Utensils,
      color: 'bg-[#164E5B]',
    },
    {
      time: '5:30 PM',
      title: 'Momento Especial: Brindis & Pastel',
      description: 'Palabras de gratitud, canto de feliz cumpleaños de 15 y el corte de la torta de ensueño.',
      icon: Cake,
      color: 'bg-[#d4af37]',
    },
    {
      time: '6:15 PM',
      title: 'Fiesta & Atardecer Dorado',
      description: 'Música, baile con amigos y fotos con la luz mágica del atardecer sobre Peñalolén.',
      icon: Music,
      color: 'bg-[#458D9D]',
    },
    {
      time: '7:00 PM',
      title: 'Despedida & Recuerdos',
      description: 'Agradecimientos, entrega de regalitos de recuerdo y despedida con el corazón lleno.',
      icon: Heart,
      color: 'bg-[#164E5B]',
    },
  ];

  return (
    <section id="itinerario" className="py-16 px-4 max-w-4xl mx-auto scroll-mt-10">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#164E5B]/10 text-[#164E5B] text-xs font-semibold uppercase tracking-widest mb-3">
          <Clock className="w-4 h-4 text-[#458D9D]" />
          <span>Cronograma del Evento</span>
        </div>
        <h2 className="font-editorial text-3xl sm:text-4xl text-[#164E5B] font-bold">
          Itinerario de la Fiesta
        </h2>
        <p className="font-body text-sm sm:text-base text-[#458D9D] max-w-xl mx-auto mt-2">
          De 1:00 PM a 7:00 PM • Cada momento pensado para disfrutar al máximo.
        </p>
      </div>

      <div className="relative border-l-2 border-[#d4af37]/40 ml-4 sm:ml-32 pl-6 sm:pl-8 space-y-8 sm:space-y-10">
        {schedule.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="relative group">
              {/* Left time badge on larger screens */}
              <div className="hidden sm:block absolute -left-38 top-1.5 w-26 text-right font-display text-sm font-bold text-[#164E5B]">
                {item.time}
              </div>

              {/* Node Circle on the line */}
              <div className={`absolute -left-[35px] sm:-left-[43px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full ${item.color} text-white flex items-center justify-center ring-4 ring-white shadow-md transition-transform group-hover:scale-110`}>
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F5F5EE]" />
              </div>

              {/* Content Card */}
              <div className="parchment-card rounded-2xl p-4 sm:p-5 border border-[#d4af37]/30 shadow-xs transition-all duration-200 group-hover:shadow-md group-hover:border-[#d4af37]">
                <div className="sm:hidden font-display text-xs font-bold text-[#458D9D] mb-1">
                  {item.time}
                </div>
                <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#164E5B] mb-1 flex items-center gap-2">
                  <span>{item.title}</span>
                  {index === 3 && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#d4af37]/20 text-[#a67c3b] font-sans font-semibold">
                      ¡Momento Clave!
                    </span>
                  )}
                </h3>
                <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
