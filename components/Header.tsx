"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, IceCream2 } from "lucide-react";
import { OpenNow } from "@/components/ui/OpenNow";

const navLinks = [
  { label: "Über uns",    href: "#about" },
  { label: "Speisekarte", href: "#speisekarte" },
  { label: "Galerie",     href: "#galerie" },
  { label: "Kontakt",     href: "#kontakt" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  function handleNavClick(href: string) {
    setMenuOpen(false);
    // Smooth scroll handled by CSS scroll-behavior
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(74,26,107,0.1)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-2.5 group"
              aria-label="Eiscafé Teatro — zur Startseite"
            >
              <div className="w-8 h-8 rounded-full bg-violet flex items-center justify-center shadow-[0_4px_12px_rgba(123,63,160,0.3)] group-hover:shadow-[0_6px_20px_rgba(123,63,160,0.45)] transition-shadow">
                <IceCream2 size={16} className="text-white" aria-hidden="true" />
              </div>
              <div className="leading-none">
                <span
                  className="block text-lg md:text-xl font-playfair font-bold tracking-tight"
                  style={{ color: "#4A1A6B" }}
                >
                  Eiscafé{" "}
                  <em className="not-italic" style={{ color: "#7B3FA0" }}>
                    Teatro
                  </em>
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav
              className="hidden md:flex items-center gap-8"
              aria-label="Hauptnavigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="animated-link text-sm font-semibold tracking-wide transition-colors duration-200"
                  style={{ color: scrolled ? "#4A1A6B" : "#2D2D2D" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <OpenNow variant="header" />
              <a
                href="tel:+4924018012820"
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #7B3FA0 0%, #4A1A6B 100%)",
                  boxShadow: "0 4px 16px rgba(123,63,160,0.35)",
                }}
                aria-label="Jetzt anrufen +49 2401 8012820"
              >
                Jetzt anrufen
              </a>

              {/* Mobile hamburger */}
              <button
                className="md:hidden p-2 rounded-lg transition-colors"
                style={{ color: "#4A1A6B" }}
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="fixed inset-0 z-40 flex flex-col pt-20"
            style={{ background: "linear-gradient(160deg, #FBF8FE 0%, #E8D5F0 100%)" }}
          >
            <nav
              className="flex flex-col gap-2 px-6 pt-8"
              aria-label="Mobile Navigation"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-3xl font-playfair font-bold py-3 border-b transition-colors hover:text-violet"
                  style={{ color: "#4A1A6B", borderColor: "#C4A8D8" }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="px-6 mt-10"
            >
              <a
                href="tel:+4924018012820"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl text-lg font-bold text-white"
                style={{
                  background: "linear-gradient(135deg, #7B3FA0 0%, #4A1A6B 100%)",
                  boxShadow: "0 8px 32px rgba(123,63,160,0.35)",
                }}
              >
                +49 2401 8012820
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
