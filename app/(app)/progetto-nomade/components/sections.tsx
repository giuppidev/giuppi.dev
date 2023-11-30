"use client";

export default function Description() {
  return (
    <div className="max-w-7xl">
      <div className="max-w-3xl  text-2xl">
        <p className="pb-4">
          Se vuoi sviluppare insieme a me un progetto PAZZESCO, sei nel posto
          giusto.
          <br /> <br />
          L&apos;idea, nome in codice &apos;progetto nomade&apos; , è quella di
          creare una piattaforma per organizzare viaggi per nomadi digitali (e
          semplici viaggiatori).
          <br /> <br />
          Integremo la piattaforma con un LLM per poter dialogare con
          l&apos;utente, che andando a chiedere come organizzare un viaggio in
          un certo posto e in un certo periodo, vedrà per magia tutto
          l&apos;itinerario apparire con tutte le info necessari: suggerimenti,
          aerei da prendere, dove alloggiare...
          <br /> <br />
          Questa è l&apos;idea di partenza, ma le daremo forma insieme!
        </p>
      </div>
      <div className="max-w-7xl">
        <div className="max-w-3xl  text-3xl">
          <p className="pb-4">Caratteristiche tecniche:</p>
          <ul className="list-inside list-disc text-xl">
            <li>Dashboard in Next.js + React</li>
            <li>Integrazione con API esterne</li>
            <li>Storybook + Cypress: UI e testing frontend</li>
            <li>Prototipazione con Figma</li>
            <li>CI/CD con GitHub Actions</li>
            <li>AI con LangChain</li>
            <li>App mobile</li>
          </ul>
        </div>
        <div className="max-w-3xl  text-3xl pt-10">
          <p className="pb-4">Timeline:</p>
          <ul className="list-inside list-decimal text-xl">
            <li>Naming</li>
            <li>Definizione architettura</li>
            <li>UI/UX</li>
            <li>Core functionalities</li>
            <li>....</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
