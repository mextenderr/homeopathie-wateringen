import { Info } from "lucide-react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center bg-gradient-to-br from-cream via-cream to-warm-light/30">
      <div className="max-w-2xl mx-auto px-6 py-24 w-full">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-md border border-border text-center">
          <div className="w-16 h-16 bg-warm-light/40 rounded-full flex items-center justify-center mx-auto mb-6">
            <Info className="w-8 h-8 text-sage" />
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-text mb-4">
            Momenteel geen nieuwe aanmeldingen
          </h1>
          <p className="text-text-muted leading-relaxed max-w-md mx-auto mb-4">
            Op dit moment neem ik geen nieuwe cliënten aan. Ik ben daarom
            tijdelijk niet bereikbaar voor het maken van afspraken.
          </p>
          <p className="text-text-muted leading-relaxed max-w-md mx-auto mb-8">
            Bedankt voor uw begrip.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-sage text-white px-6 py-3 rounded-full font-medium hover:bg-sage-dark transition-colors shadow-md hover:shadow-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            Terug naar home
          </Link>
        </div>
      </div>
    </div>
  );
}
