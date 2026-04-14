import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export function BigInfo() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-sage/10 via-cream to-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-6 h-6 text-sage" />
              <span className="text-sage-dark font-medium text-sm uppercase tracking-wide">
                Erkende zorgverlener
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text mb-6">
              BIG Geregistreerd Arts
            </h2>
            <p className="text-text-muted leading-relaxed max-w-lg">
              BIG geregistreerd arts: dit betekent dat ik bevoegd ben volgens de
              wet BIG (Beroepen in de Individuele Gezondheidszorg) om mijn
              beroep als arts uit te oefenen.
            </p>
          </div>

          <div className="flex-shrink-0">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <Image
                src="/AVIG.png"
                alt="AVIG - Artsenvereniging voor Integrale Geneeskunde"
                width={200}
                height={75}
                className="w-48 md:w-56 h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
