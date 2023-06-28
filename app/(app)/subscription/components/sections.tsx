"use client";
import { Database } from "@/types/supabase";

type Course = Database["public"]["Tables"]["products"]["Row"];
type Lesson = Database["public"]["Tables"]["lessons"]["Row"];

export default function Description() {
  return (
    <div className="max-w-7xl">
      <div className="max-w-3xl  text-xl"></div>
      <div></div>
    </div>
  );
}
