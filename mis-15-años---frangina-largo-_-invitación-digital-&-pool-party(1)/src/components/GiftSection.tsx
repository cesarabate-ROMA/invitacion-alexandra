import React, { useState } from 'react';
import { Gift, Copy, Check, Heart, Send, Sparkles, Building2, User, CreditCard, Hash } from 'lucide-react';
import confetti from 'canvas-confetti';

export const GiftSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const bankDetails = {
    titular: 'Frangina Largo',
    rut: '25.772.957-5',
    banco: 'Banco de Chile',
    tipoCuenta: 'Cuenta Vista',
    numeroCuenta: '00-010-09220-27',
  };

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    confetti({
      particleCount: 25,
      spread: 45,
      origin: { y: 0.8 },
      colors: ['#458D9D', '#d4af37', '#9ED3E6'],
    });
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const copyAllDetails = () => {
    const fullText = `Datos para transferencia - 15 Años de Alexandra:
• Titular de la cuenta: ${bankDetails.titular}
• RUT: ${bankDetails.rut}
• Banco: ${bankDetails.banco}
• Tipo de Cuenta: ${bankDetails.tipoCuenta}
• N° de Cuenta: ${bankDetails.numeroCuenta}`;

    copyToClipboard(fullText, 'all');
  };

  const notifyViaWhatsapp = () => {
    const message = encodeURIComponent(
      `¡Hola Alexandra! 💖 Te he enviado un regalito con mucho cariño para celebrar tus 15 años. ¡Nos vemos este 7 de noviembre para disfrutar esa pool party! 🎉✨`
    );
    window.open(`https://wa.me/?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="regalo" className="py-16 px-4 max-w-4xl mx-auto scroll-mt-10">
      <div className="parchment-card rounded-3xl p-6 sm:p-10 border border-[#d4af37]/35 shadow-xl relative overflow-hidden">
        {/* Decorative background embellishments */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-[#d4af37]/15 to-transparent rounded-bl-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-linear-to-tr from-[#458D9D]/15 to-transparent rounded-tr-full pointer-events-none" />

        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-linear-to-br from-[#164E5B] to-[#458D9D] flex items-center justify-center text-white shadow-lg shadow-[#458D9D]/20">
            <Gift className="w-7 h-7 text-[#A3D5E4]" />
          </div>

          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#458D9D] block mb-2">
            Muestra de Cariño
          </span>

          <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#164E5B] font-bold mb-4">
            Lluvia de Sobres / Transferencia
          </h2>

          <div className="relative p-5 sm:p-6 rounded-2xl bg-white/80 border border-[#d4af37]/30 shadow-xs mb-6">
            <Heart className="w-5 h-5 text-[#d4af37] mx-auto mb-2 fill-[#d4af37]/20" />
            <blockquote className="font-editorial italic text-base sm:text-lg text-[#164E5B] leading-relaxed">
              “Tu presencia es mi mejor regalo. Pero si deseas tener un detalle conmigo, un regalito en efectivo será recibido con mucho cariño.”
            </blockquote>
            <p className="font-script text-2xl sm:text-3xl text-[#458D9D] mt-3">
              Con cariño, Alexandra
            </p>
          </div>
        </div>

        {/* Bank Account Details Card */}
        <div className="max-w-xl mx-auto bg-white/95 rounded-2xl p-5 sm:p-7 border border-[#458D9D]/25 shadow-md relative">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#164E5B]/10 flex items-center justify-center text-[#164E5B]">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-sm sm:text-base text-[#164E5B]">
                  Datos Bancarios para Transferencia
                </h4>
                <p className="text-xs text-slate-500">Banco de Chile • Cuenta Vista</p>
              </div>
            </div>

            <button
              onClick={copyAllDetails}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#164E5B] text-white hover:bg-[#1f6675] transition-all cursor-pointer shadow-xs active:scale-95"
            >
              {copiedField === 'all' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                  <span>¡Copiados!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Copiar Todo</span>
                  <span className="sm:hidden">Copiar</span>
                </>
              )}
            </button>
          </div>

          {/* Details Grid */}
          <div className="space-y-3.5 text-sm">
            {/* Titular */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-[#f3f9fa] transition-colors">
              <div className="flex items-center gap-2.5 min-w-0">
                <User className="w-4 h-4 text-[#458D9D] shrink-0" />
                <div className="truncate">
                  <span className="text-xs text-slate-500 block">Nombre del Titular</span>
                  <span className="font-semibold text-[#164E5B]">{bankDetails.titular}</span>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(bankDetails.titular, 'titular')}
                className="p-2 text-slate-400 hover:text-[#164E5B] hover:bg-white rounded-lg transition-colors cursor-pointer"
                title="Copiar nombre"
              >
                {copiedField === 'titular' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* RUT */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-[#f3f9fa] transition-colors">
              <div className="flex items-center gap-2.5 min-w-0">
                <Hash className="w-4 h-4 text-[#458D9D] shrink-0" />
                <div className="truncate">
                  <span className="text-xs text-slate-500 block">RUT</span>
                  <span className="font-semibold text-[#164E5B]">{bankDetails.rut}</span>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(bankDetails.rut, 'rut')}
                className="p-2 text-slate-400 hover:text-[#164E5B] hover:bg-white rounded-lg transition-colors cursor-pointer"
                title="Copiar RUT"
              >
                {copiedField === 'rut' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Banco */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-[#f3f9fa] transition-colors">
              <div className="flex items-center gap-2.5 min-w-0">
                <Building2 className="w-4 h-4 text-[#458D9D] shrink-0" />
                <div className="truncate">
                  <span className="text-xs text-slate-500 block">Banco</span>
                  <span className="font-semibold text-[#164E5B]">{bankDetails.banco}</span>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(bankDetails.banco, 'banco')}
                className="p-2 text-slate-400 hover:text-[#164E5B] hover:bg-white rounded-lg transition-colors cursor-pointer"
                title="Copiar banco"
              >
                {copiedField === 'banco' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Tipo de cuenta */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-[#f3f9fa] transition-colors">
              <div className="flex items-center gap-2.5 min-w-0">
                <CreditCard className="w-4 h-4 text-[#458D9D] shrink-0" />
                <div className="truncate">
                  <span className="text-xs text-slate-500 block">Tipo de Cuenta</span>
                  <span className="font-semibold text-[#164E5B]">{bankDetails.tipoCuenta}</span>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(bankDetails.tipoCuenta, 'tipoCuenta')}
                className="p-2 text-slate-400 hover:text-[#164E5B] hover:bg-white rounded-lg transition-colors cursor-pointer"
                title="Copiar tipo de cuenta"
              >
                {copiedField === 'tipoCuenta' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Número de cuenta */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-[#f3f9fa] transition-colors">
              <div className="flex items-center gap-2.5 min-w-0">
                <CreditCard className="w-4 h-4 text-[#458D9D] shrink-0" />
                <div className="truncate">
                  <span className="text-xs text-slate-500 block">Número de Cuenta</span>
                  <span className="font-bold text-base text-[#164E5B] tracking-wide">{bankDetails.numeroCuenta}</span>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(bankDetails.numeroCuenta, 'numeroCuenta')}
                className="p-2 text-slate-400 hover:text-[#164E5B] hover:bg-white rounded-lg transition-colors cursor-pointer"
                title="Copiar número de cuenta"
              >
                {copiedField === 'numeroCuenta' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Action to notify Alexandra */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-slate-500 text-center sm:text-left">
              ¿Hiciste una transferencia? Puedes avisar con tu comprobante:
            </span>
            <button
              onClick={notifyViaWhatsapp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-all shadow-xs cursor-pointer active:scale-95 shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Avisar a Alexandra por WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
