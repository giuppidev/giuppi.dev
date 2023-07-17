import { Button } from "@/components/button";
import { LinkButton } from "@/components/link";
import { CheckIcon } from "@heroicons/react/20/solid";
import { twMerge } from "tailwind-merge";
import { handleSubscribe } from "../../actions";
import { Props } from "@mdx-js/react/lib";

const tiers = [
  {
    name: "Community",
    id: "tier-community",
    href: process.env.NEXT_PUBLIC_DISCORD,
    priceMonthly: "Free",
    description: "Entra nella community dei programmatori nomadi!",
    mostPopular: false,
    buttonLabel: "Entra gratis",
    features: ["Server Discord della community", "Sessioni di studio insieme"],
    target: "_blank" as "_blank",
  },
  {
    name: "Academy",
    id: "tier-sub",
    href: "/subscription",
    priceMonthly: "€ 25",
    mostPopular: true,
    buttonLabel: "Accedi a tutto",

    description: "Accedi a tutti i corsi e alle masterclass!",
    features: [
      "Tutti gli eventi LIVE",
      "Registrazioni video degli eventi passati",
      "Canale Discord dedicato ad ogni corso",
      "Tutte le repo github",
      "Lezioni extra su Discord",
      "Esci quando vuoi",
    ],
    pricePeriod: "mese",
  },
  {
    name: "Evento",
    id: "tier-event",
    href: "/corsi",
    priceMonthly: "Custom",
    mostPopular: false,
    buttonLabel: "Vedi i corsi",
    pricePeriod: "evento",
    description: "Scegli solo quello che ti interessa.",
    features: [
      "Evento singolo LIVE",
      "Registrazioni post evento",
      "Repo github del corso + materiale",
    ],
    target: "_self" as "_self",
  },
];

export default function Pricing() {
  return (
    <div
      className="bg-lime-200 py-20  border-b-4 border-gray-900"
      id="subscription"
    >
      <div className="mx-auto max-w-7xl ">
        <div className="mx-auto max-w-2xl text-center lg:max-w-7xl">
          <p className=" text-5xl font-semibold  tracking-tight text-gray-900 sm:text-7xl">
            Come entrare nell&apos;academy
          </p>
        </div>

        <div className="isolate gap-4 mx-auto mt-10 grid max-w-md box-border  grid-cols-1 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={twMerge(
                tier.mostPopular
                  ? "lg:z-10  shadow-brutalXl"
                  : "lg:mt-8 shadow-brutalSmall",

                "flex flex-col justify-between  bg-white p-8 mx-4 lg:mx-0  xl:p-10 border-4 border-gray-900 "
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={twMerge(
                      tier.mostPopular ? "font-semibold" : "text-gray-900",
                      "text-4xl leading-8"
                    )}
                  >
                    {tier.name}
                  </h3>
                </div>

                <p
                  className={twMerge(
                    " flex items-baseline gap-x-1",
                    tier.mostPopular ? "mt-6 lg:mt-8" : "mt-6 lg:mt-8"
                  )}
                >
                  <span className="text-6xl font-bold tracking-tight text-gray-900">
                    {tier.priceMonthly}
                  </span>
                  {tier.pricePeriod && (
                    <span className="text-lg font-semibold leading-6 text-gray-600">
                      /{tier.pricePeriod}
                    </span>
                  )}
                </p>
                {tier.id === "tier-sub" && (
                  <div className="pt-4">
                    <div className="w-fit border-2 border-gray-900 font-semibold p-1 text-xl bg-blue-300">
                      PROVA GRATUITA DI 7 GIORNI*
                    </div>
                    <div>*Offerta lancio 🚀</div>
                  </div>
                )}
                <p className={`mt-4 text-2xl leading-7 text-gray-600`}>
                  {tier.description}
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-4 text-xl leading-6 text-gray-600 sm:mt-10"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Arrow
                        className="h-6 w-5 flex-none text-gray-950"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              {tier.id === "tier-sub" ? (
                <>
                  <form action={handleSubscribe} className="mt-8">
                    <input type="hidden" name="mode" value="monthly" />
                    <Button
                      type="submit"
                      className="bg-myYellow text-gray-900 font-semibold text-xl  relative uppercase"
                    >
                      {tier.buttonLabel}
                    </Button>
                  </form>
                  <a href="/corsi" className="underline pt-4 pl-2">
                    Vedi la lista dei corsi{" "}
                  </a>
                </>
              ) : (
                <LinkButton
                  href={tier.href || ""}
                  className=" text-gray-900 font-semibold text-xl uppercase mt-8 w-fit"
                  target={tier.target || "_self"}
                >
                  {tier.buttonLabel}
                </LinkButton>
              )}
            </div>
          ))}
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
