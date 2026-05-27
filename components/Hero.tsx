"use client";

import { motion } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";

const headline = ["Echtes Eis.", "Echte Liebe."];

const gelato = [
  { color: "#7B3FA0", size: 200, label: "Mirtillo" },
  { color: "#C4A8D8", size: 170, label: "Vaniglia" },
  { color: "#F5E6C8", size: 150, label: "Stracciatella" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden texture-grain teatro-curtain"
      style={{
        background:
          "radial-gradient(ellipse 80% 80% at 80% 30%, rgba(123,63,160,0.12) 0%, transparent 60%)," +
          "radial-gradient(ellipse 60% 60% at 20% 80%, rgba(196,168,216,0.18) 0%, transparent 55%)," +
          "radial-gradient(ellipse 100% 50% at 50% 0%, rgba(245,230,200,0.15) 0%, transparent 50%)," +
          "linear-gradient(160deg, #FBF8FE 0%, #F3EAF8 50%, #EEE2F5 100%)",
      }}
      aria-label="Hero — Willkommen im Eiscafé Teatro"
    >
      {/* Italian flag stripe */}
      <div className="absolute bottom-0 left-0 right-0 italian-stripe opacity-60" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

          {/* ── Left: Text ────────────────────────────────── */}
          <div className="flex flex-col justify-center">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <div
                className="h-px w-10"
                style={{ background: "#7B3FA0" }}
                aria-hidden="true"
              />
              <span
                className="text-xs font-bold tracking-[0.22em] uppercase"
                style={{ color: "#7B3FA0" }}
              >
                Baesweiler · Reyplatz 2
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-playfair leading-none mb-6">
              {headline.map((line, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.25 + i * 0.15,
                    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                  }}
                  className="block"
                  style={{
                    fontSize: "clamp(3.5rem, 8.5vw, 8rem)",
                    color: i === 0 ? "#4A1A6B" : "#7B3FA0",
                    fontStyle: i === 1 ? "italic" : "normal",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-base md:text-lg leading-relaxed mb-8 max-w-md"
              style={{ color: "#5A5A6B" }}
            >
              Hausgemacht nach traditionellen italienischen Rezepten.
              <br />
              Täglich frisch — mit Herz und Leidenschaft.
            </motion.p>

            {/* Trust bar */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4].map((s) => (
                  <Star
                    key={s}
                    size={16}
                    className="fill-current"
                    style={{ color: "#EDD8A0" }}
                    aria-hidden="true"
                  />
                ))}
                <Star
                  size={16}
                  style={{ color: "#EDD8A0" }}
                  className="fill-current opacity-50"
                  aria-hidden="true"
                />
                <span className="ml-1 font-bold text-sm" style={{ color: "#4A1A6B" }}>
                  4,5
                </span>
              </div>
              <span className="text-sm" style={{ color: "#5A5A6B" }}>
                674 Google-Bewertungen
              </span>
              <span
                className="hidden sm:inline px-2 py-0.5 rounded-full text-xs font-semibold"
                style={{ background: "#E8D5F0", color: "#4A1A6B" }}
              >
                ♿ Barrierefrei
              </span>
              <span
                className="hidden sm:inline px-2 py-0.5 rounded-full text-xs font-semibold"
                style={{ background: "#E8D5F0", color: "#4A1A6B" }}
              >
                🅿️ Kostenlos
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#speisekarte"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl text-base font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(123,63,160,0.4)] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #7B3FA0 0%, #4A1A6B 100%)",
                  boxShadow: "0 4px 20px rgba(123,63,160,0.3)",
                }}
              >
                Speisekarte ansehen
              </a>
              <a
                href="tel:+4924018012820"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl text-base font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] border-2"
                style={{ color: "#4A1A6B", borderColor: "#C4A8D8", background: "rgba(255,255,255,0.6)" }}
              >
                +49 2401 8012820
              </a>
            </motion.div>
          </div>

          {/* ── Right: Gelato Visual ──────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="hidden lg:flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="relative w-[420px] h-[480px] float-gelato">

              {/* Background glow */}
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-30"
                style={{ background: "radial-gradient(circle, #7B3FA0 0%, #C4A8D8 60%, transparent 100%)" }}
              />

              {/* Gelato scoop SVG art */}
              <svg
                viewBox="0 0 400 480"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10 w-full h-full drop-shadow-[0_16px_40px_rgba(74,26,107,0.25)]"
              >
                {/* Cone */}
                <path
                  d="M160 320 L200 470 L240 320 Z"
                  fill="#F5E6C8"
                  stroke="#EDD8A0"
                  strokeWidth="2"
                />
                {/* Cone grid lines */}
                <line x1="200" y1="470" x2="165" y2="345" stroke="#EDD8A0" strokeWidth="1" opacity="0.6" />
                <line x1="200" y1="470" x2="185" y2="333" stroke="#EDD8A0" strokeWidth="1" opacity="0.6" />
                <line x1="200" y1="470" x2="215" y2="333" stroke="#EDD8A0" strokeWidth="1" opacity="0.6" />
                <line x1="200" y1="470" x2="234" y2="345" stroke="#EDD8A0" strokeWidth="1" opacity="0.6" />
                <path d="M165 355 Q200 360 235 355" stroke="#EDD8A0" strokeWidth="1" opacity="0.6" fill="none" />
                <path d="M168 375 Q200 381 232 375" stroke="#EDD8A0" strokeWidth="1" opacity="0.6" fill="none" />
                <path d="M172 400 Q200 407 228 400" stroke="#EDD8A0" strokeWidth="1" opacity="0.6" fill="none" />
                <path d="M178 425 Q200 432 222 425" stroke="#EDD8A0" strokeWidth="1" opacity="0.6" fill="none" />
                <path d="M186 448 Q200 454 214 448" stroke="#EDD8A0" strokeWidth="1" opacity="0.6" fill="none" />

                {/* Scoop 1 (bottom) — Stracciatella / beige */}
                <ellipse cx="200" cy="300" rx="78" ry="62" fill="#F5E6C8" />
                <ellipse cx="200" cy="295" rx="76" ry="60" fill="#FBF8FE" stroke="#EDD8A0" strokeWidth="1.5" />
                {[30, 80, 140, 200, 260, 320].map((angle, i) => (
                  <circle
                    key={i}
                    cx={200 + 40 * Math.cos((angle * Math.PI) / 180)}
                    cy={295 + 32 * Math.sin((angle * Math.PI) / 180)}
                    r="5"
                    fill="#C4A8D8"
                    opacity="0.6"
                  />
                ))}

                {/* Scoop 2 (middle) — Lavender */}
                <ellipse cx="200" cy="230" rx="72" ry="58" fill="#C4A8D8" />
                <ellipse cx="200" cy="225" rx="70" ry="56" fill="#D4BAE8" stroke="#B090C8" strokeWidth="1.5" />
                <ellipse cx="175" cy="215" rx="12" ry="8" fill="white" opacity="0.35" transform="rotate(-20 175 215)" />

                {/* Scoop 3 (top) — Deep violet */}
                <ellipse cx="200" cy="162" rx="64" ry="52" fill="#7B3FA0" />
                <ellipse cx="200" cy="158" rx="62" ry="50" fill="#8F4FB8" stroke="#6A318C" strokeWidth="1.5" />
                <ellipse cx="178" cy="148" rx="11" ry="7" fill="white" opacity="0.25" transform="rotate(-20 178 148)" />

                {/* Cream topping */}
                <path
                  d="M168 135 Q180 110 200 115 Q220 110 232 135 Q220 120 200 122 Q180 120 168 135Z"
                  fill="white"
                  opacity="0.9"
                />
                <ellipse cx="200" cy="112" rx="18" ry="12" fill="white" opacity="0.95" />

                {/* Cherry */}
                <circle cx="200" cy="98" r="9" fill="#CE2B37" />
                <path d="M200 90 Q208 80 215 75" stroke="#4A1A6B" strokeWidth="2" fill="none" strokeLinecap="round" />
                <ellipse cx="207" cy="94" rx="3" ry="2" fill="white" opacity="0.5" transform="rotate(-20 207 94)" />

                {/* Decorative dots around */}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <circle
                    key={`dot-${i}`}
                    cx={200 + 170 * Math.cos((angle * Math.PI) / 180)}
                    cy={230 + 170 * Math.sin((angle * Math.PI) / 180)}
                    r={i % 2 === 0 ? 4 : 2.5}
                    fill="#C4A8D8"
                    opacity="0.4"
                  />
                ))}

                {/* Label */}
                <text
                  x="200"
                  y="60"
                  textAnchor="middle"
                  fontFamily="'Playfair Display', Georgia, serif"
                  fontSize="13"
                  fill="#4A1A6B"
                  opacity="0.5"
                  fontStyle="italic"
                >
                  Il vero gelato
                </text>
              </svg>

              {/* Floating flavor tags */}
              <div
                className="absolute top-16 right-4 px-3 py-1.5 rounded-full text-xs font-bold shadow-md"
                style={{ background: "#4A1A6B", color: "white" }}
              >
                Spaghetti-Eis ★
              </div>
              <div
                className="absolute bottom-28 left-0 px-3 py-1.5 rounded-full text-xs font-bold shadow-md"
                style={{ background: "#F5E6C8", color: "#4A1A6B" }}
              >
                30+ Sorten
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-bounce"
        aria-hidden="true"
      >
        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C4A8D8" }}>
          Scroll
        </span>
        <ChevronDown size={20} style={{ color: "#7B3FA0" }} />
      </motion.div>
    </section>
  );
}
