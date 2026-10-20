import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, MapPin, Shirt, Gift, CheckSquare, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenRsvp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRsvp }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Cuenta Regresiva', href: '#cuenta-regresiva' },
    { name: 'Ubicación', href: '#ubicacion' },
    { name: 'Dress Code', href: '#dress-code' },
    { name: 'Regalo', href: '#regalo' },
    { name: 'Galería', href: '#galeria' },
  ];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-[#d4af37]/30 py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-script text-2xl sm:text-3xl text-[#164E5B] group-hover:text-[#458D9D] transition-colors">
            Alexandra
          </span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#164E5B]/10 text-[#164E5B] tracking-wider uppercase">
            15 Años
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider font-semibold text-[#164E5B]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#458D9D] transition-colors relative py-1"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenRsvp}
            className="px-4 py-2 rounded-full bg-[#164E5B] hover:bg-[#1f6675] text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#A3D5E4]" />
            <span>Confirmar Asistencia</span>
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#164E5B] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-[#d4af37]/30 px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-[#164E5B] hover:text-[#458D9D] py-1 border-b border-slate-100"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
