import ProjectCard from "./card";
import { Tags } from "./tags";

export default function ProjectHero() {
  return (
    <div className=" isolate  bg-myYellow border-b-4 border-b-gray-800">
      <div className="relative mx-auto max-w-7xl px-6 py-8  lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <div className="mx-auto max-w-7xl lg:mx-0 lg:flex-auto  space-y-5 flex flex-col-reverse lg:flex-row gap-4 justify-between">
          <div className="flex flex-col gap-4 justify-between">
            <h1 className=" mt-2 max-w-2xl text-3xl  tracking-tight text-gray-900 sm:text-8xl leading-8 hidden lg:block ">
              Creiamo il &quot;progetto nomade&quot;
            </h1>
            <div className="space-y-2">
              <h1 className="font-semibold text-3xl">Argomenti:</h1>
              <Tags
                tags={[
                  "typescript",
                  "ai",
                  "next.js",
                  "react",
                  "openai",
                  "viaggi",
                  "api",
                ]}
              />
            </div>
          </div>
          <div className="mt-16 sm:mt-2 lg:mt-10 lg:flex-shrink-0 ">
            <h1 className=" mb-4 text-4xl font-semibold tracking-tight text-gray-900 sm:text-7xl  block lg:hidden ">
              Partecipa
            </h1>

            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  );
}
