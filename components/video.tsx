"use client";
import { Button } from "@/components/button";
import { Dialog, Transition } from "@headlessui/react";
import { PlayIcon } from "@heroicons/react/24/solid";
import { Fragment, useState } from "react";
export function YoutubeVideo({ id }: { id: string }) {
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
                    src={`https://www.youtube.com/embed/${id}?controls=0&autoplay=true`}
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
