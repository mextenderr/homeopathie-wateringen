import { MapPin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export function Address() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text mb-4">
            Contact
          </h2>
          <p className="text-text-muted max-w-md mx-auto">
            Neem telefonisch contact op om een afspraak te plannen. Stuurt u
            liever een bericht? Dan kan dit ook via het{" "}
            <Link href="/contact" className="text-sage-dark underline hover:text-sage transition-colors">
              contactformulier
            </Link>
            !
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href="tel:+31623195686"
            className="group flex flex-col items-center text-center p-6 bg-cream rounded-2xl border border-border hover:border-sage/30 hover:shadow-md transition-all"
          >
            <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-sage/20 transition-colors">
              <Phone className="w-5 h-5 text-sage" />
            </div>
            <h3 className="font-semibold text-text mb-1">Telefoon</h3>
            <p className="text-text-muted text-sm">06-23 19 56 86</p>
          </a>

          <div className="flex flex-col items-center text-center p-6 bg-cream rounded-2xl border border-border">
            <div className="w-12 h-12 bg-warm/20 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-warm-dark" />
            </div>
            <h3 className="font-semibold text-text mb-1">Bezoekadres</h3>
            <p className="text-text-muted text-sm">
              Guldeland 25
              <br />
              2291 VG Wateringen
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-cream rounded-2xl border border-border">
            <div className="w-12 h-12 bg-warm/20 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-5 h-5 text-warm-dark" />
            </div>
            <h3 className="font-semibold text-text mb-1">Postadres</h3>
            <p className="text-text-muted text-sm">
              Verhoevenstraat 5
              <br />
              2291 RN Wateringen
            </p>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-md border border-border">
          <iframe
            title="Locatie Ilonka de Vos"
            src="https://www.google.com/maps?q=Guldeland+25,+2291+VG+Wateringen&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
