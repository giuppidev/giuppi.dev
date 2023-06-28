"use client";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "Come si svolgeranno le lezioni?",
    answer:
      "Le lezioni si svolgeranno LIVE utilizzando la piattaforma ZOOM: sulla pagina del corso troverai le date di ogni lezioni. Durante la lezioni ci sarà la possibilità di interagire e farmi domande.",
  },
  {
    question: "E se il corso è iniziato oppure è già finito?",
    answer:
      "Nel caso in cui il corso sia iniziato o già terminato, entrando nella community troverai la registrazione di ogni lezione. Potrai comunque seguire lo sviluppo del progetto, visionare il codice e chiedere aiuto alla community su DISCORD se ti blocchi.",
  },
  {
    question: "Cosa ottengo comprando un corso o una masterclass?",
    answer:
      "Oltre al link ZOOM dell'evento (se non ancora passato), riceverai l'accesso nella piattaforma alle registrazioni video e alle repository Github con il codice creato durante le lezioni.",
  },

  {
    question: "Come faccio a chiedere aiuto durante il corso?",
    answer:
      "Ci sono 3 modi: farmi domande durante le lezioni live, chiedendo sul canale dedicato al corso su Discord per gli abbonati oppure acquistando una consulenza personalizzata per chiedere code review, aiuto e tutto quello che ti serve per proseguire nel tuo percorso.",
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
