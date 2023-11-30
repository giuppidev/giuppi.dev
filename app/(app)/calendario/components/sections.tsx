"use client";

export default function Description() {
  return (
    <div className="max-w-7xl">
      <div className="max-w-3xl  text-2xl">
        <p className="pb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          magni culpa ullam. Eligendi repellendus quam quasi! Dolorum est
          eveniet, explicabo dicta expedita sint? Error eligendi doloribus sint,
          voluptatum libero voluptatibus.
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
