import { Button } from "@/components/button";
import { LinkButton } from "@/components/link";
import { CheckIcon } from "@heroicons/react/20/solid";
import { twMerge } from "tailwind-merge";
import { handleSubscribe } from "../../actions";

const academy = {
  name: "Academy",
  id: "tier-sub",
  href: "/subscription",
  priceMonthly: "€ 25",
  mostPopular: true,
  buttonLabel: "Entra",

  description: "Accedi a tutti i corsi e alle masterclass!",
  features: [
    "Contenuti video settimanali",
    "Registrazioni sempre disponibili",
    "Partecipa con me ad un progetto reale",
    "Nessun vincolo, cancellati quando vuoi",
  ],
  pricePeriod: "mese",
};

export default function Pricing() {
  return (
    <div
      className="bg-lime-200 py-20  border-b-4 border-gray-900"
      id="subscription"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center lg:max-w-7xl">
          <p className=" text-5xl font-semibold  tracking-tight text-gray-900 sm:text-7xl">
            Come entrare
          </p>
        </div>
        <div className="border-4  border-gray-900 shadow-brutalXl  mt-16 mx-4 max-w-md  bg-white  sm:mt-20 lg:mx-0 lg:flex md:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900">
              Tutto molto semplice
            </h1>

            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-900 sm:gap-6"
            >
              {academy.features.map((feature) => (
                <li key={feature} className="flex gap-x-3 text-3xl">
                  <Arrow
                    className="h-8 w-5 flex-none text-gray-950"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 ">
            <div className="rounded-2xl py-10 text-center lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8 flex flex-col items-center">
                <p className="text-base font-semibold text-gray-900">
                  Accedi a masterclass e corsi
                </p>
                <p
                  className={twMerge(
                    " flex items-baseline gap-x-1",
                    academy.mostPopular ? "mt-6 lg:mt-8" : "mt-6 lg:mt-8"
                  )}
                >
                  <span className="text-6xl font-bold tracking-tight text-gray-900">
                    {academy.priceMonthly}
                  </span>
                  {academy.pricePeriod && (
                    <span className="text-lg font-semibold leading-6 text-gray-600">
                      /{academy.pricePeriod}
                    </span>
                  )}
                </p>
                <>
                  <form action={handleSubscribe} className="mt-8">
                    <input type="hidden" name="mode" value="monthly" />
                    <Button
                      type="submit"
                      className="bg-myGreen text-white font-semibold text-xl  relative uppercase"
                    >
                      {academy.buttonLabel}
                    </Button>
                  </form>
                </>
                <div className="mt-6 text-base items-end leading-5 text-gray-800 flex gap-1">
                  oppure{" "}
                  <form action={handleSubscribe} className="mt-8 font-semibold">
                    <input type="hidden" name="mode" value="yearly" />
                    <button
                      type="submit"
                      className="hover:underline whitespace-nowrap flex-nowrap"
                    >
                      ottieni 2 mesi gratis 🚀
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Arrow = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="19"
    viewBox="0 0 28 19"
    fill="none"
    {...props}
  >
    <path
      d="M19.8201 18.165C20.0623 13.2867 22.9685 10.3806 27.2931 9.99999L27.2931 8.13038C22.9685 7.74981 20.0623 4.87823 19.8201 -1.73273e-06L16.6025 0.691946C16.7755 2.45641 17.3983 4.01329 18.4362 5.43179C19.5087 6.81568 20.7196 7.58483 22.1035 8L6.99382e-07 8L8.74228e-07 10L22.1035 9.99999C20.7196 10.4152 19.5087 11.3147 18.4362 12.7332C17.3983 14.1517 16.7755 15.7086 16.6025 17.4384L19.8201 18.165Z"
      fill="currentColor"
    />
  </svg>
);
