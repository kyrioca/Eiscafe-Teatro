"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

type Filter = "alle" | "eisbecher" | "spaghetti" | "ambiente" | "suesses";

const filters: { id: Filter; label: string }[] = [
  { id: "alle",      label: "Alle" },
  { id: "eisbecher", label: "Eisbecher" },
  { id: "spaghetti", label: "Spaghetti-Eis" },
  { id: "ambiente",  label: "Café-Atmosphäre" },
  { id: "suesses",   label: "Süßspeisen" },
];

interface GalleryItem {
  id: number;
  category: Filter;
  label: string;
  gradient: string;
  tall?: boolean;
}

const items: GalleryItem[] = [
  { id: 1,  category: "spaghetti", label: "Spaghetti-Eis Klassiker",      gradient: "linear-gradient(160deg, #E8D5F0 0%, #7B3FA0 100%)", tall: true },
  { id: 2,  category: "eisbecher", label: 'Eisbecher "Teatro"',            gradient: "linear-gradient(160deg, #F5E6C8 0%, #EDD8A0 100%)" },
  { id: 3,  category: "ambiente",  label: "Reyplatz — unser Zuhause",      gradient: "linear-gradient(160deg, #4A1A6B 0%, #7B3FA0 100%)" },
  { id: 4,  category: "suesses",   label: "Crêpe mit Erdbeeren",           gradient: "linear-gradient(160deg, #F5E6C8 0%, #C4A8D8 100%)", tall: true },
  { id: 5,  category: "eisbecher", label: "Parfait Saison",                gradient: "linear-gradient(160deg, #C4A8D8 0%, #E8D5F0 100%)" },
  { id: 6,  category: "ambiente",  label: "Innenbereich",                  gradient: "linear-gradient(160deg, #EDD8A0 0%, #4A1A6B 100%)" },
  { id: 7,  category: "spaghetti", label: "Spaghetti-Eis mit Sahne",       gradient: "linear-gradient(160deg, #7B3FA0 0%, #C4A8D8 100%)", tall: true },
  { id: 8,  category: "suesses",   label: "Waffel Premium",                gradient: "linear-gradient(160deg, #FBF8FE 0%, #E8D5F0 100%)" },
  { id: 9,  category: "eisbecher", label: "3 Kugeln — deine Wahl",         gradient: "linear-gradient(160deg, #4A1A6B 0%, #C4A8D8 100%)" },
  { id: 10, category: "ambiente",  label: "Thekenbereich",                  gradient: "linear-gradient(160deg, #E8D5F0 0%, #F5E6C8 100%)", tall: true },
  { id: 11, category: "suesses",   label: "Tiramisu nach Hausrezept",       gradient: "linear-gradient(160deg, #7B3FA0 0%, #4A1A6B 100%)" },
  { id: 12, category: "eisbecher", label: "Affogato al Caffè",             gradient: "linear-gradient(160deg, #2D2D2D 0%, #7B3FA0 100%)" },
];

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState<Filter>("alle");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeFilter === "alle"
    ? items
    : items.filter((i) => i.category === activeFilter);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    document.body.classList.add("lightbox-open");
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.classList.remove("lightbox-open");
  }, []);

  const prev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  const next = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  const currentItem = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <section
      id="galerie"
      className="section-pad"
      style={{ background: "linear-gradient(180deg, #F0E8F5 0%, #FBF8FE 100%)" }}
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span
            className="text-xs font-bold tracking-[0.22em] uppercase mb-4 block"
            style={{ color: "#7B3FA0" }}
          >
            La Galleria
          </span>
          <h2
            id="gallery-heading"
            className="font-playfair leading-tight mb-4"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#4A1A6B" }}
          >
            Galerie
          </h2>
          <p className="text-base" style={{ color: "#5A5A6B" }}>
            Einblicke in unsere Welt — sobald Fotos vorliegen, werden sie hier zu sehen sein.
          </p>
        </motion.div>

        {/* Filter chips */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 justify-center mb-10"
          role="group"
          aria-label="Galerie filtern"
        >
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-250"
              style={{
                background: activeFilter === f.id
                  ? "linear-gradient(135deg, #7B3FA0, #4A1A6B)"
                  : "white",
                color: activeFilter === f.id ? "white" : "#5A5A6B",
                boxShadow: activeFilter === f.id
                  ? "0 4px 16px rgba(123,63,160,0.3)"
                  : "0 2px 8px rgba(74,26,107,0.08)",
              }}
              aria-pressed={activeFilter === f.id}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Photo credit notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 justify-center mb-8 p-4 rounded-2xl"
          style={{ background: "#F5E6C8" }}
        >
          <Camera size={18} style={{ color: "#4A1A6B" }} aria-hidden="true" />
          <p className="text-sm" style={{ color: "#4A1A6B" }}>
            <strong>Echte Fotos folgen bald.</strong>{" "}
            Diese Galerie zeigt Platzhalter bis die Fotos vom Café eingereicht werden.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div
          className="columns-2 md:columns-3 lg:columns-4 gap-4"
          style={{ columnGap: "1rem" }}
        >
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="break-inside-avoid mb-4 block"
              >
                <button
                  onClick={() => openLightbox(i)}
                  className="w-full group relative rounded-xl overflow-hidden block focus:outline-none focus-visible:ring-2 focus-visible:ring-violet"
                  aria-label={`Foto ansehen: ${item.label}`}
                  style={{
                    height: item.tall ? "280px" : "180px",
                    background: item.gradient,
                  }}
                >
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-plum/0 group-hover:bg-plum/30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center gap-2">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ background: "rgba(255,255,255,0.9)" }}
                        aria-hidden="true"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A1A6B" strokeWidth="2.5">
                          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6M8 11h6"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Label */}
                  <div className="absolute bottom-0 left-0 right-0 p-3"
                    style={{ background: "linear-gradient(0deg, rgba(74,26,107,0.7) 0%, transparent 100%)" }}>
                    <p className="text-white text-xs font-semibold">{item.label}</p>
                  </div>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: "rgba(74,26,107,0.92)", backdropFilter: "blur(8px)" }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`Foto: ${currentItem.label}`}
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-2xl w-full rounded-3xl overflow-hidden"
              style={{ background: currentItem.gradient, height: "60vh" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute bottom-0 left-0 right-0 p-6"
                style={{ background: "linear-gradient(0deg, rgba(74,26,107,0.8) 0%, transparent 100%)" }}>
                <p className="text-white font-playfair text-xl">{currentItem.label}</p>
                <p className="text-white/60 text-sm mt-1">{lightboxIndex + 1} / {filtered.length}</p>
              </div>
            </motion.div>

            {/* Controls */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: "rgba(255,255,255,0.15)" }}
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: "rgba(255,255,255,0.15)" }}
              aria-label="Nächstes Bild"
            >
              <ChevronRight size={24} className="text-white" />
            </button>
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: "rgba(255,255,255,0.15)" }}
              aria-label="Schließen"
            >
              <X size={18} className="text-white" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
