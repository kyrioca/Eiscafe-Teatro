"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, CreditCard, Accessibility, ParkingCircle, Star, ExternalLink } from "lucide-react";
import { OPENING_HOURS } from "@/lib/openingHours";
import { OpenNow } from "@/components/ui/OpenNow";

const reviews = [
  {
    name: "Maria K.",
    rating: 5,
    date: "März 2024",
    text: "Das beste Spaghetti-Eis weit und breit! Wir kommen jeden Sommer und es wird jedes Mal besser. Die Portion ist riesig und das Eis schmeckt wirklich hausgemacht.",
    avatar: "M",
    avatarGradient: "linear-gradient(135deg, #7B3FA0, #4A1A6B)",
  },
  {
    name: "Thomas B.",
    rating: 5,
    date: "Juni 2024",
    text: "Toller Service, freundliches Personal und frisches Eis. Die Crêpes sind ein Traum. Das Teatro ist unser Familienliebling am Reyplatz!",
    avatar: "T",
    avatarGradient: "linear-gradient(135deg, #4A1A6B, #C4A8D8)",
  },
  {
    name: "Anna L.",
    rating: 4,
    date: "August 2024",
    text: "Gemütliches Café, gute Lage. Das Tiramisu war wunderbar. Nur Bargeld — aber Geldautomat ist gleich um die Ecke. Sehr empfehlenswert!",
    avatar: "A",
    avatarGradient: "linear-gradient(135deg, #C4A8D8, #7B3FA0)",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} von 5 Sternen`}>
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={14}
          className={s <= rating ? "fill-current" : "opacity-20"}
          style={{ color: "#EDD8A0" }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Contact() {
  const [todayIndex, setTodayIndex] = useState<number>(-1);

  useEffect(() => {
    const day = new Date().getDay(); // 0=Sun … 6=Sat
    // OPENING_HOURS index: Mon=0, Tue=1 … Sun=6
    const map: Record<number, number> = { 0: 6, 1: 0, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5 };
    setTodayIndex(map[day] ?? -1);
  }, []);

  return (
    <section
      id="kontakt"
      className="section-pad"
      style={{ background: "linear-gradient(180deg, #FBF8FE 0%, #F0E8F5 100%)" }}
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <span
            className="text-xs font-bold tracking-[0.22em] uppercase mb-4 block"
            style={{ color: "#7B3FA0" }}
          >
            Besuche uns
          </span>
          <h2
            id="contact-heading"
            className="font-playfair leading-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#4A1A6B" }}
          >
            Komm vorbei.
          </h2>
        </motion.div>

        {/* 2-Column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

          {/* Left: Info Cards */}
          <div className="space-y-4">

            {/* Address */}
            <motion.div
              custom={0} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="card p-6"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "#E8D5F0" }}
                >
                  <MapPin size={18} style={{ color: "#7B3FA0" }} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: "#4A1A6B" }}>Adresse</h3>
                  <address className="not-italic text-sm leading-relaxed" style={{ color: "#5A5A6B" }}>
                    Reyplatz 2<br />
                    52499 Baesweiler
                  </address>
                  <a
                    href="https://maps.google.com/?q=Reyplatz+2,+52499+Baesweiler"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold transition-colors hover:text-plum"
                    style={{ color: "#7B3FA0" }}
                  >
                    <ExternalLink size={12} aria-hidden="true" />
                    Anfahrt planen
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              custom={1} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="card p-6"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "#E8D5F0" }}
                >
                  <Phone size={18} style={{ color: "#7B3FA0" }} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: "#4A1A6B" }}>Telefon</h3>
                  <a
                    href="tel:+4924018012820"
                    className="text-sm font-medium transition-colors hover:text-violet"
                    style={{ color: "#5A5A6B" }}
                  >
                    +49 2401 8012820
                  </a>
                  <div className="mt-2">
                    <a
                      href="tel:+4924018012820"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors hover:text-plum"
                      style={{ color: "#7B3FA0" }}
                    >
                      <Phone size={12} aria-hidden="true" />
                      Jetzt anrufen
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Opening hours */}
            <motion.div
              custom={2} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="card p-6"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "#E8D5F0" }}
                >
                  <Clock size={18} style={{ color: "#7B3FA0" }} aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold" style={{ color: "#4A1A6B" }}>Öffnungszeiten</h3>
                    <OpenNow variant="contact" />
                  </div>
                  <div className="space-y-1.5" role="list" aria-label="Öffnungszeiten">
                    {OPENING_HOURS.map((row, i) => (
                      <div
                        key={row.day}
                        role="listitem"
                        className="flex justify-between text-sm py-1.5 px-2 rounded-lg transition-colors"
                        style={{
                          background: i === todayIndex ? "#E8D5F0" : "transparent",
                          fontWeight: i === todayIndex ? 600 : 400,
                          color: i === todayIndex ? "#4A1A6B" : "#5A5A6B",
                        }}
                        aria-current={i === todayIndex ? "date" : undefined}
                      >
                        <span>{row.day}</span>
                        <span>{row.open} – {row.close}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Amenities */}
            <motion.div
              custom={3} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="card p-6"
            >
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: CreditCard,    label: "Nur Bargeld" },
                  { icon: ParkingCircle, label: "Kostenlose Parkplätze" },
                  { icon: Accessibility, label: "Barrierefrei" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: "#E8D5F0" }}
                    >
                      <Icon size={14} style={{ color: "#7B3FA0" }} aria-hidden="true" />
                    </div>
                    <span className="text-sm font-medium" style={{ color: "#4A1A6B" }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Google Maps */}
          <motion.div
            custom={1} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(74,26,107,0.15)] min-h-[400px] lg:min-h-0"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2516.8!2d6.1919!3d50.9064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0a8b4a3f7b1a5%3A0x1!2sReyplatz+2%2C+52499+Baesweiler!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Eiscafé Teatro — Reyplatz 2, 52499 Baesweiler"
              aria-label="Google Maps: Eiscafé Teatro Baesweiler"
            />
          </motion.div>
        </div>

        {/* Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <h3
                className="font-playfair text-2xl md:text-3xl"
                style={{ color: "#4A1A6B" }}
              >
                Was unsere Gäste sagen
              </h3>
              <p className="text-sm mt-1" style={{ color: "#5A5A6B" }}>
                ⭐ 4,5/5 aus 674 Google-Bewertungen
              </p>
            </div>
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJxxxxxxxxxx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-[1.03]"
              style={{
                background: "linear-gradient(135deg, #7B3FA0, #4A1A6B)",
                color: "white",
                boxShadow: "0 4px 16px rgba(123,63,160,0.3)",
              }}
            >
              <Star size={14} aria-hidden="true" className="fill-current text-beige" />
              Auf Google bewerten
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reviews.map((review, i) => (
              <motion.article
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="card p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                    style={{ background: review.avatarGradient }}
                    aria-hidden="true"
                  >
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "#2D2D2D" }}>
                      {review.name}
                    </p>
                    <p className="text-xs" style={{ color: "#5A5A6B" }}>
                      {review.date}
                    </p>
                  </div>
                </div>
                <StarRating rating={review.rating} />
                <p className="text-sm leading-relaxed mt-3 line-clamp-3" style={{ color: "#5A5A6B" }}>
                  &ldquo;{review.text}&rdquo;
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
