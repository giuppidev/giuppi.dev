"use client";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "Cosa ottengo se mi iscrivo?",
    answer:
      "Registrandoti qui sulla piattaforma, avrai accesso a tutte le lezioni passate e a quelle nuove non appena disponibili. Inoltre, se vorrai, sarai nel team del progetto nomade!",
  },
  {
    question: "Non so se sono abbastanza bravo per seguire le lezioni",
    answer:
      "Se hai le basi di programmazione, non hai di che preoccuparti! Ogni singola masterclass è fatta per essere compresa da qualunque programmatore, di qualsiasi livello.",
  },
  {
    question: "Cosa ha di speciale questo progetto pratico?",
    answer:
      "Non è una esercitazione di fine corso o una simulazione: è un progetto vero, che io voglio sviluppare in prima persona e che sarà come una vera e propria esperienza lavorativa.",
  },
  {
    question: "Devo per forza partecipare al progetto pratico?",
    answer:
      "Assolutamente no, puoi semplicemente guardare i contenuti che ti interessarno qui sulla piattaforma.",
  },

  {
    question: "Come faccio a chiedere aiuto?",
    answer:
      "Iscrivendoti avrai accesso ai canali Discord privati dei corsi, in cui risponderemo io e gli altri ragazzi della community.",
  },
  {
    question: "Come faccio a cancellare il mio abbonamento?",
    answer:
      "Basta fare login, andare sulla pagina dashboard e cliccare su Gestici il tuo abbonamento (ci mancherai!).",
  },
];

export default function FAQ() {
  return (
    <div className="bg-white border-b-4 border-b-gray-900">
      <div className="mx-auto  px-6 py-24 sm:py-32 lg:px-8 ">
        <div className="mx-auto max-w-7xl divide-y-4 divide-gray-900">
          <h2 className="text-5xl lg:text-7xl font-semibold  leading-tight lg:leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10  divide-y-4 divide-gray-900">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="py-12">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-4xl leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-12 w-12"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-12 w-12"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-16 pr-12">
                      <p className="text-2xl leading-7 text-gray-900">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
