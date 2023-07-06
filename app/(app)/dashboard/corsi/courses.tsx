"use client";

import { Button } from "@/components/button";
import CourseCard from "./course";
import { Database } from "@/types/supabase";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type Course = Database["public"]["Tables"]["products"]["Row"];

interface CoursesProps {
  courses: Course[];
}
export default function CoursesList({ courses }: CoursesProps) {
  const [filter, setFilter] = useState<"all" | "course" | "masterclass">("all");

  const filteredCourses = courses
    ?.filter((course) => course !== null)
    .filter((course) => {
      if (filter === "all") {
        return course;
      }
      return course?.product_type === filter;
    });

  return (
    <div className="bg-gray-100 py-8 w-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex gap-2 overflow-y-hidden py-1 flex-wrap">
          <Button
            onClick={() => setFilter("all")}
            className={twMerge(
              `  text-base md:text-2xl py-1 md:py-2 `,
              filter === "all" ? "bg-red-600 text-white" : ""
            )}
          >
            Tutti
          </Button>
          <Button
            onClick={() => setFilter("course")}
            className={twMerge(
              `  text-base md:text-2xl py-1 md:py-2 `,
              filter === "course" ? "bg-red-600 text-white" : ""
            )}
          >
            Corsi
          </Button>
          <Button
            onClick={() => setFilter("masterclass")}
            className={twMerge(
              `  text-base md:text-2xl py-1 md:py-2 `,
              filter === "masterclass" ? "bg-red-600 text-white" : ""
            )}
          >
            Masterclass
          </Button>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ul
          role="list"
          className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {filteredCourses?.length > 0 ? (
            filteredCourses.map((course, key) => (
              <CourseCard course={course} key={key} />
            ))
          ) : (
            <div>Qui troverai le registrazioni dei corsi.</div>
          )}
        </ul>
      </div>
    </div>
  );
}
