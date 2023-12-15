"use client";

import { Button } from "@/components/button";
import PlayIcon from "@heroicons/react/24/outline/PlayIcon";
import { CursorIcon } from "./cursor";
import { JSIcon } from "./js";
import { PlaneIcon } from "./plane";
import { LinkButton } from "@/components/link";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="font-worksans relative isolate  bg-myYellow border-b-4 border-b-gray-800">
      <div className="mx-auto max-w-7xl    lg:px-0 py-8 lg:py-24  lg:grid grid-cols-2 items-center lg:gap-x-10 ">
        <div className="mx-auto max-w-7xl lg:mx-0 lg:flex-auto px-4">
          <h1 className="  max-w-2xl text-5xl font-semibold lg:font-medium tracking-tight text-gray-900 lg:text-8xl leading-tight ">
            Continuous developing
          </h1>
          <p className="mt-2  max-w-2xl text-xl leading-8 text-gray-800">
            Mi chiamo Giuppi, sono un developer da 10+ anni, specializzato in
            Web Development, e vivo da nomade digitale.
          </p>
          <div className="mt-8 -ml-2 flex gap-4 lg:gap-6 flex-col  ">
            <LinkButton
              href="#subscription"
              className="bg-green-300 text-black w-fit font-medium flex gap-2 items-center whitespace-nowrap"
            >
              Studia con me <AcademicCapIcon className="h-8 w-8" />{" "}
              <ArrowIcon color=" #000" />
            </LinkButton>
            <span className="flex gap-1 items-end text-lg ml-2">
              <span>e</span>
              <Link
                href={process.env.NEXT_PUBLIC_DISCORD_SERVER || ""}
                target="_blank"
                className="bg-myYellow text-gray-900 w-fit font-semibold hover:underline   flex gap-2 items-end whitespace-nowrap"
              >
                accedi alla mia community{" "}
                <svg
                  width="32px"
                  height="32px"
                  viewBox="0 -28.5 256 256"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                  className="bg-white rounded-full p-1 shadow-brutalSmall"
                >
                  <g>
                    <path
                      d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                      fill="#5865F2"
                      fillRule="nonzero"
                    ></path>
                  </g>
                </svg>{" "}
              </Link>
            </span>
          </div>
        </div>
        <div className=" lg:pl-16 mt-32  lg:mt-10 flex lg:block justify-center w-full px-8">
          <div className="relative flex flex-col h-80  lg:h-96 w-80  lg:w-96  bg-amber-100 rounded border-4 border-gray-900  shadow-brutal ">
            <div className="bg-blue-300 h-8 border-b-4 border-gray-900">
              <div className="flex gap-2 items-center h-full px-2">
                <div className="w-4 border-2 border-gray-900 h-4 rounded-full bg-red-800"></div>
                <div className="w-4 border-2 border-gray-900 h-4 rounded-full bg-yellow-600"></div>
                <div className="w-4 border-2 border-gray-900 h-4 rounded-full bg-green-700"></div>
              </div>
            </div>
            <img
              src="https://res.cloudinary.com/de30mupo1/image/upload/c_limit,h_753,q_80,f_auto/v1687969988/giuppi.dev/me2_tyhc5m.png"
              className="rounded-b absolute -bottom-1 left-8 lg:left-4  drop-shadow-hero w-[70%] lg:w-[90%]"
              alt="giuppi"
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
