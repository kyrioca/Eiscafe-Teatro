"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function useCounter(target: number, started: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, started, duration]);
  return count;
}

function StatBand() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const sorten  = useCounter(30,  started, 1200);
  const reviews = useCounter(674, started, 2000);

  const stats = [
    { value: sorten, suffix: "+", label: "Eissorten", sublabel: "täglich hausgemacht" },
    { value: 4.5,    suffix: "★",  label: "Google-Bewertung", sublabel: "aus 674 Bewertungen", isFixed: true },
    { value: reviews,suffix: "",  label: "zufriedene Gäste", sublabel: "die uns weiterempfehlen" },
  ];

  return (
    <div
      ref={ref}
      className="grid grid-cols-3 divide-x"
      style={{ divideColor: "rgba(196,168,216,0.4)" }}
    >
      {stats.map((s, i) => (
        <div key={i} className="text-center py-8 px-4">
          <p
            className="font-playfair font-bold leading-none mb-1"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#4A1A6B",
            }}
          >
            {s.isFixed ? s.value : s.value}
            <span style={{ color: "#7B3FA0" }}>{s.suffix}</span>
          </p>
          <p className="font-semibold text-sm" style={{ color: "#2D2D2D" }}>
            {s.label}
          </p>
          <p className="text-xs mt-0.5" style={{ color: "#5A5A6B" }}>
            {s.sublabel}
          </p>
        </div>
      ))}
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export function About() {
  return (
    <section
      id="about"
      className="section-pad"
      style={{ background: "linear-gradient(180deg, #FBF8FE 0%, #F0E8F5 100%)" }}
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 lg:mb-24">

          {/* Left — Decorative visual panel */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="relative order-2 lg:order-1"
            aria-hidden="true"
          >
            {/* Photo placeholder — replace with real photo of the café/owner */}
            <div
              className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-[0_20px_60px_rgba(74,26,107,0.2)]"
              style={{
                background: "linear-gradient(135deg, #E8D5F0 0%, #C4A8D8 40%, #7B3FA0 100%)",
              }}
            >
              {/* Decorative gelato art inside placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 260 320" className="w-2/3 opacity-25" aria-hidden="true">
                  <path d="M80 270 L130 310 L180 270 Z" fill="#FBF8FE" />
                  <ellipse cx="130" cy="250" rx="58" ry="46" fill="#F5E6C8" />
                  <ellipse cx="130" cy="200" rx="52" ry="42" fill="#E8D5F0" />
                  <ellipse cx="130" cy="155" rx="46" ry="38" fill="#FBF8FE" />
                  <circle cx="130" cy="115" r="8" fill="#CE2B37" />
                </svg>
              </div>

              {/* Overlay text */}
              <div className="absolute bottom-0 left-0 right-0 p-6"
                style={{ background: "linear-gradient(0deg, rgba(74,26,107,0.85) 0%, transparent 100%)" }}>
                <p className="font-caveat text-white text-xl opacity-90">
                  "Ogni giorno, fresco."
                </p>
                <p className="text-white/60 text-xs mt-1">Jeden Tag frisch gemacht.</p>
              </div>

              {/* Corner badge */}
              <div
                className="absolute top-5 right-5 px-3 py-1.5 rounded-full text-xs font-bold"
                style={{ background: "#F5E6C8", color: "#4A1A6B" }}
              >
                📸 Foto folgt
              </div>
            </div>

            {/* Floating quote card */}
            <div
              className="absolute -bottom-8 -right-4 lg:-right-8 max-w-[220px] p-5 rounded-2xl shadow-[0_8px_32px_rgba(74,26,107,0.18)]"
              style={{ background: "white" }}
            >
              <p className="font-caveat text-lg leading-snug mb-2" style={{ color: "#4A1A6B" }}>
                "Il vero gelato si fa con amore."
              </p>
              <p className="text-xs" style={{ color: "#5A5A6B" }}>
                Echtes Eis macht man mit Liebe.
              </p>
            </div>
          </motion.div>

          {/* Right — Story text */}
          <div className="order-1 lg:order-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8" style={{ background: "#7B3FA0" }} aria-hidden="true" />
                <span
                  className="text-xs font-bold tracking-[0.22em] uppercase"
                  style={{ color: "#7B3FA0" }}
                >
                  Unsere Geschichte
                </span>
              </div>

              <h2
                id="about-heading"
                className="font-playfair leading-tight mb-6"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "#4A1A6B",
                }}
              >
                Echtes italienisches Eis.{" "}
                <em className="not-italic" style={{ color: "#7B3FA0", fontStyle: "italic" }}>
                  Mit Herz.
                </em>
              </h2>

              <div className="space-y-4 text-base leading-relaxed" style={{ color: "#5A5A6B" }}>
                <p>
                  Im Herzen von Baesweiler, direkt am Reyplatz, dreht sich bei uns alles
                  um eines: <strong style={{ color: "#2D2D2D" }}>echtes, handgemachtes Eis</strong> nach
                  traditionellen italienischen Rezepten — wie es früher war, wie es sein soll.
                </p>
                <p>
                  Jede Sorte wird täglich frisch zubereitet. Kein Fertigmix, keine Kompromisse.
                  Nur die besten Zutaten, Erfahrung und die Leidenschaft für{" "}
                  <em>il vero gelato</em> — das echte Eis.
                </p>
                <p>
                  Ob klassische Vanille, exotische Neuschöpfungen oder unser legendäres
                  <strong style={{ color: "#4A1A6B" }}> Spaghetti-Eis</strong> — bei uns
                  findest du Sorten für jeden Geschmack, in einer gemütlichen Atmosphäre,
                  die zum Verweilen einlädt.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  "🍦 Täglich frisch",
                  "🇮🇹 Traditionelle Rezepte",
                  "♿ Barrierefrei",
                  "🅿️ Freie Parkplätze",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full text-sm font-semibold"
                    style={{ background: "#E8D5F0", color: "#4A1A6B" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats band */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(74,26,107,0.12)]"
          style={{ background: "linear-gradient(135deg, #4A1A6B 0%, #7B3FA0 100%)" }}
        >
          <div className="grid grid-cols-3 divide-x divide-white/10 text-white">
            {[
              { value: "30+",  label: "Eissorten",         sub: "täglich hausgemacht" },
              { value: "4,5★", label: "Google-Bewertung",  sub: "674 Bewertungen" },
              { value: "674",  label: "glückliche Gäste",  sub: "die uns weiterempfehlen" },
            ].map((s, i) => (
              <div key={i} className="text-center py-8 px-4">
                <p
                  className="font-playfair font-bold leading-none mb-1"
                  style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
                >
                  {s.value}
                </p>
                <p className="font-semibold text-sm opacity-90">{s.label}</p>
                <p className="text-xs opacity-60 mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
