import { Database } from "@/types/supabase";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

type Lesson = Database["public"]["Tables"]["lessons"]["Row"];

export default function Lessons({ lessons }: { lessons: Lesson[] }) {
  return (
    <div className="mt-8 max-w-3xl">
      <h1 className="text-5xl font-semibold mb-6">Programma del corso</h1>
      <dl className=" divide-y-4 divide-gray-900">
        {lessons.map((lesson, k) => (
          <Lesson lesson={lesson} key={k} k={k} />
        ))}
      </dl>
    </div>
  );
}

const Lesson = ({ lesson, k }: { lesson: Lesson; k: number }) => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const lessonDate = new Date(lesson.event_timestamp || "");
    const now = new Date();
    if (now > lessonDate) {
      return;
    }

    const lessonDatetime = new Intl.DateTimeFormat("it-IT", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(lessonDate);

    setFormattedDate(lessonDatetime);
  }, []);

  return (
    <div className="text-lg leading-7  space-y-1 py-8" key={k}>
      <span className=" text-3xl">
        <span className="font-semibold">Lezione {k + 1}</span>{" "}
        {/* {lesson.name} */}
      </span>
      {!formattedDate && <div className="py-4">{lesson.description}</div>}

      {formattedDate && (
        <div className="flex gap-2 items-center text-base">
          <CalendarDaysIcon className="w-5 h-5" />
          <span>Disponibile dal {formattedDate}</span>
        </div>
      )}
    </div>
  );
};
