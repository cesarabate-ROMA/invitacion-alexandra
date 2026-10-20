import React, { useState } from 'react';
import { X, Send, Heart, Users, CheckCircle2, Sparkles, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { RSVPData } from '../types.ts';

interface RsvpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RsvpModal: React.FC<RsvpModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<RSVPData>({
    fullName: '',
    attending: 'yes',
    guestCount: 1,
    dietaryRestrictions: '',
    phone: '',
    personalMessage: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim()) return;

    // Trigger celebration confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#458D9D', '#164E5B', '#d4af37', '#9ED3E6', '#F5F5EE'],
    });

    setSubmitted(true);
  };

  const sendToWhatsApp = () => {
    const attendanceText = formData.attending === 'yes'
      ? `¡Sí, confirmo mi asistencia con mucha alegría! 🎉`
      : `Lamentablemente no podré asistir esta vez, pero te deseo lo mejor 💖`;

    const message = `✨ *CONFIRMACIÓN DE ASISTENCIA - 15 AÑOS DE ALEXANDRA* ✨

👑 *Nombre:* ${formData.fullName}
🌊 *¿Asistirá?:* ${attendanceText}
🎟️ *Pase:* Individual (1 persona - Sin acompañantes)
${formData.dietaryRestrictions ? `🥗 *Restricciones/Alergias:* ${formData.dietaryRestrictions}\n` : ''}${formData.personalMessage ? `💌 *Mensaje con cariño:* "${formData.personalMessage}"\n` : ''}
¡Nos vemos el Sábado 07 de Noviembre en Laguna San Pedro 1865, Peñalolén! 🎈`;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="parchment-card w-full max-w-lg rounded-3xl p-6 sm:p-8 border border-[#d4af37]/50 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="text-center mb-5">
              <div className="w-12 h-12 rounded-full bg-[#164E5B]/10 text-[#164E5B] flex items-center justify-center mx-auto mb-3 shadow-xs">
                <Sparkles className="w-6 h-6 text-[#d4af37]" />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#458D9D] block mb-1">
                Confirmación de Asistencia
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#164E5B]">
                ¿Nos acompañas a celebrar?
              </h3>
              <p className="font-body text-xs sm:text-sm text-slate-600 mt-1 max-w-sm mx-auto">
                Por favor confirma tu asistencia antes del 25 de Octubre para organizar todo con cariño.
              </p>
            </div>

            {/* Aviso Importante: Sin acompañantes */}
            <div className="p-3.5 rounded-2xl bg-amber-50/90 border border-amber-300 text-amber-900 mb-5 flex items-center gap-3 shadow-xs">
              <div className="w-8 h-8 rounded-xl bg-amber-200/80 flex items-center justify-center shrink-0 text-amber-950 font-bold text-xs">
                🎟️
              </div>
              <div className="text-xs">
                <strong className="block font-semibold text-amber-950">
                  Invitación Individual (Sin Acompañantes):
                </strong>
                <span className="text-amber-900/90">
                  Por razones de aforo y organización, cada invitación es personal y válida exclusivamente para la persona invitada. ¡Agradecemos tu comprensión!
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-[#164E5B] uppercase tracking-wider mb-1.5">
                  Nombre y Apellido del Invitado/a *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Ej: Camila Pérez"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-hidden focus:border-[#458D9D] focus:ring-2 focus:ring-[#458D9D]/20 transition-all"
                />
              </div>

              {/* Attendance Choice */}
              <div>
                <label className="block text-xs font-semibold text-[#164E5B] uppercase tracking-wider mb-1.5">
                  ¿Asistirás al evento? *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attending: 'yes' })}
                    className={`px-4 py-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      formData.attending === 'yes'
                        ? 'bg-[#164E5B] text-white border-[#164E5B] shadow-md'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <span>🎉 ¡Sí, confirmo!</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attending: 'no' })}
                    className={`px-4 py-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      formData.attending === 'no'
                        ? 'bg-rose-700 text-white border-rose-700 shadow-md'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <span>😢 No podré asistir</span>
                  </button>
                </div>
              </div>

              {/* Guest Count Card: strictly individual */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <Users className="w-4 h-4 text-[#458D9D]" />
                  <span>Tipo de Pase:</span>
                  <strong className="text-[#164E5B]">1 Persona (Individual)</strong>
                </div>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 uppercase tracking-wider">
                  Sin acompañantes
                </span>
              </div>

              {/* Dietary / Allergies */}
              <div>
                <label className="block text-xs font-semibold text-[#164E5B] uppercase tracking-wider mb-1.5">
                  Restricciones alimentarias / Alergias (opcional)
                </label>
                <input
                  type="text"
                  value={formData.dietaryRestrictions}
                  onChange={(e) => setFormData({ ...formData, dietaryRestrictions: e.target.value })}
                  placeholder="Ej: Vegetariano, celíaco, ninguna..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-hidden focus:border-[#458D9D]"
                />
              </div>

              {/* Personal message */}
              <div>
                <label className="block text-xs font-semibold text-[#164E5B] uppercase tracking-wider mb-1.5">
                  Dedicatoria o mensaje para Alexandra (opcional)
                </label>
                <textarea
                  rows={2}
                  value={formData.personalMessage}
                  onChange={(e) => setFormData({ ...formData, personalMessage: e.target.value })}
                  placeholder="Escribe unas palabras bonitas..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-hidden focus:border-[#458D9D] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-linear-to-r from-[#164E5B] via-[#458D9D] to-[#164E5B] text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer active:scale-98 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Continuar y Enviar</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-sm animate-bounce">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#164E5B] mb-2">
              ¡Muchas Gracias, {formData.fullName}!
            </h3>

            <p className="text-sm text-slate-600 max-w-sm mx-auto mb-6">
              Tu respuesta ha sido registrada. Ahora puedes enviar un mensaje directo a WhatsApp para que Alexandra tenga tu confirmación al instante.
            </p>

            <div className="space-y-3">
              <button
                onClick={sendToWhatsApp}
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-98"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Enviar Confirmación a WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs transition-colors cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
