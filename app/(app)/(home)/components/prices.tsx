import { Button } from "@/components/button";
import { LinkButton } from "@/components/link";
import { CheckIcon } from "@heroicons/react/20/solid";
import { twMerge } from "tailwind-merge";
import { handleSubscribe } from "../../actions";

const tiers = [
  {
    name: "Membership",
    id: "tier-sub",
    href: "/subscription",
    priceMonthly: "€ 25",
    description: "Diventa un membro della community dei programmatori nomadi!",
    features: [
      "Tutti gli eventi LIVE",
      "Registrazioni degli eventi passati",
      "Gruppo DISCORD della community",
      "Tutte le repo github",
      "Sessioni extra di studio",
      "Esci quando vuoi",
    ],
    featured: true,
    label: "mese",
  },
  {
    name: "Evento",
    id: "tier-event",
    href: "#",
    priceMonthly: "Custom",
    label: "evento",

    description: "Scegli solo quello che ti interesssa.",
    features: [
      "Evento singolo LIVE",
      "Registrazioni post evento",
      "Repo github del corso + materiale",
    ],
    featured: false,
  },
];

export default function Prices() {
  return (
    <div
      className="relative isolate  px-6 py-24 sm:py-32 lg:px-8 border-b-4 border-b-gray-900 bg-lime-300"
      id="subscription"
    >
      <div className="mx-auto max-w-2xl text-center lg:max-w-7xl">
        <p className=" text-5xl font-semibold  tracking-tight text-gray-900 sm:text-7xl">
          Come entrare nell&apos;academy
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
        Preferisci l&apos;accesso completo o scegliere gli eventi singoli?
        Scegli tu!
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={twMerge(
              tier.featured
                ? "relative bg-white shadow-2xl border-4 border-gray-900"
                : "bg-white/60 sm:mx-8 lg:mx-0",
              tier.featured
                ? ""
                : tierIdx === 0
                ? "rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl border-4 border-gray-900"
                : "sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none border-4 border-gray-900 sm:border-t-0 lg:border-t-4 lg:border-l-0",
              "rounded-3xl p-8  sm:p-10 flex flex-col gap-2"
            )}
          >
            <h3 id={tier.id} className=" text-5xl leading-7 ">
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-gray-900">
                {tier.priceMonthly}
              </span>
              <span className="text-base text-gray-500">/{tier.label}</span>
            </p>
            <p className="mt-6 text-2xl leading-7 text-gray-600">
              {tier.description}
            </p>
            <ul
              role="list"
              className="mt-8 space-y-4 text-xl leading-6 text-gray-600 sm:mt-10"
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-myGreen"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
            {tier.id === "tier-sub" ? (
              <form action={handleSubscribe}>
                <input type="hidden" name="mode" value="yearly" />
                <Button
                  type="submit"
                  className="bg-red-600 text-white font-semibold text-xl mt-4"
                >
                  ENTRA A € 25/mese
                </Button>
              </form>
            ) : (
              <div className="mt-4">
                <LinkButton
                  href="/corsi"
                  className="bg-red-600/90 text-white font-semibold text-xl "
                >
                  Vai ai corsi
                </LinkButton>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
