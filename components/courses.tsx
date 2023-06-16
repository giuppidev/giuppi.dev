"use client";

import { Button } from "@/components/button";
import CourseCard from "@/components/course";
import { Database } from "@/types/supabase";
import { _ } from "drizzle-orm/column.d-66a08b85";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type Course = Database["public"]["Tables"]["products"]["Row"];

type CourseType = "all" | "course" | "masterclass";

interface CoursesProps {
  courses: Course[] | null;
}
export default function CoursesList({ courses }: CoursesProps) {
  const [filter, setFilter] = useState<CourseType>("all");

  const [filteredTags, setFilteredTags] = useState<string[]>(["all"]);

  const filteredCourses =
    courses?.filter((course) => {
      if (filter === "all") {
        return (
          course &&
          (filteredTags[0] === "all" ||
            course.tags?.some((tag) => filteredTags.includes(tag)))
        );
      }
      return (
        course.product_type === filter &&
        (filteredTags[0] === "all" ||
          course.tags?.some((tag) => filteredTags.includes(tag)))
      );
    }) || [];

  const toggleTags = (tag: string) => {
    if (tag === "all") {
      setFilteredTags(["all"]);
    } else if (filteredTags.includes(tag)) {
      if (filteredTags.length === 1) {
        setFilteredTags(["all"]);
      } else {
        setFilteredTags(filteredTags.filter((t) => t !== tag && t !== "all"));
      }
    } else {
      setFilteredTags([...filteredTags, tag].filter((t) => t !== "all"));
    }
  };

  return (
    <div className="">
      <div className="  bg-white border-b-4 border-b-gray-900 space-y-2 pt-4 pb-4">
        <div className=" space-y-2 max-w-7xl mx-auto flex gap-2 items-center px-6 lg:px-8">
          <div className="flex gap-4 flex-wrap">
            {tags?.map((tag, key) => {
              return (
                <button
                  onClick={() => toggleTags(tag.name)}
                  key={key}
                  className={`${
                    tag.color
                  } shadow-brutal px-2 py-1 rounded-full border-4 border-gray-900  font-semibold ${
                    filteredTags.includes(tag.name)
                      ? "shadow-brutalPressed translate-y-1"
                      : ""
                  }`}
                >
                  {tag.name}
                </button>
              );
            })}
          </div>{" "}
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-8">
        <div className="flex gap-2   flex-wrap mt-0">
          {types.map((type, key) => (
            <Button
              onClick={() => setFilter(type.value)}
              key={key}
              className={twMerge(
                `  text-base md:text-2xl py-1 md:py-2 `,
                filter === type.value
                  ? "bg-myGreen text-white shadow-brutalPressed translate-y-1"
                  : ""
              )}
            >
              {type.label}
            </Button>
          ))}
        </div>
        <ul
          role="list"
          className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, key) => (
              <CourseCard course={course} key={key} />
            ))
          ) : (
            <div>nessun corso trovato con questi filtri.</div>
          )}
        </ul>
      </div>
    </div>
  );
}

const types: { label: string; value: CourseType }[] = [
  {
    label: "Tutti",
    value: "all",
  },
  {
    label: "Corsi",
    value: "course",
  },
  {
    label: "Masterclass",
    value: "masterclass",
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
    color: "bg-blue-200",
  },
  {
    name: "nomade digitale",
    color: "bg-blue-200",
  },
  {
    name: "freelance",
    color: "bg-blue-200",
  },
  {
    name: "nextjs",
    color: "bg-blue-200",
  },
];
