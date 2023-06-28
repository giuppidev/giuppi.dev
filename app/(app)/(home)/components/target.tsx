import { VideoCameraIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const Target = () => {
  return (
    <div className="bg-white border-b-4 border-b-gray-900">
      <div className="mx-auto  px-6 py-24 lg:px-8 ">
        <div className="mx-auto max-w-7xl  ">
          <p className=" text-5xl font-semibold  tracking-tight text-gray-900 sm:text-7xl lg:text-center">
            Da dove partire?
          </p>

          <dl className="mt-10  divide-y-4 divide-gray-900">
            <dt className="flex w-full  gap-8 text-gray-900 ">
              <span className="text-4xl leading-7">
                <LiveIcon />
              </span>
              <div className="flex flex-col gap-2">
                <span className="text-3xl lg:text-5xl">
                  Non ho mai programmato
                </span>
                <span>
                  Per chi non ha esperienza, può aiutare iniziare dalla
                  masterclass{" "}
                  <a
                    className="underline font-semibold"
                    href="/corsi/react-da-zero-a-master"
                  >
                    Da Html a React
                  </a>
                  , introduttiva poi per il corso{" "}
                  <a
                    href="/corsi/react-beginner"
                    className="underline font-semibold"
                  >
                    La tua prima app in React
                  </a>
                  . <br />
                  Se però non sei ancora pronto per il corso, puoi scrivermi una{" "}
                  <a
                    href="mailto:info@giuppi.dev"
                    className="underline font-semibold"
                  >
                    email
                  </a>{" "}
                  oppure prenotare una{" "}
                  <a href="/mentorship" className="underline font-semibold">
                    consulenza
                  </a>{" "}
                  per avere consigli su come iniziare (anche con altre
                  scuole/corsi).
                </span>
              </div>
            </dt>
            <dt className="flex w-full  gap-8 text-gray-900 pt-4">
              <span className="text-4xl leading-7">
                <LiveIcon />
              </span>
              <div className="flex flex-col gap-2">
                <span className="text-3xl lg:text-5xl">Qualcosa so fare</span>
                <span>
                  È il momento di dare uno sprint alla tua carriera. Entra
                  nell&apos;academy attivando la{" "}
                  <Link
                    href="#subscription"
                    className="underline font-semibold"
                  >
                    membership
                  </Link>{" "}
                  per seguire sia i corsi base, sia quelli più avanzati su{" "}
                  <a
                    href="/corsi/typescript"
                    className="underline font-semibold"
                  >
                    Typescript
                  </a>{" "}
                  e{" "}
                  <a
                    href="/corsi/react-nextjs"
                    className="underline font-semibold"
                  >
                    Nextjs
                  </a>
                  .
                </span>
              </div>
            </dt>
            <dt className="flex w-full  gap-8 text-gray-900 pt-4">
              <span className="text-4xl leading-7">
                <LiveIcon />
              </span>
              <div className="flex flex-col gap-2">
                <span className="text-3xl lg:text-5xl">Insegno io a te</span>
                <span>
                  Sei nel posto giusto se ti interessa alzare l&apos;asticella
                  delle tue competenze su{" "}
                  <a
                    href="/corsi/react-nextjs"
                    className="underline font-semibold"
                  >
                    React e Nextjs
                  </a>
                  , ma soprattutto se sei pronto a diventare un{" "}
                  <a href="/corsi/nomads" className="underline font-semibold">
                    nomade digitale
                  </a>{" "}
                  o trasformare la tua avvità per lavorare come{" "}
                  <a
                    href="/corsi/freelance"
                    className="underline font-semibold"
                  >
                    freelance
                  </a>
                  .
                </span>
              </div>
            </dt>
          </dl>
        </div>
      </div>
    </div>
  );
};

const LiveIcon = () => {
  return (
    <div className="bg-red-400 px-2 py-1 w-fit border-4 border-gray-900 shadow-brutal mb-6">
      <VideoCameraIcon className="h-24 w-24  text-gray-900" />
    </div>
  );
};
