import { BrainstormingIcon } from "@/components/icons/brainsotrming";
import { GamepadIcon } from "@/components/icons/gamepad";
import { KeyboardIcon } from "@/components/icons/keyboard";
import { ProgrammingIcon } from "@/components/icons/programming";
import { SaveIcon } from "@/components/icons/save";

export default function Intro() {
  return (
    <div className="px-8 border-b-4 border-gray-900  bg-white">
      <div className="mx-auto max-w-6xl lg:text-center py-12">
        <p className=" text-5xl font-semibold  tracking-tight text-gray-900 sm:text-7xl">
          Cosa troverai qui
        </p>
        <p className="mt-4 text-xl leading-8 text-gray-800">
          Ti senti{" "}
          <span className="font-semibold">perso tra linguaggi e framework</span>{" "}
          da studiare? La tua azienda ti fa lavorare su tecnologie degli anni 90
          e <span className="font-semibold">ti senti indietro</span>? Fatichi ad
          avere{" "}
          <span className="font-semibold">costanza e metodo di studio</span> tra
          una giornata di lavoro e vita privata?
        </p>
        <p className="mt-4 text-2xl leading-8 text-gray-800">
          Sei nel posto giusto per{" "}
          <span className="font-semibold">
            cambiare la tua vita da developer
          </span>
          .
        </p>
      </div>

      <div
        className="mx-auto max-w-7xl  grid  grid-cols-1  gap-x-8 gap-y-4 
  lg:grid-cols-4 mb-16 grid-rows-[auto_auto_1fr]"
      >
        {features.map((feature) => (
          <div
            key={feature.name}
            className="justify-between  px-4 py-4 grid grid-rows-[subgrid] row-[span_3]   border-4 border-gray-900 bg-white  transition-all shadow-brutal -translate-y-2 -translate-x-2"
          >
            <div className="mx-auto p-4 border-4 border-gray-900 rounded-full bg-myYellow aspect-square overflow-hidden">
              {feature.icon}
            </div>

            <div
              className={`py-1 text-2xl font-semibold  text-gray-900  uppercase`}
            >
              {feature.name}
            </div>

            <div className="font-normal ">
              <span className="text-lg"> {feature.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const features = [
  {
    name: "Metodo di studio",
    arrowColor: "#07B6D4",
    icon: <BrainstormingIcon />,
    description:
      "Imparerai a studiare costantemente e capire cosa ti serve per la tua carriera, senza rimanere più spaesato e fermo al palo.",
  },
  {
    name: "Un senior con te",
    arrowColor: "#FFCC00",
    icon: <ProgrammingIcon />,
    description:
      "Non sarai da solo, avrai un senior developer che ti guiderà con lezioni e masterclass settimanali e a cui potrai chiedere aiuto direttamente.",
  },
  {
    name: "Rimani aggiornato",
    arrowColor: "#FFCC00",
    icon: <SaveIcon />,
    description:
      "Vedremo mese per mese nuovi framework e approcci per essere sempre sul pezzo, se non un passo avanti agli altri.",
  },
  {
    name: "Progetto reale",
    arrowColor: "#FFCC00",
    icon: <GamepadIcon />,
    description:
      "Partecipa con me ad un progetto reale, in cui potrai lavorare davvero e fare esperienza contando sempre sul mio supporto.",
  },
];
