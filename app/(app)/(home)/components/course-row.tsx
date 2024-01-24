"use client";
import { Database } from "@/types/supabase";
import { useEffect, useState } from "react";
import { Tags } from "./tags";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

type Course = Database["public"]["Tables"]["products"]["Row"];

interface CourseProps {
  course: Course;
  href?: string;
}

const CourseRow = ({
  course,
  href = `/corsi/${course.slug}/`,
}: CourseProps) => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const lessonDate = new Date(course.start_date || "");
    const now = new Date();

    if (now < lessonDate) {
      {
        const lessonDatetime = new Intl.DateTimeFormat("it-IT", {
          day: "numeric",
          month: "numeric",
          year: "numeric",
        }).format(lessonDate);

        setFormattedDate("📆 Disponibile dal " + lessonDatetime);
      }
    }
  }, []);

  if (!course) {
    return <></>;
  }

  return (
    <div className={`border-b-2 border-gray-900 py-4 last:border-b-0`}>
      <Disclosure>
        <Disclosure.Button>
          <div
            className={`w-full grid grid-cols-[auto_1fr] gap-4 ${
              course.product_type === "course" ? "text-3xl" : "text-xl "
            } items-center`}
          >
            <ChevronRightIcon className="w-10 h-10 ui-open:rotate-90 ui-open:transform" />
            <div className="flex gap-2 items-center">
              <img
                src={course.logo || undefined}
                alt="copertina corso"
                className={`w-16 ${
                  course.product_type === "course" ? "block" : "hidden"
                }`}
              ></img>
              <span className="font-medium text-left">{course.name}</span>
            </div>
          </div>
        </Disclosure.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Disclosure.Panel>
            <div
              className={` bg-white transition-all py-4  grid grid-cols-1 sm:grid-cols-[30fr_70fr] lg:grid-cols-[20fr_80fr] gap-2 lg:gap-8 `}
            >
              <div className="relative bg-white  w-full">
                <img
                  src={course.cover_url || undefined}
                  alt="copertina corso"
                ></img>
              </div>
              <div className="h-full flex flex-col justify-between gap-2">
                <div className="flex flex-col gap-1">
                  <h4 className="flex text-base flex-col justify-between ">
                    {formattedDate || course.short_description}
                  </h4>
                </div>

                <div className="flex gap-2 items-end space-x-3  flex-grow text-secondary  text-xl ">
                  <Tags tags={course.tags} />
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </Transition>
      </Disclosure>
    </div>
  );
};

export default CourseRow;

export const ArrowIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.8982 10.6436L14.242 13.2998C14.001 13.5408 14.001 13.95 14.242 14.191C14.483 14.432 14.8921 14.432 15.1332 14.191L19.1473 10.1768L19.3241 10L19.1473 9.82327L15.0973 5.77327C14.8563 5.53225 14.4472 5.53225 14.2062 5.77327C13.9651 6.01429 13.9651 6.42341 14.2062 6.66443L16.8982 9.35652L2.53758 9.37375C2.53752 9.37375 2.53746 9.37375 2.53741 9.37375L16.8982 10.6436ZM16.8982 10.6436L2.53758 10.6264C2.53752 10.6264 2.53746 10.6264 2.5374 10.6264L16.8982 10.6436Z"
      fill="#282825"
      stroke="#282825"
      strokeWidth="0.5"
    />
  </svg>
);
