import { PlusSmallIcon } from "@heroicons/react/24/solid";

export const Target = () => {
  return (
    <div className="bg-white border-b-4 border-b-gray-900 box-border">
      <div className="mx-auto  px-6 py-24 lg:px-8 ">
        <div className="mx-auto max-w-7xl  ">
          <p className=" text-5xl font-semibold  tracking-tight text-gray-900 sm:text-7xl lg:text-center">
            Sei nel posto giusto se
          </p>

          <div className="mt-10  divide-y-4 divide-gray-900">
            <div className="flex w-full  gap-8 text-gray-900 ">
              <span className="text-2xl leading-7">
                <PlusIcon />
              </span>
              <div className="flex flex-col gap-2 mb-4">
                <div className="text-3xl lg:text-5xl">Sai già programmare</div>
                <div>
                  Non serve avere anni di esperienza, ma conoscere le basi di
                  programmazione web.
                </div>
              </div>
            </div>

            <div className="flex w-full  gap-8 text-gray-900 py-4">
              <span className="text-4xl leading-7">
                <PlusIcon />
              </span>
              <div className="flex flex-col gap-2">
                <div className="text-3xl lg:text-5xl">
                  Hai bisogno di fare esperienza
                </div>
                <div>
                  Insieme a me potrai imparare come si lavora in team ad un
                  progetto lavorativo, facendo così un&apos;esperienza reale di
                  lavoro dev.
                </div>
              </div>
            </div>
            <div className="flex w-full  gap-8 text-gray-900 pt-4">
              <span className="text-4xl leading-7">
                <PlusIcon />
              </span>
              <div className="flex flex-col gap-2">
                <div className="text-3xl lg:text-5xl">Vuoi differenziarti</div>
                <div>
                  Qui non studieremo argomenti già visti e rivisti, ma vedremo
                  cosa serve per formarsi come developer a 360 gradi.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PlusIcon = () => {
  return (
    <div className="bg-violet-400 px-2 py-1 w-fit border-4 border-gray-900 shadow-brutal ">
      <PlusSmallIcon className="h-12 w-12 lg:h-16 lg:w-16  text-gray-900" />
    </div>
  );
};
