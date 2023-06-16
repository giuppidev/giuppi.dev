"use client";
import { Database } from "@/types/supabase";
import { Disclosure, Transition } from "@headlessui/react";
import {
  MinusSmallIcon,
  PlusSmallIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

type Lesson = Database["public"]["Tables"]["lessons"]["Row"];

export default function Lessons({ lessons }: { lessons: Lesson[] }) {
  return (
    <div className="mt-8 max-w-3xl">
      <h1 className="text-5xl font-semibold mb-6">Programma del corso</h1>
      <dl className=" divide-y-4 divide-gray-900">
        {lessons.map((lesson, k) => {
          const lessonDatetime = new Intl.DateTimeFormat("it-IT", {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
          }).format(new Date());

          return (
            <div className="text-lg leading-7  space-y-1 py-8">
              <span className=" text-3xl">
                <span className="font-semibold">lezione {k + 1}:</span>{" "}
                {lesson.name}
              </span>
              <div className="py-4">{lesson.description}</div>

              <div className="flex gap-2 items-center text-base">
                <CalendarDaysIcon className="w-5 h-5" />
                <span>{lessonDatetime}</span>
              </div>
            </div>
          );

          return (
            <Disclosure as="div" key={lesson.id} className="pt-6">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                      <div className="text-lg leading-7 ">
                        <span className="font-semibold text-xl ">
                          Lezione {k + 1}: {lesson.name}
                        </span>
                        <div>
                          <div className="flex gap-2 items-center">
                            <CalendarDaysIcon className="w-6 h-6" />
                            <span>{lessonDatetime}</span>
                          </div>
                        </div>
                      </div>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {lesson.description}
                      </p>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          );
        })}
      </dl>
    </div>
  );
}
