"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info } from "lucide-react";

type Category = "eis" | "suss" | "getraenke";

const tabs: { id: Category; label: string; icon: string }[] = [
  { id: "eis",       label: "Eis & Desserts", icon: "🍦" },
  { id: "suss",      label: "Süßspeisen",     icon: "🥞" },
  { id: "getraenke", label: "Getränke",        icon: "☕" },
];

interface MenuItem {
  name: string;
  desc: string;
  price: string;
  badge?: string;
  gradient: string;
  featured?: boolean;
}

const menu: Record<Category, MenuItem[]> = {
  eis: [
    {
      name: "Spaghetti-Eis",
      desc: "Unser Klassiker. Vanilleeis durch die Kartoffelpresse gedrückt, Erdbeersauce, Sahne — wie Spaghetti Bolognese aus Eis.",
      price: "ab 2,90 €",
      badge: "⭐ Klassiker",
      gradient: "linear-gradient(135deg, #E8D5F0 0%, #C4A8D8 100%)",
      featured: true,
    },
    {
      name: 'Eisbecher "Teatro"',
      desc: "Drei Kugeln deiner Wahl, frische Früchte der Saison, Schlagsahne, Waffelröllchen.",
      price: "ab 4,90 €",
      badge: "Hausspezialität",
      gradient: "linear-gradient(135deg, #F5E6C8 0%, #EDD8A0 100%)",
    },
    {
      name: "Parfait",
      desc: "Sahniges Halbgefrorenes in verschiedenen Sorten, verfeinert mit Sauce und Dekoration.",
      price: "ab 3,80 €",
      gradient: "linear-gradient(135deg, #E8D5F0 0%, #7B3FA0 60%, #4A1A6B 100%)",
    },
    {
      name: "Tiramisu",
      desc: "Nach Hausrezept — täglich frisch mit Mascarpone, Espresso und einem Hauch Amaretto.",
      price: "3,50 €",
      gradient: "linear-gradient(135deg, #F5E6C8 0%, #C4A8D8 100%)",
    },
    {
      name: "Hausgemachtes Eis",
      desc: "Klassische & exotische Sorten täglich frisch: Vanille, Schokolade, Erdbeer, Pistachio, Zitrone und viele mehr.",
      price: "1 Kugel 1,30 €",
      gradient: "linear-gradient(135deg, #C4A8D8 0%, #E8D5F0 100%)",
    },
    {
      name: "Affogato al Caffè",
      desc: "Eine Kugel Vanilleeis, übergossen mit einem doppelten Espresso — die italienische Art.",
      price: "3,20 €",
      badge: "🇮🇹 Italiano",
      gradient: "linear-gradient(135deg, #4A1A6B 0%, #7B3FA0 100%)",
    },
  ],
  suss: [
    {
      name: "Crêpe Classique",
      desc: "Hauchdünner Pfannkuchen mit Zitrone & Zucker — la ricetta originale.",
      price: "ab 2,80 €",
      gradient: "linear-gradient(135deg, #F5E6C8 0%, #EDD8A0 80%)",
    },
    {
      name: "Crêpe mit Eis",
      desc: "Warmer Crêpe, gefüllt mit zwei Kugeln Eis deiner Wahl und Schlagsahne.",
      price: "ab 4,20 €",
      badge: "Beliebt",
      gradient: "linear-gradient(135deg, #E8D5F0 0%, #F5E6C8 100%)",
    },
    {
      name: "Crêpe Cioccolato",
      desc: "Mit warmer Schokoladensauce, Nougat und Haselnusssplitter.",
      price: "ab 3,80 €",
      gradient: "linear-gradient(135deg, #C4A8D8 0%, #7B3FA0 100%)",
    },
    {
      name: "Waffel Klassisch",
      desc: "Knusprige Waffel, warm serviert, mit Puderzucker.",
      price: "2,50 €",
      gradient: "linear-gradient(135deg, #F5E6C8 0%, #C4A8D8 100%)",
    },
    {
      name: "Waffel Premium",
      desc: "Waffel mit zwei Kugeln Eis, Sahne, Sauce und Garnitur.",
      price: "ab 4,50 €",
      gradient: "linear-gradient(135deg, #EDD8A0 0%, #E8D5F0 100%)",
    },
    {
      name: "Pfannkuchen",
      desc: "Fluffige Pfannkuchen mit Marmelade, Sahne oder Honig.",
      price: "ab 2,90 €",
      gradient: "linear-gradient(135deg, #E8D5F0 0%, #C4A8D8 100%)",
    },
  ],
  getraenke: [
    {
      name: "Espresso",
      desc: "Kräftiger italienischer Espresso.",
      price: "1,80 €",
      gradient: "linear-gradient(135deg, #4A1A6B 0%, #2D2D2D 100%)",
    },
    {
      name: "Cappuccino",
      desc: "Espresso mit aufgeschäumter Milch.",
      price: "2,60 €",
      gradient: "linear-gradient(135deg, #7B3FA0 0%, #C4A8D8 100%)",
    },
    {
      name: "Latte Macchiato",
      desc: "Heißer Milch-Espresso-Genuss in drei Schichten.",
      price: "3,00 €",
      badge: "Favorit",
      gradient: "linear-gradient(135deg, #C4A8D8 0%, #F5E6C8 100%)",
    },
    {
      name: "Heiße Schokolade",
      desc: "Cremige Trinkschokolade, wahlweise mit Sahne.",
      price: "2,80 €",
      gradient: "linear-gradient(135deg, #4A1A6B 0%, #7B3FA0 100%)",
    },
    {
      name: "Diverse Kaltgetränke",
      desc: "Limonaden, Säfte, Wasser — saisonal und erfrischend.",
      price: "ab 1,50 €",
      gradient: "linear-gradient(135deg, #E8D5F0 0%, #C4A8D8 100%)",
    },
    {
      name: "Eiskaffee",
      desc: "Espresso, Vanilleeis, Schlagsahne — der Sommer im Glas.",
      price: "3,50 €",
      badge: "🌞 Sommer",
      gradient: "linear-gradient(135deg, #7B3FA0 0%, #F5E6C8 100%)",
    },
  ],
};

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const isLight = item.gradient.includes("#F5E6C8") || item.gradient.includes("#E8D5F0") || item.gradient.includes("#EDD8A0");
  const textColor = isLight ? "#2D2D2D" : "white";
  const subtextColor = isLight ? "#5A5A6B" : "rgba(255,255,255,0.75)";
  const priceColor = isLight ? "#4A1A6B" : "white";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className={`relative rounded-2xl overflow-hidden group transition-all duration-300 cursor-default ${
        item.featured ? "md:col-span-2" : ""
      }`}
      style={{
        background: item.gradient,
        boxShadow: "0 4px 20px rgba(74,26,107,0.1)",
      }}
      whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(74,26,107,0.2)" }}
    >
      <div className={`p-6 ${item.featured ? "md:p-8" : ""}`}>
        {item.badge && (
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
            style={{
              background: isLight ? "rgba(74,26,107,0.12)" : "rgba(255,255,255,0.2)",
              color: isLight ? "#4A1A6B" : "white",
            }}
          >
            {item.badge}
          </span>
        )}
        <h3
          className="font-playfair font-bold mb-2 leading-tight"
          style={{
            fontSize: item.featured ? "1.5rem" : "1.125rem",
            color: textColor,
          }}
        >
          {item.name}
        </h3>
        <p
          className="text-sm leading-relaxed mb-4"
          style={{ color: subtextColor }}
        >
          {item.desc}
        </p>
        <p
          className="font-bold text-lg"
          style={{ color: priceColor }}
        >
          {item.price}
        </p>
      </div>
    </motion.article>
  );
}

