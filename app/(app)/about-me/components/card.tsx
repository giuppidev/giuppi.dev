"use client";
import { Button } from "@/components/button";
import { LinkButton } from "@/components/link";
import { Dialog, Transition } from "@headlessui/react";
import { PlayIcon } from "@heroicons/react/24/solid";
import { Fragment, useState } from "react";

const AboutCard = () => {
  const github = "https://github.com/giuppidev";
  const youtube = "https://youtube.com/@giuppidev";

  return (
    <div
      className={` bg-white w-full lg:w-96  transition-all p-5 border-4 border-gray-900 shadow-brutal`}
    >
      <div className="flex flex-col h-full gap-4">
        <div className="relative bg-white  w-full  flex justify-center border-4 border-gray-900">
          <img
            src={
              "https://res.cloudinary.com/de30mupo1/image/upload/c_limit,h_753,q_80/v1687969988/giuppi.dev/nomade.png"
            }
            alt="GIUPPI"
            className=" w-full  object-cover"
          />
        </div>

        <div className="flex  gap-2 items-center w-full">
          <LinkButton
            className="bg-green-300 text-black font-semibold text-xl flex-grow"
            href={github}
            target="_blank"
          >
            Github
          </LinkButton>

          <LinkButton
            className="bg-red-300 text-black font-semibold text-xl flex-grow"
            href={youtube}
            target="_blank"
          >
            Youtube
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;

function Video() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="relative bg-red-800 h-48 w-full cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <PlayIcon className="w-40 h-40 m-auto" />
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full flex flex-col items-center  transition-all">
                  <div className="lg:w-1/2 px-4 flex justify-end pb-4">
                    <Button onClick={() => setIsOpen(false)}>Chiudi</Button>
                  </div>
                  <iframe
                    src="https://www.youtube.com/embed/_9R2eBlagnU?controls=0&autoplay=true"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="aspect-video w-full px-4 lg:w-1/2 "
                  ></iframe>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
