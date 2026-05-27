import type { Metadata } from "next";
import { Playfair_Display, Lato, Caveat } from "next/font/google";
import "./globals.css";
import { schemaOrg } from "@/lib/schema";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const lato = Lato({
  variable: "--font-lato-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat-hw",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eiscafé Teatro Baesweiler · Echtes italienisches Eis · 4,5★",
  description:
    "Hausgemachtes italienisches Eis im Herzen von Baesweiler. Spaghetti-Eis, Eisbecher, Crêpes & mehr. Reyplatz 2, 52499 Baesweiler. ☎ +49 2401 8012820",
  keywords: [
    "Eiscafé Baesweiler",
    "Italienisches Eis Baesweiler",
    "Eisdiele Baesweiler",
    "Spaghetti-Eis Baesweiler",
    "Eiscafé Reyplatz",
    "Gelato Baesweiler",
    "Eiscafé Aachen Umgebung",
    "Teatro Eiscafé",
  ],
  authors: [{ name: "Eiscafé Teatro" }],
  creator: "Eiscafé Teatro",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Eiscafé Teatro Baesweiler · Echtes italienisches Eis",
    description:
      "Hausgemachtes italienisches Eis im Herzen von Baesweiler. Spaghetti-Eis, Eisbecher, Crêpes & mehr.",
    type: "website",
    locale: "de_DE",
    siteName: "Eiscafé Teatro",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${playfairDisplay.variable} ${lato.variable} ${caveat.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#7B3FA0" />
      </head>
      <body className="has-mobile-bar">
        <a href="#main" className="skip-link">
          Zum Inhalt springen
        </a>
        {children}
      </body>
    </html>
  );
}
