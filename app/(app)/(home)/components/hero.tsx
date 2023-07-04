"use client";

import { Button } from "@/components/button";
import PlayIcon from "@heroicons/react/24/outline/PlayIcon";
import { CursorIcon } from "./cursor";
import { JSIcon } from "./js";
import { PlaneIcon } from "./plane";
import { LinkButton } from "@/components/link";

export default function Hero() {
  return (
    <div className="font-worksans relative isolate  bg-myYellow border-b-4 border-b-gray-800">
      <div className="mx-auto max-w-7xl    lg:px-0 py-8 lg:py-24  lg:flex items-center lg:gap-x-10 ">
        <div className="mx-auto max-w-7xl lg:mx-0 lg:flex-auto px-4">
          <h1 className="  max-w-2xl text-5xl font-semibold lg:font-medium tracking-tight text-gray-900 lg:text-8xl leading-tight ">
            Sono un programmatore nomade.
          </h1>
          <p className="mt-2  max-w-2xl text-xl leading-8 text-gray-800">
            Mi chiamo Giuppi, sono un developer da 10+ anni, specializzato in
            Frontend Web Development, e vivo da nomade digitale.
          </p>
          <div className="mt-8 -ml-2 flex gap-2 ">
            <LinkButton
              href="#subscription"
              className="bg-myGreen text-white font-medium flex gap-2 items-center"
            >
              La mia academy <ArrowIcon />
            </LinkButton>
            {/* <Button onClick={() => {}} className="bg-red-700 text-white">
              <PlayIcon className="text-white w-8 h-8" />
            </Button> */}
          </div>
        </div>
        <div className=" lg:pl-16 mt-28  lg:mt-10 flex lg:block justify-center w-full px-8">
          <div className="relative flex flex-col h-80  lg:h-96 w-80  lg:w-96  bg-amber-100 rounded border-4 border-gray-900  shadow-brutal ">
            <div className="bg-blue-300 h-8 border-b-4 border-gray-900">
              <div className="flex gap-2 items-center h-full px-2">
                <div className="w-4 border-2 border-gray-900 h-4 rounded-full bg-red-800"></div>
                <div className="w-4 border-2 border-gray-900 h-4 rounded-full bg-yellow-600"></div>
                <div className="w-4 border-2 border-gray-900 h-4 rounded-full bg-green-700"></div>
              </div>
            </div>
            <img
              src="https://res.cloudinary.com/de30mupo1/image/upload/c_limit,h_753,q_80/v1687969988/giuppi.dev/me2_tyhc5m.png"
              className="rounded-b absolute -bottom-1 left-4 h-[110%] w-[75%]  lg:h-[135%] lg:w-[90%] drop-shadow-hero"
              width={200}
            />
            <div className="hidden md:block absolute top-36 -right-8 lg:-right-24">
              <JSIcon className="w-32 h-32" />
            </div>
            <div className="absolute top-16 p-2 -left-8 lg:-left-8 bg-rose-200 rounded-3xl rounded-br-xl border-4 border-gray-900 shadow-[5px_5px_0px_0px_#000]">
              <PlaneIcon className="w-20 lg:w-24 h-20 lg:h-24 text-gray-900" />
            </div>
            <div className="absolute -top-24 lg:-top-28 p-2 px-4 right-1 lg:-right-14 bg-lime-200 font-semibold text-lg lg:text-2xl rounded-full  border-4 border-gray-900 shadow-[5px_5px_0px_0px_#000]">
              Giuppi
            </div>
            <div className=" absolute -top-16 lg:-top-20 p-2 right-20 lg:right-10 font-semibold text-2xl rotate-[180deg]">
              <CursorIcon className="h-8 w-8 lg:h-12 lg:w-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ArrowIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.8982 10.6436L14.242 13.2998C14.001 13.5408 14.001 13.95 14.242 14.191C14.483 14.432 14.8921 14.432 15.1332 14.191L19.1473 10.1768L19.3241 10L19.1473 9.82327L15.0973 5.77327C14.8563 5.53225 14.4472 5.53225 14.2062 5.77327C13.9651 6.01429 13.9651 6.42341 14.2062 6.66443L16.8982 9.35652L2.53758 9.37375C2.53752 9.37375 2.53746 9.37375 2.53741 9.37375L16.8982 10.6436ZM16.8982 10.6436L2.53758 10.6264C2.53752 10.6264 2.53746 10.6264 2.5374 10.6264L16.8982 10.6436Z"
      fill="#fff"
      stroke="#fff"
      strokeWidth="0.5"
    />
  </svg>
);
