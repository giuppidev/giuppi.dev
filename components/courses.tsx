"use client";

import { Button } from "@/components/button";
import CourseCard from "@/components/course";
import { Database } from "@/types/supabase";
import { _ } from "drizzle-orm/column.d-66a08b85";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import MasterclassCard from "./masterclass-card";
import MasterclassRow from "./masterclass-row";

type Course = Database["public"]["Tables"]["products"]["Row"];

export type CourseType = "all" | "course" | "masterclass";

interface CoursesProps {
  courses: Course[] | null;
  type?: CourseType;
}
export default function CoursesList({ courses, type }: CoursesProps) {
  const [filter, setFilter] = useState<CourseType>(type || "all");

  const courseList =
    courses?.filter((course) => {
      return course.product_type === "course";
    }) || [];

  const masterclassList =
    courses?.filter((course) => {
      return course.product_type === "masterclass";
    }) || [];

  const today = new Date();

  return (
    <div className="mb-8">
      <div className="  bg-white border-b-4 border-b-gray-900 space-y-2 pt-4 pb-4">
        <div className=" space-y-2 max-w-7xl mx-auto flex gap-2 items-center px-6 lg:px-8">
          <div className="flex gap-4 flex-wrap">
            {types?.map((type, key) => {
              return (
                <button
                  onClick={() => setFilter(type.value)}
                  key={key}
                  className={twMerge(
                    type.color,
                    "shadow-brutalXl px-2 py-1 rounded-full border-4 border-gray-900  font-semibold",
                    filter === type.value
                      ? "shadow-brutalPressed translate-y-1"
                      : ""
                  )}
                >
                  {type.label}
                </button>
              );
            })}
          </div>{" "}
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-8">
        <div className="flex flex-col gap-16">
          {(filter === "all" || filter === "course") && (
            <div>
              <div className="font-semibold text-5xl">I corsi</div>
              <ul
                role="list"
                className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3  
          "
              >
                {courseList.map((course, key) => (
                  <CourseCard course={course} key={key} />
                ))}
              </ul>
            </div>
          )}
          {(filter === "all" || filter === "masterclass") && (
            <div className="">
              <div className="font-semibold text-5xl">Le masterclass</div>
              <ul
                role="list"
                className="mx-auto mt-10 grid max-w-2xl grid-cols-1  gap-4 sm:gap-x-10  lg:mx-0 lg:max-w-none  
          "
              >
                {masterclassList
                  .filter((m) => {
                    const masterclassStartDate = new Date(m.start_date || "");
                    return today > masterclassStartDate;
                  })
                  .map((course, key) => (
                    <MasterclassRow course={course} key={key} />
                  ))}
              </ul>
              <div className="font-semibold text-2xl pt-8">Prossimamente:</div>
              <ul
                role="list"
                className="mx-auto mt-4 grid max-w-2xl  gap-4 grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-4  
          "
              >
                {masterclassList
                  .filter((m) => {
                    const masterclassStartDate = new Date(m.start_date || "");
                    return today < masterclassStartDate;
                  })
                  .map((course, key) => (
                    <MasterclassCard course={course} key={key} />
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const types: { label: string; value: CourseType; color: string }[] = [
  {
    label: "tutti",
    value: "all",
    color: "bg-green-200",
  },
  {
    label: "corsi",
    value: "course",
    color: "bg-red-200",
  },
  {
    label: "masterclass",
    value: "masterclass",
    color: "bg-blue-200",
  },
];

const tags = [
  {
    name: "all",
    color: "bg-white",
  },
  {
    name: "javascript",
    color: "bg-red-200",
  },
  {
    name: "typescript",
    color: "bg-blue-200",
  },
  {
    name: "react",
    color: "bg-yellow-200",
  },
  {
    name: "nomade digitale",
    color: "bg-green-200",
  },
  {
    name: "freelance",
    color: "bg-slate-200",
  },
  {
    name: "nextjs",
    color: "bg-violet-200",
  },
];
