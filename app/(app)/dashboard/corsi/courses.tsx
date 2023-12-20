"use client";

import CourseCard from "@/components/course";
import MasterclassRow from "@/components/masterclass-row";
import { Database } from "@/types/supabase";
import { useState } from "react";

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
    <div className="bg-gray-100 py-4 w-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-4">
        <div className="flex flex-col gap-16">
          <div>
            <div className="font-semibold text-5xl">I corsi</div>
            <ul
              role="list"
              className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3  
          "
            >
              {filteredCourses
                .filter((c) => c.product_type === "course")
                .map((course, key) => (
                  <CourseCard course={course} key={key} href={`/dashboard/corsi/${course.slug}`} />
                ))}
            </ul>
          </div>

          <div className="">
            <div className="font-semibold text-5xl">Le masterclass</div>
            <ul
              role="list"
              className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-4  lg:mx-0 lg:max-w-none  
          "
            >
              {filteredCourses
                .filter((c) => c.product_type === "masterclass")
                .map((course, key) => (
                  <MasterclassRow course={course} key={key} href={`/dashboard/corsi/${course.slug}`} />
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
