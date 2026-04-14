"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "Wat is een homeopathisch arts?",
    answer:
      "Een homeopathisch arts behandelt met behulp van homeopathisch bewerkte middelen op natuurlijke basis waarbij het totale functioneren als mens belangrijk is. Deze homeopathische middelen worden gebruikt als aanvulling op de reguliere medicijnen van huisarts of specialist.",
  },
  {
    question: "Met welke klachten kan ik terecht?",
    answer:
      "Vooral chronische klachten komen in aanmerking, lichamelijk en/of geestelijk. Vaak zijn dit ook klachten die onvoldoende reageren op reguliere medicatie. Dit geldt voor kinderen én volwassenen.",
  },
  {
    question: "Hoe kom ik aan de homeopathische middelen?",
    answer:
      "De homeopathische middelen die worden voorgeschreven zijn enkelvoudige middelen en zijn anders dan de middelen die vrij verkrijgbaar zijn in de drogist. De middelen die zijn voorgeschreven worden door een speciale apotheek opgestuurd en kunnen door de brievenbus.",
  },
  {
    question: "Wat is coaching?",
    answer:
      "Coaching is een vorm van persoonlijke begeleiding. Vaak wordt gestart met homeopathische behandeling en wordt dit gevolgd door coaching waarbij doel is om mensen weer in balans te krijgen in het dagelijks leven.",
  },
  {
    question: "Wat zijn de tarieven?",
    answer: null,
  },
];

function TarievenContent() {
  return (
    <div className="space-y-4">
      <div className="bg-cream rounded-xl p-4 md:p-6 space-y-3">
        <div className="flex justify-between items-center">
          <span>Homeopathisch consult</span>
          <span className="font-semibold text-text">&euro; 70,00</span>
        </div>
        <div className="border-t border-border" />
        <div className="flex justify-between items-center">
          <span>Telefonisch vervolg-consult</span>
          <span className="font-semibold text-text">&euro; 35,00</span>
        </div>
        <div className="border-t border-border" />
        <div className="flex justify-between items-center">
          <span>Kort tussentijds contact</span>
          <span className="font-semibold text-text">&euro; 20,00</span>
        </div>
      </div>
      <p className="text-sm text-text-muted italic">
        Als arts ben ik niet BTW-plichtig.
      </p>
      <p className="text-sm text-text-muted">
        In het algemeen wordt een deel van de kosten vergoed door de
        zorgverzekeraars. Bij annulering binnen 24 uur voor de afspraak zullen
        kosten in rekening worden gebracht.
      </p>
    </div>
  );
}

export function Faq() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-text text-center mb-4">
          Antwoord op uw vragen
        </h2>
        <p className="text-text-muted text-center mb-12 max-w-md mx-auto">
          Veelgestelde vragen over homeopathie, coaching en de praktijk.
        </p>

        <Accordion.Root type="single" collapsible className="space-y-3">
          {faqItems.map((item, i) => (
            <Accordion.Item
              key={i}
              value={`item-${i}`}
              className="bg-cream/60 rounded-xl border border-border overflow-hidden data-[state=open]:bg-cream"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex items-center justify-between w-full px-5 md:px-6 py-4 md:py-5 text-left font-medium text-text hover:text-sage-dark transition-colors group cursor-pointer">
                  <span className="text-sm md:text-base">{item.question}</span>
                  <ChevronDown className="w-5 h-5 text-text-muted shrink-0 ml-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <div className="px-5 md:px-6 pb-5 text-text-muted leading-relaxed text-sm md:text-base">
                  {item.answer ? item.answer : <TarievenContent />}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
