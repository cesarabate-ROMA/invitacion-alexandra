import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Waves, Navigation, ExternalLink, Copy, Check, Car, Sparkles } from 'lucide-react';
import venuePhoto from '../assets/images/pool_party_venue_1792176164376.jpg';

export const EventDetails: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const address = "Laguna San Pedro 1865, Peñalolén, Región Metropolitana";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Laguna San Pedro 1865, Peñalolén, Chile")}`;
  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent("Laguna San Pedro 1865 Peñalolen")}`;

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  return (
    <section id="ubicacion" className="py-16 px-4 max-w-5xl mx-auto scroll-mt-10">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#458D9D]/15 text-[#164E5B] text-xs font-semibold uppercase tracking-widest mb-3">
          <Waves className="w-4 h-4 text-[#458D9D]" />
          <span>Lugar & Fecha de la Celebración</span>
        </div>
        <h2 className="font-editorial text-3xl sm:text-4xl text-[#164E5B] font-bold">
          ¿Cuándo y Dónde?
        </h2>
        <p className="font-body text-sm sm:text-base text-[#458D9D] max-w-xl mx-auto mt-2">
          Prepárate para un día de sol, piscina, risas y momentos inolvidables.
        </p>
      </div>

      {/* Main Grid: Info Cards + Venue Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Date & Time Cards */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          {/* Card: Fecha & Horario */}
          <div className="parchment-card rounded-2xl p-6 border border-[#d4af37]/35 shadow-md flex-1">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#164E5B] text-white flex items-center justify-center shrink-0 shadow-md">
                <Calendar className="w-6 h-6 text-[#9ED3E6]" />
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#458D9D] block">
                  Fecha del Evento
                </span>
                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#164E5B]">
                  Sábado 07 de Noviembre
                </h3>
                <p className="text-sm text-slate-600 font-medium">
                  Año 2026
                </p>
              </div>
            </div>

            <div className="my-4 border-t border-[#d4af37]/20" />

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#458D9D] text-white flex items-center justify-center shrink-0 shadow-md">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#458D9D] block">
                  Horario
                </span>
                <h3 className="font-editorial text-xl font-bold text-[#164E5B]">
                  1:00 PM a 7:00 PM
                </h3>
                <p className="text-xs text-slate-500">
                  (13:00 - 19:00 hrs) • ¡Llega puntual para disfrutar de cada sorpresa!
                </p>
              </div>
            </div>

            <div className="my-4 border-t border-[#d4af37]/20" />

            {/* Pase Individual Indicator */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs">
              <span className="text-base">🎟️</span>
              <div>
                <strong className="block font-semibold">Invitación Personal & Individual:</strong>
                <span>Pase exclusivo para el invitado/a (evento sin acompañantes).</span>
              </div>
            </div>
          </div>

          {/* Card: Ubicación */}
          <div className="parchment-card rounded-2xl p-6 border border-[#d4af37]/35 shadow-md flex-1">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#164E5B] to-[#458D9D] text-white flex items-center justify-center shrink-0 shadow-md">
                <MapPin className="w-6 h-6 text-[#A3D5E4]" />
              </div>
              <div className="space-y-1 flex-1">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#458D9D] block">
                  Ubicación
                </span>
                <h3 className="font-editorial text-xl font-bold text-[#164E5B]">
                  Laguna San Pedro 1865
                </h3>
                <p className="text-sm font-medium text-slate-700">
                  Peñalolén, Santiago de Chile
                </p>
              </div>
            </div>

            {/* Quick Copy Address */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 truncate mr-2">{address}</span>
              <button
                onClick={copyAddress}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-[#458D9D]/30 text-[#164E5B] hover:bg-[#f2f8f9] transition-all cursor-pointer shrink-0"
              >
                {copiedAddress ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copiada</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>

            {/* Navigation buttons */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#164E5B] text-white text-xs font-semibold hover:bg-[#1f6675] shadow-xs transition-all active:scale-95"
              >
                <Navigation className="w-4 h-4 text-[#A3D5E4]" />
                <span>Google Maps</span>
              </a>

              <a
                href={wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#33ccff] text-[#0d47a1] text-xs font-bold hover:bg-[#29b6f6] shadow-xs transition-all active:scale-95"
              >
                <Car className="w-4 h-4" />
                <span>Waze</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Venue Image & Interactive Map View */}
        <div className="lg:col-span-7 flex flex-col rounded-3xl overflow-hidden border border-[#d4af37]/35 shadow-xl bg-white">
          <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
            <img
              src={venuePhoto}
              alt="Lugar de la Pool Party en Peñalolén"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/images/pool_party_venue.jpg';
              }}
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold tracking-wider uppercase mb-1.5 w-fit border border-white/30">
                <Sparkles className="w-3 h-3 text-[#d4af37]" />
                <span>Venue Exclusivo</span>
              </div>
              <h4 className="font-editorial text-2xl font-bold">
                Piscina & Jardines en Peñalolén
              </h4>
              <p className="text-xs sm:text-sm text-white/90">
                Hermoso entorno con piscina cristalina, áreas verdes y vista a la cordillera.
              </p>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between bg-slate-50">
            <div className="w-full h-52 sm:h-60 rounded-xl overflow-hidden border border-slate-200 relative shadow-inner">
              <iframe
                title="Mapa Laguna San Pedro 1865 Peñalolen"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://maps.google.com/maps?q=Laguna+San+Pedro+1865,+Pe%C3%B1alol%C3%A9n,+Chile&t=&z=15&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#458D9D]" />
                Laguna San Pedro 1865, Peñalolén
              </span>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#164E5B] font-semibold hover:underline inline-flex items-center gap-1"
              >
                <span>Ver en pantalla completa</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
