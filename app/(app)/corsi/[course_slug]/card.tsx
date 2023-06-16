"use client";
import { useSupabase } from "@/app/supabase-provider";
import { Button } from "@/components/button";
import { LinkButton } from "@/components/link";
import { Database } from "@/types/supabase";
import { Dialog, Transition } from "@headlessui/react";
import { PlayIcon } from "@heroicons/react/24/solid";
import { Fragment, useState } from "react";

type Course = Database["public"]["Tables"]["products"]["Row"];

interface CourseProps {
  course: Course;
  alreadyOrdered: boolean;
}

const CourseCard = ({ course, alreadyOrdered }: CourseProps) => {
  const linkLabel =
    course.product_type === "course"
      ? "Acquista il corso "
      : "Acquista la masterclass ";

  return (
    <div
      className={` bg-white w-full lg:w-96  transition-all p-5 border-4 border-gray-900 shadow-brutal`}
    >
      <div className="flex flex-col h-full">
        <Video />
        {course.discount ? (
          <div className=" text-3xl mb-3 font-semibold mt-2 flex justify-center items-center gap-1">
            <div className="font-extrabold text-4xl">€ {course.price}</div>
            <div className="text-gray-600 text-lg line-through ">€ 199</div>
            <div className="font-extrabold text-lg text-white bg-red-600  border-2 border-gray-900 px-1">
              -{course.discount}%
            </div>
          </div>
        ) : (
          <div className=" text-3xl mb-3 font-semibold mt-2 flex justify-center">
            <div className="font-extrabold font-4xl">€ {course.price}</div>
          </div>
        )}

        {alreadyOrdered ? (
          <LinkButton
            className="bg-myGreen text-white font-semibold"
            href={`/dashboard/corsi`}
          >
            Vai al corso
          </LinkButton>
        ) : (
          <LinkButton
            className="bg-myGreen text-white font-semibold"
            href={`/checkout?product_id=${course.id}`}
          >
            {linkLabel}
          </LinkButton>
        )}
      </div>
    </div>
  );
};

export default CourseCard;

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
