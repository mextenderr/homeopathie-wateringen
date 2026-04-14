import Image from "next/image";
import { Info } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream to-warm-light/40" />

      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-0 w-full">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-shrink-0 order-1 md:order-none">
            <div className="relative">
              <div className="absolute -inset-3 bg-warm/20 rounded-[2rem] md:rounded-[3rem] rotate-2" />
              <Image
                src="/ilonka.jpg"
                alt="Ilonka de Vos - Homeopathisch Arts & Coach"
                width={380}
                height={480}
                priority
                className="relative rounded-[2rem] md:rounded-[3rem] object-cover w-64 md:w-[380px] shadow-xl"
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left order-2 md:order-none">
            <p className="text-sage-dark font-medium text-sm md:text-base tracking-wide uppercase mb-3">
              Welkom bij de praktijk van
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight mb-6">
              Homeopathisch
              <br />
              <span className="text-sage">Arts &amp; Coach</span>
            </h1>
            <div className="space-y-4 text-text-muted leading-relaxed max-w-lg mx-auto md:mx-0">
              <p>
                Als homeopathisch arts ben ik lid van de artsenvereniging voor
                integrale geneeskunde (AVIG) en daaronder valt de vakgroep
                homeopathisch artsen Nederland (VHAN).
              </p>
              <p>
                Oorspronkelijk ben ik opgeleid als regulier arts en vervolgens
                heb ik de opleiding tot homeopathisch arts gedaan. In mijn werk
                als homeopathisch arts beoefen ik de klassieke homeopathie. Mijn
                achtergrond als arts betekent dat ik het totale medische plaatje
                daarbij meeneem in mijn advies.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3 justify-center md:justify-start bg-warm-light/40 border border-warm/30 rounded-2xl px-5 py-4 max-w-lg mx-auto md:mx-0">
              <Info className="w-5 h-5 text-sage shrink-0" />
              <p className="text-text-muted text-sm leading-relaxed">
                Op dit moment neem ik geen nieuwe cliënten aan. Bedankt voor uw begrip.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
