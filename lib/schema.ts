export const schemaOrg = {
  "@context": "https://schema.org",
  "@type": ["FoodEstablishment", "IceCreamShop"],
  name: "Eiscafé Teatro",
  description:
    "Hausgemachtes italienisches Eis nach traditionellen Rezepten im Herzen von Baesweiler. Spaghetti-Eis, Eisbecher, Crêpes, Waffeln und mehr.",
  url: "https://eiscafe-teatro-baesweiler.de",
  telephone: "+492401 8012820",
  priceRange: "€",
  paymentAccepted: "Cash",
  currenciesAccepted: "EUR",
  servesCuisine: "Italian",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Reyplatz 2",
    addressLocality: "Baesweiler",
    postalCode: "52499",
    addressRegion: "Nordrhein-Westfalen",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.9064,
    longitude: 6.1919,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday"],
      opens: "09:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
      ],
      opens: "10:00",
      closes: "19:30",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "674",
    bestRating: "5",
    worstRating: "1",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Barrierefrei", value: true },
    { "@type": "LocationFeatureSpecification", name: "Kostenlose Parkplätze", value: true },
  ],
  hasMenu: "https://eiscafe-teatro-baesweiler.de/#speisekarte",
};
