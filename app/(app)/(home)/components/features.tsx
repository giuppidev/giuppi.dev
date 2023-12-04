import { ArrowIcon } from "@/components/course";
import { LinkArrow } from "@/components/link-arrow";
import Link from "next/link";
export default function Features() {
  return (
    <div className="px-8 border-b-4 border-gray-900 bg-cyan-500 ">
      <div className="mx-auto max-w-4xl lg:text-center py-12">
        <p className=" text-5xl font-semibold  tracking-tight text-gray-900 sm:text-7xl">
          Come funziona
        </p>
      </div>
      <div
        className="mx-auto max-w-7xl  grid  grid-cols-1 gap-x-8 gap-y-4 
  lg:grid-cols-2 mb-16"
      >
        {features.map((feature) => (
          <Link
            key={feature.name}
            href={feature.href}
            className="flex flex-col justify-between  px-8 py-10  border-4 border-gray-900 bg-white  transition-all md:hover:shadow-brutal md:hover:-translate-y-2 md:hover:-translate-x-2"
          >
            <div className="flex flex-col  gap-2 text-xl font-semibold leading-7 h-full ">
              <div className="flex gap-8">
                <div className="rounded-sm flex gap-2 items-center ml-2">
                  <div
                    className={`py-1 text-5xl bg-black text-white w-52 px-2 ${feature.shadowClass} mb-8`}
                  >
                    {feature.name}
                  </div>
                </div>
              </div>
              <div className="font-normal ">
                <ul className="space-y-4">
                  {feature.highlights.map((highlight) => (
                    <li className="flex gap-x-3 text-2xl" key={highlight.title}>
                      <Arrow
                        className={`h-8 w-5 flex-none ${feature.textColor}`}
                        aria-hidden="true"
                      />
                      <div className="flex flex-col gap-1">
                        <span className="text-3xl font-semibold">
                          {highlight.title}
                        </span>
                        <span className="text-lg"> {highlight.subtitle}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-2 mt-8 items-end space-x-3  flex-grow  font-semibold text-xl ">
                <div className="flex gap-4 items-center hover:underline">
                  {feature.linkLabel}
                  <LinkArrow
                    className={`w-8 h-8 `}
                    shadowColor={feature.arrowColor}
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

const features = [
  {
    name: "Teoria",
    href: "/corsi",
    highlights: [
      {
        title: "Un contenuto video a settimana",
        subtitle: "lezione o masterclass",
      },
      {
        title: "Accesso totale",
        subtitle: "a tutti i contenuti pubblicati",
      },
      {
        title: "Canale Discord",
        subtitle: "per supportarti in ogni fase dello studio",
      },
      {
        title: "Materiale didattico",
        subtitle: "accesso alle repo, slide e links",
      },
    ],
    linkLabel: "Scopri i corsi",
    shadowClass: "shadow-upperBlue",
    textColor: "text-cyan-500",
    arrowColor: "#07B6D4",
  },
  {
    name: "Pratica",
    href: "/progetto-nomade",
    highlights: [
      {
        title: "Il progetto nomade",
        subtitle: "facciamo insieme un progetto reale",
      },
      {
        title: "Mettiamo in pratica",
        subtitle: "le tecnologie viste a lezione",
      },
      {
        title: "Code review",
        subtitle: "per migliorare il tuo codice",
      },
      {
        title: "Pair programming",
        subtitle: "per accrescere le tue competenze",
      },
    ],
    linkLabel: "Scopri il progetto",
    shadowClass: "shadow-upperYellow",
    textColor: "text-myYellow",
    arrowColor: "#FFCC00",
  },
];

const Arrow = (props: any) => (
  <svg
    width="25"
    height="35"
    viewBox="0 0 25 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="7.2561"
      width="24.7487"
      height="10.2617"
      transform="rotate(45 7.2561 0)"
      fill="currentColor"
    />
    <rect
      x="24.7561"
      y="17.5"
      width="24.7487"
      height="10.2617"
      transform="rotate(135 24.7561 17.5)"
      fill="currentColor"
    />
  </svg>
);
