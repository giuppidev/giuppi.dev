"use client";

export default function Description() {
  return (
    <div className="max-w-7xl flex-grow flex flex-col gap-4">
      <div
        className={` bg-white w-full   transition-all p-5 border-4 border-gray-900 shadow-brutal`}
      >
        <div
          className={`py-1 text-4xl bg-black text-white w-80 px-2 shadow-upperBlue mb-8`}
        >
          Programmatore
        </div>

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
          progetti diversi, clienti sparsi in giro e finalmente la libertà di
          lavorare dove mi pare....
        </div>
        <div className="text-2xl">
          Negli ultimi anni ho capito due cose: mi piace particolarmente lo
          sviluppo Frontend (in love with React currently) e mi piace insegnare
          e divulgare quello che imparo, qui con i miei corsi o con i miei video
          su youtube.
        </div>
      </div>
      <div
        className={` bg-white w-full   transition-all p-5 border-4 border-gray-900 shadow-brutal`}
      >
        <div
          className={`py-1 text-4xl bg-black text-white w-80 px-2 shadow-upperYellow mb-8`}
        >
          Nomade
        </div>
        <div className="text-2xl">
          Fin dal primo giorno in ufficio, ho capito che qualcosa non andava,
          ovvero io non sono fatto per stare chiuso in un ufficio.
        </div>
        <div className="text-2xl">
          Un giorno un termine mi colpi e mi fece esplodere il cervello: nomade
          digitale. C&apos;era gente che lavorare in giro per il mondo (la
          classica romanzata di avere un portatile sulla spiaggia) e che si
          organizzava la giornata a piacere.
        </div>
        <div className="text-2xl">
          Per fartela breve, da allora ho fatto di tutto per poter vivere in
          libertà viaggiando. Ed ora eccomi qua, con moglie e figlio, a vivere
          in posti sempre diversi.
        </div>
      </div>
    </div>
  );
}
