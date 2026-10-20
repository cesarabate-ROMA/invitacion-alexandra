import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Countdown } from './components/Countdown.tsx';
import { EventDetails } from './components/EventDetails.tsx';
import { DressCode } from './components/DressCode.tsx';
import { PoolTips } from './components/PoolTips.tsx';
import { GiftSection } from './components/GiftSection.tsx';
import { PhotoGallery } from './components/PhotoGallery.tsx';
import { RsvpModal } from './components/RsvpModal.tsx';
import { AudioPlayer } from './components/AudioPlayer.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [rsvpOpen, setRsvpOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#2c3e50] relative overflow-x-hidden selection:bg-[#458D9D] selection:text-white">
      {/* Decorative gradient mesh background */}
      <div className="fixed inset-0 pointer-events-none -z-20 opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-linear-to-b from-[#A3D5E4]/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[40%] left-[-100px] w-[600px] h-[600px] bg-linear-to-r from-[#d4af37]/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-[-100px] w-[500px] h-[500px] bg-linear-to-t from-[#458D9D]/30 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Floating navigation header */}
      <Navbar onOpenRsvp={() => setRsvpOpen(true)} />

      {/* Hero Invitation Banner with framed photo of Alexandra */}
      <Hero onOpenRsvp={() => setRsvpOpen(true)} />

      {/* Countdown to Saturday Nov 7 */}
      <section id="cuenta-regresiva" className="scroll-mt-16">
        <Countdown />
      </section>

      {/* Divider */}
      <div className="max-w-md mx-auto my-6 flex items-center justify-center gap-4 text-[#d4af37]/60">
        <div className="h-px bg-linear-to-r from-transparent via-[#d4af37]/40 to-transparent flex-1" />
        <span className="text-xl">🐚</span>
        <div className="h-px bg-linear-to-r from-transparent via-[#d4af37]/40 to-transparent flex-1" />
      </div>

      {/* Date, Time & Location with interactive maps */}
      <EventDetails />

      {/* Dress Code with the 5 pastel colors and crossed-out light blue */}
      <DressCode />

      {/* Pool party essentials */}
      <PoolTips />

      {/* Gift and Bank Transfer Details */}
      <GiftSection />

      {/* Photo Gallery with portrait options */}
      <PhotoGallery />

      {/* Footer */}
      <Footer />

      {/* Interactive RSVP Modal */}
      <RsvpModal isOpen={rsvpOpen} onClose={() => setRsvpOpen(false)} />

      {/* Floating Ambient Music Player */}
      <AudioPlayer />
    </div>
  );
}
