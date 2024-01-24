"use client";

import { LinkButton } from "@/components/link";
import { getVideoPath } from "@/utils/video-streaming";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="font-worksans relative isolate  bg-myYellow border-b-4 border-b-gray-800">
      <div className="mx-auto max-w-7xl    lg:px-0 py-8 lg:py-20  lg:grid grid-cols-[1fr_auto] items-center lg:gap-x-6 ">
        <div className="mx-auto max-w-7xl lg:mx-0 lg:flex-auto px-4">
          <h1 className="  max-w-3xl text-5xl font-semibold lg:font-medium tracking-tight text-gray-900 lg:text-8xl leading-tight ">
            Continuous developing
          </h1>
          <p className="mt-2  max-w-3xl text-xl lg:text-3xl leading-8 text-gray-800 font-bold">
            CODE LIKE A SENIOR 🚀
          </p>
          <p className="mt-6  max-w-2xl text-xl leading-8 text-gray-800">
            Vorresti un <span className="font-semibold">senior developer</span>{" "}
            come compagno di banco che ti{" "}
            <span className="font-semibold">guidi nello studio</span> e ti
            permetta di rimanere{" "}
            <span className="font-semibold">sempre aggiornato</span>?
          </p>
          <p className="mt-2  max-w-2xl text-xl leading-8 text-gray-800">
            Benvenuto nella prima{" "}
            <span className="font-semibold">community di studio</span> per
            developers che ti permette di dare un{" "}
            <span className="font-semibold">boost alla tua carriera</span> di
            coder.
          </p>
        </div>
        <div className=" mt-10  flex justify-center  px-4">
          <div className="relative flex flex-col  w-80  lg:w-96 max-w-md  bg-amber-100 rounded border-4 border-gray-900  shadow-brutal ">
            <div className="bg-blue-300 h-8 border-b-4 border-gray-900">
              <div className="flex gap-2 items-center h-full px-2">
                <div className="w-4 border-2 border-gray-900 h-4 rounded-full bg-red-800"></div>
                <div className="w-4 border-2 border-gray-900 h-4 rounded-full bg-yellow-600"></div>
                <div className="w-4 border-2 border-gray-900 h-4 rounded-full bg-green-700"></div>
              </div>
            </div>
            <div className="flex gap-4 lg:gap-6  flex-col items-center p-4">
              <div className=" m-4 border-4 border-gray-900 w-full ">
                {showVideo ? (
                  <div style={{ position: "relative", paddingTop: "56.25%" }}>
                    <iframe
                      src={`${getVideoPath(
                        "535b9fb0-c7d6-4f5d-89c3-5827c88ac692"
                      )}?autoplay=true&loop=false&muted=false&preload=true&responsive=true`}
                      loading="lazy"
                      style={{
                        border: "none",
                        position: "absolute",
                        top: 0,
                        height: "100%",
                        width: "100%",
                      }}
                      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                      allowFullScreen={true}
                    ></iframe>
                  </div>
                ) : (
                  <div
                    onClick={() => setShowVideo(true)}
                    className="cursor-pointer"
                  >
                    <img
                      src="https://res.cloudinary.com/de30mupo1/image/upload/v1705840347/giuppi.dev/hero.png"
                      className=""
                      alt="giuppi"
                    />
                  </div>
                )}
              </div>
              <LinkButton
                href="#subscription"
                className="bg-green-300 w-fit mx-8 mb-8 text-black font-medium flex gap-2 items-center whitespace-nowrap"
              >
                Studia con me <AcademicCapIcon className="h-8 w-8" />{" "}
                <ArrowIcon color=" #000" />
              </LinkButton>
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
