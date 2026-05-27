"use client";

import { Phone, MapPin, UtensilsCrossed } from "lucide-react";

export function MobileBar() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden border-t"
      style={{
        background: "rgba(251,248,254,0.97)",
        backdropFilter: "blur(12px)",
        borderColor: "#E8D5F0",
        boxShadow: "0 -4px 20px rgba(74,26,107,0.12)",
      }}
      aria-label="Schnellzugriff"
    >
      <a
        href="tel:+4924018012820"
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3 transition-colors active:scale-95"
        style={{ color: "#7B3FA0" }}
        aria-label="Jetzt anrufen"
      >
        <Phone size={20} aria-hidden="true" />
        <span className="text-xs font-semibold">Anrufen</span>
      </a>

      <a
        href="https://maps.google.com/?q=Reyplatz+2,+52499+Baesweiler"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3 transition-colors active:scale-95"
        style={{ color: "#7B3FA0" }}
        aria-label="Route planen in Google Maps"
      >
        <MapPin size={20} aria-hidden="true" />
        <span className="text-xs font-semibold">Anfahrt</span>
      </a>

      <a
        href="#speisekarte"
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3 transition-colors active:scale-95"
        style={{ color: "#7B3FA0" }}
        aria-label="Zur Speisekarte springen"
      >
        <UtensilsCrossed size={20} aria-hidden="true" />
        <span className="text-xs font-semibold">Speisekarte</span>
      </a>
    </nav>
  );
}
