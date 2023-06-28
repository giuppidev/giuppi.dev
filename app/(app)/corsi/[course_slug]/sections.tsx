"use client";
import { Database } from "@/types/supabase";
import Lessons from "./lessons";

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
    <div className="max-w-7xl">
      <div className="max-w-3xl  text-xl">
        <div dangerouslySetInnerHTML={{ __html: course.description || "" }} />
      </div>
      {course.product_type === "course" && (
        <Lessons lessons={lessons as Lesson[]} />
      )}
    </div>
  );
}
