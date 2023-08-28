import { PlusSmallIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const Target = () => {
  return (
    <div className="bg-white border-b-4 border-b-gray-900 box-border">
      <div className="mx-auto  px-6 py-24 lg:px-8 ">
        <div className="mx-auto max-w-7xl  ">
          <p className=" text-5xl font-semibold  tracking-tight text-gray-900 sm:text-7xl lg:text-center">
            How can I help you?
          </p>

          <dl className="mt-10  divide-y-4 divide-gray-900">
            <dt className="flex w-full  gap-8 text-gray-900 ">
              <span className="text-4xl leading-7">
                <PlusIcon />
              </span>
              <div className="flex flex-col gap-2 mb-4">
                <span className="text-3xl lg:text-5xl">1-to-1 lessons</span>
                <span>
                  Ready for personalized guidance? It&apos;s you and me,
                  tackling coding challenges head-on. From decoding errors to
                  brainstorming ideas, we&apos;re in this together. Your coding
                  journey, tailor-made.
                </span>
              </div>
            </dt>
            <dt className="flex w-full  gap-8 text-gray-900 py-8 ">
              <span className="text-4xl leading-7">
                <PlusIcon />
              </span>
              <div className="flex flex-col gap-2">
                <span className="text-3xl lg:text-5xl">Mentorship</span>
                <span>
                  Looking for a coding sage? That&apos;s me! We&apos;ll walk
                  hand in hand as I share insights, tips, and tricks. I&apos;m
                  your coding Yoda, and together, we&apos;ll conquer the tech
                  galaxy.
                </span>
              </div>
            </dt>
            <dt className="flex w-full  gap-8 text-gray-900 pt-4">
              <span className="text-4xl leading-7">
                <PlusIcon />
              </span>
              <div className="flex flex-col gap-2">
                <span className="text-3xl lg:text-5xl">Group classes</span>
                <span>
                  Want to groove with fellow coders? Join our group sessions!
                  It&apos;s like a coding jam – we&apos;ll learn, collaborate,
                  and celebrate each other&apos;s wins. Let&apos;s code and
                  create in harmony!
                </span>
              </div>
            </dt>
          </dl>
        </div>
      </div>
    </div>
  );
};

const PlusIcon = () => {
  return (
    <div className="bg-violet-400 px-2 py-1 w-fit border-4 border-gray-900 shadow-brutal ">
      <PlusSmallIcon className="h-12 w-12 lg:h-24 lg:w-24  text-gray-900" />
    </div>
  );
};