export function Menu() {
  const [active, setActive] = useState<Category>("eis");

  return (
    <section
      id="speisekarte"
      className="section-pad"
      style={{ background: "#FBF8FE" }}
      aria-labelledby="menu-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span
            className="text-xs font-bold tracking-[0.22em] uppercase mb-4 block"
            style={{ color: "#7B3FA0" }}
          >
            La Nostra Carta
          </span>
          <h2
            id="menu-heading"
            className="font-playfair leading-tight mb-4"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#4A1A6B" }}
          >
            Speisekarte
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#5A5A6B" }}>
            Eine kleine Reise durch Italien — hausgemacht, täglich frisch.
          </p>
        </motion.div>

        {/* Sticky Tab Bar */}
        <div
          className="sticky top-16 md:top-20 z-30 flex justify-center mb-10"
          role="tablist"
          aria-label="Speisekarte Kategorien"
        >
          <div
            className="inline-flex gap-1 p-1.5 rounded-2xl shadow-md"
            style={{ background: "white", boxShadow: "0 4px 20px rgba(74,26,107,0.12)" }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={active === tab.id}
                aria-controls={`panel-${tab.id}`}
                onClick={() => setActive(tab.id)}
                className="relative flex items-center gap-2 px-4 md:px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
                style={{
                  color: active === tab.id ? "white" : "#5A5A6B",
                }}
              >
                {active === tab.id && (
                  <motion.div
                    layoutId="tab-bg"
                    className="absolute inset-0 rounded-xl"
                    style={{ background: "linear-gradient(135deg, #7B3FA0 0%, #4A1A6B 100%)" }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
                <span className="relative z-10 text-base" aria-hidden="true">{tab.icon}</span>
                <span className="relative z-10 hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            id={`panel-${active}`}
            role="tabpanel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {menu[active].map((item, i) => (
              <MenuCard key={item.name} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Notice cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <div
            className="flex items-start gap-3 p-5 rounded-2xl"
            style={{ background: "#F5E6C8" }}
          >
            <Info size={18} className="mt-0.5 shrink-0" style={{ color: "#4A1A6B" }} aria-hidden="true" />
            <p className="text-sm leading-relaxed" style={{ color: "#4A1A6B" }}>
              <strong>Vollständige Speisekarte</strong> gerne vor Ort.
              Alle Sorten täglich frisch hausgemacht — Angebot kann variieren.
            </p>
          </div>
          <div
            className="flex items-start gap-3 p-5 rounded-2xl"
            style={{ background: "#E8D5F0" }}
          >
            <span className="text-lg shrink-0 mt-0.5" aria-hidden="true">💶</span>
            <p className="text-sm leading-relaxed" style={{ color: "#4A1A6B" }}>
              <strong>Wir akzeptieren ausschließlich Bargeld.</strong>{" "}
              Geldautomaten sind in Laufnähe zu finden.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
