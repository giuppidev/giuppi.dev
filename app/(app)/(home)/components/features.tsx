import { LinkButton } from "@/components/link";
import {
  AcademicCapIcon,
  CodeBracketSquareIcon,
} from "@heroicons/react/24/solid";

export default function Features() {
  return (
    <div className="px-8 border-b-4 border-gray-900 bg-cyan-500 " id="features">
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
          <div
            key={feature.name}
            className="flex flex-col justify-between  px-8 py-10  border-4 border-gray-900 bg-white  transition-all md:shadow-brutal md:-translate-y-2 md:-translate-x-2"
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
              </div>{" "}
            </div>
            <LinkButton
              href="#subscription"
              className={`${feature.linkColor} text-lg lg:text-xl  w-fit mt-8 text-black font-medium flex gap-2 items-center whitespace-nowrap`}
            >
              {feature.linkLabel} {feature.linkIcon}
              <ArrowIcon color=" #000" />
            </LinkButton>
          </div>
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
        subtitle: "a tutti i contenuti già pubblicati",
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
    linkLabel: "Studia con me",
    shadowClass: "shadow-upperBlue",
    textColor: "text-cyan-500",
    linkColor: "bg-cyan-500",
    linkIcon: <AcademicCapIcon className="h-8 w-8" />,
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
    linkLabel: "Programma con me",
    shadowClass: "shadow-upperYellow",
    textColor: "text-myYellow",
    linkColor: "bg-myYellow",
    linkIcon: <CodeBracketSquareIcon className="h-8 w-8" />,
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

const ArrowIcon = ({ color = "#fff" }: { color?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.8982 10.6436L14.242 13.2998C14.001 13.5408 14.001 13.95 14.242 14.191C14.483 14.432 14.8921 14.432 15.1332 14.191L19.1473 10.1768L19.3241 10L19.1473 9.82327L15.0973 5.77327C14.8563 5.53225 14.4472 5.53225 14.2062 5.77327C13.9651 6.01429 13.9651 6.42341 14.2062 6.66443L16.8982 9.35652L2.53758 9.37375C2.53752 9.37375 2.53746 9.37375 2.53741 9.37375L16.8982 10.6436ZM16.8982 10.6436L2.53758 10.6264C2.53752 10.6264 2.53746 10.6264 2.5374 10.6264L16.8982 10.6436Z"
      fill={color}
      stroke={color}
      strokeWidth="0.5"
    />
  </svg>
);
