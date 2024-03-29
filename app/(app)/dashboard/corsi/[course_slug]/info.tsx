"use client";
import { Database } from "@/types/supabase";
import { useEffect, useState } from "react";

type Course = Database["public"]["Tables"]["products"]["Row"];

interface InfoProps {
  course: Course;
}

const InfoCard = ({ course }: InfoProps) => {
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
          <div className=" text-lg">tipologia</div>
          <div className="flex gap-2 items-center">
            <div className="text-3xl font-semibold">
              {course.product_type === "course" ? "Corso" : course.product_type}
            </div>
          </div>
        </div>

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
        {course.github_repo && (
          <div>
            <div className=" text-lg">repo</div>
            <div className="flex gap-2 items-center">
              <a
                href={course.github_repo}
                target="_blank"
                className="text-3xl underline text-blue font-semibold capitalize"
              >
                GitHub
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoCard;
