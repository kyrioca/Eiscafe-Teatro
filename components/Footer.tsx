import { IceCream2 } from "lucide-react";

const navLinks = [
  { label: "Über uns",    href: "#about" },
  { label: "Speisekarte", href: "#speisekarte" },
  { label: "Galerie",     href: "#galerie" },
  { label: "Kontakt",     href: "#kontakt" },
];

const legalLinks = [
  { label: "Impressum",    href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #4A1A6B 0%, #2D2D2D 100%)" }}
      aria-label="Footer"
    >
      {/* Decorative top border */}
      <div className="italian-stripe opacity-50" aria-hidden="true" />

      {/* Decorative circle */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 -translate-y-1/2 translate-x-1/4"
        style={{ background: "radial-gradient(circle, #C4A8D8, transparent)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "rgba(196,168,216,0.2)" }}
              >
                <IceCream2 size={18} className="text-lavender" aria-hidden="true" />
              </div>
              <span className="font-playfair text-xl font-bold text-white">
                Eiscafé <em className="not-italic" style={{ color: "#C4A8D8", fontStyle: "italic" }}>Teatro</em>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(196,168,216,0.7)" }}>
              Hausgemachtes italienisches Eis im Herzen von Baesweiler.
              Täglich frisch mit Herz und Tradition.
            </p>
            <p
              className="font-caveat text-lg mt-4"
              style={{ color: "#C4A8D8" }}
            >
              "Il vero gelato si fa con amore."
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: "#C4A8D8" }}>
              Navigation
            </h3>
            <ul className="space-y-2.5" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-lavender"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: "#C4A8D8" }}>
              Kontakt
            </h3>
            <address className="not-italic space-y-2.5">
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                Reyplatz 2<br />
                52499 Baesweiler
              </p>
              <a
                href="tel:+4924018012820"
                className="block text-sm transition-colors hover:text-lavender"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                +49 2401 8012820
              </a>
              <div className="pt-2 space-y-1 text-xs" style={{ color: "rgba(196,168,216,0.6)" }}>
                <p>Mo: 09:00 – 21:00</p>
                <p>Di–So: 10:00 – 19:30</p>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: "1px solid rgba(196,168,216,0.15)", color: "rgba(196,168,216,0.5)" }}
        >
          <p>© {new Date().getFullYear()} Eiscafé Teatro Baesweiler. Alle Rechte vorbehalten.</p>
          <div className="flex gap-5">
            {legalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-lavender"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
