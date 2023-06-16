"use client";

import { Button } from "@/components/button";
import PlayIcon from "@heroicons/react/24/outline/PlayIcon";
import { CursorIcon } from "./cursor";
import { JSIcon } from "./js";
import { PlaneIcon } from "./plane";

export default function Hero() {
  return (
    <div className="font-worksans relative isolate  bg-myYellow border-b-4 border-b-gray-800">
      <div className="mx-auto max-w-7xl    lg:px-0 py-8 lg:py-24  lg:flex items-center lg:gap-x-10 ">
        <div className="mx-auto max-w-7xl lg:mx-0 lg:flex-auto px-4">
          <h1 className="  max-w-2xl text-5xl font-semibold lg:font-medium tracking-tight text-gray-900 lg:text-8xl leading-tight ">
            Diventa un programmatore nomade.
          </h1>
          <p className="mt-2  max-w-2xl text-xl leading-8 text-gray-800">
            Mi chiamo Giuppi, sono un developer da 10+ anni, specializzato in
            Frontend Web Development, e vivo da nomade digitale.
          </p>
          <div className="mt-8 -ml-2 flex gap-2 ">
            <Button onClick={() => {}} className="bg-myGreen text-white">
              Impara con me
            </Button>
            <Button onClick={() => {}} className="bg-red-700 text-white">
              <PlayIcon className="text-white w-8 h-8" />
            </Button>
          </div>
        </div>
        <div className=" lg:pl-16 mt-28  lg:mt-10 l justify-center w-full px-8">
          <div className="relative flex flex-col h-80  lg:h-96 w-80  lg:w-96  bg-amber-100 rounded border-4 border-gray-900  shadow-brutal ">
            <div className="bg-blue-300 h-8 border-b-4 border-gray-900">
              <div className="flex gap-2 items-center h-full px-2">
                <div className="w-4 border-2 border-gray-900 h-4 rounded-full bg-red-800"></div>
                <div className="w-4 border-2 border-gray-900 h-4 rounded-full bg-yellow-600"></div>
                <div className="w-4 border-2 border-gray-900 h-4 rounded-full bg-green-700"></div>
              </div>
            </div>
            <img
              src="images/me2.png"
              className="rounded-b absolute bottom-0 left-8 h-[110%] w-[75%]  lg:h-[130%] lg:w-[85%]"
              width={200}
            />
            <div className="absolute top-36 -right-8 lg:-right-24">
              <JSIcon className="w-32 h-32" />
            </div>
            <div className="absolute top-16 p-2 -left-8 lg:-left-8 bg-rose-200 rounded-3xl rounded-br-xl border-4 border-gray-900 shadow-[5px_5px_0px_0px_#000]">
              <PlaneIcon className="w-20 lg:w-24 h-20 lg:h-24 text-gray-900" />
            </div>
            <div className="absolute -top-24 lg:-top-28 p-2 px-4 right-1 lg:-right-14 bg-lime-200 font-semibold text-lg lg:text-2xl rounded-full  border-4 border-gray-900 shadow-[5px_5px_0px_0px_#000]">
              Giuppi
            </div>
            <div className="absolute -top-16 lg:-top-20 p-2 right-20 lg:right-10 font-semibold text-2xl rotate-[180deg]">
              <CursorIcon className="h-8 w-8 lg:h-12 lg:w-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
