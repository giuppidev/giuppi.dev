"use client";
import { Database } from "@/types/supabase";
import Link from "next/link";
import { useEffect, useState } from "react";

type Course = Database["public"]["Tables"]["products"]["Row"];

interface CourseProps {
  course: Course;
}

const MasterclassCard = ({ course }: CourseProps) => {
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

  const linkLabel = "Dettagli";

  return (
    <Link
      href={`/corsi/${course.slug}/`}
      className={` bg-white  hover:drop-shadow-[8px_8px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all p-5 border-4 border-gray-900 grid grid-rows-[subgrid] row-[span_3] gap-0`}
    >
      <div className="relative bg-white  w-full">
        <img src={course.cover_url || ""} alt="copertina corso"></img>
      </div>

      {/* <h4 className=" text-2xl mb-3 font-semibold mt-2">{course.name}</h4> */}
      <div className="text-sm py-2">{formattedDate}</div>

      <div className="flex gap-2 items-end space-x-3  flex-grow text-secondary  text-xl ">
        {linkLabel}
        <ArrowIcon />
      </div>
    </Link>
  );
};

export default MasterclassCard;

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
