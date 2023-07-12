"use client";
import { Database } from "@/types/supabase";
import { useEffect, useState } from "react";
import { CourseStatus } from "./page";

type Course = Database["public"]["Tables"]["products"]["Row"];

interface InfoProps {
  course: Course;
  courseState: CourseStatus;
}

const InfoCard = ({ course, courseState }: InfoProps) => {
  return (
    <div
      className={` bg-white w-full lg:w-96 h-fit   transition-all p-5 border-4 border-gray-900 shadow-brutal mb-8`}
    >
      <h1 className="font-semibold text-5xl pb-4">Overview</h1>
      <div className="flex flex-col h-full gap-2">
        <div>
          <div className=" text-lg">insegnante</div>
          <div className="flex gap-2 items-center">
            <div className="text-3xl font-semibold">Giuseppe Funicello</div>
          </div>
        </div>
        <div>
          <div className=" text-lg">livello</div>
          <div className="flex gap-2 items-center">
            <div className="text-3xl font-semibold capitalize">
              {course.level}
            </div>
          </div>
        </div>
        <div>
          <div className=" text-lg">tipologia</div>
          <div className="flex gap-2 items-center">
            <div className="text-3xl font-semibold">
              {course.product_type === "course"
                ? "Corso pratico"
                : course.product_type}
            </div>
          </div>
        </div>

        <StartDate date={course.start_date || ""} courseState={courseState} />
        {course.product_type === "course" && (
          <div>
            <div className=" text-lg">durata</div>
            <div className="flex gap-2 items-center">
              <div className="text-3xl font-semibold capitalize">
                {course.lessons_count} lezioni
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoCard;

const StartDate = ({
  date,
  courseState,
}: {
  date: string;
  courseState: CourseStatus;
}) => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const lessonDate = new Date(date || "");

    const lessonDatetime = new Intl.DateTimeFormat("it-IT", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(lessonDate);

    setFormattedDate(lessonDatetime);
  }, []);

  return (
    <div>
      <div className=" text-lg">data inizio</div>
      <div className="flex gap-2 items-center">
        <div className="text-2xl font-semibold">
          {courseState === "new"
            ? formattedDate
            : courseState === "inprogress"
            ? "In corso"
            : "Finito"}
        </div>
      </div>
    </div>
  );
};
