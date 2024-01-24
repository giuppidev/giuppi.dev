"use client";

import { LinkButton } from "@/components/link";
import { AcademicCapIcon } from "@heroicons/react/24/solid";

export default function Cta() {
  return (
    <div
      className="font-worksans relative isolate py-20  bg-myYellow border-b-4 border-b-gray-800"
      id="about-me"
    >
      <div className="mx-auto  px-6 lg:px-8 ">
        <div className="mx-auto max-w-3xl  ">
          <p className=" text-xl font-normal  tracking-tight text-gray-900 sm:text-5xl lg:text-center">
            Dai una svolta alla tua carriera.
          </p>
          <p className=" text-xl font-semibold pt-2  tracking-tight text-gray-900 sm:text-5xl lg:text-center">
            Code like a senior 🚀
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl pt-10 flex  lg:px-0   justify-center  ">
        <LinkButton
          href="#subscription"
          className="bg-green-300 text-black w-fit font-medium flex gap-2 items-center whitespace-nowrap"
        >
          Entra subito <AcademicCapIcon className="h-8 w-8" />{" "}
          <ArrowIcon color=" #000" />
        </LinkButton>
      </div>
    </div>
  );
}

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
