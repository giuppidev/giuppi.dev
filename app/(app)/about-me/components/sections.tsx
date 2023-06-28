"use client";

export default function Description() {
  return (
    <div className="max-w-7xl flex-grow flex flex-col gap-4">
      <div className="text-3xl">
        Mi chiamo Giuppi e sono un programmatore nomade.
      </div>
      <div
        className={` bg-white w-full   transition-all p-5 border-4 border-gray-900 shadow-brutal`}
      >
        <div className="text-3xl font-semibold pb-4">Programmatore</div>
        <div className="text-2xl">
          Ho iniziato ad appassionarmi alla programmazione quando c&apos;erano
          ancora i floppy disk.. Da lì, molto studio, la scelta di fare
          ingegneria informatica di cui mi pentii 2 anni dopo e i primi lavori.
        </div>
        <div className="text-2xl">
          Sono passato da fare l&apos;operatore su turni al sistemista
          applicativa, dal programmatore Java al full stack developer in una
          startup.
        </div>
        <div className="text-2xl">
          Il vero divertimento è arrivato quando sono diventato freelance: tanti
          progetti diversi.
        </div>
      </div>
      <div
        className={` bg-white w-full   transition-all p-5 border-4 border-gray-900 shadow-brutal`}
      >
        <div className="text-3xl font-semibold pb-4">Nomade</div>
        <div className="text-2xl">
          lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum
          dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet
          consectetur adipisicing elit lorem ipsum dolor sit amet consectetur
          adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing
          elit lorem ipsum dolor sit amet consectetur adipisicing elit lorem
          ipsum dolor sit amet consectetur adipisicing elit{" "}
        </div>
      </div>
    </div>
  );
}
