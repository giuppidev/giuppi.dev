"use client";

import { Button } from "@/components/button";
import { LinkButton } from "@/components/link";

import { AcademicCapIcon } from "@heroicons/react/24/solid";

export default function Hero() {
  return (
    <div className="font-worksans relative isolate  bg-myYellow border-b-4 border-b-gray-800">
      <div className="mx-auto max-w-7xl    lg:px-0  lg:pb-12  lg:grid grid-cols-2 items-center lg:gap-x-10 ">
        <div className="mx-auto max-w-7xl text-center lg:mx-0 lg:flex-auto px-4">
          <h1 className="  max-w-2xl text-7xl font-semibold lg:font-medium  text-gray-900   ">
            Continuous developing
          </h1>
          <h1 className="  max-w-2xl text-3xl font-semibold lg:font-medium tracking-tight text-gray-900 leading-tight ">
            CODE LIKE A SENIOR
          </h1>
          <p className="mt-2  max-w-2xl text-xl leading-8 text-gray-800">
            Ecco come avere accesso alla scrivania di un coder senior che ti
            condivide in anteprima le più recenti conoscenze in ambito
            programmazione.
          </p>
          <p className="mt-2  max-w-2xl text-xl leading-8 text-gray-800">
            Rimarrai costantemente aggiornato nell’ambito della programmazione
            Web, senza più sentirti abbandonato e senza più patire la solitudine
            dello studio.
          </p>
        </div>
        <div className=" mt-32  lg:mt-10 flex lg:block justify-center w-full ">
          <div className="  mt-8 flex justify-center px-8">
            <div className="relative flex flex-col   lg:w-full  bg-amber-100 rounded border-4 border-gray-900  shadow-brutal ">
              <div className="bg-blue-300 h-8 border-b-4 border-gray-900">
                <div className="flex gap-2 items-center h-full px-2">
                  <div className="w-4 border-2 border-gray-900 h-4 rounded-full bg-red-800"></div>
                  <div className="w-4 border-2 border-gray-900 h-4 rounded-full bg-yellow-600"></div>
                  <div className="w-4 border-2 border-gray-900 h-4 rounded-full bg-green-700"></div>
                </div>
              </div>
              <div className="flex flex-col  gap-4 items-center p-4">
                <div className="relative bg-white  w-full  flex flex-col justify-center border-4 border-gray-900">
                  <img
                    src={
                      "https://res.cloudinary.com/de30mupo1/image/upload/c_limit,h_753,q_80/v1687969988/giuppi.dev/nomade.png"
                    }
                    alt="GIUPPI"
                    className=" w-full  "
                  />{" "}
                </div>
                <div className=" flex gap-4 lg:gap-6 flex-col  ">
                  <LinkButton
                    href="#subscription"
                    className="bg-green-300 text-black w-fit font-medium flex gap-2 items-center whitespace-nowrap"
                  >
                    Studia con me <AcademicCapIcon className="h-8 w-8" />{" "}
                    <ArrowIcon color=" #000" />
                  </LinkButton>
                </div>
              </div>
            </div>
          </div>
        </div>
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
