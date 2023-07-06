"use client";
import { Database } from "@/types/supabase";
import Lessons from "./lessons";
import Masterclass from "./masterclass";

type Course = Database["public"]["Tables"]["products"]["Row"];
type Lesson = Database["public"]["Tables"]["lessons"]["Row"];

export default function Sections({
  course,
  lessons,
}: {
  course: Course;
  lessons: Lesson[];
}) {
  return (
    <div className="max-w-7xl w-full">
      {course.product_type === "masterclass" ? (
        <Masterclass lessons={lessons} />
      ) : (
        <Lessons lessons={lessons as Lesson[]} />
      )}
    </div>
  );
}
