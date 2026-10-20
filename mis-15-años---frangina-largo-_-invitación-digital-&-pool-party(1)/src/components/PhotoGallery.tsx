import React, { useState } from 'react';
import { Camera, Sparkles } from 'lucide-react';
import photoPrevious from '../assets/images/1000047326.jpg';

export const PhotoGallery: React.FC = () => {
  const [photoSrc] = useState<string>(() => {
    // Preserve custom uploaded photo from localStorage if present, otherwise use previous reference photo (1000047326.jpg)
    try {
      const saved = localStorage.getItem('alexandra_gallery_photos');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed[0]?.src) {
          return parsed[0].src;
        }
      }
    } catch (e) {
      console.error('Error reading gallery photos:', e);
    }
    return photoPrevious;
  });

  return (
    <section id="galeria" className="py-16 px-4 max-w-5xl mx-auto scroll-mt-10">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#164E5B]/10 text-[#164E5B] text-xs font-semibold uppercase tracking-widest mb-3">
          <Camera className="w-4 h-4 text-[#458D9D]" />
          <span>Galería de Fotos</span>
        </div>
        <h2 className="font-editorial text-3xl sm:text-4xl text-[#164E5B] font-bold">
          Momentos Inolvidables
        </h2>
        <p className="font-body text-sm sm:text-base text-[#458D9D] max-w-xl mx-auto mt-2">
          Una pequeña mirada a la sesión de fotos y los preparativos para este gran día.
        </p>
      </div>

      {/* Centered Single Official Portrait Card */}
      <div className="max-w-md sm:max-w-lg mx-auto">
        <div className="group relative rounded-3xl overflow-hidden border border-[#d4af37]/35 shadow-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-3xl">
          <div className="relative min-h-[380px] sm:min-h-[460px] w-full overflow-hidden bg-slate-100 flex items-center justify-center">
            {/* Photo Image - Fixed and Permanent */}
            <img
              src={photoSrc}
              alt="Retrato de Gala"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/images/1000047326.jpg';
              }}
              className="w-full h-auto object-cover object-center transition-transform duration-700 group-hover:scale-102 block"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            {/* Top Badge */}
            <div className="absolute top-4 left-4 pointer-events-none">
              <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-semibold tracking-wider uppercase border border-white/30 flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3 h-3 text-[#d4af37]" />
                Retrato Oficial
              </span>
            </div>

            {/* Bottom text */}
            <div className="absolute bottom-0 inset-x-0 p-6 text-white pointer-events-none">
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold mb-1.5 group-hover:text-[#9ED3E6] transition-colors">
                Retrato de Gala
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                Alexandra con tiara de cristales y guantes de satén blanco.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
