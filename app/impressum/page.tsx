import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Impressum — Eiscafé Teatro Baesweiler",
  description: "Impressum und Anbieterkennzeichnung gemäß § 5 TMG",
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(160deg, #FBF8FE 0%, #F0E8F5 100%)" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold mb-10 transition-colors hover:text-plum"
          style={{ color: "#7B3FA0" }}
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Zurück zur Startseite
        </Link>

        <h1
          className="font-playfair mb-2"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#4A1A6B" }}
        >
          Impressum
        </h1>
        <p className="text-sm mb-10" style={{ color: "#5A5A6B" }}>
          Angaben gemäß § 5 TMG
        </p>

        <div
          className="prose max-w-none space-y-8"
          style={{ color: "#2D2D2D" }}
        >
          <section>
            <h2 className="font-playfair text-xl font-bold mb-3" style={{ color: "#4A1A6B" }}>
              Angaben gemäß § 5 TMG
            </h2>
            <address className="not-italic text-sm leading-relaxed space-y-1">
              <p><strong>Eiscafé Teatro</strong></p>
              <p>Reyplatz 2</p>
              <p>52499 Baesweiler</p>
              <p>Deutschland</p>
            </address>
          </section>

          <section>
            <h2 className="font-playfair text-xl font-bold mb-3" style={{ color: "#4A1A6B" }}>
              Kontakt
            </h2>
            <div className="text-sm space-y-1">
              <p>Telefon: <a href="tel:+4924018012820" className="transition-colors hover:text-violet" style={{ color: "#7B3FA0" }}>+49 2401 8012820</a></p>
            </div>
          </section>

          <section>
            <h2 className="font-playfair text-xl font-bold mb-3" style={{ color: "#4A1A6B" }}>
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <div className="text-sm space-y-1">
              <p>Inhaber/in Eiscafé Teatro</p>
              <p>Reyplatz 2, 52499 Baesweiler</p>
            </div>
          </section>

          <section>
            <h2 className="font-playfair text-xl font-bold mb-3" style={{ color: "#4A1A6B" }}>
              Haftung für Inhalte
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#5A5A6B" }}>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
              forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung
              der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl font-bold mb-3" style={{ color: "#4A1A6B" }}>
              Haftung für Links
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#5A5A6B" }}>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl font-bold mb-3" style={{ color: "#4A1A6B" }}>
              Urheberrecht
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#5A5A6B" }}>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
