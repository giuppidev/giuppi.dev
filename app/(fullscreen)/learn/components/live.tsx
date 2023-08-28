import { ArrowIcon } from "@/components/course";
import { StarIcon } from "@heroicons/react/24/solid";

export const Live = () => (
  <div className=" py-4 px-8 flex bg-lime-200 justify-between  border-b-4 border-gray-900 text-lg lg:text-5xl">
    <span className=" flex gap-2 items-center">
      <StarIcon className="text-red-500 h-10 stroke-2 stroke-gray-900" />
      prossimo evento live <ArrowIcon />
    </span>
    <span className=" underline">Scopri i corsi e le masterclass</span>
  </div>
);
