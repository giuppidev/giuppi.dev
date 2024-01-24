import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/solid";

const target = [
  {
    title: "Sai programmare ma vuoi diventare pro",
    description:
      "Non serve avere anni di esperienza, ma conoscere le basi di programmazione.",
  },
  {
    title: "Vaghi tra linguaggi e framework",
    description:
      "Hai voglia di studiare ma non sai da dove cominciare, tra linguaggi diversi e framework nuovi ogni giorno.",
  },
  {
    title: "Hai bisogno di fare esperienza",
    description:
      "Tra tutorial e progettini, non riesci a fare reale esperienza su un progetto vero.",
  },

  {
    title: "Vuoi differenziarti",
    description:
      "Qui non studieremo argomenti già visti e rivisti, ma vedremo cosa serve per formarsi come developer a 360 gradi.",
  },
];

export const Target = () => {
  return (
    <div className="bg-green-50 border-b-4 border-b-gray-900 box-border">
      <div className="mx-auto  px-6 py-24 lg:px-8 ">
        <div className="mx-auto max-w-7xl  ">
          <p className=" text-5xl font-semibold  tracking-tight text-gray-900 sm:text-7xl lg:text-center">
            Sei nel posto giusto se
          </p>

          <div className="mt-10  ">
            {target.map((tg) => (
              <div
                key={tg.title}
                className="flex w-full  gap-8 text-gray-900 border-t-4 border-gray-900 py-6 first:border-t-0"
              >
                <span className="text-2xl leading-7">
                  <PlusIcon />
                </span>
                <div className="flex flex-col gap-2">
                  <div className="text-3xl lg:text-5xl">{tg.title}</div>
                  <div>{tg.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const PlusIcon = () => {
  return (
    <div className="bg-green-300 px-2 py-1 w-fit border-4 border-gray-900 shadow-brutal ">
      <PlusSmallIcon className="h-12 w-12 lg:h-16 lg:w-16  text-gray-900" />
    </div>
  );
};

const MinusIcon = () => {
  return (
    <div className="bg-red-300 px-2 py-1 w-fit border-4 border-gray-900 shadow-brutal ">
      <MinusSmallIcon className="h-12 w-12 lg:h-16 lg:w-16  text-gray-900" />
    </div>
  );
};
