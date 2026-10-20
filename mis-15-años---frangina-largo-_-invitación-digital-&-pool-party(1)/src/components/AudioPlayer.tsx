import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { ambientMusic } from '../utils/audio.ts';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    ambientMusic.toggle((playing) => {
      setIsPlaying(playing);
    });
  };

  useEffect(() => {
    return () => {
      ambientMusic.pause();
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <button
        onClick={toggleMusic}
        className={`group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full shadow-xl transition-all duration-300 cursor-pointer border ${
          isPlaying
            ? 'bg-linear-to-r from-[#164E5B] to-[#458D9D] text-white border-white/40 ring-2 ring-[#458D9D]/30'
            : 'bg-white/95 text-[#164E5B] border-[#d4af37]/40 hover:border-[#d4af37]'
        }`}
        title={isPlaying ? 'Pausar melodía' : 'Reproducir melodía de ensueño'}
      >
        {isPlaying ? (
          <>
            <div className="flex items-center gap-0.5 h-3.5">
              <span className="w-1 bg-[#A3D5E4] rounded-full animate-pulse h-3" />
              <span className="w-1 bg-white rounded-full animate-pulse h-4 delay-75" />
              <span className="w-1 bg-[#d4af37] rounded-full animate-pulse h-2 delay-150" />
            </div>
            <Volume2 className="w-4 h-4 text-[#9ED3E6]" />
            <span className="text-xs font-semibold tracking-wide hidden sm:inline">
              Música Sonando
            </span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-[#a67c3b]" />
            <span className="text-xs font-semibold tracking-wide hidden sm:inline">
              Música de Fondo
            </span>
          </>
        )}
      </button>
    </div>
  );
};
