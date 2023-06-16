"use client";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import { Database } from "@/types/supabase";
import Lessons from "./lessons";
import CourseDescription from "./description";

type Course = Database["public"]["Tables"]["products"]["Row"];
type Lesson = Database["public"]["Tables"]["lessons"]["Row"];

export default function Sections({
  course,
  lessons,
}: {
  course: Course;
  lessons: Lesson[];
}) {
  let [categories] = useState({
    Descrizione: <CourseDescription course={course} />,
    "Lezioni & Date": <Lessons lessons={lessons} />,
  });

  return (
    <div className="max-w-7xl">
      <div className="max-w-3xl  text-xl">{course.description}</div>
      <Lessons lessons={lessons as Lesson[]} />
    </div>
  );

  return (
    <div className="relative pb-5 sm:pb-0">
      <Tab.Group>
        <Tab.List className="flex space-x-4">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                twMerge(
                  selected
                    ? "border-gray-900 text-gray-800"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                  "whitespace-nowrap border-b-4 px-1 pb-4 text-xl font-medium ring-0 focus:outline-none "
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((category, idx) => (
            <Tab.Panel
              key={idx}
              className={twMerge(
                "rounded-xl  p-3",
                "ring-white  focus:outline-none focus:ring-0"
              )}
            >
              {category}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
