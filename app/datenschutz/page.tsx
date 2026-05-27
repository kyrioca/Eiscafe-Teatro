import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — Eiscafé Teatro Baesweiler",
  description: "Datenschutzerklärung gemäß DSGVO",
  robots: { index: false },
};

export default function DatenschutzPage() {
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
          Datenschutzerklärung
        </h1>
        <p className="text-sm mb-10" style={{ color: "#5A5A6B" }}>
          Gemäß DSGVO (Datenschutz-Grundverordnung) und BDSG
        </p>

        <div className="space-y-8" style={{ color: "#2D2D2D" }}>

          <section>
            <h2 className="font-playfair text-xl font-bold mb-3" style={{ color: "#4A1A6B" }}>
              1. Datenschutz auf einen Blick
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#5A5A6B" }}>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl font-bold mb-3" style={{ color: "#4A1A6B" }}>
              2. Verantwortliche Stelle
            </h2>
            <address className="not-italic text-sm leading-relaxed space-y-1" style={{ color: "#5A5A6B" }}>
              <p><strong style={{ color: "#2D2D2D" }}>Eiscafé Teatro</strong></p>
              <p>Reyplatz 2</p>
              <p>52499 Baesweiler</p>
              <p>Telefon: <a href="tel:+4924018012820" style={{ color: "#7B3FA0" }}>+49 2401 8012820</a></p>
            </address>
          </section>

          <section>
            <h2 className="font-playfair text-xl font-bold mb-3" style={{ color: "#4A1A6B" }}>
              3. Datenerfassung auf dieser Website
            </h2>
            <h3 className="font-semibold text-base mb-2" style={{ color: "#2D2D2D" }}>
              Server-Log-Dateien
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#5A5A6B" }}>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien,
              die Ihr Browser automatisch übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem,
              Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse.
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
            </p>
            <h3 className="font-semibold text-base mb-2" style={{ color: "#2D2D2D" }}>
              Cookies
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#5A5A6B" }}>
              Diese Website verwendet ausschließlich technisch notwendige Cookies. Es werden keine Tracking-Cookies
              oder Analyse-Cookies verwendet.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl font-bold mb-3" style={{ color: "#4A1A6B" }}>
              4. Google Maps
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#5A5A6B" }}>
              Diese Seite nutzt über eine API den Kartendienst Google Maps von Google LLC, 1600 Amphitheatre Parkway,
              Mountain View, CA 94043, USA. Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse
              zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen
              und dort gespeichert. Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#7B3FA0" }}
                className="transition-colors hover:text-plum"
              >
                Datenschutzerklärung von Google
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl font-bold mb-3" style={{ color: "#4A1A6B" }}>
              5. Ihre Rechte
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#5A5A6B" }}>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
              gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem das Recht, die Berichtigung,
              Sperrung oder Löschung dieser Daten zu verlangen.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#5A5A6B" }}>
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im{" "}
              <Link href="/impressum" style={{ color: "#7B3FA0" }} className="transition-colors hover:text-plum">
                Impressum
              </Link>{" "}
              angegebenen Adresse an uns wenden.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl font-bold mb-3" style={{ color: "#4A1A6B" }}>
              6. Beschwerderecht
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#5A5A6B" }}>
              Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein Beschwerderecht bei der zuständigen
              Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist der
              Landesdatenschutzbeauftragte des Bundeslandes, in dem unser Unternehmen seinen Sitz hat.
              Für Nordrhein-Westfalen: Landesbeauftragte für Datenschutz und Informationsfreiheit NRW.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
