import { ArrowIcon } from "@/components/course";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { CommandLineIcon, PuzzlePieceIcon } from "@heroicons/react/24/solid";
export default function Features() {
  return (
    <div className="px-8 border-b-4 border-gray-900 bg-cyan-500 ">
      <div className="mx-auto max-w-4xl lg:text-center py-12">
        <p className=" text-5xl font-semibold  tracking-tight text-gray-900 sm:text-7xl">
          Where to start?
        </p>
      </div>
      <dl
        className="mx-auto max-w-7xl  grid  grid-cols-1 gap-x-8 gap-y-4 
  lg:grid-cols-3 mb-16"
      >
        {features.map((feature) => (
          <a
            href="mailto:info@giuppi.dev"
            key={feature.name}
            className="flex flex-col justify-between  px-3 py-10  border-4 border-gray-900 bg-white rounded-3xl transition-all hover:shadow-brutal hover:-translate-y-2 hover:-translate-x-2"
          >
            <dt className="flex flex-col  gap-2 text-xl font-semibold leading-7 h-full ">
              {feature.icon}
              <div className="rounded-sm flex gap-2 items-center">
                <span className="py-1 text-4xl">{feature.name}</span>
              </div>
              <span className="font-normal">{feature.description}</span>{" "}
              <div className="flex gap-2 mt-4 items-end space-x-3  flex-grow  font-semibold text-xl ">
                <div className="flex gap-2 items-center hover:underline">
                  {feature.linkLabel}
                  <ArrowIcon />
                </div>
              </div>
            </dt>
          </a>
        ))}
      </dl>
    </div>
  );
}

const PuzzleIcon = () => {
  return (
    <div className="bg-red-400 px-2 py-1 w-fit border-4 border-gray-900 shadow-brutal mb-6">
      <PuzzlePieceIcon className="h-24 w-24  text-gray-900" />
    </div>
  );
};

const CodeIcon = () => {
  return (
    <div className="bg-yellow-300 px-2 py-1 w-fit border-4 border-gray-900 shadow-brutal mb-6">
      <CommandLineIcon className="h-24 w-24  text-gray-900 " />
    </div>
  );
};
const NomadIcon = () => {
  return (
    <div className="bg-green-400 px-2 py-1 w-fit border-4 border-gray-900 shadow-brutal mb-6">
      <GlobeAltIcon className="h-24 w-24  text-gray-900 " />
    </div>
  );
};

const features = [
  {
    name: "Start from Scratch",
    description:
      "New to all this? Scratch is our game plan. Think of it as digital building blocks for crafting interactive stories, games, animations. Don't worry about XP – just bring your curiosity. Let's set sail on a creative coding adventure together!",
    href: "/corsi",
    icon: <PuzzleIcon />,
    linkLabel: "Contact me",
  },
  {
    name: "Time to code!",
    description:
      "Python's our trusty sidekick. We'll dive into scripting, apps – and don't stress about the technical stuff, Python's got an easy-peasy syntax. Join me in the Python party and let's craft some seriously cool programs, side by side!",
    href: "/mentorship",
    icon: <CodeIcon />,
    linkLabel: "Contact me",
  },
  {
    name: "Let's web",
    description:
      "The web's our playground. Think websites, web apps. HTML, CSS, JavaScript (or even more) – we'll shape the online world step by step. Let's build, conquer, and leave our digital mark!",
    href: "/corsi",
    icon: <NomadIcon />,
    linkLabel: "Contact me",
  },
];
